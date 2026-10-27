# HN & Indie Hackers Research — 2026-10-27

**Focus:** Boring business SaaS — tools serving unsexy but profitable industries (trades, local services, field service, property management, etc.)

---

## AI Admin Assistant for Trades (Clawbolt pattern)

- **Source**: https://news.ycombinator.com/item?id=47236631
- **Additional Links**: https://mozilla-ai.github.io/clawbolt/ | https://github.com/mozilla-ai/clawbolt
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 12 points, 0 comments
- **Revenue Data**: None (open source proof-of-concept from Mozilla.ai)
- **Boring Business Score**: 5
- **Target Industry**: Trades (general contracting, plumbing, HVAC, roofing, electrical)
- **Core Value Prop**: AI agent handles scheduling estimates, client communications, invoice management via WhatsApp/iMessage — frees tradesperson to do actual work
- **Gap/Opportunity**: Mozilla.ai built a Python OSS demo; no polished commercial product exists. Tradespeople waste a huge chunk of time on admin (scheduling calls, explaining invoice details to property managers, chasing clients). The pain is validated and well-articulated in the HN post: "He thought running his own business would be 85% show up and do the work, but a large chunk is administration."
- **Our Angle**: A $49-79/mo mobile-first AI receptionist for solo/small trade businesses. SMS/WhatsApp-based. Auto-schedules estimate visits, sends reminders, handles basic invoice Q&A, follows up on unpaid jobs. No app to learn — works through channels they already use.
- **LTD Potential**: 4 — recurring admin is ongoing pain, but LTD could capture early market fast ($99-149 LTD)

---

## Affordable Field Service Management for Solo Contractors (FieldFlow pattern)

- **Source**: https://news.ycombinator.com/item?id=47294092
- **Additional Links**: https://fieldflow-nine.vercel.app/auth
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 0 comments
- **Revenue Data**: None (pre-revenue, Vercel demo stage)
- **Boring Business Score**: 5
- **Target Industry**: Solo contractors (carpenters, electricians, plumbers, handymen)
- **Core Value Prop**: Invoicing + scheduling + client management at $5/mo flat — vs Jobber at $39+, Tradify at $47/user
- **Gap/Opportunity**: The FieldFlow founder articulates the exact pain: "I was paying $150+/month for field service software and hated it — too bloated, too expensive for a one-person operation." The existing tools (Jobber, ServiceTitan, Housecall Pro) are enterprise-priced with complexity that overwhelms solo operators. FieldFlow exists but is just a demo with no traction. The market is enormous — millions of 1-3 person trade businesses.
- **Our Angle**: Clean, mobile-first FSM for 1-5 person trade businesses. Flat $19/mo (not $5 — still cheap vs competition but sustainable). Key differentiator: integrated payment collection (Stripe) and automated customer text/SMS updates ("Your technician is on their way"). Acquisition via r/Jobber, r/smallbusiness, contractor Facebook groups.
- **LTD Potential**: 5 — perfect LTD candidate: high recurring pain, clear ROI vs expensive alternatives, AppSumo audience overlaps with small biz owners

---

## Post-Job Follow-Up Automation for Home Service Businesses (CraftBoop)

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post / product feedback
- **Engagement**: Posted April 2026, multiple comments
- **Revenue Data**: $29/mo, 14-day free trial, "a few users" — very early
- **Boring Business Score**: 4
- **Target Industry**: Home services (plumbers, HVAC, cleaners, painters, landscapers)
- **Core Value Prop**: 5-email automated sequence after each job: thank you → review request → check-in → rebook reminder → referral ask
- **Gap/Opportunity**: Service businesses do great work but never follow up — no reviews, no rebooking, no referrals. The cost of inaction is huge (Google reviews drive leads). CraftBoop is email-only and just launched. Gap: SMS follow-ups convert better than email for this audience, Jobber/ServiceTitan integration would be killer, and a "review gating" feature (route happy→Google, unhappy→private) adds major value.
- **Our Angle**: Combined review funnel + rebooking automation with SMS-first flow. Integrate with Jobber API so no manual customer entry. Add WhatsApp option for Spanish-speaking trade business owners (large underserved segment). Price at $39-49/mo for the SMS tier.
- **LTD Potential**: 4

---

## Vendor & Contractor Compliance Management for Property/Facilities Management (SecurVO)

