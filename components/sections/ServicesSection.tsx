"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clapperboard,
  Smartphone,
  Rocket,
  Compass,
  PenLine,
  Sparkles,
  Scissors,
  FlaskConical,
  Check,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Clapperboard,
  Smartphone,
  Rocket,
  Compass,
  PenLine,
  Sparkles,
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
            Everything your ad account needs, <span className="text-gradient">nothing it doesn&apos;t.</span>
          </>
        }
        subtitle="Not a list of tools, but a set of outcomes. Each service exists to put better-performing creative into your campaigns."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="glow-card group flex flex-col rounded-3xl p-8"
            >
              <div className="flex items-center gap-4">
                {Icon && (
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-faint transition-colors group-hover:border-accent/40">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-foreground">{service.title}</h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground-dim">{service.problem}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">{service.solution}</p>

              <ul className="mt-5 space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                {service.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.7rem] tracking-wide text-foreground-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
