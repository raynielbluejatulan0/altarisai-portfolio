"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { MediaItem } from "@/lib/media";
import { aspectRatio, formatDuration } from "@/lib/media";

interface MediaCardProps {
  item: MediaItem;
  onOpen: () => void;
  /** next/image sizes hint */
  sizes?: string;
  priority?: boolean;
}

/**
 * Premium portfolio card: lazy poster thumbnail, hover-to-preview video
 * (desktop), play affordance, duration badge, and a title reveal. Only the
 * poster loads by default — the video element mounts on hover, so the grid
 * stays fast even with dozens of clips.
 */
export function MediaCard({ item, onOpen, sizes, priority = false }: MediaCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.type === "video";
  const duration = formatDuration(item.duration);

  const handleEnter = () => {
    if (!isVideo) return;
    setHovered(true);
    // play once the element exists
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    });
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) v.pause();
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label={`Open ${item.title}${duration ? `, ${duration}` : ""}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] text-left transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      style={{ aspectRatio: aspectRatio(item) }}
    >
      {/* Poster */}
      <Image
        src={item.poster}
        alt={item.title}
        fill
        sizes={sizes ?? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
        priority={priority}
        className={`object-cover transition-all duration-500 ${
          hovered ? "scale-[1.03] opacity-0" : "scale-100 opacity-100 group-hover:scale-[1.03]"
        }`}
      />

      {/* Hover video preview (mounted only on hover) */}
      {isVideo && hovered && (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Flat scrim — darkens for title legibility, no gradient */}
      <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/45" />

      {/* Play affordance */}
      {isVideo && (
        <span
          className={`pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 ${
            hovered ? "scale-90 opacity-0" : "scale-100 opacity-100 group-hover:scale-110 group-hover:bg-black/45"
          }`}
        >
          <Play className="h-5 w-5 translate-x-[1px] fill-current" />
        </span>
      )}

      {/* Duration badge */}
      {isVideo && duration && (
        <span className="pointer-events-none absolute right-2.5 top-2.5 rounded-md bg-black/55 px-1.5 py-0.5 text-[0.7rem] font-medium tabular-nums text-white/90 backdrop-blur-sm">
          {duration}
        </span>
      )}
      {!isVideo && (
        <span className="pointer-events-none absolute right-2.5 top-2.5 rounded-md bg-black/55 px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
          Image
        </span>
      )}

      {/* Title reveal */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="line-clamp-1 text-sm font-semibold text-white">{item.title}</p>
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/55">{item.category}</p>
      </div>
    </button>
  );
}
