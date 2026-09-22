# HN & Indie Hackers Research — 2026-09-22

> Focus: Boring business SaaS — trades, field services, local businesses, vertical markets. Deprioritized: AI writing, productivity, social.

---

## Zirco.ai — AI Employee for Dental Front Desk

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 3 comments (very early/low visibility)
- **Revenue Data**: None — beta stage, 30+ discovery conversations
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices
- **Core Value Prop**: AI handles full dental front desk workflow — insurance verification via carrier portals (Playwright automation for non-API portals, Availity for the rest), inbound call scheduling via voice AI (Vapi), SMS/email reminders, new patient intake — all HIPAA compliant. One front desk employee costs $40–50K/yr and churns at 40% annually.
- **Gap/Opportunity**: Insurance verification is 2–3 hrs/day of pure manual labor. The founder says 10+ different carrier portals, each with different session handling. Existing tools either don't integrate with Dentrix/OpenDental/Eaglesoft or don't touch insurance verification at all. The HIPAA compliance + multi-tenant architecture is genuinely hard.
- **Our Angle**: Insurance verification automation as a standalone product (not full AI employee) would be easier to sell — one specific pain point, immediate ROI calculation (saves 2–3 hrs/day at $25/hr = ~$1,500/month saved, worth $200–400/mo SaaS). Could start with one major carrier portal and expand.
- **LTD Potential**: 2/5 (HIPAA compliance and ongoing carrier portal maintenance make one-time sale harder)

---

## Conkoa AI — Voice-First Communication for Construction Trades

- **Source**: https://news.ycombinator.com/item?id=47325824
- **Additional Links**: https://conkoa.ai
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, 1 comment (low)
- **Revenue Data**: Live with "dozens of companies" — no MRR disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Construction trades (general contractors, subcontractors, field crews)
- **Core Value Prop**: Voice-first Slack alternative for construction. Field workers on a roof/scaffold/truck can say "three workers on Level 3 for eight hours at Green Cedar project" and it auto-enters into Procore. Auto-transcribes and translates (Spanish ↔ English). Teams upload photos/docs for RAG-based AI answers. Procore integration live.
- **Gap/Opportunity**: Founder built health & safety SaaS acquired in 2022 — construction clients never adopted Slack because typing doesn't work in the field. The real gap is that Procore/etc. are desktop-centric; field crew communication still happens via group texts. No product nails voice-to-system-of-record for physical trades workers.
- **Our Angle**: Narrower wedge — voice-to-invoice for solo HVAC/plumbing techs driving between jobs. Single-user, no team coordination needed. Could work with any invoicing tool via voice dictation.
- **LTD Potential**: 3/5

---

## FieldLedgr — Free Field Service Software for Tradespeople

- **Source**: https://news.ycombinator.com/item?id=47668698
- **Additional Links**: https://www.fieldledgr.com/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 0 comments (minimal traction on HN)
- **Revenue Data**: Free product — no revenue disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Tradespeople (electricians, plumbers, HVAC)
- **Core Value Prop**: Free field service management — jobs, scheduling, invoicing for tradespeople who find Jobber/Housecall Pro too expensive or complex.
- **Gap/Opportunity**: The "free tier for solo contractors" space is crowded with low-quality tools. The real gap is that most free tools have terrible mobile UX and don't work offline. Tradespeople on a job site with spotty signal need something that just works.
- **Our Angle**: The free-to-paid conversion model is hard to sustain. A better angle might be a $10–15/mo "stupid simple" tool that targets the 70% of solo tradespeople still on paper/WhatsApp who never adopted any software. Entry via referral from accountants who do their books.
- **LTD Potential**: 4/5

---

## InspectMind (YC W24) — AI Plan Checker for Construction Drawings

- **Source**: https://news.ycombinator.com/item?id=46219386
- **Additional Links**: https://www.inspectmind.ai/
- **Platform**: HN
- **Type**: Launch HN (YC W24)
- **Engagement**: YC-backed, significant comments thread
- **Revenue Data**: Not disclosed — enterprise sales, charged per project not % of construction cost
- **Boring Business Score**: 4/5
- **Target Industry**: Architecture, engineering, GC pre-construction, real estate developers
- **Core Value Prop**: Reviews full construction drawing sets (PDF upload) in minutes — catches dimension conflicts, coordination gaps, missing callouts, code violations before construction starts. Saves hundreds of thousands in rework.
- **Gap/Opportunity**: Well-funded (YC) and technically sophisticated. Hard to compete directly. But the same "AI reads industry-specific documents for errors" approach could apply to: electrical permits, plumbing inspection reports, fire safety documentation — all currently reviewed manually by humans.
- **Our Angle**: Don't compete with InspectMind. Study the model: AI reading boring industry PDFs to catch errors has huge value. Apply to adjacent boring document-heavy niches: roofing inspection reports, property condition assessments, HVAC commissioning reports.
- **LTD Potential**: 2/5 (enterprise market, not LTD friendly)

