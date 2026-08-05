"use client";

import * as React from "react";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "./Section";
import { RoofScene } from "./RoofScene";
import { Reveal } from "@/components/animation/Reveal";

/** Draggable before/after comparison of the same roof, drawn as an illustration. */
export function BeforeAfter() {
  const [pos, setPos] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  React.useEffect(() => {
    const move = (e: PointerEvent) => dragging.current && setFromClientX(e.clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="section-y bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Before / After"
          title="A rooftop,"
          accent="transformed."
          description="The same slab, twice. On the left it is dead space you still pay a full grid bill to live under. On the right it is a 25-year generating asset. Drag the handle to compare — illustration, not a project photo."
          align="center"
        />

        <Reveal className="mt-14">
          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/9] max-w-4xl select-none overflow-hidden rounded-[var(--radius-lg)] border border-line"
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
          >
            {/* AFTER (base layer) */}
            <div className="absolute inset-0">
              <RoofScene variant="after" />
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-[var(--radius-md)] bg-green-900/90 px-3.5 py-2 text-right text-canvas backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">After</p>
              <p className="text-sm font-medium">Generating from day one</p>
            </div>

            {/* BEFORE (clipped overlay) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <RoofScene variant="before" />
              <div className="pointer-events-none absolute bottom-4 left-4 rounded-[var(--radius-md)] bg-ink/85 px-3.5 py-2 text-canvas backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-canvas/60">Before</p>
                <p className="text-sm font-medium">Full grid bill, every month</p>
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 w-0.5 cursor-ew-resize bg-canvas"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-canvas text-green-900 shadow-lg">
                <MoveHorizontal className="size-5" />
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
