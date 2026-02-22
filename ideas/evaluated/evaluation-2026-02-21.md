# Idea Evaluation — 2026-02-21

> 14 distinct product opportunities identified across 4 research reports (Reddit, HN/Indie Hackers, Competitor Analysis, Trend Spotter). Scored against 11 weighted criteria. Max weighted score: 105.

## Must-Have Filter Results

All 14 ideas passed through must-have filters before scoring:

| # | Idea | Problem Real? | No Deep Domain? | No Unbeatable Player? | >$10K MRR in 12mo? | PASS/FAIL |
|---|------|:---:|:---:|:---:|:---:|:---:|
| 1 | Field Service Mgmt for Small Trades | Yes | Yes | Yes | Yes | PASS |
| 2 | Property Mgmt for Small Landlords | Yes | Yes | Yes | Yes | PASS |
| 3 | Cleaning Business Management | Yes | Yes | Yes | Yes | PASS |
| 4 | Construction Mgmt for Small Contractors | Yes | Yes | Yes | Yes | PASS |
| 5 | Auto Repair Shop Management | Yes | Borderline | Yes | Yes | PASS |
| 6 | Salon & Barbershop Management | Yes | Yes | Yes | Yes | PASS |
| 7 | Veterinary Practice Management | Yes | No (compliance) | No (IDEXX lock-in) | Maybe | FAIL |
| 8 | AI Receptionist for Local Businesses | Yes | Yes | Yes | Yes | PASS |
| 9 | Compliance & Licensing for Trades | Yes | Yes | Yes | Maybe | PASS |
| 10 | Mobile Estimation & Quoting | Yes | Yes | Yes | Yes | PASS |
| 11 | Review & Reputation Management | Yes | Yes | Yes | Yes | PASS |
| 12 | AI Job Costing for Trades | Yes | Yes | Yes | Maybe | PASS |
| 13 | Dental Practice Patient Communication | Yes | Borderline | Yes | Yes | PASS |
| 14 | Landscaping Business Management | Yes | Yes | Yes | Yes | PASS |

