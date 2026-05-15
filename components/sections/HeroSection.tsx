"use client";

import { motion } from "framer-motion";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { MARKETING_VIDEOS_MIXED } from "@/lib/constants";

const HERO_VIDEOS = MARKETING_VIDEOS_MIXED.slice(0, 10);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden pt-20"
    >
      {/* ── Text block ─────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 pb-12"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center mb-5">
          <span className="inline-flex items-center gap-2 text-xs text-foreground-muted border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 rounded-full">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Available for projects · GMT+8
          </span>
        </motion.div>

        {/* Headline — readable size, not full-screen */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5 tracking-tight"
        >
          Scroll-stopping{" "}
          <span className="text-gradient">AI marketing videos</span>
          {" "}— shipped in days, not weeks.
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-foreground-muted max-w-xl mx-auto mb-8"
        >
          I help brands and agencies test more creative for less — without giving up production quality.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="#contact" size="lg">Hire Me</Button>
          <a
            href="#marketing"
            className="text-sm text-foreground-muted hover:text-primary transition-colors"
          >
            See portfolio ↓
          </a>
        </motion.div>
      </motion.div>

      {/* ── Video marquee row — clearly visible below text ──────────────────── */}
      <div className="relative w-full overflow-hidden">
        {/* Left + right edge fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-3 animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {[...HERO_VIDEOS, ...HERO_VIDEOS].map((video, i) => (
            <div
              key={`${video.src}-${i}`}
              className="relative aspect-[9/16] h-[52vh] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <video
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
