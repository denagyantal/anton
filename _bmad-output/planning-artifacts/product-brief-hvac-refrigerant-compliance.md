---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/epa-hfc-refrigerant-compliance-app.md
  - _bmad-output/planning-artifacts/market-research-hvac-refrigerant-compliance.md
workflowType: 'product-brief'
lastStep: 6
user_name: Root
date: '2026-10-29'
author: Root
---

# Product Brief: CoolLog — EPA Refrigerant Compliance App for HVAC Techs

---

## Executive Summary

CoolLog is an Android-first, offline-capable mobile app that eliminates EPA compliance anxiety for HVAC/R technicians and small shops. Effective January 1, 2026, the EPA's AIM Act Subpart C reduced the HFC refrigerant threshold from 50 lbs to 15 lbs, bringing approximately 70% more HVAC equipment under mandatory federal record-keeping for the first time. Solo techs doing 8 calls/week now generate 1,248+ compliance records over the mandatory 3-year retention window — yet no affordable, Android-native, offline-capable tool exists to manage this.

The market leader, FieldPad Pro, is iOS-only. RefriTrak offers a web-based free tier but lacks true offline capability. No product targeting HVAC refrigerant compliance is currently listed on AppSumo — a 1.25M-buyer platform where a single launch can generate $24,500–$98,000 in LTD revenue.

CoolLog enters as the Android-first, offline-capable, one-tap audit PDF solution built specifically for the solo technician who can't afford a $44,000/day EPA violation but also can't pay enterprise software prices. The pitch is simple: "Pay once. Never worry about an EPA audit again."

**Market opportunity:** $793.8M US HVAC software market (2026), refrigerant monitoring software growing at 9.8% CAGR. ~117,000 HVAC contractor businesses, 78%+ with fewer than 10 employees, majority Android users. Path to $10K MRR within 12 months via LTD launch + community channels.

**Verdict: Build. Tier 1 opportunity. Optimal entry window: October 2026 – March 2027.**

---

## Core Vision

### Problem Statement

Since January 1, 2026, every HVAC/R technician servicing equipment with more than 15 lbs of HFC refrigerant (GWP > 53) is legally required to maintain a federal compliance record for 3 years under EPA AIM Act Subpart C — or face fines up to $124,426 per day per violation. This threshold reduction from the prior 50-lb limit brought approximately 70% more installed equipment into mandatory oversight for the first time.

The vast majority of HVAC technicians are still using paper logs, spreadsheets, or nothing at all. A solo tech running 8 service calls/week accumulates 1,248+ compliance records over the 3-year retention window. Managing that on paper is not just inconvenient — it is a liability that can end a business. Yet the only purpose-built compliance app for solo techs (FieldPad Pro) runs exclusively on iPhone, leaving the majority of Android-using field technicians without a viable solution.

### Problem Impact

- **Regulatory**: Non-compliance with AIM Act Subpart C carries administrative fines of $59,114/day/violation and judicial fines of $124,426/day/violation (2026 inflation-adjusted figures). A single EPA audit revealing documentation gaps can exceed a solo tech's annual revenue in penalties.
- **Operational**: Manual paper logs are error-prone, not searchable, and difficult to produce during an audit. A tech with 3 years of service records needs to retrieve specific records for specific equipment on demand — paper files don't support this.
- **Platform exclusion**: FieldPad Pro is iOS-only. With 55–65% of blue-collar field technicians using Android (stronger Android penetration than the general US population), the majority of the addressable market is locked out of the best-available compliance tool.
- **Field reality**: HVAC techs work in basements, mechanical rooms, rooftops, and crawl spaces — locations with no cell signal. Web-based compliance tools that require connectivity are unusable in real field conditions.

### Why Existing Solutions Fall Short

