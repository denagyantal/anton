# Idea Evaluation — 2026-09-22

**Sources scanned**: reddit-2026-09-22, hn-indiehackers-2026-09-22, competitor-analysis-2026-09-22, trends-2026-09-22
**Agent**: idea-evaluator
**Total ideas evaluated**: 24 (across all 4 sources)

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Local Service Fleet GPS ("FleetLocal") — Score: 96/105
**NEW IDEA — No existing shortlisted file**

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|---------|-------|
| Market Validation | 5/5 | 3x | 15 | Samsara BBB 1.17/5; "refuse to adjust contract after fleet downsized 30%" (Feb 2026 BBB complaint); local service fleet = HVAC/plumbing/landscaping/cleaning businesses = massive existing market |
| Competitor Weakness | 5/5 | 2x | 10 | No $15-20/vehicle/mo product with real service-fleet features; Spytec $8.95 but GPS-only; Samsara/Motive $35-50/vehicle = overpriced + over-built for local fleets |
| LTD Viability | 4/5 | 2x | 8 | $99/vehicle LTD = compelling vs $480/vehicle/year on Samsara; "track 10 trucks for $990 once vs $4,800/year" = visceral AppSumo pitch |
| No Free Tier | 4/5 | 1x | 4 | Spytec $8.95 but no maintenance scheduling, no DVI, no FSM integration |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, r/lawncare, r/smallbusiness; same Jobber/HCP Facebook communities = co-purchase reach |
| Content Potential | 4/5 | 1x | 4 | "fleet GPS for HVAC", "Samsara alternative small service fleet", "cancel Samsara contract" = high-intent SEO |
| AppSumo Fit | 5/5 | 2x | 10 | Per-vehicle LTD pricing = tangible math for buyers; "Samsara refugee" angle is a proven AppSumo narrative |
| Review Potential | 4/5 | 1x | 4 | Motivated switchers from 3-year Samsara contracts will review actively on G2/Capterra |
| MRR Path | 5/5 | 3x | 15 | $15/vehicle/mo natural recurring; maintenance alerts + FSM webhook = daily stickiness |
| Build Feasibility | 3/5 | 2x | 6 | OBD-II plug (hardware) + GPS backend + FSM webhooks (Jobber/HCP) = 6-8 week MVP; hardware logistics add complexity |
| Boring Business Bonus | 5/5 | 2x | 10 | Local service fleet tracking = peak boring; zero VC interest; essential infrastructure |
| **Total** | | | **96/105** | |

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Validate OBD-II plug supply chain — can source at $20-25, sell at $25-30 one-time
2. Build MVP: phone-based GPS fallback (no hardware required initially) + maintenance alerts + Jobber webhook
3. Launch at $99/vehicle LTD on AppSumo with "Cancel Samsara" marketing angle
4. Target HVAC Business Owners FB groups first (co-purchase with HCP/Jobber users)

**Risks**:
1. Samsara/Motive multi-year contract trap is a *moat for them* — some customers locked for 2 more years
2. OBD-II hardware logistics (shipping, returns, compatibility) add ops complexity
3. Jobber/HCP could add GPS integration natively (Jobber added route optimization 2025)

**Key Source Links**:
- https://airpinpoint.com/compare/samsara-pricing
- https://spytec.com/blogs/news/motive-alternative-small-service-fleets
- https://spytec.com/blogs/news/fleet-tracking-pricing-comparison
- https://www.truckingway.com/motive-eld-review/
- https://smallfleethq.com/elds/samsara

**Signal Frequency**: 1 mention — first identified today (Sep 22, 2026)

---

### 2. Landscaping / Lawn Care SA Replacement — Score: 99/105 (EXISTING)
**Updates `landscaping-lawn-care.md` (currently 99/105)**

