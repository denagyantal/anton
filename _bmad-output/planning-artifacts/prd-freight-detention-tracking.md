---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/freight-detention-tracking.md
  - _bmad-output/planning-artifacts/product-brief-freight-detention-tracking.md
  - _bmad-output/planning-artifacts/research/market-freight-detention-tracking-research-2026-05-21.md
workflowType: prd
lastStep: 12
date: '2026-05-21'
author: Root
classification:
  projectType: mobile_app_saas_b2b
  domain: freight_logistics
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — FreightDetain

**Author:** Root
**Date:** 2026-05-21
**Version:** 1.0

---

## Executive Summary

Small carriers (3–15 trucks) and owner-operators lose billions in detention fees annually — not because the fees aren't owed, but because they cannot prove them. When a driver waits beyond the contractual free-time window (typically 2 hours) at a shipper or receiver, they are owed detention pay at $65–200/hour. Collecting requires GPS-verified arrival and departure times, timestamped photo evidence, and a professional invoice. The current documentation process — a phone call, a whiteboard note, a spreadsheet row — produces none of these. Brokers dispute undocumented claims. Carriers give up.

**FreightDetain** is a mobile-first detention documentation and dispatcher operations platform that eliminates this documentation failure. For drivers: GPS geofencing auto-starts the free-time clock on arrival; one tap captures a timestamp photo with locked GPS metadata; departure triggers automatic PDF invoice generation and direct broker email. For independent freight dispatchers managing 5–15 owner-operators: a web dashboard provides real-time fleet visibility, detention alerts, carrier contact management, automatic commission calculation, and rate confirmation storage.

The market gap is unambiguous. DAT Freight & Analytics documents $15 billion in annual detention-related losses. The FMCSA attributes $1.1–1.3 billion annually to driver wage losses from undocumented detention. Fewer than 50% of detention fees are collected. Existing tools serve solo owner-operators ($49/month, no fleet view) or enterprise carriers ($5,000–50,000+/year TMS). The 3–15 truck segment — representing 97% of U.S. trucking companies — has no purpose-built solution. The 350,000+ independent freight dispatchers who serve them have no purpose-built software at all.

FreightDetain prices at $29/truck/month with a $149 lifetime deal option. A single recovered detention event pays for the product.

### What Makes This Special

**1. Only fleet-view detention tool under $50/truck/month.** DockClaim ($49/month) is solo-driver only. Every multi-truck solution costs $3,000+/year. FreightDetain is the first purpose-built fleet detention platform priced for small carriers.

**2. Dispatcher-as-distribution flywheel.** Each independent dispatcher manages 5–15 owner-operator clients. A single dispatcher sale triggers 5–15 driver app installs. This viral B2B coefficient gives FreightDetain an organic distribution channel no competitor has exploited.

**3. GPS + tamper-evident photo evidence in one tap.** Dual-evidence invoices (GPS coordinates + timestamped photo with locked metadata) are significantly harder for brokers to dispute than GPS-only approaches. Courts and arbitration recognize timestamped photos as strong documentation.

**4. Independent dispatcher CRM at zero additional development cost.** The 350,000-person independent dispatcher segment runs on WhatsApp and Google Sheets. Adding dispatcher commission tracking and carrier contact management to the platform addresses a completely unserved adjacent market at minimal marginal cost.

**5. Regulatory tailwind.** DOT has proposed mandatory detention pay in its highway reauthorization proposal. When regulations require documentation, the market will converge on the only affordable tool for the small carrier segment.

**6. Crowdsourced facility database.** Every detention event logged builds an anonymized database of chronic facilities. This creates network effects — users won't leave a platform that knows more about their regular stops than any alternative.

## Project Classification

- **Project Type:** Mobile App (iOS + Android) + SaaS B2B Web Dashboard
- **Domain:** Freight / Logistics / Trucking
- **Complexity:** Medium (FMCSA documentation requirements, GPS evidence integrity, background location services, multi-tenancy, PDF generation)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

The primary user success proxy is **detention revenue recovered per truck per month** — measurable only because FreightDetain tracks the complete event-to-payment chain.

| User Metric | Definition | Target Month 6 | Target Month 12 |
|-------------|------------|----------------|-----------------|
| Detention events logged/truck/month | Avg events captured via geofence or manual | 4+ | 6+ |
| Invoice submission rate | % of logged events resulting in submitted invoice | >80% | >90% |
| Detention collection rate | % of submitted invoices paid | >65% | >75% |
| Avg monthly detention recovery/truck | Dollar value recovered per enrolled truck | >$200 | >$400 |
| Time-to-first-invoice | Minutes from app open to first invoice submitted | <10 min | <8 min |
| Driver 30-day retention | % of drivers still logging events at Day 30 | >60% | >70% |
| Dispatcher DAU/MAU | Frequency dispatchers return to dashboard | >40% | >55% |

