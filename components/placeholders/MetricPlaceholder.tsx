import type { Metric } from "@/lib/portfolio";

interface MetricPlaceholderProps {
  metric: Metric;
}

/** Performance metric tile — renders "Coming Soon" when value is null (never invented numbers). */
export function MetricPlaceholder({ metric }: MetricPlaceholderProps) {
  return (
    <div className="glow-card rounded-2xl px-5 py-6 text-center">
      <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-foreground-dim">
        {metric.label}
      </p>
      {metric.value ? (
        <p className="font-display mt-3 text-2xl font-bold text-accent">{metric.value}</p>
      ) : (
        <p className="mt-3 text-sm font-medium tracking-wide text-foreground-muted">Coming Soon</p>
      )}
    </div>
  );
}
