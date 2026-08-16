# Idea Evaluation — 2026-08-15

**Sources**: reddit-2026-08-15, hn-indiehackers-2026-08-15, competitor-analysis-2026-08-15, trends-2026-08-15
**Evaluator**: Idea Evaluator Agent
**Total ideas reviewed**: 35 signals across 4 source files

---

## Deduplication Notes

Most signals today map to existing shortlisted ideas. Two genuinely new ideas identified:
- **Flooring Contractor Software** — no dedicated shortlisted file exists
- **Auto Repair Declined-Service Follow-Up Automation** — specific post-RO bolt-on angle not covered in auto-repair-shop-management.md

Signal history updates applied to: hvac-small-shop-dispatch, property-management, auto-repair-shop-management, landscaping-lawn-care, cleaning-service-management, ai-voice-answering-trades, construction-pay-app-generator, owner-operator-trucking-tms, small-batch-food-production.

---

## Tier 1: Strong Opportunities (Score 75+)

---

### Flooring Contractor Software — Score: 87/105 ⭐ NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | $48B flooring installation industry; no purpose-built all-in-one tool exists; 4+ disconnected tools is the documented norm |
| Competitor Weakness | 5/5 | 2x | 10 | Generic FSM tools (Jobber, HCP) used but not flooring-specific; MasterPiece is estimating-only; FloorZap narrow; no dominant all-in-one |
| LTD Viability | 4/5 | 2x | 8 | $49/mo flat → $99-149 LTD viable; flooring contractors price-sensitive and LTD-friendly |
| No Free Tier | 4/5 | 1x | 4 | No meaningful free option for flooring-specific ops |
| Channel Access | 4/5 | 2x | 8 | r/flooring, r/ContractorTalk, FloorBiz.com, World Floor Covering Association, Houzz contractor community |
| Content Potential | 3/5 | 1x | 3 | "flooring contractor software", "flooring estimating tool" — moderate search volume |
| AppSumo Fit | 4/5 | 2x | 8 | "All-in-one for flooring" is concrete, tangible AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | Active contractor communities; word spreads in tight niche |
| MRR Path | 4/5 | 3x | 12 | $49/mo recurring; steady project pipeline = good retention |
| Build Feasibility | 4/5 | 2x | 8 | Measurement/estimating + material calculator + scheduling + invoicing + photo docs = 4-6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Flooring installation = deeply boring blue-collar industry |

**Total: 87/105**

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**Signal Frequency**: 1 mention today (reddit — first identification)

**Core Problem**: Flooring contractors use 4+ disconnected tools — one for scheduling, another for invoicing, a spreadsheet for client records, texts for crew coordination, and paper for measurements. This costs $200-500/mo and wastes 10-15 hours/week in admin. No dominant purpose-built solution exists.

**Key Differentiators**:
- Flooring-specific measurement and estimating (room-by-room, material type calculators — ceramic tile vs. hardwood vs. LVP have different waste factors)
- Material quantity calculator with automatic waste percentage
- Per-room photo documentation for before/after
- Crew coordination without full FSM complexity
- $49/mo flat vs. the 4-app cobble

**Risks**:
1. Market may be smaller than raw numbers suggest (flooring contractors vary widely in tech adoption)
2. FloorZap and MasterPiece have existing market presence despite limitations
3. Generic FSM tools (Jobber) already capture some flooring contractors at lower price points

**Key Source Links**:
- https://www.floorzap.com/blog/what-trends-are-shaping-management-software-for-flooring-businesses
- https://www.fieldservicely.com/flooring-business-software
- https://www.reddit.com/r/flooring/ (pain point community)
- https://www.reddit.com/r/ContractorTalk/

---

