---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/petroleum-equipment-service-software.md
  - _bmad-output/planning-artifacts/market-research-petroleum-equipment-service-software.md
  - _bmad-output/planning-artifacts/brief-petroleum-equipment-service-software.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: environmental_compliance
  complexity: high
  projectContext: greenfield
date: '2026-06-16'
author: Root
---

# Product Requirements Document — TankTrack

**Author:** Root
**Date:** 2026-06-16
**Product:** TankTrack — Compliance-First Field Service Software for Petroleum Equipment Contractors
**Version:** 1.0

---

## Executive Summary

TankTrack is a compliance-first B2B SaaS platform for US petroleum equipment service contractors — the companies that install, inspect, and service underground storage tank (UST) systems at gas stations, fleet operators, and fuel retailers. The product replaces paper-based compliance workflows mandated by EPA UST regulations (40 CFR Part 280) and 39 state-level environmental programs.

The addressable market is 5,000–15,000 US petroleum equipment service contractor companies operating under one of the densest regulatory documentation requirements in the trades: annual ATG certification testing, annual line leak detector testing, spill bucket inspection every 3 years, and facility compliance walkthrough inspections every 3 years. Every missed 365-day compliance window is a potential EPA fine starting at $10,000 per violation per day. An insider's March 2026 HN thread confirmed: "Bought a business in the petroleum equipment service space. Building internal tools for ourselves. Pen and paper still dominates the industry." No dedicated software category exists for this market.

TankTrack provides pre-built digital inspection forms by state, automatic 365-day re-inspection scheduling, technician certification tracking, customer-facing compliance portal, and EPA-format certificate generation. The product is bootstrapped vertical SaaS at $149–$399/month (flat per-company pricing). Primary distribution channel is the Petroleum Equipment Institute (PEI), with 1,500+ member companies, a monthly journal, and an annual convention.

**Revenue target:** $15,000–$20,000 MRR within 12 months; $20,000–$60,000 MRR at Month 24.

### What Makes This Special

TankTrack's differentiator is domain specificity: it is the only product that natively understands what an ATG (Automatic Tank Gauge) is, what a shear valve test requires, which states mandate containment sump inspections, and that EPA's 2018 regulatory revision requires 365-day compliance windows — not calendar-year windows. Competitors either serve the wrong buyer (Titan Cloud/PDI Technologies serve fuel retailers, not service contractors), serve state government (MobileWright is sold to state agencies, not private companies), or are generic FSM platforms with zero EPA compliance awareness (Jobber, ServiceFusion, SafetyCulture).

Three compounding structural moats:
1. **365-day compliance calendar as core engine**: Re-inspection scheduling is automatic from the moment a test is completed. Every customer account, every equipment type, every applicable regulation — scheduled without manual intervention.
2. **State-by-state regulatory template library as first-mover moat**: Each state added (starting CA, TX, FL) opens geographic market without additional product development. Template depth compounds with each state.
3. **Compliance data lock-in**: 3+ years of EPA inspection records, customer compliance certificates, and technician certification history creates high switching cost with direct liability implications — migrating compliance history creates audit risk contractors will not accept.

## Project Classification

- **Project Type:** B2B SaaS with mobile-first field app (iOS + Android) and web admin dashboard
- **Domain:** Environmental compliance — regulated by EPA UST program (40 CFR Part 280), 39 state-approved UST programs, OSHA technician certification requirements, and state/local fire marshal inspections
- **Complexity:** High — state-by-state regulatory variation, 365-day precision compliance windows, offline mobile operation in hazardous environments, EPA certificate format requirements, technician license validation
- **Project Context:** Greenfield — no existing codebase; first dedicated software category for petroleum equipment service contractors

---

## Success Criteria

### User Success

A contractor is successful when their technicians submit inspection forms in the field (not at the office), the next required inspection is automatically scheduled, and compliance certificates are generated and delivered without manual intervention. The "zero-paper workflow" — from truck arrival at job site to completed compliance certificate in the customer portal — is the primary unit of user value.

| Indicator | Target | Measurement |
|-----------|--------|-------------|
| Mobile field submission rate | ≥80% of inspections submitted on-site (not entered retroactively) | Submission timestamp vs. job completion timestamp |
| Re-inspection scheduling automation | ≥90% of completed inspections have auto-scheduled follow-up within 365-day window | System flag on inspections with no follow-up scheduled within 7 days |
| Compliance window miss rate | <2% of scheduled inspections completed outside 365-day window | Inspection completion date vs. EPA deadline |
| Customer portal activation | ≥50% of paying accounts share portal access with ≥1 customer within 90 days | Customer portal invites sent per account |
| Office admin time reduction | Users report compliance admin time reduced from baseline (10–20 hrs/wk) to <4 hrs/wk within 90 days | In-app survey at 90-day mark |
| Certificate delivery time | Compliance certificates delivered to customer within 2 hours of inspection completion | Certificate email timestamp vs. form submission timestamp |

