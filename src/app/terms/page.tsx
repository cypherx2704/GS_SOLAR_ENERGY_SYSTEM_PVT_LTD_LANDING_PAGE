import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the GS Solar Energy System Pvt Ltd website and the information published on it.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      crumb="Terms of Service"
      intro="These terms govern your use of the GS Solar website and the information published on it. Please read them before relying on anything you find here."
      sections={termsOfService}
    />
  );
}
