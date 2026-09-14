import type { Metadata } from "next";
import Link from "next/link";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${SITE.name} website.`,
  alternates: { canonical: "/terms" },
};

const UPDATED = "September 14, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8">
      <p className="tag">Legal</p>
      <h1 className="section-title mt-5">Terms of Use</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
        Last updated: {UPDATED}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground-muted sm:text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Use of this website</h2>
          <p className="mt-3">
            This website presents the services and creative work of {SITE.name}. By using it you
            agree to these terms. The site&apos;s content is provided for general information about
            our services and does not constitute a binding offer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Intellectual property</h2>
          <p className="mt-3">
            The creative work, copy, design, and branding shown on this site belong to
            {" "}{SITE.name} or their respective owners and may not be reproduced or reused without
            permission. Portfolio pieces are shown to demonstrate creative capability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">No performance guarantees</h2>
          <p className="mt-3">
            Advertising performance depends on many factors outside creative production, including
            offer, pricing, media buying, and market conditions. Nothing on this site guarantees
            specific advertising results, and descriptions of our process are not promises of
            outcomes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Engagements</h2>
          <p className="mt-3">
            Client engagements, including scope, deliverables, revisions, timelines, and pricing,
            are defined in the individual agreement or written scope for each project. Those
            documents take precedence over this website&apos;s general descriptions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Liability</h2>
          <p className="mt-3">
            The site is provided &ldquo;as is&rdquo;. To the extent permitted by law, {SITE.name}
            {" "}is not liable for damages arising from the use of this website or from reliance on
            its content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
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
