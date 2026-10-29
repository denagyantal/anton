---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/epa-hfc-refrigerant-compliance-app.md
  - _bmad-output/planning-artifacts/product-brief-hvac-refrigerant-compliance.md
workflowType: 'prd'
lastStep: step-12-complete
user_name: Root
date: '2026-10-29'
author: Root
classification:
  projectType: mobile_app
  domain: regulatory_compliance
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — CoolLog

**Author:** Root
**Date:** 2026-10-29
**Status:** Complete — Ready for Architecture

---

## Executive Summary

CoolLog is an Android-first, offline-capable mobile application that eliminates EPA compliance risk for HVAC/R technicians and small shops. Effective January 1, 2026, the EPA's AIM Act Subpart C reduced the HFC refrigerant threshold from 50 lbs to 15 lbs, bringing approximately 70% more HVAC equipment under mandatory federal record-keeping for the first time. Solo technicians doing 8 calls/week now accumulate 1,248+ compliance records over the mandatory 3-year retention window — yet no affordable, Android-native, offline-capable tool exists to manage this requirement.

The product's core promise is simple: **a solo HVAC tech can log every refrigerant service call offline on Android and export a compliant audit PDF in one tap.** The regulatory forcing function (non-discretionary purchase driven by $59,114–$124,426/day violation fines) and the platform gap (FieldPad Pro is iOS-only; 55–65% of field techs use Android) create an unoccupied market quadrant with strong willingness to pay.

CoolLog enters as the category-defining tool for Android-first, offline-first HVAC refrigerant compliance. The go-to-market strategy targets the AppSumo LTD channel ("Pay once. Never worry about an EPA audit again.") with secondary acquisition via r/HVAC, HVAC-Talk, and Facebook HVAC communities. Path to $10K MRR within 12 months via LTD-to-subscription conversion.

### What Makes This Special

Four capabilities combine in a way no existing product provides:

1. **Android-first native experience** — FieldPad Pro is iOS-only, locking out the majority of field technicians. CoolLog is built for the Samsung Galaxy, Pixel, and Android device landscape that field techs actually carry.

2. **Offline-first architecture** — SQLite local storage with background sync means the app works in mechanical rooms, rooftops, basements, and crawl spaces with zero cell signal. Connectivity is never required for core operations.

3. **Pre-loaded EPA refrigerant database** — Refrigerant name → EPA registration number → GWP → AIM Act classification auto-populated from a bundled database. No manual lookup, no typos on federal registration numbers.

4. **One-tap audit PDF export** — A formatted, EPA-compliant PDF generated locally in under 2 seconds, shareable from the parking lot. This is the moment that converts a user into an advocate.

The lock-in mechanism is the regulatory requirement itself: after 12 months of daily use, a technician's 2,000+ compliance records in CoolLog cannot be easily migrated elsewhere. The 3-year retention mandate that drove the initial purchase now enforces perpetual retention.

## Project Classification

- **Project Type:** Mobile app (Android-first, Flutter cross-platform, with iOS deferred to Phase 2)
- **Domain:** Regulatory compliance / field service / trade SMB
- **Complexity:** High — federal regulatory requirements (EPA AIM Act Subpart C + Section 608), offline-first architecture, device fragmentation, AppSumo LTD launch timing
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

**Primary — Compliance Adoption Rate:**
Users log service records for ≥80% of their refrigerant service calls within 30 days of install. A user who installs but never logs is not compliant. Target: 70%+ of active users at 30 days.

**Secondary — Audit PDF Exports:**
Average of 5+ audit PDF exports per active user per month at 3 months, rising to 10+ at 6 months. PDF exports are the proxy for real compliance use and the core value the product promises.

**Retention — 90-Day Active User Rate:**
70%+ of users who created ≥3 records in month 1 are still active at month 3. Compliance tools should be inherently sticky; low 90-day retention indicates the app is not embedded in daily workflow.

**Satisfaction:**
App Store rating ≥4.3 at 90 days, ≥4.5 at 6 months. Trade community trust is built on peer reviews.

**Onboarding Speed:**
First compliance record created within 5 minutes of app install, with no training required.

### Business Success

**6-Month Objectives:**
- Ship MVP to Google Play by Week 6 from development start
- AppSumo LTD launch in Month 2–3: 200–500 LTD sales at $49–79 average
- Reach $3,000–$5,000 MRR from LTD-to-subscription conversion

**12-Month Objectives:**
- $10,000+ MRR from solo tech and small shop subscriptions
- 500+ monthly active users
- 3 verifiable "CoolLog helped me pass an EPA audit" case studies

**18-Month Objectives:**
- $20,000–$25,000 MRR
- Integration with ≥1 FSM platform (Jobber or GorillaDesk)
- Canadian market expansion

**North Star Metric:** Monthly Audit PDFs Generated. Growth in audit PDFs = growth in real compliance use = growth in word-of-mouth.

### Technical Success

