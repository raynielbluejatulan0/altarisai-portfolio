"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, CONTACT, SOCIALS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { SOCIAL_ICONS } from "@/components/ui/SocialIcons";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background pt-16 pb-10" role="contentinfo">
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Symbol-only mark */}
        <Image
          src="/logo.png"
          alt={`${SITE.name} logo`}
          width={56}
          height={56}
          className="mx-auto mb-6 h-14 w-14 object-contain"
        />
        <p className="font-display text-3xl font-semibold text-primary tracking-[0.12em] uppercase mb-3">
          {SITE.name}
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-8">
          {SITE.positioning}
        </p>

        <nav className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
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
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-foreground transition-colors"
            onClick={() => trackEvent("email_click", { source: "footer" })}
          >
            {CONTACT.email}
          </a>
          {" · "}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            onClick={() => trackEvent("whatsapp_click", { source: "footer" })}
          >
            {CONTACT.whatsappDisplay}
          </a>
        </p>

        <div className="mb-8 flex items-center justify-center gap-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/[0.02] text-foreground-muted transition-all hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-center gap-x-6" aria-label="Legal">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-foreground-dim hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-foreground-dim">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
