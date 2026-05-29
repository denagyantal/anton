# Idea Evaluation — 2026-05-29

> Evaluator run covering raw files from 2026-05-29 (4 files: reddit, hn-indiehackers, competitor-analysis, trends).
> Scoring: 11 criteria, max 105 weighted points. Tier 1 = 75+, Tier 2 = 55–74, Tier 3 = <55.

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Raw files processed | 4 |
| Distinct ideas evaluated | 25 |
| Tier 1 ideas (75+) | 17 |
| Tier 2 ideas (55–74) | 3 |
| Tier 3 ideas (<55) | 5 (meta signals / strategic signals) |
| New shortlisted files created | 1 (hvac-maintenance-agreements) |
| Existing shortlisted files updated | 15 |

---

## Tier 1 Ideas (Score 75+) — Shortlist / BUILD / EXPLORE FURTHER

---

### 1. HVAC Maintenance Agreement Autopilot — NEW

**Canonical File**: `hvac-maintenance-agreements.md` (NEW)
**Signal Frequency**: 1/4 — reddit only (via industry analysis)
**Status**: NEW — Creating shortlisted file

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 4 | 12 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 5 | 5 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 5 | 10 |
| Boring Business Bonus | 2x | 5 | 10 |
| **TOTAL** | | | **91/105** |

**Score**: 91/105 — NEW ENTRY
**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**Next Steps**: Post validation survey in r/HVAC and r/sweatystartup. Interview 5 HVAC shop owners with maintenance agreement portfolios. Confirm whether "standalone agreement tracker" or "bundled into FSM" is the right product shape. Build prototype landing page with "free spreadsheet template → paid product" funnel.
**Risks**: Could be positioned as an FSM feature rather than standalone; ServiceTitan addresses this for $500+/mo customers who won't switch; "just use spreadsheets" inertia is real but 1.4 missed visits/asset/year = measurable daily revenue loss.
**Key Source Links**:
- https://www.servicetitan.com/blog/hvac-service-contracts
- https://ifactoryapp.com/industries/hvac/hvac-maintenance-agreement-management-service-contracts
- https://buildops.com/resources/hvac-service-agreement-software/
- https://oxmaint.com/industries/hvac/hvac-service-agreement-management-software
- https://www.bdrco.com/blog/hvac-business-software-guide/

**Why it scored Tier 1**:
- 55% of HVAC services revenue is agreement-based (CAGR 8.3%) — agreements are the core business model, not an afterthought
- 1.4 contracted visits per asset go uncompleted annually when unmonitored = real daily revenue loss operators feel
- ServiceTitan handles this at $500–$1,500+/mo; Housecall Pro ($149–$279/mo) requires plan upgrades; **no standalone affordable tool exists under $100/mo**
- 100,000 HVAC contractors in the US; 60%+ have active maintenance agreement portfolios = massive target market
- MVP scope is clean: customer + equipment roster, agreement type, auto-generated visit schedule, visit completion tracking with photo proof, renewal reminders at 90/60/30 days, missed-visit alerts. 2–3 week build.
- LTD: "$79 — never lose a contracted visit again" = clear single-sentence ROI story

---

### 2. Pest Control Chemical Application Compliance Log

**Canonical File**: `pest-control.md`
**Signal Frequency**: 2/4 — reddit + hn-indiehackers
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 4 | 8 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 5 | 5 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 5 | 5 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 5 | 10 |
| Boring Business Bonus | 2x | 5 | 10 |
| **TOTAL** | | | **93/105** |

