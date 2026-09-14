"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Clapperboard,
  Scissors,
  FlaskConical,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_GROUPS, SERVICES_FLOW } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Clapperboard,
  Scissors,
  FlaskConical,
};

export function ServicesSection() {
  return (
    <SectionContainer id="services" bordered>
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            One creative system, <span className="text-gradient">not nine services.</span>
          </>
        }
        subtitle="Everything we do feeds one pipeline: strategy decides what is worth making, production makes it, and testing tells us what to make next."
      />

      {/* Flow strip: Strategy → Creative → Production → Testing */}
      <motion.div
        className="mb-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-label="Creative system flow"
      >
        {SERVICES_FLOW.map((stage, i) => (
          <span key={stage} className="flex items-center gap-3 sm:gap-4">
            <span className="border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted">
              {stage}
            </span>
            {i < SERVICES_FLOW.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 text-accent/70" aria-hidden />
            )}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {SERVICE_GROUPS.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <motion.div
              key={group.title}
              variants={fadeInUp}
              className="glow-card group relative flex flex-col overflow-hidden rounded-3xl p-8 sm:p-9"
            >
              {/* oversized ghost numeral */}
              <span
                className="font-display pointer-events-none absolute -right-3 -top-8 text-[7rem] font-bold leading-none text-white/[0.04]"
                aria-hidden
              >
                {group.number}
              </span>

              <div className="flex items-center gap-4">
                {Icon && (
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-faint transition-colors group-hover:border-accent/40">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                )}
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                    {group.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">{group.title}</h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {group.summary}
              </p>

              <ul className="mt-6 grid gap-2 border-t border-white/[0.06] pt-5 sm:grid-cols-2">
                {group.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