**User "aha" moment:** A state compliance inspector requests 3 years of ATG test records for 40 customer locations. The office admin pulls all records from TankTrack in 10 minutes — a task that previously required 2 days of paper file retrieval.

**Design partner MVP success criteria:** 5 paying partners actively using the full compliance workflow for 30 days; each completing ≥10 inspections via mobile app; mobile submission rate ≥70%; zero missed 365-day compliance windows; partner NPS ≥40.

### Business Success

**Month 3 Targets:**
- 5 active design partner customers (free or heavily discounted pilot terms)
- Mobile submission rate ≥70% across all partner accounts
- First 3 peer testimonials captured for PEI Journal outreach

**Month 6 Targets:**
- 25–40 paying customers
- $3,700–$8,000 MRR
- LTD launch: 50 customers at $299–$499 Solo/Team tiers
- 3 states with built compliance templates (CA, TX, FL)
- 5+ G2/Capterra reviews

**Month 12 Targets:**
- 75–100 paying customers
- $15,000–$20,000 MRR
- Monthly churn <3%
- 8–10 states with compliance templates
- NPS ≥40
- 20+ G2/Capterra reviews
- ≥1 PEI Journal editorial mention

**Month 24 Targets:**
- 200–300 paying customers
- $40,000–$60,000 MRR
- Monthly churn <2%
- 20+ states with compliance templates
- NPS ≥50
- 50+ G2/Capterra reviews

**Go/No-Go decision point:** If after 6 months of paid operation, monthly churn exceeds 8% or fewer than 25 customers convert from LTD/trial to subscription, re-evaluate product-market fit before scaling GTM spend.

### Technical Success

- **Offline reliability:** All inspection form functions available with zero internet connectivity; auto-sync on reconnect with zero manual intervention and zero data loss
- **Sync conflict resolution:** Concurrent offline edits from multiple technicians resolved without data loss within 60 seconds of connectivity restoration
- **Form submission integrity:** Zero failed inspection submissions due to system error (technician confirmation required for every submission)
- **Certificate generation:** EPA-format compliance certificate PDF generated within 30 seconds of form submission
- **365-day scheduling precision:** Re-inspection deadline calculated to exact calendar day accuracy; never rounds to calendar year
- **State template parity:** Digital form fields match state-required paper form exactly; state inspector recognizes TankTrack certificate as compliant without additional documentation

### Measurable Outcomes

| KPI | Month 6 | Month 12 | Month 24 |
|-----|---------|----------|----------|
| Paying customers | 25–40 | 75–100 | 200–300 |
| MRR | $3,700–$8,000 | $15,000–$20,000 | $40,000–$60,000 |
| Monthly churn | <5% | <3% | <2% |
| States with templates | 3 | 8–10 | 20+ |
| Mobile submission % | 60% | 80% | 90% |
| Customer portal activation % | 30% | 50% | 70% |
| NPS | — | 40+ | 50+ |
| G2/Capterra reviews | 5 | 20+ | 50+ |

---

## Product Scope

### MVP — Minimum Viable Product

**Target:** Complete, functional compliance workflow from field inspection to compliance certificate. A petroleum equipment service company can manage their entire EPA UST documentation burden using TankTrack from day one.

**Core capabilities:**
- Customer and equipment account management with CSV import
- Pre-built state-specific digital inspection forms for CA, TX, FL:
  - Annual ATG system certification form
  - Annual line leak detector test form
  - Spill bucket/containment sump inspection form (3-year interval)
  - Annual walkthrough inspection checklist
- Offline-capable mobile app (iOS + Android) with photo capture and GPS
- Automatic 365-day re-inspection scheduling with 60/30/7-day email alerts
- Compliance certificate PDF generation (EPA-format, contractor-branded)
- Technician certification tracking with 90/30-day expiration warnings
- Customer compliance portal (read-only, per-customer URL)
- Basic compliance and activity reporting
- QuickBooks integration (push completed work orders as draft invoices)

**MVP success criteria:** 5 design partner customers actively using full workflow for 30 days; mobile submission rate ≥70%; zero missed 365-day windows; customer portal activation ≥60% of partners.

### Growth Features (Post-MVP)

**Phase 2 (Months 9–18):**
- State-by-state template expansion to 20+ states
- Above-ground storage tank (AST) compliance module
- Environmental spill/incident reporting with EPA incident report format
- Native ATG system integrations (Veeder-Root, Franklin Electric) for automated test result capture
- Advanced dispatch and scheduling optimization
- SMS alerts in addition to email

**Phase 3 (Months 18–30):**
- Environmental testing company module (tank tightness testing companies)
- Fuel system installer module (new UST installation compliance documentation)
- Direct regulatory reporting to state environmental agency portals (where APIs exist)
- PEI white-label / member benefit partnership
- Multi-company / franchisee support (parent company managing multiple locations)

### Vision (Future)

