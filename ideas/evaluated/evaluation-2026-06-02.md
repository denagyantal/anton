# Idea Evaluation - 2026-06-02

**Sources**: reddit-2026-06-02, hn-indiehackers-2026-06-02, competitor-analysis-2026-06-02, trends-2026-06-02
**Evaluator**: Idea Evaluator Agent

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 🆕 Construction WIP Accounting for QuickBooks — Score: 94/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 5+ year QBO community thread with hundreds of replies; Intuit's own consulting partner RedHammer publicly called WIP "the single most important report in construction accounting and currently absent" from the Feb 2026 Enterprise Suite launch; construction accountants manually build WIP schedules 8–12 hrs/client/month |
| Competitor Weakness | 5/5 | Zero native QBO WIP report; Procore/Sage 300 CRE are enterprise ($375+/mo); CrewCost $599/mo; no lightweight QBO-connected option exists in 2026 |
| LTD Viability | 4/5 | $99 LTD for contractors, $149 for accounting firms with multi-client; immediate ROI story (replaces 8-12 hrs/month Excel work) |
| No Free Tier | 5/5 | Nobody gives away WIP reporting; this is a paid workflow |
| Channel Access | 4/5 | QBO community forums (5-year active thread), r/bookkeeping, construction accountant FB groups, ProAdvisor community |
| Content Potential | 4/5 | "QBO WIP report", "construction WIP spreadsheet alternative", "WIP schedule QuickBooks" — active search demand, near-zero competition |
| AppSumo Fit | 4/5 | Construction accounting firms + mid-size contractors = AppSumo audience overlap; "save $15K/year in manual labor" pitch |
| Review Potential | 4/5 | Accountants who save 8–12 hrs/client/month will write G2/Trustpilot reviews enthusiastically |
| MRR Path | 4/5 | Multi-client accounting firm tier at $149/mo; direct contractor at $49/mo; Buildertrend/CoConstruct integration as upsell |
| Build Feasibility | 5/5 | QBO API (jobs/class tracking) + WIP calculation logic + GAAP-compliant PDF export = 3–4 weeks |
| Boring Business Bonus | 5/5 | Construction accounting = ultra-boring, deeply underserved |

**Total: 94/105**

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Validate with 10 construction accountants that they'd pay $149/mo to eliminate manual WIP
2. Connect to QBO sandbox, pull job cost data, generate sample WIP schedule PDF
3. List on AppSumo at $99 LTD targeting "construction accounting" keywords

