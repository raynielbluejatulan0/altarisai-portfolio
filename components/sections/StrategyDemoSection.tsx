"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeInUp, staggerContainer, staggerContainerFast } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { STRATEGY_DEMO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function StrategyDemoSection() {
  return (
    <SectionContainer bordered>
      <motion.div
        className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          {STRATEGY_DEMO.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
          Before we make the ad, we figure out <span className="text-gradient">why it should exist.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="section-subtitle">
          {STRATEGY_DEMO.note}
        </motion.p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-14">
        {/* Strategy fields */}
        <motion.dl
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {STRATEGY_DEMO.fields.map((field) => (
            <motion.div
              key={field.label}
              variants={fadeInUp}
              className="glow-card rounded-2xl p-5"
            >
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent">
                {field.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground-muted">{field.value}</dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Final creative */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto w-full max-w-[300px] lg:sticky lg:top-28"
        >
          <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent">
            Final Creative
          </p>
          <DemoVideo />
        </motion.div>
      </div>
    </SectionContainer>
  );
}

function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="relative overflow-hidden border border-white/10 bg-black" style={{ aspectRatio: "9 / 16" }}>
      {playing ? (
        <video
          ref={videoRef}
          src={STRATEGY_DEMO.video}
          poster={STRATEGY_DEMO.poster}
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
            trackEvent("portfolio_play", { category: "strategy-demo" });
          }}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play the demonstration ad"
        >
          <Image
            src={STRATEGY_DEMO.poster}
            alt="Final creative from the strategy demonstration: an expert-authority AI UGC skincare ad"
            fill
            sizes="300px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/55">
            <Play className="h-5 w-5 translate-x-[1px] fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
