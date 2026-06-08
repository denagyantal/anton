---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/concrete-paving-estimating.md
  - _bmad-output/planning-artifacts/product-brief-concrete-paving-estimating.md
  - _bmad-output/planning-artifacts/research/market-concrete-paving-estimating-research-2026-06-08.md
workflowType: prd
project_name: concrete-paving-estimating
classification:
  projectType: saas_b2b_mobile_pwa
  domain: construction_trades_software
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ConcreteQuote

**Author:** Root
**Date:** 2026-06-08
**Product:** ConcreteQuote — Mobile-First Estimating for Concrete & Paving Contractors
**Status:** Ready for Architecture

---

## Executive Summary

ConcreteQuote is a mobile-first Progressive Web App (PWA) that converts on-site measurements into signed, deposit-backed proposals in under 10 minutes — purpose-built for the 70,000+ residential concrete and paving contractors in the US who currently quote on paper or Excel.

The market has a structural pricing gap no competitor fills: generic field-service tools (Jobber, Housecall Pro) lack concrete-specific calculations entirely; enterprise estimating software (HCSS HeavyBid, STACK) starts at $2,599/year and targets large civil/GC buyers; and the only purpose-built competitor (QuoteIQ) lacks offline capability and mobile-native UX. No construction estimating tool currently appears on AppSumo, creating a first-mover lifetime-deal opportunity in a channel where contractor buyers actively distrust subscriptions.

**Core value proposition:** measure → calculate → professional PDF → e-sign → deposit collected, all from a phone, even without cell service.

**Business model:** $79 LTD (solo), $129 LTD (small crew), $49/month (teams + integrations). Target: 500 LTD buyers at AppSumo launch → $10K MRR within 12 months via team plan conversion.

### What Makes This Special

Three properties combine to create a defensible niche that no existing tool addresses:

1. **Concrete-specific material calculator at solo/small-crew price point** — square footage → cubic yards → bags → rebar → forms → pump flag, with mix-design selection (3000/3500/4000/5000 PSI). This is mathematically irreducible: generic FSM tools cannot provide this without a full rebuild.
2. **True offline-first capability** — Service worker + IndexedDB ensures the full quote workflow (input → calculate → PDF generate) works with zero internet. Online is required only for Stripe payment and PDF email delivery. This is table stakes for field work; no competitor at this price delivers it.
3. **Close-the-job workflow** — E-sign and Stripe deposit collection on the same proposal link transforms an estimating tool into a sales-closing tool. Job-history data (signed proposals, deposit records) creates switching cost once contractors use it to close real jobs.

## Project Classification

- **Project Type:** Mobile-first SaaS PWA (B2B — vertical SaaS for skilled trades)
- **Domain:** Construction trades software (non-regulated, medium complexity)
- **Complexity:** Medium — concrete-specific calculation formulas, offline-first sync, Stripe integration, PDF generation; no regulatory/compliance constraints
- **Project Context:** Greenfield new product
- **Target Market:** US residential and light-commercial concrete/paving contractors, solo operators and crews of 1–5

---

## Success Criteria

### User Success

Users succeed when the app eliminates the manual quoting tax and enables them to close jobs from the field.

**Key user success indicators:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| Time from dimension entry to PDF sent | ≤ 10 minutes | Core product promise; validated by comparing to 45–90 min current workflow |
| Time to first real quote (new user) | ≤ 15 minutes | Onboarding must be friction-free for non-technical contractor users |
| Quote funnel completion rate | ≥ 70% | % of users who start a quote and complete it to PDF generation |
| Weekly active rate at 90 days | ≥ 60% | Users generating ≥ 1 quote per week; measures ongoing adoption |
| Template library usage at 60 days | ≥ 50% of users have ≥ 3 saved templates | Templates signal habitual use; not just one-off trial |
| Deposit collection at 30 days | ≥ 40% of users have collected ≥ 1 deposit | Leading retention indicator — closes first job through app |

**User "aha" moment:** Contractor enters dimensions on-site, sees the material calculator auto-populate cubic yards and bags, generates a PDF in under 10 seconds, and the homeowner signs on the spot. This moment — not account creation, not onboarding — is when the product wins.

**Qualitative success:** ≥ 3 beta users provide testimonials describing a specific job they won or closed faster using ConcreteQuote, with concrete before/after details (e.g., "used to take me an hour, now 8 minutes").

### Business Success

**Year 1 targets:**

| KPI | 3-Month | 6-Month | 12-Month |
|-----|---------|---------|---------|
| LTD buyers (cumulative) | 100 | 700 | 1,200 |
| Active MRR subscribers | 0 | 50 | 200 |
| Monthly Recurring Revenue | $0 | $2,500 | $10,000 |
| Monthly churn (subscribers) | — | < 5% | < 3% |
| Avg quotes/user/month | — | 5 | 8 |
| AppSumo rating | — | 4.5+ | 4.7+ |
| Deposit collections via app | 10 | 200 | 800 |
| Community mentions (organic) | 5 | 20 | 50+ |

