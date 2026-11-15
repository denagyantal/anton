# HN & Indie Hackers Research — 2026-11-15

**Agent:** HN & Indie Hackers Scanner
**Focus:** Boring-business SaaS (trades, local services, field service, logistics, healthcare admin)
**Sources scanned:** Hacker News Show/Ask HN threads, Indie Hackers posts/milestones

---

## Crewbird — FSM + CRM with Google LSA Integration for Service Businesses

- **Source**: https://news.ycombinator.com/item?id=50418273 (Ask HN: What are you working on? Nov 2026)
- **Additional Links**: https://getcrewbird.com/
- **Platform**: HN
- **Type**: Ask HN milestone post (very recent, Nov 2026)
- **Engagement**: Active discussion, 15+ comments, strong validation from other commenters
- **Revenue Data**: Not disclosed; dad's carpet cleaning company approaching 3x ROAS. Early stage.
- **Boring Business Score**: 5/5
- **Target Industry**: Home/commercial services — carpet cleaning, general field service
- **Core Value Prop**: FSM + CRM built specifically for service businesses with Google Local Service Ads (LSA) integration, tracks every dollar to determine ROAS. Old desktop CRM was discontinued; nothing on the market had good Google Ads API integration.
- **Gap/Opportunity**: No existing FSM/CRM bridges Google LSA and ad spend ROI tracking well. The gap between full ERP and spreadsheet is huge. Comments reveal widespread frustration: "Soul crushing to swap between 12 different trackers per hour." Multiple people asked to be notified when v1 ships.
- **Our Angle**: Build the Google LSA-native FSM — not just job management but a revenue attribution layer connecting ad spend → lead → job → invoice → ROAS. This is the angle ServiceTitan and Jobber haven't nailed for sub-20-employee shops.
- **LTD Potential**: 3/5 (revenue tracking makes it subscription-sticky, but LTD possible at $199–$299)

---

## Avenue — Booking Widget + AI Phone Agent for Tradespeople

- **Source**: https://howtomakemoney.io/cases/avenue-tom-holliday-tradie-widget-55k/ (Starter Story Sept 2026)
- **Additional Links**: https://www.stork.ai/blog/the-anti-tech-playbook-for-50kmonth, https://www.linkedin.com/posts/starterstory123_instead-of-building-another-0-mrr-saas-for-activity-7518744380996767745-TMht
- **Platform**: Indie Hackers / Starter Story
- **Type**: Revenue milestone ($85K AUD/month)
- **Engagement**: Viral Starter Story post, 33K+ YouTube views
- **Revenue Data**: AU$85,000/month (~USD $55K) — bootstrapped, launched ~Feb 2025, fully self-funded from prior agency revenue
- **Boring Business Score**: 5/5
- **Target Industry**: Mechanics, electricians, joiners, tradespeople
- **Core Value Prop**: "Book Online" button on Google Business profile + website widget + SMS reminders + automatic Google review requests + AI phone agent. Tradespeople miss calls and lose leads constantly. Door-to-door iPad demos to mechanics.
- **Gap/Opportunity**: Mechanics/trades still don't have a simple booking layer on their Google profile. This is proven — AU$85K/month in under a year. Main costs are Twilio (~$4K/month). Pricing: Standard $199/mo, Premium $395/mo, AI agent $399/mo.
- **Our Angle**: Clone the proven model but specialize harder — e.g., HVAC-only or plumbing-only with trade-specific booking logic (service types, parts lists, compliance notes). Or UK/EU market where this doesn't exist yet.
- **LTD Potential**: 2/5 (recurring model is the point; SMS costs make LTD difficult)

---

## Breezy HVAC SaaS — $0 to $250K ARR in 9 Months via Maintenance Plans

- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Additional Links**: N/A (case study by founding engineer)
- **Platform**: Blog / industry analysis
- **Type**: Founder case study
- **Engagement**: Widely cited in vertical SaaS circles
- **Revenue Data**: $0 to $250K+ ARR in 9 months (2023). 2,300+ HVAC maintenance plans on the platform.
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: The moat was HVAC Maintenance Plans — a multi-axis state machine (payment, scheduling, enrollment, renewal) that HVAC shops ran on spreadsheets and sticky notes. Building this correctly (3 rewrites) became the reason shops switched and stayed.
- **Gap/Opportunity**: The lesson is universal: every boring vertical has 2–3 "manual workflow rituals" that nobody has bothered to model correctly. The spec is hard; the code is not. For HVAC it's maintenance plans. For pest control it's chemical compliance. For property management it's lease renewals. Find the state machine nobody has built correctly.
- **Our Angle**: Apply the Breezy playbook to an adjacent vertical — boiler/hydronics, commercial kitchen equipment, or fleet maintenance — where the "maintenance plan state machine" hasn't been built right yet.
- **LTD Potential**: 2/5 (recurring workflows demand recurring billing)

---

## Field Manual Copilot — RAG for Small HVAC/Plumbing Shops

- **Source**: https://www.startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan/
- **Additional Links**: N/A
- **Platform**: Industry analysis (Startup Heist, May 2026)
- **Type**: Opportunity analysis with market sizing
- **Engagement**: N/A (editorial)
- **Revenue Data**: Projected $79K MRR for 1,000 customers at $79/mo — not yet built
- **Boring Business Score**: 5/5
- **Target Industry**: Sub-20-tech plumbing, HVAC, boiler, electrical shops too small for ServiceTitan
- **Core Value Prop**: Mobile RAG tool — tech photographs equipment model number, app retrieves the manual, summarizes relevant pages, drafts parts notes and invoice language. Without it, techs waste 20–45 min per job on the phone or searching PDFs.
- **Gap/Opportunity**: ServiceTitan/XOi are enterprise. Bluon is HVAC-only. The long tail of mixed-trade shops (boiler + plumbing, light commercial mechanical) has no tool. Cold-weather states (boiler/hydronics) are specifically underserved. The XOi acquisition of Specifx ($230M from KKR) validates the market.
- **Our Angle**: Mobile-first equipment manual assistant for the boiler/hydronics wedge, priced at $49–79/month. Manual lookup + job note copilot + parts pricing. No FSM onboarding required.
- **LTD Potential**: 4/5 (clear one-time value, easy to explain, $199–$299 LTD viable)

---

## Conkoa AI — Voice-First Communication Tool for Construction

- **Source**: https://news.ycombinator.com/item?id=47325824
- **Additional Links**: https://conkoa.ai
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, supportive comments, "definitely still a need for this"
- **Revenue Data**: Live, used by dozens of companies (early)
- **Boring Business Score**: 5/5
- **Target Industry**: Construction, roofing, general contracting
- **Core Value Prop**: Voice-first team communication for field workers who can't type on a scaffold. Integrates with Procore. Voice → structured data entry. Multilingual (Spanish/English auto-translate). Built on a decade of prior product experience; founder's previous company was acquired in 2022.
- **Gap/Opportunity**: Slack doesn't work in the field. Existing tools require typing. Construction workers on roofs/ladders need voice-first. The multilingual gap (Spanish-speaking crew, English PM) is a specific pain nobody has solved cleanly.
- **Our Angle**: Build a narrower version focused on a single workflow: bilingual daily jobsite reports that auto-populate Procore/Buildertrend with no typing. Charge $99/month per foreman.
- **LTD Potential**: 3/5

---

