# HN & Indie Hackers Boring Business Scan — 2026-11-21

## Key Themes / Summary

Today's scan surfaced strong validation across five recurring themes in boring-business SaaS:

1. **AI Voice / Missed-Call Recovery** — The single hottest category. Multiple IH posts show $300–$800 MRR per client for AI receptionists serving trades (dental, HVAC, plumbing, cleaning). Validated model, proven unit economics, wide-open market of service businesses still taking calls manually.

2. **Trades-Specific Booking & Scheduling Widgets** — Avenue (AU) is doing $85K AUD/month with a website embed for mechanics and electricians that handles bookings without a phone call. The gap: US market equivalent largely unaddressed at this price point and simplicity.

3. **Field Service / FSM for the Long Tail** — Several HN threads show developers building FSM/CRM tools for cleaning, carpet cleaning, and home services. The "ERP too complex, spreadsheet not enough" gap is cited repeatedly. BlastoClean, Crewbird, ClientPing — all launched in 2026 from zero.

4. **HVAC/Trades Maintenance Plan Management** — Breezy hit $250K ARR in 9 months by deeply codifying HVAC maintenance plan workflows. The moat is domain depth, not feature breadth. Similar under-modeled workflows exist in pest control, electrical commissioning, plumbing contracts.

5. **Pest Control / Local Service SaaS** — HN thread with 448 points from someone who took a pest control technician job to validate the market. Conclusion: incumbent VSaaS exists but is cheap and "decent" — the opportunity is tech-enabling an operator rather than selling SaaS. Points to a service layer play rather than pure software.

---

## Individual Entries

## AI Voice Receptionist for Trades (Zirco.ai / KraftunAI / Dolfyn / Generic Opportunity)
- **Source**: https://news.ycombinator.com/item?id=47385090 (Zirco.ai dental front desk)
- **Additional Links**: https://www.indiehackers.com/post/how-i-built-an-ai-phone-receptionist-for-czech-tradespeople-first-paying-customers-MSythQu01p7HfU7QyKGE | https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE | https://news.ycombinator.com/item?id=48580402
- **Platform**: HN + Indie Hackers
- **Type**: Show HN / IH Revenue Post / Discussion
- **Engagement**: Multiple threads; IH voice agency post widely discussed
- **Revenue Data**: $300–$800 MRR per client, 80%+ margins. Setup fee $800–$2K. Unit cost ~$50–100/month per client at 100 calls.
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices, HVAC, plumbing, cleaning, law firms, clinics — any appointment-based trades
- **Core Value Prop**: AI answers inbound calls 24/7, books appointments, reduces missed-call revenue loss. Front desk employee costs $40–50K/year and turns over at 40% annually; AI is option 3.
- **Gap/Opportunity**: Most implementations are horizontal/generic. Dental has HIPAA complexity, insurance verification, specific practice management integrations (Dentrix, Eaglesoft). HVAC has dispatch complexity. Each vertical needs deep integration, not just voice.
- **Our Angle**: Build vertically — one industry (e.g., HVAC or plumbing), deeply integrated with their existing scheduling software (ServiceTitan, Jobber, Housecall Pro), with real dispatch logic, not just an answering service.
- **LTD Potential**: 2/5 (recurring model is the value; LTD could work at $499–$999 for a capped-calls tier)

---