### Auto Repair Declined-Service Follow-Up & Reactivation — Score: 88/105 ⭐ NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 180K+ independent auto shops; declined services = 15-30% of revenue walking out; all major platforms confirmed to have zero post-RO automation |
| Competitor Weakness | 5/5 | 2x | 10 | "Neither platform automates the post-RO communication chain" — direct quote from 2026 comparison; conditional logic for decline reason completely absent from Shopmonkey, Tekmetric, AutoLeap, Mitchell1 |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD; "recovered $3,400 in month 1" = the entire AppSumo pitch |
| No Free Tier | 4/5 | 1x | 4 | No free CRM with conditional post-RO follow-up logic for auto repair |
| Channel Access | 4/5 | 2x | 8 | r/MechanicAdvice, ASA (Automotive Service Association), NAPA AutoCare forums, Mitchell1 community, diag.net |
| Content Potential | 4/5 | 1x | 4 | "declined service follow-up auto repair", "auto repair customer reactivation software" |
| AppSumo Fit | 4/5 | 2x | 8 | Bolt-on tool with quantifiable ROI = extremely AppSumo-friendly |
| Review Potential | 4/5 | 1x | 4 | Tight shop owner community; clear ROI = enthusiastic reviews |
| MRR Path | 4/5 | 3x | 12 | Per-shop recurring at $49-99/mo; integrates with existing tools → sticky |
| Build Feasibility | 4/5 | 2x | 8 | API integrations (Shopmonkey/Tekmetric/AutoLeap/Mitchell1) + conditional SMS sequences = 4-6 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair = deeply boring |

**Total: 88/105**

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**Signal Frequency**: 1 mention today (competitor-analysis — first identification)

**Core Problem**: When a customer declines a brake job, service advisors write a note that disappears. No shop management software captures decline reason (budget/time/skepticism), urgency tier (safety-critical vs. maintenance), and auto-schedules personalized follow-up. Shops lose 15-30% of revenue to unworked declined services and uncontacted lost customers.

**Product Concept ("RecoverPro")**: Standalone bolt-on that connects via API to Shopmonkey, Tekmetric, AutoLeap, Mitchell1. Captures declined work at write-up → auto-queues SMS/email sequences based on service type and decline reason → tracks recovered revenue. Also handles 6-month reactivation for lost customers.

**Key Differentiator**: Works with existing shop software (not a replacement); conditional logic (brake job declined for budget → different follow-up message than oil change rescheduled for time); recovered revenue dashboard.

**Risks**:
1. API access to Shopmonkey/Tekmetric requires partnership or reverse-engineering — most closed their APIs
2. Shop owners may not want another subscription on top of existing shop software
3. Might get built as feature by Tekmetric/Shopmonkey before standalone can gain traction

**Key Source Links**:
- https://ustechautomations.com/resources/blog/automate-tekmetric-vs-shopmonkey-for-auto-repair-shops-2026
- https://www.capterra.com/p/169022/Shopmonkey/reviews/
- https://cloudautomanager.com/auto-repair-customer-retention/
- https://chriscollinsinc.com/sdr/declined-service-follow-up-scripts-for-advisors-2026/

---

### HVAC / Home Service Small Shop FSM — Score: 95/105 (EXISTING — updated)

**File**: `ideas/shortlisted/hvac-small-shop-dispatch.md`
**Status**: STABLE — QUAD-source signal today reinforces existing position

**Today's new signals**:
- ServiceTitan $245-500/tech/mo + $5K-50K implementation + BBB pages of billing complaints and data hostage situations documented
- Jobber per-user "scaling tax" reaching ~$10,000/year for 10 users confirmed on 2025 Trustpilot
- HCP real cost for 5-tech op = $1,600-1,700/month vs $59 advertised (8.5-9× overrun)
- Competitor analysis: HVAC solo technician dead zone at $29-$79/mo confirmed; 250,000+ solo HVAC technicians on Google Calendar + paper invoices
- Trends: Avoca $1B valuation confirms voice AI bolt-on layer above core FSM

**Score direction**: STABLE 95/105

---

### Property Management for Small Landlords — Score: 100/105 (EXISTING — updated)

**File**: `ideas/shortlisted/property-management.md`
**Status**: STABLE — DUAL-source signal confirms all positioning

**Today's new signals**:
- Competitor analysis: 17M US landlords, AppFolio $280-298/mo + 50-unit minimum; Buildium 2.9%+$0.30 per transaction; all tools priced for PM firms not DIY landlords
- Dead-simple landlord tool gap at $15-20/mo flat for 1-20 units confirmed
- Free tools (TurboTenant, Innago) lack maintenance scheduling, slow ACH, no scheduling E prep
- Reddit confirms "1-15 unit landlords underserved" with Venmo/paper lease as current norm

**Score direction**: STABLE 100/105

---

### Cleaning Service Operations Platform — Score: 96/105 (EXISTING — updated)