- App functions fully offline with zero network dependency for core operations (create record, search database, export PDF)
- SQLite local storage with background sync resolves conflicts correctly (local write wins)
- EPA refrigerant database search returns results in <200ms (fully local, no network)
- PDF generation completes locally in <3 seconds
- App supports Android 8.0+ (covers >95% of active Android devices)
- Top 5 Android OEMs (Samsung, Google, OnePlus, Motorola, Xiaomi) tested and certified before launch
- Zero data loss on app crash or connectivity loss
- Supabase sync achieves eventual consistency with no manual intervention required

### Measurable Outcomes

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|---------|
| LTD Sales | 100 | 300 | 500 | 750 |
| Monthly Active Users | 80 | 250 | 400 | 600 |
| MRR ($) | $0 | $1,500 | $5,000 | $12,000 |
| App Store Rating | 4.0+ | 4.3+ | 4.5+ | 4.5+ |
| Avg PDF Exports/User/Month | 5+ | 8+ | 10+ | 10+ |
| 90-Day Retention | — | 65%+ | 70%+ | 75%+ |
| Customer Acquisition Cost | <$20 | <$20 | <$25 | <$30 |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers exactly one promise: a solo HVAC tech can log every refrigerant service call offline on Android and export a compliant audit PDF in one tap.

**Core Capabilities:**
1. Offline-first service record logger (date, location, equipment, refrigerant, amounts, tech info)
2. Pre-loaded EPA refrigerant database bundled with app (no network required)
3. One-tap audit PDF export (single record or date range, generated locally)
4. Compliance dashboard (monthly summary, record count, retention status, threshold alerts)
5. Account creation + cloud sync (Supabase auth + background sync + CSV export)
6. Subscription billing (Stripe web + RevenueCat mobile IAP + LTD code redemption)

**MVP Pricing:**
- Solo: $19/month or $190/year (unlimited records, 1 tech)
- Small Shop: $49/month (up to 5 techs)
- AppSumo LTD: $49 solo / $79 small shop

**MVP Platform:** Android only (Android 8.0+). iOS deferred to Phase 2.

**MVP Success Gate (90 days post-AppSumo launch):**
- ≥200 LTD sales within 60 days of listing
- ≥65% of users who created their first record return within 7 days
- Average ≥5 audit PDF exports per active user per month
- App Store rating ≥4.2 with ≥50 reviews
- ≥$5,000 MRR

### Growth Features (Post-MVP)

**Phase 2 (Months 4–8): Platform Expansion**
- iOS app (native Swift or Flutter cross-platform port from Phase 1 codebase)
- Multi-tech shop compliance dashboard: shop owner view with per-tech record visibility
- EPA 608 cert renewal reminders (configurable push notification lead time)
- Barcode/QR scan of equipment nameplates for auto-populated system charge weight
- Enhanced leak rate calculator: input charge weight, CoolLog tracks annual percentage automatically
- Zapier integration webhook for Jobber and GorillaDesk (compliance records pushed to job notes)

**Phase 3 (Months 9–18): Commercial Expansion**
- Contractor-to-building-owner compliance certificate portal
- Multi-tenant dashboard for commercial facility managers managing multiple contractors
- Canadian market (regulatory convergence with US AIM Act trajectory)
- Direct native integrations with Jobber, GorillaDesk, HouseCall Pro
- Per-contractor subscription for property management companies (B2B revenue stream)

### Vision (Future)

- IoT refrigerant leak sensor integration (auto-populates records from connected equipment)
- AI-powered leak rate anomaly detection for building owners
- EPA reporting automation (direct electronic filing where regulations allow)
- Platform positioning: compliance infrastructure layer for the HVAC/R industry

---

## User Journeys

### Journey 1: Marcus — Solo Android Tech (Primary Happy Path)

**Opening Scene:** Marcus is a 34-year-old solo tech in suburban Houston running 6–10 service calls per day from his Samsung Galaxy A55. It's mid-January 2026. He's been keeping compliance records on carbon-copy forms in a binder in his truck. His supply house mentioned the new EPA threshold change. Last week, a commercial property manager asked him for his compliance documentation for the previous year — he spent two hours digging through paper binders and couldn't find three records.

**The Search:** Marcus googles "HVAC refrigerant compliance app Android" after the FieldPad co-worker recommendation falls apart because FieldPad is iPhone-only. He finds a post in r/HVAC: "CoolLog just launched — Android alternative to FieldPad. Pass your EPA audit." He sees the AppSumo LTD at $49 and buys without overthinking it.

**Onboarding:** Install takes 30 seconds. First launch asks for his EPA 608 cert number and name. The pre-loaded EPA database is already bundled — no setup required. He creates his first service record in 4 minutes flat: searches "R-410A," sees the EPA reg number auto-fill, enters the amount added, takes a photo of the equipment nameplate, hits save.

