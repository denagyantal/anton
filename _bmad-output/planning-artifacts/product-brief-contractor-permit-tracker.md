---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/contractor-permit-tracker.md
  - _bmad-output/planning-artifacts/research/market-contractor-permit-tracker-research-2026-11-02.md
workflowType: product-brief
lastStep: 6
project_name: contractor-permit-tracker
user_name: Root
date: 2026-11-03
author: Root
---

# Product Brief: Contractor Permit Tracker

---

## Executive Summary

**PermitBox** is a dead-simple permit status tracker for solo contractors and small general contractors (GCs) — filling the only unclaimed slot in a $7.9B construction software market. At $19–29/month, it sits in a pricing gap so wide it can be measured in exponential multiples: every purpose-built competitor starts at $249/month or higher.

The problem is acute and quantified. Over 607,000 US construction firms with fewer than 10 employees manage permits today through spreadsheets and manual portal-checking — a workflow that costs the median contractor $52,000 per year in permit-related losses and 2.5–5 hours per week in admin overhead. The core failure mode is missing inspection windows, which triggers re-inspection fees ($340+), project delays ($5,000–$15,000 per incident), and homeowner disputes.

The solution is not a platform. It is one focused thing: a dashboard showing every active permit, ranked by urgency, with automatic alerts before inspections are due and before permits expire. A contractor adds their first permit in under five minutes. The value is realized the first time an alert fires before an inspection they would have forgotten.

The commercial thesis is first-mover advantage in a confirmed-gap category. The Indie Hackers community explicitly named this as an underserved niche in a high-engagement featured post (April 2026). PermitFlow raised $91M and explicitly abandoned the solo contractor segment. Procore requires a $10,000/year minimum. The path to $10K MRR is 500 customers at $19/month — 0.08% of the serviceable market.

**Key Facts:**
- Category: Construction SaaS / Permit Management
- Target: Solo contractors and GC firms with 1–10 employees
- Pricing: $19/mo (solo), $29/mo (team, up to 5 users), $99 LTD
- Build complexity: 1–2 week MVP (CRUD + email alerts)
- Market size: 607,000 US firms with <10 employees; SAM $3.6B–$5.4B at 100% penetration
- Competitive moat: First-mover in a category with zero indie competitors at this price point

---

## Core Vision

### Problem Statement

Solo contractors and small GC firms (1–10 employees) manage permits across multiple jurisdictions with no purpose-built tool at a price point they can justify. They currently track permit applications, status updates, inspection schedules, and expiration dates across 3–5 separate city/county permit portals — each requiring its own login — using Google Sheets, Excel, or physical whiteboards.

The resulting failure mode is predictable: 3.4 missed inspection windows per contractor per year, each costing $340+ in re-inspection fees and $5,000–$15,000 in project delay costs. The spreadsheet cannot send an alert. The whiteboard does not know tomorrow's inspection date. Nothing automatically checks whether the permit expires before the project finishes.

The specific gap: there is no standalone, purpose-built permit tracking tool for small contractors priced between $30 and $249/month. This is not a market oversight — it is a structural feature of the construction SaaS industry, which built top-down from $8B Procore serving 50+ employee GC operations, and never addressed the bottom 81.5% of the market.

### Problem Impact

- **Financial cost:** $52,000 in annual permit-related losses for the median residential contractor (NAHB 2025)
- **Time cost:** 2.5–5 hours per week of manual portal-checking for a contractor managing 30 permits across 5 jurisdictions
- **Project cost:** One missed inspection = re-inspection fee + crew idle time + homeowner relationship damage + potential stop-work order
- **Detection lag:** 38% of permit problems take 5+ days to detect without automated tracking — long enough for a project timeline to be materially compromised
- **Scale:** 73% of residential contractors still track permits manually; the industry is at the inflection point from spreadsheets to dedicated software (34% now using dedicated tools, up from 11% in 2022)

### Why Existing Solutions Fall Short