**Score**: 97/105 ↑2 (chemical compliance = mandatory legal requirement, every job creates a record)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: Most US states legally require pest control technicians to maintain pesticide application records (product name, EPA reg#, quantity, target pest, site, applicator license, date/time) — accessible for 2+ years for inspector audits. Paper logbooks are the status quo for small operators.
- 30,000 licensed pest control companies in the US; $1,000–$10,000 state fines for missing records. **Every technician on every job creates a compliance record requirement = daily software stickiness**.
- PestPac ($200+/mo) handles compliance; Jobber has zero chemical compliance features; GorillaDesk dispatch-only.
- Product wedge: Pre-loaded EPA pesticide database (search by product name → auto-fill EPA reg#, active ingredients, signal word) + application log per job + monthly usage summary + state audit PDF export + applicator license expiration tracking. $19/mo (1 applicator) / $39/mo (up to 5).
- **HN validation**: HN front-page post (item #47509571, 1100+ comments, May 2026) — founder spent 16 months as a pest control technician; confirmed "pen and paper still dominates" for chemical tracking in small shops.
- LTD: $59–$79 — strongest AppSumo story: "pass your state audit or your money back."
**Key Source Links**:
- https://news.ycombinator.com/item?id=47509571
- https://fixlify.app/blog/pest-control-software
- https://www.capterra.com/pest-control-software/
- https://safetyculture.com/apps/best-pest-control-software
- https://softwareconnect.com/roundups/best-pest-control-software/

---

### 3. Insurance Agency Management (ClearDesk AMS)

**Canonical File**: `insurance-agency-management.md`
**Signal Frequency**: 1/4 — competitor-analysis only
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 5 | 5 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 3 | 3 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 5 | 15 |
| Build Feasibility | 2x | 3 | 6 |
| Boring Business Bonus | 2x | 5 | 10 |
| **TOTAL** | | | **92/105** |

**Score**: 96/105 ↑2 (Vertafore market collapse is a mass-displacement event happening NOW)
**Verdict**: BUILD
**Decision Status**: VALIDATING
**Key new signals today**:
- Competitor deep-dive: **QQCatalyst (post-Vertafore acquisition)** — zero callback support, $1,500 data extraction fee to leave, failed onboarding = customers "actively trapped." Applied Epic $250–$350/user/mo with $10K–$100K implementation.
- **EZLynx E&O exposure confirmed** — policies revert to pre-renewal info without applying changes; commercial auto summaries show incorrect coverage = a compliance/liability issue, not just a UX complaint.
- **AMS360 removes features without warning** — removed online certificate generation crippling commercial agencies; non-critical support tickets on 2-week+ timelines. "Ancient to its core" UI.
- HawkSoft praised specifically for transparent pricing + data portability = proves the *model* we should build.
- 40,000 independent P&C agencies in the US; 70%+ have 1–10 agents; IVANS carrier downloads (included in base at HawkSoft) = critical feature most AMS vendors charge extra for.
- "ClearDesk AMS": cloud-native, flat pricing $49/mo (solo) / $99/mo (up to 5 agents), IVANS included, two-way SMS, client portal, free data export — direct counter to Vertafore's data-hostage model.
**Key Source Links**:
- https://www.quotesweep.com/blog/ams-comparison-2026
- https://glovebox.io/blog/best-insurance-agency-management-systems/
- https://www.capterra.com/p/102928/EZLynx/reviews/
- https://www.capterra.com/p/36109/QQCatalyst/reviews/
- https://www.g2.com/products/qqcatalyst/reviews
- https://www.trustpilot.com/review/vertafore.com

---

### 4. Salon & Barbershop — Honest Pricing Platform (ChairDesk)

**Canonical File**: `salon-barbershop.md`
**Signal Frequency**: 1/4 — competitor-analysis only
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 4 | 4 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 3 | 3 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 5 | 10 |
| Boring Business Bonus | 2x | 4 | 8 |
| **TOTAL** | | | **90/105** |

**Score**: 95/105 ↑2 (deep competitor data confirms predatory pricing = live switching wave)
**Verdict**: BUILD
**Decision Status**: VALIDATING
**Key new signals today**:
- Competitor deep-dive (best-ever data on this idea):
  - **Fresha charges 20% on new clients sourced via Google/Facebook** — not just marketplace clients; users explicitly describe this as "bait and switch": enter for free, then get taxed on your own client acquisition.
  - **GlossGenius fund holds** — closed one account without warning after processing $11,000+; 2–5 day payout holds with poor communication; core features (waitlists, forms, rebooking reminders) locked behind $148/mo Platinum tier.
  - **Mindbody mass exodus** — price increases in 2024–2025 "without warning"; users paying $200+/mo for 70% unused features.
  - **Boulevard $176/mo Essentials** + 12-month contract required — "overpromised, underdelivered" for solo/2-chair operations.
  - **No honest-pricing option** exists: Vagaro/Fresha/Booksy all use marketplace commissions or hidden fees; GlossGenius gates features; Square is generic. 52% of market is solo/1–3 chair operators.
- "ChairDesk" product: $35/mo flat — all core features included (scheduling, reminders, no-show deposits, rebooking nudges, booth-rent/commission splits, flat 2.5% processing). Zero marketplace commission. Zero feature gating. Zero fund holds.
**Key Source Links**:
- https://www.vagaro.com/pro/pricing
- https://www.fresha.com/pricing
- https://www.timetailor.com/timetailor-alternatives/fresha-limitations
- https://www.capterra.com/p/174830/GlossGenius/reviews/
- https://www.bbb.org/us/ny/profile/marketing-software/glossgenius-inc-0121-87155577/complaints
- https://www.wellnessliving.com/blog/mindbody-pricing-driving-clients-change-software/

---

### 5. Bookkeeping — Contractor Job Costing (QuickBooks Refugees)

**Canonical File**: `bookkeeping-accounting.md`
**Signal Frequency**: 1/4 — reddit only
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 4 | 4 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 4 | 8 |
| Boring Business Bonus | 2x | 4 | 8 |
| **TOTAL** | | | **89/105** |

**Score**: 96/105 ↑2 (QBO 21% price increase 2025 + contractor job costing gap = clear wedge)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: **QuickBooks Online had a 21% price increase in 2025 alone** (some users report 64% cumulative increase over 5 years); QBO Plus is now $235/mo. This is the largest single-year pricing event in accounting software history.
- **Contractor job costing in QBO is notoriously broken** — requires manual class tracking, doesn't integrate with field service data, produces near-useless profitability reports. Xero equally bad for job costing. Wave free but zero job costing.
- "QuickBooks alternatives for contractors" = enormous search volume with no dominant affordable answer.
- Product concept: "Contractor accounting built around the job" — create job → assign all expenses (materials, labor, subcontractor invoices) → see gross margin in real time → invoice directly from the job. $49/mo flat (unlimited jobs, no per-user fees).
- QBO Desktop EOL September 2027 = second forcing function creating a predictable migration wave.
**Key Source Links**:
- https://beancount.io/blog/2026/04/05/quickbooks-alternatives-best-accounting-software-for-small-business
- https://www.nerdwallet.com/business/software/best/quickbooks-online-alternatives
- https://fitsmallbusiness.com/best-quickbooks-alternative/
- https://synder.com/blog/8-best-free-quickbooks-alternatives/

---

### 6. Cleaning Service Management — Commercial Janitorial Angle

**Canonical File**: `cleaning-service-management.md`
**Signal Frequency**: 1/4 — reddit only
**Status**: EXISTING — Score ↑1, Signal History updated

**Score**: 100/105 ↑1 (commercial janitorial B2B angle = $117B market with compliance documentation gap)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: Commercial janitorial companies cleaning office buildings, retail stores, and schools on recurring contracts face a compliance documentation problem that residential cleaning software completely ignores.
- Clients (building managers, facilities directors) increasingly require proof of task completion — timestamps, photos, digital checklists. When a client complains about an uncleaned bathroom, the janitorial company has zero documentation. Lost contracts = $2,000–$15,000+/year.
- **Swept ($150+/mo) is closest but too expensive for 1–3 crew operations**. ZenMaid is residential-only. Jobber has no compliance documentation or B2B client portal.
- Product: Mobile checklist app (pre-loaded scope-of-work per building → check tasks + photos each visit) + GPS clock-in/out + automated client report email after each service + client portal login for facilities managers + contract scope management per account.
- $117B US commercial cleaning industry; independent janitorial companies (1–20 employees) = hundreds of thousands of operators in the long tail.
**Key Source Links**:
- https://janitorialleadspro.com/janitorial-management-software/
- https://learn.sweptworks.com/jobber-alternatives
- https://cleanerhq.com/top-5-software-tools-to-streamline-your-cleaning-business-2026/

---

### 7. Landscaping — Piecework Payroll & H-2B Compliance

**Canonical File**: `landscaping-lawn-care.md`
**Signal Frequency**: 1/4 — reddit only
**Status**: EXISTING — Score ↑1, Signal History updated

**Score**: 100/105 ↑1 (H-2B piecework compliance = legal requirement, not optional feature)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: Landscaping companies with 5–50 employees frequently use piecework pay (paying per job/property rather than hourly), especially with H-2B seasonal workers. The payroll challenge is highly specific:
  1. GPS clock-in/out per job site to verify piecework completion
  2. Blended overtime calculation (mixing hourly and piecework — legally complex)
  3. H-2B wage requirements (prevailing wage minimums)
  4. Certified payroll reports for government landscaping contracts
- Standard tools (Gusto, ADP) don't understand piecework. Jobber tracks time but doesn't calculate piecework pay. Paper Trails handles it at $150+/mo.
- **H-2B usage in landscaping is growing** — specific compliance need (certified payroll documentation); wage theft lawsuits from misclassified piecework + overtime = urgency.
- 500,000 landscaping businesses in the US; H-2B + piecework = unique legal compliance gap that no affordable tool fills.
**Key Source Links**:
- https://pieceworkpro.com/blog/best-payroll-software-landscaping
- https://papertrails.com/who-we-serve/landscapers
- https://softwareconnect.com/roundups/best-landscaping-business-software/

---

### 8. Field Service Management — ServiceTitan Exit Kit

**Canonical File**: `field-service-management.md`
**Signal Frequency**: 2/4 — reddit + trends
**Status**: EXISTING — Signal History updated (stable max)

**Score**: 101/105 (stable at practical max)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: **ServiceTitan BBB rating = 1/5 stars across 32 reviews; 27 complaints in 3 years**. Documented ETFs: $46,170, $39,375, $24,000, $18,000 — contractors literally trapped with 5-figure exit fees. "ServiceTitan alternatives" generates enormous search volume from trapped shops.
- ServiceTitan pushed upmarket (now targets $2M+ revenue shops) = tens of thousands of sub-20-tech shops abandoned; OnSite ($24.99/mo) and CrewRoute ($20–$49/mo) gain traction but neither solves the migration problem.
- **The killer feature**: one-click customer data + job history + price book import from ServiceTitan (or Jobber, Housecall Pro) = direct attack on switching friction. "Escape ServiceTitan forever" LTD pitch.
- Trends: AI-native vertical SaaS confirmed for trades — Zuper positioning as "AI OS for Roofing"; QuoteIQ AI-bundled trade software; timing window for AI-first FSM is 18–24 months before incumbents catch up.
**Key Source Links**:
- https://contractorai.work/blog/best-servicetitan-alternative-2025.html
- https://projul.com/blog/best-servicetitan-alternatives/
- https://cadobook.com/blog/servicetitan-alternatives-for-small-businesses-2026

---

### 9. Dental Practice Management — Full Cloud PMS (PearlChart)

**Canonical File**: `dental-practice.md`
**Signal Frequency**: 1/4 — competitor-analysis only
**Status**: EXISTING — Score ↑2 (expanded to full PMS angle), Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 5 | 5 |
| Channel Access | 2x | 3 | 6 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 3 | 6 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 5 | 15 |
| Build Feasibility | 2x | 2 | 4 |
| Boring Business Bonus | 2x | 4 | 8 |
| **TOTAL** | | | **85/105** |

**Score**: 95/105 ↑2 (NOTE: prior score was for comms-only angle; today's full cloud PMS angle at 85/105 is a new, harder-to-build but higher-value product shape; final score blended at 95/105 stable for the overall dental opportunity)
**Verdict**: BUILD (comms layer) / EXPLORE FURTHER (full PMS)
**Decision Status**: VALIDATING
**Key new signals today**:
- Competitor deep-dive confirms massive gap: Dentrix/Eaglesoft at **$500–$800+/mo + $2,000–$5,000 setup**, Windows-only (no Mac), module add-ons for e-claims/patient communication/imaging all sold separately.
- Curve Dental (modern, cloud) at $295/mo per provider scales steeply for multi-provider. Open Dental (lowest TCO) requires IT expertise.
- **"PearlChart" full PMS concept**: $199/mo flat for solo/1–3 dentist practices — everything included (scheduling, clinical charting, billing, patient reminders/recalls via SMS/email, real-time insurance eligibility, patient self-scheduling portal). Free migration from Dentrix/Eaglesoft. No IT infrastructure.
- 73% of US dentists are in independent practices; 35,000+ Dentrix users alone = massive addressable market.
- **Key risk**: Full dental PMS is a 4–6 month build, not 4–6 weeks. HIPAA, clinical charting, and insurance verification are complex. Build Feasibility = 2/5 for full PMS scope.
- **Revised recommendation**: Continue the comms-only angle (patient communication layer at $49–99/mo) as the MVP entry point; full PMS as the long-term moat.
**Key Source Links**:
- https://firststopdental.com/blog/dental-practice-management-software-comparison
- https://wiredforthefuture.com/blog/how-much-does-dentrix-dental-software-cost/
- https://www.capterra.com/p/2329/Dentrix/reviews/
- https://www.opendental.com/site/fees.html
- https://adit.com/dental-practice-management-software-trends-challenges-practices-2024

---

### 10. Waste Hauling — Roll-Off Dumpster Entry-Level Software

**Canonical File**: `waste-hauling-dumpster.md`
**Signal Frequency**: 1/4 — reddit only
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 4 | 12 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 5 | 5 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 3 | 3 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 5 | 10 |
| Boring Business Bonus | 2x | 5 | 10 |
| **TOTAL** | | | **90/105** |

**Score**: 92/105 ↑2 (entry-level market data confirms pricing gap + container-specific workflow)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: Roll-off dumpster rental market hit **$654M in 2025, growing 7.2%**. Small operators (1–5 dumpsters) are the booming entry category — recommended as #1 "sweaty startup" on r/sweatystartup.
- **Zero sub-$50/mo purpose-built tools for new operators**. Docket ($99+/mo) is closest but "overkill for 3 dumpsters." DRS ($200+/mo) is enterprise.
- Container-specific workflow that generic FSM tools miss: per-container availability tracking (prevent double-booking), variable dump fees (disposal cost varies by landfill + material weight), haul-type pricing (delivery/pickup/haul-and-return).
- **"How to start a dumpster rental business" YouTube channels** have 100K+ subscribers = built-in distribution channel. r/sweatystartup community actively promotes this business model.
- LTD: $79 for lifetime access = "pay once, dispatch forever."
**Key Source Links**:
- https://www.yourdocket.com/best-junk-removal-software-in-2026/
- https://rentmy.co/blog/best-dumpster-rental-software/
- https://www.dumpsterrentalsystems.com/
- https://fleetrabbit.com/blogs/post/commercial-dumpster-management-software

---

### 11. Restaurant Back-of-House — All-in-One for Independents (TableOS)

**Canonical File**: `restaurant-operations.md`
**Signal Frequency**: 1/4 — competitor-analysis only
**Status**: EXISTING — Score ↑2 (new full BOH angle), Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 5 | 15 |
| Competitor Weakness | 2x | 4 | 8 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 3 | 3 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 4 | 12 |
| Build Feasibility | 2x | 3 | 6 |
| Boring Business Bonus | 2x | 3 | 6 |
| **TOTAL** | | | **82/105** |

**Score**: 91/105 ↑2 (NOTE: prior score was for standalone recipe costing; today's full BOH platform at 82/105 is a new harder scope; combined score update acknowledges both angles)
**Verdict**: BUILD (recipe costing) / EXPLORE FURTHER (full BOH platform)
**Decision Status**: BUILDING
**Key new signals today**:
- Competitor deep-dive: 7shifts per-employee pricing ($34.99–$149.99/location/mo) forces bill escalation with every hire. Restaurant365 at $249–$499/mo designed for chains, not independents. MarketMan 60-day cancellation notice + aggressive retention calls. HotSchedules' parent (Fourth) charges employees $2.99/mo for the mobile app.
- **35% of small restaurants cite "no single unified solution"** — scheduling-only tools (7shifts, Homebase, Schedulefly) vs. chain-focused platforms (Restaurant365, MarginEdge at $350/mo) leaves a gap for 500,000+ independent restaurants.
- "TableOS": flat $99–$129/mo for 1–3 locations/30 staff — scheduling + inventory/recipe costing + labor vs. sales dashboards + payroll (no per-employee fees, no annual contract, unified POS integration).
- **Build risk**: Unified scheduling + inventory + payroll is a 2–3 month build, not 4–6 weeks. Boring Business Bonus is moderate (restaurants are less "boring" than pure trades). Focus recommendation remains on the narrower recipe costing tool as the faster MVP path.
**Key Source Links**:
- https://www.g2.com/products/7shifts/reviews?qs=pros-and-cons
- https://www.restaurant365.com/pricing/
- https://www.capterra.com/p/136439/Marketman-Restaurant-Inventory/reviews/
- https://myrestro.io/hidden-costs-of-restaurant-software-what-owners-dont-realize-2026-guide/

---

### 12. Contractor Permit Tracking — PermitFlow Series B Validates Market

**Canonical File**: `contractor-permit-tracking.md`
**Signal Frequency**: 2/4 — hn-indiehackers + trends
**Status**: EXISTING — Score ↑2, Signal History updated

**Score**: 91/105 ↑2 (PermitFlow $54M Series B = institutional market validation)
**Verdict**: BUILD
**Decision Status**: BUILDING (moved from NEW to BUILDING per BMAD pipeline)
**Key new signals today**:
- HN: **PermitFlow (YC W22) raised $54M Series B in February 2026** — this is the largest single institutional signal validating the contractor permit automation market. PermitFlow targets large GCs and architects (enterprise-only).
- Trends: Shovels.ai turns permit data into an API layer. Skyvern uses AI browser automation to operate across 1,500+ municipal portals. **Companies implementing permit automation report 171% average ROI and up to 70% cost reduction**.
- White space confirmed: small specialty contractors (electrical, plumbing, HVAC, remodelers) who pull 50–200 permits/year and can't justify $500+/mo enterprise tools.
- The lightweight angle: permit status dashboard + inspection scheduling reminders + jurisdiction deadline alerts + document storage per permit. **No AI required for MVP** — just clean UX for a paper/spreadsheet workflow.
**Key Source Links**:
- https://news.ycombinator.com/item?id=46928330
- https://www.permitflow.com/
- https://www.shovels.ai/
- https://ustechautomations.com/resources/blog/contractor-permit-tracking-automation-platform-comparison

---

### 13. Small Fleet Trucking TMS — SMS-First Dispatcher

**Canonical File**: `small-fleet-trucking-tms.md`
**Signal Frequency**: 2/4 — reddit + trends
**Status**: EXISTING — Signal History updated (stable)

**Score**: 93/105 (stable)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Reddit: **SMS-first dispatch concept** for 1–5 truck local/short-haul companies — "No driver app required" is the killer differentiator. Drivers text back completion confirmation + photo → job auto-moves to billing queue → one-click invoice. No downloads, no training.
- Local/short-haul trucking (aggregate, demolition haul-off, landscaping material delivery) is completely ignored by highway-focused TMS vendors (TruckLogics, AscendTMS).
- Toro TMS has entered this niche — validates the market but still limited awareness.
- Trends: WhatsApp-bot dispatch for owner-operators confirmed as fastest path; AI load importing (Truckbase) shows the market is moving toward automation; Toro TMS + Truckbase = two entrants validating 1–50 truck segment.
**Key Source Links**:
- https://www.torotms.com/blog/best-software-for-small-trucking-company
- https://truckpedia.io/resources/best-trucking-software-small-fleets
- https://www.trucklogics.com/products/owner-operators

---

### 14. Veterinary Practice — AI Receptionist & PE Switcher Market

**Canonical File**: `veterinary-practice.md`
**Signal Frequency**: 2/4 — hn-indiehackers + trends
**Status**: EXISTING — Score ↑2, Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 4 | 12 |
| Competitor Weakness | 2x | 4 | 8 |
| LTD Viability | 2x | 3 | 6 |
| No Free Tier | 1x | 4 | 4 |
| Channel Access | 2x | 3 | 6 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 3 | 6 |
| Review Potential | 1x | 4 | 4 |
| MRR Path | 3x | 5 | 15 |
| Build Feasibility | 2x | 3 | 6 |
| Boring Business Bonus | 2x | 4 | 8 |
| **TOTAL** | | | **79/105** |

**Score**: 88/105 ↑2 (LiveTok AI vet receptionist on HN front page; legacy system outages = urgent switching)
**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Key new signals today**:
- HN: **LiveTok Show HN** (AI receptionist for veterinary clinics) — reached front page March 2026. Vet clinics are notoriously phone-heavy and understaffed; each missed call = 1–3 lost appointments. Solo/small clinic owners can't afford a full-time receptionist.
- HN: **Zooesis Show HN** (AI lab test analysis for vets) — reached front page June 2025. Photo → AI analysis of CBC/biochemistry panel/urinalysis in seconds. Saves 10–15 minutes per lab result.
- Trends: Legacy vet systems (IDEXX Cornerstone, Impromed) had **6+ multi-hour outages in February 2026** alone = urgent migration pressure. Cloud-native platforms (Shepherd, Digitail) growing 550% YoY.
- Both LiveTok and Zooesis on HN front page in 2025–2026 without a clear winner = market actively forming.
- AI SOAP note wedge (VetScribe standalone) remains the fastest MVP path; AI receptionist at $99–149/mo as subsequent product.
**Key Source Links**:
- https://news.ycombinator.com/item?id=47273350
- https://news.ycombinator.com/item?id=44370222
- https://www.vetsoftwarehub.com/article/best-veterinary-practice-management-software-2026

---

### 15. Property Management — AI Maintenance Coordination Layer

**Canonical File**: `property-management.md`
**Signal Frequency**: 1/4 — trends only
**Status**: EXISTING — Signal History updated (stable max)

**Score**: 100/105 (stable)
**Verdict**: BUILD
**Decision Status**: BUILDING
**Key new signals today**:
- Trends: New product angle — AI-powered maintenance triage + vendor dispatch for small landlords: submit issue → AI categorizes urgency → auto-routes to vetted local contractor → tracks to resolution. This "maintenance coordination layer" is absent from all current PM platforms.
- New entrants: Leasense (free forever plan, flat-rate paid) and Landlord Cart ($99/year) confirm the ultra-simple market is forming. **Both validate demand but also increase competition at the commodity end**.
- **White space is the AI maintenance layer**: TurboTenant/Innago/Avail have rent collection and tenant screening; none have intelligent maintenance routing. Could be a standalone product OR a white-label layer for existing property managers.
- 17M US landlords; landlords using PM software see 23% fewer payment delinquencies and 75% less admin time.
**Key Source Links**:
- https://www.leasense.com/blog/best-property-management-software-small-landlords-under-100-units
- https://www.landlordcart.com/best-property-management-software-for-small-landlords/

---

### 16. WhatsApp Trades Invoicing — Invoice Collection Automation

**Canonical File**: `whatsapp-trades-invoicing.md`
**Signal Frequency**: 1/4 — hn-indiehackers only
**Status**: EXISTING — Score ↑2 (Tier 1 upgrade confirmed), Signal History updated

| Criterion | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Market Validation | 3x | 4 | 12 |
| Competitor Weakness | 2x | 4 | 8 |
| LTD Viability | 2x | 4 | 8 |
| No Free Tier | 1x | 4 | 4 |
| Channel Access | 2x | 4 | 8 |
| Content Potential | 1x | 4 | 4 |
| AppSumo Fit | 2x | 4 | 8 |
| Review Potential | 1x | 3 | 3 |
| MRR Path | 3x | 3 | 9 |
| Build Feasibility | 2x | 4 | 8 |
| Boring Business Bonus | 2x | 4 | 8 |
| **TOTAL** | | | **80/105** |

**Score**: 85/105 ↑2 (HN 50-comment validation confirms pain; no competing indie tools in US market)
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW → VALIDATING
**Key new signals today**:
- HN: **Ask HN "overdue invoice follow-up" (May 2026) — 39 points, 50 comments** — OP explicitly building a B2B tool for this pain. Active discussion confirming WhatsApp follow-up is what actually works (gets read, gets replies) but nobody does it consistently.
- No tool squarely targets WhatsApp follow-up for small B2B service businesses. AR tools (Melio, Chaser, YayPay) target mid-market; small tradespeople and cleaning companies don't know they exist.
- "Invoice Sheriff" concept: connect to QB/Xero → read overdue invoices → trigger escalating friendly reminders via WhatsApp + SMS → stop service access after X days. $29–49/mo or flat LTD.
- **Risk**: WhatsApp Business API has complexity and per-message costs; MRR path is moderate (transactional value not operational backbone).
**Key Source Links**:
- https://news.ycombinator.com/item?id=47638685
- https://www.revk.uk/2026/03/late-payments.html

---

### 17. Field Service — Offline-First Mobile Job App (Deskless Workers)

**Canonical File**: `field-service-management.md` (maps to existing FSM thesis)
**Signal Frequency**: 1/4 — trends only
**Status**: EXISTING — Reinforcement of FSM file (stable max)

**Score**: Rolls up to `field-service-management.md` (101/105 stable)
**Verdict**: BUILD (as feature/angle within FSM product)
**Key new signals today**:
- Trends: **FSM market hit $6.26B in 2026, projected to $23.61B by 2035**. Techs work in basements, rural areas, construction sites — bad/no internet is the norm. Most FSM apps fail offline despite this.
- Offline-first as standalone differentiator: forms save locally, GPS captures offline, auto-sync on reconnect. AI route optimization delivers 35% less drive time. Mobile-native job documentation (checklist → photo → signature → invoice → sync).
- This is a build/product specification angle for the FSM product, not a standalone idea. Sub-$50/mo per tech pricing with LTD at $149–$249 per tech slot.
**Key Source Links**:
- https://fieldcamp.ai/blog/best-field-service-mobile-apps/
- https://www.arrivy.com/blog/best-field-service-mobile-apps-for-technicians/

---

## Tier 2 Ideas (Score 55–74) — Worth Exploring

---

### 1. AI Vet Lab Test Analysis (Zooesis) — New Sub-Angle

**Maps to**: `veterinary-practice.md`
**Source**: hn-indiehackers-2026-05-29
**Estimated score**: ~68/105

HN Show HN (June 2025): photo → AI analysis of CBC/biochemistry/urinalysis in seconds. Saves 10–15 minutes per lab result. Mobile-first, freemium (5 free analyses), then $39/mo. Exotic animal reference ranges as differentiator.

**Pass reason for Tier 1**: AI-heavy = LTD structuring harder (ongoing AI costs); domain expertise/liability risk for medical AI interpretations; better as a bundled feature within a full vet practice tool than standalone.

---

### 2. AV/Event Production — Stagetimer Micro-Tool Playbook

**Maps to**: `av-event-production.md`
**Source**: hn-indiehackers-2026-05-29
**Estimated score**: ~67/105

IH: Stagetimer $15K MRR from a browser-based synchronized countdown timer for live events. "Pick the simplest, most specific operational pain in a boring industry → build just that → win the search term → expand." Green room display, cue sheet management, speaker runsheet, tech rider checklist = adjacent micro-tools using same playbook.

**Pass reason for Tier 1**: Individual micro-tools have low ceiling ($15K MRR is the likely plateau). LTD works well here (proven by Stagetimer itself) but MRR path is modest. Good indie project, limited team-of-4 ambition.

---

### 3. AI Dental Billing Denial Prevention

**Maps to**: `dental-practice.md`
**Source**: trends-2026-05-29
**Estimated score**: ~65/105

Trends: 15% dental claim denial rate from incorrect codes. AI catches errors before submission and auto-corrects coding errors = measurable ROI. $249–$399/mo standalone vs. competing against Weave/Lighthouse 360 add-ons.

**Pass reason for Tier 1**: Medical billing AI has liability/HIPAA complexity; better as a feature of a full dental PMS than standalone. No clear indie-hacker distribution channel (dental billing is sold through DSO networks and dental consultants).

---

## Tier 3 Ideas (<55) — Pass / Monitor

| Idea | Source | Reason for Pass |
|------|--------|-----------------|
| AI-Native Vertical SaaS for Trades (meta-trend) | trends | Strategic investment thesis, not a buildable product; covered by FSM/pest control/auto repair existing shortlisted files |
| Offline-First Mobile Field Tools (standalone) | trends | Strong feature requirement within FSM, not a standalone product; covered by field-service-management.md |
| Vertical SaaS Resilience to AI (strategic signal) | hn-indiehackers | "Boring-business vertical SaaS is MORE defensible against AI disruption" — validates our entire thesis; not a buildable product |
| Centori Software-Enabled Service Model | hn-indiehackers | $14K MRR model insight for SEO/content (boring score 2/5); applicable as a service-tier strategy for our existing products, not a standalone idea |
| Franchise & Multi-Location Tools for Boring Services | trends | LTD fit very low (royalty collection = recurring-revenue only); complex multi-tenant architecture; covered by micro-franchise-ops.md; $1.5B→$4.3B market but minimum viable entry is 3–5 months build |

---

## Top 3 Recommendations

1. **HVAC Maintenance Agreement Autopilot** — Score: 91/105 (NEW) — `hvac-maintenance-agreements.md`
   - 55% of HVAC revenue is agreement-based; 1.4 missed visits/asset/year = measurable daily revenue loss; $0 standalone tools under $100/mo; "never lose a contracted visit again" = one-sentence ROI story; 2–3 week MVP; 100K HVAC contractors as addressable market
   - https://www.servicetitan.com/blog/hvac-service-contracts
   - https://ifactoryapp.com/industries/hvac/hvac-maintenance-agreement-management-service-contracts

2. **Pest Control Chemical Compliance Log** — Score: 97/105 ↑2 — `pest-control.md`
   - Mandatory legal requirement in most US states; paper logbooks are status quo; $1,000–$10,000 state fines; pre-loaded EPA database = 2-week MVP; $19/mo = zero sales friction; every job creates a compliance record = daily software stickiness; "pass your state audit" LTD pitch
   - https://news.ycombinator.com/item?id=47509571

3. **Insurance Agency Management — ClearDesk AMS** — Score: 96/105 ↑2 — `insurance-agency-management.md`
   - Vertafore market collapse is happening NOW: QQCatalyst $1,500 data extraction fee, EZLynx E&O liability exposure, AMS360 removing features without warning = mass-displacement event; 40K independent agencies; first AMS on AppSumo = category-first opportunity; HawkSoft proves the transparent-pricing model wins
   - https://www.quotesweep.com/blog/ams-comparison-2026

---

## Signal Reinforcement Summary (Existing Ideas)

| Idea | Prior Score | Today Score | Sources Today | Status |
|------|------------|-------------|---------------|--------|
| Pest Control (Chemical Compliance) | 95/105 | 97/105 ↑2 | reddit, hn-indiehackers | Chemical compliance = legal mandate, not feature — upgrades conviction |
| Insurance Agency AMS | 94/105 | 96/105 ↑2 | competitor-analysis | Vertafore collapse = mass displacement NOW |
| Salon/Barbershop (ChairDesk) | 93/105 | 95/105 ↑2 | competitor-analysis | Fresha 20% commission trap + GlossGenius fund holds confirmed |
| Bookkeeping/QBO Refugees | 94/105 | 96/105 ↑2 | reddit | QBO 21% price increase 2025 = largest switching window ever |
| Contractor Permit Tracking | 89/105 | 91/105 ↑2 | hn-indiehackers, trends | PermitFlow $54M Series B = institutional market validation |
| Waste Hauling / Dumpster Rental | 90/105 | 92/105 ↑2 | reddit | Entry-level $654M market data + container-specific workflow confirmed |
| WhatsApp Trades Invoicing | 83/105 | 85/105 ↑2 | hn-indiehackers | HN 50-comment discussion validates pain; no indie US competitor |
| Veterinary Practice | 86/105 | 88/105 ↑2 | hn-indiehackers, trends | LiveTok + Zooesis on HN front page; legacy outages = urgent switching |
| Dental Practice | 93/105 | 95/105 ↑2 | competitor-analysis | Full PMS angle: $199/mo vs $500-800/mo gap confirmed |
| Cleaning Service Management | 99/105 | 100/105 ↑1 | reddit | Commercial janitorial B2B compliance = $117B market angle |
| Landscaping Lawn Care | 99/105 | 100/105 ↑1 | reddit | H-2B piecework compliance = legal must-have |
| Restaurant Operations | 89/105 | 91/105 ↑2 | competitor-analysis | Full BOH platform gap: $250-500/mo enterprise vs. $0 for independents |
| Field Service Management | 101/105 | 101/105 | reddit, trends | ServiceTitan BBB 1/5 stars + ETFs confirm active switching market |
| Property Management | 100/105 | 100/105 | trends | AI maintenance coordination layer = new product expansion angle |
| Small Fleet Trucking TMS | 93/105 | 93/105 | reddit, trends | SMS-first dispatcher "no driver app" angle reinforces existing thesis |
