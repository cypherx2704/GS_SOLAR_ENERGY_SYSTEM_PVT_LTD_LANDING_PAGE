import type { Metadata } from "next";
import { CheckCircle2, FileText, ClipboardList, ExternalLink } from "lucide-react";
import { subsidy } from "@/content/subsidy";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animation/Reveal";
import { Section, SectionHeading } from "@/components/sections/Section";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Government Subsidy — PM Surya Ghar",
  description:
    "PM Surya Ghar: Muft Bijli Yojana explained — benefits, eligibility, step-by-step application and documents. Chennai / TANGEDCO.",
};

export default function SubsidyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Government Subsidy · India"
        title="PM Surya Ghar,"
        accent="explained."
        description={subsidy.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Subsidy" }]}
      />

      {/* Disclaimer banner */}
      <div className="border-b border-line bg-gold-500/10">
        <div className="container-page flex items-start gap-3 py-4 text-sm text-ink-muted">
          <FileText className="mt-0.5 size-4 shrink-0 text-gold-600" />
          <p>{subsidy.disclaimer}</p>
        </div>
      </div>

      {/* Benefits + Eligibility */}
      <Section tone="canvas">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <div>
              <SectionHeading title="Benefits" />
              <ul className="mt-6 space-y-3">
                {subsidy.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-muted">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                    <span>
                      {b.text}
                      {b.verify && (
                        <span className="ml-2 rounded bg-gold-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
                          verify
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal from="right">
            <div>
              <SectionHeading title="Eligibility" />
              <ul className="mt-6 space-y-3">
                {subsidy.eligibility.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-muted">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                    <span>
                      {b.text}
                      {b.verify && (
                        <span className="ml-2 rounded bg-gold-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
                          verify
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="warm">
        <SectionHeading eyebrow="How to Apply" title="Step by" accent="step." align="center" />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="space-y-5">
            {subsidy.steps.map((s) => (
              <Reveal key={s.n}>
                <li className="flex gap-5 rounded-[var(--radius-lg)] border border-line bg-surface p-6">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green-800 font-mono text-sm font-semibold text-canvas">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-ink-muted">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Documents + CTA */}
      <Section tone="canvas">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <div>
              <div className="flex items-center gap-3">
                <ClipboardList className="size-6 text-green-600" />
                <h2 className="font-display text-2xl font-semibold text-ink">Documents needed</h2>
              </div>
              <ul className="mt-6 grid gap-3">
                {subsidy.documents.map((d) => (
                  <li key={d} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-line bg-surface px-4 py-3 text-ink-muted">
                    <FileText className="size-4 shrink-0 text-green-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="rounded-[var(--radius-lg)] bg-green-900 p-8 text-canvas">
              <h2 className="font-display text-2xl font-semibold">We handle the paperwork</h2>
              <p className="mt-3 text-canvas/70">
                GS Solar registers your application, coordinates with {subsidy.discom} and manages
                net-metering — so you get your subsidy without the hassle.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <QuoteButton variant="gold">Start my application</QuoteButton>
                <Button asChild variant="ghostLight" className="border border-canvas/20">
                  <a href={subsidy.portal} target="_blank" rel="noopener noreferrer">
                    Official portal <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
