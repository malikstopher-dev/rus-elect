# RUS Electrical — Commissioned Image Asset Spec

Assets below complete the Current System photography set. Existing set
(deployed): `hero-residential-electrician.webp`, `customer-consultation.webp`,
`industrial-electrician.webp`, `service-van-team.webp`.

**Style lock (all prompts):** photorealistic documentary capture, South African
working environment, technicians in safety-orange workwear with black hi-vis
trims (match existing set), natural/desaturated grade, deep shadows, neutral
warm interior or overcast exterior light, 50–85mm lens feel, NO visible logos,
NO readable text, NO posed camera eye-contact, hands actively working.

Ask RUS to supply real site photos first where possible — commissioned or
generated imagery follows this spec otherwise. Convert to `.webp` (quality 80),
keep under ~180KB per desktop variant.

---

## 1. commercial-office-installation.webp
- **Use:** Services index stage — 02 Electrical Installations (desktop + `<dl>` mobile fallback rows)
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10 crop)
- **Prompt:** "Documentary photo, two electricians in orange/black hi-vis
  installing recessed LED panel lighting in a modern open-plan office ceiling
  grid, one on a step ladder terminating cabling into a tray, scattered
  fittings and cable reels below under task lighting, Johannesburg office
  interior, overcast window light, desaturated documentary grade."

## 2. installation-in-progress.webp
- **Use:** `/services/electrical-installations` detail hero right panel
- **Desktop:** 1400 × 1600 (≈7:8 portrait PageHero panel) · **Mobile:** 1200 × 750 (16:9 band)
- **Prompt:** "Electrician in orange hi-vis pulling THHN cable through ceiling
  conduit in an unfinished commercial fit-out, exposed concrete pillars,
  haberdashery of clipped cables along a trunking run, work light glow, dust in
  air, 50mm documentary photo, desaturated."

## 3. rewiring-conduit-work.webp
- **Use:** Services index stage — 03 Rewiring & Upgrades
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10)
- **Prompt:** "Close documentary shot of an electrician's gloved hands threading
  new cable into a chased brick wall conduit in a decades-old Sandton house,
  plaster dust, old brittle wiring coiled in foreground, single work light,
  desaturated grade."

## 4. backup-power-inverter.webp
- **Use:** Services index stage — 07 Backup Power & Load Shedding; also available for `/compliance` note plate
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10)
- **Prompt:** "Technician in orange hi-vis commissioning a wall-mounted
  inverter and lithium battery stack in a suburban garage, laser level line
  across the wall, cable glands mid-terminate, phone-free documentary framing,
  cool ambient light with one warm work light."

## 5. security-lighting-install.webp
- **Use:** Services index stage — 08 Lighting & Security
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10)
- **Prompt:** "Dusk exterior, electrician on a secure ladder aligning a black
  motion-sensor floodlight under an eave of a Sandton home, deep blue-grey sky,
  floodlight already blazing warm white, silhouette-adjacent documentary
  exposure, no faces."

## 6. prepaid-meter-install.webp
- **Use:** Services index stage — 09 Prepaid Meters
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10)
- **Prompt:** "Electrician in orange hi-vis mounting an open prepaid meter
  enclosure next to a domestic distribution board, tails neatly dressed with
  cable ties, one hand torqueing a terminal with an insulated screwdriver,
  shallow depth of field on the termination, desaturated."

## 7. gate-motor-install.webp
- **Use:** Services index stage — 10 Gate Motors & Intercoms
- **Desktop:** 1600 × 1200 (4:3) · **Mobile:** 1200 × 750 (16:10)
- **Prompt:** "Technician kneeling beside an open sliding-gate motor chassis in
  a residential driveway, rack and pinion exposed, multimeter probes clipped to
  terminals, driveway paving and boundary wall in soft focus behind, overcast
  Johannesburg afternoon, documentary grade."

## 8. db-board-closeup.webp
- **Use:** `/compliance` route editorial support image (verification/proof context)
- **Desktop:** 1400 × 1600 (≈7:8 portrait) · **Mobile:** 1200 × 750 (16:9)
- **Prompt:** "Tight documentary close-up of a freshly completed, immaculately
  labeled domestic distribution board, breakers evenly racked, tails loom-dressed
  and numbered, technician's hand with a label printer adding the final legend,
  neutral grade, no readable brand names."

---

## Deployment notes
- Drop files in `public/assets/`, then set the matching entries in
  `src/data/services.ts` (`serviceImages`) — entries currently `null` and
  already annotated with `// MISSING — see docs/image-assets-spec.md`.
- Do **not** fabricate project photography for `/projects`; the placeholder
  bolt plates stand until RUS supplies real job photos.
