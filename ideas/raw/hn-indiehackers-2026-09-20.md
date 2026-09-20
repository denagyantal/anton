# HN & Indie Hackers Research — 2026-09-20

> **Agent**: HN & Indie Hackers Scanner
> **Focus**: Boring business SaaS — validated products in unsexy, profitable industries
> **Sources searched**: Hacker News (Show HN, Ask HN), Indie Hackers (revenue milestones, case studies, discussions)

---

## AI Dental Front Desk Employee (Zirco.ai)

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: Low upvotes, 3 comments (early-stage / beta)
- **Revenue Data**: Beta — 30+ dental practices in discovery; no MRR disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices
- **Core Value Prop**: End-to-end AI that handles the full front desk workflow — insurance verification (automated browser automation through 10+ carrier portals via Playwright + Availity), inbound voice scheduling (Vapi), SMS/email reminders, and new patient intake. One front desk employee costs $40–50K/yr with 40% annual turnover; Zirco replaces that entire function.
- **Gap/Opportunity**: Insurance verification is genuinely painful (manual logins to different portals with different data formats). No one else is automating the full workflow end-to-end with HIPAA compliance built in from day one. Existing players (Weave, RevenueWell) do scheduling and comms but not insurance verification.
- **Our Angle**: Narrow to a single pain point first (insurance verification only, $X/month) rather than trying to replace the whole front desk. Could also expand to other allied health verticals (optometry, physical therapy) that face the same insurance headache.
- **LTD Potential**: 2/5 — HIPAA complexity and ongoing automation costs make LTD tricky; better as MRR product.

---

## Autonomous AI-Run Home Services Businesses

- **Source**: https://news.ycombinator.com/item?id=48769010
- **Additional Links**: N/A (no product URL in post)
- **Platform**: HN
- **Type**: Show HN (July 3, 2026)
- **Engagement**: Early-access stage, minimal comments
- **Revenue Data**: Running 3 cleaning companies in California on AI autopilot; no MRR disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Home services (cleaning, likely expandable to HVAC, landscaping)
- **Core Value Prop**: AI that runs an entire home services business 24/7 — handles inbound calls/SMS, creates quotes, dispatches workers, runs ads, follows up with leads, and handles customer support. Not software for the business owner; *is* the business.
- **Gap/Opportunity**: This is a very early-stage concept. Most field service software (ServiceTitan, Jobber, Housecall Pro) is software *for* operators. Replacing entire ops with agents is an under-explored wedge. However, the hardest part is trust — small business owners won't hand over their business to an unproven AI.
- **Our Angle**: Rather than replacing the whole business, build "AI operations co-pilot" for a single function: e.g., AI follow-up and rebooking for cleaning companies. Wedge into one workflow, prove ROI, then expand.
- **LTD Potential**: 2/5 — Not a natural LTD fit; high ongoing AI inference costs.

---

## CraftBoop — Automated Customer Follow-Up for Service Businesses

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch / feedback request (April 2026)
- **Engagement**: Community discussion, positive early feedback
- **Revenue Data**: Just launched, $29/mo pricing, 14-day free trial; a few early users
- **Boring Business Score**: 5/5
- **Target Industry**: Service businesses — plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, sends a 5-email automated sequence: thank you → review request → check-in → rebooking reminder → referral request. You add the customer once; it handles the rest. Solves the fact that tradespeople do good work but never ask for reviews or referrals systematically.
- **Gap/Opportunity**: $29/mo is almost too cheap. These businesses generate $500–5,000+ per job and a single review or referral has massive ROI. The sequence is also very email-focused — SMS would likely perform better in these blue-collar niches. Also no integrations with field service software (Jobber, ServiceTitan, Housecall Pro) mentioned yet.
- **Our Angle**: Build a better version with (1) SMS-first follow-ups, (2) native integrations with Jobber/ServiceTitan/Housecall Pro so it runs automatically without manual customer entry, (3) $79/mo positioning with a compelling ROI calculator showing cost per review/referral.
- **LTD Potential**: 4/5 — Simple automation product, clear LTD at $99–199 for small operators.

---

