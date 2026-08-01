import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animation/Reveal";
import { SplitText } from "@/components/animation/SplitText";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  /** background band */
  tone?: "canvas" | "warm" | "surface" | "dark";
  as?: "section" | "div";
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  canvas: "bg-canvas text-ink",
  warm: "bg-surface-warm text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-green-900 text-canvas",
};

/** Standard section band with vertical rhythm + optional id anchor. */
export function Section({
  id,
  tone = "canvas",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn("section-y", toneClass[tone], className)} {...rest}>
      <div className="container-page">{children}</div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  /** highlighted trailing phrase (rendered green/gold) */
  accent?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h2" | "h1";
};

/** Consistent editorial section heading with animated split-text title. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "light",
  className,
  as = "h2",
}: HeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className={cn("eyebrow", align === "center" && "justify-center", tone === "dark" && "!text-canvas/60")}>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Tag
        className={cn(
          "mt-4 font-display font-semibold leading-[1.05] tracking-[-0.02em]",
          as === "h1"
            ? "text-[clamp(2.6rem,6vw,5rem)]"
            : "text-[clamp(2rem,4.2vw,3.4rem)]",
          tone === "dark" ? "text-canvas" : "text-ink",
        )}
      >
        <SplitText text={title} />
        {accent && (
          <>
            {" "}
            <span className={tone === "dark" ? "text-gold-400" : "text-green-800"}>
              <SplitText text={accent} delay={0.15} />
            </span>
          </>
        )}
      </Tag>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              tone === "dark" ? "text-canvas/70" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
