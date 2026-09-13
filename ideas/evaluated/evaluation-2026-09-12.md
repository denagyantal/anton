# Idea Evaluation — 2026-09-12

## Source Files Reviewed
- `reddit-2026-09-12.md` — 12 ideas from r/selfemployed, r/smallbusiness, r/PropertyManagement, r/CRM, r/HVAC, r/Contractor, r/ServiceTitanFAQ
- `hn-indiehackers-2026-09-12.md` — 14 products/milestones from HN & Indie Hackers (Show HN, Ask HN, IH revenue milestones)
- `competitor-analysis-2026-09-12.md` — 4 deep-dives: Field Service (HVAC/plumbing/electrical), Auto Repair, Gym/Fitness, Landscaping, Legal
- `trends-2026-09-12.md` — 7 macro trend signals (VC funding, YC launches, market data, vertical SaaS stats)

## Deduplication Notes
Cross-referenced against 100+ existing shortlisted files. Key decisions:
- DispatchCore / Missed-Call-Dispatch → folds into new `field-service-management.md` (canonical per agent rules)
- ServiceTitan BI Reporting Add-on → folds into `field-service-management.md` as an angle
- Landscaping/CrewProfit concept → update existing `landscaping-lawn-care.md`
- StudioStack/Boutique Fitness → update existing `gym-fitness-management.md`
- Isonq CNC Quoting → update existing `machine-shop-job-tracking.md`
- CraftBoop+ SMS Follow-up → update existing `local-service-marketing-automation.md`
- Property Manager Inspection + Tenant Comms + Vendor Invoice → merge into new `property-management.md`
- QuoteIQ / competitor traction signal only → no new file

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. HVAC / Plumbing / Electrical FSM for 3–15 Technicians (FieldFlow) — Score: 95/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $772M FY2025 revenue; Jobber serves 300K+ contractors; active r/ServiceTitanFAQ and r/hvacpeople confirm paying customers venting |
| Competitor Weakness | 5/5 | ST 2-year contracts + data hostage + $5-50K onboarding; Jobber no offline mode + texting locked at $249/mo; FieldEdge payment deception (told 2.7%, charged 3.4%); Housecall Pro per-user stacking |
| LTD Viability | 4/5 | $299–399 LTD per competitor analyst; HVAC/plumbing shops understand software investment |
| No Free Tier | 5/5 | No credible free FSM alternative for 3-15 tech shops |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/Electricians, r/ContractorTalk, ACCA forums, Facebook "HVAC Business Owners" |
| Content Potential | 4/5 | "ServiceTitan alternative small shop", "Jobber for HVAC 3-15 techs", "field service software flat pricing" |
| AppSumo Fit | 4/5 | Field service tools have sold on AppSumo; price-sensitive buyers; clear pain |
| Review Potential | 4/5 | B2B service software = motivated reviewers on G2/Capterra |
| MRR Path | 5/5 | Maintenance agreement automation drives native recurring; $149–249/mo after LTD phase |
| Build Feasibility | 3/5 | Full FSM is complex: scheduling, dispatch, equipment-level tracking, offline mode, 2-way SMS — 6-10 weeks minimum |
| Boring Business Bonus | 5/5 | HVAC, plumbing, electrical — deeply boring, non-technical buyers, loyalty once adopted |

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Interview 20 HVAC/plumbing shop owners (3-15 techs); validate offline need; build scheduling + dispatch + 2-way SMS MVP; differentiate on flat pricing + no contract
**Risks**: FSM build complexity underestimated; ST contracts keep shops locked despite complaints; DispatchCore, Feldy, and Netic AI already building adjacent products
**Key Source Links**:
- https://projul.com/blog/servicetitan-pricing-analysis-2026/
- https://fieldcamp.ai/reviews/servicetitan/
- https://capterra.com/p/150053/ServiceTitan/reviews/
- https://www.reddit.com/r/ServiceTitanFAQ/comments/1sxcdnl/service_titan_problems/
- https://www.reddit.com/r/hvacpeople/comments/1rv1xlf/service_titan_alternative_for_small_hvac_operation/
- https://fieldservicecompare.com/articles/jobber-review-2026/
**Signal Frequency**: 8 distinct sources across competitor analysis + reddit — strong, increasing (VC money validating category)

---

