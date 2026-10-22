# HN & Indie Hackers Research — 2026-10-22

**Focus:** Boring business SaaS — trades, local services, field service, healthcare admin, industrial ops
**Sources scanned:** Hacker News (Show HN, Ask HN), Indie Hackers (products, milestones, discussions)

---

## Zirco.ai — AI Employee for Dental Front Desk
- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 3 comments
- **Revenue Data**: Beta stage, 30+ dental practices interviewed
- **Boring Business Score**: 5
- **Target Industry**: Dental practices
- **Core Value Prop**: AI that automates the full front desk workflow — insurance verification (2–3 hrs/day manually across 10+ carrier portals), inbound scheduling calls (voice AI via Vapi), appointment booking into Dentrix/Open Dental/Eaglesoft, SMS/email reminders, referral coordination. Front desk staff costs $40–50K/year and turns over at 40% annually.
- **Gap/Opportunity**: Insurance verification is still largely manual browser automation across fragmented portals. Playwright for portals without APIs, Availity for rest. No well-funded indie winner yet in this exact workflow. HIPAA compliance is a moat. Founder has spoken to 30+ practices — strong discovery signal.
- **Our Angle**: Narrow to insurance verification-only first (the 2–3 hr daily pain), prove ROI, upsell scheduling/reminders. Lower compliance risk than full phone AI. LTD not ideal given HIPAA complexity — but $200–400/mo recurring per practice is very achievable.
- **LTD Potential**: 2 (HIPAA complexity makes LTD harder, but vertical SaaS potential is very high)

---

## Rainslice.ai — Autonomous Home Services Businesses
- **Source**: https://news.ycombinator.com/item?id=48769010
- **Additional Links**: https://rainslice.ai
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, 2 comments
- **Revenue Data**: Running entirety of 3 cleaning companies in California
- **Boring Business Score**: 5
- **Target Industry**: Home services (cleaning, landscaping, HVAC, etc.)
- **Core Value Prop**: AI that runs an entire home services business 24/7 — handles inbound calls and SMS, creates quotes, dispatches workers, runs ads, follows up with leads, handles customer support.
- **Gap/Opportunity**: They're targeting the full-stack "AI operator" angle (replaces the whole back-office), but 3 companies is minimal validation. More interesting is the modular opportunity: most contractors just need a piece of this (quote → dispatch → follow-up). CraftBoop is attacking follow-ups, InstaBid is attacking instant quotes — nobody owns the full loop affordably.
- **Our Angle**: An affordable "AI back office" for 1–5 person cleaning/landscaping/HVAC companies that replaces the owner's phone. Bundle: missed call → SMS auto-quote → job scheduling → post-job review request. Under $50/mo.
- **LTD Potential**: 4

---

## CraftBoop — Automated Post-Job Follow-Up for Service Businesses
- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post
- **Engagement**: Small, early community thread
- **Revenue Data**: $29/mo, just launched April 2026, few users
- **Boring Business Score**: 5
- **Target Industry**: Service businesses (plumbers, HVAC, cleaners, painters, landscapers)
- **Core Value Prop**: After each job, sends automated 5-email sequence: thank-you → Google review request → check-in → rebooking reminder → referral request. Trades businesses do great work but never follow up — it's all manual or never happens.
- **Gap/Opportunity**: Problem is extremely validated. Every service business loses repeat revenue and reviews simply from not following up. At $29/mo this is priced for the market. Current product is email-only — SMS is more effective for trades (low email open rates). Integration with job management software (Jobber, ServiceTitan, Housecall Pro) would unlock viral growth via existing user bases.
- **Our Angle**: Add SMS sequences (not just email), build a Jobber/Housecall Pro integration so it auto-triggers on job completion. Price at $49/mo. The differentiation is SMS + native integration vs. manual email setup.
- **LTD Potential**: 5

---

## InstaBid Solo — Instant Quote Wizard for Service Contractors
- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Launch post
- **Engagement**: Early community post, July 2026
- **Revenue Data**: No revenue data shared yet
- **Boring Business Score**: 4
- **Target Industry**: Service contractors (pressure washing, home services, landscaping)
- **Core Value Prop**: Replaces generic contact forms with an instant-quote wizard. Customer answers questions, gets a price estimate in <60 seconds, lands as a qualified lead. Even if they bail mid-wizard, InstaBid captures partial info for follow-up. Multi-tenant white-label platform.
- **Gap/Opportunity**: Generic contact forms are a massive conversion leak for every home services website. "Customer fills out a form, waits days for a quote, moves on" — this is universal. Solo-built in 5 months (React + Node + Postgres). No revenue reported yet but the problem signal is strong. The multi-tenant angle makes this a platform play (agency/software partner distribution).
- **Our Angle**: Target Jobber/ServiceTitan users who lack instant quoting on their site. Build an embeddable widget (not a full platform) — lower implementation friction. Add AI price estimation based on zip code and job type averages.
- **LTD Potential**: 4

---