---

## Craftplan — Production Management for Micro-Bakeries / Small Batch Manufacturers

- **Source**: https://news.ycombinator.com/item?id=46847690
- **Additional Links**: Open source on GitHub
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: High engagement — long comment thread praising the approach
- **Revenue Data**: Open source / free — built for personal use
- **Boring Business Score**: 4/5
- **Target Industry**: Micro-bakeries, small-batch food manufacturers, cottage food producers
- **Core Value Prop**: Handles recipes (versioned BOMs with cost rollups), inventory (lot traceability, demand forecasting, allergen tracking), orders, production batch planning, and purchasing. Built with Elixir/Ash/Phoenix.
- **Gap/Opportunity**: Strong HN validation that small-batch food producers are underserved — they're either using spreadsheets or paying for generic ERP that's overkill. Multiple commenters said they have a wife/friend/family member in exactly this situation. The allergen tracking + cost rollup is the killer feature that generic tools miss.
- **Our Angle**: Turn Craftplan into a paid SaaS. The market is cottage food producers and micro-manufacturers who need food-specific workflows (allergen tracking is a legal requirement, not a nice-to-have). Pricing could be $29–49/mo. Reach them via cottage food Facebook groups, food safety certification forums, local farmers markets.
- **LTD Potential**: 4/5

---

## Rentman — Operations Platform for AV/Event Rental Industry

- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Platform**: Indie Hackers
- **Type**: Revenue milestone interview
- **Engagement**: Featured interview
- **Revenue Data**: $15M–$20M ARR, bootstrapped
- **Boring Business Score**: 5/5
- **Target Industry**: AV rental, event production, lighting, staging, broadcast, film — anywhere gear + people need to show up at the right time
- **Core Value Prop**: One system for equipment rental inventory, crew scheduling, quoting, logistics, and invoicing for production companies. Founder ran his own AV company at 16, felt the pain firsthand.
- **Gap/Opportunity**: Validated that the "industry-specific vertical ERP" model works enormously well. $15-20M ARR bootstrapped is a massive outcome. The template is: find an industry running on spreadsheets + random software, build a workflow-native tool, own the niche. Adjacent opportunities: party rental companies, tool rental shops, construction equipment rental.
- **Our Angle**: The Rentman playbook — pick a physical equipment rental niche with no good software, build the vertical. Tool rental shops (drills, saws, pressure washers) and party supply rental companies are 2 underserved verticals with similar needs (inventory + customer + invoicing).
- **LTD Potential**: 3/5 (vertical ERP = subscription business, not LTD)

---

## Verito Technologies — Cloud Hosting Exclusively for Tax/Accounting Firms

- **Source**: https://www.indiehackers.com/post/how-we-built-a-profitable-paas-by-serving-only-0-4-of-us-businesses-4927bc5f68
- **Platform**: Indie Hackers
- **Type**: Featured interview
- **Engagement**: Featured interview, strong community response
- **Revenue Data**: 1,000+ customers, bootstrapped, profitable, 100% uptime since 2016, 4.9/5 G2 with 150+ reviews
- **Boring Business Score**: 5/5
- **Target Industry**: Tax and accounting firms (CPA firms, tax preparers using specific software like Drake Tax, UltraTax CS)
- **Core Value Prop**: Cloud hosting tuned specifically for tax software — understands UltraTax CS hosting requirements, staffs for tax season spikes, sub-60s support response 24/7. Pricing power because "when you're the only provider who understands UltraTax CS hosting requirements, you don't compete on price."
- **Gap/Opportunity**: The playbook is proven: 0.4% market penetration after 10 years, still profitable and growing. The insight is that vertical cloud/hosting for specific software stacks is a moat. The lesson: "solve the expensive problem, not the common one" — tax software downtime during filing deadlines is catastrophic.
- **Our Angle**: Apply the Verito model to other industry-specific software stacks: dental practice management (Dentrix hosting), legal practice management (Clio/Practice Panther cloud), veterinary practice software hosting. Each is a different niche with dedicated software that IT generalists don't understand.
- **LTD Potential**: 1/5 (infrastructure = subscription, not LTD)

---

