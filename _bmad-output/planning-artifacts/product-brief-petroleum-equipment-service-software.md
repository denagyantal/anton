---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/petroleum-equipment-service-software.md
  - _bmad-output/planning-artifacts/market-research-petroleum-equipment-service-software.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: petroleum-equipment-service-software
user_name: Root
date: 2026-06-16
---

# Product Brief: TankTrack — Compliance-First Field Service Software for Petroleum Equipment Contractors

---

## Executive Summary

**TankTrack** is a purpose-built field service management platform for petroleum equipment service contractors — the companies that install, inspect, and service underground storage tank (UST) systems at gas stations, fleet operators, and fuel retailers across the United States.

Today, petroleum equipment service companies operate under one of the densest regulatory frameworks in the trades: EPA UST regulations mandate annual ATG testing, annual line leak detector testing, spill bucket testing every 3 years, and facility compliance inspections every 3 years. Yet virtually all of this documentation is managed on paper or in generic spreadsheets. An insider's March 2026 HN comment — "Bought a business in the petroleum equipment service space. Building internal tools for ourselves. Pen and paper still dominates the industry." — validates what research confirms: the category has zero dedicated software.

TankTrack fills this gap with the only field service platform that speaks EPA UST compliance natively. Pre-built digital inspection forms by state, automatic 365-day re-inspection scheduling, technician certification tracking, and a customer compliance portal transform what is currently a 10–20 hour/week paper burden into a streamlined compliance workflow. The product targets the estimated 5,000–15,000 US petroleum equipment service contractor companies, with the Petroleum Equipment Institute (PEI) as the primary distribution channel.

TankTrack is positioned as a bootstrapped vertical SaaS at $149–$299/month, with an LTD offer ($299–$499) for initial PEI-channel traction. The compliance urgency (EPA fines of $10K+ for documentation failures), zero direct competition, and mandatory recurring inspection calendar create a durable, defensible business with projected $20K+ MRR within 12 months of launch.

---

## Core Vision

### Problem Statement

Petroleum equipment service contractors — the companies that test ATG systems, replace line leak detectors, inspect spill buckets and containment sumps, and certify gas stations as EPA-compliant — have no software built for them. Despite operating under mandatory federal and state inspection schedules that require precise 365-day compliance windows, these companies manage all compliance documentation on paper forms completed in the field and re-entered manually at the office.

The problem has three compounding dimensions:

1. **Regulatory complexity**: EPA UST regulations, 39 state-level approved programs (each with variations), OSHA technician certification requirements, and fire marshal inspections create overlapping documentation requirements that generic tools cannot capture.

2. **Volume**: A company with 8 technicians doing 5 service calls per day generates 200+ paper compliance forms per week. Lost, damaged, or incomplete forms during a state audit constitute regulatory violations.

3. **Timing precision**: The EPA's 2018 regulatory revision requires that annual tests be conducted within 365 days of the previous test — not simply in the same calendar year. Missing this window by one day is a compliance failure. No paper system reliably tracks this.

The result: office staff at petroleum equipment service companies spend 10–20 hours per week on compliance paperwork that could be eliminated with purpose-built software. Customers (gas station owners) call to ask about their own compliance status because no self-service alternative exists. Technician certification expiration dates are discovered at audit rather than proactively. Re-inspection scheduling is done from memory or spreadsheet — and routinely missed.

### Problem Impact

**For service contractors (primary buyers):**
- 10–20 hours/week of office admin time consumed by manual compliance documentation
- Risk of EPA fines ($10,000+ per violation) and facility shutdown orders for documentation failures
- Customer churn when competitors deliver compliance certificates faster or more reliably
- Technician certification lapses discovered during state audits rather than proactively
- Inability to scale past ~5 technicians without dedicated office admin staff to manage paperwork

**For the gas station owners they serve:**
- No self-service access to their own compliance status or certificate history
- Dependence on phone calls to the contractor to confirm their regulatory standing
- Risk of facility shutdown if their contractor misses a re-inspection deadline

