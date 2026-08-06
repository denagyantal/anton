# Idea Evaluation — 2026-08-05

**Sources evaluated**: reddit-2026-08-05, hn-indiehackers-2026-08-05, competitor-analyst-2026-08-05, trends-2026-08-05
**Total raw ideas processed**: 28 distinct ideas across 4 sources
**Evaluator note**: All ideas cross-checked against `ideas/shortlisted/` — no genuinely new ideas today; all map to existing files. Priority action: update Signal History in 10+ shortlisted files with strong new signals.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Trades Contractor Job Costing — QB Desktop EOL Displacement — Score: 91/105
*File: `ideas/shortlisted/ai-job-costing-trades.md` (currently 89/105) — UPDATE with active displacement event*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | QB Desktop EOL May 31, 2026 = active displacement event NOW; $115/mo QBO Plus post-July 2025 hike; 10M+ small contractors on QB |
| Competitor Weakness | 5/5 | 2x | 10 | No QBO job-costing co-pilot exists; Buildertrend $499/mo; Tradify US market underserved; Hardhat Ledger early/unproven |
| LTD Viability | 4/5 | 2x | 8 | $149 LTD vs $115/mo QBO = payback in 1.3 months; "makes QuickBooks do job costing" is a strong AppSumo pitch |
| No Free Tier | 5/5 | 1x | 5 | Contractors already paying QB; paying a layer on top is proven behavior |
| Channel Access | 5/5 | 2x | 10 | r/ContractorTalk, r/HVAC, r/Plumbing, r/Electricians, Mike Holt Forums, "Contractor Business Owners" FB |
| Content Potential | 5/5 | 1x | 5 | "QuickBooks job costing for contractors", "QB Desktop EOL alternative" — highly searchable |
| AppSumo Fit | 5/5 | 2x | 10 | "Makes QuickBooks actually work for job costing" = immediately compelling story |
| Review Potential | 4/5 | 1x | 4 | "Discovered I was losing money on X jobs" = emotionally vivid reviews |
| MRR Path | 4/5 | 3x | 12 | $99/mo after LTD; sticky once receipt photos + job codes are embedded in daily workflow |
| Build Feasibility | 4/5 | 2x | 8 | QBO API + photo OCR + job P&L dashboard = 4–6 weeks; not trivial but well-scoped |
| Boring Business Bonus | 5/5 | 2x | 10 | Contractor job costing = deeply boring, deeply painful |
| **TOTAL** | | | **97/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING — see `ideas/decisions.md`
**New signal today**: QB Desktop EOL (May 31, 2026) creates a right-now, time-pressured migration event for thousands of contractors who relied on local QB Desktop for job costing. Their only alternative is QBO (with worse job costing) or rebuilding their entire stack. "QB job-costing co-pilot" timing is perfect. "Excel rebuilding every month" confirmed as universal workaround (contractors export raw QB data into spreadsheets, apply overhead allocation formulas manually). Credit card trap: 25–35% of job costs go unassigned when credit cards used for materials (40–60% of purchases) = meaningful profitability distortion this tool directly solves.
**Risks**:
1. QBO API dependency — Intuit could break or monetize the API
2. Market education: small contractors don't know what job costing is (must sell the pain, not the feature)
3. Scope creep: "just build proper QB" requests will come; must stay focused on job-costing layer only
**Key Source Links**:
- https://contractortoolstack.com/software/quickbooks/
- https://www.dapt.tech/job-costing/job-costing-in-quickbooks
- https://www.procuredesk.com/quickbooks-job-costing-accuracy-construction/
- https://forums.mikeholt.com/threads/quickbooks-question-s.61243/latest
- https://tradetracktemplate.gumroad.com/l/job-tracking-software
**Signal Frequency**: 12+ mentions across 4+ months — stable and increasing with QB Desktop EOL catalyst

---

### 2. HVAC Maintenance Agreement Renewal Tracker — Score: 91/105
*File: `ideas/shortlisted/hvac-maintenance-agreements.md` (currently 91/105) — UPDATE with new source data*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ServiceTitan $245+/tech/mo, GorillaDesk $49-99/mo mid-tier, no standalone under $30/mo |
| Competitor Weakness | 5/5 | 2x | 10 | No dedicated sub-$30/mo maintenance agreement tracker; all FSM tools bury it behind mid/high tiers |
| LTD Viability | 5/5 | 2x | 10 | $79 LTD; once contracts loaded churn is near zero |
| No Free Tier | 5/5 | 1x | 5 | Revenue-critical business tool; operators pay from day 1 |
| Channel Access | 5/5 | 2x | 10 | r/HVAC 250K+, HVAC-Talk forums, ACCA 60K+ members, FB "HVAC Business Owners Network" |
| Content Potential | 4/5 | 1x | 4 | "HVAC maintenance agreement software", "HVAC service contract tracking" |
| AppSumo Fit | 4/5 | 2x | 8 | "Never lose a contracted visit again" = clean AppSumo headline |
| Review Potential | 3/5 | 1x | 3 | HVAC owners do review; clear ROI story enables authentic reviews |
| MRR Path | 5/5 | 3x | 15 | Maintenance contracts = recurring software need by definition; $19/mo |
| Build Feasibility | 5/5 | 2x | 10 | Reminder logic + agreement tracker = 2–3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC = archetypal boring business |
| **TOTAL** | | | **100/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New signal today**: QuoteIQ lists "maintenance agreement tracking" as a feature at $29.99/mo (HVAC-specific), validating the market at near our target price; Velappity.com confirms "traditionally relied on spreadsheets, paper forms or manual tracking" is the documented standard for small HVAC shops. GorillaDesk requires upgrading to mid-tier for maintenance agreements = confirmed pricing moat at <$30/mo.
**Risks**:
1. Could be positioned as an FSM module — standalone product must clearly target the 80%+ of HVAC shops NOT on ServiceTitan
2. Spreadsheet inertia: "missed visit calculator" on landing page is required to make the pain visible
**Key Source Links**:
- https://www.servicetitan.com/blog/hvac-service-contracts
- https://www.velappity.com/how-do-hvac-companies-track-maintenance-contracts-with-software/
- https://myquoteiq.com/top-8-softwares-for-hvac-in-2026/
**Signal Frequency**: 8+ mentions across 2+ months — stable

