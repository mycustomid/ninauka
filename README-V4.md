# NINAUKA — V4 Heritage + Edition 2026 Patch

**Baseline:** `mycustomid/ninauka`, commit `fed6fa487f4149ac1fb4960157917d2507749612` (18 October 2026). Patch only; repository image assets remain required. No GitHub push performed.

## Installation

1. Back up your project. Verify your working tree is based on the baseline commit above (or inspect diffs first if you have newer commits).
2. Extract all files from this ZIP to the **root** of folder `ninauka`; allow file replacement.
3. In the project folder run:

   ```bash
   npm ci
   node scripts/check-v4-content.mjs
   npm run build
   npm run dev
   ```

4. Open `/`, `/edisi-2026`, `/collections`, `/maison`, `/savoir-faire`, `/journal`, `/bespoke`, and `/contact`. Test floating WhatsApp in both desktop and mobile layouts. Direct links should be covered by existing Vercel SPA rewrite configuration.

## Included changes

- **Brand position:** Ninauka presented as *rumah kriya Nusantara*, not exclusively an exotic-leather house. Hero, navigation, SEO and footer copy updated.
- **Maison:** brand origin recounted from the **Ninauka Company Profile, page 2**; vision and mission summarised from **page 3**, including the intended development of human resources and housewives. No unverified impact figures.
- **Materials:** gallery of Tenun Baduy, Ulap Doyo, goni/serat alam and leathercraft. Baduy dye wording honours **page 6**, which mentions both natural and synthetic dyes. Doyo and goni guided by **pages 8–12**.
- **Edisi 2026:** new route `/edisi-2026`, homepage and collection promos. Ten WebP assets extracted from the **source PDF pages 4–5**, representing New Products and Best Seller 2026. **Do not imply these are all current-stock items or assign fabricated SKUs.**
- **Catalogue data:** retained 15 archive references. Codes and dimensions only displayed when supported by the PDF. Original project-only product descriptions may still need physical product verification. Confirm all specifications when taking orders.
- **Bespoke:** packaging presentation grounded in **page 13** rather than claiming unprovided rigid noir boxes, velvet pouches, numbered certificates, etc.
- **Journal:** two new complete articles referencing **pages 2–5**; existing 5 articles retained.
- **Social / contact:** Instagram and existing channels preserved; TikTok handle `@ninaukaleather` from **page 22** added as **search** link (the direct TikTok profile URL was not independently verified). Facebook and Tokopedia remain labelled search links; WhatsApp still globally available.

## Compliance and media policy

The company profile does **not** establish that every product has a CITES certificate, a documented 150–300 unit monthly capacity, or specified export permits. This patch removes unsupported broad statements. Export documentation should be confirmed per material/species, transaction, and destination.

Photo assets in `public/images/editorial-2026/` were extracted from the supplied Ninauka PDF. Use belongs to the user's brand project, subject to their rights to the source document/images.

## QA status

- TypeScript compiler's JSX/JS parser checked the changed code without parse errors.
- Original asset names and source-file relationships verified; new editorial images converted to WebP.
- `npm run build` **must be run in the local project**; this environment has no project `node_modules` and cannot resolve registry network access. No claim of passed production build or Awwwards scoring is made.
