# Horizon Construct Firm — Development Brief & Website UI/UX Design

> **Purpose of this document:** This is the single source of truth for the UI/UX Designer and Developer working on the Horizon Construct Firm website. It defines who the client is, what the site needs to do, what it should look and feel like, what pages/features are in scope, and what "done" looks like for each role.

---

## 1. Project Snapshot

|                             |                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Client**                  | Horizon Construct Firm                                                                                       |
| **Industry**                | Design & Build / Construction, Architecture, Real Estate Services                                            |
| **Tagline**                 | "Excellence encapsulated in expertise…"                                                                      |
| **Location**                | Nigeria (Osogbo, Osun State)                                                                                 |
| **Primary contact channel** | WhatsApp — +234 703 499 7609                                                                                 |
| **Social handles**          | Instagram: `horizonconstruct_firm` · Facebook: `Horizon Construct Firm` · LinkedIn: `Horizon Construct Firm` |
| **Project type**            | Marketing / lead-generation website (Phase 1). Portfolio                                                     |

**One-line brief:** Horizon Construct Firm is a design-and-build firm that turns clients' briefs into real, built structures. The website's job is to make that promise credible at first glance — through strong project photography/renders, a clear service offering, and a frictionless path to "Talk to us on WhatsApp."

---

## 2. About the Business

Horizon Construct Firm positions itself as a full-lifecycle property partner, not just a contractor. Services as provided by the client:

- **Design** — architectural design and 3D visualization (residential and commercial)
- **Construction** — build execution, from foundation to finishing
- **Renovation** — upgrades and remodeling of existing structures
- **Property Trading** — buying/selling of property
- **Advisory Services** — consultancy on property/construction decisions
- **Facility Management** — post-handover maintenance and management

**Note/assumption:** Design renders supplied are watermarked "Arcphil — 07034997609," the same WhatsApp number used by Horizon Construct Firm. This suggests Arcphil is either an in-house design arm/architect or a close design partner of the firm. **Open question for client:** should Arcphil be credited/branded separately on the site (e.g., "Design by Arcphil, a Horizon Construct Firm studio"), or folded entirely into the Horizon Construct Firm brand? Flag this before final copywriting.

---

## 3. Business Goals (why we're building this)

1. **Build credibility fast** — a visitor should believe within 5 seconds that this is a real, capable firm, not a "WhatsApp business."
2. **Generate leads** — every key page should funnel toward WhatsApp chat or a "Request a Design/Quote" form.
3. **Showcase the work** — the portfolio is the product. Renders and completed builds need a gallery experience, not a buried image dump.
4. **Communicate the full service range** — many visitors will only know Horizon for house designs seen on social media; the site should reveal the other five services (renovation, advisory, facility management, property trading) as upsell/cross-sell.
5. **Own owned media** — social posts (like the "Welcome to July" recap) currently do the job a website should. The site becomes the permanent, searchable home for this content.

---

## 4. Target Audience

- **Primary:** Nigerians (Abuja-based and diaspora) planning to build a personal home — mid-to-high income, plot of land already secured or being secured, looking for a design-and-build partner.
- **Secondary:** Property investors/landlords needing renovation, facility management, or advisory services.
- **Tertiary:** Corporate/institutional clients for larger builds (future growth vector).

---

## 5. Competitive Benchmarking

Two Nigerian construction companies were reviewed to calibrate scope and tone. Horizon Construct Firm is a smaller, younger firm — the goal is **not** to copy these, but to borrow the structural patterns that build trust at any scale.

### Setraco Nigeria Limited

Large, 45+ year old civil engineering/infrastructure contractor (roads, bridges, national projects). Its credibility comes from scale, longevity, and government-grade project history — not something a younger firm can claim, so this is a pattern to **note, not imitate** directly. Takeaway: an "About/Legacy" narrative and a clear services list build trust even without Setraco's decades of history, if grounded in real completed work.

### Elalan Construction (elalan.com)

A more directly comparable pattern for Horizon Construct Firm:

- Clean hierarchy: **Home → About → Projects (filtered by Residential / Commercial / Industrial / Landmark) → Articles → Contact**
- Rotating hero banners with short, evocative headlines over full-bleed project photography
- A dedicated, filterable **project gallery** with individual project detail pages
- **Client/partner logo strip** ("Our clients") for social proof
- **Certifications shown visibly** (ISO badges)
- **Articles/blog** used for local SEO (e.g., "Top construction companies in Abuja")
- Consistent social + contact links in the header and footer
- A group-of-companies section showing related service arms