- **Source**: https://news.ycombinator.com/item?id=45906762
- **Additional Links**: https://securvo.com
- **Platform**: HN
- **Type**: Show HN (beta launch)
- **Engagement**: 2 points, 0 comments
- **Revenue Data**: Beta stage, free for 90 days, then flat-rate tiers (vs $50-200/user/mo competitors)
- **Boring Business Score**: 5
- **Target Industry**: Property management, facilities management, field service companies
- **Core Value Prop**: Tracks vendor COIs (Certificates of Insurance), license expirations, recurring inspections, compliance documents — flat-rate pricing not per-user
- **Gap/Opportunity**: Property managers and facility teams manage dozens of contractors. Every contractor needs current insurance, licenses, background checks. Tracking this via spreadsheets leads to liability. Existing tools charge enterprise prices. SecurVO is the right idea but launched with 0 traction. The market validation exists: an HN commenter in the 2020 "underserved industries" thread mentioned building exactly this ("a dashboard for rental management companies to track vendors — plumbers, electricians, pool cleaners — to make sure their licenses, insurance, and background checks are up to date").
- **Our Angle**: Narrow specifically to residential property managers (landlords with 5-50 units). Simple onboarding: import contractor list, set renewal reminders. Auto-request updated COIs from contractors via email/SMS. $29-49/mo flat. No per-seat pricing complexity.
- **LTD Potential**: 4

---

## Quoting & Job Costing Software for Cleaning Companies (BlastoClean)

- **Source**: https://www.indiehackers.com/post/my-ih-launch-post-blew-up-heres-what-i-built-from-the-comments-a1cbb026a3
- **Additional Links**: https://www.blastoclean.com | https://www.indiehackers.com/product/blastoclean
- **Platform**: Indie Hackers
- **Type**: Build-in-public launch post (Oct 2026)
- **Engagement**: 100+ comments, very active thread
- **Revenue Data**: $0 revenue as of Oct 2026, first owner meetings just happening
- **Boring Business Score**: 4
- **Target Industry**: Residential and commercial cleaning businesses
- **Core Value Prop**: Build quotes from actual task times and your hourly rate (not guessing), plus scheduling, invoices, payments in one place. Track quoted vs actual time and true profit per job.
- **Gap/Opportunity**: Cleaning companies still quote from Word docs or memory. They don't know if a job was profitable until weeks later. ZenMaid ($3M/yr) proved this market is real but focuses on scheduling, not job costing. BlastoClean is $0 with no customers yet — but the 100+ comment IH thread shows huge community interest. Key insight from thread: "owners need to see profit per job" and "late cancellations leave holes in the schedule."
- **Our Angle**: Job costing + profit tracking is the differentiated angle ZenMaid doesn't cover. Target cleaning businesses transitioning from 1-person to 3-5 employees where profitability tracking becomes critical. $49-79/mo. AppSumo LTD could land 200-500 early customers.
- **LTD Potential**: 4

---

## AI-Powered Reputation Management for Local Service Businesses (Rezon8AI)

- **Source**: https://news.ycombinator.com/item?id=43551673
- **Additional Links**: https://rezon8ai.com
- **Platform**: HN
- **Type**: Show HN (April 2025)
- **Engagement**: 1 point, 0 comments
- **Revenue Data**: Free trial launched, no public revenue data
- **Boring Business Score**: 3
- **Target Industry**: Local trades, clinics, agencies, gyms, growing franchises
- **Core Value Prop**: AI-trained feedback funnel routes happy customers to Google/Yelp/Tripadvisor/Facebook while capturing unhappy feedback privately before it goes public. Review request via email, SMS, or QR code.
- **Gap/Opportunity**: Most SMB review tools just monitor. This is a proactive funnel. Market signal: Birdeye charges $299-499/mo, NiceJob $75+/mo — massively overpriced for a 3-person HVAC shop. The concept is sound but Rezon8AI launched with 1pt, 0 comments — execution or marketing may be the problem, not the idea.
- **Our Angle**: Tight vertical focus (just HVAC/plumbing/trades), with Jobber integration for automatic job-completion triggers. Bundle review management with the rebooking automation angle. $39/mo. LTD at $79 would convert well.
- **LTD Potential**: 4

---

## Supplier Invoice Collection Automation for Micro-SMBs (Well / YC S25)