### 2. Solo Contractor FSM — Quote, Invoice, Schedule for 1-Person Ops (RigKit-style) — Score: 93/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Multiple Reddit threads; RigKit built after founder interviews with solo contractors; Bizzen gaining traction; Documentorium has "hundreds of paying users, almost all renewed their yearly" |
| Competitor Weakness | 5/5 | Jobber $29-199+/mo "assumes infrastructure you don't have" for solo ops; HCP nickel-and-dimes add-ons; ServiceTitan enterprise-only |
| LTD Viability | 5/5 | $49-59 LTD resonates strongly with solo operators who hate subscriptions; IH confirms "hundreds paying $59-99 LTD" in this segment |
| No Free Tier | 4/5 | Paper/Google Sheets as fallback, but operators show they want to move up |
| Channel Access | 5/5 | r/selfemployed, r/HandymanBusiness, r/SmallBusinessOwners — very active communities with exact ICP |
| Content Potential | 4/5 | "one-man contractor software", "best Jobber alternative solo", "simplest field service app" |
| AppSumo Fit | 5/5 | Simplicity is an elite AppSumo narrative; "anti-Jobber for solos" is a compelling pitch |
| Review Potential | 4/5 | Solo operators vocal when they find something that works |
| MRR Path | 3/5 | Solo operators price-sensitive; $19-29/mo MRR after LTD phase; lower ARPU ceiling |
| Build Feasibility | 5/5 | MVP is genuinely simple: quote from phone in 30 seconds, collect payment, log job — 3-4 weeks |
| Boring Business Bonus | 5/5 | Solo plumbers, electricians, handymen — maximally boring, non-technical |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build "quote from phone in 30 seconds" MVP; no dispatching, no fleet, no reporting; beta with 20 solo contractors from r/selfemployed; launch $49 LTD on AppSumo
**Risks**: RigKit and Bizzen already building this; solo operators have very low ARPU; hard to grow MRR beyond solo market without upsell
**Key Source Links**:
- https://www.reddit.com/r/selfemployed/comments/1rsfr43/usa_best_jobber_alternatives_for_a_one_person/
- https://www.reddit.com/r/smallbusiness/comments/1r68c3w/is_jobberservicetitan_overkill_for_solo_guys_i/
- https://news.ycombinator.com/item?id=47540841 (Documentorium — "hundreds of paying users, almost all renewed")
- https://documentorium.com
**Signal Frequency**: 3+ threads across multiple subreddits; consistent pain; stable

---

### 3. Independent Auto Repair Shop Management — 1–5 Bays (BayIQ Lite) — Score: 92/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 130K independent auto shops in US; Mitchell 1 widely adopted (proves WTP); Tekmetric $199-399/mo validates premium tier |
| Competitor Weakness | 5/5 | Mitchell 1 dated/no cloud sync/accountant can't pull reports; Tekmetric can't assign 2 techs to one job; Shop-Ware $999/mo ultimate; all require strong internet (offline gap) |
| LTD Viability | 4/5 | $79-149 LTD; shop owners are small business operators who respond to LTD |
| No Free Tier | 5/5 | No credible free alternative at 1-5 bay scale |
| Channel Access | 4/5 | r/MechanicAdvice, r/AutoRepair, Facebook "Independent Auto Repair Shop Owners", NAPA community forums, iATN |
| Content Potential | 4/5 | "Mitchell 1 alternative", "auto shop management software independent", "digital vehicle inspection app" |
| AppSumo Fit | 4/5 | Service business tools sell consistently on AppSumo |
| Review Potential | 4/5 | Shop owners motivated to review if product saves significant time |
| MRR Path | 4/5 | Auto shops are reliable recurring SaaS customers; high retention once POS-integrated |
| Build Feasibility | 4/5 | Digital inspection + photo capture → customer text approval → RO + invoice → payment link — 5-6 weeks |
| Boring Business Bonus | 5/5 | Auto repair — deeply boring, non-technical operators, loyal customers |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Target 1-3 bay independent shops; build digital inspection → customer text approval (yes/no) → invoice as core MVP; $99/mo flat or $79-149 LTD
**Risks**: Tekmetric and Shop-Ware are well-funded competitors; AutoLeap is aggressive; digital inspection adoption still below 40% — education needed
**Key Source Links**:
- https://www.g2.com/compare/mitchell-1-automotive-repair-vs-tekmetric
- https://www.capterra.com/p/190952/Tekmetric/reviews/
- https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown
- https://wrenchpilot.io/blog/best-shop-management-software-independent-auto
- https://blog.torque360.co/auto-repair-software-pricing-2026/
**Signal Frequency**: 6 sources in competitor analysis; stable, well-validated category