## BlastoClean — Quoting & Scheduling Software for Cleaning Companies
- **Source**: https://www.indiehackers.com/product/blastoclean
- **Additional Links**: https://www.blastoclean.com, https://www.indiehackers.com/post/my-ih-launch-post-blew-up-heres-what-i-built-from-the-comments-a1cbb026a3
- **Platform**: Indie Hackers
- **Type**: Product launch + follow-up
- **Engagement**: Oct 2026 launch; follow-up post got 100+ comments
- **Revenue Data**: $0 so far (just launched Oct 1, 2026); founder also runs PHP Point of Sale (profitable existing product)
- **Boring Business Score**: 5
- **Target Industry**: Cleaning companies (residential + commercial)
- **Core Value Prop**: Price every cleaning job from actual task times and your hourly rate — not guessing, not old Word docs. Scheduling, invoices, and payments in one place. Founder doing manual onboarding for first 10 customers (calls, sets up rooms/tasks/rates himself).
- **Gap/Opportunity**: The niche is validated — Onedesk (commercial cleaning SaaS) hit $100K+ MRR. The IH community gave 100+ comments pointing to real product gaps: late-cancellation fees, open-slot backfilling when jobs cancel, W-2 vs 1099 labor cost modeling, quoted vs actual time tracking. Chris is building these in. The setup friction is the main barrier — cleaning companies are not tech-savvy.
- **Our Angle**: Lean into "done-for-you setup" as the product — charge for onboarding, then $0 or low MRR. Or build a simpler version with one-click setup (pre-built room/task templates by business type) and undercut on price.
- **LTD Potential**: 5

---

## Trier OS — QR-Scan Work Order System for Industrial Maintenance
- **Source**: https://news.ycombinator.com/item?id=47748743
- **Additional Links**: https://github.com/DougTrier/trier-os
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, open source
- **Revenue Data**: Open source project, v3.4.0
- **Boring Business Score**: 5
- **Target Industry**: Plant/factory/industrial environments (maintenance technicians)
- **Core Value Prop**: Technician scans a QR code on a machine → work order starts instantly. No typing, no navigation. Zero-keyboard workflow for environments where connectivity is poor and speed matters more than UI. Offline-first PWA with local DB sync. Alternative to complex CMMS/EAM systems that require multiple clicks to begin work.
- **Gap/Opportunity**: Most CMMS/EAM systems are priced for enterprise ($500-5000+/mo) or are open source but complex to deploy. The "scan to start" UX for field technicians is genuinely underserved. With ~600 Playwright tests, this is more serious than typical indie Show HN. A SaaS version at $50-200/mo per plant could find buyers among small manufacturers and food processing facilities.
- **Our Angle**: Wrap this open-source project into a hosted SaaS (no self-hosting required), add QR code generation/printing for asset tagging, and sell to 50-500 employee manufacturers. The open-source credibility reduces sales friction.
- **LTD Potential**: 3 (enterprise buyers resist LTDs; but small manufacturers could work for AppSumo)

---

## HandyPay — Deposit & No-Show Prevention for Service Businesses
- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: https://handypay.me
- **Platform**: Indie Hackers
- **Type**: Revenue milestone post
- **Engagement**: Community post, Jan 2026
- **Revenue Data**: $1k MRR in <60 days (Jan 2026)
- **Boring Business Score**: 4
- **Target Industry**: Service businesses (spas, salons, personal care, and adjacent trades)
- **Core Value Prop**: Simple way for service businesses to collect deposits and reduce no-shows. No ads, no funnels — founder went directly to businesses in person, WhatsApp, referrals. One clear use case: get paid fast and reduce no-shows.
- **Gap/Opportunity**: No-shows are a massive hidden cost for every appointment-based business. The validation story is clean: $1k MRR in 60 days via direct sales, no marketing. The go-to-market insight ("features mattered less than trust; clarity beat complexity; proximity to customer beat optimization") is a distribution playbook, not just a product insight.
- **Our Angle**: Expand to plumbing/HVAC/landscaping (which use Jobber/Housecall Pro, not Square). Build a Jobber integration — when a job is scheduled, automatically send a deposit request. Reduce the mental overhead of "is this customer going to show up?" for contractors.
- **LTD Potential**: 4

---

## Documentorium / "No-BS Quote Tool for Tradespeople"
- **Source**: https://news.ycombinator.com/item?id=47540841
- **Additional Links**: https://documentorium.com
- **Platform**: HN
- **Type**: Ask HN (looking for tradesperson feedback)
- **Engagement**: 4 points, 2 comments
- **Revenue Data**: "Hundreds of paying users" in another country market, "almost all renewed their yearly"
- **Boring Business Score**: 5
- **Target Industry**: Tradespeople (plumbers, electricians, carpenters, 0–5 employees)
- **Core Value Prop**: Document engine for trades to create estimates/quotes/contracts as PDFs, fast. No-bullshit: single-purpose, no bloat, cheaper than anything else (yearly price "too small to matter as a yearly cost").
- **Gap/Opportunity**: A tradesman HN commenter confirmed the real gap: "no bullshit tools for this market (0-5 employees) are missing, or expensive/monthly/per user." The existing validation (hundreds of paying users, near-100% renewal) from another country is the strongest signal here. The opportunity is replicating this in the US/UK market, possibly per-trade (plumber-only templates, electrician-only templates) to avoid the generic template problem.
- **Our Angle**: Build a per-trade version with industry-specific templates pre-loaded (e.g., "PlumbQuote" — estimates only for plumbers). One-time fee ($49-79 LTD), no monthly billing. Plumbers don't want subscriptions. AppSumo audience overlap is real.
- **LTD Potential**: 5

