import type { Tutorial } from "@/lib/types";

export function getTutorialSubtitle(
  tutorial: Pick<Tutorial, "durationSec" | "styleLabel">
): string {
  if (!tutorial.durationSec || !tutorial.styleLabel) {
    return "这条片子怎么做出来的？";
  }

  const separator = /[A-Za-z0-9]$/.test(tutorial.styleLabel) ? " " : "";
  return `${tutorial.durationSec} 秒${tutorial.styleLabel}${separator}短片，怎么做出来的？`;
}
