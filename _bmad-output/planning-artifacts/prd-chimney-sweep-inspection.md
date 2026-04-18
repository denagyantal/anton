---
stepsCompleted:
  - step-01-init.md
  - step-02-discovery.md
  - step-02b-vision.md
  - step-02c-executive-summary.md
  - step-03-success.md
  - step-04-journeys.md
  - step-05-domain.md
  - step-06-innovation.md
  - step-07-project-type.md
  - step-08-scoping.md
  - step-09-functional.md
  - step-10-nonfunctional.md
  - step-11-polish.md
  - step-12-complete.md
inputDocuments:
  - ideas/shortlisted/chimney-sweep-inspection-crm.md
  - _bmad-output/planning-artifacts/research/market-chimney-sweep-inspection-research-2026-04-17.md
  - _bmad-output/planning-artifacts/brief-chimney-sweep-inspection.md
workflowType: prd
date: '2026-04-18'
author: Root
project_name: SweepHQ
classification:
  projectType: saas_b2b
  domain: field_service_vertical_saas
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — SweepHQ

**Author:** Root
**Date:** 2026-04-18
**Product:** SweepHQ — Chimney Sweep & Specialty Inspection CRM
**Version:** 1.0

---

## Executive Summary

SweepHQ is a purpose-built scheduling, CRM, and compliance platform for chimney sweep companies — a $550M North American trade with ~8,000 US businesses, a proven $52,500/month MRR incumbent, and zero dominant software player offering all-inclusive tooling at an accessible price point. The core business problem is structural: 85% of US chimney sweep operators run on paper calendars, handwritten NFPA 211 inspection forms, and Excel spreadsheets — losing an estimated $15,000–$25,000/year per operator in missed annual appointment reminders alone.

SweepHQ captures the unoccupied market position: all-inclusive flat pricing at $99/month with chimney-specific customer profiles, pre-built NFPA 211 Level 1/2/3 inspection checklists, automated annual reminder triggering, before/after photo documentation, one-click professional PDF inspection report generation, and mobile-first design that works day one with zero configuration. The closest competitor (LayCor) charges $88–$102/month all-in only after stacking mandatory add-ons on a $49/month base, creating pricing confusion and customer distrust. ChimSpect provides inspection reporting at $99–$144/month but has no CRM or scheduling. No competitor delivers the full workflow at a flat price with the compliance layer built in.

**North Star Metric:** Annual service reminders triggered per month — the leading indicator that operators have loaded their customer base, configured recurring annual cycles, and are actively recovering rebooking revenue through the platform.

**Launch Strategy:** $249–$299 Lifetime Deal seeded through the NCSG (National Chimney Sweep Guild) community and Facebook groups, converting to $99/month subscription. Target: 100 LTD sales in 90 days, $15,000–$20,000 MRR by Month 12.

### What Makes This Special

Three compounding differentiators create a moat that generic field service tools (Housecall Pro, Jobber, ServiceTitan) cannot replicate through configuration alone:

1. **NFPA 211 compliance is structural, not configurable.** Level 2 inspections at every real estate transfer legally require documented findings. SweepHQ ships with Level 1/2/3 inspection checklists pre-built to NFPA 211 standards — a compliance layer that generic FSM tools have never built because the addressable market was too small for VC-backed software. For chimney sweep operators, this feature is non-discretionary.

2. **Annual reminder automation is the revenue recovery mechanism.** Chimney sweep businesses have 60–70% recurring customer potential but achieve 30–40% actual rebooking because there is no automated follow-up system. A working annual reminder loop — 11 months after each service, SMS + email with direct booking link — is the single highest-ROI feature in the product. LayCor charges $8/month as an add-on; generic tools have limited support; no tool makes this the hero feature. SweepHQ does.

3. **Chimney-specific data model creates switching costs.** Once a technician's full customer database — flue type, liner material, appliance configuration, inspection findings, before/after photos — lives in SweepHQ, migrating away means losing irreplaceable compliance documentation. The product becomes more valuable as data accumulates, compounding retention.

## Project Classification

- **Project Type:** SaaS B2B — mobile-first field service vertical SaaS
- **Domain:** Field service / specialty inspection (vertical: chimney sweep trade)
- **Complexity:** Medium — NFPA 211 compliance templates, offline mobile sync, photo storage, PDF generation, SMS/email automation, Stripe integration
- **Project Context:** Greenfield — no existing codebase; purpose-built from scratch

---

## Success Criteria

### User Success

