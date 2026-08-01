# GS Solar — Website Architecture & Build Plan

> **Status:** Awaiting sign-off. No site code is written until this plan is approved.
> **Client:** GS SOLAR ENERGY SYSTEM PVT LTD, Chennai
> **Reference aesthetic:** https://noomoagency.com (premium, editorial, WebGL, smooth-scroll) — adapted to a light editorial + green palette for a trustworthy Indian solar brand.

---

## 1. Vision

A premium, editorial marketing site that feels closer to a design-agency showcase than a typical solar vendor page — large type, generous whitespace, cinematic scroll, one real 3D centerpiece, and restrained gold-on-green accents. It must still convert: clear CTAs (Get Free Quote / Call Now), a working savings calculator, real trust signals, and an India-specific government-subsidy guide.

**Locked decisions (from you):**
| Decision | Choice |
|---|---|
| Scope | Full multi-page site |
| Palette | Light editorial + green |
| 3D approach | Hybrid — one WebGL hero + GSAP/CSS faux-3D elsewhere |
| "How solar works" video | Scroll-driven **animated** explainer (no video file) |

---

## 2. Design System

### 2.1 Color tokens
Warm off-white canvas, deep forest green as brand primary, solar gold as accent. Exact tokens (also the source of truth for `globals.css` / Tailwind theme):

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#FAF9F5` | Page background (warm off-white) |
| `surface` | `#FFFFFF` | Cards / raised surfaces |
| `surface-warm` | `#F4F2EA` | Alternating section bands |
| `ink` | `#1A1A18` | Primary text (~16:1 on canvas — AAA) |
| `ink-muted` | `#55554F` | Secondary text |
| `ink-faint` | `#8A8A82` | Captions, meta |
| `line` | `#E5E2D8` | Borders, hairlines |
| `green-900` | `#0B3320` | Dark section fills |
| `green-800` | `#14532D` | **Brand primary** — buttons, headings-on-light (~9:1, AAA) |
| `green-600` | `#2E8B57` | Hover / secondary green |
| `green-400` | `#3FA96A` | Light green accents |
| `gold-600` | `#D99A00` | Gold where slightly more contrast is needed |
| `gold-500` | `#F5B301` | **Accent** — graphics, glows, fills, large marks |
| `gold-400` | `#FFC730` | Highlights / gradients |

**Contrast rules (AA/AAA):**
- Body/heading text → `ink` or `green-800` on `canvas`/`surface`. Both pass AAA.
- **Gold is a *graphic* color, not a text color.** `gold-500` on light backgrounds fails AA for text, so gold is used only for fills, icons, glows, underlines, and large display flourishes. Text placed *on* a gold fill uses `ink`.
- Dark sections (CTA, Stats, Footer) invert: `green-900`/`ink` background, `canvas` text, gold accents.

### 2.2 Typography
Editorial pairing (all OSS / Google-hosted via `next/font`, swappable):
- **Display:** `Fraunces` — variable high-contrast serif, optical sizing. Big headlines, hero.
- **Body/UI:** `Geist Sans` — clean grotesque. Paragraphs, buttons, nav.
- **Mono/labels:** `Geist Mono` — eyebrow labels, section numbers, stats, units (`kW`, `₹`, `CO₂`).

Fluid type scale with `clamp()`; tight display leading, generous body leading. Big section headings (clamp up to ~5–7rem on desktop).

### 2.3 Space, radius, motion
- 8px spacing base; section vertical rhythm large (128–200px) for the whitespace brief.
- Radius: soft (cards ~16–20px, buttons pill/rounded). Hairline `line` borders.
- Motion principles: **ease, don't bounce** (custom cubic-beziers), staggered reveals, scroll-scrubbed hero, magnetic buttons, kinetic marquees. Everything gated behind `prefers-reduced-motion`.

### 2.4 Imagery
Director photos (real) power the leadership section. All other photography (projects, hero plates, industry shots) starts as tasteful placeholders with correct aspect ratios and clear TODO markers, swappable later.

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Your chosen stack; RSC, routing, image optimization |
| Styling | **Tailwind CSS v4** (CSS-first tokens) | Brief requirement; fast, tokened |
| Components | **shadcn/ui** + Radix | Accessible primitives (Accordion, Dialog, Tabs, Form, Select) |
| Smooth scroll | **Lenis** | Brief requirement |
| Scroll/timeline anim | **GSAP + ScrollTrigger** | Brief requirement; scrubbed & pinned sections |
| Component motion | **Framer Motion** | Page transitions, hover/interaction where it beats GSAP |
| 3D | **React Three Fiber + drei + three** | Hero WebGL centerpiece only |
| Icons | **lucide-react** | Ships with shadcn |
| Forms | **react-hook-form + zod** | Quote/contact validation |
| Fonts | **next/font** (Fraunces, Geist, Geist Mono) | No layout shift, self-hosted |

