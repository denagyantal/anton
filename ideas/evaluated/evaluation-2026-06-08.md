# Idea Evaluation — 2026-06-08

**Sources**: reddit-2026-06-08, hn-indiehackers-2026-06-08, competitor-analysis-2026-06-08, trends-2026-06-08
**Total ideas assessed**: 23 (across all 4 sources, after dedup and consolidation)
**New Tier 1 ideas**: 2 | **Existing Tier 1 reinforced**: 9 | **Tier 2**: 4 | **Tier 3 Pass**: 8

---

## Tier 1: Strong Opportunities (Score 75+)

---

### Appliance Repair Shop FSM (Parts + Warranty) — Score: 80/105 ★ NEW
**Status**: NEW — Creates `ideas/shortlisted/appliance-repair-shop.md`

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | ~30K independent appliance repair shops in US; mHelpDesk, ServiceWork, ServicePower all validated; parts market $3B/yr; Workiz, BuildOps have comparison pages = confirmed paying market |
| Competitor Weakness | 4/5 | 2x | 8 | No affordable tool integrates parts lookup (RepairClinic/PartSelect API) or OEM warranty claim tracking; "parts on order / waiting for part" job status is a unique workflow gap no current FSM addresses |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD replaces $49–99/mo recurring — prime LTD candidate; repair shops hate subscriptions and have stable client bases |
| No Free Tier | 4/5 | 1x | 4 | No free options specifically built for appliance repair |
| Channel Access | 3/5 | 2x | 6 | r/appliancerepair, Appliance Repair Business Forum, ASTI (parts distributor network), local supply house newsletters |
| Content Potential | 3/5 | 1x | 3 | "Appliance repair software", "appliance repair CRM", "parts tracking repair shop" — moderate search volume |
| AppSumo Fit | 4/5 | 2x | 8 | Niche B2B, clear pain point (parts chaos + OEM warranty claims), 30K shops = viable AppSumo audience |
| Review Potential | 3/5 | 1x | 3 | Repair shop owners will review if parts ordering chaos is solved |
| MRR Path | 4/5 | 3x | 12 | Parts API integration creates ongoing value; warranty claim tracking grows with job history; natural upsell to service agreement billing |
| Build Feasibility | 3/5 | 2x | 6 | Core FSM buildable in 4 weeks; parts lookup API integration (RepairClinic, PartSelect) adds 2–3 weeks of complexity |
| Boring Business Bonus | 5/5 | 2x | 10 | Appliance repair = deeply boring blue-collar trade; completely invisible to VCs |
| **Total** | | | **80/105** | |

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Validate parts-lookup API availability with RepairClinic/PartSelect developer docs
2. Interview 5 appliance repair shop owners (find via r/appliancerepair) to confirm OEM warranty claim workflow pain
3. Build MVP: FSM core + parts-on-order job status + model/serial number field + OEM warranty claim tracker; $49/month flat, $79 LTD
**Risks**:
1. RepairClinic / PartSelect API access may be restricted — parts lookup could require scraping (legal/maintenance risk)
2. ServicePower or larger platforms could add SMB tier and undercut
3. Market is highly fragmented (solo operators) — hard to reach at scale without a niche publication/community
**Key Source Links**:
- https://www.workiz.com/blog/tips-tricks/best-appliance-repair-software-comparison/
- https://www.fieldproxy.ai/resources/blog/best-appliance-repair-software-9-solutions-compared-for-small-business-d1-11
- https://myquoteiq.com/top-8-softwares-for-appliance-repair-in-2026/
- https://buildops.com/resources/appliance-repair-management-software/
**Signal Frequency**: 1st appearance — single-source (Reddit) — new

---

