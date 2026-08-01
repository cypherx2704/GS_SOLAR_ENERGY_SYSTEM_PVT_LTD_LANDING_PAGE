import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Solar installations by GS Solar across residential, commercial and industrial segments.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Our"
        accent="projects."
        description="A selection of our solar installations. Real case studies with full specifications will be published here — the entries below are samples."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section className="section-y bg-canvas">
        <div className="container-page">
          <ProjectsGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