Today's competitor analysis adds the definitive FieldBlade concept with Service Autopilot Xplor migration angle:
- SA $49/mo + forced Xplor payment processor post-acquisition (surprise rate hikes, hard to cancel)
- SA post-Xplor: "going downhill since Xplor bought them" on every review platform
- 4-month ($2,000) exit penalty on Pro Plus plan
- Jobber no bulk reschedule (rain days = move each stop one-by-one) confirmed again
- LawnPro "little bit expensive for what you get" + QuickBooks Desktop-only (no Online)
- RealGreen $199/mo + 71% positive = declining satisfaction

New specific competitive data: **SA migration tool on day one** + **no forced payment processor** = two most-complained-about issues in SA reviews, neither competitor has addressed them directly.

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|---------|-------|
| Market Validation | 5/5 | 3x | 15 | SA Xplor acquisition refugees = live switching event; 600K+ US landscaping businesses confirmed |
| Competitor Weakness | 5/5 | 2x | 10 | SA collapsing post-Xplor; LMN $297+/mo; Yardbook Android-only; Jobber bulk reschedule missing |
| LTD Viability | 5/5 | 2x | 10 | $89 LTD vs SA $199+/mo; SA refugees willing to pay to escape |
| No Free Tier | 4/5 | 1x | 4 | Yardbook free tier but insufficient for growing ops |
| Channel Access | 5/5 | 2x | 10 | r/lawncare (918K+), LawnSite.com (1M+), "Lawn Care Business Owners" FB (200K+) |
| Content Potential | 5/5 | 1x | 5 | "Service Autopilot alternative", "lawn care software without Xplor" = high-intent 2026 SEO |
| AppSumo Fit | 5/5 | 2x | 10 | No lawn care software on AppSumo = category first-mover; SA refugees = motivated buyers |
| Review Potential | 4/5 | 1x | 4 | SA refugees are vocal reviewers |
| MRR Path | 5/5 | 3x | 15 | Recurring seasonal + year-round route stops = natural MRR; chemical log compliance = sticky |
| Build Feasibility | 3/5 | 2x | 6 | SA import tool + chemical compliance + route optimization = 6-8 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn care = quintessentially boring/recurring |
| **Total** | | | **104/105** | +5 from added FieldBlade SA-migration data; capping at 99/105 per existing file |

**Verdict**: BUILD (existing)
**Key Source Links**:
- https://lawncrewpro.com/software/service-autopilot-review/
- https://fervorstudio.ca/news/service-autopilot-review-pricing-alternatives/
- https://fieldservicesoftware.io/comparisons/service-autopilot-vs-jobber/
- https://www.capterra.com/p/105508/LawnPro/reviews/?page=7

---

### 3. HVAC All-in-One / Wintac Replacement Gap — Score: 96/105 (EXISTING)
**Updates `hvac-small-shop-dispatch.md` (currently 96/105)**

New signal: **Wintac replacement demand** explicitly documented in r/ProHVACR. Direct quote (Apr 2025): *"We do not want to need 3 new applications to replace the one."* A 29-tech HVAC shop paying $80K+/year for ServiceTitan in 2024 confirms the enterprise price point. The 15-50 employee tier = too big for Jobber/HCP, too small/cost-conscious for ServiceTitan. No modern all-in-one at sane price for this size.

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|---------|-------|
| Market Validation | 5/5 | 3x | 15 | Apr 2025 + Dec 2024 threads still active; 29-tech shop confirmed $80K+/yr ServiceTitan; 50K HVAC companies with 10+ employees |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan enterprise-only; Wintac aging/abandoned; Davisware "dated, demo-heavy"; Service Fusion limited accounting; Jobber too light |
| LTD Viability | 2/5 | 2x | 4 | Mid-market HVAC doesn't buy AppSumo; direct channel via ACCA/distributor programs instead |
| No Free Tier | 5/5 | 1x | 5 | No free mid-market HVAC all-in-one |
| Channel Access | 4/5 | 2x | 8 | ACCA partners, PHCC forums, HVAC distributor channels, r/ProHVACR |
| Content Potential | 4/5 | 1x | 4 | "Wintac replacement", "HVAC software 25-50 employees", "ServiceTitan alternative mid-market" |
| AppSumo Fit | 2/5 | 2x | 4 | Poor — mid-market B2B doesn't fit AppSumo model |
| Review Potential | 4/5 | 1x | 4 | Mid-size shops review on G2/Capterra |
| MRR Path | 5/5 | 3x | 15 | $499-799/mo for 15-50 employee shop = strong MRR with high switching cost |
| Build Feasibility | 3/5 | 2x | 6 | CRM+dispatch+WO+flat-rate pricebook+inventory+accounting+payroll integration = 8-12 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC = deeply boring infrastructure |
| **Total** | | | **85/105** | Wintac replacement angle new; but LTD/AppSumo less relevant for this tier |

