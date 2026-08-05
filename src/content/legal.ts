/**
 * Privacy Policy and Terms of Service.
 *
 * Written to describe what this website actually does — the enquiry and quote
 * forms are the only places personal data is collected, and there is no
 * analytics, advertising or third-party tracking on the site at present. If any
 * of that changes (an analytics script, a CRM integration, a chat widget), the
 * corresponding section here must be updated in the same change.
 *
 * India's Digital Personal Data Protection Act, 2023 is the governing statute.
 * Have the company's legal advisor review both documents before launch —
 * grounded and accurate is not the same as professionally vetted.
 */

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

/** Shown as "Last updated" on both documents. */
export const legalUpdated = "5 August 2026";

export const privacyPolicy: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "GS Solar Energy System Pvt Ltd (\"GS Solar\", \"we\", \"us\") is a private limited company registered in India, with its office at No: 28, Ambika Nagar 1st Cross, Madambakkam, Chennai 600126, Tamil Nadu. Our GST registration number is 33AALCG9719J1Z5.",
      "This policy explains what personal data this website collects, why we collect it, how long we keep it, and what rights you have over it. It applies to this website and to enquiries made through it.",
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "We collect only the information you type into a form and send to us. There is no account system on this site, and we do not ask for anything we do not need in order to respond to you.",
      "When you submit the quote request or the contact enquiry form, we receive:",
    ],
    bullets: [
      "Your name",
      "Your phone number",
      "Your city",
      "The property type you select (residential, commercial or industrial)",
      "Your approximate monthly electricity bill, if you choose to enter it",
      "Any message you write to us",
    ],
  },
  {
    heading: "What we do not collect",
    paragraphs: [
      "This website does not run analytics, advertising or social-media tracking scripts, and it does not set tracking or profiling cookies. We do not buy personal data from third parties, and we do not build advertising profiles.",
      "The savings calculator on this site runs entirely in your browser. The figures you enter into it are not transmitted to us or stored anywhere.",
      "The office location map is embedded from Google Maps. Loading that map means your browser contacts Google, and Google's own privacy policy governs that interaction — it is not something we control or receive data from.",
    ],
  },
  {
    heading: "Why we use it",
    paragraphs: [
      "We use the details you send us for one purpose: to respond to your enquiry. In practice that means calling or messaging you back, understanding your requirement, arranging a site survey where relevant, and preparing a quotation.",
      "If you become a customer, we use the same details to carry out the work — including submitting subsidy and net-metering applications on your behalf, which requires sharing specific details with government systems as described below.",
      "We do not sell your personal data, and we do not share it with third parties for their own marketing.",
    ],
  },
  {
    heading: "Who we share it with",
    paragraphs: [
      "We share personal data only where it is necessary to deliver what you have asked for, or where the law requires it:",
    ],
    bullets: [
      "Government portals and your electricity distribution company, where you have asked us to handle a subsidy application, feasibility approval or net-metering application on your behalf.",
      "Service providers who work on our instructions — for example installation and maintenance teams attending your site.",
      "Authorities, regulators or courts, where we are legally required to disclose information.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "Enquiries that do not lead to work are retained only as long as they are useful for following up, and are then deleted.",
      "Records relating to customers, installations and warranties are kept for as long as we support the system and for as long as tax, accounting and statutory obligations require.",
    ],
  },
  {
    heading: "Keeping it secure",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect the personal data we hold, and we limit access to the people who need it to do their job. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Under India's Digital Personal Data Protection Act, 2023, you have the right to ask us what personal data of yours we hold, to have inaccurate details corrected, to have data erased where we no longer need it, and to withdraw consent you previously gave.",
      "To exercise any of these, contact us using the details below. We will ask you to confirm your identity before acting on a request, so that we do not disclose your data to someone else.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website and our services are intended for adults arranging solar installations. We do not knowingly collect personal data from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If we change how this website handles personal data — for example by adding analytics or a customer-management system — we will update this policy and change the date shown at the top of this page.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      "For any question or request about your personal data, call us on +91 94449 51036, or write to GS Solar Energy System Pvt Ltd, No: 28, Ambika Nagar 1st Cross, Madambakkam, Chennai 600126, Tamil Nadu.",
      "If you are not satisfied with how we have handled your request, you may escalate the matter to the Data Protection Board of India.",
    ],
  },
];

