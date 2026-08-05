import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye } from "lucide-react";
import { about } from "@/content/about";
import { leadership } from "@/content/company";
import { Reveal } from "@/components/animation/Reveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./Section";

/** Directors with a photo on file — the collage needs exactly three. */
const portraits = leadership
  .filter((l): l is typeof l & { photo: string } => Boolean(l.photo))
  .slice(0, 3);

export function AboutPreview() {
  return (
    <section id="about" className="section-y bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual — the real people running the company */}
        <Reveal from="left" className="order-2 lg:order-1">
          <TiltCard className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-green-900">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {portraits.map((p, i) => (
                <div
                  key={p.name}
                  className={cn("relative overflow-hidden bg-green-800", i === 0 && "row-span-2")}
                >
                  <Image
                    src={p.photo}
                    alt={`${p.name}, ${p.role} at GS Solar`}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    /* portraits are framed head-high — crop from the top so faces survive */
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>

            {/* Caption scrim */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-900 via-green-900/80 to-transparent p-5 pt-12">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                Leadership
              </p>
              <p className="mt-1 text-sm font-medium text-canvas">
                Directors you can call directly
              </p>
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