## CraftBoop — Automated Post-Job Follow-Ups for Service Businesses

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Platform**: Indie Hackers
- **Type**: Launch post
- **Engagement**: Moderate comments, positive feedback
- **Revenue Data**: Early launch — a few users, $29/mo pricing
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, sends automated 5-email sequence: thank you, review request, check-in, rebooking reminder, referral request. Add customer once, it handles the rest.
- **Gap/Opportunity**: Problem is clearly real and validated — trades businesses do great work but never follow up, leaving Google reviews, rebookings, and referrals on the table. Current solution is manual or nothing. The name "CraftBoop" was flagged by commenters as a trust issue for service business customers. This is very early and the founder is figuring it out.
- **Our Angle**: The follow-up automation for trades is a real gap. We could go deeper: automated review response management + follow-up combined, with SMS (not just email) since tradespeople and their customers both live on SMS. Targeting HVAC specifically where seasonal rebooking (tune-ups) is a huge revenue driver.
- **LTD Potential**: 5/5 (simple automation, easy to sell as LTD)

---

## JobNook — Simple Job Management for Solo Contractors

- **Source**: https://www.indiehackers.com/post/jobnook-a-simple-business-tool-for-trade-contractors-looking-for-beta-feedback-hn5sxlXIzxNZwOoitJCs
- **Additional Links**: https://www.indiehackers.com/product/jobnook
- **Platform**: Indie Hackers
- **Type**: Beta feedback request
- **Engagement**: Very long comment thread — detailed, high-quality community feedback
- **Revenue Data**: $19.99 Starter / $49 Pro — beta stage, looking for 10–15 contractors
- **Boring Business Score**: 5/5
- **Target Industry**: Electricians, plumbers, HVAC techs — solo and small crews
- **Core Value Prop**: Manages customers, jobs, quotes, invoices, online payments without requiring contractors to learn a complicated FSM platform like Jobber or Housecall Pro.
- **Gap/Opportunity**: Positioning as "simple over feature-rich" for contractors still on paper/texts/spreadsheets. The comment thread surfaced key gaps: no multi-user/team access, no "on my way" SMS to clients, no client quote acceptance/signature, no route optimization, no offline mode. The real opportunity is the large number of solo contractors who tried Jobber and bounced because it was too complex.
- **Our Angle**: The IH comment thread is a goldmine of exactly what these users need. The winning formula: mobile-first, works offline, quote + invoice in under 2 mins, one-tap "I'm on my way" SMS. Acquisition via accountants and bookkeepers who already have the contractor relationships.
- **LTD Potential**: 5/5

---

## ClientPing — Mobile-First Job Management + Client Communication for Trades

- **Source**: https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- **Additional Links**: https://www.indiehackers.com/product/clientping
- **Platform**: Indie Hackers
- **Type**: Launch story
- **Engagement**: Comments thread
- **Revenue Data**: Not disclosed — focused on distribution and pricing
- **Boring Business Score**: 5/5
- **Target Industry**: Plumbers, HVAC techs, electricians, painters — active service professionals
- **Core Value Prop**: Everything on one phone — job schedule, client communication, "on my way" updates, works with bad signal. Targeted at the chaos of managing jobs and clients while physically moving between job sites.
- **Gap/Opportunity**: Multiple products launching in the same space (ClientPing, JobNook, FieldLedgr) within months of each other = validated market. None have claimed it yet. The space is fragmented and the winner will be whoever nails distribution, not product. The comment thread confirms: SMS-based customer updates and offline-first functionality are the highest-value features.
- **Our Angle**: Distribution is the only moat here. Reaching solo contractors via Facebook groups for specific trades (HVAC Tech Talk, Electricians group), or partnering with supply houses (Ferguson, Wesco) who already have the contractor relationships.
- **LTD Potential**: 5/5

---

## HandyPay — Deposits & Payment for Spas/Salons/Service Businesses

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Platform**: Indie Hackers
- **Type**: Revenue milestone post
- **Engagement**: Medium comments thread
- **Revenue Data**: $1K MRR in under 60 days via direct outreach (no ads, no funnels)
- **Boring Business Score**: 4/5
- **Target Industry**: Spas, salons, and local service businesses
- **Core Value Prop**: Helps service businesses collect deposits, reduce no-shows, and get paid quickly. Validated via walking into businesses and setting them up on the spot.
- **Gap/Opportunity**: The "get paid fast + reduce no-shows" problem is universal across service industries but HandyPay is focused on spas/salons. The same product repositioned for HVAC contractors (collect deposits on estimates) or cleaning services (recurring billing + no-show protection) could work just as well.
- **Our Angle**: Deposit collection specifically for field service contractors who do estimates. The contractor gives an estimate, customer pays a 25% deposit on the spot from their phone, contractor is committed. Simple: Stripe + invoice link, no complex software.
- **LTD Potential**: 4/5

