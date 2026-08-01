/**
 * Company master data — REAL, seeded from "Company Details/Details.md".
 * Fields marked `todo` are awaiting confirmation (see PLAN §16) and render
 * as clearly-labelled placeholders, never as guaranteed claims.
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

  /** TODO: no dedicated business email provided yet — placeholder. (PLAN §16) */
  email: { value: "info@gssolar.example", placeholder: true },

  /** TODO: confirm hours. (PLAN §16) */
  hours: {
    weekdays: "Mon – Sat · 9:30 AM – 6:30 PM",
    sunday: "Sunday · Closed",
    placeholder: true,
  },

  /** TODO: confirm a WhatsApp business number — defaults to primary line. */
  whatsapp: { value: "+919444951036", placeholder: true },

  /** TODO: real handles. (PLAN §16) */
  socials: [
    { label: "Instagram", href: "#", placeholder: true },
    { label: "Facebook", href: "#", placeholder: true },
    { label: "LinkedIn", href: "#", placeholder: true },
    { label: "YouTube", href: "#", placeholder: true },
  ],

  /** TODO: confirm founding year. (PLAN §16) */
  foundedYear: { value: 2015, placeholder: true },

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
    photo: null, // TODO: photo pending → initials avatar
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
