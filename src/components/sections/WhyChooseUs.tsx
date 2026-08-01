import { whyChooseUs } from "@/content/benefits";
import { Icon } from "@/components/Icon";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-y bg-green-900 text-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Eight reasons to choose"
          accent="GS Solar."
          tone="dark"
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-canvas/10 bg-canvas/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((b) => (
            <RevealItem key={b.title}>
              <div className="h-full bg-green-900 p-6 transition-colors hover:bg-green-800">
                <div className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-gold-500/15 text-gold-400">
                  <Icon name={b.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-canvas">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-canvas/65">{b.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
