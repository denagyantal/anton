---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/fire-protection-inspection-software.md
  - _bmad-output/planning-artifacts/market-research-fire-inspection-software.md
  - _bmad-output/planning-artifacts/brief-fire-inspection-software.md
workflowType: 'prd'
classification:
  projectType: mobile_app
  domain: fire_protection_compliance
  complexity: medium
  projectContext: greenfield
date: '2026-05-27'
author: Root
---

# Product Requirements Document — FireTrack

**Author:** Root
**Date:** 2026-05-27
**Product:** FireTrack — Fire Inspection Software for Solo Techs & Small Shops
**Version:** 1.0

---

## Executive Summary

FireTrack is a cross-platform mobile-first SaaS application that gives solo fire protection technicians and small shops (1–5 technicians) a single tool to replace their current 4-app workflow: field inspection → certificate generation → invoicing → recurring scheduling. The product is the only solution on the market that simultaneously delivers iOS + Android native apps, pre-built NFPA 10/25/72 checklists, barcode/QR equipment scanning, auto-generated branded PDF certificates, Stripe invoicing, and offline-first operation — all under $100/month with no annual contract and no setup fee.

The US fire protection industry contains nearly 20,000 businesses. The 12,000–14,000 that are small independent shops are legally mandated to conduct recurring NFPA-compliant inspections for restaurants, schools, office buildings, and factories. Today they manage this with disconnected tools because every full-featured inspection platform either excludes Android users (Inspect Point: iOS-only, $2,616–3,816/yr), crashes in the field (InspectNTrack: iPad data-loss bugs, $1,500–2,900/yr), or is missing invoicing entirely (FireNSpec, Joyfill, Fire Inspect Hub). No product occupies the middle: full-workflow, cross-platform, sub-$100/month, built for 1–5 person shops.

**One-line pitch:** The only cross-platform (iOS + Android), sub-$100/mo fire inspection tool with barcode scanning, NFPA checklists, auto-generated PDF certificates, and invoicing — built for solo techs and 2–5 person shops.

**Revenue target:** $10,000+ MRR within 12 months via 130 monthly subscribers at $79/mo.

### What Makes This Special

FireTrack's differentiator is not any single feature — it is the complete workflow closure that no competitor achieves. Every incumbent either breaks the chain at Android support, at invoicing, at offline reliability, or at pricing. FireTrack is the first solution to close all four gaps simultaneously for the operator segment that needs it most.

The product's structural moat comes from three compounding factors:

1. **Regulatory stickiness**: Once a technician's 200+ equipment barcodes, recurring schedules, and 1,000+ inspection records are in FireTrack, switching cost is prohibitively high. Fire protection inspection data is audited by Authorities Having Jurisdiction (AHJ); losing continuity creates liability risk.
2. **Android-first positioning**: The 47% of fire protection companies still on paper forms represent operators who looked at iOS-only tools and found nothing worth buying. FireTrack's first-class Android app addresses a structural exclusion, not a preference gap.
3. **LTD pricing as acquisition moat**: At $149 lifetime vs. $2,900/yr incumbents, FireTrack converts on price alone before any feature comparison is needed.

## Project Classification

- **Project Type:** Cross-platform mobile application (React Native iOS + Android) with web admin panel
- **Domain:** Fire protection inspection compliance — regulated by NFPA standards (NFPA 10, 25, 72), enforced by local Authorities Having Jurisdiction (AHJ)
- **Complexity:** Medium — NFPA checklists are public standards with defined items; compliance output (PDF certificates) requires embedded technician credentials; offline-first data architecture adds non-trivial sync complexity
- **Project Context:** Greenfield — no existing codebase; building from scratch for a validated underserved market segment

---

## Success Criteria

### User Success

A user is successful when they complete the full inspection loop — equipment scan → NFPA checklist → PDF certificate generation → Stripe invoice sent — without leaving the app and without needing to return to the job site. This "full-loop session" is the primary unit of user value.

Specific user success indicators:

| Indicator | Target | Measurement |
|-----------|--------|-------------|
| Time-to-first-certificate | <15 minutes from sign-up | App analytics: sign-up timestamp to first PDF generated |
| Inspection completion rate | >85% of started inspections reach certificate generation | Funnel tracking: checklist started → certificate generated |
| Same-day invoicing rate | >70% of inspections invoiced same day | Invoice creation timestamp vs. inspection completion timestamp |
| Offline session rate | >25% of inspection sessions with no connectivity | Sessions where sync occurs post-completion, not during |
| Full-loop session rate | >60% of inspection sessions complete scan → checklist → certificate → invoice | Combined funnel metric |
| Android active user share | >40% of active users on Android | Device OS tracking |

