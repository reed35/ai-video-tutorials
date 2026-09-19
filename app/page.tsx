import Link from "next/link";
import { tutorials } from "@/lib/tutorials";
import { TutorialCard } from "@/components/tutorial-card";
import { HeroPreview } from "@/components/hero-preview";

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh] flex items-center py-12 px-[18px]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex items-center gap-2.5 font-bold text-[15px] tracking-wide mb-12">
            <div className="w-7 h-7 rounded-[9px] bg-gradient-to-br from-[var(--accent)] via-[#2dd4bf] to-[var(--accent2)]" />
            成片拆解
          </div>

          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
            <div>
              <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.15] tracking-tight mb-6">
                每一个大师,
                <br />
                都从小白开始
              </h1>
              <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
                看 30 秒成片,照着步骤复刻
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 text-sm bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full">
                  30 秒成片
                </span>
                <span className="px-4 py-2 text-sm bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full">
                  可复制提示词
                </span>
                <span className="px-4 py-2 text-sm bg-[rgba(255,255,255,0.05)] border border-[var(--line)] rounded-full">
                  零剪辑也能做
                </span>
              </div>
              <Link
                href="#tutorials"
                className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-xl hover:bg-[#4dd4bf] transition-colors shadow-lg shadow-[var(--accent)]/20"
              >
                开始看教程
              </Link>
            </div>

            <div className="relative">
              <HeroPreview tutorial={tutorials[0]} />
            </div>
          </div>
        </div>
      </section>

      <div id="tutorials" className="max-w-[980px] mx-auto px-[18px] pb-20">
        <div className="grid grid-cols-1 gap-6">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        <footer className="mt-16 text-[var(--muted)] text-xs text-center">
          成片拆解 · 素材来自 Filmera 公开模板,仅供演示
        </footer>
      </div>
    </div>
  );
}