## AI Voice Receptionist Agency for Trades + Healthcare

- **Source**: https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Strategy/playbook post (Jan 2026)
- **Engagement**: Multiple upvotes; detailed practical guide format
- **Revenue Data**: $1–2K setup fee + $300–800/month per client; 80%+ margin at ~100 calls/month ($50–100 in AI costs)
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbing/HVAC contractors, law firms, home service providers, dental practices — all appointment-based businesses facing the same constraint: hire full-time receptionist ($30K+/yr) or miss calls
- **Core Value Prop**: AI voice agent that handles inbound calls 24/7, books appointments, reduces missed revenue. Stack: Callin.io (white-label) + n8n for automation + Cal.com for scheduling. Agency model: client sees it as a managed service, not software.
- **Gap/Opportunity**: Agency model is high-touch. The play is to productize this into a self-serve SaaS for a specific vertical (e.g., HVAC-only). Callin.io white-label means you're building on a platform that could change pricing or terms. Owning the stack directly (Vapi + your own scheduling layer) creates a real moat.
- **Our Angle**: Pick one vertical (HVAC or dental), build a branded "AI receptionist for HVAC companies" product with pre-built scripts and pre-built integrations with ServiceTitan/Jobber. Self-serve signup, $299/mo, no agency overhead.
- **LTD Potential**: 3/5 — Ongoing AI costs make LTD awkward but a "founding member" plan with usage cap could work.

---

## ZenMaid — Scheduling Software for Maid Services ($3M/yr Bootstrapped)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://www.zenmaid.com
- **Platform**: Indie Hackers
- **Type**: Case study / revenue milestone
- **Engagement**: High — featured case study
- **Revenue Data**: $3M/yr (bootstrapped), growing, 11 years old
- **Boring Business Score**: 5/5
- **Target Industry**: Maid/cleaning services worldwide
- **Core Value Prop**: Scheduling software specifically built for maid services — handles dispatching, customer management, reminders. Founded by someone who actually ran a maid service, so built for the real workflow.
- **Gap/Opportunity**: ZenMaid is 11 years old and has loyal users but hasn't evolved much. Opportunity: AI-enhanced version with automatic rebooking, smart route optimization, customer lifetime value scoring, and review automation built in. Or: niche further to a specific cleaning sub-vertical (commercial cleaning, Airbnb turnover, post-construction cleaning).
- **Our Angle**: "ZenMaid but modern" — rebuild for 2026 with AI-powered scheduling optimization, integrated payments, and automatic review collection. Undercut on price, go after their dissatisfied customers.
- **LTD Potential**: 4/5 — Cleaning businesses are sticky; they'll pay for an LTD if it solves scheduling + payment in one tool.

---

## HandyPay — Deposits & Payment Automation for Appointment-Based Businesses

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Revenue milestone (Jan 2026)
- **Engagement**: Community featured post
- **Revenue Data**: $1k MRR in under 60 days, direct outreach to spas/salons/service businesses
- **Boring Business Score**: 4/5
- **Target Industry**: Spas, salons, service businesses (appointment-based)
- **Core Value Prop**: Simple deposit and payment tool that reduces no-shows and gets businesses paid faster. One clear use case: collect deposit upfront, reduce no-shows. Sold via in-person and WhatsApp direct outreach.
- **Gap/Opportunity**: The deposit/payment problem is universal across all appointment-based service businesses. HandyPay found traction in salons/spas but the same product applies to HVAC, pest control, landscaping — any business taking bookings. Integration with field service software (Jobber, ServiceTitan) would create a real distribution channel.
- **Our Angle**: Position as "no-show insurance for service businesses" — specifically target HVAC and home services where a missed appointment costs $200–500 in technician time. Integrate with Jobber/Housecall Pro for automatic deposit collection at booking.
- **LTD Potential**: 4/5 — Simple standalone tool; LTD at $79–149 is very realistic.

---

## Rentman — Operations Platform for AV/Event Production ($15–20M ARR)

- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Additional Links**: https://rentman.io
- **Platform**: Indie Hackers
- **Type**: Case study / founder interview
- **Engagement**: High — featured interview
- **Revenue Data**: $15–20M ARR, growing
- **Boring Business Score**: 4/5
- **Target Industry**: AV rental, event production, lighting/staging/broadcast companies
- **Core Value Prop**: One system for the "messy middle" of running a production company — equipment rental tracking, crew scheduling, quoting, logistics, invoicing. Started because founder ran an AV company and hated the available software.
- **Gap/Opportunity**: Rentman serves AV/events well. Adjacent verticals with identical operational needs: party supply rental, tool rental, bounce house/inflatables rental, wedding venue A/V. These smaller sub-niches don't have a dedicated solution and are too small for Rentman to care about.
- **Our Angle**: Clone Rentman's core (inventory tracking + quotes + invoicing) for party rental businesses specifically. Party rental companies (bounce houses, tables/chairs/linens) are entirely underserved, mostly running on spreadsheets or generic tools like Airtable.
- **LTD Potential**: 3/5 — Rentman is $99+/mo; a simpler LTD version at $149–299 could work for small operators.

---

## Verito Technologies — Vertical Cloud Hosting for Tax/Accounting Firms (Profitable at 0.4% Market Share)

- **Source**: https://www.indiehackers.com/post/how-we-built-a-profitable-paas-by-serving-only-0-4-of-us-businesses-4927bc5f68
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Case study / strategy post (May 2026)
- **Engagement**: Featured post, high upvotes
- **Revenue Data**: ~1,000 customers, profitable, 10+ years old, strong YoY growth; premium pricing vs. generic providers
- **Boring Business Score**: 5/5
- **Target Industry**: Tax preparers and CPA firms running specific software (Drake Tax, UltraTax CS)
- **Core Value Prop**: Cloud hosting *specifically* for tax and accounting software. Support staff are tax software specialists, not generic helpdesk. Serves niche infrastructure needs (seasonal demand spikes at tax filing, compliance, specific software compatibility) that generic cloud providers can't match.
- **Gap/Opportunity**: The vertical cloud model works because specialized support + compliance commands premium pricing. Exact same playbook could apply to: (a) dental practice management cloud hosting (Dentrix, Eaglesoft), (b) HVAC dispatch software hosting (ServiceTitan self-hosted), (c) any SMB vertical with specific on-premise software they want to cloudify.
- **Our Angle**: Replicate vertical cloud model for a different industry. Dental practice cloud hosting (Dentrix/Eaglesoft) is the most obvious — dental offices are tech-phobic, pay premiums, and have HIPAA/uptime requirements that generic hosts don't handle well.
- **LTD Potential**: 1/5 — Infrastructure/PaaS not suitable for LTD.

---

## Craftplan — Production Management for Small-Batch Manufacturers (Open Source)

- **Source**: https://news.ycombinator.com/item?id=46847690
- **Additional Links**: N/A (open-sourced, GitHub-based)
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: Active discussion, many comments from small manufacturers, bakery owners, operations folks
- **Revenue Data**: Open source; no MRR (yet)
- **Boring Business Score**: 4/5
- **Target Industry**: Micro-bakeries, small-batch food production, craft manufacturing
- **Core Value Prop**: Versioned BOMs with cost rollups, inventory with lot traceability, demand forecasting, allergen tracking, order management, production batch planning, purchasing. Built specifically for micro-bakery workflow — not generic ERP.
- **Gap/Opportunity**: The HN discussion validated strong demand — comments from bagel shops, other bakeries, small manufacturers. Open source creates adoption but no monetization. Opportunity: hosted SaaS version with white-glove onboarding for small-batch food producers. The pain of "everything in Excel" is universal in this market.
- **Our Angle**: Turn Craftplan into a $49/mo hosted SaaS for micro-bakeries and cottage food businesses. Add payment processing, customer ordering portal, and auto-generated production schedules. LTD launch on AppSumo for initial traction.
- **LTD Potential**: 4/5 — Cottage food / micro-bakery market is growing post-COVID. Clear LTD value at $99–199.

---

## HemmaBo — Vacation Rental Booking via AI Agents (0% Commission, MCP-Based)

