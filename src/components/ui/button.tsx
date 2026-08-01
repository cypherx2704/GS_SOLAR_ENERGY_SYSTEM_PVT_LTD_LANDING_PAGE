import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-[var(--ease-out-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Brand primary — forest green
        primary:
          "bg-green-800 text-canvas hover:bg-green-900 shadow-sm hover:shadow-md",
        // Solar gold — ink text on gold (gold never used as text, per §2.1)
        gold: "bg-gold-500 text-ink hover:bg-gold-400 shadow-sm hover:shadow-md",
        // Outline on light
        outline:
          "border border-green-800 text-green-800 hover:bg-green-800 hover:text-canvas",
        // On dark sections
        ghostLight:
          "text-canvas/90 hover:text-canvas hover:bg-canvas/10",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-green-800 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 rounded-[var(--radius-pill)] px-4 text-sm",
        md: "h-11 rounded-[var(--radius-pill)] px-6 text-[0.95rem]",
        lg: "h-13 rounded-[var(--radius-pill)] px-8 text-base",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