**Primary Operator Success (Brian / Kelly persona):**
- Operator loads existing customer base and activates annual reminders within 48 hours of signup
- Level 1 inspection form completion takes ≤8 minutes in the field (vs. 15–20 minutes for paper + end-of-day entry)
- PDF Level 2 inspection report generated and emailed to homeowner within 5 minutes of job completion
- Real estate attorney request fulfilled by pulling customer record and generating report in under 2 minutes
- Operator can answer "when was this customer's last service?" without leaving the app

**Field Technician Success (Jake persona):**
- Technician views day's schedule with customer chimney profiles at 7am without calling the office
- All inspection data captured digitally on-site — zero end-of-day paper reconstruction
- Photos captured in-app auto-link to customer record with no additional steps

**Quantified Rebooking Recovery:**
- Operators with 150+ active accounts who activate annual reminders achieve ≥60% rebooking rate (up from industry average ~35%)
- Target: operators report recovering $10,000–$20,000/year in previously lost annual appointment revenue within 6 months

### Business Success

| Metric | Month 3 | Month 12 | Year 2 |
|--------|---------|---------|--------|
| LTD Sales | 100 units | 200 units | Closed |
| Monthly Subscribers | 20 | 175 | 500 |
| MRR | $2,000 | $17,325 | $50,000 |
| Annual Reminders/Month | 200 | 3,000 | 10,000 |
| Inspection Reports/Month | 150 | 2,000 | 8,000 |
| Trial-to-Paid Conversion | 15%+ | 22%+ | 28%+ |
| Monthly Churn | <5% | <3% | <2% |
| NPS (30-day) | 35+ | 45+ | 55+ |
| Capterra/G2 Rating | 4.0+ (15 reviews) | 4.5+ (75 reviews) | 4.6+ (250 reviews) |

**Go/No-Go Decision (Month 3):** If 100+ LTD sales, 65%+ inspection form completion, and 40%+ PMF score (Sean Ellis test), proceed to Phase 2. If reminder adoption <50%, invest in onboarding before scaling acquisition.

### Technical Success

- Offline inspection form completion syncs without data loss on reconnection
- PDF report generation completes in ≤15 seconds
- Annual reminder SMS/email delivery rate ≥97%
- Mobile app load time ≤3 seconds on 4G connection
- Photo upload to customer record completes in ≤10 seconds per photo on 4G
- System uptime ≥99.5% during peak season (September–November)
- Zero data loss during offline-to-online sync conflicts

### Measurable Outcomes — MVP Validation

| Criterion | Target | Method |
|-----------|--------|--------|
| PMF Score | 40%+ "very disappointed" if gone | In-app Sean Ellis survey at 30 days |
| Annual Reminder Adoption | 70%+ active accounts configured within 30 days | App analytics |
| Inspection Form Use | 65%+ of Level 1/2 inspections use digital form by Month 2 | App analytics |
| Report Generation | 60%+ of Level 2 inspections generate PDF within 24h | Report generation events |
| Onboarding Activation | 70%+ complete first digital inspection within 48h of signup | Activation analytics |
| Retention Signal | 55%+ trial-to-active conversion at 14 days | Trial analytics |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Weeks 1–10)

**Core Value Delivered:** An operator can load their customer base, run daily field operations with digital inspection forms, generate NFPA-compliant PDF reports, and activate annual reminder automation — replacing paper entirely for every core workflow.

**Essential Capabilities:**
1. Chimney-specific customer profiles with service history timeline
2. NFPA 211 Level 1/2/3 digital inspection checklists (offline-capable)
3. Before/after photo capture linked to service records
4. Annual reminder automation (SMS + email, configurable trigger, booking link)
5. Calendar-based appointment scheduling with drag-and-drop
6. Online booking widget (embeddable + shareable link)
7. Geographic route view for day's appointments
8. One-click NFPA-compliant PDF inspection report generation
9. Branded PDF report email delivery to homeowner
10. Invoice generation with Stripe online payment
11. Mobile-first iOS + Android apps (offline-capable)
12. Owner/manager dashboard (jobs, reminders, revenue, overdue accounts)
13. Multi-technician account support (flat per-company pricing)
14. CSV import for customer migration from Excel

**Explicitly Out of Scope for MVP:**
- Camera inspection video storage and upload
- QuickBooks/Xero accounting sync
- Two-way SMS customer chat
- ML-optimized route sequencing
- Dryer vent cleaning workflow templates
- Radon/air duct cleaning service types
- Customer self-service portal
- Franchise/multi-location management
- AI chimney condition assessment from photos
- Marketing automation (review request campaigns)