## Avenue — Trades Booking Widget ($85K AUD/month)
- **Source**: https://stackstarts.com/avenue-branded-trades-booking-widget/ | https://www.youtubetranscript.dev/channels/starter-story/mr4YV-9MY0Q/this-simple-widget-makes-50kmonth
- **Additional Links**: Starter Story podcast Sept 2026
- **Platform**: Indie Hackers / Starter Story
- **Type**: Revenue milestone / case study
- **Engagement**: Widely shared on LinkedIn/Starter Story
- **Revenue Data**: $85,000 AUD/month (~$55K USD). Started Feb 2025. No technical background founder; hired team.
- **Boring Business Score**: 5/5
- **Target Industry**: Trades — mechanics, electricians, HVAC, plumbers, general contractors
- **Core Value Prop**: Website embed widget that lets customers select a service, choose a time, and book without calling. Integrates with Google Reservations so bookings start from Google My Business profile too.
- **Gap/Opportunity**: US-focused equivalent doesn't exist at this simplicity/price point. Niche trade verticals (pool service, pest control, irrigation) have zero purpose-built booking widgets. Avenue found trades by going door-to-door — US market is wide open for a focused version.
- **Our Angle**: Clone for US market, hyper-niche to a single trade (e.g., HVAC or pool/spa service). Include Google Reservations integration from day one. White-label for multi-location franchise service businesses.
- **LTD Potential**: 3/5 (booking widget is a clear LTD product; $99–$199 per business lifetime access)

---

## Breezy — HVAC Vertical SaaS ($250K ARR in 9 months)
- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Additional Links**: N/A (founding engineer case study)
- **Platform**: Blog / HN adjacent
- **Type**: Revenue milestone / strategy post
- **Engagement**: High — widely cited in vertical SaaS discussions
- **Revenue Data**: $0 to $250K+ ARR in 9 months. 400 maintenance plans in first months; scaled to 2,300+.
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: Built HVAC maintenance plan management so deeply it became core operational infrastructure. Tracks payment state, scheduling, enrollment, and renewal simultaneously — something shops ran on sticky notes and spreadsheets.
- **Gap/Opportunity**: The "maintenance plan" problem exists in every service vertical: pest control contracts, plumbing service agreements, elevator maintenance, fire suppression inspection contracts. Each is a multi-axis state machine nobody has modeled correctly for that vertical.
- **Our Angle**: Clone the "codify the painful manual workflow" approach for pest control service agreements or plumbing maintenance contracts. Competitor software exists but no one has done the renewal/billing/visit scheduling state machine at HVAC-depth.
- **LTD Potential**: 2/5 (operational software — recurring model only, but LTD for small shops at $299–$499 possible)

---

## Crewbird — Field Service CRM with Google LSA Integration
- **Source**: https://news.ycombinator.com/item?id=50418273
- **Additional Links**: https://getcrewbird.com/
- **Platform**: HN
- **Type**: Ask HN — "What are you working on?" (November 2026)
- **Engagement**: Active discussion; multiple commenters validating the gap ("space between full-blown ERP and Excel spreadsheet is abysmal")
- **Revenue Data**: Dad's carpet cleaning company approaching 3x ROAS. Early stage, no MRR disclosed.
- **Boring Business Score**: 5/5
- **Target Industry**: Carpet cleaning, field service, home services — any service business using Google Local Service Ads
- **Core Value Prop**: FSM + CRM with native Google LSA integration. Tracks every dollar of ad spend to determine ROAS, which existing SaaS CRMs don't do well. Google LSA dashboard is poor; this bridges the gap.
- **Gap/Opportunity**: Google LSA is now a primary customer acquisition channel for plumbing, HVAC, cleaning, electrical — but zero CRMs have deep LSA integration. The comment thread validated this: "12 different trackers per hour just to find a snippet of information."
- **Our Angle**: Build the Google LSA-native CRM for one specific trade (e.g., HVAC or plumbing). Include automatic lead attribution from LSA through to booked job, job completed, invoice paid. This is a clear wedge in a validated gap.
- **LTD Potential**: 3/5 (small shop tool; $79–$149/month recurring OR LTD at $299–$499 for smaller operators)

---

