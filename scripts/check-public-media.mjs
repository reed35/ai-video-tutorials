#!/usr/bin/env node
// 构建守卫：视频/教程图片必须放 Cloudflare R2（https://media.liuyidaoai.com），不能再进 public/。
// 每次 Vercel 部署都会完整存一份 public/，素材放回来会重新撑爆 Hobby 10GB 部署存储。
// 规则：
//   1. public/ 下任何视频文件 → 失败
//   2. public/brand/ 以外的任何图片 → 失败（站标等站点图标放 public/brand/）
//   3. public/ 下任何单个文件 > 1 MB → 失败
// 新教程素材：先传 R2 的 tutorials/<id>/，lib/tutorials.ts 里照常写 "/tutorials/<id>/..." 路径。

import { readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, relative, sep } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const VIDEO_RE = /\.(mp4|m4v|mov|webm|mkv|avi)$/i;
const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;
const MAX_BYTES = 1024 * 1024;

// 迁移时 R2 上没有的 3 个旧文件（lib/tutorials.ts 未引用），暂时豁免；传上 R2 或确认删除后从这里移除。
const LEGACY_ALLOW = new Set([
  'tutorials/ailifehack-fashion-editorial-board-h3/refs/board.jpg',
  'tutorials/garylau-rei-city-travel-h3/ref-depth-web.mp4',
  'tutorials/pixelaigc-dunhuang-desktop-fail/ref-start-desktop.jpg',
]);

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const problems = [];
for (const abs of walk(publicDir)) {
  const rel = relative(publicDir, abs).split(sep).join('/');
  if (LEGACY_ALLOW.has(rel)) continue;
  const size = statSync(abs).size;
  if (VIDEO_RE.test(rel)) problems.push(`${rel} (视频)`);
  else if (IMAGE_RE.test(rel) && !rel.startsWith('brand/')) problems.push(`${rel} (图片不在 public/brand/)`);
  else if (size > MAX_BYTES) problems.push(`${rel} (${(size / 1048576).toFixed(1)} MB > 1 MB)`);
}

if (problems.length) {
  console.error('\n❌ public/ 里出现了应放 R2 的素材（会被打进每次 Vercel 部署）：');
  for (const p of problems.slice(0, 50)) console.error(`   public/${p}`);
  if (problems.length > 50) console.error(`   …另有 ${problems.length - 50} 个`);
  console.error('\n💡 先上传到 R2（https://media.liuyidaoai.com/<同路径>），再从 public/ 删除。\n');
  process.exit(1);
}
console.log('✅ public/ 无视频/教程图片/大文件（素材在 R2）');