### Growth Features — Phase 2 (Months 4–9)

- Camera inspection video upload and storage (linked to customer record, Level 2 documentation)
- Route optimization engine (ML-based sequencing for multi-stop days)
- Dryer vent cleaning service type + inspection checklist template
- QuickBooks sync for accounting integration
- Two-way SMS customer messaging
- Review request automation (post-service Capterra/Google link)
- Referral program (1 month free per successful referral)

### Vision — Phase 3 (Year 2)

- Radon testing and air duct cleaning service workflows (adjacent trade expansion)
- Franchise/multi-location management for networks like Midtown Sweeps
- AI-assisted chimney condition assessment from before/after photos
- Customer portal (homeowner maintenance history access)
- Real estate integration (Level 2 reports accessible from MLS listings)
- Insurance carrier documentation sharing workflow
- White-label/reseller tier for franchise brands

---

## User Journeys

### Journey 1: Brian — The Real Estate Emergency (Primary User, Core Path)

Brian owns Blue Ridge Chimney Services in Charlotte, NC. On a Tuesday afternoon, he gets a voicemail from a real estate attorney: "We need the NFPA 211 Level 2 inspection documentation for 1842 Maple Drive — the buyer's attorney says the handwritten form isn't sufficient and the closing is in 72 hours."

Brian digs through his filing cabinet for 45 minutes. He finds the carbonless paper form. It's too faded to scan clearly. He calls the attorney back to explain. The attorney's tone is cold: "This is a problem."

That evening, Brian searches "chimney inspection software NFPA 211 compliant report." He finds SweepHQ through a Facebook group post in "Chimney Sweep Business Owners." He reads: "NFPA 211 Level 1/2/3 inspection forms included. One-click PDF report for real estate."

He starts a 14-day trial. Over 30 minutes, he imports his 280 customer records from an Excel spreadsheet. SweepHQ maps customer name, address, phone, and last service date automatically. He manually adds chimney profile fields for his 20 most frequent accounts.

The next morning he services a new Level 2 inspection job. Jake opens SweepHQ on his iPhone, navigates to the job, opens the Level 2 checklist — it's fully pre-built to NFPA 211 standards. He checks each item, marks three items "marginal" with findings notes, photographs the smoke chamber and liner, and submits. Total time: 14 minutes.

Brian logs in from his truck. He opens the customer record, clicks "Generate Report." A branded PDF appears with his company logo, Jake's CSIA certification number, all checklist findings, before/after photos, and a professional recommendations summary. He attaches it to an email from within SweepHQ and sends it to the homeowner. Total time: 90 seconds.

**The aha moment:** Two days later, a different attorney calls requesting records on another property. Brian pulls up the record, clicks Generate Report, and sends the PDF in under 2 minutes. He texts his wife: "I should have had this 10 years ago."

**Journey requirements revealed:** Customer search, inspection form completion, photo attachment to records, one-click PDF report generation, in-app email delivery.

---

### Journey 2: Kelly — The Annual Reminder Saturday (Primary User, Revenue Recovery)

Kelly runs a solo chimney sweep and dryer vent business in Denver. Every September she loses a full Saturday to manually texting her 110 customers: "Hi! It's Kelly from Front Range Chimney. Time for your annual sweep!" She copies and pastes all day. She gets 23 responses. She forgets to text 12 customers. Three more never respond to texts.

She joined SweepHQ in February after seeing it mentioned in an NCSG Facebook group. The $249 LTD price was the deciding factor — she pays once and scales without worrying about per-seat pricing.

In February, she adds all 110 customers. For each completed job, she sets the annual reminder to fire 11 months later. By September, when her reminder Saturday would have started, SweepHQ has already automatically sent 67 SMS messages and 67 email reminders — each with her online booking link — to customers whose last service was September through November the prior year.

She opens her dashboard on the first Monday of September: 19 customers have already self-booked their annual sweep via the booking link. She didn't send a single text.

By the end of the fall season, 71% of her returning customers have rebooked — up from her manual average of 52%. She estimates she recovered 20 jobs she would have missed to inertia. At $165/average job, that's $3,300 in recovered revenue — more than 13x the LTD price.

**Journey requirements revealed:** Annual reminder configuration per customer, automated SMS/email dispatch at trigger date, booking link embedded in reminder, reminder delivery log, self-booking widget, conversion tracking from reminder to booked appointment.

---

### Journey 3: Jake — The Morning Briefing (Technician/Field User)

