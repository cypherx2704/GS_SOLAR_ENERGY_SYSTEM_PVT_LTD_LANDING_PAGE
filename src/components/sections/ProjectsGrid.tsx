"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Zap, ImageOff } from "lucide-react";
import { projects, projectCategories } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [filter, setFilter] = React.useState<(typeof projectCategories)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* filters */}
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === c
                ? "border-green-800 bg-green-800 text-canvas"
                : "border-line bg-surface text-ink-muted hover:border-green-600/40",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-800 to-green-900">
              <div className="absolute inset-0 grid place-items-center text-canvas/40">
                <ImageOff className="size-8" />
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-canvas/90 px-2.5 py-1 text-xs font-medium text-green-900">
                {p.category}
              </span>
              {p.placeholder && (
                <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                  Sample
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-green-600" /> {p.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="size-4 text-green-600" /> {p.capacityKw} kW
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
