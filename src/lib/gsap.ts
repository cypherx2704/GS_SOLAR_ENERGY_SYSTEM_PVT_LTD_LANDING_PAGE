"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single GSAP registration point. ScrollTrigger is synced to Lenis inside
 * the SmoothScroll provider. Import { gsap, ScrollTrigger } from here.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
