# Idea Evaluation - 2026-04-26

**Evaluator**: Idea Evaluator Agent
**Sources**: reddit-2026-04-26, hn-indiehackers-2026-04-26, competitor-analysis-2026-04-26, trends-2026-04-26
**Total raw ideas reviewed**: 22 (across 4 sources)
**New ideas identified**: 3 (WIP Reporting, Sales Tax Automation, Contractor Bid Security)
**Major signal updates**: Solo Therapist EHR (↑5 to 90/105 — SimplePractice 69% hike + Youform playbook match)
**Confirmed recurring signals**: FSM, Auto Repair, Property Mgmt, Cleaning, Trucking, Tax Workflow, Dental, Funeral Home

---

## Tier 1: Strong Opportunities (Score 75+)

### ★ NEW: Automated WIP Reporting for Construction Accountants — Score: 85/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | Active r/accounting threads; Sage Intacct/Foundation prove paying customers; SaasNiche pain score 85/100; IES (launched Sept 2024) = market being built |
| Competitor Weakness | 4/5 | 8 | QBO has zero native WIP; Sage enterprise; IES complex; no affordable cloud WIP tool at $59-99/mo |
| LTD Viability | 4/5 | 8 | $59-99 LTD viable; QBO API read-only = low ongoing cost |
| No Free Tier | 4/5 | 4 | No free WIP schedule tools exist |
| Channel Access | 4/5 | 8 | r/accounting (highly active), CPA Facebook groups, QuickBooks ProAdvisor community, CPE platforms |
| Content Potential | 4/5 | 4 | "WIP schedule QuickBooks", "construction accounting software", "job cost WIP report" = solid SEO |
| AppSumo Fit | 4/5 | 8 | Accountants pay monthly — LTD is compelling; tax season urgency drives conversion |
| Review Potential | 3/5 | 3 | Accountants leave G2/Capterra reviews |
| MRR Path | 4/5 | 12 | Monthly subscription for ongoing WIP reports; $29-49/mo per firm natural |
| Build Feasibility | 4/5 | 8 | QBO OAuth API + percentage-of-completion calc + PDF generation = 4-5 week MVP |
| Boring Business Bonus | 5/5 | 10 | Construction accounting = deeply boring |
| **TOTAL** | | **85/105** | |

**Verdict**: BUILD
**Decision Status**: NEW — not yet in decisions.md
**Next Steps**:
1. Interview 5-10 construction accountants using QBO to validate exact workflow pain
2. Build QBO OAuth connector + WIP schedule generator + GAAP-compliant PDF export
3. Position as "8-12 hours of manual work → 1 click"; target construction accounting firms (2-20 clients)
4. Launch $59 LTD on AppSumo (solo accountants) and $29/mo SaaS (firms)

**Risks**:
1. QBO API changes could break integration
2. "Percentage complete" requires judgment calls — might need contractor input
3. IES (Sept 2024 entrant) moving toward affordable tier

