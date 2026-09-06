# Idea Evaluation — 2026-09-05

**Sources scanned**: reddit-2026-09-05, hn-indiehackers-2026-09-05, competitor-analysis-2026-09-05, trends-2026-09-05  
**Also incorporating**: reddit-2026-09-04, competitor-analysis-2026-09-04 (for context and continuity)

**Total raw ideas reviewed**: 32 discrete signals (10 Reddit, 17 HN/IH, 4 competitor deep-dives, 9 trend signals — many overlap)  
**Existing shortlisted files updated**: 5 | **New files created**: 0 (all ideas map to existing canonical files)

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. HVAC Small Shop Dispatch & Invoicing — Score: 95/105
*(updates `shortlisted/hvac-small-shop-dispatch.md`, ↑1 from 94)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 40-60K HVAC/plumbing/electrical shops in 3-8 tech range; $245-500/tech/mo ServiceTitan proving willingness to pay |
| Competitor Weakness | 5/5 | ServiceTitan terminated Podium integration Aug 2026 with 4 weeks' notice; $39,375 documented early termination fee (BBB Jan 2026); BBB rating 1.3/5 |
| LTD Viability | 4/5 | $89 LTD vs $24K-$50K cancellation fee = visceral contrast that writes its own marketing copy |
| No Free Tier | 5/5 | HVAC shops must pay for dispatch/invoicing/pricebook; no viable free alternative |
| Channel Access | 5/5 | r/HVAC (650K), r/Plumbing, ACCA forums, PHCC Facebook groups, HVAC-Talk forum, Contractor Talk (145K) |
| Content Potential | 4/5 | "ServiceTitan alternative", "HVAC software small business 2026", "Housecall Pro alternative" |
| AppSumo Fit | 4/5 | ServiceTitan horror stories highly shareable; $89 LTD vs $39,375 cancellation = irresistible headline; no HVAC FSM on AppSumo |
| Review Potential | 4/5 | HVAC contractors very vocal on Reddit, BBB, G2; community shares horror stories willingly |
| MRR Path | 4/5 | $79/mo × 200 shops = $15.8K MRR; maintenance agreements = operational lock-in |
| Build Feasibility | 4/5 | Dispatch board + equipment history + flat-rate pricebook + maintenance agreements + Stripe = 6-8 weeks |
| Boring Business Bonus | 5/5 | HVAC = deeply unglamorous, essential infrastructure, VC-ignored |

**Weighted Total: 95/105**

**Verdict**: BUILD  
**Decision Status**: NEW — see `ideas/decisions.md`  
**Next Steps**: Position as "ServiceTitan escape ramp" — onboarding in days not months, month-to-month only, HVAC pricebook templates included (not sold separately), maintenance agreement module built-in; target ServiceTitan refugees accelerated by Aug 2026 Podium integration termination  
**Risks**: Housecall Pro or Jobber could add HVAC-specific templates; maintenance agreements add scope to MVP; seasonal cash flow pattern increases churn risk  
**Key Source Links**:
- https://www.bbb.org/us/ca/glendale/profile/project-management-software/servicetitan-inc-1216-1290182/complaints?page=2
- https://projul.com/blog/servicetitan-pricing-analysis-2026/
- https://fieldcamp.ai/reviews/servicetitan/
- https://serviceagent.ai/blogs/best-hvac-software-for-small-business/
- https://contractortoolstack.com/software/servicetitan/
- https://www.getonecrew.com/post/servicetitan-reviews

**Signal Frequency**: 50+ mentions across 120+ days — strongly increasing; ServiceTitan's Podium termination Aug 2026 is a new catalyst that will accelerate switching intent

---

