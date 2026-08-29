# Design QA — HAI Fashion homepage redesign

## Comparison target

- Source visual truth:
  - `C:\Users\DELL\AppData\Local\Temp\codex-clipboard-500d8c2d-4762-4ce2-8c9f-d41f494a112f.png` — The Valet homepage reference, 3735 × 1918 px.
  - `C:\Users\DELL\AppData\Local\Temp\codex-clipboard-5c385dcf-8d26-4eed-9010-86dcb52f94f4.png` — The Valet journal reference, 3666 × 1602 px.
  - `C:\Users\DELL\AppData\Local\Temp\codex-clipboard-5ba9cc8d-fda8-4687-9588-84c7b16eb10c.png` — required HAI hero art, 1279 × 520 px.
- Browser-rendered implementation:
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\home-1440.png` — desktop, 1440 × 1000 CSS px.
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\home-1280.png` — desktop, 1280 × 900 CSS px.
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\home-768.png` — tablet, 768 × 900 CSS px.
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\home-390.png` — mobile, 390 × 844 CSS px.
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\home-375.png` — mobile, 375 × 812 CSS px.
- Composite comparison evidence:
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\qa-hero-comparison.jpg`
  - `E:\Projects\hai-fashion\audit\2026-08-29-redesign\qa-journal-comparison.jpg`
- Viewport normalization: source screenshots came from a wider browser viewport than the implementation. Browser chrome was cropped from the homepage reference; both source and implementation were aspect-fit into equal 900 × 650 evidence boxes. The comparison therefore evaluates art direction, hierarchy, density and rhythm rather than claiming pixel parity.
- Density: implementation captures use browser CSS pixel dimensions at device scale 1. No density resampling was required for implementation evidence.
- State: public homepage, default light state; mobile menu open state and collection filter selected state were also tested.

## Full-view comparison evidence

The homepage composite confirms the intended reference traits: restrained ivory canvas, compact sticky navigation, large image-led composition, editorial serif hierarchy, generous whitespace and thin rules. The implementation deliberately replaces The Valet branding, copied layouts and red campaign styling with HAI's logo, espresso/bronze/navy system, supplied hero and HAI-owned catalogue assets.

The journal composite confirms the reference's visual scanning pattern—section title followed by a multi-column image grid—while reducing promotional poster density in favor of readable editorial cards appropriate for HAI's SEO/content direction.

## Focused region evidence

- Hero crop and heading: `browser/home-1440.png`, `browser/home-768.png`, `browser/home-390.png`, `browser/home-375.png`.
- Service image grid and filter: `browser/section-bo-suu-tap.png` plus the tested `Vest nữ` selected state.
- Process imagery: `browser/section-quy-trinh.png`.
- Tailoring-detail pairing: `browser/section-chi-tiet.png`.
- Contact conversion area: `browser/section-lien-he.png`.
- Mobile navigation: `browser/mobile-menu-390.png`.

These focused views were required because the full-view composite cannot show mobile crop behavior, filter state, form fields or image detail at a readable scale.

## Comparison history

### Iteration 1 — P2 responsive hero crop

- Earlier finding: at 768 px the source image's baked-in “May Do” typography became visible beside the new HAI headline; at 375 px the model's face sat too close to the right edge.
- Impact: duplicate messaging weakened hierarchy and made the mobile hero look like an unedited banner.
- Fix: adjusted responsive image position and scale, then introduced a clean navy editorial rail to mask the baked-in source copy without altering the supplied image.
- Post-fix evidence: `browser/home-768.png`, `browser/home-390.png`, `browser/home-375.png`.
- Result: no duplicated text; face and upper body remain legible at all tested breakpoints.

### Iteration 2 — P2 narrow-mobile CTA wrap

- Earlier finding: at 375 px the secondary hero CTA wrapped to a second row, increasing the hero height and breaking the intended compact rhythm.
- Fix: reduced mobile button padding and gap while preserving 52 px tap height.
- Post-fix evidence: `browser/home-375.png`.
- Result: both CTAs remain on one row without horizontal overflow.

### Iteration 3 — P2 broken footer destination

- Earlier finding: the footer's women-service link pointed to an obsolete `#nhom-khach-hang` anchor.
- Fix: routed it to the live `#dich-vu` section.
- Post-fix evidence: DOM snapshot and successful local navigation audit.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond provides the fashion-editorial display voice; Be Vietnam Pro keeps Vietnamese body copy clear. Optical weight, wrapping and hierarchy were checked at 1440/1280/768/390/375. No clipping or truncation remains.
- Spacing and layout rhythm: the implementation preserves the reference's broad image regions, calm section pacing, compact header and thin dividers. Responsive grids collapse cleanly and the mobile featured rail remains swipeable.
- Colors and visual tokens: the page consistently uses the approved ivory, espresso, leather, bronze and navy tokens. There are no gradients, generic card shadows or rounded ecommerce surfaces.
- Image quality and asset fidelity: all visible imagery is served from the supplied/local HAI asset set with responsive Next Image sizing and intentional object positioning. Hero subject and face remain visible. No CSS art, inline SVG substitute, emoji or placeholder asset is used.
- Copy and content: HAI-specific service, process and journal copy is coherent, avoids fake customer names, years, statistics, prices, lead times and reviews, and keeps the main conversion path on consultation/Zalo.
- States and interactions: mobile menu opens/closes; Escape handling is implemented; collection filters update the card set and pressed state; form fields are labeled and required; the completed form continues to confirmed HAI Zalo; reduced motion is respected.
- Accessibility: semantic heading order, labels, alt text, focus-visible treatment, 44–52 px core tap targets and no horizontal overflow were verified. Contrast is strong across ivory, espresso and navy sections.

## Findings

- No actionable P0, P1 or P2 findings remain.
- [P3] Follow-up image-row update: the Executive audience section now includes four supplied images in the requested order, verified in `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\four-image-audience-1440.png` and `E:\Projects\hai-fashion\audit\2026-08-29-redesign\browser\four-image-audience-390.png`.
  - Order verified: woman front, woman seated, man in cream suit, two men in navy/black suits.
  - The layout intentionally follows the reference rhythm (one dominant visual with a supporting editorial grid) while retaining HAI styling and truthful pending-rights status.
- [P3] Some supplied catalogue images are lower-resolution studio composites rather than recent real-client photography.
  - Location: Women and Corporate portfolio/journal cards.
  - Evidence: the visual system is consistent, but those assets have flatter lighting and less editorial depth than the hero.
  - Impact: minor perceived-brand-quality ceiling on large screens.
  - Follow-up: replace card sources one-for-one when HAI provides higher-resolution real-client and corporate-team photography; the component ratios are already stable.

## Open questions

- Official Facebook URL and opening hours remain intentionally omitted because they have not been verified.
- Real client names, roles, company names and testimonials remain intentionally absent until supplied by HAI Fashion.

## Implementation checklist

- [x] Replace old homepage composition with the HAI editorial design system.
- [x] Use HAI logo, supplied hero and local catalogue assets.
- [x] Verify 1440, 1280, 768, 390 and 375 px layouts.
- [x] Verify menu, filters, anchors and form validation path.
- [x] Confirm zero horizontal overflow at 1280, 768, 390 and 375 px.
- [x] Run production build and lint successfully.
- [x] Keep deployment out of scope until explicit approval.

## Follow-up polish

- Replace the remaining studio catalogue images with real client/corporate photography when a verified asset set is available.

final result: passed
