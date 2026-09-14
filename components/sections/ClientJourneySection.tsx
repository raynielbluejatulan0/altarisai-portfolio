"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_JOURNEY } from "@/lib/constants";

export function ClientJourneySection() {
  return (
    <SectionContainer id="process" bordered>
      <SectionHeading
        eyebrow="Working Together"
        title={
          <>
            From first call to <span className="text-gradient">final creative.</span>
          </>
        }
        subtitle="What an engagement actually looks like from your side, in six steps."
      />

      <motion.ol
        className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {CLIENT_JOURNEY.map((step) => (
          <motion.li
            key={step.step}
            variants={fadeInUp}
            className="glow-card relative overflow-hidden rounded-3xl p-7"
          >
            <span className="font-display text-sm font-bold text-accent">{step.step}</span>
            <h3 className="font-display mt-3 text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </SectionContainer>
  );
}
