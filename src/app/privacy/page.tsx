import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GS Solar Energy System Pvt Ltd collects, uses and protects the personal data you submit through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information GS Solar collects through this website, how it is used, how long it is kept, and the rights you have over it."
      sections={privacyPolicy}
    />
  );
}