export const termsOfService: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These terms govern your use of this website, operated by GS Solar Energy System Pvt Ltd, No: 28, Ambika Nagar 1st Cross, Madambakkam, Chennai 600126, Tamil Nadu, GST 33AALCG9719J1Z5.",
      "By using this website you accept these terms. If you do not accept them, please do not use the site.",
    ],
  },
  {
    heading: "What this website is",
    paragraphs: [
      "This site describes the solar services we offer and provides general educational information about rooftop solar, government schemes and system maintenance. It is a marketing and information website.",
      "Nothing on this site is a binding offer, a quotation, or a contract. A binding arrangement between us arises only from a written proposal or agreement signed by both parties after a site survey.",
    ],
  },
  {
    heading: "The savings calculator",
    paragraphs: [
      "The calculator on this site produces an indicative estimate from the figures you enter and general assumptions about system output and tariffs. It is a planning aid, not a quotation and not a guarantee of savings.",
      "Actual generation and savings depend on your roof, shading, orientation, consumption pattern, tariff category, equipment specification and weather. We give a documented, site-specific estimate only after surveying your property.",
    ],
  },
  {
    heading: "Information about subsidies and schemes",
    paragraphs: [
      "Government scheme details, eligibility conditions, subsidy amounts and application steps are set by government authorities and change from time to time. We publish this information in good faith and keep it current to the best of our ability, but we do not warrant that it is complete or up to date at the moment you read it.",
      "Always confirm current details on the official portal at pmsuryaghar.gov.in and with your electricity distribution company before making a decision. We cannot guarantee that any application will be approved or that any specific subsidy amount will be received — those decisions rest with the authorities concerned.",
    ],
  },
  {
    heading: "Services, quotations and warranties",
    paragraphs: [
      "The scope of any work, the specification of equipment, prices, timelines, payment terms and warranty coverage are set out in the written proposal or agreement for that project. Those documents govern the work; this website does not.",
      "Warranties on panels, inverters and other equipment are provided by their respective manufacturers on the manufacturers' terms. Our own workmanship warranty is stated in your project agreement.",
    ],
  },
  {
    heading: "Enquiries you send us",
    paragraphs: [
      "When you submit an enquiry, please give accurate contact details — we use them to call you back. Do not submit anyone else's personal information without their knowledge.",
      "Personal data submitted through this site is handled as described in our Privacy Policy.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: [
      "You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to it, interfere with its operation, transmit malicious code, or use automated means to extract its content on a substantial scale.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content, design, logos, illustrations and written material on this site belong to GS Solar Energy System Pvt Ltd unless stated otherwise. You may read, share and print pages for your own reference. You may not reproduce our content commercially, or use our name or logo, without written permission.",
    ],
  },
  {
    heading: "External links",
    paragraphs: [
      "This site links to external resources such as government portals. Those sites are not under our control, and we are not responsible for their content, availability or practices.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "This website is provided on an \"as is\" basis. To the extent permitted by law, we are not liable for loss arising from reliance on general information published here, or from the site being unavailable or interrupted.",
      "Nothing in these terms limits any liability that cannot lawfully be limited, including liability for death or personal injury caused by negligence, or for fraud. Liability in respect of work we carry out for you is governed by your project agreement.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India. The courts at Chennai, Tamil Nadu have exclusive jurisdiction over any dispute arising from this website.",
    ],
  },
  {
    heading: "Changes and contact",
    paragraphs: [
      "We may update these terms from time to time; the date at the top of this page shows when they were last revised. Continued use of the site after a change means you accept the revised terms.",
      "For any question about these terms, call +91 94449 51036 or write to us at the address above.",
    ],
  },
];
