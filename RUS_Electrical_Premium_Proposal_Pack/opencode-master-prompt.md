# OpenCode Master Prompt — RUS Electrical Premium Website Proposal

MODEL: GPT-5.6 Sol

## MISSION
Create a completely new premium website proposal for **RUS Electrical**, an electrical-services business serving Sandton/Johannesburg areas.

This is a **private speculative redesign / sales demo**.
Do not publish it to the client's domain.
Do not claim that the client commissioned or approved it.

The supplied current brand artwork and `COMPANY-DETAILS.md` are the source references.

The business appears to have a good local reputation but does not currently present itself with a polished premium digital identity. The objective is to build a website that makes the company look established, trustworthy, safety-conscious and technically capable without fabricating credentials.

---

## SOURCE FILES
Read first:
- `COMPANY-DETAILS.md`
- `CURRENT-BRAND-AUDIT.md`
- `ASSET-MANIFEST.md`
- `assets/current-brand-reference.jpg`

Use the supplied regenerated assets in `/public/assets/`.

---

## BRAND
Business name:
**RUS Electrical**

Existing tagline:
**“done in a proper way”**

Recommended refined brand line:
**Electrical work. Done the proper way.**

Primary verified phone for the private demo:
**072 132 6098**

Tel link:
`tel:+27721326098`

Possible secondary phone from old artwork:
**073 605 5585**

Possible email from old artwork:
**nihovor@gmail.com**

IMPORTANT:
The secondary number and email must be marked as requiring confirmation and should not be treated as newly verified data.

---

## PUBLIC INFORMATION / SERVICES TO USE CAREFULLY
Public profile material currently associates RUS Electrical with:
- residential electrical work
- commercial electrical work
- industrial electrical work
- emergency electrical work
- electrical maintenance
- electrical rewiring
- electrical installations
- security lighting
- electrical inspection / compliance certificate work
- generators
- UPS / backup power
- prepaid electricity meters
- gate motors
- electrical repairs

Do NOT turn any of these into stronger regulatory/certification claims than the source supports.

If a service is not confidently verified, keep it in the data model with:
`requiresConfirmation: true`
and do not show unsupported claims in high-visibility sections.

---

## LOCATION DATA
Current sources conflict.

Source A currently surfaces:
Stella St, Sandown, Sandton, 2196

Source B / older profile surfaces:
2432B Hawthorn Village, Short Street, Fourways, Sandton, 2055

DO NOT hard-code either as unquestionably correct.

Create:
`src/data/business.ts`

Example fields:
- businessName
- tagline
- primaryPhone
- secondaryPhone
- email
- serviceAreas
- address
- hours
- emergencyAvailability
- verifiedFacts
- requiresConfirmation

Set disputed values as requiring confirmation.

For the demo, speak broadly about:
**Sandton and Johannesburg North**
without inventing a street address in the hero.

---

# DESIGN OBJECTIVE
Build a website that feels like a **premium electrical contractor**, not a generic tradesman template.

The design should communicate:
- safety
- technical competence
- reliability
- professional workmanship
- fast access to contact/quote actions
- residential + commercial capability
- strong local presence

The finished concept should feel appropriate for homeowners in Sandton, body corporates, property managers, offices and commercial clients.

---

# VISUAL DIRECTION
Use the refreshed RUS identity supplied in the asset pack.

Palette:
- Deep graphite: #0B0D10
- Black: #050505
- Warm white: #F4F2EC
- Safety yellow: #FFC400
- Electrical red: #E51B23
- Steel grey: #A9AFB7

Yellow should be the main action/accent colour.
Red should be controlled and used for energy, warnings, separators or selected brand details.

Do not flood every section with red/yellow.

Typography:
- strong contemporary grotesk/sans serif
- technical, clean, highly legible
- optional condensed display face for section numbers or labels

Avoid:
- overly rounded SaaS cards
- green technology aesthetics
- neon cyberpunk effects
- fake industrial gauges everywhere
- template-looking icon grids
- excessive gradients
- huge italic serif headings

---

# LOGO
Use:
`/public/assets/rus-logo-transparent.png`

The logo is a new proposal concept derived from the original company colour language and lightning-bolt identity.

Navbar logo should remain clean and readable.
Do not stretch or crop it.

Create favicon/app-icon treatment from the R/bolt mark where practical.

---

# INFORMATION ARCHITECTURE
Routes:

`/`
`/services`
`/services/[slug]`
`/residential`
`/commercial`
`/industrial`
`/compliance`
`/projects`
`/about`
`/reviews`
`/contact`

