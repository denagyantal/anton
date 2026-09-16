# Idea Evaluation — 2026-09-15

**Sources evaluated**: reddit-2026-09-15, hn-indiehackers-2026-09-15, competitor-analysis-2026-09-15, trends-2026-09-15
**Total raw ideas ingested**: ~30 (deduplicated to 15 distinct verticals for scoring)
**Date**: 2026-09-15

---

## Deduplication Notes

The following ideas were consolidated (multiple sources pointed at the same opportunity):
- **HVAC/Trades FSM** — Reddit (micro dispatch), HN (FieldLedgr, AI Repair Assistant, HVAC Maintenance Agreement), Competitor (ServiceTitan replacement), Trends (Probook, Netic, Podium) → all folded into one group; signals added to `hvac-flat-rate-pricebook.md`
- **Property Management** — Reddit (licensed PM escrow), Competitor (small landlord tool), Trends (UK landlord compliance) → updates `property-management.md`
- **Field-First AI Estimating** — HN (Rudus concrete), Trends (Feldy, Netic satellite) → updates `concrete-paving-estimating.md`
- **Trades Document Automation** — HN (Documentorium, AI back-office) → updates `contractor-job-documentation.md`
- **TMS for Small Trucking** — Reddit only → updates `small-carrier-tms.md`

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. HVAC/Trades Field Service Management for Micro Shops (1-10 trucks) — Score: 93/105

**Sources**: ALL FOUR (reddit + hn + competitor-analysis + trends) — strongest cross-source signal of the day

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ServiceTitan $9B IPO proves TAM; $300M+ VC in Q1 2026 alone; FieldLedgr, Probook, Netic, Podium — many paying products |
| Competitor Weakness | 5/5 | 2x | 10 | ST $245-500/tech/mo + BBB 1/5; Jobber per-user pricing; HCP missing service agreements; FieldEdge poor support |
| LTD Viability | 3/5 | 2x | 6 | $79 LTD for solo-operator tier viable; ongoing software updates complicate full LTD |
| No Free Tier | 5/5 | 1x | 5 | Trades shops pay for software; high willingness to pay documented |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/hvacpeople, r/smallbusiness, ACCA forums, FB "HVAC Business Owners" |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan alternative" is a goldmine keyword; high-intent search |
| AppSumo Fit | 4/5 | 2x | 8 | Trades professionals active on AppSumo; "anti-ServiceTitan" story works |
| Review Potential | 4/5 | 1x | 4 | Tradespeople review when software saves time/money |
| MRR Path | 5/5 | 3x | 15 | $49-99/mo flat per shop; maintenance agreements = perpetual recurring; natural upgrade as fleet grows |
| Build Feasibility | 3/5 | 2x | 6 | FSM not trivial; MVP = dispatch + invoice + SMS + asset tracking; 6-8 weeks for 4-person team |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/plumbing/electrical = peak boring |

**Total: 93/105**

**Verdict**: BUILD
**Decision Status**: BUILDING (HVAC flat-rate pricebook is the current wedge — see `hvac-flat-rate-pricebook.md`)
**Next Steps**: The maintenance agreement lifecycle manager angle (HN source) is a compelling standalone wedge — track renewal dates, auto-send 11-month reminders, build equipment service history. Build feasibility is 5/5 for this slice vs 3/5 for full FSM. Consider launching this first, then upselling to full FSM.
**Risks**: $300M+ VC into space (Probook, Netic, Podium) = window narrowing; build speed critical. ServiceTitan may add lower-tier pricing. Domain knowledge required for HVAC pricebook accuracy.
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1rhbkrl/built_a_dispatch_tool_for_field_service/
- https://www.reddit.com/r/hvacpeople/comments/1rv1xlf/service_titan_alternative_for_small_hvac_operation/
- https://valueaddvc.com/pulse/probook-40m-home-services-ai-2026
- https://fieldcamp.ai/reviews/servicetitan/
- https://www.ycombinator.com/rfs
**Signal Frequency**: Present in all 4 sources today + recurring for 6+ months — increasing

→ **UPDATE**: `hvac-flat-rate-pricebook.md`

---

### 2. AI Call Answering for Trades (After-Hours Lead Capture) — Score: 89/105

