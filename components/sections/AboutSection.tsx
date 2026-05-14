"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { IMPACT_STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeInUp} className="tag-purple mb-4 inline-block">About Me</motion.p>
          <motion.h2 variants={fadeInUp} className="section-title mb-6">
            4+ Years Creating{" "}
            <span className="text-gradient">AI-Powered Content</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-foreground-muted text-lg leading-relaxed mb-4">
            I started with AI image generation in 2022 — Midjourney, Stable Diffusion, the early days.
            Since then I&apos;ve expanded into AI video, UGC content, and full brand visual systems.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-foreground-muted text-lg leading-relaxed">
            Today I help brands and creators produce stunning visuals at scale — content that would take a
            full production team weeks, delivered in days.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {IMPACT_STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="glow-card rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
