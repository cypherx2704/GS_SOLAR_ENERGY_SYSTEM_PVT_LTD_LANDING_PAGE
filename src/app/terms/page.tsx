import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Terms of Service", robots: { index: false } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      crumb="Terms of Service"
      intro="These terms govern your use of the GS Solar website and services."
    />
  );
}
