"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORKFLOW_STEPS } from "@/lib/constants";

export function WorkflowSection() {
  return (
    <SectionContainer id="process" bordered>
      <SectionHeading
        eyebrow="Our Creative Process"
        title={
          <>
            Every piece follows the same <span className="text-gradient">proven pipeline.</span>
          </>
        }
        subtitle="From product research to final delivery, this is the workflow behind every ad we produce. Research first, generation late, editing always."
      />

      <motion.ol
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {WORKFLOW_STEPS.map((step) => (
          <motion.li
            key={step.step}
            variants={fadeInUp}
            className="glow-card relative overflow-hidden rounded-3xl p-7"
          >
            {/* oversized ghost numeral */}
            <span
              className="font-display pointer-events-none absolute -right-2 -top-6 text-[6rem] font-bold leading-none text-white/[0.04]"
              aria-hidden
            >
              {step.step}
            </span>
            <span className="font-display text-sm font-bold text-accent">{step.step}</span>
            <h3 className="font-display mt-3 text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </SectionContainer>
  );
}
