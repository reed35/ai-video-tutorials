"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Tutorial, TutorialFormat } from "@/lib/types";
import { TUTORIAL_FORMATS } from "@/lib/types";
import { TutorialCard } from "@/components/tutorial-card";

export function TutorialGrid({ tutorials }: { tutorials: Tutorial[] }) {
  const [active, setActive] = useState<TutorialFormat | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState({ left: false, right: false });

  // 横向滚动条两侧渐隐：还有内容可滚时才显示
  const updateFade = useCallback(() => {
    const el = barRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setFade({ left: el.scrollLeft > 2, right: el.scrollLeft < max - 2 });
  }, []);

  useEffect(() => {
    updateFade();
    window.addEventListener("resize", updateFade);
    return () => window.removeEventListener("resize", updateFade);
  }, [updateFade]);

  // 桌面鼠标滚轮：悬停在筛选条上时把竖向滚动转成横向；已到该方向尽头则让页面正常滚动
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * el.clientWidth : e.deltaY;
      const max = el.scrollWidth - el.clientWidth;
      const canScroll = dy > 0 ? el.scrollLeft < max - 1 : el.scrollLeft > 1;
      if (!canScroll) return;
      e.preventDefault();
      el.scrollLeft += dy;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // 左右箭头：每次滚动约 70% 可见宽度
  const scrollByPage = (dir: -1 | 1) => {
    const el = barRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  // 选中的套路滚进可见区域（只在筛选条内部横向滚动，不动页面竖向位置）
  useEffect(() => {
    const el = barRef.current;
    const pill = el?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!el || !pill) return;
    const pad = 48; // 给两侧箭头/渐隐留位置
    const barRect = el.getBoundingClientRect();
    const r = pill.getBoundingClientRect();
    const left = r.left - barRect.left + el.scrollLeft;
    const right = left + r.width;
    let target: number | null = null;
    if (left - pad < el.scrollLeft) target = Math.max(0, left - pad);
    else if (right + pad > el.scrollLeft + el.clientWidth) target = right + pad - el.clientWidth;
    if (target !== null) el.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  // 支持从详情页套路标签跳回：/?format=产品广告#tutorials
  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("format");
    if (f && (TUTORIAL_FORMATS as readonly string[]).includes(f)) {
      setActive(f as TutorialFormat);
    }
  }, []);

  const select = (f: TutorialFormat | null) => {
    setActive(f);
    const url = new URL(window.location.href);
    if (f) url.searchParams.set("format", f);
    else url.searchParams.delete("format");
    window.history.replaceState(null, "", url.toString());
  };

  const counts = TUTORIAL_FORMATS.map((f) => ({
    format: f,
    count: tutorials.filter((t) => t.formats?.includes(f)).length,
  })).filter((c) => c.count > 0);

  const shown = active
    ? tutorials.filter((t) => t.formats?.includes(active))
    : tutorials;

  const chip = (selected: boolean) =>
    `shrink-0 inline-flex items-center gap-1.5 min-h-[38px] px-4 py-2 text-[15px] leading-none whitespace-nowrap rounded-full border transition-colors ${
      selected
        ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)] font-semibold hover:bg-[#4dd4bf]"
        : "bg-[rgba(255,255,255,0.04)] text-[#e7e5e4] border-[rgba(255,255,255,0.16)] hover:border-[rgba(94,234,212,0.5)] hover:text-[var(--accent)] hover:bg-[rgba(94,234,212,0.08)]"
    }`;

  const arrowCls =
    "absolute top-[19px] -translate-y-1/2 z-10 grid place-items-center w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(18,22,28,0.92)] text-[18px] sm:text-[22px] leading-none text-[#e7e5e4] shadow-[0_4px_14px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-[opacity,color,border-color] duration-200 hover:text-[var(--accent)] hover:border-[rgba(94,234,212,0.5)]";

  const countCls = (selected: boolean) =>
    `text-[12px] tabular-nums ${selected ? "text-[var(--bg)] opacity-70" : "text-[var(--muted)] opacity-80"}`;

  return (
    <>
      <div className="mb-6">
        <h2 className="text-[13px] font-semibold tracking-widest text-[var(--muted)] mb-2.5">按套路挑</h2>
        <div className="relative">
          <div
            ref={barRef}
            onScroll={updateFade}
            className="no-scrollbar flex flex-nowrap items-center gap-2.5 overflow-x-auto overscroll-x-contain pb-1"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <button
              type="button"
              aria-pressed={active === null}
              onClick={() => select(null)}
              className={chip(active === null)}
            >
              全部 <span className={countCls(active === null)}>{tutorials.length}</span>
            </button>
            {counts.map(({ format, count }) => (
              <button
                key={format}
                type="button"
                aria-pressed={active === format}
                onClick={() => select(active === format ? null : format)}
                className={chip(active === format)}
              >
                {format} <span className={countCls(active === format)}>{count}</span>
              </button>
            ))}
          </div>
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--bg)] to-transparent transition-opacity duration-200 ${fade.left ? "opacity-100" : "opacity-0"}`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[var(--bg)] to-transparent transition-opacity duration-200 ${fade.right ? "opacity-100" : "opacity-0"}`}
          />
          <button
            type="button"
            aria-label="向左滚动套路"
            tabIndex={fade.left ? 0 : -1}
            onClick={() => scrollByPage(-1)}
            className={`${arrowCls} left-0 ${fade.left ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="向右滚动套路"
            tabIndex={fade.right ? 0 : -1}
            onClick={() => scrollByPage(1)}
            className={`${arrowCls} right-0 ${fade.right ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            ›
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </>
  );
}
