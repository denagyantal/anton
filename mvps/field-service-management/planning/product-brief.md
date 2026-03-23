---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ["ideas/shortlisted/field-service-management-solo-micro-trades.md", "_bmad-output/planning-artifacts/market-research-field-service-management.md"]
workflowType: 'product-brief'
lastStep: 6
date: '2026-03-23'
author: Root
project_name: 'Field Service Management for Solo/Micro Trades'
---

# Product Brief: Field Service Management for Solo/Micro Trades

## Executive Summary

The US field service management (FSM) software market is valued at $5.49B and growing at 12-16% CAGR, yet the vast majority of its 3.5 million home service businesses — 94% of which are small operations — remain dramatically underserved. ServiceTitan charges $250-500/tech/month and requires 6-12 months to implement. Jobber and Housecall Pro impose per-user fees that punish growing micro teams. Solo plumbers, 2-person HVAC shops, and 3-person electrical crews are forced to choose between enterprise software they can't afford, SMB tools that nickel-and-dime them, or staying on paper and spreadsheets.

This product — the "anti-ServiceTitan" — is a dead-simple, flat-rate, offline-capable, mobile-first FSM tool built for 1-5 person trades shops. The core workflow is four steps: **Quote > Schedule > Invoice > Get Paid**. Nothing else. No per-user fees, no complex onboarding, no feature bloat. A contractor should go from signup to first invoice in under one hour.

The go-to-market strategy leverages a $79 lifetime deal (LTD) launched via AppSumo to build an initial user base, followed by conversion to $29-39/month flat-rate SaaS. Distribution is community-led through trade subreddits (r/HVAC, r/Plumbing, r/electricians), HVAC-Talk, and trade Facebook groups — the channels this audience trusts most.

**Opportunity score: 101/105 — BUILD.**

---

## Core Vision

### Problem Statement

Solo and micro trades operators (1-5 person HVAC, plumbing, and electrical shops) lack affordable, simple field service management software. The current market forces them into a painful three-way trade-off:

1. **Enterprise tools they can't afford**: ServiceTitan costs $15,000-30,000/year for a 5-tech shop, requires 6-12 months to implement, and penalizes early exits with $39,375 buyout fees.
2. **SMB tools that scale punitively**: Jobber's per-user pricing means a 3-person shop pays $109/month just to unlock team features. Housecall Pro gates QuickBooks integration behind its $189/month Essentials tier.
3. **Paper and spreadsheets**: The status quo costs 5+ hours/week in administrative overhead, leads to lost invoices, missed callbacks, and an unprofessional customer experience.

With 550,000 plumber shortages projected by 2027 and 30% of electricians nearing retirement, operational efficiency is no longer optional — it's existential for small trades businesses.

### Problem Impact

- **Financial**: Solo operators lose an estimated $500-1,000/month in billable hours to administrative tasks. Missed follow-ups and lost invoices directly reduce revenue.
- **Operational**: Scheduling errors, double-bookings, and paper-based workflows create chaos that grows worse with each added team member.
- **Competitive**: As larger competitors digitize, paper-based micro shops lose bids to operators who can provide instant professional quotes and faster invoicing.
- **Growth**: Per-user pricing creates a "growth tax" — adding a part-time helper can triple software costs, discouraging legitimate business expansion.
- **Personal**: Owner-operators work 8-12 hour days in the field, then spend evenings doing paperwork. The administrative burden contributes to burnout and quality-of-life decline.

### Why Existing Solutions Fall Short

