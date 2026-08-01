import { stats } from "@/content/stats";
import { Counter } from "@/components/animation/Counter";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-green-800 py-20 text-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold-400) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative">
        <RevealGroup className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="font-display text-4xl font-semibold text-canvas sm:text-5xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <p className="mt-2 text-sm text-canvas/70">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-widest text-canvas/40">
          Indicative figures · pending confirmation
        </p>
      </div>
    </section>
  );
}
