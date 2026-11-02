# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Corporate website for **Herbolarium de la Fuente**, a herbalist/dietetics shop in Oviedo (Spain). All UI copy is in Spanish. Stack: Vite + React 18 + TypeScript + React Router + Tailwind CSS + shadcn/ui (Radix). No backend: the contact form opens the user's WhatsApp or mail client with a prefilled message.

## Commands

```sh
npm install
npm run dev        # dev server on http://localhost:8080
npm run build      # production build (set VITE_SITE_URL to emit sitemap.xml + absolute canonicals)
npm run lint       # ESLint (0 errors; remaining warnings are react-refresh notices in src/components/ui)
npm run preview    # serve dist/
npx tsc --noEmit -p tsconfig.app.json   # type-check
```

No test framework is configured.

## Content rules (important)

- **Never invent business information**: no biography, qualifications, years of experience, opening hours, prices, brands, stock, reviews, coordinates or legal/company data. Only data in `src/config/site.ts` is verified. Unconfirmed items are modelled as empty arrays/undefined and their sections hide themselves or render a fallback (`openingHours`, `featuredProducts`, `news`, `posts`, `maria.bio`, `maria.photo`).
- Keep the distinction between the shop's commercial activity and María de la Fuente's professional activity as a dietitian (Dietista nº 2278 – ASNADI). Do not attribute clinical/health services to her.
- Health-related copy must not make cure claims.
- Current photos in `src/assets/img/` are provisional stock crops; never present them as the shop or as María.

## Architecture

- `src/config/site.ts`: single source of truth for business data, nav, WhatsApp/tel/mail/maps URL helpers and `sitemapRoutes`. It must stay asset-free because `vite.config.ts` imports it (same for `src/content/blog.ts`).
- `vite.config.ts` contains a local `seo()` plugin: injects LocalBusiness (`Store`) JSON-LD into `index.html`, emits `robots.txt`, and emits `sitemap.xml` + absolute canonical/OG URLs only when `VITE_SITE_URL` is set.
- `src/App.tsx`: routes under a shared `Layout` (`src/components/layout/`: header with Radix-dialog mobile menu, footer, floating WhatsApp button, cookie banner, scroll/hash restoration). All pages except Home and NotFound are `React.lazy`. New routes go above the catch-all `*`; add indexable ones to `sitemapRoutes`.
- Per-page SEO: call `usePageMeta()` (`src/hooks/use-page-meta.ts`) in every page; it sets title, description, robots, canonical, OG/Twitter tags and optional page-scoped JSON-LD.
- `src/content/*`: editable data (categories, services, products, news, blog, María). Blog posts use a typed block model rendered by `src/pages/BlogPost.tsx`.
- `src/lib/consent.ts`: cookie-consent store (`useSyncExternalStore` + localStorage key `hdlf-consent-v1`). `MapEmbed` only loads the Google Maps iframe when `external` consent is granted.
- `src/components/sections/`: reusable page sections; `src/components/common/`: `Reveal` (IntersectionObserver fade-in), `SectionHeading`, `PageHeader` (with breadcrumbs), `LegalPage`.

## Styling

- Design tokens in `src/index.css` (HSL): `forest #294D3B`, `sage #91A58B`, `beige #F3EFE5`, `warm #FCFBF7`, `earth #80664D`, `pine #20382C`, exposed as Tailwind colors in `tailwind.config.ts`. Use tokens, not hard-coded colors.
- Fonts: `font-serif` = Cormorant Garamond (headings, h1–h4 by default), `font-sans` = Montserrat (body, UI). Loaded from Google Fonts in `index.html`.
- Shared utilities: `.container-site`, `.section`, `.eyebrow`, `.prose-site`, `.link-underline`.
- `src/components/ui/button.tsx` is customized (uppercase tracking, variants `light` and `outline-light` for dark backgrounds).

## TypeScript

The app tsconfig is loose (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`).
