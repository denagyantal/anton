# HN & Indie Hackers Scan — 2026-11-11

Focused on boring business / unsexy verticals with real revenue signals. Sources: Exa semantic search across HN + IH, Jina reader for thread depth.

---

## 1. Crewbird — Field Service CRM with Google Local Service Ads Integration

- **Source**: https://news.ycombinator.com/item?id=50418273 (Ask HN: What are you working on? November 2026)
- **Additional Links**: https://getcrewbird.com/
- **Platform**: HN
- **Type**: Ask HN WAYWO (Nov 2026 thread)
- **Engagement**: Comment thread with multiple replies validating the pain — "the space between a full blown ERP and a tracker on an Excel Spreadsheet is absolutely abysmal"
- **Revenue Data**: None disclosed (early stage, founder just laid off, built for dad's carpet cleaning company). Dad achieving 3x ROAS on Google LSA.
- **Boring Business Score**: 5 — carpet/floor cleaning, service businesses, field service
- **Target Industry**: Any service business running Google Local Service Ads — cleaning, HVAC, pest control, etc.
- **Core Value Prop**: FSM + CRM that actually integrates with Google Ads API so service businesses can track dollar-for-dollar ROAS on ad spend. Legacy CRMs have no LSA integration; Google LSA's own dashboard is inadequate.
- **Gap/Opportunity**: No existing FSM/CRM has clean Google LSA API integration. Multiple HN commenters confirmed the pain independently ("I actually just started a startup... we literally just complained about the [Google Ads] dashboard"). Old desktop CRMs are being discontinued. The sweet spot between full ERP and Excel is universally described as "abysmal."
- **Our Angle**: Build the FSM-lite specifically for the Google LSA customer acquisition funnel — job → lead source → ROI report in one screen. Price aggressively ($29-49/mo) vs Jobber/HousecallPro ($99-200+/mo). LSA is growing fast as a channel for service businesses.
- **LTD Potential**: 4 — service businesses often buy lifetime, and the problem is evergreen

---

## 2. Prelay — Weather-Based Work Planning for Outdoor Contractors

- **Source**: https://news.ycombinator.com/item?id=50341158 (Show HN, Nov 2026)
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: HN
- **Type**: Show HN (very recent — 2 days ago at time of scan)
- **Engagement**: 2 points, fresh launch
- **Revenue Data**: None yet — just launched. Founded by ex-SpaceX/Varda aerospace engineer.
- **Boring Business Score**: 5 — landscaping, roofing, exterior trades
- **Target Industry**: Outdoor contractors — landscaping, roofing, concrete, exterior painting, irrigation
- **Core Value Prop**: Monitors contractor's full job schedule across sites and predicts weather suitability for 62 activity types across 12 trades. Automated notifications to reschedule before the 6am cutoff (after which some contractors must pay crews even if they can't work).
- **Gap/Opportunity**: The key insight: "One owner told me he wakes up at 4am every day, because if he lets them know after 6am, he has to pay them even if they can't work." No existing FSM tool does weather-sensitive scheduling alerts. Generic weather apps don't understand soil wetness, don't know what a specific job requires, and don't trigger automatic reschedule workflows.
- **Our Angle**: Weather-triggered reschedule automation as the core wedge. Build direct integrations into Jobber/HousecallPro as a module. Could expand to include predictive crew deployment planning.
- **LTD Potential**: 3 — weather is a utility, recurring value case is clearer for subscription

---

## 3. Breezy HVAC — Vertical SaaS with $250K ARR in 9 Months (Deep Read)

- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Additional Links**: N/A (product no longer publicly discussed, founder blog post only)
- **Platform**: External (via Exa discovery)
- **Type**: Founder retrospective / growth case study
- **Engagement**: Widely cited in vertical SaaS circles
- **Revenue Data**: $0 → $250K+ ARR in 9 months. 2,300+ maintenance plans managed by month-end.
- **Boring Business Score**: 5 — HVAC service businesses
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: Won by deeply modeling HVAC Maintenance Plans — a multi-axis state machine (payment + scheduling + enrollment + renewal) that every HVAC shop was running on spreadsheets and sticky notes. Competitors offered "pretty CRMs" with generic dashboards; Breezy built the actual operational ritual into software.
- **Gap/Opportunity**: The lesson: "The moat is the manual workflow nobody else has bothered to model correctly." HVAC maintenance plans specifically involve grandfather pricing, proration edge cases, renewal queues, and visit tracking. The spec took 1,000 customer conversations and 3 rewrites. Existing software (ServiceTitan etc.) is too expensive for small shops.
- **Our Angle**: The Breezy model is replicable in adjacent trades. What is the HVAC maintenance plan equivalent in plumbing? Pest control service agreements? Pool maintenance routes? Each has an analogous "painful manual state machine" that incumbents handle poorly.
- **LTD Potential**: 4 — operational infrastructure tools with network effects (all plans/data inside) have high retention and LTD appeal for small shops

