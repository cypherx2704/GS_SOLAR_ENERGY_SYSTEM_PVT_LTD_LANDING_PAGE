import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "h-11 w-full rounded-[var(--radius-md)] border border-line bg-surface px-3.5 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus-visible:border-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 disabled:opacity-50 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
