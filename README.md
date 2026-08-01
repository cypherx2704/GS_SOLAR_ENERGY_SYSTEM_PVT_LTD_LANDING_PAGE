# GS Solar — Website

Premium marketing site + portfolio for **GS Solar Energy System Pvt Ltd**, Chennai.
Editorial light + forest-green + solar-gold aesthetic, cinematic scroll, one WebGL
hero and GSAP/CSS faux-3D throughout. Full plan: [`docs/PLAN.md`](docs/PLAN.md).

## Stack

Next.js 16 (App Router, TS) · Tailwind CSS v4 (CSS-first tokens) · Lenis smooth-scroll ·
GSAP + ScrollTrigger · Framer Motion · React Three Fiber (hero) · shadcn-style Radix
UI · react-hook-form + zod · lucide-react · Fraunces / Geist / Geist Mono via `next/font`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Key routes (current)

| Route     | Status |
|-----------|--------|
| `/`       | Phase-1 branded hero (WebGL hero + all 21 sections land in Phase 2) |
| `/brand`  | Logo & palette review — **pick the primary logo here** |

## Structure

- `src/content/*` — all copy/data, separated from UI. Real company data is seeded;
  placeholders are marked `placeholder: true` / `// TODO` (see `docs/PLAN.md` §16 for
  the content still needed from the client).
- `src/components/{layout,ui}` — layout shell (Navbar, Footer, QuoteModal, SmoothScroll)
  and shadcn-style primitives.
- `src/lib/*` — fonts, gsap setup, hooks, zod schemas, `cn()` util.
- `public/logos/*` — 3 original logo concepts (sun-panel · sunburst · roofline), each as
  lockup + mark, plus a favicon. Selected primary set in `src/components/layout/Logo.tsx`.

## Design tokens

Single source of truth is the `@theme` block in `src/app/globals.css` (mirrors
`docs/PLAN.md` §2). Gold is a **graphic** colour only — never small text.

## Build phases

1. **Foundation** ✅ — scaffold, tokens, fonts, content layer, 3 logos, layout shell.
2. **Landing page** — WebGL hero + all sections incl. calculator & animated explainer.
3. **Secondary pages** — About, Services, Projects, Subsidy, Contact, Blog.
4. **Polish** — animation/responsive/a11y/perf passes.