---

## 4. ZenMaid → $3M/yr Cleaning Company SaaS (Validated Market Signal)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Platform**: Indie Hackers
- **Type**: Founder interview / revenue milestone
- **Engagement**: Featured article
- **Revenue Data**: $3M/yr bootstrapped, 11 years old (started 2013, now well-established)
- **Boring Business Score**: 5 — residential maid/cleaning services
- **Target Industry**: Maid and cleaning services (residential)
- **Core Value Prop**: Scheduling software specifically for maid services — not generic field service, deeply tuned to cleaner rosters, recurring appointments, and client preferences.
- **Gap/Opportunity**: ZenMaid is now 11+ years old and priced for teams. Multiple new entrants spotted in the same space: BlastoClean (Oct 2026 launch, quoting-first for cleaning), CleanRoute (solo cleaner route optimizer), showing the market still has room for more focused tools. The micro-niche of **solo cleaners** vs **small teams** vs **multi-crew companies** is underserved.
- **Our Angle**: Build for solo cleaners (1-2 person operations) who find ZenMaid overkill — route optimization, recurring booking, simple invoicing, Google review requests in one cheap mobile app. Test at $15-19/mo. CleanRoute from TaxSort is exploring this angle but hasn't launched.
- **LTD Potential**: 4

---

## 5. BasinCheck — Oil & Gas Safety Audit SaaS ($1.2K MRR, Crossing $1K)

- **Source**: https://www.indiehackers.com/product/basincheck
- **Platform**: Indie Hackers
- **Type**: Product page with milestone updates
- **Revenue Data**: $1.2K MRR with 2 customers (July 2026). First customer at $300/mo pilot → renewed at $860/mo. Second customer pushed MRR past $1K. Solo technical founder based in Poland, selling to Permian Basin Texas.
- **Boring Business Score**: 5 — oil & gas field safety/compliance
- **Target Industry**: Oil & gas SMB contractors, Permian Basin (US)
- **Core Value Prop**: Digitizes safety audits and compliance checklists for oil & gas contractors who currently use paper forms. Core features: audit creation, corrective action tracking.
- **Gap/Opportunity**: Safety compliance in oil & gas is mandatory (OSHA, state regs), creating regulatory forcing functions to adopt software. SMBs in this space are underserved — enterprise tools (SAP, Oracle) are out of reach. Single pilot customer renewed at nearly 3x, which suggests willingness to pay at much higher ASPs ($500-1K+/mo per company). Solo founder in Poland selling to Texas validates remote sales are possible.
- **Our Angle**: Similar pattern could apply to: construction safety/OSHA documentation, electrical contractor compliance, tank/septic inspection records. The "mandatory compliance docs on paper" opportunity exists in dozens of boring trade verticals.
- **LTD Potential**: 3 — compliance tools often need ongoing updates as regulations change, making recurring subscription more natural; LTD feasible for smaller shops

---

## 6. JobNook — Lightweight Field Service for Solo Trade Contractors (Beta)

- **Source**: https://www.indiehackers.com/product/jobnook
- **Platform**: Indie Hackers
- **Type**: Product milestone posts (Aug–Sep 2026)
- **Revenue Data**: $0 — actively recruiting beta testers (offering 2 months free), just launched
- **Boring Business Score**: 4 — electricians, plumbers, HVAC
- **Target Industry**: Independent contractors (electricians, plumbers, HVAC) — specifically 1-person operations
- **Core Value Prop**: "Just the core workflow, nothing you don't need" — customers, jobs, quotes, invoices, online payments. Deliberately avoiding the complexity of Jobber, Housecall Pro, QuoteIQ.
- **Gap/Opportunity**: Founder's framing is correct — existing tools are built for 5+ person crews. 1-person trades have different needs (phone-first, no dispatching, simple invoicing). The market signal is strong: multiple new tools launched in 2026 targeting this same gap. First-mover advantage still open.
- **Our Angle**: The key differentiator question: what does a solo tradesperson do that a 5-person crew doesn't? They're also the estimator, the dispatcher, the bookkeeper. A tool optimized for "one human wearing all hats on a phone" is different from a stripped-down Jobber.
- **LTD Potential**: 4 — solo operators respond well to one-time pricing

---

