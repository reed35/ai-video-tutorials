// 视频 / 图片素材托管在 Cloudflare R2（自定义域名），不再放进 Vercel 部署。
// lib/tutorials.ts 里继续写站内路径（"/tutorials/<id>/demo-web.mp4"、根目录旧素材 "/demo-web.mp4" 等），
// 导出时统一加上 MEDIA_BASE。R2 里的对象 key = 站内路径去掉开头的 "/"。
// 站标 /brand/* 仍留在 public/，不加前缀。
export const MEDIA_BASE = "https://media.liuyidaoai.com";

const LOCAL_MEDIA_RE = /^\/(?!brand\/)[^\s"'<>]+\.(?:mp4|jpe?g|png|webp)$/i;

/** 单个路径：站内素材路径 → R2 绝对地址；其它字符串原样返回。 */
export function mediaUrl(path: string): string;
export function mediaUrl(path: string | undefined): string | undefined;
export function mediaUrl(path: string | undefined): string | undefined {
  if (typeof path !== "string" || !LOCAL_MEDIA_RE.test(path)) return path;
  return MEDIA_BASE + path;
}

/** 深度遍历对象/数组，把所有站内素材路径字符串换成 R2 地址（video、poster、image、remix、steps 等字段）。 */
export function withMedia<T>(value: T): T {
  if (typeof value === "string") return mediaUrl(value) as T;
  if (Array.isArray(value)) return value.map((v) => withMedia(v)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = withMedia(v);
    }
    return out as T;
  }
  return value;
}