**AppSumo launch targets:** 500–1,500 LTD buyers within 60-day launch window. AppSumo 4.5+ rating from 100+ verified reviews unlocks "featured deal" promotion tier.

**Go/no-go threshold for AppSumo application:** ≥ 25 paying beta users AND ≥ 2 public testimonials within 60 days. If below, extend beta and diagnose friction before applying.

**Strategic business objectives:**
- Own "concrete estimating software" organic search before QuoteIQ invests in SEO
- Establish brand presence in r/concrete and Facebook contractor groups as the recommended tool in community discussions
- Build referral partnership with ≥ 2 regional ready-mix or concrete supply distributors within 12 months

### Technical Success

- Zero critical offline-to-sync data loss events over 30-day beta period
- PDF generation completes client-side in ≤ 5 seconds on mid-range Android device (Galaxy A-series)
- Service worker cache covers 100% of core workflow (input → calculate → PDF generate) without network
- IndexedDB local storage handles ≥ 500 quotes per user without degradation
- Stripe payment link functional within 30 seconds of proposal creation
- PWA installable on iOS Safari and Android Chrome (passes Lighthouse PWA audit ≥ 90)

### Measurable Outcomes

The deposit collection volume metric is the most important retention-leading indicator. It directly measures whether users are closing real jobs through the app — not just generating estimates. A user who has collected 3 deposits through ConcreteQuote has job-history data they will not want to lose, creating durable retention.

**Beta validation criteria (before AppSumo):**
1. 50 beta users generating real job quotes (not test data) within 60 days
2. ≥ 70% quote funnel completion (start → PDF generated)
3. ≥ 10 users collect at least one deposit through the app
4. Median quote time ≤ 10 minutes from dimension entry to PDF sent
5. Zero critical failures in offline-to-sync workflow over 30-day beta period

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete measure-to-close workflow for a solo concrete contractor. Every feature listed is must-ship; nothing below is deferrable from MVP without breaking the core value proposition.

**MVP feature set (9 capability areas):**

1. **Job dimension input** — Length × Width (imperial ft/in), thickness selection (2–6 inch presets + custom), shape support for rectangles and simple L-shapes (subtraction). Auto-calculates square footage and cubic yards with 10% waste factor (adjustable).

2. **Material calculator** — Concrete bags (60lb and 80lb) auto-calculated by volume and mix design; mix design selection (3000/3500/4000/5000 PSI); rebar quantity (12-inch grid standard, adjustable); forms (linear feet from perimeter); concrete pump flag (volume > threshold). All quantities editable/overridable.

3. **Material cost estimation** — User-configurable unit costs (concrete per yard, rebar per rod, etc.); saved price profiles; markup percentage input → auto-calculate job total; labor cost input (per day × crew days).

4. **Crew day calculator** — Crew size input (1–10); standard productivity default 200 sq ft/person/day (adjustable in settings); output: estimated pour days and finish days.

5. **Professional PDF proposal generator** — Contractor logo + license number; customer name, address, job date; editable scope description; material and labor line items; crew schedule estimate; total price with optional itemized/lump-sum toggle; payment schedule (deposit + balance); contractor signature block. Generated client-side (offline-capable).

6. **E-signature + Stripe deposit collection** — Unique customer-facing proposal link (URL or QR code); customer signs electronically (finger on phone or mouse on desktop); Stripe integration for deposit collection (fixed amount or % of total); signed PDF saved automatically to quote history.

7. **Offline-first PWA** — Service worker caches all calculator logic and proposal templates; IndexedDB stores quotes locally; background sync when connection restored; core flow (input → calculate → PDF generate) works with zero internet; online required only for Stripe payment collection and PDF email delivery.

8. **Quote history + templates** — All quotes saved with status (Draft / Sent / Signed / Won / Lost); save any quote as a named template; quote list view with customer name, address, value, date, status; search and filter by status and date.

9. **Contractor profile setup** — Business name, logo upload, license number, phone, email; default markup %, default crew size, default material prices; branding auto-applied to all PDFs.

### Growth Features (Post-MVP)

Planned for Phase 2 (months 4–12 post-launch):

- **Team accounts** — Shared quote library, consistent pricing across estimators, manager dashboard showing all open quotes by status and value. This is the primary MRR conversion path from LTD tier.
- **Satellite / aerial measurement mode** — User enters job address → app pulls aerial imagery → user traces area → auto-calculate dimensions. Removes need to manually measure on every site visit.
- **QuickBooks sync** — Export won jobs directly to QuickBooks for invoicing. Reduces duplicate data entry for contractors with bookkeeping workflows.
- **Native mobile apps** — iOS App Store + Google Play for push notification support (quote follow-up reminders) and broader distribution.
- **Quote follow-up automation** — Automated reminder sequences for sent-but-unsigned proposals.

