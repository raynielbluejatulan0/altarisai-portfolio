"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { CONTACT, CONTACT_SECTION, CTA_PRIMARY } from "@/lib/constants";
import { BOOKING_CONFIGURED } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { QualificationForm } from "@/components/forms/QualificationForm";

export function CTASection() {
  // Until the Calendly link is configured, "Book a Discovery Call" leads to
  // the qualification form below — a real, working path to a scheduled call.
  const bookingHref = BOOKING_CONFIGURED ? CTA_PRIMARY.href : "#qualification-form";

  return (
    <SectionContainer id="contact" bordered className="relative overflow-hidden">
      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          {CONTACT_SECTION.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
          Let&apos;s build your next <span className="text-gradient-gold">creative test.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-lg text-foreground-muted">
          {CONTACT_SECTION.copy}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href={bookingHref}
            size="lg"
            target={BOOKING_CONFIGURED ? "_blank" : undefined}
            rel={BOOKING_CONFIGURED ? "noopener noreferrer" : undefined}
            onClick={() => trackEvent("discovery_call_click", { source: "contact" })}
          >
            {CTA_PRIMARY.label}
            <ArrowRight size={18} />
          </Button>
          <Button
            href={CONTACT.whatsapp}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { source: "contact" })}
          >
            <MessageCircle size={18} />
            WhatsApp
          </Button>
        </motion.div>

        <motion.p variants={fadeInUp} className="mt-8 text-sm text-foreground-dim">
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-foreground"
            onClick={() => trackEvent("email_click", { source: "contact" })}
          >
            {CONTACT.email}
          </a>
          {" · "}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            onClick={() => trackEvent("whatsapp_click", { source: "contact-line" })}
          >
            {CONTACT.whatsappDisplay}
          </a>
        </motion.p>
        {!BOOKING_CONFIGURED && (
          <motion.p variants={fadeInUp} className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
            Calls are scheduled by reply within 24 hours
          </motion.p>
        )}
      </motion.div>

      <motion.div
        id="qualification-form"
        className="mt-16 scroll-mt-28"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <QualificationForm />
      </motion.div>
    </SectionContainer>
  );
}