**Enterprise tools (Procore, Buildertrend, CoConstruct):** Pricing starts at $449–$833/month with annual minimums of $5,400–$10,000. These serve 50+ employee GC operations managing $10M+ in annual construction volume. For a solo electrician or 5-person GC shop, the pricing is structurally unaffordable, and permits are a checkbox in a broader project management platform, not a managed workflow.

**PermitFlow ($350+/month):** The closest purpose-built permit tool. Raised $91M and is explicitly targeting commercial builders and developers. Their AI platform and $20B+ construction volume claims are aimed at a segment five rungs up from the solo contractor. They will not build a $19/month tier — their VC trajectory pushes upmarket.

**Field service tools (Jobber at $49/month):** The best affordable option for small contractors. Zero permit tracking features. A contractor using Jobber for scheduling and invoicing still needs a separate permit solution — they are already paying for a tool that doesn't solve this problem.

**iPermit (~$150–200+/month):** Mid-market, integrates with ServiceTitan, aimed at contractors already running ServiceTitan — not the solo operator who has never heard of ServiceTitan.

**The spreadsheet:** The current universal workaround. It can store data. It cannot send alerts, detect approaching expirations, or surface urgency. It breaks when the person who built it leaves or gets busy.

### Proposed Solution

PermitBox is a single-purpose permit tracking dashboard for solo contractors and small GCs. It replaces the spreadsheet with an always-current view of every active permit, ranked by what needs attention soonest — upcoming inspections, approaching expirations, pending approvals.

The core user loop:
1. Add a permit (60 seconds: jurisdiction, permit number, type, dates)
2. Add any scheduled inspections (linked to the permit)
3. Receive email alerts automatically: 30/14/7 days before expiration, day-before inspection reminders, status change notifications
4. Share a client-facing status link with the homeowner who keeps texting "where is my permit?"

No sales call required. No implementation consultant. No training. The product works in 5 minutes and saves real money the first time an alert prevents a missed inspection.

### Key Differentiators

1. **Solo contractor pricing** — $19/month is an impulse purchase for a contractor who just paid a $340 re-inspection fee. PermitFlow's sales team won't even take the call.

2. **Inspection alerts as the core product** — Every UI decision is organized around "what inspections are due and what permits are expiring." Not project management. Not invoicing. Not scheduling. One thing, done exactly right.

3. **5-minute setup, zero training** — The product must work without an onboarding session. Small contractors will not attend a demo. They will try the product during a lunch break and decide within 15 minutes.

4. **Client-facing status sharing** — A shareable public link for each project showing current permit status to homeowners. Eliminates the "where is my permit?" phone call that happens 3 times per project. No competitor below $249/month offers this.

5. **Category-first positioning** — "Contractor permit tracking software" is currently an unclaimed keyword category. Being first to rank, first to appear on AppSumo, and first to accumulate G2/Capterra reviews in this category creates a durable first-mover advantage.

6. **Lifetime Deal option** — $99 one-time purchase eliminates subscription anxiety for solo operators who hate paying monthly for anything. AppSumo's audience buys exactly this type of tool.

---

## Target Users

### Primary Users

**Segment 1: The Solo Trade Contractor (highest pain, fastest to adopt)**

*Representative persona: Tyler, 42, solo licensed electrician*

Tyler runs a one-person electrical contracting business with a part-time office admin (his wife). He pulls 15–25 permits per month across 3 municipal jurisdictions. His current system: a Google Sheet his wife updates when she remembers to, and a folder of PDF permits in Dropbox.

Once a quarter, something falls through the cracks — he shows up to an inspection he forgot about, or discovers a permit has lapsed because the portal updated status and nobody noticed. Each incident costs him $340 in re-inspection fees plus the downstream: crew rescheduling, homeowner call explaining the delay, potential contract penalty.

Tyler does not spend time evaluating software. He makes purchase decisions reactively — during or immediately after a painful incident. When the search happens ("permit tracking app for electricians"), he needs to find PermitBox at the top of the results and be able to add his first permit without reading a manual.

