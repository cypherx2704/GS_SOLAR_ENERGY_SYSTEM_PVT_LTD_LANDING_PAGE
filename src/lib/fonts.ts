import { Fraunces, Geist, Geist_Mono } from "next/font/google";

/**
 * Editorial pairing (all self-hosted via next/font — no layout shift):
 *  - Fraunces   → display serif (hero, big headlines), optical sizing on
 *  - Geist Sans → body / UI / buttons / nav
 *  - Geist Mono → eyebrow labels, section numbers, stats, units (kW, ₹, CO₂)
 */

export const fontDisplay = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`;
