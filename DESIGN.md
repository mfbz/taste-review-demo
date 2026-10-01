---
name: Fernhill
colors:
  paper: "#F6F1E7"
  paper-2: "#EDE5D3"
  ink: "#1F2A1F"
  muted: "#545C4F"
  moss: "#3F6B3A"
  moss-dark: "#2F5229"
typography:
  heading: { fontFamily: Fraunces, fontWeight: 500 }
  body: { fontFamily: Instrument Sans, fontWeight: 400, fontSize: 17px }
rounded:
  sm: 4px
---

# Fernhill · design system

A garden planner that feels like a well-kept notebook: warm paper, deep green ink, one moss accent, and nothing that glows.

## Colour

- Paper `#F6F1E7` is the canvas; paper-2 `#EDE5D3` sets a band apart.
- Ink `#1F2A1F` carries type and outlines; muted `#545C4F` carries supporting copy.
- Moss `#3F6B3A` is the one accent: the primary action and a featured plan's border.
- Hairlines are ink at 15%.

## Type

- Fraunces at weight 500 for every heading; Instrument Sans for everything else.
- Sizes are tokens in `globals.css`: `display`, `title`, `subtitle`, `body`, `small`.

## Components

- Buttons are `ButtonLink`: a flat moss fill or an ink outline, 4px corners, 44px tall.
- Cards are a 1px hairline on paper with 4px corners.

## Do's and don'ts

- Don't use a gradient, a shadow or a second accent colour.
- Don't round anything past 4px.
- Don't set a heading in the sans or a paragraph in the serif.
