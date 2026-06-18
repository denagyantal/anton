---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/towing-dispatch-software.md
  - _bmad-output/planning-artifacts/research/towing-dispatch-market-research.md
  - _bmad-output/planning-artifacts/product-brief-towing-dispatch.md
workflowType: 'prd'
classification:
  projectType: mobile_app
  domain: field_service_dispatch
  complexity: medium
  projectContext: greenfield
date: '2026-06-18'
author: Root
project_name: 'TowDash — Towing Dispatch Software'
---

# Product Requirements Document — TowDash: Towing Dispatch Software

**Author:** Root
**Date:** 2026-06-18

## Executive Summary

The US towing industry generates $11.8–$12.8B annually across 50,000+ companies, 74% of which run fewer than 10 trucks. This majority segment — independent and small-fleet operators — is systematically underserved by a software market built around desktop-first tools and per-call pricing. Towbook, the category leader at $109–$429/month, is documented to freeze under high call volume and runs a mobile app that is a port of its desktop product, not a native experience. No full-featured, mobile-native, flat-rate dispatch tool exists below $100/month.

**TowDash** fills this gap: a native iOS and Android dispatch platform built for the truck cab. The core workflow — job creation, GPS dispatch, liability photo documentation, digital signature, Stripe invoice, payment collection — runs entirely from a phone and operates offline in low-signal areas. Flat-rate pricing ($39/month for 1–2 drivers, $49/month for 3–5 drivers) eliminates the volume-overage anxiety that is Towbook's most-cited complaint. Launch via Lifetime Deal ($99–$149) to seed an initial user base of 300–500 operators; transition to SaaS MRR for sustained growth.

**Target users:** Independent tow operators and small fleet owners (1–5 trucks) who dispatch from their vehicles, use their personal camera roll for vehicle photos, and reconcile billing on paper or in spreadsheets — operators who need a professional dispatch-to-payment workflow that runs entirely on their phone.

### What Makes This Special

**Liability photo documentation as a first-class feature.** No tool under $100/month provides job-linked, timestamped, GPS-embedded pre/post-tow photos with digital customer signature capture. Damage disputes are the single most financially painful event an independent operator faces — a single claim can exceed months of software fees. TowDash makes every job defensible with a photo packet that is court-presentable from the moment it is generated.

**Native mobile-first architecture that does not degrade.** TowDash is built for the truck cab, not adapted from a desktop tool. The offline-first design queues data when connectivity drops — critical in rural areas and tunnels — and syncs automatically on reconnection. Performance does not degrade under high call volume because there is no server-side bottleneck for core job operations.

**Flat-rate, predictable pricing.** One number on the invoice every month, regardless of call volume. This single property eliminates the primary switching cost from Towbook for active operators.

## Project Classification

- **Project Type:** Mobile App (iOS + Android native) with lightweight web dashboard for reporting
- **Domain:** Field service dispatch / transportation (low compliance burden; no regulated data)
- **Complexity:** Medium — real-time GPS, Stripe payment processing, offline-first sync, and photo storage add meaningful technical complexity, but no regulatory compliance layer
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Time to create a job from the truck cab:** 80%+ of jobs created in under 60 seconds (measured via in-app job creation timer, p75)
- **Onboarding completion:** 75%+ of trial users complete a full job lifecycle (create → document → invoice → paid) within their first 7 days
- **Photo documentation adoption:** ≥ 80% of closed jobs have at least one pre-tow photo attached within 30 days of launch
- **Invoice-to-payment cycle:** ≥ 60% of invoices paid digitally (via Stripe) within 24 hours of invoice send
- **Damage dispute resolution:** Operators self-report successful dispute resolution citing TowDash photo documentation (tracked via quarterly NPS survey + support ticket tags)
- **Towbook import success rate:** ≥ 90% of operators who attempt Towbook import complete it in under 15 minutes with no data loss

### Business Success

