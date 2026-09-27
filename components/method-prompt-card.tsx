import type { MethodPrompt } from "@/lib/types";
import { PromptBlock } from "./prompt-block";

/** 源头方法论提示词卡片：仅在教程有 method_prompt 时渲染，紫色强调以区别于普通提示词 */
export function MethodPromptCard({ method }: { method: MethodPrompt }) {
  return (
    <section className="mt-9" id="method-prompt">
      <h2 className="text-xl font-bold mb-1.5 tracking-tight">
        步骤零 · 源头方法论提示词
      </h2>
      <p className="text-[var(--muted)] text-sm mb-4">
        先有这段，才有后面的参考图和逐镜提示词：它是制作这支片子的源头方法论。
      </p>
      <div className="relative rounded-[20px] p-4 border border-[rgba(167,139,250,0.45)] bg-[linear-gradient(160deg,rgba(167,139,250,0.16),rgba(167,139,250,0.04)_60%),var(--panel)] shadow-[0_0_0_1px_rgba(167,139,250,0.08),0_18px_50px_rgba(124,58,237,0.18)]">
        <div className="flex gap-3 items-start mb-3">
          <span className="flex-none bg-[rgba(167,139,250,0.18)] text-[#c4b5fd] border border-[rgba(167,139,250,0.4)] rounded-full px-2.5 py-1 text-xs font-bold tracking-wider">
            METHOD
          </span>
          <div>
            <h3 className="text-base font-bold text-[#ede9fe]">{method.title}</h3>
            {method.subtitle && (
              <p className="text-[#c4b5fd]/80 text-[13px]">{method.subtitle}</p>
            )}
          </div>
        </div>
        <PromptBlock text={method.content}>
          <pre className="whitespace-pre-wrap break-words bg-[#100c1a] border border-[rgba(167,139,250,0.3)] rounded-xl px-3.5 py-3 pr-14 text-[12.5px] leading-relaxed text-[#ede9fe] font-mono max-h-[420px] overflow-auto">
            {method.content}
          </pre>
        </PromptBlock>
        {method.note && (
          <p className="mt-3 text-[13px] text-[#ddd6fe]/85 whitespace-pre-line [overflow-wrap:anywhere]">
            {method.note}
          </p>
        )}
      </div>
    </section>
  );
}
