"use client";

import type { HookBreakdown as Hook } from "@/lib/types";

// 秒数 → chip 文案；0 表示片头
function formatAt(at: number): string {
  return at === 0 ? "0s 起" : `约 ${at}s`;
}

function seek(at: number) {
  // 详情页第一个 <video> 即上方成片播放器；只改播放位置，不动播放器属性
  const video = document.querySelector("video");
  if (!video) return;
  video.currentTime = at;
  video.scrollIntoView({ behavior: "smooth", block: "center" });
  video.play().catch(() => {});
}

function TimeChip({ at }: { at?: number }) {
  if (at === undefined || at === null) return null;
  return (
    <button
      type="button"
      onClick={() => seek(at)}
      title="跳到成片这一秒"
      className="flex-none inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)] bg-[rgba(94,234,212,0.12)] border border-[rgba(94,234,212,0.25)] rounded-full px-2 py-0.5 hover:bg-[rgba(94,234,212,0.2)] transition-colors"
    >
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor" aria-hidden="true">
        <path d="M3 1.8v8.4L10 6z" />
      </svg>
      {formatAt(at)}
    </button>
  );
}

// 卡片总数 2–4：桌面横排，手机堆叠（Tailwind 需完整类名）
const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function HookBreakdown({ hook }: { hook: Hook }) {
  // 开场钩子固定在第一张；中间按成片真实结构 1–3 段
  const cards = [
    { title: "开场钩子", at: hook.openingAt, text: hook.opening },
    ...hook.beats.slice(0, 3),
  ];

  return (
    <section className="mt-9">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
        <h2 className="text-xl font-bold tracking-tight">钩子在哪</h2>
        {hook.approx && (
          <span className="text-[11px] text-[var(--muted)] bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full px-2.5 py-0.5">
            时间为抽帧估计
          </span>
        )}
      </div>
      {hook.structure && (
        <p className="text-[13px] text-[#d6d3d1] mb-1 break-words">
          <span className="text-[var(--accent)] font-semibold">结构：</span>
          {hook.structure}
        </p>
      )}
      <p className="text-[var(--muted)] text-sm mb-4">
        看完成片再对照:这条片子靠什么在几秒内抓住人。点时间可跳到成片对应位置。
      </p>

      <div className={`grid ${GRID_COLS[cards.length] ?? GRID_COLS[4]} gap-3`}>
        {cards.map((card, i) => (
          <div
            key={`${i}-${card.title}`}
            className="bg-[var(--panel)] border border-[var(--line)] rounded-[var(--radius)] p-4 pb-3.5 min-w-0"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-[15px] font-bold min-w-0 break-words">{card.title}</h3>
              <TimeChip at={card.at} />
            </div>
            <p className="text-[#d6d3d1] text-[13px] leading-relaxed break-words">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 bg-[rgba(94,234,212,0.06)] border border-[rgba(94,234,212,0.22)] border-l-[3px] border-l-[var(--accent)] rounded-[var(--radius)] px-4 py-3.5">
        <div className="text-[var(--accent)] text-xs font-semibold tracking-widest mb-1">
          跟做照抄这一点
        </div>
        <p className="text-[var(--text)] text-[14px] leading-relaxed break-words">
          {hook.copyThis}
        </p>
      </div>
    </section>
  );
}
