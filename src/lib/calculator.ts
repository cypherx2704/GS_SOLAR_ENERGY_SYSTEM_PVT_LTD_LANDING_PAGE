/**
 * Solar savings estimator — TRANSPARENT formula (PLAN §6 #9).
 *
 * Every constant below is a documented, India-oriented ESTIMATE, not a
 * guarantee. Real numbers depend on tariff slab, DISCOM policy, shading,
 * component choice and the current PM Surya Ghar scheme. The UI shows a clear
 * "indicative estimate" disclaimer and a Get-Exact-Quote CTA.
 */

// ---- Assumptions (edit here; surfaced in the UI "how this is calculated") ----
export const ASSUMPTIONS = {
  /** ₹ per unit (kWh) — effective blended residential tariff (estimate). */
  tariffPerUnit: 8,
  /** Peak sun hours: usable kWh generated per kWp per day (Tamil Nadu avg). */
  peakSunHours: 4.5,
  /** Roof area needed per kW of panels (sq ft). */
  sqftPerKw: 100,
  /** Turn-key system cost per kW before subsidy (₹, estimate). */
  costPerKw: 55_000,
  /** Grid CO₂ emission factor (kg per kWh, India grid, approx). */
  co2PerKwh: 0.71,
  /** System useful life (years). */
  lifetimeYears: 25,
} as const;

export type RoofType = "RCC / Flat" | "Sloped / Tiled" | "Metal Sheet";

/** Roof-type generation multiplier (orientation/tilt suitability, estimate). */
const roofFactor: Record<RoofType, number> = {
  "RCC / Flat": 1.0,
  "Sloped / Tiled": 0.95,
  "Metal Sheet": 0.97,
};

/**
 * PM Surya Ghar (residential) central subsidy — CURRENT FRAMEWORK, marked
 * `verify`. ₹30,000/kW up to 2 kW, ₹18,000/kW for the 3rd kW, capped ₹78,000.
 * Confirm against pmsuryaghar.gov.in before presenting as final.
 */
export function estimateSubsidy(sizeKw: number): number {
  const first = Math.min(sizeKw, 2) * 30_000;
  const second = Math.max(0, Math.min(sizeKw, 3) - 2) * 18_000;
  return Math.min(first + second, 78_000);
}

export type CalcInput = {
  monthlyBill: number; // ₹
  roofType: RoofType;
  roofSize: number; // sq ft available
};

export type CalcResult = {
  systemSizeKw: number;
  annualGenerationKwh: number;
  annualSavings: number; // ₹
  monthlySavings: number; // ₹
  systemCost: number; // ₹ before subsidy
  subsidy: number; // ₹
  netCost: number; // ₹ after subsidy
  paybackYears: number;
  lifetimeSavings: number; // ₹ over lifetime, net of net cost
  co2TonnesPerYear: number;
  roofLimited: boolean; // was size capped by roof area?
};

export function calculateSolar(input: CalcInput): CalcResult {
  const a = ASSUMPTIONS;
  const monthlyUnits = input.monthlyBill / a.tariffPerUnit;
  const dailyUnits = monthlyUnits / 30;

  // Size from consumption vs size the roof can physically hold.
  const sizeFromUsage = dailyUnits / a.peakSunHours;
  const sizeFromRoof = input.roofSize / a.sqftPerKw;
  const rawSize = Math.min(sizeFromUsage, sizeFromRoof);
  const roofLimited = sizeFromRoof < sizeFromUsage;

  // Round to nearest 0.5 kW, floor at 1 kW.
  const systemSizeKw = Math.max(1, Math.round(rawSize * 2) / 2);

  const factor = roofFactor[input.roofType];
  const annualGenerationKwh = systemSizeKw * a.peakSunHours * 365 * factor;

  const annualConsumption = monthlyUnits * 12;
  // You only save on units you'd otherwise have bought.
  const offsetKwh = Math.min(annualGenerationKwh, annualConsumption);
  const annualSavings = Math.round(offsetKwh * a.tariffPerUnit);

  const systemCost = Math.round(systemSizeKw * a.costPerKw);
  const subsidy = Math.round(estimateSubsidy(systemSizeKw));
  const netCost = systemCost - subsidy;

  const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;
  const lifetimeSavings = Math.round(annualSavings * a.lifetimeYears - netCost);
  const co2TonnesPerYear = (annualGenerationKwh * a.co2PerKwh) / 1000;

  return {
    systemSizeKw,
    annualGenerationKwh: Math.round(annualGenerationKwh),
    annualSavings,
    monthlySavings: Math.round(annualSavings / 12),
    systemCost,
    subsidy,
    netCost,
    paybackYears: Math.round(paybackYears * 10) / 10,
    lifetimeSavings,
    co2TonnesPerYear: Math.round(co2TonnesPerYear * 10) / 10,
    roofLimited,
  };
}

/** ₹ formatter (Indian grouping). */
export function inr(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
