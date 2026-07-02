# Design System Reference — "Personal Portfolio" (Rashedul Kabir, Dribbble)

> **IDE Context Instructions:** This file documents a complete visual design system extracted from a single-page freelance/designer portfolio shot. Treat every token, spacing value, and component pattern below as the canonical default when generating or scaffolding UI for this project. When a requirement isn't covered here, extrapolate using the same restraint (neutral base + one accent, oversized cropped display type, card-based modules) rather than introducing new colors, fonts, or motifs. Source: https://dribbble.com/shots/26547917-Personal-Portfolio

---

## 1. Concept Summary

A single-column, mobile-first freelance/UI-UX designer portfolio. The page reads as a sequence of self-contained "cards" stacked vertically on a neutral stone-grey canvas, punctuated by one confident accent color (burnt orange/coral) and oversized, semi-cropped display typography used as graphic texture rather than pure copy. Black-and-white photography contrasts against the accent to keep it feeling premium and restrained rather than loud.

**Governing principle:** 2 neutrals + 1 accent. Every screen should be describable in three colors before any tint/shade variation is added.

---

## 2. Color System

### 2.1 Core Palette

| Token | Hex (approx.) | Usage |
|---|---|---|
| `--color-bg-canvas` | `#C5CDD6` | Page background (cool stone grey), section separators |
| `--color-bg-canvas-light` | `#E5E9EC` | Subtle card borders, secondary dividers |
| `--color-surface` | `#FFFFFF` | Accordion/service cards, FAQ cards, client-logo strip |
| `--color-ink` | `#15141A` | Primary headline text, hero photo backdrop |
| `--color-ink-muted` | `#6C6F74` | Body copy, testimonial quotes, secondary labels |
| `--color-accent` | `#F84A06` | Primary CTA, portfolio tile, contact section backdrop |
| `--color-accent-soft` | `#FE8454` | Script/signature accent text, hover states, gradient stop |
| `--color-accent-deep` | `#B64040` | Avatar ring / stat-block accent border |
| `--color-tile-purple` | `#42246D` | Secondary portfolio tile (variety accent, used sparingly) |

### 2.2 Usage Rules
- **One accent per viewport.** Orange dominates; purple appears only once (portfolio grid) as a "proof of range" flourish — never pair the two adjacent to each other without a neutral tile buffering them.
- Backgrounds alternate **stone-grey → white → stone-grey** section by section to create implicit horizontal dividers without drawing literal lines.
- Photography is desaturated or near-monochrome (hero portrait, testimonial avatars) so the accent color is the only saturated element on the page — this is the single most important rule for reproducing the "premium" feel.
- Dark backgrounds (hero, contact) use near-black (`#15141A`), never pure `#000000`.

---

## 3. Typography

| Token | Style | Usage |
|---|---|---|
| `--font-display` | Heavy/Black weight, condensed sans-serif, uppercase | Giant cropped section labels: "DESIGNER", "SERVICE", "LATEST PORTFOLIO", "CONTACT" |
| `--font-script` | Handwritten/signature script | Name treatment overlapping the hero headline (personal-brand signature moment) |
| `--font-heading` | Bold sans-serif, uppercase, wide tracking | Accordion labels ("BRANDING", "DESIGN", "MARKETING", "CODE"), stat labels |
| `--font-body` | Regular/medium sans-serif | Descriptive paragraph under hero, testimonial quotes, FAQ answers |
| `--font-label` | Small caps or uppercase, letter-spacing +0.08em | Micro-labels: "CLIENT REVIEWS", rating counts, nav items |

### Type Scale (mobile baseline, 375–390px viewport)
```
--text-display: clamp(2.5rem, 14vw, 4.5rem)   /* cropped hero/section labels, line-height 0.9 */
--text-h1: 1.75rem                             /* rarely used standalone; display type IS the h1 */
--text-h2: 1.125rem                            /* accordion item titles */
--text-body: 0.9375rem                         /* paragraph copy */
--text-label: 0.6875rem                        /* uppercase micro-labels */
--text-stat-number: 1.5rem                     /* "07", "120+", "03" stat figures */
```

**Key technique:** Display type is deliberately oversized so it **clips off the left/right edges of the viewport**. This is a signature move — treat these headlines as background graphic elements, not text that must stay within safe margins.

---

## 4. Layout & Spacing

- **Grid:** Single column, mobile-first. Content max-width matches viewport with `16px`–`20px` horizontal gutters; display-type headlines are the one exception and are allowed to bleed edge-to-edge/off-canvas.
- **Section rhythm:** Each major section (Hero → Services → Stats → Portfolio → Testimonials → Client logos → FAQ → Contact) is a full-bleed block with generous vertical padding (~`48px`–`64px` top/bottom) and a background-color shift used as the primary separator instead of borders.
- **Card padding:** `20px`–`24px` internal padding on white cards (accordion items, FAQ rows).
- **Border radius:** Consistent soft rounding, `16px`–`24px` on large cards/photos, `8px`–`12px` on small elements (buttons, tags, avatars use full `50%`).