Optional local SEO routes only if content quality is sufficient:
`/areas/[slug]`

---

# HOMEPAGE

## 01 — NAVBAR
Desktop:
Logo
Services
Residential
Commercial
Industrial
Projects
About
Contact

Primary CTA:
**REQUEST A QUOTE**

Secondary utility:
phone icon + `072 132 6098`

Mobile:
clean drawer navigation
sticky bottom action bar:
**CALL | QUOTE**

---

## 02 — HERO
Use:
`hero-residential-electrician.webp`

Composition:
full-bleed or strong 55/45 image/content architecture.

Eyebrow:
**ELECTRICAL • MAINTENANCE • COMPLIANCE**

Headline:
**Power. Safety. Done Properly.**

Alternative:
**Electrical work. Done the proper way.**

Supporting copy:
“Professional electrical solutions for homes, businesses and properties across Sandton and Johannesburg North.”

Primary CTA:
**REQUEST A QUOTE**

Secondary CTA:
**CALL 072 132 6098**

Compact trust/service bar:
- Residential
- Commercial
- Maintenance
- Electrical Compliance

Do not invent response-time promises.

---

## 03 — INTRO / POSITIONING
Headline:
**Reliable electrical work starts with doing it right.**

Copy should position RUS Electrical around practical workmanship, clear communication and professional service.

Keep the writing concise.

Do not invent years in business unless sourced and approved.

---

## 04 — CORE SERVICES
Build an editorial service index rather than generic equal cards.

Recommended services:

01 Electrical Repairs & Fault Finding
02 Electrical Installations
03 Rewiring & Upgrades
04 Distribution Boards
05 Electrical Maintenance
06 Compliance Inspections / COC
07 Backup Power / UPS / Generators
08 Security & Exterior Lighting
09 Prepaid Meter Solutions
10 Gate Motor Electrical Support

If a service lacks confirmation, set it as unverified in the data file and keep it out of production mode.

Each verified service should have its own SEO-ready page.

---

## 05 — RESIDENTIAL
Use:
`hero-residential-electrician.webp`

Headline:
**Electrical expertise for the places people live.**

Possible content:
- fault finding
- distribution-board work
- rewiring
- lighting
- new installations
- backup power
- maintenance

Do not imply all services are confirmed if they are not.

---

## 06 — COMMERCIAL / INDUSTRIAL
Use:
`industrial-electrician.webp`

Make this section visually more technical and structured.

Headline:
**Built for business. Ready for demanding electrical environments.**

Use clear categories:
- commercial property
- offices
- retail
- industrial environments
- maintenance
- power distribution
- compliance

Avoid exaggerated engineering claims.

---

## 07 — HOW WE WORK
Create a clean five-step process:

01 Tell us what you need
02 Initial assessment
03 Scope & quotation
04 Professional electrical work
05 Testing / handover

No fake turnaround times.

---

## 08 — CUSTOMER EXPERIENCE
Use:
`customer-consultation.webp`

Headline:
**Clear explanations. Proper workmanship.**

Show the difference between simply fixing a fault and helping the customer understand the work being done.

This section should support the themes that appear in RUS Electrical’s public reviews: communication, knowledge and getting the job done properly.

Do not fabricate review quotes.

---

## 09 — SERVICE VEHICLE / LOCAL RESPONSE
Use:
`service-van-team.webp`

This is proposal imagery showing how the refreshed brand could look on workwear and a service vehicle.

Do not describe this photo as the company’s actual existing van.

Suggested headline:
**Professional from arrival to handover.**

Use it to communicate:
- prepared technicians
- organised equipment
- professional presentation
- local service

---

## 10 — REVIEWS
Create a premium review section based only on verifiable public reviews.

Do not invent names, dates, ratings or testimonials.

Store reviews in:
`src/data/reviews.ts`

Fields:
- author
- rating
- text
- source
- date
- verified

Only render `verified: true` reviews.

Visually:
- one prominent featured review
- smaller supporting reviews
- no endless carousel
- no fake Google badge

---

## 11 — PROJECTS / GALLERY
Create a project gallery architecture even if the initial content is limited.

Categories:
- Residential
- Commercial
- Industrial
- Distribution Boards
- Compliance / Upgrades
- Backup Power

Use authentic project photos when supplied later.

For now, generated proposal photography can be used for layout demonstration but must not be captioned as completed RUS projects.

---