**Regulatory and financial stakes:**
EPA fines for UST violations begin at $10,000 per violation per day and can reach $37,500/day for willful violations. A single missed annual ATG test discovered during a state compliance inspection can trigger thousands of dollars in fines plus mandated corrective action. This is existential pain for small businesses — the exact urgency that drives software adoption.

### Why Existing Solutions Fall Short

No current product earns more than a "partially fits with major workarounds" rating for petroleum equipment service contractors:

| Solution | The Gap |
|----------|---------|
| **MobileWright UST Inspector** | Built for state government inspectors, not private contractors; sold to state agencies only; Windows tablet, not cloud SaaS |
| **Titan Cloud / PDI Technologies** | Built for large fuel retailers/operators (their customers), not the service companies who work on their equipment; enterprise pricing ($500–$2,000+/month) and complexity |
| **Jobber / ServiceFusion** | Generic FSM with zero EPA compliance awareness; no pre-built UST inspection templates; no 365-day re-inspection logic; no technician certification tracking |
| **SafetyCulture / TrueContext** | Generic inspection platforms requiring extensive customization; no petroleum domain knowledge; no re-inspection scheduling |
| **BasinCheck** | Closest concept (purpose-built for O&G), but focused on OSHA/safety for oil extraction companies, not UST compliance for service contractors |

The gap is structural: enterprise vendors can't justify customization for such a small niche; generic FSM vendors don't know the domain; government-focused tools can't be sold to private companies. The petroleum equipment service contractor market simply does not have a software category yet.

### Proposed Solution

TankTrack is a compliance-first field service management platform that makes EPA UST compliance the product's native language rather than an afterthought:

- **Digital inspection forms pre-built per state**: Technicians complete the exact EPA/state forms on their mobile device in the field — offline-capable, with photo capture, GPS coordinates, and technician signature and certification number auto-populated
- **Automatic 365-day re-inspection calendar**: The moment a current inspection is completed, TankTrack automatically schedules the next required inspection within the 365-day compliance window and sends 60/30/7-day alerts to both the contractor and the customer
- **Technician certification tracker**: Each technician's Class A/B/C operator licenses, state UST contractor licenses, and ATG certifications are tracked with expiration warnings — eliminating audit surprises
- **Customer compliance portal**: Gas station owners and fleet managers log in to see their own compliance status, download compliance certificates, and track upcoming inspection schedules without calling the contractor
- **Environmental incident log**: Structured documentation for leak or spill detection events, generating the required EPA incident report automatically

**Platform delivery:**
- Mobile-first field app (iOS and Android) with full offline capability for remote/poor-signal environments
- Web dashboard for office admin and dispatch
- QuickBooks integration for invoicing workflows

### Key Differentiators

1. **Domain specificity over generic flexibility**: TankTrack is the only product that knows what an ATG is, what a shear valve test requires, and which states require containment sump inspections. This is not configurable — it is built in.

2. **Compliance calendar as a core feature, not an add-on**: The 365-day re-inspection logic is the engine of the product, not a reminder bolted onto a calendar. When a test is completed, the next one is automatically scheduled and tracked — for every customer, every piece of equipment, every applicable regulation.

3. **Customer compliance portal**: No existing solution gives gas station owners self-service access to their own compliance records. TankTrack's customer portal is a visible, differentiating feature that service contractors can use as a selling point with their own customers.

4. **State-by-state regulatory template library**: As a first-mover building this library, TankTrack's template depth becomes a compounding moat — each state added opens new geographic market without requiring new product development.

5. **PEI distribution channel exclusivity**: The Petroleum Equipment Institute, with 1,500+ member companies and a monthly journal + annual convention, is a natural sales channel. A first-mover who establishes PEI relationships and earns member trust creates a word-of-mouth flywheel that is extremely difficult for later entrants to replicate.

---

## Target Users

### Primary Users

**Segment 1 — "The Overloaded Owner" (Solo operator, 1–5 technicians)**

