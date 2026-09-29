"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

// 记录「上一页是不是首页」：首页挂 <HomeVisitMarker />，详情页读取后再写入自己的路径。
// 上一页是本站首页且同一标签页里有历史 → router.back()，浏览器恢复首页滚动位置；
// 否则（直接打开链接、新标签、刷新后等）→ 普通跳转到 "/"。
const KEY = "cp:prev-path";
let cache: { path: string; prevIsHome: boolean } | null = null;

function prevIsHome(): boolean {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname;
  if (cache && cache.path === path) return cache.prevIsHome;
  let prev: string | null = null;
  try {
    prev = sessionStorage.getItem(KEY);
    sessionStorage.setItem(KEY, path);
  } catch {}
  cache = { path, prevIsHome: prev === "/" };
  return cache.prevIsHome;
}

export function HomeVisitMarker() {
  useEffect(() => {
    cache = null;
    try {
      sessionStorage.setItem(KEY, "/");
    } catch {}
  }, []);
  return null;
}

export function BackToList({ className, children }: { className?: string; children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    prevIsHome();
  }, []);

  return (
    <Link
      href="/"
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (prevIsHome() && window.history.length > 1) {
          e.preventDefault();
          router.back();
        }
      }}
    >
      {children}
    </Link>
  );
}
