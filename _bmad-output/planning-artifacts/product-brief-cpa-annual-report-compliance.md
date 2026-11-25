---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/state-annual-report-compliance-cpa-firms.md
  - _bmad-output/planning-artifacts/market-research-cpa-annual-report-compliance.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-11-25'
author: Root
research_topic: 'cpa-annual-report-compliance'
---

# Product Brief: CPA Annual Report Compliance Portal

---

## Executive Summary

Small CPA and accounting firms (1–10 staff) face a growing but systematically under-served problem: managing state annual report and LLC renewal filings for 100+ client entities spread across all 50 states. Each filing takes ~2 minutes, but the burden lies in deadline tracking, client-chasing for entity info, and preventing costly administrative dissolutions — none of which today's tools handle well for the solo practitioner.

**The product** is a white-label compliance portal for small CPA firms that centralizes all 50-state annual report deadlines, automates client reminders, and lets the CPA white-label the portal under their own brand — turning compliance burden into a recurring revenue service line. The CPA pays $49–99/month; they charge clients $25–75/filing as a service fee, making the tool self-funding after 1–2 filings.

The only direct competitor — FileForms (FileFormsPRO) — explicitly markets white-label CPA compliance but carries a C+ BBB rating, spam accusations, and per-entity pricing ($99–149/filing) that price out the solo practitioner managing 20–50 entities. Our position is **trustworthy, affordable challenger**: per-firm flat subscription, self-serve onboarding, transparent pricing, and a first-mover AppSumo/LTD launch in a category no compliance SaaS has touched on that platform.

Market validation is strong: a r/taxpros thread explicitly requested this exact tool (reddit.com/r/taxpros/comments/1qrkwud). The TAM is ~25,000 qualifying CPA firms; a realistic 3-year SOM of 5–10% penetration yields $440K–$2.4M ARR. The $10K MRR target requires just 135 subscribers at ~$74/month average — achievable within 6 months.

**Build decision: BUILD — Tier 1 (Score 89/105)**

---

## Core Vision

### Problem Statement

Small CPA and accounting firms (1–10 staff) are the primary compliance liaison for small business clients who own LLCs and corporations. These clients need their state annual reports and LLC renewals filed every year — a task with varying deadlines across all 50 states, different filing fees, and serious consequences (administrative dissolution, loss of good standing) for missing them.

The current state is entirely manual:
- Spreadsheets or calendar reminders to track 100+ entity deadlines
- Email and phone calls to chase clients for entity information before filing
- Logging into individual state Secretary of State portals for each filing
- No white-label way to present a branded compliance service to clients
- Registered agent firms like Harbor Compliance charge the end-client directly, cutting the CPA out of the relationship and revenue entirely

As LLC formation rates hit record levels (3.5 million new LLCs formed in 2025 alone), the volume of this work grows every year, but the tooling has not kept pace for small CPA practices.

### Problem Impact

The pain manifests across four dimensions:

1. **Time cost**: Managing 100+ client entities manually consumes disproportionate administrative time — the 2 minutes of actual filing time is dwarfed by tracking, reminder, and client-chasing overhead.

2. **Revenue leakage**: CPAs who could charge $25–75 per filing as a professional service fee often don't, because they lack a structured system to offer compliance management as a defined service line.

3. **Client relationship risk**: When a client entity lapses into administrative dissolution because a deadline was missed, the CPA bears reputational damage even if it was the client's fault.

4. **Professional displacement**: Harbor Compliance and similar services go around the CPA directly to the client, undermining the CPA's role as trusted advisor for entity compliance.

### Why Existing Solutions Fall Short

| Solution | Why It Fails the Solo CPA |
|---------|--------------------------|
| **FileForms / FileFormsPRO** | Per-entity pricing ($99–149/filing) makes it 5–10x more expensive than a flat subscription for small-entity-volume firms. C+ BBB rating and spam accusations undermine trust in a compliance-critical product. Requires sales demo for enterprise pricing — no self-serve. |
| **FileJet** | Per-entity pricing ($150–350/entity/year) is prohibitive for solo CPAs with 20–100 small-business clients. Enterprise-oriented UI; no AppSumo; no self-serve entry point. |
| **Harbor Compliance** | Cuts the CPA out entirely — charges end-client directly, no white-label for the CPA intermediary model. |
| **CT Corporation** | Enterprise only; custom quotes; weeks of onboarding; irrelevant to solo practitioners. |
| **TaxDome** | Dominant practice management platform but explicitly does not handle state entity compliance at the filing/tracking level. It is a companion problem, not a competitor. |
| **Calendar reminders / spreadsheets** | Current state: scales to ~15 entities before breaking down. No automated reminders, no client portal, no audit trail. |