- **Source**: https://news.ycombinator.com/item?id=43871312
- **Additional Links**: https://wellapp.ai | https://github.com/WellApp-ai/well
- **Platform**: HN
- **Type**: Show HN (YC S25, May 2025)
- **Engagement**: 8 points, 6 comments
- **Revenue Data**: Early access/free at launch, backed by YC S25
- **Boring Business Score**: 3
- **Target Industry**: Solopreneurs, indie hackers, lean startups (but also scales to SME)
- **Core Value Prop**: Chrome extension that auto-captures invoices from portals and emails, extracts structured data, syncs to accounting tools/ERP. No manual uploads, no password sharing.
- **Gap/Opportunity**: Invoice management is chaos even when payments are streamlined. Well is YC-backed and going for scale. But the micro-end (5-20 employee service businesses) is underserved — they need AP automation but can't afford Tipalti or Stampli. The HN thread surfaced a real pain: "solopreneurs and small teams waste hours every month just retrieving invoices." EU e-invoicing mandates also creating urgency.
- **Our Angle**: Hyper-focus on home service business owners (HVAC shops, plumbing companies, cleaning businesses) who receive many supplier invoices (equipment, parts, chemicals). Pre-populate their QuickBooks/Xero automatically. $29/mo tier competitive with Manual entry cost. LTD viable.
- **LTD Potential**: 3 — YC competition makes this harder; better as a feature add to a broader FSM tool

---

## Invoice Scheduling with Payment Links for B2B Service Businesses (Billdrip)

- **Source**: https://news.ycombinator.com/item?id=43613718
- **Platform**: HN
- **Type**: Show HN (~2025)
- **Engagement**: Low (validation-stage post)
- **Revenue Data**: Pre-revenue
- **Boring Business Score**: 3
- **Target Industry**: Property development, contractors, cleaning companies, HOAs
- **Core Value Prop**: Schedule invoice emails in advance with embedded Stripe "Pay Now" link — reduces late payments by making payment trivially easy at the right moment
- **Gap/Opportunity**: The specific insight: invoice recipients often can't pay immediately but forget by the time they can. Scheduling the email for the right moment (end of week, when they're doing accounts) dramatically increases on-time payment. Simple tool, not built by Stripe or QuickBooks.
- **Our Angle**: Pair with automated late-payment reminders and a contractor-facing dashboard showing invoice status. Narrow to property management companies sending to tenant contractors. $19/mo. Could be LTD-worthy if bundled with CraftBoop-style follow-up.
- **LTD Potential**: 3

---

## Niche Appointment Scheduling with Branded Booking Pages (Schedo — validated)

- **Source**: https://www.indiehackers.com/post/my-niche-appointment-software-makes-5k-month-e24aae2369
- **Additional Links**: https://schedo.app
- **Platform**: Indie Hackers
- **Type**: Revenue milestone post ($5K MRR — April 2025)
- **Engagement**: High engagement (milestone post)
- **Revenue Data**: $5,000 MRR, bootstrapped, first customer was a window cleaning company at $12/mo
- **Boring Business Score**: 3
- **Target Industry**: Solopreneurs and small businesses (window cleaning, real estate, law, pet sitting, financial advisors)
- **Core Value Prop**: Branded scheduling page showing all meeting types in one place, with built-in calendar — cleaner than Calendly for service businesses
- **Gap/Opportunity**: Schedo is validated at $5K MRR. The window cleaning company as first customer is a telling signal. The gap Schedo identified: Calendly-style tools feel corporate and lack a native calendar. But Schedo is still generic. A deeply vertical version (just for home service trades, with job duration defaults, drive-time buffers, crew assignment) has stronger differentiation and higher WTP.
- **Our Angle**: Home service scheduling — not just appointment booking but route-optimized day planning with SMS confirmations to customers. $29-49/mo. Field service focus separates from Schedo/Calendly.
- **LTD Potential**: 4

---

## Plumbing-Specific Business Management SaaS (Plummerly — very early)

- **Source**: https://www.indiehackers.com/post/i-m-building-plummerly-plumbing-service-business-management-software-Yk7gp1SLquc1d8NPx1Ff
- **Platform**: Indie Hackers
- **Type**: Build-in-public intro post (Jan 2026)
- **Engagement**: Low (early intro post)
- **Revenue Data**: None, pre-revenue
- **Boring Business Score**: 5
- **Target Industry**: Plumbing service businesses
- **Core Value Prop**: Job scheduling + customer management + billing in one platform specifically for plumbing companies
- **Gap/Opportunity**: Plumbing companies (1-10 employees) still use spreadsheets and paper schedules. Plummerly is building this but is very early with no traction signals. The adjacent ZenMaid ($3M/yr for cleaning) proves vertical-specific FSM can scale well bootstrapped.
- **Our Angle**: Rather than plumbing-only, a multi-trade vertical FSM with trade-specific templates (job checklists, parts catalog, warranty tracking) targeting HVAC + plumbing + electrical in one product. $49-79/mo. ZenMaid ($3M/yr, cleaning only) as proof the model works.
- **LTD Potential**: 5

