"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useQuote } from "./QuoteModalProvider";

/** A Button that opens the global quote modal. Usable from server components. */
export function QuoteButton(props: ButtonProps) {
  const { openQuote } = useQuote();
  return <Button onClick={openQuote} {...props} />;
}
