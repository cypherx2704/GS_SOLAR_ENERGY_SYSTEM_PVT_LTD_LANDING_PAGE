/** Navigation + footer link maps. Anchor links (#…) target Home sections. */

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "Our Process", href: "/#process" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Residential Solar", href: "/services/residential-solar" },
      { label: "Commercial Solar", href: "/services/commercial-solar" },
      { label: "Industrial Solar", href: "/services/industrial-solar" },
      { label: "On-Grid Systems", href: "/services/on-grid-solar" },
      { label: "AMC & Maintenance", href: "/services/amc-maintenance" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Savings Calculator", href: "/#calculator" },
      { label: "Government Subsidy", href: "/subsidy" },
      { label: "How Solar Works", href: "/#how-solar-works" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Industries We Serve", href: "/#industries" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