## 7. InstaBid Solo — Instant Quote Wizard for Service Contractors (July 2026)

- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Product launch post
- **Revenue Data**: Not disclosed — just launched July 2026. 5 months solo build.
- **Boring Business Score**: 4 — pressure washing, home services contractors
- **Target Industry**: Service contractors (pressure washing, home services)
- **Core Value Prop**: Instant-quote wizard embedded in contractor website — customer answers questions, gets transparent price estimate in <60 seconds, lands as qualified lead. Partial abandonment still captures lead info. Conversion analytics, funnel metrics, price sensitivity dashboard.
- **Gap/Opportunity**: Most contractor websites use generic "contact us" forms — customer fills out form, waits days, moves on. The 60-second quote + partial lead capture is a genuinely better funnel. The analytics ("what price ranges close best") is valuable data that no other tool surfaces.
- **Our Angle**: The instant-quote widget could become an embedded component sold as a SaaS add-on to existing FSM tools — a "Calendly for quotes" for trades. Or, build the full funnel platform and compete on price vs. HouseCall Pro's $160+/mo.
- **LTD Potential**: 4 — lead conversion tools with clear ROI sell well as LTD

---

## 8. Zirco.ai — AI Dental Front Desk ($40-50K/yr Labor Replacement)

- **Source**: https://news.ycombinator.com/item?id=47385090 (HN post, ~8 months ago)
- **Platform**: HN
- **Type**: HN product discussion
- **Engagement**: 3 comments, beta stage with 30+ discovery interviews
- **Revenue Data**: Beta, pre-revenue. 30+ dental practices interviewed during discovery.
- **Boring Business Score**: 4 — dental practices
- **Target Industry**: Dental offices (front desk operations)
- **Core Value Prop**: AI that handles full dental front desk workflow — insurance verification via carrier APIs + Playwright browser automation, appointment booking into Dentrix/Open Dental/Eaglesoft, SMS/email reminders, inbound call handling via voice AI (Vapi). Replaces $40-50K/yr front desk staff with 40% annual turnover.
- **Gap/Opportunity**: The specific technical moat described: 10+ different carrier portals with different data formats, all handled via Playwright where APIs don't exist. The "insurance verification" step alone is 2-3 hours/day per front desk employee — it's the most painful, most automatable part. This is the "HVAC maintenance plan" complexity that creates moat.
- **Our Angle**: The insurance verification automation is the wedge — not the whole platform. A standalone "dental insurance verification" SaaS that integrates into existing PMS systems (Dentrix, Eaglesoft) could be faster to sell than a full AI employee. Price at $200-400/mo per practice.
- **LTD Potential**: 2 — insurance verification requires ongoing updates as carrier portals change; subscription is better fit

---

## 9. CraftBoop — Automated Follow-Ups for Service Businesses (Early Traction)

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post (April 2026)
- **Revenue Data**: "A few users" — $29/mo pricing, 14-day free trial. Early stage.
- **Boring Business Score**: 4 — plumbers, HVAC, cleaners, painters, landscapers
- **Target Industry**: Any service business (plumbing, HVAC, cleaning, painting, landscaping)
- **Core Value Prop**: After each job, automated 5-email sequence: thank you → review request → check-in → rebooking reminder → referral request. Add customer once, automation handles the rest.
- **Gap/Opportunity**: Service businesses are "terrible at following up with customers" — do great work but never ask for Google reviews, never rebook, never ask for referrals. This is a completely manual process that rarely happens. The automation here is simple and the ROI (more Google reviews, more repeat bookings) is tangible.
- **Our Angle**: The email-only approach is limiting — most service businesses communicate primarily via text (SMS). A SMS-first version of this workflow (with optional email) would fit the trades audience better. Integrate with Google Business API for review request links. Bundle with Google LSA tracking (see Crewbird angle).
- **LTD Potential**: 5 — simple automation tools with clear ROI are ideal LTD candidates

---

## 10. HandyPay — Payments & Deposits for Spas/Salons/Service Businesses ($1K MRR in 60 Days)

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Platform**: Indie Hackers
- **Type**: Milestone post (Jan 2026)
- **Revenue Data**: $1K MRR in under 60 days. No ads, no funnels — direct conversations with spas, salons, service businesses.
- **Boring Business Score**: 4 — spas, salons, appointment-based service businesses
- **Target Industry**: Spas, salons, and service businesses that need deposits to reduce no-shows
- **Core Value Prop**: Simple way to collect deposits and get paid; reduces no-shows. One clear use case per their post: "get paid fast and reduce no-shows."
- **Gap/Opportunity**: The lesson here is in the go-to-market, not the product: direct in-person outreach to service businesses with an on-the-spot setup got to $1K MRR in 60 days. Existing payment tools (Square, Stripe) work but aren't optimized for the "collect a deposit to hold an appointment" use case with follow-up workflows.
- **Our Angle**: The deposit + no-show prevention use case is universal across service businesses. Bundle with the CraftBoop-style rebooking automation to create a "get paid + keep customers coming back" product for service pros.
- **LTD Potential**: 4

