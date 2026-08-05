import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { footerNav, legalNav } from "@/content/nav";
import {
  company,
  fullAddress,
  primaryPhone,
  telHref,
  whatsappHref,
  activeSocials,
} from "@/content/company";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

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
              <MessageCircle className="size-4 shrink-0 text-gold-400" />
              <a
                href={whatsappHref(company.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400"
              >
                WhatsApp us
              </a>
            </li>
            {company.email && (
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold-400" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-400">
                  {company.email}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-gold-400" />
              <span>{company.hours.weekdays}</span>
            </li>
          </ul>

          {activeSocials.length > 0 && (
            <div className="mt-6 flex gap-2.5">
              {activeSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-canvas/15 text-canvas/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <SocialIcon name={s.icon} className="size-4" />
                </a>
              ))}
            </div>
          )}
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