### Chiropractic EHR + Billing (Flat-Rate, All-Inclusive) — Score: 83/105 ★ NEW
**Status**: NEW — Creates `ideas/shortlisted/chiropractic-ehr-billing.md`
*(Distinct from existing `chiropractic-practice.md` which covers AI SOAP note dictation for allied health; this is the full EHR + clearinghouse + billing system)*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ChiroTouch ($650+/mo), ChiroFusion ($129/mo), ChiroSpring ($149/mo) all have paying customers; 65K+ licensed chiropractors in US; G2/Capterra reviews confirm active evaluation market |
| Competitor Weakness | 5/5 | 2x | 10 | Hidden clearinghouse fees (+$60+/mo on top of listed price), OA45 denial processing fees, auto-logout mid-patient, $500–$3K data migration lock-in, Medicare 2025 compliance audit failures = multiple pain vectors simultaneously |
| LTD Viability | 3/5 | 2x | 6 | Per-claim clearinghouse API costs are ongoing; LTD viable with a claim-volume cap ("up to 1,000 claims/year included") or as founding-price discount |
| No Free Tier | 5/5 | 1x | 5 | No free chiropractic EHR exists; ClinicSense ($39/mo) is cheapest but not a real EHR |
| Channel Access | 3/5 | 2x | 6 | r/Chiropractic, ACA local chapters, ChiroEco forums, FB groups "Solo DC Network" and "Chiropractic Business Owners" (~15K members combined) |
| Content Potential | 4/5 | 1x | 4 | "ChiroFusion alternative", "affordable chiropractic EHR", "chiropractic billing software no hidden fees" — strong intent keywords |
| AppSumo Fit | 3/5 | 2x | 6 | Healthcare EHRs are niche on AppSumo; solo practitioners have bought on AppSumo before (dental, legal) |
| Review Potential | 4/5 | 1x | 4 | High review motivation — compliance stakes + billing savings + frustration with migration costs |
| MRR Path | 5/5 | 3x | 15 | EHR = extremely sticky recurring subscription; HIPAA compliance = mandatory, can't easily switch; clearinghouse = ongoing monthly value |
| Build Feasibility | 2/5 | 2x | 4 | HIPAA compliance, clearinghouse integration (Availity/Change Healthcare), claim scrubbing rules, Medicare modifier compliance = 10–14 week build minimum |
| Boring Business Bonus | 4/5 | 2x | 8 | Chiropractic = unglamorous professional services; invisible to VC |
| **Total** | | | **83/105** | |

**Verdict**: EXPLORE FURTHER → BUILD (validation gating on build complexity)
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Interview 5 solo chiropractors — specifically ask about clearinghouse bills and OA45 denial costs (quantify monthly effective cost vs. listed price)
2. Research Availity clearinghouse API access requirements (HIPAA BAA + credentialing timeline — this is the blocker)
3. Consider building "SOAP notes + scheduling + invoicing" only as V1, leaving insurance billing to Phase 2 — reduces HIPAA complexity while validating switching intent
**Risks**:
1. HIPAA + clearinghouse integration = 10–14 weeks for full MVP, testing this team's 4–6 week constraint
2. OA45 denial logic is payer-specific and changes annually — ongoing maintenance burden
3. $500–$3K migration costs create lock-in but also make adoption harder (same friction hurts us)
**Key Source Links**:
- https://www.sprypt.com/blog/chiropractic-ehr-software-buyers-guide
- https://www.capterra.com/p/142407/ChiroFusion-Complete-Practice-Management/reviews/
- https://www.sprypt.com/blog/best-chiropractic-software-of-2026
- https://myzhealth.io/blog/complete-handbook-to-solving-chiropractic-billing-challenges/
- https://www.g2.com/products/chirospring/reviews
**Signal Frequency**: 1st appearance — single-source (competitor-analysis) — new

---

### Field Service Management for Solo/Micro Trades — Score: 101/105
**Status**: EXISTING — Updates `ideas/shortlisted/field-service-management.md` (stable at max)