**File**: `ideas/shortlisted/cleaning-service-management.md`
**Status**: STABLE — TRIPLE-source signal today

**Today's new signals**:
- Route optimization in cleaning software widely broken — maps lack accuracy, routes send cleaners to same neighborhood multiple times
- Jobber and HCP both lack cleaning checklists, quality inspections, before/after photos (confirmed in 2026 comparison)
- HCP Android app 3.3/5 — critical for cleaning crews using Android
- ZenMaid $3M/yr (IH case study) validates the market at scale; gap: no payroll integration, no geofence time clock
- Cleaning-specific ops layer (room-by-room checklists + before/after photos + quality inspection scoring) completely absent from generic tools

**Score direction**: STABLE 96/105

---

### Auto Repair Shop Management — Score: 100/105 (EXISTING — updated)

**File**: `ideas/shortlisted/auto-repair-shop-management.md`
**Status**: STABLE — TRIPLE-source signal today

**Today's new signals**:
- IH discussion post explicitly calls out auto repair POS pain for 1-3 bay shops; Shopmonkey/Tekmetric $100-300/mo; the sub-$100 tier completely absent
- Competitor analysis documents declined-service follow-up as new angle (→ separate RecoverPro product)
- Auto repair $280B US market, 230,000+ independent shops; only 2.6% modern software penetration (Shopmonkey data)
- LTD potential confirmed: auto shop owners "notoriously price-sensitive, hate subscriptions"

**Score direction**: STABLE 100/105

---

### Landscaping & Lawn Care OS — Score: 99/105 (EXISTING — updated)

**File**: `ideas/shortlisted/landscaping-lawn-care.md`
**Status**: STABLE — new reddit signal with high specificity

**Today's new signals**:
- 68% of unactioned landscaping estimates never receive a follow-up — close rates drop dramatically after 4 hours
- A business doing 180 recurring accounts wastes $23K-$31K/year in owner-time on estimate prep
- AI-assisted lawn care quoting tool (address + photos → priced estimate + auto-follow-up) confirmed as white space
- Aspire 2025 survey: 93% of commercial landscapers use software — residential/small operators far less penetrated
- Jobber, Aspire (enterprise), LawnManage, GroundsKeeper Pro all leave the AI quoting + follow-up gap open

**Score direction**: STABLE 99/105

---

### Dental Practice Communication Platform — Score: 93/105 (EXISTING — stable)

**File**: `ideas/shortlisted/dental-practice.md`
**Status**: STABLE — dental PMS signal today (Dentrix/Eaglesoft replacement) reinforces adjacent angle

**Today's new signals**:
- Dentrix $500+/mo; Eaglesoft $200-900/mo with add-ons; 40-60% savings documented when switching to Open Dental
- 200,000 dentists in US; majority independent practices
- The affordable dental patient COMMUNICATION platform (our existing idea) is distinct from and easier to build than full dental PMS
- Full dental PMS noted as: marginal LTD viability, harder build, ongoing compliance updates required

**Score direction**: STABLE 93/105

---

### Bookkeeping / Accounting for Micro-Businesses — Score: 91/105 (EXISTING — stable)

**File**: `ideas/shortlisted/bookkeeping-accounting.md`
**Status**: STABLE — QuickBooks exodus signal reconfirmed strongly

**Today's new signals**:
- QB Online 21% price increase in 2025 alone (64% cumulative over 5 years); Simple Start $25→$38/mo; Plus $70→$115/mo
- QuickBooks Desktop final support ends 2027 — forcing cloud migration for millions of businesses
- Trades-vertical accounting (HVAC job costing, landscaping route-based P&L) with FSM integration = leapfrog angle vs. generic QB
- QuickBooks job costing rated 4/10 by largest construction-only accounting firm (RedHammer); contractors keep 3+ spreadsheets to fill gaps

**Score direction**: STABLE 91/105

---

### AI Voice Answering for Trades — Score: 89/105 (EXISTING — updated)

**File**: `ideas/shortlisted/ai-voice-answering-trades.md`
**Status**: ↑2 signal strength — TRIPLE-source today