### Vision (Future)

Phase 3 and beyond (months 12–24):

- **Asphalt / paving calculator variant** — Tonnage-based estimating for asphalt paving and resurfacing contractors. Same platform, different material formulas. Adjacent market with identical workflow.
- **Masonry calculator variant** — Block, brick, and stone estimation. Area-based like concrete; adjacent buyer persona.
- **Live material pricing** — Integration with regional concrete supplier pricing APIs or a ConcreteQuote community pricing database crowdsourced from users.
- **UK / Australia expansion** — Same product, localized measurement units and currency. Comparable market size, less competition.
- **Acquisition positioning** — 5,000+ active accounts, $50K+ MRR; positions as target for ServiceTitan, Workiz, or similar trades software consolidators at 5–8x revenue multiple.

---

## User Journeys

### Journey 1: Marcus — Solo Operator, First Quote (Primary Happy Path)

Marcus is 38, self-employed, does driveways and patios for homeowners. He runs everything from his iPhone. He quotes 10 jobs per month and wins about half. His current workflow: measure at the site, write dimensions on paper, drive home, open Excel, calculate, paste into Word, convert to PDF, email it. 45–90 minutes per quote. He's lost bids to faster competitors.

**Opening scene:** Marcus is standing at a customer's house, measuring a 24 ft × 40 ft driveway he needs to pour. The homeowner asks when they can expect a quote. Marcus says "I'll get it to you today" — and opens ConcreteQuote on his phone.

**Rising action:** He enters 24 × 40, selects 4-inch depth, and picks 4000 PSI mix. The app instantly shows: 11.9 cubic yards, 214 bags (80lb), 80 rebar rods, 128 linear feet of forms, pump recommended. He adjusts markup to 35%, enters 2-person crew, and the app estimates 1.5 pour days. Total: $4,200 with a $1,000 deposit.

**Climax:** He taps "Generate PDF." In 8 seconds, a professional proposal appears with his logo, the customer's address, line-item breakdown, crew schedule, and a payment section. He turns his phone to the homeowner: "Does this look right to you?" The homeowner nods. Marcus sends the proposal link via text — the homeowner signs on his phone and pays the $1,000 deposit via Stripe before Marcus leaves the driveway.

**Resolution:** Marcus drives away with a signed job and a deposit in his account. No callbacks, no follow-up emails, no re-sending PDFs. The quote took 8 minutes. He closes the next two jobs the same way and tells his concrete supplier about the app.

**Journey requirements revealed:** Offline dimension input; real-time material calculation; one-tap PDF generation; mobile-optimized proposal viewing; e-sign on mobile; Stripe deposit collection; quote status tracking; contractor profile with logo.

---

### Journey 2: Marcus — Site Without Cell Service (Primary Edge Case)

Same Marcus, same workflow — but this job site is in a rural area with no cell signal. His previous estimating tool (a web app) throws a "can't connect" error when he tries to load it.

**Opening scene:** Marcus opens ConcreteQuote. The app loads instantly from the cached service worker. He enters dimensions, runs the material calculator, and generates the PDF — all without a single network request.

**Rising action:** He can't send the proposal link (Stripe requires online), so he shows the PDF on his phone and the homeowner agrees to sign when Marcus sends the link later. Marcus marks the quote as "Signed pending deposit" and drives to an area with coverage.

**Resolution:** When his phone reconnects, ConcreteQuote background-syncs the quote and he sends the Stripe deposit link. Payment collected 20 minutes later. The homeowner never experienced any friction; Marcus never lost a bid to connectivity.

**Journey requirements revealed:** Full offline-first capability for core workflow; service worker caching of all calculator and PDF logic; IndexedDB local persistence; background sync on reconnect; graceful degradation when Stripe/email unavailable offline; quote status "Signed pending deposit" state.

---

### Journey 3: Diane — Small Crew Owner, Team Pricing Consistency (Secondary User — Growth Feature)

Diane is 45, runs a 3-person concrete crew, has a part-time estimator who also quotes jobs. Their current problem: her estimator and she use different markup percentages and labor rates — customer proposals look inconsistent and they occasionally underbid because formulas are out of date.

**Opening scene:** Diane invites her estimator to ConcreteQuote on the team plan. She sets the shared price book: concrete at $145/yard, rebar at $18/rod, crew rate at $650/day, default markup 38%.

**Rising action:** Her estimator quotes a 2,400 sq ft warehouse floor using the shared settings. The proposal looks identical to Diane's proposals — same logo, same line-item format, same pricing. Diane reviews it from the quote dashboard before it's sent.

**Resolution:** The team's proposals are consistent. When a material price changes (concrete up to $158/yard), Diane updates it once in the shared price book and all future quotes automatically use the new rate. No more Excel formula drift. Diane upgrades from her solo LTD to the $49/month team plan.

**Journey requirements revealed:** Team account with shared price book; manager dashboard with all open quotes by estimator; role-based access (manager vs. estimator); quote approval workflow before sending; team member invite via email.