| Competitor | Why It Fails Micro Trades |
|-----------|--------------------------|
| **ServiceTitan** | $250-500/tech/month, 6-12 month implementation, designed for 20+ tech shops. BBB complaint-laden support. Overkill for a solo plumber. |
| **Jobber** | Per-user pricing scales from $25 to $109-229/month as team grows. Core tier (1 user) lacks critical features. Offline capability is limited. |
| **Housecall Pro** | QuickBooks sync locked behind $189/month tier. Android app rated 3.3/5. Support shifted to AI-only in early 2025 — customers can no longer reach humans. |
| **Service Fusion** | Unlimited users at flat rate, but $225/month is too expensive for solo operators earning $50-100K/year. |
| **Kickserv** | Affordable at $19/month but lacks automation, AI, advanced features. No offline capability. |
| **FieldFuze** | $0/month with 2.9% payment processing validates the approach, but lacks trade-specific pricebooks, offline-first architecture, and community traction. |

No existing competitor combines **flat-rate pricing + true offline capability + mobile-first UX + reliable QuickBooks sync** at a price point under $40/month.

### Proposed Solution

A mobile-first, offline-capable FSM application with a brutally simple core workflow:

1. **Create Quote** — Generate professional estimates from the truck using pre-built trade pricebooks (HVAC, plumbing, electrical). Photo attachments for documentation. Customer receives a branded PDF via text.
2. **Schedule Job** — Drag-and-drop scheduling with calendar sync. Automated SMS reminders to customers. Dispatch view for shops with 2-5 techs.
3. **Complete & Invoice** — Mark job complete, capture customer signature, auto-generate invoice from the quote. Photo documentation of work performed.
4. **Collect Payment** — Accept card payments on-site or send payment link via text. Automatic QuickBooks sync for every transaction.

**Architecture principle**: Offline-first. The entire core workflow operates without connectivity. Data syncs seamlessly when the device reconnects. No data loss in basements, crawlspaces, rural areas, or new construction sites.

**Pricing principle**: One flat rate. All features, unlimited users. No per-user fees, no feature gates, no tiers. $79 lifetime deal at launch, transitioning to $29-39/month for new customers.

### Key Differentiators

1. **Flat-rate pricing with unlimited users** — The only credible FSM tool under $40/month that doesn't charge per user. Adding a helper or partner costs $0 extra. Service Fusion offers unlimited users but at $225/month.

2. **Offline-first architecture** — Not "offline mode" as an afterthought, but offline-first design where the full workflow (quote, schedule, invoice, payment capture) works without connectivity and syncs reliably when reconnected.

3. **One-hour onboarding** — From signup to first invoice in under 60 minutes. No implementation consultants, no 6-month rollouts, no training programs. Trade-specific pricebook templates eliminate manual setup.

4. **Mobile-native UX** — Designed for the phone first, not adapted from desktop. Every interaction optimized for one-handed use between jobs, in the truck, on the job site.

5. **Reliable QuickBooks sync** — Tested, maintained integration with both QuickBooks Online and Desktop. Sync accuracy target: 99.9%+. This is consistently the #1 integration request and the #1 source of competitor complaints.

6. **SMS/text-first communication** — Customer quotes, appointment confirmations, payment links, and follow-ups all delivered via text message — the channel trades customers actually respond to.

---

## Target Users

### Primary Users

#### Persona 1: "Mike the Solo HVAC Tech"

- **Profile**: 38 years old, owner-operator running a residential HVAC business in suburban Phoenix. 8 years in the trade, went independent 3 years ago. Revenue: ~$180K/year. Works 5-6 days/week, 4-6 jobs per day.
- **Current tools**: Paper invoices, Google Calendar, a spreadsheet his wife built, and Square for payments. Tried Jobber's free trial but felt it was "built for a company 10x my size."
- **Pain points**: Spends 1.5 hours every evening entering invoices and updating his spreadsheet. Lost a $3,200 job last month because he forgot to follow up on a quote. His truck is his office — he needs everything on his phone.
- **Goals**: Send professional-looking quotes from his truck, get paid faster (currently waits 15-20 days on average), and stop doing paperwork at 9 PM.
- **Success moment**: The first time he creates a quote on-site, the customer approves it via text, and the payment hits his account the same day — all without touching a computer.
- **Willingness to pay**: $79 LTD is a "no-brainer" — less than one service call. Would pay up to $35/month if it saves him an hour per day.

