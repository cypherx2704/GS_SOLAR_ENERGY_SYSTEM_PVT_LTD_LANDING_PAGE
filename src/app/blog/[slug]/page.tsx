import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { posts, postsBySlug } from "@/content/blog";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animation/Reveal";
import { QuoteButton } from "@/components/layout/QuoteButton";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = postsBySlug[slug];
  if (!p) return { title: "Article" };
  return { title: p.title, description: p.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) notFound();

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-y bg-canvas">
        <div className="container-page max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-ink-faint">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" /> {post.readingMinutes} min read
            </span>
            {post.placeholder && (
              <span className="rounded bg-gold-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
                draft
              </span>
            )}
          </div>

          <Reveal>
            <div className="prose-editorial mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>{post.body}</p>
              <p>
                This article is a placeholder outline. The full piece — with practical detail,
                India-specific figures and examples — will be published here.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 rounded-[var(--radius-lg)] bg-green-900 p-7 text-canvas">
            <h2 className="font-display text-xl font-semibold">Thinking about solar?</h2>
            <p className="mt-2 text-sm text-canvas/70">
              Get a free, transparent estimate for your home or business.
            </p>
            <QuoteButton variant="gold" className="mt-4">
              Get Free Quote
            </QuoteButton>
          </div>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-green-800 hover:underline"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>
        </div>
      </article>
    </>
  );
}
