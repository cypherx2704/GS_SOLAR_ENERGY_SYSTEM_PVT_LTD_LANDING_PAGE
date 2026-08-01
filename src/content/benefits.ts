/**
 * "Why Solar?" benefits + "Why Choose Us" differentiators + trust badges.
 * Trust badges are TEXT/BADGE chips (no invented logos), per PLAN §6 #3.
 */

export type Benefit = { title: string; icon: string; description: string };

export const whySolar: Benefit[] = [
  { title: "Lower Electricity Bills", icon: "TrendingDown", description: "Generate your own power and cut monthly bills by a large margin for decades." },
  { title: "Government Subsidy", icon: "BadgeIndianRupee", description: "Central financial assistance under PM Surya Ghar makes going solar more affordable." },
  { title: "Low Maintenance", icon: "ShieldCheck", description: "No moving parts — just occasional cleaning and periodic checks keep it running." },
  { title: "Eco Friendly", icon: "Leaf", description: "Clean, renewable energy that cuts your carbon footprint from day one." },
  { title: "Increases Property Value", icon: "Home", description: "A solar-equipped property is more attractive and commands a premium." },
  { title: "25-Year Lifespan", icon: "CalendarClock", description: "Quality solar systems are built to generate reliably for 25 years and beyond." },
];

export const whyChooseUs: Benefit[] = [
  { title: "Experienced Engineers", icon: "HardHat", description: "Systems designed and installed by qualified, safety-first solar engineers." },
  { title: "Quality Components", icon: "BadgeCheck", description: "We select reliable, standards-compliant equipment engineered to last." },
  { title: "Fast Installation", icon: "Zap", description: "Efficient, well-planned installs that respect your schedule." },
  { title: "Long-Term Warranty", icon: "ShieldCheck", description: "Backed by warranty support so your investment is protected." },
  { title: "Subsidy Assistance", icon: "FileCheck2", description: "We handle the PM Surya Ghar registration and paperwork end-to-end." },
  { title: "Financing Guidance", icon: "Landmark", description: "Support in exploring finance options to spread the investment." },
  { title: "Remote Monitoring", icon: "Activity", description: "Track your generation and performance from anywhere." },
  { title: "After-Sales Support", icon: "Headphones", description: "Responsive service and maintenance long after handover." },
];

/** Trust chips — plain text/badge, no invented certification logos. */
export const trustBadges: { label: string; note: string }[] = [
  { label: "MNRE-aligned", note: "Ministry of New & Renewable Energy framework" },
  { label: "ISO-standard practices", note: "Quality-driven processes" },
  { label: "Approved Vendor", note: "Empanelled installation partner" },
  { label: "Subsidy Assistance", note: "PM Surya Ghar guidance" },
  { label: "Authorized Dealer", note: "Genuine, warranty-backed supply" },
];
