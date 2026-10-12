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

## Run the Frontend

The frontend is a Vite and React application located in the `frontend` directory.

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To create and preview a production build:

```bash
npm run build
npm run preview
```

To run the linter:

```bash
npm run lint
```

---

## Typical Engagement Flow

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

_Compiled from publicly available Facebook and LinkedIn material. Figures are as stated by the firm and have not been independently verified. Everything under "Known Gaps" is unconfirmed and should be supplied by the firm before publication._

## Running the project locally

You need Python 3 and Node.js installed.

### 1. Backend (Django)

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r backend\requirements.txt
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API runs at http://127.0.0.1:8000/api/ and the admin at http://127.0.0.1:8000/admin/.

Add services and projects in the admin. Until the database has content, the website shows built-in sample content.

### 2. Frontend (React + Vite)

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

The site runs at http://localhost:5173/. The Vite dev server forwards `/api` and `/media` requests to Django, so both servers must be running.

### API endpoints

- `GET /api/services/`
- `GET /api/projects/` (optional `?category=` and `?status=` filters)
- `POST /api/contact/`
- `POST /api/quote-requests/`
