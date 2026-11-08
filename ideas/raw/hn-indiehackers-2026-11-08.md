# HN & Indie Hackers Scan — 2026-11-08

**Agent**: HN & Indie Hackers Scanner
**Date**: 2026-11-08
**Focus**: Boring business SaaS — trades, field service, local services, logistics

---

## Breezy – HVAC Maintenance Plan SaaS ($0 → $250K ARR in 9 months)

- **Source**: https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- **Additional Links**: N/A (founding engineer retrospective post)
- **Platform**: External blog / HN discussion
- **Type**: Revenue milestone / Founding engineer case study
- **Engagement**: Widely cited in HN comments on vertical SaaS threads
- **Revenue Data**: $0 → $250K+ ARR in 9 months; 400 → 2,300+ active maintenance plans on platform
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC service businesses
- **Core Value Prop**: The winning wedge was "Maintenance Plans" — a multi-axis state machine managing payment, scheduling, enrollment, and renewal that every HVAC shop ran on sticky notes and spreadsheets. Breezy codified the entire painful manual workflow correctly, including edge cases like prorations, grandfather pricing, and renewal cliffs.
- **Gap/Opportunity**: Most HVAC SaaS tools ship generic CRMs and dashboards. The moat is in modeling the operational ritual nobody else has bothered to spec correctly. The founding engineer explicitly states they rebuilt Maintenance Plans 3 times. Competitors can copy dashboards in 90 days; they cannot copy 1,000 operator conversations.
- **Our Angle**: Build a narrowly focused "HVAC Service Agreement Manager" — not another all-in-one platform. Nail the renewal automation, prorated billing mid-plan, automated visit scheduling queue, and customer communication for maintenance plan upsells. Price around $99-199/month per shop. The existing players (ServiceTitan etc.) are enterprise; there's a gap at the 1-10 tech small shop level.
- **LTD Potential**: 3/5 — Recurring workflows favor subscription, but an LTD "starter plan" for one-location shops is viable at $199-299.

---

## ZenMaid – Maid Service Scheduling SaaS ($3M/yr bootstrapped)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://get.zenmaid.com
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / Case study
- **Engagement**: 28+ upvotes on IH; founder Amar Ghose (itsjustamar) actively commented
- **Revenue Data**: $3M/yr ($250K/month) bootstrapped, launched 2013, still growing after 11 years
- **Boring Business Score**: 5/5
- **Target Industry**: Residential maid/cleaning services (companies with employees, not solo cleaners)
- **Core Value Prop**: Scheduling software specifically designed for maid service business owners — not generic field service software. Arose from founder actually running a maid service and seeing the gap firsthand.
- **Gap/Opportunity**: ZenMaid proves the market is real and sticky. The gap is in adjacent services: commercial cleaning, window cleaning, carpet cleaning, and pool service — all have same operational needs (recurring schedules, crews, customer communication) but ZenMaid doesn't serve them. BlastoClean (IH, Oct 2026) is trying to do quoting/scheduling specifically for cleaning companies and just launched with $0 revenue.
- **Our Angle**: "ZenMaid for commercial cleaning" — B2B commercial cleaners have larger contracts, higher AOV, and more compliance needs (certificate of insurance tracking, bonded/insured documentation, building access credentials). Build a tool that handles recurring commercial contracts with automated COI reminders, client portal for building managers, and shift-based crew scheduling.
- **LTD Potential**: 4/5 — Cleaning software is high willingness-to-pay, easy AppSumo category.

---

## Pest Control Vertical SaaS — HN Discussion (448 upvotes)

- **Source**: https://news.ycombinator.com/item?id=47509571
- **Additional Links**: https://onhand.pro (founder's company)
- **Platform**: Hacker News
- **Type**: Show HN / Founder story discussion
- **Engagement**: 448 upvotes, 182 comments — extremely high engagement for a trades topic
- **Revenue Data**: None disclosed yet (founder is building a tech-enabled pest control operator, not selling SaaS)
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control industry
- **Core Value Prop**: Founder left tech, took a job as a pest control technician to deeply understand the market, then decided to build a tech-enabled operator rather than sell SaaS. Key insight: "Pest control is about 60% consolidated — the top 5-6 won't buy SaaS from an indie. Cash flow and accounts receivable management is a headache." The incumbent vertical SaaS (PestPac, etc.) is "decent, cheap, and ubiquitous."
- **Gap/Opportunity**: HN comments surface the actual gap: **data entry without physical input** (voice/AI logging after each service call), **smart traps/IoT sensors** that auto-log activity, **upsell automation** (from one-time treatment to recurring service agreement). The founder explicitly says incumbent SaaS is cheap and already adopted — the opportunity is building tools that sit on top: AI-powered service reports, automatic upsell sequences, recurring agreement management.
- **Our Angle**: "Pest control recurring agreement manager" — many pest control businesses have technicians running routes with paper forms. Build a mobile app for technicians that auto-generates service reports via voice (AI transcription), auto-sends customer-facing reports with photos, and triggers upsell sequences for annual agreements. Differentiator: works offline, integrates with PestPac/FieldRoutes via API.
- **LTD Potential**: 3/5 — Niche enough for AppSumo but technician-side tools are harder to LTD.

