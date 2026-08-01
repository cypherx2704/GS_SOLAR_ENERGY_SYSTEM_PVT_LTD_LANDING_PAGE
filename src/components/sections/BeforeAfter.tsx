"use client";

import * as React from "react";
import { MoveHorizontal, Sun } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal } from "@/components/animation/Reveal";

/** Draggable before/after comparison slider (placeholder imagery, PLAN §6 #11). */
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
          description="Drag to compare a bare roof with one working for you. (Real project photos will replace these placeholders.)"
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900">
              <div className="absolute inset-0 grid place-items-center text-canvas/70">
                <div className="text-center">
                  <Sun className="mx-auto size-8 text-gold-400" />
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest">After · panels installed</p>
                </div>
              </div>
            </div>

            {/* BEFORE (clipped overlay) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-ink-faint to-ink-muted"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="absolute inset-0 grid place-items-center text-canvas/70">
                <p className="font-mono text-xs uppercase tracking-widest">Before · bare roof</p>
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