- **Source**: https://news.ycombinator.com/item?id=47798900
- **Additional Links**: https://github.com/HemmaBo-se/hemmabo-mcp-server
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: Discussion around AI/MCP tooling; niche but growing interest
- **Revenue Data**: Founder saving 15–20% Airbnb commission; SaaS open-sourced
- **Boring Business Score**: 3/5
- **Target Industry**: Vacation rental / short-term rental hosts
- **Core Value Prop**: AI agents (Claude, ChatGPT) can book your vacation rental directly via MCP — no Airbnb, no middleman, no 15–20% commission. Each property becomes its own node with its own domain, pricing engine, and Stripe checkout.
- **Gap/Opportunity**: The MCP-native booking layer is genuinely novel but still early. Most STR hosts are not sophisticated enough to self-host MCP infrastructure. The real opportunity is building a managed version: "we set up your direct booking AI" as a service. Combine with local SEO to drive direct traffic and you have a compelling Airbnb alternative story.
- **Our Angle**: "Airbnb escape kit" — managed service that sets up direct booking website + AI booking agent + payment processing for vacation rental hosts. Position as "stop paying 20% commission." Price at $29/mo or LTD $149.
- **LTD Potential**: 3/5 — Interesting LTD angle but requires ongoing hosting. White-label version could be sold LTD.

---

## Ask HN: Automated Invoice Follow-Up / Late Payment Problem

- **Source**: https://news.ycombinator.com/item?id=47638685
- **Additional Links**: N/A
- **Platform**: HN
- **Type**: Ask HN (April 2026)
- **Engagement**: 39 points, 50 comments — strong signal despite suspected AI-generated post
- **Revenue Data**: N/A (demand signal thread)
- **Boring Business Score**: 4/5
- **Target Industry**: Small B2B service businesses (all verticals — trades, consultants, freelancers)
- **Core Value Prop**: Universal pain: QuickBooks/Xero auto-reminders don't work; WhatsApp messages work but are manual and inconsistent. No good automated system exists that sends WhatsApp reminders as a first-class citizen (not just email).
- **Gap/Opportunity**: The strongest signal from the thread: WhatsApp follow-up *works* but is 100% manual. An automated WhatsApp-first invoice reminder tool (with escalation sequences: WhatsApp → email → formal letter) would be highly differentiated vs. Xero/QB reminders. Similar to what CraftBoop does for service businesses, but for B2B invoicing.
- **Our Angle**: "Invoice chaser that uses WhatsApp" — automated multi-channel invoice follow-up sequences (WhatsApp + email + SMS). Integrate with Xero/QB/FreshBooks as an add-on. $29–49/mo or LTD $99.
- **LTD Potential**: 5/5 — Perfect LTD fit. Clear ROI ("paid for itself on first recovered invoice"). Niche enough to avoid VC competition, broad enough to have a large market.

---

## AI Local Business Diagnostic Pipeline (HVAC, Roofing, Law, Vet)

- **Source**: https://www.indiehackers.com/post/built-an-autonomous-pipeline-that-cold-pitches-local-businesses-and-delivers-paid-diagnostic-reports-while-i-sleep-3c0921ab42
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Project showcase (March 2026)
- **Engagement**: Community discussion
- **Revenue Data**: $149 snapshot or $399 full report; 49 cold emails sent, 0 replies (yet), but $870K–$2.4M in identified revenue leakage across pipeline
- **Boring Business Score**: 4/5
- **Target Industry**: Local service businesses — HVAC, law firms, roofing, veterinary, etc.
- **Core Value Prop**: Fully autonomous pipeline that: (1) finds leads via Google Places API, (2) scores them on reputation/lead capture/after-hours coverage/website health, (3) LLM-generates personalized cold pitch with actual grade + estimated dollar leakage, (4) takes Stripe payment for audit report. No human involvement.
- **Gap/Opportunity**: The pipeline concept is clever but conversion so far is 0. The real value is the *product* not the outreach: a "website and online presence health score" for local service businesses, sold as a self-serve tool (local businesses look themselves up). Could be a SaaS product local marketers buy to prospect clients.
- **Our Angle**: Flip model: instead of cold outreach, make it a self-serve product. "Grade your local business online presence in 60 seconds." Free tier shows the grade; paid tier shows the full report with actionable fixes. Local marketing agencies pay $49/mo to run unlimited audits on prospects.
- **LTD Potential**: 3/5 — White-label for agencies at LTD $199 is viable.