Package manager: **npm** (v10 present). Node v22 present.

---

## 4. Information Architecture

```
/                      Home — full landing experience (all sections below)
/about                 Company story, founders, mission/vision, timeline, team, certs
/services              Services overview grid
/services/[slug]       Individual service (overview, benefits, process, FAQ, quote CTA)
/projects              Portfolio grid + filters (category / capacity / location)
/projects/[slug]       Case study template (specs, challenge, solution, gallery, review)
/industries            Industries we serve (or condensed section on Home)
/subsidy               Government subsidy guide (India) — benefits + step-by-step
/contact               Form, map, phone, WhatsApp, hours, office
/blog                  Article listing
/blog/[slug]           Article template
```
Quote flow = a **global modal** (`Get Free Quote`) reachable from anywhere, plus a `/contact` fallback.

**Primary nav:** Home · About · Services · Projects · Calculator · Testimonials · Contact + **Get Free Quote** (CTA). Sticky, transparent-over-hero → solid on scroll. Mobile: full-screen overlay menu.

---

## 5. Content Data Layer (how placeholders work)

All copy/data lives in typed modules under `src/content/*` — **separated from components** so you can fill real content later without touching UI:

```
content/company.ts     name, GST, address, phones, socials, hours  (REAL data seeded)
content/nav.ts         nav + footer links
content/services.ts    service cards (names generic to solar, no product brands)
content/projects.ts    case studies                     [PLACEHOLDER]
content/testimonials.ts reviews                          [PLACEHOLDER]
content/faqs.ts        FAQ Q&A                           [PLACEHOLDER-ish]
content/process.ts     8-step process                    (from blueprint)
content/stats.ts       animated counters                 [PLACEHOLDER numbers]
content/industries.ts  industries served                 (from blueprint)
content/subsidy.ts     PM Surya Ghar guide               [DRAFT, verify figures]
content/blog.ts        articles                          [PLACEHOLDER]
```
Every placeholder is marked (`placeholder: true` / `// TODO`) and rendered in a clearly "sample" state so nothing looks like a real claim.

### Missing content checklist → see §16.

---

## 6. Landing Page — Section-by-Section

Mapping all 21 blueprint sections. **Honoring your constraint: I will NOT invent any solar products or brand names** — Details.md lists none, so those sections ship as empty, clearly-labeled placeholders.

| # | Section | Notes / animation |
|---|---|---|
| 1 | **Nav** | Sticky, magnetic CTA, scroll state change |
| 2 | **Hero** | Left: headline "Power Your Future with Clean Solar Energy", subhead, `Get Free Quote` + `Call Now`. Right: **WebGL 3D** solar scene. Scroll-scrubbed intro. |
| — | **Hero stats row** | 500+ customers · 25 MW · 10 yrs · 500+ projects · 24/7 [PLACEHOLDER numbers] |
| 3 | **Trust strip** | MNRE / ISO / Approved Vendor / Subsidy / Authorized Dealer — as text/badge chips (no invented logos) |
| 4 | **About preview** | Who we are, mission, vision → links to /about. Team photo. |
| 5 | **Why Solar?** | 6 benefit cards w/ icons (lower bills, subsidy, low maintenance, eco, property value, 25-yr life) |
| 6 | **Services** | Card grid → /services. Generic solar service types only. |
| 7 | **Why Choose Us** | 8 differentiators, staggered reveal |
| 8 | **Our Process** | 8-step vertical timeline, scroll-drawn connector line |
| 9 | **Solar Savings Calculator** | Interactive: inputs (monthly bill, city, roof type, roof size) → outputs (system size, savings, payback, CO₂, subsidy). Transparent formula documented; results animate. |
| 10 | **Portfolio / Projects** | Featured grid → /projects. [PLACEHOLDER projects] |
| 11 | **Before vs After** | Draggable image comparison slider [PLACEHOLDER images] |
| 12 | **Industries served** | Marquee / grid of 10 industries |
| 13 | **Products** | ⚠️ **Placeholder shell only** — "Product line-up coming soon." No invented products. |
| 14 | **Brands you work with** | ⚠️ **Placeholder shell only** — awaiting your brand list. No invented brands. |
| 15 | **Testimonials** | Slider cards [PLACEHOLDER] |
| 16 | **Statistics** | Animated counters on scroll [PLACEHOLDER numbers] |
| 17 | **Government subsidy** | India PM Surya Ghar — benefits + steps → /subsidy (see §10) |
| — | **Animated "How Solar Works"** | Scroll-scrubbed explainer replacing the video (see §9) |
| 18 | **FAQs** | shadcn Accordion |
| 19 | **CTA band** | Dark green, "Ready to Save on Electricity?" → quote modal |
| 20 | **Contact** | Phone, email, office, map placeholder, hours, WhatsApp |
| 21 | **Footer** | Quick links, services, socials, newsletter (UI only), legal |