**User "aha" moment:** Property manager pays a Stripe invoice within 24 hours of inspection completion. Many solo techs currently wait 3+ weeks. Getting paid same-week is the moment users convert from trial to paid.

### Business Success

**3-Month Targets:**
- 50 LTD sales ($7,450 revenue)
- 40 monthly subscribers ($3,160 MRR)
- 10+ Capterra reviews at 4.5+ average
- Android sign-up rate >40%

**12-Month Targets:**
- 300 LTD sales ($44,700 lifetime revenue)
- 130+ monthly subscribers ($10,270+ MRR)
- 50+ Capterra reviews at 4.5+ average — sufficient to rank above InspectNTrack (currently 56 reviews, 4.3/5)
- 10,000+ inspections processed (validates genuine field deployment)
- Monthly churn <5%

**Strategic threshold:** $1M ARR positions FireTrack as an acquisition candidate for ServiceTrade, Inspect Point, or PE-backed fire protection roll-up operators.

### Technical Success

- Zero data loss: No inspection record lost to sync failure or app crash (InspectNTrack's most-cited complaint is data loss during scan)
- Offline reliability: All inspection functions available with no internet connection; auto-sync on reconnect with no manual intervention required
- Android parity: Feature-complete Android app passes the same QA test suite as iOS; 0 crash sessions in a 50-inspection beta test on Android before launch
- PDF generation: Branded certificates generated in <10 seconds on device or via server with no connectivity dependency for core fields
- Stripe integration: Invoice creation-to-link generation completes in <5 seconds

### Measurable Outcomes

| Outcome | Metric | Target |
|---------|--------|--------|
| Invoicing acceleration | Average days between inspection and invoice sent | <1 day (down from industry ~14 days) |
| Revenue capture | % of completed inspections that result in a paid invoice | >80% within 30 days |
| Schedule compliance | % of active users with recurring schedules for >50% of their customers | >60% by Month 3 |
| Customer record growth | Average customer records per active user at Month 6 | >50 |
| Churn correlation | Users completing <5 inspections in 30 days | Flag as at-risk; trigger onboarding outreach |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1: Months 1–2)

The MVP delivers the complete field workflow: arrive → scan → inspect → certify → invoice → leave. Every feature below is required to close this loop. Nothing in this list is optional for launch.

**Core capabilities required at launch:**

1. **Equipment management with barcode/QR scanning** — Add customers, locations, and equipment; scan barcode or QR code to identify equipment; manual entry fallback; full inspection history per equipment item
2. **NFPA 10 inspection checklist** — Pre-built NFPA 10 checklist for portable fire extinguishers (highest-volume inspection type for the ICP); all checklist items pre-populated; pass/fail per item; deficiency logging with notes and photo attachment
3. **PDF certificate generation** — Auto-generate branded inspection certificate on completion; embed company name, logo, license number, NICET credentials; email certificate to property manager from the app; store all certificates for AHJ audit access
4. **Stripe invoicing** — Create invoice immediately after inspection; line items for inspection fee, deficiency correction, and equipment replacement; send via Stripe payment link; track payment status; invoice history per customer
5. **Offline-first sync** — All data stored locally (SQLite) and synced to cloud automatically; no manual sync button; inspect in airplane mode with automatic sync on reconnect; local version always wins in conflict resolution
6. **Customer and schedule management** — Customer and location database; manual scheduling (set next inspection date per equipment); 30-day upcoming inspection dashboard; overdue inspection alerts
7. **Cross-platform native apps** — React Native iOS (App Store) + Android (Google Play) + web admin panel; all three functional at launch; Android is QA priority
8. **Multi-technician and authentication** — Email/password + Google OAuth; up to 3 technicians per $79/mo plan; owner and technician roles; technician activities visible in web dashboard
9. **14-day free trial and Stripe billing** — Free trial, no credit card required; converts to $79/mo or $149 LTD at Day 14; 7-day grace period on failed payment

### Growth Features (Post-MVP, Phase 2: Months 4–6)

- NFPA 25 (sprinkler) and NFPA 72 (fire alarm) checklists — extends TAM and ARPU for current users
- Recurring inspection auto-scheduler — auto-creates next annual/semi-annual visit on completion; sends reminders 30 days before due to operator and property manager
- Customer portal — property managers self-serve compliance documents and inspection history
- Photo documentation — attach field photos to deficiency items for insurance carrier requirements
- Compliance Engine CSV export — enables AHJ digital submission; creates premium upsell tier