#### Persona 2: "Carlos and Maria — 3-Person Plumbing Shop"

- **Profile**: Carlos (45) runs a plumbing business with 2 employees in Houston. Maria (43), his wife, handles scheduling and invoicing from home. Revenue: ~$450K/year. In business for 12 years.
- **Current tools**: Housecall Pro Essentials ($189/month) — using maybe 20% of the features. Maria handles the desktop side, Carlos and techs use the mobile app. Frustrated by per-user cost increases every time they consider hiring.
- **Pain points**: Paying $189/month for features they don't use. QuickBooks sync breaks every few months. When Carlos is in a crawlspace with no signal, the app is useless — he writes everything on paper and Maria re-enters it later. HCP support takes days to respond.
- **Goals**: Cut software costs without losing core functionality. Get reliable offline mode so techs can complete jobs without worrying about connectivity. Have QuickBooks actually stay in sync.
- **Success moment**: Carlos completes a job in a basement with no signal, the app queues everything, and when he drives away it all syncs — invoice, photos, payment request — without Maria having to re-enter anything.
- **Willingness to pay**: Currently paying $189/month. Would switch immediately to $39/month flat-rate if core functionality matches. $79 LTD would be "stealing."

#### Persona 3: "Jake the Young Electrician"

- **Profile**: 28 years old, licensed electrician who just started his own business in Nashville after 6 years working for a large contractor. Revenue: ~$85K/year (first year). Grew up with smartphones, comfortable with technology.
- **Current tools**: Venmo for payments, iPhone Notes for job details, iCal for scheduling. Knows he needs "real" software but balks at $50+/month when he's just getting started.
- **Pain points**: Looks unprofessional sending Venmo requests to homeowners. Loses track of quotes he's sent. Has no system for following up. Knows he's leaving money on the table.
- **Goals**: Look professional from day one. Have a system that grows with him as he adds his first employee. Keep costs low while he builds revenue.
- **Success moment**: A homeowner comments on how professional his branded quote looks, approves it on the spot via text, and pays with a card — all from Jake's phone. He feels like he's running a real business.
- **Willingness to pay**: $79 LTD is within budget. Would hesitate at $50/month but would pay $29/month once he sees ROI.

### Secondary Users

#### Office Partner/Spouse

Many micro trades operations have a spouse or family member handling scheduling, invoicing, and bookkeeping from home. They need a simple web dashboard to see the schedule, track outstanding invoices, and confirm QuickBooks sync status. They are not technical — the interface must be immediately intuitive without training.

#### The Accountant/Bookkeeper

External accountants and bookkeepers need clean, reliable data flowing into QuickBooks. They don't use the FSM app directly, but they're a critical influencer in the purchase decision — if the QuickBooks integration is unreliable, they'll push the contractor away from the tool. Their implicit requirement: zero manual reconciliation.

#### The Homeowner/Customer

Receives quotes via text, approves with a tap, gets appointment reminders, and pays via payment link. Their experience with the product must feel professional, fast, and trustworthy — reflecting well on the contractor. They never log in or create an account.

### User Journey

**Discovery**: Mike sees a post on r/HVAC from another solo tech saying "I switched from Jobber to [this tool] and I'm saving $80/month. Setup took 30 minutes." He clicks through, sees the $79 LTD price, and thinks "that's less than one service call."

**Onboarding (Target: <60 minutes)**:
1. Signs up with email and phone number (2 minutes)
2. Selects trade vertical: HVAC (loads pre-built pricebook template) (1 minute)
3. Adds business name, logo, and license number (3 minutes)
4. Connects QuickBooks Online (OAuth flow, 2 minutes)
5. Creates first test quote using pricebook items (5 minutes)
6. Sends test invoice to himself, sees the branded PDF (2 minutes)
7. **Ready to use on next job** — total elapsed: ~15 minutes

