# Welding & Fabrication Shop Job Tracking

**Score**: 87/105
**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-06-19
**LTD Price**: $99

## One-Line Pitch
Cloud job tracker for 1–8 person welding and fabrication shops — material cost estimator, job board, and invoicing to replace the handwritten work order + QuickBooks + spreadsheet stack.

## Problem
Custom metal fabrication and welding shops (custom gates, trailers, equipment guards, railings, structural components) are pure one-off job shops. Every project is unique. The workflow: inquiry → quote (material cost + welding time) → deposit → production → delivery → invoice. This is entirely manual for the vast majority of 1–8 person shops.

The specific pain points:

1. **Material cost estimating** — quoting requires calculating weight (steel is priced by lb), cutting time, and welding time manually. A 3–10 job/day shop does this calculation for every single quote, taking 20–30 minutes each. One inaccurate estimate → the shop loses money on the job.
2. **Job board** — which jobs are in queue, which are in production, which are awaiting materials, which are ready? Currently: whiteboard or paper pile.
3. **Material on-hand tracking** — how many lbs of 1/4" plate steel do we have? Currently: walk to the rack and look.
4. **Invoicing with deposits** — QuickBooks handles the invoice but has no job board or material estimator.

Enterprise job shop software (E2 Shop, JobBoss) starts at $300–500+/month and requires 6-month implementations designed for 20+ employee machine shops with CNC equipment. The entire 1–8 employee segment is unserved.

## Market Evidence
- ~110,000+ welding shops and metal fabricators in the US
- Majority are 1–10 employee operations
- No modern, affordable SaaS competitor exists at sub-$150/month
- r/Welding has 750K+ members — a massive community with business owners actively discussing shop operations
- Custom fabrication demand growing with infrastructure investment and reshoring trends
- E2 Shop, JobBoss confirm that larger shops pay for dedicated software → gap confirmed at small end

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 110K+ shops; r/Welding 750K members confirms large community; E2 Shop proves paying market at larger scale |
| Competitor Weakness | 5/5 | 2x | 10 | E2 Shop $300+/mo built for 20+; zero cloud-native affordable tool for 1–8 person fab shops |
| LTD Viability | 5/5 | 2x | 10 | $99 LTD; welders extremely cost-conscious; no-subscription pitch resonates strongly |
| No Free Tier | 5/5 | 1x | 5 | No free job-shop software exists for this segment |
| Channel Access | 4/5 | 2x | 8 | r/Welding (750K), r/fabrication, YouTube welding channels, fabrication FB groups |
| Content Potential | 3/5 | 1x | 3 | "welding shop software", "fab shop job tracking" — niche but discoverable |
| AppSumo Fit | 3/5 | 2x | 6 | Welders less AppSumo-savvy; community marketing via r/Welding better |
| Review Potential | 3/5 | 1x | 3 | Tight trades community; will share when genuinely useful |
| MRR Path | 4/5 | 3x | 12 | $49–79/mo; very sticky once job history and material pricing are in the system |
| Build Feasibility | 4/5 | 2x | 8 | Material estimator + job Kanban + deposit/invoice + inventory = 4–5 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Metal fabrication = deeply boring; exactly the right unsexy market |

**Total: 87/105**

## Must-Have Filters
- [x] Problem is real (E2 Shop and JobBoss confirm dedicated software exists at larger scale; gap is at small end)
- [x] Can build without deep domain expertise (material estimating, job tracking, invoicing are known patterns)
- [x] No dominant unbeatable player (all enterprise tools; zero cloud-native small-shop option)
- [x] Revenue potential $10K+ MRR within 12 months (110K shops × $49/mo × 0.02% = $10.8K MRR — very low penetration needed)

## Boring Business Fit Check
- VCs ignore welding/fab shop software at the small end ✓
- Customers (shop owners, estimators) are non-technical ✓
- Existing software is far too expensive for 1–8 person shops ✓
- Shops have real budgets — $200K–$2M annual revenue ✓
- Churn is near-zero once job history and material pricing templates are set up ✓

## Team Fit Check
- Front-end: Material estimator UI, Kanban job board, customer portal for quotes
- Back-end: Steel pricing engine (material type → weight calculation), deposit/invoice, inventory tracker
- Designer: Clean Kanban board for shop floor; mobile check-off for production
- Generalist: r/Welding community engagement, YouTube channel outreach, fabrication FB groups

## Key Differentiators
1. **Material cost estimator** — select material type (mild steel, stainless, aluminum) → input dimensions → auto-calculate weight × current price per lb; eliminates 20–30 min of manual math per quote
2. **Job Kanban** — quote → approved → in production → complete; multi-user so shop owner and floor workers both see status
3. **Material inventory tracker** — lbs of steel on hand by type (1/4" plate, 1/8" sheet, angle iron, tube); alert when running low
4. **Mobile shop floor app** — floor worker marks job step complete from phone, updates Kanban without going to the office
5. **Deposit + final invoice** — quote approved → deposit charged → job complete → final invoice (with deposit credited)

## MVP Features (4–5 Week Build)
1. Job/quote builder with material estimator
2. Job board (Kanban: quote → approved → in production → complete)
3. Material inventory tracker (lbs by type)
4. Deposit + invoice generation
5. Customer quote portal (client approves quote online, triggers deposit)

## Revenue Model
- $49/mo: Solo/2-person shop (unlimited jobs)
- $79/mo: Team shop (up to 8 users + material inventory)
- LTD: $99 (up to 5 users, lifetime)

## Go-to-Market
1. Post in r/Welding: "Walk me through how you quote a custom gate — from material estimate to invoice" — validate material estimator as #1 pain
2. Offer beta to 10 fab shop owners in exchange for detailed feedback; iterate on material estimator accuracy
3. Post finished-work photo alongside "priced this job in 2 min flat" on r/Welding and Instagram welding communities
4. YouTube weld channel sponsorships (smaller channels 50–200K subs)

## Top 3 Risks
1. E2 Shop or JobBoss launches an affordable lite tier targeting small fab shops
2. Steel pricing volatility makes auto-calculated estimates potentially inaccurate (need manual override)
3. More complex material types (aluminum, stainless, copper alloys) require expanding the estimator significantly

## Key Source Links
- https://zipdo.co/best/sign-business-management-software/ (fabrication shops cited alongside)
- https://www.capterra.com/job-shop-software/
- https://www.softwareadvice.com/manufacturing/job-shop-comparison/
- https://www.emarketplace.com/welding-shop-management-software

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-19 | 87/105 | reddit-2026-06-19 | First identified — 110K+ shops in US; zero affordable cloud-native tool; material cost estimator is the wedge feature (replaces real math on every quote); r/Welding 750K members = enormous distribution channel; E2 Shop $300+/mo confirms paying market at larger scale; $99 LTD plays to welder cost-consciousness |