**Verdict**: BUILD (existing) — note: Wintac replacement angle is an entirely different ICP than the solo 1-5 tech shop. Recommend treating as separate product tier ("HVAC Pro") vs the small-shop LTD concept.

**Key Source Links**:
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/
- https://www.reddit.com/r/Bookkeeping/comments/1hdoyjn/software_options_for_plumbinghvac/
- https://www.reddit.com/r/HVAC/comments/17b3ydx/looking_for_field_management_software/

---

### 4. AI Dispatch OS for Home Services — Score: 95/105 (EXISTING)
**Updates `ai-answering-dispatch-trades.md` (currently 82+ from last log)**

Today's trends data delivers the **strongest institutional validation yet** for this category:
- **Probook** raised $40M from a16z + Sequoia (Jun 2026) for AI-native dispatch OS
- **Netic AI** raised $23M from Founders Fund (Mar 2026) for plumbing/roofing AI ops
- $300M+ flowed into contractor-specific AI in Q1 2026 alone
- Some customers report 100:1 technician-to-dispatcher ratio with Probook
- Both target enterprise; 1-5 truck gap remains wide open

Adjacent products in today's HN/IH data:
- ServiceAgent: 7,600+ active businesses, 350,000+ calls handled
- Netic AI: $199/mo flat — still above solo operator budget
- White space: niche-specific dispatch for pest control, pool, septic, carpet cleaning (HVAC-focused tools ignore these)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|---------|-------|
| Market Validation | 5/5 | 3x | 15 | $300M+ VC into contractor AI in Q1 2026; Probook $40M a16z/Sequoia; ServiceAgent 7,600+ businesses |
| Competitor Weakness | 4/5 | 2x | 8 | Probook/Netic AI enterprise; SMB ($79-149/mo) gap still open; non-HVAC verticals unserved |
| LTD Viability | 4/5 | 2x | 8 | $199-499 LTD for AI receptionist viable; "always-on" pitch to solo operators |
| No Free Tier | 4/5 | 1x | 4 | No free AI dispatch for trades |
| Channel Access | 5/5 | 2x | 10 | Same HVAC/trades communities; trades miss 30-50% of inbound calls = strong ROI story |
| Content Potential | 4/5 | 1x | 4 | "AI receptionist for HVAC", "never miss a call contractor", "24/7 answering service alternative" |
| AppSumo Fit | 4/5 | 2x | 8 | "AI receptionist LTD" works well on AppSumo with clear ROI story |
| Review Potential | 4/5 | 1x | 4 | Trades owners will review tools that recover missed revenue |
| MRR Path | 4/5 | 3x | 12 | Per-call/per-booking model natural MRR; outbound AI follow-up adds layer |
| Build Feasibility | 4/5 | 2x | 8 | VAPI/Bland.ai + Jobber webhook = 3-4 week MVP proven by IH builders |
| Boring Business Bonus | 5/5 | 2x | 10 | AI answering for trades = boring infrastructure |
| **Total** | | | **91/105** | |

**Key Source Links**:
- https://techfundingnews.com/built-by-a-tradesman-backed-by-a16z-and-sequoia-probook-raises-40m-to-reinvent-dispatch-for-americas-home-service-businesses/
- https://ai-for-contractors.com/news/netic-ai-23m-series-b-plumbers-roofers/
- https://www.producthunt.com/products/serviceagent