Jake is 27, a CSIA-in-progress technician at Blue Ridge Chimney Services. Before SweepHQ, his day started with a text from Brian at 7:30am listing 6 addresses and service types. He'd plug them into Google Maps one by one. When he arrived at a house, he had no information about the chimney except the service type.

Now Jake opens SweepHQ at 7am. His 6 jobs for the day are displayed in geographic sequence on a map. Job 3 shows: "Margorie Kellner — 47 Oak St. Level 1 inspection. Masonry chimney, clay tile liner, wood burning. Last service Oct 2024. Note from Brian: hairline crack observed in smoke chamber — monitor on this visit."

Jake navigates to Job 1. He arrives, opens the Level 1 checklist. He photographs each major component as he inspects. He marks the chimney cap "marginal" and adds a note: "cap mortar eroding, recommend replacement." He taps Submit. The inspection is recorded, timestamped, and linked to Mrs. Henderson's customer record. Jake spends 4 minutes on the form.

No paper. No end-of-day reconstruction. At 4pm, he finishes job 6. He has zero forms to fill out. He sends Brian a message through the app about a job he needs a repair quote on. He goes home.

**Journey requirements revealed:** Technician schedule view with chimney profile context, in-app navigation, offline inspection form completion, in-app photo capture with auto-linking, previous service history visible before job, technician notes and communication.

---

### Journey 4: Brian — Fall Rush Scheduling Overload (Primary User, Edge Case)

It's October 3rd. Brian's phone rings 11 times before 10am. Three are new customers; two are existing customers wanting to rebook; two are callbacks from last week. He's on a roof. He misses all of them.

By noon he has 4 voicemails, 6 missed calls, and a text from an existing customer asking "are you still in business?" He double-booked two slots on Thursday. His handwritten calendar has a coffee stain over Tuesday.

Six months earlier, Kelly had told him about SweepHQ's online booking widget at an NCSG regional meeting. He embeds the booking widget on his website. He texts the link to anyone who calls.

By October 10th, 60% of new inquiries book themselves via the widget — they pick their service type, select from his available time windows, and confirm. Brian's calendar shows the booked slots automatically. Double-booking is eliminated because the widget blocks time that's already taken. He returns from a job at 2pm and finds 3 new appointments already scheduled for next week without a single phone call.

**Journey requirements revealed:** Online booking widget with calendar availability sync, service type selection, time window selection, automatic calendar blocking on booking, booking confirmation notification to operator.

---

### Journey 5: Admin/Owner — Company Configuration (Admin User)

Brian's first 30 minutes in SweepHQ: He creates his company profile and uploads his Blue Ridge Chimney Services logo. He creates technician accounts for Jake and his part-time tech Marcus. He configures three service types: Annual Chimney Sweep ($185), Level 1 Inspection ($150), Level 2 Inspection ($275). He sets all three to trigger annual reminders at 11 months.

He verifies his Stripe account connection for payment collection. He sets his booking widget to show 2-hour time windows, Monday–Saturday, starting 8am. He sets a 1-day advance booking minimum so he can prep routes.

Configuration time: 28 minutes.

The following Monday, both Jake and Marcus log into SweepHQ on their phones. They see their separate schedules. Marcus's jobs show the customer profiles Brian's team has entered. Each technician only sees their own schedule unless Brian grants them expanded access.

**Journey requirements revealed:** Company profile + logo upload, multi-technician account creation with role-based access, service type configuration with default invoice items, Stripe account connection, booking widget configuration (time windows, availability rules, advance booking rules).

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Real estate emergency | Customer search, inspection checklist completion, photo-to-record linking, one-click PDF generation, in-app email delivery |
| Annual reminder recovery | Per-customer reminder configuration, automated SMS/email dispatch, booking link in reminder, reminder delivery log, booking widget |
| Technician morning briefing | Technician schedule with chimney profile context, navigation integration, offline checklist, auto-linked photos, prior service history |
| Fall rush self-booking | Online booking widget, calendar availability sync, service type selection, double-booking prevention, operator booking notification |
| Admin setup | Company profile, multi-tech accounts, role-based access, service type config, Stripe integration, booking widget rules |

---

## Domain-Specific Requirements

### NFPA 211 Compliance Layer

**Standard Overview:** NFPA 211 (Standard for Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances) is the governing standard for chimney inspection in the United States. It defines three levels of inspection with specific scope requirements for each.

**Level 1 Inspection (Visual):**
- Inspects accessible portions of chimney exterior, interior, and accessible portions of applicable connected appliances
- Required items: chimney exterior condition, crown, cap, flashing, interior surfaces accessible without special tools, damper operation, firebox and smoke chamber
- SweepHQ must include all NFPA 211 Level 1 checklist items — operators cannot add or remove compliance items (though they can add supplemental notes)

