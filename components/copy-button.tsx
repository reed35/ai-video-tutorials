"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="p-2 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[var(--line)]"
        aria-label="复制提示词"
        type="button"
      >
        <svg
          className="w-4 h-4 text-[var(--text)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="9"
            y="9"
            width="13"
            height="13"
            rx="2"
            ry="2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`absolute top-full right-0 mt-2 px-3 py-1.5 bg-[#1f2937] text-white text-xs rounded-full whitespace-nowrap transition-opacity pointer-events-none ${
          copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="absolute -top-1 right-4 w-2 h-2 bg-[#1f2937] transform rotate-45"
          style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
        />
        {copied ? "已复制" : "复制"}
      </div>
    </div>
  );
}
