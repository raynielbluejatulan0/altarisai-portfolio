"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const SHOWREEL_SRC = "/showreel/showreel.mp4";
const SHOWREEL_POSTER = "/showreel/poster.jpg";

/**
 * Hero showreel: an 18-second muted montage cut from our advertising
 * creative (~2 MB, 720x1280). The poster paints immediately; the video only
 * loads and autoplays once the reel is actually in the viewport, and users
 * with reduced motion get a click-to-play poster instead.
 */
export function Showreel({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"poster" | "auto" | "manual">("poster");
  const tracked = useRef(false);

  // Decide autoplay vs click-to-play once in view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // stay in poster mode; user can click to play
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMode("auto");
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause when scrolled out of view; resume when back.
  useEffect(() => {
    if (mode === "poster") return;
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  const trackOnce = () => {
    if (tracked.current) return;
    tracked.current = true;
    trackEvent("showreel_play");
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border border-white/10 bg-black ${className}`}
      style={{ aspectRatio: "9 / 16" }}
    >
      {mode === "poster" ? (
        <button
          type="button"
          onClick={() => {
            setMode("manual");
            trackOnce();
          }}
          aria-label="Play showreel"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={SHOWREEL_POSTER}
            alt="Frames from the ALTARIS AI advertising showreel"
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 360px"
            className="object-cover"
          />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-[1px] fill-current" />
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          src={SHOWREEL_SRC}
          poster={SHOWREEL_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={trackOnce}
          aria-label="ALTARIS AI advertising creative showreel"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Slate label */}
      <span className="pointer-events-none absolute bottom-3 left-3 border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
        Showreel · Advertising Creative
      </span>
    </div>
  );
}
