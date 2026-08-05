import { Navigation } from "lucide-react";
import { company, mapQuery } from "@/content/company";
import { cn } from "@/lib/utils";

/**
 * Live office map. Uses Google's keyless `output=embed` endpoint, so it works
 * without an API key or billing account; swap the src for the Maps Embed API
 * (`/maps/embed/v1/place?key=…`) if a keyed, styled map is wanted later.
 */
export function OfficeMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface",
        className,
      )}
    >
      <iframe
        title={`Map showing the ${company.shortName} office in ${company.address.line2}, ${company.address.city}`}
        src={`https://www.google.com/maps?q=${mapQuery()}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[18rem] w-full flex-1 border-0"
      />
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 border-t border-line px-5 py-4 text-sm transition-colors hover:bg-surface-warm"
      >
        <span className="text-ink-muted">
          <span className="font-medium text-ink">{company.address.line2}</span>,{" "}
          {company.address.city} {company.address.pincode}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-medium text-green-800">
          <Navigation className="size-4" /> Directions
        </span>
      </a>
    </div>
  );
}