Key new signals today:
- **Reddit**: Micro-Trades FSM gap at $99–149/mo flat rate (not per-tech) confirmed; FieldFlow (HN Show HN at $5/mo) validates solo tier demand; ServiceTitan minimum $398–1,750+/mo confirmed again
- **HN/IH**: SoloBid (8 signups in first week = most validated of 3 IH ideas tested); FieldFlow builder uses it daily as solo carpenter; SBA Q3 2025 "89% of tradespeople lack adequate digital tools"
- **Trends**: Ultra-affordable FSM for 1–3 person crews at $19/mo whitespace confirmed; FSM market $5.1B → $9.17B at 12.5% CAGR; 94% of FSM users are 1–50 employee businesses

**Verdict**: BUILD (in pipeline)
**Signal Frequency**: Daily reinforcement, 4th consecutive quad-source hit — stable at maximum score

---

### Salon & Barbershop Management (Commission-Free) — Score: 95/105
**Status**: EXISTING — Updates `ideas/shortlisted/salon-barbershop.md`

Key new signals today:
- **Competitor Analysis (major)**: Fresha's 20% new-client marketplace commission ($500–$1K/mo loss for $5K/mo salon) + added $19.95/mo subscription in 2025 = active switching intent right now; Squire locks features behind complaints post-sale; GlossGenius can't embed booking widget on own website; Vagaro add-on creep pushes 3-person shop to $80–100/mo effective cost; mixed booth-renter/W2 employee commission tracking = unserved edge case
- The Fresha commission backlash is live and active (pricing model change happened mid-2025)

**Verdict**: BUILD (in pipeline)
**Signal Frequency**: 5th reinforcement — competitor analysis confirms active switching moment

---

### Legal Practice Management — Solo Attorney IOLTA — Score: 94/105
**Status**: EXISTING — Updates `ideas/shortlisted/legal-practice-management.md`

Key new signals today:
- **Competitor Analysis**: Clio raised Essentials from $89→$99/user in mid-2025 (11% hike); 3-attorney firm now $3,564/yr base before add-ons hit $13–15K/yr; CaelusLaw at $20/user/mo validates demand at lower price; IOLTA three-way reconciliation missing from most tools; attorneys switch within 18 months when workflow doesn't click = high churn creates acquisition opportunity

**Verdict**: BUILD (in pipeline)
**Signal Frequency**: 6th reinforcement — competitor analysis confirms Clio price-hike switching moment

---

### Restaurant Back-of-House (Food Costing + Labor) — Score: 93/105
**Status**: EXISTING — Updates `ideas/shortlisted/restaurant-operations.md` (score raised 91→93)