---

## AnveVoice — AI Voice Receptionist for Dental/Healthcare (+40% Bookings)

- **Source**: https://www.indiehackers.com/post/built-an-ai-voice-receptionist-for-my-dads-dental-clinic-40-more-bookings-80e2c4a830
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Show/launch post (February 2026)
- **Engagement**: Community discussion
- **Revenue Data**: Not disclosed; built for father's clinic first, expanding to other clinics/salons/consultancies
- **Boring Business Score**: 4/5
- **Target Industry**: Dental clinics, salons, appointment-based businesses (India/multilingual focus)
- **Core Value Prop**: AI receptionist that handles calls 24/7 in 22 Indian languages, books via Calendly, captures leads after hours, auto-fills intake forms. Result: 40% more appointments, 60% fewer how-do-I calls, zero missed after-hours calls.
- **Gap/Opportunity**: Multilingual angle is a genuine differentiator in emerging markets. In India, practices miss calls outside 9–6 window constantly; local solutions don't exist. The underlying product (voice AI + booking + multilingual) is replicable across other markets (e.g., Latino-owned US businesses that need Spanish-English AI receptionists).
- **Our Angle**: "AI receptionist for Spanish-speaking US dental and medical clinics" — large underserved population, willing to pay for bilingual AI that handles after-hours, integrates with US-standard EHR/PM software. Price $199/mo.
- **LTD Potential**: 2/5 — Ongoing AI inference costs make LTD challenging.

---

## Pinggle.app — Cleaning Management for Airbnb Hosts

- **Source**: https://www.indiehackers.com/post/we-built-a-cleaning-management-app-for-airbnb-hosts-heres-why-6d696d05c4
- **Additional Links**: https://pinggle.app
- **Platform**: Indie Hackers
- **Type**: Launch post (July 2025)
- **Engagement**: Early pilot users, positive feedback
- **Revenue Data**: Pilot stage, no disclosed MRR
- **Boring Business Score**: 4/5
- **Target Industry**: Airbnb/short-term rental hosts with multiple listings
- **Core Value Prop**: Lightweight tool for Airbnb hosts to manage cleaning operations — coordinate cleaners, verify completion via photos, get notified only when something goes wrong. Solves the "I have to explain everything to the cleaner every time" problem.
- **Gap/Opportunity**: Turno (formerly TurnoverBnB) already exists in this space. Pinggle is earlier and lighter. The real gap: most existing tools focus on coordinating 3rd party cleaners but not *quality assurance* (photo verification, issue flagging). A "turnover intelligence" product — AI that looks at before/after photos and flags problems — would differentiate.
- **Our Angle**: "AI-powered turnover QC for Airbnb hosts" — photo upload after each clean, AI checks for missed spots/damage/items left behind, instant host notification with photo evidence. $19/mo per listing or LTD $99 for up to 5 listings.
- **LTD Potential**: 4/5 — Clear, simple, recurring problem. Good AppSumo fit.

---

## Self-Hosted Invoicing for Freelancers / Simple Invoice Tools (Market Validation)

- **Source**: https://news.ycombinator.com/item?id=46942499 (Invox, Feb 2026)
- **Additional Links**:
  - https://news.ycombinator.com/item?id=46764526 (Simple invoice tool, Jan 2026)
  - https://news.ycombinator.com/item?id=46135247 ($20/yr invoicing tool, Dec 2025)
  - https://news.ycombinator.com/item?id=43970241 (PlainInvoice, May 2025)