---

### Journey 4: Admin/Support — Contractor Onboarding Investigation (Ops/Support)

A ConcreteQuote support agent receives a report: "My logo isn't showing on PDFs." The agent needs to investigate without access to the contractor's raw data.

**Opening scene:** Agent logs into the admin panel, looks up the contractor by email. Sees their profile: logo uploaded (file exists), profile marked "complete." Opens a sample quote PDF from their quote history.

**Rising action:** The PDF preview shows a broken image placeholder. Agent checks the logo file metadata — it's a CMYK TIFF, not RGB PNG/JPEG. The PDF generator doesn't support CMYK color space.

**Resolution:** Agent sends the contractor a support note with instructions to re-upload in PNG format and a one-click "Re-generate PDFs" option. The contractor fixes it and confirms it works. The agent logs the bug: "Add logo format validation on upload — accept only RGB PNG/JPEG/WebP."

**Journey requirements revealed:** Admin panel with contractor lookup by email; quote history accessible to support (read-only); PDF preview capability; logo upload with format validation; audit log of profile changes.

---

### Journey Requirements Summary

| Capability | Revealed By |
|-----------|------------|
| Offline-first PWA (full core workflow without internet) | Journey 2 |
| Real-time concrete material calculator | Journey 1 |
| One-tap PDF generation (client-side) | Journey 1, 2 |
| Mobile-optimized e-sign + Stripe deposit | Journey 1 |
| Background sync on reconnect | Journey 2 |
| Contractor profile (logo, license, defaults) | Journey 1, 4 |
| Quote status tracking (Draft/Sent/Signed/Won/Lost) | Journey 2 |
| Saved templates for repeat job types | Journey 1 (implied) |
| Team account + shared price book | Journey 3 |
| Manager dashboard (all quotes by estimator) | Journey 3 |
| Admin panel with contractor lookup | Journey 4 |
| Logo upload with format validation | Journey 4 |
| Graceful offline degradation (Stripe/email unavailable) | Journey 2 |

---

## Domain-Specific Requirements

This is a construction trades software product in a non-regulated domain. No HIPAA, PCI-DSS beyond Stripe's own scope, or industry-specific compliance requirements apply. Key domain-specific considerations:

### Concrete Calculation Accuracy

Calculation formulas are the product's credibility foundation. Errors destroy trust and contractor business outcomes (underbidding a pour means absorbing material cost on a poured slab — irreversible).

**Required formula validations:**
- Cubic yards = (Length × Width × Thickness_inches / 12) / 27, with configurable waste factor (default 10%)
- 60lb bag coverage: 0.45 cubic feet per bag; 80lb bag: 0.60 cubic feet per bag
- Bag count = (cubic yards × 27 cubic feet) / bag coverage, rounded up
- Rebar estimate: based on square footage and standard 12-inch grid spacing (adjustable)
- Forms (linear feet) = perimeter of pour area
- Pump recommendation: trigger when pour volume > configurable threshold (default 5 cubic yards)
- All formulas must be validated against industry standards (ACI, Concrete Network) before launch
- Unit test coverage on all calculation paths required (see NFRs)

### Mobile-First Trade Contractor UX

Concrete contractors are not knowledge-worker software users. They work in direct sunlight, with dirty hands, on phones that may be in protective cases with reduced touch sensitivity.

**Domain UX constraints:**
- Primary inputs must be operable with a single thumb on a 6-inch phone screen
- Touch targets minimum 48×48px (exceeds WCAG; required for gloves/dirty hands)
- All numeric inputs must use numeric keyboard (not alphanumeric) on mobile
- PDF proposal language must be in plain English, not legal/technical jargon
- Error messages must describe the fix, not the technical cause ("Enter a number greater than 0" not "NaN error")

### Stripe Payment Scope

ConcreteQuote facilitates contractor-to-customer payment collection. Scope of responsibility:

- ConcreteQuote acts as a platform connecting contractors to Stripe Connect; it does not hold funds
- Each contractor must complete Stripe Connect onboarding (KYC handled by Stripe)
- ConcreteQuote stores no raw card data — Stripe handles all PCI-DSS scope
- Deposit amounts and payment schedules are defined by the contractor; ConcreteQuote does not impose limits
- Refunds are processed through Stripe dashboard by the contractor directly

### Offline Data Integrity

Because contractors work offline and sync later, data integrity during the offline→online transition is critical:

- Quotes created offline are assigned a local UUID before sync; server reconciles on first sync
- Last-write-wins for edits to the same quote (unlikely; single-user in MVP)
- Sync conflict resolution logged for support investigation if needed
- IndexedDB data must persist across app restarts and browser cache clears (use persistent storage API)

---

## Innovation & Novel Patterns

### Detected Innovation Areas

