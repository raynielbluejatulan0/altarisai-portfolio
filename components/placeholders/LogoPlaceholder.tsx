interface LogoPlaceholderProps {
  label?: string;
  className?: string;
}

/** Compact stand-in for a client logo slot. */
export function LogoPlaceholder({ label = "Replace With Client Logo", className = "" }: LogoPlaceholderProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-dashed border-white/15 bg-white/[0.03] px-4 py-2 ${className}`}
    >
      <span className="h-6 w-6 shrink-0 rounded-full border border-white/10 bg-white/[0.06]" aria-hidden />
      <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">{label}</span>
    </div>
  );
}
