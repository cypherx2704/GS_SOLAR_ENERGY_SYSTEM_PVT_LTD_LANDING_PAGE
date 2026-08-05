import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { company, fullAddress, telHref, whatsappHref } from "@/content/company";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "./Section";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { OfficeMap } from "@/components/layout/OfficeMap";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Contact details block. `showMap={false}` where the page renders its own map. */
export function ContactSection({ showMap = true }: { showMap?: boolean }) {
  return (
    <section id="contact" className="section-y bg-surface-warm">
      <div
        className={cn(
          "container-page grid gap-12 lg:gap-16",
          showMap && "lg:grid-cols-2",
        )}
      >
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
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-ink-faint">WhatsApp</p>
                  <a
                    href={whatsappHref(company.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink hover:text-green-800"
                  >
                    {company.whatsapp}{" "}
                    <span className="text-sm font-normal text-ink-faint">
                      — fastest for a quick question
                    </span>
                  </a>
                </div>
              </li>

              {company.email && (
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-green-800/8 text-green-800">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-ink-faint">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium text-ink hover:text-green-800"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
              )}

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
                <a href={whatsappHref(company.whatsapp)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Office location — omitted where the page already shows a map */}
        {showMap && (
          <Reveal from="right">
            <OfficeMap />
          </Reveal>
        )}
      </div>
    </section>
  );
}
