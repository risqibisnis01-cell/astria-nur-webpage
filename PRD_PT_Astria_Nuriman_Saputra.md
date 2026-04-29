# Product Requirements Document (PRD)
## PT Astria Nuriman Saputra — Corporate Website

**Version:** 1.0.0
**Date:** April 29, 2026
**Status:** Draft
**Owner:** PT Astria Nuriman Saputra

---

## 1. Executive Summary

PT Astria Nuriman Saputra is a multi-sector Indonesian holding company operating in two primary verticals: **Property (Rent & Sale)** and **Import-Export Trade**. This document defines the requirements for designing and developing a professional corporate website that establishes brand credibility, generates qualified leads, and provides clear information about the company's services and portfolio.

The website will be built using **React (latest)**, follow **WCAG 2.1 AA accessibility standards**, be optimized for **SEO**, and apply a formal-modern visual identity using the defined brand color palette.

---

## 2. Business Objectives

| # | Objective | Success Metric |
|---|-----------|----------------|
| 1 | Establish online presence and brand credibility | Professional live website within project timeline |
| 2 | Generate property inquiries (rent/buy) | Contact form submissions ≥ 20/month (post-launch) |
| 3 | Attract import-export trade partners | B2B inquiry submissions ≥ 10/month |
| 4 | Rank on Google for relevant Indonesian business keywords | Top 5 on target keywords within 6 months |
| 5 | Ensure accessibility for all users | WCAG 2.1 AA compliance audit passed |

---

## 3. Target Audience

### 3.1 Primary Users
- **Property Seekers** — Individuals and businesses looking to rent or purchase residential/commercial properties in Indonesia.
- **Trade Partners** — International and domestic companies seeking import-export commodity partnerships.

### 3.2 Secondary Users
- **Investors** — Parties interested in the company's financial performance and portfolio.
- **Job Seekers** — Candidates interested in career opportunities.
- **Media / Press** — Journalists and analysts researching the company.

---

## 4. Scope

### 4.1 In Scope
- Responsive corporate website (desktop, tablet, mobile)
- SEO-optimized page structure with meta tags, Open Graph, structured data (JSON-LD)
- Accessible UI compliant with WCAG 2.1 AA
- Multi-section single page architecture with deep link support
- Contact forms with validation
- Property listing showcase section
- Import-export commodity/services showcase
- Company profile, history, vision & mission
- React-based SPA with React Helmet / React Helmet Async for SEO

### 4.2 Out of Scope (Phase 1)
- CMS / backend integration
- User authentication / client portal
- Payment gateway
- Multi-language (Bahasa Indonesia / English toggle — Phase 2)
- Advanced property search/filter engine
- Live chat integration

---

## 5. Site Architecture & Pages

```
/                          → Home (Hero, Business Units, Stats, Testimonials, CTA)
/about                     → About Us (Profile, History, Vision & Mission, Team)
/property                  → Property Division (Listings: Rent & Sale, Overview)
/property/rent             → Rental Properties
/property/sale             → Properties for Sale
/import-export             → Import-Export Division (Commodities, Trade Partners)
/contact                   → Contact Page (Form, Map, Office Info)
/404                       → Not Found Page
```

---

## 6. Detailed Page Requirements

### 6.1 Home Page (`/`)

#### Sections:
| Section | Description |
|---------|-------------|
| **Hero** | Full-screen hero with company tagline, brief description, and dual CTA buttons ("Our Properties", "Trade Partners") |
| **Business Units** | Two-column cards highlighting Property and Import-Export divisions with icons and short descriptions |
| **About Snapshot** | Company founding year, key stats (properties handled, trade volume, years active) with animated counters |
| **Featured Properties** | 3–4 highlighted property cards (image, location, type, price/rent indicator) |
| **Import-Export Highlight** | Key commodities/services with visual icons or imagery |
| **Testimonials** | 2–3 client/partner testimonials carousel |
| **CTA Banner** | "Get in Touch" or "Explore Our Portfolio" banner linking to Contact |
| **Footer** | Logo, nav links, social media, address, phone, copyright |

---

### 6.2 About Us Page (`/about`)

#### Sections:
- Company profile narrative
- Founding history & milestones timeline
- Vision, Mission & Core Values
- Organizational leadership (names, titles, optional photos)
- Certifications and legal standing (SIUP, NPWP, TDP badge placeholders)

---

### 6.3 Property Division (`/property`, `/property/rent`, `/property/sale`)

#### Features:
- Division overview with key value propositions
- Property card grid: image, name, location, type (Residential/Commercial), price, availability badge
- Filter bar: Type (Rent / Sale), Location, Property Type
- Individual property detail modal or expanded card
- "Request Info" CTA per property linking to contact form with pre-filled subject

---

### 6.4 Import-Export Division (`/import-export`)

#### Sections:
- Division overview and company strengths
- Commodity / product categories (e.g., agricultural, manufactured goods, raw materials) with icons
- Trade process flow diagram
- Partner logos/countries served (placeholder)
- "Become a Partner" CTA

---

### 6.5 Contact Page (`/contact`)