## ZenMaid — Maid Service Scheduling SaaS ($3M/yr)
- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: zenmaid.com
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / founder story
- **Engagement**: Published Feb 2025; high engagement
- **Revenue Data**: $3M/yr ($250K/month), bootstrapped, 11 years, lifestyle business.
- **Boring Business Score**: 5/5
- **Target Industry**: Residential maid/cleaning services
- **Core Value Prop**: Scheduling, customer management, and operations software built exclusively for maid services. Domain expertise from actually running a maid service.
- **Gap/Opportunity**: ZenMaid owns residential cleaning; commercial cleaning (offices, restaurants, warehouses) is fragmented with no equivalent dominant tool. BlastoClean just launched targeting cleaning companies at $0 revenue — the market is active.
- **Our Angle**: Build the ZenMaid equivalent for commercial cleaning — recurring contract management, insurance certificate tracking, cleaner scheduling across multiple building sites, client portal with walk-through self-inspection.
- **LTD Potential**: 4/5 (cleaning company owners respond to lifetime deals; $79–$149 LTD per company is viable)

---

## BlastoClean — Cleaning Company Quoting & Scheduling
- **Source**: https://www.indiehackers.com/post/i-built-a-60k-mo-point-of-sale-business-starting-in-high-school-now-im-starting-over-at-0-with-cleaning-companies-06eeded96a
- **Additional Links**: https://www.blastoclean.com/ | https://www.indiehackers.com/product/blastoclean
- **Platform**: Indie Hackers
- **Type**: Launch post (October 2026)
- **Engagement**: Active IH discussion; founder has $60K/month PHP POS business as proof of track record
- **Revenue Data**: $0 revenue at launch (Oct 2026). PHP Point of Sale doing $60K/month as companion business.
- **Boring Business Score**: 5/5
- **Target Industry**: Residential and commercial cleaning companies
- **Core Value Prop**: Quoting and scheduling for cleaning companies. Founder onboards first 10 customers personally. Same playbook as PHP Point of Sale: no ads, word of mouth, start with direct calls.
- **Gap/Opportunity**: Market is validating right now — multiple founders building in this space simultaneously. The founder's insight: AI lets him build faster than his previous SaaS required. The gap is clean, opinionated, mobile-first tools vs. bloated enterprise options.
- **Our Angle**: If BlastoClean stays slow/small, the opportunity is a faster-moving competitor with specific features: Google review automation, recurring contract pricing calculator, cleaner GPS tracking, payroll integration. Could differentiate with AI-powered quote generation from room photo.
- **LTD Potential**: 4/5

---

## CraftBoop — Automated Follow-Ups for Service Businesses
- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post (April 2026)
- **Engagement**: Early feedback, small discussion
- **Revenue Data**: $29/month; early users, no MRR disclosed. Very early stage.
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers — any service business
- **Core Value Prop**: After each job, sends automated 5-email sequence to customer: thank you, review request, check-in, rebooking reminder, referral request. Add customer once; it handles the rest.
- **Gap/Opportunity**: Service businesses are notoriously bad at post-job follow-up. No other tool does this specifically for trades/home services at $29/month. Google review generation is a massive unmet need — most shops pay $200–$500/month for reputation management services that do less than this.
- **Our Angle**: Add SMS to the sequence (email open rates are low for trade customers). Add direct Google review link generation. Add reactivation campaign for customers who haven't booked in 6 months. Bundle with a "review response" AI module.
- **LTD Potential**: 5/5 (perfect LTD product at $59–$79 per business; recurring upsell for SMS credits)

---

## ClientPing — Mobile Job Management + SMS Communication for Trades
- **Source**: https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Launch post (August 2026)
- **Engagement**: Small discussion, honest founder reflection
- **Revenue Data**: Not disclosed; bootstrapped, early stage
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC techs, electricians, painters — solo and small-team service pros
- **Core Value Prop**: Mobile-first job management with one-tap SMS updates ("On my way," "Running late," "Job complete"). Offline-first (works in basements/low signal). Customers don't need to install anything — they just get a text. Booking link shareable via Instagram/Facebook/text.
- **Gap/Opportunity**: Most FSM software is desktop-first and bloated. Genuinely mobile-native, offline-capable FSM for the 1–5 person trade shop is unserved. The founder is right that the gap is distribution, not product — these customers need to be found in Facebook groups and trade forums.
- **Our Angle**: ClientPing has the right idea but no traction. Build a competing product with SMS-native, add payment collection (send invoice and collect via text), and market directly into Facebook groups for specific trades. Price at $19–$29/month or $99 LTD.
- **LTD Potential**: 5/5 (simple, tangible, $99 LTD is a no-brainer for a sole-trader plumber or painter)