**Key insight**: FileForms has entered this market, invalidating the "no white-label solution" claim from the original brief — but their trust problems and pricing model create a genuine entry point for a leaner, cheaper, trust-first challenger.

### Proposed Solution

A white-label compliance portal built specifically for solo and small CPA firms (1–10 staff) managing 10–200 client entities across all 50 states.

**Core thesis**: Make the CPA the compliance intermediary. They log in, see all client entities with live deadlines, send automated reminders under their own brand, and charge clients a service fee on top — turning compliance from a burden into a profit center.

**Product name working title**: *ComplianceDesk* (or white-labeled per firm)

**How it works in practice**:
1. CPA signs up, configures their firm name + logo (white-label setup takes 5 minutes)
2. CPA adds client entities: name, state of formation, entity type, formation date
3. System auto-calculates all upcoming annual report deadlines from the 50-state database
4. 90/60/30-day automated reminder emails go to the client (from the CPA's branded portal)
5. CPA marks filings as complete; system tracks status per entity
6. Client sees a simple portal showing their upcoming deadlines under the CPA's brand
7. CPA invoices client $25–75 per filing as a professional service fee

**Pricing model**:
- Starter: $49/month (up to 50 entities, all 50 states, reminders, white-label)
- Growth: $99/month (up to 200 entities, client portal, billing feature)
- AppSumo LTD: $79 (50 entities) / $149 (200 entities) / $249 (unlimited)

### Key Differentiators

1. **Per-firm flat pricing** — structurally 5–10x cheaper than FileForms/FileJet for the solo CPA managing 20–100 entities ($588/yr vs. $5,000–7,500/yr at FileForms)

2. **Trust-first positioning** — no spam, transparent pricing page (no "book a demo" to see prices), self-serve onboarding, clean reputation from day 1 as direct contrast to FileForms' C+ BBB rating

3. **Built for the CPA intermediary model** — white-label included in the base plan (FileForms charges enterprise pricing for white-label); CPA billing/service-fee feature built in

4. **AppSumo first-mover** — no compliance SaaS in this niche has launched on AppSumo; solo CPA practitioners are exactly the AppSumo buyer demographic

5. **TaxDome companion** — positions as the entity compliance layer TaxDome explicitly lacks, with a Zapier integration path to TaxDome's 10,000+ firm customer base

6. **Why now**: 3.5M new LLCs formed in 2025 compounds the annual filing burden; CPA capacity crunch (documented in Journal of Accountancy 2026) creates acute demand for administrative automation

---

## Target Users

### Primary Users

**Persona: "Sarah, the Solo Business CPA"**

Sarah runs a 2-person CPA firm in suburban Ohio. She holds a CPA license and focuses primarily on small business clients — 70% are LLCs or S-corps. She has 85 active client entities across 12 states.

- **Role**: Owner-operator; she does tax prep, bookkeeping, and "whatever the client needs"
- **Current state**: Uses a shared Google Sheet with filing deadlines that she updates manually. Gets behind during tax season (Jan–April) and scrambles on annual reports in Q3
- **Biggest frustration**: Clients don't respond to email reminders until it's too late; she's had two clients get administrative dissolution notices in the past three years
- **Revenue opportunity**: She charges some clients for annual report filings ($50/filing ad hoc) but hasn't systematized it
- **Software budget**: $29–99/month for tools that save real time; she uses TaxDome ($80/month), QuickBooks, and Canopy
- **Discovery path**: r/taxpros, the r/taxpros thread explicitly asking for this tool, state CPA society newsletter, AppSumo (she's bought 4 tools there)
- **What makes her say "this is exactly what I needed"**: Sees all her client deadlines in one dashboard on Monday morning, reminders go out automatically under her firm's name, and she can charge clients cleanly for the service

**Persona: "Marcus, the Growth-Mode Bookkeeping Firm Owner"**

Marcus runs a 5-person bookkeeping/accounting firm that deliberately targets real estate investor clients. He manages 200+ LLCs across 8 states, all owned by 30 clients who each have 5–20 entities.

- **Role**: Firm owner; delegates most work but handles client relationships
- **Current state**: His team uses a custom Airtable base to track LLC renewals — it works but requires manual updates and breaks down when staff turns over
- **Biggest pain**: His clients expect a "white-glove" compliance service, but his current process looks manual if they ever peek behind the curtain
- **Revenue opportunity**: Charges $50/entity/year for "entity maintenance" but the backend is entirely manual
- **What makes him say "this is exactly what I needed"**: A polished client portal his clients can log into that shows their entity statuses — something that makes his firm look like it has a professional compliance infrastructure

**Persona: "David, the Founding Solo Practitioner"**

David just left a mid-sized CPA firm to go solo. He brought 40 clients with him, 60% of whom have business entities. He's re-evaluating every tool and looking for the most efficient stack at the lowest cost.

- **Role**: Solo; wearing all hats in year 1
- **Current state**: Just set up TaxDome but realizes it doesn't handle annual reports
- **Pain**: The administrative dissolution risk is new to him as a solo — at the firm, it was someone else's problem
- **What makes him say "this is exactly what I needed"**: Something that integrates with his TaxDome workflow, is cheap enough that he doesn't hesitate to sign up, and comes with a transparent pricing page (no sales demo required)

### Secondary Users

**Client entities (small business owners)**

The end-clients of the CPA — small business owners who own one or more LLCs or corporations. They interact with the product only through the white-labeled client portal:
- See their upcoming filing deadlines
- Receive automated reminder emails under the CPA's brand
- Confirm entity information when prompted
- Do not see the tool's branding or pricing

They are not buyers or decision-makers for the product, but their positive experience ("I got a reminder from my CPA's portal") reinforces the CPA's service value.

**Bookkeeping firms and tax prep firms (adjacent ICP)**

Firms that aren't CPA-licensed but serve business entity clients face the identical pain. They are a natural expansion channel once the product establishes credibility with CPAs. The same product serves them with minimal adaptation.

**Small law firms (estate/business attorneys)**

Solo and small law firms handling LLC formations and business law work face the same annual report tracking burden. They are an adjacent secondary ICP, particularly relevant for the white-label positioning (attorneys also want client-facing portals under their firm brand).

### User Journey

**Discovery → Value Realization for Primary ICP (Solo Business CPA)**

| Stage | What Happens | Product Role |
|-------|-------------|-------------|
| **Discovery** | CPA reads r/taxpros thread or gets referral from colleague; sees AppSumo deal | Transparent pricing page, no-demo self-serve signup, AppSumo listing |
| **Onboarding (Day 1)** | Visits pricing page, signs up for free trial, sets up firm name + logo, adds 5 test client entities | <5 min white-label setup; bulk entity import via CSV; immediate deadline display |
| **First value moment (Day 1–3)** | Sees dashboard showing all 5 entity deadlines in one view; first automated reminder email sends under their firm's brand | The dashboard itself is the "aha" moment — no more hunting through spreadsheets |
| **Activation (Week 1)** | Imports full client entity list (20–80 entities); configures reminder schedule | Bulk CSV import; deadline auto-calculation from formation date; customizable reminder timing |
| **Core usage (Ongoing)** | Monday morning ritual: open dashboard, see what's coming up in 90 days, confirm last week's filings are marked done | Weekly active use; entity status tracking; reminder audit log |
| **Service monetization (Month 1–2)** | CPA sets up service fee billing and starts charging clients $50/filing; tool pays for itself | Billing feature or at minimum clear per-filing tracking for invoicing |
| **Retention driver** | Client portfolio grows; new clients added; annual filing cycle repeats every year | New client entities added; perpetual annual cycle = perpetual value |
| **Advocacy** | CPA mentions it in r/taxpros or state CPA society meeting | G2/Capterra review prompt; referral program |

---

## Success Metrics

### User Success Metrics

The core user value creation happens when a CPA can say: "I didn't miss a single annual report deadline this year, and I charged clients for every filing." User success metrics track this outcome:

| Metric | Definition | Target |
|--------|-----------|--------|
| **Time-to-first-deadline-view** | Minutes from signup to seeing client entities with live deadlines | <10 minutes |
| **Entity import completion rate** | % of users who import 10+ entities within 7 days of signup | >60% |
| **Reminder delivery rate** | % of automated reminders sent successfully (no bounces/spam) | >95% |
| **Filing completion rate** | % of due filings marked "Filed" before deadline across all users | >90% |
| **Weekly active users** | % of paying customers who log in at least once/week | >50% |
| **Service fee activation rate** | % of customers who use the billing/invoicing feature within 60 days | >40% |
| **NPS** | Net Promoter Score from paying customers | >50 at Month 6; >60 at Month 12 |

**North Star Metric**: Percentage of due filings marked complete before deadline across all client entities on the platform. This directly measures whether the product is solving the core problem.

### Business Objectives

**12-Month Business Objectives:**

1. **Revenue**: $10K MRR by Month 6; $32K–$40K MRR by Month 12 (400–500 paying customers)
2. **AppSumo launch**: 200–400 LTD sales generating $22K–$60K one-time cash within the first AppSumo campaign
3. **Reputation**: Clean trust score from day 1 — G2 rating >4.5, no unresolved BBB complaints, Trustpilot >4.0
4. **Market position**: Recognized as the affordable alternative to FileForms in r/taxpros and state CPA society newsletters
5. **TaxDome ecosystem entry**: Zapier integration live by Month 6; product mentioned in TaxDome community channels

**3-Year Business Objectives:**

1. $1M+ ARR with 800–1,000 active paying subscribers
2. Acquisition by a practice management platform (TaxDome, Karbon, Practice Ignition) or registered agent company
3. Category expansion to law firms and bookkeeping firms as adjacent ICPs

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying subscribers | 50 | 135 | 400–500 |
| MRR | $2,450 | $10K | $32K–40K |
| Avg entities per customer | 20 | 30 | 40 |
| Monthly churn | <7% | <5% | <3% |
| CAC (blended) | — | <$150 | <$100 |
| LTV:CAC ratio | — | >3:1 | >5:1 |
| AppSumo LTD sales | 0 | 200 | 400 |
| G2 reviews | 5 | 20 | 50+ |
| Support tickets/customer/month | <2 | <1 | <0.5 |
| State data accuracy SLA | 99% | 99% | 99.5% |

**Leading indicators to watch monthly:**
- Free trial → paid conversion rate (target: >25%)
- Entity import rate within first 7 days (leading indicator of retention)
- r/taxpros and CPA community mentions (organic reach signal)

---

## MVP Scope

### Core Features

The MVP is scoped to deliver the minimum value that makes the core loop functional: CPA adds entities → system tracks deadlines → automated reminders go out → CPA marks filings complete.

**Feature 1: 50-State Annual Report Deadline Database**
- Complete database of LLC and corporation annual report deadlines for all 50 states + DC
- Covers: due date logic (fixed date vs. anniversary-based), applicable entity types, filing fees (reference only), state filing portal URLs
- Auto-calculates next filing deadline from entity formation date and state rules
- Updated quarterly with a documented maintenance process
- _This is the foundational data asset — without it, nothing else works_

**Feature 2: CPA Entity Dashboard**
- Add/edit/delete client entities: entity name, state of formation, entity type (LLC/Corp/etc.), formation date, client name
- Bulk import via CSV (critical for onboarding — manually entering 50+ entities one-by-one kills the experience)
- Dashboard view: sortable by deadline, client, state; color-coded urgency (90/60/30/overdue)
- Status tracking per entity: Upcoming / Reminder Sent / Filed / Overdue
- Filing completion log with timestamp (audit trail for CPA)

**Feature 3: Automated Reminder Emails**
- Configurable schedule: 90, 60, and 30 days before each deadline (CPA can customize)
- Sent to: CPA, client, or both (configurable per entity)
- Sent from: white-labeled email (e.g., "compliance@smithcpa.com" or via SendGrid with display name set to CPA firm)
- Reminder includes: entity name, state, deadline date, action link to file on state portal
- Delivery tracking: sent/opened/failed status visible in dashboard

**Feature 4: White-Label Configuration**
- CPA sets: firm name, logo, primary color, reply-to email address
- All client-facing communications (emails, portal) show CPA's brand — no mention of the underlying software vendor
- Configuration takes <5 minutes; logo upload + color picker + firm name = done

**Feature 5: Client Portal (Read-Only)**
- Simple client-facing URL (e.g., compliance.smithcpa.com or smithcpa.compliancedesk.com)
- Client logs in with email (magic link, no password needed)
- Sees: their entity names, states, upcoming deadlines, filing status
- Cannot edit anything — view only; CPA controls all data
- Mobile-responsive (clients check this on their phone)

**Feature 6: Pricing & Billing Infrastructure**
- Transparent pricing page (no "book a demo" — this is a core trust differentiator vs. FileForms)
- Stripe integration for subscription billing
- Free trial: 14 days, no credit card required
- Subscription tiers: Starter ($49/mo, 50 entities) and Growth ($99/mo, 200 entities)
- Annual billing option with ~17% discount ($490/$990 per year)

### Out of Scope for MVP

The following are explicitly deferred to maintain a 6–8 week build timeline and avoid overbuilding before validation:

| Deferred Feature | Rationale | When |
|----------------|-----------|------|
| **Automated filing integration** (Delaware/Wyoming API) | Manual filing via state portals is acceptable for MVP; API filing is complex and state-dependent | v2 (Month 4–6 post-launch) |
| **CPA billing/invoicing feature** (charge clients within the app) | CPAs can use their existing invoicing tool; this adds payment processing complexity | v2 |
| **TaxDome native integration** | Zapier integration is sufficient for MVP; native integration requires partnership negotiation | v2 (Month 6) |
| **BOI/Corporate Transparency Act compliance tracking** | Adjacent compliance need but separate regulatory domain; adds scope complexity | v2 |
| **Multi-state foreign qualification tracking** | Important but secondary to annual report tracking; adds data complexity | v2 |
| **Business license renewals** | FileJet covers this; it's a future expansion, not core MVP | v3 |
| **Firm-to-firm referral/reseller program** | Nice-to-have for growth; not needed for initial validation | v3 |
| **Mobile app (iOS/Android)** | Mobile-responsive web is sufficient; native apps add platform maintenance burden | v3 |
| **Automated state data updates** (scraping SOS portals) | Manual data maintenance process is acceptable for MVP; automation is a future operational improvement | v2 |

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **50 paying customers** signed up within 3 months of launch (proves willingness to pay)
2. **>90% filing completion rate** — entities on the platform are not missing deadlines (proves core value)
3. **<7% monthly churn** at Month 3 (proves retention; compliance SaaS should have high retention)
4. **NPS >40** from initial beta cohort (proves satisfaction)
5. **AppSumo application approved** (AppSumo review process validates product readiness)
6. **Zero unresolved trust/data-accuracy complaints** (critical: a missed deadline caused by bad state data is a show-stopper)

**Go/no-go decision point at Month 3:**
- If 50+ paying customers and <7% churn: proceed to AppSumo launch and v2 planning
- If <25 paying customers: investigate conversion bottleneck (pricing? onboarding? data quality?) before AppSumo launch
- If >3 trust/data-accuracy incidents: halt AppSumo launch, invest in data quality infrastructure first

### Future Vision

**Version 2 (Months 4–9 post-launch):**

- **Automated filing integration**: Start with Delaware (API available) and Wyoming; expand to 10 most common LLC states; full automation becomes a premium tier differentiator
- **CPA billing feature**: Allow CPAs to generate and send invoices to clients directly from the portal for annual report service fees; integrates with Stripe and optionally syncs to QuickBooks
- **TaxDome Zapier integration**: Entity deadlines push to TaxDome as tasks; new TaxDome clients auto-sync to ComplianceDesk
- **BOI/CTA compliance tracking**: The Corporate Transparency Act created a new beneficial ownership reporting obligation for millions of LLCs — a natural upsell to the same CPA user base
- **Team/multi-user support**: Allow firms with 2–10 staff to have multiple logins with role-based permissions

**Version 3 (Months 12–18 post-launch):**

- **Law firm channel**: Launch a law-firm-specific landing page and community outreach; same product, different channel and use-case framing
- **Bookkeeping firm channel**: Bookkeeping firms handling small business entity management are the second-largest addressable segment
- **Multi-state foreign qualification tracking**: Track entities registered to do business in states beyond their home state — a growing complexity as small businesses expand
- **Business license renewals**: Add city/county business license renewal tracking alongside state annual reports
- **API-first filing layer**: As more states modernize their SOS portals, build a filing API that processes state filings programmatically; this becomes the long-term moat

**3–5 Year Vision:**

The long-term destination is a **comprehensive entity lifecycle management platform for small professional service firms** — covering formation, annual compliance, foreign qualifications, beneficial ownership, and business licenses, all white-labeled under the CPA/attorney brand. The compliance data layer itself (50-state deadline database, filing APIs, state portal connectors) becomes a defensible infrastructure moat.

Acquisition path: TaxDome ($160M+ valuation), Wolters Kluwer, Thomson Reuters, or a registered agent company (Registered Agents Inc., Northwest Registered Agent) looking to offer a CPA-intermediary white-label compliance layer.

---

## Go-to-Market Strategy

### Launch Sequence

**Phase 1: Beta (Weeks 1–8, before AppSumo)**
- Post in r/taxpros and r/taxpro showing the product ("Show Reddit: I built the tool this thread was asking for")
- Reference the r/taxpros/comments/1qrkwud thread explicitly as the validation source — this builds immediate credibility
- Offer first 50 signups at $29/month (founding member pricing)
- Collect NPS, reviews, and testimonials from every beta user before AppSumo
- Fix any data-accuracy issues found in beta before public launch

**Phase 2: AppSumo Launch (Months 3–5)**
- Apply to AppSumo once product is stable with 20–30 paying beta customers (AppSumo requires proof of users)
- LTD tiers: $79 / $149 / $249 — mirrors the monthly pricing model
- Prioritize AppSumo because: (a) first-mover in this niche category, (b) cash injection, (c) solo CPA = AppSumo buyer demographic
- Expected: 200–400 LTD sales generating $22K–60K one-time cash

**Phase 3: Sustainable Channels (Months 6–12)**
- State CPA society newsletters (direct ICP, low competition)
- Content: "50-state annual report deadline guide for CPAs" (high SEO value, establishes authority)
- Target keywords: "state annual report filing software CPA," "LLC renewal tracking CPA firm," "white label compliance portal accounting firm"
- TaxDome community outreach (Facebook group, Slack): "The entity compliance layer TaxDome doesn't have"
- CPA LinkedIn communities

### Competitive Positioning

**Core message**: "The affordable, transparent alternative to FileForms — no demo required, flat monthly pricing, your brand on everything."

**Against FileForms**: "FileForms charges $99–149 per filing. At 50 entities, that's $5,000–7,500 per year. ComplianceDesk is $49/month — $588/year. Same white-label capability, 10x cheaper."

**Against spreadsheets/calendar**: "Stop chasing clients. Set it up once, let automated reminders do the work, and charge clients for the service."

---

## Risk Mitigation Summary

| Risk | Mitigation |
|------|-----------|
| FileForms competition | Compete on price (5–10x cheaper), trust (clean reputation vs. BBB C+), simplicity; target the solo CPA they don't serve |
| 50-state data maintenance | Build quarterly update process from day 1; treat data accuracy as a core product metric; consider partnering with a registered agent data provider |
| CPA liability from bad data | Explicit "CPA is responsible for review and verification" disclaimers in ToS and UI; the tool tracks and reminds, the CPA decides and files |
| Narrow ICP | Expand to law firms and bookkeeping firms as adjacent ICPs after MVP validation |
| TaxDome building natively | Build TaxDome-complementary positioning (integration partner); if TaxDome builds it natively, pivot to white-label OEM for smaller practice management platforms |

---

## Implementation Timeline

| Week | Milestone |
|------|-----------|
| 1–2 | 50-state deadline database built and verified |
| 3–4 | Core dashboard: entity creation, deadline calculation, CSV import |
| 5–6 | Email reminder system + white-label configuration |
| 7–8 | Client portal + status tracking + billing page (Stripe) |
| Week 8 | First 10 beta customers from r/taxpros |
| Month 3 | 50 paying beta customers; AppSumo application submitted |
| Month 4–5 | AppSumo launch |
| Month 6 | TaxDome Zapier integration; v2 planning begins |

---

**Product Brief completed:** 2026-11-25
**Next step:** Create PRD (`create-prd`) — this brief provides the foundation for detailed requirements, acceptance criteria, and technical specifications.
