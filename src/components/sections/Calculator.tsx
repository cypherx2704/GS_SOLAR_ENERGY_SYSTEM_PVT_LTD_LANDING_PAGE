"use client";

import * as React from "react";
import { Sun, IndianRupee, Clock, Leaf, BadgeIndianRupee, Info } from "lucide-react";
import {
  calculateSolar,
  inr,
  ASSUMPTIONS,
  type RoofType,
} from "@/lib/calculator";
import { Counter } from "@/components/animation/Counter";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { QuoteButton } from "@/components/layout/QuoteButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CITIES = ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"];
const ROOFS: RoofType[] = ["RCC / Flat", "Sloped / Tiled", "Metal Sheet"];

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="font-mono text-sm font-semibold text-green-800">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-800 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-green-800"
        style={{
          background: `linear-gradient(to right, var(--color-gold-500) 0%, var(--color-gold-500) ${pct}%, var(--color-line) ${pct}%, var(--color-line) 100%)`,
        }}
      />
    </div>
  );
}

export function Calculator() {
  const [bill, setBill] = React.useState(3000);
  const [city, setCity] = React.useState("Chennai");
  const [roofType, setRoofType] = React.useState<RoofType>("RCC / Flat");
  const [roofSize, setRoofSize] = React.useState(600);

  const r = React.useMemo(
    () => calculateSolar({ monthlyBill: bill, roofType, roofSize }),
    [bill, roofType, roofSize],
  );

  return (
    <section id="calculator" className="section-y bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Solar Savings Calculator"
          title="See what solar could"
          accent="save you."
          description="Move the sliders for an instant, transparent estimate. It's indicative — we confirm exact numbers after a free site survey."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Inputs */}
          <Reveal from="left">
            <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-8">
              <div className="space-y-8">
                <Slider
                  label="Average monthly electricity bill"
                  value={bill}
                  min={500}
                  max={50000}
                  step={500}
                  onChange={setBill}
                  format={(v) => inr(v)}
                />
                <Slider
                  label="Available roof area"
                  value={roofSize}
                  min={100}
                  max={5000}
                  step={50}
                  onChange={setRoofSize}
                  format={(v) => `${v.toLocaleString("en-IN")} sq ft`}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink">City</label>
                    <div className="mt-2">
                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger aria-label="City">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CITIES.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink">Roof type</label>
                    <div className="mt-2">
                      <Select value={roofType} onValueChange={(v) => setRoofType(v as RoofType)}>
                        <SelectTrigger aria-label="Roof type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ROOFS.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-ink-faint">
                <Info className="mt-0.5 size-3.5 shrink-0" />
                Estimate uses ~₹{ASSUMPTIONS.tariffPerUnit}/unit, {ASSUMPTIONS.peakSunHours}{" "}
                peak sun-hours/day and current PM Surya Ghar subsidy slabs. Figures are
                indicative and subject to a site survey &amp; scheme confirmation.
              </p>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal from="right" delay={0.1}>
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-green-900 p-6 text-canvas sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gold-500/20 blur-2xl"
              />
              <div className="relative">
                {/* Headline metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <Metric
                    icon={<Sun className="size-5" />}
                    label="Recommended system"
                    value={<Counter value={r.systemSizeKw} decimals={r.systemSizeKw % 1 ? 1 : 0} suffix=" kW" />}
                  />
                  <Metric
                    icon={<IndianRupee className="size-5" />}
                    label="Monthly savings"
                    value={<Counter value={r.monthlySavings} prefix="₹" />}
                  />
                  <Metric
                    icon={<Clock className="size-5" />}
                    label="Payback period"
                    value={<Counter value={r.paybackYears} decimals={1} suffix=" yrs" />}
                  />
                  <Metric
                    icon={<Leaf className="size-5" />}
                    label="CO₂ cut / year"
                    value={<Counter value={r.co2TonnesPerYear} decimals={1} suffix=" T" />}
                  />
                </div>

                {r.roofLimited && (
                  <p className="mt-5 rounded-md bg-canvas/10 px-3 py-2 text-xs text-canvas/80">
                    Roof area is the limiting factor — a larger roof could support a
                    bigger system and higher savings.
                  </p>
                )}

                {/* Breakdown */}
                <dl className="mt-6 space-y-2.5 border-t border-canvas/15 pt-6 text-sm">
                  <Row label="System cost (est.)" value={inr(r.systemCost)} />
                  <Row
                    label="Govt. subsidy (PM Surya Ghar)"
                    value={`− ${inr(r.subsidy)}`}
                    accent
                  />
                  <Row label="Your net cost" value={inr(r.netCost)} strong />
                  <Row label="Annual generation" value={`${r.annualGenerationKwh.toLocaleString("en-IN")} kWh`} />
                  <Row label={`${ASSUMPTIONS.lifetimeYears}-yr net savings`} value={inr(r.lifetimeSavings)} strong />
                </dl>

                <div className="mt-7 flex items-center gap-2">
                  <BadgeIndianRupee className="size-5 text-gold-400" />
                  <QuoteButton variant="gold" size="md" className="flex-1">
                    Get My Exact Quote
                  </QuoteButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-gold-400">{icon}</div>
      <p className="mt-2 font-display text-3xl font-semibold text-canvas sm:text-4xl">{value}</p>
      <p className="mt-1 text-xs text-canvas/60">{label}</p>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
  strong,
}: {
  label: string;
  value: string;
  accent?: boolean;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-canvas/70">{label}</dt>
      <dd
        className={
          accent
            ? "font-mono text-gold-400"
            : strong
              ? "font-mono font-semibold text-canvas"
              : "font-mono text-canvas/90"
        }
      >
        {value}
      </dd>
    </div>
  );
}
