# HN & Indie Hackers Scan — 2026-11-23

**Focus:** Boring business SaaS — trades, home services, field service, construction, dental, local services. Products validated with real revenue in unglamorous markets.

---

## Avenue – Booking Widget for Electricians & Mechanics

- **Source**: https://www.starterstory.com/businesses/avenue-672807/revenue
- **Additional Links**: https://stackstarts.com/avenue-branded-trades-booking-widget/ | https://gtmsauce.com/episodes/2026-09-20-this-simple-widget-makes-50k-month
- **Platform**: Indie Hackers / Starter Story
- **Type**: Revenue milestone / case study
- **Engagement**: High — multiple breakdowns, LinkedIn viral
- **Revenue Data**: AUD $85K/month (~USD $50K/month) as of Nov 2026; launched Feb 2025, went from AUD $597 (Aug 2025) → AUD $63K (Aug 2026). Bootstrapped.
- **Boring Business Score**: 5
- **Target Industry**: Electricians, mechanics, trades (any service business with bookings)
- **Core Value Prop**: A branded website widget + Google "Book Online" button integration that lets customers book/enquire without calling. The booking flow is specific to their trade (vehicle type, service type, date/time — not a generic contact form). Built-in Google Reservations partnership so it appears on Google Business Profiles too.
- **Gap/Opportunity**: Most trades businesses either use a generic contact form (creates admin), require phone calls (miss bookings outside hours), or pay expensive scheduling software overkill. Avenue solves the specific step of converting website + Google visitors into qualified bookings. Most competitors are either generic (Calendly) or massive (ServiceTitan). Zero competitors with a trades-specific branded widget + Google reservations integration at this price point. Tom found this through door-to-door sales — trades businesses responded best, are no-nonsense, and only pay for things that pay for themselves.
- **Our Angle**: Build a comparable widget for a specific sub-niche (e.g., HVAC only, landscaping only). Their Google partnership is a moat — but the core widget without it is replicable. Alternative angle: build the booking widget as an embeddable component for the many FSM/CRM tools that lack a customer-facing layer.
- **LTD Potential**: 3 — SaaS pricing fits better (recurring commission per booking or flat MRR), but a one-time setup fee + subscription at $49-99/mo is LTD-compatible.

---

## Crewbird – FSM + CRM with Google LSA Integration

- **Source**: https://news.ycombinator.com/item?id=50418273 (Ask HN: What are you working on? Nov 2026)
- **Additional Links**: https://getcrewbird.com/ | https://news.ycombinator.com/item?id=50417407 (parent thread)
- **Platform**: Hacker News
- **Type**: Ask HN / WDYWON (November 2026) — very fresh
- **Engagement**: Active discussion; validated by multiple commenters independently expressing the same pain. 3 people in the thread are building similar tools. User "d675" mentioned spending a year implementing a 15-year-old trade ERP that "hasn't had a major overhaul in a while."
- **Revenue Data**: None disclosed yet — early stage, founder's dad is first user at 3x ROAS
- **Boring Business Score**: 5
- **Target Industry**: Service businesses (cleaning, HVAC, plumbing, landscaping, any business using Google Local Service Ads)
- **Core Value Prop**: Field Service Management + CRM built specifically around Google LSA integration. Existing FSM tools (ServiceTitan, Jobber, Housecall Pro) don't integrate well with the Google Ads API, making it impossible to track true ROAS per job. Founder built this after his dad's Windows desktop CRM was discontinued.
- **Gap/Opportunity**: ServiceTitan is $1K+/mo and targets large contractors. Jobber is $50-150/mo but lacks Google LSA-specific analytics. The Google LSA market is growing fast (trades businesses are spending heavily on it) but no tool tracks LSA spend → job booked → ROAS in a clean workflow. Comment from "tropicalhunter": "The space between a full blown ERP and a tracker on an Excel Spreadsheet is absolutely abysmal." 90% of service companies only need something simple — multiple commenters confirmed independently.
- **Our Angle**: Build the lightest possible FSM + Google LSA analytics layer at $49-79/mo. Don't try to be ServiceTitan. Focus purely on the Google LSA ROAS gap — this is a unique wedge nobody else owns. Upsell to basic scheduling, invoicing later.
- **LTD Potential**: 4 — $299-499 LTD for solo/small service business operators makes sense. LSA spend tracking has immediate ROI story.

