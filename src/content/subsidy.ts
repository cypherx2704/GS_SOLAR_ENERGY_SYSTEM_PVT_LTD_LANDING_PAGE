/**
 * Government subsidy guide — PM Surya Ghar: Muft Bijli Yojana (India).
 *
 * ⚠️ ACCURACY CAVEAT: subsidy amounts, slab caps and portal steps change over
 * time, so no rupee figure is stated anywhere on the site. `verify: true` is an
 * INTERNAL checklist marking claims to re-confirm against pmsuryaghar.gov.in /
 * MNRE / TANGEDCO (Chennai) before launch and at each review — it is not
 * rendered to visitors. The `disclaimer` below is what the public sees.
 * Do NOT publish figures as guaranteed without confirmation.
 */

export type VerifiableFact = { text: string; verify?: boolean };

export const subsidy = {
  scheme: "PM Surya Ghar: Muft Bijli Yojana",
  authority: "Ministry of New & Renewable Energy (MNRE), Government of India",
  portal: "https://pmsuryaghar.gov.in",
  discom: "TANGEDCO (Chennai / Tamil Nadu)",

  intro:
    "A national scheme to help residential consumers install rooftop solar with central financial assistance, reducing upfront cost and payback while enabling free/discounted units and net-metering export credits.",

  benefits: [
    { text: "Central financial assistance (subsidy) on residential rooftop systems, reducing upfront cost.", verify: true },
    { text: "Potential for a meaningful number of free units per month for eligible households.", verify: true },
    { text: "Net-metering: surplus energy exported to the grid is credited against your bill." },
    { text: "Faster payback and decades of largely free generation afterwards." },
    { text: "Higher property value and a cleaner energy footprint." },
  ] as VerifiableFact[],

  eligibility: [
    { text: "Residential electricity consumer with a valid connection." },
    { text: "Ownership of the roof / premises where the system is installed." },
    { text: "Sufficient shadow-free roof area for the proposed capacity." },
    { text: "Sanctioned load and DISCOM conditions as applicable.", verify: true },
  ] as VerifiableFact[],

  steps: [
    { n: 1, title: "Register on the National Portal", text: "Create an account on the PM Surya Ghar portal with your state and DISCOM (TANGEDCO for Chennai)." },
    { n: 2, title: "Submit Application", text: "Enter your electricity consumer details and desired system capacity." },
    { n: 3, title: "Await Feasibility Approval", text: "Your DISCOM reviews and grants technical feasibility approval." },
    { n: 4, title: "Install via a Registered Vendor", text: "Get the system installed by a registered/empanelled vendor such as GS Solar." },
    { n: 5, title: "Apply for Net Meter", text: "Submit details and request installation of a bi-directional net meter." },
    { n: 6, title: "Inspection & Commissioning", text: "DISCOM inspects and the plant is commissioned; a commissioning certificate is generated." },
    { n: 7, title: "Subsidy Credited", text: "Submit bank details; the subsidy is credited directly to your account.", },
  ],

  documents: [
    "Recent electricity bill (consumer number)",
    "Identity & address proof",
    "Proof of roof / property ownership",
    "Bank account details (for subsidy credit)",
    "Passport-size photograph",
  ],

  /** Global disclaimer shown alongside any figure. */
  disclaimer:
    "Subsidy amounts, eligibility slabs and portal steps are set by the Government of India and may change. Figures shown here are indicative — confirm current details on pmsuryaghar.gov.in and with your DISCOM before applying. GS Solar assists with the full application process.",
};
