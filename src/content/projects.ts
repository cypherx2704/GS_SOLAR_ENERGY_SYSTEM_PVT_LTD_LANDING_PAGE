/**
 * Portfolio / case studies — [PLACEHOLDER]. All fields are sample data
 * (`placeholder: true`) until real project details are provided (PLAN §16).
 * Powers /projects and /projects/[slug].
 */

export type Project = {
  slug: string;
  name: string;
  client: string;
  location: string;
  category: "Residential" | "Commercial" | "Industrial";
  capacityKw: number;
  completed: string; // e.g. "2024"
  annualSavings: string; // display string, placeholder
  systemType: string;
  image: string | null;
  summary: string;
  challenge: string;
  solution: string;
  gallery: (string | null)[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sample-industrial-plant",
    name: "Sample Industrial Rooftop",
    client: "Sample Client Pvt Ltd",
    location: "Tamil Nadu",
    category: "Industrial",
    capacityKw: 250,
    completed: "2024",
    annualSavings: "₹—",
    systemType: "On-Grid",
    image: null,
    summary: "Placeholder case study. Replace with a real industrial project once details are provided.",
    challenge: "Describe the site constraints and the client's energy problem here.",
    solution: "Describe the engineered solution, capacity and outcome here.",
    gallery: [null, null, null],
    placeholder: true,
  },
  {
    slug: "sample-commercial-rooftop",
    name: "Sample Commercial Rooftop",
    client: "Sample Business",
    location: "Chennai",
    category: "Commercial",
    capacityKw: 80,
    completed: "2024",
    annualSavings: "₹—",
    systemType: "On-Grid",
    image: null,
    summary: "Placeholder case study for a commercial installation.",
    challenge: "Placeholder challenge description.",
    solution: "Placeholder solution description.",
    gallery: [null, null, null],
    placeholder: true,
  },
  {
    slug: "sample-residential-villa",
    name: "Sample Residential Villa",
    client: "Private Residence",
    location: "Chennai",
    category: "Residential",
    capacityKw: 5,
    completed: "2024",
    annualSavings: "₹—",
    systemType: "Hybrid",
    image: null,
    summary: "Placeholder case study for a home rooftop system.",
    challenge: "Placeholder challenge description.",
    solution: "Placeholder solution description.",
    gallery: [null, null, null],
    placeholder: true,
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
export const projectCategories = ["All", "Residential", "Commercial", "Industrial"] as const;
