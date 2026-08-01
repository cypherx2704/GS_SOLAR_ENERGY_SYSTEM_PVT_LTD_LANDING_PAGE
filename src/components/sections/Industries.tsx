import { industries } from "@/content/industries";
import { Icon } from "@/components/Icon";
import { Marquee } from "@/components/animation/Marquee";
import { SectionHeading } from "./Section";

function Chip({ name, icon }: { name: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-6 py-3 text-base font-medium text-ink">
      <Icon name={icon} className="size-5 text-green-600" />
      {name}
    </span>
  );
}

export function Industries() {
  const half = Math.ceil(industries.length / 2);
  const rowA = industries.slice(0, half);
  const rowB = industries.slice(half);

  return (
    <section id="industries" className="section-y bg-surface-warm">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Powering every kind of"
          accent="rooftop."
          align="center"
        />
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <Marquee speed={38}>
          {rowA.map((i) => (
            <Chip key={i.name} name={i.name} icon={i.icon} />
          ))}
        </Marquee>
        <Marquee speed={44} reverse>
          {rowB.map((i) => (
            <Chip key={i.name} name={i.name} icon={i.icon} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