---

## Latchel (YC W19) – Rental Property Maintenance Coordination (76 upvotes)

- **Source**: https://news.ycombinator.com/item?id=19370333
- **Additional Links**: https://latchel.com
- **Platform**: Hacker News
- **Type**: Launch HN (YC-backed)
- **Engagement**: 76 upvotes, 69 comments
- **Revenue Data**: YC-backed, pricing at $25 + $1/unit/month (all calls) or $25 + $10/unit/month (full coordination). No recent MRR disclosed.
- **Boring Business Score**: 5/5
- **Target Industry**: Residential property management (single-family rentals)
- **Core Value Prop**: Handles 24/7 maintenance calls for property managers — combines software (tenant portal, work order tracking) with human operations (actual call answering, contractor dispatching). Solves the fundamental communications problem: contractors won't adopt new software, tenants rarely use portals, so human-in-the-loop is required.
- **Gap/Opportunity**: Latchel targets third-party property managers with 50+ units. The gap is **small landlords** (1-10 units) who need the same coordination but can't justify $25+/unit/month. HN comment thread confirmed: "80% of units are single family residence" — these owners are extremely underserved. Also: **turnover coordination** (unit punch list creation, vendor scheduling between tenants) is a huge manual process with no good software.
- **Our Angle**: "Landlord maintenance coordinator" for small landlords (1-20 units) — a simple tenant-facing maintenance request portal, AI triage (is this an emergency?), contractor matching from their rolodex, and automated status updates to both landlord and tenant. Price at $15-25/unit/month or flat $49/month for up to 5 units. This is below Latchel's minimum viable scale.
- **LTD Potential**: 4/5 — Strong AppSumo fit; small landlords are notoriously cost-sensitive but will pay once for lifetime tools.

---

## UpKeep (YC W17) – Mobile-First CMMS for Facility Maintenance (80 upvotes)

- **Source**: https://news.ycombinator.com/item?id=13483984
- **Additional Links**: https://onupkeep.com
- **Platform**: Hacker News
- **Type**: Launch HN (YC-backed)
- **Engagement**: 80 upvotes, 60 comments
- **Revenue Data**: YC W17 — now a large company ($100M+ ARR reportedly); pricing starts at $25/technician/month
- **Boring Business Score**: 4/5
- **Target Industry**: Facility maintenance teams (restaurants, clubs, light manufacturing, property)
- **Core Value Prop**: Mobile-first CMMS (computerized maintenance management system) — allows field techs to submit and track work orders from their phones rather than desktop. Targeted bottom-up adoption (techs use it, tell managers).
- **Gap/Opportunity**: UpKeep has grown into enterprise; the small business gap remains. SuperCMMS (HN, Feb 2023) launched a free CMMS originally built for wind/solar plants — 7 upvotes, minimal traction. The opportunity: **restaurant and food service CMMS** — franchise restaurant operators (5-50 locations) need preventive maintenance tracking for equipment (fryers, refrigeration, HVAC) but UpKeep is now enterprise-priced. A simple $49-99/month tool for 1-10 location operators with equipment-specific maintenance templates is underserved.
- **Our Angle**: "Restaurant equipment maintenance tracker" — pre-built templates for commercial kitchen equipment with regulatory compliance checklists (health inspection ready), photo documentation, and vendor contact management. Targeted at franchise operators and independent restaurant groups.
- **LTD Potential**: 3/5 — Restaurant operators do pay for tools but churn is high; LTD possible at $199-399.

---