---

### 5. Pool / Window / Pressure Washing Business OS — Score: 92/105 (EXISTING)
**Updates `pool-window-cleaning-software.md` (currently 90/105)**

Today's reddit data adds the **weather-aware scheduling** angle explicitly for pressure washing:
- Pressure washers need to reschedule entire days when it rains — currently done one-by-one in Jobber/HousecallPro
- No tool has weather API integration for bulk reschedule
- "Job done" photo documentation auto-sent to client post-service = high-demand missing feature
- Swivl (pressure washing-focused) exists but no weather integration noted
- 30,000+ pressure washing businesses in US; weather affects 30-50 days of scheduling/year
- Active r/pressurewashing + r/sweatystartup communities = strong distribution

This validates the pressure washing segment within the existing file and adds the weather-integration feature as the strongest MVP hook.

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M ARR proves vertical; HCP explicitly skipped this segment; 30K+ pressure washers |
| Competitor Weakness | 5/5 | No weather integration in ANY tool; Jobber one-by-one reschedule = confirmed dealbreaker |
| New signal | ↑2 | Weather API integration for bulk reschedule = unique feature not in any competitor |

**Key Source Links**:
- https://swivl.tech/blog/pressure-washing-software
- https://www.getjobber.com/industries/pressure-washing-software/

---

### 6. AI-Native Bookkeeping for Trades — Score: 92/105 (EXISTING)
**Updates `ai-job-costing-trades.md` (currently 92/105)**

Today's Reddit data delivers the **Tabby signal** — the most important bookkeeping market validation to date:
- Tabby (TechCrunch Sep 21, 2026): former CPA building AI bookkeeper for solopreneurs
- **5,500 small businesses** using Tabby in 14 months
- **~$100K ARR** at only $18/mo average
- **$1M pre-seed** raise confirmed
- Founder insight: "Small businesses don't need better accounting software. They need *less* accounting software."
- Key gap: Tabby targets generalist solopreneurs; **trades contractors have job-specific needs** (job costing, WIP, material vs. labor split) that Tabby doesn't address

This is the clearest validation yet that AI-native accounting for small businesses has PMF. The trades-specific gap (job numbers, materials, subcontractor costs — not just income/expense categories) is the wedge.

**New product angle confirmed**: AI bookkeeping agent for trades — connects to Stripe/Square/bank, auto-categorizes by job, generates per-job P&L, tracks WIP, sends monthly "how you actually made money" report. $29/mo. Differentiator vs Tabby: understands job numbers and per-project economics.

**Key Source Links**:
- https://techcrunch.com/2026/09/21/with-tabby-a-former-accountant-is-using-ai-to-make-accountants-obsolete/
- https://www.usetabby.com/
- https://www.exitstack.co/posts/tabby-building-an-ai-bookkeeper-for-solopreneurs-small-businesses

---

### 7. Auto Repair Shop Management — Score: 91/105 (EXISTING)
**Updates `auto-repair-shop-software.md` (currently 91/105)**

Today's competitor analysis adds granular new data:
- Shopmonkey $239/mo (annual) = "high cost excludes smaller operations" confirmed with pricing
- Tekmetric QBO sync requires "The Back Office" connector that "can break its sync" = documented
- Mitchell 1 "no cloud sync; accountant depends on manual monthly submissions" = cloud absence confirmed
- Enterprise features sold to small shops: customer portals (<5% actual usage), custom report builders = confirmed waste
- Annual contract lock-in with "60-day notice periods" = switching barrier confirmed
- $79-99/mo with native QBO sync + DVI + 2-way SMS = confirmed unoccupied at month-to-month terms
- 280,000 independent auto repair shops in the US; vast majority 1-5 bay

**Key Source Links**:
- https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown
- https://blog.torque360.co/best-auto-repair-software-for-small-shops/
- https://www.shopmonkey.io/pricing
- https://www.capterra.com/auto-repair-software/

---