| Solution | Gap |
|----------|-----|
| **FieldPad Pro** ($29.99/mo) | iOS-only — excludes 55–65% of field techs; no Android app available |
| **RefriTrak** ($0 free / $15–20/seat) | Web PWA not truly offline; free tier undercuts paid adoption; requires onboarding |
| **RefriComply** ($29–99/mo) | Not Android-native; less brand recognition; no LTD option |
| **RefGuard** ($1,499/branch LTD) | Targets 5–20 tech shops; pricing too high for solo techs; too new |
| **Generic FSM tools** (Jobber, GorillaDesk, HouseCall Pro) | Zero refrigerant compliance tracking; scheduling/invoicing only |
| **Paper / spreadsheets** | Not audit-ready; not searchable; no auto-PDF; no threshold alerts |

No product currently combines: **Android-native + offline-capable + pre-loaded EPA database + one-tap audit PDF + solo-tech pricing**. This quadrant is empty.

### Proposed Solution

CoolLog is an Android-first mobile application that provides complete EPA AIM Act Subpart C and Section 608 compliance for HVAC/R technicians. It works offline by default — all data is stored locally in SQLite with background sync to the cloud when connectivity is available.

The core workflow is designed for field use: a technician arriving at a service call can open CoolLog, search the pre-loaded EPA refrigerant database (auto-populates EPA registration number, GWP, AIM Act classification), log the service record in under 60 seconds, and export a compliance PDF in one tap if a customer or inspector asks for documentation.

After 3 years of records accumulate in the app, switching to a competitor means losing the entire compliance history — creating powerful natural lock-in driven by the regulatory retention requirement itself.

**Pricing:**
- $19/month solo tech (unlimited logs)
- $49/month small shop (up to 5 techs)
- $49–79 AppSumo LTD — "Pass your EPA audit"

### Key Differentiators

1. **Android-first** — FieldPad is iOS-only; 55–65% of field techs use Android. CoolLog is built for the platform they actually carry.
2. **Offline-first architecture** — SQLite local storage with background sync. Works in mechanical rooms, basements, rooftops, and any location without cell service. This is a hard requirement for real field use, not a nice-to-have.
3. **Pre-loaded EPA refrigerant database** — Refrigerant name → EPA registration number → AIM Act classification → GWP pre-filled. No manual lookup. No typos on EPA reg numbers. One tap.
4. **One-tap audit PDF export** — Generates an audit-ready PDF containing all EPA-required fields for a specific equipment record or date range. The hero feature. Everything else supports this moment.
5. **3-year retention lock-in** — Once a tech's compliance history lives in CoolLog, switching costs are enormous. Regulatory data retention creates stickiness that typical SaaS tools can't manufacture.
6. **LTD acquisition model** — "Pay once, never worry about EPA audits again" is a compelling one-time purchase message that converts the cost-sensitive solo tech who resists subscription software.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Solo Android Tech

**Profile:** Marcus is 34, EPA Section 608 certified, and runs a one-van residential and light commercial HVAC service business in suburban Houston. He uses a Samsung Galaxy A55. He's heard about the AIM Act changes from his HVAC supply house but hasn't done anything about it yet. He's currently logging refrigerant on carbon-copy paper forms that he keeps in a binder in his truck.

**Day in the life:** Marcus does 6–10 service calls per day. About half involve refrigerant work. He often works in attics in summer heat or utility closets with no cell service. When a service manager at a commercial account asks him to prove his compliance records, he has to go dig through paper binders — which is embarrassing and occasionally he can't find the specific record.

**Problem experience:** Marcus knows he's technically supposed to keep 3 years of EPA records. His paper system works but it's disorganized, not searchable, and he worries about an audit. His real fear is losing his EPA 608 certification or getting a fine that wipes out a month's income. He's not going to pay for FieldPad because he has an Android phone. He's not going to set up a spreadsheet system because he doesn't have time.

**Success vision:** Marcus opens CoolLog, taps to start a new service record, searches "R-410A" and sees the EPA reg number auto-filled. He logs the amount added, takes a photo of the equipment label, and hits save — all in 45 seconds. A year later, a commercial customer's property manager asks for his compliance documentation. Marcus taps "Export PDF" and emails it from the parking lot.

**Purchase trigger:** Community mention in r/HVAC: "Android alternative to FieldPad finally exists." AppSumo LTD at $49 — he buys without thinking hard about it.

---

#### Persona 2: Diana — The Small Shop Owner with Mixed Devices