---

### 4. On-Site Photo-to-Quote / AI Field Estimation (Feldy angle) — Score: 91/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | HVAC contractor switched tools specifically for photo-to-quote; Feldy (YC S26) reached 200+ paying customers in months; Digs $25.3M from Builders FirstSource |
| Competitor Weakness | 4/5 | Jobber quote builder "slow with many line items"; SimplyWise partial solution; EagleView $60-120/report for aerial only; no tool nails "estimate before leaving the driveway" end-to-end |
| LTD Viability | 5/5 | Clear ROI: "send estimates same-day vs 3 days later = win more jobs"; $79-299 LTD for contractor who wins 1 extra job/month |
| No Free Tier | 5/5 | EagleView charges per-report; no free AI estimation tool |
| Channel Access | 5/5 | r/AskContractors, r/Roofing, r/HVAC, r/smallbusiness — active communities with exact ICP |
| Content Potential | 4/5 | "roofing estimate app", "on-site quoting mobile app", "AI contractor estimate", "photo to invoice app" |
| AppSumo Fit | 4/5 | Clear ROI story; quantifiable value per estimate; AppSumo audience loves mobile tools |
| Review Potential | 4/5 | Contractors will review if it genuinely speeds up closing jobs |
| MRR Path | 4/5 | $39-59/mo for unlimited estimates after LTD; strong retention due to daily use |
| Build Feasibility | 4/5 | Photo → GPT-4o Vision / Claude Vision → line items from price book → PDF → e-sign → Stripe; 5-6 weeks |
| Boring Business Bonus | 5/5 | HVAC, roofing, plumbing, painting — maximally boring trades |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Start with one trade (roofing or HVAC); photo → AI line items → PDF quote → customer e-sign → Stripe; $79-99 LTD launch on AppSumo
**Risks**: Feldy (YC-backed) building similar; EagleView entrenched for aerial measurement; AI vision accuracy varies by trade complexity
**Key Source Links**:
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/
- https://www.reddit.com/r/AskContractors/comments/1rqe9ux/small_trade_business_ownerswhat_job/
- https://www.constructionindustry.ai/funding/digs-25-3m-series-a-builders-firstsource/
- https://fieldcamp.ai/blog/how-ai-is-transforming-field-service-management/
**Signal Frequency**: 3 corroborating signals (Reddit + YC launch + funding news) — strong, increasing

---

### 5. Landscaping & Lawn Care Business OS — Score: 99/105 (STABLE)
**→ EXISTING: Update `landscaping-lawn-care.md` (Signal History only)**

New signals 2026-09-12:
- Competitor analysis "CrewProfit" concept: route optimization + real-time job costing + satellite measurement at $79/mo — confirmed vs LMN $199/mo locking job costing behind Pro tier
- Crew Control route optimization confirmed capped at 25 properties (dealbreaker for busy crews)
- Aspire "entire system feels 3 years behind AI trend" + "expensive then add-ons increase price" — direct Capterra 2026 quotes
- QuoteIQ gaining vs Jobber on satellite measurement inclusion + flat pricing — validates FSM pricing/feature arbitrage model
- ZenMaid $3M/yr referenced as adjacent playbook proof — "GorillaDesk model for landscaping" angle confirmed
- AppSumo: zero dedicated lawn care route optimization tool = first-mover confirmed

---

### 6. Boutique Fitness Studio Management (StudioStack / Mindbody Alternative) — Score: 89/105 (↑ from 93)
**→ EXISTING: Update `gym-fitness-management.md` (Signal History)**

New signals 2026-09-12:
- Competitor analysis: Mindbody true cost 131% higher than advertised (marketplace commissions + processing markup + add-ons) — StudioGrowth pricing guide 2026
- 88+ Reddit threads documenting Mindbody cancellation friction — VibeFam Reddit analysis 2026
- TeamUp highest-rated in segment (reputation validates market appetite for transparent-priced alternatives)
- Glofox post-ABC Fitness acquisition: no published pricing, must negotiate, often pay more — widening the gap
- PushPress add-ons total $600+/mo (branded app $97, Grow CRM $329) — confirmed
- 85K US boutique studios, $5K-30K/mo revenue — can't absorb $800-1,200/mo all-in Mindbody cost
- AppSumo potential confirmed: fitness/wellness tools sell extremely well; Mindbody hatred creates receptive audience

---