- **Month 3:** 150 paying accounts (LTD or MRR); NPS ≥ 40; monthly churn < 5%; $10K+ MRR equivalent
- **Month 6:** 400 paying accounts; 25+ verified reviews on G2, Capterra, or SoftwareAdvice; $18K+ MRR; payment processing revenue $2K–$4K/month
- **Month 12:** 800 paying accounts; $35K+ MRR; Towbook-to-TowDash migration established as a tracked acquisition channel; motor club API integration (Agero Swoop) live in v1.1
- **Trial-to-paid conversion:** ≥ 25% within 30 days

### Technical Success

- **Job creation performance:** Core app actions (create job, attach photos, send invoice) complete within 2 seconds on supported mid-range devices
- **Offline reliability:** 99.9%+ of offline-created records sync successfully with zero data loss on reconnection
- **Photo storage integrity:** Zero photo loss in production (photos are the product's core liability feature — loss is a P0)
- **Payment processing uptime:** Stripe integration achieves 99.9% availability; failed payments surface actionable error states within 10 seconds
- **App store ratings:** 4.5+ stars on both iOS App Store and Google Play Store within 60 days of launch

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Paying accounts | 150 | 400 | 800 |
| Monthly churn rate | < 5% | < 4% | < 3% |
| MRR (SaaS) | $4,000 | $18,000 | $35,000 |
| Payment processing revenue | $500 | $2,000 | $4,000 |
| NPS | ≥ 35 | ≥ 45 | ≥ 50 |
| Verified reviews (G2/Capterra) | 10 | 25 | 50 |
| Photo docs per job (avg) | ≥ 3 | ≥ 4 | ≥ 5 |
| Trial-to-paid conversion | ≥ 25% | ≥ 28% | ≥ 30% |
| Average jobs per account/month | ≥ 20 | ≥ 25 | ≥ 30 |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers a complete dispatch-to-payment workflow that works natively on a phone. The guiding constraint: every feature must be usable one-handed from the truck cab.

**Core capabilities:**

1. **Job Management** — One-tap job creation (customer, vehicle, job type, GPS location); job status lifecycle (Created → En Route → On Scene → In Tow → Delivered → Invoiced → Paid); customer lookup with auto-fill for returning customers; free-text notes per job
2. **Liability Photo Documentation** — In-app camera workflow triggered at "On Scene"; pre-tow and post-tow photo capture; GPS tag + timestamp embedded in job record (not device camera roll); digital customer signature capture; PDF job packet export (photos + signature + job details)
3. **GPS Dispatch** — Driver live location on map for multi-driver accounts; ETA calculation to pickup; automated SMS to customer on job creation ("Your tow is on the way — ETA [X] minutes") and on arrival
4. **Motor Club Job Logging** — Structured log for AAA, Agero, Quest jobs: motor club name, PO/reference number, job type, rate; separates motor club from cash calls in reports; no API integration in MVP (structured entry eliminates paper double-entry)
5. **Invoicing & Payments** — One-tap invoice generation at job completion; line items (base rate, mileage, extras); Stripe card-present (tap-to-pay via NFC) and manual card entry; cash job logging; invoice PDF via email or SMS to customer
6. **Reporting** — Monthly summary (total jobs, revenue, job type breakdown, payment method split); motor club vs. cash split; CSV export for accountant
7. **Account & Multi-Driver** — Account owner + up to 4 driver sub-accounts; drivers see assigned jobs only, owner sees all; owner dispatches jobs to specific drivers; each driver has independent mobile login
8. **Onboarding** — Towbook import wizard (CSV from Towbook → customer list + job history); 14-day free trial (no credit card required); in-app onboarding checklist

### Growth Features (Post-MVP)

- Agero Swoop API integration — digital motor club job acceptance replaces phone-call workflow
- Impound lot management — auto-accruing daily storage fees, owner notification tracking, lien workflow templates
- Driver paysheet — per-call or per-day commission calculation and export
- Full web admin dashboard (reporting, CRM, job management from browser)
- Private property towing module — consent towing photo log, violation documentation, owner notification workflow
- QuickBooks two-way sync (CSV export satisfies MVP requirement; full sync is post-MVP)
- Customer portal — customers view job status, photos, invoices, and pay online

### Vision (Future)

- Operator marketplace — operators in the same metro refer overflow jobs to each other through TowDash
- EV towing specialization — certified EV documentation workflow (battery safety, flatbed-only logs)
- Insurance integration — direct photo documentation export to insurance claim systems (Verisk, Mitchell)
- Enterprise tier (6–20 trucks) — bulk driver management, advanced route optimization, PO-based billing
- AAA membership verification at scene
- Fleet maintenance tracking (preventive maintenance, DOT inspection records)

## User Journeys

### Journey 1: Marcus — The Solo Operator's Aha Moment

**Opening Scene:** Marcus runs a one-truck operation in a mid-size metro. He's on a job, it's 11 PM, and a customer at the delivery location is claiming he scratched their door. Marcus has nothing — his phone's camera roll has 10,000 photos going back three years, and the shots from tonight's job are buried somewhere in there with no timestamps, no GPS data, no chain of custody. He eats the $800 repair cost because fighting it costs more. He posts in his towing Facebook group: "Does anyone have a way to document pre-tow damage that actually holds up?" Someone replies: "TowDash. I've won three disputes with it."

**Rising Action:** Marcus signs up for the 14-day trial. He imports his Towbook customer list using the import wizard — it takes 9 minutes. Sets up his Stripe account with four taps. Does one test job: creates it, attaches six sample photos, "invoices" himself, and sees the PDF job packet with timestamps and GPS coordinates for each photo. Total setup: 22 minutes.

**Climax:** Two weeks later, a customer calls claiming Marcus damaged their rear bumper. Marcus opens TowDash, pulls up the job, and shows the customer the pre-tow photo packet — six timestamped, GPS-tagged photos of every panel including the rear bumper, captured before the vehicle was ever touched, with the customer's digital signature on the documentation form. The customer drops the claim in three minutes. Marcus calls this "the moment TowDash paid for itself for the next decade."

**Resolution:** Marcus converts to a paid account. He posts about the dispute resolution in the same Facebook group where he found TowDash. Two of his contacts sign up the next week from his referral link.

### Journey 2: Donna — Dispatching Four Trucks, One Phone

**Opening Scene:** Donna manages a 4-truck family operation. She dispatches from home but drives herself on busy nights. Her three drivers run Android phones; she runs an iPhone. They're on Towbook Professional at $209/month, but last month's invoice was $350 because they ran 1,100 calls and crossed the overage threshold. She also can't reliably see where her drivers are — Towbook's GPS "just isn't that great." One of her drivers forgot to photograph a BMW before hooking up and now there's a dispute she can't defend.

**Rising Action:** Donna signs up for TowDash and starts a trial. She creates accounts for each of her three drivers — the $49/month flat rate covers all four of them. She opens the dispatch map on her phone and sees all four trucks as live dots. She assigns a new inbound job to her driver Tomas — he gets a push notification with the pickup address and taps "Accept." She watches his dot move toward the pickup.

**Climax:** Busy Friday night — 60 calls by midnight. Donna's phone hasn't crashed. She dispatches from her couch, sees all four drivers in real-time, and at 2 AM opens the monthly summary: 60 jobs, $4,200 in revenue, 12 motor club calls, 48 cash calls. One-click CSV export goes to her accountant. Invoice from TowDash: $49. Invoice from Towbook last month: $350. Donna cancels Towbook on Saturday morning.

**Resolution:** Donna's drivers start photographing every vehicle because the app makes it automatic — the workflow prompts them at "On Scene." Three months later she has not lost a single damage dispute. She becomes a vocal TowDash advocate at her state towing association meeting.

### Journey 3: Marcus Edge Case — Offline on a Rural Highway

**Opening Scene:** Marcus gets a motor club call on Route 7 — a stretch with no cell service for 6 miles. He's 3 miles in, the job is assigned, and his phone shows No Signal.

**Rising Action:** Marcus opens TowDash. The app is in offline mode. He creates the job, enters the motor club reference number and vehicle details, drives to the scene, and runs through his full documentation workflow: pre-tow photos, customer signature, job notes. The app accepts every action. He hooks up the vehicle and drives out of the dead zone.

**Climax:** The moment Marcus's phone reconnects, TowDash syncs: job record, six photos, signature, GPS metadata, motor club reference. The customer's automated SMS ("Your tow has arrived") sends 40 seconds after reconnection. Marcus invoices from the delivery location. Everything is in his account as if he had full service the whole time.

**Resolution:** Marcus mentions this in a Facebook comment. Another operator asks: "Does it actually work offline or is it just a checkbox?" Marcus: "I use it offline two or three times a week. It works."

### Journey 4: Insurance Adjuster — Defensible Documentation

**Opening Scene:** An insurance adjuster named Linda is reviewing a property damage claim from a tow job. The operator claims the vehicle had prior damage before the tow; the vehicle owner claims the operator caused it. The operator submits a TowDash PDF job packet as their documentation.

**Rising Action:** Linda opens the PDF. It contains eight photos of the vehicle pre-tow, each with an embedded timestamp and GPS coordinate logged within 30 meters of the vehicle's pickup address. The vehicle owner's digital signature appears on the documentation form, captured at the scene. The photos show the scratched rear quarter panel clearly — it was already there before the vehicle was touched.

**Climax:** Linda closes the claim in favor of the operator. She notes in the file: "Documentation format is court-presentable; timestamps and GPS metadata are consistent with job record."

**Resolution:** Linda mentions to two operator clients she works with that TowDash's documentation format is the cleanest she's seen from any small operator. Indirect advocacy from the insurance channel becomes an unpaid referral path.

### Journey 5: New Driver Onboarding — Zero Training Time

**Opening Scene:** Donna has hired a new driver, Ray, who has never used dispatch software. She needs him running solo calls by tomorrow.

**Rising Action:** Donna adds Ray as a driver in TowDash's account settings — three taps, his email, "Invite." Ray gets an email, downloads the app, logs in, and sees only the jobs assigned to him. Donna walks him through a practice job over the phone in 8 minutes.

**Climax:** Ray's first real solo call. He accepts the job notification, follows the in-app status prompts (En Route → On Scene → start documentation → In Tow → Delivered → Invoice), and completes the job. Donna sees the completed job on her dispatch map with all photos attached and invoice sent. She never had to be in the truck.

**Resolution:** Ray is running solo within 24 hours of being hired. Donna's onboarding time drops from "two days riding along" to "one phone call."

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Marcus (solo, dispute resolution) | Photo documentation with timestamps/GPS, digital signature, PDF export, job record retrieval, customer history |
| Donna (4-truck fleet, overage anxiety) | Multi-driver dispatch map, live GPS tracking, flat-rate pricing transparency, monthly reporting, Towbook cancellation trigger |
| Marcus (offline, rural) | Offline-first job creation, offline photo capture, automatic sync on reconnection, motor club reference logging, delayed customer SMS |
| Linda (insurance adjuster, indirect) | PDF job packet format, timestamp metadata, GPS coordinate embedding, signature capture, court-presentable documentation |
| Ray (new driver onboarding) | Driver sub-account creation, job assignment push notification, guided status workflow, driver-specific job view |

## Mobile App Specific Requirements

### Project-Type Overview

TowDash is a mobile-first application targeting iOS and Android. The primary interaction surface is the smartphone in the truck cab. Every core feature — job creation, photo capture, dispatch, invoicing, payment collection — must be usable one-handed while standing next to a vehicle. A lightweight web dashboard serves reporting and account administration but is not a required path for any operational workflow.

### Technical Architecture Considerations

**Platform Requirements:**
- iOS 16+ and Android 13+ support
- Cross-platform framework (React Native or Flutter) for feature parity and shared codebase with native modules for camera, GPS, and NFC
- Native device capabilities: camera (photo documentation with metadata), GPS (job site coordinates, driver tracking), NFC (tap-to-pay via Stripe Terminal), push notifications, background location

**Offline-First Architecture:**
- Local database (SQLite or WatermelonDB) stores all active job data on-device
- Event-sourced sync: local changes recorded as events and replayed to server on reconnection
- Conflict resolution: last-write-wins for scalar fields (job status, notes), merge for collection fields (photos)
- All photos stored locally until sync confirmed successful; never purged from local storage until server acknowledgment received

**Device Permissions:**
- Camera: pre/post-tow photo documentation (required)
- Location: job GPS tagging, live driver location for dispatch map, customer ETA calculation (required; background location for dispatch map)
- NFC: Stripe tap-to-pay (optional, degrades gracefully to manual card entry)
- Notifications: job assignments, payment received, sync status alerts (required)

**Store Compliance:**
- Apple App Store and Google Play Store submission compliance
- Background location usage must be justified in App Store review (dispatch tracking is an accepted use case)
- Payment processing for physical services (towing) is exempt from platform commission per App Store guidelines
- Privacy policy covering GPS data collection, photo storage, and Stripe data handling

### Implementation Considerations

- Photo metadata pipeline: camera capture → extract GPS + timestamp → embed in EXIF → store on-device → sync to cloud storage (S3 or equivalent) → confirm server receipt before local purge
- Stripe Terminal integration for tap-to-pay; fallback to Stripe manual card entry if NFC unavailable
- Customer SMS delivery via Twilio (or equivalent Tier 1 provider) for ETA notifications and invoice links
- Deep linking for customer-facing payment links (no app install required for customers)
- App size target: < 60MB initial download (photo-heavy use case requires efficient storage strategy)
- Background location tracking: iOS requires always-on location permission for real-time dispatch map; implement with battery-optimized polling interval (not continuous)

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the complete dispatch-to-payment workflow with liability documentation as the anchor differentiator. Every feature in the MVP serves one of four operator needs: (1) get to the job, (2) document the vehicle, (3) complete the job, (4) get paid. If a feature doesn't serve one of these four goals, it is deferred.

**Resource Requirements:** Small team (2–3 developers). One mobile developer (React Native / Flutter) for app UI and offline sync. One backend developer for API, Stripe integration, photo storage, and SMS. Shared responsibility for testing. Timeline: 3–4 months to beta, 5–6 months to Lifetime Deal launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo operator: job creation → photo documentation → digital signature → invoice → Stripe payment
- Fleet owner: dispatch drivers → live GPS tracking → view all jobs → monthly report → CSV export
- Driver sub-account: receive job assignment → run documentation workflow → mark delivered → collect payment

**Must-Have Capabilities:**
1. One-tap job creation from GPS-detected location with vehicle and customer lookup
2. Pre/post-tow photo capture with automatic timestamp and GPS coordinate embedding
3. Digital customer signature capture at scene, attached to job record
4. Job status lifecycle with status-gated photo/signature prompts
5. PDF job packet export (photos + signature + job details + metadata)
6. Driver live GPS location on dispatch map (owner view)
7. Automated SMS to customer at job creation (ETA) and arrival
8. Motor club structured logging (reference number, club, rate) without API integration
9. Stripe payment: card-present (NFC tap-to-pay) and manual card entry
10. Cash job logging
11. One-tap invoice generation at job completion
12. Monthly summary report with CSV export
13. Multi-driver account (owner + up to 4 drivers, flat rate)
14. Towbook CSV import wizard (customers + job history)
15. Offline-first operation: all core workflows (job create, photo capture, invoice) operate without connectivity

### Post-MVP Features (Phase 2)

- Agero Swoop API integration (digital motor club dispatch)
- Impound lot management (auto-accruing storage fees, lien workflow)
- Driver paysheet (commission calculation and export)
- Full web admin dashboard (job management, CRM, dispatch from browser)
- Private property towing documentation module
- QuickBooks two-way sync
- Customer portal (self-service payment and job status)

### Phase 3 (Expansion)

- Operator referral marketplace (overflow job routing)
- EV towing documentation workflow
- Insurance integration (Verisk, Mitchell claim packet export)
- Enterprise tier (6–20 trucks)
- Fleet maintenance and DOT inspection tracking

### Risk Mitigation Strategy

**Technical Risks:** Photo metadata pipeline (embedding GPS + timestamp, syncing reliably, never losing a photo) is the highest-risk engineering component — it is also the product's core differentiator and a P0 data integrity requirement. Mitigate by building and testing photo sync end-to-end in week 1 before any other feature work.

**Market Risks:** Towbook could lower pricing or improve mobile UX. Mitigate by moving fast (LTD launch before Towbook can respond), building community loyalty through operator Facebook groups and subreddits, and making the photo documentation moat deeper with each release — operators accumulate job history in TowDash that they cannot easily migrate away.

**Stripe Integration Risks:** Stripe Terminal (tap-to-pay) requires hardware certification and may add 4–6 weeks. Mitigate by launching with manual card entry (Stripe Elements) as the primary payment path and adding tap-to-pay as an enhancement post-launch.

**Resource Risks:** If team is smaller than planned, cut multi-driver GPS dispatch from MVP and launch as a solo-operator product first. The liability documentation workflow and invoicing are non-negotiable; dispatch map is valuable but not required for the core value proposition.

## Functional Requirements

### Job Management

- FR1: Operators can create a new job by entering customer name/phone, vehicle year/make/model, job type, and pickup location in a single screen
- FR2: Operators can auto-detect current GPS coordinates as the pickup location with a single tap
- FR3: Operators can search for and select a returning customer to auto-fill their contact information
- FR4: Operators can progress a job through a defined status lifecycle: Created → En Route → On Scene → In Tow → Delivered → Invoiced → Paid
- FR5: Operators can add free-text notes to any job at any point in the lifecycle
- FR6: Operators can view a chronological list of all jobs with status, customer, and vehicle information
- FR7: Operators can view the full detail of any individual job including all attached photos, signature, status history, and invoice

### Liability Photo Documentation

- FR8: Operators can launch an in-app camera workflow from the "On Scene" status step
- FR9: Operators can capture multiple photos per job with automatic GPS coordinate and timestamp embedded in the photo metadata (not relying on device camera roll)
- FR10: Operators can label photos by capture type (pre-tow front, pre-tow rear, pre-tow driver side, pre-tow passenger side, odometer, damage detail, post-tow delivery)
- FR11: Operators can capture a digital signature from the customer directly on the device screen
- FR12: The system stores all job photos in the job record, not in the device's camera roll, so they are never lost, overwritten, or mixed with personal photos
- FR13: Operators can generate and export a PDF job packet containing all job photos (with timestamps and GPS coordinates), the customer signature, job details, and vehicle information
- FR14: Operators can share the PDF job packet via email or any installed sharing app (messages, WhatsApp, etc.)

### GPS Dispatch

- FR15: Owners can view all active drivers' live GPS locations on a map in real time
- FR16: Owners can create a new job and assign it to a specific driver
- FR17: Drivers receive a push notification when a job is assigned to them
- FR18: The system calculates an ETA from the driver's current location to the pickup address
- FR19: The system automatically sends an SMS to the customer when a job is created containing the driver's ETA
- FR20: The system automatically sends an SMS to the customer when the driver arrives at the pickup location

### Motor Club Job Logging

- FR21: Operators can log a motor club job by selecting the motor club (AAA, Agero, Quest, NSD, or custom), entering the PO/reference number, job type, and agreed rate
- FR22: Motor club jobs are labeled distinctly in the job list and in reports
- FR23: Monthly reports display a separate breakdown of motor club vs. private-pay jobs, revenue, and job counts

### Invoicing & Payments

- FR24: Operators can generate an invoice from a delivered job with one tap, pre-populated with the job's vehicle, customer, and a default base tow rate
- FR25: Operators can add, edit, or remove line items from an invoice (base tow rate, mileage, winch-out, dolly, after-hours, storage, etc.)
- FR26: Operators can collect card payment at the scene via NFC tap-to-pay using a supported iOS or Android device
- FR27: Operators can collect card payment via manual card number entry when NFC is unavailable
- FR28: Operators can log a cash payment and record the amount received
- FR29: Operators can send a digital invoice to the customer via SMS containing a payment link (no app install required for the customer)
- FR30: Customers can pay an invoice via the SMS link using a credit or debit card
- FR31: Operators receive a push notification when a payment is received
- FR32: Operators can view all invoices with status: Draft, Sent, Paid, or Overdue

### Reporting

- FR33: Operators can view a monthly summary report showing total jobs, total revenue, average job value, and job count by type
- FR34: Operators can view revenue broken down by payment method (card, cash, motor club)
- FR35: Operators can view a motor club performance report (jobs per club, revenue per club, average rate per job)
- FR36: Operators can export a monthly jobs and payments report as a CSV file
- FR37: Account owners can view reports across all drivers on the account

### Account & Multi-Driver Management

- FR38: Account owners can invite up to 4 additional drivers to the account by email
- FR39: Invited drivers can create their own login and access the app at no additional charge
- FR40: Drivers can view and update only the jobs assigned to them
- FR41: Account owners can view and update all jobs across all drivers
- FR42: Account owners can dispatch any job to any driver or reassign in-progress jobs
- FR43: Account owners can deactivate or remove a driver from the account

### Onboarding & Data Migration

- FR44: Operators can import a customer list and job history from a Towbook CSV export using a guided import wizard
- FR45: The import wizard validates the CSV, reports any import errors, and allows operators to review before committing the import
- FR46: Operators can create their business profile (business name, license number, address, phone) during onboarding
- FR47: Operators can connect a Stripe account for payment processing during onboarding
- FR48: Operators can complete a structured in-app onboarding checklist that guides them through setup steps (profile, first job, first payment)

### Offline Operation

- FR49: Operators can create jobs, capture photos, record signatures, and generate invoices without internet connectivity
- FR50: The system automatically syncs all offline-created data when connectivity is restored, without requiring any operator action
- FR51: The system displays a sync status indicator showing whether the device is online, offline, or syncing
- FR52: The system preserves all photos on-device until server receipt is confirmed, preventing data loss if sync is interrupted

### Notifications & Communication

- FR53: Operators receive push notifications for: new job assignments, payment received, sync errors, and trial expiration reminders
- FR54: Customers receive SMS notifications for: job created (with ETA), driver arrived at pickup, invoice sent (with payment link)
- FR55: Operators can view a log of all SMS messages sent to customers from within the job record

## Non-Functional Requirements

### Performance

- NFR1: Job creation (from tap to saved record) completes within 2 seconds on supported mid-range devices (iPhone 13, Samsung Galaxy A54)
- NFR2: Photo capture and attachment completes within 3 seconds per photo including GPS metadata embedding
- NFR3: Invoice generation from a completed job completes within 2 seconds
- NFR4: Offline data operations (create, read, update) complete within 500ms with no network dependency
- NFR5: Sync of all pending offline records completes within 60 seconds of connectivity restoration for a typical job batch (≤ 20 jobs, ≤ 100 photos)
- NFR6: GPS dispatch map refreshes driver locations within 30 seconds on a standard LTE connection

### Security

- NFR7: All customer data, job records, and photos stored on-device are encrypted at rest using platform-native encryption (iOS Data Protection / Android Keystore)
- NFR8: All data transmitted between the app and backend uses TLS 1.3
- NFR9: Payment card data is never stored on-device or on TowDash servers — all card processing is delegated to Stripe (PCI-DSS Level 1 compliant)
- NFR10: Customer SMS payment links expire after 72 hours
- NFR11: Driver GPS location data is only accessible to the account owner; drivers cannot see other drivers' locations
- NFR12: User authentication sessions expire after 30 days of inactivity

### Reliability

- NFR13: Cloud services (sync, SMS, payment processing) maintain 99.9% uptime (< 8.76 hours downtime/year)
- NFR14: Zero photo data loss — photos are never purged from local storage until server receipt acknowledgment is received and verified
- NFR15: Stripe payment processing achieves 99.9% transaction success rate for valid cards; all failures return actionable error messages within 10 seconds
- NFR16: SMS delivery (customer ETAs, invoice links) achieves ≥ 98% delivery rate via Tier 1 SMS provider

### Scalability

- NFR17: Backend supports 10,000 concurrent active operator sessions without degradation
- NFR18: Photo storage scales to accommodate unlimited photos per account with no per-account storage cap in MVP (operators accumulate years of job documentation)
- NFR19: Sync engine handles 500 concurrent sync operations without queueing delays exceeding 30 seconds

### Integration

- NFR20: Stripe integration supports Stripe Terminal (tap-to-pay) SDK version updates with < 72 hours remediation for breaking changes
- NFR21: SMS delivery uses a Tier 1 provider (Twilio or equivalent) with automatic failover if primary delivery fails
- NFR22: CSV import supports Towbook's standard export format with no manual field mapping required for the standard export schema
