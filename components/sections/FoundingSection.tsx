"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { FOUNDING_PROGRAM, CTA_PRIMARY } from "@/lib/constants";
import { BOOKING_CONFIGURED } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function FoundingSection() {
  return (
    <SectionContainer bordered>
      <motion.div
        className="glow-card mx-auto max-w-3xl rounded-3xl border-accent/20 p-10 text-center sm:p-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          {FOUNDING_PROGRAM.eyebrow}
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-display mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {FOUNDING_PROGRAM.heading}
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          {FOUNDING_PROGRAM.copy}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <Button
            href={CTA_PRIMARY.href}
            size="md"
            target={BOOKING_CONFIGURED ? "_blank" : undefined}
            rel={BOOKING_CONFIGURED ? "noopener noreferrer" : undefined}
            onClick={() => trackEvent("discovery_call_click", { source: "founding-program" })}
          >
            {CTA_PRIMARY.label}
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