*Profile:* Mike, 48, owns a 3-person petroleum equipment service company in Ohio. He is the owner, dispatcher, and lead technician. He runs jobs during the day and does compliance paperwork at night. He has had one close call with the state — a missed ATG annual test discovered during a routine compliance check — that resulted in a warning and a scramble to get the test done within the week. He has looked at Jobber but found it too generic. He doesn't actively search for software; he buys based on what a peer recommends at the Ohio Petroleum Equipment Association meeting.

*Current situation:* Paper forms completed in the field, then brought back to the office. Mike re-enters critical data into a shared Google Sheet that tracks customer inspection history. The sheet has grown to 12 tabs over 8 years and he is the only person who knows how it works. He has no customer-facing portal. Customers call him directly to get their compliance certificates.

*Primary pain:* Missing re-inspection windows and managing paper records across 200+ customer locations.

*Success vision:* Complete a job from the truck, have the compliance form auto-submitted, and know that the next inspection is already scheduled. Come Monday morning, a dashboard shows everything due this week — no spreadsheet required.

*WTP:* $149–$199/month without hesitation if a peer tells him it works. First point of contact is PEI Journal or state association meeting.

---

**Segment 2 — "The Drowning Office Manager" (6–15 technicians)**

*Profile:* Sandra, 39, is the office manager and dispatcher at a 10-person petroleum equipment service company in Texas. She manages technician scheduling, customer callbacks, compliance certificate requests, and regulatory documentation. She is responsible for ensuring that annual ATG tests, line leak detector tests, and spill bucket tests are completed for 180 customer accounts on schedule. She has asked the owner three times to invest in software. She has a stack of paper forms on her desk from last week's jobs that still need to be entered.

*Current situation:* Uses a combination of paper forms, a shared calendar for scheduling, and a custom Excel workbook for tracking inspection history. Generates compliance certificates as PDFs using a Word template, emailing them manually. Spends 15–20 hours/week on compliance admin. Frequently gets calls from customers asking about their compliance status.

*Primary pain:* The combination of volume (10 techs × 5 jobs/day × compliance forms = overwhelming), manual certificate generation, and ad hoc customer compliance questions consuming her entire week.

*Success vision:* Technicians complete forms on their phones in the field. The system automatically schedules the next inspection. When a customer calls for a compliance certificate, she sends a portal link instead of building a PDF manually.

*WTP:* $199–$249/month if she can present a clear ROI argument to the owner (hours saved × hourly rate). She is the internal champion who will push the purchase decision.

---

**Segment 3 — "The Growth-Oriented Regional Owner" (16–50 technicians)**

*Profile:* Dave, 55, owns a regional petroleum equipment service company with 22 technicians and 3 office staff operating across 4 states. Has outgrown paper. Has tried Jobber and found it inadequate for compliance workflows. Willing to pay $299–$499/month for something that actually fits. Attends PEI Convention every year. Influenced by what his industry peers are using.

*Current situation:* Mix of spreadsheets, basic FSM, and paper. Multi-state operations mean dealing with different inspection form requirements per state, which increases admin complexity dramatically. Technician certification tracking is ad hoc — reliant on individual techs to remember their renewal dates.

*Primary pain:* Multi-state compliance form variation is unmanageable at scale. Technician certification lapses discovered at audit. Growing volume of customer compliance portal requests that cannot be served efficiently.

*Success vision:* One platform that handles the compliance workflow for all 4 states his team operates in. Single dashboard for all 22 technicians' certification expiration dates. Customer-facing portal that eliminates 80% of inbound compliance certificate calls.

*WTP:* $299–$499/month, paid annually upfront. Decision made by owner after seeing a peer use it at PEI Convention.

### Secondary Users

**Gas station owners / facility operators (customers of the primary buyer):**
Not the paying customer, but a key beneficiary who influences adoption decisions. Gas station owners want to verify their own compliance status without calling the service company. The TankTrack customer compliance portal serves this audience. When service contractors can tell prospects "your customers get their own compliance portal," it becomes a competitive differentiator in winning new accounts.

**Field technicians (end users of the mobile app):**
Technicians are not the buying decision-maker, but they determine whether the product gets used. A field app that is slower, more complicated, or less reliable than paper will be abandoned. Mobile app UX must prioritize: offline capability, fast form completion (pre-populated fields from customer and equipment history), and one-tap completion from the job site.