---

## Prelay — Weather-Based Work Planning for Outdoor Contractors
- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: HN
- **Type**: Show HN (November 2026)
- **Engagement**: 2 points, 0 comments — very early
- **Revenue Data**: Not disclosed; first commercial offering, US-only launch
- **Boring Business Score**: 4/5
- **Target Industry**: Landscaping, roofing, outdoor contractors, concrete/paving — any weather-sensitive trades
- **Core Value Prop**: Monitors contractor's full job schedule across sites; determines weather suitability for 62 activities across 12 trades. Custom ground-wetness model for soil conditions. Sends weather-triggered notifications to reschedule early (critical — crews paid if cancellation is after 6am).
- **Gap/Opportunity**: The 4am wake-up problem is real and painful. No existing tool solves this at scale. Landscaping companies with 10–50 crews have massive operational overhead from weather uncertainty. Could extend to roofing (insurance claims timing), concrete (curing conditions), exterior painting.
- **Our Angle**: Build the scheduling automation layer on top of weather intelligence — integrate with existing FSM software (Jobber, ServiceTitan) so cancellation/reschedule flows automatically, not just a notification. Pricing by crew size or job count.
- **LTD Potential**: 3/5 (operational tool with ongoing data costs; LTD at $199–$299 for smaller operators)

---

## InstaBid Solo — Instant-Quote Wizard for Service Contractors
- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Launch post (July 2026)
- **Engagement**: Active IH feedback thread
- **Revenue Data**: Not disclosed; 5-month solo build, just launched
- **Boring Business Score**: 4/5
- **Target Industry**: Pressure washing, home services, exterior cleaning, any service contractor with quote-driven sales
- **Core Value Prop**: Instant-quote wizard that captures leads at every funnel stage. Customer answers questions, gets transparent price estimate in under 60 seconds. Partial abandonment is captured — contractor gets lead info even if customer bails mid-wizard. Analytics on price sensitivity and funnel conversion.
- **Gap/Opportunity**: Most contractors use generic contact forms that convert poorly. The key insight is partial-lead capture on abandonment — this alone is worth the product. Existing tools (ServiceTitan, Jobber) have no equivalent quote widget for the contractor's own website.
- **Our Angle**: White-label the concept specifically for HVAC (replace/repair decision wizard) or roofing (insurance claim vs. self-pay wizard). These are higher-ticket services where the quote process is more complex and the value of instant pricing is higher.
- **LTD Potential**: 4/5 (clear one-time tool; $79–$149 LTD per contractor is obvious pricing)

---

## Pest Control Vertical SaaS / Tech-Enabled Operator
- **Source**: https://news.ycombinator.com/item?id=47509571
- **Additional Links**: https://onhand.pro
- **Platform**: HN
- **Type**: Show HN / Discussion (448 points, 182 comments — high engagement)
- **Engagement**: 448 points, 182 comments — one of the most engaged boring-business threads found
- **Revenue Data**: Founder chose NOT to build SaaS — decided tech-enabled operator is better than selling to incumbents. Incumbent VSaaS is "decent, cheap, and ubiquitous."
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control ($50B+ industry, recurring residential and commercial contracts)
- **Core Value Prop**: The thread validates that existing pest control SaaS (PestRoutes, ServSuite) is entrenched but generic. The real opportunity is the operator model: acquire or start a pest control company, tech-enable it with smart traps, AI upselling, hands-free CRM data entry, and outcompete on service quality.
- **Gap/Opportunity**: The comment thread identifies the opportunity clearly: a software layer that does "a ton more, is much cheaper, or has network effects." Smart trap IoT data + treatment scheduling + compliance reporting is an underbuilt bundle. Commercial pest control (food manufacturing, restaurants) has zero good SaaS for compliance documentation.
- **Our Angle**: Build compliance-first pest control software specifically for commercial customers (restaurants, food processing, healthcare) who face regulatory requirements. The compliance audit trail and inspection report generator are where incumbents fail. Price at $149–$299/month per location vs. $39/month generic tools.
- **LTD Potential**: 2/5 (compliance SaaS is recurring by nature; but $499–$799 LTD for small pest control operators is viable)

