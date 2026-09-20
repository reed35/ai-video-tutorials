import Link from "next/link";
import { getTutorialById, tutorials } from "@/lib/tutorials";
import { notFound } from "next/navigation";
import { PromptBlock } from "@/components/prompt-block";
import { VideoPreload } from "@/components/video-preload";

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    id: tutorial.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tutorial = getTutorialById(id);

  if (!tutorial) {
    return {};
  }

  return {
    title: `${tutorial.title} - 成片拆解`,
    description: tutorial.description,
  };
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tutorial = getTutorialById(id);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="max-w-[980px] mx-auto px-[18px] py-7 pb-20">
      <VideoPreload videoSrc={tutorial.video} posterSrc={tutorial.poster} />
      <header className="flex items-center gap-3 mb-8 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-[22px] tracking-wide hover:opacity-80 transition-opacity"
        >
          <img
            src="/brand/mark.png"
            alt=""
            width={112}
            height={112}
            className="w-28 h-28 rounded-xl object-cover"
          />
          成片拆解
        </Link>
      </header>

      <section className="bg-gradient-to-b from-[var(--panel2)] to-[var(--panel)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="p-7 pb-2">
          <div className="inline-flex items-center gap-2 text-[var(--accent)] text-xs font-semibold tracking-widest uppercase mb-2.5">
            {tutorial.sourcePlatform ? `来源 · ${tutorial.sourcePlatform}` : "成片拆解 · 跟做教程"}
          </div>
          <h1 className="text-[clamp(26px,4vw,36px)] leading-tight tracking-tight mb-2.5">
            {tutorial.title}
            <br />
            30 秒真人风动画,怎么做出来的?
          </h1>
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
        <div className="mx-[18px] mb-[18px] flex justify-center">
          <div
            className="rounded-2xl overflow-hidden bg-black border border-[var(--line)] max-w-full"
            style={{
              aspectRatio: tutorial.aspectRatio ?? "16/9",
              maxHeight: "min(70vh, 780px)",
              width: `min(100%, calc(min(70vh, 780px) * ${
                (() => {
                  const [aw, ah] = (tutorial.aspectRatio ?? "16/9").split("/").map(Number);
                  return aw / ah;
                })()
              }))`,
            }}
          >
            <video
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="auto"
              poster={tutorial.poster}
            >
              <source src={tutorial.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mt-9">
        <h2 className="text-xl font-bold mb-1.5 tracking-tight">三步搞懂</h2>
        <p className="text-[var(--muted)] text-sm mb-4">
          别急着上视频模型。这个片子的秘密是:先把角色和场景锁死,再一次生成{" "}
          {tutorial.shots} 个镜头。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tutorial.steps.map((step) => (
            <div
              key={step.number}
              className="bg-[var(--panel)] border border-[var(--line)] rounded-[var(--radius)] p-4 pb-3.5"
            >
              <div className="w-7 h-7 rounded-[9px] grid place-items-center bg-[rgba(94,234,212,0.12)] text-[var(--accent)] font-bold text-[13px] mb-2.5">
                {step.number}
              </div>
              <h3 className="text-[15px] font-bold mb-1.5">{step.title}</h3>
              <p className="text-[var(--muted)] text-[13px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-9">
        <h2 className="text-xl font-bold mb-1.5 tracking-tight">
          步骤一 · 做出这 {tutorial.references} 张参考图
        </h2>
        <p className="text-[var(--muted)] text-sm mb-4">
          推荐用 GPT Image / 同等图模,比例 4:3。每张点开即可复制完整英文提示词。
        </p>

        {tutorial.references_detail.map((ref, idx) => (
          <article
            key={ref.id}
            id={ref.id}
            className="bg-[var(--panel)] border border-[var(--line)] rounded-[20px] p-4 mb-3.5"
          >
            <div className="flex gap-3 items-start mb-3">
              <span className="flex-none bg-[rgba(94,234,212,0.14)] text-[var(--accent)] border border-[rgba(94,234,212,0.25)] rounded-full px-2.5 py-1 text-xs font-bold mt-0.5">
                {ref.number}
              </span>
              <div>
                <h3 className="text-base font-bold">{ref.title}</h3>
                <p className="text-[var(--muted)] text-[13px]">
                  {ref.subtitle}
                </p>
              </div>
              <span className="ml-auto text-[var(--muted)] text-xs whitespace-nowrap">
                第 {idx + 1} 步
              </span>
            </div>
            <img
              src={ref.image}
              alt={ref.title}
              loading="lazy"
              className="w-full rounded-[14px] border border-[var(--line)] bg-black"
            />
            <details className="mt-3">
              <summary className="cursor-pointer select-none text-[var(--accent2)] text-[13px] font-semibold list-none">
                <span className="inline-block mr-1">▸</span>
                查看完整出图提示词(点击复制区)
              </summary>
              <PromptBlock text={ref.prompt}>
                <pre className="mt-2.5 whitespace-pre-wrap break-words bg-[#0a0c0f] border border-[var(--line)] rounded-xl px-3.5 py-3 text-[11.5px] leading-relaxed text-[#e7e5e4] font-mono max-h-[280px] overflow-auto">
                  {ref.prompt}
                </pre>
              </PromptBlock>
            </details>
          </article>
        ))}
      </section>

      <section className="mt-9">
        <h2 className="text-xl font-bold mb-1.5 tracking-tight">
          步骤二 · {tutorial.shots} 镜头故事板(人话版)
        </h2>
        <p className="text-[var(--muted)] text-sm mb-4">
          方便你对照成片理解每一镜在干什么。
        </p>
        <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[20px] p-[18px] pb-2">
          <ol className="list-decimal ml-[18px] mb-3">
            {tutorial.storyboard.map((shot) => (
              <li
                key={shot.number}
                className="my-1.5 text-[#d6d3d1] text-[13.5px]"
              >
                <b>Shot {shot.number}</b> — {shot.description}
              </li>
            ))}
          </ol>
          {tutorial.constraints && (
            <div className="mt-3 p-3 px-3.5 rounded-xl bg-[rgba(251,113,133,0.08)] border border-[rgba(251,113,133,0.25)] text-[#fecdd3] text-[13px]">
              <b>关键约束:</b>
              {tutorial.constraints}
            </div>
          )}
        </div>
      </section>

      <section className="mt-9">
        <h2 className="text-xl font-bold mb-1.5 tracking-tight">
          步骤三 · 完整视频提示词
        </h2>
        <p className="text-[var(--muted)] text-sm mb-4">
          直接全选复制到 Seedance。@Image{" "}
          {tutorial.references === 3
            ? "1–3 必须对应上面 REF 01–03"
            : tutorial.references === 5
            ? "1–5 必须对应上面 REF 01–05"
            : `1–${tutorial.references} 必须对应上面 REF 编号`}
          。
        </p>
        <div className="bg-[var(--panel)] border border-[var(--line)] rounded-[20px] p-4">
          <div className="flex gap-3 items-start mb-3">
            <span className="flex-none bg-[rgba(94,234,212,0.14)] text-[var(--accent)] border border-[rgba(94,234,212,0.25)] rounded-full px-2.5 py-1 text-xs font-bold">
              GEN 01
            </span>
            <div>
              <h3 className="text-base font-bold">
                {tutorial.video_prompt.title}
              </h3>
              <p className="text-[var(--muted)] text-[13px]">
                {tutorial.video_prompt.subtitle}
              </p>
            </div>
          </div>
          <PromptBlock text={tutorial.video_prompt.content}>
            <pre className="whitespace-pre-wrap break-words bg-[#0a0c0f] border border-[var(--line)] rounded-xl px-3.5 py-3 text-[11.5px] leading-relaxed text-[#e7e5e4] font-mono max-h-[420px] overflow-auto">
              {tutorial.video_prompt.content}
            </pre>
          </PromptBlock>
        </div>
      </section>

      <section className="mt-7 p-[18px] rounded-[18px] bg-[linear-gradient(135deg,rgba(94,234,212,0.12),rgba(251,191,36,0.08))] border border-[var(--line)]">
        <h2 className="text-base font-bold mb-1.5">这是 Demo</h2>
        <p className="text-[var(--muted)] text-[13px]">
          当前是单页静态站:视频 +
          指引 +
          可复制提示词。后面可以做成多教程列表、账号、收藏提示词、一键复制、手机竖屏版等。
        </p>
      </section>

      <footer className="mt-10 text-[var(--muted)] text-xs text-center">
        {tutorial.sourcePlatform || tutorial.sourceAuthor || tutorial.sourceUrl ? (
          <>
            来源
            {tutorial.sourcePlatform && ` · ${tutorial.sourcePlatform}`}
            {tutorial.sourceAuthor && ` · ${tutorial.sourceAuthor}`}
            {tutorial.sourceUrl && (
              <>
                {" · "}
                <a
                  href={tutorial.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  原帖
                </a>
              </>
            )}
          </>
        ) : (
          "成片拆解 · 来源未标注 / 内部整理"
        )}
      </footer>
    </div>
  );
}