**Level 2 Inspection (Video Scan):**
- All Level 1 items plus all accessible portions including attic, crawlspace, basement
- Required at: every sale or transfer of property; change of fuel type or heating system; after operation malfunction or external event
- Requires documentation of video scan notation
- SweepHQ must produce a Level 2 inspection report that satisfies real estate attorneys and insurance carriers — this is the primary liability-facing output

**Level 3 Inspection (Invasive):**
- All Level 2 items plus removal of components as necessary for access
- Required when: Level 1/2 reveals hazard that cannot be evaluated otherwise
- Least common; SweepHQ must support documentation even if it is rarely triggered

**Compliance Requirements for Report Output:**
- Report must include: technician name, CSIA/NCSG certification credentials, inspection date, property address, inspection level, all checklist findings by section, pass/fail/marginal status per item, technician notes, before/after photos, recommendations
- Report must be delivered as a professional PDF — handwritten or plain-text output is insufficient for real estate transactions
- SweepHQ cannot modify the compliance items in Level 1/2/3 checklists without operator notification and version tracking

### CSIA/NCSG Credential Display

- Technician profiles must support CSIA (Chimney Safety Institute of America) certification number entry
- NCSG (National Chimney Sweep Guild) member ID field
- Both credential numbers must appear on generated inspection reports

### Inspection Data Integrity

- Completed inspection forms are append-only — findings cannot be edited after sync to prevent liability exposure
- Offline inspections completed in areas without signal must sync completely on reconnection without data loss
- Each inspection record must store: technician ID, device timestamp (local), server receipt timestamp, GPS coordinates if available

### Seasonal Business Patterns

- September–November is peak season; system must handle 5–10x normal booking volume during this period without degradation
- Annual reminder batch dispatch must be rate-limited to avoid SMS/email carrier delivery issues during peak demand

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Vertical SaaS + Compliance Automation in an Analog Trade:**
SweepHQ enters a market where 85% of operators use paper forms and Excel — not because software doesn't exist, but because existing software wasn't purpose-built for the trade's compliance and annual-cycle structure. The innovation is not technical novelty but market positioning: bringing SaaS-grade CRM + compliance tooling to a trade that has been systematically underserved by VC-backed FSM tools that find the TAM "too small."

**Structural Revenue Recovery Through Automated Annual Cycles:**
The annual reminder automation is innovative in its market context: no competing tool treats this as a hero feature. LayCor sells it as an $8/month add-on. Housecall Pro requires manual setup and lacks chimney-specific service cycle logic. SweepHQ makes annual reminders the default activation state — every new customer record automatically triggers a 11-month follow-up cycle unless explicitly disabled. This "opt-out reminder architecture" structurally changes the rebooking economics of chimney sweep businesses in ways competitors haven't modeled.

**Compliance Documentation as Competitive Moat:**
The NFPA 211 inspection template library, once populated with 2+ years of customer inspection histories, creates a switching cost that is genuinely irreversible: operators cannot export their before/after photo library, inspection finding timelines, or compliance report history to generic tools. This is a data moat, not a features moat.

### Market Context

The comparable market proof point is Skimmer (pool service SaaS) and FieldWorx (pest control SaaS) — both vertical field service tools that achieved $10M+ ARR by building purpose-specific tools for trades that generic FSM incumbents considered too niche. The $52,500/month MRR incumbent in the chimney sweep space confirms the market is already willing to pay; SweepHQ's innovation is capturing the 85% of operators that incumbent hasn't reached by removing the pricing friction and configuration tax.

### Validation Approach

- Alpha test with 5–10 NCSG Facebook group operators: measure time-per-Level-1-inspection (target: ≤8 minutes field completion)
- A/B test reminder activation: auto-on default vs. explicit setup — measure reminder adoption rate at 30 days
- Real estate attorney response test: send 10 SweepHQ-generated Level 2 reports to real estate attorneys in 3 markets; measure acceptance rate vs. handwritten forms

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Each chimney sweep company is an isolated tenant with its own customer database, inspection records, and billing
- Single owner account per company in MVP; multi-technician accounts under the owner
- Tenant isolation: technician at Company A cannot access Company B's data
- LTD license covers up to 2 technician accounts; additional technicians require upgrade to monthly subscription

### Permissions Model

