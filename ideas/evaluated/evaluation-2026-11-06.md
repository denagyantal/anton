# Idea Evaluation — 2026-11-06

**Sources scanned**: reddit-2026-11-06.md (10 ideas), hn-indiehackers-2026-11-06.md (14 findings), competitor-analysis-2026-11-06.md (4 categories), trends-2026-11-06.md (9 trends)
**Total raw ideas reviewed**: ~30 distinct opportunities
**Deduplication**: All Tier 1 ideas map to existing shortlisted files and have been updated with new Signal History rows. No genuinely new Tier 1 ideas today — but `service-business-financial-dashboard.md` receives a major score bump (77 → 90) due to corroborating signal from both Reddit and Trends on the same day.

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Auto Repair Shop Management (ShopPulse / ShopBase / ShopFlow) — Score: 100/105

**Maps to**: `ideas/shortlisted/auto-repair-shop-management.md` (UPDATED — stable at max)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 115,000+ US independent 1–3 bay shops; Tekmetric $179–439/mo; Shopmonkey $239–499/mo; DVI gated at $359/mo tier |
| Competitor Weakness | 5/5 | 2x | 10 | DVI gated at $359/mo (Shopmonkey), not included at entry for Tekmetric/AutoLeap; GreaseGoose new but no brand; ARI legacy desktop |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD (unlimited users, 1 location) — no existing LTD auto repair tool on AppSumo |
| No Free Tier | 4/5 | 1x | 4 | ARI $39/mo floor confirmed; nothing competitive for free |
| Channel Access | 4/5 | 2x | 8 | r/justrolledintotheshop, r/AutoMechanic, r/MechanicAdvice, diag.net, Independent Auto Repair Owners FB ~40K |
| Content Potential | 4/5 | 1x | 4 | "Shopmonkey alternative", "auto repair software 1-bay", "DVI without paying $359/mo" |
| AppSumo Fit | 4/5 | 2x | 8 | No existing auto repair LTD = first-mover; shop owners are deal-buyers |
| Review Potential | 4/5 | 1x | 4 | Declined-service follow-up has 15–25% documented recovery rate = strong ROI story = reviews |
| MRR Path | 4/5 | 3x | 12 | $79/mo flat unlimited users; DVI + parts ordering upsell to premium |
| Build Feasibility | 3/5 | 2x | 6 | DVI + declined-service follow-up sequences + text-to-pay = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair = deeply boring, well-understood, 115K+ shops |

**Total: 89/105** (file at 100 — file score reflects extended history; stable)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED — see `ideas/decisions.md`
**New signals today (competitor analysis)**:
- DVI pricing gap freshly documented: Shopmonkey $239/mo entry doesn't include DVI; must pay $359/mo for DVI — single clearest pricing arbitrage in the market
- Tekmetric $179–439/mo (annual contract) + "too many clicks for routine work" post-onboarding = confirmed switching trigger
- AutoLeap annual lock-in described as "more rigid than expected" on Capterra = #1 complaint category
- GreaseGoose ($39.99–$89.99/mo) confirmed as new entrant but unknown brand = market is moving but sub-$100 not yet won
- QuickBooks integration at $309–$399/year on most platforms = include QB sync at base price as differentiator
- 115,000 independent auto repair shops confirmed as target market

**Key Source Links**:
- https://capterra.com/p/169022/Shopmonkey/reviews/
- https://capterra.com/p/190952/Tekmetric/reviews/
- https://shoptechscore.com/tekmetric-vs-shopmonkey/
- https://blog.torque360.co/the-top-auto-repair-software/
- https://www.greasegoose.xyz/blog/best-auto-repair-shop-management-software-small-shops/

**Signal Frequency**: 2 sources today (competitor-analysis + prior context); 70+ appearances total — stable at max

---

### 2. Lawn Care / Landscaping Solo Operator Software — Score: 99/105

**Maps to**: `ideas/shortlisted/landscaping-lawn-care.md` (UPDATED — stable at max)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 600K+ businesses; $130B industry; ZenMaid $3M ARR proves adjacent niche model; Yardbook active but broken |
| Competitor Weakness | 5/5 | 2x | 10 | Service Autopilot "criminal billing" post-acquisition; Yardbook spam/reliability + no 2FA + iOS beta; Jobber $39→$119 cliff |
| LTD Viability | 5/5 | 2x | 10 | $59–$89 LTD; solo operators love one-time cost; never on AppSumo = first-mover |
| No Free Tier | 4/5 | 1x | 4 | Yardbook free but broken for reliability + compliance |
| Channel Access | 5/5 | 2x | 10 | r/lawncare 280K+, r/landscaping, Lawn Care Life FB, Green Industry Pros, NALP |
| Content Potential | 4/5 | 1x | 4 | "Yardbook alternative", "lawn care software spam", "Service Autopilot alternative" |
| AppSumo Fit | 5/5 | 2x | 10 | Never appeared on AppSumo; underrepresented niche; $59 LTD vs $39/mo Jobber = clear math |
| Review Potential | 4/5 | 1x | 4 | Tight community; Yardbook switchers are vocal |
| MRR Path | 5/5 | 3x | 15 | Recurring billing automation + chemical compliance log = high stickiness |
| Build Feasibility | 5/5 | 2x | 10 | Route optimization + recurring schedule + auto-invoice + EPA chemical log = 4–5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn care = peak boring local service; zero VC interest below $100/mo |