### 2. Landscaping & Lawn Care Business OS — Score: 100/105
*(updates `shortlisted/landscaping-lawn-care.md`, STABLE)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | SA post-Xplor collapse ongoing; ZenMaid $3M/yr adjacent playbook proven; Attentive.ai $30.5M validates AI estimating for landscaping |
| Competitor Weakness | 5/5 | SA 25% price hike + Xplor payment processor lock-in + GPS removed; LMN $297-648/mo; Yardbook Android-only; no chemical compliance at budget tier |
| LTD Viability | 4/5 | $79-99 LTD viable; route optimization as ongoing value |
| No Free Tier | 4/5 | Yardbook is free but critically limited; operators pay when they need route optimization + chemical tracking |
| Channel Access | 5/5 | r/lawncare (350K+), LawnSite.com (1M+), FB "Lawn Care Business Owners" (200K+), YouTube channels |
| Content Potential | 4/5 | "Service Autopilot alternative", "lawn care software", "chemical application log" |
| AppSumo Fit | 5/5 | Zero dedicated lawn care software on AppSumo = first mover; strong LTD demographic |
| Review Potential | 4/5 | Operators vocal on LawnSite.com, Capterra, r/lawncare |
| MRR Path | 5/5 | Route data + recurring billing + chemical compliance = high operational lock-in |
| Build Feasibility | 4/5 | Route opt + chemical log + scheduling + invoicing = 6-8 weeks |
| Boring Business Bonus | 5/5 | Quintessential sweaty startup; EPA compliance adds regulatory moat |

**Weighted Total: 100/105**

**Verdict**: BUILD  
**Decision Status**: BUILDING  
**Next Steps**: SA defector wave ongoing — acquisition window now; EPA chemical log compliance = must-have differentiator vs all competitors; commercial landscaping crew ops angle (Jobber not designed for commercial teams) is a new sub-segment worth targeting with team coordination features  
**Risks**: SA has loyal power users; Yardbook's free tier creates conversion resistance; Deep Lawn and Attentive.ai expanding AI estimating  
**Key Source Links**:
- https://lawncrewpro.com/software/service-autopilot-review/
- https://www.capterra.com/p/122075/Service-Autopilot/reviews/
- https://lawnstarter.com/blog/reviews/software/best-lawn-care-software/
- https://www.reddit.com/r/smallbusiness/comments/1q6prh4/need_help_with_software_for_small_business.json
- https://www.reddit.com/r/landscaping/comments/1ry444e/what_is_the_best_ios_landscaping_software.json

**Signal Frequency**: 150+ mentions across 200+ days — stable at maximum conviction; commercial landscaping team ops is a new sub-angle confirmed today

---

### 3. Cleaning Service Management — Per-Job Profitability — Score: 93/105
*(updates `shortlisted/cleaning-service-management.md`, ↑3 from 90)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr ($250K MRR) bootstrapped = adjacent proven playbook; 500K+ cleaning businesses in US |
| Competitor Weakness | 5/5 | ZenMaid payment failures = #1 review issue; no per-job profit visibility anywhere; revenue-share payroll in Gusto doesn't work; Android app 3.2-3.3★ at ZenMaid/HCP vs iOS 4.7★ |
| LTD Viability | 4/5 | $69 LTD for up to 15 cleaners is very viable; flat-fee value prop vs ZenMaid's per-seat escalation |
| No Free Tier | 4/5 | No credible free cleaning tool for 5-25 employee operations |
| Channel Access | 5/5 | r/cleaning_business, FB "Cleaning Business Owners" (100K+), MaidSummit, The Cleaning Coach podcast |
| Content Potential | 4/5 | "ZenMaid alternative", "cleaning business software", "per job profitability cleaning" |
| AppSumo Fit | 4/5 | "See your profit per job" = highly compelling AppSumo hook; ZenMaid payment reliability issues = active switching intent |
| Review Potential | 4/5 | Cleaning business owners vocal on Google Reviews, FB groups, Trustpilot |
| MRR Path | 5/5 | GPS payroll bridge + recurring billing + job costing = high operational lock-in |
| Build Feasibility | 4/5 | GPS clock-in + photo proof + auto-invoice + revenue-share payroll calculator + job margin dashboard = 6-8 weeks |
| Boring Business Bonus | 5/5 | Cleaning = quintessential blue-collar sweaty startup, VC-ignored |