### Vision (Phase 3: Months 7–12 and Beyond)

- GPS-verified inspections (insurance carrier compliance requirement)
- Multi-tech team management (5–20 technicians, custom roles)
- QuickBooks/Xero two-way sync
- Bulk import from InspectNTrack and Inspect Point (reduces switching friction)
- NFPA 96 (kitchen hood suppression) and NFPA 101 (emergency lighting) checklists — adjacent verticals with same customer base
- International markets (UK, Australia, Canada)
- Marketplace: property managers post RFQs; certified fire inspectors bid; FireTrack takes transaction fee

---

## User Journeys

### Journey 1: Marcus — Solo Operator, First Inspection (Success Path)

**Background:** Marcus, 38, licensed NICET Level II technician, one-person shop in Ohio. 200–250 commercial inspections/year. Android user (Samsung Galaxy). Currently uses paper forms + QuickBooks Self-Employed + Google Calendar + Word templates. Batches invoicing weekly, loses $800–1,200/month in delayed billing.

**Discovery:** Marcus searches "fire inspection app Android" after his third InspectNTrack crash. He finds FireTrack via Capterra (4.8 stars, "finally works on Android") or a post in the Facebook "Fire Extinguisher Service Technicians" group. Clicks the landing page, sees "works on Android, includes invoicing" above the fold. Signs up for the 14-day free trial without reading further.

**Onboarding (Day 1):**
1. Downloads Android app, creates account via Google OAuth
2. Adds first customer: "ABC Restaurant, 123 Main St, John Smith property manager"
3. Arrives at ABC Restaurant; opens FireTrack; taps "New Inspection"
4. Scans the barcode on a wall-mounted ABC fire extinguisher — equipment identified automatically
5. NFPA 10 checklist opens with all items pre-populated; Marcus taps pass/fail per item in 4 minutes
6. Taps "Generate Certificate" — branded PDF with his license number appears
7. Taps "Email to Customer" — certificate sent to John Smith
8. Taps "Create Invoice" — $85 inspection fee; sends Stripe payment link to John Smith
9. Entire process: 8 minutes from parking lot to invoice sent

**Aha Moment (Day 2):** John Smith pays the $85 invoice via Stripe's credit card link. Marcus has never been paid same-week for an inspection. He converts to paid plan immediately.

**Core Usage (Month 1–3):** Marcus uses FireTrack for every inspection. Monthly invoicing backlog disappears within 60 days. He starts the recurring scheduler and notices overdue visits he had forgotten.

**Retention (Month 12):** Marcus has 240 customer records, 1,100 inspection reports, and recurring schedules for all 240 properties. Switching cost is now prohibitive — every customer's history, every barcode, every certificate lives in FireTrack.

**Journey Requirements Revealed:** Barcode scanning, NFPA 10 checklist, PDF generation, Stripe invoicing, same-session full-loop capability, offline operation, customer/location database, recurring scheduling.

---

### Journey 2: Marcus — Inspection in Dead Zone (Offline Edge Case)

**Situation:** Marcus arrives at a large food processing facility. The basement equipment room has no cell signal — standard for industrial basements and mechanical rooms.

**Journey:**
1. Marcus opens FireTrack before descending — app preloads customer data
2. In the basement with zero signal, Marcus scans 12 extinguisher barcodes — each resolves from local SQLite cache
3. Completes all 12 NFPA 10 checklists offline; marks 2 deficiencies with notes
4. Returns to truck; app auto-syncs in background; no manual action required
5. PDF certificates generate from synced data; Marcus emails all 12 at once
6. Creates invoice for 12 inspections + 2 deficiency service calls
7. Drives to next job

**Critical requirements revealed:** Offline-first architecture, local SQLite storage of equipment data, automatic background sync on reconnect, offline checklist completion, batch certificate generation, no data loss under any connectivity scenario.

---

### Journey 3: Denise — Small Shop Owner, Team Evaluation and Adoption

**Background:** Denise, 45, owns a 3-technician fire protection company in Texas. 600–800 property inspections/year across extinguishers, sprinklers, and kitchen suppression. Currently paying $2,900/yr for InspectNTrack licenses. Her team complains about iPad crashes and manual sync. One technician left for an iPhone-only competitor.