---

### 3. Solo HVAC/Trades Dispatch — SoloDispatch — Score: 95/105
*File: `ideas/shortlisted/hvac-small-shop-dispatch.md` (currently 95/105) — UPDATE with FieldPulse add-on trap + ServiceM8 cap data*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ServiceTitan $245–500/tech/mo; HCP $65/mo; Jobber $39/mo (feature-crippled); 500K+ single-tech operations |
| Competitor Weakness | 5/5 | 2x | 10 | FieldPulse $1,000+/yr in add-ons for basic calling/texting; ServiceM8 30-job cap; Jobber Core→Connect = $90/mo cliff; no offline mode at <$100/mo |
| LTD Viability | 5/5 | 2x | 10 | $99 LTD for solo = 2-month payback at $49/mo |
| No Free Tier | 5/5 | 1x | 5 | Field service job management is never free |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, r/Electricians, FB "HVAC Business Owners" 100K+ |
| Content Potential | 3/5 | 1x | 3 | Competitive keyword space; "solo HVAC software" lower competition |
| AppSumo Fit | 5/5 | 2x | 10 | Offline-first + no-caps + flat $49/mo = clear, differentiated AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | "Finally a tool that doesn't punish me for being solo" = authentic reviews |
| MRR Path | 5/5 | 3x | 15 | Core daily workflow; churn near zero once pricebook + customer history loaded |
| Build Feasibility | 4/5 | 2x | 8 | Offline-first architecture is harder; but well-understood with modern frameworks |
| Boring Business Bonus | 5/5 | 2x | 10 | Solo HVAC/plumbing = deeply boring, 500K+ operators |
| **TOTAL** | | | **100/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New signal today**: FieldPulse add-on trap confirmed by 85+ user reviews ("spent over $1,000 in add-ons for basic functionality like calling, texting, and emailing"); ServiceM8 30-job cap makes it "unworkable for real operations" (5-6 calls/day HVAC tech hits cap in one week); Jobber's Core→Connect jump is a 230% price increase to unlock SMS + online booking + reports; offline mobile reliability "universally poor" across all platforms at <$100/mo — confirmed infrastructure investment gap that competitors skip because it's hard.
**Risks**:
1. Offline-first architecture is a real build investment; competitors skip it for a reason
2. ServiceTitan or Jobber could add a sub-$50 "lite" tier at any time
**Key Source Links**:
- https://contractorstackhq.com/fieldpulse-review
- https://fieldservicepro.io/blog/hvac-software-for-small-businesses/
- https://lawncrewpro.com/software/jobber-alternatives/
- https://www.repair-crm.com/2026/05/27/hidden-costs-of-field-service-software-2026-small-business-guide
**Signal Frequency**: 15+ mentions across 3+ months — strong and stable

---

### 4. Pool Service Chemical Log + Route App — Score: 95/105
*File: `ideas/shortlisted/pool-service-route-management.md` (currently 95/105) — UPDATE with chemical log compliance focus*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 15K+ pool service companies; state compliance requirements; GorillaDesk validates market at $49+/mo |
| Competitor Weakness | 5/5 | 2x | 10 | No mobile-first chemical calculator + compliance log at under $15/mo |
| LTD Viability | 5/5 | 2x | 10 | $59 LTD; compliance log history is irreplaceable = near-zero churn |
| No Free Tier | 4/5 | 1x | 4 | Compliance-driven tool; operators pay to protect from liability |
| Channel Access | 5/5 | 2x | 10 | r/sweatystartup, r/pools, Pool & Spa News, Facebook pool service groups (huge) |
| Content Potential | 4/5 | 1x | 4 | "pool service software", "pool chemical log app", "pool tech compliance app" |
| AppSumo Fit | 5/5 | 2x | 10 | "Free Skimmer migration" + compliance protection = double AppSumo hook |
| Review Potential | 4/5 | 1x | 4 | Liability protection + pricing revolt = emotionally charged reviews |
| MRR Path | 4/5 | 3x | 12 | $14/mo solo; Skimmer refugee base large; compliance records = lock-in |
| Build Feasibility | 5/5 | 2x | 10 | Chemical log + QR scan + auto-calculator + PDF export = 3–4 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Pool service = archetypal sweaty startup |
| **TOTAL** | | | **99/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New signal today**: Specific chemical workflow pain documented: pH, chlorine, alkalinity, calcium hardness, cyanuric acid — 5 readings per pool, calculate chemicals to add, log amounts used, all in <5 minutes per stop while jumping in and out of truck. State compliance requirement (liability log if customer gets sick) = non-discretionary need. GorillaDesk $49-149/mo for solo tech "overkill"; PoolPro $65+/mo; Skimmer $99+/mo. No mobile-first chemical calculator + compliance log at under $15/mo confirmed.
**Key Source Links**:
- https://www.pooldial.com/resources/articles/software-reviews/gorilladesk-review
- https://poolverify.io/resources/pool-service-software-guide
- https://www.poolfounder.com/best-pool-service-software
**Signal Frequency**: 6+ mentions across 2+ months — stable