**Profile:** Diana is 47, owns a 6-tech HVAC company in metro Atlanta. She uses an iPhone; her techs use Android. She's already paying $89/month for HouseCall Pro for scheduling but noticed it has nothing for refrigerant compliance. One of her commercial customers — a property management company with 40 buildings — asked her to provide compliance documentation for the past year of service visits. She spent a weekend manually assembling PDF records.

**Problem experience:** Diana needs her entire team's compliance records in one place, with per-tech tracking and the ability to export records by property or by tech. The weekend she spent reconstructing records manually was the trigger — she needs a real system.

**Success vision:** Diana's techs each have CoolLog on their Android phones. She accesses the shop dashboard on her iPhone (or browser). When her property management customer asks for documentation, she exports all records for their properties in two minutes. She can also see each tech's EPA 608 certification expiry and get a renewal reminder before it becomes her liability.

**Purchase trigger:** AppSumo team tier discovery, or direct sale via HVAC business owner Facebook group. Converts to $49/month team subscription after LTD launch.

---

#### Persona 3: Tyler — The FieldPad Refugee

**Profile:** Tyler is 28, recently started his own HVAC company after 5 years working for a large shop. He heard about FieldPad from a coworker but discovered it's iPhone-only and he uses a Pixel 8. He wants something like FieldPad but for Android, at a price he can absorb in his first year of business.

**Problem experience:** Tyler has looked at RefriTrak but finds the free tier limited and the paid tier confusing. He doesn't want a web app — he wants a native Android experience that works offline in the field.

**Success vision:** CoolLog is "FieldPad for Android" — same use case, same price point, same reliability, just on the platform he actually uses.

**Purchase trigger:** SEO — searches "FieldPad Android alternative" or "HVAC refrigerant compliance app Android." Finds a CoolLog blog post targeting exactly this query.

---

### Secondary Users

#### Commercial Building/Facility Managers

Building owners hold AIM Act compliance responsibility, not just the contractors they hire. A facility manager overseeing 30+ buildings needs to collect compliance records from every HVAC contractor who services their properties. A "contractor compliance certificate" export feature positions CoolLog as the tool techs use to satisfy building owner documentation requests — creating a pull channel from the B2B side.

#### HVAC Instructors and EPA 608 Certification Trainers

Platforms like SkillCat that train HVAC techs for EPA 608 certification are co-marketing opportunities. An instructor who recommends CoolLog to every student as their compliance tracking tool creates a pre-qualified acquisition channel for every new tech entering the field.

---

### User Journey

#### Discovery

- **Marcus** finds CoolLog via a post in r/HVAC: "I've been looking for an Android alternative to FieldPad for months — CoolLog just launched on AppSumo." He reads the AppSumo listing, sees the "Pass Your EPA Audit" headline, checks the reviews, and buys the LTD.
- **Diana** sees a mention in an HVAC Business Owners Facebook group: "Finally a multi-tech compliance dashboard that works on Android." She clicks through, reads about the team tier, and starts a free trial.
- **Tyler** searches "FieldPad Android" after giving up on FieldPad. He finds a CoolLog SEO post ranking for this query and converts directly.

#### Onboarding

- App install takes 30 seconds. First launch asks for: EPA 608 certification number, tech name. Pre-loaded EPA database is bundled — no setup required.
- No training needed for the core workflow. Creating a service record is 3 taps + field entry. The EPA database search is immediate — type "R-410A" and see results in milliseconds (all local, no network required).
- First record created within 5 minutes of install.

#### Core Usage

- Marcus creates a service record at each refrigerant job: opens CoolLog, taps "New Record," searches refrigerant, confirms EPA reg# auto-fill, enters amount added/removed, takes an optional photo of the equipment nameplate. Saves. Done in under 60 seconds.
- The compliance dashboard shows monthly refrigerant usage by type, flags if any equipment is approaching the AIM Act leak rate threshold, and shows the total record count and retention status.
- Background sync runs whenever Marcus has connectivity. His records are stored locally first — he never notices if sync fails.

#### "Aha!" Moment