```
--radius-sm: 8px
--radius-md: 16px
--radius-lg: 24px
--radius-full: 999px

--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 40px
--space-2xl: 64px
```

---

## 5. Component Patterns

### 5.1 Hero
- Full-bleed dark/near-black rounded panel containing a duotone or B&W portrait, accent-orange glow/backdrop shape behind subject.
- Oversized cropped display headline ("DESIGNER") bleeding off top edge.
- Script signature name treatment overlapping the headline.
- Small rounded badge/tag (rating or trust signal) pinned top-right of the hero panel.

### 5.2 Services Accordion
- White rounded cards, one per row, stacked with `1px` divider or `12px` gap.
- Each row: uppercase bold label (left) + expand/collapse `+` icon (right).
- One item pre-expanded or annotated ("Efficient, on-trend design & smooth experience, highly recommended") to preview the interaction.

### 5.3 Stats Band
- Horizontal row: number/label pairs ("07" Years, "120+" Projects) flanking a **circular avatar photo** in the center, with a star-rating figure ("5.00") on the far side.
- Numbers use the boldest weight available; labels beneath are small/uppercase.

### 5.4 Portfolio Grid
- 2-column grid of square/near-square rounded tiles.
- Each tile is a distinct flat/duotone background color (orange, white/paper, red, deep purple) framing a product or brand photo — the grid itself is the color-variety showcase.
- Small caption chip (category tag) bottom-left of each tile.

### 5.5 Testimonials
- Stacked cards or single card with rounded corners, containing: quote text (short, 1–2 sentences), circular B&W avatar, name/role.
- Star rating icons row above or beside the quote.

### 5.6 Client Logos
- White full-bleed strip, logos in a single row, monochrome/flat treatment, evenly spaced.

### 5.7 FAQ
- White rounded accordion list, same visual language as Services accordion for consistency (reuse component, don't invent a new pattern).

### 5.8 Contact
- Dark or accent-colored full-bleed closing panel.
- Large "LET'S TALK" display headline.
- Split layout: photo (accent-toned/duotone portrait) on one side, minimal form (name/email/message + accent CTA button) on the other.
- Giant cropped "CONTACT" wordmark bleeding off the bottom edge as a closing graphic bookend — mirrors the hero's opening treatment.

---

## 6. Imagery Treatment
- All photography either **true black & white** or **duotone tinted toward the accent** — never full-color photography.
- Portraits are tightly cropped, often bleeding off one edge of their container.
- Product/portfolio shots sit on solid flat color fields rather than white studio backgrounds — this is what makes the grid feel designed rather than photographed.

---

## 7. Motion & Interaction (inferred defaults)
- Accordion expand/collapse: `+` rotates to `×`, height auto-animates, ~200–250ms ease-out.
- Portfolio tiles: subtle scale (1.0 → 1.03) and shadow-lift on hover/tap.
- CTA buttons: fill/color invert on hover (accent → ink or vice versa).

---

## 8. Do / Don't

**Do**
- Keep exactly one saturated accent color live per section.
- Let display type overflow/crop the viewport edges intentionally.
- Alternate section backgrounds (grey/white) to imply structure without hard rules.
- Keep all photography desaturated so the accent pops.

**Don't**
- Don't introduce a second saturated hue competing with the orange accent.
- Don't constrain the display headlines to text-safe margins — that kills the signature look.
- Don't add hard `1px` borders everywhere; prefer background-color shifts and generous radius/shadow.
- Don't use full-color stock photography — it breaks the premium, curated feel.

---

## 9. Quick-Reference Token Block (CSS custom properties)

```css
:root {
  /* Colors */
  --color-bg-canvas: #C5CDD6;
  --color-bg-canvas-light: #E5E9EC;
  --color-surface: #FFFFFF;
  --color-ink: #15141A;
  --color-ink-muted: #6C6F74;
  --color-accent: #F84A06;
  --color-accent-soft: #FE8454;
  --color-accent-deep: #B64040;
  --color-tile-purple: #42246D;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;

  /* Type */
  --text-display: clamp(2.5rem, 14vw, 4.5rem);
  --text-h2: 1.125rem;
  --text-body: 0.9375rem;
  --text-label: 0.6875rem;
  --text-stat-number: 1.5rem;
}
```

---

*Extracted from visual analysis of the referenced Dribbble shot (thumbnail-resolution source; colors are close approximations, not pixel-exact swatch picks — recommend verifying against the full-resolution shot on Dribbble before final production use).*