**Today's new signals**:
- IH post confirms $300-800 MRR per client at 80% margin with Callin.io + n8n + Cal.com stack
- Contractors lose avg $260K+/year to missed calls ($1,200 avg per missed call)
- Only 12% of contractors have embedded AI in operations (ServiceTitan 2026 State of AI) while 40% experimenting
- Avoca $1B valuation (Kleiner Perkins) April 2026 reconfirmed; sub-$300/mo tier still unaddressed
- Trends: bilingual (English/Spanish) voice agents for owner-operator trades = untapped sub-niche
- Sameday AI, Goodcall, IVA, CloudTalk, Synthflow all entering space — window is open now for vertical-specific

**Score direction**: ↑1 → 90/105 (bilingual angle + IH revenue validation tighten the model)

---

### Pest Control Software — Score: 87/105 (EXISTING — stable)

**File**: `ideas/shortlisted/pest-control-software.md`
**Status**: STABLE — reddit signal reconfirms pricing gap

**Today's new signals**:
- GorillaDesk $49-149/mo creates ceiling; FieldRoutes (owned by ServiceTitan) has opaque enterprise pricing, no free trial, requires sales demo
- Clear mid-market gap at $99-199/mo for 2-5 route pest control companies
- 4 SaaS companies in pest control software with combined $2.5M revenue = massively undermonetized
- $22.6B US pest control market growing due to climate change

**Score direction**: STABLE 87/105

---

### Small Fleet Trucking TMS — Score: 87/105 (EXISTING — updated)

**File**: `ideas/shortlisted/owner-operator-trucking-tms.md`
**Status**: STABLE — DUAL-source today with detailed competitor matrix

**Today's new signals**:
- Motive Trustpilot 1.5/5 across ~2,000 reviews (billing, contract lock-in, 36-month contracts)
- Samsara: "technical issues, missing features, poor customer support" — multiple aggregators 2026
- Dead zone at $50-100/mo (vs. TruckingOffice too basic / Rose Rocket/Tailwind too expensive)
- $39-79/mo flat for 1-5 trucks: dispatch + IFTA + load tracking + driver docs + ELD integration = confirmed gap
- 300,000+ US owner-operators on spreadsheets/whiteboards confirmed

**Score direction**: STABLE 87/105

---

### Construction Subcontractor Pay App Generator — Score: 84/105 (EXISTING — updated)

**File**: `ideas/shortlisted/construction-pay-app-generator.md`
**Status**: ↑1 — Clad hiring signal adds strong validation

**Today's new signals**:
- Clad (NYC startup, $2.7M raised, 7-person team, NYC) hiring August 2026 = VC validates construction back-office automation
- $280 billion in slow payments cost the construction industry in 2024; average 96-day payment wait for subs
- 75% of payments at one masonry firm on hold due to missing lien waivers (Siteline case study)
- AIA G702/G703 pay apps still manually filled in Word/Excel — single math error delays payment 30+ days
- Our angle (simpler, sub-10-crew ops) remains distinct from Clad's GC focus

**Score direction**: ↑1 → 85/105

---

### Small-Batch Food Production Management — Score: 76/105 (EXISTING — updated)

**File**: `ideas/shortlisted/small-batch-food-production.md`
**Status**: ↑2 — Craftplan HN signal is the strongest validation yet

**Today's new signals**:
- Craftplan Show HN: 577 points, 167 comments — #3 Show HN for February 2026 — built for personal use (developer's wife's bakery) because nothing affordable existed
- Same recipe/batch/COGS tracking logic applies to: bakeries, coffee roasters, jam makers, candle shops, soap makers, kombucha breweries, hot sauce makers
- Katana / DEAR / MRPeasy = overkill and expensive ($200+/mo); no focused indie SaaS alternative
- Craftplan is open-source → commercial SaaS version opportunity wide open

**Score direction**: ↑2 → 78/105

---

### AI Job Costing for Trades — Score: 86/105 (EXISTING — stable)

**File**: `ideas/shortlisted/ai-job-costing-trades.md`
**Status**: STABLE

**Today's new signals**:
- RedHammer (largest construction accounting firm) rates QuickBooks Online 4/10 for job costing
- Contractors maintain 3+ spreadsheets to fill QB's job costing gaps
- Integration between FSM software and QB "often means a basic CSV export" — not real-time
- Manual re-entry from estimate to work order has 5-8% error rate per line item
- $29-49/mo add-on play or standalone confirmed

---

### Painting Contractor Software — Score: 79/105 (EXISTING — stable)