---

### 5. Commercial Cleaning Shift Assignment & Client Communication Hub — Score: 87/105
*File: `ideas/shortlisted/cleaning-service-management.md` (currently 96/105) — UPDATE with commercial-specific shift assignment angle*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | $74B US commercial cleaning; 880K+ businesses; ZenMaid residential-first gap for commercial confirmed |
| Competitor Weakness | 4/5 | 2x | 8 | ZenMaid residential DNA; Jobber generic; Swept $50+/mo (commercial-specific but expensive); Launch27 residential-only |
| LTD Viability | 4/5 | 2x | 8 | $149 LTD; B2B recurring contracts = sticky |
| No Free Tier | 4/5 | 1x | 4 | Commercial cleaning companies have real budgets; staff accountability = must-have |
| Channel Access | 4/5 | 2x | 8 | r/smallbusiness, FB "Cleaning Business Owners" 150K+, commercial cleaning associations |
| Content Potential | 3/5 | 1x | 3 | "commercial cleaning software", "janitorial staff scheduling app" |
| AppSumo Fit | 4/5 | 2x | 8 | "Prove your cleaners showed up" geofencing = compelling AppSumo headline |
| Review Potential | 4/5 | 1x | 4 | Client accountability + staff reliability = high-emotion reviews |
| MRR Path | 4/5 | 3x | 12 | $39/mo up to 10 staff; recurring B2B contracts = high retention |
| Build Feasibility | 4/5 | 2x | 8 | GPS check-in + digital checklists + client report = 5–7 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Commercial cleaning = blue-collar B2B |
| **TOTAL** | | | **86/105** | |

**Verdict**: BUILD (as extension of residential cleaning tool)
**Decision Status**: VALIDATING
**New signal today**: Commercial cleaning has a structurally different problem than residential: multiple locations, multiple teams, shift-based recurring schedules, accountability checklists. ZenMaid "can't get to talk to someone over the phone" + payment processing failures on Capterra. Jobber "somewhat complicated" for commercial. No $25-39/mo commercial cleaning-specific tool with staff shift assignment + client accountability confirmed. $149 LTD on commercial angle fits the "CleanOps" concept already in the shortlisted file.
**Key Source Links**:
- https://fieldservicesoftware.io/comparisons/zenmaid-vs-jobber/
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/
- https://www.estimatty.com/blog/housecall-pro-vs-jobber-vs-zenmaid
**Signal Frequency**: 8+ mentions across 2+ months — stable

---

### 6. AI Voice Receptionist / Dispatch for Trades — Score: 86/105
*File: `ideas/shortlisted/ai-answering-dispatch-trades.md` (currently 82/105) — ↑4 UPDATE: Avoca $1B valuation is landmark validation*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Avoca $125M at $1B valuation (April 2026); 800+ customers; $1B jobs booked this year; IH post $300-$800 MRR per client |
| Competitor Weakness | 4/5 | 2x | 8 | Avoca targets 10+ employee shops; gap = niche verticals + solo operators (pest control, pool service, appliance repair) |
| LTD Viability | 3/5 | 2x | 6 | $299-$499 LTD viable for launch hook; recurring model better long-term |
| No Free Tier | 4/5 | 1x | 4 | HVAC contractor losing $45,600/yr to missed calls = strong willingness to pay |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, trades Facebook groups — same channels as FSM |
| Content Potential | 4/5 | 1x | 4 | "AI answering service for HVAC", "never miss a service call" — growing search interest |
| AppSumo Fit | 4/5 | 2x | 8 | $300 LTD with "never miss a service call" = viable AppSumo launch |
| Review Potential | 3/5 | 1x | 3 | Voice AI reviews tend to be polarizing; needs to work well |
| MRR Path | 4/5 | 3x | 12 | $149/mo SaaS for self-serve operators; white-label to FSM companies |
| Build Feasibility | 4/5 | 2x | 8 | 3-4 weeks using Vapi/Retell + Jobber/HCP webhooks; existing stack is proven |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/plumbing = maximum boring |
| **TOTAL** | | | **88/105** | |

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: VALIDATING
**New signal today**: Avoca AI raised $125M at $1B valuation in April 2026 — single strongest market validation signal to date. 800+ customers; booked $1B in jobs. Investors: Kleiner Perkins (Series A) + Meritech + General Catalyst (Series B). Multiple competitors at lower price points: CloudTalk, LuMay AI, IVA (getivai.com), GoSameday. The white space: (1) Niche voice agents for less-served trades — pest control, lawn care, pool service, appliance repair; (2) Spanish-language voice AI for Hispanic trade contractors; (3) Voice agent + CRM combo for solo operators (Avoca targets 10+ employee shops); (4) White-label for FSM companies to resell. IH post from Jan 2026 shows $300-$800 MRR per client at ~80% margins.
**Key Source Links**:
- https://finance.yahoo.com/sectors/technology/articles/avoca-raises-125m-1b-valuation-124500396.html
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://news.ycombinator.com/item?id=48769010
- https://www.gosameday.com/post/ai-answering-services-features-comparison-for-hvac-and-plumbing-businesses
**Signal Frequency**: 10+ mentions across 3+ months — increasing

