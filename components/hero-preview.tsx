"use client";

import { useState } from "react";
import type { Tutorial } from "@/lib/types";

export function HeroPreview({ tutorial }: { tutorial: Tutorial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden border border-[var(--line)] bg-black shadow-2xl aspect-video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        className="w-full h-full object-cover"
        poster={tutorial.poster}
        playsInline
        preload="metadata"
        muted
        loop
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
        }}
      >
        <source src={tutorial.video} type="video/mp4" />
      </video>

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity">
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
            <svg
              className="w-9 h-9 ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