- AI-assisted compliance form completion: Pre-fill results from equipment history and manufacturer specifications
- Predictive compliance alerts: Flag equipment with elevated failure probability for proactive scheduling
- Regulatory change monitoring: Auto-update forms when EPA or state regulations change
- Insurance integration: Direct compliance history reporting to petroleum equipment insurers
- Compliance data API: Allow insurance companies and state agencies to query contractor compliance records directly

---

## User Journeys

### Journey 1: Mike — The Overloaded Solo Owner (Primary User, Success Path)

Mike, 48, owns a 3-person petroleum equipment service company in Ohio. He is the owner, dispatcher, and lead technician. For 8 years he has tracked 200+ customer compliance deadlines in a 12-tab Google Sheet only he knows how to read. He had one near-miss — a state compliance check flagged a missed ATG annual test — that cost him a week of scrambling and $800 in expedited testing fees. He heard about TankTrack at an Ohio Petroleum Equipment Association meeting from a peer who said it "actually knows what an ATG is."

**Opening scene:** Mike visits tanktrack.com from his laptop after dinner, clicks "Start 14-day trial," and enters his business details. He's done this before with Jobber — and stopped after 30 minutes because building UST inspection templates from scratch was going to take a week.

**Rising action:** TankTrack's onboarding asks him to select the states he operates in (Ohio) and uploads his existing customer list from a CSV export of his Google Sheet. Within 20 minutes, all 210 customer accounts exist in TankTrack. He opens the Ohio compliance template on his phone — it's the exact ATG certification form he's been filling out by hand for 8 years. He adds 3 technicians and sends them the mobile app download link.

**Climax:** The next morning, Mike does a routine ATG certification at Shell station. He opens TankTrack on his iPhone, selects the customer, selects "Annual ATG Certification," and fills in results. The form knows what fields the Ohio EPA requires. He takes 2 photos, signs with his finger, and hits Submit. A compliance certificate PDF lands in the customer's portal in 90 seconds. TankTrack automatically schedules the next ATG certification 364 days out and sends Mike a confirmation.

**Resolution:** On Monday morning, Mike opens TankTrack instead of his Google Sheet. His dashboard shows 7 inspections due this week, 3 overdue for scheduling follow-up (not yet missed, just unscheduled), and all 3 of his technicians' certification expiration dates. His Google Sheet is still open in another tab, but he hasn't looked at it in 5 days.

**Retention:** At 90 days, Mike has completed 340 inspections through TankTrack. His Google Sheet has been closed for 60 days. When an Ohio EPA compliance inspector shows up unannounced at a customer's gas station and asks Mike to provide 3 years of ATG test records, Mike pulls them up on his phone in 2 minutes. The inspector notes the documentation is the correct Ohio form format. Mike calls his peer who recommended TankTrack and tells him to pitch it at the next association meeting.

---

### Journey 2: Sandra — The Drowning Office Manager (Primary User, Scale Path)

Sandra, 39, manages all compliance documentation for a 10-technician petroleum equipment service company in Texas. She receives 50+ paper forms per week from technicians, re-enters critical data into Excel, manually generates compliance certificate PDFs from a Word template, and fields 15+ calls per week from gas station owners asking "are we compliant?"

**Opening scene:** Sandra's owner agrees to evaluate TankTrack after Sandra's third request in 6 months. The owner's threshold: "Show me it saves you 10 hours per week."

**Rising action:** Sandra leads a 45-minute onboarding call with a TankTrack rep (or uses the self-serve video walkthrough). She imports 180 customer accounts from Excel. She configures Texas-specific inspection templates. She sends 10 technicians the mobile app download link and a 5-minute "how to submit your first form" video.

**Critical edge case:** On day 3, technician Carlos submits an ATG form for a customer who has a records dispute — the previous inspection was done by a different contractor and Sandra doesn't have those records in TankTrack. Carlos submitted from the field with no historical record populated. Sandra opens TankTrack's admin dashboard, sees the form flagged "no previous inspection on record," and manually sets the 365-day baseline from the customer's paper certificate. The correction takes 3 minutes.

**Climax:** Week 2: Sandra's paper forms stack on her desk is empty. All 10 technicians are submitting from the field. She spends 2 hours on Monday instead of 15 reviewing the week's compliance completions on the dashboard. When a customer calls asking "are we compliant for our fire marshal inspection next week?", Sandra sends a portal link in 30 seconds instead of building a PDF manually.

**Resolution:** At 60 days, Sandra presents to the owner: compliance admin time reduced from 18 hours/week to 3.5 hours/week, with zero compliance windows missed and zero customer calls requiring manual certificate lookup. Owner upgrades from Solo to Team plan and authorizes purchasing TankTrack's annual contract.

---

### Journey 3: Dave — The Multi-State Regional Owner (Growth Path)

Dave, 55, owns a 22-technician petroleum equipment service company operating across 4 states (TX, LA, OK, NM). He tried Jobber for 6 months and abandoned it because building UST compliance templates for 4 different state forms was impossible. His biggest pain: a technician's state contractor license lapsed during an Oklahoma audit, triggering a $15,000 fine and a 30-day stop-work order.

