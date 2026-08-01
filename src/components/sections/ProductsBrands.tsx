import { PackageOpen, Handshake } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * Products (§13) + Brands (§14) — PLACEHOLDER SHELLS ONLY.
 * Per the client's hard constraint, we do NOT invent any solar products or
 * partner brand names. These stay as clearly-labelled "coming soon" panels
 * until the client provides the real lists.
 */
export function ProductsBrands() {
  return (
    <section id="products" className="section-y bg-canvas">
      <div className="container-page grid gap-6 md:grid-cols-2">
        <Reveal from="left">
          <Placeholder
            icon={<PackageOpen className="size-7" />}
            eyebrow="Products"
            title="Product line-up coming soon"
            body="Our full range of solar products will be listed here. Details are being finalised — check back shortly."
          />
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <Placeholder
            icon={<Handshake className="size-7" />}
            eyebrow="Brands We Work With"
            title="Trusted brand partners, coming soon"
            body="The panel, inverter and battery brands we work with will appear here once confirmed."
          />
        </Reveal>
      </div>
    </section>
  );
}

function Placeholder({
  icon,
  eyebrow,
  title,
  body,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-line bg-surface-warm/50 p-8">
      <div className="grid size-14 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
        {icon}
      </div>
      <p className="eyebrow mt-5">{eyebrow}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-md text-ink-muted">{body}</p>
      <span className="mt-5 inline-block rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        Awaiting content
      </span>
    </div>
  );
}
