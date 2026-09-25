"use client";

import type { HookBreakdown as Hook } from "@/lib/types";

// 从「约 0–2s」「约 13s」里取第一个秒数，用于跳转播放器
function firstSecond(at?: string): number | null {
  const m = at?.match(/(\d+(?:\.\d+)?)/);
  return m ? Number(m[1]) : null;
}

function seek(at?: string) {
  const s = firstSecond(at);
  // 详情页第一个 <video> 即上方成片播放器；只改播放位置，不动播放器属性
  const video = document.querySelector("video");
  if (s === null || !video) return;
  video.currentTime = s;
  video.scrollIntoView({ behavior: "smooth", block: "center" });
  video.play().catch(() => {});
}

function TimeChip({ at }: { at?: string }) {
  if (!at) return null;
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
      {at}
    </button>
  );
}

export function HookBreakdown({ hook }: { hook: Hook }) {
  const beats = [
    { label: "开场钩子", at: hook.openingAt, text: hook.opening },
    { label: "高潮 · 反转", at: hook.peakAt, text: hook.peak },
    { label: "结尾怎么收", at: hook.endingAt, text: hook.ending },
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
      <p className="text-[var(--muted)] text-sm mb-4">
        看完成片再对照:这条片子靠什么在几秒内抓住人。点时间可跳到成片对应位置。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {beats.map((beat) => (
          <div
            key={beat.label}
            className="bg-[var(--panel)] border border-[var(--line)] rounded-[var(--radius)] p-4 pb-3.5 min-w-0"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-[15px] font-bold">{beat.label}</h3>
              <TimeChip at={beat.at} />
            </div>
            <p className="text-[#d6d3d1] text-[13px] leading-relaxed break-words">
              {beat.text}
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
