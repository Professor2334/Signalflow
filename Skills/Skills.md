# General skills rules

## Overview
This document outlines the technical, design, and product skills required to build and maintain the **SignalFlow AI marketing landing page**.

The focus is on delivering a **high-converting, scalable, and maintainable marketing page** using modern tools and best practices.

---

##  Core Skill Areas

### 1. Frontend Development
- Next.js (App Router)
- Tailwind CSS
- Component-based architecture
- Responsive design (mobile-first)

---

### 2. UI/UX Design
- Conversion-focused design thinking
- Landing page structure (Hero → CTA flow)
- Visual hierarchy and layout systems
- Typography systems (design tokens)
- Accessibility design

---

### 3. UX Writing
- Clear and concise messaging
- CTA optimization
- Microcopy for buttons, forms, and interactions
- Benefit-driven content writing

---

### 4. Product Thinking
- Understanding user intent and behavior
- Translating features into value
- Reducing friction in user journeys
- Designing for conversion (not just visuals)

---

##  Code Organization

The codebase should follow a **modular and scalable structure**.

### Recommended Structure


### Principles
- Keep components **small and reusable**
- Separate **UI components** from **section components**
- Centralize styles using **design tokens**
- Avoid deeply nested folders

---

##  Naming Conventions

### Components
- Use **PascalCase**
  - `HeroSection.tsx`
  - `FeatureCard.tsx`

### Files & Folders
- Use **kebab-case** or **lowercase**
  - `design-tokens.css`
  - `landing-page`

### Variables & Functions
- Use **camelCase**
  - `getUserInsight()`
  - `ctaText`

### CSS / Tokens
- Use **semantic naming**
  - `--color-primary`
  - `--font-size-body-lg`

---

## ✅ Data Validation

Even for a marketing page, data integrity is important.

### Areas to Validate
- Form inputs (email, name)
- CTA interactions
- Demo data consistency

### Rules
- Validate email format before submission
- Prevent empty form submissions
- Sanitize all user inputs
- Provide clear error messages

### Example
- “Please enter a valid email address”
- “This field cannot be empty”

---

##  Product Safety Rules

### 1. Data Privacy
- Do not collect unnecessary personal data
- Ensure compliance with privacy standards (e.g., consent-based tracking)

---

### 2. Honest Messaging
- Avoid misleading AI claims
- Clearly explain what the product does and does not do

---

### 3. AI Transparency
- Do not present AI outputs as 100% certain
- Provide context where necessary

---

### 4. Accessibility
- Ensure readable text contrast
- Support keyboard navigation
- Avoid inaccessible UI patterns

---

### 5. Performance Safety
- Optimize images and assets
- Avoid heavy scripts that slow down the page
- Ensure fast load times

---

##  Testing Expectations

### 1. UI Testing
- Check responsiveness across devices
- Validate layout consistency
- Ensure typography scales correctly

---

### 2. Functional Testing
- Test all CTAs (buttons, links)
- Verify form submissions
- Ensure no broken links

---

### 3. Accessibility Testing
- Check contrast ratios
- Test keyboard navigation
- Validate semantic HTML usage

---

### 4. Performance Testing
- Optimize page load speed
- Test Lighthouse scores
- Reduce unused JavaScript

---

### 5. Content Testing
- Ensure clarity of messaging
- Check for typos and inconsistencies
- Validate CTA effectiveness



## User Interface rules
UI styling follows the design tokens defined in design-tokens.json

Color usage must reference tokens defined in design-tokens.css

Typography must reference tokens defined in design-tokens.css

Spacings, border, radial, shadows, will make use of Tailwind CSS utility classes.

Color and typography must reference tokens defined in design-tokens.css and not use Tailwind Css utility classes

Direct hex color code is prohibited.

Arbitrary font sizes are prohibited.All font sizes must be defined in design-tokens.css