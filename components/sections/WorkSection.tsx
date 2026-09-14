"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { WORK_ITEMS, WORK_CATEGORIES, getWorkCategoryItems, type WorkItem } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

/** Cap the supporting category grids so the section stays curated, not exhaustive. */
const CATEGORY_ITEM_CAP = 8;

export function WorkSection() {
  return (
    <SectionContainer id="work" bordered>
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Advertising creative, <span className="text-gradient">built to convert.</span>
          </>
        }
        subtitle="A curated selection of the creative produced through our pipeline: UGC-style ads first, supported by VSL, social, and static formats."
      />

      {/* ── AI UGC Ads — the flagship format ─────────────────────────────── */}
      <motion.div
        className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {WORK_ITEMS.map((item) => (
          <motion.div key={item.video} variants={fadeInUp} className="h-full">
            <WorkCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Supporting curated formats ───────────────────────────────────── */}
      <div className="mt-24 space-y-20">
        {WORK_CATEGORIES.map((cat) => {
          const items = getWorkCategoryItems(cat.slug);
          if (items.length === 0) return null;
          const shown = items.slice(0, CATEGORY_ITEM_CAP);
          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {cat.displayName}
                    </h3>
                    <span className="rounded-none border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs tabular-nums text-foreground-dim">
                      {items.length}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {cat.blurb}
                  </p>
                </div>
              </div>
              <GalleryGrid
                items={shown}
                onItemOpen={(item) => trackEvent("portfolio_open", { category: cat.slug, item: item.id })}
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

/* ── UGC ad card: 9:16 click-to-play + factual creative labels ───────────── */

function WorkCard({ item }: { item: WorkItem }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const label = `${item.labels.format} ad, ${item.labels.style}, ${item.labels.angle}`;

  // Pause the video when it scrolls out of view (stops audio/playback)
  useEffect(() => {
    if (!playing) return;
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) el.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playing]);

  return (
    <figure className="glow-card flex h-full flex-col overflow-hidden">
      {/* 9:16 ad */}
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "9 / 16" }}>
        {playing ? (
          <video
            ref={videoRef}
            src={item.video}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              trackEvent("portfolio_play", { category: "ugc", style: item.labels.style });
            }}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play ${label}`}
          >
            <Image
              src={item.poster}
              alt={label}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/55 sm:h-14 sm:w-14">
              <Play className="h-4 w-4 translate-x-[1px] fill-current sm:h-5 sm:w-5" />
            </span>
          </button>
        )}
      </div>

      {/* Creative labels — factual format descriptors, never invented metrics */}
      <figcaption className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
        <LabelRow label="Format" value={item.labels.format} />
        <LabelRow label="Style" value={item.labels.style} />
        <LabelRow label="Angle" value={item.labels.angle} />
      </figcaption>
    </figure>
  );
}

function LabelRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-baseline justify-between gap-2">
      <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-foreground-dim sm:text-[0.6rem]">
        {label}
      </span>
      <span className="text-right text-[0.7rem] font-medium text-foreground-muted sm:text-xs">
        {value}
      </span>
    </p>
  );
}
