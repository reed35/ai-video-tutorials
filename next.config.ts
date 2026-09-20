import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
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