**Discovery:** Denise hears about FireTrack from a NAFED newsletter while actively evaluating InspectNTrack renewal. Key criteria: Android support, invoicing included, month-to-month cancellation.

**Evaluation:**
1. Denise starts a team trial; imports customer list via CSV
2. Assigns three technicians; each downloads the Android app and runs a test inspection in 10 minutes
3. No iPad required — each tech uses their personal Android phone
4. Denise reviews web dashboard: can see all technician activity in real-time

**Adoption:**
1. Team adopts within one week — primarily because Android works natively and there's no manual sync
2. End of Month 1: Denise reconciles revenue; team invoiced 23% faster; no missed invoices; certificates going out same-day

**Switching Trigger:** InspectNTrack contract renewal price vs. FireTrack's $79/month with no contract. Denise switches and cancels InspectNTrack.

**Journey Requirements Revealed:** CSV import for customer list, multi-technician account (up to 3), web admin dashboard showing all technician activity, owner-level reporting, team role differentiation.

---

### Journey 4: Property Manager — Receiving Compliance Documentation

**Background:** Sarah, 52, manages a 12-building commercial portfolio. She doesn't use FireTrack directly. Her fire inspection contractor (Marcus) uses it.

**Journey:**
1. Marcus completes annual inspection at one of Sarah's buildings
2. Sarah receives branded PDF certificate via email within minutes of inspection completion — not 3–5 days later
3. PDF includes: equipment inspected, NFPA 10 checklist results, deficiencies noted, Marcus's NICET credentials, inspection date, technician signature
4. Sarah saves PDF to her compliance folder for AHJ audit
5. Sarah receives the Stripe invoice and pays online — no check required
6. (Phase 2) Sarah logs into the FireTrack customer portal to pull 3-year inspection history for a lease renewal documentation request

**Journey Requirements Revealed:** Professional branded PDF output with all compliance fields, email delivery from within app, Stripe payment link for property manager, (Phase 2) customer portal with inspection history, AHJ-grade documentation with technician credentials embedded.

---

### Journey 5: Account Owner — Monitoring and Administration

**Background:** Denise (from Journey 3) checking her web dashboard at end of day.

**Journey:**
1. Logs into web admin panel on laptop
2. Reviews today's activity: 3 technicians completed 14 inspections; 11 invoices sent; 3 outstanding
3. Sees 2 upcoming inspections overdue for customer sites — sends reminder to responsible technician
4. Reviews monthly revenue dashboard: $4,200 invoiced this week, $3,100 paid
5. Exports inspection report for end-of-quarter compliance review

**Journey Requirements Revealed:** Web admin panel (not just mobile), activity feed by technician, invoice status tracking, overdue inspection alerts, monthly revenue summary, report export.

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|-------------|
| Barcode/QR equipment scanning | Journey 1, 2 |
| NFPA 10 pre-built checklist | Journey 1, 2 |
| Offline inspection with auto-sync | Journey 2 |
| PDF certificate with compliance fields | Journey 1, 4 |
| Stripe invoice creation and payment link | Journey 1, 3, 4 |
| Multi-technician with owner dashboard | Journey 3, 5 |
| Customer/location database with CSV import | Journey 3 |
| Recurring inspection scheduler | Journey 1 |
| Web admin panel | Journey 5 |
| Role-based access (owner vs. technician) | Journey 3, 5 |
| Overdue inspection alerts | Journey 5 |

---

## Domain-Specific Requirements

### Compliance and Regulatory

Fire protection inspection is a regulated activity governed by NFPA (National Fire Protection Association) standards, enforced by local Authorities Having Jurisdiction (AHJ):

- **NFPA 10** (portable fire extinguishers) — MVP launch; defines inspection intervals (monthly visual, annual maintenance, 6-year internal inspection, 12-year hydrostatic test) and all checklist items
- **NFPA 25** (water-based fire suppression systems) — Phase 2; governs sprinkler inspection requirements
- **NFPA 72** (fire alarm and signaling systems) — Phase 2; governs fire alarm inspection requirements
- **NFPA 96** (commercial cooking equipment suppression) — Phase 3 adjacent vertical

**AHJ documentation requirements:** Inspection certificates must include technician name, license number, NICET certification level, inspection date, equipment identification, checklist results, deficiencies noted, and pass/fail determination. FireTrack's PDF output must satisfy these fields for any AHJ in the US.

**Technician licensing:** Fire protection technicians hold state-level licenses and NICET certifications. FireTrack must allow technicians to store and embed their license number and NICET level in all generated certificates.

