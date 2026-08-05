"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { PhoneCall, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { primaryPhone, telHref, company } from "@/content/company";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <StaticHeroVisual pending />,
});

/**
 * What the customer gets — true independent of project counts, and deliberately
 * distinct from the TrustStrip directly below, which covers what we do operationally.
 */
const heroHighlights = [
  "Itemised, comparable quotes",
  "On-grid, hybrid & off-grid",
  "25-year design life",
  "Chennai & across Tamil Nadu",
];

/** Cheap WebGL capability probe so we never mount a canvas that can't paint. */
function webglSupported(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/** Error boundary so a runtime WebGL failure degrades to the static visual. */
class SceneBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function Hero() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [canWebGL, setCanWebGL] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    setCanWebGL(webglSupported());
  }, []);

  // Only mount WebGL after hydration, when motion is allowed and GL is available.
  const showWebGL = mounted && !reduced && canWebGL;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-gold-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 size-[30rem] rounded-full bg-green-400/10 blur-3xl"
      />

      <div className="container-page relative grid min-h-[92vh] items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        {/* Left — copy */}
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-2 opacity-0 [animation:fadeUp_0.6s_var(--ease-out-soft)_0.1s_forwards]">
            <Sparkles className="size-3.5 text-gold-600" />
            {company.address.city} · {company.segments.join(" · ")}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,6.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink opacity-0 [animation:fadeUp_0.8s_var(--ease-out-soft)_0.2s_forwards]">
            Power Your Future with{" "}
            <span className="text-green-800">Clean Solar Energy</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted opacity-0 [animation:fadeUp_0.8s_var(--ease-out-soft)_0.35s_forwards]">
            Reduce electricity bills by up to 90%. GS Solar designs, installs and
            services rooftop solar for homes, businesses and industries — with
            full government-subsidy assistance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 opacity-0 [animation:fadeUp_0.8s_var(--ease-out-soft)_0.5s_forwards]">
            <MagneticButton>
              <QuoteButton size="lg" variant="gold">
                Get Free Quote
              </QuoteButton>
            </MagneticButton>
            <Button asChild size="lg" variant="outline">
              <a href={telHref(primaryPhone.value)}>
                <PhoneCall /> Call Now
              </a>
            </Button>
          </div>

          {/* What we actually do — no unverifiable counts, just the offering. */}
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 opacity-0 [animation:fadeUp_0.8s_var(--ease-out-soft)_0.65s_forwards]">
            {heroHighlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-2 text-sm text-ink-muted">
                <Check className="size-4 shrink-0 text-green-600" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — WebGL hero (falls back to static under reduced motion) */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          {showWebGL ? (
            <SceneBoundary fallback={<StaticHeroVisual />}>
              <div className="absolute inset-0">
                <HeroScene />
              </div>
            </SceneBoundary>
          ) : (
            <StaticHeroVisual />
          )}
        </div>
      </div>
    </section>
  );
}

/** Static CSS/SVG stand-in for reduced-motion / pre-hydration / no-WebGL. */
function StaticHeroVisual({ pending = false }: { pending?: boolean }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-md lg:max-w-none">
      <div
        className="relative aspect-square rounded-[var(--radius-xl)] border border-line bg-gradient-to-br from-surface to-surface-warm p-8 shadow-xl"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute right-10 top-10 size-28 rounded-full bg-gradient-to-b from-gold-400 to-gold-500 shadow-[0_0_60px_-5px_var(--color-gold-500)]" />
        <div
          className="absolute bottom-12 left-1/2 grid aspect-[4/3] w-3/4 -translate-x-1/2 grid-cols-4 grid-rows-3 gap-1.5 rounded-lg bg-green-900 p-2 shadow-2xl"
          style={{ transform: "rotateX(52deg) rotateZ(-32deg)" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rounded-sm bg-green-800/90 ring-1 ring-green-600/40" />
          ))}
        </div>
        {pending && (
          <span className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            Loading 3D…
          </span>
        )}
      </div>
    </div>
  );
}