## CraftBoop – Automated Follow-Up Sequences for Service Businesses (IH Launch)

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: New launch / feedback request
- **Engagement**: IH post, April 2026
- **Revenue Data**: Just launched; $29/month, 14-day free trial, "a few users"
- **Boring Business Score**: 4/5
- **Target Industry**: Home service businesses (plumbers, HVAC, cleaners, painters, landscapers)
- **Core Value Prop**: After each job, sends automated 5-email sequence: thank you, review request, check-in, rebooking reminder, referral request. Add a customer once; it handles the rest.
- **Gap/Opportunity**: The problem is real and validated — service businesses are terrible at follow-up. CraftBoop is early with minimal traction. The gap is: (1) SMS/text sequences, not just email (service businesses communicate via text); (2) integration with field service software (Jobber, ServiceTitan, Housecall Pro) so customers are auto-added; (3) review platform targeting (Google vs. Yelp vs. Facebook based on business type). Current tool is too manual — requires manually adding each customer.
- **Our Angle**: "Review & rebooking automation for field service software users" — build a Zapier-style integration layer that auto-pulls completed jobs from Jobber/Housecall Pro/ServiceTitan and triggers review + rebooking sequences. Differentiator: works via SMS (not email) and has a Jobber/HCP native integration. Price at $49-99/month. This is a workflow tool, not standalone software.
- **LTD Potential**: 5/5 — Perfect AppSumo fit. Clear ROI story ("one rebooking pays for the tool"). Broad service business market.

---

## Clawbolt – AI Assistant for Contractors (Mozilla.ai / HN Discussion)

- **Source**: https://news.ycombinator.com/item?id=47545485
- **Additional Links**: https://github.com/mozilla-ai/clawbolt
- **Platform**: Hacker News
- **Type**: HN discussion / Product launch
- **Engagement**: HN thread with active discussion; open source on GitHub
- **Revenue Data**: Open source / Mozilla project — no direct revenue, but validates the market
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople and contractors (general contractors, plumbers, electricians)
- **Core Value Prop**: AI assistant that lives in messaging apps (WhatsApp/SMS), connects to QuickBooks and Google Calendar, proactively follows up on unpaid invoices, flags material cost changes — built for people in trades who spend evenings chasing admin instead of being with family.
- **Gap/Opportunity**: HN comment: "As a contractor, I have to manage tax, invoices, reconciliation, payroll, accountant emails." The pattern is correct — trades people use phones, not desktops; they want proactive not reactive. Gap: Clawbolt is open source with no business model. A polished, mobile-native version with direct QuickBooks/Wave integration, invoice chasing automation, and a clear $29-49/month subscription is the opportunity.
- **Our Angle**: "Invoice chasing and cash flow assistant for trades" — a lightweight mobile app that connects to QuickBooks/Wave, automatically follows up on overdue invoices via SMS from the contractor's number, generates payment links, and shows a simple "cash due this week" dashboard. Trades-specific language (call it "job payment tracker" not "accounts receivable"). AppSumo LTD story: "Never chase a payment again."
- **LTD Potential**: 5/5 — Cash flow pain is universal in trades. High willingness to pay. Very clear ROI.

---

## ClientPing – Mobile Job Management for Active Tradespeople (IH Build-in-Public)

- **Source**: https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Build-in-public / founder story
- **Engagement**: IH post, August 2026; active builder
- **Revenue Data**: Early stage, bootstrapped; subscription billing added, no MRR disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Mobile tradespeople (plumbers, HVAC techs, electricians, painters)
- **Core Value Prop**: Mobile-first job management with one-tap SMS updates ("On my way", "Running late", "Job complete"), offline-first support (works in basements/parkades), simple client booking link for social media, searchable client directory. Specifically NOT enterprise — targeted at solo and small crews.
- **Gap/Opportunity**: Founder's key insight: "Getting someone to change how they already run their business is a completely different challenge." The tool is right but distribution is hard. Gap: most tradespeople already use Jobber ($50+/month) for scheduling but hate paying that much as a solo operator. A $9-19/month "just SMS updates and job tracking" tool for the solo tradesperson who doesn't need estimating or invoicing could carve out a niche.
- **Our Angle**: Build the absolute minimum viable version: job list + one-tap customer SMS updates + simple invoice PDF. Mobile-only. $9/month or $149 LTD. Distribute via Facebook groups for tradespeople and local trade association partnerships. The simplicity IS the differentiator vs. Jobber/Housecall Pro's complexity.
- **LTD Potential**: 5/5 — Perfect LTD product: simple, clear use case, no ongoing infrastructure cost. Tradespeople will pay once to avoid subscription.

---

## Prelay – Weather-Based Work Planning for Outdoor Contractors (Show HN)

- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: Hacker News
- **Type**: Show HN
- **Engagement**: 2 points (very recent / new post)
- **Revenue Data**: Just launched (new Show HN); no revenue data
- **Boring Business Score**: 4/5
- **Target Industry**: Outdoor contractors (landscaping, roofing, concrete, paving, exterior painting)
- **Core Value Prop**: Monitors contractor's full job schedule, determines weather suitability for 62 activities across 12 trades using ensemble weather models and a custom ground-wetness model. Sends notifications so dispatchers can reschedule before 6am (after which they must pay crews even if they can't work).
- **Gap/Opportunity**: The 4am wake-up problem is real and validated — owner quoted as "waking up at 4am every day." Current tool covers weather monitoring. Gap: the tool needs to become a **dispatch recommendation engine** — not just "35% chance of rain" but "automatically reschedule Job #47 and send customer text." Integration with existing scheduling tools (Jobber, Yardbook) would multiply the value. The notification feature is good but the action loop (reschedule + customer notification) is missing.
- **Our Angle**: "Automated weather-aware job rescheduling" — build on top of weather APIs but focus on the action: automatically reschedule jobs, send customer notifications ("Due to weather, your landscaping appointment has moved to Thursday"), and update crew schedules. Distribute to landscaping and roofing Facebook groups. Price: $49-99/month per company. LTD: $299 single location.
- **LTD Potential**: 4/5 — Very clear ROI (one avoided payroll mistake = $500+). Seasonal businesses have high willingness to pay.

---

## Terusama (YC W20) – Truck Appointment System for Warehouses (69 upvotes)

- **Source**: https://news.ycombinator.com/item?id=22550539
- **Additional Links**: https://www.terusama.com
- **Platform**: Hacker News
- **Type**: Launch HN (YC-backed)
- **Engagement**: 69 upvotes, 26 comments
- **Revenue Data**: YC W20 — B2B SaaS for warehouses; no specific MRR disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Warehouses, distribution centers, trucking/logistics
- **Core Value Prop**: Automates truck appointment scheduling at warehouses — eliminates phone/email coordination between trucking companies and warehouse receiving teams. Reduces truck driver wait times (legally limited to 11 driving hours/day, currently losing 3-4 at warehouses).
- **Gap/Opportunity**: Terusama targets large warehouses (enterprise). The gap is in **small and mid-size distribution** — regional distributors, food service distributors, building material suppliers (100-500 deliveries/week) who use spreadsheets or whiteboards for dock scheduling. These businesses have dispatchers coordinating everything manually. A simple $299-499/month dock scheduling tool for regional operators would address a massive underserved segment.
- **Our Angle**: "Dock scheduling for regional distributors" — a simple web app where inbound trucks can self-schedule appointments (like Calendly for docks), dispatchers see real-time availability, and drivers get SMS confirmations with arrival instructions. No enterprise sales cycle. Self-serve onboarding. Distribute via trucking industry forums and regional logistics associations.
- **LTD Potential**: 2/5 — B2B logistics tools are harder to LTD; subscription model more natural. But a "single warehouse" LTD at $499-699 is viable.

---

## InstaBid Solo – Instant Quote Wizard for Service Contractors (IH Launch)

- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Product launch / build-in-public
- **Engagement**: IH post, July 2026; solo build, 5 months of nights and weekends
- **Revenue Data**: Just launched ($0); solo build
- **Boring Business Score**: 4/5
- **Target Industry**: Home service contractors (pressure washing, cleaning, painting, landscaping)
- **Core Value Prop**: Customer-facing quote wizard — customer answers questions, gets transparent price estimate in under 60 seconds, lands as qualified lead in contractor's inbox. Captures partial leads even from people who abandon mid-wizard. White-labeled to contractor's brand. Full conversion analytics (what price ranges close best, where funnel drops off).
- **Gap/Opportunity**: The problem is validated — service contractor websites have generic contact forms with 2-3 day response times, losing leads to competitors who quote faster. InstaBid is early and solo-built. Gap: integration with scheduling (book immediately after quote acceptance) and CRM sync (HubSpot, Jobber). The analytics angle (price sensitivity data per zip code) is genuinely differentiated.
- **Our Angle**: Build a focused "instant quote + book" widget for a single vertical (e.g., pressure washing only) with pre-built pricing models for common jobs. Distribute to pressure washing Facebook groups. Price: $39-59/month. The key insight: going 1 vertical deep (pressure washing) allows pre-built pricing logic that removes setup friction entirely — contractor just enters their zip code and hourly rate.
- **LTD Potential**: 5/5 — Classic AppSumo fit. Clear ROI ("capture leads you're currently losing"). Easy to understand value prop.