Marcus's first tap on "Export Audit PDF" — a formatted, EPA-compliant PDF with all required fields appears on screen in 2 seconds, ready to email. He sends it to a commercial property manager from the parking lot. This is the moment that turns a user into an advocate.

#### Long-Term Retention

The 3-year retention requirement is the lock-in mechanism. After 12 months of daily use, Marcus has over 2,000 compliance records in CoolLog. Switching to a competitor would mean manually migrating or losing that history. The regulatory requirement that initially drove the purchase now keeps him subscribed indefinitely.

---

## Success Metrics

### User Success Metrics

**Primary Metric — Compliance Coverage Rate:**
Users who log service records for ≥80% of their refrigerant service calls within 30 days of install. Target: 70%+ of active users at 30 days. This measures whether CoolLog is actually being used for compliance, not just downloaded.

**Secondary Metric — Audit PDF Exports:**
Average of 5+ audit PDF exports per active user per month at 3 months, 10+ at 6 months. PDF exports are the proxy for real compliance use — users who never export PDFs are not using the app for its core purpose.

**Retention Metric — 90-Day Active User Rate:**
70%+ of users who created ≥3 records in month 1 are still active at month 3. Compliance tools should be sticky by nature — low 90-day retention indicates the app isn't embedded in daily workflow.

**Satisfaction Metric:**
App Store rating ≥ 4.3 at 90 days, ≥ 4.5 at 6 months. For HVAC techs, a high rating is powerful social proof — trade communities trust peer reviews heavily.

### Business Objectives

**6-Month Objectives:**
1. Complete MVP and launch on Google Play (Week 6)
2. Execute AppSumo LTD launch (Month 2–3): 200–500 LTD sales at $49–79 avg = $10,000–$40,000 launch revenue
3. Establish community presence in r/HVAC, HVAC-Talk, and Facebook HVAC groups before AppSumo launch
4. Reach $3,000–$5,000 MRR from LTD → monthly subscriber conversion (20% of LTD buyers)

**12-Month Objectives:**
1. $10,000+ MRR from solo tech + small shop subscriptions
2. 500+ active monthly users (MAU)
3. iOS app or cross-platform capability for shop owner access
4. 3 verifiable case studies: "CoolLog helped me pass an EPA audit"

**18-Month Objectives:**
1. $20,000–$25,000 MRR
2. Integration with ≥1 FSM platform (Jobber or GorillaDesk) as a compliance plugin
3. Canadian market expansion (regulatory convergence)
4. Multi-tenant commercial building compliance portal (B2B motion)

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|---------|
| LTD Sales | 100 | 300 | 500 | 750 |
| Monthly Active Users | 80 | 250 | 400 | 600 |
| MRR ($) | $0 | $1,500 | $5,000 | $12,000 |
| App Store Rating | 4.0+ | 4.3+ | 4.5+ | 4.5+ |
| Avg PDF Exports/User/Month | 5+ | 8+ | 10+ | 10+ |
| 90-Day User Retention | — | 65%+ | 70%+ | 75%+ |
| CAC (blended) | <$20 | <$20 | <$25 | <$30 |
| LTV (12mo estimate) | $49 LTD | $228 (12mo sub) | — | — |

**North Star Metric:** Monthly Audit PDFs Generated. This single metric captures whether the app is doing its core job — producing compliance documentation that protects techs from EPA violations. Growth in audit PDFs = growth in real usage = growth in word-of-mouth.

---

## MVP Scope

### Core Features

The MVP must deliver exactly one promise: **a solo HVAC tech can log every refrigerant service call offline on Android and export a compliant audit PDF in one tap.** Every MVP feature either enables this promise or is cut.

#### Feature 1: Offline-First Service Record Logger

- Create a new service record: date, location (manual entry or GPS), equipment type (dropdown), refrigerant type (searchable database), amount added (lbs), amount removed (lbs), technician name, technician EPA 608 cert number
- Records stored locally in SQLite — app is fully functional with zero network connectivity
- Background sync to cloud (Supabase) when connectivity is available
- Edit and delete records within 24 hours of creation

#### Feature 2: Pre-Loaded EPA Refrigerant Database

