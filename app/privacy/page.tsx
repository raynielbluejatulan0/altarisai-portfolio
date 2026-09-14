import type { Metadata } from "next";
import Link from "next/link";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles the limited information collected through this website.`,
  alternates: { canonical: "/privacy" },
};

const UPDATED = "September 14, 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8">
      <p className="tag">Legal</p>
      <h1 className="section-title mt-5">Privacy Policy</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
        Last updated: {UPDATED}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground-muted sm:text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">What this covers</h2>
          <p className="mt-3">
            This policy describes how {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
            information collected through {SITE.url}. We collect as little as possible and use it
            only to respond to you and to understand how the site is used.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Information you send us</h2>
          <p className="mt-3">
            If you contact us through the inquiry form, by email, or via WhatsApp, we receive the
            details you choose to share (such as your name, company, website, email address, and
            your message). We use this information solely to respond to your inquiry and, if we
            work together, to deliver the engagement. We do not sell or rent this information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Analytics</h2>
          <p className="mt-3">
            We use privacy-friendly, aggregate analytics (Vercel Analytics) to understand page
            visits and interactions such as button clicks. This does not use cookies and does not
            identify you personally. If we later enable additional analytics or advertising tools
            (such as Google Analytics or the Meta Pixel), this policy will be updated to reflect
            that before or at the time they are activated.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Third-party services</h2>
          <p className="mt-3">
            The site links to third-party platforms (WhatsApp, social networks, and, once enabled,
            a scheduling service). Information you share on those platforms is governed by their
            own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Retention and your rights</h2>
          <p className="mt-3">
            We keep inquiry correspondence only as long as needed to handle your request or
            engagement. You can ask us at any time to access, correct, or delete the information
            you have sent us by writing to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
          <p className="mt-3">
            Questions about this policy:{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </section>
      </div>

      <p className="mt-14">
        <Link href="/" className="text-sm text-foreground-dim transition-colors hover:text-foreground">
          ← Back to {SITE.name}
        </Link>
      </p>
    </div>
  );
}
