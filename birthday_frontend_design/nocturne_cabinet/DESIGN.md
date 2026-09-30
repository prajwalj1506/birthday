---
name: Nocturne Cabinet
colors:
  surface: '#141315'
  surface-dim: '#141315'
  surface-bright: '#3a393b'
  surface-container-lowest: '#0f0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2b292c'
  surface-container-highest: '#363436'
  on-surface: '#e6e1e4'
  on-surface-variant: '#dfbfbd'
  inverse-surface: '#e6e1e4'
  inverse-on-surface: '#313032'
  outline: '#a68a88'
  outline-variant: '#584140'
  surface-tint: '#ffb3af'
  primary: '#ffb3af'
  on-primary: '#68000d'
  primary-container: '#8b1e22'
  on-primary-container: '#ff9d98'
  inverse-primary: '#a93535'
  secondary: '#ffb3ad'
  on-secondary: '#640c10'
  secondary-container: '#862725'
  on-secondary-container: '#ff9e97'
  tertiary: '#93d0df'
  on-tertiary: '#00363f'
  tertiary-container: '#00505d'
  on-tertiary-container: '#84c1d0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3af'
  on-primary-fixed: '#410005'
  on-primary-fixed-variant: '#891c21'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#832523'
  tertiary-fixed: '#afecfc'
  tertiary-fixed-dim: '#93d0df'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5b'
  background: '#141315'
  on-background: '#e6e1e4'
  surface-variant: '#363436'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system crafts an intimate, enigmatic personal sanctuary—a private salon or cabinet of curiosities translated into a contemporary digital surface. It is tailored for a single individual's quiet reflections, essays, curios, and archival fragments rather than public utility or corporate communication. 

The aesthetic is classical dark editorial: disciplined, atmospheric, and literary. It eschews generic dashboard patterns, gamified neon indicators, and horror tropes in favor of quiet tension, expansive void, and delicate restraint. Interacting with the interface feels like turning the heavy vellum pages of an archival folio under low amber light. Every transition is slow, considered, and dignified, balancing high-contrast literary typography against deep, velvety obsidian grounds.

## Colors

The palette establishes an enveloping dark space built from deep obsidian, oxidized charcoal, and concentrated garnet wine. Color is never applied as broad decorative paint; instead, it operates as delicate capillary accents, razor-thin borders, and hushed glows against deep shadow.

- **Background Canvas (`#070708`, `#0A0A0B`):** Deep, pure darks that absorb light, evoking an endless field of night.
- **Surface Elevation (`#121113`, `#18171A`):** Deep charcoal tones with faint warm undertones, providing barely perceptible structural planes without breaking darkness.
- **Primary Wine (`#8B1E22`):** A disciplined, oxidized crimson wine. Applied strictly to hairline borders, focused text carets, delicate typographic accents, and quiet active cues.
- **Secondary Garnet (`#5C060B`):** Deep, desiccated red utilized for subtle inset shadows, dark gradient washes, and dormant border delineations.
- **Text & Editorial Elements:** Primary body copy relies on warm bone (`#F4F1EA`) to prevent ocular fatigue while preserving high contrast. Secondary and meta labels use muted stone grey (`#A8A29E`) to establish natural reading hierarchy.
- **Dividers & Strokes:** Formulated through semi-translucent overlays—either low-alpha white (`rgba(244, 241, 234, 0.08)`) or tinted garnet (`rgba(139, 30, 34, 0.25)`).

## Typography

The typography system pairs the dramatic contrast of `Playfair Display` with the utilitarian clarity of `Inter`. 

`Playfair Display` drives titles, section beginnings, and evocative fragment highlights. It demands generous vertical clearance and uncrowded column space, letting the elegance of its serifs breathe. Long-form body prose and functional metadata defer to `Inter` set at light-to-regular weights with relaxed line heights. Labels, metadata tags, and navigational anchors use letter-spaced uppercase small sizes to establish an archival catalog cadence.

## Layout & Spacing

The layout is built mobile-first, prioritizing contemplative vertical pacing over dense lateral packaging. The content conforms to a constrained editorial column:

- **Desktop & Large Viewports (1024px+):** Max-width centered container of `760px` for essay text and personal logs, extending to `1080px` for curio collections and gallery grids. Margin is set to generous breathing room (`3rem`) to frame the page as a distinct reading chamber.
- **Tablet (768px - 1023px):** Fluid column with standard `2rem` margins and `1.5rem` gutters.
- **Mobile (< 768px):** Single-column stack with `1.25rem` outer margins. Horizontal lines and borders span edge-to-edge, anchoring text in strict vertical alignments.

Layout compositions favor deliberate emptiness. Large vertical offsets (`space-xl` and above) separate fragments, giving every distinct piece of prose or artifact the visual weight of an exhibition entry.

## Elevation & Depth

Depth is established through low-contrast, atmospheric illumination rather than stacked card shadows or physical drop-shadow tiers.

- **Surface Tiers:** Baseline canvas is `#070708`. Elevated zones (reading modules, modal dialogs) sit on `#121113`, distinguished by a hairline perimeter border (`rgba(255, 255, 255, 0.06)` or `rgba(139, 30, 34, 0.2)`).
- **Ambient Wine Bloom:** Floating items or focused interactive nodes project a slow, diffused, non-directional bloom: `0 0 24px -4px rgba(139, 30, 34, 0.18)`.
- **Dividers:** Minimalist 1px rules using `linear-gradient(90deg, transparent, rgba(139, 30, 34, 0.4) 50%, transparent)` establish spatial boundaries without hard-edged structural division.

## Shapes

The geometric framework uses softly blunted corners (Level 1: `0.25rem` / `4px`), pairing classic architectural bookbinding with subtle modern craftsmanship. 

Interactive tags, inputs, and small containment areas utilize this tight 4px curvature, keeping the layout grounded and rectilinear without harsh brutality. Larger containers (such as imagery enclosures and focal plates) scale to `0.5rem` (`rounded-lg`), ensuring consistent, refined boundary treatment across all surface scales.

## Components

### Buttons & Interactive Links
- **Primary Hairline Action:** Deep charcoal background (`#121113`) enclosed by a 1px solid border in crimson wine (`#8B1E22`). Typography is small, uppercase `Inter` with `0.08em` tracking in `#F4F1EA`. Padding is `space-sm` vertical by `space-lg` horizontal. On hover, the border shifts to a brighter wine tone (`#B0262B`) accompanied by a subtle ambient crimson halo (`0 0 16px rgba(139, 30, 34, 0.25)`).
- **Text Link / Ghost Trigger:** Understated `#A8A29E` copy with a 1px dotted underline in `rgba(139, 30, 34, 0.4)`. Transitions smoothly to `#F4F1EA` with an unbroken wine underline on focus.

### Inputs & Text Areas
- Built as frameless or subtle single-line fields. Transparent background with a solitary hairline bottom border in `rgba(244, 241, 234, 0.12)`.
- Focus shifts the bottom line to solid `#8B1E22` accompanied by a pulsing crimson caret. Placeholder copy is styled in italicized, muted stone (`#6E6865`).

### Content Cards & Folio Entries
- Flat surfaces (`#121113`) bound by 1px translucent borders (`rgba(255, 255, 255, 0.05)`). No heavy drop shadows.
- Cards maintain generous internal padding (`space-lg`), leading with a `Playfair Display` title and accompanied by a small uppercase archival timestamp or index tag (`label-sm`).

### Lists & Indexes
- Minimalist inventory listings separated by hairline gradients. 
- Elements feature index numbering in muted garnet (`#8B1E22`, e.g., `01`, `02`) aligned left, followed by the entry name in `#F4F1EA`, with optional metadata right-aligned in `#A8A29E`.

### Checkboxes & Selectors
- Compact 14px square boxes with a 1px stroke in `rgba(244, 241, 234, 0.2)`. 
- Checked state reveals a solid `#8B1E22` center fill with a warm-white dot or hairline mark, avoiding standard generic icon glyphs.

### Typographic Accents & Micro-Details
- A persistent, slow-pulsing wine-red typographic cursor for live notes or status indications.
- Ephemeral quotes and marginalia styled in italicized `Playfair Display` with indented, crimson-tinted vertical hairpins (`border-left: 1px solid #8B1E22`).