---

## 11. Fabrication Shop Instant Quoting — High Technical Moat Opportunity

- **Source**: https://news.ycombinator.com/item?id=46266170 (Ask HN WAYWO December 2025)
- **Platform**: HN
- **Type**: WAYWO thread mention
- **Engagement**: Thread discussion — builder describes the problem clearly
- **Revenue Data**: Pre-revenue, early validation
- **Boring Business Score**: 5 — sheet metal fabrication, CNC machining
- **Target Industry**: Small to mid-sized fabrication shops (sheet metal, laser cutting, CNC)
- **Core Value Prop**: CAD file → instant quote in seconds for small fab shops. Currently shops spend 25-40% of total time on quoting. Uses geometric AI (transformer for feature detection, GNN for topology, vision model for mesh segmentation) + 2D/3D nesting. Levels the playing field vs. larger "instant quote" competitors.
- **Gap/Opportunity**: Most small fab shops quote by emailing back and forth for 1-3 weeks. Customers go to whoever quotes fastest. The technical complexity (CAD parsing, geometry analysis, nesting) creates meaningful barriers that protect the moat. No major SaaS player dominates the SMB segment.
- **Our Angle**: The quoting automation is valuable, but the first-mover wedge could be simpler: an AI that reads CAD files and auto-drafts quotes in email format, sending to the shop owner for one-click approval. Lower technical bar than full DFM analysis.
- **LTD Potential**: 3 — fab shops are technical buyers who prefer subscriptions; LTD possible but harder sell

---

## 12. AI Agents for Trades (Market Trend — Multiple Launchers in 2026)

- **Source (1)**: https://news.ycombinator.com/item?id=48580402 — Dolfyn.ai (AI agents for contractors beyond call answering)
- **Source (2)**: https://news.ycombinator.com/item?id=48769010 — Rainslice.ai (fully autonomous home services businesses)
- **Source (3)**: https://news.ycombinator.com/item?id=47138087 — Conduit AI (AI voice agent for missed calls, HVAC/plumbing/dental/salons)
- **Source (4)**: https://news.ycombinator.com/item?id=47545485 — Clawbolt (Mozilla.ai open source, AI assistant for contractors via messaging apps)
- **Platform**: HN (multiple)
- **Type**: Multiple Show HN / product discussions in 2026
- **Engagement**: Low individual engagement (1-4 points each) but pattern across 4+ launches = strong signal
- **Revenue Data**: Rainslice: running 3 cleaning companies via AI in California. Others: pre-revenue or early beta.
- **Boring Business Score**: 4 — HVAC, plumbing, cleaning, field services
- **Target Industry**: Home service trades broadly
- **Core Value Prop**: AI voice/SMS that handles missed calls, books appointments, dispatches, follows up with leads. Post-call AI that connects into CRM/scheduling tools.
- **Gap/Opportunity**: 4+ independent teams all building in this space within a few months = validated demand. The differentiation gap: most stop at "answering the call." Dolfyn's insight is correct — what happens *after* the call is where the operational value is. The integration layer (feeding into whatever CRM/dispatch system the contractor already uses) is the hard part that creates stickiness.
- **Our Angle**: Build the "post-call workflow" AI that integrates with Jobber/HousecallPro/ServiceTitan as a add-on. Position as an AI operations layer that extends existing FSM tools rather than replacing them. Lower switching cost = faster adoption.
- **LTD Potential**: 3 — AI tools with API dependencies are harder LTD; subscription model more natural

---

## 13. CrewMap Pro — Route Optimization for Multi-Crew Field Service

