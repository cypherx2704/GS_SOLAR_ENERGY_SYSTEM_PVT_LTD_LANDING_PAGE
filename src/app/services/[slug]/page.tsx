import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { services, servicesBySlug } from "@/content/services";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animation/Reveal";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTA } from "@/components/sections/CTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesBySlug[slug];
  if (!s) return { title: "Service" };
  return { title: s.title, description: s.short };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={service.segment}
        title={service.title}
        description={service.overview}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-y bg-canvas">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          {/* Main */}
          <div className="space-y-12">
            {/* Benefits */}
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Benefits</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink-muted">
                      <Check className="mt-0.5 size-5 shrink-0 text-green-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Working principle */}
            <Reveal>
              <div className="rounded-[var(--radius-lg)] border border-line bg-surface-warm/50 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-green-800 text-canvas">
                    <Icon name={service.icon} className="size-6" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-ink">How it works</h2>
                </div>
                <p className="mt-4 leading-relaxed text-ink-muted">{service.principle}</p>
              </div>
            </Reveal>

            {/* FAQ */}
            {service.faqs.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">FAQs</h2>
                  <Accordion type="single" collapsible className="mt-3">
                    {service.faqs.map((f, i) => (
                      <AccordionItem key={i} value={`f-${i}`}>
                        <AccordionTrigger>{f.q}</AccordionTrigger>
                        <AccordionContent>{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Suitable for</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.suitableFor.map((x) => (
                  <li
                    key={x}
                    className="rounded-full border border-line bg-canvas px-3 py-1 text-sm text-ink-muted"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-green-900 p-6 text-canvas">
              <h3 className="font-display text-lg font-semibold">Interested in {service.title}?</h3>
              <p className="mt-2 text-sm text-canvas/70">
                Get a free site survey and a transparent quote — no obligation.
              </p>
              <QuoteButton variant="gold" className="mt-4 w-full">
                Get Free Quote
              </QuoteButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section-y bg-surface-warm">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink">Other services</h2>
            <Button asChild variant="link">
              <Link href="/services">
                All services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-gold-500/15 text-green-800">
                  <Icon name={s.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
