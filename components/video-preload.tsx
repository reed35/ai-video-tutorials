"use client";

import { useEffect } from "react";

interface VideoPreloadProps {
  videoSrc: string;
  posterSrc: string;
}

export function VideoPreload({ videoSrc, posterSrc }: VideoPreloadProps) {
  useEffect(() => {
    // Create preload links if they don't exist
    const headElement = document.head;
    
    // Check if preload links already exist
    const existingVideoPreload = headElement.querySelector(
      `link[rel="preload"][href="${videoSrc}"]`
    );
    const existingPosterPreload = headElement.querySelector(
      `link[rel="preload"][href="${posterSrc}"]`
    );

    // Add video preload
    if (!existingVideoPreload) {
      const videoLink = document.createElement("link");
      videoLink.rel = "preload";
      videoLink.as = "video";
      videoLink.href = videoSrc;
      videoLink.type = "video/mp4";
      headElement.appendChild(videoLink);
    }

    // Add poster preload
    if (!existingPosterPreload) {
      const posterLink = document.createElement("link");
      posterLink.rel = "preload";
      posterLink.as = "image";
      posterLink.href = posterSrc;
      headElement.appendChild(posterLink);
    }
  }, [videoSrc, posterSrc]);

  return null;
}