**Inspection frequency:** NFPA 10 annual inspections create the recurring scheduling requirement. Most equipment requires annual inspection; some requires semi-annual or monthly visual checks. FireTrack's scheduler must support all three intervals.

### Technical Constraints

- **Offline operation is non-negotiable**: Fire suppression equipment is installed in basements, mechanical rooms, rooftops, and vaults — environments routinely without cellular coverage. Any feature that requires internet connectivity during inspection execution will fail in the field.
- **Data integrity**: Inspection records are legal documents in the context of AHJ compliance and insurance claims. No record may be partially written, corrupted, or silently lost. The SQLite local store is the authoritative source; cloud sync is a backup, not the primary.
- **PDF fidelity**: Generated PDFs must be visually consistent across devices and platforms. A certificate generated on an Android phone must look identical to one generated on an iPhone or via the web.
- **No vendor lock-in for customers**: Operators who leave FireTrack must be able to export their complete inspection history. Data portability is a trust requirement for the ICP, not a regulatory mandate.

### Integration Requirements

- **Stripe** (payments): Subscription billing, LTD one-time payment, and per-inspection invoice creation with Stripe payment links. No other payment processor is needed at launch.
- **Supabase** (backend): PostgreSQL database, auth, realtime sync, and file storage. Self-hosted or Supabase cloud.
- **Email delivery**: Certificate and invoice delivery via transactional email (Resend or SendGrid). No in-app email client; FireTrack generates the content and routes through the provider.
- **App stores**: Apple App Store and Google Play Store. Both must be approved and live at launch.

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| AHJ rejecting FireTrack certificates | Validate PDF format against NFPA 10 requirements before launch; offer customizable certificate templates in Phase 2 |
| Android QA quality at launch | Android-first QA protocol; 0 crash sessions required in 50-inspection beta test before release |
| Data loss during sync failure | Local SQLite is authoritative; cloud sync is append-only with conflict resolution (local wins); sync failure never deletes local data |
| Barcode scan failure on old/damaged labels | Manual entry fallback on every scan screen; barcode is optional identifier, not required |

---

## Mobile App Specific Requirements

### Platform Requirements

- **iOS:** Minimum iOS 16; support for iPhone and iPad; App Store distribution; TestFlight for beta
- **Android:** Minimum Android 10 (API 29); support for all major Android phone manufacturers (Samsung, Google, Motorola, OnePlus); Google Play distribution; internal test track for beta
- **Web admin panel:** Desktop-optimized (1024px+ viewport); Chrome, Firefox, Safari, Edge; no mobile-first requirement for admin panel (field work is mobile; admin is desktop)

### Device Capabilities Required

- **Camera/barcode scanner:** Camera access for barcode and QR code scanning (expo-barcode-scanner or React Native Camera); must work in low-light equipment rooms
- **File system:** Local SQLite database for offline storage; document directory for PDF caching and certificate storage
- **Push notifications:** For overdue inspection alerts and sync completion notifications (Expo Notifications)
- **Background sync:** Ability to sync data to cloud when app is backgrounded after returning to connectivity
- **Email composition:** Native share sheet or mailto intent to send PDF certificates from device email client

### Offline Architecture

**Data stored locally (always available offline):**
- All customer and location records
- All equipment records and associated barcodes
- All NFPA checklist templates and item definitions
- All in-progress and completed inspection data
- All generated PDF certificates (cached locally after generation)
- Pending invoices not yet confirmed by Stripe

**Data requiring connectivity:**
- PDF generation via server-side renderer (fallback: client-side PDF generation)
- Stripe invoice creation and payment link generation
- Cloud sync and multi-device data sharing
- Push notifications

**Sync conflict resolution:**
- Local SQLite is the authoritative source for all in-progress and recently completed inspections
- Cloud sync is append-only for completed inspections
- Conflict scenario: If inspection completed offline and another technician modified the same record, local version wins and a conflict flag is created for owner review
- No silent data merging; all conflicts surfaced to owner in web dashboard

### Technical Architecture Considerations

- **Framework:** React Native with Expo managed workflow — enables single codebase for iOS and Android, Expo's barcode scanner and notifications, OTA updates
- **State management:** React Query for server state; Zustand or Redux Toolkit for local UI state; SQLite via expo-sqlite for persistent offline state
- **Backend:** Supabase (PostgreSQL + Auth + Realtime + Storage); chosen for offline sync support via Supabase Realtime and row-level security for multi-tenancy
- **PDF generation:** Server-side Puppeteer for PDF rendering (Supabase Edge Function); fallback to react-native-html-to-pdf for fully offline certificates
- **Payments:** Stripe SDK for React Native (subscription billing) + Stripe API for invoice/payment link generation

