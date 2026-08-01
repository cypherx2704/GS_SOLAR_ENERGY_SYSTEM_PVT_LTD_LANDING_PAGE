/** 8-step delivery process (from the blueprint). Powers the scroll-drawn timeline. */

export type ProcessStep = {
  n: number;
  title: string;
  icon: string;
  description: string;
};

export const process: ProcessStep[] = [
  { n: 1, title: "Consultation", icon: "MessageSquare", description: "We understand your goals, bills and site to recommend the right approach — no obligation." },
  { n: 2, title: "Site Survey", icon: "MapPin", description: "A free on-site visit to assess roof area, orientation, shading and structural fit." },
  { n: 3, title: "Design", icon: "PencilRuler", description: "A tailored system design with sizing, layout, and a transparent savings & payback estimate." },
  { n: 4, title: "Government Approval", icon: "FileCheck2", description: "We handle DISCOM applications, subsidy registration and net-metering paperwork for you." },
  { n: 5, title: "Installation", icon: "HardHat", description: "Professional, safety-first installation by experienced engineers, on schedule." },
  { n: 6, title: "Testing & Commissioning", icon: "CircuitBoard", description: "Full electrical testing, inspection and grid commissioning before handover." },
  { n: 7, title: "Monitoring", icon: "Activity", description: "Track generation and performance so your system delivers what it was designed to." },
  { n: 8, title: "Maintenance", icon: "Wrench", description: "Ongoing cleaning, checks and support to protect generation for the long term." },
];