**Core Daily Usage**: Mike arrives at a job, opens the app, creates a quote from pricebook items + custom line items, adds photos of the issue, sends quote to customer via text. Customer taps "Approve." Mike does the work, marks job complete, captures signature, and payment link goes out automatically. He drives to the next job. No paperwork tonight.

**Value Realization ("Aha!" Moment)**: The first time Mike gets a payment notification while driving to his next job — money in his account before he even left the customer's neighborhood. Or the first Friday evening he doesn't spend doing invoices.

**Long-term Retention**: The tool becomes invisible infrastructure — Mike doesn't think about it, he just uses it. Scheduling, quoting, invoicing, and payments all happen from his phone as a natural part of the job. His bookkeeper stops complaining about missing invoices. He refers three friends from r/HVAC.

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| **Time to First Invoice** | Minutes from signup to sending first real invoice | < 60 minutes |
| **Daily Active Usage** | % of users who open the app and perform a core action daily | > 50% DAU/MAU |
| **Quote-to-Invoice Cycle Time** | Average time from quote creation to invoice sent | < 24 hours |
| **Payment Collection Speed** | Average days from invoice to payment received | < 5 days (vs. industry avg of 15-20) |
| **Offline Reliability** | % of offline-created records that sync successfully | 99.9%+ |
| **Admin Time Saved** | Self-reported hours saved per week on administrative tasks | > 5 hours/week |
| **QuickBooks Sync Accuracy** | % of transactions that sync correctly without manual intervention | 99.9%+ |

### Business Objectives

**Phase 1 — LTD Launch (Months 1-3)**:
- Acquire 2,000-5,000 LTD customers via AppSumo
- Generate $160K-$400K upfront capital
- Achieve 4.5+ star rating on AppSumo with 100+ reviews
- Validate core workflow with real trades professionals

**Phase 2 — Community Growth (Months 3-9)**:
- Grow to 5,000+ total users
- Build organic presence in 5+ trade subreddits and forums
- Achieve 4.5+ rating on G2/Capterra with 50+ reviews
- Monthly churn rate < 5%

**Phase 3 — Subscription Scale (Months 6-18)**:
- Launch $29-39/month subscription pricing
- Reach $100K MRR by month 12
- Achieve LTV:CAC ratio of 5:1+
- 20%+ of active users making referrals

**Year 2-3 Targets**:
- 15,000-40,000 users
- $3-10M ARR
- Monthly churn < 3%
- NPS score 60+

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|----------|
| Total Users | 2,000 | 5,000 | 15,000 |
| LTD Revenue | $160K | $300K | $400K |
| MRR | $0 | $15K | $100K |
| DAU/MAU Ratio | 40% | 45% | 50% |
| NPS Score | 50+ | 55+ | 60+ |
| G2/Capterra Rating | 4.5+ | 4.5+ | 4.5+ |
| Monthly Churn | — | < 5% | < 3% |
| CAC (Subscription) | — | $30 | $50 |
| LTV:CAC Ratio | — | 5:1 | 8:1 |
| Avg Invoices/User/Month | 20+ | 25+ | 30+ |
| Payment Volume Processed | $500K | $3M | $15M |

---

## MVP Scope

### Core Features

The MVP delivers the complete **Quote > Schedule > Invoice > Get Paid** workflow, offline-capable, on mobile:

**1. Quoting & Estimates**
- Create quotes from pre-built trade pricebook templates (HVAC, plumbing, electrical)
- Custom line items with labor, materials, and markup
- Photo attachments (job site documentation)
- Send branded quote PDF to customer via SMS
- Customer approval via text link (tap to approve)

**2. Scheduling & Dispatch**
- Calendar view with drag-and-drop job scheduling
- Customer appointment reminders via SMS (automated)
- Basic dispatch view for 2-5 tech shops (who's where, what's next)
- Google Calendar / Apple Calendar sync

