"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, CTA_PRIMARY, SITE, SOCIALS } from "@/lib/constants";
import { SOCIAL_ICONS } from "@/components/ui/SocialIcons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the socials dropdown on outside click or Escape
  useEffect(() => {
    if (!socialsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (socialsRef.current && !socialsRef.current.contains(e.target as Node)) {
        setSocialsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSocialsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [socialsOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
            <span className="w-8 h-8 rounded-none overflow-hidden border border-white/15 bg-black flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                priority
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-bold text-base sm:text-lg text-primary">{SITE.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Socials dropdown */}
            <div className="relative" ref={socialsRef}>
              <button
                type="button"
                onClick={() => setSocialsOpen((v) => !v)}
                aria-expanded={socialsOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm text-foreground-muted hover:text-white transition-colors duration-200"
              >
                Socials
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${socialsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {socialsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    role="menu"
                    aria-label="Social links"
                    className="absolute right-0 top-full mt-3 w-52 rounded-none border border-white/10 bg-surface/95 p-2 shadow-[0_18px_44px_-20px_rgba(0,0,0,0.85)] backdrop-blur-md"
                  >
                    {SOCIALS.map((social) => {
                      const Icon = SOCIAL_ICONS[social.icon];
                      const external = social.href !== "#";
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          role="menuitem"
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          onClick={() => setSocialsOpen(false)}
                          className="flex items-center gap-3 rounded-none px-3 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-white/[0.05] hover:text-accent"
                        >
                          <Icon className="h-[18px] w-[18px]" />
                          {social.label}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={CTA_PRIMARY.href}
              className="text-sm border border-accent/40 text-white px-4 py-1.5 rounded-none hover:bg-accent-faint hover:border-accent/70 hover:text-accent transition-all duration-200"
            >
              {CTA_PRIMARY.label}
            </a>
          </div>

          <button
            className="md:hidden text-foreground-muted hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-foreground-muted hover:text-white transition-colors py-3 px-2 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CTA_PRIMARY.href}
                onClick={() => setIsOpen(false)}
                className="mt-2 text-sm text-center border border-accent/40 text-white px-4 py-2 rounded-none hover:bg-accent-faint hover:text-accent transition-all"
              >
                {CTA_PRIMARY.label}
              </a>

              <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/[0.06] pt-4">
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
                      onClick={() => setIsOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/[0.02] text-foreground-muted transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