---

## FreshLeads.pro — Local Business Lead Database (Plumbers, Dentists, HVAC)
- **Source**: https://www.indiehackers.com/post/i-found-a-gap-apollo-and-zoominfo-completely-ignore-and-built-a-saas-around-it-bKPCMuinaao69AHm5kVK
- **Additional Links**: https://freshleads.pro
- **Platform**: Indie Hackers
- **Type**: Launch post (February 2026)
- **Engagement**: Active discussion
- **Revenue Data**: $100 MRR at 6 weeks (1 Agency customer). 50,000+ leads generated. Bounce rate 2.4% vs. 15–18% on Apollo.
- **Boring Business Score**: 3/5
- **Target Industry**: Agencies selling to local businesses: dentists, plumbers, HVAC companies, restaurants
- **Core Value Prop**: Searches Google Maps for any business type + location, scrapes websites for real emails, verifies via MX records. Apollo gives 12 results for "dentists in Austin"; this gives 247.
- **Gap/Opportunity**: Apollo/ZoomInfo are built for enterprise B2B, not local SMB. 33 million US small businesses are invisible in existing databases. Any SaaS that targets local trade businesses (selling them software) needs this data layer.
- **Our Angle**: Build this as a feature of a trades-focused SaaS, not a standalone product. OR build the equivalent but specific to one state/region to verify local contact data at higher accuracy. Could be a sales tool for anyone building outbound motion for trades software.
- **LTD Potential**: 4/5 ($79–$149 LTD for the data access; credits model for ongoing use)

---

## OwePilot — Automated Invoice Follow-Up for Small Service Businesses
- **Source**: https://www.indiehackers.com/post/launching-owepilot-automated-invoice-follow-up-for-small-service-businesses-CgDNFLqPsMxnHK6DeQVU
- **Additional Links**: https://www.owepilot.com
- **Platform**: Indie Hackers
- **Type**: Launch post (September 2026)
- **Engagement**: Small discussion, early stage
- **Revenue Data**: Not disclosed; very early
- **Boring Business Score**: 4/5
- **Target Industry**: Contractors, cleaners, landscapers, agencies — any small service business that invoices
- **Core Value Prop**: Keeps unpaid invoices organized, schedules professional payment reminders, sends automated follow-ups, stops reminders when invoice is marked paid. Focused tool, not an accounting platform.
- **Gap/Opportunity**: Service businesses (especially trades) have terrible invoice collection. QuickBooks has this feature but it's buried. Wave and FreshBooks require the full platform. A standalone "get paid faster" tool for trades that integrates with QuickBooks/Stripe via webhook is a clear gap.
- **Our Angle**: Add WhatsApp/SMS reminders (email open rate is low for trade customers). Add a "one-click payment" link in reminders. Build trade-specific pricing (e.g., auto-send lien notice warning as reminder escalation for construction). Price at $19–$29/month or $79 LTD.
- **LTD Potential**: 5/5 (perfect AppSumo product — clear ROI, one-time use case, $59–$79 LTD)

---

