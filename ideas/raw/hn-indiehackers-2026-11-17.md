# HN & Indie Hackers Research — 2026-11-17

> Focus: Boring business SaaS — trades, home services, field service, maintenance, property management. Prioritizing validated products with real revenue in unglamorous markets.

---

## Crewbird — FSM + CRM with Google LSA Integration

- **Source**: https://news.ycombinator.com/item?id=50418273
- **Additional Links**: https://getcrewbird.com/
- **Platform**: HN
- **Type**: Ask HN (What are you working on? — November 2026 thread)
- **Engagement**: Active discussion, multiple "building this right now" replies, newsletter signups requested
- **Revenue Data**: Not disclosed, founder's father showing "quickly approaching 3x ROAS" on ads
- **Boring Business Score**: 5/5
- **Target Industry**: Field service / home services (carpet cleaning → broader)
- **Core Value Prop**: Field Service Management + CRM built specifically for service businesses with native Google Local Service Ads integration and proper ROI tracking — something existing CRMs don't do
- **Gap/Opportunity**: The gap between full ERP and an Excel spreadsheet is "abysmal" per multiple commenters. Existing SaaS CRMs have poor Google Ads API integrations. Founder built this after being laid off when dad's carpet cleaning CRM was discontinued and one OS update away from dying.
- **Our Angle**: Google LSA is the primary acquisition channel for most home service businesses. No CRM natively integrates LSA performance data with job/revenue tracking. This is the wedge: win on ROI visibility, expand to full FSM.
- **LTD Potential**: 4/5 — service businesses pay gladly for tools that provably increase revenue

---

## Pest Control Vertical SaaS — Founder Took a Technician Job to Validate

- **Source**: https://news.ycombinator.com/item?id=47509571
- **Additional Links**: https://onhand.pro
- **Platform**: HN
- **Type**: Show HN (linked article)
- **Engagement**: 448 points, 182 comments — highest engagement of anything found today
- **Revenue Data**: Not disclosed yet (pre-revenue, still building while operating)
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control ($60B+ market, growing, recurring revenue, regulated)
- **Core Value Prop**: Founder quit to work as a pest control technician to truly understand the domain before building vertical SaaS — validating the go-to-market from inside the industry
- **Gap/Opportunity**: Incumbent VSaaS is "decent, cheap, and ubiquitous" but hasn't had innovation. Founder is building a tech-enabled operator first, not pure SaaS. Key insight: "The moat is the manual workflow nobody else has bothered to model correctly." Interesting comments suggest the real opportunities are upselling, hands-free data entry to CRM, and smart traps/stations. Industry is 60% consolidated — selling to top 5-6 is hard, but the SMB long tail is wide open.
- **Our Angle**: Build the scheduling + route optimization + compliance log tool for the 40% unconsolidated SMB pest control operators. Exam + licensing barrier to entry means operators have high switching costs and high willingness to pay.
- **LTD Potential**: 3/5 — recurring operations tool, better as subscription, but LTD could work as wedge

---

## Prelay — Weather-Based Work Planning for Outdoor Contractors

- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: HN
- **Type**: Show HN (very recent — "2 days ago")
- **Engagement**: 2 points, early stage
- **Revenue Data**: None disclosed
- **Boring Business Score**: 4/5
- **Target Industry**: Outdoor contractors — landscaping, roofing, concrete, excavation (12 trades, 62 activities tracked)
- **Core Value Prop**: Monitors contractor's full job schedule across multiple sites and flags weather-suitability per activity. Owner quoted: "I wake up at 4am every day because if he lets them know after 6am, he has to pay them even if they can't work." Integrates ensemble weather + ground-wetness models.
- **Gap/Opportunity**: Outdoor contractors waste thousands per week on labor costs for weather cancellations. Current solution = manually checking phone weather app per job site. No weather-aware scheduling tool exists for this specific use case at scale.
- **Our Angle**: The "actionable vs. raw data" question they're wrestling with is the right product direction — contractors want "postpone this job" not "35% chance of rain." Build schedule-aware push notifications with one-tap reschedule. Could extend to insurance documentation for weather delays.
- **LTD Potential**: 3/5 — strong niche, weather data as a service, good recurring model

