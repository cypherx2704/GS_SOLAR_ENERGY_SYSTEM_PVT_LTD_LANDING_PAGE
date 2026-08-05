import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { OfficeMap } from "@/components/layout/OfficeMap";
import { Section } from "@/components/sections/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GS Solar Energy System Pvt Ltd, Chennai — phone, WhatsApp, office address and enquiry form.",
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
          <OfficeMap className="min-h-[24rem]" />
        </div>
      </Section>

      {/* Reuse the rich contact details block (map already shown above) */}
      <ContactSection showMap={false} />
    </>
  );
}