### 7. Solo Attorney Practice Management — IOLTA-First (SoloLedger) — Score: 88/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 450K solo attorneys in US (ABA 2025); Clio is unicorn ($1B+ valuation) proving massive market; MyCase validates mid-market |
| Competitor Weakness | 5/5 | Clio trust accounting requires $39/mo add-on on top of $79/user; CosmoLex 2-user minimum forces $198/mo floor for solo; nobody positions IOLTA as headline feature |
| LTD Viability | 4/5 | $149 one-time; attorneys are extremely cost-conscious and hate recurring fees |
| No Free Tier | 5/5 | No credible free legal practice management tool; bar compliance is must-have |
| Channel Access | 4/5 | ABA Solosez listserv (10K+ members), r/Lawyertalk, r/soloattorney, state bar publications, LinkedIn legal groups |
| Content Potential | 4/5 | "solo attorney practice management", "IOLTA compliance software", "Clio alternative solo attorney", "trust accounting for lawyers" |
| AppSumo Fit | 4/5 | Lawcus and Briefcase have launched on AppSumo; legal software buyers respond well to transparent pricing |
| Review Potential | 4/5 | Attorneys write detailed reviews; professional buyers are vocal |
| MRR Path | 5/5 | Trust accounting/compliance drives extremely high retention; bar discipline risk = sticky; $59/mo after LTD |
| Build Feasibility | 3/5 | Trust ledger + IOLTA 3-way reconciliation requires careful compliance implementation; 6-8 weeks |
| Boring Business Bonus | 4/5 | Solo law practices — unglamorous professional services, non-technical buyers |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate IOLTA trust accounting requirements with 10 solo attorneys; hire a paralegal advisor for compliance QA; build 3-way reconciliation as MVP core feature
**Risks**: Bar compliance mistakes are catastrophic; compliance implementation requires legal domain knowledge; Clio ecosystem lock-in is real and hard to break; building bar-audit-ready reports is non-trivial
**Key Source Links**:
- https://mylegalacademy.com/kb/case-management-software-comparison-2026
- https://www.accountingatelier.com/blog/clio-pricing
- https://alignedcpa.com/best-legal-accounting-software/
- https://stephsbooks.com/blog/best-software-law-firm-bookkeeping
- https://capterra.com/p/105428/Clio/reviews/
**Signal Frequency**: Single deep competitor analysis with comprehensive pricing data — strong signal, first appearance

---

### 8. Septic Pumping & Niche Trade Verticals Software — Score: 85/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 7,717 US septic operators; ServiceCore existing player (proves market pays); PumpDocket at $99-454/mo confirms WTP |
| Competitor Weakness | 4/5 | PumpDocket gates key features at $230+; SepticCycle missing revenue recovery angle; no compliance-native tool |
| LTD Viability | 5/5 | $299 LTD; small operators are price-sensitive; compliance tools are painkiller-level ROI |
| No Free Tier | 5/5 | Regulatory compliance = mandatory payment; state inspection records required |
| Channel Access | 3/5 | NOWRA, r/plumbing, trade Facebook groups — smaller, but targeted |
| Content Potential | 3/5 | "septic pumping software", "septic dispatch management", "septic compliance tracking" |
| AppSumo Fit | 4/5 | Niche = less AppSumo competition; compliance angle sells; clear value prop |
| Review Potential | 3/5 | Small market, fewer reviewers, but motivated |
| MRR Path | 4/5 | Recurring 3-5 year service cycles drive recurring reminder and billing revenue |
| Build Feasibility | 4/5 | Dispatch + compliance records + recurring reminders + due-book mining — 5-6 weeks |
| Boring Business Bonus | 5/5 | Septic pumping — maximum boring; no VC will ever build this |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Read StartupHeist analysis; interview 10 septic operators; build due-book mining (find overdue customers from existing records) + recurring service reminder + compliance log MVP; $299 LTD
**Risks**: TAM ceiling ~$96K MRR at 5% penetration (lifestyle business, not VC-scale); distribution channels are niche and harder to reach
**Key Source Links**:
- https://www.startupheist.com/housecall-pro-skipped-septic-thats-a-96k-mrr-opening/
- https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/ (Housecall Pro trade specialization leaving niches)
**Signal Frequency**: Strong signal from trend spotter; adjacent to pest control/chimney which also have strong existing signals

---

