import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Zap, Calendar, IndianRupee, Cpu, ImageOff, Star, ArrowLeft } from "lucide-react";
import { projects, projectsBySlug } from "@/content/projects";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animation/Reveal";
import { CTA } from "@/components/sections/CTA";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectsBySlug[slug];
  if (!p) return { title: "Project" };
  return { title: p.name, description: p.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) notFound();

  const specs = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Zap, label: "Capacity", value: `${project.capacityKw} kW` },
    { icon: Calendar, label: "Completed", value: project.completed },
    { icon: IndianRupee, label: "Annual savings", value: project.annualSavings },
    { icon: Cpu, label: "System type", value: project.systemType },
  ];

  return (
    <>
      <PageHeader
        eyebrow={project.category + " · Case study"}
        title={project.name}
        description={project.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      <section className="section-y bg-canvas">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          <div className="space-y-10">
            {/* hero image placeholder */}
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-gradient-to-br from-green-800 to-green-900">
                <div className="absolute inset-0 grid place-items-center text-canvas/40">
                  <ImageOff className="size-10" />
                </div>
                {project.placeholder && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                    Sample project
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">The challenge</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Our solution</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{project.solution}</p>
              </div>
            </Reveal>

            {/* gallery */}
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Gallery</h2>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {project.gallery.map((_, i) => (
                    <div
                      key={i}
                      className="grid aspect-square place-items-center rounded-[var(--radius-md)] border border-line bg-surface-warm text-ink-faint"
                    >
                      <ImageOff className="size-6" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* review */}
            <Reveal>
              <figure className="rounded-[var(--radius-lg)] bg-green-900 p-7 text-canvas">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="mt-3 font-display text-lg leading-relaxed">
                  “Customer review placeholder — the client&apos;s words about working with GS Solar
                  will appear here.”
                </blockquote>
                <figcaption className="mt-3 text-sm text-canvas/60">— {project.client}</figcaption>
              </figure>
            </Reveal>
          </div>

          {/* spec sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Project specs</h3>
              <dl className="mt-4 space-y-4">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <s.icon className="mt-0.5 size-5 shrink-0 text-green-600" />
                    <div>
                      <dt className="text-xs text-ink-faint">{s.label}</dt>
                      <dd className="font-medium text-ink">{s.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-green-800 hover:underline"
              >
                <ArrowLeft className="size-4" /> Back to all projects
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