**Sources**: Trends (primary), confirmed by all FSM sources (Probook/Netic/Podium all include this)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Probook ($40M), Netic ($23M), Podium all validate; Goodcall proves generic market |
| Competitor Weakness | 4/5 | 2x | 8 | Bundled into expensive platforms only; no affordable standalone trade-specific version |
| LTD Viability | 4/5 | 2x | 8 | $299-499 LTD; "never miss a plumbing call" = obvious ROI |
| No Free Tier | 5/5 | 1x | 5 | Every missed call is $500-$2,000 in lost revenue — they'll pay |
| Channel Access | 5/5 | 2x | 10 | Same trades channels; massive resonance |
| Content Potential | 4/5 | 1x | 4 | "after-hours answering service HVAC" = high-value content |
| AppSumo Fit | 4/5 | 2x | 8 | Strong story ("never miss a call at 10pm") |
| Review Potential | 4/5 | 1x | 4 | Contractors will rave if it captures real jobs |
| MRR Path | 4/5 | 3x | 12 | $49-99/mo ongoing per business |
| Build Feasibility | 4/5 | 2x | 8 | Bland.ai/Retell.ai/Vapi as infrastructure; 2-4 week build; trade-specific prompts are the moat |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/plumbing = deeply boring |

**Total: 89/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Pick one trade vertical (plumbing = highest urgency/ROI). Build trade-specific triage script. Test via Bland.ai or Retell.ai. Launch on AppSumo as "AI after-hours receptionist for plumbers" at $299 LTD. Can be built standalone and later bundled into FSM.
**Risks**: Large players (Probook, Podium) may commoditize this feature. Voice AI quality still inconsistent. Trades customers skeptical of bots handling customer calls.
**Key Source Links**:
- https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/
- https://www.prnewswire.com/news-releases/podium-launches-industrys-first-ai-operating-system-for-home-services-302862084.html
- https://valueaddvc.com/pulse/probook-40m-home-services-ai-2026
**Signal Frequency**: First appearance today — but corroborated by 3 major VC rounds — new but high-conviction

→ **NEW FILE**: `ai-trades-call-answering.md`

---

### 3. Pest Control Software for 1-10 Technicians — Score: 89/105

**Sources**: Competitor Analysis (primary)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | GorillaDesk ($49/mo), PestPac, FieldRoutes all paying; 30K+ pest control businesses in US |
| Competitor Weakness | 5/5 | 2x | 10 | GorillaDesk = too basic (no chemical tracking, limited route optimization); PestPac = enterprise-priced/complex; no one owns mid-market |
| LTD Viability | 4/5 | 2x | 8 | $69 LTD; compliance angle = clear ROI story |
| No Free Tier | 5/5 | 1x | 5 | Chemical compliance is legally required; they must pay |
| Channel Access | 4/5 | 2x | 8 | r/PestControl, NPMA forums, state pest associations |
| Content Potential | 4/5 | 1x | 4 | "EPA chemical log software", "pest control scheduling software" = high-intent |
| AppSumo Fit | 4/5 | 2x | 8 | Compliance tool at LTD = clear buy vs ongoing subscription |
| Review Potential | 4/5 | 1x | 4 | Pest operators active in trade communities |
| MRR Path | 4/5 | 3x | 12 | Recurring pest service = recurring software; $69/mo flat for up to 5 techs |
| Build Feasibility | 4/5 | 2x | 8 | Pest-specific FSM; chemical log + scheduling + route optimization = 4-5 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Pest control = deeply boring |