### 9. Home Improvement Contractor CRM (Remodeler Lead Management) — Score: 84/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Builder Prime $80K+/mo revenue proves massive demand; Procore gap analysis explicitly names residential remodeler CRM as empty market |
| Competitor Weakness | 4/5 | No generic CRM handles home show leads, in-home demos, design-to-sign pipeline well; HubSpot/Salesforce overkill |
| LTD Viability | 3/5 | Home improvement contractors may prefer subscription; $79-99 LTD possible but less natural |
| No Free Tier | 5/5 | High-ticket contractors pay; lead management is revenue-critical |
| Channel Access | 4/5 | r/HomeImprovement, r/Contractor, remodeler Facebook groups, home show communities, Angi/HomeAdvisor partner forums |
| Content Potential | 4/5 | "home improvement CRM", "remodeler software", "window contractor CRM", "kitchen remodeler lead management" |
| AppSumo Fit | 3/5 | Longer sales cycle than typical LTD buyer; moderate AppSumo fit |
| Review Potential | 3/5 | Contractors are less prolific reviewers |
| MRR Path | 5/5 | CRM/lead management is inherently recurring; high ARPU potential ($79-149/mo) |
| Build Feasibility | 3/5 | Lead pipeline + in-home demo scheduler + proposal generator + e-sign + job scheduling — 6-8 weeks |
| Boring Business Bonus | 4/5 | Kitchen remodelers, window/door replacement — unglamorous but high revenue |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Study Builder Prime's acquisition model; validate with 10 home improvement contractors; start with one sub-vertical (windows/doors replacement) for tight ICP
**Risks**: Builder Prime is well-established ($80K+/mo = hard to displace); home improvement sales cycles are long; requires deep CRM functionality
**Key Source Links**:
- https://www.indiehackers.com/ideas/a-crm-designed-for-home-improvement-contractors-UC5YMjigiytDetW2v4yG
- https://www.indiehackers.com/post/procore-is-worth-8b-heres-what-they-don-t-build-and-won-t-e985092d14
**Signal Frequency**: IH validated ($80K+/mo proof) + Procore gap analysis — strong first appearance

---

### 10. Route Optimization for Pest Control, Pool Service & Recurring Trades — Score: 84/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Pest control $20B+ US industry; 35K+ pest control companies; GorillaDesk growing 437% YoY validates niche FSM category |
| Competitor Weakness | 4/5 | Route4Me/OptimoRoute generic (not trade-specific); FSM tools have basic or add-on-only routing; pest control operators feel "generic tools" don't fit recurring route model |
| LTD Viability | 4/5 | $59-79 LTD; clear ROI = "fit more jobs per day" = more revenue |
| No Free Tier | 4/5 | Google Maps is free but insufficient for recurring route optimization |
| Channel Access | 4/5 | r/PestControl, pest control Facebook groups, NPMA (National Pest Management Assoc.), pool service Reddit/forums |
| Content Potential | 3/5 | "pest control route software", "pool service routing app", "route optimization for recurring service" |
| AppSumo Fit | 4/5 | Niche route tool with clear ROI = AppSumo-ready |
| Review Potential | 3/5 | Niche market, fewer reviewers |
| MRR Path | 4/5 | Recurring route businesses = recurring software need; strong retention |
| Build Feasibility | 4/5 | Google OR-Tools or VROOM API for optimization + trade-specific scheduling layer — achievable in 5-6 weeks |
| Boring Business Bonus | 5/5 | Pest control, pool service — deeply boring, service-essential trades |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Read StartupHeist septic analysis for niche trade model; interview pest control operators; build route optimization + recurring schedule + invoice as MVP; $59-79 LTD
**Risks**: GorillaDesk already serving pest/lawn/cleaning market; distribution channels are niche; route optimization APIs add engineering complexity
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1q1fg49/jobber_housecall_alternatives/
- https://www.startupheist.com/housecall-pro-skipped-septic-thats-a-96k-mrr-opening/
- https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/
**Signal Frequency**: Multiple corroborating sources — stable, first strong signal

---

### 11. Field Service Analytics — Profit-per-Job Reporting Layer (Add-on to Jobber/HCP) — Score: 83/105
**→ Folds into `field-service-management.md` (alternative angle section)**

Key signal: HVAC 8-person company tried 4 CRMs; the gap is reporting (profit per job, team performance), not core FSM. A BI layer on top of Jobber/HCP APIs at $29-49/mo is a lower-risk wedge than building a full FSM. "30% feature utilization" quote from HVAC owner = customers paying for waste. ServiceTitan siloed reports across data sets = confirmed.

---