---

## Splshly – Pool Service Business Management (IH Launch, Nov 2025)

- **Source**: https://www.indiehackers.com/post/splshly-launches-to-revolutionize-pool-service-management-gJFffK5K7vReebMTpsQJ
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Product launch announcement
- **Engagement**: IH post, November 2025; very early stage
- **Revenue Data**: Just launched ($0 revenue disclosed)
- **Boring Business Score**: 5/5
- **Target Industry**: Pool service businesses (route-based recurring service)
- **Core Value Prop**: Scheduling, job tracking, chemical readings management, client management, invoicing, and reporting all in one platform for pool service businesses. Specifically includes chemical readings — this is a pool-specific feature that generic field service tools don't handle.
- **Gap/Opportunity**: Pool service is a classic sweaty startup SaaS vertical: recurring revenue (weekly/monthly routes), route-optimized, requires chemical compliance logging (state regulations in FL, CA, TX require records), and customer communication for water quality issues. The chemical readings feature is the differentiated wedge — no generic FSM tool tracks pH, chlorine, alkalinity by pool over time. Pool service companies need this for liability protection.
- **Our Angle**: Double down on the chemical compliance angle: "Pool chemical log and compliance tracker" — build the mobile app that pool techs use on-route to log chemical readings with one tap, auto-generate weekly customer reports ("Your pool chemistry this week"), and flag compliance issues. Add automatic customer notifications when chemistry is out of range. This is the specific painful workflow no generic tool addresses. Price: $49-79/month per route operator.
- **LTD Potential**: 4/5 — Pool service SaaS has strong AppSumo precedent. Seasonal businesses buy LTDs before busy season.

---

## WorkPhotos – Job Photo Recording for Trades (Show HN, 33 upvotes)

- **Source**: https://news.ycombinator.com/item?id=37144027
- **Additional Links**: https://www.workphotos.com
- **Platform**: Hacker News
- **Type**: Show HN
- **Engagement**: 33 upvotes, 11 comments
- **Revenue Data**: Available in AU, CA, NZ, ZA, UK, US; no revenue disclosed
- **Boring Business Score**: 4/5
- **Target Industry**: Trades (construction, electrical, plumbing, HVAC field service)
- **Core Value Prop**: Mobile-first job recording — take and share job photos without cluttering personal photo gallery. Customer receives read-only share link (no account required). Simple job report generation for customer billing disputes and documentation.
- **Gap/Opportunity**: The core pain is real — tradespeople document everything on personal phones and can't easily share job reports with customers. WorkPhotos is focused on photo sharing. Gap: **before/after photo comparison** (customer approval workflows before work begins + after completion sign-off), integration with invoicing (photo evidence attached to invoice line items), and automated warranty documentation for installed equipment.
- **Our Angle**: "Job documentation and customer sign-off tool for trades" — combine before/after photos with customer digital sign-off on scope of work. Customer receives SMS link, reviews photos, digitally approves scope/completion. This protects the contractor from disputes and gives customers a professional experience. Integrate with common invoicing tools. Price: $29-49/month. LTD: $149-199.
- **LTD Potential**: 4/5 — Very clear use case, no recurring cost per job, good AppSumo story ("protect yourself from disputes").

---

## Key Market Signals Summary

**Strongest opportunities identified:**

1. **Trades invoice chasing / cash flow** — Clawbolt/Mozilla validated the pain; no good SMS-native tool exists. High LTD potential.
2. **Service business review + rebooking automation** — CraftBoop is early and manual; building on top of Jobber/HCP API is the gap. Perfect AppSumo product.
3. **Pool service chemical compliance logging** — Splshly is new but misses the specific mobile-logging-on-route workflow that is the real pain.
4. **Small landlord maintenance coordination** — Latchel ignores sub-50 unit landlords; $49/month flat-fee tool for 1-5 unit landlords is completely unserved.
5. **Weather-triggered job rescheduling** — Prelay has the data layer; the action layer (auto-reschedule + customer SMS) is the missing piece.

**Validated revenue in boring niches:**
- Maid service SaaS (ZenMaid): $3M/yr bootstrapped
- HVAC vertical SaaS (Breezy): $250K ARR in 9 months
- Generic niche boring SaaS (from IH): $9,747 MRR documented