| Role | Capabilities |
|------|-------------|
| Owner/Admin | Full access: customers, inspections, photos, reminders, reports, invoices, scheduling, settings, all technician accounts |
| Technician | View assigned schedule, view assigned customer profiles and history, complete inspection forms, capture photos, submit completed jobs; cannot access billing, cannot see other technicians' schedules, cannot modify reminder settings |

### Subscription & Billing

- Pricing tiers: LTD ($249 one-time, ≤2 technicians); Solo $79/month (1 technician, owner); Pro $99/month (unlimited technicians)
- Stripe subscription management for monthly recurring billing
- LTD upgrade prompt: when LTD account exceeds 2 technicians, operator is prompted to upgrade to Pro
- 14-day free trial on monthly plans; no credit card required to start

### Onboarding Requirements

- CSV customer import wizard required for Day 1 activation (most operators have customer lists in Excel)
- NFPA inspection forms pre-populated — no configuration required to start first inspection
- Service types pre-loaded with chimney sweep, Level 1, Level 2, Level 3, repair, estimate
- Onboarding must reach "first completed digital inspection" in ≤60 minutes from account creation

### Customer Data Portability

- Operators can export their customer list + service history as CSV at any time (prevents lock-in anxiety)
- Photo download: operators can bulk-export all photos associated with a customer record
- Inspection reports: operators can batch-download all generated PDFs for a customer or date range

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-proof MVP — the product must demonstrably recover rebooking revenue for operators within 30 days of signup, confirming the product's core value proposition with measurable dollar outcomes. The MVP is not "minimum features to ship" but "minimum features to prove the reminder and compliance workflow recovers enough revenue to justify $99/month."

**Critical Path to First Value:** Customer import → service history entry → annual reminder activation. This 3-step sequence is the activation event. If an operator completes these three steps, they will almost certainly see their first automated reminder fire within weeks, creating a direct attribution between SweepHQ and recovered revenue.

**Resource Requirements:** 1–2 full-stack developers, 1 mobile developer (React Native or Flutter), design resources for PDF report templates and mobile UX. Target build time: 8–10 weeks to feature-complete MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner imports customers and activates annual reminder automation
- Technician completes NFPA inspection form in the field with photo capture
- Owner generates professional PDF Level 2 inspection report from completed form data
- Owner views upcoming reminders, rebooks, and tracks revenue
- Customer self-books via online booking widget or direct link

**Must-Have Capabilities (all listed under Functional Requirements):**
- Customer database with chimney profiles and service history (FR1–FR6)
- NFPA 211 inspection checklists Level 1/2/3, offline-capable (FR7–FR12)
- Before/after photo documentation (FR13–FR16)
- Annual reminder automation with SMS + email (FR17–FR22)
- Appointment scheduling + online booking widget (FR23–FR30)
- PDF inspection report generation and delivery (FR31–FR34)
- Invoice + Stripe payment collection (FR35–FR38)
- Mobile technician app (FR39–FR42)
- Owner dashboard (FR43–FR46)
- Account and user management (FR47–FR49)

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Camera inspection video storage (Level 2 documentation completeness)
- ML route optimization for multi-stop days
- Dryer vent cleaning inspection checklist and service type
- QuickBooks sync
- Two-way SMS customer chat
- Automated review request after job completion

**Phase 3 (Year 2):**
- Radon testing + air duct cleaning service types
- Franchise/multi-location management
- Customer portal (homeowner maintenance history)
- AI chimney condition assessment from photos
- Real estate and insurance carrier integration

### Risk Mitigation Strategy

**Technical Risks:**
- Offline sync conflicts in inspection data → Append-only inspection records (not editable after sync); conflict flagging for owner review; field-tested in areas with poor 4G signal before launch
- Photo storage costs at scale → Compress photos at upload (target ≤500KB per photo); tiered storage after 12 months; pricing model accounts for storage infrastructure

**Market Risks:**
- Unknown $52.5K/month incumbent has superior features → Survey NCSG community to identify the tool before launch; if it exists, differentiate on flat pricing and upcoming camera video storage; its existence validates the market and the willingness to pay
- LayCor adds flat pricing + NFPA forms → Move fast; build NCSG community trust and vendor partner status before LayCor can react; association endorsement creates defensibility

**Resource Risks:**
- If solo developer team → Deprioritize route map view and defer to Phase 2; ship with calendar view + list view for scheduling; annual reminders and inspection forms are the non-negotiable MVP core
- Seasonal churn (quiet Oct–Mar period) → Annual billing option with discount; emphasize year-round value (customer database, reminder automation, spring season prep)

---

## Functional Requirements

### Customer & Property Management