- **Platform**: HN
- **Type**: Show HN (multiple)
- **Engagement**: Steady stream of launches; persistent demand signal
- **Revenue Data**: Various — mostly pre-revenue or early traction
- **Boring Business Score**: 3/5
- **Target Industry**: Freelancers, contractors, small service businesses
- **Core Value Prop**: Simple invoicing without QuickBooks/Xero complexity. Multiple Show HN posts across 2025–2026 for nearly identical products: create invoice → send → track viewed/paid → auto-reminders.
- **Gap/Opportunity**: The volume of these launches signals persistent unmet demand — QuickBooks is too complex and expensive; Google Docs invoices are too manual. No one has won this market at the indie scale. The winner needs *one* defensible differentiation (e.g., WhatsApp delivery, fastest possible invoice creation, integrates with a specific workflow tool).
- **Our Angle**: Not a pure invoicing tool — too crowded. The angle is adding automated follow-up and payment nudging as a layer on top of whatever invoicing tool a small business already uses. "Invoice follow-up automation that integrates with your existing tools" (Xero, QB, FreshBooks, Wave).
- **LTD Potential**: 4/5 — All these tools should be LTD products. $49–79 LTD is very reasonable for this market.

---

## Ask HN: "Boring" Businesses for Hackers — Market Validation Thread

- **Source**: https://news.ycombinator.com/item?id=38882314
- **Additional Links**: https://news.ycombinator.com/item?id=36926984 (Share one-man boring internet businesses)
- **Platform**: HN
- **Type**: Ask HN (Jan 2024, referenced in 2025–2026 context)
- **Engagement**: Multiple threads, consistent HN interest in boring/unsexy business models
- **Revenue Data**: Various — BuildWith ($14M ARR, solo), BazQux.com, NotionBackups, OnlineOrNot mentioned
- **Boring Business Score**: N/A (meta-signal)
- **Target Industry**: All boring/unsexy markets
- **Core Value Prop**: Clear community consensus: the best indie businesses are boring, specific, and serve markets VCs ignore. Threads consistently highlight: local service software, industry-specific tools, workflow automation for unsexy industries.
- **Gap/Opportunity**: These threads surface real market intelligence. Key industries repeatedly mentioned as underserved: German bureaucracy (AllAboutBerlin at $90K/yr), PDF hosting (tiiny.host), WordPress site management (WP Umbrella at $110K MRR). Pattern: pick a boring industry, be the one dedicated specialist.
- **Our Angle**: Meta-insight — use these threads to validate that boring niche targeting is working for other indie hackers and use specific industries mentioned as shortlisting criteria.
- **LTD Potential**: N/A

---

## Party/Equipment Rental Management (Identified Gap from Rentman Research)

- **Source**: Derived from Rentman analysis + Ask HN discussions + field service research
- **Additional Links**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Platform**: N/A (synthesized gap)
- **Type**: Identified opportunity
- **Engagement**: N/A
- **Revenue Data**: Rentman = $15–20M ARR in AV rental; adjacent party rental market is similar size but has no dedicated indie solution
- **Boring Business Score**: 5/5
- **Target Industry**: Party supply rental businesses (bounce houses, tables/chairs/linens/tents, AV for small events)
- **Core Value Prop**: Party rental businesses ($50–500K/yr revenue) manage: inventory availability, scheduling, delivery routing, damage tracking, customer deposits, invoice collection — all currently in spreadsheets or generic tools. They need exactly what Rentman built but simpler and cheaper.
- **Gap/Opportunity**: Rentman is $99+/mo and targets large production companies. Party rental shops are smaller (1–10 employees) and can't afford or justify enterprise tools. Existing tools (EZRentOut, Point of Rental) are generic and expensive. No indie-focused, party-rental-specific SaaS exists.
- **Our Angle**: "Rentman for party rental companies" — inventory tracking, booking calendar, customer portal with online booking, delivery scheduling, automatic deposit collection. $49/mo or LTD $149. Target: Facebook groups for party rental business owners.
- **LTD Potential**: 5/5 — Perfect LTD fit. Simple, one-time value, clear ROI, no ongoing AI costs.

---

*Total ideas documented: 15*
*Highest-signal opportunities (boring business + LTD potential + underserved): Invoice Follow-Up Automation, Party Rental Management, CraftBoop-style Service Business Follow-up, Craftplan-as-SaaS for micro-bakeries*