**The "First Win" Moment:** A driver or dispatcher who has submitted their first GPS-verified invoice and received payment churns at dramatically lower rates than one who has not. All onboarding is optimized toward this moment.

### Business Success

**Year 1 Primary Objectives:**

1. **Willingness-to-Pay Validation:** 1,000 LTD buyers at avg $149 = $149K launch revenue. Confirms segment will pay for documentation tooling before MRR ramp.
2. **Product-Market Fit:** NPS ≥ 45 from LTD cohort within 90 days. 20+ customer testimonials with quantified detention recovery.
3. **Facility Database Network Effect:** 10,000 facility detention records by Month 6. Makes product sticky — users won't leave a platform with this knowledge base.
4. **Dispatcher Distribution Flywheel:** 50+ dispatcher accounts by Month 6. Each dispatcher avg 8 driver-app installs.

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| LTD buyers | 200 | 700 | 1,000 |
| Active MRR accounts | 0 | 80 | 300 |
| MRR | $0 | $13,920 | $52,200 |
| Trucks enrolled | 400 | 2,000 | 5,000 |
| Dispatcher accounts | 10 | 50 | 200 |
| Facility database records | 500 | 10,000 | 40,000 |
| NPS | — | 45+ | 55+ |
| Churn (MRR) | — | <8% | <5% |
| CAC (blended) | — | <$120 | <$90 |
| LTV/CAC ratio | — | >3x | >5x |

### Technical Success

- GPS geofencing activates within 30 seconds of arrival at a known or new facility
- Background location tracking adds <15% additional battery drain per day on iOS and Android
- Photo metadata (GPS, timestamp, driver ID, truck number) is cryptographically locked at capture; any alteration is detectable
- PDF invoice generation completes in <5 seconds from detention event closure
- Web dashboard fleet map loads in <3 seconds for up to 50 enrolled drivers
- Detention event data is available for invoice generation even if connectivity was lost during the event (offline sync)
- 99.5% uptime for invoice API and web dashboard during business hours

### Measurable MVP Success Gates

All 5 must be met to proceed to Series A / aggressive marketing ramp. If 3 of 5 are met, investigate failing dimensions. Fewer than 3: structured user interviews before further investment.

1. **LTD Validation Gate:** 500 LTD buyers within 60 days of AppSumo launch
2. **Retention Gate:** 60%+ of LTD buyers actively logging detention events at Day 30 post-onboarding
3. **Recovery Gate:** Platform median detention collection rate ≥ 60% (vs. industry baseline <50%)
4. **NPS Gate:** NPS ≥ 40 from active users at Day 90
5. **Dispatcher Flywheel Gate:** 25 dispatcher accounts with ≥ 3 enrolled drivers each

---

## Product Scope

### MVP — Minimum Viable Product

**MVP Philosophy:** Problem-solving MVP. Deliver the minimum capability that lets a driver document a detention event, generate a GPS-verified invoice, and submit it to a broker — and lets a dispatcher see their entire fleet in real time. The MVP must enable the "First Win" moment for every user type.

**Approach:** Dual-product, single platform. iOS + Android driver app + web dispatcher dashboard. No feature is included that doesn't directly address a documented failure in the detention collection workflow.

**Core MVP Capabilities:**

Driver App (iOS + Android):
- GPS geofencing — automatic arrival/departure detection with configurable free-time window
- Photo evidence capture with tamper-evident locked metadata
- One-tap detention invoice generation (GPS-verified PDF)
- Direct broker email from within app
- Invoice status tracking (Sent / Viewed / Paid / Disputed)
- Lightweight load record (load number, broker contact, facility)
- Basic facility database (detention history per location)
- Manual check-in/check-out fallback when geofence unavailable

Dispatcher Web Dashboard:
- Real-time fleet map (all enrolled drivers with status)
- Detention alert notifications (push when driver clock starts)
- Open detention events table (elapsed time, estimated recovery value)
- Invoice generation and send on behalf of drivers
- Claims tracking per load and broker
- Carrier contact book with full profile fields
- Commission auto-calculation (flat $/load or % of gross)
- Monthly dispatcher invoice generation to carrier clients
- Commission history CSV export
- Rate confirmation storage (email intake or direct upload, searchable)

### Growth Features — Phase 2 (Months 12–24)

- Accessorial charge tracking: lumper fees, layover pay, TONU (truck order not used)
- ELD/telematics API integration (Samsara, Motive, KeepTruckin) for automated dwell-time triggers
- Load board integration (DAT, Truckstop.com) — facility detention scores displayed at load acceptance
- Broker reputation scoring — which brokers pay vs. routinely dispute
- Advanced analytics dashboard (facility offender reports, broker payment trends)
- Freight factoring integration (OTR Capital, RTS Financial, Triumph) for same-day advance on invoices
- White-label / reseller portal for dispatchers

### Vision — Phase 3 (Months 24–48)