**3. Job Management**
- Job status tracking (quoted, scheduled, in-progress, complete)
- On-site photo documentation
- Digital customer signature capture
- Job notes and work description
- Auto-generate invoice from approved quote

**4. Invoicing & Payments**
- Professional branded invoices (auto-generated from job completion)
- Send invoice via SMS with payment link
- Accept credit/debit card payments on-site and via link
- Payment status tracking (sent, viewed, paid)
- Partial payment support

**5. QuickBooks Integration**
- QuickBooks Online sync (customers, invoices, payments)
- Automatic sync on job completion and payment receipt
- Sync status dashboard with error reporting
- Manual re-sync capability

**6. Customer Management**
- Customer contact records with address and service history
- Job history per customer
- Search and filter customers

**7. Offline-First Architecture**
- Full workflow operates without connectivity
- Automatic background sync when connection restored
- Conflict resolution for multi-device scenarios
- Local storage with encrypted data at rest

**8. Mobile Apps**
- iOS and Android native apps with feature parity
- Optimized for one-handed use
- Push notifications for quote approvals, payments, and schedule changes

### Out of Scope for MVP

The following are explicitly **not included** in the MVP to maintain focus and simplicity:

- **Route optimization** — Deferred to v2. Most solo operators know their service area and routes.
- **Marketing tools** (email campaigns, review requests, referral tracking) — Adds complexity without solving the core workflow problem.
- **Inventory/parts management** — Adds significant scope. Pricebook templates cover pricing; actual inventory tracking is a v2+ feature.
- **QuickBooks Desktop integration** — QBO first. Desktop integration via Web Connector is fragile and maintenance-heavy. Deferred to v2 based on user demand.
- **Advanced reporting/analytics** — Basic "money in / money out" is sufficient for MVP. Detailed reports in v2.
- **Multi-location/franchise management** — Target is 1-5 person shops, not multi-location businesses.
- **Proposal builder** (multi-option quotes, financing integration) — Solo operators need simple quotes, not complex proposals.
- **Fleet/vehicle tracking** — Not relevant for 1-5 person shops.
- **AI-powered features** (smart scheduling, predictive pricing, voice-to-job-notes) — Deferred to post-MVP. Focus on reliable basics first.
- **Web/desktop app** — Mobile-first means MVP is mobile-only. A basic web dashboard for the office partner is the one exception (read-only schedule + invoice status view).
- **Payroll integration** — Out of scope for micro teams where payroll is handled separately.
- **Permit tracking / compliance management** — Vertical-specific complexity deferred to v2+.

### MVP Success Criteria

The MVP is validated when:

1. **Onboarding speed**: 80%+ of new users send their first invoice within 60 minutes of signup
2. **Daily usage**: 40%+ DAU/MAU ratio within 30 days of launch (users are actually using it daily on jobs)
3. **Offline reliability**: Zero data loss incidents in offline-to-online sync during beta testing
4. **QuickBooks sync**: 99.9%+ sync success rate with zero duplicate transactions
5. **Payment adoption**: 50%+ of users process at least one payment through the platform within first month
6. **AppSumo rating**: 4.5+ star average with 100+ reviews during LTD period
7. **Retention signal**: 70%+ of LTD users still active after 90 days
8. **Community proof**: Organic mentions in trade subreddits from real users (not planted)

**Go/No-Go Decision Point**: At month 3 post-LTD launch, evaluate whether to proceed to subscription pricing based on: active usage rate (>40% DAU/MAU), NPS (>50), and qualitative user feedback confirming core workflow value.

### Future Vision

