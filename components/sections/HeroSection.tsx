"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { HERO, CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "AI UGC Ads",
  "Product Commercials",
  "Hook Variations",
  "Launch Videos",
  "Creative Strategy",
  "Storyboards",
  "AI Image Generation",
  "Creative Testing",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="section-blob section-blob-tl" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-2/3"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.05) 0%, transparent 60%)" }}
      />

      {/* ── Text block ─────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={fadeInUp} className="mb-8 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-foreground-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {HERO.status}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-display-3xl font-display font-bold text-foreground text-balance"
        >
          {HERO.headlinePre}{" "}
          <span className="text-gradient-gold">{HERO.headlineAccent}</span>{" "}
          {HERO.headlinePost}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-base text-foreground-muted sm:text-lg"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={CTA_PRIMARY.href} size="lg">
            {CTA_PRIMARY.label}
            <ArrowRight size={18} />
          </Button>
          <Button href={CTA_SECONDARY.href} variant="outline" size="lg">
            {CTA_SECONDARY.label}
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Deliverables marquee ───────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.06] py-5">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee-left gap-10" style={{ width: "max-content" }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-body text-xs uppercase tracking-[0.3em] text-foreground-dim"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/40" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
