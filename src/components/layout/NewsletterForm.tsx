"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";

/** UI-only newsletter capture (no backend yet — PLAN §6 #21). */
export function NewsletterForm() {
  const [done, setDone] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Email for newsletter"
        className="h-11 w-full rounded-[var(--radius-md)] border border-canvas/20 bg-canvas/5 px-3.5 text-sm text-canvas placeholder:text-canvas/50 focus-visible:border-gold-400 focus-visible:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-gold-500 text-ink transition-colors hover:bg-gold-400"
      >
        {done ? <Check className="size-5" /> : <ArrowRight className="size-5" />}
      </button>
    </form>
  );
}