**File**: `ideas/shortlisted/painting-contractor-software.md`
**Status**: STABLE — reddit and competitor sources both confirm same gap

**Today's new signals**:
- PaintScout $79-168/user/mo for estimating-only = clear pricing gap for all-in-one
- DripJobs, Jobber, HCP all confirmed to lack good estimating
- Photo-based estimating (room measurements + paint calculator) + automated follow-up + scheduling + invoicing at $49/mo flat = confirmed gap

---

## Tier 2: Worth Exploring (Score 55-74)

---

### Vertical AI Workflow Agents for Healthcare / Trades Compliance
**Score**: 73/105 (partially exists as `prior-authorization-automation.md`)

Today's signal: Solo founder $41K MRR in 14 months by automating physical therapy prior authorizations at $1K MRR/customer. Same playbook untouched in: chiropractic prior auth, veterinary insurance claims, dental insurance eligibility verification, roofing insurance supplement documentation. Human cost $30-50/authorization; AI cost $5. 200 auths/month per clinic = $1K MRR. Build Feasibility: 2-3 weeks per vertical using Claude API + form parsing.

Key new verticals to explore: chiropractic prior auth, roofing supplement documentation, OSHA incident report filing for construction.

**Next Step**: Research chiropractic-specific prior auth workflows as next vertical after PT (already shortlisted).

---

### No-Code Service Business Automation
**Score**: 68/105 (partially overlaps with `local-service-marketing-automation.md`)

Today's signal from Trends: ServiceTitan and Jobber adding no-code automation builders, but require existing subscriptions at $200-600/mo. A standalone pre-built template library for service business workflows (auto-send estimate follow-up → book job → send invoice → request review) at $49-99/mo for 1-5 tech shops that can't afford full FSM. Think Zapier but with service-business-specific templates baked in.

Speed to market: 2-3 weeks. AppSumo LTD fit: high. Template libraries sell extremely well on AppSumo.

**Risk**: Very easily copied; no defensibility once templates are public.

---

### Dental Full PMS Replacement (Dentrix/Eaglesoft)
**Score**: 65/105 (existing communication platform at `dental-practice.md` is stronger)

Today's signal: Dentrix $500+/mo, Eaglesoft $200-900/mo; Open Dental free/open-source but requires technical setup. Gap for cloud-native dental PMS at $99-199/mo.

**Not recommended over existing angle**: Full dental PMS is a harder, longer build with significant compliance risk (HIPAA, patient data). The patient communication layer at $49-99/mo is a stronger indie opportunity. Dental PMS requires clinical workflow expertise.

---

### Servitization / Maintenance Agreement Tools for Contractors
**Score**: 72/105 (existing `hvac-maintenance-agreements.md` and `subscription-maintenance-plans.md`)

Today's signal from Trends: Subscription maintenance models deliver 3x higher customer LTV; service contracts 3x LTV proven at enterprise (ServiceTitan $300-600/mo); SMB tooling is primitive. White space: lightweight "maintenance membership" platform for solo/small contractors with auto-scheduling + renewal reminders + customer-facing portal at $49-99/mo.

**Next Step**: Check hvac-maintenance-agreements.md status before investing further.

---

### SMB Cybersecurity for Field Service
**Score**: 66/105 (existing `smb-ai-compliance.md`)

Today's signal from Trends: 60% of breached SMBs close within 6 months; field devices are vulnerability #1; OSHA compliance and FMCSA violations now carry digital-identity verification requirements. Almost no trades-specific cybersecurity tooling at SMB price points. Could bundle as "cybersecurity starter kit for contractors" — policy templates + employee training + password management + compliance dashboard. LTD at $99 for the kit.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for passing |
|------|-------|-------------------|
| PG/Hostel Management (India) | 52/105 | Indian market requires local support infrastructure; HarGharPG had 1 HN point; complex cross-border operations |
| Cabinet Shop / Furniture Maker SaaS | 54/105 | HN interest for consumer woodworking; B2B cabinet shop market small and very niche; requires CNC integration expertise |
| Sawdust.diy B2B angle | 48/105 | Early stage, not monetized, consumer woodworking interest ≠ commercial cabinet shop SaaS demand |
| Roofing Insurance Restoration (standalone) | 55/105 — borderline | AccuLynx/JobNimbus have this market; insurance supplement workflows require deep domain knowledge; already covered partially in roofing-contractor-crm.md |
| Trades Workforce / Subcontractor Network | 55/105 | Large TAM but marketplace dynamics (chicken-and-egg) make bootstrapped launch very hard |
| Sustainability/Energy Compliance HVAC | 50/105 | Early market, weak enforcement at SMB level; HVAC shops not yet required to act |

