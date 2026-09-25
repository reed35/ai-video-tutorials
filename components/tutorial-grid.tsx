"use client";

import { useEffect, useState } from "react";
import type { Tutorial, TutorialFormat } from "@/lib/types";
import { TUTORIAL_FORMATS } from "@/lib/types";
import { TutorialCard } from "@/components/tutorial-card";

export function TutorialGrid({ tutorials }: { tutorials: Tutorial[] }) {
  const [active, setActive] = useState<TutorialFormat | null>(null);

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
    `px-3 py-1.5 text-xs rounded-full border transition-colors ${
      selected
        ? "bg-[rgba(94,234,212,0.14)] text-[var(--accent)] border-[rgba(94,234,212,0.35)]"
        : "bg-[rgba(255,255,255,0.05)] text-[#d6d3d1] border-[var(--line)] hover:border-[rgba(94,234,212,0.35)] hover:text-[var(--accent)]"
    }`;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-[var(--muted)] text-xs mr-1">按套路挑</span>
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => select(null)}
          className={chip(active === null)}
        >
          全部 <span className="opacity-60">{tutorials.length}</span>
        </button>
        {counts.map(({ format, count }) => (
          <button
            key={format}
            type="button"
            aria-pressed={active === format}
            onClick={() => select(active === format ? null : format)}
            className={chip(active === format)}
          >
            {format} <span className="opacity-60">{count}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </>
  );
}
