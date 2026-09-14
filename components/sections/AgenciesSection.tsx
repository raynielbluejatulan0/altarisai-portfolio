"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { AGENCY, CONTACT } from "@/lib/constants";
import { INTEGRATIONS } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function AgenciesSection() {
  // Calendly when configured; otherwise a subject-tagged email to the working inbox.
  const href =
    INTEGRATIONS.calendlyUrl ??
    `mailto:${CONTACT.email}?subject=${encodeURIComponent("Agency Partnership")}`;

  return (
    <SectionContainer id="agencies" bordered>
      <motion.div
        className="mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="text-center">
          <motion.span variants={fadeInUp} className="tag inline-block">
            {AGENCY.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
            Your creative <span className="text-gradient">production partner.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            {AGENCY.copy}
          </motion.p>
        </div>

        <motion.ul
          variants={staggerContainer}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AGENCY.benefits.map((benefit) => (
            <motion.li
              key={benefit}
              variants={fadeInUp}
              className="glow-card flex items-center gap-3 rounded-2xl px-5 py-4"
            >
              <Layers className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
              <span className="text-sm text-foreground-muted">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Button
            href={href}
            size="lg"
            variant="outline"
            target={INTEGRATIONS.calendlyUrl ? "_blank" : undefined}
            rel={INTEGRATIONS.calendlyUrl ? "noopener noreferrer" : undefined}
            onClick={() => trackEvent("agency_cta_click")}
          >
            {AGENCY.ctaLabel}
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