---

## Prelay – Weather-Based Scheduling for Outdoor Contractors

- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: Hacker News
- **Type**: Show HN — November 2026
- **Engagement**: 2 points, 0 comments — very early, but founder has strong technical background (SpaceX/Varda)
- **Revenue Data**: Not disclosed, early commercial offering
- **Boring Business Score**: 4
- **Target Industry**: Outdoor contractors — landscaping, roofing, concrete, exterior painting, 12 trades total
- **Core Value Prop**: Monitors a contractor's full job schedule and determines weather suitability for 62 different activity types across 12 trades. Uses ensemble weather models + a custom ground-wetness model for soil conditions. Sends notifications so crews can be rescheduled before the 6am cutoff (after which the owner must pay crews even if the job can't proceed).
- **Gap/Opportunity**: Current solution is "wake up at 4am and check the weather app for each site." For multi-site contractors this is genuinely painful and costly — no-shows due to weather cost real money. No existing FSM or scheduling software has weather-aware scheduling at this granularity. The question the founder is wrestling with (raw data vs. actionable recommendations) is actually the exact product decision point — actionable recommendations ("postpone job X") win.
- **Our Angle**: Build a simpler version for a single high-volume trade (e.g., landscaping or roofing exclusively) with actionable job/crew notifications rather than data dashboards. Charge $49-99/mo per contractor. The weather data infrastructure is the hard part — can partner with weather APIs rather than build custom models.
- **LTD Potential**: 3 — works as LTD but weather data costs recur; better as low MRR subscription.

---

## Zirco.ai – AI Front Desk for Dental Practices

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: Hacker News
- **Type**: Show HN — March 2026
- **Engagement**: 1 point, 3 comments (early)
- **Revenue Data**: Beta stage, 30+ dental practices interviewed during discovery
- **Boring Business Score**: 5
- **Target Industry**: Dental practices
- **Core Value Prop**: AI that handles the full dental front desk workflow: insurance verification via carrier APIs and Playwright browser automation, inbound scheduling via voice AI, appointment reminders, new patient intake. Front desk staff costs $40-50K/year with 40% annual turnover. Handles 2-3 hours/day of manual insurance verification work.
- **Gap/Opportunity**: Insurance verification is the killer feature. It requires logging into 10+ different carrier portals with different data formats — this is genuinely painful and nobody has fully automated it. Competitor space includes generic AI receptionists (Conduit AI, Dolfyn) but none with deep dental-specific insurance verification. Stack: Python + FastAPI, Vapi.ai for voice, Claude for reasoning, Playwright for portal automation, Twilio, AWS HIPAA-eligible.
- **Our Angle**: The insurance verification workflow alone (not the voice AI, not the scheduling) is worth $500-1K/month to any dental practice. Build a focused "dental insurance verification automation" product that doesn't try to replace the full front desk. Narrower scope = faster to market. Can expand to full front desk once insurance workflow is proven.
- **LTD Potential**: 2 — HIPAA compliance + per-call costs make LTD tricky; MRR at $299-499/mo per practice is the right model.

---

## Breezy – HVAC Maintenance Plan SaaS ($250K ARR in 9 Months)

- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Additional Links**: N/A
- **Platform**: Indie Hackers / blog (Silas Reinagel case study)
- **Type**: Revenue milestone / case study
- **Engagement**: Published Nov 2023, widely referenced
- **Revenue Data**: $0 → $250K ARR in 9 months. 400 active maintenance plans managed at month 9, grew past 2,300 plans.
- **Boring Business Score**: 5
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: Vertical SaaS for HVAC shops focusing on the "Maintenance Plan" workflow — a multi-axis state machine involving payment (recurring/one-time, prorations, declines, refunds), scheduling (visits owed per customer, seasonal), enrollment, and renewal. HVAC shops were running this on spreadsheets and sticky notes, with constant revenue leakage. Breezy modeled it correctly, with every edge case as a first-class concept.
- **Gap/Opportunity**: The key insight from founder: "The moat is the manual workflow nobody else has bothered to model correctly." Generic FSM tools (Jobber, ServiceTitan) have maintenance plans as a checkbox, not a real workflow. Winning means sitting with the actual operators, watching them swear at their own process, and codifying every half-rule. This applies to any vertical with complex recurring service programs — pool maintenance, pest control, lawn care, chimney service.
- **Our Angle**: Apply the same "own the painful manual workflow" approach to a vertical that hasn't had a Breezy yet. Best candidates: pest control recurring service plans, pool cleaning service routes, chimney sweep annual programs. All have the same multi-axis complexity (payments + scheduling + enrollment + renewal) with zero good software. $200-500/month per business.
- **LTD Potential**: 3 — workflows are core infrastructure, businesses will pay ongoing MRR. LTD doable at $299-599 for smaller operations.

