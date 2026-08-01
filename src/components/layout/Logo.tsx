import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Primary brand logo. Swap PRIMARY to the concept the client selects at the
 * Phase-1 checkpoint (sun-panel | sunburst | roofline). All three live in
 * /public/logos and are previewable at /brand.
 */
const PRIMARY = "sun-panel";

type Props = {
  variant?: "lockup" | "mark";
  className?: string;
  /** wrap in a link to home */
  href?: string | null;
  priority?: boolean;
};

export function Logo({
  variant = "lockup",
  className,
  href = "/",
  priority,
}: Props) {
  const src = `/logos/logo-${PRIMARY}-${variant}.svg`;
  const dims =
    variant === "lockup"
      ? { width: 180, height: 48 }
      : { width: 44, height: 44 };

  const img = (
    <Image
      src={src}
      alt="GS Solar"
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );

  if (href === null) return img;
  return (
    <Link href={href} aria-label="GS Solar — home" className="inline-flex items-center">
      {img}
    </Link>
  );
}
