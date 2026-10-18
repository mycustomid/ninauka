# NINAUKA — Complete Editorial Maison Website Patch

Patch prepared against **mycustomid/ninauka**, default branch `main`, snapshot `ffef96e873d463d9791319b0a54d22ac6f87c048` on 18 October 2026.

## Installation (overlay, never delete your existing public media)
1. Back up your existing `ninauka` folder or make a new Git branch.
2. Copy the files **inside this ZIP** into the existing repository root `ninauka/`, allowing overwrite of `src/App.jsx`, `src/index.css`, `src/data/ninaukaData.js`, and `index.html`.
3. Keep existing `public/images/**` and `public/brand/**` untouched. This patch intentionally references original brand-owned product photography already verified in the source repository. It does not embed random competitor bag imagery or pretend third-party items are Ninauka products.
4. Run `npm ci` then `npm run build` (from the full repository folder).
5. Run `node scripts/verify-content.mjs` to verify all product and media paths after applying the patch.
6. Run `npm run dev` locally and check page navigation, gallery thumbnails, category filters, and mobile menu.
7. Vercel SPA deep links are covered by the included `vercel.json` rewrite. When you know the final HTTPS domain, optionally run `SITE_URL=https://your-domain.example node scripts/generate-sitemap.mjs` before your production build.

## Page architecture
- `/` — immersive homepage, curated objects, story, editorial teaser, bespoke CTA
- `/collections` — complete catalogue with category filters and text search (15 source products)
- `/pieces/:id` — individual product detail page, image gallery, material / dimensions, WhatsApp enquiry (15 routes)
- `/maison` — house / founder / brand point of view
- `/savoir-faire` — four illustrated material chapters
- `/journal` — editorial index
- `/journal/:slug` — five fully written long-form editorial stories with related product recommendations
- `/bespoke` — corporate gifting, process, FAQ
- `/contact` — accurate contact information; enquiry form opens WhatsApp with a composed message (no misleading backend submission)
- `/privacy`, `/terms`, 404 — informational / fallback pages

## Design system
Warm parchment (#F4F0E9), deep espresso (#251F1B), rust (#A45742); Cormorant Garamond + Plus Jakarta Sans. Large editorial hierarchy, asymmetry, calm transitions, tactile product galleries, no faux glassmorphism/gradients/AI-generated luxury brand photos. Mobile-first fallbacks, reduced-motion preferences, semantic headings, skip link, accessible buttons and labelled form.

## Content and legal review
- Editorial articles are written for this site; they are not fabricated interviews, press releases, or claims of independent field investigation.
- Product details are reproduced from `src/data/ninaukaData.js` in the source repo and require business-owner approval prior to launch.
- Wildlife / CITES documentation must be verified for each relevant species, transaction, and destination. The site does not assert unconditional export eligibility.
- The website is a consultation catalogue, **not a checkout/payment platform**. No payments are collected.
- No CMS/backend was implemented. Article and product updates require editing JavaScript data files.
- SEO canonical and structured data update in the browser; for maximum organic search coverage of every deep page, use SSR or route prerendering as a later enhancement. A client-rendered page is not a substitute for a validated search crawl.

## Verification status
- JSX parsed with TypeScript parser: **PASS (0 syntax diagnostics)**.
- CSS parsed with tinycss2: **PASS (0 stylesheet parser errors)**.
- Mock static React render: pages for homepage, collections, product detail, journal, article detail, maison, savoir-faire, bespoke, contact and privacy **rendered**.
- Browser screenshot checks: desktop homepage, journal, product detail, catalog; mobile homepage, journal, product detail, catalog. Mobile viewport overflows: none in checked snapshots.
- Actual `npm run build` is **not executed in the isolated authoring container** (project dependencies/network installation not available). Run after overlay using repo's existing lockfile, per above.
- Awwwards recognition/score is **not certified or guaranteed**; the project follows an editorial luxury design direction inspired by fashion / high-end e-commerce practices.