---

## 7. Secondary Pages

- **/about** — story, founder message, mission/vision/values, **leadership (real director photos + names/roles)**, timeline, certifications, infrastructure. `SAI PRASANNA` shown with initials-avatar until a photo is provided.
- **/services** + **/services/[slug]** — overview grid; each service: overview, benefits, working principle, suitable-for, process, FAQ, quote CTA.
- **/projects** + **/projects/[slug]** — filterable grid; case-study template with full spec table, challenge/solution, gallery, review. [PLACEHOLDER data]
- **/subsidy** — full India subsidy guide (see §10).
- **/contact** — RHF+zod form, office details, map placeholder, WhatsApp deep-link, hours.
- **/blog** + **/blog/[slug]** — listing + article template. [PLACEHOLDER posts]

---

## 8. 3D & Animation System (Hybrid)

- **WebGL hero (only):** React Three Fiber scene — a stylized solar panel array / sun with subtle parallax, mouse-reactive tilt, gentle idle motion, gold rim light. Lazy-loaded, `<Suspense>`, static fallback image for reduced-motion / low-power / mobile.
- **Everywhere else (GSAP + CSS 3D):** scroll-scrubbed reveals, pinned sections, parallax layers, `transform-3d` card tilt, magnetic buttons, kinetic marquees, counters.
- **Lenis** drives one smooth-scroll context; GSAP ScrollTrigger is synced to it. Single global provider.
- **Reusable primitives** in `components/animation/`: `Reveal`, `SplitText`, `Parallax`, `Marquee`, `Counter`, `MagneticButton`, `TiltCard`.
- **Reduced motion:** a `useReducedMotion` gate disables scrubbing/WebGL idle and swaps to instant fades. Accessibility-first.

---

## 9. Animated "How Solar Works" Explainer

Replaces the requested video. A pinned, scroll-scrubbed sequence walking the energy path:

`☀ Sunlight → ▦ PV Panels (photons → DC) → ⚡ Inverter (DC → AC) → 🏠 Home load → 🔌 Grid / net-metering (export)`

Built with a GSAP timeline over SVG + CSS (optionally one small R3F element), on-brand gold energy pulses along green conduits. Lightweight, no external asset, fully reduced-motion aware (becomes a static labeled diagram).

---

## 10. Government Subsidy (India-specific)

Dedicated, genuinely useful section + `/subsidy` page covering **PM Surya Ghar: Muft Bijli Yojana** (national residential rooftop scheme) and the general rooftop-solar subsidy path:

- **Benefits:** central financial assistance, reduced payback, up to ~300 free units/month claim, net-metering export credits, higher property value.
- **Eligibility:** residential consumer, own roof, valid electricity connection, sanctioned load conditions.
- **Step-by-step to apply:** register on the national portal → submit application with DISCOM details → await feasibility approval → install via a registered/empanelled vendor → apply for net meter → inspection → subsidy credited to bank account.
- **Documents:** electricity bill, ID/address proof, roof ownership proof, bank details, passport photo.

> ⚠️ **Accuracy caveat:** subsidy amounts, slab caps, and portal steps change over time. I'll present the current framework and **mark every figure `verify`** — you confirm exact ₹ amounts against `pmsuryaghar.gov.in` / MNRE / your DISCOM before launch. I will not publish specific numbers as guaranteed without your confirmation.

---

## 11. Logos (3 unique concepts)

I'll design **3 original SVG logos** (vector, crisp at any size) in `/public/logos/`, none copied from anywhere, using the green+gold palette:

1. **Sun-Panel monogram "GS"** — G and S formed within a rising-sun + panel-grid mark.
2. **Sunburst rays** — radial gold rays emerging over a green horizon line, minimal.
3. **Roofline mark** — abstract sun cresting a stylized roof/panel, geometric.

