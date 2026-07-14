interface CaseStudyBlockProps {
  index: number;
  eyebrow: string;
  title: string;
  /** Constrain children to the reading column (default) or let them span full width */
  wide?: boolean;
  children: React.ReactNode;
}

/** Numbered narrative block for case study pages. */
export function CaseStudyBlock({ index, eyebrow, title, wide = false, children }: CaseStudyBlockProps) {
  return (
    <section className="border-t border-white/[0.06] py-14 sm:py-16">
      <div className={wide ? "" : "mx-auto max-w-3xl"}>
        <div className="mx-auto flex max-w-3xl items-baseline gap-5">
          <span className="font-display text-sm font-bold text-accent">
            {String(index).padStart(2, "0")}
          </span>
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-foreground-dim">
              {eyebrow}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
          </div>
        </div>
        <div className={`mt-8 ${wide ? "" : "pl-0 sm:pl-10"}`}>{children}</div>
      </div>
    </section>
  );
}
