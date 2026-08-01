import { faqs } from "@/content/faqs";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { QuoteButton } from "@/components/layout/QuoteButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faqs" className="section-y bg-canvas">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="FAQs" title="Questions," accent="answered." />
          <Reveal delay={0.15}>
            <div className="mt-6 rounded-[var(--radius-lg)] border border-line bg-surface-warm/60 p-6">
              <p className="text-sm text-ink-muted">Still unsure about something?</p>
              <QuoteButton className="mt-3 w-full">Ask us — get a free quote</QuoteButton>
            </div>
          </Reveal>
        </div>

        <Reveal from="right">
          <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