**Total: 89/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: MVP must nail EPA-compliant chemical application logs (this is legally required and GorillaDesk doesn't do it). Add recurring service scheduling and basic route optimization. Sell to pest operators via NPMA forums and Facebook Groups ("Pest Control Business Owners"). $69 LTD launch.
**Risks**: GorillaDesk adds chemical tracking. Small niche (30K companies) limits ceiling. Regulatory knowledge required for chemical log compliance.
**Key Source Links**:
- https://www.pestbase.ai/blog/best-pest-control-software-for-small-businesses-in-2026
- https://tooleduppro.com/guides/best-pest-control-software/
- https://myquoteiq.com/top-10-pest-control-field-service-software-in-2026/
**Signal Frequency**: First identified today — single source but high-clarity gap

→ **NEW FILE**: `pest-control-software.md`

---

### 4. Landscaping / Lawn Care Software with Chemical Compliance — Score: 88/105

**Sources**: Reddit (primary), HN (YardBook validation)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | YardBook (YC W16) proved $30.9B market; Service Autopilot, Jobber all have paying customers |
| Competitor Weakness | 4/5 | 2x | 8 | YardBook 10 years old, dated; no tool covers chemical compliance + route optimization + seasonal invoicing |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD for solo operators; seasonal = natural annual billing |
| No Free Tier | 4/5 | 1x | 4 | YardBook is free but weak; most operators outgrow it |
| Channel Access | 5/5 | 2x | 10 | r/lawncare (monthly "what software do you use" threads), r/sweatystartup, FB Groups |
| Content Potential | 4/5 | 1x | 4 | "YardBook alternative", "lawn care chemical log software" |
| AppSumo Fit | 4/5 | 2x | 8 | "YardBook alternative with automated follow-ups" = clear hook |
| Review Potential | 4/5 | 1x | 4 | Lawn care operators review when software saves admin time |
| MRR Path | 4/5 | 3x | 12 | Seasonal recurring; $39-79/mo per company |
| Build Feasibility | 4/5 | 2x | 8 | Route optimization + chemical log + customer profiles + invoicing = 4-6 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn care = deeply boring |

**Total: 88/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Chemical application log (legally required in many states) is the killer differentiator — build this first. Add customer-level treatment plans (per yard size, 1-5 treatments/season), seasonal route optimization, and Spanish-first UI (large portion of lawn care workforce). Target r/lawncare and "Lawn Care Business Owners" Facebook group.
**Risks**: YardBook could modernize. Service Autopilot adds chemical logging. State chemical compliance requirements vary and need ongoing legal research.
**Key Source Links**:
- https://www.reddit.com/r/lawncare/comments/1sts808/software_question/
- https://www.reddit.com/r/lawncare/comments/1se3qmr/what_software_is_everyone_using_to_run_their/
- https://www.reddit.com/r/smallbusiness/comments/1rairx5/the_tools_actually_running_my_3person_landscaping/
- https://www.yardbook.com/ (YC W16 — market proof)
**Signal Frequency**: Monthly threads in r/lawncare asking for software recommendations — stable/increasing

→ **NEW FILE**: `landscaping-lawn-care.md`

---

### 5. Small Fleet Management for Service Businesses (5-20 Vehicles) — Score: 88/105

**Sources**: HN (Fleetrabbit), Trends (Fieldmobi, Service Book)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Fleetio, Samsara, Verizon Connect prove enterprise market; Fleetrabbit shows indie interest; Servicebok validating consumer side |
| Competitor Weakness | 4/5 | 2x | 8 | All fleet tools target 50+ vehicles with enterprise pricing; 5-25 vehicle segment dramatically underserved |
| LTD Viability | 4/5 | 2x | 8 | $99-149 LTD for up to 20 vehicles; clear AppSumo story |
| No Free Tier | 4/5 | 1x | 4 | Missing DOT compliance deadlines is costly; they'll pay |
| Channel Access | 5/5 | 2x | 10 | r/sweatystartup, r/lawncare, r/PestControl, trade FB groups for HVAC/landscaping/pest |
| Content Potential | 4/5 | 1x | 4 | "fleet management for small business", "van maintenance tracker" |
| AppSumo Fit | 4/5 | 2x | 8 | No dominant player in small fleet; "spreadsheet escape" story |
| Review Potential | 4/5 | 1x | 4 | Operators review when compliance issues are avoided |
| MRR Path | 4/5 | 3x | 12 | $99/mo flat for 5-20 vehicles; fleet growth = natural upgrade |
| Build Feasibility | 4/5 | 2x | 8 | Mobile inspection log + maintenance reminders + DOT checklist = 4-5 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Service business fleet management = deeply boring |

**Total: 88/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Focus on service businesses (HVAC, pest control, landscaping) with 5-20 vans rather than generic fleet. Mobile-first inspection logs (daily vehicle check, oil change reminders), DOT compliance checklists, basic mileage/fuel tracking. Sell via r/sweatystartup and trade association email lists. Position as "Fleetio for sweaty startups."
**Risks**: Fleetrabbit, Fleetio could expand downmarket. Consumer apps (Service Book) could pivot upmarket. DOT compliance requirements vary by state.
**Key Source Links**:
- https://news.ycombinator.com/item?id=45459621 (Fleetrabbit)
- https://news.ycombinator.com/item?id=47211736 (Service Book)
- https://www.producthunt.com/products/fieldmobi (Fieldmobi)
**Signal Frequency**: First identified today — two HN sources + trends; new but consistent with market gap

→ **NEW FILE**: `small-fleet-management.md`

---

### 6. Auto Shop Management for 1-3 Bay Independent Shops — Score: 87/105

**Sources**: Competitor Analysis (primary)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Shopmonkey ($199/mo), Tekmetric ($189/mo), AutoLeap ($189/mo) all paying; 80K+ US independent shops |
| Competitor Weakness | 5/5 | 2x | 10 | Sub-$79/mo segment only has dated Windows tools; Mitchell 1 "doesn't work efficiently and is expensive"; no cloud-native option with real-time parts ordering |
| LTD Viability | 4/5 | 2x | 8 | $69 LTD |
| No Free Tier | 5/5 | 1x | 5 | Shops pay for software; clear ROI |
| Channel Access | 4/5 | 2x | 8 | r/MechanicAdvice, r/Justrolledintotheshop, FB "Independent Auto Repair Shop Owners", NAPA AutoCare forums |
| Content Potential | 4/5 | 1x | 4 | "shop management software independent", "shopmonkey alternative" |
| AppSumo Fit | 4/5 | 2x | 8 | "Spreadsheet escape" for 1-3 bay shops; 80K potential customers |
| Review Potential | 4/5 | 1x | 4 | Shop owners review on Google, Capterra |
| MRR Path | 4/5 | 3x | 12 | $79/mo per shop; multi-bay growth |
| Build Feasibility | 3/5 | 2x | 6 | Parts API integrations (NAPA, AutoZone, O'Reilly) add complexity; 6-8 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair = deeply boring |

**Total: 87/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Real-time parts ordering (built-in NAPA/AutoZone lookup with live pricing and availability) is the unique differentiator vs. all budget alternatives. Start with digital ROs + customer SMS + basic invoicing, then add parts ordering. iPad-first for the shop counter. Target 1-3 bay independent shops via Facebook Groups and NAPA AutoCare dealer network.
**Risks**: Parts API integrations are technically complex. Shopmonkey/Tekmetric could add budget tier. Shop owners resistant to change from paper.
**Key Source Links**:
- https://techroute66.com/auto-repair-management-software
- https://www.g2.com/categories/auto-shop-management/small-business
- https://www.capterra.com/auto-repair-software/
- https://dealr.cloud/blog/best-auto-repair-shop-management-software
**Signal Frequency**: First identified today — single source but clear gap

→ **NEW FILE**: `auto-shop-management.md`

---

### 7. Automated Invoice Follow-Up for Small Service Businesses — Score: 86/105

**Sources**: Reddit (primary — 2 validated builders)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Builder 1 at $18K MRR; Builder 2 at $11K MRR (180 customers, 14-month avg retention) — two independent validations |
| Competitor Weakness | 3/5 | 2x | 6 | FreshBooks/HoneyBook/Wave exist but follow-up weak/generic; dedicated tools rare |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD; strong AppSumo fit |
| No Free Tier | 5/5 | 1x | 5 | The awkwardness of chasing money = people pay to avoid it |
| Channel Access | 4/5 | 2x | 8 | r/freelance, r/smallbusiness, r/SaaS, accounting communities |
| Content Potential | 4/5 | 1x | 4 | "invoice follow-up software", "automated payment reminders" |
| AppSumo Fit | 4/5 | 2x | 8 | Simple, clear value; easy to demo |
| Review Potential | 4/5 | 1x | 4 | Clear ROI = motivation to review |
| MRR Path | 4/5 | 3x | 12 | $19-39/mo ongoing; integrations with QBO/Stripe/Wave as paid upsell |
| Build Feasibility | 5/5 | 2x | 10 | Email/SMS automation + webhook integrations = 2-3 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | General purpose; somewhat boring but not trade-specific |

**Total: 86/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING (likely updating existing `simple-invoicing-freelancers.md`)
**Next Steps**: Integrate with QBO, Stripe, and Wave. Multi-step personalized follow-up sequences ("It was great working with you — just wanted to check in on invoice #123"). Target trades and freelancers. Proven market = move fast.
**Risks**: HoneyBook/FreshBooks could add better follow-up. Small monthly price keeps MRR ceiling low.
**Key Source Links**:
- https://www.reddit.com/r/SaaS/comments/1s19sc9/i_built_a_boring_saas_that_solves_one_small/
- https://www.reddit.com/r/SaaSGrowth_01/comments/1tum83d/my_saas_is_boring_but_it_makes_11kmonth/
**Signal Frequency**: 2 validated examples today — strong new signal

→ **UPDATE**: `simple-invoicing-freelancers.md`

---

### 8. Field-First AI Estimating (Visual Capture → Instant Quote) — Score: 84/105

**Sources**: Trends (primary — Feldy YC Aug 2026, 200+ customers), HN (Rudus YC P26 for concrete)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Feldy 200+ paying customers (YC, Aug 2026); Rudus YC P26 backed; Rebar $14M Series A; Netic satellite estimating |
| Competitor Weakness | 4/5 | 2x | 8 | Legacy estimating software from 2000s untouched; broad AI capability genuinely new |
| LTD Viability | 4/5 | 2x | 8 | $299-599 LTD; "saves 2 hours per estimate" = obvious ROI |
| No Free Tier | 5/5 | 1x | 5 | Estimation is a billable work activity — they'll pay |
| Channel Access | 4/5 | 2x | 8 | Trade-specific subreddits; contractor FB groups |
| Content Potential | 4/5 | 1x | 4 | "AI estimate generator for contractors" |
| AppSumo Fit | 4/5 | 2x | 8 | Trade owners would pay $299-$599 one-time to save 2 hours/estimate |
| Review Potential | 3/5 | 1x | 3 | Reviews come after enough usage volume |
| MRR Path | 4/5 | 3x | 12 | $149-299/mo per estimator after LTD; usage-based pricing possible |
| Build Feasibility | 3/5 | 2x | 6 | Basic GPT-4o Vision photo → itemized quote = 3-4 weeks; 3D scan capability = months |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction estimating = deeply boring |

**Total: 84/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Start with one narrow vertical (window installation or roofing — not concrete, Rudus owns that). Build basic version: contractor takes photos on mobile → GPT-4o Vision identifies scope → outputs itemized quote PDF. Don't attempt 3D scan yet. Validate with 10-20 beta users from trade Facebook groups.
**Risks**: Feldy, Rudus, and Rebar are well-funded; window is closing. Requires trade-specific training data for accurate line item generation. Domain expertise needed per trade.
**Key Source Links**:
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors (Feldy)
- https://news.ycombinator.com/item?id=48374528 (Rudus)
- https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/
**Signal Frequency**: First strong signal today — new and increasing (YC + VC = timing signal)

→ **UPDATE**: `concrete-paving-estimating.md`

---

### 9. Property Management — Small Landlord + Licensed PM — Score: 91/105

**Sources**: Reddit (licensed PM escrow gap), Competitor (small landlord 1-10 units), Trends (UK compliance angle)

*Already tracked at 100/105 in `property-management.md`*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | AppFolio, DoorLoop, Buildium all massive; constant monthly demand signal |
| Competitor Weakness | 5/5 | 2x | 10 | AppFolio 50-unit minimum; DoorLoop too expensive for small landlords; Avail too basic for licensed PMs |
| LTD Viability | 4/5 | 2x | 8 | $59-79 LTD for small landlord; Schedule E tax export = year-end motivation to buy |
| No Free Tier | 4/5 | 1x | 4 | Some free tools exist but they lack key features |
| Channel Access | 5/5 | 2x | 10 | r/PropertyManagement, r/realestateinvesting, r/landlord, BiggerPockets |
| Content Potential | 4/5 | 1x | 4 | Landlord software is a great content vertical |
| AppSumo Fit | 4/5 | 2x | 8 | Landlord software ABSENT from AppSumo catalog = first-mover opportunity |
| Review Potential | 4/5 | 1x | 4 | Landlords review when software saves tax prep time |
| MRR Path | 4/5 | 3x | 12 | Per-unit monthly or flat after LTD |
| Build Feasibility | 4/5 | 2x | 8 | Trust accounting is complex but manageable; 4-6 weeks for MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Property management = unglamorous |

**Total: 91/105 (existing file at 100/105)**

**New signals today**: Reddit adds licensed PM escrow reporting gap (AppFolio 50-unit minimum pushes out licensed PMs with 10-50 units); Competitor documents Schedule E tax export as most important missing feature; Trends confirms UK compliance calendar angle.

→ **UPDATE**: `property-management.md` (signal history row only)

---

### 10. Solo Attorney Practice Management (Below $29/mo) — Score: 81/105

**Sources**: Competitor Analysis (primary)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Clio ($79-149/user), MyCase ($39/user), PracticePanther ($49/user) all massive; 170K solo attorneys in US |
| Competitor Weakness | 5/5 | 2x | 10 | All tools built for 5-50 attorney firms; solo practitioners pay enterprise prices for features they don't use; CaelusLaw $20/user = closest but limited ecosystem |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD; practice management is a clear annual-value purchase |
| No Free Tier | 5/5 | 1x | 5 | Attorneys pay for professional tools; trust accounting = must pay |
| Channel Access | 3/5 | 2x | 6 | r/SoloLawyer, Lawyerist community, state bar association forums; less Reddit-native than trades |
| Content Potential | 4/5 | 1x | 4 | "Clio alternative solo attorney", "solo law firm software" = high-intent |
| AppSumo Fit | 3/5 | 2x | 6 | Attorneys somewhat less AppSumo-native; but pain is real |
| Review Potential | 4/5 | 1x | 4 | Lawyers do review on G2/Capterra; Lawyerist.com as review hub |
| MRR Path | 4/5 | 3x | 12 | $29/mo solo tier → team tier at $79/mo; attorney referrals = growth |
| Build Feasibility | 3/5 | 2x | 6 | IOLTA trust accounting is compliance-heavy; 6-8 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Legal practice = unglamorous professional service |

**Total: 81/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: IOLTA trust accounting + intake form → matter creation → time tracking + invoice is the core flow. Must bundle trust accounting at base price (Clio gates this). Target solo attorneys in PI, family law, criminal defense, immigration — high client volume = high admin pain. State bar association sponsorships as distribution channel.
**Risks**: Trust accounting compliance is complex and varies by state. Clio could add solo-specific tier. Legal market slower to adopt new tools.
**Key Source Links**:
- https://owlesq.com/buyer-guides/best-practice-management-software-solo-small-law-firms
- https://legalstackreview.com/best-practice-management.html
- https://caeluslaw.net/resources/best/best-legal-software-solo-attorneys/
**Signal Frequency**: First identified today — single source but highly specific gap

→ **NEW FILE**: `solo-attorney-practice-management.md`

---

### 11. AI Repair Assistant for Field Technicians (HVAC / Trades) — Score: 81/105

**Sources**: HN (YC RFS Spring 2026 explicitly naming this category)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | No product yet; YC explicitly validates; comparable HVAC tools at $49-99/mo; 118K HVAC contractors = TAM |
| Competitor Weakness | 4/5 | 2x | 8 | Brand-specific manuals offline; OEM-locked systems; no AI-powered repair guidance tool exists |
| LTD Viability | 4/5 | 2x | 8 | $299 LTD for solo tech operators |
| No Free Tier | 4/5 | 1x | 4 | YC confirms "willing to pay for tools that save time" |
| Channel Access | 4/5 | 2x | 8 | HVAC tech communities, r/HVACTech, ACCA forums, YouTube HVAC channels |
| Content Potential | 4/5 | 1x | 4 | "HVAC diagnostic app", "AI repair assistant HVAC" |
| AppSumo Fit | 4/5 | 2x | 8 | Strong hook for solo tech operators |
| Review Potential | 4/5 | 1x | 4 | Techs review when app saves them an embarrassing service call |
| MRR Path | 4/5 | 3x | 12 | $29/tech/mo; company tier at $99/mo for 3-5 techs |
| Build Feasibility | 3/5 | 2x | 6 | Equipment database + AI diagnosis = 6-8 weeks; photo recognition is doable with GPT-4o |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC repair = deeply boring |

**Total: 81/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Start with error code lookup + suggested fix (database approach, not full AI). Add photo recognition in V2. Pre-populate with Carrier/Trane/Lennox/Rheem equipment manuals. Sell to HVAC companies via ACCA forums. YC endorsement = strong narrative for launch.
**Risks**: No paying customers yet; pure opportunity signal. Requires licensing equipment manuals from manufacturers. Building accurate AI diagnosis requires substantial domain data.
**Key Source Links**:
- https://superframeworks.com/articles/yc-rfs-startup-ideas-indie-hackers-2026
- https://www.ycombinator.com/rfs
- https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
**Signal Frequency**: First appearance today — pure YC signal; validate before building

→ Related to HVAC FSM; consider adding this angle to `hvac-flat-rate-pricebook.md`

---

### 12. TMS for Small Trucking (1-15 Trucks / Owner-Operators) — Score: 82/105

**Sources**: Reddit (primary — multiple dedicated threads)

*Already tracked in `small-carrier-tms.md` at 82/105*

New signals today: McLeod resells customer rate data and staff info to competitors (NEW dealbreaker revelation). Multiple r/OwnerOperators "TMS expensive AF" threads. ELD complaint threads (Samsara long contracts, poor customer service).

**Verdict**: EXPLORE FURTHER
→ **UPDATE**: `small-carrier-tms.md`

---

### 13. Insurance Agency Management for 1-5 Agent Shops — Score: 78/105

**Sources**: Competitor Analysis (primary)

*Check against existing `insurance-agency-management.md`*

New signals today: Gen4 "never used the system after paying for years" (Capterra). EZLynx "notoriously poor support." Solo agent (1-3 agents) has no AMS at sub-$50/mo that includes comparative quoting.

**Verdict**: EXPLORE FURTHER
→ **UPDATE**: `insurance-agency-management.md`

---

### 14. Compliance Automation for Small IT Teams / Agencies — Score: 76/105

**Sources**: Reddit (primary — 3 separate builders with traction: $3K MRR, $1K in 2 months)

*Check against existing `smb-ai-compliance.md`*

New signals today: Multiple founders independently finding the same pain = meta-validation. GDPR/WCAG accessibility audit specialization validated with paying users.

**Verdict**: EXPLORE FURTHER
→ **UPDATE**: `smb-ai-compliance.md`

---

### 15. Veterinary Practice Management for Independent Clinics — Score: 75/105

**Sources**: Reddit (primary — very high-severity pain, 5 active subreddits)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Covetrus Pulse, Cornerstone, EzyVet all paying; indy vet segment = clear buyer |
| Competitor Weakness | 5/5 | 2x | 10 | Covetrus caused $hundreds K in lost revenue (1,300+ missed appointments). Cornerstone rigid. EzyVet hated. |
| LTD Viability | 1/5 | 2x | 2 | Not viable — practice management requires ongoing compliance, support, development |
| No Free Tier | 5/5 | 1x | 5 | Vet practices absolutely pay; $299-599/mo is normal |
| Channel Access | 4/5 | 2x | 8 | r/VeterinaryMedicine, r/veterinaryprofession — very active, very vocal |
| Content Potential | 4/5 | 1x | 4 | "Covetrus alternative", "veterinary practice management software independent clinic" |
| AppSumo Fit | 1/5 | 2x | 2 | Practice management is too complex for LTD; not AppSumo-compatible |
| Review Potential | 5/5 | 1x | 5 | Vets are EXTREMELY vocal about software; multiple Reddit threads with very high engagement |
| MRR Path | 5/5 | 3x | 15 | $299-599/mo per practice; very strong recurring |
| Build Feasibility | 2/5 | 2x | 4 | Vet PMS is complex (medical records, prescribing, SOAP notes, reminders, invoicing, inventory) = 3-6 months |
| Boring Business Bonus | 4/5 | 2x | 8 | Veterinary practice = unglamorous healthcare |

**Total: 75/105**

**Verdict**: EXPLORE FURTHER (NOT via LTD — subscription-only path)
**Decision Status**: NEW
**Next Steps**: This is NOT an LTD/AppSumo product. It requires a dedicated company focus. The market pain is enormous (Covetrus causing hundreds of thousands in lost revenue per clinic). Before building, do 10 customer discovery calls with independent vet clinic owners. Start with one narrow module (AI appointment reminders) as a wedge.
**Risks**: Very complex to build; compliance-heavy; 3-6 month minimum to viable product. Requires veterinary domain expertise. Not suitable for the standard 4-6 week MVP approach.
**Key Source Links**:
- https://www.reddit.com/r/VeterinaryMedicine/comments/1nqag4c/practice_management_software_pulse/
- https://www.reddit.com/r/veterinaryprofession/comments/1o0gpvy/covetrus_vetsuite_and_the_independentsfirst/
- https://www.reddit.com/r/Veterinary/comments/1krzlm0/considering_switching_from_cornerstone_need_pms/
**Signal Frequency**: First identified today — multiple subreddits, high-emotion signal

→ **NEW FILE**: `veterinary-practice-management.md`

---

## Tier 2: Worth Exploring (Score 55-74)

### Restaurant Staff Scheduling + Team Communication — Score: 72/105

**One-line reason**: Market is crowded (7shifts, Homebase, Deputy, Sling, When I Work, Breakroom); the flat-pricing gap is real but the communication infrastructure adds ongoing cost that kills LTD; Breakroom already occupying the budget segment.

**What's interesting**: The specific insight that "staff use the scheduling tab only and run WhatsApp in parallel" — a push-notification-rich scheduling app with shift context in the notification (not generic pings) could differentiate. Worth monitoring but don't build yet.

**Score breakdown summary**: MV 4×3=12, CW 3×2=6, LTD 2×2=4, NFT 3×1=3, CA 4×2=8, CP 3×1=3, AS 3×2=6, RP 4×1=4, MRR 4×3=12, BF 3×2=6, BBB 4×2=8 = **72/105**

---

### Maintenance Company AI ERP (B2B Facilities Maintenance) — Score: 71/105

**One-line reason**: Real pain (SAP PM/Maximo are ancient); but B2B maintenance contracts are complex, the build is 3-6 months minimum, and Mainteny + Fieldmobi are already in market.

**What's interesting**: A single-vertical approach (e.g., commercial kitchen equipment maintenance only, or elevator maintenance only) would be much more buildable and defensible.

**Score breakdown summary**: MV 3×3=9, CW 4×2=8, LTD 3×2=6, NFT 4×1=4, CA 3×2=6, CP 3×1=3, AS 3×2=6, RP 3×1=3, MRR 4×3=12, BF 2×2=4, BBB 5×2=10 = **71/105**

---

## Tier 3: Pass (Score <55)

| Idea | Reason |
|------|--------|
| **Homebreeze / Home Services Marketplace** | Marketplace model requires supply-side network; not a pure software play; slow to build |
| **Propify / API Aggregator** | Developer infrastructure, not a user-facing product; needs another product layer on top |
| **Kanda / Tradesperson Customer Financing (US)** | Transaction fee model doesn't suit LTD playbook; fintech compliance is heavy; Kanda already in UK |
| **QuickBooks ↔ Field Service Sync (standalone)** | Covered as part of the broader FSM opportunity; standalone sync layer is hard to monetize and has limited MRR ceiling |
| **BUS Core / Manufacturing ERP for Small Shops** | Open-source competitor; ERP is too complex for 4-6 week MVP; covered by existing `manufacturing-erp-sme.md` |
| **Latchel / DIY Landlord Maintenance Coordination** | Covered by `property-management.md`; service model (not pure software) adds cost complexity |

---

## Top 3 Recommendations

1. **AI Call Answering for Trades** — Score: 89/105 — Fastest to build (2-4 weeks on Bland.ai/Retell.ai), massive ROI story ("never miss a $2K plumbing call"), standalone product that works as a wedge into broader FSM. AppSumo at $299 LTD.
   - **Key source**: https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/

2. **Pest Control Software for 1-10 Techs** — Score: 89/105 — EPA-compliant chemical logs are legally required yet no affordable tool does them. Clear mid-market gap between GorillaDesk (too basic) and PestPac (too expensive). 30K+ pest control businesses. Build in 4-5 weeks, launch at $69 LTD.
   - **Key source**: https://tooleduppro.com/guides/best-pest-control-software/

3. **Landscaping / Lawn Care with Chemical Compliance** — Score: 88/105 — YardBook is 10 years old and dated; the market is proven and active; chemical compliance + route optimization + seasonal invoicing is the winning combination. Monthly threads in r/lawncare validate demand. Build in 4-6 weeks, launch at $99 LTD.
   - **Key source**: https://www.reddit.com/r/lawncare/comments/1se3qmr/what_software_is_everyone_using_to_run_their/

---

## Summary Stats

| Metric | Count |
|--------|-------|
| Raw idea signals ingested | ~30 |
| Unique verticals evaluated | 15 |
| Tier 1 (75+) | 11 |
| Tier 2 (55-74) | 2 |
| Tier 3 (Pass) | 6 |
| New shortlisted files to create | 7 |
| Existing shortlisted files to update | 5 |
| Highest signal cross-source | HVAC/Trades FSM (all 4 sources) |
| Best LTD opportunity | AI Call Answering for Trades |
| Best boring-business fit | Pest Control + Landscaping |
