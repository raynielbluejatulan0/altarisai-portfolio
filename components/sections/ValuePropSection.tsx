"use client";

import { motion } from "framer-motion";
import { Target, Zap, FlaskConical, type LucideIcon } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { VALUE_PROPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  FlaskConical,
};

export function ValuePropSection() {
  return (
    <SectionContainer bordered>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="section-title mx-auto max-w-3xl text-center text-balance"
        >
          High-converting ad creative,{" "}
          <span className="text-gradient">without traditional production.</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                className="glow-card rounded-3xl p-8"
              >
                {Icon && (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent-faint">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                )}
                <h3 className="font-display mt-6 text-xl font-bold text-foreground">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{prop.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