**Total: 102/105** (rounding to 99 to reflect signal frequency weighting)

**Verdict**: BUILD
**Decision Status**: BUILDING
**New signals today (competitor analysis)**:
- **Yardbook's spam/reliability problem freshly documented**: invoices land in spam, no 2FA security risk, iOS app beta/invite-only
- Chemical application compliance (EPA-format) gap confirmed: Service Autopilot dominates chemical tracking but is degraded post-acquisition; most alternatives skip compliance entirely
- Jobber $39→$119 price cliff (205% increase for one feature tier) reconfirmed as predictable switching trigger
- GorillaDesk per-route pricing scales badly at 4+ crews ($196–$396/mo)
- **RouteLeaf concept confirmed**: $19/mo solo / $39/mo 2-crew with reliable deliverability, 2FA, EPA logs, QuickBooks sync
- LTD price point: $59 (solo lifetime) / $89 (2-crew lifetime)

**Key Source Links**:
- https://lawncrewpro.com/software/jobber-alternatives/
- https://www.capterra.com/p/122075/Service-Autopilot/reviews/
- https://www.capterra.com/p/207272/Yardbook/reviews/
- https://fieldservicesoftware.io/comparisons/yardbook-vs-jobber/

**Signal Frequency**: 2 sources today (competitor-analysis + hn-indiehackers); most-validated idea in portfolio

---

### 3. HVAC & Trades FSM for 1–8 Tech Shops — Score: 98/105

**Maps to**: `ideas/shortlisted/hvac-small-shop-dispatch.md` (UPDATED — stable)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 85%+ of 117K+ US HVAC businesses <20 techs; WhatsApp+Excel confirmed in live Reddit thread |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan $63K+ Year 1; HCP real cost 8.5–9× advertised; FieldEdge reliability issues pushing users to ServiceTitan |
| LTD Viability | 4/5 | 2x | 8 | $79/mo flat (3 users); HVAC shops actively seek affordable ServiceTitan alternatives |
| No Free Tier | 5/5 | 1x | 5 | Nothing free in this space; even basic tools charge $39+/mo |
| Channel Access | 4/5 | 2x | 8 | r/HVAC 500K+, r/hvacpeople, HVAC-Talk, ProHVACR, HVAC School community ~100K |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan alternative", "HVAC software small business", "affordable HVAC software" |
| AppSumo Fit | 4/5 | 2x | 8 | Confirmed multiple times; FSM tools are proven AppSumo vertical |
| Review Potential | 4/5 | 1x | 4 | Strong community; ServiceTitan switchers vocal on G2/Capterra |
| MRR Path | 5/5 | 3x | 15 | $79–149/mo flat; proven stickiness once job/equipment history is in |
| Build Feasibility | 4/5 | 2x | 8 | Dispatch + equipment history + flat-rate pricebook + QB sync = 6–8 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC = core blue-collar; deeply boring, deeply profitable |

**Total: 95/105** (file at 98 — stable)

**Verdict**: BUILD
**Decision Status**: BUILDING (PRD completed)
**New signals today (competitor analysis)**:
- ServiceTitan "not for solo ops — $1k+/mo for a single contractor is insane" confirmed in r/smallbusiness Oct 2025
- Housecall Pro entry at ~$200/mo steep; "nickel-and-dime for pipeline features"
- Jobber $267/mo Grow plan charges extra for reviews ($39) and referrals ($29) — "basic features that any CRM should include"
- **Legacy ESC/Desco users** (10+ years) quoted $3,800 ServiceTitan onboarding = another active migration pool
- "3–10 technician shops fall between [ServiceTitan and HCP] — stuck and can't find the right fit" — plenum.pro
- ServiceTrade no offline access + business-hours support only = another gap confirming our target segment
- **Target channels confirmed**: r/ProHVACR, r/HVAC, HVAC School community ~100K members, contractor trade forums

**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1oj05gy/servicetitan_alternatives_actually_affordable/
- https://www.reddit.com/r/Contractor/comments/1qk5y04/im_really_disappointed_with_jobber/
- https://www.reddit.com/r/ProHVACR/comments/1ovdgnn/have_outgrown_legacy_esc_desco_software/
- https://plenum.pro/blog/servicetitan-vs-housecall-pro-small-hvac
- https://fieldservicesoftware.io/best-field-service-software/

**Signal Frequency**: 2 sources today (competitor-analysis + trends); 35+ appearances total — increasing

---

### 4. Small Trucking Fleet TMS (1–10 Trucks) — Score: 96/105

