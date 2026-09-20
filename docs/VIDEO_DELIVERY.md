# 视频交付标准

## 概述

本站所有教程视频必须经过优化以确保快速加载和流畅播放。每个教程都需要提供优化后的视频文件和海报图。

## 必需文件

每个教程文件夹 `public/tutorials/<id>/` 必须包含:

1. **demo-web.mp4** - 优化后的视频文件
2. **poster.jpg** - 视频海报图（从视频第1秒提取）

## 文件要求

### 视频规格 (demo-web.mp4)

- **最大分辨率**: 1280px（保持原始宽高比）
- **编码**: H.264 (libx264)
- **质量**: CRF 28
- **音频**: AAC, 96kbps
- **流式播放**: 必须启用 faststart（moov atom 在文件开头）
- **推荐大小**: < 4MB
- **硬性限制**: < 8MB

### 海报图规格 (poster.jpg)

- **来源**: 从视频第1秒提取
- **格式**: JPEG
- **质量**: 高质量（q:v 2）

## 使用优化脚本

我们提供了自动化脚本来确保一致的优化:

```bash
./scripts/optimize-demo-web.sh input.mp4 public/tutorials/your-tutorial-id
```

### 示例

```bash
# 优化新教程视频
./scripts/optimize-demo-web.sh raw-footage.mp4 public/tutorials/epic-chase-scene

# 脚本会生成:
# - public/tutorials/epic-chase-scene/demo-web.mp4
# - public/tutorials/epic-chase-scene/poster.jpg
```

### 脚本功能

优化脚本会自动:
- ✅ 缩放视频至合适尺寸（最大1280px）
- ✅ 使用最佳编码设置（H.264, CRF 28）
- ✅ 优化音频（AAC, 96kbps）
- ✅ 启用流式播放（faststart 标志）
- ✅ 生成海报图（第1秒帧）
- ✅ 检查文件大小并发出警告

## 工作流程

### 添加新教程

1. **准备原始视频**
   - 任何格式/分辨率的 mp4 文件
   - 建议时长: 10-30秒

2. **运行优化脚本**
   ```bash
   ./scripts/optimize-demo-web.sh your-raw-video.mp4 public/tutorials/your-tutorial-id
   ```

3. **验证输出**
   - 预览 `demo-web.mp4` 确保质量可接受
   - 检查文件大小（应 < 4MB）
   - 确认 `poster.jpg` 显示正常

4. **更新代码**
   - 在 `lib/tutorials.ts` 中添加教程信息
   - 设置正确的路径:
     ```typescript
     video: "/tutorials/your-tutorial-id/demo-web.mp4",
     poster: "/tutorials/your-tutorial-id/poster.jpg",
     ```

5. **提交 PR**
   - 确保包含所有必需文件
   - 视频文件必须在 PR 中经过优化

## 性能优化说明

### 为什么需要这些标准？

1. **Faststart (moov atom at front)**
   - 允许浏览器在下载完整文件前开始播放
   - 关键用于"快速首帧"体验

2. **文件大小限制**
   - < 4MB: 推荐，确保移动网络快速加载
   - < 8MB: 硬性限制，超过会影响用户体验

3. **适度分辨率**
   - 1280px 足够在大多数设备上清晰显示
   - 减少文件大小而不牺牲明显质量

4. **CRF 28**
   - 平衡文件大小和视觉质量
   - 对于短时长演示视频是最佳选择

### 页面加载策略

网站针对不同场景使用不同的加载策略:

- **详情页**: 视频和海报预加载到 HTML head（优先级最高）
- **首页卡片**: 使用 IntersectionObserver，只加载可见卡片
- **胶片轮播**: 只加载当前活动视频（±1 可选）

## 故障排除

### 视频文件太大

如果优化后的文件仍 > 4MB:

1. 考虑缩短视频时长
2. 降低分辨率（编辑脚本中的 `scale` 参数）
3. 提高 CRF 值至 30-32（略微降低质量）

### 海报图不清晰

如果第1秒不是好的代表帧:

```bash
# 手动从其他时间点提取
ffmpeg -i demo-web.mp4 -ss 00:00:03.000 -vframes 1 -q:v 2 poster.jpg
```

### Faststart 未启用

验证 faststart 标志:

```bash
ffmpeg -i demo-web.mp4 2>&1 | grep "moov atom"
```

应该看到 moov atom 在文件开头。

## 检查清单

在提交 PR 前确认:

- [ ] 运行了 `optimize-demo-web.sh` 脚本
- [ ] `demo-web.mp4` 存在且 < 4MB（或 < 8MB 带合理理由）
- [ ] `poster.jpg` 存在且清晰
- [ ] 视频可以在浏览器中流畅播放
- [ ] 在 `lib/tutorials.ts` 中正确引用路径
- [ ] 视频内容符合教程主题

## 参考

- [FFmpeg faststart 文档](https://ffmpeg.org/ffmpeg-formats.html#mov_002c-mp4_002c-ismv)
- [H.264 CRF 指南](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Next.js 静态资源优化](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