**Disqualified**: #7 Veterinary Practice Management -- requires deep medical compliance domain expertise, IDEXX lab monopoly creates near-unbeatable ecosystem lock-in, and vet practices are a small addressable market (32K in US). LTD price point ($149-249) makes profitability questionable. Excluded from further scoring.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Field Service Management for Small Trades (1-5 Trucks) -- Score: 88/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ServiceTitan ($8B valuation), Housecall Pro ($585M acquisition), Jobber ($100M+ ARR). Massive proven market. 6+ Reddit threads, multiple HN discussions. People paying $200-500/mo. |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan too expensive ($245-398/mo + $2-5K setup), Jobber/HCP moving upmarket with per-tech pricing. "Costs more than my truck payment" is the dominant complaint. 1-5 truck shops are abandoned. |
| LTD Viability | 4/5 | 2x | 8 | $89-149 LTD is profitable -- core features (scheduling, dispatch, invoicing) use standard APIs. Infrastructure cost per user is low. Plumbers have real budgets. |
| No Free Tier | 4/5 | 1x | 4 | Trades businesses expect to pay for tools. No free-tier expectation in this market. Yardbook (free) is an outlier in landscaping, not FSM. |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, r/electricians, r/pestcontrol, r/smallbusiness. Facebook: HVAC Technicians (50K+), Plumbers & Pipefitters (30K+). HVAC-Talk forums. Supply house partnerships. YouTube: HVAC School, Roger Wakefield. |
| Content Potential | 4/5 | 1x | 4 | Strong SEO: "best field service app for small business", "ServiceTitan alternative for small companies", "HVAC scheduling software". Comparison content writes itself. |
| AppSumo Fit | 4/5 | 2x | 8 | High perceived value ($200+/mo competitors make $89 LTD a steal). AppSumo audience skews tech, but trades owners are pragmatic deal-seekers. Need supplemental trade-community marketing. |
| Review Potential | 4/5 | 1x | 4 | Trades owners are active reviewers when they like something (see Jobber's 600+ G2 reviews). If the tool saves them time daily, they will review. |
| MRR Path | 4/5 | 3x | 12 | Clear: LTD for base features, MRR for advanced (AI dispatching, inventory, multi-location, QuickBooks sync, payment processing fees). Usage-based SMS/notifications add recurring. |
| Build Feasibility | 4/5 | 2x | 8 | Core MVP (scheduling + dispatch + invoicing + customer DB + mobile) in 4-6 weeks with 3-4 devs. Mapping APIs (Google Maps), payment (Stripe), notifications (Twilio). Well-understood problem. |
| Boring Business Bonus | 5/5 | 2x | 10 | Peak boring. Plumbing, HVAC, pest control, electrical. Blue-collar trades. |
| **TOTAL** | | | **88/105** | |

**Verdict**: BUILD

**Next Steps**:
1. Validate with 10 small HVAC/plumbing business owners (cold outreach on Reddit/Facebook)
2. Build clickable prototype focusing on mobile-first daily schedule + one-tap dispatch + field invoicing
3. Pre-sell on r/HVAC and HVAC Facebook groups before building
4. Plan AppSumo launch for month 2-3

**Risks**:
1. Competing with well-funded incumbents (Jobber, HCP) who could slash prices for small operators
2. Mobile app quality must be exceptional -- trades workers live on their phones in the field
3. QuickBooks integration is table-stakes and has documented sync issues across all competitors

**Key Source Links**:
- https://www.reddit.com/r/Plumbing/comments/1kk09e5/plumbers_what_software_you_actually_use_and_what/
- https://www.reddit.com/r/HVAC/comments/1akewlj/software_you_use_and_why/
- https://www.g2.com/categories/field-service-management
- https://www.g2.com/products/servicetitan/reviews
- https://www.g2.com/products/jobber/reviews

---

### 2. Property Management for Small Landlords (1-50 Units) -- Score: 85/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | AppFolio, Buildium, Stessa (acquired by Roofstock), Avail (acquired by Realtor.com), TurboTenant all validate. 10M+ individual landlords in US. Constant r/landlord and BiggerPockets discussions. |
| Competitor Weakness | 4/5 | 2x | 8 | AppFolio/Buildium too expensive and built for PM companies. Avail/TenantCloud free but "feel abandoned." Stessa is financial tracking only. Gap between "free but broken" and "enterprise expensive" is wide. |
| LTD Viability | 5/5 | 2x | 10 | $79-149 LTD is very profitable. Core features (rent collection via Stripe/Plaid, lease storage, maintenance tickets) have low per-user infrastructure costs. Landlords are famously cost-conscious -- LTD is perfect. |
| No Free Tier | 3/5 | 1x | 3 | Avail, TenantCloud, Stessa all have free tiers, creating free-tier expectation. Need to differentiate clearly or offer limited free tier with paid LTD upgrade. |
| Channel Access | 5/5 | 2x | 10 | r/landlord (65K+), r/realestateinvesting (500K+), BiggerPockets (2M+ members). Facebook landlord groups. Local REIA meetups. This audience is online, engaged, and actively discussing software. |
| Content Potential | 5/5 | 1x | 5 | Massive SEO: "landlord software", "rent collection app", "property management software for small landlords", "Buildium alternative", "landlord accounting software". Comparison and educational content opportunities are enormous. |
| AppSumo Fit | 5/5 | 2x | 10 | Real estate investors are deal-savvy, tool-hungry, and many are on AppSumo. BiggerPockets community cross-pollinates with AppSumo audience. This would be a top AppSumo performer. |
| Review Potential | 4/5 | 1x | 4 | Landlords are vocal about tools they use (see BiggerPockets reviews, G2 reviews for Buildium/AppFolio). If the tool saves them hassle, they will review. |
| MRR Path | 4/5 | 3x | 12 | LTD for base (up to 10 units), MRR for scaling (11+ units, tenant screening at $25/screen, payment processing fees, premium features like AI maintenance triage). Per-unit pricing above LTD threshold. |
| Build Feasibility | 4/5 | 2x | 8 | MVP (rent collection + lease storage + maintenance tickets + basic accounting) in 4-5 weeks. Stripe/Plaid for payments, file storage for leases, simple ticketing. Well-understood domain. |
| Boring Business Bonus | 4/5 | 2x | 8 | Property management is unglamorous professional services. Not as boring as plumbing, but solidly unsexy. |
| **TOTAL** | | | **85/105** | |

**Verdict**: BUILD

**Next Steps**:
1. Validate with 10 small landlords (cold outreach on r/landlord, BiggerPockets)
2. Build MVP focused on: rent collection (ACH) + digital lease signing + maintenance request portal + expense tracking
3. Partner with BiggerPockets for content/distribution
4. Plan AppSumo launch -- this category will perform well

**Risks**:
1. Free-tier competitors (Avail, TenantCloud, TurboTenant) create price sensitivity -- need clear value-add over free options
2. Rent collection requires payment compliance (ACH regulations, handling tenant disputes)
3. DoorLoop and RentRedi are newer entrants targeting similar space -- must differentiate on UX and pricing

**Key Source Links**:
- https://news.ycombinator.com/item?id=47075124 (Micasa -- 621 pts, 197 comments)
- https://www.reddit.com/r/landlord/
- https://www.reddit.com/r/realestateinvesting/
- https://www.biggerpockets.com/forums/52
- https://www.g2.com/products/buildium/reviews

---

### 3. Cleaning Business Management -- Score: 80/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | ZenMaid, BookingKoala/Launch27, Swept all validate market. $90B industry. Reddit threads with 22+ answers on automation needs. r/CleaningBusiness has 35K+ members actively discussing software. |
| Competitor Weakness | 4/5 | 2x | 8 | BookingKoala charges $395/mo and "feels half-baked." ZenMaid has per-cleaner pricing. Swept is commercial-only. No tool handles recurring schedules + per-room checklists + auto-invoicing well. Fragmented market with no dominant affordable winner. |
| LTD Viability | 5/5 | 2x | 10 | $69-129 LTD is very profitable. Simple infrastructure (scheduling, checklists, invoicing). Cleaning businesses are cost-sensitive and LTD-loving. r/CleaningBusiness regularly discusses software costs. |
| No Free Tier | 4/5 | 1x | 4 | No major free-tier competitor in cleaning-specific software. Yardbook is free but for landscaping. Cleaning business owners expect to pay for scheduling tools. |
| Channel Access | 5/5 | 2x | 10 | r/CleaningBusiness (35K+), Facebook: Cleaning Business Owners (50K+), Maid Service Millionaires (20K+), House Cleaning Pros (15K+). CleanFax magazine. TikTok/YouTube cleaning business influencers. Very accessible audience. |
| Content Potential | 4/5 | 1x | 4 | Good SEO: "cleaning business software", "maid service scheduling app", "Airbnb cleaning management", "ZenMaid alternative". "How to start a cleaning business" content drives massive traffic. |
| AppSumo Fit | 4/5 | 2x | 8 | Cleaning business owners are active deal-seekers. Less likely on AppSumo than tech founders, but combined AppSumo + cleaning community marketing would work well. |
| Review Potential | 4/5 | 1x | 4 | Cleaning business owners are vocal in their communities. ZenMaid has strong review presence, proving the audience reviews software. |
| MRR Path | 4/5 | 3x | 12 | LTD for base, MRR for: SMS notifications to clients, Airbnb/VRBO calendar integration, payment processing fees, AI-powered booking optimization. Per-cleaner pricing above LTD threshold for growing companies. |
| Build Feasibility | 4/5 | 2x | 8 | MVP (recurring scheduling + checklists + invoicing + online booking) in 3-5 weeks. Simple domain. Airbnb API integration adds 1-2 weeks for turnover cleaning specialization. |
| Boring Business Bonus | 5/5 | 2x | 10 | Cleaning services -- deeply boring, blue-collar, local services. Peak boring business. |
| **TOTAL** | | | **80/105** | |

**Verdict**: BUILD

**Next Steps**:
1. Decide sub-segment focus: residential maid service vs. Airbnb turnover cleaning vs. commercial janitorial (recommend Airbnb turnover -- most underserved, clear workflow)
2. Validate with 10 cleaning business owners on r/CleaningBusiness and Facebook groups
3. Build MVP: recurring schedule + room-by-room checklists + photo verification + auto-invoicing
4. Launch on AppSumo + cleaning business Facebook groups simultaneously

**Risks**:
1. Fragmented market -- cleaning businesses range from solo operators to 50-person crews with very different needs
2. Low price tolerance -- cleaning businesses have thinner margins than trades, may resist even $69 LTD
3. ZenMaid has strong brand loyalty in the maid service niche -- need to differentiate (Airbnb focus or commercial focus)

**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/16dmbss/
- https://www.reddit.com/r/CleaningBusiness/
- https://www.g2.com/products/zenmaid/reviews
- https://www.g2.com/products/bookingkoala/reviews
- https://www.capterra.com/maid-service-software/

---

### 4. Review & Reputation Management for Local Businesses -- Score: 76/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Birdeye ($300+/mo), Podium ($250+/mo), NiceJob ($75/mo) all prove market. Google reviews are #1 driver of new customers for local businesses. Algorithm updates in 2025-2026 favor review velocity. |
| Competitor Weakness | 3/5 | 2x | 6 | NiceJob at $75/mo and GatherUp are closer to affordable. But Birdeye/Podium are overbuilt CRM/messaging suites. The gap is a dead-simple, reviews-only tool under $30/mo. Competition is moderate. |
| LTD Viability | 5/5 | 2x | 10 | $49-69 LTD is very profitable. Minimal infrastructure (Twilio SMS + Google Places API). Per-user costs extremely low. High perceived value. |
| No Free Tier | 3/5 | 1x | 3 | Some basic review tools exist for free (manual Google review link sharing). NiceJob and others have free trials. Need to show clear automation value over DIY. |
| Channel Access | 4/5 | 2x | 8 | Crosses all local business verticals -- every trade subreddit, every local business Facebook group, BNI/networking groups, Chamber of Commerce. Wide reach but less focused than vertical tools. |
| Content Potential | 5/5 | 1x | 5 | Exceptional SEO: "get more Google reviews", "review management software small business", "Birdeye alternative". Evergreen content about local SEO and reviews. |
| AppSumo Fit | 5/5 | 2x | 10 | Review/reputation tools perform extremely well on AppSumo. Digital marketers and small business owners on AppSumo understand review value. This would be a natural AppSumo hit. |
| Review Potential | 3/5 | 1x | 3 | Ironic: a review management tool needs reviews to succeed. Users will review if it demonstrably grows their review count. But the tool itself is less "daily-use" than FSM or PM software. |
| MRR Path | 3/5 | 3x | 9 | LTD for base (review requests + monitoring). MRR for: SMS volume overages, AI review response drafting, multi-location management, review-to-social content, advanced analytics. Path exists but retention risk -- users may feel "done" after initial review boost. |
| Build Feasibility | 5/5 | 2x | 10 | Fastest to build of all ideas. MVP in 2 weeks. Twilio for SMS + Google Places API + simple dashboard. Very low complexity. |
| Boring Business Bonus | 3/5 | 2x | 6 | Cross-vertical (not industry-specific). Review management is general small business ops, not a specific boring trade. |
| **TOTAL** | | | **76/105** | |

**Verdict**: BUILD (as quick-win or add-on module)

**Next Steps**:
1. Consider building as a standalone quick-win product OR as a module within the FSM/PM platform
2. MVP in 2 weeks -- validate demand with $49 LTD pre-sale
3. Launch on AppSumo first -- this category has proven AppSumo fit
4. Use revenue to fund development of larger FSM or PM product

**Risks**:
1. Low switching cost / low stickiness -- users could churn after initial review boost
2. NiceJob at $75/mo is already reasonably affordable -- the gap is not as dramatic as FSM
3. Google API changes could break core functionality (review monitoring)

**Key Source Links**:
- https://www.birdeye.com
- https://www.podium.com
- https://www.nicejob.com
- https://www.g2.com/products/birdeye/reviews
- https://gatherup.com

---

## Tier 2: Worth Exploring (Score 55-74)

### 5. Construction Management for Small Contractors -- Score: 73/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Procore ($375+/mo), Buildertrend ($199-499/mo), CoConstruct. 40+ comments on r/ConstructionManagers. |
| Competitor Weakness | 4/5 | 2x | 8 | Enterprise tools, small contractors use OneNote and Google Docs. |
| LTD Viability | 4/5 | 2x | 8 | $99-149 LTD works. |
| No Free Tier | 4/5 | 1x | 4 | Contractors expect to pay. |
| Channel Access | 4/5 | 2x | 8 | r/ConstructionManagers, r/Construction, r/Contractor, Facebook groups. |
| Content Potential | 3/5 | 1x | 3 | Good but competitive SEO. |
| AppSumo Fit | 3/5 | 2x | 6 | Moderate. |
| Review Potential | 3/5 | 1x | 3 | Word-of-mouth driven. |
| MRR Path | 4/5 | 3x | 12 | Project storage, subcontractor management, advanced estimating. |
| Build Feasibility | 3/5 | 2x | 6 | More complex -- needs estimating, file storage, project tracking. 6-8 week MVP. |
| Boring Business Bonus | 5/5 | 2x | 10 | Small contractors are deeply boring. |
| **TOTAL** | | | **73/105** | |

**Verdict**: EXPLORE FURTHER -- significant overlap with FSM. Could be a vertical specialization of the FSM product rather than standalone.

**Risks**: Overlaps with FSM. Construction estimating is complex. Procore could move downmarket.

---

### 6. Mobile Estimation & Quoting for Field Workers -- Score: 72/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Joist (acquired by Buildertrend), Invoice Simple validate. Reddit threads on HVAC estimating. |
| Competitor Weakness | 3/5 | 2x | 6 | Joist decent but folded into Buildertrend. No trade-specific pricing databases. |
| LTD Viability | 5/5 | 2x | 10 | $69-89 LTD very profitable. |
| No Free Tier | 3/5 | 1x | 3 | Invoice Simple has free features. |
| Channel Access | 4/5 | 2x | 8 | Same trade communities. Supply house partnerships possible. |
| Content Potential | 4/5 | 1x | 4 | Good long-tail SEO. |
| AppSumo Fit | 3/5 | 2x | 6 | Moderate. |
| Review Potential | 3/5 | 1x | 3 | Moderate. |
| MRR Path | 3/5 | 3x | 9 | Weaker standalone -- better as FSM module. |
| Build Feasibility | 4/5 | 2x | 8 | Basic quoting app in 2-3 weeks. Trade-specific pricing DBs take longer. |
| Boring Business Bonus | 5/5 | 2x | 10 | Deeply boring field worker tooling. |
| **TOTAL** | | | **72/105** | |

**Verdict**: EXPLORE FURTHER -- best as a module within FSM, not standalone.

---

### 7. Salon & Barbershop Management -- Score: 69/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Vagaro, Fresha, Booksy, Square Appointments all prove market. 1M+ salons/barbershops in US. |
| Competitor Weakness | 4/5 | 2x | 8 | Fresha 20% commission, Vagaro per-stylist pricing, marketplaces send clients to competitors. |
| LTD Viability | 4/5 | 2x | 8 | $59-119 LTD works. |
| No Free Tier | 2/5 | 1x | 2 | Square Appointments free for single users. Fresha "free" (commission). Strong free expectation. |
| Channel Access | 4/5 | 2x | 8 | r/hairstylist, r/Barber, Behind The Chair (200K+), Instagram influencers. |
| Content Potential | 3/5 | 1x | 3 | Competitive SEO space. |
| AppSumo Fit | 3/5 | 2x | 6 | Stylists may not be on AppSumo. |
| Review Potential | 3/5 | 1x | 3 | Moderate. |
| MRR Path | 3/5 | 3x | 9 | Payment processing, SMS, retail POS. Free-tier competitors make transition harder. |
| Build Feasibility | 4/5 | 2x | 8 | 3-5 week MVP. Booking + profiles + POS. |
| Boring Business Bonus | 3/5 | 2x | 6 | Barbershops boring, salons have some glamour. Mixed. |
| **TOTAL** | | | **69/105** | |

**Verdict**: EXPLORE FURTHER -- free-tier competition from Square/Fresha is a major barrier. "No marketplace" angle is compelling but may not overcome free inertia.

---

### 8. AI Receptionist for Local Businesses -- Score: 67/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Smith.ai ($240-750/mo), Ruby ($235-640/mo). Missed calls = lost revenue well-documented. |
| Competitor Weakness | 3/5 | 2x | 6 | AI-only entrants (Dialzara, Goodcall) emerging. Getting crowded fast. |
| LTD Viability | 2/5 | 2x | 4 | Ongoing API costs (Twilio + LLM) make pure LTD very challenging. Hybrid model needed. |
| No Free Tier | 4/5 | 1x | 4 | No free tier. Businesses understand answering costs money. |
| Channel Access | 4/5 | 2x | 8 | Same trade communities + dental/legal/medical groups. Wide appeal. |
| Content Potential | 4/5 | 1x | 4 | Strong SEO with clear ROI stories. |
| AppSumo Fit | 3/5 | 2x | 6 | AI tools do well on AppSumo but usage pricing complicates LTD. |
| Review Potential | 3/5 | 1x | 3 | Hard to measure attribution. |
| MRR Path | 4/5 | 3x | 12 | Natural MRR -- usage-based per call/minute. LTD is just acquisition. |
| Build Feasibility | 3/5 | 2x | 6 | MVP 2-4 weeks but production voice AI (accents, noise, edge cases) is hard. |
| Boring Business Bonus | 4/5 | 2x | 8 | Answering service for trades. Boring buyers, AI angle is trendy. |
| **TOTAL** | | | **67/105** | |

**Verdict**: EXPLORE FURTHER -- strong MRR potential but LTD model is weak. Better as usage-based SaaS. Consider after establishing FSM customer base.

---

### 9. Landscaping Business Management -- Score: 66/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Jobber, Service Autopilot, Yardbook validate. $130B industry. 1-2 Reddit threads. |
| Competitor Weakness | 3/5 | 2x | 6 | Yardbook is free. Jobber is generic. Service Autopilot is complex. Narrower gap. |
| LTD Viability | 4/5 | 2x | 8 | $69-99 LTD works. But Yardbook free tier is challenging. |
| No Free Tier | 2/5 | 1x | 2 | Yardbook is free and landscaping-specific. |
| Channel Access | 4/5 | 2x | 8 | r/landscaping, r/lawncare, Facebook groups. |
| Content Potential | 3/5 | 1x | 3 | Decent but competitive. |
| AppSumo Fit | 3/5 | 2x | 6 | Moderate. |
| Review Potential | 3/5 | 1x | 3 | Moderate. |
| MRR Path | 3/5 | 3x | 9 | Route optimization, GPS, seasonal contracts. Yardbook free makes conversion harder. |
| Build Feasibility | 4/5 | 2x | 8 | 3-5 week MVP. Route-based scheduling is unique. |
| Boring Business Bonus | 5/5 | 2x | 10 | Deeply boring. |
| **TOTAL** | | | **66/105** | |

**Verdict**: EXPLORE FURTHER -- overlaps with FSM. Yardbook free is a challenge. Better as FSM vertical.

---

### 10. Compliance & Licensing Management for Trades -- Score: 64/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Greenfield -- no SMB competitors exist. Proves demand but also means unproven willingness to pay. |
| Competitor Weakness | 4/5 | 2x | 8 | No purpose-built tools. Wide open. |
| LTD Viability | 4/5 | 2x | 8 | $79-99 LTD. Low infra costs. High perceived value (avoid fines). |
| No Free Tier | 4/5 | 1x | 4 | No free competitors. |
| Channel Access | 3/5 | 2x | 6 | Trade associations, supply houses. Compliance is "should do" not "want to do" -- harder to get excitement. |
| Content Potential | 4/5 | 1x | 4 | Niche but high-intent SEO. |
| AppSumo Fit | 2/5 | 2x | 4 | Compliance tools do not excite AppSumo audience. |
| Review Potential | 2/5 | 1x | 2 | Users rarely enthusiastically review compliance software. |
| MRR Path | 3/5 | 3x | 9 | State DB updates, auto-renewal, multi-location. Niche recurring potential. |
| Build Feasibility | 4/5 | 2x | 8 | Core tracker in 2-3 weeks. State-specific DB is ongoing labor. |
| Boring Business Bonus | 5/5 | 2x | 10 | Compliance for trades -- boring squared. |
| **TOTAL** | | | **64/105** | |

**Verdict**: EXPLORE FURTHER -- best as FSM add-on module, not standalone.

---

### 11. AI Job Costing & Profitability for Trades -- Score: 63/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Knowify ($149-599/mo) validates for construction. Few tools for small trades. |
| Competitor Weakness | 4/5 | 2x | 8 | Knowify expensive and construction-focused. QuickBooks job costing is terrible. |
| LTD Viability | 4/5 | 2x | 8 | $89-119 LTD. Receipt OCR is affordable. |
| No Free Tier | 4/5 | 1x | 4 | No free competitors. |
| Channel Access | 3/5 | 2x | 6 | Trade communities. "Job costing" requires education-first marketing. |
| Content Potential | 4/5 | 1x | 4 | High-intent, education-driven content. |
| AppSumo Fit | 2/5 | 2x | 4 | Niche, hard to explain in AppSumo listing. |
| Review Potential | 3/5 | 1x | 3 | Grateful users but slow "aha moment." |
| MRR Path | 3/5 | 3x | 9 | Advanced analytics, AI scanning volume, multi-crew. Standalone has retention risk. |
| Build Feasibility | 4/5 | 2x | 8 | MVP (time tracking + receipt OCR + costing) in 3-4 weeks. |
| Boring Business Bonus | 5/5 | 2x | 10 | Job costing for trades -- extremely boring, extremely valuable. |
| **TOTAL** | | | **63/105** | |

**Verdict**: EXPLORE FURTHER -- best as FSM feature module. Compelling ROI story ("stop taking unprofitable jobs").

---

### 12. Dental Practice Patient Communication -- Score: 60/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Weave ($300-500/mo), Solutionreach. 200K+ dental practices. |
| Competitor Weakness | 3/5 | 2x | 6 | Weave/Solutionreach expensive but well-established. NexHealth growing. |
| LTD Viability | 2/5 | 2x | 4 | Ongoing SMS costs. EHR integration complexity. |
| No Free Tier | 4/5 | 1x | 4 | No free tier. Practices expect to pay. |
| Channel Access | 3/5 | 2x | 6 | r/Dentistry, dental Facebook groups, ADA. Tighter community, harder to penetrate. |
| Content Potential | 4/5 | 1x | 4 | Good SEO. |
| AppSumo Fit | 2/5 | 2x | 4 | Dentists are not on AppSumo. |
| Review Potential | 3/5 | 1x | 3 | Reviews on dental-specific platforms, not G2. |
| MRR Path | 4/5 | 3x | 12 | Natural MRR -- usage-based SMS, recall campaigns. |
| Build Feasibility | 3/5 | 2x | 6 | MVP 3-4 weeks. EHR integration is critical barrier. |
| Boring Business Bonus | 4/5 | 2x | 8 | Unglamorous professional service. |
| **TOTAL** | | | **60/105** | |

**Verdict**: EXPLORE FURTHER -- strong MRR but LTD weak, EHR integration is barrier, AppSumo does not work. Needs dental industry connections.

---

### 13. Auto Repair Shop Management -- Score: 58/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Mitchell 1, Tekmetric, Shopmonkey validate. 250K+ shops. |
| Competitor Weakness | 3/5 | 2x | 6 | Mitchell 1 legacy but entrenched. Tekmetric/Shopmonkey modern and growing. |
| LTD Viability | 3/5 | 2x | 6 | Parts catalog and labor guide data layer is expensive to build/license. |
| No Free Tier | 4/5 | 1x | 4 | Shops expect to pay. |
| Channel Access | 3/5 | 2x | 6 | r/MechanicAdvice (800K+) discusses cars, not software. Harder SaaS messaging. |
| Content Potential | 3/5 | 1x | 3 | Competitive space. |
| AppSumo Fit | 2/5 | 2x | 4 | Mechanics not on AppSumo. |
| Review Potential | 3/5 | 1x | 3 | Moderate. |
| MRR Path | 3/5 | 3x | 9 | Parts integration, DVI, reporting. Labor data is expensive/licensed. |
| Build Feasibility | 2/5 | 2x | 4 | 6-8+ weeks. Parts catalog, DVI, VIN decoder need specialized data sources. |
| Boring Business Bonus | 5/5 | 2x | 10 | Deeply boring, blue-collar. |
| **TOTAL** | | | **58/105** | |

**Verdict**: PASS for now -- too complex, newer competitors well-funded. Revisit after FSM succeeds.

---

### 14. Franchise & Multi-Location Operations -- Score: 55/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | FranConnect ($500-2000/mo) validates enterprise. Smaller franchise segment less proven. |
| Competitor Weakness | 3/5 | 2x | 6 | FranConnect dominates enterprise. Few for emerging franchises. |
| LTD Viability | 2/5 | 2x | 4 | Per-location pricing standard. Margins thin with multi-tenant infra. |
| No Free Tier | 4/5 | 1x | 4 | Franchise operators expect to pay. |
| Channel Access | 2/5 | 2x | 4 | Franchise expos, IFA lists -- expensive institutional channels. |
| Content Potential | 3/5 | 1x | 3 | Niche SEO. |
| AppSumo Fit | 1/5 | 2x | 2 | Franchise operators not on AppSumo. |
| Review Potential | 2/5 | 1x | 2 | B2B, reviews less important. |
| MRR Path | 3/5 | 3x | 9 | Per-location monthly is natural. Good per-customer MRR. |
| Build Feasibility | 2/5 | 2x | 4 | Multi-location management is complex. 6-8+ weeks. |
| Boring Business Bonus | 4/5 | 2x | 8 | Boring franchises but "franchise" has some glamour. |
| **TOTAL** | | | **55/105** | |

**Verdict**: PASS -- channel access too institutional. LTD does not fit franchise pricing. High complexity.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| Veterinary Practice Management | DQ | Failed must-have filter: requires deep medical compliance expertise, IDEXX lab monopoly creates unbeatable ecosystem lock-in |

---

## Summary Scoreboard

| Rank | Idea | Score | Tier | Verdict |
|------|------|-------|------|---------|
| 1 | Field Service Mgmt for Small Trades | 88/105 | Tier 1 | BUILD |
| 2 | Property Mgmt for Small Landlords | 85/105 | Tier 1 | BUILD |
| 3 | Cleaning Business Management | 80/105 | Tier 1 | BUILD |
| 4 | Review & Reputation Management | 76/105 | Tier 1 | BUILD (quick-win/add-on) |
| 5 | Construction Mgmt for Small Contractors | 73/105 | Tier 2 | EXPLORE (FSM vertical) |
| 6 | Mobile Estimation & Quoting | 72/105 | Tier 2 | EXPLORE (FSM module) |
| 7 | Salon & Barbershop Management | 69/105 | Tier 2 | EXPLORE (free-tier risk) |
| 8 | AI Receptionist for Local Businesses | 67/105 | Tier 2 | EXPLORE (MRR not LTD) |
| 9 | Landscaping Business Management | 66/105 | Tier 2 | EXPLORE (FSM vertical) |
| 10 | Compliance & Licensing for Trades | 64/105 | Tier 2 | EXPLORE (FSM module) |
| 11 | AI Job Costing for Trades | 63/105 | Tier 2 | EXPLORE (FSM module) |
| 12 | Dental Practice Patient Comms | 60/105 | Tier 2 | EXPLORE (needs industry ties) |
| 13 | Auto Repair Shop Management | 58/105 | Tier 2 | PASS (too complex) |
| 14 | Franchise Multi-Location Ops | 55/105 | Tier 2 | PASS (wrong channels) |

---

## Top 3 Recommendations

1. **Field Service Management for Small Trades** -- "Anti-ServiceTitan: simple dispatch, invoicing, and scheduling for 1-5 truck shops. Flat pricing, no per-tech fees, mobile-first. $89 LTD." -- Score: 88/105 -- https://www.reddit.com/r/Plumbing/comments/1kk09e5/
2. **Property Management for Small Landlords** -- "All-in-one landlord tool: rent collection, leases, maintenance, tax reports for 1-50 unit portfolios. $79 LTD." -- Score: 85/105 -- https://news.ycombinator.com/item?id=47075124
3. **Cleaning Business Management** -- "Cleaning-specific scheduling with recurring job templates, per-room checklists, photo verification, and auto-invoicing. $69 LTD." -- Score: 80/105 -- https://www.reddit.com/r/CleaningBusiness/

---

## Strategic Notes

### The "Boring Stack" Play
Many Tier 2 ideas (construction management, mobile quoting, compliance tracking, job costing, review management) are best built as **modules within the FSM platform** rather than standalone products. The strongest long-term play is:

1. **Launch FSM** as the core product (scheduling + dispatch + invoicing)
2. **Add modules** over time: quoting, job costing, compliance, reviews, AI dispatch
3. **Specialize by vertical**: same core platform, different templates/terminology for plumbers vs. HVAC vs. electricians vs. landscapers vs. construction

This "Boring Stack" approach -- a modular platform for trades -- has the highest ceiling and matches the Tier 2 insights about what buyers actually need.

### Recommended Build Sequence
1. **Month 1-2**: Build FSM MVP + Review Management as quick-win add-on
2. **Month 2-3**: Launch on AppSumo + trade communities. Use LTD revenue to fund development.
3. **Month 3-4**: Add Property Management as second product (different audience, same playbook)
4. **Month 4-5**: Add Cleaning Business as third product or FSM vertical
5. **Month 6+**: Begin MRR transition with advanced features, AI modules, and per-unit/per-tech pricing above LTD limits

### Key Cross-Cutting Insight
The single strongest signal across all four research reports: **ServiceTitan is the most-hated and most-expensive tool in trades, and 80% of trades businesses (1-5 truck shops) cannot afford it.** Building the "anti-ServiceTitan" -- simple, affordable, mobile-first -- is the clearest opportunity in boring business SaaS today.

---

*Evaluation completed: 2026-02-21 | Framework: 11-criterion weighted scoring (max 105) | Ideas evaluated: 14 distinct opportunities from 4 research reports*