**Opening scene:** Dave meets a TankTrack exhibitor at the PEI Convention in Tulsa. He sees a live demo of the multi-state compliance template library and the technician certification dashboard.

**Rising action:** Dave starts a trial with his Texas operations (largest footprint). Within 45 days, all Texas work is flowing through TankTrack. He adds Louisiana, Oklahoma, and New Mexico state templates. Each state's form library is pre-built — he doesn't configure anything, just selects the states.

**Climax:** Dave opens the technician certification dashboard. All 22 technicians' state contractor licenses, Class A/B/C UST operator training certificates, and ATG manufacturer certifications are listed with expiration dates. 3 technicians have certifications expiring within 90 days — TankTrack sent him email alerts 90 days before each one. He schedules renewal training before any license lapses.

**Resolution:** At 6 months, Dave has zero multi-state compliance incidents. He is presenting TankTrack to the Texas Petroleum Equipment Contractors Association as a case study. Two competitors in his market are asking him where he got the software.

---

### Journey 4: Gas Station Owner — The Passive Beneficiary (Secondary User)

Maria owns a 12-location gas station chain in Florida. She relies on a petroleum equipment service contractor to keep all 12 locations EPA-compliant. Twice per year, her insurance renewal requires documentation of current UST compliance certificates. Currently, she calls her contractor's office, waits 3 days for a stack of PDFs emailed in 12 separate attachments, and then uploads them manually to her insurance portal.

**Journey:** Maria's contractor uses TankTrack and has granted her portal access. She logs into her unique TankTrack customer portal URL and sees all 12 locations, each with a compliance status indicator (green/yellow/red), next inspection due date, and a download button for the most recent compliance certificate per equipment type. She downloads all 12 certificates in one batch for her insurance renewal. Total time: 8 minutes instead of 3 days.

**Retention impact:** Maria tells her contractor she wants them to keep using TankTrack specifically because of the portal. When a competing service contractor bids on her account at lower prices, she asks if they use TankTrack. They don't. She stays with her current contractor.

---

### Journey 5: Field Technician — The Daily App User (End User)

Carlos, 31, is a petroleum equipment technician at a 10-person company. He has no role in the purchase decision. His adoption determines whether TankTrack succeeds in the field.

**Success path:** Carlos arrives at a job site in a remote rural area with no cell signal. He opens TankTrack, which is pre-synced with today's job queue. He selects the job, and all customer and equipment details auto-populate (ATG make/model/serial number, tank capacity, previous test results). He completes the ATG certification form, takes 4 photos, and signs. The form submits to local storage with a "Pending Sync" badge. When he drives back to town and hits cell signal, TankTrack auto-syncs. He never had to think about connectivity.

**Friction scenario:** Carlos's previous workflow was paper forms + texting photos to the office. He tries TankTrack for the first week but finds the form takes 8 minutes vs. 4 minutes for paper. By week 3, as his muscle memory adapts and auto-populated fields eliminate re-entering customer data, he completes forms in 5 minutes — faster than paper, because he no longer re-drives to the office to drop off forms.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike (solo owner) | Customer import; state-specific form library; mobile offline submission; auto 365-day scheduling; certificate generation; dashboard due-date view |
| Sandra (office manager) | Multi-technician mobile app; compliance dashboard; customer compliance portal; manual baseline override; bulk reporting |
| Dave (multi-state owner) | Multi-state template library; technician certification dashboard; multi-location reporting; annual contract billing |
| Maria (gas station owner) | Customer portal per-location status view; batch certificate download; compliance status indicators |
| Carlos (field technician) | Offline-first mobile; auto-populated form fields; GPS + photo capture; one-tap submission; sync status indicator |

---

## Domain-Specific Requirements

### Regulatory Compliance Framework

**Primary federal regulation:** EPA Underground Storage Tank program, 40 CFR Part 280, as amended by the 2018 Energy Policy Act provisions. The 2018 revision introduced the critical 365-day compliance window requirement (replacing calendar-year compliance) and new containment sump inspection requirements.

**State programs:** 39 states operate EPA-approved state UST programs (California CUPA, Texas TCEQ, Florida FDEP, etc.) with authority to impose stricter requirements than federal minimums. Each state may have:
- Different inspection form formats (paper or electronic)
- Different inspection intervals (some states require more frequent testing)
- Different technician certification requirements
- Different documentation retention requirements (typically 3–10 years)

**Key UST compliance intervals TankTrack must track:**
| Test/Inspection | Federal Interval | Notes |
|-----------------|-----------------|-------|
| ATG system certification | Annual (≤365 days) | Most common; triggers majority of service calls |
| Line leak detector test | Annual (≤365 days) | Required for pressurized piping systems |
| Spill bucket/catchment basin inspection | Every 3 years | Introduced in 2018 rule revision |
| Containment sump inspection | Every 3 years | Introduced in 2018 rule revision |
| Walkthrough inspection | Annual (quarterly for certain systems) | Operator-conducted; contractor may document |
| Release detection system | Monthly (operator) / Annual (contractor) | Contractor verifies system function annually |