---

## AI Voice Receptionist for Trades (Market Validation Signal)

- **Source**: https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- **Additional Links**: https://www.indiehackers.com/post/how-i-built-an-ai-phone-receptionist-for-czech-tradespeople-first-paying-customers-MSythQu01p7HfU7QyKGE | https://www.indiehackers.com/post/have-you-ever-considered-the-cost-of-a-missed-call-Gz8o6TACneZSANbWf63A | https://news.ycombinator.com/item?id=47138087 (Conduit AI) | https://news.ycombinator.com/item?id=48580402 (Dolfyn AI)
- **Platform**: Indie Hackers + HN
- **Type**: Multiple posts and launches across 2026
- **Engagement**: High — multiple indie hackers independently building in this space
- **Revenue Data**: IH case study: $300-800 MRR per client, ~80% margin. Setup $800-2K one-time. Cira (cleaning-focused): ~$59/mo. KraftunAI (Czech tradespeople): early paying customers. Multiple builders in space.
- **Boring Business Score**: 4
- **Target Industry**: HVAC, plumbing, dental, salons, cleaning, law firms — any appointment-based service business
- **Core Value Prop**: 80% of callers won't leave a voicemail — they call a competitor. AI voice agent answers missed calls 24/7, books appointments, captures lead info. ROI is measurable (missed calls → recovered bookings).
- **Gap/Opportunity**: Market is validating (multiple independent builders reaching paying customers) but commoditizing. Generic AI receptionist platforms (Conduit, Dolfyn, GoHighLevel repackages) are proliferating. The gap is a trades-specific AI receptionist that integrates deeply with FSM tools (Jobber, Housecall Pro, ServiceTitan) rather than just capturing a lead. Also: pricing gap at $59-99/mo vs. $300-500/mo for agency-priced solutions — a self-serve product at $79/mo with Jobber integration would be differentiated.
- **Our Angle**: Build a Jobber-native AI receptionist (direct integration, not just a lead capture tool) so when a call comes in, the AI books the job directly into their existing schedule. Charge $99/mo. Competing on integration depth rather than raw voice capability.
- **LTD Potential**: 4 — $199-399 LTD is very viable, this is exactly the AppSumo audience. Voice AI per-call costs are low enough to sustain.

---

## ServiceTitan Disruption – Solo Contractor Quoting/Invoicing Gap

- **Source**: https://www.indiehackers.com/post/70-of-smbs-cancelled-a-saas-over-price-this-year-5-products-to-disrupt-3-demands-to-build-80e6a2941f
- **Additional Links**: https://www.indiehackers.com/post/help-me-pick-3-micro-saas-ideas-for-underserved-niches-which-would-you-pay-for-5b0c370d3b | https://www.indiehackers.com/post/invoicing-and-payments-built-for-tradespeople-estimate-approve-get-paid-UiXWlkCLiUXe8zU911gU | https://www.indiehackers.com/product/jobnook
- **Platform**: Indie Hackers
- **Type**: Market analysis + multiple early-stage product launches
- **Engagement**: IH analysis post cross-validated 3+ sources; SoloBid got 8 signups in first 10 days; JobNook launched Aug 2026
- **Revenue Data**: "Reddit-validated payment-reminder SaaS for tradespeople hit $14K/month revenue at $29-49/mo." Operator (home services growth platform): $15K MRR by Sep 2026. SoloBid: pre-revenue validation. SideWRK: launched Jul 2026. JobNook: $0 MRR, beta.
- **Boring Business Score**: 5
- **Target Industry**: Solo electricians, plumbers, HVAC, handymen (1-3 person shops)
- **Core Value Prop**: ServiceTitan = $1K+/mo, overkill for solos. Jobber = $50-150/mo, designed for teams. 600K+ solo US tradespeople need: send a quote from their phone, get it approved digitally, collect payment (Venmo/Cash App/Zelle friendly), no merchant account fees. That's it.
- **Gap/Opportunity**: Multiple indie hackers discovering this gap simultaneously (SoloBid, SideWRK, JobNook, Widgetfied) — all early/zero revenue. The validation is strong but execution is unclear. The winner will be the one that nails the mobile-first UX and gets distribution right (LSA integration? Google? Reddit? Door-to-door?). Key insight from SideWRK: support for Venmo/Cash App/Zelle is the unlock — most solo trades don't want merchant account friction.
- **Our Angle**: Build the most opinionated, single-trade version first (e.g., electricians only). Pre-populate labor/materials pricing for common electrical jobs. Integrate with Google LSA from day one. Charge $29/mo. The existing players are all trying to serve all trades — a "just for electricians" product with the right defaults will convert better.
- **LTD Potential**: 5 — perfect AppSumo product at $59-99 LTD. Solo tradespeople will buy a one-time tool they own.

