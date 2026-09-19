"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Tutorial } from "@/lib/types";

interface FilmstripPreviewProps {
  tutorials: Tutorial[];
}

export function FilmstripPreview({ tutorials }: FilmstripPreviewProps) {
  const [centerIndex, setCenterIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement>>({});
  const animationFrameRef = useRef<number | undefined>(undefined);

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
    if (reducedMotion || tutorials.length <= 1) return;

    let scrollProgress = 0;
    const scrollSpeed = 0.15;
    const cardHeight = 280;
    const gap = 16;
    const totalHeight = (cardHeight + gap) * tutorials.length;

    const animate = () => {
      scrollProgress += scrollSpeed;
      
      if (scrollProgress >= cardHeight + gap) {
        scrollProgress = 0;
        setCenterIndex((prev) => (prev + 1) % tutorials.length);
      }

      if (containerRef.current) {
        const offset = -(centerIndex * (cardHeight + gap) + scrollProgress);
        containerRef.current.style.transform = `translateY(${offset}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [centerIndex, tutorials.length, reducedMotion]);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([indexStr, video]) => {
      const index = parseInt(indexStr, 10);
      if (index === centerIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [centerIndex]);

  const latest3 = tutorials.slice(0, 3);
  const displayTutorials = [...latest3, ...latest3];

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
              className="flex flex-col gap-4"
              style={{
                transition: reducedMotion ? "none" : undefined,
              }}
            >
              {displayTutorials.map((tutorial, idx) => {
                const originalIndex = idx % latest3.length;
                const isCentered = idx === centerIndex || idx === centerIndex + latest3.length;

                return (
                  <Link
                    key={`${tutorial.id}-${idx}`}
                    href={`/tutorials/${tutorial.id}`}
                    className="block"
                  >
                    <div
                      className={`relative w-full h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                        isCentered
                          ? "border-[var(--accent)]/40 shadow-[0_0_40px_rgba(94,234,212,0.15)] scale-100 opacity-100"
                          : "border-[var(--line)] opacity-40 scale-90"
                      }`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(15,20,25,0.9), rgba(20,25,30,0.9))",
                      }}
                    >
                      <div className="absolute inset-0">
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[idx] = el;
                            } else {
                              delete videoRefs.current[idx];
                            }
                          }}
                          className="w-full h-full object-cover"
                          poster={tutorial.poster}
                          playsInline
                          muted
                          loop
                          preload="metadata"
                        >
                          <source src={tutorial.video} type="video/mp4" />
                        </video>
                      </div>

                      {!isCentered && (
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                          {tutorial.title}
                        </h3>
                        <p className="text-xs text-[var(--muted)] line-clamp-1">
                          {tutorial.subtitle}
                        </p>
                      </div>

                      {isCentered && (
                        <div className="absolute top-3 right-3">
                          <div className="px-2.5 py-1 rounded-full bg-[var(--accent)]/20 backdrop-blur-sm border border-[var(--accent)]/30">
                            <span className="text-[10px] font-bold text-[var(--accent)] tracking-wider">
                              PLAYING
                            </span>
                          </div>
                        </div>
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
              idx === centerIndex % latest3.length
                ? "w-8 bg-[var(--accent)]"
                : "w-1 bg-[var(--accent)]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
