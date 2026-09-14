"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Showreel } from "@/components/ui/Showreel";
import { HERO, CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";
import { BOOKING_CONFIGURED } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

const MARQUEE_ITEMS = [
  "Creative Strategy",
  "AI UGC Ads",
  "Product Commercials",
  "VSL Creative",
  "Hook Variations",
  "Storyboards",
  "Editing & Post",
  "Creative Testing",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-24 pb-28 lg:pt-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-20">
        {/* ── Text block ─────────────────────────────────────────────────── */}
        <motion.div
          className="text-center lg:text-left"
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

          {/* Positioning */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-7 max-w-2xl text-lg font-medium text-silver sm:text-xl lg:mx-0"
          >
            {HERO.positioning}
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg lg:mx-0"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              href={CTA_PRIMARY.href}
              size="lg"
              target={BOOKING_CONFIGURED ? "_blank" : undefined}
              rel={BOOKING_CONFIGURED ? "noopener noreferrer" : undefined}
              onClick={() => trackEvent("discovery_call_click", { source: "hero" })}
            >
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
            className="mt-8 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground-dim lg:justify-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {HERO.status}
          </motion.p>
        </motion.div>

        {/* ── Showreel ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:w-[340px] lg:max-w-none"
        >
          <Showreel />
        </motion.div>
      </div>

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
