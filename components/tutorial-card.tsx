"use client";

import Link from "next/link";
import type { Tutorial } from "@/lib/types";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link href={`/tutorials/${tutorial.id}`}>
      <article className="bg-gradient-to-b from-[var(--panel2)] to-[var(--panel)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all hover:shadow-[0_30px_100px_rgba(0,0,0,0.5)] hover:scale-[1.01]">
        <div className="p-5 pb-2">
          <div className="inline-flex items-center gap-2 text-[var(--accent)] text-[11px] font-semibold tracking-widest uppercase mb-2">
            DEMO TEMPLATE · FILMERA / SEEDANCE
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight mb-3">
            {tutorial.title}
            <br />
            <span className="text-lg opacity-80">30 秒真人风动画,怎么做出来的?</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {tutorial.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] text-[#d6d3d1] bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-4 mb-4 flex justify-center">
          <div
            className="rounded-2xl overflow-hidden bg-black border border-[var(--line)] max-w-full"
            style={{
              aspectRatio: tutorial.aspectRatio ?? "16/9",
              maxHeight: "min(28vh, 240px)",
              width: `min(100%, calc(min(28vh, 240px) * ${
                (() => {
                  const [aw, ah] = (tutorial.aspectRatio ?? "16/9").split("/").map(Number);
                  return aw / ah;
                })()
              }))`,
            }}
          >
            <video
              className="w-full h-full object-contain"
              poster={tutorial.poster}
              playsInline
              preload="none"
              muted
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={tutorial.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </article>
    </Link>
  );
}