---

## ZenMaid — Scheduling Software for Maid Services ($3M/yr)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Platform**: Indie Hackers
- **Type**: Founder interview
- **Revenue Data**: $3M/yr ($250K/month), bootstrapped, 11 years old
- **Boring Business Score**: 5/5
- **Target Industry**: Maid/cleaning services worldwide
- **Core Value Prop**: Scheduling software built specifically for maid services — not generic field service management.
- **Gap/Opportunity**: ZenMaid proves the vertical scheduling SaaS model for cleaning works at $3M/yr. What ZenMaid doesn't do: lead generation, route optimization for commercial cleaning, crew performance tracking, chemical inventory management. Commercial cleaning ($100B+ industry per IH post) is an adjacent niche with different needs than residential maid services.
- **Our Angle**: Commercial cleaning operations tool — distinct from residential maid scheduling. Office managers booking commercial cleaners + tracking quality is a different workflow. Route optimization for crews cleaning 10 offices in one night is unsolved.
- **LTD Potential**: 3/5

---

## NexusSEO Studio — Automated SEO Blogging for Local Boring Businesses

- **Source**: https://www.indiehackers.com/post/from-local-plumbers-to-dentists-i-automated-seo-blogging-for-8-niches-with-lovable-roast-my-mvp-0b50a77be1
- **Platform**: Indie Hackers
- **Type**: MVP feedback / roast request
- **Engagement**: Very long comment thread — detailed critical feedback, high engagement
- **Revenue Data**: €49/month — 3 businesses on waiting list, no paying customers yet
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, dentists, lawyers, electricians, restaurants, gyms, accountants, real estate agents
- **Core Value Prop**: Auto-generates SEO WordPress articles for local boring businesses — picks niche + city, posts automatically. Agencies charge €300+/month for this.
- **Gap/Opportunity**: The IH comment thread is a masterclass in why this is hard: articles don't generate calls (gate 3 problem), auto-indexing is unreliable on low-authority domains, local business owners don't trust AI writing under their brand. However, the underlying pain is real — local businesses desperately need to show up on Google Maps.
- **Our Angle**: Instead of blogging, build "local service pages" — not articles but conversion-optimized "Emergency Plumber in [City]" service pages that local businesses can own on their own domain. Different content shape, better funnel position, clearer ROI story.
- **LTD Potential**: 4/5

---

## HVAC Crew Callback Problem — Validated Pain Signal

- **Source**: https://www.indiehackers.com/post/a-two-person-hvac-crew-lost-a-repeat-customer-over-a-callback-nobody-wrote-down-252a30dfc0
- **Additional Links**: https://news.ycombinator.com/item?id=47493339 (related HN thread on busy plumbers)
- **Platform**: Indie Hackers + HN
- **Type**: Discussion / pain point
- **Engagement**: IH thread, HN thread both generated discussion
- **Revenue Data**: N/A — pain point validation
- **Boring Business Score**: 5/5
- **Target Industry**: Small HVAC, plumbing, electrical crews (1–5 people)
- **Core Value Prop**: N/A — this is a gap, not a product
- **Gap/Opportunity**: Two-person HVAC crew loses longtime customer because a callback promise existed only in one person's head. This is the #1 operational failure pattern for micro-trades businesses. The HN thread confirms: plumbers/HVAC techs are "already very busy" — they're not trying to grow, they're trying NOT to drop balls with existing customers. The product need is a dead-simple "I'll call you back" capture that works from a moving truck.
- **Our Angle**: "Missed callback capture" — ultra-simple mobile app: tap to log "promised callback to [customer name] re [topic]." Push reminder 2 hours later. Optional: texts the customer "We'll call you back this afternoon." Could be $10–15/mo, ultra-simple, solves an expensive problem (lost repeat customer = ~$500–2000 average value).
- **LTD Potential**: 5/5

---

## Niche B2B E-Commerce for Industrial Parts (Validated Model)

