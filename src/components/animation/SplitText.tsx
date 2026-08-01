"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type Props = {
  text: string;
  className?: string;
  by?: "word" | "char";
  delay?: number;
};

/**
 * Reveals a heading word-by-word on scroll into view. A single `useInView`
 * observer on the container drives variant propagation to the word children
 * (the reliable pattern here), with a timed fallback so a heading is NEVER
 * left hidden. Static under reduced motion.
 */
export function SplitText({ text, className, by = "word", delay = 0 }: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotion();
  const [fallback, setFallback] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setFallback(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const show = reduced || inView || fallback;
  const units = by === "word" ? text.split(" ") : Array.from(text);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : by === "word" ? 0.05 : 0.02, delayChildren: delay },
    },
  };
  const child: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline" }}
      aria-label={text}
      variants={container}
      initial="hidden"
      animate={show ? "show" : "hidden"}
    >
      {units.map((u, i) => (
        <span
          key={i}
          aria-hidden
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span variants={child} style={{ display: "inline-block", willChange: "transform" }}>
            {u}
            {by === "word" ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