- Bundled with the app — no network required to search
- Search by common name (R-410A, R-22, R-32, R-454B, etc.) or chemical name
- Auto-populates: EPA registration number, GWP value, AIM Act classification (Subpart C applicable Y/N), leak rate thresholds (Section 608 comfort cooling: 10%/yr)
- Database sourced from EPA's publicly available refrigerant registry
- In-app update mechanism for new refrigerant additions post-launch

#### Feature 3: One-Tap Audit PDF Export

- Export a single equipment record as a PDF (one-tap from the record view)
- Export all records for a date range as a combined PDF (audit package)
- PDF contains all EPA-required fields: date, location, equipment ID, refrigerant type, EPA reg#, amount added/removed, tech name, EPA cert number, signature field
- PDF is generated locally (no server round-trip required) — works offline
- Share via Android native share sheet (email, Drive, WhatsApp, etc.)

#### Feature 4: Compliance Dashboard

- Monthly usage summary: refrigerant type → total lbs added → total lbs removed
- Record count and retention timeline: "You have 847 records covering the last 14 months"
- Simple threshold alert: "Equipment at [location] has exceeded 10% annual leak rate — repair required within 30 days" (calculated from records if annual charge weight is known)
- No complex analytics — one screen, actionable numbers only

#### Feature 5: Account and Sync

- Create account with email + password (Supabase auth)
- Tech profile: name, EPA 608 cert number, cert expiry date
- Cloud backup of all local records
- Offline-first conflict resolution: local write wins, sync on reconnect
- Export full data as CSV for own records

#### Feature 6: Subscription Billing

- Solo tier: $19/month or $190/year (unlimited records, 1 tech)
- Small shop tier: $49/month (up to 5 techs with shared record access)
- LTD: $49 (solo) / $79 (small shop) — time-limited AppSumo launch code redemption
- Stripe for web billing; RevenueCat for mobile in-app purchase management
- 14-day free trial for monthly plans; LTD codes validated without trial

---

### Out of Scope for MVP

The following features are explicitly deferred to Phase 2 and will not be built during the MVP sprint:

- **iOS app** — Android-first is the positioning. iOS comes after AppSumo launch proves the market.
- **Multi-tech shop dashboard** — Small shop tier in MVP gives 5 techs individual access; shared dashboard view and per-tech compliance reporting is Phase 2.
- **Customer-facing compliance certificate portal** — Building owners requesting records from contractors is a genuine use case, but it's B2B complexity. Deferred to Phase 3.
- **FSM integrations** (Jobber, GorillaDesk, HouseCall Pro) — Integration API is Phase 2/3; adds significant scope and partner dependency.
- **EPA 608 certification renewal reminders** — Valuable feature; adds no MVP user acquisition but is a good Phase 2 retention tool.
- **Barcode/QR scanning for equipment labels** — FieldPad has OCR scanning; we defer this to Phase 2 after core logging is validated.
- **Team messaging / in-app communication** — Not a compliance feature; firmly out of scope.
- **IoT sensor integration** — Long-term Phase 4; entirely different market segment.
- **AI-powered leak rate prediction** — Future capability; adds complexity without MVP validation.

---

### MVP Success Criteria

The MVP is validated and ready for Phase 2 investment when all of the following are true at 90 days post-AppSumo launch:

1. **Adoption signal**: ≥ 200 LTD sales within 60 days of AppSumo listing going live
2. **Engagement signal**: ≥ 65% of users who created their first record return within 7 days
3. **Value signal**: Average of ≥ 5 audit PDF exports per active user per month
4. **Quality signal**: App Store rating ≥ 4.2 with ≥ 50 reviews
5. **Revenue signal**: ≥ $5,000 MRR at 90 days (LTD to subscription conversions + direct signups)

If any of these are materially missed, the response is to investigate with user interviews before expanding scope — not to add features speculatively.

---

### Future Vision