### Implementation Considerations

- React Native (Expo) enables a single developer to target both iOS and Android, reducing build-time risk
- Expo's managed workflow provides OTA (over-the-air) update capability — critical for fixing field bugs without App Store review delays
- SQLite schema must be designed for forward-compatibility from the start — adding NFPA 25 and 72 tables in Phase 2 requires schema migration support
- Multi-tenancy in Supabase implemented via Row Level Security (RLS) — each technician can only read/write records belonging to their account
- Stripe subscription webhooks must be idempotent; subscription status changes must be handled gracefully (payment failure → grace period → account lock)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the product must deliver the complete field workflow end-to-end, not just one capability. A solo tech who can scan, inspect, certify, and invoice without leaving the app has experienced the full value proposition. A partial MVP (inspection only, no invoicing) would not differentiate FireTrack from the existing sub-$50/mo competition.

**Resource Requirements:** 1 React Native developer (mobile + web admin) + 1 backend developer (Supabase, Stripe, PDF generation). 4–5 week build timeline for Phase 1 MVP. Android must be QA-complete before iOS submission to ensure parity.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus's first-inspection success path (Journey 1)
- Offline inspection in dead zone (Journey 2)
- Property manager receives certificate and pays invoice (Journey 4)
- Account owner monitors activity via web dashboard (Journey 5)

**Must-Have Capabilities:**
1. Customer, location, and equipment database with barcode scanning
2. NFPA 10 pre-built checklist (all items; deficiency logging with notes)
3. Branded PDF certificate generation with compliance fields
4. Stripe invoicing with payment link
5. Offline-first SQLite with automatic cloud sync
6. Manual inspection scheduling with 30-day dashboard and overdue alerts
7. React Native iOS + Android apps + web admin panel
8. Up to 3 technicians per account with owner/technician roles
9. 14-day free trial + Stripe subscription billing ($79/mo) + LTD ($149)

**Explicitly Deferred to Phase 2:**
- NFPA 25 and 72 checklists
- Recurring auto-scheduler (manual scheduling sufficient for validation)
- Customer portal for property managers
- Photo documentation on deficiencies
- Compliance Engine CSV export
- QuickBooks/Xero integration
- Team management for 5+ technicians

### Post-MVP Features (Phase 2 and 3)

**Phase 2 (Months 4–6) — Complete the Workflow:**
- NFPA 25 and 72 checklists
- Recurring inspection auto-scheduler with customer reminders
- Customer portal (property manager self-service)
- Photo documentation on deficiencies
- Compliance Engine CSV export (premium tier unlock)
- Monthly team (5–8 techs) at $129/month

**Phase 3 (Months 7–12) — Premium and Enterprise:**
- GPS-verified inspections with timestamps
- Advanced reporting (annual summaries for property managers; productivity by technician)
- Multi-tech team management (5–20, custom roles)
- QuickBooks/Xero two-way sync
- Bulk import from InspectNTrack and Inspect Point
- AHJ direct digital submission (participating jurisdictions)

### Risk Mitigation Strategy

**Technical Risks:**
- *Offline sync complexity:* Mitigated by using Supabase Realtime with proven conflict resolution patterns; SQLite-as-authoritative-source eliminates the most common failure mode (server overwriting local)
- *Android PDF rendering inconsistency:* Mitigated by server-side PDF generation as primary path; client-side generation is fallback only for offline scenarios

**Market Risks:**
- *Fire Inspect Hub execution:* FireTrack's native mobile + barcode + invoicing combination is a 6–12 month development lead; Fire Inspect Hub is currently web-only with no barcode scanning or invoicing
- *Small TAM ceiling:* Accepted as a niche SaaS; adjacent verticals (NFPA 25, 72, 96, 101) expand TAM organically from the same customer base

**Resource Risks:**
- *Single-developer dependency:* Expo managed workflow reduces platform-specific code; Supabase reduces backend surface area; the MVP can be maintained by one developer if needed
- *App store review delays:* Submit Android first (faster review); TestFlight/internal test track for iOS to validate before public submission

---

## Functional Requirements

### Customer and Equipment Management

