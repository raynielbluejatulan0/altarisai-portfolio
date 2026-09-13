"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, CONTACT, SOCIALS } from "@/lib/constants";
import { SOCIAL_ICONS } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background pt-16 pb-10" role="contentinfo">
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-none border border-white/15 bg-black">
          <Image src="/logo.png" alt={`${SITE.name} logo`} width={56} height={56} className="h-full w-full object-cover" />
        </span>
        <p className="font-display text-3xl font-semibold text-primary tracking-[0.12em] uppercase mb-3">
          {SITE.name}
        </p>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-muted mb-5">
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

        <div className="mb-8 flex items-center justify-center gap-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            const external = social.href !== "#";
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/[0.02] text-foreground-muted transition-all hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-foreground-dim/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