## HandyPay — Payment + Deposit Tool for Spas, Salons, Service Businesses
- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Revenue milestone (January 2026)
- **Engagement**: Active discussion
- **Revenue Data**: $1K MRR in under 60 days. No ads, no funnels — direct conversations with spas, salons, service businesses.
- **Boring Business Score**: 4/5
- **Target Industry**: Spas, salons, service businesses with no-show problems
- **Core Value Prop**: Get paid deposits fast and reduce no-shows. Direct, single-use-case. Reached $1K MRR through in-person and WhatsApp conversations, no digital marketing.
- **Gap/Opportunity**: The same no-show/deposit problem exists in every appointment-based trade: HVAC service calls, plumbing diagnostics, appliance repair. Trades often don't collect deposits and lose significant revenue to no-shows. The "payment-required-to-confirm-appointment" workflow is unbuilt for trades.
- **Our Angle**: Build the deposit/payment-first booking flow specifically for HVAC, appliance repair, or other high-value-call trades. Integrate with their existing scheduling software. Add automatic cancellation fee charging. Market via Google review mining for shops with "no-show" complaints.
- **LTD Potential**: 4/5

---

## Latchel — Rental Property Maintenance as a Service (YC W19)
- **Source**: https://news.ycombinator.com/item?id=19370333
- **Additional Links**: https://latchel.com
- **Platform**: HN
- **Type**: Launch HN (YC W19)
- **Engagement**: 76 points, 69 comments
- **Revenue Data**: YC-funded; scaled to hundreds of thousands of units on platform (per 2023 follow-up). $25/unit + $1/unit/month base tier.
- **Boring Business Score**: 5/5
- **Target Industry**: Residential property management — third-party property managers handling 50–500 single-family rentals
- **Core Value Prop**: 24/7 emergency and non-emergency maintenance coordination for property managers. Answers maintenance calls, troubleshoots, dispatches contractors from manager's vendor list. Documents everything for the property owner.
- **Gap/Opportunity**: Latchel targets third-party managers. Owner-operators of 1–10 rental properties have zero tooling for maintenance coordination. This sub-segment (most US landlords own <2 units) has no product. AI could now provide this at $10–20/unit/month rather than $25+.
- **Our Angle**: Build an AI-first maintenance coordinator specifically for the small landlord (1–10 units). Mobile app, WhatsApp integration, automatic vendor dispatching from a preset list, tenant communication via SMS. $29–$49/month per landlord or $9/unit/month.
- **LTD Potential**: 3/5

---

## SuperCMMS / UpKeep — CMMS for Facilities, Restaurants, Manufacturing
- **Source**: https://news.ycombinator.com/item?id=34742157 (SuperCMMS) | https://news.ycombinator.com/item?id=13483984 (UpKeep YC W17)
- **Additional Links**: https://supercmms.com | https://onupkeep.com
- **Platform**: HN
- **Type**: Show HN / Launch HN
- **Engagement**: UpKeep: 80 points, 60 comments. SuperCMMS: 7 points.
- **Revenue Data**: UpKeep scaled from YC to series B ($36M raised by 2020). SuperCMMS: early, free tier. Validates market.
- **Boring Business Score**: 5/5
- **Target Industry**: Facilities maintenance — restaurants, manufacturing, coworking spaces, hotels, food service
- **Core Value Prop**: Mobile-first work order and preventive maintenance tracking. Technician submits requests from phone, manager dispatches, tracking through completion. UpKeep at $25/technician/month.
- **Gap/Opportunity**: UpKeep went upmarket (now $45+/user). The micro-SMB segment (single restaurant, single building, 1–5 technicians) is unserved at affordable pricing. SuperCMMS is trying free but has no traction. Food safety/health code compliance documentation is a specific wedge nobody has built.
- **Our Angle**: Build CMMS specifically for restaurant groups (5–50 locations) with health inspection prep, equipment recall tracking, and automatic service record PDF export. Restaurant operators pay more and churn less than generic facilities.
- **LTD Potential**: 3/5

---