Tyler's interaction with PermitBox:
- **Discovery:** Google search after a missed inspection; Reddit recommendation in r/ContractorsUS; AppSumo deal email
- **Onboarding:** Adds three permits from his current active jobs; realizes the inspection reminder for tomorrow just appeared on the dashboard; setup complete in 8 minutes
- **Core usage:** Checks the dashboard from his phone 2–3 times per week; receives email alerts automatically for everything urgent
- **Value realization:** The first time an alert fires for an inspection he genuinely would have forgotten
- **Retention:** Active as long as he has active permits (continuous); churns only if he retires or closes the business

**Tyler's price ceiling:** $30–50/month without hesitation. $19/month is an impulse buy.
**LTD appeal:** Very high — the "pay once, never pay again" framing removes subscription anxiety entirely.

---

**Segment 2: The Small General Contractor (team plan, expansion revenue)**

*Representative persona: Maria, 48, runs a 5-person GC shop*

Maria manages 8–12 active residential projects simultaneously. She uses Buildertrend for scheduling and project management, but permit tracking is "a tab in a shared Google Sheet that someone updates when they remember to." She has one office manager, Ana, who handles admin.

Once, 18 months ago, a permit suspension caused a 3-week project delay on a $280K kitchen renovation. The homeowner nearly walked. That incident is the one Maria references every time the topic of permits comes up. She has not fixed the underlying system.

Maria's interaction with PermitBox:
- **Discovery:** A peer GC mentions it at a NAHB chapter meeting; Ana finds it after googling for a Buildertrend permit integration
- **Onboarding:** Ana sets up the account; migrates the Google Sheet data over two afternoons; Maria gets added as a second user
- **Core usage:** Ana maintains the dashboard daily; Maria gets a weekly summary email of all active permit statuses; both receive alerts for critical deadlines
- **Value realization:** When Ana reports that the dashboard flagged a permit approaching expiration that had been missed in Buildertrend — the system worked
- **Retention:** High; becomes embedded in Ana's daily workflow; Maria would need a specific trigger (Buildertrend adding permit tracking) to consider leaving

**Maria's price ceiling:** $50–100/month is a no-brainer; already pays $499/month for Buildertrend.
**Team plan fit:** The $29/month team plan (up to 5 users) is the right tier — Maria, Ana, and possibly a lead sub.

### Secondary Users

**Homeowners (indirect users, virality lever)**

Homeowners are not customers, but they interact with the product through the client-facing status sharing feature. When Maria or Tyler shares a project's permit status link with a homeowner, the homeowner can check permit status without calling.

This feature reduces "where is my permit?" phone calls (estimated 3/project), builds contractor credibility, and creates a subtle viral loop: homeowners who see a professional permit tracking interface associate the contractor with organization and competence. For residential contractors, referral business from happy homeowners is the primary growth channel — PermitBox reinforces the behaviors that generate referrals.

**Trade association members and community participants**

Contractors who participate in Reddit communities (r/Construction, r/ContractorsUS, r/GeneralContractor) and Facebook contractor groups are early adopters with outsized influence. A single well-received post in r/ContractorsUS from a genuine user can drive 50–100 trial signups. These are not formal secondary users, but they are the community through which word-of-mouth spreads in this segment.

### User Journey

**Tyler's Journey (Solo Contractor)**

| Stage | What Happens |
|-------|-------------|
| **Trigger** | Misses an inspection. Pays $340 re-inspection fee. Frustrated. Googles "permit tracking app contractor" that evening |
| **Discovery** | Finds PermitBox ranking for "contractor permit tracking software"; sees it costs $19/month; reads the tagline "never miss an inspection again" |
| **First 5 minutes** | Creates account; adds 3 current permits; sees the inspection reminder dashboard immediately populating with upcoming dates |
| **Aha moment** | Day-before email alert fires for an inspection he had not written down anywhere. Realizes this would have been missed |
| **Routine adoption** | Checks dashboard from phone on the way to each job site; adds permits as they're filed; relies on alerts instead of calendar reminders |
| **Advocacy** | Mentions it in a Facebook contractor group when someone asks how to track permits; Reddit comment with a referral link |
| **Long-term retention** | Renews annually (or LTD = never churns); expands usage to document storage as project files accumulate |

**Maria's Journey (Small GC)**