### Technician Certification Requirements

Petroleum equipment service contractors must employ certified technicians. TankTrack must track:
- **Class A/B/C UST Operator Training:** EPA-mandated; renewal intervals vary by state (typically every 3 years)
- **State contractor license:** State environmental agency license for UST service work; renewal typically annual or biennial
- **ATG manufacturer certifications:** Veeder-Root, Franklin Electric, OPW, Gilbarco; specific certifications required to certify ATG tests
- **OSHA 30-hour construction certification:** Required in some states for excavation work

### Documentation Requirements

EPA regulations require retention of all UST compliance records for the life of the tank plus 3 years after closure. Inspectors may audit any record retroactively. TankTrack records must:
- Capture technician name, certification number, and employer license number on every form
- Record GPS coordinates and timestamp of form submission
- Preserve original submitted form data (no retroactive editing of submitted compliance records)
- Generate certificates matching exactly the format state inspectors expect
- Maintain chain of custody for all documentation (audit log of any edits)

### Compliance & Regulatory Requirements

- **Record immutability:** Submitted inspection records cannot be edited after submission. Corrections require a new supplemental record that references the original.
- **Data retention:** All compliance records retained for minimum 10 years (exceeds EPA 3-year requirement; matches state maximums)
- **State form fidelity:** Digital form output must match state-required paper form format exactly; field labels and order match regulatory forms so inspectors can cross-reference
- **Audit trail:** All user actions on compliance records logged with timestamp, user ID, and action type
- **Certificate authenticity:** Compliance certificates include contractor license number, technician certification number, inspection date, and equipment serial numbers; cannot be altered after generation

### Technical Constraints

- **Offline-first architecture required:** Many petroleum equipment job sites are in areas with no cell coverage (rural gas stations, fleet terminals, industrial facilities). All inspection functions must work with zero connectivity.
- **Hazardous environment UX:** Technicians work in areas with fuel vapors, wearing gloves, in poor lighting. Mobile UI must be functional with gloved hands; critical actions must not require precise finger placement.
- **Photo documentation:** Many inspections require photo evidence (damaged spill buckets, ATG display readings). Mobile app must support offline photo capture with automatic sync.
- **Multi-technician synchronization:** Multiple technicians may work at the same customer site on different equipment simultaneously. Offline records from multiple devices must merge without conflict on sync.

### Integration Requirements

- **QuickBooks Online integration:** Most small petroleum equipment service companies use QuickBooks Online for billing. TankTrack must push completed work orders as draft invoices to QuickBooks without double-entry.
- **Email delivery:** Compliance certificates and re-inspection alerts delivered via email; must not be flagged as spam (SPF/DKIM/DMARC properly configured for contractor's domain or TankTrack's sending domain)
- **Customer portal access:** Unique URL per customer account; no login required for customer (secure token-based access) to reduce friction for gas station operators who won't remember passwords

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Incomplete state form coverage triggers compliance deficiency | Each state template reviewed by a licensed UST contractor before release; template release gated on expert review |
| Offline sync conflict corrupts compliance record | Conflict resolution: server record wins for submitted forms; client record wins for drafts; user notified of any resolution |
| EPA/state regulatory change invalidates form template | Template versioning: old version retained for historical records; new version activates on specified effective date |
| Incorrect 365-day calculation causes compliance window miss | Compliance deadline calculation logic unit-tested against 100+ scenarios; includes edge cases (leap years, extended deadlines for documented equipment issues) |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

TankTrack occupies a genuinely novel market position: the first software product purpose-built for petroleum equipment service contractors. The innovation is not technical novelty — it is category creation in a regulated market with no existing software.

**Category creation as moat:** In the absence of any established software, TankTrack's primary innovation is the translation of EPA UST regulatory requirements (a dense, technical domain) into a software product that contractors can adopt without legal or technical expertise. The product's value is in doing this translation correctly — incorrect form templates or miscalculated compliance deadlines create liability, not just inconvenience.

**365-day compliance engine as novel core:** Existing FSM platforms (Jobber, ServiceFusion) have calendar-based scheduling. TankTrack's scheduling engine operates on regulatory compliance deadlines — the 365-day window is calculated from the exact date of the last completed inspection, and the system flags violations before they occur. This is architecturally different from calendar scheduling: the engine must know the regulatory interval for each inspection type, track the last completion date, and calculate the deadline independently of any user input.

**Customer compliance portal as contractor differentiator:** No existing petroleum equipment service software gives contractors a customer-facing compliance portal. Gas station owners currently call contractors to ask "are we compliant?" The portal makes compliance status self-service, eliminating inbound calls and giving contractors a visible differentiating feature when bidding on new accounts.

### Market Context

The compliance software category pattern is well-established in adjacent verticals (fire inspection: FireTrack; elevator inspection: FieldPoint; restaurant health inspection: Ecotrak), but has not yet reached petroleum equipment service. First-mover advantages in these categories are durable: state inspectors learn to recognize and trust specific certificate formats, contractors invest compliance history that creates switching costs, and PEI channel relationships reward early established players.