Key new signals today:
- **Competitor Analysis (major)**: MarketMan $500 setup fee + $149/mo, mobile app crashes during inventory counts, 60-day cancellation with "flaming hoops" process = perfect AppSumo switching narrative; 7shifts + MarketMan = $179+/mo for basic back-of-house = clear price gap; setup complexity blocks small operators (confirmed G2 May 2025 review); 71% of large restaurants use scheduling software vs 53% of smaller ones = size matters
- **Reddit**: Restaurant labor cost real-time alert (26% cite scheduling as #1 priority; 48% vs 35% target labor cost → SMS alert when over threshold) = standalone micro-feature to layer on top of back-of-house

**Verdict**: BUILD
**Signal Frequency**: 7th reinforcement — competitor analysis adds actionable "anti-MarketMan" launch narrative

---

### AI Voice Answering for Trades — Score: 85/105
**Status**: EXISTING — Updates `ideas/shortlisted/ai-voice-answering-trades.md` (score raised 82→85)

Key new signals today:
- **HN/IH (major)**: IH builder making $300–800 MRR per client with 80%+ margin using Callin.io + n8n + Cal.com stack; $800–2K setup fee validated; Avoca raised $125M at $1B valuation (Kleiner Perkins) = enterprise end validated; gap confirmed at $299/mo SaaS vs. $800/mo agency
- **Trends**: Trillet at $49/mo, Marlie.ai at $0.19/min, Rosie at $49/mo unlimited = sub-$100 tier confirmed; only 12% of contractors have adopted AI = 88% greenfield; electrical-specific and pest-control-specific variants barely exist = sub-vertical differentiation opportunity

**Verdict**: EXPLORE FURTHER → BUILD
**Signal Frequency**: 8th reinforcement (2 consecutive days); IH revenue data is strongest validation yet

---

### Landscaping & Lawn Care Business OS — Score: 100/105
**Status**: EXISTING — Updates `ideas/shortlisted/landscaping-lawn-care.md` (stable at max)

Key new signals today:
- **Reddit**: Seasonal route & crew rebalancing specifically called out — adding 5 new clients in July = 2-hour spreadsheet exercise; summer→fall→winter service mode switching; Service Autopilot designed for 10+ crews, not 1–5 crew shops
- **Trends**: Lawn care mobile-first SMS consolidation — "owner texts 'done @ 123 Main St' → app auto-generates invoice → customer pays via text"; TurfHop, Yardbook exist but desktop-first; voice/SMS-first workflow = whitespace; $59 LTD for solo operators

**Verdict**: BUILD (in pipeline)
**Signal Frequency**: Daily reinforcement — stable at maximum score

---

### Property Management for Small Landlords — Score: 100/105
**Status**: EXISTING — Updates `ideas/shortlisted/property-management.md` (stable at max)

Key new signals today:
- **Reddit**: AI tenant communication hub — AI classifies inbound tenant messages (maintenance/lease/billing/general), routes to vendor, auto-responds to FAQs from lease context; AI adoption in property management jumped 20% → 58% in one year (2024→2025) = macro signal
- **HN/IH**: RentReady (3 signups in first week), Landlord Cart ($99/year flat) = price point validated; Schedule E export + bank-feed import = accounting angle; 17M DIY landlords in US
- **Trends**: MagicDoor AI, EliseAI, Cove = AI property management confirmed growing; accidental landlord segment (1–10 units, inherited/investment) still on spreadsheets + Venmo

**Verdict**: BUILD (in pipeline)
**Signal Frequency**: 9th reinforcement — quad-source, 3 consecutive quad-source days; AI tenant communication adds product differentiation angle

---

### Cleaning Service Management — Score: 100/105
**Status**: EXISTING — Updates `ideas/shortlisted/cleaning-service-management.md` (stable at max)

Key new signals today:
- **Reddit**: Commercial janitorial bid calculator + QC inspection app gap — B2B cleaning companies underbid using gut feel; task-level labor calculation (tasks × frequency × minutes × wage + consumables + overhead + margin); CleanGuru ($59–99/mo) does bidding only; Aspire/Janitorial Manager/Swept all expensive or fragmented; $100B+ commercial cleaning industry, ~50K companies in US with 5–100 employees
- **HN/IH**: CleanRoute validated (1 landing page signup, but solo cleaner route optimization = genuine gap); ZenMaid/Jobber built for teams, not solo cleaners

**Verdict**: BUILD (in pipeline) — commercial janitorial is a distinct B2B angle worth exploring as a separate product from residential cleaning
**Signal Frequency**: 9th reinforcement; commercial B2B janitorial angle is a potential spin-off product

---

### Owner-Operator Trucking TMS — Score: 87/105
**Status**: EXISTING — Updates `ideas/shortlisted/owner-operator-trucking-tms.md` (score raised 85→87)

Key new signals today:
- **Reddit**: Profit-per-load dashboard angle specifically validated — real-time fuel cost per mile, driver pay (% or CPM), tolls, deadhead miles, detention time; driver settlement automation (weekly pay calculations with deductions) = manual; EFS/Comdata fuel API = specific integration opportunity; gap at $49–99/mo with load profitability + driver settlement
- **Trends**: DOT compliance + TMS combined — HOS logs, IFTA, maintenance, driver management + invoicing; Truckpedia at $300/mo for 10 trucks gaining traction; regulatory pressure forcing final paper holdouts to digitize in 2025–2026; specialty niche: refrigerated transport or hazmat compliance layer

**Verdict**: BUILD
**Signal Frequency**: 3rd appearance (2nd consecutive day); Reddit + Trends dual-source confirms load profitability is the key missing feature

---

## Tier 2: Worth Exploring (Score 55–74)

---

### Solar Contractor Permit-to-Power Workflow Manager — Score: 68/105 ★ NEW
**Status**: NEW — add to tracking; not yet a Tier 1 candidate

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | ~50K residential solar installers; 4M installs/year; Projul module exists = partial validation; Aurora, SolarAPP+ = active software market |
| Competitor Weakness | 3/5 | 2x | 6 | Projul has a module; Mon.com/Asana used = gap confirmed but fragmented |
| LTD Viability | 3/5 | 2x | 6 | Per-company subscription makes sense; $99 LTD viable for small shops |
| No Free Tier | 4/5 | 1x | 4 | No free solar-specific permit tracking tools |
| Channel Access | 3/5 | 2x | 6 | r/solar, SolarReviews forums, NABCEP installer network |
| Content Potential | 3/5 | 1x | 3 | "Solar permit tracking software", "solar installation project management" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche but passionate community; solar installers actively seek tools |
| Review Potential | 3/5 | 1x | 3 | Will review if permit delays reduced |
| MRR Path | 3/5 | 3x | 9 | AHJ integrations create sticky value; but solar market is policy-sensitive |
| Build Feasibility | 4/5 | 2x | 8 | Core PM with AHJ-specific checklists buildable in 4–5 weeks; AHJ database is the hard part |
| Boring Business Bonus | 4/5 | 2x | 8 | Solar installation = real trade business; VCs back Aurora but not PM tools |
| **Total** | | | **68/105** | |

**Verdict**: EXPLORE FURTHER
**Next Steps**: Validate via r/solar — post a question about workflow tools and observe response; check if SolarAPP+ 20% AHJ adoption creates urgency for other-80% market
**Risks**: Federal/state solar policy changes could shrink installer count sharply; Projul module could improve; interconnection complexity varies too much by utility to standardize

---

### Dog Walking & Pet Sitting Platform (Solo-Friendly) — Score: 73/105
**Status**: UPDATE — relates to `ideas/shortlisted/pet-boarding-kennel.md` (distinct enough for separate tracking as this targets solopreneurs specifically)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Time To Pet, Leashtime, PetSitClick all paid; 500K professional pet sitters; industry growing 7% YoY |
| Competitor Weakness | 3/5 | 2x | 6 | Time To Pet $50/mo for solos; alternatives have outdated UX; Leashtime/PetSitClick aging |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD for solo pet sitters works; passionate community |
| No Free Tier | 2/5 | 1x | 2 | PetSitClick $25/mo; some free-tier options exist |
| Channel Access | 4/5 | 2x | 8 | r/petsitting (125K+), FB "Professional Pet Sitters" groups (50K+) |
| Content Potential | 3/5 | 1x | 3 | "Pet sitting software", "dog walking app" — moderate |
| AppSumo Fit | 4/5 | 2x | 8 | Passionate solopreneur community; price-sensitive |
| Review Potential | 3/5 | 1x | 3 | Will review if GPS visit verification + key management solves the problem |
| MRR Path | 3/5 | 3x | 9 | Per-sitter subscription; small TAM limits MRR ceiling |
| Build Feasibility | 4/5 | 2x | 8 | GPS-verified visits, photo reporting, key log, recurring billing — 3–4 week MVP |
| Boring Business Bonus | 3/5 | 2x | 6 | Pet care services = small business, moderately boring |
| **Total** | | | **73/105** | |

**Verdict**: EXPLORE FURTHER
**Next Steps**: Check r/petsitting for software complaints; validate key management log and GPS visit verification as primary pain points vs. pricing
**Risks**: Very small TAM per sitter; Time To Pet's established trust is hard to overcome; churn could be high as pet sitters leave business seasonally

---

### AI Pest & Home Inspection Report Generator — Score: 72/105
**Status**: EXISTING — Updates `ideas/shortlisted/home-inspection-software.md`

Key new signal from Trends:
- Property Inspect "Inspect AI" just launched = category creating; photo → auto-generated inspection report in under 2 minutes is the whitespace; AI photo-to-pest-species identification + treatment recommendation + compliance PDF = no standalone affordable product
- Speed: vision AI (GPT-4o/Claude) makes this buildable in 2–4 weeks; $99–149 LTD range confirmed AppSumo-ready

**Verdict**: EXPLORE FURTHER
**Note**: Strong LTD fit, fast build. Watch for Inspect AI adoption before investing.

---

### DOT Compliance + TMS Bundle for 5–20 Truck Fleets — Score: 67/105
**Status**: EXISTING — relates to `ideas/shortlisted/small-fleet-tms.md` and `owner-operator-trucking-tms.md`

Note: This is a mid-market tier above the owner-operator TMS; Truckpedia at $300/mo gaining traction; regulatory pressure from ELD mandates forcing paper holdouts to digitize. LTD doesn't fit this tier (fleet managers prefer annual contracts). Better as MRR-first play targeting 5–20 truck operators.

**Verdict**: PASS for LTD/AppSumo; track as MRR opportunity

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| Cloud Dental PMS for Solo Practices | 48/105 | HIPAA + HL7/FHIR + clinical charting = 3–6 month build; dentists don't buy on AppSumo; Curve Dental, CareStack well-capitalized |
| Franchise Operations & Compliance Platform | 52/105 | LTD doesn't fit franchise model (annual B2B contracts); better as enterprise SaaS; already tracked in micro-franchise-ops.md |
| Industrial Risk & Safety Compliance SaaS | 50/105 | Pre-revenue validation only; ISO 31000/NFPA framework complexity; vague TAM; founder story but no market evidence of paying customers yet |
| Restaurant Labor Cost Real-Time Alert (standalone) | 54/105 | Compelling micro-feature but too narrow as standalone; better as feature within restaurant-operations.md product |
| Vertical SaaS for HVAC Dispatch (HN signal) | — | Duplicate of field-service-management.md; no new signal |
| Rentman/AV Equipment Rental Case Study | — | Existing idea (av-event-production.md); case study confirms model, no new angle |
| Green Industry Lawn Care SMS App (Trends) | — | Duplicate of landscaping-lawn-care.md; seasonal rebalancing angle folded into that update |
| QuickBooks Alternative for Trades (Reddit) | — | Duplicate of bookkeeping-accounting.md + ai-job-costing-trades.md; no new signal |

---

## Top 3 Recommendations

1. **Appliance Repair Shop FSM** — Score: 80 — The parts-lookup + OEM warranty claim gap is completely unserved; 30K shops, deep blue-collar boring business, parts supply chain = natural recurring value. Start with RepairClinic API validation.
   - Key source: https://www.workiz.com/blog/tips-tricks/best-appliance-repair-software-comparison/

2. **Chiropractic EHR + Billing (Flat-Rate)** — Score: 83 — Hidden clearinghouse fees eating $60+/mo on top of listed prices creates active switching pressure; Medicare 2025 audit compliance = urgent pain; EHR stickiness = best MRR durability in today's set. Gate on HIPAA/clearinghouse feasibility assessment first.
   - Key source: https://www.sprypt.com/blog/chiropractic-ehr-software-buyers-guide

3. **Salon & Barbershop (Commission-Free)** — Score: 95 — The Fresha pricing model change in 2025 created the best "switching moment" in today's data. $500–$1K/mo commission loss is quantified and urgent. Active community backlash = word-of-mouth fuel.
   - Key source: https://medium.com/@asbaines/the-true-cost-of-fresha-276d6856bcc0