---

### 7. Lawn Care EPA Chemical Tracking at Entry Tier — Score: 100/105
*File: `ideas/shortlisted/landscaping-lawn-care.md` (currently 100/105) — UPDATE with FertTrack concept + SA price hike details*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 50K+ fert-and-weed-control operators; only SA has native chemical tracking but SA is collapsing post-acquisition |
| Competitor Weakness | 5/5 | 2x | 10 | SA 25% price hike + Xplor lock-in; Jobber zero EPA spray log; Service Autopilot locking chemical tracking to $199-499/mo tier |
| LTD Viability | 5/5 | 2x | 10 | $179 LTD for "compliance + audit-proof" angle — justified by regulatory risk |
| No Free Tier | 5/5 | 1x | 5 | Compliance tool = mandatory; operators pay to avoid fines |
| Channel Access | 5/5 | 2x | 10 | r/lawncare 918K+, LawnSite.com, FB "Lawn & Landscape Business Owners", state lawn care associations |
| Content Potential | 5/5 | 1x | 5 | "EPA lawn care chemical tracking", "spray log software", "lawn care compliance" |
| AppSumo Fit | 5/5 | 2x | 10 | "The only affordable EPA-compliant chemical tracking for lawn care" = unique story writes itself |
| Review Potential | 4/5 | 1x | 4 | "Avoided $5K fine" = authentic high-value review |
| MRR Path | 5/5 | 3x | 15 | $49/mo; once compliance records are in, churn is near zero (records tied to regulatory history) |
| Build Feasibility | 5/5 | 2x | 10 | Chemical log + route scheduling + inspector PDF export = 4–5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn chemical compliance = deeply boring |
| **TOTAL** | | | **104/105** | |

**Verdict**: BUILD
**Decision Status**: BUILDING (see decisions.md)
**New signal today**: SA price hike 25%+ in 2024-2025 confirmed; Jobber no chemical tracking confirmed; SA locking chemical tracking to $199-499/mo confirmed. "FertTrack" concept: $49/mo for up to 3 trucks, all features included at entry tier (vs SA $199-499/mo for same feature). RealGreen mobile "shuts down unpredictably" = reliability risk for field chemical logging. No affordable solution for 1-3 truck fert operations between free (Yardbook, no tracking) and SA enterprise.
**Key Source Links**:
- https://lawncrewpro.com/software/jobber-alternatives/
- https://lawncrewpro.com/software/service-autopilot-review/
- https://www.itqlick.com/service-autopilot/pricing
- https://myquoteiq.com/best-realgreen-alternative-for-lawn-care-businesses/
**Signal Frequency**: 30+ mentions across 4+ months — max signal

---

### 8. Auto Repair Shop — Local-First + Dual Pricing — Score: 100/105
*File: `ideas/shortlisted/auto-repair-shop-management.md` (currently 100/105) — UPDATE with local-first + cash-discount angle + QB Desktop EOL*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 160K+ independent US repair shops; $3.4B market; active forum demand |
| Competitor Weakness | 5/5 | 2x | 10 | No local/self-hostable data at under $600/yr; no dual pricing at any price point; QB Desktop EOL = live migration event |
| LTD Viability | 5/5 | 2x | 10 | $199 LTD vs $2,400+/yr Tekmetric = 12x first-year price advantage; clear ROI story |
| No Free Tier | 4/5 | 1x | 4 | Auto repair shops have RO volume = clear recurring value |
| Channel Access | 5/5 | 2x | 10 | Diagnostic Network forums (diag.net), r/AutoMechanics, r/MechanicAdvice, FB "Auto Repair Business Owners" |
| Content Potential | 4/5 | 1x | 4 | "auto repair software for small shops", "Tekmetric alternative", "QB Desktop replacement for shops" |
| AppSumo Fit | 5/5 | 2x | 10 | Zero auto repair software on AppSumo = category-first; "local-first data ownership" = unique hook |
| Review Potential | 4/5 | 1x | 4 | Data ownership anxiety is a real emotion = drives authentic reviews |
| MRR Path | 4/5 | 3x | 12 | $89/mo; switching cost once VIN history loaded is high |
| Build Feasibility | 4/5 | 2x | 8 | VIN decoder + RO workflow + dual pricing Stripe + SQLite export = 5–6 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Auto repair = mechanically boring (pun intended) |
| **TOTAL** | | | **95/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New signal today**: Competitor analyst identifies 3 never-before-documented pain points: (1) data ownership anxiety — "I don't like the idea of QB owning my data and having to pay to access it" (solo operators explicitly want local/self-hostable data); (2) dual pricing / cash-discount support — shop owners increasingly want to pass card fees to customers, but Tekmetric and most platforms don't support compliant dual pricing — NO tool provides this cleanly; (3) QB Desktop EOL May 2026 = active migration event forcing shops off local Desktop. "ShopOwner" concept: local-first (SQLite cloud backup), dual/cash-discount billing from day 1, $199 LTD.
**Key Source Links**:
- https://diag.net/msg/m1jep6g86ov9kxlx46oicd7gys
- https://blog.torque360.co/auto-repair-software-pricing-2026/
- https://garageauto.app/auto-repair-software-for-small-shops/
- https://shoprateremover.com/blog/tekmetric-software-review
- https://pro.trackara.app/blog/one-man-shop-software
**Signal Frequency**: 20+ mentions across 3+ months — max signal

