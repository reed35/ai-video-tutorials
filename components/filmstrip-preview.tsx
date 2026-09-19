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
  const scrollProgressRef = useRef(0);
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

  const latest3 = tutorials.slice(0, 3);
  const CARD_HEIGHT = 280;
  const GAP = 16;
  const SINGLE_CARD_HEIGHT = CARD_HEIGHT + GAP;
  const SET_HEIGHT = SINGLE_CARD_HEIGHT * latest3.length;

  useEffect(() => {
    if (reducedMotion || latest3.length === 0) {
      setCenterIndex(0);
      return;
    }

    const SCROLL_SPEED = 0.8;
    const VIEWPORT_CENTER = 300;

    const animate = () => {
      scrollProgressRef.current += SCROLL_SPEED;

      if (scrollProgressRef.current >= SET_HEIGHT) {
        scrollProgressRef.current -= SET_HEIGHT;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${scrollProgressRef.current}px)`;
      }

      const cardPositions = [];
      for (let i = 0; i < latest3.length * 2; i++) {
        const basePosition = i * SINGLE_CARD_HEIGHT - scrollProgressRef.current;
        cardPositions.push({
          index: i,
          position: basePosition,
          center: basePosition + CARD_HEIGHT / 2,
        });
      }

      let closestIndex = 0;
      let minDistance = Infinity;

      cardPositions.forEach((card) => {
        const distance = Math.abs(card.center - VIEWPORT_CENTER);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = card.index;
        }
      });

      if (closestIndex !== centerIndex) {
        setCenterIndex(closestIndex);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [reducedMotion, latest3.length, centerIndex]);

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
            <div ref={containerRef} className="flex flex-col gap-4">
              {displayTutorials.map((tutorial, idx) => {
                const originalIndex = idx % latest3.length;
                const isCentered = idx === centerIndex;

                return (
                  <Link
                    key={`${tutorial.id}-${idx}`}
                    href={`/tutorials/${tutorial.id}`}
                    className="block"
                  >
                    <div
                      className={`relative w-full h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                        isCentered
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

                      {isCentered && (
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