- **FR1:** Owner can create customer profiles with contact information (name, address, phone, email) and link them to a property address
- **FR2:** Owner can add chimney configuration to any customer profile (flue type, liner material, fireplace type, fuel type, appliance make/model, date of last service, next recommended service date)
- **FR3:** Owner and technician can view a chronological service history timeline per customer showing all past jobs, dates, technicians, findings summaries, and photos
- **FR4:** Owner can assign status tags to customers (due for annual sweep, Level 2 required, repair recommended, sold/new owner, VIP, do-not-contact)
- **FR5:** Owner can search customers by name, address, or phone number
- **FR6:** Owner can import customer records from a CSV file with field mapping support

### Inspection & Compliance Workflows

- **FR7:** Technician can open and complete a pre-built NFPA 211 Level 1 inspection checklist from a mobile device while assigned to a job
- **FR8:** Technician can open and complete a pre-built NFPA 211 Level 2 inspection checklist from a mobile device while assigned to a job
- **FR9:** Technician can open and complete a pre-built NFPA 211 Level 3 inspection checklist from a mobile device while assigned to a job
- **FR10:** Technician can rate each inspection checklist item as pass, fail, or marginal
- **FR11:** Technician can enter free-text findings for any inspection section
- **FR12:** Technician can complete inspection checklists without active internet connection; all data syncs to the customer record when connectivity is restored

### Photo Documentation

- **FR13:** Technician can capture photos using the device camera from within the app during a service visit; photos are automatically linked to the active job record
- **FR14:** Technician can categorize each captured photo by chimney location (exterior crown, exterior masonry, firebox, smoke chamber, liner, damper, flashing, appliance connection)
- **FR15:** Owner and technician can view a before/after comparison of photos from any two service visits for a customer
- **FR16:** Owner and technician can view a complete chronological photo timeline across all service visits for a customer

### Annual Reminder Automation

- **FR17:** Owner can configure an automatic reminder trigger per customer specifying the interval in months after each completed service (default: 11 months)
- **FR18:** System automatically sends an SMS message and email to the customer at the configured trigger date
- **FR19:** Reminder messages include the operator's direct online booking link
- **FR20:** Owner can view a per-customer reminder delivery log showing sent, opened, clicked, and booked status
- **FR21:** Owner can manually suppress or reschedule an individual customer's reminder without affecting other customers
- **FR22:** System automatically cancels a scheduled reminder if the customer books a new appointment before the reminder fires

### Scheduling & Online Booking

- **FR23:** Owner can view, create, and manage appointments in calendar views (day, week, and month)
- **FR24:** Owner can reschedule appointments using drag-and-drop on the calendar
- **FR25:** Owner can view all technicians' schedules on a unified calendar
- **FR26:** Owner can assign a job type to each appointment (Annual Sweep, Level 1 Inspection, Level 2 Inspection, Level 3 Inspection, Chimney Repair, Estimate, Dryer Vent Cleaning)
- **FR27:** Owner can view the day's appointments plotted geographically in route sequence
- **FR28:** Owner can generate a shareable booking link that customers can open in any browser to book an appointment
- **FR29:** Owner can embed a booking widget on their own website using a JavaScript snippet or iframe
- **FR30:** Customer can complete a self-booking flow by selecting service type, choosing an available date and time window, and confirming their contact information

### Inspection Report Generation

- **FR31:** Owner or technician can generate a professional PDF inspection report from a completed inspection checklist with a single action
- **FR32:** Generated reports include company branding (uploaded logo), technician name and CSIA/NCSG credential numbers, customer name and property address, inspection level, date of service, all checklist findings with pass/fail/marginal ratings, before/after photos, summary notes, and recommendations
- **FR33:** Owner can email the generated PDF inspection report to the homeowner from within the app
- **FR34:** All generated inspection reports are stored in the customer's service record and can be retrieved and downloaded at any time

### Invoicing & Payment Processing

- **FR35:** System automatically generates a draft invoice on job completion with line items matching the completed service type and configured pricing
- **FR36:** Owner can send the invoice to the customer with an online payment link (Stripe credit card processing)
- **FR37:** Owner can view invoice history and current payment status per customer (draft, sent, viewed, paid, overdue)
- **FR38:** Owner can configure recurring billing for service agreement customers (monthly or annual billing cycle)

### Mobile Technician Experience

