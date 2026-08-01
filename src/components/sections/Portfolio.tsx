import Link from "next/link";
import { ArrowRight, MapPin, Zap, ImageOff } from "lucide-react";
import { projects } from "@/content/projects";
import { RevealGroup, RevealItem, Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  return (
    <section id="projects" className="section-y bg-surface-warm">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Portfolio" title="Recent" accent="projects." />
          <Reveal>
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-800 to-green-900">
                  <div className="absolute inset-0 grid place-items-center text-canvas/40">
                    <ImageOff className="size-8" />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-canvas/90 px-2.5 py-1 text-xs font-medium text-green-900">
                    {p.category}
                  </span>
                  {p.placeholder && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                      Sample
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4 text-green-600" /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Zap className="size-4 text-green-600" /> {p.capacityKw} kW
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
