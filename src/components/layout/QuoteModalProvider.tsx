"use client";

import * as React from "react";
import { QuoteModal } from "./QuoteModal";

type Ctx = { openQuote: () => void; closeQuote: () => void };
const QuoteModalContext = React.createContext<Ctx | null>(null);

/** Wrap the app so any component can call useQuote().openQuote(). */
export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const value = React.useMemo<Ctx>(
    () => ({ openQuote: () => setOpen(true), closeQuote: () => setOpen(false) }),
    [],
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal open={open} onOpenChange={setOpen} />
    </QuoteModalContext.Provider>
  );
}

export function useQuote(): Ctx {
  const ctx = React.useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuote must be used within <QuoteModalProvider>");
  return ctx;
}