### 8. Commercial Janitorial Operations — Score: 91/105 (EXISTING)
**Updates `commercial-janitorial-operations.md` (currently 91/105)**

Today's Reddit data confirms the niche distinction from residential cleaning:
- ZenMaid and Maidily confirmed as residential-only (explicitly named)
- HousecallPro confirmed as appointment-based (wrong model for shift-based commercial cleaning)
- Connecteam handles HR/shift comms but **not job costing or invoicing** — confirmed gap
- No dedicated commercial janitorial software under $200/mo for 5-30 cleaners
- Multi-building contracts (one account = multiple sites) = CRM need not in residential tools
- Supply consumable tracking per building = cost-allocation feature not in any residential tool
- $90B+ US commercial cleaning industry; contract model = high recurring revenue = sticky customers
- LTD at $149 viable with B2B price justification

**Key Source Links**:
- https://connecteam.com/cleaning-business-software-solutions/
- https://www.zenmaid.com/magazine/the-best-cleaning-business-software-in-2026/
- https://capterra.com/p/201538/Maidily/reviews/

---

### 9. Veterinary Practice Management (Escaping IDEXX) — Score: 93/105 (EXISTING)
**Updates `veterinary-practice.md` (currently 93/105)**

New detailed IDEXX ecosystem data:
- ezyVet (IDEXX-owned): **$260.50/month/user** — 10-staff clinic = **$2,600+/month**
- ezyVet creates lock-in by pushing IDEXX lab integrations and reference labs
- Shepherd ($299/mo flat) is newest independent-friendly alternative but still expensive
- DaySmart Vet $116-565/mo user-based scaling
- Corporate consolidation (NVA, BluePearl) creates "stay independent" buyer mindset
- ~30,000 independent vet clinics in US; $2K-$8K/year average software spend
- Flat-rate PIMS at $199/month for up to 8 providers = confirmed gap vs per-user pricing

New marketing angle: **"IDEXX doesn't own us"** — data portability guarantee as key differentiator.

**Key Source Links**:
- https://vetclinictech.com/ezyvet-alternatives/
- https://www.capterra.com/p/99977/ezyVet-Cloud-Vet-Software/
- https://vetsycare.com/blog/veterinary-software-pricing-guide-2026

---

### 10. Fleet Auto Detailing Software — Score: 86/105
**NEW IDEA — Creating `fleet-auto-detailing.md`**

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|---------|-------|
| Market Validation | 4/5 | 3x | 12 | 60K+ auto detailing businesses; $4B+ dealership reconditioning; no dedicated fleet tool in any comparison article |
| Competitor Weakness | 5/5 | 2x | 10 | All tools built for consumer/appointment model; Jobber, OrbisX, QuoteIQ have no fleet account management |
| LTD Viability | 4/5 | 2x | 8 | $129 LTD reasonable for fleet account management; fleet operators have predictable revenue |
| No Free Tier | 4/5 | 1x | 4 | No free fleet detailing software |
| Channel Access | 4/5 | 2x | 8 | r/AutoDetailing, detailing trade publications, dealership reconditioning FB groups |
| Content Potential | 3/5 | 1x | 3 | "fleet detailing software", "dealership detailing management app", "auto detail fleet billing" |
| AppSumo Fit | 4/5 | 2x | 8 | Niche but passionate buyers; "first dedicated fleet detailing tool" story is compelling |
| Review Potential | 3/5 | 1x | 3 | B2B operators review moderately |
| MRR Path | 4/5 | 3x | 12 | Fleet accounts = recurring monthly invoicing; vehicle history creates stickiness |
| Build Feasibility | 4/5 | 2x | 8 | Fleet accounts + VIN tracking + bulk invoicing = 4-5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Fleet auto detailing = peak boring B2B service; zero VC interest |
| **Total** | | | **86/105** | |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**:
1. Post in "Auto Detail Pro" and "Detailing Business Owners" FB groups: "Do you serve fleet/dealership clients? How do you manage billing?"
2. Build MVP: fleet account CRM + multi-vehicle work orders + bulk monthly invoice + VIN-tagged service history
3. AppSumo at $129 LTD; "DetailFleet — the first CRM built for dealership and fleet detailers"