### 12. SMS-Native Service Business Follow-up (CraftBoop+ Evolution) — Score: 83/105
**→ EXISTING: Update `local-service-marketing-automation.md`**

New signals 2026-09-12:
- CraftBoop launched at $29/mo, 5-email sequence after each job; early paying users; 14-day trial
- Key gap: SMS-native instead of email (email open rates low for tradespeople)
- Our angle: SMS-first + real-time Google review count dashboard + auto-trigger after 5-star via Google Business Profile API
- This is adjacent to CraftBoop but meaningfully differentiated on channel (SMS vs email)

---

### 13. Property Management — Vendor Invoice Tracking + Inspection Automation + Tenant Comms — Score: 82/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | AppFolio has 25K+ customers; active r/PptyMgmtSoftware community; controller-level complaint confirmed |
| Competitor Weakness | 4/5 | AppFolio, Buildium, RentManager all miss per-unit expense coding and inspection-to-work-order workflow |
| LTD Viability | 4/5 | $79-99 LTD; PMs understand paying for ops tools |
| No Free Tier | 4/5 | PM ops tools are paid; compliance recordkeeping is required |
| Channel Access | 4/5 | r/PropertyManagement, r/PptyMgmtSoftware, r/yardi — active PM communities |
| Content Potential | 3/5 | "property management vendor invoice", "inspection to work order automation", "property manager software" |
| AppSumo Fit | 3/5 | PM software is a moderate AppSumo category; less viral than trades |
| Review Potential | 3/5 | PMs are professional reviewers but fewer in number |
| MRR Path | 4/5 | PM software is sticky recurring; $49-99/mo per PM company |
| Build Feasibility | 4/5 | Email parsing + AI unit assignment + API sync layer — achievable in 5-6 weeks |
| Boring Business Bonus | 5/5 | Property management — unglamorous professional service with real operational pain |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Interview 10 property managers about vendor invoice coding pain; build email → AI unit assignment → one-click approval → AppFolio sync MVP
**Risks**: Integration complexity (each PM software has different APIs); AppFolio/Buildium could build this themselves; PM companies are slow to adopt new tools
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1qkkn2n/im_sick_of_chasing_receipts_and_handling_bills/
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1svd9x8/is_anyone_actually_happy_with_their_inspections/
- https://www.reddit.com/r/yardi/comments/1qcbvsv/yardi_breeze_users_are_you_annoyed_too/
**Signal Frequency**: 3 dedicated PM threads with active engagement — stable, consistent pain

---

### 14. CNC Machine Shop Quoting from Drawings (Isonq angle) — Score: 81/105
**→ EXISTING: Update `machine-shop-job-tracking.md`**

New signals 2026-09-12:
- Isonq (HN Show HN, 2 pts) — reads PDF/DXF/DWG/STEP locally (Tauri + Rust); Ollama LLM layer reconciles 2D vs 3D geometry differences; live pilot at Colorado CNC shop v7.0.3 in production
- Key insight: shops can't upload customer drawings to cloud tools (confidentiality agreements) — local-only processing is a genuine differentiator
- Gap: nothing in $100-500/mo range for 3-10 person shops; enterprise CAM software costs $10-50K/yr
- Our angle: start with just PDF/DXF → quote (skip STEP for now); target one trade (sheet metal or turned parts)

---

### 15. AI Voice Receptionist for Trades — Trade-Specific Call Handling — Score: 78/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Agency model validated at $1-2K setup + $300-800 MRR/client; 80%+ margins; HVAC/plumbing as primary targets |
| Competitor Weakness | 4/5 | Generic voice AI (Callin.io, VAPI) can't handle trade specifics; generic call answering misses triage logic |
| LTD Viability | 1/5 | Voice AI has ongoing per-minute costs; LTD doesn't work for usage-based infrastructure |
| No Free Tier | 5/5 | No free AI voice receptionist for trades |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, trade Facebook groups — exact channels where operators complain about missed calls |
| Content Potential | 4/5 | "AI receptionist for HVAC", "missed call text back software trades", "automatic booking HVAC" |
| AppSumo Fit | 2/5 | Usage-based infrastructure doesn't work as LTD on AppSumo |
| Review Potential | 4/5 | "Never miss a customer call again" = visceral ROI = motivated reviewers |
| MRR Path | 5/5 | $199-399/mo/location; replaces $40K/yr receptionist = extremely sticky |
| Build Feasibility | 3/5 | Voice AI + HVAC call flow training + ServiceTitan/Jobber integration — 6-8 weeks |
| Boring Business Bonus | 4/5 | HVAC, plumbing — boring industry, non-technical buyers |

