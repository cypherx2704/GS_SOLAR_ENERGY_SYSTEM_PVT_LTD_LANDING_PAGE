/**
 * FAQ Q&A (from the blueprint). Answers are general and educational — any
 * figures are illustrative, never a guaranteed quote. Verify specifics per site.
 */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a solar system cost?",
    a: "It depends on system size, roof type and configuration (on-grid, hybrid, off-grid). After a free site survey we give you a transparent, itemised quote — with the applicable government subsidy already factored in.",
  },
  {
    q: "What is the government subsidy and how much can I get?",
    a: "Residential rooftop systems can qualify for central financial assistance under PM Surya Ghar: Muft Bijli Yojana. Exact amounts depend on system size and current scheme slabs — we handle the registration and paperwork, and confirm the current figure for your case. See our Subsidy guide.",
  },
  {
    q: "How long does installation take?",
    a: "The physical installation of a typical home system is usually completed in a few days. The full timeline including approvals and net-metering depends on your DISCOM; we manage the process end-to-end.",
  },
  {
    q: "What warranty do I get?",
    a: "Quality solar panels are typically backed by long performance warranties, with separate warranties on inverters and workmanship. We confirm exact warranty terms in your proposal.",
  },
  {
    q: "How much maintenance is required?",
    a: "Very little — periodic cleaning and routine checks. We offer AMC packages that cover cleaning, inspection and monitoring so your system keeps performing.",
  },
  {
    q: "What is the ROI / payback period?",
    a: "Because you stop paying for the units you now self-generate, most systems pay back their cost within a few years and then generate largely free power for decades. We provide a documented estimate specific to your usage.",
  },
  {
    q: "Will solar work during a power cut?",
    a: "Standard on-grid systems shut off during outages for safety. If you need power during cuts, we recommend a hybrid system or battery backup.",
  },
];
