import { whySolar } from "@/content/benefits";
import { Icon } from "@/components/Icon";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";

export function WhySolar() {
  return (
    <section id="why-solar" className="section-y bg-surface-warm">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Solar?"
          title="Six reasons it just"
          accent="makes sense."
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whySolar.map((b) => (
            <RevealItem key={b.title}>
              <div className="group h-full rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-lg">
                <div className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800 transition-colors group-hover:bg-green-800 group-hover:text-canvas">
                  <Icon name={b.icon} className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