---

### 9. Legal Practice Management for Solo Attorneys — SoloDesk — Score: 94/105
*File: `ideas/shortlisted/legal-practice-management.md` (currently 94/105) — UPDATE with simultaneous price hike data*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 450K solo attorneys; 59% not using any PM software; all three major players raised prices simultaneously in 2024-2025 |
| Competitor Weakness | 5/5 | 2x | 10 | Clio $89→$99/user; IOLTA gated behind $89+/mo on every competitor; intake-to-retainer gap = native pain |
| LTD Viability | 4/5 | 2x | 8 | $129 LTD vs $99-149/user/mo at Clio = 1.3-month payback; strong ROI story |
| No Free Tier | 4/5 | 1x | 4 | 41% of solos do budget for software; paying customers exist |
| Channel Access | 4/5 | 2x | 8 | r/Lawyertalk, ABA SOLOSEZ listserv (16K members), Solo Practice University, r/legaladvice |
| Content Potential | 3/5 | 1x | 3 | "Clio alternative for solo attorney", "IOLTA trust accounting software", "law practice management affordable" |
| AppSumo Fit | 4/5 | 2x | 8 | Zero LPM on AppSumo = category-first; "IOLTA included at base tier" is unique story |
| Review Potential | 4/5 | 1x | 4 | "Finally IOLTA at a fair price" = vivid authentic reviews |
| MRR Path | 4/5 | 3x | 12 | $39-49/mo flat; client matter history = irreplaceable; churn low once cases loaded |
| Build Feasibility | 3/5 | 2x | 6 | IOLTA/trust accounting compliance is genuinely complex; 6-8 week MVP conservative |
| Boring Business Bonus | 4/5 | 2x | 8 | Solo legal practice = unglamorous professional services |
| **TOTAL** | | | **92/105** | |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New signal today**: All three major LPM platforms raised prices simultaneously in 2024-2025 — Clio $89→$99/user, MyCase $49→$59 Pro, PracticePanther $59→$69 Business. This simultaneous hike is the largest-ever mass-displacement trigger in legal practice management software. 59% of solo practitioners are NOT using any dedicated PM software (ABA 2024 data). Intake-to-signed-retainer conversion = #1 pain point no PM tool solves natively. Clio starter tier $49 is deliberately crippled (no doc management, no client portal, no reporting) — forces $99/user upgrade.
**Key Source Links**:
- https://owlesq.com/buyer-guides/best-practice-management-software-solo-small-law-firms
- https://practiq.dev/blog/clio-vs-mycase-vs-practicepanther-solo-small-firms
- https://www.practicepanther.com/blog/finding-affordable-legal-practice-management-software-for-solo-attorneys/
- https://capterra.com/law-practice-management-software/
**Signal Frequency**: 15+ mentions across 4+ months — stable

---

### 10. Self-Managed HOA Software — Score: 84/105
*File: `ideas/shortlisted/hoa-community-management.md` (currently 84/105) — UPDATE with new competitors + market sizing*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 355K HOAs; 74M Americans in HOA communities; strong r/HOA Reddit community |
| Competitor Weakness | 4/5 | 2x | 8 | KindHOA $0-29/mo (limited), RunHOA $399/yr, PayHOA $49+/mo (per-unit); gap at $19-29/mo flat for 50-300 units |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD (board pays once, votes on it); governance records = high switching cost |
| No Free Tier | 3/5 | 1x | 3 | Some free tools exist (Google Drive + Venmo); must demonstrate clear value above free |
| Channel Access | 4/5 | 2x | 8 | r/HOA, HOA Facebook groups, state HOA associations |
| Content Potential | 3/5 | 1x | 3 | "self-managed HOA software", "volunteer HOA board software" |
| AppSumo Fit | 4/5 | 2x | 8 | "Flat $24/mo for unlimited units" is a compelling HOA board pitch |
| Review Potential | 3/5 | 1x | 3 | HOA boards are not prolific reviewers; but governance records create authentic stories |
| MRR Path | 4/5 | 3x | 12 | $24/mo recurring; board turnover = retention risk; document storage = lock-in |
| Build Feasibility | 4/5 | 2x | 8 | Dues collection + violations + doc storage + resident portal = 5–7 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | HOA management = unglamorous volunteer work |
| **TOTAL** | | | **84/105** | |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New signal today**: 355K HOAs in the US; 74M Americans live in HOA communities. Confirmed competitor landscape: KindHOA ($0-29/mo, limited features), RunHOA ($399/yr flat), PayHOA ($49+/mo per-unit banded). Gap: no tool at $19-29/mo flat that covers dues + violations + maintenance requests + document storage + resident portal for the 50-300 unit sweet spot. Assembly HOA (YC S2024) validation still holds — but YC-backed = may be going upmarket faster.
**Risks**:
1. Volunteer boards are notoriously slow decision-makers
2. Google Drive + Venmo is "good enough" for very small HOAs
3. YC-funded Assembly HOA moving upmarket could squeeze the mid tier
**Key Source Links**:
- https://kindhoa.com/alternatives/best-self-managed-hoa-software
- https://affordablehoa.com/guides/best-hoa-management-software
- https://www.community.solume.com/blog/best-hoa-management-software-self-managed-boards
**Signal Frequency**: 4+ mentions across 3+ months — stable

