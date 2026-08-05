import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/sections/Section";
import { legalUpdated, type LegalSection } from "@/content/legal";

/** Shared body for the legal pages (Privacy, Terms). */
export function LegalPage({
  title,
  crumb,
  intro,
  sections,
}: {
  title: string;
  crumb: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        crumbs={[{ label: "Home", href: "/" }, { label: crumb }]}
      />
      <Section tone="canvas">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Last updated · {legalUpdated}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>

          <div className="mt-12 space-y-11">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl font-semibold text-ink">{s.heading}</h2>
                <div className="mt-3 space-y-4 leading-relaxed text-ink-muted">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5 text-ink-muted">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
