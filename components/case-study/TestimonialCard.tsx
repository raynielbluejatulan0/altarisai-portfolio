import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/portfolio";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Testimonial card — renders a polished "Coming Soon" state when quote is
 * null. Real testimonials are added by filling in quote/author in the data.
 */
export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  const { quote, author, role } = testimonial;

  return (
    <figure className={`glow-card flex h-full flex-col rounded-3xl p-8 ${className}`}>
      <Quote className="h-6 w-6 text-accent/50" aria-hidden />
      {quote ? (
        <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </blockquote>
      ) : (
        <div className="mt-5 flex-1">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-accent-muted">
            Client Testimonial
          </p>
          <p className="mt-2 text-sm text-foreground-dim">Coming Soon</p>
          {/* ghost lines suggesting a future quote */}
          <div className="mt-5 space-y-2.5" aria-hidden>
            <div className="h-2 w-full rounded-full bg-white/[0.05]" />
            <div className="h-2 w-5/6 rounded-full bg-white/[0.05]" />
            <div className="h-2 w-3/6 rounded-full bg-white/[0.05]" />
          </div>
        </div>
      )}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <span className="h-9 w-9 shrink-0 rounded-full border border-dashed border-white/15 bg-white/[0.04]" aria-hidden />
        <div>
          <p className="text-sm font-medium text-foreground">{author ?? "Future Success Story"}</p>
          {role && <p className="text-xs text-foreground-dim">{role}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