---

### 11. Auto Detailing Pre/Post Inspection Photo Workflow — Score: 88/105
*File: `ideas/shortlisted/pressure-washing-detailing.md` (currently 95/105) — UPDATE with structured pre/post inspection angle*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 50K+ detailing businesses; $18.7B market; MobileWash 1M+ users validates demand |
| Competitor Weakness | 4/5 | 2x | 8 | QuoteIQ generic photo field; Jobber no structured inspection; no sub-$20/mo detailing-specific tool |
| LTD Viability | 4/5 | 2x | 8 | $69 LTD; photo data is sticky; liability protection is a real ROI story |
| No Free Tier | 4/5 | 1x | 4 | High-ticket service ($150-1000) = clear willingness to pay for liability protection |
| Channel Access | 4/5 | 2x | 8 | r/AutoDetailing 600K+, detailing Facebook groups, IDA (International Detailing Association) |
| Content Potential | 3/5 | 1x | 3 | "auto detailing inspection app", "detailing before after photos" |
| AppSumo Fit | 4/5 | 2x | 8 | Vehicle condition report + upsell photo = unique AppSumo story |
| Review Potential | 4/5 | 1x | 4 | "Saved me from a damage claim" = compelling authentic review |
| MRR Path | 4/5 | 3x | 12 | $17/mo solo; photo history per vehicle = lock-in once loaded |
| Build Feasibility | 5/5 | 2x | 10 | Photo capture + damage tagging + customer share = well-understood mobile stack |
| Boring Business Bonus | 4/5 | 2x | 8 | Auto detailing = blue-collar service business |
| **TOTAL** | | | **85/105** | |

**Verdict**: BUILD (as feature of DetailDesk / pressure-washing tool)
**Decision Status**: VALIDATING
**New signal today**: Mobile auto detailers have a specific liability workflow: pre-service inspection photos (protect against damage claims), during-service progress photos, post-service delivery photos. Beyond liability, the photo workflow enables upsell identification ("engine bay is filthy — want to add engine detail for $X?") and review solicitation. QuoteIQ's "photo capture" is a generic field, not a structured pre/post inspection workflow with condition tagging. Currently most detailers text photos to themselves or use Google Photos albums named by customer — completely unmanaged.
**Key Source Links**:
- https://myquoteiq.com/top-8-softwares-for-auto-detailing-in-2026/
- https://stackshare.io/stackups/easy-auto-detailing-software-vs-invoicera
**Signal Frequency**: 8+ mentions across 2+ months — stable

---

## Tier 2: Worth Exploring (Score 55–74)

### 12. Property Management for Small Landlords — Score: 72/105
*File: `ideas/shortlisted/property-management.md` — UPDATE*

**New signal today**: $24.18B market in 2024 growing to $52.21B by 2032 (IH market data). Pickspace "intelligent automation rather than just digitization" = AI angle emerging. TenantCloud free tier for <75 units confirmed. DoorLoop modern UI growing. Key gap: state-specific compliance layer (eviction law, security deposit rules vary by state) — no tool surfaces this.
**Score rationale**: Market is maturing — TenantCloud, DoorLoop, Pickspace all targeting this space. Differentiation requires niche focus (state compliance, STR-to-LTR workflow). Rating slightly lower than prior shortlisted score as more competition confirmed.
**Key Source Links**: https://pickspace.com/blog/best-property-management-software-small-landlords, https://www.tenantcloud.com/property-management/best-property-management-software-for-landlords-in-usa

### 13. Pressure Washing Weather-Aware Rescheduling — Score: 68/105
*File: `ideas/shortlisted/pressure-washing-detailing.md` — UPDATE*

**New signal today**: Weather-rescheduling is a real, quantified pain: 1-2 hours of admin per weather event rescheduling 6-8 customers. QuoteIQ "mentions weather awareness but it's not a full product." The specific workflow: monitor forecast for job ZIP codes, flag jobs at risk 48-72hrs out, auto-text customers with rescheduling options, collect preference, rebuild route. No dedicated weather-rescheduling automation for exterior service businesses.
**Score rationale**: Strong pain, but likely a feature within a scheduling tool rather than a standalone product. TAM is narrower as standalone. Best built into the broader exterior cleaning tool already in shortlisted/pressure-washing-detailing.md.
**Key Source Links**: https://myquoteiq.com/top-8-softwares-for-pressure-washing-in-2026/