ConcreteQuote combines three existing patterns in a way that no purpose-built tool at this price point has executed: **trade-specific calculation depth** + **offline-first PWA** + **close-the-job payment flow**. None of these is novel individually. The combination for a $79 LTD targeting a single skilled trade is the market gap.

**Concrete-specific calculator as a moat:** The material formulas (cubic yards, bag count, mix design, rebar, forms, pump threshold) require trade knowledge to get right. Getting them wrong destroys credibility. Getting them right creates a defensible accuracy advantage over generic tools that would require a full product rebuild to match.

**Offline-first PWA as a field-work differentiator:** Service workers and IndexedDB enable the full calculate-and-generate flow without internet. This is a meaningful technical investment that competitors (especially subscription SaaS tools running on cloud rendering) cannot match without rearchitecting their backends.

### Market Context & Competitive Landscape

- Construction estimating software market: $1.5B (2024) → $2.62B (2030) at 10.2% CAGR
- Concrete-specific segment: $100M (2023) → $214M (2030)
- QuoteIQ is the closest purpose-built competitor; it has the right market but lacks offline capability, mobile-native UX, and LTD pricing — all three gaps that ConcreteQuote addresses
- No construction estimating tool is currently listed on AppSumo (first-mover opportunity)

### Validation Approach

Beta validation focuses on the "10-minute measure-to-close" promise:
- Time-log 20 real quotes via beta testers to validate ≤ 10 min median
- Offline reliability: require ≥ 30 days zero offline data-loss events before AppSumo application
- Deposit collection: ≥ 10 users must successfully collect a deposit to validate the Stripe integration creates real business value

### Risk Mitigation

- **Estimating-only churn risk (high):** Mitigated by including e-sign + deposit collection in MVP. Job-history data creates switching cost.
- **QuoteIQ launches LTD:** Move fast; establish AppSumo listing before they do. Timeline pressure is real.
- **Offline sync data loss:** IndexedDB + background sync requires thorough testing. This is the highest technical risk.

---

## SaaS PWA Specific Requirements

### Project Type Overview

ConcreteQuote is a B2B vertical SaaS delivered as a Progressive Web App (PWA). It targets a single trade (concrete/paving) in a single geographic market (US, with expansion potential). The PWA architecture is chosen because:
1. Offline capability is a hard requirement — native app would also work, but PWA ships faster and reaches Android + iOS without separate App Store submissions
2. The buyer (solo contractor) will not download an app from an unknown brand; a web-delivered tool with install-to-home-screen is lower friction for initial trial

### Technical Architecture Considerations

**Frontend:**
- PWA built with a modern JS framework (React or Vue recommended for component reuse)
- Service worker (Workbox library) for caching all static assets, calculator logic, and PDF template rendering
- IndexedDB (via Dexie.js or idb) for local quote storage with background sync
- PDF generation: client-side via jsPDF or pdf-lib (no server-side rendering required for offline capability)
- E-signature: client-side canvas drawing; signature image embedded in PDF
- Responsive design with mobile-first breakpoints; target 375px minimum viewport

**Backend:**
- REST API for account management, sync, and Stripe webhook handling
- Stripe Connect for payment facilitation (contractor to customer)
- Email delivery via transactional provider (Postmark, Resend) for PDF delivery
- User authentication: magic link or email/password (avoid OAuth complexity for MVP)
- Quote storage: server-side Postgres or similar; acts as sync target for IndexedDB

**Infrastructure:**
- Cloud hosting with CDN for static assets (Vercel, Cloudflare Pages, or equivalent)
- Backend: serverless functions or lightweight Node.js server
- Database: managed Postgres (Supabase, Neon, or Railway)
- Stripe webhooks for payment status updates

### PWA Requirements

- Passes Lighthouse PWA audit ≥ 90 score
- Installable on iOS Safari (home screen add) and Android Chrome (install prompt)
- Service worker registers and activates on first load; caches core assets for offline use
- Offline indicator displayed when network unavailable; user is not surprised when Stripe/email features are unavailable
- App shell architecture: navigation and UI shell load instantly; data loads separately

### Authentication & Authorization

**MVP (single-user):**
- Email + password authentication with email verification
- Session token stored in httpOnly cookie or localStorage (secure)
- Password reset via email link

**Growth (team accounts):**
- Role-based: Owner (full access, billing), Estimator (create/edit quotes, no billing), Viewer (read-only quotes)
- Invite via email; invited user completes registration
- Owner can revoke access and transfer ownership

### Integration Requirements

**Stripe Connect (MVP):**
- Standard Connect (Stripe handles KYC/onboarding for each contractor)
- ConcreteQuote charges platform fee (optional; can be $0 at launch)
- Webhook handling for payment.succeeded, payment.failed events
- Stripe Dashboard link surfaced in contractor settings for refund management

**Email Delivery (MVP):**
- Transactional email for proposal delivery, e-sign notification, deposit receipt
- PDF attached to proposal email (max ~5MB)
- Contractor's business email used as reply-to