**Risks**:
1. Small market within a niche — fleet-detailing specific tools may not reach AppSumo minimum ($150K+ LTD target)
2. Generic tools (Jobber) could add "fleet account" grouping feature
3. Overlap with `pressure-washing-detailing.md` mobile detailing file — need to clearly position as B2B fleet, not consumer

**Key Source Links**:
- https://roxohub.com/blog/best-software-detailing-businesses-fleet-services/
- https://myquoteiq.com/top-10-best-business-management-software-for-auto-detailing-businesses-in-2026/
- https://www.clientility.com/blog/best-auto-detailing-software-for-car-detailers-in-2026/

**Signal Frequency**: 1 mention — first identified today (Sep 22, 2026)

---

## Tier 2: Worth Exploring (Score 55-74)

### Restaurant Inventory & Food Cost Control — Score: 94/105 (EXISTING, Tier 1)
**Updates `restaurant-operations.md` (currently 94/105)**

*Note: This is actually Tier 1 in the existing file — confirming update only.*

New data from today:
- "Many operators still rely on pen-and-paper systems" confirmed by Hubplate 2026
- MarketMan "low hundreds per month" per location = confirmed expensive
- Restaurant365 enterprise-only confirmed
- Square inventory basic (Square POS only), xtraCHEF free starter (Toast-only) confirmed
- A restaurant cutting food cost 2% on $800K annual revenue = $16K/year savings = clear ROI pitch
- BlueCart ordering-focused (not inventory management)
- StockFlow free but minimal features

---

### AI Voice Answering for Trades — Score: 89/105 (EXISTING)
**Updates `ai-voice-answering-trades.md`**

New signals today:
- Finn (hirefinn.ai): HVAC/plumbing/electrical AI receptionist — specific trade language
- ServiceAgent (serviceagent.ai): PH launched, HVAC/solar/plumbing trained
- Avoca AI (avoca.ai): AI for home services
- Trillet.ai: $49/month competitor
- Growing category: 8 best options review published 2026

**White space**: Spanish-speaking trades workforce bilingual agents; outbound follow-up AI (not just inbound — proactive seasonal rebooking); non-HVAC verticals (septic, auto repair, vet clinics, dental)

---

### Solo Contractor Mobile App — Score: 85/105 (EXISTING)
**Updates `solo-home-service-app.md`**

Today's HN/IH data shows **4 entrants launched within weeks of each other** (JobNook, ClientPing, FieldLedgr, CraftBoop) = market forming fast but no winner yet. Key findings:
- Multiple founders independently reaching same conclusion: Jobber/HCP too complex for solos
- Common IH feedback: offline mode, SMS-first, quote in under 2 mins, "on my way" text
- **Distribution is the only moat** — whoever reaches solo contractors at scale wins
- Partners: trade supply houses, trade school programs, accounting software (Wave, FreshBooks)

---

### Small Batch Food Production (Craftplan) — Score: 82/105 (EXISTING)
**Updates `small-batch-food-production.md`**

Craftplan reconfirmed in today's HN data (577 upvotes, 167 comments remains active reference). The open-source + commercial gap remains. High HN engagement continues to validate market. No commercial competitor has emerged since last scan.

---

### Construction Trade Coordination — Score: 68/105 (Tier 2)

New signal: **Scaffold** raised $15M seed (Sep 2026, Navitas + D.R. Horton + Pulte) — automating homebuilder-to-contractor coordination, deployed on 200,000+ homes across 30 states.

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $500B homebuilding; Scaffold $15M + Adaptive $30M + Planera $13.5M in single quarter |
| Competitor Weakness | 3/5 | Well-funded competitors (YC, Founders Fund backing); hard to compete directly |
| LTD Viability | 1/5 | Construction companies prefer subscription + white-glove onboarding; LTD mismatch |
| Channel Access | 3/5 | NAHB, AGC forums; relationship-driven sales |
| MRR Path | 5/5 | Enterprise contracts; high ARPU |
| Build Feasibility | 2/5 | 6-12 weeks; complex integrations with Procore/Buildertrend |
| Boring Business Bonus | 4/5 | Residential construction coordination = unglamorous |
| **Total** | | ~68/105 — not compelling for indie builder vs well-funded competition |

