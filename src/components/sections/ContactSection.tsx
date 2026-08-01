import { Phone, Mail, MapPin, Clock, MessageCircle, MapPinned } from "lucide-react";
import { company, fullAddress, telHref, whatsappHref } from "@/content/company";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-surface-warm">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Details */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            accent="solar."
            description="Call, message on WhatsApp, or drop by the office. We're happy to help — no pressure."
          />

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-ink-faint">Phone</p>
                  <div className="flex flex-col">
                    {company.phones.map((p) => (
                      <a
                        key={p.value}
                        href={telHref(p.value)}
                        className="font-medium text-ink hover:text-green-800"
                      >
                        {p.value}{" "}
                        <span className="text-sm font-normal text-ink-faint">
                          — {p.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-ink-faint">Email</p>
                  <a href={`mailto:${company.email.value}`} className="font-medium text-ink hover:text-green-800">
                    {company.email.value}
                  </a>
                  {company.email.placeholder && (
                    <span className="ml-2 rounded bg-line px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-ink-faint">
                      placeholder
                    </span>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-ink-faint">Office</p>
                  <p className="font-medium text-ink">{fullAddress()}</p>
                  <p className="mt-0.5 text-sm text-ink-faint">GST {company.gst}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-ink-faint">Hours</p>
                  <p className="font-medium text-ink">{company.hours.weekdays}</p>
                  <p className="text-sm text-ink-muted">{company.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton>Get Free Quote</QuoteButton>
              <Button asChild variant="outline">
                <a href={whatsappHref(company.whatsapp.value)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <Reveal from="right">
          <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-gradient-to-br from-green-800 to-green-900">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-canvas) 1px, transparent 1px), linear-gradient(90deg, var(--color-canvas) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <MapPinned className="mx-auto size-10 text-gold-400" />
                <p className="mt-3 font-medium text-canvas">{company.address.city}, {company.address.state}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-canvas/50">
                  Google Map embed · pending
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
