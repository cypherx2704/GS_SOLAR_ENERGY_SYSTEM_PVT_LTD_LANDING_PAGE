import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/layout/PageHeader";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial and industrial solar — on-grid, off-grid, hybrid, water pumps, street lights, battery backup and AMC. GS Solar, Chennai.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Solar services for"
        accent="every rooftop."
        description="From homes to factories, on-grid to off-grid — end-to-end solar, engineered, installed and maintained by GS Solar."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-y bg-canvas">
        <div className="container-page">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-lg"
                >
                  <ArrowUpRight className="absolute right-5 top-5 size-5 text-ink-faint transition-colors group-hover:text-green-800" />
                  <div className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-gold-500/15 text-green-800">
                    <Icon name={s.icon} className="size-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.short}</p>
                  <span className="mt-4 text-sm font-medium text-green-800">Know more</span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA />
    </>
  );
}