### 14. Trades 1099 Quarterly Tax Estimator — Score: 62/105
*File: `ideas/shortlisted/bookkeeping-accounting.md` — UPDATE*

**New signal today**: Keeper Tax $10M+ ARR validates self-employed tax software market; FlyFin AI-focused at $199/yr; no tool integrates with Jobber/Housecall Pro to pull job revenue and auto-calculate quarterly estimates with trades-specific deductions. The specific gap: a tool that connects to their invoicing workflow, sees what they made this quarter, and says "set aside $X by April 15th."
**Score rationale**: Keeper Tax and FlyFin already exist and serve adjacent market. Differentiation is the Jobber/HCP integration for automatic revenue calculation. Low LTD ($39) limits AppSumo revenue. Viable as a feature within the trades bookkeeping product, not standalone.
**Key Source Links**: https://spacetech.dealroom.co/companies/keeper_tax, https://wise.com/us/blog/quickbooks-self-employed

### 15. Small Fleet & Owner-Operator Trucking TMS — Score: 60/105
*File: `ideas/shortlisted/small-fleet-tms.md` — UPDATE*

**New signal today**: Truckpedia $300/mo for 10 trucks; DAT One $49/mo freight matching. AI dispatcher concept (virtual dispatchers that match loads, call brokers, update drivers via SMS). Fleets implementing automation report 40-60% lower admin workload.
**Score rationale**: Market confirmed, but complex compliance requirements (ELD integrations, HOS logs, FMCSA) make build harder than home services verticals. Less "boring bonus" than pure trades. Some competitors already exist.

### 16. AI Roofing Estimating — Score: 67/105
*File: `ideas/shortlisted/roofing-contractor-crm.md` — UPDATE*

**New signal today**: 24% of contractors now use AI for cost estimation, 22% for bid management. QuoteIQ (AI quotes from job-site photos) and Beam AI (drawing-to-estimate) confirmed active competitors. White space: lightweight AI estimating for 1-5 person roofing crews (not full ServiceTitan), insurance claim workflow assistant for storm damage roofing.
**Score rationale**: Market is real but getting competitive (QuoteIQ, Beam AI, XBuild all active). Insurance claim workflow assistant is the clearest remaining white space.

### 17. Dental Practice Management — Cloud-Native — Score: 65/105
*File: `ideas/shortlisted/dental-practice.md` — UPDATE*

**New signal today**: $3.1B market 2026 growing to $6.4B by 2033. Cloud disruption happening: Oryx Dental (Google Cloud, no PE ownership), PatientDesk.ai active. 61% market share in cloud/web. Key friction: switching causes 15% more claim denials short-term. Best white space: AI pre-authorization and insurance claim assistant (standalone tool, not full PMS).
**Score rationale**: Full PMS is 6-12 month build with regulatory complexity. AI claim assistant is the faster, clearer opportunity.

### 18. Compliance & Licensing Automation for Trades — Score: 71/105
*File: `ideas/shortlisted/compliance-licensing-trades.md` — UPDATE*

**New signal today**: 1 in 3 small business owners say compliance has prevented them from pursuing new opportunities. Generic tools (Vanta, Drata) serve tech companies, not trades. No tool for HVAC EPA 608 tracking, pest control chemical licensing, electrical permit tracking, plumbing backflow certification, OSHA checklists. 2-3 week MVP for license/certification reminder.
**Score rationale**: Compliance angle is strong but overlaps heavily with EPA 608 (already in Tier 1 as part of HVAC/lawn care tools). Best as a bundled feature, not standalone. However, employee certification dashboard for HVAC companies is a specific untapped angle.

### 19. EPA 608 Refrigerant Tracking for HVAC Technicians — Score: 75/105
*File: could go into `hvac-small-shop-dispatch.md` or `compliance-licensing-trades.md` — UPDATE both*

**New signal today**: Under EPA Section 608, HVAC technicians must maintain records of refrigerant recovery/addition per equipment unit. 400K+ EPA 608-certified techs. R-22 phaseout + R-410A changes increasing compliance importance. No standalone EPA 608-compliant refrigerant log mobile app at under $20/mo. Very low build cost.
**Score rationale**: Strong compliance angle, narrow market (HVAC only), simple build. Better as a bundled feature in hvac-small-shop-dispatch product than standalone. Score of 75 puts it at the Tier 1 border — valid as feature within HVAC tool, weaker as standalone.

### 20. Boutique Hotel PMS — Score: 70/105
*File: `ideas/shortlisted/boutique-hotel-pms.md` — UPDATE*

**New signal today**: HN thread confirms "only ~2 main providers, both garbage" (2024 thread, 70pts). The specific gap: independent hotels (5-30 rooms) and B&Bs with no mobile-first, no 12-month contracts, fast onboarding option. AppSumo LTD at $149-199 viable for boutique hotel owners.
**Score rationale**: Real gap, but hotel PMS is operationally complex (OTA channel sync, property-specific requirements). Build risk is higher than standard CRUD trades tools.

### 21. Bookkeeping & Financial Ops for Trades (HN Signal) — Score: 71/105
*File: `ideas/shortlisted/bookkeeping-accounting.md` — UPDATE*

