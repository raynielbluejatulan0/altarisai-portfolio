"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_FIT } from "@/lib/constants";

export function ClientFitSection() {
  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow={CLIENT_FIT.eyebrow}
        title={
          <>
            Is ALTARIS AI <span className="text-gradient">the right fit?</span>
          </>
        }
        subtitle="We do our best work with a specific kind of brand. Being clear about that up front saves everyone time."
      />

      <motion.div
        className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeInUp} className="glow-card rounded-3xl p-8">
          <h3 className="font-display text-lg font-bold text-foreground">A strong fit</h3>
          <ul className="mt-5 space-y-3">
            {CLIENT_FIT.goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="glow-card rounded-3xl p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Probably not the right fit</h3>
          <ul className="mt-5 space-y-3">
            {CLIENT_FIT.notFit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-foreground-dim" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
