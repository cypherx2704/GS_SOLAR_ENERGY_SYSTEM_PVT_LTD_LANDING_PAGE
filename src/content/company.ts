/**
 * Company master data — REAL, seeded from "Company Details/Details.md".
 *
 * `email` and `socials` are intentionally empty: no business address or handles
 * have been provided, and a fake one is worse than none (bounced mail, dead
 * links). Every consumer of these fields renders nothing when they're empty, so
 * filling them in here is the only change needed to switch them on site-wide.
 */

export type Leader = {
  name: string;
  role: string;
  phone?: string;
  /** path under /public, or null → renders an initials avatar */
  photo: string | null;
};

export const company = {
  legalName: "GS SOLAR ENERGY SYSTEM PVT LTD",
  shortName: "GS Solar",
  tagline: "Power Your Future with Clean Solar Energy",
  gst: "33AALCG9719J1Z5",

  address: {
    line1: "No: 28, Ambika Nagar 1st Cross",
    line2: "Madambakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600126",
    country: "India",
  },

  /** All director/MD lines from Details.md. `primary` drives header Call-Now CTA. */
  phones: [
    { label: "TS Gowri Sankar (Managing Director)", value: "+919444951036", primary: true },
    { label: "G Sai Prasanna (Managing Director)", value: "+917305110013", primary: false },
    { label: "G Geetha (Director)", value: "+919445087803", primary: false },
    { label: "Dr Senthil Kumaran (Director)", value: "+917708390611", primary: false },
  ],

  /** Business email — set this to publish it in the footer, contact page and schema. */
  email: "",

  /**
   * Office hours. Standard Chennai trade pattern — confirm before launch, since
   * a wrong value sends people to a closed office.
   */
  hours: {
    weekdays: "Mon – Sat · 9:30 AM – 6:30 PM",
    sunday: "Sunday · Closed",
  },

  /** WhatsApp enquiries route to the primary managing-director line. */
  whatsapp: "+919444951036",

  /**
   * Social profiles. Add `href` values to switch the footer row on; entries
   * without one are skipped, so no dead "#" links ever ship.
   */
  socials: [
    { label: "Instagram", icon: "Instagram", href: "" },
    { label: "Facebook", icon: "Facebook", href: "" },
    { label: "LinkedIn", icon: "Linkedin", href: "" },
    { label: "YouTube", icon: "Youtube", href: "" },
  ],

  segments: ["Residential", "Commercial", "Industrial"],
} as const;

/** Leadership — real names/roles/photos from the Company Details folder. */
export const leadership: Leader[] = [
  {
    name: "TS Gowri Sankar",
    role: "Managing Director",
    phone: "+919444951036",
    photo: "/images/team/gowri-sankar.jpeg",
  },
  {
    name: "G Sai Prasanna",
    role: "Managing Director",
    phone: "+917305110013",
    photo: null, // photo pending → initials avatar
  },
  {
    name: "G Geetha",
    role: "Director",
    phone: "+919445087803",
    photo: "/images/team/geetha.png",
  },
  {
    name: "Dr Senthil Kumaran",
    role: "Director",
    phone: "+917708390611",
    photo: "/images/team/senthil-kumaran.jpeg",
  },
];

/** Primary phone helper (digits + display + tel: href). */
export const primaryPhone = company.phones.find((p) => p.primary) ?? company.phones[0];

/** Social links that actually point somewhere. */
export const activeSocials = company.socials.filter((s) => s.href.length > 0);

export function telHref(value: string) {
  return `tel:${value.replace(/\s+/g, "")}`;
}

export function whatsappHref(value: string, message = "Hi GS Solar, I'd like a free solar quote.") {
  const num = value.replace(/[^\d]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function fullAddress() {
  const a = company.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}, ${a.country}`;
}

/** Address string for map queries / directions links. */
export function mapQuery() {
  return encodeURIComponent(fullAddress());
}
