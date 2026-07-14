"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTA_PRIMARY } from "@/lib/constants";

/** Closing CTA for case study pages. */
export function CaseStudyCta() {
  return (
    <section className="border-t border-white/[0.06] py-16 text-center sm:py-20">
      <h2 className="section-title text-balance">
        Want creative like this <span className="text-gradient-gold">for your brand?</span>
      </h2>
      <p className="section-subtitle">
        The same pipeline — research, hooks, script, AI production, and final cut — applied to your product.
      </p>
      <div className="mt-10">
        <Button href={CTA_PRIMARY.href} size="lg">
          {CTA_PRIMARY.label}
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}
