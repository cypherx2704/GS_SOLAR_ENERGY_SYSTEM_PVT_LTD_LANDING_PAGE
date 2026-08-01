import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/sections/Section";

/** Shared body for the placeholder legal pages (Privacy, Terms). */
export function LegalPage({
  title,
  crumb,
  intro,
}: {
  title: string;
  crumb: string;
  intro: string;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        crumbs={[{ label: "Home", href: "/" }, { label: crumb }]}
      />
      <Section tone="canvas">
        <div className="max-w-3xl space-y-5 text-ink-muted">
          <p className="text-lg">{intro}</p>
          <p>
            This is a placeholder document. The finalised {crumb.toLowerCase()} — reviewed for
            GS Solar Energy System Pvt Ltd — will be published here before launch.
          </p>
        </div>
      </Section>
    </>
  );
}