**Daily Use:** Marcus opens CoolLog at each refrigerant job. The workflow is muscle memory by week two: tap New Record → search refrigerant → confirm auto-fill → enter amounts → photo → save. Under 60 seconds. Works in every attic and utility closet regardless of cell service.

**The Aha Moment:** Three months in, the same property manager asks for compliance documentation for their entire building portfolio covering the past 6 months. Marcus taps "Export PDF" → "Date Range" → selects the property and date range → hits export. He emails the PDF from the parking lot before driving to his next call. The manager replies within an hour: "This is exactly what we need." Marcus posts in r/HVAC: "CoolLog saved me a massive headache today."

**New Reality:** Marcus has 400 records in CoolLog at the 6-month mark. He never thinks about EPA audits anymore. When a friend asks about compliance tools, he sends them the AppSumo link without hesitation.

**Journey Requirements Revealed:** Offline record creation, EPA database search with auto-fill, photo attachment, single-record PDF export, multi-record date-range export, email sharing via native share sheet.

---

### Journey 2: Diana — Small Shop Owner, Mixed Devices (Secondary — Shop Tier)

**Opening Scene:** Diana is a 47-year-old HVAC shop owner in metro Atlanta with 6 Android-using techs and one iPhone (her own). She pays $89/month for HouseCall Pro but it has nothing for refrigerant compliance. A commercial property management customer managing 40 buildings just asked her to provide compliance documentation for the past year across all service visits. Diana spent a weekend manually assembling records from her techs' paper forms.

**The Trigger:** After the weekend manual assembly nightmare, Diana searches for a team compliance solution. She finds CoolLog in an HVAC Business Owners Facebook group. She sees the small shop tier and realizes the shop dashboard is what she needs.

**Onboarding:** Diana signs up for the small shop tier ($49/month). She adds her 6 techs as users and sends them install links. Each tech onboards in under 5 minutes. Diana's techs are on Android; she views the shop dashboard from her iPhone browser.

**Team Use:** Each tech creates records on their own device, synced to the shared shop account. Diana can see all records across techs, filter by property or date range, and export a combined compliance report for any commercial customer.

**The Aha Moment:** The property management customer asks for their quarterly compliance report. Diana exports all records for their properties across all techs for Q3 in one PDF, attaches it to an email, and sends it in 4 minutes. The customer responds: "This is more organized than any contractor we've worked with." Diana renews her contract with them.

**New Reality:** Diana's shop has full compliance coverage. She can also see each tech's EPA 608 cert expiry on the dashboard. She never worries about a commercial customer audit again.