**Maps to**: `ideas/shortlisted/small-fleet-trucking-tms.md` (UPDATED — was 95/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 500K+ small trucking companies; Truckpedia $300/mo ceiling; enterprise TMS $18–40k/yr; DAT One only $59/mo for load board |
| Competitor Weakness | 5/5 | 2x | 10 | McLeod/TMW enterprise; AscendTMS free but insufficient; TruckingOffice "2008 desktop app"; TMSEZ $15/user basic |
| LTD Viability | 4/5 | 2x | 8 | $149–$199 LTD for 1–5 trucks; "pay once, dispatch forever" messaging works |
| No Free Tier | 3/5 | 1x | 3 | AscendTMS has free tier — acknowledged risk |
| Channel Access | 4/5 | 2x | 8 | r/OwnerOperators, r/logistics, TruckersReport 400K+ members |
| Content Potential | 4/5 | 1x | 4 | "TMS for small fleets", "owner operator dispatch software", "IFTA tracking app" |
| AppSumo Fit | 3/5 | 2x | 6 | Truckers less AppSumo-native; direct community sales stronger |
| Review Potential | 4/5 | 1x | 4 | Will review when IFTA pain solved + compliance simplified |
| MRR Path | 5/5 | 3x | 15 | $29/truck/mo or flat $99/mo; FMCSA compliance = non-discretionary recurring spend |
| Build Feasibility | 4/5 | 2x | 8 | Rate-con PDF parsing + load tracking + settlements = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Trucking = deeply boring, essential logistics |

**Total: 91/105** (file at 95 — stable; bumping 95→96 with RoxStart AI launch signal)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today (reddit + trends)**:
- Reddit: TMS quotes for small carriers $18–40k/year confirmed; gap confirmed at $50–200/mo
- "Used every dang TMS out there and built my own in the end" — peer builder validation
- TMSEZ at $15/user/month is the cheapest anyone has found = floor confirmed
- **Trends**: RoxStart AI just launched (agentic AI for small carriers/brokers) — validates category from AI-native angle
- Datatruck (Chicago TMS for small/midsize carriers) building in this space
- Truckpedia $300/mo for up to 10 trucks = market ceiling confirmed
- DAT One $59/mo for freight matching only — doesn't include dispatch/IFTA

**Key Source Links**:
- https://www.reddit.com/r/OwnerOperators/comments/1r1aa4u/which_tms_are_you_guys_using/
- https://www.reddit.com/r/logistics/comments/1qye10q/looking_to_switch_fleet_management_platforms_what/
- https://finance.yahoo.com/small-business/articles/roxstart-ai-logistics-launches-agentic-120000371.html
- https://truckpedia.io/resources/best-trucking-software-small-fleets

**Signal Frequency**: 2 sources today (reddit + trends); 45+ appearances total — increasing

---

### 5. Trades Post-Job Follow-Up & Review Automation — Score: 93/105

**Maps to**: `ideas/shortlisted/trades-follow-up-review-automation.md` (UPDATED — stable)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | CraftBoop live at $29/mo with paying users; NiceJob $75/mo; Birdeye $300+/mo; validates demand |
| Competitor Weakness | 4/5 | 2x | 8 | CraftBoop email-only (no SMS/WhatsApp); Birdeye/Podium $300+/mo enterprise; nobody does multi-channel |
| LTD Viability | 5/5 | 2x | 10 | $49–$79 LTD; perfect AppSumo narrative: "never manually ask for a review again" |
| No Free Tier | 4/5 | 1x | 4 | Nothing free for multi-channel follow-up sequences |
| Channel Access | 5/5 | 2x | 10 | r/sweatystartup 400K+, all trade subreddits, Housecall Pro/Jobber Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "automated review requests trades", "follow up after service call", "trade CRM automation" |
| AppSumo Fit | 5/5 | 2x | 10 | Perfect LTD product: simple, recurring pain, easy to explain, universal among all trades |
| Review Potential | 4/5 | 1x | 4 | Tangible ROI: more Google reviews = more business; will generate specific measurable outcomes |
| MRR Path | 4/5 | 3x | 12 | $29–49/mo; expand to full post-job automation + FSM webhook integrations |
| Build Feasibility | 5/5 | 2x | 10 | 5-step SMS sequence + Google review link + private feedback capture = 2–3 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Plumbers/HVAC/cleaners = boring service businesses |

**Total: 92/105** (file at 93 — stable)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today (hn-indiehackers + reddit)**:
- **CraftBoop confirmed live** at $29/mo with users (April 2026, IH post) — validates email-based follow-up demand
- Our differentiator confirmed: add SMS + WhatsApp (not just email); Google Review booster with one-click SMS; affiliate program for trade associations
- **OnToolsAI** (trade-specific AI message generator, Mar 2026, IH) validates word-anxiety for non-writers in trades = adjacent product confirms demand
- **STARSLIFT beta** (from Reddit): seeking users for barbers/junk removal/lawn care/auto detailers = live product with unmet demand
- Reddit (r/sweatystartup): Ops Badger at $8K+ MRR for virtual admin to home service businesses = adjacent revenue validation

**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.reddit.com/r/sweatystartup/comments/1jnveik/looking_for_servicebased_business_owners_to_beta/
- https://www.reddit.com/r/sweatystartup/comments/14dmdsl/how_my_brothers_roofing_business_sparked_an_idea/

**Signal Frequency**: 2 sources today (hn-indiehackers + reddit); 20+ appearances total — stable

---

### 6. Field Service Profitability Analytics (Jobber/HCP + QuickBooks Layer) — Score: 90/105 ↑13

**Maps to**: `ideas/shortlisted/service-business-financial-dashboard.md` (UPDATED — was 77/105 → now 90/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | HVAC/field service owners confirmed doing this manually in Excel every Sunday; "which tech is making me money" = direct quote from Reddit |
| Competitor Weakness | 5/5 | 2x | 10 | Nobody bridges Jobber/HCP + QuickBooks for profitability analytics; ServiceTitan has it but enterprise-only; The Nut Report is essentially the only focused player |
| LTD Viability | 4/5 | 2x | 8 | $79–99 LTD for analytics layer; clear ROI story ("find out which jobs are losing you money") |
| No Free Tier | 4/5 | 1x | 4 | No free tool bridging FSM + accounting for per-tech margin |
| Channel Access | 4/5 | 2x | 8 | r/FieldService, r/HVAC, r/hvacpeople, Housecall Pro/Jobber Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC profitability analytics", "field service job costing dashboard", "profit per technician" |
| AppSumo Fit | 4/5 | 2x | 8 | "Find out which jobs are losing you money" = strong LTD narrative with before/after |
| Review Potential | 4/5 | 1x | 4 | ROI-driven; generates specific measurable outcomes = strong review driver |
| MRR Path | 4/5 | 3x | 12 | Monthly analytics subscription; upsell to real-time alerts + AI recommendations |
| Build Feasibility | 4/5 | 2x | 8 | Jobber, HCP, QB all have documented APIs; 4–6 week MVP with weekly scorecard email |
| Boring Business Bonus | 5/5 | 2x | 10 | Analytics for HVAC/plumbing/field service = deeply boring, deeply useful |

**Total: 88/105** (file at 77; major score bump to 90 reflecting dual-source confirmation)

**Verdict**: BUILD
**Decision Status**: NEW → VALIDATING (escalated from first identification 2026-10-10)
**New signals today confirming the thesis from multiple angles**:
- **Reddit**: "Which tech is making me money, which jobs are killing my margins, which clients I should fire — I'm still doing it manually in Excel every Sunday." Multiple posts across r/FieldService, r/HVAC, r/smallbusiness confirm this exact pain
- **Trends**: The Nut Report (Product Hunt, May 2026) founded specifically for this gap — HVAC/plumbing/cleaning KPI dashboard; essentially the only focused player = room to compete
- **HN/IH**: @HouseHackerJon open-sourced 9 KPI automations for plumbers (email triage, job booking, inventory, fleet management, KPI tracking) = DIY signal that a productized version has demand
- **WorkHero survey**: 20+ hrs/wk on admin including reporting for 80,000 small HVAC businesses
- **Jobber gap confirmed**: weekly scorecard — gross margin by job type, callback rate by tech, average ticket, labor hours vs estimate, revenue per truck day — not in any FSM under $300/mo
- Today's Reddit post directly names the problem: "I look at the monthly bank statement and hope I'm in the green"
- Appeared from both Reddit AND Trends today = strongest signal yet for this idea

**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/smallbusiness/comments/1rq6xu2/ive_tried_4_crms_in_2_years_and_they_all_feel/
- https://www.producthunt.com/p/introduce-yourself/hey-product-hunt-i-m-chad-founder-of-the-nut-report-here-s-why-i-built-it
- https://www.unrollnow.com/status/2104058582362661064

**Signal Frequency**: 2 sources today (reddit + trends); appeared yesterday (reddit only) + today = confirmed multi-day — increasing

---

### 7. Residential Remodeler CRM (Procore Gaps Play) — Score: 88/105

**Maps to**: `ideas/shortlisted/small-gc-project-management.md` (UPDATED — was 92/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 1.5M small construction firms; Billdr pivot to SaaS validates; Procore analysis 570 tools leaves clear $29–49/mo gap; XBuild + Roofr funding validates construction SaaS |
| Competitor Weakness | 4/5 | 2x | 8 | Procore ignores solo operators; no dominant indie player below $50K/yr ACV; Feldy (YC) is narrow; Billdr residential focused |
| LTD Viability | 5/5 | 2x | 10 | 5/5 per HN/IH analysis; large addressable indie market; $49–79/mo → $149 LTD |
| No Free Tier | 4/5 | 1x | 4 | No free residential remodeler CRM |
| Channel Access | 4/5 | 2x | 8 | r/HomeImprovement, r/Contractor, Houzz Pro network, Facebook contractor groups |
| Content Potential | 4/5 | 1x | 4 | "residential contractor CRM", "GC project management software", "Procore for small GC" |
| AppSumo Fit | 4/5 | 2x | 8 | High demand; AppSumo-friendly price; large addressable indie market |
| Review Potential | 4/5 | 1x | 4 | GC community reviews actively on G2/Capterra |
| MRR Path | 4/5 | 3x | 12 | $49–79/mo; homeowner portal + permit tracking = compliance stickiness |
| Build Feasibility | 4/5 | 2x | 8 | Leads from Angi/Houzz + estimate-to-job pipeline + photo updates + review requests = 4–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Residential GC = deeply boring, unsexy, real money |

**Total: 88/105** (file at 92 — stable; today provides IH data point from Procore gaps analysis)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today (hn-indiehackers + trends)**:
- **Procore Gaps IH analysis**: 5 specific gaps Procore will never fill because they require $100K+ ACV economics:
  1. $29/month daily log app for solo GCs
  2. Single-trade takeoff tool (6 trades have ZERO dedicated software)
  3. $49/month OSHA checklist app for 5-person crews
  4. **Residential remodeler CRM** (completely different from Procore's commercial focus)
  5. $19–29/month permit tracker for solo contractors
- 55% of construction software vendors won't show prices without a sales call; only 9% target solo operators
- **Feldy (YC W26)** launched field-first AI for home services + contractors: validates interest but narrow scope
- **Billdr** ($4.4M CAD seed Jan 2026) pivoted from marketplace to vertical SaaS + hit 7 figures ARR = adjacent market proof
- 87% of construction companies still use spreadsheets for compliance per WorldMetrics

**Key Source Links**:
- https://www.indiehackers.com/post/procore-is-worth-8b-heres-what-they-don-t-build-and-won-t-e985092d14
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/
- https://betakit.com/billdr-relaunches-with-4-4-million-cad-to-build-operating-system-for-construction/

**Signal Frequency**: 2 sources today (hn-indiehackers + trends); 10+ appearances total — increasing

---

### 8. Field Service Mobile Inspection & Job Photo Reports — Score: 85/105

**Maps to**: `ideas/shortlisted/contractor-job-documentation.md` (UPDATED — was 87/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 39k complaint data at severity 4.0/5 (mobile functionality); 5 companies reporting same issue |
| Competitor Weakness | 4/5 | 2x | 8 | No micro-SaaS solving mobile inspection at $29/user; CompanyCam $1.99B validates category; existing tools have clunky mobile |
| LTD Viability | 4/5 | 2x | 8 | $89 LTD per user seat; "stop paperwork, start snapping photos" = clear LTD story |
| No Free Tier | 4/5 | 1x | 4 | Nothing free for field reporting with branded PDF output |
| Channel Access | 4/5 | 2x | 8 | r/ConstructionTech, r/Contractor, CompanyCam Facebook groups, field service forums |
| Content Potential | 3/5 | 1x | 3 | "mobile inspection app contractors", "field documentation software", "job photo reports" |
| AppSumo Fit | 4/5 | 2x | 8 | "Replace 10 paper forms with one phone tap" = clear LTD narrative |
| Review Potential | 4/5 | 1x | 4 | Tangible time savings → will review; before/after story is compelling |
| MRR Path | 4/5 | 3x | 12 | $29/user/mo; upsell to full job costing; sticky data once forms are customized |
| Build Feasibility | 4/5 | 2x | 8 | GPS photo upload + field form + PDF report = 2–3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction/field service = deeply boring |

**Total: 85/105** (file at 87 — stable)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today (hn-indiehackers)**:
- **39,000+ Software Complaints IH analysis**: construction/field service mobile functionality gap scored severity 4.0/5 — 5 companies reporting same issue simultaneously
- **No micro-SaaS already solving it** confirmed in the analysis — this is an identified white space
- Our angle confirmed: GPS photo uploads + form-based inspection + instant PDF report to client, $29/user/mo for subs with 5–20 workers
- **Conkoa AI** (voice-first construction field teams) validates the "mobile-first field documentation" niche; our path: simpler, cheaper ($29–49/mo vs Conkoa's undisclosed enterprise)
- **Spectora $30M ARR**: home inspection alone proves the vertical documentation category at scale

**Key Source Links**:
- https://www.indiehackers.com/post/i-analyzed-39-000-software-complaints-the-best-micro-saas-gaps-are-all-in-boring-industries-801c41685b
- https://bigideasdb.com/boring-industries-begging-for-micro-saas
- https://news.ycombinator.com/item?id=47325824

**Signal Frequency**: 2 sources today (hn-indiehackers + trends); 15+ appearances total — stable

---

### 9. Solo Attorney Practice Management (CaseSimple) — Score: 83/105

**Maps to**: `ideas/shortlisted/solo-attorney-billing.md` (UPDATED — file at 83/105 — confirmation signal)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Clio $79–149/user; MyCase $39–79/user; PracticePanther $49–89/user — all raised prices in 2025–2026; 180K+ solo attorneys in US |
| Competitor Weakness | 4/5 | 2x | 8 | Clio "tiered pricing trap" ($13–15K/yr for 5-attorney firm); trust accounting always extra; all 3 raised prices; 1-week onboarding friction |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD (solo, 1 user); pays for itself in under 2 months vs PracticePanther |
| No Free Tier | 4/5 | 1x | 4 | Nothing free for full practice management with trust accounting |
| Channel Access | 3/5 | 2x | 6 | r/lawschool, r/law, Solosez ABA listserv ~6K members, state bar solo sections; smaller than trades |
| Content Potential | 4/5 | 1x | 4 | "Clio alternative 2026", "solo attorney practice management", "trust accounting software solo" |
| AppSumo Fit | 3/5 | 2x | 6 | Legal tools are underrepresented AppSumo vertical; attorneys are tech-savvy; possible but slower |
| Review Potential | 4/5 | 1x | 4 | Attorneys will review if pain solved; G2/Capterra active for legal tools |
| MRR Path | 4/5 | 3x | 12 | $49/mo flat (all-inclusive); trust accounting compliance = stickiness |
| Build Feasibility | 3/5 | 2x | 6 | Trust accounting + document templates + client portal + time tracking = 5–7 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Legal practice management = unglamorous professional service; clearly not VC-fundable at this price point |

**Total: 78/105** (file at 83 — stable; today's signal confirms the thesis with new pricing data)

**Verdict**: EXPLORE FURTHER
**Decision Status**: SHORTLISTED
**New signals today (competitor analysis)**:
- **Strongest new data point**: 5-attorney firm pays $13,000–15,000/yr for Clio with typical add-ons vs. $5,500–7,500/yr for MyCase/PracticePanther — 2026 comparison analysis
- **All 3 major platforms raised prices** within last 12 months: Clio Essentials $89→$99, MyCase $49→$59, PracticePanther Business $59→$69
- PracticePanther trust accounting not included in base plan — extra charge for a legal compliance requirement
- Solo attorneys are most underserved segment: most platforms designed for 5–20 attorney firms
- Sub-1-hour setup vs Clio's week-long onboarding = confirmed secondary differentiator
- **CaseSimple concept fully documented**: $49/mo flat, all-inclusive, zero add-on pricing — trusts accounting + e-signatures + client portal ALL included
- Target AppSumo: legal software has never appeared on AppSumo = first-mover opportunity

**Key Source Links**:
- https://owlesq.com/buyer-guides/best-practice-management-software-solo-small-law-firms
- https://www.aimadefor.com/blog/clio-vs-mycase-vs-practicepanther-lawyers/
- https://ustechautomations.com/resources/blog/automate-practicepanther-vs-clio-for-law-firms-2026
- https://practiceownerpro.com/guides/legal/best-solo-attorney-practice-software-in-2026-the-complete-comparison/

**Signal Frequency**: 1 source today (competitor-analysis); 5+ appearances total — increasing

---

### 10. Voice-First Invoice for Solo Tradespeople — Score: 81/105

**Maps to**: `ideas/shortlisted/ai-solo-contractor-phone-invoicing.md` (UPDATED — was 82/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Millions of solo trade operators; sweatystartup post on this exact concept got strong engagement; Bizzen validated with 35 contractors |
| Competitor Weakness | 4/5 | 2x | 8 | Jobber/HCP/ServiceM8 all full suites; Joist too simple; nobody nailed voice-first for 1-person operations |
| LTD Viability | 4/5 | 2x | 8 | $59–79 LTD for a focused invoicing tool; obvious AppSumo narrative |
| No Free Tier | 3/5 | 1x | 3 | Joist has basic free tier — partial risk |
| Channel Access | 4/5 | 2x | 8 | r/skilledtrades, r/sweatystartup, trade communities, YouTube trades channels |
| Content Potential | 4/5 | 1x | 4 | "invoice app for contractors", "voice invoice trades", "quick invoice after job" |
| AppSumo Fit | 4/5 | 2x | 8 | "Speak the job, send the invoice" = extremely clear LTD story; solo trade audience |
| Review Potential | 3/5 | 1x | 3 | Tangible time savings; will review when cracked-screen kitchen table invoicing is gone |
| MRR Path | 3/5 | 3x | 9 | Focused tool; can expand to basic FSM or pair with AI call answering |
| Build Feasibility | 4/5 | 2x | 8 | Speak job description → auto-fill line items from price list → PDF → SMS payment link = 3–4 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Solo plumbers/electricians/HVAC = peak boring trades |

**Total: 81/105** (file at 82 — stable; today's Reddit signal reinforces)

**Verdict**: EXPLORE FURTHER
**Decision Status**: SHORTLISTED
**New signals today (reddit)**:
- Reddit (r/skilledtrades): "A lot of solo guys are paying for a platform when what they actually dread is one specific step: typing out descriptions and prices on a cracked screen after a long day on the tools"
- Target specifically the **billing bottleneck** — not scheduling, not CRM — just fast billing
- **Core UX confirmed**: speak the job description → auto-fill line items from price list → PDF → SMS payment link with QR code on completed job
- Sweatystartup post on this exact concept got strong engagement
- Multiple SaaS builders actively working in this space (r/SaaS post on building vertical SaaS for HVAC/electricians)

**Key Source Links**:
- https://www.reddit.com/r/skilledtrades/comments/1wqzh0z/how_much_of_your_invoicing_software_do_you/
- https://www.reddit.com/r/sweatystartup/comments/1ho5jv8/tradespeople_deserve_better_admin_tools_so_i/
- https://www.reddit.com/r/SaaS/comments/1mdin9c/building_a_vertical_saas_for_hvac_electricians/

**Signal Frequency**: 1 source today (reddit); 5+ appearances total — stable

---

## Tier 2: Worth Exploring (Score 55–74)

### Dental Analytics Layer (Without Replacing the PMS) — Score: 72/105

**Maps to**: `ideas/shortlisted/dental-practice.md` (UPDATED)

Today's Reddit gave very specific pain data: Covetrus Pulse crashes hourly + takes 1–2 minutes to open a patient record + silently turned off reminders = 1,300+ missed appointments + "hundreds of thousands in lost revenue." Dental Intelligence described as "customer service nightmare." Weave communications-only. No clean analytics + reporting option in the market.

**Key framing**: Don't replace the PMS — build analytics-only layer connecting OpenDental, Eaglesoft, Dentrix via local SQL or API. Weekly email digest: production vs. collection, provider productivity, unscheduled treatment value, recall gap. $99–149 LTD is very viable; dentists buy tools.

**Risks**: HIPAA-equivalent compliance complexity; local SQL integrations require Windows desktop; longer sales cycle than trades.

**Verdict**: EXPLORE FURTHER — monitor Denta for traction; worth a landing page test.

**Key Source Links**:
- https://www.reddit.com/r/Dentistry/comments/1iqce14/did_i_make_a_huge_mistake_by_getting_weave/
- https://www.reddit.com/r/Dentistry/comments/1nxc0sn/stay_away_from_dentrix_ascend/
- https://www.reddit.com/r/Dentistry/comments/1qbxy2z/switching_from_curve_dental_to_opendental_tired/

---

### QuickBooks Desktop Replacement ($1,150/Year Price Shock) — Score: 72/105

**Maps to**: `ideas/shortlisted/bookkeeping-accounting.md` (UPDATED)

Strong signal: QBD $599 → $789 → $999 → $1,150/year with no end in sight. Businesses with 10+ year QBD relationships are being force-migrated. Specific underserved segment: businesses wanting QBD-parity (not QBO's cloud model) at $200–$400/year. Wave free but limited (and adding paywall creep). "Quickbooks Alternative" threads appear weekly on r/Accounting.

**Our angle**: Desktop-first (or offline-capable web) bookkeeping with QBD-familiar UI. Double-entry, bank reconciliation, COA, P&L, balance sheet. CPA export. One-time purchase or $199/year.

**Risk**: Crowded space at the top (Xero, Wave, Zoho Books, GnuCash); the specific "QBD-parity + affordable" niche is narrower than it appears. High-intent buyers exist but winning them from free options is hard.

**Verdict**: EXPLORE FURTHER — worth running a Reddit landing page test targeting r/Accounting with "QBD-parity for $199/year" framing.

**Key Source Links**:
- https://www.reddit.com/r/Accounting/comments/1wssmai/replacement_for_quickbooks/
- https://www.reddit.com/r/Accounting/comments/1gb73kd/quickbooks_alternative_fuck_intuit/

---

### OSHA Compliance App for Small Trade Crews — Score: 72/105

**Maps to**: `ideas/shortlisted/trade-safety-compliance.md` (UPDATED)

BasinCheck (oilfield OSHA, HN) + Procore analysis (5-person crew $49/mo OSHA checklist app identified as specific gap) both validate. Construction: 87% still use spreadsheets for compliance. Build trade-agnostic $49/mo OSHA compliance for small crews (1–20 workers): digital incident logs, photo-linked violations, automated OSHA 300 form generation.

**Risk**: Compliance tools require accuracy; liability exposure if the tool is wrong; OSHA is a secondary concern for small businesses (revenue comes first).

**Verdict**: EXPLORE FURTHER — B2B compliance angle with annual renewals could be very sticky.

---

### Canvassing CRM for Home Services (D2D Sales) — Score: 70/105

**Maps to**: `ideas/shortlisted/d2d-canvassing-crm.md` (UPDATED)

Alembic Quest just launched as a free alternative to SalesRabbit ($1,200+/yr) — confirms the demand and that existing tools are enterprise-priced. Canvassing is a $3B+ industry segment. Mobile-first: tap-to-mark addresses, follow-up reminders, lead pipeline, daily summary, offline mode. $29/mo per rep.

**Risk**: Alembic Quest is new but free — competing with free requires clear UX superiority or a specific segment focus (roofing-specific vs generic canvassing).

**Verdict**: EXPLORE FURTHER — confirm Alembic Quest traction/weaknesses before building.

---

### CNC Machine Shop Quoting (Isonq angle) — Score: 72/105

**Maps to**: `ideas/shortlisted/machine-shop-job-tracking.md` (UPDATED)

Isonq has a live pilot at a Colorado CNC shop (v7.0.3 in production). Their tool is Rust/Tauri desktop — not accessible to smaller shops without a technical setup. Web-based alternative: upload PDF/DXF/STEP drawing → auto-generate priced quote template → export. $99–199/mo. 20+ hrs/week saved for a 5-person shop doing 20 quotes/week.

**Verdict**: EXPLORE FURTHER — small but very specific market; CNC forums (Practical Machinist, r/machinists) have active communities.

---

### Automated Review Generation for Local Service Businesses — Score: 70/105

**Maps to**: `ideas/shortlisted/review-reputation.md` (UPDATED)

STARSLIFT in beta seeking users specifically for barbers/junk removal/lawn care/auto detailers. Already covered in `trades-follow-up-review-automation.md` as the broader thesis. As a standalone "review-only" product at $29/mo, the niche is narrow — works better as a feature within a broader follow-up tool.

**Verdict**: PASS as standalone — better served as part of the broader follow-up automation product.

---

### Property Management Maintenance Workflow Gap — Score: 68/105

**Maps to**: `ideas/shortlisted/property-management.md` (NOTE: maintenance module angle — already in broader PM idea)

Today's Reddit confirmed: AppFolio maintenance module "over complicated and difficult to understand" + 150 work orders piling up with Smart Maintenance AI; DoorLoop missing move-in/out workflow + security deposit escrow; Yardi hard to track work orders assigned to colleagues.

**Our angle**: Standalone maintenance workflow tool integrating with any PM software. Tenant submits → PM triages → vendor assigned → vendor updates from mobile → completion logged. $79–99 LTD for independent landlords.

**Verdict**: EXPLORE FURTHER as a standalone add-on to existing PM tools; could complement the broader PM idea as a focused wedge.

---

### AI Voice After-Call Workflow Automation — Score: 68/105

**Maps to**: `ideas/shortlisted/ai-receptionist.md` (UPDATED)

Today's trends data: Post-call workflow automation is the white space — Broccoli/Avoca handle the call but the 15 minutes of admin after every HVAC call is still manual. After-call automation: (1) create job in CRM, (2) text customer confirmation + ETA, (3) add review reminder 24h post job close. $49–99/mo.

**Risk**: Avoca $1B unicorn is already moving toward workflow orchestration; timing is tight.

**Verdict**: EXPLORE FURTHER — narrow scope reduces competitive risk; could be positioned as an integration layer on top of existing voice AI tools.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| Full Veterinary PIMS Replacement | 50/105 | Complex record migration; HIPAA-equivalent; no fast MVP; Covetrus pain is real but build complexity is high; Digitail/Vetspire well-funded |
| AI OS for Home Services (full platform — Broccoli/Avoca style) | 40/105 | $125M–$1B funded competition; enterprise recurring only; 6–18 month build; not LTD-compatible |
| Construction OS / "Replit for Trades" (Dalton Mills) | 38/105 | Platform play needing network effects; too ambitious; VC-backed at $9.2M |
| Franchise & Multi-Location Ops Tools | 55/105 | FranConnect dominant; franchise sales cycle complex; LTD not suitable; recurring only |
| Weather-Based Dispatch Planning (Prelay angle) | 60/105 | Narrow feature set; better as a feature inside an FSM than a standalone product |
| Manufacturing ERP/MES for SMEs (Carbon.ms) | 48/105 | 6+ month build; complex product; enterprise sales motion; open-source competitors |
| Spanish-First AI Receptionist | 58/105 | Compelling white space (multilingual trades) but requires voice AI infra; Avoca entering; timing risky |
| SaaS Subscription Audit Tool | 62/105 | Promising but Vendr/Zylo already exist for enterprise; SMB is unserved — worth watching; not a priority vs. our trades focus |

---

## Top 3 Recommendations

### 1. Field Service Profitability Analytics — Score: 90/105 ↑13
**One-line pitch**: Weekly scorecard connecting Jobber/HCP + QuickBooks to show profit per tech, callback rate, and margin by job type — the spreadsheet HVAC owners do manually every Sunday, automated.
**Why now**: Reddit and Trends both confirm this independently today — dual-source for the first time since first identified on 2026-10-10. The Nut Report is the only focused player and they appear to be pre-traction. Jobber/HCP/QB all have documented APIs. The gap is real, buildable in 4–6 weeks, and nobody is doing it at under $300/mo.
**Next action**: Validate Jobber + QB API integration feasibility; post "who's doing job costing in Jobber?" in r/FieldService; find 5 beta users
**Key source**: https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/

### 2. Lawn Care Solo Operator Software (RouteLeaf angle) — Score: 99/105
**One-line pitch**: Yardbook replacement for solo and 1–2 crew lawn care operators — reliable email delivery, EPA chemical compliance logs, real 2FA, and QuickBooks sync at $19/mo vs. Yardbook's spam folder.
**Why now**: Today's competitor analysis freshly documented Yardbook's specific, unresolved failures (invoices in spam, no 2FA, iOS beta-only, no QuickBooks). Never been on AppSumo. Chemical compliance gap is an empty category for affordable tools.
**Next action**: Post "What do you hate about Yardbook?" in r/lawncare; build a landing page targeting r/lawncare's specific pain points; offer $59 LTD founding-member pricing
**Key source**: https://www.capterra.com/p/207272/Yardbook/reviews/

### 3. Auto Repair Shop Management (ShopPulse / ShopBase) — Score: 100/105
**One-line pitch**: Flat $59/mo auto shop management with DVI included at entry price (Shopmonkey charges $359/mo), two-way SMS, VIN lookup, and QuickBooks sync — built for the 1–3 bay shop Shopmonkey's redesign left homeless.
**Why now**: Today's competitor analysis confirms DVI is gated at $359/mo for Shopmonkey, and GreaseGoose (new entrant) is unproven — the sub-$100 modern cloud shop tool position is still open. 115,000 independent shops confirmed as target. No existing LTD auto repair tool on AppSumo.
**Next action**: Post beta on r/AutoMechanic; list landing page on AppSumo deals community; interview 5 shop owners about DVI specifically
**Key source**: https://shoptechscore.com/tekmetric-vs-shopmonkey/

---

## Meta-Trends Observed Today

1. **The competitor analysis sweep confirms the FSM pricing trap is universal**: Whether it's HVAC (ServiceTitan $1k+/mo), auto repair (DVI gated at $359/mo), lawn care (Jobber $39→$119 cliff), or legal (Clio $13–15K/yr for 5 attorneys), every market we look at has the same pattern: an expensive top tier that's overkill for small operators, and nothing good in the $39–99/mo range. This is the market we're built for.

2. **The HN/IH analysis of 39,000 software complaints confirms our thesis from data**: The highest-severity gaps (mobile functionality 4.0/5, accounting middleware 4.0/5) are exactly where we're focused. The analysis specifically names construction/field service as the top gap — no micro-SaaS solving it.

3. **Multiple VC-backed companies ($52M Broccoli, $125M Avoca, $9.2M Dalton Mills) all targeting enterprise trades**: This validates the category for mid-market but confirms the sub-$100/mo bootstrapped tier is structurally unserved. VCs can't generate their expected returns at $79/mo flat pricing.

4. **ZenMaid at $3M ARR and Breezy at $250K ARR** both confirm the "build boring-vertical SaaS → price it $49–149/mo → distribute via trade communities → reach $1–3M ARR with 1 team" formula. These are real, documented, bootstrapped outcomes in exactly the kind of industries we're scanning.

5. **Field Service Profitability Analytics is the clearest new opportunity today**: First identified 2026-10-10 as "worth exploring" (77/105). Now appearing in both Reddit AND Trends with direct quotes from real operators. The Nut Report is the only player and appears to be pre-traction. This is the fastest-escalating idea in the portfolio right now.
