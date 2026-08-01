import { PhoneCall } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { SplitText } from "@/components/animation/SplitText";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { QuoteButton } from "@/components/layout/QuoteButton";
import { Button } from "@/components/ui/button";
import { primaryPhone, telHref } from "@/content/company";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-green-900 py-24 text-canvas sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[30rem] rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full bg-green-400/10 blur-3xl"
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05]">
          <SplitText text="Ready to save on" />{" "}
          <span className="text-gold-400">
            <SplitText text="electricity?" delay={0.2} />
          </span>
        </h2>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-canvas/70">
            Get a free site survey and a transparent, no-obligation quote. Find
            out exactly what solar can do for your property.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton>
              <QuoteButton size="lg" variant="gold">
                Request Free Quote
              </QuoteButton>
            </MagneticButton>
            <Button asChild size="lg" variant="ghostLight" className="border border-canvas/20">
              <a href={telHref(primaryPhone.value)}>
                <PhoneCall /> {primaryPhone.value}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