**Journey Requirements Revealed:** Multi-tech accounts (shared record access up to 5 techs), per-tech EPA cert tracking, shop dashboard (view all techs' records), multi-property record filtering, combined PDF export across techs.

---

### Journey 3: Tyler — FieldPad Refugee (Primary — SEO/Competitor Displacement)

**Opening Scene:** Tyler is 28, recently started his own HVAC business after 5 years at a larger shop. His former coworker recommended FieldPad. Tyler discovers FieldPad is iPhone-only; he uses a Pixel 8. He spends an afternoon evaluating RefriTrak — the free tier is too limited, the paid tier confusing, and the PWA doesn't feel like a native app.

**The Search:** Tyler searches "FieldPad Android alternative" in frustration. The first organic result is a CoolLog blog post titled "The Android Alternative to FieldPad for HVAC Compliance." He reads it, sees the feature comparison table, and downloads the app to try the 14-day trial.

**Trial Experience:** Tyler creates 12 records in his first week. The offline capability is the thing that convinces him — he tested RefriTrak in a basement mechanical room with no signal and it failed. CoolLog worked. He converts to the solo monthly plan before the trial ends.

**Journey Requirements Revealed:** 14-day free trial for monthly plans, trial-to-paid conversion flow, SEO-optimized onboarding (users arrive with clear competitor context), smooth in-app upgrade prompts.

---

### Journey 4: Marcus — Edge Case (Audit Recovery + Error Scenario)

**Scenario:** Marcus is audited by an EPA inspector 18 months after installing CoolLog. The inspector asks for all refrigerant service records for equipment at a specific commercial building for the past 3 years. Marcus has 14 months of CoolLog records and approximately 20 months of pre-CoolLog paper records.

**In-App Experience:** Marcus opens CoolLog, searches by location (commercial building address), selects date range (last 14 months of CoolLog records), exports the audit package PDF. He shows the inspector the PDF within 60 seconds.

**Edge Case — Connectivity Loss During Sync:** Marcus creates 8 records during a week in a remote location with no connectivity. On Friday, when he returns to cell service, CoolLog silently syncs all records. He never knew anything was different.

**Edge Case — Accidental Record Edit:** Marcus realizes he entered the wrong amount (added 2.5 lbs instead of 1.5 lbs). He opens the record, notes it was created 20 minutes ago (within the 24-hour edit window), corrects it, and saves. The record shows the correction timestamp in the audit trail.

**Journey Requirements Revealed:** Location-based record search, full audit package PDF (all records for a location/date range), silent background sync on connectivity restore, 24-hour edit window, audit trail for edits.

---

### Journey 5: Admin / Internal Operations (Support Path)

**Scenario:** A CoolLog customer support agent assists Marcus after he loses his phone and needs to restore his account on a new device.

**Support Experience:** Marcus contacts support. The agent looks up his account in the admin dashboard, confirms his identity, and initiates a full account restore. Marcus installs CoolLog on his new Galaxy S25, logs in, and his 18 months of synced records restore from Supabase within 2 minutes.

**Journey Requirements Revealed:** Supabase cloud backup (all synced records available on re-login), account recovery via email, admin dashboard for support visibility, full data restore on new device.

---

### Journey Requirements Summary

| Capability | Revealed By |
|-----------|-------------|
| Offline record creation | Marcus primary, Tyler edge |
| EPA database search + auto-fill | Marcus primary |
| Photo attachment to records | Marcus primary |
| Single-record PDF export | Marcus primary |
| Date-range PDF export (audit package) | Marcus primary + audit edge |
| Location/property-based record search | Marcus audit edge |
| Edit window (24h) + audit trail | Marcus error edge |
| Multi-tech shared account (up to 5) | Diana secondary |
| Shop dashboard (cross-tech visibility) | Diana secondary |
| 14-day trial flow | Tyler SEO path |
| Account restore on new device | Admin support |
| Silent background sync | Marcus edge |

---

## Domain-Specific Requirements

### Regulatory Compliance (EPA AIM Act Subpart C + Section 608)

**Regulatory Baseline — AIM Act Subpart C (Primary):**
- Effective January 1, 2026, records required for all HFC refrigerant service involving equipment containing >15 lbs of refrigerant with GWP >53
- Records must be retained for 3 years from the date of service
- Required fields per record: date of service, system location, equipment type, refrigerant type, EPA registration number, amount added, amount recovered, technician name, technician EPA 608 certification number
- Leak rate calculation requirement: annual leak rate >10% (comfort cooling) or >20% (commercial refrigeration) triggers mandatory repair within 30 days

**Regulatory Baseline — Section 608 (Secondary, Politically Untouchable):**
- Applies to all appliances containing CFC, HCFC, or HFC refrigerants regardless of charge size
- Technician EPA 608 certification required for purchasing regulated refrigerants
- Records must be kept for 3 years
- Violation fines: up to $59,114/day/violation (administrative), $124,426/day/violation (judicial, 2026 inflation-adjusted)

**Compliance Architecture Decisions:**
- The app must generate records that contain all required EPA fields — no partial record is acceptable
- PDF exports must include all required fields in a format an EPA inspector can verify
- The app cannot allow submission of a record without the required fields (refrigerant type, EPA reg#, amount added/removed, tech cert number)
- 3-year retention is enforced at the account level — users are shown their oldest and most recent records and retention coverage status on the dashboard

### EPA Refrigerant Database Requirements

- Database must be sourced from EPA's publicly available refrigerant registry (not manually maintained)
- Minimum coverage: all refrigerants with GWP >53 currently on the EPA AIM Act Subpart C list
- Each database entry must include: common name(s), EPA registration number, GWP value, AIM Act classification (Subpart C applicable Y/N), Section 608 appliance categories that apply
- Leak rate thresholds: pre-populated per refrigerant and appliance type (10% comfort cooling, 20% commercial refrigeration, 20% industrial process refrigeration)
- Database update mechanism: app checks for database updates on launch when connectivity is available; updates download in background and apply on next cold start
- EPA database version and date must be visible to users (legal exposure if using stale data)

### Data Retention Compliance

- App must not delete records within the 3-year retention window without explicit user confirmation of intent
- If a user attempts to delete a record within the 3-year window, a warning is displayed: "This record is required by EPA regulations. Deletion before [date] may violate federal law."
- Export to CSV provides full data portability (user can keep their own archival copy)
- Cloud backup (Supabase) is not a substitute for local copy — local-first storage ensures records survive account deletion or service discontinuation

### Privacy and Data Handling

- Technician EPA 608 certification numbers are PII and must be stored encrypted at rest
- No third-party analytics SDKs that exfiltrate user data to ad networks
- GDPR-compliant data deletion: user account deletion removes cloud data; local device data requires explicit user action
- User data is never shared with third parties, including EPA (the app is a record-keeping tool, not a filing system)

### Compliance Risk Mitigations

- **Required field enforcement:** All required EPA fields are mandatory before a record can be saved (UI enforces, backend validates)
- **Calibration warning:** If a user enters an unusually large refrigerant amount (e.g., >50 lbs added in one service call), a soft warning prompts confirmation to prevent data entry errors
- **Retention countdown:** Dashboard shows days remaining on oldest records' 3-year retention window
- **Disclaimer:** App displays legal disclaimer on first launch: "CoolLog helps you maintain records required by EPA regulations. It is not a legal compliance guarantee. Consult legal counsel for compliance advice."

---

## Innovation & Novel Patterns

### Offline-First + Regulatory Database Bundle

The key technical innovation is pairing offline-first architecture with a bundled regulatory database. Most mobile apps that require government data fetch it from an API. CoolLog ships the EPA refrigerant database as a SQLite file bundled with the APK. This means:
- Zero network required for any core operation (record creation, database search, PDF generation)
- No API rate limits, no server dependency for field operations
- Database updates are a background operation that never interrupts the user

This pattern — bundled government database + offline-first SQLite — is common in navigation apps (offline maps) and medical reference apps (drug databases) but has not been applied to the HVAC compliance use case.

### Regulatory Lock-In as a Retention Mechanism

Unlike typical SaaS tools where switching cost is workflow re-learning, CoolLog's switching cost is regulatory: a technician's 3-year compliance history cannot be abandoned without violating the very law that drove the purchase. This creates a retention dynamic that compounds over time without requiring the product to continuously improve retention features.

### Market Context

The CoolLog positioning quadrant (Android-native + offline-capable + pre-loaded EPA database + solo-tech pricing) is currently unoccupied:
- FieldPad Pro: iOS-only, no Android
- RefriTrak: Web PWA (not truly offline), free tier absorbs LTD demand
- RefriComply: Not Android-native, no LTD
- RefGuard: $1,499/branch LTD targeting 5–20 tech shops (not solo)

The AppSumo category for HVAC refrigerant compliance is empty — no product currently listed. First mover in a motivated buyer category.

### Validation Approach

- Beta test with 20–50 HVAC techs before AppSumo launch (recruited via r/HVAC and HVAC-Talk)
- Track: first record created within session (target <5min), PDF export within first week, 7-day return rate
- If offline database search is slower than perceived (<200ms target), investigate SQLite indexing before launch

### Risk Mitigation

- **FieldPad Android launch:** Likely in 6–12 months. Mitigate by establishing AppSumo reviews and community presence before they respond.
- **EPA database staleness:** Version + date visible to users; update mechanism in place; monitor EPA regulatory site for changes.
- **Android fragmentation:** Flutter provides reasonable cross-device consistency; target top 5 OEMs for testing; SQLite via Drift ORM is battle-tested on Android.

---

## Mobile App Specific Requirements

### Platform Requirements

- **Primary platform:** Android 8.0+ (API level 26+) — covers >95% of active Android devices as of 2026
- **Secondary platform (Phase 2):** iOS 15+ — same Flutter codebase with platform-specific adjustments
- **Framework:** Flutter — Android-first for MVP, iOS-ready architecture from day one
- **Minimum supported screen sizes:** 5.0" to 7.0" (standard phone form factors; tablets out of scope for MVP)
- **Orientation:** Portrait primary; landscape supported but not optimized for MVP

### Device Permissions

- **Camera:** Optional — used for equipment nameplate photo attachment. Graceful degradation if denied; photo feature simply not available.
- **Location:** Optional — GPS auto-population of service location. Graceful degradation to manual entry. Location permission requested in-context only (when creating a new record), never on cold launch.
- **Storage (Android <10):** Required for PDF export to device storage on older Android versions. On Android 10+, uses MediaStore API (no permission required for PDF export).
- **Network:** Optional at all times — offline-first means zero hard network dependency. Network used only for background sync and database updates.

### Offline Architecture

- **Local storage:** SQLite via Drift ORM — typed, async, tested ORM for Flutter with migration support
- **Offline-first rule:** Every core operation (create record, search database, view records, export PDF) works with zero network connectivity
- **Sync strategy:** Background sync on reconnect, optimistic local writes, last-write-wins conflict resolution (local wins over server for user-created records)
- **Sync queue:** Failed sync operations are queued locally and retried on reconnect; no silent data loss
- **Conflict detection:** Timestamp-based conflict detection; if a record was modified on two devices during offline period, most recent timestamp wins with user notification of merge
- **Sync status indicator:** Visible sync status in app header (synced, syncing, offline, error)

### Database Architecture (EPA Refrigerant Database)

- **Storage format:** SQLite database file bundled with APK (not fetched at runtime)
- **Initial dataset:** All EPA AIM Act Subpart C applicable refrigerants + Section 608 covered refrigerants
- **Indexing:** Full-text search index on refrigerant common name and chemical name for <200ms local search
- **Update mechanism:** On app launch with connectivity, check for database version update from CDN; if newer version available, download in background; apply on next cold start
- **Fallback:** If update fails, continue with current version; log error to remote monitoring; notify user only if database is >6 months old

### PDF Generation

- **Generation location:** Fully local — generated on-device using Flutter pdf package, no server round-trip
- **Generation time:** <3 seconds for single record; <10 seconds for 12-month audit package
- **Output format:** PDF/A-compliant (archival-safe) — ensures long-term readability without software dependency
- **Required EPA fields in PDF:**
  - Service date and time
  - Equipment location (address or description)
  - Equipment type and identifier (serial number or description)
  - Refrigerant type (common name)
  - EPA refrigerant registration number
  - GWP value
  - Amount added (lbs)
  - Amount recovered (lbs)
  - Net charge change
  - Technician full name
  - Technician EPA 608 certification number and certification type
  - Signature line (static "Technician signature on file" text for audit packages; explicit signature block for single-record exports)
- **Share mechanism:** Android native share sheet — email, Google Drive, WhatsApp, file save, etc.

### Billing & IAP

- **Mobile IAP:** RevenueCat SDK for Google Play Billing API abstraction; handles subscription management, restore purchases, trial periods
- **Web billing:** Stripe for web checkout, LTD code redemption, and team subscription management
- **LTD code redemption:** Unique codes generated per AppSumo purchase; redeemed in-app or on web; validates against Supabase backend
- **Free trial:** 14 days for monthly plans; no trial for annual plans (10% annual discount incentive); no trial for LTD (paid in full at AppSumo checkout)
- **Subscription enforcement:** App checks subscription status on cold launch; 7-day grace period if subscription check fails due to connectivity

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — ship the minimum that lets a solo tech log their first compliant record and export their first audit PDF. Every MVP feature either enables this core workflow or supports monetization. Nothing else.

**Lean Constraints:**
- Solo Flutter developer + part-time designer + Supabase backend (managed infrastructure eliminates backend engineering)
- 6-week build target to hit the October 2026 – March 2027 optimal entry window
- AppSumo launch is the primary revenue gate; quality and reliability matter more than feature breadth

**What's Cut from MVP (Intentionally):**
- iOS — Android has the platform gap; iOS is Phase 2 after AppSumo proves the market
- Shop dashboard with per-tech view — MVP gives 5-tech access; shared view is Phase 2
- OCR/barcode scanning — Phase 2 after core logging is validated
- EPA 608 cert renewal reminders — valuable but adds no acquisition; Phase 2 retention feature
- FSM integrations — adds significant scope and partner dependency; Phase 3

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (solo tech) — complete primary journey: log → search database → save → export PDF
- Diana (shop owner) — basic multi-tech access up to 5 techs; individual records only (no shared dashboard)
- Tyler (FieldPad refugee) — 14-day trial + frictionless conversion

**Must-Have Capabilities:**
1. Offline-first service record CRUD (create, read, update within 24h, soft-delete)
2. EPA refrigerant database search with auto-fill (bundled, offline, <200ms)
3. Photo attachment to service records (optional per record)
4. Single-record PDF export (locally generated, one tap from record view)
5. Date-range PDF export / audit package (multiple records, locally generated)
6. Compliance dashboard (monthly summary, record count, retention status)
7. Threshold alert (equipment exceeded leak rate threshold)
8. Account creation + email/password auth (Supabase)
9. Background cloud sync (Supabase realtime)
10. Sync status indicator
11. CSV export (full data portability)
12. Solo tier subscription ($19/month, $190/year) via RevenueCat
13. Small shop tier subscription ($49/month, up to 5 techs) via RevenueCat
14. LTD code redemption (Stripe + Supabase validation)
15. 14-day free trial for monthly plans
16. Account restore on new device (full record restore from cloud)

### Post-MVP Features (Phase 2)

**Platform Expansion:**
- iOS app (same Flutter codebase, platform-specific permission handling)
- Multi-tech shop compliance dashboard (shop owner view with per-tech record visibility, per-tech EPA cert expiry tracking)
- EPA 608 cert renewal push notifications (configurable 30/60/90-day lead time)
- Equipment nameplate barcode/QR scan (auto-populate system identifier and charge weight)
- Enhanced leak rate calculator (input system charge weight; CoolLog calculates annual leak rate automatically from records)
- Zapier/webhook integration for Jobber and GorillaDesk

### Post-MVP Features (Phase 3)

**Commercial Expansion:**
- Contractor-to-building-owner compliance certificate portal
- Multi-tenant facility manager dashboard
- Direct native FSM integrations (Jobber, GorillaDesk, HouseCall Pro)
- Canadian market version (regulatory adaptation)

### Risk Mitigation Strategy

**Technical Risks:**
- *Android fragmentation:* Flutter + top 5 OEM pre-launch testing + Drift ORM (battle-tested). Fallback: cap Android support at 8.0+ (removes edge-case devices).
- *SQLite performance at scale:* 3 years × 8 calls/week × 52 weeks = ~1,248 records per tech. SQLite handles millions of records; no concern.
- *PDF generation size/time:* 12-month audit package = ~500 records. Pre-tested in development; fallback is async generation with progress indicator.

**Market Risks:**
- *FieldPad launches Android:* Launch immediately; establish AppSumo reviews before they respond. CoolLog's first-mover community trust is a durable advantage.
- *RefriTrak free tier absorbs demand:* Compete on offline UX + native Android experience; free tier cannot match truly offline native performance.
- *Market too small:* Validated by RefGuard's $1,499 LTD sales + FieldPad's paid tier existence. Willingness to pay is confirmed.

**Resource Risks:**
- *Solo developer scope creep:* MVP feature list is locked. Any additional feature must displace something currently in scope or go to Phase 2.
- *AppSumo listing timing:* Must complete beta testing with 20–50 real techs before listing goes live. Poor initial reviews are hard to recover from.

---

## Functional Requirements

### Service Record Management

- FR1: Technicians can create a new service record with all required EPA AIM Act Subpart C fields
- FR2: Technicians can search the pre-loaded EPA refrigerant database by refrigerant name and have the EPA registration number, GWP, and AIM Act classification auto-populated
- FR3: Technicians can attach one or more photos to a service record
- FR4: Technicians can edit a service record within 24 hours of creation
- FR5: Technicians can view all their service records in a searchable, filterable list
- FR6: Technicians can search records by location (address or description keyword)
- FR7: Technicians can search records by date range
- FR8: Technicians can search records by refrigerant type
- FR9: Technicians can soft-delete a service record (with regulatory warning if within 3-year retention window)
- FR10: Technicians can view the full edit history (audit trail) for a service record

### Offline & Sync

- FR11: Technicians can create, view, and export records with zero network connectivity
- FR12: The app automatically syncs records to the cloud when connectivity is restored
- FR13: Technicians can view the current sync status (synced / syncing / offline / error)
- FR14: The app resolves sync conflicts automatically (local write wins) with user notification if a conflict occurred

### EPA Refrigerant Database

- FR15: The app provides a searchable EPA refrigerant database that works fully offline
- FR16: The EPA database includes: common name, EPA registration number, GWP, AIM Act Subpart C classification, Section 608 applicability, leak rate thresholds by appliance type
- FR17: The app automatically checks for and downloads EPA database updates when connectivity is available
- FR18: Technicians can view the current EPA database version and last-updated date

### PDF Export & Sharing

- FR19: Technicians can export a single service record as an EPA-compliant PDF in one tap
- FR20: Technicians can export all records for a selected date range as a combined audit package PDF
- FR21: Technicians can export records filtered by location as an audit package PDF
- FR22: PDF exports are generated locally on-device (no network required)
- FR23: Technicians can share exported PDFs via the device's native share sheet (email, Drive, messaging apps, file save)
- FR24: Exported PDFs contain all required EPA fields including technician certification information

### Compliance Dashboard

- FR25: Technicians can view a monthly summary of refrigerant usage by type (lbs added, lbs removed, net)
- FR26: Technicians can view their total record count and the date range covered
- FR27: The app displays a retention status indicator (oldest record date, days until oldest record falls outside 3-year window)
- FR28: The app alerts technicians when equipment at a specific location has exceeded the AIM Act annual leak rate threshold
- FR29: The app alerts technicians when a piece of equipment requires mandatory repair within the 30-day compliance window

### Account & Profile

- FR30: Technicians can create an account with email and password
- FR31: Technicians can store their EPA 608 certification number and type in their profile
- FR32: Technicians can store their EPA 608 certification expiry date in their profile
- FR33: Technicians can restore their full record history on a new device by logging in
- FR34: Technicians can export all their records as a CSV file for external archiving

### Multi-Tech (Small Shop Tier)

- FR35: Shop owners can add up to 5 technician accounts to a single shop subscription
- FR36: Shop technicians can create records attributed to their individual account within the shared shop
- FR37: Shop owners can view records created by any technician on their account (read access)
- FR38: Shop owners can export records across all technicians for a given date range or location

### Billing & Subscriptions

- FR39: New users can start a 14-day free trial for monthly plans without entering payment information upfront
- FR40: Users can subscribe to the solo plan ($19/month or $190/year) via Google Play in-app purchase
- FR41: Users can subscribe to the small shop plan ($49/month) via in-app purchase or web checkout
- FR42: Users can redeem an AppSumo LTD code to activate a lifetime plan
- FR43: Users can view their current subscription status and plan details in the app
- FR44: The app enforces plan limits (record access blocked for expired subscriptions after 7-day grace period)

---

## Non-Functional Requirements

### Performance

- EPA refrigerant database search results appear within 200ms on mid-range Android devices (Samsung Galaxy A series, Pixel 6a equivalents) — this is a hard requirement since field techs are impatient in the field
- Service record save operation completes within 500ms (local SQLite write; sync is background)
- Single-record PDF export completes within 3 seconds on mid-range Android devices
- 12-month audit package PDF (up to ~520 records) generates within 15 seconds; progress indicator required for exports >3 seconds
- App cold start time <3 seconds on mid-range Android devices
- Record list pagination: first 50 records render within 1 second; infinite scroll loads next 50 within 500ms

### Security

- All data stored in Supabase uses row-level security (RLS) — each user can only access their own records; shop owners can access their shop's records
- Technician EPA 608 certification numbers encrypted at rest (AES-256 in Supabase)
- All network communication over HTTPS/TLS 1.2+
- Local SQLite database encrypted at rest using SQLCipher or equivalent (protects data if device is stolen)
- No third-party advertising SDKs or analytics SDKs that exfiltrate user data
- RevenueCat and Stripe handle payment data — CoolLog never stores or transmits raw payment card information
- Authentication tokens stored in Android Keystore (not SharedPreferences)
- Supabase RLS policy: shop owner cannot access other shops' data; individual tech cannot access other techs' records outside their shop

### Reliability

- Core offline functionality (record creation, database search, PDF export) must work with zero network connectivity, indefinitely — no silent degradation after N days offline
- Background sync must achieve eventual consistency: all locally-created records appear in cloud backup within 5 minutes of next connectivity restoration
- Zero record loss on app crash or force-close — SQLite write-ahead logging (WAL mode) ensures atomic writes
- Zero record loss on device reboot during active sync — pending sync queue is persisted to SQLite, not held in memory
- App must not show error screens for connectivity loss — degrade gracefully with offline indicator only

### Scalability

- Initial load design: support 10,000 active users without infrastructure changes (Supabase managed infrastructure handles this automatically)
- Single tech user volume: support ≥10,000 records per user account without performance degradation (this is ~8 years of records at 8 calls/week)
- PDF generation must handle audit packages of ≥500 records without memory errors on devices with 2GB RAM

### Compliance & Legal

- All required EPA AIM Act Subpart C record fields must be present in every saved record — no partial records allowed
- PDF exports must be archival-safe (PDF/A compliant) for 3-year legal retention
- EPA database version and date must be accessible to users for regulatory audit purposes
- App must display legal disclaimer on first launch acknowledging app is a record-keeping aid, not legal advice
- Data deletion within 3-year retention window must require explicit user confirmation with regulatory warning text

### Accessibility

- Text minimum size 16sp for core record fields (field techs often work in bright sunlight or low light; legibility matters)
- Sufficient color contrast (WCAG AA minimum) for all UI elements — critical for outdoor use
- Touch targets minimum 48×48dp for all interactive elements (gloves-compatible entry in cold weather)
- The app does not require accessibility compliance beyond these baseline standards for MVP; full WCAG 2.1 AA is Phase 2

---

## Implementation Notes

### Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Mobile framework | Flutter (Dart) | Android-first with iOS-ready architecture; single codebase for Phase 2 iOS |
| Local storage | SQLite via Drift ORM | Typed async ORM, migrations, offline-first patterns, battle-tested on Android |
| Backend / Auth / Sync | Supabase | Managed Postgres + auth + realtime + row-level security; eliminates backend engineering for MVP |
| PDF generation | `pdf` Flutter package (dart-pdf) | Pure Dart, fully local, PDF/A compliant output, no server round-trip |
| Mobile IAP / billing | RevenueCat | Google Play Billing abstraction, subscription management, restore purchases, trial periods |
| Web billing / LTD codes | Stripe | LTD code generation and validation, web checkout for team plans |
| State management | Riverpod | Reactive, testable, works well with offline-first async patterns |
| EPA database format | SQLite (bundled) | Same local database format as app data; zero additional dependencies |

### Build Timeline

| Sprint | Duration | Deliverables |
|--------|---------|-------------|
| Sprint 1 | Weeks 1–3 | Offline record logger, EPA database, PDF export (single record), compliance dashboard |
| Sprint 2 | Weeks 4–5 | Account/auth, cloud sync, multi-tech (up to 5), billing integration |
| Sprint 3 | Weeks 6–8 | PDF audit package export, CSV export, beta user onboarding (20–50 techs) |
| Launch Prep | Weeks 8–10 | AppSumo listing preparation, Play Store submission, community launch posts |

### Go-to-Market Priority

1. **AppSumo** — unoccupied category; "Pass Your EPA Audit" LTD pitch; 1.25M verified SMB buyers
2. **r/HVAC** (300K+ members) — organic community post with genuine value
3. **HVAC-Talk forum** — professional community; higher trust, more technical
4. **Facebook: "HVAC Business Owners Network," "HVAC Techs and Contractors"**
5. **SEO** — "EPA refrigerant compliance 2026," "FieldPad Android alternative," "HVAC HFC tracking app"
6. **ACCA member newsletter** — 60,000 member businesses
7. **Refrigerant distributor co-marketing** — Airgas, Johnstone Supply

---

**PRD Status:** Complete
**Author:** Root (automated BMAD PRD creation workflow)
**Input Documents:** EPA HFC Refrigerant Compliance App — shortlisted idea + product brief (2026-10-29)
**Next Step:** Architecture → `run-automvp.sh --step architecture --idea hvac-refrigerant-compliance`
