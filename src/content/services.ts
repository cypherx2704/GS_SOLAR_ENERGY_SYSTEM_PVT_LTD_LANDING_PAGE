/**
 * Services — GENERIC solar service *types* only (from the blueprint).
 * These describe the business's offerings, not any product/brand (per the
 * client's constraint: no invented products or brand names).
 * Each entry powers a /services/[slug] page.
 */

export type Service = {
  slug: string;
  title: string;
  /** lucide-react icon name */
  icon: string;
  segment: "Residential" | "Commercial" | "Industrial" | "Systems" | "Care";
  short: string;
  overview: string;
  benefits: string[];
  suitableFor: string[];
  /** working-principle bullet, kept generic */
  principle: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    icon: "Home",
    segment: "Residential",
    short: "Rooftop systems sized for homes, apartments and villas.",
    overview:
      "End-to-end rooftop solar for homes — from a free site survey and shadow analysis to design, DISCOM approvals, installation and net-metering. Sized to your monthly consumption so you offset the maximum possible from your own roof.",
    benefits: [
      "Cut monthly electricity bills significantly",
      "Eligible for PM Surya Ghar central subsidy assistance",
      "Net-metering exports credited to your bill",
      "Low maintenance, long service life",
      "Increases property value",
    ],
    suitableFor: ["Independent houses", "Villas", "Apartments", "Row houses"],
    principle:
      "Roof-mounted panels generate DC, an inverter converts it to AC for household use, and surplus is exported to the grid under net-metering.",
    faqs: [
      { q: "How much roof area do I need?", a: "As a rule of thumb, roughly 80–100 sq ft of shadow-free roof per kW. We confirm exact sizing during the free survey." },
      { q: "Will it work during a power cut?", a: "On-grid systems switch off during outages for safety. Add battery backup or a hybrid inverter if you need power during cuts." },
    ],
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    icon: "Building2",
    segment: "Commercial",
    short: "Bill reduction for offices, retail, schools and hospitals.",
    overview:
      "Solar for commercial establishments where day-time consumption is high. We engineer for the tariff structure and load profile of your business to maximise the return on every square metre of roof or open area.",
    benefits: [
      "Offset expensive commercial-tariff units",
      "Accelerated depreciation benefits (consult your CA)",
      "Predictable, hedged energy costs for 25+ years",
      "Visible sustainability credential for your brand",
    ],
    suitableFor: ["Offices", "Retail stores", "Schools & colleges", "Hospitals", "Hotels"],
    principle:
      "Systems are sized to daytime demand so most generation is self-consumed, with the balance managed via net or gross metering per your DISCOM policy.",
    faqs: [
      { q: "What is the typical payback for commercial solar?", a: "Commercial tariffs are higher, so payback is often faster than residential. We provide a documented, transparent estimate after the survey." },
    ],
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar",
    icon: "Factory",
    segment: "Industrial",
    short: "High-capacity plants for factories and warehouses.",
    overview:
      "Large rooftop and ground-mount installations for manufacturing units and warehouses, engineered for high loads, structural safety and long-term generation guarantees.",
    benefits: [
      "Substantial reduction in per-unit energy cost",
      "Improved ESG / green-energy compliance",
      "Structural and electrical engineering to industrial standards",
      "Remote generation monitoring",
    ],
    suitableFor: ["Factories", "Warehouses", "Cold storage", "Processing units"],
    principle:
      "High-capacity arrays feed string/central inverters and integrate with your LT/HT distribution, sized against connected load and sanctioned demand.",
    faqs: [
      { q: "Can you handle HT-connected loads?", a: "Yes. We design to your sanctioned load and coordinate the required approvals with your DISCOM." },
    ],
  },
  {
    slug: "on-grid-solar",
    title: "On-Grid Solar",
    icon: "Zap",
    segment: "Systems",
    short: "Grid-tied systems with net-metering export credits.",
    overview:
      "The most common and cost-effective configuration — no batteries, surplus exported to the grid for credits under net-metering. Best economics where grid supply is reliable.",
    benefits: ["Lowest upfront cost per kW", "Net-metering export credits", "Simple, low-maintenance"],
    suitableFor: ["Homes & businesses with stable grid supply"],
    principle: "Panels → grid-tie inverter → your loads, with surplus exported and metered by a bi-directional net meter.",
    faqs: [{ q: "Do I need batteries?", a: "No. On-grid systems use the grid as a virtual battery via net-metering." }],
  },
  {
    slug: "off-grid-solar",
    title: "Off-Grid Solar",
    icon: "BatteryCharging",
    segment: "Systems",
    short: "Battery-backed independence for remote or unreliable supply.",
    overview:
      "Fully independent systems with battery storage for locations without reliable grid access, or where energy autonomy is required.",
    benefits: ["Power without grid dependence", "Runs through outages", "Ideal for remote sites"],
    suitableFor: ["Remote homes", "Farms", "Sites with poor grid supply"],
    principle: "Panels charge a battery bank through a charge controller; an inverter supplies AC loads independent of the grid.",
    faqs: [{ q: "How long does backup last?", a: "It depends on battery capacity and load. We size storage to your daily requirement during the survey." }],
  },
  {
    slug: "hybrid-solar",
    title: "Hybrid Solar",
    icon: "Combine",
    segment: "Systems",
    short: "Grid-tied plus battery backup — best of both.",
    overview:
      "Hybrid systems combine grid connection with battery storage, so you export surplus for credits and still have power during outages.",
    benefits: ["Net-metering credits", "Backup during power cuts", "Flexible energy management"],
    suitableFor: ["Homes & businesses needing outage protection"],
    principle: "A hybrid inverter manages panels, battery and grid together, prioritising self-consumption, backup and export intelligently.",
    faqs: [{ q: "Is hybrid worth the extra cost?", a: "If uninterrupted power matters to you and you also want export credits, hybrid gives you both. We'll compare options transparently." }],
  },
  {
    slug: "solar-water-pump",
    title: "Solar Water Pumps",
    icon: "Droplets",
    segment: "Care",
    short: "Diesel-free pumping for farms and agriculture.",
    overview:
      "Solar-powered pumping solutions for irrigation and water supply — eliminate diesel and grid-dependence for agricultural and rural applications.",
    benefits: ["No fuel or grid cost to run", "Reliable daytime pumping", "Low maintenance"],
    suitableFor: ["Farms", "Agricultural land", "Rural water supply"],
    principle: "Solar panels drive a pump controller and motor directly during daylight — no battery required for daytime pumping.",
    faqs: [{ q: "Does it work on cloudy days?", a: "Output reduces with lower sunlight; sizing accounts for your seasonal water needs." }],
  },
  {
    slug: "solar-street-lights",
    title: "Solar Street Lights",
    icon: "Lightbulb",
    segment: "Care",
    short: "Standalone lighting for streets, campuses and communities.",
    overview:
      "Self-contained solar street lighting with integrated panels, batteries and LED fixtures — no trenching, no grid connection, automatic dusk-to-dawn operation.",
    benefits: ["Zero running electricity cost", "No wiring or grid connection", "Automatic operation"],
    suitableFor: ["Streets & roads", "Campuses", "Gated communities", "Parking areas"],
    principle: "A panel charges an integrated battery by day; a controller powers the LED automatically at night.",
    faqs: [{ q: "How many nights of backup?", a: "Systems are typically sized for autonomy through cloudy periods; we specify per site." }],
  },
  {
    slug: "battery-backup",
    title: "Battery Backup",
    icon: "Battery",
    segment: "Care",
    short: "Add storage to keep essentials running during cuts.",
    overview:
      "Retrofit or integrated battery storage to keep critical loads powered during outages and to store daytime solar for evening use.",
    benefits: ["Power for essentials during cuts", "Store daytime solar for the evening", "Peace of mind"],
    suitableFor: ["Homes & businesses with existing or new solar"],
    principle: "Batteries store excess generation and discharge to your loads when the grid is down or solar is unavailable.",
    faqs: [{ q: "Can I add batteries to my existing solar?", a: "Often yes, depending on your inverter. We assess compatibility during the survey." }],
  },
  {
    slug: "amc-maintenance",
    title: "AMC & Maintenance",
    icon: "Wrench",
    segment: "Care",
    short: "Cleaning, monitoring and upkeep to protect generation.",
    overview:
      "Annual Maintenance Contracts covering panel cleaning, performance checks, inverter health, electrical safety inspections and generation monitoring — so your system keeps performing for decades.",
    benefits: ["Protect long-term generation", "Scheduled cleaning & inspection", "Faster fault resolution", "Generation performance reports"],
    suitableFor: ["Any solar owner — our systems or others"],
    principle: "Regular cleaning and preventive checks keep output near design levels and extend equipment life.",
    faqs: [{ q: "Do you service systems you didn't install?", a: "Yes, we offer AMC for third-party installations too, subject to a safety assessment." }],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
