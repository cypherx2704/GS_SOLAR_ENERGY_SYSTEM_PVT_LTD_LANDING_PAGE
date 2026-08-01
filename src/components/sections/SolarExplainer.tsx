"use client";

import * as React from "react";
import { Sun, Grid3x3, Zap, House, Cable } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const STAGES = [
  { icon: Sun, label: "Sunlight", body: "Photons from the sun hit your rooftop panels throughout the day." },
  { icon: Grid3x3, label: "PV Panels", body: "Solar cells convert that sunlight into direct current (DC) electricity." },
  { icon: Zap, label: "Inverter", body: "The inverter converts DC into alternating current (AC) — the power your home uses." },
  { icon: House, label: "Home", body: "Your appliances run on clean solar power first, cutting what you draw from the grid." },
  { icon: Cable, label: "Grid", body: "Surplus is exported to the grid for net-metering credits on your bill." },
];

export function SolarExplainer() {
  const reduced = useReducedMotion();
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const pinRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (reduced || !sectionRef.current || !pinRef.current) return;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=2600",
      pin: pinRef.current,
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => st.kill();
  }, [reduced]);

  const active = reduced ? -1 : Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
  const fillPct = reduced ? 100 : progress * 100;

  return (
    <section ref={sectionRef} className="bg-green-900 text-canvas">
      <div ref={pinRef} className="flex min-h-screen flex-col justify-center overflow-hidden py-20">
        <div className="container-page">
          <p className="eyebrow !text-canvas/60 text-center">How Solar Works</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-tight">
            Sunlight to socket, in five steps.
          </h2>

          {/* Flow */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* connector */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-canvas/15 md:block">
              <div
                className="h-full bg-gold-500 transition-[width] duration-100"
                style={{ width: `${fillPct}%` }}
              />
            </div>

            <ol className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-2">
              {STAGES.map((s, i) => {
                const isActive = reduced || i <= active;
                const Icon = s.icon;
                return (
                  <li key={s.label} className="flex flex-col items-center text-center">
                    <div
                      className={cn(
                        "relative z-10 grid size-16 place-items-center rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "border-gold-500 bg-gold-500 text-green-900 scale-105"
                          : "border-canvas/25 bg-green-900 text-canvas/50",
                      )}
                    >
                      <Icon className="size-7" />
                      {!reduced && i === active && (
                        <span className="absolute inset-0 animate-ping rounded-full border-2 border-gold-400" />
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-3 font-mono text-xs uppercase tracking-widest transition-colors",
                        isActive ? "text-gold-400" : "text-canvas/50",
                      )}
                    >
                      {s.label}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Caption */}
          <div className="relative mx-auto mt-12 h-24 max-w-xl text-center">
            {STAGES.map((s, i) => (
              <p
                key={s.label}
                className={cn(
                  "absolute inset-0 text-lg leading-relaxed text-canvas/80 transition-all duration-500",
                  reduced
                    ? "relative mb-3 opacity-100"
                    : i === active
                      ? "opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0",
                )}
              >
                <span className="font-semibold text-canvas">{s.label}.</span> {s.body}
              </p>
            ))}
          </div>

          {!reduced && (
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-canvas/40">
              Scroll to follow the energy →
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