**Weighted Total: 93/105**

**Verdict**: BUILD  
**Decision Status**: NEW — upgraded to 93/105 today with strongest competitor data yet  
**Next Steps**: Lead with per-job profitability dashboard as primary differentiator (no competitor does this under $150/mo); flat-rate Stripe processing (1.5% + $0.25) vs Jobber 2.9%+$0.30 = significant ROI at 200+ clients/month; Android-first design is category-first; revenue-share payroll built-in (no Gusto export needed)  
**Risks**: ZenMaid could add per-job margin dashboard; CleanerHQ is attempting this feature set; payment processing integration adds ongoing infrastructure cost  
**Key Source Links**:
- https://cleanerhq.com/best-cleaning-business-software/
- https://get.zenmaid.com/compare/jobber
- https://homeservicesorted.com/cleaning/zenmaid-review/
- https://www.reddit.com/r/cleaning_business/comments/1rpun4p/im_building_a_simpler_alternative_to/
- https://www.workyard.com/compare/cleaning-service-software

**Signal Frequency**: 30+ mentions across 95+ days — strongly increasing; triple confirmation today from competitor analysis is highest-quality signal to date

---

### 4. Auto Repair Declined-Service Follow-Up & Customer Reactivation — Score: 90/105
*(updates `shortlisted/auto-repair-reactivation.md`, ↑2 from 88)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | PartsTech survey of 618 shops: $40K-$70K in annual missed revenue per shop from insufficient follow-up; 160K+ independent shops |
| Competitor Weakness | 5/5 | Tekmetric ($179-439/mo) + Kukui ($200-500/mo) + Steer ($179-299/mo) = $400-900/mo stack; per-SMS fees compound; no tool under $100/mo covers full retention loop |
| LTD Viability | 4/5 | $79 LTD 1 shop unlimited customers = very viable; "recovered $5K in declined repairs in month 1" pitch |
| No Free Tier | 4/5 | No credible free alternative for declined-work re-engagement with SMS automation |
| Channel Access | 4/5 | r/AutoMechanic, AutoShopOwner.com, NAPA AutoCare forums, NAPA/ASE Facebook groups, Automotive Management Institute community |
| Content Potential | 3/5 | "auto repair customer retention", "declined service follow-up software" — moderate volume |
| AppSumo Fit | 4/5 | Clear ROI story (recovered revenue trackable); "add-on to any shop management system" = broad addressable market |
| Review Potential | 4/5 | Shop owners vocal; quantifiable ROI = positive reviews |
| MRR Path | 4/5 | $79/mo post-LTD per location; multi-location shops = natural upsell |
| Build Feasibility | 4/5 | Automated SMS sequences with conditional logic + CSV/API integration = 4-6 weeks; no shop management required |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring, VC-ignored, essential local service |

**Weighted Total: 90/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Works alongside ANY existing shop management software via CSV export or API — positioning as an add-on, not a replacement, is key; integrate with Shopmonkey/Tekmetric first (largest platforms); show "recovered revenue" dashboard as primary conversion metric  
**Risks**: Kukui or Steer could launch an affordable tier; integration maintenance overhead as shop management software updates APIs  
**Key Source Links**:
- https://www.autivoapp.com/blog/best-customer-retention-tools-auto-shops-2026
- https://www.launchadvisor.co/guides/customer-retention-auto-repair-shop
- https://www.g2.com/products/tekmetric/reviews?qs=pros-and-cons
- https://partstech.com/parts-markup-matrix/
- https://techroute66.com/auto-repair-management-software

**Signal Frequency**: 20+ mentions across 30+ days — increasing; PartsTech $40-70K quantified revenue loss is the strongest ROI data point discovered for this idea

---