**State environmental agency inspectors (indirect users):**
Do not use TankTrack directly, but are the downstream recipients of the compliance documentation it generates. Pre-built state-specific forms that match the exact format inspectors expect reduce friction during compliance audits — creating a strong selling point: "The forms TankTrack generates are the exact forms your state inspector expects to see."

### User Journey

**Discovery:**
Service contractors discover TankTrack primarily through:
1. PEI Journal editorial coverage or advertising (print + digital)
2. PEI Convention exhibitor presence (annual, Tulsa OK)
3. Word-of-mouth from a peer at a state petroleum equipment association meeting
4. Organic search: "UST compliance software," "petroleum equipment inspection tracking," "ATG inspection scheduling software"
5. Triggered by a compliance fine, near-miss, or failed audit — acute pain drives immediate search

**Onboarding:**
- Initial setup: Import existing customer account list; configure state-specific inspection templates for their operating states
- Technician mobile app setup: 15-minute onboarding per technician; offline sync configured
- Historical data migration: Basic customer/equipment history import from spreadsheet
- First inspection: Complete a live inspection form from the mobile app; auto-scheduled re-inspection appears immediately in dashboard
- **Aha moment**: The re-inspection calendar populates automatically across all customer accounts after historical data is imported. "I can see everything due in the next 90 days without doing anything."

**Core Usage:**
- **Field technicians**: Open mobile app on arrival at job site; select customer and equipment type; complete pre-populated inspection form (customer info, equipment serial numbers, previous test results auto-filled from history); take required photos; submit on-site (or sync on return to signal)
- **Office admin**: Morning dashboard review — upcoming inspections, overdue items, technician schedule; customer certificate requests handled via portal link; weekly compliance report generated automatically
- **Owners**: Monthly compliance health report across all customer accounts; technician certification dashboard; revenue tracking per compliance service type

**Success Moment (early adoption, first 30 days):**
"We had our first state inspection audit last month. The inspector asked for 3 years of ATG test records for 40 of our customers. I pulled everything from TankTrack in about 10 minutes. That used to take us 2 days going through paper files."

**Long-term retention drivers:**
- 3+ years of compliance history creates high switching cost — migrating historical compliance records is painful
- Customer compliance portal creates a visible, external-facing value that customers come to expect
- Annual re-inspection calendar integrates into business operations deeply; removing it would require rebuilding the entire scheduling workflow manually

---

## Success Metrics

### User Success Metrics

**Primary user outcome: Compliance workflow time savings**
- Target: Users report a reduction in compliance admin time from baseline (typical: 10–20 hours/week) to < 4 hours/week within 90 days of full adoption
- Measurement: In-app survey at 90-day mark + user interviews

**Core product engagement: Inspection form completion in the field**
- Target: ≥ 80% of inspections submitted from mobile app (not retroactively entered at office) within 60 days of onboarding
- Measurement: Submission timestamp vs. job completion timestamp in system logs

**Re-inspection scheduling automation adoption:**
- Target: ≥ 90% of completed inspections have auto-scheduled follow-up within 365-day window
- Measurement: Automatic flag on any inspection with no follow-up scheduled within 7 days of completion

**Customer compliance portal activation:**
- Target: ≥ 50% of paying customers have shared portal access with at least one of their own customers within 90 days
- Measurement: Customer portal invites sent per account

**Compliance miss prevention:**
- Target: < 2% of scheduled inspections per customer are completed outside the 365-day compliance window (for customers using the auto-scheduling feature)
- Measurement: Inspection completion date vs. required compliance deadline in system

### Business Objectives

**Revenue targets (bootstrapped growth model):**
- Month 6: 25–40 paying customers, $3,700–$8,000 MRR
- Month 12: 75–100 paying customers, $15,000–$20,000 MRR
- Month 24: 200–300 paying customers, $40,000–$60,000 MRR

**LTD launch objective:**
- PEI-channel LTD ($299–$499): 50 customers within 90 days of launch
- Goal: Sufficient cash to fund 6 months of continued development without external funding

