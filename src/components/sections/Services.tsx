import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Icon } from "@/components/Icon";
import { RevealGroup, RevealItem, Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

export function Services() {
  // Show the 6 headline service types on the landing page; full grid at /services.
  const featured = services.slice(0, 6);

  return (
    <section id="services" className="section-y bg-canvas">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Solar services for"
            accent="every rooftop."
          />
          <Reveal>
            <Button asChild variant="outline">
              <Link href="/services">
                All services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-lg"
              >
                <ArrowUpRight className="absolute right-5 top-5 size-5 text-ink-faint transition-colors group-hover:text-green-800" />
                <div className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-gold-500/15 text-green-800">
                  <Icon name={s.icon} className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.short}</p>
                <span className="mt-4 text-sm font-medium text-green-800">Know more</span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