- FR1: Technician can create a customer record with name, address, and primary contact
- FR2: Technician can add multiple locations (buildings) to a customer record
- FR3: Technician can add equipment items to a location with type, serial number, and installation date
- FR4: Technician can scan a barcode or QR code to identify and retrieve an equipment record
- FR5: Technician can manually enter equipment identification when no barcode is available
- FR6: Technician can view complete inspection history for any individual equipment item
- FR7: Account owner can import customers and locations from a CSV file
- FR8: Technician can search for customers and equipment by name, address, or barcode

### Inspection Execution

- FR9: Technician can start a new inspection for any equipment item at any location
- FR10: Technician can complete an NFPA 10 pre-built checklist with pass/fail selection per item
- FR11: Technician can log a deficiency on any checklist item with notes
- FR12: Technician can attach a photo to any deficiency item
- FR13: Technician can complete all inspection functions without internet connectivity
- FR14: App automatically syncs all completed inspection data to cloud when connectivity is restored
- FR15: Technician can view the status of pending sync operations
- FR16: Technician can access any previously synced customer and equipment record offline

### Certificate Generation and Delivery

- FR17: Technician can generate a branded PDF inspection certificate upon checklist completion
- FR18: Certificate includes: company name, company logo, technician name, license number, NICET certification level, inspection date, equipment details, checklist results, deficiencies noted, and pass/fail determination
- FR19: Technician can email a PDF certificate to any contact from within the app
- FR20: Technician can view and download any previously generated certificate
- FR21: All certificates are stored and accessible for AHJ audit purposes
- FR22: Account owner can configure company name, logo, and technician credentials embedded in certificates

### Invoicing and Payments

- FR23: Technician can create an invoice immediately after completing an inspection
- FR24: Invoice supports multiple line items (inspection fee, deficiency service, equipment replacement)
- FR25: Technician can send an invoice via Stripe payment link to any contact (email or SMS)
- FR26: Technician can view payment status for all sent invoices (pending, paid, overdue)
- FR27: Account owner can view complete invoice history by customer, technician, and date range
- FR28: Account owner can create an invoice independent of an inspection session

### Scheduling and Alerts

- FR29: Technician can set a next inspection date for any equipment item
- FR30: Account owner and technician can view all inspections due within the next 30 days
- FR31: App surfaces overdue inspections (past scheduled date) prominently in dashboard
- FR32: System sends push notification for inspections due within 7 days (if notifications enabled)

### Multi-Technician and Account Management

- FR33: Account owner can invite up to 2 additional technicians (3 total on $79/mo plan)
- FR34: Technicians can only access customers and equipment assigned to or created by them (or all, per owner configuration)
- FR35: Account owner can view all inspection and invoice activity across all technicians in the web dashboard
- FR36: Account owner can configure company profile, certificate branding, and billing settings
- FR37: Technicians have field-level access only; cannot access billing or account configuration
- FR38: Account owner can deactivate a technician account without losing historical data

### Subscription and Trial Management

- FR39: New users can sign up for a 14-day free trial without providing a credit card
- FR40: Users can select the $79/month subscription or $149 LTD plan at trial end
- FR41: Stripe manages all subscription billing, upgrades, and cancellations
- FR42: Account remains accessible for 7 days after payment failure before locking
- FR43: Account owner can cancel the monthly subscription at any time without penalty

### Web Admin Panel

- FR44: Account owner can view a dashboard of today's inspection activity across all technicians
- FR45: Account owner can access all customer records, equipment, certificates, and invoices via web browser
- FR46: Account owner can export inspection reports and invoice summaries as CSV or PDF
- FR47: Account owner can manage technician accounts, invite new technicians, and deactivate existing ones

---

## Non-Functional Requirements

### Performance

- All checklist screens load in <2 seconds on a 4G connection and <3 seconds on 3G
- Barcode scan-to-equipment-identification completes in <1.5 seconds
- PDF certificate generation completes in <10 seconds (server-side) or <20 seconds (offline/client-side fallback)
- Stripe invoice creation-to-payment-link generation completes in <5 seconds
- App cold start (launch to usable state) completes in <4 seconds on mid-range Android devices (e.g., Samsung Galaxy A series)
- Offline inspection workflows (checklist, deficiency logging) have no perceptible latency — all operations are against local SQLite

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256 via Supabase/PostgreSQL encryption)
- Supabase Row Level Security (RLS) enforced at database level — technicians cannot read or write data belonging to other accounts under any circumstances
- Authentication via Supabase Auth (email/password with bcrypt hashing; Google OAuth); no passwords stored in plaintext anywhere in the stack
- Stripe handles all payment card data; FireTrack stores no card numbers, CVVs, or bank account details
- PDF certificates contain technician's license number and NICET credentials — these are sensitive professional credentials and must not be accessible to other users or exposed in API responses
- App sessions expire after 30 days of inactivity; refresh tokens are rotated on use

