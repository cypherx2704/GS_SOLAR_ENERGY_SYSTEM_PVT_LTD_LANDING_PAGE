import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/sections/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GS Solar Energy System Pvt Ltd, Chennai — phone, WhatsApp, email, office address and enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        accent="solar."
        description="Send an enquiry, call, or message us on WhatsApp. We'll get back with a free, no-obligation assessment."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="canvas">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface-warm/40 p-2">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[var(--radius-md)] bg-gradient-to-br from-green-800 to-green-900">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-canvas) 1px, transparent 1px), linear-gradient(90deg, var(--color-canvas) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-center text-canvas">
                <div>
                  <p className="font-display text-xl">Madambakkam, Chennai</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-canvas/50">
                    Google Map embed · pending
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Reuse the rich contact details block */}
      <ContactSection />
    </>
  );
}
