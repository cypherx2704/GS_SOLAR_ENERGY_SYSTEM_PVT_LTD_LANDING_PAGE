"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/content/nav";
import { primaryPhone, telHref } from "@/content/company";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useQuote } from "./QuoteModalProvider";

export function Navbar() {
  const { openQuote } = useQuote();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-out-soft)]",
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo priority className="h-8 md:h-9" />

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={telHref(primaryPhone.value)} aria-label="Call GS Solar">
              <PhoneCall /> Call Now
            </a>
          </Button>
          <Button size="sm" onClick={openQuote} className="hover:-translate-y-0.5">
            Get Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-green-900 text-canvas transition-[opacity,transform] duration-300 ease-[var(--ease-out-soft)] md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none translate-y-[-8px] opacity-0",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <span className="font-display text-lg font-semibold">GS Solar</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex size-11 items-center justify-center rounded-full text-canvas"
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>
        </div>
        <ul className="container-page mt-4 flex flex-1 flex-col gap-1">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-canvas/10 py-4 font-display text-2xl text-canvas/90 transition-colors hover:text-gold-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-page flex flex-col gap-3 pb-10">
          <Button
            size="lg"
            variant="gold"
            onClick={() => {
              setMenuOpen(false);
              openQuote();
            }}
          >
            Get Free Quote
          </Button>
          <Button asChild size="lg" variant="ghostLight" className="border border-canvas/20">
            <a href={telHref(primaryPhone.value)}>
              <PhoneCall /> Call {primaryPhone.value}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