- Full broker-facing detention claims management portal
- Spanish-language app + USMCA cross-border freight documentation module
- Predictive facility scoring at point of load acceptance
- Dispatcher-to-carrier marketplace (dispatcher recruitment of new owner-operator clients)
- Data intelligence revenue stream (anonymized detention data to insurance, factoring, logistics analytics)

---

## User Journeys

### Journey 1: Diane — Solo Owner-Operator (Driver Happy Path)

**Opening Scene:** Diane, 51, pulls her Peterbilt into a frozen food distribution center in Columbus at 7:42 AM. She's been here before — 3-hour waits are not unusual. Her phone shows the FreightDetain app. She's been using it for 3 weeks.

**Rising Action:** As she enters the facility geofence, the app detects arrival and sends a notification: "Arrived at Midwest Cold Storage — Columbus, OH. Start free-time clock?" She taps Yes. The clock starts automatically. At 9:42 AM — exactly 2 hours later — another notification: "Free time expired. Detention clock started." Diane taps the detention screen. She steps out of her cab, takes one photo of the facility entrance with her truck visible. The app locks the timestamp (9:44 AM), GPS coordinates (39.9°N, 82.9°W), and her driver ID. She goes back to waiting.

**Climax:** At 11:12 AM, Diane receives her dock assignment and pulls forward. She taps "Depart." The app calculates 1 hour 28 minutes of detention at her $85/hour rate = $125.80. It shows a draft PDF invoice pre-populated with: Midwest Cold Storage, arrival 7:42, free time expiry 9:42, detention start 9:44, departure 11:12, total $125.80. The broker email (already on file from her load record) is pre-filled. She taps "Send Invoice." Done. 4 seconds.

**Resolution:** Three days later, the broker pays the invoice. No dispute. Diane's dashboard now shows $125.80 recovered. She screenshots the "Paid" status and posts it in her trucking Facebook group with the caption: "Finally getting paid for my time." She adds: "Never thought a broker would pay $125 without a fight. This app is worth every penny."

**Journey Reveals:** Auto-geofence detection, photo evidence capture, invoice PDF generation, broker email integration, load record pre-population, invoice status tracking, facility database logging.

---

### Journey 2: Marcus — Small Fleet Owner (Fleet Visibility Path)

**Opening Scene:** Marcus, 44, owns 7 trucks and manages a remote dispatcher (Sara) from his Columbus office. It's 2:30 PM Tuesday. He opens his FreightDetain web dashboard to check on the fleet before end of day.

**Rising Action:** The fleet map shows 7 driver pins. Six are green (En Route or At Facility). One — James, driving a 2022 Kenworth — shows a red flashing icon: "Detained: 2h 14min — Procter & Gamble Distribution, Cincinnti OH." Marcus clicks James's card. He sees: Load #4421, broker TQL, arrived 12:12 PM, detention clock started 2:12 PM, current elapsed time 2h 14min, estimated recovery $165 at James's $75/hour rate.

**Climax:** Marcus sees the estimated recovery and realizes James hasn't submitted photo evidence yet. He sends James an in-app message: "James — take the facility photo now if you haven't." James responds with a thumbs-up. Two minutes later, the dashboard shows photo evidence captured. Marcus clicks "Generate Invoice" — a PDF pre-filled with all event data appears. He clicks "Send to Broker." TQL receives the invoice at 4:28 PM, the same day.

**Resolution:** TQL pays within 5 business days. This is the third time Marcus has caught and invoiced a detention event he would have missed before FreightDetain. His monthly detention recovery has gone from ~$300 (incomplete manual tracking) to ~$1,100 (all events logged, professional invoices). His wife no longer spends Sunday evenings recreating timelines from driver text logs.

**Journey Reveals:** Fleet real-time map, driver status with detention elapsed time, dispatcher-initiated invoice generation, in-app messaging, detention claim tracking per broker.

---

### Journey 3: Kevin — Independent Freight Dispatcher (Dispatcher Operations Path)

**Opening Scene:** Kevin, 36, runs a home-based dispatch business in Atlanta. He manages 11 owner-operator clients — flatbed operators — on 5% commission per load. His current stack: WhatsApp, Gmail, Google Sheets, and his contacts list. He signed up for FreightDetain's dispatcher plan after seeing a referral link in a Facebook dispatcher group.

**Rising Action:** Kevin onboards his 11 drivers by sending SMS invite links from the dispatcher dashboard. Eight install within 24 hours. Kevin spends 30 minutes adding commission rates (5% per carrier) and key broker contacts. He sets his intake email address; rate confirmations from brokers auto-attach to load records. His dashboard now shows 8 live driver pins. For the first time, he can see where his drivers are without texting each one individually.

