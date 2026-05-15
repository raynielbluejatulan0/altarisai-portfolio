"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { MARKETING_VIDEOS_MIXED } from "@/lib/constants";

// Curated set for hero backdrop — interleaved across categories for visual variety
const HERO_VIDEOS = MARKETING_VIDEOS_MIXED.slice(0, 10);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Scrolling video marquee — sits behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 -translate-y-1/2 flex gap-3 animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {[...HERO_VIDEOS, ...HERO_VIDEOS].map((video, i) => (
            <div
              key={`${video.src}-${i}`}
              className="relative aspect-[9/16] h-[70vh] flex-shrink-0 rounded-2xl overflow-hidden"
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

      {/* Base dark layer */}
      <div className="absolute inset-0 z-10 bg-background/80 pointer-events-none" />
      {/* Edge darkening — videos peek subtly on sides only */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at center, transparent 0%, rgba(8,8,8,0.5) 70%, rgba(8,8,8,0.97) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center mb-7">
          <span className="inline-flex items-center gap-2 text-xs text-foreground-muted border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            Available for projects · GMT+8
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.02] mb-6 tracking-tight"
        >
          Scroll-stopping{" "}
          <span className="text-gradient">AI marketing videos</span>
          <br className="hidden sm:block" />
          — shipped in days, not weeks.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I help brands and agencies test more creative for less — without giving up production quality.
        </motion.p>

        {/* Single primary CTA + ghost link */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-5">
          <Button href="#contact" size="lg">Hire Me</Button>
          <a
            href="#marketing"
            className="group text-sm text-foreground-muted hover:text-primary transition-colors flex items-center gap-1.5"
          >
            See portfolio
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle scroll indicator at the very bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
