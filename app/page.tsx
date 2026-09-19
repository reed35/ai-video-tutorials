import { tutorials } from "@/lib/tutorials";
import { TutorialCard } from "@/components/tutorial-card";

export default function Home() {
  return (
    <div className="max-w-[980px] mx-auto px-[18px] py-7 pb-20">
      <header className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5 font-bold text-[15px] tracking-wide">
          <div className="w-7 h-7 rounded-[9px] bg-gradient-to-br from-[var(--accent)] via-[#2dd4bf] to-[var(--accent2)]" />
          职业助手 · 教程
        </div>
        <div className="text-xs text-[var(--muted)] border border-[var(--line)] px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)]">
          小白向 · 看视频 → 跟步骤复刻
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3 tracking-tight">
          AI 视频教程
        </h1>
        <p className="text-[var(--muted)] text-base max-w-[60ch]">
          从参考图到视频生成,每一步提示词都拆开。不会剪辑也能照着做。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>

      <footer className="mt-10 text-[var(--muted)] text-xs text-center">
        职业助手教程 · 素材来自 Filmera 公开模板,仅供演示
      </footer>
    </div>
  );
}