**Climax:** Load #7723 completes: Kevin's driver Maria finishes a run, marks the load complete in her app. FreightDetain auto-calculates Kevin's commission: 5% of $1,750 gross = $87.50. Kevin reviews and approves. His monthly invoice to Maria's carrier updates automatically. Maria had also clocked a 1h 45min detention event at the receiver — which generated a $131.25 invoice to the broker, already submitted. Kevin's 5% on that = $6.56. He didn't lift a finger for either commission.

**Resolution:** Kevin cancels his Google Sheets commission tracker. He now manages his entire operation from the FreightDetain dashboard. He refers two dispatcher friends, earning referral credits. Three months later he has 15 carrier clients, attracted partly because his professional dashboard screenshot impressed a prospect who was choosing between 4 dispatchers.

**Journey Reveals:** Dispatcher onboarding flow, driver invite via SMS/email, commission rate configuration, load completion trigger, auto-commission calculation, monthly invoice generation, rate confirmation email intake, carrier contact book, dashboard as sales tool.

---

### Journey 4: Driver — Evidence Dispute Edge Case

**Opening Scene:** Tony, 38, a flatbed driver, submitted a 3h 15min detention invoice to a broker for $260. Three days later, the broker emails back: "Your timestamp doesn't match our dock log. We show you arrived 45 minutes later than claimed. Disputing."

