import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, FileText, CheckCircle2 } from "lucide-react";
import { subsidy } from "@/content/subsidy";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

export function SubsidyPreview() {
  return (
    <section id="subsidy" className="section-y bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Government Subsidy · India"
            title="Go solar for less with"
            accent="PM Surya Ghar."
            description={subsidy.intro}
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {subsidy.benefits.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-muted">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/subsidy">
                  Full subsidy guide <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Steps card */}
        <Reveal from="right">
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface-warm/50 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-green-800 text-canvas">
                <BadgeIndianRupee className="size-6" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">How to apply</p>
                <p className="text-sm text-ink-faint">{subsidy.scheme}</p>
              </div>
            </div>

            <ol className="mt-6 space-y-4">
              {subsidy.steps.slice(0, 5).map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold-500/20 font-mono text-xs font-semibold text-gold-600">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{s.title}</p>
                    <p className="text-sm text-ink-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 flex items-start gap-2 border-t border-line pt-5 text-xs leading-relaxed text-ink-faint">
              <FileText className="mt-0.5 size-3.5 shrink-0" />
              {subsidy.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
