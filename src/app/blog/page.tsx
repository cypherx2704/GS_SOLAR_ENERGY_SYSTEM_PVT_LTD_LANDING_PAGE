import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, FileText } from "lucide-react";
import { posts } from "@/content/blog";
import { PageHeader } from "@/components/layout/PageHeader";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Solar guides, subsidy explainers and maintenance tips from GS Solar.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Solar, made"
        accent="simple."
        description="Guides, subsidy explainers and practical tips. Full articles are on the way — the posts below are outlines."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-y bg-canvas">
        <div className="container-page">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <RevealItem key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-green-700 to-green-900">
                    <div className="absolute inset-0 grid place-items-center text-canvas/40">
                      <FileText className="size-8" />
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-canvas/90 px-2.5 py-1 text-xs font-medium text-green-900">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-faint">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {p.readingMinutes} min read
                      </span>
                      <ArrowUpRight className="size-4 text-ink-faint transition-colors group-hover:text-green-800" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
