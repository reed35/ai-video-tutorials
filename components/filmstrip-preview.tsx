"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Tutorial } from "@/lib/types";

interface FilmstripPreviewProps {
  tutorials: Tutorial[];
}

export function FilmstripPreview({ tutorials }: FilmstripPreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const videoRefs = useRef(new Map<string, HTMLVideoElement>());
  const stepIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Filmstrip pins are curated for visual impact; not auto-latest
  const FILMSTRIP_PINNED_IDS = [
    "flova-mona-lisa-neighbors",
    "krevix-sofa-workshop-reels-seedance",
    "just-sharon7-venice-sphere"
  ] as const;
  
  const latest3 = FILMSTRIP_PINNED_IDS.map(id => 
    tutorials.find(t => t.id === id)
  ).filter((t): t is Tutorial => !!t);
  const displayTutorials = [...latest3, ...latest3];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % latest3.length);
      }, 4000);
      stepIntervalRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [reducedMotion, latest3.length]);

  useEffect(() => {
    if (reducedMotion) return;

    const options: IntersectionObserverInit = {
      root: containerRef.current?.parentElement || null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
    };

    observerRef.current = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let centerIndex = 0;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          centerIndex = index % latest3.length;
        }
      });

      if (maxRatio > 0.3) {
        setActiveIndex(centerIndex);
      }
    }, options);

    const cards = containerRef.current?.querySelectorAll("[data-card]");
    cards?.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [reducedMotion, latest3.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, key) => {
      const index = parseInt(key.split("-")[0], 10) % latest3.length;
      const isActive = index === activeIndex;
      const isNeighbor = Math.abs(index - activeIndex) === 1 || 
                        (activeIndex === 0 && index === latest3.length - 1) ||
                        (activeIndex === latest3.length - 1 && index === 0);
      
      // Only load active and neighbor videos
      if (isActive || isNeighbor) {
        if (!video.src) {
          // Resolve video URL from stable latest3 array
          const tutorial = latest3[index];
          video.src = tutorial.video;
          video.load();
        }
        
        if (isActive) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      } else {
        // Remove src for non-active, non-neighbor videos to free memory
        if (video.src) {
          video.pause();
          video.removeAttribute("src");
          video.load(); // Reset the video element
        }
      }
    });
  }, [activeIndex, latest3]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(94, 234, 212, 0.08), transparent)",
        }}
      />

      <div className="relative h-full flex items-center justify-center py-8">
        <div className="relative h-full w-full max-w-[420px]">
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent"
            style={{ height: "100%" }}
          />

          <div className="relative h-full overflow-hidden">
            <div
              ref={containerRef}
              className={`flex flex-col gap-4 ${
                reducedMotion 
                  ? "animate-filmstrip-step" 
                  : isPaused 
                    ? "animate-filmstrip paused" 
                    : "animate-filmstrip"
              }`}
              style={
                reducedMotion
                  ? {
                      transform: `translateY(-${activeIndex * 296}px)`,
                    }
                  : undefined
              }
              onMouseEnter={() => !reducedMotion && setIsPaused(true)}
              onMouseLeave={() => !reducedMotion && setIsPaused(false)}
            >
              {displayTutorials.map((tutorial, idx) => {
                const originalIndex = idx % latest3.length;
                const isActive = originalIndex === activeIndex;

                return (
                  <Link
                    key={`${tutorial.id}-${idx}`}
                    href={`/tutorials/${tutorial.id}`}
                    className="block"
                    data-card
                    data-index={idx}
                  >
                    <div
                      className={`relative w-full h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                        isActive
                          ? "border-[var(--accent)]/40 shadow-[0_0_40px_rgba(94,234,212,0.15)] scale-105 opacity-100"
                          : "border-[var(--line)] opacity-50 scale-95"
                      }`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(15,20,25,0.9), rgba(20,25,30,0.9))",
                      }}
                    >
                      <div className="absolute inset-0">
                        <video
                          ref={(el) => {
                            const key = `${idx}-${tutorial.id}`;
                            if (el) {
                              videoRefs.current.set(key, el);
                            } else {
                              videoRefs.current.delete(key);
                            }
                          }}
                          className="w-full h-full object-cover"
                          poster={tutorial.poster}
                          playsInline
                          muted
                          loop
                          preload="none"
                        >
                          {/* Source dynamically added via useEffect */}
                        </video>
                      </div>

                      {!isActive && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                          {tutorial.title}
                        </h3>
                        <p className="text-xs text-[var(--muted)] line-clamp-1">
                          {tutorial.subtitle}
                        </p>
                      </div>

                      {isActive && (
                        <>
                          <div className="absolute inset-0 ring-2 ring-[var(--accent)]/20 ring-inset rounded-2xl pointer-events-none" />
                          <div className="absolute top-3 right-3">
                            <div className="px-2.5 py-1 rounded-full bg-[var(--accent)]/20 backdrop-blur-sm border border-[var(--accent)]/30 animate-pulse">
                              <span className="text-[10px] font-bold text-[var(--accent)] tracking-wider">
                                PLAYING
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg)] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {latest3.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-8 bg-[var(--accent)]"
                : "w-1 bg-[var(--accent)]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
