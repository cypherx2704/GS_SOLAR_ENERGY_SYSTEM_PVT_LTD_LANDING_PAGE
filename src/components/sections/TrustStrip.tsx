import { trustBadges } from "@/content/benefits";
import { Icon } from "@/components/Icon";

/** Trust strip — text/badge chips stating verifiable facts, no invented logos. */
export function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface-warm/60">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center">
        {trustBadges.map((b) => (
          <span
            key={b.label}
            title={b.note}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted"
          >
            <Icon name={b.icon} className="size-4 text-green-600" />
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}
