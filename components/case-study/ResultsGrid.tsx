import { MetricPlaceholder } from "@/components/placeholders/MetricPlaceholder";
import type { Metric } from "@/lib/portfolio";

interface ResultsGridProps {
  results: Metric[];
}

/** Performance metrics grid — values render "Coming Soon" until real data exists. */
export function ResultsGrid({ results }: ResultsGridProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {results.map((metric) => (
          <MetricPlaceholder key={metric.label} metric={metric} />
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-foreground-dim">
        Performance metrics are published only from real campaign data — coming soon.
      </p>
    </div>
  );
}