**New signal today**: HN comment upvoted "Look at bookkeeping. Not taxes. Super lucrative and easy to do." IH case studies showing $14k-$15k MRR achievable in services+SaaS hybrid. US CPA shortage (65% are 55+) = software-enabled alternatives in demand. $99/mo trades job-costing tool that imports from QuickBooks or Housecall Pro.
**Score rationale**: Overlaps heavily with ai-job-costing-trades.md (already Tier 1 at 91/105). This signal reinforces the existing idea rather than adding new angle.

### 22. Pasture/Small Farm Management — Score: 64/105
*File: `ideas/shortlisted/agricultural-farm-management.md` — UPDATE*

**New signal today**: PastureGG.com is live (built in "few evenings" of vibe coding, 1 daily user = founder). HN reception: "Vertical SaaS for poultry producers is not something I was expecting to see!" Adjacent: broader "small farm operations" SaaS (poultry + market gardens + CSA subscriptions + farmers market inventory).
**Score rationale**: Very passionate niche community. Market is small. PastureGG already exists (pre-revenue). Best opportunity is broader "small farm ops" that covers more than just poultry.

---

## Tier 3: Weak / Pass (Score < 55)

| Idea | Score | Reason |
|------|-------|--------|
| Construction & Field Project Scheduling (HN) | 52/105 | Complex enterprise market; Primavera P6 + MS Project entrenched; 6+ month build for any serious entry |
| Niche Event Timer / Presentation Tools (Stagetimer adjacent) | 45/105 | Stagetimer is already built and profitable; adjacent niches require separate discovery research; not boring business |
| Autonomous Home Services Business Platform (HN Show HN) | 58/105 | More agency/managed-service than SaaS at this stage; overlaps completely with ai-answering-dispatch-trades.md |

---

## Top 3 Recommendations

### 1. Trades Contractor Job Costing — QB Desktop EOL Window
**Score: 91/105** | **Verdict: BUILD NOW**
QB Desktop EOL (May 31, 2026) is a right-now, time-pressured displacement event. Thousands of contractors who relied on local QB Desktop for job costing must migrate to QBO (with worse job costing) or rebuild their stack. A "QBO job-costing co-pilot" that auto-assigns credit card purchases to jobs using receipt photo OCR + shows real-time per-job P&L is perfectly timed. Revenue: $149 LTD on AppSumo. $99/mo after. Target: r/ContractorTalk, Mike Holt Electrical Forums.
**Key source**: https://contractortoolstack.com/software/quickbooks/

### 2. HVAC Maintenance Agreement Renewal Tracker
**Score: 91/105** | **Verdict: BUILD**
100K+ HVAC contractors; 55% of revenue is agreement-based; no standalone tool under $100/mo tracks whether contracted visits actually happened. ServiceTitan $245/tech/mo is the only option — overkill for a 2-person shop. The build is simple: customer + contract start date + equipment type → auto-schedule service reminders + track completions. $19/mo flat, $79 LTD. Near-zero churn once contracts are loaded.
**Key source**: https://www.velappity.com/how-do-hvac-companies-track-maintenance-contracts-with-software/

### 3. AI Voice Receptionist for Trades (Solo/Niche Verticals)
**Score: 86/105** | **Verdict: EXPLORE FURTHER → BUILD**
Avoca's $125M at $1B valuation is the single strongest market validation signal to date — confirms "last large undigitized B2B vertical in US." The white space: Avoca targets 10+ employee shops; nobody has built the self-serve $149/mo SaaS for solo operators + niche verticals (pest control, pool service, appliance repair). 3-4 week MVP using Vapi/Retell + scheduling webhooks. $300-500 LTD viable.
**Key source**: https://finance.yahoo.com/sectors/technology/articles/avoca-raises-125m-1b-valuation-124500396.html

---

## Meta-Patterns Observed Today

**Pattern 1: The EOL Displacement Opportunity (NEW)**
QuickBooks Desktop EOL (May 31, 2026) is a live, active, time-pressured migration event. The same pattern applies: Mitchell 1 (Windows-only, dated), RepairShopr (broken email/SMS for 16+ months). Every legacy "desktop-only" incumbent creates its own switching moment when EOL arrives.

**Pattern 2: The Add-On Trap (Confirmed)**
FieldPulse charges $1,000+/yr in add-ons for calling/texting/emailing. Jobber's Core→Connect is a 230% price increase. Service Autopilot locks chemical tracking to $199-499/mo. The opportunity: transparent, all-inclusive pricing at a realistic entry point.

**Pattern 3: The Compliance Moat (Confirmed at Scale)**
EPA 608 refrigerant tracking, lawn care chemical compliance, pool service chemistry logs, IOLTA trust accounting — compliance-tied features create the highest retention because customers can never leave without migrating regulatory records. Every tool that embeds compliance into the core workflow creates a structural moat.

**Pattern 4: Vertical AI Agents Replacing Horizontal SaaS (Avoca Validation)**
Avoca $1B + Housecall Pro adding $96K new MRR from trade-specific packages = macro trend confirmation. Horizontal SaaS funding down 35% YoY; vertical SaaS holding flat. Every boring industry that hasn't had its "Avoca moment" yet is an opportunity: pool service, irrigation, appliance repair, commercial window cleaning, food trucks.