- **Source**: https://www.indiehackers.com/post/i-left-a-6-year-sales-career-to-sell-automatic-door-parts-online-here-s-why-niche-b2b-e-commerce-beats-saas-8Y0IrnSwiWvUXXQDWNFpG
- **Platform**: Indie Hackers
- **Type**: Founder essay
- **Engagement**: Featured post (2026-09-21)
- **Revenue Data**: Profitable, global, 60%+ repeat purchase rate
- **Boring Business Score**: 5/5
- **Target Industry**: Facilities managers, distributors — automatic door parts
- **Core Value Prop**: Compatible parts for major automatic door brands (Assa Abloy, Geze, etc.) at 30–50% below OEM prices via Shopify. Global shipping. No indie hacker competition because "everyone is building AI tools."
- **Gap/Opportunity**: The essay itself is a blueprint. The model: pick a niche industrial part with absurd brand premium, source compatible alternatives, sell globally via Shopify, win on SEO + technical content. Near-zero competition in niche B2B parts search. Key insight: "The SEO competition for niche B2B industrial parts is almost nonexistent."
- **Our Angle**: Identify 3 adjacent industrial parts niches using the same playbook: commercial dishwasher parts, restaurant equipment parts, elevator components, HVAC commercial equipment parts. Each has an absurd OEM markup and facilities managers who need reliable supply chains.
- **LTD Potential**: N/A (e-commerce, not SaaS)

---

## Propify (YC W23) — API Aggregator for Property Management Systems

- **Source**: https://news.ycombinator.com/item?id=35170955
- **Additional Links**: https://getpropify.com
- **Platform**: HN
- **Type**: Launch HN (YC W23)
- **Engagement**: YC-backed, solid comments thread
- **Revenue Data**: Not disclosed
- **Boring Business Score**: 5/5
- **Target Industry**: Property technology companies building on top of residential PMSs (Yardi, AppFolio, Entrata, etc.)
- **Core Value Prop**: Single modern REST API aggregating multiple archaic PMS APIs — like Merge.dev or Plaid for real estate. Handles 503 errors, bad SOAP APIs, missing documentation, so PropTech companies don't have to.
- **Gap/Opportunity**: Property management software is notoriously old and poorly integrated. This is a "developer infrastructure for boring industries" play. Validated by YC. The pattern — API abstraction layer for an industry running on legacy SOAP/XML — applies to other boring verticals: insurance carrier APIs (dental insurance), state licensing board data, municipal permit systems.
- **Our Angle**: The insurance carrier API abstraction angle (referenced in Zirco.ai thread) is a direct opportunity. Dental/medical practices need to verify benefits across 10+ different carrier portals. An "insurance verification API" that abstracts all of them would serve dozens of dental software companies and vertical AI startups.
- **LTD Potential**: 1/5 (infrastructure = subscription)

---

## Broader Market Signal: Solo Contractor Software Still Massively Underserved

- **Source**: Multiple threads — JobNook, ClientPing, FieldLedgr, CraftBoop all launched within weeks of each other in 2026
- **Additional Links**:
  - https://www.indiehackers.com/post/jobnook-a-simple-business-tool-for-trade-contractors-looking-for-beta-feedback-hn5sxlXIzxNZwOoitJCs
  - https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
  - https://news.ycombinator.com/item?id=47668698
- **Platform**: Indie Hackers + HN
- **Type**: Market pattern
- **Engagement**: Combined 200+ comments across threads
- **Revenue Data**: All pre-revenue or very early
- **Boring Business Score**: 5/5
- **Target Industry**: Solo/micro trades contractors (electricians, plumbers, HVAC, painters)
- **Core Value Prop**: Multiple founders independently reaching the same conclusion: Jobber and Housecall Pro are too complex for solo operators, but nothing simple and affordable exists that's good enough.
- **Gap/Opportunity**: The repeated clustering of new entrants signals that the market knows the gap exists but nobody has definitively won it yet. The common feedback across all threads: needs to work offline, needs SMS-first not email, needs to generate a quote in under 2 minutes. Distribution (not product) is the moat — whoever figures out how to reach solo contractors at scale wins.
- **Our Angle**: Win on distribution, not features. Partners: trade supply houses (they see every contractor), trade school programs, accounting software for contractors (Wave, FreshBooks). The product needs to be embarrassingly simple at launch.
- **LTD Potential**: 5/5

---

## Summary: Highest-Signal Opportunities

| Idea | Signal Strength | LTD Fit | Notes |
|------|----------------|---------|-------|
| Missed Callback Capture for Trades | Very High | 5/5 | Zero competition, clear $$ pain, ultra-simple product |
| Post-Job SMS Follow-Up for Trades | High | 5/5 | CraftBoop is early, market validating |
| Simple Contractor App (quotes/invoices/SMS) | High | 5/5 | Crowded but no winner yet — distribution play |
| Micro-Bakery / Small-Batch Mfg Software | Medium | 4/5 | Craftplan is OSS — turn it commercial |
| Dental Insurance Verification API/Tool | High | 2/5 | HIPAA complexity, but $40-50K/yr pain point |
| Niche Industrial Parts B2B E-Commerce | High | N/A | Not SaaS but validated, no software needed |
| Vertical Cloud Hosting for Specific Software | Medium | 1/5 | Verito proves it works, pick a new stack |