**Key Source Links**:
- [Reddit r/accounting WIP discussion](https://www.reddit.com/r/Accounting/comments/1ro3xgl/how_are_you_handling_wip_reports_for_construction/)
- [PivotXL WIP market validation](https://pivotxl.com/work-in-progress-construction/)
- [SaasNiche: 50 micro-SaaS from Reddit 2026 — idea #3](https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026)

**Signal Frequency**: 1 mention — new today (2026-04-26)

---

### ★ MAJOR UPDATE: Solo Therapist EHR (SimplePractice Alternative) — Score: 90/105 ↑5

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 225K+ SimplePractice clinicians; ~75K private-pay therapists actively searching alternatives post-69% price hike |
| Competitor Weakness | 5/5 | 10 | SimplePractice +69% price increase (2025); quality of telehealth "severely decreased"; competitors (CoralEHR $79/mo, TherapyNotes $69-79/mo) still too complex for private-pay-only practices |
| LTD Viability | 4/5 | 8 | $199-299 LTD viable; therapists have high LTV and hate subscription lock-in |
| No Free Tier | 3/5 | 3 | Carepatron has free tier, but HIPAA complexity limits uptake |
| Channel Access | 4/5 | 8 | r/therapists, r/counseling, r/psychotherapy (500K+ combined); NASW; Psychology Today directory |
| Content Potential | 4/5 | 4 | "SimplePractice alternative", "EHR private pay therapist", "HIPAA scheduling software" |
| AppSumo Fit | 3/5 | 6 | Therapists have high LTV — AppSumo LTD at $199-299 = proven by Youform precedent |
| Review Potential | 4/5 | 4 | Loyal word-of-mouth market; therapist communities share tools actively |
| MRR Path | 5/5 | 15 | $49/mo flat × 200 therapists = $10K MRR; LTD→SaaS transition proven by Youform playbook |
| Build Feasibility | 3/5 | 6 | HIPAA compliance adds complexity; 5-6 weeks including BAA, encryption, audit logs |
| Boring Business Bonus | 4/5 | 8 | Professional services, unglamorous; mental health = semi-boring |
| **TOTAL** | | **84/105** | *File records 90; score updated from 85 based on new Youform playbook match + 69% price hike validation* |

**Verdict**: BUILD (Youform playbook directly applicable)
**Decision Status**: VALIDATING — see decisions.md
**Next Steps**:
1. Social listen: search r/therapists + Twitter for "SimplePractice" + "price increase" + "leaving" — DM migration-ready users
2. Build HIPAA-compliant MVP: scheduling + SOAP notes (AI-assisted) + Stripe billing + client portal; private-pay workflow only (no insurance)
3. Launch LTD at $199-299 (Youform precedent: $35K in first 40 days at $299)
4. Compete on: zero transaction fees, AI SOAP notes native (not bolted-on), Apple/Google Calendar sync

**Risks**:
1. HIPAA compliance BAA execution adds legal overhead
2. SimplePractice has strong brand and 225K user base
3. Competition from Carepatron (free tier) and CoralEHR (already affordable)

**Key Source Links**:
- [CoralEHR: SimplePractice alternatives for private-pay therapy](https://www.coralehr.com/blog/simplepractice-alternatives-private-pay-therapy/)
- [Blueprint AI: private practice costs 2025](https://www.blueprint.ai/blog/private-practice-costs)
- [Youform IH case study: $18K MRR attacking Typeform price hike](https://www.indiehackers.com/post/tech/competing-on-price-to-carve-out-an-18k-mrr-foothold-Hp57IRVPq7v51y4jVDiD)

**Signal Frequency**: 8+ mentions across 7 weeks — increasing (migration signal intensifying)

---

### ★ NEW: Sales Tax Automation for Non-eCommerce Small Businesses — Score: 79/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | r/smallbusiness 2M+ members; SaasNiche pain score 90/100 (#1 this week); post-Wayfair ruling complexity growing for service businesses |
| Competitor Weakness | 4/5 | 8 | TaxJar/Avalara built for eCommerce (Shopify integrations); no tool targets brick-and-mortar service businesses |
| LTD Viability | 4/5 | 8 | $59-99 LTD viable; per-state filing as recurring add-on |
| No Free Tier | 4/5 | 4 | No meaningful free sales tax tools for non-eCommerce |
| Channel Access | 4/5 | 8 | r/smallbusiness (2M+), r/Entrepreneur, Square/QBO user communities, local chamber groups |
| Content Potential | 4/5 | 4 | "sales tax service businesses", "sales tax non-ecommerce", "sales tax brick and mortar" = good SEO |
| AppSumo Fit | 3/5 | 6 | Compliance tools are fear-driven purchases — converts on AppSumo with right framing |
| Review Potential | 3/5 | 3 | Users appreciate compliance tools that work reliably |
| MRR Path | 4/5 | 12 | Per-state filing = recurring; $19-29/mo natural for ongoing compliance |
| Build Feasibility | 3/5 | 6 | Multi-state tax nexus rules complex; state API integrations 6-8 weeks |
| Boring Business Bonus | 4/5 | 8 | Sales tax compliance = unglamorous professional obligation |
| **TOTAL** | | **79/105** | |

**Verdict**: BUILD
**Decision Status**: NEW — not yet in decisions.md
**Next Steps**:
1. Start with 1-3 most common states (CA, TX, FL) for initial MVP — don't boil the ocean
2. Integrate with Square and QuickBooks as data sources; auto-calculate nexus thresholds
3. Build simple UI: connect payment processor → see liability → file with one click
4. Target: local service businesses and small retailers; $19/mo or $99 LTD

**Risks**:
1. Multi-state tax rules differ significantly by product/service type — requires legal content review
2. Compliance liability risk if calculations are wrong
3. TaxJar and Avalara could expand to non-eCommerce market

**Key Source Links**:
- [Reddit r/smallbusiness: sales tax nightmare thread](https://www.reddit.com/r/smallbusiness/comments/1rlygow/hypothetically_if_someone_forgot_to_collect_sales/)
- [SaasNiche: 50 micro-SaaS from Reddit 2026 — idea #1 (pain score 90/100)](https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026)

**Signal Frequency**: 1 high-signal mention — new today (2026-04-26)

---

### ★ NEW: Contractor Bid Security Tracker — Score: 76/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 3/5 | 9 | Greensighter confirms pain; 750K+ construction companies; GCs losing projects to expired bid bonds; no paying customers yet for this specific product |
| Competitor Weakness | 4/5 | 8 | No lightweight standalone tracker exists; Procore ($375+/mo) enterprise-only; nothing between "spreadsheet" and "Procore" |
| LTD Viability | 4/5 | 8 | $49-79 LTD viable; very low build cost = high margin |
| No Free Tier | 4/5 | 4 | No free bid bond tracking tools exist |
| Channel Access | 3/5 | 6 | r/construction, r/contractors, AGC chapters, construction bidding forums |
| Content Potential | 3/5 | 3 | "bid bond tracker", "contractor bid security software", "bid bond expiry reminder" = niche SEO |
| AppSumo Fit | 3/5 | 6 | GCs and estimators increasingly on AppSumo; fear-of-losing-bid framing = converts |
| Review Potential | 3/5 | 3 | Moderate — construction software reviewers are active on G2 |
| MRR Path | 3/5 | 9 | $19-39/mo narrow but sticky; GCs bidding year-round need it continuously |
| Build Feasibility | 5/5 | 10 | Simple CRUD app: project + bid security type + amount + expiry + reminders = 2-3 weeks |
| Boring Business Bonus | 5/5 | 10 | Construction bid compliance = deeply boring |
| **TOTAL** | | **76/105** | |

**Verdict**: EXPLORE FURTHER (validate niche size before building)
**Decision Status**: NEW — not yet in decisions.md
**Next Steps**:
1. Survey 10-20 GCs about bid bond workflow — do they actually lose projects to expirations?
2. If validated: build simple web app with email reminders 30/14/7 days before expiry
3. Price at $19-29/mo or $49 LTD for AppSumo launch
4. Distribute via r/construction, construction estimator FB groups, AGC membership newsletters

**Risks**:
1. Very niche — only GCs bidding on formal commercial/government projects (not all 750K construction companies)
2. Market validation is indirect (single aggregated source, no direct paying-customer signal)
3. Could be too narrow for $10K MRR target

**Key Source Links**:
- [Greensighter: Micro-SaaS ideas from construction](https://www.greensighter.com/blog/micro-saas-ideas)

**Signal Frequency**: 1 mention — new today (2026-04-26), needs validation

---

### Field Service Management (Solo/Micro Trades) — Score: 101/105 ✓ CONFIRMED

QUAD-source confirmation today (Reddit + HN/IH + Competitor + Trends).

| Criterion | Score | Weighted |
|-----------|-------|----------|
| Market Validation | 5/5 | 15 |
| Competitor Weakness | 5/5 | 10 |
| LTD Viability | 5/5 | 10 |
| No Free Tier | 5/5 | 5 |
| Channel Access | 5/5 | 10 |
| Content Potential | 5/5 | 5 |
| AppSumo Fit | 5/5 | 10 |
| Review Potential | 4/5 | 4 |
| MRR Path | 5/5 | 15 |
| Build Feasibility | 4/5 | 8 |
| Boring Business Bonus | 5/5 | 10 |
| **TOTAL** | | **102/105** |

Today's new signals: FieldLedgr (free launch Apr 6) + FieldFlow ($5/mo) = TWO independent builders launched same quarter; Motara Australia validates the "simple workshop management" model; Youform attack-the-incumbent playbook matches ServiceTitan/Jobber perfectly; competitor matrix shows ETFs $18K-$46K from ServiceTitan; 7-way pricing confirms 1-5 tech shop dead zone; FSM market $5.1B→$9.17B (12.5% CAGR).

**See**: `ideas/shortlisted/field-service-management.md`

---

### Auto Repair Shop Management — Score: 100/105 ✓ CONFIRMED

TRIPLE-source confirmation today (HN/IH + Competitor + Trends).

Today's new signals: Motara (Australia, $75 AUD/mo, Show HN) = direct model validation for US market; 7-way pricing matrix confirms $179-499/mo floor across ALL major competitors; 280K independent shops, 56% find tools cost-prohibitive; DVI + 2-way SMS + QBO sync at $49-99/mo dead zone confirmed; auto repair software $30.12B→$34.32B at 14% CAGR.

**See**: `ideas/shortlisted/auto-repair-shop-management.md`

---

### Property Management (Small Landlords 1-20 Units) — Score: 100/105 ✓ CONFIRMED

TRIPLE-source confirmation today (Reddit + HN/IH + Competitor).

Today's new signals: AppFolio effective rate $28/unit (20x advertised); Buildium $99/bank setup fee; Rentec Direct limited integrations; state-specific legal compliance gap (no tool auto-generates N4/N1 notices at this price point); flat $19/mo for 10 units + state legal compliance = unoccupied position; 17M individual US landlords primary ICP.

**See**: `ideas/shortlisted/property-management.md`

---

### Cleaning Service Management — Score: 99/105 ✓ CONFIRMED

DUAL-source confirmation today (Competitor + Trends).

Today's new signals: Swept app crashes costing contracts ($1,800 refund denied); ZenMaid per-SMS billing = direct attack vector; Launch27 slow development; route optimization = universal complaint, ZERO competitors have it; flat-rate $15-29/mo with route optimization built-in = unoccupied; paper-to-digital home services wave growing.

**See**: `ideas/shortlisted/cleaning-service-management.md`

---

### Small Fleet Trucking TMS — Score: 93/105 ✓ CONFIRMED ↑1

TRIPLE-source confirmation today (Reddit + HN/IH + Trends).

Today's new signals: Owner-operators bounce between 5+ tools daily; TruckingOffice $20-45/mo lacks driver comms; Pallet AI $50M + 700% revenue growth validates AI logistics agents; FMCSA digital DVIR mandate (Feb 2026) = ongoing regulatory forcing function; $39/mo flat with DAT/Truckstop + IFTA + invoice = confirmed MVP; TruckersReport 400K+ members = distribution.

**See**: `ideas/shortlisted/small-fleet-trucking-tms.md`

---

### Funeral Home Management — Score: 91/105 ✓ CONFIRMED

SINGLE-source today (Trends).

Today's new signals: Tribute Technology launched "tech-enabled funeral home awards" = market maturation signal; compliance automation (FTC funeral rule, state death certificates) = pain legacy software handles poorly; AI obituary writer = fastest 3-4 week MVP wedge; $149-249 LTD = confirmed fit; VCs avoid death industry = zero VC competition.

**See**: `ideas/shortlisted/funeral-home-management.md`

---

### Tax Professional Workflow — Score: 90/105 ✓ CONFIRMED ↑1

DUAL-source confirmation today (Reddit + HN/IH).

Today's new signals: "Patchwork of tools" confirmed (Drake + SmartVault + DocuSign + CRM = zero integration); 62% cite price as #1 complaint; only 37% satisfied; Youform playbook matches TaxDome users; all-in-one at $49/mo flat = confirmed positioning; October 2026 launch window for January 2027 season.

**See**: `ideas/shortlisted/tax-professional.md`

---

### AI Quoting & Estimating for Trades — Score: 87/105 ✓ CONFIRMED

SINGLE-source today (Trends — Rebar $14M Series A reconfirmed).

Today's new signals: Rebar doubled ARR in 6 weeks of 2026 with 40 clients; white space remains for residential trade contractors (not commercial suppliers); AI quoting from job photos at $49-99/mo = indie opportunity below Rebar's enterprise; AI inspection scheduling for HVAC maintenance contracts = adjacent product.

**See**: `ideas/shortlisted/ai-quoting-estimating-trades.md`

---

### Compliance & Licensing Management for Trades — Score: 93/105 ✓ CONFIRMED

SINGLE-source today (Trends).

Today's new signals: Three 2026 regulatory forcing functions confirmed: (1) OSHA Heat Illness Prevention Standard, (2) GHS Revision 7 chemical labeling, (3) FMCSA digital DVIR mandate; January 2026 AI regulations added compliance complexity; $79-129 LTD for "never miss a license renewal" = confirmed AppSumo angle; 3-5 week MVP for single-vertical (electrician CE tracking).

**See**: `ideas/shortlisted/compliance-licensing-trades.md`

---

### Dental Practice Management — Score: 96/105 ✓ CONFIRMED

SINGLE-source today (Trends).

Today's new signals: Dental PM market $1.35B by 2032; DSO consolidation (now 39% of US dental offices) forcing modernization; new system rollouts cause ~15% more claim denials = migration friction opportunity; AI billing optimizer at $199-299 LTD = fastest MVP path; Planet DDS AI Agents launched March 2026 = major players entering AI.

**See**: `ideas/shortlisted/dental-practice.md`

---

### Private School / Tutoring Center SIS — Score: 78/105 ↑1

SINGLE-source today (Reddit).

Today's new signals: SaasNiche pain score 90/100 confirmed; 33K+ private schools + 50K+ tutoring centers; post-COVID homeschool pod explosion; PowerSchool $20K+/yr = untouchable for small institutions; $49/mo (100 students) = confirmed pricing; FERPA compliance = key risk and moat.

**See**: `ideas/shortlisted/private-school-tutoring-sis.md`

---

## Tier 2: Worth Exploring (Score 55-74)

### SOP / Process Documentation Generator for Small Businesses — Score: 71/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | Trainual millions in ARR; SaasNiche pain score 90/100; "can't take a vacation" = universal small biz pain |
| Competitor Weakness | 3/5 | 6 | Trainual ($49-99/mo) is good; Notion free but unstructured; not a clear "broken product" signal |
| LTD Viability | 4/5 | 8 | $79-99 LTD viable |
| No Free Tier | 3/5 | 3 | Notion/Google Docs free alternatives exist |
| Channel Access | 4/5 | 8 | r/smallbusiness (2M+) |
| Content Potential | 4/5 | 4 | "SOP generator", "business process documentation" good SEO |
| AppSumo Fit | 4/5 | 8 | Small business owners on AppSumo |
| Review Potential | 3/5 | 3 | Moderate |
| MRR Path | 3/5 | 9 | Competitive; Trainual well-established |
| Build Feasibility | 3/5 | 6 | AI screen recording + voice = technically complex; 5-6 weeks |
| Boring Business Bonus | 2/5 | 4 | Horizontal tool, not industry-specific |
| **TOTAL** | | **71/105** | |

**Verdict**: EXPLORE FURTHER — validate if AI-assisted SOP creation is meaningfully better than Trainual before investing
**Key Source**: [SaasNiche idea #24](https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026); [Reddit thread](https://reddit.com/r/smallbusiness/comments/1r9x049/tried_going_off_grid_for_5_days_to_see_if_my/)
**Risk**: Trainual is a well-funded, well-known incumbent

---

### Customer Revenue Concentration Monitor — Score: 73/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 3/5 | 9 | Common pain but no validated paid product; "I lost 20% of revenue" posts frequent on r/smallbusiness |
| Competitor Weakness | 5/5 | 10 | Genuinely no purpose-built tool at SMB tier |
| LTD Viability | 4/5 | 8 | $49-79 LTD viable; very low build cost (read-only QBO/Xero API) |
| No Free Tier | 4/5 | 4 | No free options |
| Channel Access | 3/5 | 6 | r/smallbusiness, r/Entrepreneur |
| Content Potential | 3/5 | 3 | Niche topic, lower search volume |
| AppSumo Fit | 3/5 | 6 | Analytics/reporting tools are harder sells on AppSumo |
| Review Potential | 3/5 | 3 | Moderate |
| MRR Path | 2/5 | 6 | $19-29/mo; narrow audience = MRR cap concerns |
| Build Feasibility | 5/5 | 10 | Read-only QBO API + customer revenue % calculation = 2-3 week MVP |
| Boring Business Bonus | 4/5 | 8 | Small B2B businesses, unglamorous |
| **TOTAL** | | **73/105** | |

**Verdict**: EXPLORE FURTHER — simplest possible build; de-risk by testing demand with landing page before building
**Key Source**: [SaasNiche idea #25](https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026)
**Risk**: Narrow audience; unclear if people will pay $19-29/mo for a single metric

---

### Restaurant POS for Sub-$1M Independent Restaurants — Score: 64/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | Toast, Square, Lightspeed prove market; 1M+ independent restaurants |
| Competitor Weakness | 3/5 | 6 | Toast well-funded but hated; Square dominates; no clear "broken product" opening |
| LTD Viability | 2/5 | 4 | Hardware dependency makes LTD impractical |
| No Free Tier | 4/5 | 4 | No meaningfully free POS |
| Channel Access | 3/5 | 6 | r/restaurateur (50K+), restaurant FB groups |
| Content Potential | 4/5 | 4 | "Toast alternative", "restaurant POS" = high search volume |
| AppSumo Fit | 2/5 | 4 | Hardware requirement = AppSumo incompatible |
| Review Potential | 3/5 | 3 | Restaurateurs review software on G2 |
| MRR Path | 3/5 | 9 | $49/mo flat is compelling but hardware adds friction |
| Build Feasibility | 2/5 | 4 | POS is notoriously complex; hardware compatibility = significant effort |
| Boring Business Bonus | 4/5 | 8 | Restaurants = boring industry |
| **TOTAL** | | **64/105** | |

**Verdict**: PASS for now — hardware dependency kills LTD strategy; Toast/Square well-entrenched; better to build an add-on (recipe costing, loyalty) than compete head-on on POS
**Note**: Our existing `restaurant-operations.md` (recipe costing at 89/105) is a better angle than full POS competition

---

### Multi-Location Franchise Operations Software — Score: 58/105

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 3/5 | 9 | FranConnect and Operandio prove market exists |
| Competitor Weakness | 3/5 | 6 | FranConnect enterprise; Homebase for scheduling; fragmented but competitors exist |
| LTD Viability | 2/5 | 4 | Franchise operators expect SLA + ongoing support |
| No Free Tier | 3/5 | 3 | Some free tools exist |
| Channel Access | 2/5 | 4 | Franchise operators harder to reach affordably |
| Content Potential | 3/5 | 3 | "franchise management software" exists but niche |
| AppSumo Fit | 1/5 | 2 | Not an AppSumo audience; enterprise tools don't sell there |
| Review Potential | 3/5 | 3 | Moderate |
| MRR Path | 3/5 | 9 | Monthly/annual works but complex sales cycles |
| Build Feasibility | 3/5 | 6 | Cross-location reporting is technically complex |
| Boring Business Bonus | 4/5 | 8 | Franchise ops = boring |
| **TOTAL** | | **57/105** | |

**Verdict**: PASS — weak LTD fit, enterprise sales cycle, better served by niche-specific plays already in portfolio (cleaning-service-management.md covers cleaning franchises)

---

## Tier 3: Weak / Pass (Score <55)

None of today's ideas scored below 55. All ideas processed were at least Tier 2.

---

## Top 3 Recommendations

1. **Field Service Management (Micro-Trades)** — Score: 101/105 — Anti-ServiceTitan: flat $49-79/mo, no contracts, live in a day. FSM is our highest-confidence category with consistent quad-source signal for 40+ days. **[See](ideas/shortlisted/field-service-management.md)** | Key source: [ServiceTitan BBB complaints](https://www.bbb.org/us/ca/glendale/profile/digital-marketing/servicetitan-inc-1216-1290182/complaints)

2. **Solo Therapist EHR (SimplePractice Alternative)** — Score: 90/105 ↑5 — **Best new signal of 2026-04-26**: SimplePractice 69% price hike + Youform $18K MRR playbook perfectly match. 75K private-pay therapists = narrowly targetable audience. Attack via r/therapists, DM migration-ready users. LTD at $199-299 = validated by Youform's $35K in first 40 days. **[See](ideas/shortlisted/solo-therapist-practice.md)** | Key source: [CoralEHR alternatives](https://www.coralehr.com/blog/simplepractice-alternatives-private-pay-therapy/)

3. **Automated WIP Reporting for Construction Accountants** — Score: 85/105 (NEW) — Niche but compelling: 8-12 hours/month of Excel work per client = quantifiable time savings. QBO has zero native WIP. Pain score 85/100 on SaasNiche. $59-99 LTD for accountants who pay monthly = easy sell. 4-5 week build with QBO API. **[See](ideas/shortlisted/construction-wip-reporting.md)** | Key source: [Reddit r/accounting](https://www.reddit.com/r/Accounting/comments/1ro3xgl/how_are_you_handling_wip_reports_for_construction/)

---

## Deduplication Notes

All ideas mapped to canonical files as follows:
- "Field Service Mgmt 1-3 Techs" + "FieldLedgr" + "FieldFlow" + "HVAC-Specific Software" + "Mobile-First FSM Micro-Contractors" → `field-service-management.md`
- "Motara US Market" + "Auto Repair Shop Management" → `auto-repair-shop-management.md`
- "Small Landlord PM 1-20 Units" + "Property Management Accidental Landlord" → `property-management.md`
- "Cleaning Service Management" + "Paper-to-Digital Home Services (cleaning)" → `cleaning-service-management.md`
- "Affordable Dispatch Owner-Operator Truckers" + "Small Fleet Trucking Dispatch" + "Owner-Operator Trucking Digitization" → `small-fleet-trucking-tms.md`
- "Solo Therapist EHR" (Reddit + HN/IH both) → `solo-therapist-practice.md`
- "Integrated Tax Workflow Solo/Small CPA" → `tax-professional.md`
- "AI Quoting Trades Suppliers" → `ai-quoting-estimating-trades.md`
- "Legacy Dental Software Disruption" → `dental-practice.md`
- "Funeral Home Tech Modernization" → `funeral-home-management.md`
- "Trade Compliance & Licensing Automation" → `compliance-licensing-trades.md`
- "Lightweight SIS Small Private Schools" → `private-school-tutoring-sis.md`
- "Restaurant POS Sub-$1M Independents" → `restaurant-operations.md` (different angle from recipe costing, scored separately as Tier 2 POS play)

3 new canonical files created today:
- `construction-wip-reporting.md` (new)
- `sales-tax-automation.md` (new)
- `contractor-bid-security.md` (new)

---

*Agent: Idea Evaluator | Date: 2026-04-26 | Sources: 4 raw files | New Tier 1 ideas: 3 | Updated ideas: 12*