### Validation Approach

- 5 design partner customers using the product for 30+ days validates form fidelity (state inspectors accept TankTrack certificates without challenge)
- Zero compliance window misses in the first 90 days validates 365-day calculation accuracy
- Customer portal activation rate validates whether contractors use the portal as a competitive differentiator in sales conversations

### Risk Mitigation

- **Form accuracy risk:** One incorrectly designed state form template could expose a contractor to regulatory liability. Mitigation: Each state template reviewed by a licensed petroleum equipment contractor before release; templates versioned with audit trail.
- **Compliance calculation error:** A bug in the 365-day calculation engine is not a UX issue — it is a compliance failure. Mitigation: Compliance deadline calculation is a separately tested module with 100+ unit tests; calculation logic is auditable and logged.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

TankTrack is a B2B SaaS platform with two delivery modes:
1. **Mobile-first field app (iOS + Android):** Used by technicians at job sites; offline-capable; the primary data entry surface
2. **Web admin dashboard:** Used by office managers and owners; compliance oversight, dispatch, reporting, customer portal management

The product serves small business buyers (1–50 employees) with flat-rate, per-company pricing. No per-seat licensing — field technician count varies seasonally and billing complexity kills conversion for small operators.

### Multi-User / Role Architecture

| Role | Access Level | Primary Surface |
|------|-------------|----------------|
| Owner/Admin | Full access: all customers, all technicians, all settings, billing | Web + Mobile |
| Office Manager | All customers, all technicians, no billing/settings | Web primarily |
| Field Technician | Assigned jobs only; submit forms; view own certification status | Mobile primarily |
| Customer (gas station owner) | Read-only portal for their own compliance records | Web portal (customer-facing URL) |

**No complex RBAC required for MVP:** Three internal roles (Admin, Manager, Technician) with clearly differentiated access. Customer portal is a separate read-only surface with token-based authentication.

### Tenant Model

- Each contractor company is a tenant with fully isolated data
- Customers (gas station owners) exist within a tenant's account — no cross-tenant customer sharing
- Customer portal URLs are per-tenant, per-customer (e.g., `portal.tanktrack.com/[tenant-slug]/[customer-slug]`)
- State compliance templates are global (shared across all tenants) but can be customized per tenant if needed

### Authentication & Security

- **Contractor accounts:** Email + password with optional MFA; session tokens with 30-day rolling expiry
- **Customer portal:** Token-based, no password required; unique URL with embedded access token; tokens expire after 12 months of inactivity; contractors can revoke access at any time
- **Technician mobile:** Login once; token stored on device; requires re-login after 90 days or on security event
- **Password policy:** Minimum 10 characters; bcrypt hashing; breach detection via HaveIBeenPwned API on password set/change

### Billing & Pricing Implementation

| Tier | Monthly | Annual | LTD |
|------|---------|--------|-----|
| Solo (1–5 techs) | $149/mo | $1,490/yr ($124/mo) | $299 |
| Team (6–15 techs) | $249/mo | $2,490/yr ($208/mo) | $499 |
| Regional (16–50 techs) | $399/mo | $3,990/yr ($333/mo) | Custom |

- Stripe for all payment processing
- Annual plan auto-renews with 60-day advance notice email
- LTD customers get Solo-tier features permanently; upgrade path to Team/Regional available
- No per-seat overages — flat rate per tier; contractor manages which technicians have access

### Implementation Considerations

- **Offline-first data architecture:** SQLite on mobile devices for local storage; background sync via queue when connectivity available; conflict resolution protocol (submitted records: server wins; drafts: client wins)
- **Mobile stack:** React Native (iOS + Android from single codebase); targets iOS 16+ and Android 12+; glove-friendly touch targets minimum 48x48dp
- **PDF generation:** Server-side PDF generation using a template library (PDFKit or Puppeteer); triggered on form submission; stored in S3-compatible object storage; delivered via email and portal
- **QuickBooks integration:** OAuth 2.0 flow for QBO connection; push completed work orders as Invoices (draft status); mapping UI for inspection types → QBO service items
- **Email delivery:** Transactional email via SendGrid or Postmark; SPF/DKIM/DMARC configured; compliance certificate attachments under 5MB

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the complete compliance workflow (inspection → certificate → scheduling) for the 3 highest-volume states (CA, TX, FL) so that a contractor can manage their entire EPA documentation burden from day one. The goal is complete workflow coverage for a defined geographic scope, not partial coverage for all geographies.

**Resource Requirements:** 1–2 full-stack developers with React Native experience; 1 PM/domain expert (requires 60-day customer discovery sprint before code); 3–5 design partner customers as validation partners throughout build.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo owner managing all compliance for their company
- Office manager dispatching technicians and tracking compliance across all customer accounts
- Field technician submitting inspection forms from job sites