---

## Operator – Growth Platform for Home Service Businesses

- **Source**: https://www.indiehackers.com/product/operator
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Product revenue milestone
- **Engagement**: Listed on IH products directory; $15K/mo self-reported
- **Revenue Data**: $15K/month MRR as of Sep 2026. Started Sep 2025. 1 founder. 12 months to $15K MRR.
- **Boring Business Score**: 5
- **Target Industry**: Construction & home services
- **Core Value Prop**: "Growth platform for home service businesses" — described as industry management system. 12 months from launch to $15K MRR as a solo founder is excellent trajectory.
- **Gap/Opportunity**: Limited public info, but $15K MRR in 12 months as a solo founder in home services confirms the market. The fact that it's described as a "growth platform" (vs. scheduling/invoicing) suggests it may focus on marketing/lead gen for contractors rather than operations.
- **Our Angle**: The growth/marketing layer for home services is underserved — most FSM tools are operations-focused. A tool that specifically helps contractors manage Google LSA, track reviews, and automate follow-ups would complement existing FSM tools.
- **LTD Potential**: 4 — if growth-focused, strong LTD appeal since contractors value measurable lead gen.

---

## FreshLeads – Local Business Lead Gen (Scraping Google Maps)

- **Source**: https://www.indiehackers.com/post/i-found-a-gap-apollo-and-zoominfo-completely-ignore-and-built-a-saas-around-it-bKPCMuinaao69AHm5kVK
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Launch post — Feb 2026
- **Engagement**: Published on IH, specific revenue data shared
- **Revenue Data**: $100 MRR at 6 weeks (1 paying customer on Agency plan). 50K+ leads generated. 2.4% bounce rate vs 15-18% on Apollo.
- **Boring Business Score**: 4
- **Target Industry**: Anyone doing outbound to local service businesses (dentists, plumbers, HVAC, restaurants)
- **Core Value Prop**: Apollo/ZoomInfo index enterprise B2B databases, not the 33M US small businesses (plumbers, dentists, HVAC). FreshLeads searches Google Maps → scrapes actual websites for real email addresses → verifies via MX records. Result: 200+ results per search vs ~12 on Apollo; 2.4% bounce rate vs 15-18%.
- **Gap/Opportunity**: Anyone selling to local service businesses (which is everyone building tools for trades) needs this kind of lead data. The gap is deeper enrichment — adding phone numbers, owner names, review scores, LSA status, website quality score. The current product is early but the fundamental insight (Google Maps > B2B databases for local businesses) is validated.
- **Our Angle**: Build a focused "trade business prospecting" tool that scrapes Google Maps + Google LSA status + review count + response rate signals. Charge agencies/solo GTM sellers who are selling tools to tradespeople. $99-199/mo. This is also the internal tooling any trades-focused SaaS needs to build their own sales pipeline.
- **LTD Potential**: 5 — perfect LTD product, the kind agencies buy once and use forever.

---

## Heavy Civil Construction ERP – Validated Internal Tool Seeking Market

