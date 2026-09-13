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
      {/* ── Text block ─────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 pb-20 text-center sm:px-8"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeInUp} className="tag mb-7">
          {HERO.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-display-3xl font-semibold leading-[1.02] tracking-tight text-foreground text-balance"
        >
          {HERO.headlinePre}{" "}
          <span className="italic text-gradient-gold">{HERO.headlineAccent}</span>{" "}
          {HERO.headlinePost}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
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

        {/* Availability */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground-dim"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {HERO.status}
        </motion.p>
      </motion.div>

      {/* ── Deliverables marquee ───────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.06] py-5">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-left gap-10" style={{ width: "max-content" }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-foreground-dim"
              >
                {item}
                <span className="h-1 w-1 bg-accent/50" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