## Terusama — Truck Appointment Scheduling for Warehouses (YC W20)
- **Source**: https://news.ycombinator.com/item?id=22550539
- **Additional Links**: https://www.terusama.com
- **Platform**: HN
- **Type**: Launch HN (YC W20)
- **Engagement**: 69 points, 26 comments
- **Revenue Data**: YC-funded; validates $30B annual inefficiency in US truck scheduling
- **Boring Business Score**: 5/5
- **Target Industry**: Warehouses, distribution centers, trucking companies, logistics
- **Core Value Prop**: Automates truck appointment scheduling between carriers, drivers, and warehouse receiving coordinators. Replaces phone/email scheduling. Kiosk check-in. Real-time visibility.
- **Gap/Opportunity**: Terusama targets mid-to-large warehouses. Small distribution businesses (3PL, regional distributors, food distributors) with 5–20 dock doors have zero tooling. Driver wait times of 3–4 hours destroy the trucker's daily hours-of-service. No one has built this for the small end.
- **Our Angle**: Build dock scheduling for small food distributors / specialty logistics (produce, beverage, e-commerce fulfillment) where scheduling is entirely via phone/email. Price at $199–$499/month per facility, with driver-facing mobile app.
- **LTD Potential**: 2/5 (operational software with ongoing network effects; LTD at $999 for single-facility could work)

---

## Music Teachers Helper — Niche Studio Management SaaS ($70K MRR)
- **Source**: https://saasclub.io/podcast/brandon-pearce-music-teachers-helper/
- **Additional Links**: N/A
- **Platform**: SaaS Club / External
- **Type**: Podcast case study
- **Engagement**: Widely cited in indie hacker circles
- **Revenue Data**: $70,000 MRR. Started 2004, went full-time 2008. 25-person remote team.
- **Boring Business Score**: 3/5 (music is slightly less "boring" than trades but business model is very relevant)
- **Target Industry**: Music teachers / studio management
- **Core Value Prop**: Billing, lesson scheduling, student communications, automatic reminders, tax reports for music teachers.
- **Gap/Opportunity**: The same "studio management" need exists for martial arts, tutoring centers, dance studios, swim schools, yoga studios — all running on spreadsheets or generic booking software. Each is a $5–15K MRR opportunity.
- **Our Angle**: Build the equivalent for a specific underserved studio type — tutoring centers (academic, test prep) or martial arts academies. Specific features: belt/rank progression tracking, curriculum management, parent portal with video homework reviews.
- **LTD Potential**: 4/5

---

## Manufacturing Warehouse B2B SaaS via Direct Mail ($10K MRR)
- **Source**: https://castro.fm/episode/Fkmh6M (Indie Hacker Podcast ep. 108)
- **Additional Links**: N/A (podcast only)
- **Platform**: Indie Hackers / Podcast
- **Type**: Revenue milestone / strategy
- **Engagement**: Podcast discussion
- **Revenue Data**: $10K MRR in 9 months. 3% response rate on 500 mailers. Average customer LTV $4,800. Direct mail only — no website, no ads.
- **Boring Business Score**: 5/5
- **Target Industry**: Manufacturing warehouses / facility managers
- **Core Value Prop**: Niche B2B tool for manufacturing warehouses, sold exclusively via physical direct mail (handwritten postcards + product samples to facility managers).
- **Gap/Opportunity**: The distribution strategy (direct mail) is the insight. Manufacturing facility managers don't search the internet for SaaS tools — they respond to physical mail. This validates that many boring industrial verticals are reachable via offline channels that software founders ignore.
- **Our Angle**: Apply the direct mail acquisition strategy to any industrial SaaS in a vertical that's hard to reach online: pest control operators, HVAC shops, food processing facility maintenance.
- **LTD Potential**: 2/5 (high-touch B2B; LTD not ideal for manufacturing)

---