## Zirco.ai — AI Front Desk Employee for Dental Practices

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://www.indiehackers.com/post/zirco-ai-the-ai-employee-for-dental-practices-ovklor2b9BWM0MZYvCYr
- **Platform**: HN + Indie Hackers
- **Type**: Show HN + IH launch post
- **Engagement**: 1 point HN, IH discussion around HIPAA/compliance
- **Revenue Data**: Beta, early. 30+ dental practices interviewed during discovery.
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices (US + EU)
- **Core Value Prop**: Automates entire front desk workflow: inbound voice calls (Vapi), insurance verification via Playwright + Availity, appointment booking into Dentrix/Open Dental/Eaglesoft, SMS/email reminders. Front desk staff costs $40–50K/year with 40% annual turnover.
- **Gap/Opportunity**: Insurance verification eats 2–3 hours/day per front desk. 10+ different carrier portals with incompatible data formats. HIPAA compliance from day one. This is a known $45K/year cost center that dental practices desperately want to automate.
- **Our Angle**: Focus just on insurance verification automation (the highest-pain, most time-consuming piece) rather than full front desk replacement. Narrower wedge, easier compliance story, $299–499/month per practice.
- **LTD Potential**: 2/5 (HIPAA SaaS shouldn't be LTD)

---

## Pest Control / Pool / Lawn Care — WhatsApp-to-SaaS Gap

- **Source**: https://www.readventureradar.com/p/5-service-businesses-still-running-cb2
- **Additional Links**: https://fromscratch.dev/blog/boring-saas-ideas, https://provenstartups.com/projects/skimmer-pool-service-software
- **Platform**: Industry newsletters / Indie Hackers
- **Type**: Market analysis + validated comps
- **Engagement**: N/A (editorial) + Skimmer sold for undisclosed sum at $1M+ ARR
- **Revenue Data**: 
  - Skimmer (pool): $1M ARR, 1,500+ customers, $0 ad spend before acquisition
  - DASHP (pest control sales): $100K ARR
  - Pest control SaaS: $880K/year, 3,100 customers (unnamed)
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control, pool service, lawn care, mobile detailing — sub-10-truck operators
- **Core Value Prop**: Dead-simple operations tool for one trade, priced $49–99/month. These businesses bill $5K–$20K/month and run on WhatsApp group chats and spiral notebooks. PestRoutes (acquired for $300M) dominates enterprise. The long tail of 2–10 tech shops has nothing at the right price.
- **Gap/Opportunity**: 35,000 pest control companies in the US. Septic service (most boring of all — zero Y Combinator interest, thousands of operators, recurring 3–5 year pumping schedules) is completely unaddressed. No compliance documentation tools. Skimmer proved the per-pool pricing model works better than per-seat.
- **Our Angle**: Septic tank service tracker (truly no competition) OR lawn care route optimizer with chemical compliance (adjacent to pestroutes but simpler + cheaper). Septic: $49/month with automated pumping reminders and tank GPS records.
- **LTD Potential**: 4/5 (clear one-time value, $149–$249 LTD feasible)

---

## CraftBoop — Automated Review/Rebooking Sequences for Service Businesses

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: IH launch post (Apr 2026)
- **Engagement**: Small discussion, positive early feedback
- **Revenue Data**: Just launched. $29/month, 14-day free trial, a few early users.
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, automated 5-email sequence: thank you → review request → check-in → rebooking reminder → referral request. Operators never ask for reviews manually.
- **Gap/Opportunity**: Service businesses do great work but are terrible at follow-up. Google reviews and rebookings are worth real money but nobody follows up systematically. $29/month is probably too cheap — this is a $79–149/month problem.
- **Our Angle**: Go deeper than email — add SMS + WhatsApp sequences with customizable timing. Build a "reputation + rebooking engine" that shows the owner what their follow-up is worth in dollars (review = estimated $X in future revenue).
- **LTD Potential**: 5/5 (clear set-and-forget value, great LTD candidate at $99–$199)

---

## HandyPay — Deposit + No-Show Prevention for Service Businesses

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Milestone post (Jan 2026)
- **Engagement**: Active IH discussion
- **Revenue Data**: $1K MRR in under 60 days via direct in-person sales to spas/salons/service businesses
- **Boring Business Score**: 4/5
- **Target Industry**: Spas, salons, service businesses
- **Core Value Prop**: Simple way to collect deposits and prevent no-shows. No ads, no funnels — direct conversations in person and via WhatsApp.
- **Gap/Opportunity**: No-shows are a massive pain point in service businesses. The validation here is fast — $1K MRR in 60 days from direct sales. The lesson: go in person, ask "how do you handle deposits?", set them up on the spot.
- **Our Angle**: Build deposit + no-show tools specifically for HVAC/plumbing/contractors (higher ticket services than spas) where a no-show costs the business $200–$500 in lost truck roll. Charge $79/month.
- **LTD Potential**: 4/5

---

## Prelay — Weather-Based Work Planning for Outdoor Contractors

- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: HN
- **Type**: Show HN (very recent, Nov 2026)
- **Engagement**: 2 points, early discussion
- **Revenue Data**: Just launched, no revenue data
- **Boring Business Score**: 4/5
- **Target Industry**: Landscaping, roofing, outdoor construction
- **Core Value Prop**: Monitors all upcoming job sites against weather. 62 activities across 12 trades, ensemble weather + ground-wetness models. Notifies owner early so crews can be cancelled before the 6am payroll cutoff. One owner wakes at 4am just to do this manually.
- **Gap/Opportunity**: Dispatch decisions for weather-sensitive contractors are made manually every morning. The pain is real and specific. The 4am alarm story is perfect anecdote. No competitors doing this for small contractors (enterprise tools exist for construction projects, not small service firms).
- **Our Angle**: Integrate weather dispatch into existing FSM tools (Jobber, ServiceM8) as a simple add-on. Or build it standalone with a Zapier-style trigger: "weather alert → reschedule job → notify crew via SMS." $29–49/month.
- **LTD Potential**: 4/5

---

## Clawbolt (Mozilla.ai) — AI Assistant for Tradespeople

- **Source**: https://news.ycombinator.com/item?id=47545485
- **Additional Links**: https://github.com/mozilla-ai/clawbolt
- **Platform**: HN
- **Type**: Show HN (open source launch)
- **Engagement**: Active HN discussion, UK contractor immediately replied saying they're building something similar
- **Revenue Data**: N/A (open source from Mozilla.ai)
- **Boring Business Score**: 4/5
- **Target Industry**: Trades — general contracting, electrical, plumbing
- **Core Value Prop**: AI assistant living in messaging apps (WhatsApp/Telegram), connects to QuickBooks + Google Calendar, proactively follows up on unpaid invoices, flags material cost changes, reminds about scheduled jobs. Designed for tradespeople who hate sitting at a laptop.
- **Gap/Opportunity**: The open-source release means anyone can build a commercial version with better UX and support. The core insight (AI that lives in WhatsApp and handles trades admin) is validated by the gardener on HN who built their own version and reports "proposals take only 20 minutes to build." Multiple UK contractors saying they'd pay for this.
- **Our Angle**: Commercial WhatsApp-native assistant for trades businesses. Photo-to-quote: take photo of job site, AI generates estimate. Auto-invoice after job completion. $49/month.
- **LTD Potential**: 4/5

---

## InstaBid Solo — Instant-Quote Wizard for Service Contractors

- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: IH launch post (Jul 2026)
- **Engagement**: Small discussion
- **Revenue Data**: Just launched, no revenue data yet
- **Boring Business Score**: 4/5
- **Target Industry**: Pressure washing, home services, service contractors
- **Core Value Prop**: Customer-facing quote wizard — answers questions, gets price estimate in <60 seconds, lands as qualified lead in contractor's inbox. Partial captures even if customer bails mid-wizard. Multi-tenant (each contractor gets branded admin). Custom funnel analytics.
- **Gap/Opportunity**: Most contractor websites use generic contact forms with 2–3 day response times. Instant quote converts at higher rate. The founder spent 5 months solo-building this — it's real but needs distribution.
- **Our Angle**: Build the same concept but with AI-powered dynamic pricing (not just static form logic) + 1-click SMS follow-up for partial captures. White-label for digital agencies that serve contractors.
- **LTD Potential**: 5/5

---

## ZenMaid / Cleaning SaaS — Proven $3M/Year Market

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://www.indiehackers.com/post/2020-in-review-0-to-100k-mrr-for-our-cleaning-saas-ecommerce-d53de6dde5
- **Platform**: Indie Hackers
- **Type**: Founder interview + milestone post
- **Engagement**: Strong IH engagement
- **Revenue Data**: ZenMaid: $3M/year, bootstrapped, 11 years. BlastoClean (new entrant): $0 revenue, launched Oct 2026.
- **Boring Business Score**: 4/5
- **Target Industry**: Residential maid/cleaning services
- **Core Value Prop**: Scheduling software specifically for maid services. Generic tools don't understand the recurring nature, room-by-room task tracking, or cleaner routing specific to this industry.
- **Gap/Opportunity**: ZenMaid is 11 years old and showing its age. BlastoClean is brand new and trying to carve out the "pricing from actual task times" angle. The market is proven and not going anywhere. A modern, mobile-first version with AI pricing suggestions has clear room.
- **Our Angle**: Build price-from-first-principles quoting for cleaning companies (like BlastoClean is trying) but add AI-driven dynamic pricing based on market rates + customer LTV calculation. $49/month.
- **LTD Potential**: 4/5

---

## TheSolarAI / LeadTrackAI — Voice+SMS Lead Response for High-Ticket Services

- **Source**: https://www.indiehackers.com/post/tech/building-a-successful-niche-product-as-a-wedge-into-a-bigger-market-fmKST537U6T0DMlsgn9r
- **Additional Links**: https://thesolarai.com
- **Platform**: Indie Hackers
- **Type**: IH founder interview (Nov 2025)
- **Engagement**: Active IH discussion
- **Revenue Data**: High 4-figure MRR for TheSolarAI.com (Australia solar sector)
- **Boring Business Score**: 3/5 (solar is semi-tech, but the model transfers)
- **Target Industry**: Solar installation (wedge) → automotive, real estate, home services
- **Core Value Prop**: Responds to leads in under 60 seconds via voice + SMS + email. Solar companies spend $50K+/month on Google Ads but take 4+ hours to call leads back. Speed = conversion.
- **Gap/Opportunity**: The 60-second response principle applies to any high-ticket home service: HVAC installs, generator installs, roofing, windows. These businesses all run Google Ads and lose leads to slow callback. The solar-specific wedge is proven; horizontal expansion to HVAC/roofing is the opportunity.
- **Our Angle**: HVAC-specific lead response AI: responds to new leads from Google LSA + organic within 60 seconds, qualifies for service area and urgency, books appointment. $299–499/month.
- **LTD Potential**: 3/5

---

## BlastoClean — Quoting Software for Cleaning Companies (Just Launched)

- **Source**: https://www.indiehackers.com/product/blastoclean
- **Additional Links**: https://www.blastoclean.com
- **Platform**: Indie Hackers
- **Type**: IH product page milestone (Oct 2026)
- **Engagement**: Just launched, $0 revenue, looking for first 10 customers
- **Revenue Data**: $0 — just launched
- **Boring Business Score**: 4/5
- **Target Industry**: Residential cleaning companies
- **Core Value Prop**: Price every job from actual task times and your hourly rate — not old Word documents or guesses. Schedule + invoice + payments in one place.
- **Gap/Opportunity**: Most cleaning companies guess prices or use Excel. Building prices from actual task times is a better model but requires the software to know your room inventory and standard task times. This is a fresh take vs. ZenMaid's scheduling focus.
- **Our Angle**: Task-time-based quoting is the wedge — but add AI learning (tracks which quotes close at what price, recommends optimal pricing).
- **LTD Potential**: 5/5

---

## Documentorium — PDF Quote/Contract Tool for Tradespeople

- **Source**: https://news.ycombinator.com/item?id=47540841 (Ask HN: Any Tradespeople Here?)
- **Additional Links**: https://documentorium.com
- **Platform**: HN
- **Type**: Ask HN thread validation
- **Engagement**: Active discussion, tradesperson confirmed "hundreds of paying users, almost all renewed yearly"
- **Revenue Data**: Hundreds of paying users (undisclosed MRR), almost all renewed their yearly subscription. Validated in another market first.
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople — electricians, plumbers, general contractors
- **Core Value Prop**: Clean quote/contract PDFs for tradespeople. Pre-fill data, templates, history. Faster than manual. No complex software required.
- **Gap/Opportunity**: 0–5 employee trades businesses don't want full FSM software — they just want to send professional-looking quotes and contracts. Existing tools are either over-engineered or ugly. High annual renewal rate signals true stickiness.
- **Our Angle**: Mobile-first "5-minute quote" for tradespeople — take photos, fill in materials/labor, send branded PDF quote via SMS link. $29/month or $199/year.
- **LTD Potential**: 5/5

---

## ClientPing — Mobile Job Management + SMS Communication for Service Pros

- **Source**: https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: IH founder story (Aug 2026)
- **Engagement**: Small IH discussion
- **Revenue Data**: Early stage, bootstrapped. No MRR data.
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC techs, electricians, painters
- **Core Value Prop**: Mobile-first job management with one-tap SMS updates ("On my way", "Running late", "Job complete"). Offline-first (works in basements/low signal). Simple client booking link for social media.
- **Gap/Opportunity**: Existing FSM tools (Jobber, ServiceM8) are desktop-first and over-featured. Service pros in the field need a phone-native tool. The "On my way" SMS is a real use case that reduces missed appointments and improves customer satisfaction.
- **Our Angle**: Go ultra-simple: just the job comms layer. 3 features — job list, one-tap SMS updates, client history. $14/month. Compete on simplicity vs. Jobber's complexity.
- **LTD Potential**: 4/5

---

## Autonomous Home Services (rainslice.ai) — AI-Run Cleaning/Service Businesses

- **Source**: https://news.ycombinator.com/item?id=48769010
- **Additional Links**: https://rainslice.ai
- **Platform**: HN
- **Type**: Show HN (4 points)
- **Engagement**: 4 points, 2 comments, early validation
- **Revenue Data**: Running 3 cleaning companies in California (operational, not SaaS revenue)
- **Boring Business Score**: 5/5
- **Target Industry**: Cleaning, home services
- **Core Value Prop**: AI that runs the entire home services business 24/7: inbound calls/SMS, quotes, dispatch, ads, lead follow-up, customer support.
- **Gap/Opportunity**: This is a bigger vision than a point tool — autonomous business operations. Currently proven for cleaning companies. The wedge is narrow (cleaning), but the platform play is big.
- **Our Angle**: Build the simpler version — autonomous "after-hours" operations only: AI handles calls and SMS between 6pm–8am, creates jobs for morning review. $199/month. Much easier to sell than full autonomous.
- **LTD Potential**: 2/5

---

## Signal Summary

**Top validated opportunities (revenue-proven):**
1. Avenue model (booking widget + AI phone for trades) — $55K USD/month proven
2. HVAC Maintenance Plans state machine (Breezy playbook) — $250K ARR in 9 months
3. Pool/pest control vertical SaaS (Skimmer: $1M ARR; DASHP: $100K ARR) — both sold/bootstrapped
4. ZenMaid model for cleaning — $3M/year, old product ripe for modern reboot

**Highest opportunity/gap score (need exists, no clear winner):**
1. Field Manual Copilot (RAG for HVAC manuals) — $79K MRR attainable, XOi/Bluon validation
2. Septic tank service tracker — literally no one building this, 35K+ operators
3. Crewbird/Google LSA-native FSM — gap confirmed by HN discussion, early builder
4. Weather dispatch tool (Prelay) — specific pain, 4am alarm story = real problem
5. Clawbolt/WhatsApp-native trade assistant — open source from Mozilla, commercial gap open

**Recurring theme:** Service businesses (2–10 employees) are stuck between:
- Enterprise tools ($400–700/month ServiceTitan) that are too complex
- Generic tools (Jobber, ServiceM8) that aren't trade-specific
- Their current "system" (WhatsApp group + spiral notebook)

The $49–149/month sweet spot for trade-specific tools is wide open and proven to convert via word-of-mouth in trade Facebook groups and Reddit.