#### Features:
- Contact form: Name, Company (optional), Email, Phone, Subject (dropdown: Property Inquiry / Trade Inquiry / General), Message, Submit
- Form validation: required fields, email format, character limits
- Office address, phone number, email address
- Embedded Google Maps iframe (or placeholder)
- Business hours

---

## 7. Design Requirements

### 7.1 Brand & Visual Identity

| Token | Value |
|-------|-------|
| Primary (Navy) | `#29335C` |
| Accent (Warm Gold) | `#F0CEA0` |
| Neutral (Earthy Brown) | `#534D41` |
| Background Light | `#FAFAF8` |
| Text Primary | `#1A1A2E` |
| Text Secondary | `#534D41` |
| White | `#FFFFFF` |

### 7.2 Typography
- **Display / Heading Font:** Playfair Display (serif) — formal, prestigious, trustworthy
- **Body Font:** Source Sans Pro or DM Sans — clean, modern, readable
- **Monospace (optional):** JetBrains Mono for data/stats

### 7.3 Design Aesthetic
- **Style:** Formal Modern — clean grid layouts, generous whitespace, refined typography, subtle geometric accents
- **Tone:** Corporate trust, Indonesian heritage, global ambition
- **Key Visual Motifs:** Gold accent lines, navy backgrounds with light text for hero sections, warm neutral cards for content sections

### 7.4 Layout Principles
- 12-column CSS Grid system
- Consistent 8px spacing scale
- Max content width: 1280px, centered
- Section padding: 80px–120px vertical on desktop, 48px on mobile
- Border radius: 4px (cards), 2px (inputs) — formal, not playful

---

## 8. SEO Requirements

### 8.1 Technical SEO
- React Helmet Async for dynamic `<head>` management per route
- Unique `<title>`, `<meta name="description">`, and canonical URLs per page
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card meta tags
- JSON-LD structured data:
  - `Organization` schema on all pages
  - `LocalBusiness` schema on Contact page
  - `RealEstateListing` schema on property pages
- `robots.txt` and `sitemap.xml` generation
- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Descriptive `alt` attributes on all images
- Heading hierarchy: one `<h1>` per page, logical `<h2>`–`<h4>` nesting
- Lazy loading for images below the fold (`loading="lazy"`)
- Core Web Vitals optimization targets:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### 8.2 Target Keywords (Phase 1)
- `properti sewa jual [city]`
- `import ekspor perusahaan Indonesia`
- `PT Astria Nuriman Saputra`
- `property investment Indonesia`
- `trading company Indonesia`

---

## 9. Accessibility Requirements (WCAG 2.1 AA)

| Criterion | Requirement |
|-----------|-------------|
| **Color Contrast** | All text ≥ 4.5:1 (normal), ≥ 3:1 (large text). Navy `#29335C` on white passes; verify all combinations. |
| **Keyboard Navigation** | All interactive elements (links, buttons, forms) fully keyboard accessible with visible focus styles |
| **Focus Indicators** | Custom focus ring using brand gold `#F0CEA0` outline, minimum 2px |
| **Screen Reader Support** | ARIA labels on icon-only buttons, ARIA landmarks (`role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`) |
| **Skip Navigation** | "Skip to main content" link as first focusable element |
| **Images** | All meaningful images have descriptive `alt` text; decorative images use `alt=""` |
| **Form Accessibility** | All inputs have associated `<label>` elements; error messages linked via `aria-describedby` |
| **Motion** | Respect `prefers-reduced-motion` media query — disable/reduce animations |
| **Text Sizing** | Text remains readable when zoomed to 200% without horizontal scrolling |
| **Link Purpose** | All link text descriptive in context; avoid "click here" |

---

## 10. Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18+ (Vite or Create React App) |
| Routing | React Router v6 |
| SEO | React Helmet Async |
| Styling | CSS Modules or Styled-Components / Tailwind CSS |
| Icons | Lucide React or Heroicons |
| Animations | Framer Motion (with reduced-motion respect) |
| Forms | React Hook Form + Yup validation |
| HTTP Client | Axios or Fetch API |
| Build | Vite (recommended for performance) |
| Hosting | Vercel / Netlify / Indonesian VPS (Phase 2) |

---

## 11. Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SkipNav.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Input.jsx
│   │   └── SectionHeading.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── BusinessUnits.jsx
│   │   ├── FeaturedProperties.jsx
│   │   ├── StatsCounter.jsx
│   │   ├── Testimonials.jsx
│   │   └── CTABanner.jsx
│   └── seo/
│       └── SEOHead.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Property.jsx
│   ├── ImportExport.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/
│   ├── properties.js
│   └── commodities.js
├── hooks/
│   └── useScrollAnimation.js
├── styles/
│   ├── tokens.css
│   └── global.css
└── utils/
    └── seo.js