**What we're taking from this for Horizon Construct Firm:**

- Filterable portfolio by category (start simple: Residential / Renovation / Ongoing / Completed)
- Individual project pages, not just a flat image grid
- A visible services breakdown (their 6 services, each with its own short page or accordion section)
- Space reserved for future testimonials/client logos and SEO articles, even if Phase 1 launches without them
- WhatsApp as the primary CTA (in place of Elalan's more corporate "Contact Us" form, matching how Horizon already generates leads on social media)

---

## 6. Sitemap (Phase 1 scope)

```
Home
├── About Us
│   └── (Vision / Mission / Why Horizon / Team, optional)
├── Services
│   ├── Design
│   ├── Construction
│   ├── Renovation
│   ├── Property Trading
│   ├── Advisory Services
│   └── Facility Management
├── Projects / Portfolio
│   ├── Filter: Residential | Commercial | Renovation
│   ├── Filter: Completed | Ongoing | Design Concept
│   └── Project Detail Page (template, reused per project)
├── Get a Quote / Start a Project (lead form)
├── Contact Us
└── (Phase 2, not in this build) Blog / Articles
```

**Footer (every page):** logo, short tagline, services quick-links, social icons (Instagram, Facebook, LinkedIn), WhatsApp number, physical/service-area info, copyright.

**Persistent element (all pages):** floating/sticky WhatsApp button.

---

## 7. Page-by-Page Requirements

### 7.1 Home

- Hero: full-bleed image or slider of best renders/completed work, one strong headline (e.g., "Actualizing Your Brief, One Build at a Time"), primary CTA button → WhatsApp, secondary CTA → View Projects.
- Services overview: 6 services as icon/card grid, each linking to its section/page.
- Featured Projects: 3–6 best images, linking to full portfolio.
- Trust strip: years active / projects delivered / states or cities covered (**pull real numbers from client**), social proof placeholder for future testimonials.
- Social proof / social feed teaser (optional): recent Instagram posts.
- Final CTA band: "Have a project in mind? Talk to us on WhatsApp."

### 7.2 About Us

- Company story, what "design and build" means in practice, the Arcphil relationship (pending clarification), values, and (optional) team/leadership.

### 7.3 Services (1 page with 6 anchored sections — recommend anchored sections for Phase 1 to reduce build time)

Each service needs: short description, what's included, and a relevant image. Design and Construction should lead, since they generate the most inbound interest.

### 7.4 Projects / Portfolio

- Grid/gallery of project thumbnails with category + status filters.
- Each thumbnail opens a **Project Detail Page**: title (e.g., "4-Bedroom Design"), plot/size info, feature list (matches the style of the client's own social captions — e.g., Ante-Room, Visitor's Toilet, Living Room, Dining, Kitchen, Ensuite Bedrooms), image gallery/carousel, and a "Request a similar design" CTA.

### 7.5 Get a Quote / Start a Project

- Short form: name, phone/WhatsApp, email (optional), project type (Design / Construction / Renovation / Advisory / Facility Management / Property Trading), plot size or location, budget range (optional), message.
- Submits to email and/or triggers a WhatsApp deep link pre-filled with the enquiry.

### 7.6 Contact Us

- WhatsApp click-to-chat (primary), phone, email, social links, service area/map (if a physical office exists — confirm with client), business hours.

---

## 8. Brand & Visual Direction (for UI/UX Designer)

Source material: the client's own renders and their "Welcome to July" social graphic, which is the clearest existing expression of brand personality.

- **Palette:** Charcoal/near-black as a dominant anchor, warm gold/mustard as the signature accent (used in the poster's headline gold and logo), white/off-white for content areas, a small red accent used sparingly for emphasis (as seen in "Welcome" script and safety vests). Avoid over-using red — it should stay a rare highlight, not a primary color.
- **Typography:** Pair a confident, slightly editorial display font for headlines (echoing the bold condensed "JULY" treatment) with a clean, highly legible sans-serif for body copy and UI text. A script/handwritten accent font can be used sparingly for small flourishes (as in "Welcome to"), not for core navigation or body text.
- **Photography-led design:** This is a visual trust business — renders and site-progress photos should be large, high-quality, and unfiltered by heavy UI chrome. Avoid stock photography; the client has real render and site-photo assets to build from.
- **Tone:** Premium but grounded — "we build what we promise." Confident, not flashy. Professional safety/competence cues (hard hats, site photos) should sit alongside polished architectural renders to show both design capability and real execution.
- **UI patterns to design:**
  - Sticky WhatsApp CTA (mobile + desktop)
  - Filterable project grid + lightbox/gallery viewer
  - Service icon set (6 custom icons matching the brand mark's building/skyline motif)
  - Mobile-first layouts — assume most traffic arrives from Instagram/Facebook/WhatsApp on mobile
- **Logo:** existing gold skyline/building mark with "HORIZON CONSTRUCT FIRM" wordmark — designer should request the vector source file (AI/EPS/SVG) from the client rather than recreating from the JPEG.

---

## 9. Technical Requirements (for Developer)

| Area               | Requirement                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Platform**       | A fully custom-coded static site is only appropriate if the client confirms a developer will always be on retainer for updates. |
| **Responsiveness** | Mobile-first; majority of traffic will arrive from social apps.                                                                 |
| **Portfolio**      | Projects need to be structured content (title, category, status, images, feature l )                                            |

| **Lead capture** | WhatsApp click-to-chat (`wa.me` links) throughout; quote form should email the team and/or generate a pre-filled WhatsApp message. |
| **Performance** | Heavy use of large architectural images — implement image compression/optimization and lazy loading. |
| **SEO** | On-page SEO for location + service keywords (e.g., "house design Abuja," "construction company FCT"), meta tags, alt text on all project images, sitemap.xml, structured data for LocalBusiness. |
| **Analytics** | Google Analytics (or equivalent) + Meta Pixel for retargeting, since the client already runs social campaigns. |
| **Hosting/Domain** | Confirm domain availability/ownership; recommend SSL by default. |
| **Social integration** | Footer/header social links; optional Instagram feed embed on Home. |
| **Accessibility** | Reasonable contrast on the dark charcoal + gold palette; alt text; keyboard-navigable menus. |

---

## 10. Content & Assets Provided by Client

- [x] 2 architectural render images (exterior, front and angled views) — watermarked "Arcphil"
- [x] 1 social recap graphic ("Welcome to July") showing logo, service list, and brand colors
- [x] Service list (6 services)
- [x] Sample project caption copy (feature-list style for a 4-bedroom design)
- [x] WhatsApp number and social handles

### Still needed from client before design starts

- [ ] Vector logo file (SVG/AI/EPS)
- [ ] Additional project photos/renders (aim for at least 3–5 projects to populate the portfolio at launch)
- [ ] Real completed-project photos, if available (to distinguish "design concept" from "built" work)
- [ ] Company history/founding story, years active, number of projects completed (for trust-building copy)
- [ ] Physical office address / service area, if applicable

---

## 11. Deliverables

**UI/UX Designer**

1. Moodboard / visual direction (based on Section 8)
2. Low-fidelity wireframes — all Phase 1 pages, mobile + desktop
3. High-fidelity mockups — all Phase 1 pages, mobile + desktop
4. Component/style guide (colors, type scale, buttons, icons, card components)
5. Clickable prototype for stakeholder review

**Developer**

1. Fully built, responsive
2. Working lead-capture: quote form + WhatsApp deep links
3. SEO basics implemented (meta tags, sitemap, alt text, LocalBusiness schema)
4. Analytics/pixel installed
5. Staff-facing guide for adding/editing projects in the CMS
6. Deployed to production with SSL on the client's domain

---

## 12. Out of Scope (Phase 1)

- Blog/Articles section (recommended for Phase 2, for SEO)
- Client testimonial system
- Multi-language support

---

## 13. Open Questions for Client (to resolve before design freeze)

1. How should "Arcphil" be represented on the site relative to the Horizon Construct Firm brand? CEO
2. Do you have a physical office address, or do you operate project-by-project across sites? Osogbo, Osun State
3. Can you share 3–5 more projects (renders and/or completed photos) so the portfolio doesn't launch with only one project? Check the CEO or company's social media account such as facebook, instagram or linkedin
4. What years/numbers can we use to build credibility copy (years active, projects completed, cities served)? 4 years, project pictures on social media, Ile-ife, Lagos, Osogbo, Ibadan, Ikikire, Ilesha
5. Do you have the logo as a vector file? Yes, uploaded to this repository in PNG
