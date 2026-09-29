import type { NextConfig } from "next";
import { MEDIA_BASE } from "./lib/media";

const nextConfig: NextConfig = {
  output: 'standalone',
  // 素材已迁到 Cloudflare R2：旧的站内直链（收藏/转发的 mp4、jpg）跳到 R2 同路径。
  // 只匹配带媒体扩展名的文件，/tutorials/<id> 教程页本身不受影响。
  async redirects() {
    const media = '(.+\\.(?:mp4|jpg|jpeg|png|webp))';
    return [
      {
        source: `/tutorials/:path${media}`,
        destination: `${MEDIA_BASE}/tutorials/:path`,
        permanent: false,
      },
      {
        source: '/:file(demo-web\\.mp4|GEN_preview\\.jpg|REF0[1-5]_[A-Za-z_]+\\.jpg)',
        destination: `${MEDIA_BASE}/:file`,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Cache-Control',
            // 7-day cache without immutable to allow recovery from 404s
            value: 'public, max-age=604800',
          },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          {
            key: 'Cache-Control',
            // 7-day cache without immutable to allow recovery from 404s
            value: 'public, max-age=604800',
          },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
