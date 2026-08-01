import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[96px] w-full rounded-[var(--radius-md)] border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus-visible:border-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 disabled:opacity-50 aria-[invalid=true]:border-red-500",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