---

## Industry Signal: HVAC/Plumbing as "Marketing Companies"
- **Source**: https://news.ycombinator.com/item?id=48292941 (parent: "Private equity bought America's essential services")
- **Additional Links**: https://news.ycombinator.com/item?id=48297652 (specific comment)
- **Platform**: HN
- **Type**: Discussion thread (PE roll-ups of home services)
- **Engagement**: Parent thread — significant engagement
- **Revenue Data**: N/A
- **Boring Business Score**: 5
- **Target Industry**: HVAC, plumbing, electrical
- **Core Value Prop**: N/A (industry signal)
- **Gap/Opportunity**: Key insight from thread: "large HVAC/plumbing/electrical firms do not run HVAC — they run marketing companies that happen to schedule and bill service appointments." AND: "I've never encountered a single services company in the US that can't find business — they're trying not to drown in front of a fire hose." This confirms the bottleneck is operations/admin, not customer demand. PE roll-ups are happening because small operators can't scale. Software that helps small operators scale their ops (scheduling, dispatch, quoting) is the wedge that prevents PE acquisition.
- **Our Angle**: The "owner-operator who can't answer the phone fast enough" is the core persona. Any tool that helps a 2-person HVAC company respond faster to leads converts. Missed call → auto-text back with booking link = $200/mo obvious value.
- **LTD Potential**: N/A (this is a market signal, not a product)

---

## Agentic CRM for Field Tradespeople (Maintenance Gardener Use Case)
- **Source**: https://news.ycombinator.com/item?id=47784724
- **Platform**: HN
- **Type**: Comment (Ask HN: Who is using OpenClaw?)
- **Engagement**: Part of a larger thread
- **Revenue Data**: N/A (individual user case study)
- **Boring Business Score**: 4
- **Target Industry**: Solo tradesperson (gardeners, small contractors, landscapers)
- **Core Value Prop**: A maintenance gardener built an agentic workflow using Claude + MCPs: watches Gmail for work orders from real estate agents, auto-schedules quote visits, analyzes job photos, auto-generates 14–32 page PDF proposals with scope/pricing/T&Cs, creates Xero invoices — all triggered from Telegram. Proposals now take 20 minutes vs hours. High conversion rate due to professional output.
- **Gap/Opportunity**: This is a solo builder's DIY system. The underlying need — professional quoting + CRM + invoicing with minimal effort for solo tradespeople — is enormous. No one has productized this for non-technical tradespeople. The key insight: real estate agents love professional proposals because it helps them "sell" the service to their clients.
- **Our Angle**: Build "TradiePro" — AI-assisted proposal + CRM for solo gardeners, landscapers, property maintenance contractors. Upload photos → AI generates scope + price → PDF proposal out → auto-schedule follow-up. Real estate agent distribution channel (each agent has 20+ maintenance contractors they manage). $49/mo or $299 LTD.
- **LTD Potential**: 5

---

## Recurring Themes & Industry Gaps

### Strongest Opportunities (highest signal, clearest gap)

1. **Trades/service follow-up automation (reviews + rebooking + referrals)** — CraftBoop is early, $29/mo, email-only. SMS + Jobber integration = better product. Millions of service businesses underserved.

2. **Per-trade quoting tools with LTD pricing** — Documentorium validated hundreds of paying users at yearly price points. US market untapped. Plumber-specific, HVAC-specific, electrician-specific = LTD-friendly niche products.

3. **Dental insurance verification automation** — Zirco.ai in beta, 30+ discovery interviews done. $40–50K/year front desk replacement value. HIPAA moat. Narrow to verification-only first.

4. **Missed-call → auto-quote for HVAC/plumbing/landscaping** — Industry is drowning in demand, can't answer phones. Simple SMS automation when owner misses a call. $100–200/mo, massive willingness to pay because it pays for itself with one job recovered.

5. **Cleaning company quoting/scheduling** — BlastoClean just launched with good community traction, $0 revenue. Market validated by Onedesk ($100K+ MRR). Product gap: simpler self-serve onboarding, task-time based pricing.

### Key Pricing/Go-To-Market Insights
- Yearly or one-time pricing beats monthly for trades (Documentorium: "price too small to matter as a yearly cost")
- Direct sales in-person/WhatsApp beats content for early traction (HandyPay: $1k MRR in 60 days)
- Professional output quality (nice PDFs/proposals) is a surprise differentiator — real estate agents and commercial clients notice
- Setup friction is the #1 barrier: first customers need hand-holding, not self-serve (BlastoClean doing manual setup calls)
- PE roll-ups of HVAC/plumbing/cleaning = market consolidating, small operators becoming acquisition targets → they need software to compete