---

## Background Signal: "Underserved Industries" HN Thread (192 pts, 169 comments)

- **Source**: https://news.ycombinator.com/item?id=22496129
- **Platform**: HN
- **Type**: Ask HN (March 2020, still highly relevant)
- **Engagement**: 192 points, 169 comments — one of highest-engagement threads on this topic
- **Revenue Data**: N/A (research thread)
- **Boring Business Score**: 5
- **Target Industry**: Multiple (trades, rentals, agriculture, manufacturing, construction)
- **Core Value Prop**: Community validation of which industries remain underserved
- **Gap/Opportunity**: Key industries mentioned by HN commenters as software-starved:
  - Rental property vendor tracking (contractor license/insurance verification)
  - Multistate tax withholding for traveling employees
  - Pool/lawn/pest service routing and billing
  - Auto body / collision repair shop management
  - Agricultural equipment maintenance tracking
  - Small commercial kitchen / restaurant back-office
  - Construction subcontractor coordination
- **Our Angle**: Use this as signal for which verticals to target. The rental/property vendor tracking angle (mentioned by a developer who actually built it commercially) remains a strong opportunity.
- **LTD Potential**: N/A

---

## Background Signal: Sweaty Startup SaaS Opportunity (Indie Bites podcast, Oct 2025)

- **Source**: https://www.youtube.com/watch?v=1erAROr0NkY
- **Platform**: YouTube / Indie Hackers community
- **Type**: Podcast discussion
- **Engagement**: High — Indie Bites podcast, popular with indie hacker audience
- **Revenue Data**: Flo's home security business: £200K+ rev, 50% gross margin, 28% net in year 1
- **Boring Business Score**: 5
- **Target Industry**: Home services, field services, property services
- **Core Value Prop**: Discussion validates the gap between trade businesses and available software — tradespeople running Google Sheets + paper invoices are leaving money on the table. Key quote: "giving someone the ability to book using Calendly is mind-blowing for people [in trades]."
- **Gap/Opportunity**: Multiple specific ideas surfaced:
  1. **Handyman subscription for wealthy homeowners** — monthly retainer for minor repairs. No software platform exists for this model.
  2. **Pool cleaning company consolidation** — pool cleaning is 79,000 fragmented 1-2 person businesses. Routing algorithm + online booking + instant pricing via aerial imagery = competitive moat.
  3. **Garage organization transformation service** — premium service, door-to-door in wealthy neighborhoods. No booking/scheduling platform tailored for this.
  4. **Window cleaning brand-building tools** — differentiation through brand, online booking, contactless payment. Basic software adoption still very low.
- **Our Angle**: The handyman subscription platform (monthly maintenance retainer) is a genuinely novel idea with no existing SaaS. Build the ops layer: customer portal for submitting issues, automated scheduling, crew dispatch, billing, service history. $79-99/mo for the handyman business. B2C subscription at $99-199/mo for homeowners creates dual flywheel.
- **LTD Potential**: 4 (for the business-side SaaS)

---

## Summary of Top Opportunities (Ranked by LTD Potential × Market Size)

| Opportunity | LTD Score | Market | Existing Competitors | Status |
|---|---|---|---|---|
| Affordable FSM for solo/small contractors | 5 | Huge | Jobber/ServiceTitan (overpriced) | FieldFlow demo only |
| Multi-trade vertical FSM (HVAC+plumbing+electrical) | 5 | Huge | Generic tools, no trade-specific | Plummerly = plumbing only |
| Post-job follow-up + review automation | 4 | Large | CraftBoop ($29/mo, early) | Very early |
| AI admin assistant for trades | 4 | Large | Clawbolt (OSS, no product) | OSS only |
| Vendor/contractor compliance tracking | 4 | Medium | SecurVO (beta, no traction) | Beta only |
| Handyman subscription platform | 4 | Medium-Large | None identified | Not built |
| Cleaning quoting + job costing | 4 | Medium | BlastoClean ($0 rev) | Early |
| AI reputation management (trades-focused) | 4 | Large | Birdeye ($$$), Rezon8AI (1pt) | Very early |
| Niche appointment scheduling (trades) | 4 | Large | Schedo ($5K MRR, generic) | Validated adjacent |