**Risks**:
1. QBO API changes or Intuit launches native WIP (low probability — they've ignored this for 5+ years)
2. Niche is accounting-firm-facing: harder to reach than direct contractor marketing
3. GAAP compliance requirements vary; need an accountant to validate output format

**Key Source Links**:
- https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638
- https://www.redhammer.io/blog/best-construction-accounting-software-platforms-in-2025-complete-guide-for-contractors
- https://www.greensighter.com/blog/micro-saas-ideas

**Signal Frequency**: First formal identification — confirmed via Reddit aggregation + Intuit partner blog signal

---

### 🆕 Contractor Bid Bond / Security Tracker — Score: 79/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | $2T US construction industry; all companies bidding public/commercial projects must post bid securities; indirect validation — no direct paying-customer proof yet, but complaint signal strong |
| Competitor Weakness | 5/5 | Zero purpose-built tools; all contractors use generic PM (Procore, Buildertrend) or spreadsheets for bond lifecycle tracking |
| LTD Viability | 4/5 | $149 LTD for contractors, $299 for surety agency white-label; strong ROI (missed renewal = project delay + bond re-issuance cost $500–$5K+) |
| No Free Tier | 5/5 | Nothing free or purpose-built exists in this space |
| Channel Access | 3/5 | AGC, ABC, surety broker networks, contractor forums (ContractorTalk, ConstructionDive) |
| Content Potential | 3/5 | "bid bond tracking software" — very niche but zero SEO competition |
| AppSumo Fit | 3/5 | Contractor AppSumo audience is smaller but defined; "never miss a bid bond expiry" pitch is specific enough |
| Review Potential | 3/5 | Niche community; sticky compliance tools get reviews once embedded |
| MRR Path | 3/5 | White-label for surety agencies = recurring; direct contractor $99/mo; smaller TAM limits ceiling |
| Build Feasibility | 5/5 | Simple CRUD dashboard + expiry calendar + 30/14/7 day email reminders + surety broker contact = 2–3 weeks |
| Boring Business Bonus | 5/5 | Construction bonds = maximally boring, zero VC attention |

**Total: 79/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Talk to 10 GCs who bid public work — validate they're tracking bonds manually and have had an expiry incident
2. Contact 3 surety brokers about white-label licensing interest
3. Simple MVP: bond list + expiry dates + reminders; test at $79/mo

**Risks**:
1. TAM smaller than other construction tools — must be priced B2B not consumer
2. White-label surety broker channel = long sales cycle
3. GCs who bid infrequently may not see daily need

**Key Source Links**:
- https://www.greensighter.com/blog/micro-saas-ideas (idea #9)
- AGC (Associated General Contractors) membership directory for validation
- Surety broker networks for white-label opportunity

**Signal Frequency**: First identified — low frequency but zero competition = worth exploring

---

### ↑ HVAC / Trades Field Service (ServiceTitan Killer for Small Shops) — Score: 93/105

*Canonical file: `ideas/shortlisted/hvac-flat-rate-pricebook.md` (was 91/105) — score updated today*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 500K+ HVAC/plumbing/electrical contractors; ServiceTitan alternatives articles in 2025–2026 confirm active switching demand |
| Competitor Weakness | 5/5 | ServiceTitan $245–500/tech/mo; Jobber has NO pricebook at any tier; Housecall Pro removed human support; FieldEdge hides pricing + requires paid onboarding; QBO sync broken across ALL competitors |
| LTD Viability | 4/5 | $149 LTD (frame as "1 year of Housecall Pro saved"); HVAC-specific asset fields = retention moat |
| No Free Tier | 4/5 | No free HVAC-specific FSM exists |
| Channel Access | 5/5 | r/HVAC (140K+), HVAC-Talk.com, Contractor Talk (145K+), Facebook "HVAC Business Owners" |
| Content Potential | 4/5 | "ServiceTitan alternative small business", "HVAC software affordable" — growing |
| AppSumo Fit | 4/5 | No mainstream HVAC/FSM has ever pursued AppSumo; VC competitors won't |
| Review Potential | 4/5 | Contractors who stop overpaying will review |
| MRR Path | 4/5 | Per-company (not per-tech) pricing; maintenance agreement automation as upsell |
| Build Feasibility | 4/5 | Flat-rate pricebook + HVAC asset tracking + QBO sync + scheduling = 5–6 weeks |
| Boring Business Bonus | 5/5 | HVAC = deeply boring blue-collar industry |

**Total: 93/105** (↑2 from 91)

**Verdict**: BUILD
**Key differentiator today**: Competitor analysis confirms the specific combo of native flat-rate pricebook + HVAC asset tracking fields (filter info, belt specs, zone names) + QBO sync + no contract is unoccupied at <$149/mo
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://projul.com/blog/servicetitan-pricing-analysis-2026/
- https://bizglo.co/servicetitan-alternatives/

---

### = Lawn Care / Landscaping Business Platform — Score: 100/105 (stable)

*Canonical file: `ideas/shortlisted/landscaping-lawn-care.md`*

New signal today: Housecall Pro removed human customer support (now AI-only) in early 2025, driving active switching demand. Satellite property measurement for quoting gap reconfirmed. LMN route optimization absent. Multiple "Housecall Pro alternatives for landscaping" articles appearing in 2025–2026. Competitor analysis confirms LMN $297–598/mo mobile app 2.7/5 Google Play; $0–$75/mo dead zone with route optimization + satellite measurement confirmed unoccupied.

---

### = Small Landlord Property Management (1–50 Units) — Score: 100/105 (stable)

*Canonical file: `ideas/shortlisted/property-management.md`*

New signal today: Competitor analysis adds fast ACH (1–2 day settlement, zero fees) + Schedule E tax prep with receipt capture as the two unaddressed gaps vs. free tools (TurboTenant $2/txn ACH; Avail $2.50/txn). AppFolio 50-unit minimum structurally excludes small landlords. Co-living/room rental niche (Platuni) confirmed as micro-niche within property management. Shuk Rentals ($5/unit/month) emerging as new competitor but lacks Schedule E tax prep.

---

### = AI Voice Receptionist for Trades — Score: 96/105 (stable)

*Canonical file: `ideas/shortlisted/ai-receptionist.md`*

New signal today: IH post confirms $300–800 MRR per client at 80% margin using Callin.io + n8n + Cal.com. Rosie AI at $49–$149/mo per business; NeverMissHQ targeting HVAC/plumbing/roofing. AI voice agency model ($800–2K setup + $300–800/mo retainer) validates the market. White space: single-trade-vertical specialists (HVAC-only or pest control-only) vs. horizontal tools.

---

### = Auto Repair Shop Management — Score: 100/105 (stable)

*Canonical file: `ideas/shortlisted/auto-repair-shop-management.md`*

New signal today: Competitor analysis confirms no-contract + native SMS + bring-your-own payment processor as trifecta no market leader offers. Tekmetric (market leader) has zero SMS. AutoLeap requires annual contract + 60-day cancellation. Shopmonkey requires proprietary payment processor. 160K+ independent auto repair shops in US. AI modernization signal: 60%+ of auto shops expected to use AI by late 2026; $3.4B market growing to $8.6B by 2033 (14.2% CAGR).

---

### = Cleaning Service Management — Score: 98/105 (stable)

*Canonical file: `ideas/shortlisted/cleaning-service-management.md`*

New signal today: Competitor analysis documents the three-gap trifecta vs. ZenMaid: (1) no two-way SMS — replies land on owner's personal phone; (2) no batch invoicing or auto follow-up chain; (3) ZenMaid Google Play 3.2/5 = visible competitive vulnerability. No cleaning-specific FSM on AppSumo = first-mover opportunity confirmed.

---

### = Pest Control Route & Compliance Tracker — Score: 95/105 (stable)

*Canonical file: `ideas/shortlisted/pest-control.md`*

New signal today: GorillaDesk, Briostack, PestRoutes (ServiceTitan acquired) all confirmed competing = market validated at M&A scale. Key gap: chemical/pesticide compliance tracking + state licensing documentation for independent 1–5 tech operators priced out of enterprise tools. Pest control software market $280M (2023) → $570M (2032).

---

### = Pressure Washing / Auto Detailing CRM — Score: 95/105 (↑1)

*Canonical file: `ideas/shortlisted/pressure-washing-detailing.md`*

New signal today (Reddit): Pressure washing — "drive time, water refills, backtracking, idle waiting for drying = silent profit killers"; satellite measurement → auto-quote → crew scheduling → route optimization → invoicing workflow unoccupied. Auto Detailing — double-bookings common because no tool understands curing windows (paint correction = 8 hours, ceramic coating = 2-day cure); detailing-specific workflows missing from all generic FSM tools. Anolla just launched as AI-powered detailing scheduler = category validation.

---

### = Small Fleet Trucking TMS (1–10 Trucks) — Score: 92/105 (stable)

*Canonical file: `ideas/shortlisted/small-fleet-trucking-tms.md`*

New signal today: **Regulatory forcing function confirmed** — Feb 2026 FMCSA ruling: digital DVIRs fully compliant (paper forms no longer required); FMCSA cross-referencing ELD data with dispatch/billing/payroll records, inconsistencies triggering automatic reviews. Small fleets (1–10 trucks) face same compliance burden as enterprise but can't afford $35–50/vehicle/month enterprise tools. WhatsApp-first TMS concept validated: driver submits load info via WhatsApp bot → auto-logs load, generates invoice, tracks IFTA miles, calculates driver settlement.

---

### = Insurance Agent CRM / Renewal Automation — Score: 93/105 (stable)

*Canonical file: `ideas/shortlisted/insurance-agent-crm.md`*

New signal today: Neither EZLynx nor HawkSoft automate renewal outreach, cross-sell triggers, or claims status notifications. QQCatalyst "very expensive with frequent price increases." 68% of independent agencies cite pricing transparency as top criterion. 400K+ independent insurance agents in US. Implementation for enterprise tools runs $50K–$200K for mid-size agencies = confirms SMB pricing gap.

---

### = Solo Therapist / Mental Health Practitioner All-in-One — Score: 90/105 (stable)

*Canonical file: `ideas/shortlisted/solo-therapist-practice.md`*

New signal today: Trend confirms AI documentation layers (CoVet, Talkatoo, Scribenote) sitting on top of existing practice management = product direction validated; chiropractic specifically identified as "underserved vs. dental/medical" with highly repetitive documentation patterns ideal for AI. SimplePractice price hike (69%) remains live switching trigger. 600K+ licensed mental health practitioners in US.

---

### = WhatsApp-First Invoicing for Trades — Score: 86/105 (↑1)

*Canonical file: `ideas/shortlisted/whatsapp-trades-invoicing.md`*

New signal today: Reddit validates demand for "WhatsApp invoice generator" with explicit "nobody builds for US" frustration. 16M+ self-employed contractors in US; WhatsApp has 3B users globally. Solo tradespeople want to send an invoice in 30 seconds from phone without dashboard login. "WhatsApp Business API bot: text 'invoice $350 John Smith water heater install' → PDF + payment link" confirmed as greenfield US product.

---

### = Restaurant Micro-Operator (1–3 Locations) — Score: 89/105 (stable)

*Canonical file: `ideas/shortlisted/restaurant-operations.md`*

New signal today: Small restaurant owners overcharged by enterprise POS (Toast $110+/mo) or underserved by generic tools. Specific pain: shift swaps via group text → short-staffed Friday night; food cost spikes undetected (inventory not connected to POS); 2% food cost increase eliminates 50% of restaurant's profit margin. Unified scheduling + shift swap approval + basic inventory cost tracking integrated with Square/Toast POS data at $49/mo = confirmed gap.

---

## Tier 2: Worth Exploring (Score 55–74)

### HarGharPG — India PG/Paying Guest Accommodation Management — Score: 70/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 1.5M+ PG accommodations in India; virtually all managed via WhatsApp and spreadsheets; HN Show HN signal (Jan 2026) |
| Competitor Weakness | 4/5 | No English-first SaaS fits Tier 2/3 city operators; generic PM tools miss local tenancy law + GST invoicing |
| LTD Viability | 4/5 | $49–79 LTD for India pricing removes subscription-risk objection |
| No Free Tier | 4/5 | Nothing exists purpose-built |
| Channel Access | 3/5 | Indian B2B SaaS communities, Facebook groups for PG operators; requires regional language presence |
| Content Potential | 3/5 | Regional SEO harder; English terms low volume |
| AppSumo Fit | 2/5 | Indian operators less likely AppSumo buyers |
| Review Potential | 3/5 | PG operators will review if it works |
| MRR Path | 3/5 | $10–20/mo × volume = good at scale; low ARPU requires large user base |
| Build Feasibility | 4/5 | WhatsApp + UPI autopay + GST invoices = 3–4 weeks; India-specific compliance required |
| Boring Business Bonus | 4/5 | PG/hostel management = unglamorous, very local |

**Total: 70/105** — Tier 2

**Verdict**: EXPLORE FURTHER (if team has India distribution access)
**Risks**: Requires India-specific market knowledge; language/regulatory complexity; low ARPU.
**Key Source**: https://news.ycombinator.com/item?id=46716567

---

### Niche Equipment Inspection & Preventive Maintenance (Trade Subcontractors) — Score: 68/105

*Canonical file: `ideas/shortlisted/equipment-maintenance-tracking.md`*

New signal today: Multiple IH roundup articles (7+ verticals: construction, industrial, aerospace, medical, facility, oil & gas); growing category but MaintainX is the known player. **Specific gap**: construction trade subcontractors (electricians, plumbers, HVAC installers doing pre-pour/pre-close inspections) have no lightweight option — most tools built for facilities managers at REITs. Mobile-first inspection + work order tool: photo evidence + checklist + auto-email report to GC at $39/mo or $99 LTD per tech.

**Score bump noted but below Tier 1 threshold** — Tier 2. Maps to existing `equipment-maintenance-tracking.md`.

---

### AI Compliance Tools for Small Businesses — Score: 65/105

*Canonical file: `ideas/shortlisted/smb-ai-compliance.md`*

New signal today: Colorado AI Act effective Feb 1 2026 (most comprehensive state AI law); EU AI Act majority of rules applicable August 2026; California CPPA requiring pre-use notices for automated decision-making. State-level patchwork creating compliance chaos. $16K/year estimated compliance cost for CA small businesses. No SMB-specific AI compliance tool — existing tools target enterprise only.

*Existing coverage — stable signal, maps to smb-ai-compliance.md.*

---

### Skilled Trades Recruiting & HR Tech — Score: 58/105

*Canonical file: `ideas/shortlisted/skilled-trades-workforce.md`*

New signal today: AI matching for trades commands $99/user/month premium; vocational SaaS growing 20% YoY. LTD Fit: Weak — recruiters/employers prefer monthly; individual workers won't pay. Marketplace requires supply+demand bootstrapping problem. Maps to existing file, no score change warranted.

---

### PropBox — FSBO Transaction Platform — Score: 57/105

**Verdict**: PASS — transaction-based model doesn't fit LTD; 520 HN upvotes = strong demand signal but execution requires legal/closing infrastructure hard to build with small team. Better as flat-fee transaction coordinator at $499–999 per deal than as SaaS.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| Stagetimer Adjacent Tools (teleprompter, cue management) | 44/105 | Single-feature; tiny TAM; Stagetimer already at $15K MRR = market thin |
| Noosa Labs Acquisition Model | N/A | Not a build idea; signal for future M&A when capital available |
| Service Book (Vehicle Maintenance, consumer) | 40/105 | Consumer + SMB overlap; crowded (Carfax, Fleetio); $2.99/mo price point = non-starter LTD |
| AV/Event Equipment Rental (Rentman clone) | 48/105 | Rentman is at $15–20M ARR in 70+ countries; clone would need to compete globally; entry barrier high |
| AI Native FSM Add-ons (Simpro Lightning pattern) | 52/105 | Window closing as incumbents ship AI; add-on to existing tools viable but not platform-replacement |

---

## Top 3 Recommendations

1. **Construction WIP for QuickBooks** — 5-year explicit community pain with zero solution; even Intuit's own partner is publicly complaining; 8–12 hrs/client/month savings is a very specific ROI story; QBO API is well-documented; AppSumo angle clear. Score: **94/105**
   - Key source: https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638

2. **HVAC/Trades FSM (ServiceTitan Killer for Small Shops)** — Competitor analysis confirms native flat-rate pricebook + HVAC asset tracking + QBO sync + no contract is unoccupied at <$149/mo; massive contractor community reachable. Score: **93/105**
   - Key source: https://fieldcamp.ai/reviews/servicetitan/

3. **Contractor Bid Bond Tracker** — Zero competition, high-stakes (missed renewal = project delay + bond re-issuance cost), white-label angle to surety brokers creates a B2B distribution channel that bypasses CAC. Score: **79/105**
   - Key source: https://www.greensighter.com/blog/micro-saas-ideas

---

## Deduplication Notes

All ideas from today's raw files have been mapped to canonical shortlisted files:
- HVAC/Trades FSM → `hvac-flat-rate-pricebook.md` (↑91→93)
- Small Landlord PM → `property-management.md` (stable 100)
- Lawn Care → `landscaping-lawn-care.md` (stable 100)
- Auto Detailing + Pressure Washing → `pressure-washing-detailing.md` (↑94→95)
- AI Voice Receptionist → `ai-receptionist.md` (stable 96)
- Auto Repair Shop → `auto-repair-shop-management.md` (stable 100)
- Cleaning Service → `cleaning-service-management.md` (stable 98)
- Trucking TMS → `small-fleet-trucking-tms.md` (stable 92)
- Insurance CRM → `insurance-agent-crm.md` (stable 93)
- Solo Therapist → `solo-therapist-practice.md` (stable 90)
- WhatsApp Invoicing → `whatsapp-trades-invoicing.md` (↑85→86)
- Restaurant → `restaurant-operations.md` (stable 89)
- Pest Control → `pest-control.md` (stable 95)

**New files created today**:
- `construction-wip-qbo.md` (94/105) — NEW
- `contractor-bid-bond-tracker.md` (79/105) — NEW
