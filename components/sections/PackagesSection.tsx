"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PACKAGES, PACKAGES_PRICING_NOTE, CTA_PRIMARY } from "@/lib/constants";
import { BOOKING_CONFIGURED } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function PackagesSection() {
  return (
    <SectionContainer id="packages" bordered>
      <SectionHeading
        eyebrow="Engagements"
        title={
          <>
            Three ways to <span className="text-gradient">work together.</span>
          </>
        }
        subtitle="Scoped around what your ad account actually needs, from a first focused test to an ongoing creative system."
      />

      <motion.div
        className="grid gap-6 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {PACKAGES.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeInUp}
            className="glow-card relative flex flex-col overflow-hidden rounded-3xl p-8"
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent">
              Package {pkg.number}
            </span>
            <h3 className="font-display mt-3 text-2xl font-bold text-foreground">{pkg.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{pkg.audience}</p>

            <ul className="mt-6 flex-1 space-y-2 border-t border-white/[0.06] pt-5">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/[0.06] pt-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
                {PACKAGES_PRICING_NOTE}
              </p>
              <Button
                href={CTA_PRIMARY.href}
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                target={BOOKING_CONFIGURED ? "_blank" : undefined}
                rel={BOOKING_CONFIGURED ? "noopener noreferrer" : undefined}
                onClick={() => trackEvent("package_cta_click", { package: pkg.name })}
              >
                {CTA_PRIMARY.label}
                <ArrowRight size={14} />
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-10 text-center text-xs leading-relaxed text-foreground-dim"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Inclusions are tailored to each engagement on the discovery call. Every project includes agreed
        revision rounds and defined deliverables.
      </motion.p>
    </SectionContainer>
  );
}
