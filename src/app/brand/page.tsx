import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand & Logo Review",
  robots: { index: false },
};

const concepts = [
  {
    id: "sun-panel",
    name: "1 · Sun-Panel Monogram",
    blurb: "A rising sun over a solar panel in perspective. Warm, literal, confident.",
  },
  {
    id: "sunburst",
    name: "2 · Sunburst",
    blurb: "Radial gold rays cresting a green horizon. Minimal, optimistic, editorial.",
  },
  {
    id: "roofline",
    name: "3 · Roofline",
    blurb: "A sun cresting a stylized roof/panel chevron. Geometric, rooftop-focused.",
  },
];

const palette = [
  ["canvas", "#FAF9F5"],
  ["surface-warm", "#F4F2EA"],
  ["ink", "#1A1A18"],
  ["green-900", "#0B3320"],
  ["green-800", "#14532D"],
  ["green-600", "#2E8B57"],
  ["gold-600", "#D99A00"],
  ["gold-500", "#F5B301"],
  ["gold-400", "#FFC730"],
];

export default function BrandPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <header className="max-w-2xl">
        <p className="eyebrow">Phase 1 · Design Checkpoint</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Brand & Logo Review
        </h1>
        <p className="mt-4 text-ink-muted">
          Three original logo concepts in the GS Solar palette — each shown as a
          full lockup and a standalone mark, on light and dark. Pick your
          primary; the other two become alternates.
        </p>
      </header>

      {/* Logos */}
      <div className="mt-16 space-y-10">
        {concepts.map((c) => (
          <section
            key={c.id}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-line"
          >
            <div className="border-b border-line bg-surface px-6 py-4">
              <h2 className="font-display text-xl font-semibold text-ink">{c.name}</h2>
              <p className="text-sm text-ink-muted">{c.blurb}</p>
            </div>
            <div className="grid md:grid-cols-2">
              {/* Light */}
              <div className="flex flex-col items-center justify-center gap-8 bg-canvas px-6 py-14">
                <Image
                  src={`/logos/logo-${c.id}-lockup.svg`}
                  alt={`${c.name} lockup on light`}
                  width={260}
                  height={70}
                />
                <Image
                  src={`/logos/logo-${c.id}-mark.svg`}
                  alt={`${c.name} mark on light`}
                  width={72}
                  height={72}
                />
              </div>
              {/* Dark */}
              <div className="flex flex-col items-center justify-center gap-8 bg-green-900 px-6 py-14">
                <Image
                  src={`/logos/logo-${c.id}-lockup.svg`}
                  alt={`${c.name} lockup on dark`}
                  width={260}
                  height={70}
                  className="brightness-0 invert"
                />
                <Image
                  src={`/logos/logo-${c.id}-mark.svg`}
                  alt={`${c.name} mark on dark`}
                  width={72}
                  height={72}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Palette */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold text-ink">Colour palette</h2>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {palette.map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-[var(--radius-md)] border border-line">
              <div className="h-16 w-full" style={{ background: hex }} />
              <div className="bg-surface px-2 py-1.5">
                <p className="font-mono text-[11px] text-ink">{name}</p>
                <p className="font-mono text-[10px] text-ink-faint">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Type specimen */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold text-ink">Typography</h2>
        <div className="mt-6 space-y-6 rounded-[var(--radius-lg)] border border-line bg-surface p-8">
          <div>
            <p className="eyebrow">Display · Fraunces</p>
            <p className="font-display text-5xl font-semibold text-ink">
              Clean solar energy.
            </p>
          </div>
          <div>
            <p className="eyebrow">Body · Geist Sans</p>
            <p className="max-w-2xl text-lg text-ink-muted">
              GS Solar designs, installs and services rooftop solar for homes,
              businesses and industries across Chennai and Tamil Nadu.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mono · Geist Mono</p>
            <p className="font-mono text-ink">25 kW · ₹18,00,000 · 5000 T CO₂</p>
          </div>
        </div>
      </section>
    </div>
  );
}
