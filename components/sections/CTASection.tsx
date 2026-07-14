"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { CONTACT, CTA_PRIMARY } from "@/lib/constants";

export function CTASection() {
  return (
    <SectionContainer id="contact" bordered className="relative overflow-hidden">
      <div className="section-blob section-blob-br" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          Let&apos;s Talk
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
          Your next winning ad is <span className="text-gradient-gold">one call away.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-lg text-foreground-muted">
          Tell me what you&apos;re selling and where you&apos;re running ads. I&apos;ll come back within
          24 hours with creative angles worth testing — no pitch deck, no pressure.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={CTA_PRIMARY.href} size="lg">
            {CTA_PRIMARY.label}
            <ArrowRight size={18} />
          </Button>
          <Button href={CONTACT.whatsapp} variant="outline" size="lg">
            <MessageCircle size={18} />
            WhatsApp
          </Button>
        </motion.div>

        <motion.p variants={fadeInUp} className="mt-8 text-sm text-foreground-dim">
          {CONTACT.email} · {CONTACT.whatsappDisplay}
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}