**Rising Action:** Tony opens FreightDetain and pulls up the detention event from the history. He sees: GPS-verified arrival timestamp (10:14 AM — matching his app record), the locked photo (timestamped 10:14 AM, GPS coordinates matching the facility's exact address), and a PDF export of the complete audit trail. The broker's dock log says 10:59 AM.

**Climax:** Tony sends the broker the PDF audit trail export from within the app: GPS coordinates logged at 10:14 AM, photo metadata showing 10:14 AM, satellite coordinates confirming the facility address. He also attaches the photo showing his truck at the gate with the facility sign visible.

**Resolution:** The broker pays within 48 hours. Tony posts in TruckersReport: "Broker tried to dispute $260. I had GPS + photo with locked timestamp. Paid same day." The post gets 342 upvotes and 47 replies asking what app he uses.

**Journey Reveals:** Detention event history access, GPS audit trail export, photo evidence retrieval, dispute documentation package, tamper-evident evidence integrity.

---

### Journey 5: Carrier Owner — Driver Onboarding & Roster Management

**Opening Scene:** Marcus (from Journey 2) has hired a new driver, Carlos, who starts Monday. It's Friday afternoon. Marcus needs Carlos enrolled before the first run.

**Rising Action:** Marcus opens the carrier admin section of the FreightDetain dashboard. He clicks "Add Driver" and enters Carlos's email and phone number. The system sends Carlos an SMS: "Your carrier (Apex Freight LLC) has invited you to FreightDetain. Download the app and create your account." Carlos downloads the iOS app, creates an account, and enters the invitation code from the SMS. He appears on Marcus's dashboard immediately.

**Climax:** Carlos's profile is now in the fleet roster. Marcus sets his free-time configuration (2 hours, matching the carrier default), assigns his truck number, and can see Carlos's driver pin on the map before his first run Monday.

**Resolution:** When Carlos has his first detention event Monday afternoon, Marcus sees it in real time on the dashboard — just like his other 6 drivers. There was no IT setup, no manual configuration, no CSV import. Carlos was fully operational in 8 minutes.

**Journey Reveals:** Driver invitation via email/SMS, invitation code onboarding, roster management, fleet map addition, free-time configuration per driver, carrier admin panel.

---

### Journey Requirements Summary

| Capability Revealed | Journey(s) |
|--------------------|------------|
| GPS geofencing auto-detection | 1, 2 |
| Tamper-evident photo evidence | 1, 2, 4 |
| Invoice PDF generation + broker email | 1, 2 |
| Load record pre-population | 1 |
| Invoice status tracking | 1, 2 |
| Fleet real-time map | 2, 3 |
| Dispatcher-initiated invoice generation | 2 |
| Dispatcher push notifications | 2 |
| Commission auto-calculation | 3 |
| Monthly dispatcher invoice | 3 |
| Rate confirmation storage | 3 |
| Carrier contact book | 3 |
| GPS audit trail export | 4 |
| Detention event history | 4 |
| Driver invitation + onboarding | 5 |
| Roster management | 5 |
| Free-time configuration | 5 |
| Facility database | 1, 4 |

---

## Domain-Specific Requirements

### Regulatory Context

The U.S. trucking industry operates under FMCSA (Federal Motor Carrier Safety Administration) oversight. Detention documentation has direct legal and contractual implications:

- **Contractual Basis:** Detention pay provisions appear in broker-carrier rate confirmations (typically $65–200/hour after 2 hours free time). FreightDetain invoices must reference these contractual provisions to be enforceable.
- **Proposed DOT Regulation:** The DOT's highway reauthorization proposal includes mandatory detention pay, which would require carriers to document and report detention events. FreightDetain's evidence infrastructure is positioned as the compliant documentation method.
- **FMCSA Hours of Service (HOS) Interaction:** Extended detention directly impacts a driver's available HOS. While FreightDetain does not replace an ELD (Electronic Logging Device), detention timestamps may be used in conjunction with HOS logs to establish compliance context. FreightDetain does not modify or interface with ELD records in MVP.
- **DOT Number Verification:** Carrier accounts require a valid USDOT number for professional invoice credibility. System stores but does not validate DOT numbers via API in MVP (manual entry only).

### Evidence Integrity Requirements

Since FreightDetain invoices may be used in payment disputes, arbitration, or legal proceedings:

- GPS coordinates and timestamps must be locked at capture and stored with an immutable audit trail
- Photo EXIF metadata must be preserved and cannot be overwritten post-capture
- The audit trail must be exportable as a PDF that clearly shows: event timeline, GPS coordinates matching the facility, photo evidence with locked timestamp, and driver identification
- The system must store event data in a manner that allows retrospective verification (evidence must not degrade or be alterable after the billing period closes)

### Privacy Requirements

- Driver location data is visible only to the driver themselves, their carrier owner, and any dispatcher to whom the carrier is enrolled
- Brokers who receive invoices see GPS coordinates as part of the invoice evidence but have no access to real-time driver location
- The facility database is populated with anonymized, aggregated data — individual driver identities are not exposed to other users via the facility database
- Location tracking disclosure must be clearly communicated to drivers at onboarding (consent screen required before background location permissions are granted)

### Compliance Considerations

- **Tax / Invoice Requirements:** Invoices generated by FreightDetain must include carrier legal name, USDOT number, invoice number, itemized services (detention hours × rate), and total. These are standard requirements for carrier invoicing.
- **Data Retention:** Detention event records (GPS, photo, invoice) must be retained for a minimum of 3 years to support dispute resolution timelines common in freight billing.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Dispatcher-as-Distribution Channel**
No freight software vendor has built a product specifically for independent freight dispatchers (not freight brokers, not carriers). The 350,000-person independent dispatcher segment has zero purpose-built software. FreightDetain's dispatcher CRM bolt-on is the first product targeting this segment. More importantly, each dispatcher is a distribution node: one dispatcher adoption = 5–15 driver app installs. This creates a viral B2B coefficient unavailable to any competitor.

**2. Crowdsourced Facility Reputation Database**
By logging every detention event geographically, FreightDetain builds an anonymized database of facility detention behavior over time. This is genuinely novel for the small carrier segment — no existing tool provides this. The database creates:
- Network effects: each new user contributes data that improves value for all users
- Defensive moat: competitors cannot replicate years of facility-level detention data without acquiring the user base
- Pre-load intelligence: drivers can check facility reputation before accepting loads

**3. Dual-Evidence Invoice (GPS + Photo)**
Existing detention tools use either GPS-only evidence (Samsara ELD dwell time) or manual photo capture (DockClaim). FreightDetain combines both in a single tap: geofenced GPS timestamps + photo with locked metadata. This combination is meaningfully harder for brokers to dispute and is the closest analog to a digital court-admissible record available without ELD hardware.

### Market Context

Competitive tools have not addressed the fleet-visibility gap in the $0–100/month price range. DockClaim (solo-only) dominates the owner-operator segment. Samsara (ELD dwell time) has fleet visibility but no invoice automation. FreightDetain is the only tool that simultaneously offers fleet-level visibility AND invoice automation at under $50/truck/month.

### Validation Approach

- **LTD Launch (AppSumo):** Validates willingness-to-pay from 1,000+ small carrier operators before committing to full MRR ramp
- **Dispatcher Flywheel Test:** Track whether dispatcher account additions produce driver-app installs at 5:1+ ratio (validates distribution hypothesis)
- **First-Win Cohort Analysis:** Compare 30-day retention of users who have vs. have not achieved their "first payment received" moment (validates product stickiness)
- **Facility Database Growth:** Track organic facility record additions per 100 active trucks per month (validates crowdsourcing behavior)

### Risk Mitigation

- If dispatcher CRM adoption is slow: focus marketing budget entirely on driver/carrier acquisition via TruckersReport and trucking Facebook groups; dispatcher CRM remains available but is de-emphasized
- If LTD buyers don't transition to MRR: investigate whether "own it forever" positioning undercuts recurring subscription motivation; consider LTD with annual feature update fees
- If GPS geofencing battery impact exceeds 15%: implement geofence-only-at-known-facilities mode (not continuous background GPS) to reduce drain

---

## Platform-Specific Requirements

### Project Type Overview

FreightDetain is a **hybrid mobile + SaaS B2B platform**:
- **Driver experience:** Mobile-first iOS and Android app; must work in low-connectivity environments; background location services required
- **Dispatcher experience:** Web dashboard (React SPA); real-time updates via WebSocket or SSE; map integration
- **Shared infrastructure:** REST API, PDF generation service, transactional email, Stripe billing, S3 photo storage

### Multi-Tenancy Model

Three account tiers with strict data isolation:

| Role | Account Type | Data Access Scope |
|------|-------------|-------------------|
| Driver | Mobile app account | Own detention events, own load records, own invoices |
| Carrier Owner | Carrier account | All drivers on their roster + all their events/invoices |
| Dispatcher | Dispatcher account | All enrolled carriers + all their drivers' events/invoices |

A dispatcher does NOT own carrier data — the carrier retains their data and can unenroll from a dispatcher relationship without losing history.

### Role-Based Access Control (RBAC)

| Permission | Driver | Carrier Owner | Dispatcher |
|------------|--------|---------------|------------|
| Log detention event | ✓ | — | — |
| View own events | ✓ | ✓ | ✓ |
| View fleet events | — | ✓ (own fleet) | ✓ (enrolled fleets) |
| Generate invoice | ✓ | ✓ | ✓ |
| Send invoice to broker | ✓ | ✓ | ✓ |
| Manage carrier roster | — | ✓ | — |
| Manage commission rates | — | — | ✓ |
| Generate dispatcher invoice | — | — | ✓ |
| Configure free-time window | — | ✓ | — |

### Mobile Platform Requirements

- **Supported platforms:** iOS 16+ and Android 12+
- **Background location:** Required for geofencing while app is backgrounded; user must grant "Always Allow" location permission; onboarding includes permission request flow with clear explanation of why
- **Offline capability:** Detention events (start, stop, photo capture) must function without active network connectivity; data syncs when connectivity is restored
- **Battery optimization:** Geofencing must use region-monitoring APIs (not continuous GPS polling) to minimize battery drain; target <15% additional daily drain
- **Push notifications:** Required for detention clock alerts, invoice payment confirmations, and dispatcher alerts; graceful fallback to in-app notifications if push is declined
- **Camera access:** Required for photo evidence capture; must work in low-light loading dock environments

### Web Dashboard Requirements

- **Browser support:** Chrome 120+, Firefox 120+, Safari 17+, Edge 120+
- **Map integration:** Real-time driver location map using a tile-based mapping provider (Mapbox or Google Maps)
- **Real-time updates:** Fleet status and detention clock must update without page refresh (WebSocket or SSE)
- **Responsive design:** Dashboard must be usable on tablet (iPad) for dispatchers who work mobile; desktop is primary
- **Email intake:** Dispatcher rate-confirmation intake email address must auto-parse and attach PDFs to matching load records

### Technical Architecture Considerations

- **PDF generation:** Server-side PDF generation (PDFKit or Puppeteer) for consistent cross-platform invoice formatting; includes GPS coordinates, timestamped photo embedded, carrier name, USDOT number
- **Photo storage:** Photos stored in S3 (or equivalent object store) with metadata stored separately in database; metadata cannot be modified after upload (immutable record)
- **Geofencing:** Mobile-side region monitoring (Apple Core Location CLCircularRegion, Android Geofencing API) with server-side confirmation on entry/exit events
- **Billing:** Stripe for subscription billing (per-truck MRR + dispatcher flat rate) and one-time LTD purchases
- **Transactional email:** SendGrid or Postmark for invoice delivery with open-tracking capability
- **Authentication:** JWT-based auth with refresh tokens; optional 2FA via TOTP authenticator app

### Implementation Considerations

- Driver app must feel like a "dumb timer" — no learning curve; maximum 2 taps for any core action
- Invoice PDF format must be professional enough that brokers treat it like a formal billing document, not a screenshot
- Dispatcher dashboard must work for a non-technical user (dispatchers are businesspeople, not software users)
- Rate confirmation email intake must be dead-simple: dispatcher forwards a broker email to their FreightDetain intake address; attachment auto-parsed and attached to the load record by load number

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the minimum capability that enables the "First Win" moment for each user type. For drivers: submit one GPS-verified invoice that gets paid. For dispatchers: see their entire fleet in real time and catch one detention event they would have missed.

**Resource Requirements:** 1 full-stack developer + 1 mobile developer (iOS + Android with React Native or Flutter) + 1 product/design lead. 12–16 weeks to MVP launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Driver detention logging (GPS auto-detect + manual fallback)
- Driver photo evidence capture
- Driver invoice generation + broker email
- Dispatcher fleet real-time visibility
- Dispatcher detention alert + invoice dispatch
- Dispatcher commission calculation + invoicing
- Carrier owner fleet roster management

**Must-Have Capabilities:**
- GPS geofencing arrival/departure detection (mobile)
- Tamper-evident photo evidence capture
- One-tap PDF invoice generation
- Invoice email to broker with open-tracking
- Invoice status tracking (Sent / Viewed / Paid / Disputed)
- Load record with broker pre-population
- Basic facility database (detention history per location)
- Fleet real-time map (web dashboard)
- Detention push notifications to dispatcher
- Carrier contact book
- Commission auto-calculation and monthly invoice generation
- Rate confirmation storage (email intake + direct upload)
- Stripe billing (per-truck + dispatcher plan + LTD)
- Driver invitation and onboarding flow

### Post-MVP Features

**Phase 2 (Months 12–24):**
- Accessorial charge tracking (lumper fees, layover, TONU)
- ELD/telematics API integration (Samsara, Motive, KeepTruckin)
- Load board integration (DAT, Truckstop.com) with facility detention scores
- Broker reputation scoring
- Advanced analytics dashboard
- Freight factoring integration (same-day invoice advance)
- Referral program with credit rewards

**Phase 3 (Months 24–48):**
- Broker-facing detention claims portal
- Spanish-language app + USMCA cross-border module
- Predictive facility scoring at load acceptance
- Dispatcher-to-carrier marketplace
- Anonymized detention intelligence data product

### Risk Mitigation Strategy

**Technical Risks:** Background geofencing battery impact is the highest technical risk. Mitigation: use region-monitoring APIs (not continuous GPS) in MVP; run battery benchmarks on 5 device models before launch; implement fallback to manual check-in. GPS accuracy in dense urban or covered dock environments is secondary risk; manual check-in fallback covers this.

**Market Risks:** AppSumo LTD buyers may not convert to MRR at target rate. Mitigation: LTD pricing structured as "up to 10 trucks" to create natural upgrade pressure as fleets grow; MRR accounts get priority support and feature access.

**Resource Risks:** If development runs long, prioritize: (1) driver GPS + invoice flow, (2) dispatcher fleet map + alerts. Commission calculation and rate confirmation storage can ship 2–4 weeks after initial launch without breaking the core value proposition.

---

## Functional Requirements

### Detention Event Management

- **FR1:** Driver can initiate a detention event via automatic GPS geofencing when entering a facility's geographic boundary
- **FR2:** Driver can initiate a detention event manually via a check-in tap when geofencing is unavailable or facility is not in the database
- **FR3:** Driver can view the free-time countdown clock (default 2 hours, configurable) once a check-in is recorded
- **FR4:** Driver receives a push notification when free-time expires and detention tracking begins
- **FR5:** Driver can capture a timestamped photo from the detention screen with GPS coordinates, timestamp, driver ID, and truck number locked at capture
- **FR6:** Driver can end a detention event and view the auto-calculated detention duration and fee amount before invoice generation
- **FR7:** Driver can view a complete history of past detention events including status, duration, fee, and invoice outcome

### Invoice & Claims Management

- **FR8:** Driver can generate a GPS-verified PDF invoice from a completed detention event in one tap, pre-populated with carrier details, facility, arrival/departure times, detention duration, and fee
- **FR9:** Driver can email the generated invoice directly to the broker associated with the current load record from within the app
- **FR10:** Driver or dispatcher can track invoice status (Sent / Viewed / Paid / Disputed) per detention event
- **FR11:** Dispatcher can generate and email a detention invoice on behalf of any enrolled driver from the web dashboard
- **FR12:** Driver or dispatcher can export a complete detention event audit trail (GPS log, photo evidence, timestamps) as a PDF for dispute documentation
- **FR13:** Driver or dispatcher can view full invoice and payment history organized by broker and by facility

### Load Record Management

- **FR14:** Driver can create a load record with load number, broker contact, origin facility, and destination before beginning a run
- **FR15:** System auto-populates invoice fields (broker email, facility name, carrier details) from the active load record when generating a detention invoice
- **FR16:** Driver can view load history for reference and retrospective documentation
- **FR17:** Dispatcher can attach a rate confirmation PDF to a load record, either via direct upload or via email forwarded to their FreightDetain intake address

### Fleet & Real-Time Visibility

- **FR18:** Dispatcher can view all enrolled drivers on a real-time map with current status (En Route / At Facility / Detained / Off Duty)
- **FR19:** Dispatcher receives a push notification when any enrolled driver's detention clock starts
- **FR20:** Dispatcher can view a dashboard table of all currently open detention events with driver name, facility, elapsed detention time, and estimated recovery dollar value
- **FR21:** Dispatcher can click a driver card on the map to view that driver's current load, facility, elapsed detention time, and contact options

### Dispatcher Operations

- **FR22:** Dispatcher can maintain a carrier contact book with structured profile fields: carrier name, truck number, USDOT number, phone, email, preferred broker list, and commission rate
- **FR23:** Dispatcher can set a commission rate per carrier (flat dollar amount per load or percentage of gross load revenue)
- **FR24:** System auto-calculates dispatcher commission when a driver marks a load as complete
- **FR25:** Dispatcher can generate a monthly commission invoice to each carrier client from auto-calculated commission totals
- **FR26:** Dispatcher can export commission history by carrier, date range, or broker to CSV for accounting purposes
- **FR27:** Dispatcher can search stored rate confirmations by load number, broker name, carrier name, or date

### Facility Database

- **FR28:** System automatically logs a facility entry (name derived from reverse geocode, GPS coordinates) when a driver check-in occurs at a location
- **FR29:** Driver can view a facility's detention history — average detention duration and percentage of visits exceeding free time — before accepting a load to that location
- **FR30:** Driver can view a facility reputation indicator (composite score) based on aggregated user-contributed detention data

### Account & Fleet Management

- **FR31:** Carrier owner can invite drivers to the fleet by sending email or SMS invitation links from the carrier admin panel
- **FR32:** Driver can complete onboarding and join a carrier fleet by following an invitation link and creating a FreightDetain account
- **FR33:** Dispatcher can invite carrier clients to the platform and link their driver fleet to the dispatcher dashboard
- **FR34:** Carrier owner can configure the free-time window duration (default: 2 hours) for their fleet
- **FR35:** Carrier owner can manage the driver roster: add drivers, remove drivers, and view each driver's status

### Billing & Subscriptions

- **FR36:** Carrier can subscribe to per-truck monthly pricing via credit card, with billing that adjusts automatically when trucks are added or removed
- **FR37:** Dispatcher can subscribe to a flat monthly dispatcher plan via credit card
- **FR38:** Both carrier and dispatcher accounts can purchase a lifetime deal (LTD) at checkout as an alternative to monthly subscription
- **FR39:** Carrier or dispatcher can view billing history and manage payment methods from account settings

### Notifications & Evidence

- **FR40:** Driver receives a push notification when their free-time expires and detention tracking begins
- **FR41:** Driver receives an in-app confirmation when an invoice is sent to a broker and when payment is recorded
- **FR42:** Dispatcher receives a push notification for each new detention event across their enrolled fleet
- **FR43:** Photo evidence metadata — GPS coordinates, timestamp, driver ID, truck number — is cryptographically locked at capture and cannot be modified after the fact
- **FR44:** System maintains a tamper-evident sequential audit log of all detention event actions (check-in, photo capture, check-out, invoice generation, invoice sent, payment recorded) with timestamps and actor identity

---

## Non-Functional Requirements

### Performance

- GPS geofencing activation (entry/exit detection): within 30 seconds of crossing a facility boundary under normal GPS signal conditions
- PDF invoice generation: <5 seconds from detention event closure to download-ready document
- Web dashboard fleet map initial load: <3 seconds with up to 50 enrolled driver pins
- Driver app UI interactions (taps, screen transitions): <1 second response under normal network conditions
- Invoice email delivery: within 60 seconds of "Send" tap as confirmed by transactional email provider delivery receipt
- Broker email open-tracking update reflected in invoice status: within 30 seconds of open event

### Security

- All data encrypted at rest using AES-256; all data in transit via TLS 1.3
- Photo metadata (GPS, timestamp, driver ID) is cryptographically signed at upload; any server-side modification invalidates the signature and is flagged in the audit log
- Driver real-time location is accessible only to the driver, their carrier owner, and dispatchers to whom the carrier is enrolled; no cross-tenant location visibility
- User authentication via email/password with bcrypt password hashing; optional TOTP-based 2FA available for dispatcher and carrier owner accounts
- API endpoints require valid JWT tokens; token refresh uses rotating refresh tokens with 30-day TTL
- All GPS audit trail records are append-only; no update or delete operations permitted on event records after creation

### Reliability

- Web dashboard and invoice API uptime: 99.5% monthly (measured by external uptime monitor)
- Driver app detention logging operates in offline mode during connectivity loss; all data synced within 60 seconds of connectivity restoration
- Invoice email delivery uses retry logic with exponential backoff; maximum 3 retry attempts over 10 minutes before marking delivery as failed and alerting the user
- GPS geofencing operates using mobile OS region-monitoring APIs with graceful degradation to manual check-in when GPS signal is unavailable (satellite coverage below minimum threshold)

### Scalability

- System architecture supports 10,000 enrolled trucks without horizontal scaling changes in Year 1
- Facility database supports up to 500,000 facility records at MVP architecture
- Designed for horizontal API scaling to 50,000+ trucks by Year 3 without application-layer redesign
- Image storage scales independently from application tier via object store (S3 or equivalent)

### Battery & Mobile Performance

- Background GPS geofencing adds <15% additional daily battery drain on iOS and Android test devices under normal usage conditions
- App APK/IPA size: <30MB including assets (critical for users on limited data plans and older devices)
- App functions correctly on devices with 2GB RAM running minimum supported OS versions (iOS 16, Android 12)

### Data Retention

- Detention event records (GPS log, photo, invoice, audit trail) retained for a minimum of 36 months to support dispute resolution timelines common in freight billing
- User-deleted accounts have event records retained for 36 months in anonymized form for facility database integrity; personal identifying information purged within 30 days of account deletion request