---

## Top 3 Recommendations

1. **Auto Repair Declined-Service Follow-Up Automation** (NEW — 88/105) — "RecoverPro" bolt-on for Shopmonkey/Tekmetric/AutoLeap users; zero platforms automate post-RO follow-up with conditional logic; 180K shops; $99 LTD with "recovered $3,400 in month 1" pitch. Source: https://ustechautomations.com/resources/blog/automate-tekmetric-vs-shopmonkey-for-auto-repair-shops-2026

2. **Flooring Contractor Software** (NEW — 87/105) — $48B industry still on 4+ disconnected tools; no dominant purpose-built product; flooring-specific measurement calculator + scheduling + invoicing + crew coordination at $49/mo flat. Source: https://www.floorzap.com/blog/what-trends-are-shaping-management-software-for-flooring-businesses

3. **AI Voice Answering for Trades** (EXISTING — 90/105 ↑1) — IH builder confirming $300-800 MRR per client at 80% margin; bilingual (English/Spanish) angle and Avoca-driven validation push this higher; MVP achievable in 2-4 weeks with Vapi/Retell + Twilio. Source: https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE

---

## Summary Table — All Evaluated Ideas

| Idea | Score | Tier | Status | Verdict |
|------|-------|------|--------|---------|
| Property Management Small Landlords | 100/105 | 1 | Existing | BUILD |
| Auto Repair Shop Management | 100/105 | 1 | Existing | BUILD |
| Landscaping/Lawn Care OS | 99/105 | 1 | Existing | BUILD |
| Cleaning Service Operations | 96/105 | 1 | Existing | BUILD |
| HVAC/Home Service Small Shop FSM | 95/105 | 1 | Existing | BUILD |
| Dental Practice Communication | 93/105 | 1 | Existing | BUILD |
| Bookkeeping for Micro-Businesses | 91/105 | 1 | Existing | BUILD |
| AI Voice Answering for Trades | 90/105↑ | 1 | Existing | EXPLORE FURTHER |
| Auto Repair Declined-Service Follow-Up | 88/105 | 1 | **NEW** | EXPLORE FURTHER |
| Flooring Contractor Software | 87/105 | 1 | **NEW** | EXPLORE FURTHER |
| AI Job Costing for Trades | 86/105 | 1 | Existing | EXPLORE FURTHER |
| Pest Control Software | 87/105 | 1 | Existing | EXPLORE FURTHER |
| Small Fleet TMS | 87/105 | 1 | Existing | EXPLORE FURTHER |
| Construction Pay App Generator | 85/105↑ | 1 | Existing | BUILD |
| Cleaning Business Mgmt (payroll-invoice) | 84/105 | 1 | Existing | BUILD |
| Laundromat / Dry Cleaner | 83/105 | 1 | Existing | BUILD |
| Small-Batch Food Production | 78/105↑ | 1 | Existing | BUILD |
| Painting Contractor Software | 79/105 | 1 | Existing | BUILD |
| Small-Batch Food Production | 78/105 | 1 | Existing | BUILD |
| Vertical AI Workflow Agents | 73/105 | 2 | Existing (partial) | EXPLORE FURTHER |
| Servitization/Maintenance Agreements | 72/105 | 2 | Existing | EXPLORE FURTHER |
| No-Code Service Automation | 68/105 | 2 | Existing (partial) | EXPLORE |
| SMB Cybersecurity for Field Service | 66/105 | 2 | Existing | EXPLORE |
| Dental Full PMS | 65/105 | 2 | Superseded | PASS (use existing angle) |
| PG/Hostel Management India | 52/105 | 3 | NEW | PASS |
| Cabinet Shop SaaS | 54/105 | 3 | NEW | PASS |
| Trades Workforce Platform | 55/105 | 3 | Existing | PASS |
| Sustainability/HVAC Compliance | 50/105 | 3 | NEW | PASS |