**Must-Have Capabilities:**
- Customer and equipment management with CSV import
- CA, TX, FL state-specific digital inspection forms (ATG, line leak detector, spill bucket, walkthrough)
- iOS + Android mobile app with offline-first operation
- Automatic 365-day re-inspection calendar with email alerts
- Compliance certificate PDF generation (EPA-format, contractor-branded)
- Technician certification tracking with expiration warnings
- Customer compliance portal (read-only, unique URL per customer)
- Basic dashboard (due this week/month, overdue) and reporting
- QuickBooks Online integration (draft invoice push)
- Stripe billing integration

### Post-MVP Features

**Phase 2 (Post-MVP, Months 9–18):**
- State template expansion to 10+ states
- AST (above-ground storage tank) compliance module
- Environmental spill/incident reporting
- Native ATG system integrations (Veeder-Root, Franklin Electric)
- SMS alerts
- Advanced scheduling and dispatch optimization

**Phase 3 (Expansion, Months 18–30):**
- Environmental testing company module
- Fuel system installer module
- Direct regulatory reporting to state portals
- PEI white-label partnership
- Multi-company / franchisee support

### Risk Mitigation Strategy

**Technical Risks:** Offline sync conflict resolution is the highest-complexity technical challenge. Mitigation: Build sync layer as a separately tested module in Month 1–2; validate with real-world field testing during design partner phase before GA launch.

**Market Risks:** Slow adoption due to conservative buyer behavior. Mitigation: LTD pricing reduces purchase risk; target contractors with recent compliance incident (acute pain = immediate motivation); PEI Journal editorial coverage reduces cold outreach requirement.

**Resource Risks:** If design partner discovery reveals state form requirements are more complex than anticipated. Mitigation: Cap MVP at CA/TX/FL; delay additional states until design partner validation is complete. Form templates are the highest-risk deliverable — domain expert review required before each state template ships.

---

## Functional Requirements

### Customer & Equipment Management

- FR1: Admin can create, edit, and deactivate customer accounts with contact information, site address, and number/type of USTs
- FR2: Admin can add equipment records per customer account (ATG make/model/serial, tank capacity, leak detector type, spill bucket type, installation date)
- FR3: Admin can import customer account list from CSV file with field mapping UI
- FR4: Admin can view all customer accounts with compliance status summary (all current, has overdue, has upcoming) in a list/table view
- FR5: Admin can search and filter customer accounts by name, location, compliance status, or last inspection date
- FR6: Field Technician can view their assigned jobs with customer and equipment details pre-populated

### Inspection Form Management

- FR7: Field Technician can select and complete state-specific inspection forms on mobile (ATG certification, line leak detector, spill bucket inspection, walkthrough checklist) for CA, TX, and FL
- FR8: Field Technician can complete inspection forms with zero internet connectivity; forms auto-submit when connectivity is restored
- FR9: Inspection forms auto-populate customer name, site address, equipment serial numbers, and technician name/certification number from stored records
- FR10: Field Technician can attach photos to any inspection form field marked as requiring photo evidence
- FR11: Inspection form records GPS coordinates and timestamp of submission automatically
- FR12: Field Technician can save a form as a draft and resume it later without data loss
- FR13: Submitted inspection records cannot be edited after submission; corrections require a supplemental record referencing the original
- FR14: Admin can view all submitted inspection forms with status (draft, submitted, certificate generated), date, technician, and customer

### Compliance Calendar & Scheduling

- FR15: System automatically calculates and schedules the next required inspection date within the 365-day compliance window upon form submission, for each applicable inspection type
- FR16: Admin can view a compliance calendar showing all upcoming inspections across all customers, filterable by date range, inspection type, and technician
- FR17: System sends automated email alerts to the contractor at 60, 30, and 7 days before each compliance deadline
- FR18: System sends automated email alerts to the customer (via their portal) at 30 and 7 days before each compliance deadline
- FR19: Admin dashboard displays "Due This Week," "Due This Month," and "Overdue" views across all customer accounts
- FR20: Admin can manually override a scheduled inspection date with a documented reason (e.g., customer-requested delay)
- FR21: System flags any customer account with a compliance deadline missed (inspection not completed within 365-day window)

### Certificate Generation & Delivery

- FR22: System generates a compliance certificate PDF automatically upon inspection form submission
- FR23: Compliance certificate includes contractor company name, license number, technician name, certification number, inspection date, customer site, equipment type and serial number, inspection results, and pass/fail status
- FR24: Admin can download compliance certificates for any completed inspection
- FR25: Admin can send a compliance certificate to the customer via email with one action
- FR26: Compliance certificates are stored in the system and linked to the customer account and equipment record
- FR27: Admin can configure contractor company logo and contact information that appears on all generated certificates

### Technician Management & Certification Tracking

- FR28: Admin can create technician profiles with name, contact information, and active certifications
- FR29: Admin can add certification records per technician (type, certifying authority, certification number, issue date, expiration date)
- FR30: System sends automated email alerts to the admin at 90 and 30 days before any technician certification expires
- FR31: Admin can view all technicians' certification statuses in a single dashboard view (current, expiring soon, expired)
- FR32: Technician name and certification number auto-populate on any inspection form submitted by that technician
- FR33: Admin can deactivate a technician account without deleting their historical inspection records

