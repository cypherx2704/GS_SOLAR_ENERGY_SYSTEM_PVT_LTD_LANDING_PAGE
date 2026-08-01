/**
 * Animated counters. [PLACEHOLDER numbers] — awaiting real figures (PLAN §16).
 * `placeholder: true` renders these in a clearly-sample state; do not present
 * as verified claims until confirmed.
 */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  placeholder?: boolean;
};

/** Compact hero stats row (below the fold of the hero). */
export const heroStats: Stat[] = [
  { value: 500, suffix: "+", label: "Happy Customers", placeholder: true },
  { value: 25, suffix: " MW", label: "Installed Capacity", placeholder: true },
  { value: 10, suffix: " yrs", label: "Experience", placeholder: true },
  { value: 500, suffix: "+", label: "Projects", placeholder: true },
];

/** Full Statistics section counters. */
export const stats: Stat[] = [
  { value: 1000, suffix: "+", label: "Projects Completed", placeholder: true },
  { value: 50, suffix: " MW+", label: "Capacity Installed", placeholder: true },
  { value: 20, prefix: "₹", suffix: " Cr+", label: "Customer Savings", placeholder: true },
  { value: 5000, suffix: " T", label: "CO₂ Reduced", placeholder: true },
];