**Near-term (V2 — Months 6-12)**:
- Route optimization (basic — minimize drive time between jobs)
- QuickBooks Desktop integration
- Advanced reporting dashboard (revenue trends, job profitability, tech performance)
- Customer review request automation (prompt customers for Google/Yelp reviews after completed jobs)
- Equipment/asset tracking per customer (what's installed, warranty dates, maintenance history)

**Medium-term (V3 — Year 2)**:
- AI-powered quote suggestions based on job type, location, and historical pricing
- Voice-to-job-notes (dictate job notes hands-free while working)
- Embedded customer financing ("Buy Now, Pay Later" for larger jobs)
- Additional trade verticals (landscaping, pest control, cleaning, garage doors)
- Multi-language support (Spanish — critical for the growing Hispanic trades workforce)
- Apprentice/training management tools

**Long-term (Year 3+)**:
- IoT integration (smart HVAC systems sending service alerts directly to the app)
- Predictive maintenance scheduling based on equipment age and service history
- Marketplace connecting contractors with suppliers for parts ordering
- Insurance/warranty claim automation
- Geographic expansion to Canada, UK, Australia
- Platform API for third-party integrations

**The north star**: Become the default business operating system for every 1-10 person trades shop in North America — the tool they open first thing in the morning and that handles everything between "customer calls" and "money in the bank."

---

## Competitive Positioning

### Positioning Statement

**For** solo and micro trades operators (1-5 person HVAC, plumbing, and electrical shops) **who** need to quote, schedule, invoice, and get paid without the complexity and cost of enterprise FSM software, **our product** is a mobile-first, offline-capable field service management tool **that** delivers the complete job lifecycle in four taps at a flat rate with no per-user fees. **Unlike** ServiceTitan, Jobber, and Housecall Pro, **our product** works fully offline, costs a fraction of the price, and can be set up in under an hour with trade-specific pricebook templates.

### Competitive Advantages Summary

```
                        Us        Jobber      HCP         ServiceTitan
Pricing Model           Flat      Per-user    Per-user    Per-tech
Monthly Cost (3 users)  $29-39    $109        $189        $750-1,500
Offline-First           Yes       Limited     Limited     No
Setup Time              <1 hour   Days        Days        6-12 months
Trade Pricebooks        Yes       No          No          Yes
Unlimited Users         Yes       No          No          No
QuickBooks (base tier)  Yes       No ($109+)  No ($189+)  Yes
LTD Available           Yes       No          No          No
```

---

## Go-to-Market Summary

### Distribution Strategy

| Phase | Timeline | Channel | Target |
|-------|----------|---------|--------|
| LTD Launch | Months 1-3 | AppSumo ($79 LTD) | 2,000-5,000 users, $160-400K revenue |
| Community Seeding | Months 2-6 | Reddit, HVAC-Talk, Facebook groups | Organic advocacy from real users |
| Review Building | Months 3-9 | G2, Capterra, Trustpilot | 4.5+ rating, 100+ reviews |
| Subscription Launch | Months 6-12 | Direct + referral program | $100K MRR target |
| Paid Acquisition | Months 9-18 | Google/YouTube ("Jobber alternative") | Scale to 15,000+ users |

### Key Risks and Mitigations

| Risk | Mitigation |
|------|-----------|
| Jobber launches stripped-down solo tier | Move fast, build community loyalty before competitive response. Differentiate on offline-first and flat-rate — both hard for Jobber to adopt without cannibalizing revenue. |
| QuickBooks API changes break integration | Use Unified API layer (Apideck/Merge). Invest in automated integration testing. Support both QBO and QBD (v2). |
| LTD users don't convert to subscription | Set clear "founding member" terms. Build features that provide ongoing value. LTD users become advocacy channel regardless of conversion. |
| Offline-first architecture is technically complex | Invest in offline sync engineering upfront. Use proven patterns (CRDTs, event sourcing). Budget for edge case testing across device types and OS versions. |
| Trade-specific pricebook data is hard to source | Start with HVAC (largest market), add plumbing and electrical based on user demand. Partner with industry associations for pricing data. |

---

**Product Brief Completion Date:** 2026-03-23
**Status:** Complete — Ready for PRD creation
**Recommended Next Step:** `create-prd` — Create detailed Product Requirements Document