**Market penetration:**
- Year 1: Penetrate PEI member base (1,500 companies) at 3–5% conversion = 45–75 customers
- Year 2: Expand to non-PEI service contractors via organic/content + state association channels; reach 5–10% of addressable 3,000 target companies

**Churn targets:**
- Monthly churn < 5% in Year 1, < 3% by Month 18
- Annual contract churn < 15% in Year 2
- Compliance data lock-in (3+ years of history) expected to drive natural retention improvement over time

**Net Promoter Score:**
- Target NPS ≥ 40 at Month 12; ≥ 50 at Month 24
- Peer recommendation is the primary sales channel in this industry; NPS directly predicts growth

### Key Performance Indicators

| KPI | Month 6 Target | Month 12 Target | Month 24 Target |
|-----|---------------|-----------------|-----------------|
| Paying customers | 25–40 | 75–100 | 200–300 |
| MRR | $3,700–$8,000 | $15,000–$20,000 | $40,000–$60,000 |
| Monthly churn | < 5% | < 3% | < 2% |
| States with templates | 3 (CA, TX, FL) | 8–10 | 20+ |
| Mobile app submissions (% of total inspections) | 60% | 80% | 90% |
| Customer compliance portals activated | 30% of accounts | 50% of accounts | 70% of accounts |
| NPS | — | 40+ | 50+ |
| PEI Journal / association mentions | 1 | 3+ | 5+ |
| G2/Capterra reviews | 5 | 20+ | 50+ |

**Leading indicator to watch (Month 1–3):**
The percentage of mobile app inspections submitted on-site (not entered later) is the best early signal of whether the product fits field technician workflows. If this metric stays below 50% at 60 days, the mobile UX needs intervention before growth continues.

---

## MVP Scope

### Core Features

The MVP must deliver a complete, functional compliance workflow from field inspection to compliance certificate — enough that a petroleum equipment service company can manage their entire EPA documentation burden using TankTrack from day one.

**1. Customer and Equipment Management**
- Customer account profiles: company name, contact info, address, number of USTs/ASTs, equipment types
- Equipment records per customer: ATG system make/model/serial number, tank capacities, leak detector type, spill bucket type, installation date
- Import from CSV (to migrate existing customer lists from spreadsheets)

**2. State-Specific Digital Inspection Forms (Top 3 States for MVP: CA, TX, FL)**
- Pre-built digital forms matching EPA/state inspection requirements for each state:
  - Annual ATG system certification form
  - Annual line leak detector test form
  - Spill bucket/containment sump inspection form (every 3 years)
  - Annual walkthrough inspection checklist
- Fields: technician name and certification number (auto-populated), customer site, equipment serial numbers, test results, pass/fail status, compliance notes, photo attachments, GPS timestamp
- Form fields designed to match exactly what state inspectors expect during audits

**3. Offline-Capable Mobile App (iOS + Android)**
- Submit inspection forms from job site with no internet required
- Sync on return to signal
- Auto-populate customer and equipment fields from database
- Photo capture attached to form (required for certain inspections)
- Technician certification number auto-populated from profile
- Simple, fast UI optimized for use with work gloves or in dim environments

**4. Automatic 365-Day Re-Inspection Calendar**
- On form submission, auto-calculate and schedule next required inspection within 365-day compliance window
- Calendar view of all upcoming inspections per customer and across all accounts
- Automated customer alerts: 60/30/7-day email notifications before compliance deadline
- Dashboard: "Overdue," "Due This Week," "Due This Month" views for office admin
- Manual override for exceptional cases (customer requested delay, etc.)

**5. Compliance Certificate Generation**
- Auto-generate compliance certificate PDF on inspection completion
- Includes: customer name/address, equipment type, inspection type, results, technician name and certification number, date, contractor company info and license number
- Certificates stored in system and linked to customer record
- One-click email to customer
- Printable format matching state standards

**6. Technician Certification Tracking**
- Technician profiles: name, contact, active licenses and certifications
- Certification types: Class A/B/C UST operator training, state UST contractor license, ATG manufacturer certifications
- Expiration date tracking with 90/30-day warning notifications to owner/admin
- Certification number auto-populated on all inspection forms