**Phase 2 (Months 4–8): Platform Expansion**
- iOS app (native Swift or Flutter cross-platform build from Phase 1)
- Multi-tech shop compliance dashboard: per-tech record visibility for shop owner
- EPA 608 cert renewal reminders (push notifications, configurable lead time)
- Barcode/QR scan of equipment nameplates to auto-populate system charge weight
- Zapier integration webhook for Jobber and GorillaDesk (compliance records pushed to job notes)
- Enhanced leak rate calculator: input system charge weight, CoolLog tracks annual percentage automatically

**Phase 3 (Months 9–18): Commercial Expansion**
- Contractor-to-building-owner compliance certificate portal
- Multi-tenant dashboard for commercial facility managers managing multiple contractors
- Canadian market (regulatory convergence with US AIM Act trajectory)
- Direct integrations with Jobber, GorillaDesk, HouseCall Pro as native compliance add-ons
- Per-contractor subscription for property management companies (B2B revenue stream)

**Phase 4 (18+ Months): Platform Vision**
- IoT refrigerant leak sensor integration (auto-populates records from connected equipment)
- AI-powered leak rate anomaly detection for building owners
- EPA reporting automation (direct electronic filing where regulations allow)
- Acquisition target for a larger FSM platform seeking a compliance layer

**Long-term brand vision:** CoolLog becomes the de facto compliance infrastructure for the HVAC/R industry in the same way that QuickBooks became the de facto financial infrastructure for small businesses — essential, embedded, and switched away from only under duress.

---

## Implementation Notes

### Tech Stack Recommendation

- **Mobile**: Flutter (Android-first, iOS-ready for Phase 2 without code rewrite)
- **Local storage**: SQLite via Drift ORM (offline-first, conflict resolution built-in)
- **Backend**: Supabase (auth + real-time sync + row-level security for multi-tenant)
- **PDF generation**: pdf_flutter or printing package (local generation, no server round-trip)
- **Billing**: RevenueCat (mobile IAP abstraction) + Stripe (web/LTD code redemption)
- **EPA database**: CSV sourced from EPA's publicly available refrigerant data, bundled as SQLite

### Build Timeline

| Sprint | Duration | Deliverables |
|--------|---------|-------------|
| Sprint 1 | Weeks 1–3 | Core offline logger, EPA database, PDF export, basic compliance dashboard |
| Sprint 2 | Weeks 4–5 | Account/sync, billing integration, Play Store submission |
| Sprint 3 | Weeks 6–8 | Beta user onboarding (20–50 techs), AppSumo listing preparation, iteration |
| Launch | Week 8–10 | AppSumo listing live, community launch posts |

### Go-to-Market Channels (Priority Order)

1. **AppSumo** — unoccupied category; 1.25M verified SMB buyers; "Pass Your EPA Audit" LTD pitch
2. **r/HVAC** (300K+ members) — organic community post with genuine value; no spam
3. **HVAC-Talk forum** — dedicated professional community; more technical, higher trust
4. **Facebook: "HVAC Business Owners Network," "HVAC Techs and Contractors"** — owner-facing
5. **SEO content** — "EPA refrigerant compliance 2026", "HVAC HFC tracking Android", "FieldPad Android alternative"
6. **ACCA member newsletter** — 60,000 member businesses; single mention = massive reach
7. **Refrigerant distributor co-marketing** — Airgas, Johnstone Supply: compliance app bundled with refrigerant purchases

---

## Risk Summary

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| FieldPad launches Android app | High (6–12 mo) | High | Launch immediately; establish AppSumo reviews before they respond |
| RefriTrak free tier absorbs demand | Medium | Medium | Compete on offline UX + native Android; free tier can't match true offline |
| EPA enforcement delays | Low | High | Cover both Subpart C and Section 608; Section 608 is politically untouchable |
| Market too small | Low | Low | RefGuard $1,499 LTD + FieldPad paid tiers validate willingness to pay |
| App quality issues on Android fragmentation | Medium | Medium | Prioritize top 5 Android OEMs; Flutter provides reasonable cross-device consistency |

---

**Product Brief Completion Date:** 2026-10-29
**Author:** Root (automated BMAD product brief workflow)
**Input Documents:** EPA HFC Refrigerant Compliance App shortlisted idea + market research (2026-10-28)
**Next Step:** Create PRD → `run-bmad-pipeline.sh` (PRD creation step)
