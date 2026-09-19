"use client";

import { CopyButton } from "./copy-button";

export function PromptBlock({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className="relative">
      <div className="absolute top-3 right-3 z-10">
        <CopyButton text={text} />
      </div>
      {children}
    </div>
  );
}