Each delivered as: full lockup (mark + wordmark), horizontal, and monogram-only variants + a favicon. Provided in the brand fonts/colors. You pick the primary; the others become alternates.

---

## 12. Accessibility (AA) & Performance

- Semantic landmarks, skip-link, logical heading order, visible focus rings, labeled controls, keyboard-operable calculator/slider/menu/accordion.
- Contrast verified per §2.1 (gold never used as small text).
- `prefers-reduced-motion` fully honored (WebGL + scrub disabled → static).
- Alt text on all imagery; forms with proper labels/errors (RHF+zod).
- Perf: lazy-load WebGL & below-fold sections, `next/image`, font subsetting, code-split heavy libs, Lighthouse target ≥ 90 desktop / solid mobile.

---

## 13. Folder Structure

```
src/
  app/
    layout.tsx  page.tsx  globals.css
    about/  services/[slug]/  projects/[slug]/  subsidy/  contact/  blog/[slug]/
  components/
    layout/     Navbar, Footer, SmoothScroll(Lenis), CustomCursor, QuoteModal, PageTransition
    sections/   Hero, TrustStrip, AboutPreview, WhySolar, Services, WhyChooseUs,
                Process, Calculator, Portfolio, BeforeAfter, Industries,
                ProductsPlaceholder, BrandsPlaceholder, Testimonials, Stats,
                SubsidyPreview, SolarExplainer, FAQ, CTA, ContactSection
    three/      HeroScene + meshes
    animation/  Reveal, SplitText, Parallax, Marquee, Counter, MagneticButton, TiltCard
    ui/         shadcn components
  content/      company, nav, services, projects, testimonials, faqs, process,
                stats, industries, subsidy, blog
  lib/          utils, gsap setup, hooks (useReducedMotion, useLenis, useCalculator)
public/
  logos/        3 logos + variants + favicon
  images/team/  director photos (moved from "Company Details")
  images/…      placeholders
```

---

## 14. Build Phases (order, once approved)

1. **Foundation** — scaffold Next.js+TS+Tailwind v4, shadcn init, install deps, design tokens + fonts, Lenis+GSAP providers, content data layer skeleton, **3 logos**, layout shell (Navbar/Footer/QuoteModal).
2. **Landing page** — WebGL hero + all sections (the bulk of the work), incl. calculator + animated explainer.
3. **Secondary pages** — About (real team), Services(+[slug]), Projects(+[slug]), Subsidy, Contact, Blog(+[slug]).
4. **Polish** — animation choreography pass, responsive pass, accessibility pass, performance pass, README/run instructions.

I'll checkpoint with you after **Phase 1 (foundation + logos)** so you can approve the look before the full build-out.

---

## 15. Defaults I chose (tell me to change any)

- Fonts: **Fraunces + Geist Sans + Geist Mono**.
- **Tailwind v4** (fallback to v3 if any shadcn friction).
- TypeScript, App Router, `src/` dir, npm.
- Quote = global modal (not a standalone route).
- Industries & Subsidy exist both as Home sections *and* dedicated pages.

---

## 16. What I need from you (content — placeholders used until provided)

**Business:** ☐ email  ☐ business hours  ☐ WhatsApp number  ☐ social links  ☐ years in business / founding year  ☐ company story, mission, vision, values  ☐ founder message  ☐ SAI PRASANNA photo + all director roles/titles.

**Proof:** ☐ real stats (customers, MW, projects, savings, CO₂)  ☐ certifications (MNRE/ISO details + certificate images)  ☐ testimonials (name, location, photo, quote, rating)  ☐ awards.

**Portfolio:** ☐ project case studies (name, client, location, capacity, date, cost, system type, panels, inverter, generation, savings, ROI, carbon offset, challenge, solution, photos)  ☐ before/after roof photos.

**Products & brands:** ☐ the solar products you offer  ☐ the panel/inverter/battery brands you work with. *(I will not invent these — sections stay empty until you send them.)*

**Subsidy:** ☐ confirm current PM Surya Ghar figures/steps for your DISCOM (Chennai — TANGEDCO).

**Media:** ☐ any real photography for hero/projects/industries  ☐ (optional) a real "how solar works" clip if you later prefer video over the animation.

---

**→ Approve this plan (or tell me what to adjust), and I'll start Phase 1: scaffold + design tokens + the 3 logos, then check in before the full landing build.**
