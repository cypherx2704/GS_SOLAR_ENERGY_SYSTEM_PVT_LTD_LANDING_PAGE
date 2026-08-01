"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in seconds */
  delay?: number;
  /** direction the element travels from */
  from?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span" | "section";
  once?: boolean;
};

const OFFSET = 28;

/**
 * Scroll-into-view reveal — the workhorse for staggered section entrances.
 * Framer Motion respects prefers-reduced-motion automatically (no transform
 * when reduced), and we also collapse the distance to 0 in that case.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
  once = true,
}: Props) {
  const offset =
    from === "up"
      ? { y: OFFSET }
      : from === "down"
        ? { y: -OFFSET }
        : from === "left"
          ? { x: OFFSET }
          : from === "right"
            ? { x: -OFFSET }
            : {};

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers Reveal children. Use with <Reveal> items inside. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** A child item for RevealGroup (uses the parent's stagger orchestration). */
export function RevealItem({
  children,
  className,
  from = "up",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  from?: "up" | "down" | "none";
  as?: "div" | "li";
}) {
  const offset = from === "up" ? { y: OFFSET } : from === "down" ? { y: -OFFSET } : {};
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </MotionTag>
  );
}