| Stage | What Happens |
|-------|-------------|
| **Trigger** | Ana mentions she's spent 3 hours this week checking permit portals. Maria remembers the permit suspension incident |
| **Discovery** | Ana finds PermitBox through a Google search; forwards to Maria with "this is exactly what we need" |
| **Evaluation** | Maria checks the pricing ($29/month for team); asks if it integrates with Buildertrend (not yet, V2); decides to try it anyway |
| **Onboarding** | Ana migrates data from the Google Sheet over 2 days; both users set up accounts; Ana becomes the power user |
| **Aha moment** | Dashboard flags a permit at 14-day expiration warning that nobody had tracked in Buildertrend. Crisis averted |
| **Routine** | Ana's daily morning check is now the PermitBox dashboard instead of cycling through 4 portal websites |
| **Advocacy** | Maria mentions it at a NAHB chapter meeting; sends the link to 2 GC contacts who ask what she uses for permits |

---

## Success Metrics

### User Success

**Primary success indicator:** The product prevents a missed inspection or permit expiration that would have cost the user money.

This is the "aha moment" that drives retention and referrals. It cannot be directly measured, but it correlates with:
- Users who have email alerts configured (active alert setup = prepared for the moment of value)
- Users who log in within 24 hours of receiving an alert (alert acted on = value delivered)
- Users still active 90 days after signup (retention past the first project cycle)

**User success behaviors to track:**
- Time to first permit added (target: <10 minutes from signup)
- Permits with at least one inspection or expiration alert configured (target: >80% of permits)
- Alert click-through rate (target: >60% of alerts opened/acted on)
- Weekly active users / total active users ratio (target: >40% check dashboard at least weekly during active permit season)

### Business Objectives

**12-month financial targets:**

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| First paying customer | 1 | Week 4 |
| AppSumo LTD launch | 200 units | Month 2 |
| Break-even MRR (covering infra + minimal marketing) | $500 MRR | Month 3 |
| Seed milestone | 50 monthly subscribers | Month 3 |
| Growth milestone | 200 paying customers | Month 6 |
| Traction milestone | $10K MRR | Month 12 |
| Reviews milestone (social proof for organic) | 50+ G2/Capterra reviews | Month 6 |

**12-month revenue model:**

| Month | Customers | Avg Rev/Customer | MRR |
|-------|-----------|-----------------|-----|
| 3 | 50 | $19 | $950 |
| 6 | 200 | $21 | $4,200 |
| 12 | 500 | $22 | $11,000 |
| 18 | 1,000 | $24 | $24,000 |

**Strategic objective:** Establish PermitBox as the category-defining brand for solo contractor permit tracking before any competitor enters the niche. First-mover brand recognition in community channels (Reddit, Facebook groups, AppSumo) is the durable competitive moat.

### Key Performance Indicators

**Acquisition KPIs:**
- Monthly new signups: 25 (Month 3) → 75 (Month 6) → 100+ (Month 12)
- AppSumo LTD units sold: 200 in launch window (Month 2)
- Cost per acquired customer: <$20 (target: organic/community channels)
- G2/Capterra review count: 20 (Month 3) → 50 (Month 6) → 150 (Month 12)

**Retention KPIs:**
- Monthly churn rate: <5% (Month 3), <4% (Month 6), <3% (Month 12)
- Annual retention: >70% (contractors who renew after first year)
- Net Revenue Retention: >100% (team plan upsells compensating for single-user churn)

**Engagement KPIs:**
- Time to first permit: <10 minutes from account creation
- Permits with alerts configured: >80% of all permit records
- Daily active users / monthly active users: >15% (contractors check daily during active permit season)
- Email alert deliverability: >98% (Resend/SendGrid)
- Support tickets per customer per month: <0.5 (Month 3), <0.2 (Month 12)

**Infrastructure KPIs:**
- Monthly infrastructure cost at 2,000 users: <$200 (Postgres + email + hosting)
- Alert delivery latency: <5 minutes from scheduled trigger
- Uptime: >99.5%

---

## MVP Scope

### Core Features

