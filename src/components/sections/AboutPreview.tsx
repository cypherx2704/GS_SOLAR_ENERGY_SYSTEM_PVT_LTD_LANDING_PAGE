import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { about } from "@/content/about";
import { Reveal } from "@/components/animation/Reveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./Section";

export function AboutPreview() {
  return (
    <section id="about" className="section-y bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <Reveal from="left" className="order-2 lg:order-1">
          <TiltCard className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-gradient-to-br from-green-800 to-green-900">
            {/* placeholder team/company visual */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center text-canvas/80">
                <div className="mx-auto mb-3 grid size-16 place-items-center rounded-full bg-canvas/10">
                  <Target className="size-7 text-gold-400" />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-canvas/50">
                  Team / company photo
                </p>
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gold-500/20 blur-2xl"
            />
          </TiltCard>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Who We Are"
            title="Solar, done"
            accent="properly."
          />
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">{about.whoWeAre}</p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <div className="rounded-[var(--radius-md)] border border-line bg-surface p-5">
                <Target className="size-5 text-green-600" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">Mission</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{about.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-md)] border border-line bg-surface p-5">
                <Eye className="size-5 text-green-600" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">Vision</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{about.vision}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <Button asChild variant="link" className="mt-7 text-base">
              <Link href="/about">
                More about GS Solar <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