### Customer Compliance Portal

- FR34: Admin can generate and share a unique portal URL for any customer account
- FR35: Customer (gas station owner) can view compliance status for each equipment type at their location (compliant, upcoming inspection due, overdue)
- FR36: Customer can download compliance certificates for any completed inspection at their location
- FR37: Customer can view next scheduled inspection dates for each equipment type
- FR38: Customer portal is read-only; customers cannot modify any records
- FR39: Admin can revoke customer portal access at any time
- FR40: Customer portal requires no password; access is via secure token embedded in the unique URL

### Reporting & Audit Support

- FR41: Admin can generate a compliance status report for any customer account (exportable to PDF or CSV)
- FR42: Admin can generate an upcoming inspections report for any date range (PDF or CSV)
- FR43: Admin can generate a technician activity log (inspections completed by technician, date range)
- FR44: Admin can view a full audit log of all user actions on compliance records (submitted, viewed, downloaded, emailed)
- FR45: Admin can retrieve any historical inspection record by customer, equipment type, date, or technician

### Integrations

- FR46: Admin can connect a QuickBooks Online account via OAuth 2.0 flow
- FR47: System pushes completed inspection work orders to QuickBooks Online as draft invoices, with inspection type mapped to QBO service items
- FR48: Admin can configure the mapping between TankTrack inspection types and QuickBooks service items
- FR49: Admin can manually trigger a QuickBooks sync for any completed work order that failed to sync automatically

### Account & Billing Management

- FR50: Admin can manage billing plan (Solo/Team/Regional), payment method, and billing history via the account settings
- FR51: Admin can invite additional admin/manager/technician users and configure their access role
- FR52: Admin can deactivate a user account without deleting their historical records
- FR53: Admin can export all company data (customer records, inspection records, certificates) in a portable format for backup or migration

---

## Non-Functional Requirements

### Performance

- Mobile form submission (offline to local storage): Completes within 2 seconds of tap on Submit button, regardless of connectivity
- Dashboard load time (all customer accounts, compliance status): Completes within 3 seconds for accounts with up to 500 customers under normal load
- Certificate PDF generation: Generated within 30 seconds of form submission for 95th percentile; available in portal within 60 seconds of submission
- QuickBooks sync: Invoice pushed to QuickBooks within 5 seconds of triggering sync under normal connectivity
- Customer portal page load: Completes within 2 seconds for a customer with up to 20 equipment items

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- Compliance records are immutable after submission — no edit or delete capability for any user, including system administrators; corrections require supplemental records
- Audit log retained for minimum 10 years per EPA documentation retention policy
- Technician mobile session tokens invalidated on role change or account deactivation; app requires re-login within 24 hours
- Customer portal tokens are single-domain, HTTPS-only, with 12-month inactivity expiration; no cross-site access
- Penetration test conducted before GA launch; annual penetration test thereafter
- SOC 2 Type I audit targeted for Month 18 (required for enterprise/insurance integration conversations)

### Reliability

- System uptime: 99.5% measured monthly, excluding scheduled maintenance windows (announced 48 hours in advance)
- Offline mode: All inspection form functions remain fully operational with zero connectivity for minimum 72 hours; device storage sufficient for 500 offline forms
- Data sync: Zero data loss during sync; all offline-submitted forms confirmed as successfully synced within 60 seconds of connectivity restoration
- Certificate generation: Zero certificate generation failures (system retries up to 3 times; admin notified on failure)
- Background sync: Operates automatically without user action when connectivity is available; no manual sync button required for normal operation

### Scalability

- System supports up to 500 concurrent active users (technicians submitting forms simultaneously) with no degradation in submission performance
- Data model supports unlimited historical inspection records per tenant without performance degradation (records are append-only; archive strategy for records >10 years)
- State template library: Adding a new state template requires zero infrastructure changes; templates are configuration-driven data, not code

### Accessibility

- Mobile app touch targets minimum 48x48dp (glove-friendly operation in field environments)
- Web dashboard meets WCAG 2.1 AA for screen reader compatibility and color contrast (office admin users may include accessibility needs)
- Customer portal meets WCAG 2.1 AA (public-facing; gas station owners are the general public)
- Form labels use full words, not abbreviations (technicians may not be fluent English speakers)

### Integration Reliability

- QuickBooks OAuth token refresh handled automatically; user not prompted to re-authorize more than once per 12 months
- Email delivery (certificates, alerts) via transactional email provider with minimum 99% delivery rate; delivery failures logged and admin notified within 1 hour
- Customer portal URLs remain stable indefinitely; URL structure does not change between product versions

---

*TankTrack PRD — Petroleum Equipment Service Software*
*Date: 2026-06-16*
*Input: Shortlisted idea (81/105, Tier 1) + Market Research + Product Brief*
*Status: Complete — Ready for Architecture and Epic Creation*