**7. Customer Compliance Portal (Read-Only)**
- Unique portal URL per customer account
- Gas station owner can log in and view: active compliance status per equipment type, next required inspection dates, downloadable compliance certificates (PDF)
- No ability for customer to modify records (read-only)
- Contractor controls which customers get portal access

**8. Basic Reporting**
- Compliance status report by customer (exportable to PDF/CSV)
- Upcoming inspections report (30/60/90 day windows)
- Technician activity log (inspections completed per technician per date range)
- Revenue report by service type (basic invoicing data — not full accounting)

**9. QuickBooks Integration (Basic)**
- Push completed work orders to QuickBooks as draft invoices
- Map inspection types to QuickBooks service items
- Reduce double-entry between service completion and billing

### Out of Scope for MVP

The following features are important for the long-term product but not required to deliver core value in MVP:

- **Above-ground storage tank (AST) compliance**: AST regulations vary significantly by state (no federal baseline); add post-MVP once UST workflow is proven
- **State templates beyond CA/TX/FL**: Expand state-by-state based on customer geographic distribution; prioritize by customer requests
- **Environmental spill/incident reporting**: Structured EPA incident report generation for leak events; rare but high-stakes; add in Month 6–9
- **Multi-company / franchisee support**: Operators with multiple locations under a parent company; complex data model; add post-MVP
- **Native ATG system integrations (Veeder-Root, Franklin Electric)**: Direct data pull from ATG systems to auto-populate inspection results; high value but complex integration work; post-MVP
- **Scheduling and dispatch optimization**: Route optimization for multi-stop field days; not required for compliance workflow in MVP
- **Full accounting module**: TankTrack will integrate with QuickBooks rather than replicate it
- **Customer-facing compliance booking portal**: Gas station owners requesting their own service appointments; post-MVP
- **AI-assisted form completion**: Pre-fill inspection results based on historical patterns; post-MVP enhancement
- **Native regulatory reporting to state portals**: Direct electronic submission to state environmental agency databases; complex per-state integrations; 2-year roadmap item

### MVP Success Criteria

TankTrack MVP is ready to scale when the following criteria are met:

1. **5 paying design partner customers** actively using the full compliance workflow (not just evaluating) for at least 30 days, each having completed at least 10 inspections via the mobile app
2. **Mobile submission rate ≥ 70%** — technicians are completing and submitting forms in the field, not at the office later
3. **Zero missed 365-day compliance windows** for any customer account managed entirely within TankTrack (auto-scheduling is working)
4. **Customer compliance portal adoption ≥ 60%** — at least 3 of 5 design partners have shared portal access with their own customers
5. **Design partner NPS ≥ 40** — at least 4 of 5 partners would recommend TankTrack to a peer at a PEI event
6. **QuickBooks integration working end-to-end** without manual intervention for at least one design partner's billing workflow

**Go/No-Go decision point:** If after 6 months of operation, monthly churn exceeds 8% or fewer than 25 customers have converted from LTD/trial to paid subscription, re-evaluate the product-market fit before scaling GTM spend.

### Future Vision

TankTrack's 3-year vision is to become the compliance operating system for the entire petroleum equipment services sector — not just UST service contractors, but the full ecosystem of companies that keep fuel infrastructure safe and compliant.

**Phase 2 (Months 9–18): Compliance Template Expansion**
- State-by-state template expansion to 20+ states (covering 80%+ of US UST facilities)
- Above-ground storage tank (AST) compliance module
- Environmental spill/incident reporting with EPA-format incident documentation
- Native ATG system integrations (Veeder-Root, Franklin Electric) for automated test result capture

**Phase 3 (Months 18–30): Platform Expansion**
- Environmental testing company module: Tank tightness testing companies (separate from service contractors) have identical compliance documentation needs with overlapping customer bases
- Fuel system installer module: New UST installation compliance documentation (a distinct workflow from ongoing maintenance)
- Direct regulatory reporting: Electronic submission to state environmental agency portals where APIs exist
- PEI white-label / member benefit partnership: Position TankTrack as the official compliance software endorsed by PEI

