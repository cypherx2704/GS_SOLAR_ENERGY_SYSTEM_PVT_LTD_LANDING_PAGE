"use client";

import * as React from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "./Section";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const count = testimonials.length;
  const go = (d: number) => setIndex((i) => (i + d + count) % count);

  return (
    <section id="testimonials" className="section-y bg-surface-warm">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What customers"
          accent="say."
          align="center"
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface p-8 sm:p-12">
            <Quote className="size-10 text-gold-500" />
            <div className="relative mt-6 min-h-[9rem]">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    i === index ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
                  )}
                  aria-hidden={i !== index}
                >
                  <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                    “{t.quote}”
                  </p>
                  <footer className="mt-6 flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full bg-green-800 font-display text-lg font-semibold text-canvas">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <cite className="font-medium not-italic text-ink">{t.name}</cite>
                        {t.placeholder && (
                          <span className="rounded bg-gold-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
                            Sample
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ink-faint">
                        {t.segment} · {t.location}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="size-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-6 bg-green-800" : "w-2 bg-line hover:bg-ink-faint",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-green-800 hover:text-canvas"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-green-800 hover:text-canvas"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
