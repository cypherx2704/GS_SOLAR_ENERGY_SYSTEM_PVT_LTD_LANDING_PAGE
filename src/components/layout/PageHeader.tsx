import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SplitText } from "@/components/animation/SplitText";
import { Reveal } from "@/components/animation/Reveal";

type Crumb = { label: string; href?: string };

/** Consistent hero band for interior pages. */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-surface-warm/40 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full bg-gold-400/15 blur-3xl"
      />
      <div className="container-page relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-faint">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-green-800">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-muted">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="size-3.5" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
          <SplitText text={title} />
          {accent && (
            <>
              {" "}
              <span className="text-green-800">
                <SplitText text={accent} delay={0.12} />
              </span>
            </>
          )}
        </h1>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