- **FR39:** Technician can view their assigned appointments for the current day with job details, service type, and the customer's chimney profile
- **FR40:** Technician can launch turn-by-turn navigation to any job address directly from the app (integrates with device's default maps app)
- **FR41:** Technician can access the full service history of any customer assigned to them, including past inspection findings and photos, before arriving at the job
- **FR42:** Technician can complete the sequential job workflow within the app: check-in on arrival → open inspection checklist → capture and categorize photos → add job notes → trigger invoice → mark job complete

### Owner/Manager Operations

- **FR43:** Owner can view a dashboard showing jobs scheduled and completed for the current day, current week, and current month
- **FR44:** Owner can view a list of customers with upcoming automatic reminders due in the next 30, 60, or 90 days
- **FR45:** Owner can view a revenue summary showing total invoiced, total collected, and total outstanding for any date range
- **FR46:** Owner can identify overdue accounts — customers past their recommended annual service date with no scheduled appointment — and initiate contact or scheduling from that list

### Account & User Management

- **FR47:** Owner can create technician accounts, assign them to jobs, and configure their access level (field technician vs. manager)
- **FR48:** Owner can upload a company logo and configure business profile information (name, address, phone, website, CSIA/NCSG membership details) that appear on all generated documents
- **FR49:** Owner can configure service types with names, default duration, and default invoice line items

---

## Non-Functional Requirements

### Performance

- Calendar view (week/month) loads within 3 seconds on a standard 4G mobile connection with up to 200 appointments displayed
- Inspection checklist forms open and render within 2 seconds on supported mobile devices
- PDF inspection report generation completes within 15 seconds for a report with up to 20 photos
- Customer search returns results within 1 second for a database of up to 5,000 customer records
- Photo capture to in-app confirmation (before upload) completes within 1 second; background upload to cloud storage completes within 10 seconds per photo on 4G

### Security

- All customer data (PII, inspection records, photos) stored encrypted at rest (AES-256)
- All data in transit encrypted via TLS 1.2+
- Payment data never touches SweepHQ servers directly — all payment processing through Stripe's PCI-DSS compliant infrastructure; SweepHQ stores only Stripe customer IDs and invoice metadata
- Technician accounts are scoped to their assigned jobs only; they cannot access customer records outside their assignments
- PDF inspection reports delivered over encrypted email with no public shareable URL (or time-limited signed URL if using direct link delivery)
- Account authentication supports email/password with enforced minimum complexity; optional two-factor authentication for owner accounts
- Tenant isolation enforced at database query level — no cross-tenant data access possible through API or app

### Reliability

- System uptime target: ≥99.5% measured monthly, with planned maintenance windows outside peak season (September–November)
- Offline inspection data loss tolerance: zero — all offline-completed inspection records must reach the server without truncation on reconnection
- Offline sync conflict resolution: append-only inspection records eliminate conflict; if two technicians submit data on the same job while offline, both submissions are preserved and flagged for owner review rather than silently discarded
- Annual reminder dispatch SLA: reminders fire within ±24 hours of configured trigger date; SMS/email delivery rate ≥97% as measured against sent confirmations from provider
- PDF generation availability: report generation endpoint must maintain ≥99.9% availability; failure falls back to a queued generation with email notification when complete

### Mobile Platform

- iOS: supports iPhone running iOS 15 and later
- Android: supports devices running Android 10 and later
- Offline mode: all core field workflows (inspection checklist completion, photo capture, job notes) must function without internet; sync is background/on-reconnect
- App size: initial install ≤80MB; inspection form data cached locally for assigned jobs, not all jobs
- Push notifications: job assignment notifications, reminder confirmation notifications, and payment received notifications delivered via device push

### Integration

- **Stripe:** Payment intent creation, customer billing, subscription management, invoice payment links via Stripe API
- **SMS Provider (Twilio or equivalent):** Outbound SMS for annual reminders and booking confirmations; SweepHQ controls message content; provider must support US long-code SMS with delivery receipts
- **Email Provider (SendGrid or equivalent):** Transactional email for reminders, reports, invoices, and booking confirmations; delivery receipt tracking required for reminder log feature
- **Maps/Navigation:** Deep link integration with device default maps app (Apple Maps on iOS, Google Maps on Android) for job navigation; SweepHQ does not host a maps provider directly in MVP
- **CSV Import:** Standard CSV ingestion for customer migration; field mapping UI for non-standard column names; error reporting for rows that fail validation

---

*PRD completed: 2026-04-18*
*Source documents: Shortlisted idea (Score: 93/105, 2026-04-16) + Market research (2026-04-17) + Product brief (2026-04-18)*
*Next recommended step: Create technical architecture (`bash run-bmad-pipeline.sh` or `/bmad-bmm-create-architecture`)*