**Verdict**: EXPLORE FURTHER (MRR play, not LTD)
**Decision Status**: NEW
**Next Steps**: Validate HVAC-specific call flows (emergency vs routine, symptom capture, tech scheduling); build on Twilio + GPT-4o voice + Jobber API; price at $299/mo flat
**Risks**: Usage-based infrastructure costs erode margins; voice AI reliability is critical (one missed emergency call = cancelled contract); Probook/Netic already building adjacent features
**Key Source Links**:
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://callin.io
- https://techfundingnews.com/built-by-a-tradesman-backed-by-a16z-and-sequoia-probook-raises-40m-to-reinvent-dispatch-for-americas-home-service-businesses/
**Signal Frequency**: IH model validated + VC category validation — strong, increasing

---

### 16. Specialty Trade Payroll & Compliance (Prevailing Wage + Certified Payroll) — Score: 77/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Trayd 600% YoY growth; $10M Series A; customer cut payroll from 14 hrs/week to 27 min |
| Competitor Weakness | 4/5 | QuickBooks doesn't handle prevailing wage/certified payroll; Gusto is generic; paper timesheets are the norm |
| LTD Viability | 2/5 | Payroll requires ongoing regulatory updates; LTD inappropriate |
| No Free Tier | 5/5 | No free compliant payroll tool for trades |
| Channel Access | 4/5 | Construction accounting conferences, FOUNDATION user communities, specialty trade associations |
| Content Potential | 3/5 | "certified payroll software contractor", "prevailing wage software", "specialty trade HR software" |
| AppSumo Fit | 1/5 | Payroll compliance is not LTD-appropriate on AppSumo |
| Review Potential | 3/5 | Professional buyers; fewer reviewers |
| MRR Path | 5/5 | Compliance-driven, very sticky; $200-500/mo per company |
| Build Feasibility | 2/5 | Prevailing wage calculations + certified payroll forms + multi-state tax obligations = significant compliance engineering |
| Boring Business Bonus | 5/5 | Specialty trade contractors — maximum boring; compliance is non-negotiable |

**Verdict**: EXPLORE FURTHER (complex build, strong MRR story, not LTD)
**Decision Status**: NEW
**Next Steps**: Validate one state's reporting requirements as MVP scope; partner with construction payroll specialist; build mobile time card capture → FOUNDATION export as wedge
**Risks**: High compliance complexity; regulatory changes require ongoing updates; Trayd is well-funded and growing fast
**Key Source Links**:
- https://news.crunchbase.com/venture/construction-tech-automation-trayd-ai-seriesa/
- https://entrepreneurloop.com/construction-tech-trayd-series-a-y-combinator/
**Signal Frequency**: Strong funding signal — Trayd validates category; first time explicitly surfaced in our pipeline

---

### 17. AI Dental Insurance Verification + Front Desk Automation — Score: 77/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Dental front desk software is a proven market; Weave (dental comms) is well-funded; 30+ dental practices already in Zirco discovery |
| Competitor Weakness | 4/5 | Weave/Solutionreach focus on comms; nobody has solved insurance verification workflow cleanly; 2-3 hrs/day of manual verification = clear pain |
| LTD Viability | 2/5 | Healthcare recurring billing is expected; LTD would undervalue the ROI story |
| No Free Tier | 5/5 | HIPAA compliance + carrier API integrations = must be paid |
| Channel Access | 3/5 | Dental practice management forums, Dentrix/Open Dental user communities, dental association events |
| Content Potential | 3/5 | "dental insurance verification software", "AI dental front desk", "automate dental insurance" |
| AppSumo Fit | 2/5 | HIPAA/healthcare is harder on AppSumo; BAA requirements limit marketplace distribution |
| Review Potential | 3/5 | Dental practices are professional reviewers; fewer than trades |
| MRR Path | 5/5 | Dental practices are extremely sticky once software is integrated into workflow |
| Build Feasibility | 2/5 | HIPAA compliance + BAA agreements + 10+ carrier portal integrations via Playwright browser automation = high complexity |
| Boring Business Bonus | 5/5 | Dental practices — deeply boring, non-technical operators |