- **Source**: https://www.indiehackers.com/post/looking-for-technical-cofounder-for-heavy-civil-saas-e83fa0798b
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Cofounder search / validated market signal — Mar 2026
- **Engagement**: Post from operator with 13 years of internal ERP experience, seeking tech co-founder
- **Revenue Data**: Near-term goal: 10-20 contractors at $600-1K/month ($6-20K MRR). Internal tool used in production since ~2013 at their own company.
- **Boring Business Score**: 5
- **Target Industry**: Heavy civil construction (earthmoving, road building, infrastructure)
- **Core Value Prop**: Tracks field labor + equipment usage → exports to FOUNDATION (industry payroll/job costing software). Manages internal equipment "rental" back to jobs so true equipment costs are recovered. Shop maintenance/repair management + mechanic dispatch prioritization. This is a workflow that every civil contractor runs, badly, on spreadsheets.
- **Gap/Opportunity**: FOUNDATION is the dominant accounting/payroll software in heavy civil but has no good field-side complement. The person with 13 years of domain knowledge and a working internal tool is offering a perfect founder-market fit signal. If we build here, the FOUNDATION integration is the wedge — selling into existing FOUNDATION customers.
- **Our Angle**: Partner or acquire the IP of this working internal tool. The technical cofounder role this person is seeking could be us. Alternatively, build a FOUNDATION-integrated field data capture tool from scratch — the integration itself is the differentiator.
- **LTD Potential**: 2 — heavy civil operators are enterprise buyers ($600-1K/mo); LTD less appropriate. MRR annual contract model better.

---

## Maintenance Gardener AI CRM – Demand Signal for Agentic Trade Management

- **Source**: https://news.ycombinator.com/item?id=47784724 (Ask HN: Who is using OpenClaw? — Apr 2026)
- **Additional Links**: https://github.com/mjsweet/intake-api
- **Platform**: Hacker News
- **Type**: Ask HN comment — Apr 2026
- **Engagement**: Comment from professional maintenance gardener describing full AI-powered workflow they built themselves
- **Revenue Data**: None (this is a practitioner describing their own built workflow, not a product)
- **Boring Business Score**: 5
- **Target Industry**: Maintenance gardeners, landscapers, any one-person trade service
- **Core Value Prop**: A professional maintenance gardener built an agentic workflow using Claude + MCP that: (1) schedules jobs via custom MCP, (2) watches Gmail for work orders from real estate agents, (3) analyzes job photos to generate quotes, (4) generates 14-32 page PDF proposals with Latex, (5) creates Xero invoices via MCP — all done from his truck between jobs. Result: proposals take 20 minutes, conversion rate is high, freed up home life with family.
- **Gap/Opportunity**: This person hand-built what every one-person trades business needs: a lightweight AI assistant that handles quoting, invoicing, and scheduling without learning complex software. The fact that a maintenance gardener built this himself (not a developer) is the key signal — the demand is there, but no product exists. Building a packaged version of this workflow (a "trade business AI assistant" for one-person shops) would have zero competition and extremely high perceived value.
- **Our Angle**: Build an AI-powered business assistant for single-trade operators (specifically maintenance gardeners/landscapers first). Key features: scan photos → auto-generate quotes, Gmail watch for work orders, Xero/QuickBooks integration for invoices. Mobile-first. $49-79/mo. The intake-api GitHub repo this person built is effectively an open-source MVP to fork.
- **LTD Potential**: 4 — one-person operators love owning their tools outright. $199-299 LTD viable.

---

## ZenMaid – $3M/yr Cleaning SaaS (Market Proof)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Interview / revenue milestone — Feb 2025
- **Engagement**: IH editorial feature
- **Revenue Data**: $3M/year (bootstrapped), 11 years in business, digital nomad founders
- **Boring Business Score**: 5
- **Target Industry**: Maid / cleaning services
- **Core Value Prop**: Scheduling software specifically for maid/cleaning services worldwide. Founded 2013, still growing. Proves that laser-focused vertical SaaS for a "boring" service business can reach $3M ARR bootstrapped.
- **Gap/Opportunity**: ZenMaid is 11 years old with legacy UX. AI features (auto-scheduling optimization, customer communication, route planning) are absent. The market of cleaning services is massive and no one has added the AI layer to ZenMaid's existing customer base. A "ZenMaid with AI" at a lower price point ($29-49/mo vs ZenMaid's $79+/mo) with modern mobile UX would be a direct challenger.
- **Our Angle**: Build a cleaning service scheduler with AI route optimization, automated SMS reminders, and Google review requests built-in. Target exactly ZenMaid's customers who are frustrated with the aging interface. Use G2/Trustpilot review mining of ZenMaid to build the feature list.
- **LTD Potential**: 4 — cleaning business owners are perfect AppSumo buyers. $99-199 LTD is viable.