## Onedesk — Commercial Cleaning SaaS/Ecommerce ($100K+ MRR)
- **Source**: https://www.indiehackers.com/post/2020-in-review-0-to-100k-mrr-for-our-cleaning-saas-ecommerce-d53de6dde5
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / year-in-review
- **Engagement**: High engagement 2021 post
- **Revenue Data**: $0 to $100K+ MRR in 2020 (pivoted through COVID via SEO and electrostatic disinfection content).
- **Boring Business Score**: 5/5
- **Target Industry**: Commercial cleaning — offices, retail, restaurants, healthcare
- **Core Value Prop**: Mobile app for self-walkthrough quoting (office managers measure their space without in-person visits), plus web portal for messaging/payments/scheduling. SEO via disinfection/cleaning educational content.
- **Gap/Opportunity**: The self-walkthrough quoting concept (measure your own space via mobile) is an underused idea. Applied to other verticals: pest control site assessments, HVAC load calculations, roofing measurements. Huge friction reduction.
- **Our Angle**: Build the self-survey/self-quote flow specifically for pest control or HVAC — customer walks their own property with their phone, AI generates a quote. This eliminates the "free estimate" visit that costs operators $50–$100 in technician time before any sale.
- **LTD Potential**: 3/5

---

# Top Picks

## #1 — AI Voice Receptionist for a Single Boring Trade Vertical (HVAC or Plumbing)
**Why it wins**: The AI voice/missed-call problem has validated unit economics ($300–$800 MRR per client, 80% margin), proven demand (dental, cleaning already converting), and a wide-open market. The gap is depth: no one has built a genuinely trade-integrated version that knows HVAC dispatch logic, integrates with ServiceTitan/Jobber, handles emergency call escalation, and processes maintenance plan renewals over voice. The person who builds "voice AI for HVAC shops that actually understands HVAC" wins the vertical. First 10 customers can be acquired by building a demo with a fake HVAC company and cold-calling shops with Google reviews mentioning "hard to reach" or "didn't return my call." LTD positioning: $499 for first year, then $299/year — this is a price that gets an HVAC owner off the phone at 11pm.

## #2 — Trades Booking Widget for the US Market (Avenue Clone)
**Why it wins**: Avenue is doing $85K AUD/month in Australia with a simple website embed for mechanics/electricians. The US market is 10x larger and has no equivalent product at this simplicity. The distribution strategy (door-to-door to local trades shops) is repeatable and doesn't require any digital marketing. Start with one metro area, one trade type (e.g., electricians in Phoenix). Integration with Google Reservations is the killer feature — it appears in the Google Business Profile as a "Book Online" button. LTD angle: $149–$199 lifetime for a single-location trade business; upsell to multi-location franchise package.

## #3 — Google LSA-Native CRM for HVAC/Plumbing (Crewbird Gap)
**Why it wins**: Google Local Service Ads have become the dominant customer acquisition channel for plumbing, HVAC, electrical, and cleaning. Yet zero CRMs natively integrate with Google LSA. The Crewbird founder's thread shows the gap is real and painful — multiple commenters immediately validated it. Build the HVAC-specific CRM where LSA lead attribution flows all the way through to job completion and invoice paid. This creates the ROAS visibility that no existing tool provides. Clear $79–$149/month recurring pricing; LTD at $499 for early adopters.

## #4 — Automated Review + Rebooking Sequences for Service Businesses (CraftBoop angle)
**Why it wins**: CraftBoop is at $29/month with real users. The core insight — "service businesses do great work but never ask for reviews or rebookings" — is universally true across all trades. The gap CraftBoop hasn't filled is SMS (email open rates are ~20% for trade customers; SMS is 90%+), and direct Google review link generation. Build this with SMS-first, add one-click Google review flow, add reactivation for customers who haven't booked in 90/180 days. Market via Facebook groups for specific trades. LTD at $59–$79 is a perfect AppSumo launch.

## #5 — HVAC/Plumbing Maintenance Plan Management (Breezy-inspired)
**Why it wins**: Breezy hit $250K ARR in 9 months by deeply codifying HVAC maintenance plan workflows. The same "multi-axis state machine" problem (payment + scheduling + enrollment + renewal) exists in plumbing service agreements, pest control contracts, elevator maintenance, and fire system inspection contracts. Each vertical has incumbents who handle it poorly. The moat is domain depth — 1,000 small conversations to understand every edge case — not technology. This is the highest-effort, highest-value opportunity: takes 6–12 months to get right, but once right, customers never leave.
