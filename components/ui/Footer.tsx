"use client";

import Link from "next/link";
import { NAV_LINKS, SITE, CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background pt-16 pb-10" role="contentinfo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <p className="text-3xl font-bold text-primary glow-text tracking-[0.1em] uppercase mb-3">
          {SITE.name}
        </p>
        <p className="text-xs tracking-[0.3em] uppercase text-accent-muted mb-5">
          {SITE.tagline}
        </p>
        <p className="text-xs text-foreground-dim/60 leading-relaxed mb-8">
          High-converting AI-powered advertising creatives for eCommerce and DTC brands.
        </p>

        <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-foreground-dim hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mb-8 text-xs text-foreground-dim">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
            {CONTACT.email}
          </a>
          {" · "}
          <a href={CONTACT.whatsapp} className="hover:text-foreground transition-colors">
            {CONTACT.whatsappDisplay}
          </a>
        </p>

        <p className="text-xs text-foreground-dim/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