```

---

## 12. Content Requirements

### 12.1 Content Needed from Client
- [ ] Company profile text (history, vision, mission, values)
- [ ] Leadership team: names, titles, optional photos
- [ ] Property listings: photos, addresses, prices, types, descriptions
- [ ] Import-export commodity list with descriptions
- [ ] Company logo (SVG preferred)
- [ ] Office address(es), phone(s), email(s), business hours
- [ ] Client/partner testimonials (name, company, quote)
- [ ] Legal certifications (SIUP, TDP numbers for display)
- [ ] Social media account URLs

### 12.2 Placeholder Content (For Development Phase)
- Use Lorem Ipsum for body copy
- Use placeholder images (unsplash-style property and trade imagery)
- Sample property data with realistic Indonesian locations

---

## 13. Performance Targets

| Metric | Target |
|--------|--------|
| Google PageSpeed (Mobile) | ≥ 85 |
| Google PageSpeed (Desktop) | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

---

## 14. Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | 320px–767px | Single column, hamburger menu, stacked sections |
| Tablet | 768px–1023px | Two-column grids, condensed nav |
| Desktop | 1024px–1279px | Full multi-column, full nav |
| Wide | 1280px+ | Max-width container centered, expanded spacing |

---

## 15. Project Phases & Milestones

### Phase 1 — MVP (Weeks 1–4)
- [ ] Design system setup (tokens, typography, components)
- [ ] Layout components (Navbar, Footer)
- [ ] Home page — all sections
- [ ] About page
- [ ] Contact page with working form UI
- [ ] SEO setup (Helmet, meta tags, JSON-LD)
- [ ] WCAG AA compliance baseline
- [ ] Responsive implementation

### Phase 2 — Property & Trade (Weeks 5–6)
- [ ] Property listing pages (Rent & Sale)
- [ ] Import-Export division page
- [ ] Property detail modal/page
- [ ] Filter/sort functionality
- [ ] Image optimization pipeline

### Phase 3 — Polish & Launch (Week 7–8)
- [ ] Animation & micro-interaction refinement
- [ ] Performance optimization
- [ ] Accessibility audit & remediation
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Sitemap.xml & robots.txt
- [ ] Deployment setup
- [ ] 404 page

---

## 16. Acceptance Criteria

### Definition of Done per Feature:
1. ✅ Component renders correctly on all breakpoints (320px, 768px, 1024px, 1440px)
2. ✅ Keyboard navigation works without mouse
3. ✅ Color contrast ratios pass WCAG AA
4. ✅ Screen reader announces content correctly
5. ✅ SEO meta tags present and correct per page
6. ✅ No console errors or warnings
7. ✅ Lighthouse score ≥ 85 on Performance, 100 on Accessibility

---

## 17. Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missing client content (copy, images) | High | Use realistic placeholder content; clearly mark TODOs |
| Color contrast failures with brand palette | Medium | Pre-audit all color combinations before implementation |
| SEO performance on SPA | Medium | Use React Helmet Async + SSG/SSR consideration for Phase 2 |
| Mobile performance with large property images | Medium | Implement lazy loading, WebP format, responsive `srcSet` |
| WCAG failures on complex animations | Low | `prefers-reduced-motion` support from day one |

---

## 18. Appendix

### A. Color Contrast Audit (Brand Palette)

| Combination | Ratio | WCAG AA Normal | WCAG AA Large |
|-------------|-------|----------------|---------------|
| `#29335C` on `#FFFFFF` | ~10.5:1 | ✅ Pass | ✅ Pass |
| `#FFFFFF` on `#29335C` | ~10.5:1 | ✅ Pass | ✅ Pass |
| `#534D41` on `#FFFFFF` | ~7.8:1 | ✅ Pass | ✅ Pass |
| `#F0CEA0` on `#29335C` | ~5.2:1 | ✅ Pass | ✅ Pass |
| `#F0CEA0` on `#534D41` | ~3.8:1 | ❌ Fail (normal) | ✅ Pass (large/bold) |
| `#29335C` on `#F0CEA0` | ~5.2:1 | ✅ Pass | ✅ Pass |

> ⚠️ **Note:** `#F0CEA0` on `#534D41` should only be used for large text (18pt+) or bold text (14pt+ bold). Never use this combination for body-size text.

### B. JSON-LD Organization Schema (Template)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT Astria Nuriman Saputra",
  "url": "https://www.astrianuriman.co.id",
  "logo": "https://www.astrianuriman.co.id/logo.png",
  "description": "PT Astria Nuriman Saputra is an Indonesian holding company operating in property (rent & sale) and import-export trade sectors.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "sameAs": []
}
```

### C. Sitemap Structure
```xml
<urlset>
  <url><loc>/</loc><priority>1.0</priority></url>
  <url><loc>/about</loc><priority>0.8</priority></url>
  <url><loc>/property</loc><priority>0.9</priority></url>
  <url><loc>/property/rent</loc><priority>0.8</priority></url>
  <url><loc>/property/sale</loc><priority>0.8</priority></url>
  <url><loc>/import-export</loc><priority>0.9</priority></url>
  <url><loc>/contact</loc><priority>0.7</priority></url>
</urlset>
```

---

*Document prepared for PT Astria Nuriman Saputra corporate website project.*
*All requirements subject to review and sign-off by project stakeholders before development begins.*