**QuickBooks (Growth):**
- OAuth2 integration via QuickBooks Online API
- Export won jobs as QuickBooks invoices (line items mapped from quote)
- One-way sync only (ConcreteQuote → QuickBooks); no reverse sync

### Implementation Considerations

- PWA offline-first requires careful cache invalidation strategy: calculator formula updates must force service worker cache refresh
- IndexedDB schema versioning required for safe migrations across app versions
- PDF generation on low-end Android devices must complete within 5 seconds; benchmark early
- Stripe Connect onboarding is a user activation step — smooth onboarding UX critical for payment feature adoption

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the MVP must be capable of closing real jobs (not just generating estimates). E-sign and Stripe deposit collection are included in MVP because they create the switching cost (job history data) that makes the product sticky. An estimating-only MVP would validate calculation accuracy but not retention.

**Resource Requirements:** 1–2 full-stack developers, 1 designer, 8–12 weeks to MVP beta.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo contractor: measure → calculate → PDF → e-sign → deposit (Marcus's journey, fully online)
- Solo contractor: measure → calculate → PDF offline → sync and send when connected (Marcus's offline journey)

**Must-have capabilities:**
- Concrete material calculator (cubic yards, bags, mix design, rebar, forms, pump flag)
- Crew day estimator
- Client-side PDF proposal generation (offline-capable)
- Contractor profile with logo and license number
- E-signature capture (client-side canvas)
- Stripe Connect deposit collection
- Offline-first PWA (service worker + IndexedDB + background sync)
- Quote history with status tracking
- Named quote templates

**Explicitly excluded from MVP** (with rationale):

| Feature | Reason Excluded |
|---------|----------------|
| Team accounts / multi-user | MVP targets solo; team = upsell path from LTD |
| Satellite/aerial measurement | Complex Google Maps + geometry integration; Phase 2 |
| QuickBooks sync | Contractors care about closing jobs first; accounting is secondary |
| CRM / follow-up reminders | Not our differentiator; QuoteIQ has it |
| Native iOS/Android apps | PWA covers offline; App Store submission delays MVP |
| Asphalt/tonnage calculator | Adjacent market; expand post-traction validation |
| Blueprint/takeoff upload | STACK's market; wrong buyer |
| Live material pricing API | Static user-configured prices sufficient for MVP |
| Admin panel (ops) | Manual support acceptable during beta; admin panel is Growth |

### Post-MVP Features (Phase 2)

- Team accounts + shared price book + manager dashboard
- Satellite aerial measurement (address lookup → auto-dimensions)
- QuickBooks sync (export won jobs as invoices)
- Native iOS and Android apps
- Quote follow-up automation (reminder sequences for unsigned proposals)
- Admin panel for support ops

### Expansion Features (Phase 3)

- Asphalt/tonnage calculator variant
- Masonry calculator variant
- Live regional material pricing (supplier API or community crowdsource)
- UK / Australia localization (units, currency, tax)

### Risk Mitigation Strategy

**Technical risks:**
- *IndexedDB offline sync data loss* — highest technical risk. Mitigation: thorough testing with simulated network interruptions; require 30-day zero-loss period before AppSumo launch.
- *PDF generation performance on low-end Android* — Benchmark on Galaxy A-series equivalent in first sprint. If client-side generation is too slow, fall back to server-side with client-side caching of result.
- *Stripe Connect onboarding drop-off* — Smooth guided onboarding flow; show payment feature prompts early to motivate completion.

**Market risks:**
- *QuoteIQ launches LTD before us* — Compress timeline. Apply to AppSumo as soon as beta validation criteria are met (25 paying users, 2 testimonials).
- *Beta users don't generate real quotes* — Recruit contractors with active projects in the pipeline; offer extended LTD for beta participation.

**Resource risks:**
- *Smaller team than planned* — Drop admin panel from MVP (manual support is acceptable during beta); compress PDF template variety to 1 default template; offline sync is non-negotiable.

---

## Functional Requirements

All capabilities listed below constitute the **capability contract** for ConcreteQuote. Downstream UX design, architecture, and epic breakdown will only include capabilities listed here. Capabilities not listed will not exist in the final product without a PRD amendment.

### Job Measurement & Calculation

- FR1: Contractor can input job dimensions (length, width, thickness) in imperial units (feet and inches) from their phone
- FR2: Contractor can select pour thickness from standard presets (2", 3", 4", 5", 6") or enter a custom value
- FR3: Contractor can define a simple L-shaped pour area using dimension subtraction (two rectangles)
- FR4: System auto-calculates square footage and cubic yards from entered dimensions with a configurable waste factor (default 10%)
- FR5: Contractor can adjust the waste factor percentage from the default
- FR6: System auto-calculates bag count for both 60lb and 80lb bag sizes based on calculated volume and selected mix design
- FR7: Contractor can select mix design (3000, 3500, 4000, or 5000 PSI concrete)
- FR8: System auto-calculates rebar quantity based on pour area using configurable grid spacing (default 12-inch)
- FR9: System auto-calculates forming (linear feet) from the perimeter of the pour area
- FR10: System flags when a concrete pump is recommended based on configurable pour volume threshold (default 5 cubic yards)
- FR11: Contractor can override any calculated material quantity before generating the proposal

### Cost Estimation

- FR12: Contractor can configure unit costs for each material type (concrete per yard, rebar per rod, bag price, etc.)
- FR13: Contractor can save named price profiles (e.g., "Summer 2026 pricing") and switch between them
- FR14: Contractor can enter markup percentage and see the job total auto-calculated
- FR15: Contractor can enter labor cost as daily rate × estimated crew days
- FR16: Contractor can configure a default crew size used in crew day calculations
- FR17: System estimates crew days required based on pour volume and configurable crew productivity rate (default 200 sq ft/person/day)
- FR18: Contractor can override the crew productivity rate from the default

### Proposal Generation

- FR19: Contractor can generate a professional PDF proposal with one tap
- FR20: PDF proposal includes contractor business name, logo, license number, phone, and email
- FR21: PDF proposal includes customer name, job address, and quote date
- FR22: Contractor can write or edit a scope-of-work description that appears on the proposal
- FR23: PDF proposal displays material line items and quantities (configurable show/hide for itemized vs. lump sum)
- FR24: PDF proposal includes crew schedule estimate (estimated pour days from crew day calculator)
- FR25: PDF proposal includes a payment schedule with deposit amount and balance due
- FR26: PDF generation completes on the device without requiring an internet connection

### E-Signature & Deposit Collection

- FR27: Contractor can generate a unique, shareable proposal link (URL) for customer review
- FR28: Customer can view the proposal on any device via the shared link without creating an account
- FR29: Customer can sign the proposal electronically using a touch or mouse signature
- FR30: Contractor can configure a deposit amount (fixed dollar or percentage of total) on each proposal
- FR31: Customer can pay the deposit online via credit or debit card through the proposal link
- FR32: System records the signed proposal and payment event to the contractor's quote history automatically
- FR33: Contractor receives notification when a customer signs or pays a deposit

### Offline Capability

- FR34: Core quote workflow (dimension input → material calculation → PDF generation) functions without internet access
- FR35: Quotes created offline are saved to local device storage and accessible immediately
- FR36: Offline quotes sync automatically to the server when internet connection is restored
- FR37: App displays a clear indicator when operating in offline mode
- FR38: App gracefully disables Stripe payment and email delivery features when offline and communicates this to the contractor

### Quote Management

- FR39: Contractor can view all quotes in a history list showing customer name, job address, quote value, date created, and current status
- FR40: Contractor can assign status to each quote (Draft, Sent, Signed, Won, Lost)
- FR41: Contractor can filter and search quotes by status and date range
- FR42: Contractor can save any completed quote as a named template for future reuse
- FR43: Contractor can create a new quote from a saved template (pre-populates all settings, requires only dimension update)
- FR44: Contractor can duplicate an existing quote to create a variation

### Contractor Profile & Settings

- FR45: Contractor can set up their business profile with name, logo, license number, phone, and email
- FR46: Contractor can configure default markup percentage applied to all new quotes
- FR47: Contractor can configure default crew size used in all new quotes
- FR48: Contractor can configure default material unit costs used in all new quotes
- FR49: Contractor logo is automatically applied to all generated PDFs
- FR50: Contractor can connect their Stripe account through a guided onboarding flow

### PWA & Installation

- FR51: App is installable to the home screen on iOS Safari and Android Chrome
- FR52: App shell (navigation, UI chrome) loads instantly from service worker cache on repeat visits
- FR53: App prompts the user to install when visited on a compatible browser

### Admin Operations (Growth — not MVP)

- FR54: Support admin can look up contractor accounts by email address
- FR55: Support admin can view a contractor's quote history and PDF previews in read-only mode
- FR56: Support admin can view contractor profile details and logo upload status

---

## Non-Functional Requirements

### Performance

Concrete contractors will form opinions about the app in their first 3 minutes on a job site. Performance is a first-impression that directly affects trial-to-adoption conversion.

- **Material calculation:** All calculation results update in real-time as inputs change; latency ≤ 100ms on mid-range Android (no perceptible lag)
- **PDF generation:** Client-side PDF generation completes in ≤ 5 seconds on a mid-range Android device (Galaxy A-series class hardware)
- **App shell load:** PWA app shell loads from service worker cache in ≤ 1 second on repeat visit (even offline)
- **Proposal link load:** Customer-facing proposal page loads from CDN in ≤ 3 seconds on 4G connection
- **Stripe payment:** Stripe payment form completes and confirms in ≤ 30 seconds under normal conditions

### Security

ConcreteQuote handles contractor business data (customer names, addresses, job values) and payment flows. Security requirements:

- All data transmitted over HTTPS (TLS 1.2+); no unencrypted connections
- All data at rest encrypted in the database (column-level encryption for PII: customer names, addresses)
- Authentication tokens stored in httpOnly cookies (not localStorage) to prevent XSS token theft
- Password storage: bcrypt with cost factor ≥ 12 (or Argon2id)
- Stripe: ConcreteQuote stores zero raw card data; all payment data handled by Stripe Connect
- Proposal share links use unguessable tokens (UUID v4 minimum) to prevent enumeration
- Rate limiting on authentication endpoints to prevent brute-force attacks
- CSRF protection on all state-changing API endpoints
- Content Security Policy header configured to prevent XSS

### Scalability

Initial launch target is AppSumo (500–1,500 buyers in 60 days). Scalability requirements are intentionally modest for MVP.

- System must support 2,000 concurrent users without performance degradation
- API must handle 500 quote-save events per minute at peak (AppSumo launch spike)
- Database must support 1 million stored quotes without query degradation
- CDN handles all static asset delivery; backend is not the bottleneck for static content

### Reliability & Offline Integrity

Offline reliability is the product's most critical non-functional requirement — a sync failure that loses a contractor's quote erodes trust irreparably.

- Offline-created quotes must be preserved across app restarts, browser cache clears, and iOS Safari's IndexedDB eviction policy
- System must request persistent storage API permission on install to prevent iOS IndexedDB eviction
- Background sync must retry failed syncs with exponential backoff (max 24-hour retry window)
- Zero data-loss events from sync conflicts must be achieved over 30-day beta period (tracked via error logging)
- Service worker must handle cache invalidation correctly when app is updated (no stale calculator logic served after formula updates)
- System uptime target: 99.5% for the API (planned maintenance windows excluded); 100% offline capability is independent of API uptime

### Accessibility

ConcreteQuote targets working contractors, not broadly diverse public audiences. Accessibility requirements are focused on practical field-use conditions rather than regulatory compliance.

- Touch targets minimum 48×48px on all interactive elements (field-use with dirty hands/gloves)
- Numeric inputs trigger numeric keyboard on mobile devices (no alphanumeric keyboard for number fields)
- Color contrast ratio ≥ 4.5:1 for all text on backgrounds (sunlight readability)
- All form fields have visible labels (not placeholder-only)
- Error messages are descriptive and actionable (not technical codes)
- App functions without audio (no critical information communicated only via sound)

### Integration Reliability

- Stripe Connect: treat Stripe as the authoritative source for payment status; all state changes driven by webhook events, not optimistic assumptions
- Email delivery: transactional email via dedicated provider (not shared SMTP); bounce and complaint rates monitored
- Background sync: if sync fails, contractor is shown a visible indicator and data is retained locally until sync succeeds; no silent data loss

---

## Competitive Positioning Reference

| Dimension | ConcreteQuote | QuoteIQ | STACK | Jobber |
|-----------|--------------|---------|-------|--------|
| Concrete-specific calculator | Purpose-built | Partial | Blueprint-based | None |
| Mobile-first | PWA | Responsive web | Desktop tool | Yes |
| Offline capable | Core feature | No | No | No |
| LTD pricing | $79/$129 | Subscription only | $2,599+/year | $49+/month |
| AppSumo presence | Open (first-mover) | Not listed | Not listed | Not listed |
| E-sign + deposit | Included in MVP | Yes | No | Yes |
| Target buyer | Solo / small crew | Small team | GC / mid-market | All trades |

**Positioning statement:** ConcreteQuote is the only estimating tool built specifically for concrete and paving contractors that works offline, generates proposals in under 10 minutes, and doesn't require a monthly subscription.

---

## Go-to-Market Strategy Reference

### Launch Sequence

| Phase | Timeline | Actions |
|-------|----------|---------|
| Beta | Weeks 1–8 | Recruit 50 beta contractors via r/concrete and r/Construction; iterate on calculator accuracy and PDF quality; collect ≥ 5 testimonials |
| AppSumo Launch | Weeks 10–12 | Submit listing; $79 LTD solo / $129 LTD team; target 500–1,500 buyers |
| Community & SEO | Ongoing | Own r/concrete conversation; target keywords: "concrete estimating software", "paving contractor quote app", "QuoteIQ alternative" |
| Supply Partnerships | Month 4+ | Approach regional ready-mix plants and HD Supply with referral program |

### Pricing Tiers

| Tier | Price | Included |
|------|-------|----------|
| Solo LTD | $79 one-time | Unlimited quotes, offline, PDF, e-sign, Stripe |
| Small Crew LTD | $129 one-time | + 3 users, shared quote history |
| Teams (MRR) | $49/month | + Unlimited users, QuickBooks sync, priority support |

---

*PRD generated autonomously from product brief and market research — 2026-06-08*
*Next step: Architecture design → `run-automvp.sh --step architecture --idea concrete-paving-estimating`*
