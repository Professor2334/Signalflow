# Color System and Usage Rules

# Color System Rules

This document defines how color is used across the SignalflowAI  marketing page.

It does not define raw color values.

Raw values belong in:

- `design-tokens.css`

This file defines the **usage rules**, **semantic meaning**, and **application standards** for color across the marketing page.

The color system is influenced by **Material Design 3**, with emphasis on:

- semantic color roles
- accessible contrast
- clear hierarchy
- surface-based layouts
- restrained use of accent colors

All color usage in the marketing page  must follow these rules.

---

# 1. Source of Truth

The single source of truth for colors is:

- `design-tokens.css`

All product colors must be referenced through CSS variables defined there.

Examples:

- `var(--color-primary)`
- `var(--color-on-primary)`
- `var(--color-surface)`
- `var(--color-on-surface)`
- `var(--color-outline)`
- `var(--color-error)`

Direct hex color usage is prohibited.

Do not hardcode values such as:

- `#25D366`
- `#ffffff`
- `#000000`

Do not use raw rgb, hsl, or hex values in components when an approved token exists.

---


## 🎨 Color System Structure

The system follows a **token-based approach**:

### Core Tokens
- `primary`
- `secondary`
- `surface`
- `background`
- `error`

### Derived Tokens
- `on-primary`
- `on-secondary`
- `on-surface`
- `on-background`

### Container Tokens
- `primary-container`
- `secondary-container`

---

##  Usage Guidelines (Marketing Page)

Marketing pages can use slightly more expressive color, but must remain **controlled and intentional**.

### Allowed Emphasis

- Use **primary color** for:
  - Hero CTA button  
  - Key interactive elements  

- Use **primary-container / secondary-container** for:
  - Feature highlights  
  - Cards  
  - Section backgrounds  


---

###  Restrictions

- Avoid excessive gradients unless tokenized and approved  
- Do not create overly flashy or distracting visuals  
- Maintain a **product-first, credible feel**  
- Avoid random or inconsistent color usage  

---

##  Surface & Background

- `background` → Main page background  
- `surface` → Cards, sections, containers  

### Rules
- Use subtle contrast between surface and background  
- Avoid harsh color clashes  
- Maintain clean layering  



# Prohibited Color Practices

The following practices are prohibited:

- direct hex color usage in components
- arbitrary color classes that bypass tokens
- mixing tokenized typography with non-tokenized colors
- using color only for decoration with no semantic role
- using overly saturated status colors across large surfaces
- using primary color for every actionable element on a page
- inventing new color roles at component level when a semantic token already exists

---

# 15. Implementation Rules

All components must consume color from token variables defined in `design-tokens.css`.

Preferred usage example:

- background-color: `var(--color-surface)`
- color: `var(--color-on-surface)`
- border-color: `var(--color-outline)`

If Tailwind is used for layout and spacing, color decisions must still come from token variables.

Do not replace tokenized colors with Tailwind palette utilities.

Examples of prohibited implementation patterns:

- `bg-green-500`
- `text-red-600`
- `border-gray-300`

unless those utilities are explicitly mapped to your own token system through configuration.