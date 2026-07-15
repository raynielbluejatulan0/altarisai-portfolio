"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { MediaItem } from "@/lib/media";
import { aspectRatio, formatDuration } from "@/lib/media";

interface LightboxProps {
  items: MediaItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

/**
 * Fullscreen media viewer — video playback or image, with prev / next / close,
 * arrow-key navigation, Escape to close, and body-scroll lock. Rendered via a
 * portal so it always covers the viewport regardless of where it's mounted.
 */
export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const current = open ? items[index] : undefined;
  const total = items.length;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — ${current.category}`}
        >
          {/* Top bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
            <div className="pointer-events-auto">
              <p className="font-display text-sm font-semibold text-white sm:text-base">
                {current.title}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {current.category}
                {current.type === "video" && current.duration
                  ? ` · ${formatDuration(current.duration)}`
                  : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close"
              className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Prev / Next */}
          {total > 1 && (
            <>
              <NavButton side="left" onClick={goPrev} />
              <NavButton side="right" onClick={goNext} />
            </>
          )}

          {/* Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="relative flex max-h-[86vh] w-full max-w-[92vw] items-center justify-center sm:max-w-[80vw]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MediaStage item={current} />
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          {total > 1 && (
            <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs tabular-nums text-white/60 backdrop-blur">
                {index! + 1} / {total}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:h-14 sm:w-14 ${
        side === "left" ? "left-3 sm:left-6" : "right-3 sm:right-6"
      }`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}

function MediaStage({ item }: { item: MediaItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPortrait = item.orientation === "portrait";
  // Portrait media is height-bound; landscape/square is width-bound.
  const sizing = isPortrait ? "h-[86vh] max-h-[86vh] w-auto" : "w-full max-w-full";

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        controls
        autoPlay
        playsInline
        className={`rounded-xl bg-black object-contain shadow-2xl ${sizing}`}
        style={{ aspectRatio: aspectRatio(item) }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt={item.title}
      className={`rounded-xl bg-black object-contain shadow-2xl ${sizing}`}
      style={{ aspectRatio: aspectRatio(item) }}
    />
  );
}
