import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { about } from "@/content/about";
import { leadership, company, telHref } from "@/content/company";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Section, SectionHeading } from "@/components/sections/Section";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "GS Solar Energy System Pvt Ltd — a Chennai-based solar company. Our story, mission, values and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Clean energy, delivered with"
        accent="care."
        description={about.whoWeAre}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story + founder */}
      <Section tone="canvas">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <div>
              <p className="eyebrow">Our Story</p>
              <PlaceholderNote show={about.story.placeholder} />
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{about.story.text}</p>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="rounded-[var(--radius-lg)] border border-line bg-surface-warm/50 p-7">
              <p className="eyebrow">Founder&apos;s Message</p>
              <PlaceholderNote show={about.founderMessage.placeholder} />
              <p className="mt-4 leading-relaxed text-ink-muted">{about.founderMessage.text}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section tone="dark">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-canvas/10 p-8">
              <h2 className="font-display text-2xl font-semibold text-canvas">Mission</h2>
              <p className="mt-3 leading-relaxed text-canvas/70">{about.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-canvas/10 p-8">
              <h2 className="font-display text-2xl font-semibold text-canvas">Vision</h2>
              <p className="mt-3 leading-relaxed text-canvas/70">{about.vision}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="canvas">
        <SectionHeading eyebrow="What We Value" title="Principles we" accent="build on." align="center" />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <RevealItem key={v.title}>
              <div className="h-full rounded-[var(--radius-lg)] border border-line bg-surface p-6">
                <div className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                  <Icon name={v.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{v.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Leadership */}
      <Section tone="warm">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind"
          accent="GS Solar."
          align="center"
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader) => (
            <RevealItem key={leader.name}>
              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface">
                <div className="relative aspect-[4/5] overflow-hidden bg-green-900">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid size-20 place-items-center rounded-full bg-gold-500 font-display text-3xl font-semibold text-ink">
                        {leader.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{leader.name}</h3>
                  <p className="text-sm text-green-700">{leader.role}</p>
                  {leader.phone && (
                    <a
                      href={telHref(leader.phone)}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-green-800"
                    >
                      <Phone className="size-3.5" /> {leader.phone}
                    </a>
                  )}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-6 text-center text-sm text-ink-faint">
          {company.legalName} · GST {company.gst}
        </p>
      </Section>

      {/* Timeline */}
      <Section tone="canvas">
        <SectionHeading eyebrow="Our Journey" title="Milestones" accent="so far." />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {about.timeline.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6">
                <p className="font-mono text-3xl font-semibold text-gold-600">{t.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{t.text}</p>
                {t.placeholder && (
                  <span className="mt-3 inline-block rounded bg-line px-2 py-0.5 text-[10px] uppercase tracking-wide text-ink-faint">
                    placeholder
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

function PlaceholderNote({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-2 inline-block rounded bg-gold-500/20 px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-gold-600">
      placeholder
    </span>
  );
}