The MVP solves one problem: contractors miss inspections and permit expirations because spreadsheets do not send alerts. Every feature in the MVP exists to solve this problem and nothing else.

**Feature 1: Permit Records (the data foundation)**
- Add a permit: project name, jurisdiction, permit number, permit type, application date, expected approval date, expiry date
- Edit and update permit details at any time
- Status workflow: Applied → In Review → Approved → Active Construction → Inspections Scheduled → Final Approval → Closed
- Delete/archive closed permits

**Feature 2: Inspection Scheduling (the core use case)**
- Add one or more inspections to any permit: date, time, inspection type (rough-in, framing, electrical, HVAC, final, etc.)
- Pass/fail recording after the inspection; optional notes field
- Inspection history visible on the permit record

**Feature 3: Automated Email Alerts (the primary value delivery mechanism)**
- Expiration alerts: 30 days, 14 days, 7 days before permit expiry date
- Inspection reminders: 24 hours before any scheduled inspection
- Status change notifications: when a permit status is manually updated
- Alert configuration: users can enable/disable individual alert types per permit
- Delivery: Resend or SendGrid; >98% deliverability target

**Feature 4: Urgency Dashboard (the first screen a user sees)**
- All active permits ranked by urgency: soonest inspection first, then soonest expiry
- Visual status indicators: green (no action needed), yellow (approaching deadline), red (overdue / expired)
- Single-click permit detail view
- Mobile-responsive (contractors view from phones on job sites)

**Feature 5: Document Storage (reduces the second workflow pain point)**
- Attach PDFs to any permit: permit documents, inspection results, plan sets, approval letters
- Max 25MB per file; accessible from mobile
- Simple file list per permit; no folder hierarchy needed

**Feature 6: Client Status Sharing (the virality lever)**
- Generate a shareable public URL for each project
- Status page shows: permit type, current status, next inspection date, estimated completion
- Read-only; homeowner cannot edit anything
- Optional: contractor can toggle this off per-project if not wanted

**Feature 7: Multi-Project Dashboard (the overview)**
- All active permits across all projects in one view
- Filter by status, jurisdiction, upcoming inspection date
- Summary counts: active permits, inspections this week, permits expiring in 30 days

**Authentication and User Management:**
- Email/password signup; magic link alternative
- Team plan: invite up to 4 additional users (total 5); each user sees all permits
- Account-level settings: default alert preferences, company name for client status page

### Out of Scope for MVP

The following are explicitly deferred to V2 or later. This list is as important as the feature list — it prevents scope creep during the build.

**Deferred to V2:**
- Jurisdiction status sync / portal scraping (technically complex; V1 is manual status updates only)
- Subcontractor permit tracking (separate workflow; requires additional data model)
- SMS/text alerts (email is sufficient for MVP; SMS adds compliance complexity)
- QuickBooks or Jobber integration (requires API partnership work)
- AI-assisted permit preparation (future category; not a tracking feature)
- Permit application submission (different product; PermitFlow already owns this for enterprise)
- Native mobile app (responsive web is sufficient for MVP)

**Out of scope permanently (not the right product):**
- Government-side permitting platforms
- Full project management (scheduling, invoicing, crew management) — this is Jobber/Buildertrend territory
- Permit compliance library / jurisdiction-specific requirements database
- Homeowner-facing renovation project management portal (adjacent, but separate product)

**Rationale for scope discipline:**
PermitBox wins by doing one thing better than any other tool at its price point, not by becoming a smaller version of Buildertrend. Every feature added to the MVP increases build time, increases support overhead, and dilutes the "this solves your permit problem in 5 minutes" positioning.

### MVP Success Criteria

The MVP is validated when:

1. **Problem validation:** 10+ users voluntarily report that PermitBox prevented a missed inspection or caught an expiration they had forgotten. This is the signal that the core value proposition works in the real world.

2. **Pricing validation:** The $19/month price point converts trial users at ≥20% rate. If conversion is <10%, the price or the value proposition needs adjustment.

3. **Retention validation:** Monthly churn rate <6% after Month 3. Contractors who experience the product through a full permit cycle (application → inspections → final approval) retain at high rates.

