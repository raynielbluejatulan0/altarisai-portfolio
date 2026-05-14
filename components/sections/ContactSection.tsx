"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeInUp} className="tag-purple inline-block mb-4">Get In Touch</motion.p>
        <motion.h2 variants={fadeInUp} className="section-title mb-4">
          Ready to Create{" "}
          <span className="text-gradient">Something Stunning?</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-foreground-muted text-lg mb-10">
          Whether you need a full content pack, a one-off campaign, or ongoing visual production — let&apos;s talk.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={`mailto:${CONTACT.email}`} size="lg">
            <Mail size={18} />
            Email Me
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
