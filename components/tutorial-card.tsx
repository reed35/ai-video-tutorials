"use client";

import Link from "next/link";
import type { Tutorial } from "@/lib/types";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link href={`/tutorials/${tutorial.id}`}>
      <article className="bg-gradient-to-b from-[var(--panel2)] to-[var(--panel)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all hover:shadow-[0_30px_100px_rgba(0,0,0,0.5)] hover:scale-[1.01]">
        <div className="p-7 pb-2">
          <div className="inline-flex items-center gap-2 text-[var(--accent)] text-xs font-semibold tracking-widest uppercase mb-2.5">
            DEMO TEMPLATE · FILMERA / SEEDANCE
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight mb-2.5">
            {tutorial.title}
            <br />
            <span className="text-2xl">30 秒真人风动画,怎么做出来的?</span>
          </h2>
          <p className="text-[var(--muted)] text-[15px] max-w-[58ch] mb-4">
            {tutorial.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tutorial.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-[#d6d3d1] bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-[18px] mb-[18px] rounded-2xl overflow-hidden bg-black border border-[var(--line)] aspect-video">
          <video
            className="w-full h-full object-cover"
            poster={tutorial.poster}
            playsInline
            preload="metadata"
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
      </article>
    </Link>
  );
}