---

## Conkoa AI — Voice-First Field Team Communication for Construction

- **Source**: https://news.ycombinator.com/item?id=47325824
- **Additional Links**: https://conkoa.ai
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, positive comment from similar builder (switchboard.audio)
- **Revenue Data**: "Dozens of companies across construction trades" using it
- **Boring Business Score**: 4/5
- **Target Industry**: Construction trades — general contractors, subcontractors, foremen
- **Core Value Prop**: Voice-first field communication (no typing on scaffold/roof). Foreman speaks time logs, work orders, updates — transcribed + translated + pushed to Procore or other systems. Multi-language (Spanish/English). AI trained on company docs for Q&A.
- **Gap/Opportunity**: Construction teams don't adopt Slack because it requires typing. All existing field communication tools assume desk workers. The Procore integration gap is real — data entry from the field is manual hell.
- **Our Angle**: Voice → structured data pipeline is the core wedge. Expand from time logging to full daily reports, incident documentation, inspection checklists. AI that handles Spanish/English bilingual crews has massive potential in US construction.
- **LTD Potential**: 3/5 — per-seat field tool, enterprise sales motion, but construction SMBs could do LTD

---

## Zirco.ai — AI Employee for Dental Front Desk

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Platform**: HN
- **Type**: Show HN / product launch
- **Engagement**: 3 comments, early beta
- **Revenue Data**: 30+ dental practices interviewed in discovery; beta
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices
- **Core Value Prop**: Handles full front desk workflow: insurance verification via carrier APIs + browser automation (Playwright), appointment scheduling into Dentrix/Open Dental/Eaglesoft, inbound voice (Vapi), SMS/email reminders. Replaces $40–50K/yr front desk employee with 40% annual turnover.
- **Gap/Opportunity**: Dental front desks spend 2–3 hours/day manually verifying insurance across 10+ carrier portals. Insurance verification is the highest-pain, most specific workflow in dental — and it's not solved by any existing tool. HIPAA-compliant from day one is a real moat.
- **Our Angle**: The Playwright-based insurance portal automation is a genuine technical moat (most carriers don't have APIs). Start with insurance verification as the wedge, expand to full front desk. Pricing at $1K–2K/mo vs. $40–50K/yr FTE is an obvious ROI sell.
- **LTD Potential**: 2/5 — high-value, recurring SaaS; LTD would undervalue this, better as subscription

---

## Clawbolt (Mozilla.ai) — AI Assistant for Trade Contractors

- **Source**: https://news.ycombinator.com/item?id=47545485
- **Platform**: HN
- **Type**: Show HN / open source announcement
- **Engagement**: Multiple comments, open source at github.com/mozilla-ai/clawbolt
- **Revenue Data**: Open source, early stage
- **Boring Business Score**: 4/5
- **Target Industry**: General contractors, trade businesses
- **Core Value Prop**: Purpose-built AI assistant for people in trades. Lives in messaging apps they already use, connects to QuickBooks + Google Calendar. Proactive vs. reactive — follows up on unpaid invoices, flags material cost changes, handles scheduling. "Built for the person who spends evenings chasing invoices instead of being with family."
- **Gap/Opportunity**: The AI productivity conversation has been entirely about desk workers. Trade contractors lose evenings to admin that could be automated. QuickBooks + calendar integration is the right starting point — these are already in use.
- **Our Angle**: Build the closed-source, polished version of this with tight QuickBooks + Google integration and a WhatsApp/SMS-first interface (trades don't use Slack). Focus on invoice follow-up automation — the most time-consuming and emotionally draining part of running a trade business.
- **LTD Potential**: 4/5 — SMB tool, affordable pricing point, strong LTD candidate

---

## fixRAgent — AI Diagnostic Triage for Landlords (Avoid Unnecessary Service Calls)

- **Source**: https://www.indiehackers.com/post/our-goal-helping-10-landlords-save-1-000-in-service-calls-this-month-D7uSSJ0AK76Cbdile7ly
- **Platform**: Indie Hackers
- **Type**: Product launch / early traction post
- **Engagement**: Active comments, positive validation
- **Revenue Data**: Pre-revenue, targeting first 10 landlords
- **Boring Business Score**: 4/5
- **Target Industry**: Residential property management / landlords
- **Core Value Prop**: AI forces a diagnostic scan before dispatching a technician. Identifies if the issue is fixable by tenant (tripped GFI, clogged filter, flapper) before paying $150–300 dispatch fee. Outputs exact part numbers + links to Home Depot/Amazon for pickup before tech arrives.
- **Gap/Opportunity**: "$150 service call for a jammed garbage disposal or tripped GFI is a failure of triage." Landlords hemorrhage money on dispatch fees for simple fixes. No product targets this specific pain. ROI is quantifiable per use: deflect 1 call = $150+ saved.
- **Our Angle**: The AI diagnostic triage angle has clear LTD appeal. Add "tenant self-service fix guide" with step-by-step video instructions. Charge $29–49/property/month. Can expand to maintenance tracking, vendor management. Property managers with 5+ units are ideal first customers.
- **LTD Potential**: 5/5 — perfect LTD candidate, concrete ROI, broad market of landlords

---

## InstaBid Solo — Instant Quote Wizard for Service Contractors

- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Product launch
- **Engagement**: Published July 2026, solo build (5 months nights/weekends)
- **Revenue Data**: Launched, early stage
- **Boring Business Score**: 4/5
- **Target Industry**: Home service contractors — pressure washing, cleaning, landscaping, roofing
- **Core Value Prop**: Instant-quote wizard on contractor's website. Customer answers questions, gets price estimate in <60 seconds. Partial leads captured even if they bail mid-funnel. "Quote first = win the job." Funnel analytics + price sensitivity data.
- **Gap/Opportunity**: Generic contact forms lose leads. Customers fill out form, wait days for quote, book with whoever answered first. 78% go with whoever responds first. Existing tools (Yelp, Thumbtack) take commission. This is a white-label quote capture tool.
- **Our Angle**: The price-sensitivity analytics dashboard is unique — shows what price ranges close vs. drop off. Expand to include automated follow-up sequences for partial leads. Bundle with quote-to-invoice workflow. Strong LTD appeal for contractors tired of paying platform fees.
- **LTD Potential**: 4/5 — strong ROI story, clear comparison to Yelp/Thumbtack fees

---

## HandyPay — Deposit + Payment Tool for Service Businesses

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Platform**: Indie Hackers
- **Type**: Milestone post ($1k MRR < 60 days)
- **Engagement**: Published Jan 2026
- **Revenue Data**: $1k MRR in under 60 days via direct sales to spas/salons
- **Boring Business Score**: 3/5
- **Target Industry**: Spas, salons, service businesses (appointment-based)
- **Core Value Prop**: Simple way to collect deposits and reduce no-shows. No ads, no funnels — founder went directly to businesses, asked "how do you handle deposits?", set them up on the spot.
- **Gap/Opportunity**: No-show rate is a silent killer for appointment-based service businesses. Existing POS/booking tools don't make deposits frictionless. The "boring" go-to-market (direct sales, WhatsApp, referrals) is the real insight here — features mattered less than trust.
- **Our Angle**: Clone this but go deeper on the specific verticals: nail salons, tattoo studios, auto shops. The "proximity to customer" growth model works better than SEO for this audience. Bundle deposits + automated reminders + simple invoicing.
- **LTD Potential**: 4/5 — simple, valuable, broad market, good LTD candidate

---

## BlastoClean — Quoting + Scheduling Software for Cleaning Companies

- **Source**: https://www.indiehackers.com/product/blastoclean
- **Additional Links**: https://www.blastoclean.com
- **Platform**: Indie Hackers
- **Type**: Product launch (Oct 2026)
- **Engagement**: Active IH profile, founder (Chris Muench) also runs PHP Point of Sale at $60k/mo MRR
- **Revenue Data**: Launched Oct 1, 2026 — $0 MRR, finding first 10 customers
- **Boring Business Score**: 5/5
- **Target Industry**: Residential + commercial cleaning companies
- **Core Value Prop**: Price every cleaning job from your own task times and hourly rate (not guessing with Word docs). Scheduling, invoicing, payments all in one. No platform fees. "AI never sets the price — you do."
- **Gap/Opportunity**: ZenMaid ($3M/yr) owns the maid service market. BlastoClean is positioning against "pricing from your own rates" vs. AI-set pricing — a genuine differentiator. Founder is experienced (PHP POS at $60k/mo) so execution risk is low.
- **Our Angle**: The "room-by-room from task times" pricing model is the differentiated wedge. Expand to commercial cleaning (larger contract values). Consider LTD launch on AppSumo to build customer base fast before ZenMaid notices.
- **LTD Potential**: 5/5 — perfect LTD product, low complexity, defined niche

---

## Breezy HVAC — Vertical SaaS for HVAC Service Businesses ($0→$250K ARR in 9 Months)

- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Platform**: IH (via Exa research, bootstrapped HVAC SaaS case study)
- **Type**: Revenue milestone / case study
- **Engagement**: Published case study by founding engineer
- **Revenue Data**: $0 → $250K+ ARR in 9 months (now 2,300+ maintenance plans on platform)
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: Maintenance plan management — the most painful manual workflow in HVAC that nobody had codified properly. Renewals, visit queues, grandfather pricing, prorations — all built as first-class features. "The moat is the manual workflow nobody else has bothered to model correctly."
- **Gap/Opportunity**: The maintenance plan renewal workflow (calling customers, tracking visits owed, handling grandfather pricing) was running on Post-its and spreadsheets. When coded correctly as a system, it became core operational infrastructure.
- **Our Angle**: This is a playbook, not just a competitor. The lesson: pick one painful, specific workflow in a boring industry, model it completely including all edge cases, build it right. Same approach works for pest control, landscaping, plumbing. The boring CRUD is not boring — it's the moat.
- **LTD Potential**: 3/5 — high value per customer ($250+/mo), better as subscription than LTD

---

## AI Voice Receptionist Agency for Trades (Callin.io + n8n Playbook)

- **Source**: https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- **Platform**: Indie Hackers
- **Type**: Strategy / playbook post
- **Engagement**: Active discussion, Jan 2026
- **Revenue Data**: $300–800 MRR per client, $1–2K setup, 80% margins; multiple commenters doing $300K/mo with similar model
- **Boring Business Score**: 4/5
- **Target Industry**: HVAC, plumbing, dental, salons, law firms, medical clinics (all appointment-based)
- **Core Value Prop**: AI receptionist answers missed calls, qualifies leads, books appointments. Stack: Callin.io (white-label voice) + n8n (automation) + Cal.com. "78% of buyers go with whoever responds first."
- **Gap/Opportunity**: 62M+ SMBs across US/EU still running on 2005-era workflows. These businesses lose $500–2K per missed call. The done-for-you agency model (not pure SaaS) reduces sales friction enormously.
- **Our Angle**: The gap identified by commenters: at 10–15 clients, billing becomes fragmented across Callin+n8n+Cal+Stripe with no unified per-call cost visibility. Build the billing/analytics layer for AI voice agency operators as the product, not the voice agent itself. Or: white-label this into a vertical-specific product (e.g., "HVAC AI Receptionist" branded for HVAC-only).
- **LTD Potential**: 4/5 — strong LTD potential for the per-business tool; agency model scales differently

---

## GrassDx — AI Lawn Diagnosis for Homeowners / Lawn Care Lead Gen

- **Source**: https://news.ycombinator.com/item?id=48544823
- **Additional Links**: https://grassdx.com
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 78 points, 60 comments — strong engagement
- **Revenue Data**: Free tool monetized via affiliate links + selling exclusive ZIP code rights to lawn care companies (warm leads)
- **Boring Business Score**: 4/5
- **Target Industry**: Lawn care / landscaping (B2C homeowners + B2B lawn care companies)
- **Core Value Prop**: Upload lawn photos + ZIP code → AI diagnoses problem + recommends treatments tailored to location in 15 seconds. Monetizes via affiliate sales and selling exclusive ZIP codes to lawn care companies as warm leads.
- **Gap/Opportunity**: Homeowners Google lawn problems and get generic solutions. Lawn care companies pay heavily for leads but get cold ones. The ZIP code exclusivity model for local service leads is underused. Comments validated: "Sounds like similar tech to what we've built for property inventory"
- **Our Angle**: The ZIP code exclusivity model could apply to any local service: HVAC, pest control, plumbing. Build a "diagnostic tool for homeowners" that doubles as a warm lead engine for contractors. Charge $199–499/month per ZIP for exclusive leads. This is a network business masquerading as a tool.
- **LTD Potential**: 3/5 — lead gen for contractors is high-value, but requires local supply-demand balance

---

## WorkPhotos — Job Recording App for Physical Trades (Mobile-First)

- **Source**: https://news.ycombinator.com/item?id=37144027
- **Additional Links**: https://www.workphotos.com/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 33 points, 11 comments (2023)
- **Revenue Data**: Available in AU, CA, NZ, ZA, UK, US — paying customers implied
- **Boring Business Score**: 4/5
- **Target Industry**: Physical trades — plumbing, electrical, HVAC, construction
- **Core Value Prop**: Mobile-first job recording app for taking before/after photos without cluttering personal gallery. Photos organized by job. Customer share reports via link (read-only, no account needed). Unlimited cloud storage.
- **Gap/Opportunity**: Tradespeople use personal phones, photos get lost in personal library, no job context attached. Sharing with customers is "send me those photos" via text. No easy proof of work for disputes. This is unsexy but solves a daily friction point.
- **Our Angle**: Add cryptographic work verification (timestamp + GPS + hash — see the "tamper-proof work verification" HN post) on top of WorkPhotos' simple UX. This positions as dispute protection and insurance documentation, not just photo organization. Much stronger value prop.
- **LTD Potential**: 4/5 — simple, broad, easy to use, photo apps historically do well on AppSumo

---

## Plummerly — Plumbing Service Business Management SaaS

- **Source**: https://www.indiehackers.com/post/i-m-building-plummerly-plumbing-service-business-management-software-Yk7gp1SLquc1d8NPx1Ff
- **Platform**: Indie Hackers
- **Type**: Build in public / validation post
- **Engagement**: Published Jan 2026, early stage
- **Revenue Data**: None yet, seeking feedback from plumbing business owners
- **Boring Business Score**: 5/5
- **Target Industry**: Plumbing service businesses
- **Core Value Prop**: Job scheduling, customer management, billing in a single platform designed specifically for plumbing. Many plumbing companies still on spreadsheets/paper/disconnected tools.
- **Gap/Opportunity**: ServiceTitan is the dominant player but costs $500+/month for small operators. There's a clear gap for a simple, affordable plumbing-specific tool. Multiple commenters on other HN threads confirm: "90% of companies only need something simple."
- **Our Angle**: Build the "$99/month ServiceTitan alternative for 1–5 truck plumbing shops." Focus on mobile-first (plumbers work from their truck), one-tap job status updates, and simple invoicing. The ServiceTitan moat is enterprise features most small shops don't need.
- **LTD Potential**: 4/5 — large underserved market, clear competitor to compare against

---

## Tamper-Proof Work Verification for Contractors / Property Management

- **Source**: https://news.ycombinator.com/item?id=47086864
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, founder looking to sell IP
- **Revenue Data**: None, founder selling IP/source code
- **Boring Business Score**: 4/5
- **Target Industry**: Contractors, cleaners, delivery, property management
- **Core Value Prop**: Cryptographically verifiable proof of completed service work. Before/after photos + Ed25519 signature + RFC 3161 timestamp + GPS. Any tampering invalidates signature. AI generates work narratives from photos.
- **Gap/Opportunity**: Disputes over "was the work done?" are common and expensive in property management and contracting. Insurance documentation is poorly handled. The founder is selling the IP — this is an acqui-hire opportunity or a foundation to build on.
- **Our Angle**: This tech as a feature inside a broader property management or field service tool is more valuable than standalone. WorkPhotos + this = the "proof of work" standard for trades. Property management companies dealing with contractor disputes would pay real money for this.
- **LTD Potential**: 3/5 — as a feature/module within a larger tool, not standalone

---

## ClientPing — Mobile Job Management + Client Communication for Service Pros

- **Source**: https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- **Platform**: Indie Hackers
- **Type**: Build in public (Aug 2026)
- **Engagement**: Active IH post, bootstrapped
- **Revenue Data**: Early, pre-revenue
- **Boring Business Score**: 4/5
- **Target Industry**: Mobile service professionals — plumbers, HVAC techs, electricians, painters
- **Core Value Prop**: Mobile-first job management + client communication via SMS. Everything a service pro needs on their phone, works in bad signal. Job scheduling, booking requests, SMS updates, job archive, navigation to client addresses, subscription billing.
- **Gap/Opportunity**: "Plumbers, HVAC techs, electricians, painters spend a ridiculous amount of time just trying to keep up with communication while moving between jobs." The mobile-first + works-in-bad-signal positioning is correct — most field service tools are web-first.
- **Our Angle**: The key differentiator is offline-capable + SMS-native (not in-app messaging). Most plumbers text from personal phones — a business SMS layer that feels like texting but logs everything is the wedge. Add Google reviews auto-request after job completion.
- **LTD Potential**: 4/5 — mobile-first tools for trades do well on AppSumo

---

## Trend Signal: "FSM + Google LSA Integration" is an Underserved Gap

**Multiple HN threads** (Crewbird, Ask HN: What are you working on? Nov 2026) show strong validation:
- Home service businesses use Google LSA as primary customer acquisition channel
- No existing CRM/FSM tool properly integrates LSA lead data with job revenue tracking
- "The dashboard left a lot to be desired" is a recurring complaint
- Multiple commenters building similar tools, confirming demand is real

**Key quotes:**
- "The space between a full blown ERP and a tracker on an Excel Spreadsheet is absolutely abysmal"
- "90% of companies only need something simple"
- "They all suck, bad" — re: existing CRMs for trades

---

## Trend Signal: Voice-First / No-Typing Interfaces for Field Workers

**Across multiple HN posts** (Conkoa, Clawbolt, NanoClaw gardener testimonial):
- Field workers can't use keyboard-first tools on job sites
- WhatsApp/SMS is the actual communication layer for most trade businesses
- Voice → structured data is the right technical direction
- Spanish/English bilingual support is a real differentiator for US construction

**Gardener using NanoClaw for AI CRM (HN comment):**
- Using Claude via AI harness to: schedule jobs, process work orders from Gmail, analyze job site photos, generate 14–32 page PDF proposals via LaTeX, create Xero invoices
- "It's freed up my home life to spend more time with my children"
- "There is a lot of scope for small business owners who need these sorts of agentic assistant tasks"
- This is a glimpse at where the market is heading — AI-powered trade business management

---

## Revenue Benchmarks (Boring Business SaaS — 2025–2026)

| Company | Niche | Revenue | Notes |
|---------|-------|---------|-------|
| ZenMaid | Maid/cleaning scheduling | $3M/yr ($130K/mo peak) | Bootstrapped, 11 years |
| Breezy HVAC | HVAC maintenance plans | $250K ARR in 9 months | Sole founding engineer |
| Savvy Nomad | Expat tax compliance | $1.7M/yr ($140K/mo) | Boring niche, 1,400 customers |
| Music Teachers Helper | Music studio mgmt | $70K/mo | 12 years to get there |
| Onedesk | Commercial cleaning booking | $100K+ MRR | Pivoted through COVID |
| AppraiseItNow | Property appraisal (service) | $90K/mo | Tech-enabled services |
| SaaS for electricians/mechanics | Trades ERP | $85K AUD/mo | Starter Story feature |
| HandyPay | Deposit/payment for salons | $1K MRR in 60 days | Direct sales to spas |

**Key pricing patterns:**
- Field service SaaS: $99–$299/mo per company
- AI voice agents for trades: $300–$800 MRR per client + $1–2K setup
- Vertical SaaS (dental, HVAC): $500–$2K/mo
- Maintenance/compliance tools: $200–$500/mo

---

*Research conducted 2026-11-17. Sources: Hacker News, Indie Hackers via Exa semantic search and Jina Reader.*