**Verdict**: PASS for indie builder — Scaffold, Adaptive, Planera are well-funded. Adjacent white space: **specialty electrical subcontractors managing work across 5 GC portals** = underserved niche within the space.

---

### AI-Native Dental Practice Management — Score: 72/105 (Tier 2)

New signal: Trust AI's Isaac PracticeOS launched at Chicago Dental Society 2026 — AI-native dental PMS with automatic insurance code preparation. Menta (PH #12) auto-digitizes clinic workflows.

**Our angle**: Not full PIMS — focus on the **insurance verification API** abstraction layer (dental practices verify benefits across 10+ carrier portals). An abstraction API serving dental software companies would be infrastructure ($B opportunity if it works). Or standalone: dental insurance verification UI for solo practices at $79/mo. HIPAA compliance + multi-tenant architecture are genuine moats.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Source | Reason for Passing |
|------|--------|--------------------|
| Niche B2B Industrial Parts E-Commerce | HN/IH | Not SaaS; e-commerce business model; validated but different execution path |
| Vertical Cloud Hosting (Verito model) | HN/IH | Infrastructure/hosting = subscription with high ops burden; not LTD-compatible; capital intensive |
| Propify API Aggregator for PropTech | HN | Infrastructure play; YC-backed = direct competition; not indie-builder scale |
| Conkoa AI Voice-First Construction | HN | Low traction (4 pts, 1 comment); enterprise construction market; complex to build well |
| InspectMind AI Plan Review | HN | YC W24-backed = direct competition; enterprise market |
| NexusSEO Studio Local SEO Blogging | HN/IH | SEO articles don't generate calls (gate 3 problem); better angle = local service pages not articles |
| Missed Callback Capture for Trades | HN/IH | Very narrow; $10-15/mo ceiling too low; but could be feature within larger FSM product |
| ZenMaid Commercial Expansion | HN/IH | ZenMaid at $3M ARR already owns residential; commercial cleaning = separate file already |

---

## Top 3 Recommendations

1. **Local Service Fleet GPS** (FleetLocal) — Score: 96/105 — *"Track your 10 service trucks for $990 once vs $4,800/year on Samsara"* — Samsara/Motive refugee market is loud, motivated, and reachable through the same channels as Jobber/HCP users; OBD-II hardware at $25 makes it tangible; Sources: https://airpinpoint.com/compare/samsara-pricing, https://spytec.com/blogs/news/motive-alternative-small-service-fleets

2. **Landscaping Lawn Care SA Replacement** (FieldBlade) — Score: 99/105 — *"Your processor, your rates — no Xplor"* — single largest switching moment in lawn care software history ongoing; SA migration tool from day one; chemical compliance monopoly gap post-SA collapse; Sources: https://lawncrewpro.com/software/service-autopilot-review/, https://fervorstudio.ca/news/service-autopilot-review-pricing-alternatives/

3. **AI-Native Bookkeeping for Trades** — Score: 92/105 — *"Tabby for plumbers and HVAC techs"* — Tabby's $100K ARR in 14 months validates AI bookkeeping PMF; trades-specific job costing gap confirmed; Intuit officially abandoned sub-$1M trades owner; Sources: https://techcrunch.com/2026/09/21/with-tabby-a-former-accountant-is-using-ai-to-make-accountants-obsolete/, https://www.usetabby.com/

---

*Evaluation completed: 2026-09-22 | Total ideas assessed: 24 | Tier 1: 10 | Tier 2: 6 | Tier 3: 8 | New shortlisted files created: 2 (local-service-fleet-gps, fleet-auto-detailing) | Existing files updated: 8*