**Verdict**: EXPLORE FURTHER (strong MRR story, complex build — narrow first to verification-only MVP)
**Decision Status**: NEW
**Next Steps**: Validate with 5 dental practices; start with just insurance verification (not full front desk); requires HIPAA compliance infrastructure from day one
**Risks**: HIPAA compliance is non-negotiable and complex; Playwright browser automation against carrier portals is fragile; Weave/Solutionreach could copy this feature
**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090
- https://zircoai.vercel.app/
- https://www.oryxdental.com/
**Signal Frequency**: HN Show HN (minimal engagement but strong idea); first dental-specific signal this week

---

## Tier 2: Worth Exploring (Score 55–74)

### AI SMB Appointment Booking — Trade-Specific (ClawEase angle) — 75/105 (borderline Tier 1)
AI booking agent: captures inquiries across phone/WhatsApp/web, books appointments, sends confirmations without replacing existing booking system. Generic version scores 68/105; trade-specific version (HVAC emergency vs routine triage, parts availability check) pushes to 75. **Concern**: Crowded space; Probook/Netic are well-funded. **Recommendation**: Update `booking-widget-no-show-reducer.md`.
**Key Source**: https://www.producthunt.com/products/clawease

### Heavy Civil Construction ERP — Field Time → FOUNDATION — 73/105
Founder's 14-year internal ERP seeking commercialization. Mobile field time + equipment → FOUNDATION payroll export. Proven internally; limited external SaaS validation. **Concern**: "Validated internally" ≠ validated as SaaS product; FOUNDATION API complexity is real; niche distribution.

### HandyPay — Deposit & Payment Tool for Service Businesses — 74/105
$1K MRR in 60 days via direct sales. Clear use case: reduce no-shows via mandatory deposits. **Concern**: Square and Stripe have deposit features; payment tools have low ARPU; easily replicated. **Recommendation**: Better as a feature bundled with solo contractor FSM than standalone.
**Key Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9

### DASHP Model — D2D Sales Commission Tracking (Pest Control → Adjacent) — 72/105
$100K ARR bootstrapped, solo founder, pest control D2D sales. **Angle**: Replicate in HVAC installation D2D, solar D2D, home security. **Concern**: TAM is small for pest control alone; each adjacent vertical needs separate validation.
**Key Source**: https://www.starterstory.com/stories/dashp

### Managed Cloud Hosting for Boring Business Software (Verito model) — 69/105
Profitable at ~1,000 customers for 10 years serving QuickBooks Desktop for tax/accounting firms. Adjacent: dental practice software hosting, chiropractic EHR hosting. **Concern**: Infrastructure/managed hosting is operationally intensive; not an indie 4-6 week MVP.

---

## Tier 3: Weak / Pass (Score <55)

- **"Replit for Trades" / Dalton Mills Platform** (48/105): Platform play; $9.2M VC already raised; not an indie 4-6 week opportunity; better to build a killer plugin for one trade on top of it
- **Residential Construction with Distributor-Backed Distribution** (45/105): Digs/Higharc model requires building-products distributor partnership; not indie-buildable without that distribution anchor
- **AI-Native Dispatch OS (Probook/Netic model)** (50/105): a16z/Sequoia/Founders Fund already placed bets; competing directly is futile; white space is in specific trades Probook explicitly skips (septic, chimney, irrigation — see Tier 1 above)
- **Sergio / Window Cleaning Vertical FSM** (competitive signal only): Existing product — signals market validation for weather-aware scheduling as differentiator in adjacent outdoor trades

---

## Top 3 Recommendations

1. **HVAC/Plumbing/Electrical FSM for 3–15 Techs** — Mid-market gap is genuinely unoccupied. 450K+ US contractors too big for solo tools, too small/price-sensitive for ServiceTitan. Flat pricing + offline mode + equipment-level tracking = clear differentiation. Score: 95/105. Key: https://projul.com/blog/servicetitan-pricing-analysis-2026/

2. **Solo Contractor FSM (RigKit-style)** — Simplest possible tool for 1-2 person trades. MVP in 3-4 weeks. $49 LTD story is extremely clean. RigKit proves founders are already validating this via customer interviews. The "30 second quote from phone" narrative is a slam-dunk AppSumo hook. Score: 93/105. Key: https://www.reddit.com/r/selfemployed/comments/1rsfr43/usa_best_jobber_alternatives_for_a_one_person/

3. **Independent Auto Repair Shop Management** — 130K independent shops; Mitchell 1 is legacy desktop with no cloud sync; Tekmetric is moving upmarket; digital vehicle inspection adoption still below 40%. Clean $99/mo flat story. Score: 92/105. Key: https://wrenchpilot.io/blog/best-shop-management-software-independent-auto