---

## Bank Statement Converter – $16K MRR Boring Utility SaaS

- **Source**: https://small-start.com/en/cases/global-bank-statement-converter/
- **Additional Links**: N/A
- **Platform**: Indie Hackers / Starter Story ecosystem
- **Type**: Revenue milestone case study — Nov 2026
- **Engagement**: Published analysis with verified revenue
- **Revenue Data**: $16K MRR (1 person), ~$500/month costs, zero ad spend. All traffic from SEO/content (4,200 weekly users). Subscriptions at $30-99/month.
- **Boring Business Score**: 5
- **Target Industry**: Accountants + small businesses
- **Core Value Prop**: Converts bank statement PDFs into Excel/CSV. That's the whole product. Accountants and small business owners need transaction data in spreadsheet form; every bank provides only PDFs.
- **Gap/Opportunity**: Proves that an extremely narrow "boring utility" tool with strong SEO can reach $16K MRR with 1 person and no ads. Template for dozens of similar one-task tools serving accountants (expense report from receipt photos, invoice data extraction, payroll CSV import tools). Each is an SEO-friendly, low-competition niche.
- **Our Angle**: Apply the same model to trade-industry specific documents: job costing reports from PDFs, insurance certificate parsing for subcontractors, lien waiver form generation. Any document-heavy workflow in construction/trades that currently requires manual re-entry.
- **LTD Potential**: 5 — utility tools with clear ROI are perfect LTD products at $29-79.

---

## CraftBoop – Automated Follow-ups for Service Businesses

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post — Apr 2026
- **Engagement**: IH launch post with feedback discussion
- **Revenue Data**: "A few users" — early stage. Pricing: $29/mo, 14-day free trial.
- **Boring Business Score**: 4
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, sends automated 5-email sequence to customer — thank you, review request, check-in, rebooking reminder, referral request. Add a customer once, it handles the rest.
- **Gap/Opportunity**: Service businesses are "terrible at following up" — they do great work but never ask for Google reviews, never remind to rebook, never ask for referrals. CraftBoop is tackling this but at $29/mo it's priced as a micro-add-on. The larger opportunity is a "post-job automation" platform that also handles SMS (not just email), integrates with Jobber/HCP to auto-trigger on job completion, and includes a simple review management dashboard. Similar tools exist (Birdeye, Podium) but charge $300+/mo targeting mid-market.
- **Our Angle**: Build a Jobber/Housecall Pro native "job completion automation" product — when job status changes to "completed" in Jobber, automatically trigger SMS review request → rebooking reminder → referral ask. Charge $49/mo. Birdeye at $299/mo vs. this at $49/mo is a clear price gap.
- **LTD Potential**: 4 — $99-149 LTD for a "set and forget" review/rebooking tool is a natural AppSumo fit.

---

## Summary — Top Opportunities by Signal Strength

| Idea | Boring Score | Revenue Validation | LTD Fit | Priority |
|------|-------------|-------------------|---------|----------|
| Avenue-style trades booking widget | 5 | $50K USD/mo (proven) | 3 | ★★★★★ |
| FSM + Google LSA CRM (Crewbird gap) | 5 | Demand validated, no revenue yet | 4 | ★★★★★ |
| Solo contractor quoting/invoicing ($19-29) | 5 | $14K/mo adjacent product | 5 | ★★★★★ |
| AI voice receptionist for trades (Jobber-native) | 4 | $300-800 MRR/client proven | 4 | ★★★★ |
| HVAC/pool/pest recurring service plan SaaS | 5 | $250K ARR in 9mo (Breezy) | 3 | ★★★★ |
| Dental insurance verification automation | 5 | Beta validated (30+ practices) | 2 | ★★★ |
| AI agentic CRM for one-person trades | 5 | DIY practitioner demand signal | 4 | ★★★★ |
| Weather scheduling for outdoor contractors | 4 | Very early | 3 | ★★★ |
| Cleaning SaaS (ZenMaid challenger) | 5 | $3M/yr market proof | 4 | ★★★ |
| Post-job review/rebooking automation | 4 | Early ($29/mo) | 4 | ★★★★ |