**Phase 4 (Months 30+): Intelligence Layer**
- AI-assisted compliance form completion: Pre-fill inspection results from equipment history and manufacturer specifications
- Predictive compliance alerts: "Based on this ATG system's history, it has a 40% higher probability of failing its annual test — schedule proactively"
- Regulatory change monitoring: Auto-update forms when EPA or state regulations change
- Insurance integration: Direct compliance history reporting to petroleum equipment insurance providers (proof of compliance for coverage renewal)

**Long-term market position:**
TankTrack becomes the category-defining platform for petroleum equipment compliance — the software standard that state inspectors recognize, that insurance companies reference, and that PEI recommends to all member companies. A network of 500+ service contractor customers, each with 50–200 client accounts, creates a compliance data asset that has regulatory, insurance, and market intelligence value far beyond the SaaS subscription itself.

---

## Strategic Context

### Go-to-Market Strategy

**Phase 1 — Customer Discovery (Pre-build, 60 days):**
Reach out to 10–15 petroleum equipment service companies via PEI member directory, LinkedIn, and state petroleum equipment contractor associations. Offer free compliance audit tool / discovery consultation in exchange for requirements discovery session. Goal: 3–5 confirmed design partners with validated requirements and willingness to pay $149+/month.

**Phase 2 — MVP Build (60–150 days):**
Build with design partner feedback. Ship early, iterate fast. Prioritize mobile app quality above all — the field technician experience determines adoption.

**Phase 3 — PEI Channel LTD Launch (150–240 days):**
- PEI Journal article + advertising placement ($2,000–$5,000/year for print + digital)
- PEI Convention exhibitor presence (next available after launch)
- LTD offer: $299 solo operator, $499 small team — direct to PEI member list
- Target: 25–50 LTD customers; first 3 peer testimonials captured for social proof

**Phase 4 — MRR Transition (240+ days):**
- Monthly subscription as primary model ($149–$249/month)
- State template expansion driven by customer geography
- Content marketing: EPA compliance guides, UST inspection checklists — zero-competition SEO keywords
- Word-of-mouth flywheel in tight-knit contractor community

### Pricing Model

| Tier | Monthly | Annual | LTD (Launch) |
|------|---------|--------|-------------|
| Solo (1–5 techs) | $149/mo | $1,490/yr | $299 |
| Team (6–15 techs) | $249/mo | $2,490/yr | $499 |
| Regional (16–50 techs) | $399/mo | $3,990/yr | Custom |

Pricing is per company (flat rate), not per user — the most natural model for small trade businesses.

### Key Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Very small niche limits scale | High | Medium | Define success as $500K–$2M ARR bootstrapped; adjacent market expansion (AST, fuel installers) provides runway |
| Domain expertise barrier | High | Medium | 60-day customer discovery sprint before building; 3–5 design partners from PEI before writing code |
| Conservative buyers, slow adoption | Medium | High | Target companies with recent compliance fine/audit (acute pain = immediate motivation); LTD reduces purchase risk |
| Regulatory change (EPA simplification) | Low | High | Build forms as configurable templates, not hardcoded; regulatory changes historically increase burden |
| Large-player entry | Low | High | Move fast; PEI channel relationships + customer compliance data = durable moat |

### Distribution Channel Summary

- **Primary**: PEI (Petroleum Equipment Institute) — journal, convention, direct member outreach
- **Secondary**: State petroleum equipment contractor associations (direct mailing lists)
- **Content/SEO**: "UST compliance software," "petroleum equipment inspection software," "ATG inspection tracking" — zero-competition keywords
- **Community**: Direct outreach to petroleum equipment service company owners via LinkedIn, r/smallbusiness
- **Referral**: Peer recommendation in tight-knit contractor community; build referral program by Month 6

---

*Product Brief for TankTrack — Petroleum Equipment Service Software*
*Date: 2026-06-16*
*Input: Shortlisted idea (81/105, Tier 1) + Comprehensive Market Research*
*Status: Complete — Ready for PRD creation*