4. **AppSumo validation:** The LTD launch sells 100+ units within the first 30 days. This validates both the product-market fit and the target channel.

5. **Review validation:** 20+ G2/Capterra reviews averaging ≥4.5 stars within 90 days of launch. Reviews that mention "alerts," "inspections," or "never miss" confirm the core value proposition is landing.

**Go/no-go decision point for V2 investment:** If MRR reaches $3,000 by Month 6 and churn is below 5%, proceed with jurisdiction status sync development for top 5 cities.

### Future Vision

**V2 (Months 6–18): Make it smarter**

The core V2 bet is jurisdiction status sync — automatically checking permit portals for status changes so contractors don't have to. This is technically hard (3,000+ municipal portals, varying formats, no universal API) but achievable for the top 20 most common jurisdictions, covering 35–40% of all US residential permits.

Additional V2 features:
- SMS alerts (in addition to email)
- Subcontractor permit tracking (GC can see permits pulled by subs on their projects)
- Jobber integration (permit status visible from Jobber project view)
- Weekly digest email: all active permits, upcoming inspections, expiring permits — one email, every Monday
- Bulk permit import via CSV (for contractors migrating from spreadsheets with 50+ permits)

**V3 (12–36 months): The compliance hub**

If PermitBox reaches 2,000+ customers and strong NPS, the natural expansion is becoming the compliance hub for solo contractors:
- Trade license renewal tracking (same admin workflow as permit tracking)
- Subcontractor certificate of insurance (COI) tracking
- Safety compliance documentation
- Insurance integration (exportable permit history for underwriters)

This positions PermitBox not just as a permit tracker but as the central compliance dashboard for small contractors — a category with no incumbent at accessible pricing.

**Potential exit path:**

A PermitBox with 2,000+ customers, strong reviews, and growing MRR is a natural acquisition target for:
- Jobber (100K+ contractor customers; permit tracking fills a known gap)
- Housecall Pro (similar FSM tool with contractor customer base)
- A private equity roll-up of construction tools targeting the SMB segment

The 3–5 year goal is to be the first and best brand for "solo contractor permit tracking" — and let the acquisition trajectory follow from that market position.

---

## Appendix: Market Context Summary

**Market sizing (US-focused):**
- 607,000 construction firms with <10 employees (81.5% of all US construction establishments)
- 1.43M building permits issued in 2025 (single-family + multifamily)
- Construction management software market: ~$7.9B in 2026, growing 9% annually
- Solo contractor permit tracking software at <$50/month: $0 in current market revenue

**Competitive pricing matrix:**

| Tool | Price | Permit Tracking |
|------|-------|----------------|
| Procore | $833–$2,500/mo | Full platform module |
| Buildertrend | $499+/mo | Milestone checkbox only |
| PermitFlow | $350+/mo | Excellent, enterprise-only |
| Pulley | $249+/mo | Tech + expert hybrid |
| iPermit | ~$150–200+/mo | Dashboard, no submissions |
| Jobber | $49–$199/mo | **Zero permit tracking** |
| **PermitBox** | **$19–$29/mo** | **Purpose-built: dashboard + alerts** |

**Channel strategy:**
- Community: r/Construction (400K+), r/ContractorsUS, r/GeneralContractor, Facebook contractor groups
- AppSumo: $99 LTD launch, 200-unit initial cap
- SEO: "contractor permit tracking software" — zero current competition for this keyword
- Trade association newsletters: NAHB, NECA, PHCC (high trust, low cost)
- Content: "contractor permit tracking spreadsheet template" as free lead magnet

**Key risks:**
1. Low virality (permit tracking is private admin work) — mitigated by client status sharing + referral program
2. Indie competitor enters the same niche — mitigated by 4-week launch timeline and community first-mover brand
3. Jobber adds permit tracking as a feature — mitigated by positioning as complementary tool + Jobber integration roadmap

---

*Product Brief created: 2026-11-03*
*Based on: Contractor Permit Tracker shortlisted idea (2026-09-10, 84/105) and comprehensive market research (2026-11-02)*
*Next steps: create-prd workflow using this brief as foundation*
