"use client";

import { motion } from "framer-motion";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-glow bg-grid"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
          <span className="tag-purple flex items-center gap-1.5">
            <Sparkles size={12} />
            AI Content Creator · GMT+8
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Stunning AI Visuals{" "}
          <span className="text-gradient">That Actually Convert</span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-10">
          I create AI-generated images, videos, and social content that stop the scroll and build brands —
          faster and cheaper than traditional production.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#gallery" size="lg">See My Work</Button>
          <Button href="#contact" variant="outline" size="lg">Work With Me</Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-foreground-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}
