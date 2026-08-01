import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { footerNav, legalNav } from "@/content/nav";
import { company, fullAddress, primaryPhone, telHref } from "@/content/company";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-green-900 text-canvas">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8 lg:py-20">
        {/* Brand + contact */}
        <div className="max-w-sm">
          <Logo variant="lockup" href="/" className="h-9 brightness-0 invert" />
          <p className="mt-5 text-sm leading-relaxed text-canvas/70">
            Clean, affordable solar for homes, businesses and industries across
            Chennai and Tamil Nadu — from survey to subsidy to switch-on.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-canvas/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <span>{fullAddress()}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold-400" />
              <a href={telHref(primaryPhone.value)} className="hover:text-gold-400">
                {primaryPhone.value}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold-400" />
              <a href={`mailto:${company.email.value}`} className="hover:text-gold-400">
                {company.email.value}
              </a>
              {company.email.placeholder && (
                <span className="rounded bg-canvas/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-canvas/50">
                  placeholder
                </span>
              )}
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-gold-400" />
              <span>{company.hours.weekdays}</span>
            </li>
          </ul>
        </div>

        {/* Link columns */}
        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow !text-canvas/50">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-canvas/75 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-t border-canvas/10">
        <div className="container-page flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">Solar tips & subsidy updates</p>
            <p className="text-sm text-canvas/60">
              Occasional, useful. No spam. (Newsletter wiring pending.)
            </p>
          </div>
          <div className="w-full max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-canvas/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-canvas/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. GST {company.gst}.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
