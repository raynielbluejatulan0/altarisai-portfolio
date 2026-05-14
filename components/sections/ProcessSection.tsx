"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <SectionContainer id="process">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">How I Work</p>
        <h2 className="section-title">From Brief to Delivery</h2>
        <p className="section-subtitle">
          A clear, fast process — from alignment to production-ready assets.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PROCESS_STEPS.map((step, i) => (
          <motion.div key={step.step} variants={fadeInUp} className="relative">
            {/* Connector line */}
            {i < PROCESS_STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
            )}
            <div className="glow-card rounded-2xl p-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.10] flex items-center justify-center mb-4">
                <span className="text-white/60 font-bold text-sm">{step.step}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