## 12 — COMPLIANCE SECTION
Because the public profile references Electrical Compliance Certificates, create a dedicated section/page but use careful wording.

Headline:
**Electrical inspections and compliance support.**

Do not claim specific registration numbers, accreditations or legal authority unless the owner supplies them.

Include a client-confirmation placeholder for:
- registration details
- COC authority
- applicable certification details

---

## 13 — QUOTE FORM
Build a high-conversion enquiry flow.

Fields:
- Name *
- Phone *
- Email
- Property type
- Service required
- Suburb / area
- Urgency
- Description *
- Optional photo upload

Property type:
Residential
Commercial
Industrial
Other

CTA:
**REQUEST A QUOTE**

Do not promise a specific response time.

---

## 14 — CONTACT
Use primary verified phone:
072 132 6098

Do not automatically expose the secondary number or old email until confirmation is enabled in the business config.

Service-area wording:
**Sandton • Johannesburg North • Surrounding Areas**

If map is included, do not pin a disputed street address as the confirmed headquarters.

---

## 15 — FOOTER
Premium multi-column footer:

RUS Electrical
Services
Residential
Commercial
Industrial
Contact
Service Areas
Legal

Optional private-demo credit:
**Concept & Web Design by SMK Web Design**

Make sure it can be removed easily if the client proceeds.

---

# BRAND MOMENTS
Use the lightning motif carefully:
- thin diagonal separators
- subtle bolt-shaped clipping mask on selected photography
- hover detail
- favicon
- loading/progress motif

Do NOT place giant bolts behind every section.

---

# RESPONSIVE
Test at:
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 430×932
- 390×844

Mobile must have:
- compact logo
- clean menu
- sticky Call / Quote actions
- readable headings
- no horizontal overflow
- no oversized decorative graphics
- optimised image crops

---

# TECH STACK
If a repository already exists, work within it.

If starting fresh:
- Next.js stable
- TypeScript
- Tailwind CSS
- Framer Motion only where justified
- Lucide icons
- Next/Image

Keep dependencies disciplined.

---

# DATA ARCHITECTURE
Create:

`src/data/business.ts`
`src/data/services.ts`
`src/data/reviews.ts`
`src/data/projects.ts`
`src/data/areas.ts`

Every factual business statement must come from structured data.

Support fields such as:
- verified
- requiresConfirmation
- source

Do not let presentation components contain invented business facts.

---

# SEO
Implement:
- title/description metadata
- canonical URLs
- OpenGraph
- LocalBusiness/Electrician schema using only verified data
- Service schema
- FAQ schema where appropriate
- sitemap.xml
- robots.txt
- internal linking
- semantic heading structure
- service-area architecture

Do not put disputed addresses, hours or credentials into structured data.

---

# PERFORMANCE / ACCESSIBILITY
Target:
- Performance 90+
- Accessibility 95+
- Best Practices 95+
- SEO 95+

Use:
- responsive images
- WebP/AVIF
- lazy loading below fold
- visible focus states
- keyboard navigation
- form labels
- sufficient contrast
- reduced-motion support

---

# ASSET RULES
Use supplied assets:

`/public/assets/rus-logo-transparent.png`
`/public/assets/hero-residential-electrician.webp`
`/public/assets/service-van-team.webp`
`/public/assets/industrial-electrician.webp`
`/public/assets/customer-consultation.webp`

These are proposal assets created to demonstrate a more professional brand system.

Do not claim generated van/workwear scenes are documentary photographs of the existing company.

When genuine company project photos are supplied later, replace proposal imagery where appropriate.

---

# FINAL QUALITY BAR
The website should feel substantially more premium than the current RUS Electrical flyer/online presence.

It must look credible enough that SMK Web Design can send the private demo directly to the owner and say:

“Here is what your business could look like with a professional digital identity.”

The design should feel commercially useful, not merely attractive.

Priorities:
1. trust
2. conversion
3. brand recognition
4. mobile usability
5. service clarity
6. local SEO
7. speed

---

# QA
Run:
- install
- typecheck
- lint
- production build

Verify:
- every route
- navigation
- call links
- quote form
- image optimisation
- mobile menu
- sticky CTA
- no unsupported 24/7 claim
- no unverified certification claim
- no disputed address presented as confirmed
- no fake reviews
- no broken links
- no console errors
- no horizontal overflow

At completion report:
1. pages/routes created
2. files changed
3. assets used
4. factual company information used
5. details awaiting client confirmation
6. SEO implementation
7. build/test status

DO NOT deploy publicly unless explicitly instructed.