- **Source**: https://www.indiehackers.com/post/your-crew-doesnt-lose-the-day-at-the-job-site-they-lose-it-in-12-minute-pieces-between-them-TorUiieq08NZtofhC0oN
- **Platform**: Indie Hackers
- **Type**: Product framing post (July 2026)
- **Revenue Data**: Not disclosed — part of "BubbaCode" ecosystem (6 apps for industries big software ignores)
- **Boring Business Score**: 5 — field service crews, home services
- **Target Industry**: Multi-crew field service businesses (HVAC, cleaning, pest control, landscaping)
- **Core Value Prop**: Optimize stop order + real-time crew visibility. The math: "4 trucks × 45 wasted minutes/day = 15 paid hours/week = a part-time employee who produces nothing." Most small outfits plan routes in their head at 6:45am.
- **Gap/Opportunity**: Route optimization exists (Google Maps, Route4Me) but isn't integrated into job management. The dispatcher pain of "where is each truck right now vs. where they're supposed to be" is solved by expensive enterprise tools; nothing good exists for <10 truck operations.
- **Our Angle**: Mobile-first route + dispatch tool for small field service fleets. Integrate with Google Maps API. Price at $49-99/mo for up to 5 trucks. Upsell with job completion confirmations and customer ETAs.
- **LTD Potential**: 4

---

## 14. SoloBid — Estimates & Invoicing for Solo Contractors ($19/mo Concept)

- **Source**: https://www.indiehackers.com/post/help-me-pick-3-micro-saas-ideas-for-underserved-niches-which-would-you-pay-for-5b0c370d3b
- **Additional Links**: https://taxsort-tools.pages.dev/solobid
- **Platform**: Indie Hackers
- **Type**: Validation post (March 2026)
- **Revenue Data**: Not yet built — seeking pre-validation feedback
- **Boring Business Score**: 4 — solo electricians, plumbers, handymen
- **Target Industry**: 1-person contractors
- **Core Value Prop**: ServiceTitan costs $1K+/mo, Jobber is $50-150/mo. Solo electricians and plumbers just want to send clean estimates from their phone and get paid. No crew management, no 30-truck scheduling.
- **Gap/Opportunity**: The poster articulates the market gap clearly. This is a confirmed gap — multiple IH posts and HN threads validate the same pain. The question is execution and distribution: how do you reach solo tradespeople who aren't reading IH?
- **Our Angle**: Build the "estimates → invoice → pay" flow that works entirely on mobile, with zero setup. First screen should be "create an estimate now." Use Google LSA as the distribution wedge — when a solo plumber signs up for LSA, offer the tool as the "receive and track your LSA leads" companion.
- **LTD Potential**: 5 — solo operators, one-time price, clear value

---

## Summary: Top Opportunities by Signal Strength

| # | Idea | Signal | Boring Score | LTD |
|---|------|--------|-------------|-----|
| 1 | FSM + Google LSA integration (Crewbird angle) | HN WAYWO Nov 2026, multiple commenters validating pain | 5 | 4 |
| 2 | HVAC Maintenance Plan SaaS (Breezy proven model) | $250K ARR in 9 months — exact playbook documented | 5 | 4 |
| 3 | Cleaning company SaaS (solo cleaner niche) | $3M/yr market proven (ZenMaid), new entrants in 2026 | 5 | 4 |
| 4 | Service business follow-up automation (SMS-first) | CraftBoop launched, HandyPay $1K MRR in 60 days | 4 | 5 |
| 5 | Oil & gas / trades safety compliance | BasinCheck $1.2K MRR early, customers renewing 3x | 5 | 3 |
| 6 | Solo contractor estimates → invoice → pay | Multiple validation threads, clear gap below Jobber | 4 | 5 |
| 7 | Weather-triggered crew scheduling for outdoor trades | Prelay launched Nov 2026, founder from aerospace | 5 | 3 |
| 8 | AI dental insurance verification | Deep technical moat, 2-3h/day pain, 30+ practices interviewed | 4 | 2 |

## Key Themes From This Scan

1. **Google LSA integration is a blind spot** — Every FSM/CRM ignores it, but service businesses are spending heavily on LSA and can't track ROI. First CRM to truly integrate LSA wins a generation of new service businesses.

2. **The gap below $100/mo for trades tools is massive** — Jobber ($50-150), HousecallPro ($99-200+), ServiceTitan ($300-1K+). Every builder who targets this gap finds paying customers. The challenge is distribution, not product.

3. **Manual workflows in boring industries = moat** — Breezy's $250K ARR lesson: find the painful operational ritual (HVAC maintenance plans, dental insurance verification, oil & gas safety audits) that everyone runs on spreadsheets, model it correctly, and you're untouchable.

4. **Solo service pros are chronically underserved** — Jobber is a team tool. QuickBooks is for accountants. There's no good "one person doing all the jobs" mobile tool for a solo plumber or solo cleaner.

5. **AI agents for trades is a hot new entrant category** — 4+ launches in 2026 (Conduit AI, Dolfyn, Rainslice, Clawbolt). Early, pre-revenue, unproven at scale — but the direction is right. The winners will be those who go deep on post-call workflow integration, not just call answering.
