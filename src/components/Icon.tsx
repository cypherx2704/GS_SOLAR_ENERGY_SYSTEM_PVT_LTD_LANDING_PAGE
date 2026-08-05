import {
  Home, Building, Building2, Factory, Zap, BatteryCharging, Battery, Combine,
  Droplets, Lightbulb, Wrench, MessageSquare, MapPin, PencilRuler, FileCheck2,
  HardHat, CircuitBoard, Activity, GraduationCap, Stethoscope, Hotel, Warehouse,
  Tractor, Store, TrendingDown, BadgeIndianRupee, ShieldCheck, Leaf, CalendarClock,
  BadgeCheck, Landmark, Headphones, Eye, HeartHandshake, Ruler, ReceiptText, type LucideIcon,
} from "lucide-react";

/** Registry mapping content icon-name strings → lucide components. */
const registry: Record<string, LucideIcon> = {
  Home, Building, Building2, Factory, Zap, BatteryCharging, Battery, Combine,
  Droplets, Lightbulb, Wrench, MessageSquare, MapPin, PencilRuler, FileCheck2,
  HardHat, CircuitBoard, Activity, GraduationCap, Stethoscope, Hotel, Warehouse,
  Tractor, Store, TrendingDown, BadgeIndianRupee, ShieldCheck, Leaf, CalendarClock,
  BadgeCheck, Landmark, Headphones, Eye, HeartHandshake, Ruler, ReceiptText,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Leaf;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