### 5. Auto Repair Shop Management (Core Platform) — Score: 100/105
*(updates `shortlisted/auto-repair-shop-management.md`, STABLE)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 190K+ independent US shops, $2.5B market; Shopmonkey $110M raised at 2.6% penetration = enormous greenfield |
| Competitor Weakness | 5/5 | Mitchell 1 Windows-only, Shopmonkey v2.0 regression ongoing, Tekmetric $179+/mo, AutoLeap annual contracts |
| LTD Viability | 4/5 | $79 LTD solo / $149 up to 3 bays; DVI storage is ongoing cost |
| No Free Tier | 4/5 | ARI is near-free but critically limited |
| Channel Access | 5/5 | r/AutoMechanic, r/MechanicAdvice, NAPA AutoCare networks, ASE forums, FB "Independent Auto Repair Shop Owners" (50K+) |
| Content Potential | 4/5 | "auto repair software small shop", "Shopmonkey alternative", "Tekmetric alternative" |
| AppSumo Fit | 3/5 | High TAM; auto repair category absent from AppSumo |
| Review Potential | 4/5 | Shop owners review on G2, Capterra; Mitchell 1 billing fraud stories very shareable |
| MRR Path | 4/5 | DVI + parts ordering + customer portal = recurring value; $99-149/mo post-LTD |
| Build Feasibility | 3/5 | VIN lookup + parts catalog + DVI + QB sync + SMS = 10-12 weeks for full-featured MVP |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring, essential, VC-ignored below $2M revenue shops |

**Weighted Total: 100/105**

**Verdict**: BUILD  
**Decision Status**: BUILDING  
**Next Steps**: Retention platform (see above) is a logical add-on module; focus core MVP on work orders + DVI + 2-way SMS + QB sync at $59/mo or $79 LTD  
**Risks**: Shopmonkey well-funded at $110M; AutoLeap $53M Series B; VIN/parts integration complexity  
**Key Source Links**:
- https://www.g2.com/compare/mitchell-1-automotive-repair-vs-shopmonkey
- https://www.g2.com/compare/mitchell-1-automotive-repair-vs-tekmetric
- https://techroute66.com/auto-repair-management-software
- https://garage360.io/auto-repair-software-comparison

**Signal Frequency**: 100+ mentions across 170+ days — stable at maximum conviction

---

### 6. Pest Control Vertical SaaS — Score: 96/105
*(updates `shortlisted/pest-control.md`, ↑1)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $26.1B US pest control; DASHP $100K ARR bootstrapped validates commission tracking sub-niche; PestRoutes acquired for $300M; GorillaDesk 35K+ users |
| Competitor Weakness | 5/5 | AI voice agents growing 67% YoY; GorillaDesk/FieldRoutes serve mid-market; solo operator gap below $49/mo |
| LTD Viability | 4/5 | Chemical compliance = regulatory fear sells; $79-99 LTD with compliance angle |
| No Free Tier | 4/5 | No free pest control tool with chemical tracking |
| Channel Access | 4/5 | r/pestcontrol, NPMA events, pest control Facebook groups; door-to-door sales = validated channel (DASHP) |
| Content Potential | 5/5 | "pest control software", "EPA chemical tracking", "pest control AI receptionist" |
| AppSumo Fit | 4/5 | Compliance value prop + solo operator market = AppSumo fit; DASHP model proves monetization |
| Review Potential | 4/5 | Compliance drives adoption and stickiness; operators review when it passes inspections |
| MRR Path | 4/5 | Per-route or per-tech monthly; compliance update subscription as premium tier |
| Build Feasibility | 4/5 | Route optimization + chemical log + recurring scheduling + EPA compliance = 4-5 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring, essential, non-glamorous |

**Weighted Total: 96/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: DASHP model validates door-to-door sales as acquisition channel for pest control software; HN "took a technician job" thread confirms founder-market fit as key success factor; exam prep gap (no quality digital prep tool for pest control licensing) = standalone LTD angle; AI voice agent specifically for pest control (knows pest terminology + treatment protocols) = white space  
**Risks**: GorillaDesk is growing fast (437% previously documented); EPA compliance rules vary by state; smaller market than general FSM  
**Key Source Links**:
- https://www.starterstory.com/stories/dashp
- https://news.ycombinator.com/item?id=47509571
- https://gettinylawn.com/best/ai-voice-agent-for-pest-control/
- https://fieldpie.com/blog/best-pest-control-software-2026/

