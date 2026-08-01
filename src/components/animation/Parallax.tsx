"use client";

import * as React from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** positive = moves up as you scroll down; try 40–120 */
  amount?: number;
};

/** Vertical parallax layer driven by GSAP ScrollTrigger (synced to Lenis). */
export function Parallax({ children, className, amount = 60 }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const tween = gsap.fromTo(
      el,
      { y: amount },
      {
        y: -amount,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount, reduced]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
