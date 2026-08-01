"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** seconds per loop */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

/**
 * Kinetic marquee — duplicates content and translates via CSS keyframes.
 * Paused entirely under reduced motion (animation-duration collapsed globally).
 */
export function Marquee({
  children,
  className,
  speed = 32,
  reverse = false,
  pauseOnHover = true,
}: Props) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-6 pr-6",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            animation: `marquee ${speed}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