**Signal Frequency**: 30+ mentions across 90+ days — increasing; DASHP $100K ARR is strongest new validation signal

---

## Tier 2: Worth Exploring (Score 55-74)

### 7. Affordable Field Service Management for 1-5 Techs — Score: 88/105
*(updates `shortlisted/field-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Multiple high-engagement Reddit threads; Housecall Pro $96K new MRR from trade-specific bundles validates demand |
| Competitor Weakness | 4/5 | Jobber bloated, HCP add-on creep, ServiceTitan enterprise-only; solo tradespeople structurally unserved |
| LTD Viability | 4/5 | $59-79 LTD per seat compelling vs $600+/yr ongoing |
| No Free Tier | 4/5 | No viable free option for scheduling + quoting + invoicing + customer notification |
| Channel Access | 5/5 | Multiple trade subreddits; r/sweatystartup |
| Content Potential | 4/5 | "Jobber alternative", "ServiceTitan alternative small business" |
| AppSumo Fit | 4/5 | Strong precedent; horizontal FSM = broader audience |
| Review Potential | 4/5 | Trades very vocal on reviews |
| MRR Path | 4/5 | Core workflow = strong retention |
| Build Feasibility | 4/5 | 5 core features: job scheduling, quote→invoice, tech app, notifications, payments |
| Boring Business Bonus | 5/5 | Trades across all categories = deeply boring |

**Verdict**: EXPLORE FURTHER (high confidence but category crowded — differentiate on single trade vertical)  
**Next Steps**: Pick ONE trade vertical (pool/spa, garage door, irrigation — niches HCP bundles skip) and go deep; solo/1-2 tech market is most unserved  
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1oj05gy/servicetitan_alternatives_actually_affordable/
- https://www.reddit.com/r/Plumbing/comments/1r68cug/is_jobberservicetitan_overkill_for_solo_guys_i/
- https://www.saasrise.com/news/housecall-pro-adds-96k-mrr-with-tradespecific-saas-for-hvac-plumbing-and-electrical

---

### 8. Property Management Analytics Layer — Score: 74/105
*(updates `shortlisted/property-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | AppFolio 19K clients; consistent reporting complaints; PM industry manages 50M rental units |
| Competitor Weakness | 4/5 | AppFolio built-in reporting "borderline limited"; no lightweight analytics layer for 50-500 unit PMs |
| LTD Viability | 3/5 | Ongoing API connection = recurring costs; $199-399 LTD viable but tight |
| No Free Tier | 4/5 | No free analytics overlay for AppFolio/Buildium |
| Channel Access | 3/5 | r/PropertyManagement, BiggerPockets — moderate subreddit engagement |
| Content Potential | 3/5 | "AppFolio reporting alternative", "property management analytics" |
| AppSumo Fit | 3/5 | Property managers less likely AppSumo buyers; B2B SaaS model better |
| Review Potential | 3/5 | Moderate review activity in PM space |
| MRR Path | 4/5 | $49-99/mo per PM company = strong recurring; API integration = stickiness |
| Build Feasibility | 3/5 | AppFolio API + Buildium API integrations are non-trivial; dashboard design complex |
| Boring Business Bonus | 4/5 | Property management = unglamorous, underserved, loyal customer base |

**Verdict**: EXPLORE FURTHER  
**Next Steps**: Start with AppFolio API (best documented) for 50-500 unit PM companies without a dedicated BI team; focus on NOI per property, vacancy trends, maintenance cost per unit  
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1rripeb/do_you_know_any_appfolio_alternatives_for.json

---

### 9. Owner-Operator Trucker AI Co-Pilot — Score: 72/105
*(updates `shortlisted/owner-operator-trucking-tms.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ small carriers; Truckpedia $300/mo validates willingness to pay; ELD mandate = must-have software |
| Competitor Weakness | 4/5 | No tool built for solo trucker who IS the dispatcher; Truckpedia targets 3+ truck operations |
| LTD Viability | 3/5 | Truckers prefer monthly for ops tools; $299 LTD for "core features" possible |
| No Free Tier | 4/5 | Truckers must have dispatch + ELD compliance tools |
| Channel Access | 3/5 | r/Truckers, r/OwnerOperators — engaged but skeptical of software |
| Content Potential | 3/5 | "owner operator app", "solo trucker software", "ELD compliance small fleet" |
| AppSumo Fit | 2/5 | Truckers are not typical AppSumo buyers |
| Review Potential | 3/5 | Truckers leave reviews on CDL forums and Google |
| MRR Path | 4/5 | $49/mo × 1,000 solo operators = $49K MRR; compliance renewal = stickiness |
| Build Feasibility | 3/5 | ELD integration + IFTA filing + load planning = non-trivial compliance features |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, blue-collar, VC-ignored below mid-market |

**Verdict**: EXPLORE FURTHER  
**Key Source Links**:
- https://truckpedia.io/resources/best-trucking-software-small-fleets

---

### 10. MEP Subcontractor Crew Scheduling — Score: 70/105
*(new signal — maps to `shortlisted/multi-site-contractor-time-tracking.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Universal Excel usage for crew scheduling among MEP subs; r/ConstructionManagers active |
| Competitor Weakness | 4/5 | No construction-specific collaborative crew scheduling at budget tier; Smartsheet too generic; Procore GC-focused |
| LTD Viability | 4/5 | $99-149 LTD viable; specialty subs pay once for Excel replacement |
| No Free Tier | 3/5 | Smartsheet free tier exists but too generic |
| Channel Access | 3/5 | r/ConstructionManagers, specialty contractor associations — smaller communities |
| Content Potential | 3/5 | "MEP crew scheduling software", "subcontractor workforce planning" |
| AppSumo Fit | 3/5 | Specialty audience but clear ROI over Excel |
| Review Potential | 3/5 | Construction managers leave reviews |
| MRR Path | 3/5 | $49-99/mo per company; reporting exports as premium feature |
| Build Feasibility | 4/5 | Web-based crew calendar: projects, assign crew by week, conflict view, PDF export = 4-5 weeks |
| Boring Business Bonus | 5/5 | Mechanical subcontracting = deeply boring, technical, professional |

**Verdict**: EXPLORE FURTHER  
**Key Source Links**:
- https://www.reddit.com/r/ConstructionManagers/comments/1l46phf/mep_sub_scheduling_software.json

---

### 11. Post-Job Follow-Up SMS Automation for Trades — Score: 69/105
*(updates `shortlisted/quote-followup-automation.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CraftBoop launched at $29/mo and getting traction; trades universally bad at follow-up |
| Competitor Weakness | 4/5 | CraftBoop email-only; SMS/WhatsApp dramatically outperforms email for trades audience |
| LTD Viability | 4/5 | $49 LTD strong; low infrastructure cost (Twilio API) |
| No Free Tier | 3/5 | Generic automation tools exist but not trade-specific |
| Channel Access | 4/5 | All trade subreddits, trade Facebook groups |
| Content Potential | 3/5 | "trades review request automation", "HVAC follow-up software" |
| AppSumo Fit | 4/5 | Simple single-purpose tool = AppSumo sweet spot |
| Review Potential | 3/5 | Moderate review activity |
| MRR Path | 3/5 | $29-39/mo; need Jobber/HCP integration for stickiness |
| Build Feasibility | 5/5 | Email/SMS sequences + Jobber webhook integration = 2-3 weeks |
| Boring Business Bonus | 4/5 | Serves all trades; unglamorous automation |

**Verdict**: EXPLORE FURTHER  
**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

---

### 12. T&M Consumables Billing Tracker for Electricians — Score: 68/105
*(updates `shortlisted/electrical-contractor-software.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Active Reddit thread with OP researching product idea; T&M electrical work massive market segment |
| Competitor Weakness | 4/5 | No purpose-built consumable tracking tool; QuickBooks = manual re-entry, Excel = no mobile |
| LTD Viability | 4/5 | $49-79 LTD; low feature scope = low build cost |
| No Free Tier | 3/5 | Excel is "free" but mobile app removes the frictionless comparison |
| Channel Access | 4/5 | r/AskElectricians, r/electricians, electrical contractor Facebook groups |
| Content Potential | 3/5 | "electrician billing app", "T&M consumables tracking" — lower volume |
| AppSumo Fit | 3/5 | Very niche; specialized audience |
| Review Potential | 3/5 | Electricians practical buyers; will review if it saves time |
| MRR Path | 3/5 | Could expand to plumbers, HVAC techs; integration with invoicing tools |
| Build Feasibility | 5/5 | Mobile app + consumable catalog + markup calculator + PDF export = 1-2 weeks |
| Boring Business Bonus | 5/5 | Electrical contracting = deeply boring, essential |

**Verdict**: EXPLORE FURTHER (MVP is extremely fast to build — natural wedge into broader electrical contractor software)  
**Key Source Links**:
- https://www.reddit.com/r/AskElectricians/comments/1qn2g9k/electricians_doing_tm_how_do_you_track.json

---

### 13. QuickBooks Desktop Exodus — Desktop Bookkeeping Alternative — Score: 65/105
*(updates `shortlisted/bookkeeping-accounting.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 3.5M QBDT users; $350/yr price increase documented; Practice Ignition +136% in 3 years |
| Competitor Weakness | 3/5 | Crowded space (Xero, Wave, FreshBooks); desktop requirement is specific niche |
| LTD Viability | 4/5 | $79-149 LTD for desktop software = historically proven model |
| No Free Tier | 3/5 | Wave/TurboTax are free alternatives (limited) |
| Channel Access | 4/5 | r/Bookkeeping, r/smallbusiness, accounting firm Facebook groups |
| Content Potential | 4/5 | "QuickBooks Desktop alternative 2026", "QBDT alternative" = high-intent search |
| AppSumo Fit | 3/5 | Bookkeeping firms = AppSumo buyers but crowded category |
| Review Potential | 3/5 | Accountants review tools extensively |
| MRR Path | 2/5 | Desktop software has weak MRR path; payroll add-on could be recurring |
| Build Feasibility | 2/5 | Full bookkeeping = 6+ months; payroll adds complexity; QBDT import non-trivial |
| Boring Business Bonus | 4/5 | Accounting = boring/unsexy professional service |

**Verdict**: EXPLORE FURTHER (specific sub-angle: proposal + engagement letter + payment processing for small bookkeeping firms fleeing Practice Ignition is more targeted and faster to build)  
**Key Source Links**:
- https://www.reddit.com/r/Bookkeeping/comments/1mbt09w/qbdt_price_increase_is_outrageous.json
- https://www.reddit.com/r/Bookkeeping/comments/1ci1s92/practice_ignition_is_jacking_their_prices_again/

---

## Tier 3: Pass / Weak Signal (Score <55)

| Idea | Score | Pass Reason |
|------|-------|-------------|
| Home Services WhatsApp+Sheets Replacement (10-30 techs) | 62/105 | Crowded with Jobber/HCP alternatives; custom $6-9K build objection shows price sensitivity; complex multi-tenant dispatch scope |
| Small Business GPS Fleet Efficiency Tracker | 58/105 | Hardware required = LTD complications; Bouncie and Samsara lite options growing; niche competes with established GPS market |
| Simple GC Project Tracker (5-15 jobs/year) | 56/105 | Very small TAM per operator; BuilderTREND and Houzz Pro already moving down-market; GCs are slow software adopters |
| AI Voice Agent for Single Trade (standalone) | 55/105 | Market growing 67% YoY but getting crowded fast; Zoom entered at $29.99/mo; differentiation requires deep trade integration that adds scope |
| Food Truck Permit Compliance Tracker | 52/105 | Very small TAM (200K food trucks); FoodTruckOne already building this at $9/mo; growth ceiling limited |
| PE Roll-Up Multi-Location FSM (3-15 locations) | 48/105 | Complex multi-tenant architecture (8-12 weeks); PE firms don't buy LTDs; ServiceTitan enterprise is the only comp |
| Local Business Directory (classifieds model) | 42/105 | Location-dependent; not LTD-friendly; $25K MRR from single city not scalable SaaS |
| CFO-Level Insights for 40-100 Person Companies | 40/105 | Crowded (Jirav, Mosaic, Runway, Fathom); no LTD fit; high implementation complexity |

---

## Top 3 Recommendations

1. **HVAC Small Shop Dispatch — ServiceTitan Escape Ramp** — Score: 95/105 — "Month-to-month FSM for 3-8 tech HVAC shops with built-in flat-rate pricebook and maintenance agreement tracking" — ServiceTitan's Aug 2026 Podium integration termination is a live churn catalyst — Target: r/HVAC (650K), PHCC Facebook groups
   - Sources: https://projul.com/blog/servicetitan-pricing-analysis-2026/ | https://contractortoolstack.com/software/servicetitan/

2. **Cleaning Service — Per-Job Profitability Platform** — Score: 93/105 — "Only cleaning software that shows per-job margin in real time, with revenue-share payroll built in and Android-first design" — ZenMaid payment failures creating active switching intent — Target: FB "Cleaning Business Owners" (100K+), r/cleaning_business
   - Sources: https://cleanerhq.com/best-cleaning-business-software/ | https://homeservicesorted.com/cleaning/zenmaid-review/

3. **Auto Repair Declined-Service Reactivation** — Score: 90/105 — "Bolt-on SMS automation capturing $40-70K/year in declined repair revenue for independent auto shops" — PartsTech survey of 618 shops quantifies the ROI; works alongside any existing shop management system — Target: r/AutoMechanic, NAPA AutoCare forums
   - Sources: https://partstech.com/parts-markup-matrix/ | https://www.autivoapp.com/blog/best-customer-retention-tools-auto-shops-2026

---

## Meta Signals Worth Noting

**1. ServiceTitan Lock-In is Accelerating as a Customer Acquisition Channel**  
The Podium integration termination (Aug 2026, 4 weeks notice), combined with documented $24K-$50K buyout fees and a 1.3/5 BBB rating, has created the most active churn signal in the field service space. Any product positioning itself as a ServiceTitan alternative NOW captures this sentiment at peak.

**2. "Per-Job Profitability" is the New Demand Layer**  
Both cleaning and lawn care communities are evolving from "just schedule my jobs" to "show me which jobs are actually making money." This represents market maturation — businesses that survived year 1 now want to optimize. The first tool in each vertical to show per-job margin wins operational lock-in.

**3. Android-First is a Category-Wide Differentiator No One Has Claimed**  
ZenMaid (3.2★ iOS), Housecall Pro (3.3★ Android vs 4.7★ iOS), and ServiceTitan (2.9★ Android) all have severe Android problems. Cleaning crews, landscaping crews, and field techs are predominantly Android users. An Android-first cleaning or landscaping tool has an immediate technical differentiator that competitors structurally cannot fix quickly.

**4. Boring SaaS is AI-Resistant (Meta-Validation from r/SaaS)**  
A plumbing/HVAC SaaS founder explicitly states: "AI agents scheduling a plumber at 2am while coordinating parts and crew is years away." Boring business SaaS has a long runway. This is consistent directional confirmation: double down on non-glamorous, field-operations SaaS where the competitive moat is distribution + domain knowledge, not technology.
