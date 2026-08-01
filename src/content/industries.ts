/** Industries served (from the blueprint). Powers the marquee/grid + /industries. */

export type Industry = { name: string; icon: string };

export const industries: Industry[] = [
  { name: "Homes", icon: "Home" },
  { name: "Factories", icon: "Factory" },
  { name: "Schools", icon: "GraduationCap" },
  { name: "Hospitals", icon: "Stethoscope" },
  { name: "Hotels", icon: "Hotel" },
  { name: "Apartments", icon: "Building" },
  { name: "Warehouses", icon: "Warehouse" },
  { name: "Farms", icon: "Tractor" },
  { name: "Retail Stores", icon: "Store" },
  { name: "Office Buildings", icon: "Building2" },
];
