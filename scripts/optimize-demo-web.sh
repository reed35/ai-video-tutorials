#!/bin/bash

# optimize-demo-web.sh
# 优化视频以确保快速加载和流畅播放
# 用法: ./scripts/optimize-demo-web.sh input.mp4 output_dir

set -e

if [ "$#" -ne 2 ]; then
  echo "用法: $0 <input.mp4> <output_dir>"
  echo "示例: $0 raw-video.mp4 public/tutorials/my-tutorial"
  exit 1
fi

INPUT="$1"
OUTPUT_DIR="$2"
OUTPUT_VIDEO="${OUTPUT_DIR}/demo-web.mp4"
OUTPUT_POSTER="${OUTPUT_DIR}/poster.jpg"

if [ ! -f "$INPUT" ]; then
  echo "❌ 错误: 输入文件不存在: $INPUT"
  exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
  echo "❌ 错误: 未找到 ffmpeg。请先安装 ffmpeg"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

echo "🎬 开始优化视频..."
echo "   输入: $INPUT"
echo "   输出: $OUTPUT_VIDEO"

# 优化视频
# - 缩放至最大宽度1280px（保持宽高比）
# - libx264编码，CRF 28（质量与大小平衡）
# - AAC音频，96kbps（足够清晰）
# - faststart标志（moov atom在文件开头，启用流式播放）
ffmpeg -i "$INPUT" \
  -vf "scale='min(1280,iw)':'min(1280,ih)':force_original_aspect_ratio=decrease" \
  -c:v libx264 \
  -crf 28 \
  -preset medium \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  -y \
  "$OUTPUT_VIDEO"

echo "📸 生成海报图..."
# 提取第1秒的帧作为海报
ffmpeg -i "$OUTPUT_VIDEO" \
  -ss 00:00:01.000 \
  -vframes 1 \
  -q:v 2 \
  -y \
  "$OUTPUT_POSTER"

# 检查文件大小
VIDEO_SIZE=$(du -h "$OUTPUT_VIDEO" | cut -f1)
VIDEO_SIZE_MB=$(du -m "$OUTPUT_VIDEO" | cut -f1)

echo ""
echo "✅ 优化完成!"
echo "   视频: $OUTPUT_VIDEO ($VIDEO_SIZE)"
echo "   海报: $OUTPUT_POSTER"

# 大小检查和警告
if [ "$VIDEO_SIZE_MB" -gt 8 ]; then
  echo ""
  echo "❌ 错误: 视频文件过大 (${VIDEO_SIZE_MB}MB > 8MB)"
  echo "   请使用更短的视频或降低质量"
  exit 1
elif [ "$VIDEO_SIZE_MB" -gt 4 ]; then
  echo ""
  echo "⚠️  警告: 视频文件较大 (${VIDEO_SIZE_MB}MB > 4MB)"
  echo "   建议进一步优化以获得更好的加载性能"
fi

echo ""
echo "💡 下一步:"
echo "   1. 预览视频确保质量可接受"
echo "   2. 将教程添加到 lib/tutorials.ts"
echo "   3. 提交更改并创建 PR"
