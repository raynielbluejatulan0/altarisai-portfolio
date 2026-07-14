interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

/** Standard section header: eyebrow tag + Syne title + muted subtitle. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${alignment} mb-14 sm:mb-16`}>
      <span className="tag">{eyebrow}</span>
      <h2 className="section-title mt-5 text-balance">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === "left" ? "mx-0" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
