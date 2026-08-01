"use client";

import * as React from "react";
import { process } from "@/content/process";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "./Section";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Process() {
  const railRef = React.useRef<HTMLDivElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !railRef.current || !fillRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: railRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
      // reveal each step as it enters
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    }, railRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="process" className="section-y bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="Eight steps from"
          accent="hello to switched-on."
          align="center"
        />

        <div ref={railRef} className="relative mx-auto mt-16 max-w-3xl pl-2">
          {/* base rail */}
          <div className="absolute left-8 top-2 h-[calc(100%-1rem)] w-px bg-line" />
          {/* scroll-drawn fill */}
          <div
            ref={fillRef}
            className="absolute left-8 top-2 h-[calc(100%-1rem)] w-px origin-top bg-gold-500"
            style={{ transform: reduced ? "scaleY(1)" : "scaleY(0)" }}
          />

          <ol className="space-y-6">
            {process.map((step) => (
              <li key={step.n} className="process-step relative flex items-start gap-6 pl-[4.25rem]">
                {/* node */}
                <span className="absolute left-0 top-1 grid size-[4.25rem] shrink-0 place-items-center rounded-full border-2 border-gold-500 bg-canvas font-mono text-base font-semibold text-green-800">
                  {String(step.n).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-[var(--radius-md)] border border-line bg-surface p-5">
                  <div className="flex items-center gap-2">
                    <Icon name={step.icon} className="size-5 text-green-600" />
                    <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