### Reliability

- Target 99.5% monthly uptime for the cloud backend (Supabase cloud SLA)
- Offline-first architecture means field inspection functionality is available regardless of backend uptime
- Stripe webhook handlers are idempotent — duplicate webhook events do not create duplicate invoices or subscription state changes
- Database backups: Supabase provides automated daily backups; point-in-time recovery available
- Zero-downtime deployments required for production — inspection records in-flight must not be lost during server updates

### Scalability

- System must support 500 concurrent active users in the first 12 months without degradation (growth plan: 400 monthly actives by Month 12)
- Database schema designed for multi-tenant growth — adding new accounts does not require schema changes; new checklist types (NFPA 25, 72) added via configuration tables, not code changes
- PDF generation infrastructure (Supabase Edge Functions) must auto-scale; a spike in certificate generation (e.g., after a trade show where 50 new users onboard same day) must not queue certificates

### Integration Reliability

- Stripe webhook processing: 99.9% delivery guaranteed by Stripe; FireTrack's webhook handler must be idempotent and retry-safe
- Email delivery (Resend/SendGrid): Transactional emails (certificates, invoices) delivered within 60 seconds under normal load; bounce handling tracked and surfaced to account owner
- App store compliance: App must comply with Apple App Store Review Guidelines and Google Play Developer Policy continuously; no features that risk rejection (e.g., alternative payment systems that bypass App Store billing for subscriptions)

---

## Go-to-Market Strategy (for downstream planning)

### Pricing at Launch

| Tier | Price | Terms | Capacity |
|------|-------|-------|----------|
| LTD Solo | $149 one-time | Lifetime | Up to 2 technicians |
| LTD Team | $249 one-time | Lifetime | Up to 5 technicians |
| Monthly | $79/month | Month-to-month | Up to 3 technicians |
| Monthly Team | $129/month | Month-to-month | Up to 8 technicians |

### Priority Channels

1. Facebook "Fire Extinguisher Service Technicians" (~5,000 members) — Tier 1; peer trust
2. r/FireProtection (~20,000 readers) — Tier 1; high intent
3. NAFED (National Association of Fire Equipment Distributors) newsletter and conference — Tier 1; exact ICP
4. Capterra/G2 organic — Tier 1; high-intent buyers
5. Google Ads ("fire inspection software Android", "InspectNTrack alternative") — Tier 2
6. LinkedIn fire protection community — Tier 2
7. AppSumo — Tier 3 (post own-site LTD launch only)

### Beta Recruitment (Pre-Launch)

Recruit 15–20 beta users from r/FireProtection and Facebook groups. Offer free lifetime access in exchange for weekly feedback calls and Capterra/G2 reviews at launch. Core validation: Android barcode scan + NFPA 10 checklist + PDF certificate + Stripe invoice — all in one session without bugs.

---

## Technical Stack Reference

This section summarizes the architecture established in the product brief for downstream architecture and development work:

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Mobile | React Native (Expo managed) | Single codebase for iOS + Android; Expo barcode scanner; OTA updates |
| Offline storage | SQLite (expo-sqlite) | Native local DB; battle-tested for offline-first mobile |
| Backend | Supabase | PostgreSQL + Auth + Realtime + Storage + Edge Functions; built-in RLS |
| PDF generation | Supabase Edge Function (Puppeteer) + react-native-html-to-pdf fallback | Server-side for quality; client-side for fully offline scenarios |
| Payments | Stripe | Subscriptions, LTD one-time, invoice payment links |
| Email delivery | Resend or SendGrid | Transactional emails for certificates and invoices |
| Web admin panel | Next.js (or React + Vite) hosted on Vercel | Desktop admin for account owners |
| File storage | Supabase Storage | PDF certificate storage; field photos (Phase 2) |

**Domain/branding:** FireTrack.io or GetFireTrack.com (verify availability before launch)

**Build timeline estimate:** 4–5 weeks for MVP with 1 React Native developer + 1 backend developer. NFPA 10 only at launch; NFPA 25 and 72 in Phase 2 sprint.

---

*PRD complete. Next steps: Architecture design → Epics & Stories → Sprint Planning → Story Creation → Development.*
