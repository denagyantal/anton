---
stepsCompleted: ['step-01-init.md', 'step-02-discovery.md', 'step-02b-vision.md', 'step-02c-executive-summary.md', 'step-03-success.md', 'step-04-journeys.md', 'step-05-domain.md', 'step-06-innovation.md', 'step-07-project-type.md', 'step-08-scoping.md', 'step-09-functional.md', 'step-10-nonfunctional.md', 'step-11-polish.md', 'step-12-complete.md']
inputDocuments:
  - ideas/shortlisted/state-annual-report-compliance-cpa-firms.md
  - _bmad-output/planning-artifacts/market-research-cpa-annual-report-compliance.md
workflowType: 'prd'
lastStep: 14
date: '2026-11-25'
author: Root
research_topic: 'cpa-annual-report-compliance'
classification:
  projectType: 'saas_b2b'
  domain: 'professional_services_compliance'
  complexity: 'medium'
  projectContext: 'greenfield'
---

# Product Requirements Document — CPA Annual Report Compliance Portal

**Author:** Root
**Date:** 2026-11-25
**Status:** Complete
**Working Product Name:** ComplianceDesk

---

## Executive Summary

Small CPA and accounting firms (1–10 staff) are the primary compliance liaison for small business clients who own LLCs and corporations. These clients need state annual reports and LLC renewals filed every year — a task with varying deadlines across all 50 states, different filing fees, and serious consequences (administrative dissolution, loss of good standing) for missing them.

The current state is entirely manual: spreadsheets, calendar reminders, and phone calls to chase clients — a process that scales to roughly 15 entities before it breaks down. As LLC formation rates hit 3.5 million new entities in 2025, volume grows every year while tooling for solo CPA practices has not kept pace.

ComplianceDesk is a **white-label compliance portal for small CPA firms** that centralizes all 50-state annual report deadlines, automates client reminder emails, and lets the CPA white-label the portal under their own brand — turning a manual compliance burden into a recurring revenue service line. The CPA pays $49–99/month; they charge clients $25–75/filing as a service fee, making the tool self-funding after 1–2 filings per month.

The only direct competitor — FileForms (FileFormsPRO) — has entered this market but carries a C+ BBB rating, spam accusations, and per-entity pricing ($99–149/filing) that makes it 5–10x more expensive than a flat subscription for a solo practitioner managing 20–100 entities. ComplianceDesk's position is **affordable, trust-first challenger**: per-firm flat subscription, self-serve onboarding, transparent pricing page, and a first-mover AppSumo/LTD launch in a category no compliance SaaS has touched on that platform.

Market validation is explicit: an r/taxpros thread (reddit.com/r/taxpros/comments/1qrkwud) asked for this exact tool. TAM is ~25,000 qualifying CPA firms; a realistic 3-year SOM of 5–10% yields $440K–$2.4M ARR. The $10K MRR target requires 135 subscribers at ~$74/month average — achievable within 6 months.

**Build decision: BUILD — Tier 1 (Score 89/105)**

### What Makes This Special

**Structural pricing advantage**: Per-firm flat pricing is fundamentally different from FileForms/FileJet's per-entity model. At 50 entities, ComplianceDesk costs $588/year vs. $5,000–7,500/year for FileForms. The solo CPA managing 20–100 entities will choose flat pricing every time.

**CPA intermediary model**: Every other compliance solution (Harbor Compliance, registered agent services) sells directly to the end-client, cutting the CPA out of the relationship and revenue. ComplianceDesk sells to the CPA and white-labels everything to their clients — the CPA becomes the compliance brand, not a middleman.

**Trust as a moat**: FileForms' C+ BBB rating and spam reputation are specific, known weaknesses that create a durable positioning opportunity for a clean-reputation challenger launched with transparent pricing, no-demo-required onboarding, and community-built credibility from r/taxpros.

**AppSumo first-mover**: No compliance SaaS in this niche has launched on AppSumo. Solo CPA practitioners are the AppSumo buyer demographic. The LTD launch is a cash injection + customer acquisition strategy competitors have not attempted.

## Project Classification

- **Project Type:** B2B SaaS — multi-tenant web application, subscription billing, white-label capability
- **Domain:** Professional services compliance (adjacent to fintech/legal; medium complexity)
- **Complexity:** Medium — no real-time requirements, no direct API integrations with state systems at MVP; primary complexity is data quality maintenance (50-state deadline database) and email deliverability
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A CPA firm using ComplianceDesk has succeeded when:

1. **Zero missed deadlines**: All entity annual reports due in the current year are filed on time — no administrative dissolution notices received by any client
2. **Self-funding service line**: The CPA is charging clients a service fee ($25–75/filing) that covers the ComplianceDesk subscription within the first billing cycle
3. **Time reclaimed**: CPA no longer manually tracks deadlines or chases clients for entity info — the system handles both
4. **Branded experience**: Clients interact with the CPA's compliance portal, not an unknown vendor — CPA's professional image is enhanced, not exposed

**Key user success indicator**: CPA logs into the dashboard on Monday morning, sees the week's upcoming deadlines at a glance, and has zero manual follow-up to do because reminders already went out.

### Business Success

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| Paying subscribers | 50 | 135 | 400–500 |
| MRR | $2,450 | $10,000 | $32,000–$40,000 |
| Monthly churn | <7% | <5% | <3% |
| Free trial → paid conversion | — | >25% | >25% |
| AppSumo LTD sales | 0 | 200 | 400 |
| G2 rating | — | >4.5 (20+ reviews) | >4.5 (50+ reviews) |
| CAC (blended) | — | <$150 | <$100 |

**North Star Metric**: Percentage of due filings marked complete before deadline across all client entities on the platform (target: >90%).

**Go/No-Go at Month 3**: 50+ paying customers AND <7% churn AND zero unresolved data-accuracy incidents → proceed to AppSumo launch. If <25 paying customers → investigate conversion bottleneck before AppSumo.

### Technical Success

- **Data accuracy SLA**: 50-state deadline database is correct for 99%+ of entities (errors causing missed deadlines = P0)
- **Email deliverability**: >95% of automated reminders reach inbox (not spam folder)
- **Uptime**: 99.5% availability during US business hours
- **Onboarding speed**: CPA completes white-label setup + imports first 10 entities within 15 minutes of signup

### Measurable Outcomes

| Outcome | Measurement | Target |
|---------|-------------|--------|
| Time-to-first-deadline-view | Minutes from signup to seeing entity deadlines on dashboard | <10 min |
| Entity import completion | % of users who import 10+ entities within 7 days | >60% |
| Reminder delivery rate | % of automated reminders delivered successfully | >95% |
| Filing completion rate | % of due filings marked filed before deadline | >90% |
| Weekly active use | % of paying customers logging in at least once/week | >50% |
| Service fee activation | % of customers using billing feature within 60 days | >40% |
| NPS | Net Promoter Score from paying customers | >50 at Month 6 |

## Product Scope

### MVP — Minimum Viable Product

**Core loop**: CPA adds entities → system auto-calculates deadlines → automated reminders send under CPA's brand → CPA marks filings complete → audit trail maintained.

**MVP Features:**

1. **50-state deadline database** — LLC and corporation annual report deadlines for all 50 states + DC; covers due date logic (fixed vs. anniversary-based), applicable entity types, filing fees (reference), state portal URLs; auto-calculates next deadline from formation date and state rules; updated quarterly
2. **CPA entity dashboard** — add/edit/delete entities (name, state, type, formation date, client); bulk CSV import; sortable/filterable deadline view with color-coded urgency (90/60/30/overdue); status tracking per entity (Upcoming / Reminder Sent / Filed / Overdue); filing completion log with timestamp
3. **Automated reminder emails** — configurable 90/60/30-day schedule; sent to CPA, client, or both (configurable per entity); white-labeled sender name and reply-to; reminder includes entity name, state, deadline, state portal URL; delivery tracking (sent/opened/failed)
4. **White-label configuration** — firm name, logo, primary color, reply-to email; all client-facing communications show CPA brand only; setup in <5 minutes
5. **Client portal (read-only)** — client-facing URL showing their entities, deadlines, filing status; magic link login (no password); mobile-responsive; zero ComplianceDesk branding visible to client
6. **Subscription billing** — transparent pricing page (no demo required); Stripe integration; 14-day free trial, no credit card; Starter ($49/mo, 50 entities) and Growth ($99/mo, 200 entities); annual billing with ~17% discount

### Growth Features (Post-MVP)

Targeted for Months 4–9 post-launch:

- **Automated filing integration**: Start with Delaware (API available) and Wyoming; expand to 10 most common LLC states; automated filing becomes premium tier differentiator
- **CPA billing/invoicing feature**: Generate and send invoices to clients directly from portal for annual report service fees; Stripe + optional QuickBooks sync
- **TaxDome Zapier integration**: Entity deadlines push to TaxDome as tasks; new TaxDome clients auto-sync to ComplianceDesk
- **BOI/Corporate Transparency Act tracking**: Beneficial ownership reporting obligations for the same client entities — natural upsell to CPA user base
- **Multi-user/team support**: 2–10 staff with role-based permissions per firm
- **Foreign qualification tracking**: Entities registered to do business in states beyond home state

### Vision (Future)

Months 12–18 and beyond:

- **Law firm channel**: Same product, attorney-branded landing page and community outreach
- **Bookkeeping firm channel**: Second-largest addressable segment after CPA firms
- **Business license renewals**: City/county business license renewal tracking alongside state annual reports
- **API-first filing layer**: Programmatic filing as more states modernize SOS portals — becomes the long-term moat
- **Acquisition target**: TaxDome ($160M+ valuation), Wolters Kluwer, Thomson Reuters, or registered agent company (Registered Agents Inc., Northwest Registered Agent)

---

## User Journeys

### Journey 1: Sarah — Solo CPA Onboarding and First Value (Primary Happy Path)

Sarah runs a 2-person CPA firm in suburban Ohio with 85 active client entities across 12 states. She currently uses a shared Google Sheet. She finds ComplianceDesk via an r/taxpros thread.

**Discovery**: Sarah reads an r/taxpros post where the founder references the validation thread (1qrkwud). She clicks to the pricing page, sees $49/month with a transparent comparison against FileForms, and starts a free trial — no credit card needed. She's onboarded within 5 minutes of landing on the pricing page.

**White-label setup (Day 1, ~5 minutes)**: Sarah uploads her firm logo, sets primary color to match her website, and adds her reply-to email (compliance@sarahohiocpa.com). She sees a preview of how reminder emails will look to her clients — they say "Smith Tax & Accounting" everywhere, with no mention of ComplianceDesk.

**Entity import (Day 1–2, ~20 minutes)**: Sarah exports her Google Sheet to CSV and uploads it. The system maps columns to entity fields (name, state, type, formation date, client). She reviews the mapped data, fixes 3 state codes, and imports all 85 entities in one click. The dashboard immediately shows her 85 entities sorted by urgency — 7 entities have deadlines within 60 days she hadn't noticed.

**First value moment**: Sarah's dashboard shows a row labeled "Miller Plumbing LLC — Delaware — due in 23 days — URGENT." She would have missed it. She marks it for immediate action and schedules a reminder. This is the aha moment: she's already avoided one crisis before paying a cent.

**Core weekly ritual (Ongoing)**: Every Monday morning, Sarah opens the dashboard and scans the "Next 90 Days" view. She sees which reminders have been sent and which clients have responded. She marks filings complete after filing them, keeping the audit trail clean.

**Service fee activation (Month 2)**: Sarah decides to formalize annual report filing as a service line. She sets up a simple service fee schedule ($50/filing) and starts including it on client invoices. The dashboard's per-entity filing log gives her the data she needs to invoice accurately. The tool now pays for itself every month.

**Journey reveals**: Dashboard (deadline view, urgency states), CSV import, white-label email setup, filing status tracking, per-entity audit log, client reminder delivery confirmation.

---

### Journey 2: Marcus — Multi-Entity Real Estate Firm Owner (Power User Activation)

Marcus runs a 5-person bookkeeping/accounting firm targeting real estate investor clients. He manages 200+ LLCs across 8 states, all owned by 30 clients who each own 5–20 entities. His current system is a custom Airtable base that breaks down during staff turnover.

**Discovery**: Marcus hears about ComplianceDesk from a colleague at a state CPA society meeting. He checks the pricing page, sees the Growth tier at $99/month for 200 entities, and calculates he's currently spending $1,200/year in Airtable + 5 hours/month of manual coordination. He signs up and schedules a Friday afternoon to migrate.

**Bulk setup (Friday, 2 hours)**: Marcus exports his Airtable base as CSV. The import accepts 200+ entities; he maps columns in 2 minutes. The system flags 12 entities with missing formation dates — Marcus fills those in from public SOS lookup, a task he'd deferred for months. By end of Friday, all 200 entities are in the system with deadlines calculated.

**Client portal activation**: Marcus configures subdomain compliance.marcusfirm.com (or uses the hosted URL). He sends one email to each of his 30 clients with their portal link. Clients log in with magic link and see their LLC statuses displayed under Marcus's firm branding. Three clients email back saying "this is exactly what I needed" — Marcus screenshots those for his testimonial file.

**Edge case — state data discrepancy**: One client LLC shows "Filed" in ComplianceDesk but the client is convinced the deadline passed. Marcus clicks through to the state SOS portal URL in the entity record and verifies directly. The system's deadline was correct; the client was confused. The direct-link-to-SOS feature resolves the discrepancy in 2 minutes without a support ticket.

**Journey reveals**: 200-entity import, client portal with subdomain, magic link login, per-entity SOS portal URL, filing status visible to client, discrepancy resolution via direct state link.

---

### Journey 3: David — Founding Solo Practitioner (Competitive Switcher from Manual Tools)

David just left a mid-sized CPA firm to go solo. He brought 40 clients, 60% of whom have business entities (24 entities across 6 states). He just set up TaxDome and is re-evaluating every tool.

**Discovery**: David searches "TaxDome annual report tracking" and finds a TaxDome community thread where ComplianceDesk is mentioned as the entity compliance layer TaxDome doesn't have. He finds the pricing page, reads the comparison to spreadsheets, and starts a trial.

**Minimal onboarding (30 minutes)**: David enters 24 entities manually (no CSV import needed at this scale). The dashboard shows him upcoming deadlines for the year. He sets up reminders to go to both him and each client.

**TaxDome integration**: David creates a Zapier zap: when a ComplianceDesk filing is due within 30 days, create a task in TaxDome assigned to him. This bridges his compliance tracking into his primary work management tool. No code required.

**Free trial → paid conversion**: At Day 10 of his free trial, David gets an automated reminder email (from his own firm's white-labeled address) for a client LLC. He realizes the system is already doing work for him. He converts to Starter plan at $49/month before the trial expires.

**Journey reveals**: Manual entity entry (single entity form), Zapier integration hook (deadline → TaxDome task), trial-to-paid conversion trigger, white-labeled reminder email preview in real-time.

---

### Journey 4: Client Entity Owner — Portal Experience (End-Client Interaction)

Robert is a small business owner who has 3 LLCs managed by his CPA, Sarah. He receives an email from "Smith Tax & Accounting Compliance Portal" (Sarah's white-labeled brand) saying one of his LLCs has an annual report due in 60 days.

**Email interaction**: The email shows Robert's entity name, the state, the deadline, and a link to the client portal. The email looks professionally branded — Robert assumes Sarah built this herself. He clicks the link.

**Client portal visit**: Robert logs in with magic link (no password). He sees all 3 of his LLCs, their states, and their filing statuses. One shows "60 days — Action Needed." He can see Sarah has already noted it in her queue. Robert feels reassured his CPA has it handled. He doesn't call Sarah to ask about it.

**Journey reveals**: Client email notification content and design, magic link auth flow, client portal read-only view (entity list, deadline status), no ComplianceDesk branding visible, mobile-responsive layout (Robert checks this on his iPhone).

---

### Journey 5: CPA Administrator — Failure Recovery (Edge Case)

An email reminder fails to deliver to a client (bounced email address). Sarah is not notified by default and the deadline approaches. She opens the dashboard and sees the entity status is still "Reminder Sent" but it's now 15 days out.

**Delivery failure detection**: The dashboard shows a small warning icon on the entity row. Sarah clicks into the entity detail and sees "Reminder email bounced — address: client@outdated.com." She updates the client's email address and manually triggers a re-send. The status updates to "Re-sent."

**Journey reveals**: Email delivery status per entity (sent/opened/failed/bounced), manual reminder re-send capability, inline email address update from entity detail view, deadline urgency escalation in dashboard view.

### Journey Requirements Summary

| Journey | Capabilities Required |
|---------|----------------------|
| Sarah — Onboarding | CSV import, white-label config, deadline calculation, urgency dashboard, reminder preview |
| Marcus — Power User | 200-entity import, client portal subdomain, magic link auth, SOS link per entity |
| David — TaxDome User | Manual entity entry, Zapier integration hook, trial conversion, reminder preview |
| Robert — Client Portal | Email notification design, client portal read-only, mobile layout, magic link |
| Sarah — Failure Recovery | Delivery status per entity, bounce detection, manual re-send, inline email update |

---

## Domain-Specific Requirements

### Compliance & Regulatory

ComplianceDesk operates in professional services compliance — adjacent to fintech and legal. No direct financial processing or regulated data handling, but several domain-specific requirements apply:

- **Data accuracy obligation**: State annual report deadlines are legally consequential. Missing a deadline results in administrative dissolution — a real harm to the client. All deadlines must be verified against primary sources (state SOS websites) before display.
- **Disclaimer requirements**: The product must display clear, conspicuous language in-app and in ToS stating: "ComplianceDesk provides deadline tracking and reminder services only. The CPA is solely responsible for reviewing and filing all required reports. ComplianceDesk does not provide legal or filing services and is not responsible for missed deadlines or administrative consequences."
- **CPA professional liability**: The product must not create an appearance of providing legal, filing, or regulatory advice. Deadline data must be clearly labeled as "informational reference" with direct links to official state SOS portals for confirmation.
- **Quarterly data maintenance process**: 50 states update filing requirements, fees, and deadlines periodically. A documented quarterly review process (tracking changes by state) must exist before launch. Data staleness >90 days is a business risk.

### Technical Constraints

- **Email sender reputation**: Reminder emails sent under the CPA's white-label domain must not negatively impact ComplianceDesk's email infrastructure deliverability. Use SendGrid or Postmark with per-customer subaccounts or authenticated sending domains.
- **Multi-tenancy isolation**: Each CPA firm's data (client entities, deadlines, portal configuration) must be fully isolated. Cross-tenant data exposure is a critical trust failure.
- **White-label subdomain configuration**: Client portal must support both hosted subdomain (smithcpa.compliancedesk.com) and CNAME-based custom domain (compliance.smithcpa.com) without manual infrastructure intervention per customer.
- **PII handling**: Entity names, client names, and email addresses are PII. GDPR-compatible data handling (deletion on request, data export) required even for US-primary product.

### Integration Requirements

MVP: Zapier integration hook only (deadline approaching → trigger event). No native integrations required at MVP.

Post-MVP: TaxDome Zapier integration (documented webhook events), QuickBooks Online (invoice sync for billing feature).

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| State data accuracy | Quarterly review process; data versioned with last-verified date per state; P0 alert on any user-reported inaccuracy |
| CPA liability from bad data | Prominent disclaimers in app and ToS; direct SOS portal links on every entity |
| FileForms competition | Compete on price (5–10x cheaper), trust (clean reputation), simplicity; target solo CPA they don't serve |
| TaxDome building natively | Zapier integration keeps us complementary; if TaxDome builds natively, pivot to white-label OEM for smaller practice management platforms |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each CPA firm is a **tenant** with complete data isolation. Tenant boundaries:
- Entity data (all client entities belong to one tenant)
- White-label configuration (logo, colors, domain, email branding)
- Client portal (clients access only their tenant's portal, never cross-tenant)
- Subscription (billing at tenant level, not user level)
- Email sending identity (each tenant's reminders appear from their domain/brand)

Tenant provisioning is self-service: signup → Stripe checkout → tenant created → onboarding flow.

### Permission Model

MVP uses a simplified two-role model:

| Role | Access |
|------|--------|
| **CPA Admin** | Full tenant access: add/edit/delete entities, configure white-label, manage reminders, view audit log, manage subscription |
| **Client** | Read-only access to their own entity records in the client portal (no CPA dashboard access) |

Multi-user (additional CPA staff) is a Growth-tier feature — not MVP.

### Subscription & Billing

| Tier | Price | Entity Limit | Key Capabilities |
|------|-------|--------------|-----------------|
| Starter | $49/month or $490/year | 50 entities | All 50 states, automated reminders, white-label, client portal |
| Growth | $99/month or $990/year | 200 entities | All Starter features + (future) billing feature, priority support |
| AppSumo LTD | $79 / $149 / $249 one-time | 50 / 200 / unlimited | Lifetime access, same features as Starter/Growth |

Entity limit enforcement: soft-block at limit (user can see they're at limit and must upgrade to add more). No hard cutoff that loses data.

### Technical Architecture Considerations

- **Stack**: Web-only (no mobile app at MVP); server-rendered or SPA with API backend acceptable; mobile-responsive required
- **Email infrastructure**: SendGrid or Postmark for transactional email; dedicated IP or high-reputation shared pool; custom sending domains per tenant via DKIM/SPF configuration
- **State deadline database**: Structured database table (not flat file); versioned with last-verified date per state; admin interface for quarterly updates
- **Stripe integration**: Subscription lifecycle management (create, upgrade, downgrade, cancel, trial); webhook handling for payment events; no storing of card data
- **Storage**: No file attachments at MVP; entity data only; client portal is dynamically rendered, no static site generation needed

### Implementation Considerations

- **Onboarding flow**: After Stripe trial signup, guide CPA through 3 steps: (1) white-label config, (2) add first entity manually or CSV import, (3) preview reminder email. Exit onboarding with at least 1 entity in system.
- **Reminder scheduling**: Background job system (cron or queue) processes reminders daily; calculates which entities have reminders due based on deadline date minus configured interval; idempotent — no duplicate reminders on retry
- **Deadline calculation engine**: Each entity's deadline is calculated at import and recalculated on state data update; stored as a date field, not recomputed on every page load; edge cases: entities formed in leap years, states with fiscal-year-based deadlines

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the product must generate real revenue from real CPAs solving a real problem before any feature expansion. The MVP is validated when 50 CPAs pay $49+/month because it saves them meaningful time and prevents missed deadlines.

**Resource Requirements:** 1 fullstack developer + 1 part-time PM/founder; 6–8 weeks build timeline; no external data partnerships required (state data compiled manually from SOS websites).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo CPA onboarding, entity import, deadline view, reminder setup
- Client entity owner receiving branded reminders and viewing client portal
- CPA marking filings complete and maintaining audit trail

**Must-Have Capabilities:**
1. 50-state deadline database with auto-calculation from formation date
2. Entity dashboard with urgency-sorted deadline view and status tracking
3. Bulk CSV import for entity onboarding
4. Automated reminder email system (90/60/30-day configurable)
5. White-label configuration (firm name, logo, color, sending email)
6. Client portal (read-only, magic link, mobile-responsive)
7. Email delivery status tracking (sent/opened/failed/bounced) per entity
8. Transparent pricing page + Stripe subscription billing (Starter + Growth tiers)
9. 14-day free trial, no credit card required
10. Disclaimer language in app and ToS re: CPA responsibility for filing

### Post-MVP Features

**Phase 2 (Months 4–9 post-launch):**
- Delaware + Wyoming automated filing API integration
- CPA billing/invoicing feature (charge clients from within portal)
- TaxDome Zapier integration (native webhook events)
- BOI/Corporate Transparency Act compliance tracking
- Multi-user support (2–10 staff per firm, role-based access)

**Phase 3 (Months 12–18):**
- Law firm channel (same product, attorney-specific positioning)
- Bookkeeping firm channel
- Multi-state foreign qualification tracking
- Business license renewal tracking
- API-first filing layer for states with modern SOS portals

### Risk Mitigation Strategy

**Technical Risks:** State deadline data quality is the primary technical risk. Mitigation: build data management as a first-class admin feature from day 1 (last-verified date, change log, admin notification of user-reported errors). Manual filing via state portals is acceptable at MVP — do not build filing integrations before validation.

**Market Risks:** FileForms could reduce pricing to match. Mitigation: community trust (r/taxpros presence) and AppSumo launch create switching costs before FileForms can respond. Trust is not replicable by price change alone.

**Resource Risks:** If timeline extends, cut client portal (Phase 1.5) before cutting deadline database or reminder system. The CPA-facing features (dashboard, reminders) deliver the core value; client portal is a differentiator but not the first value moment.

---

## Functional Requirements

### Entity Management

- FR1: CPA can add a client entity with fields: entity name, state of formation, entity type (LLC/Corp/Non-profit/etc.), formation date, client name, client email
- FR2: CPA can edit any field of an existing entity
- FR3: CPA can delete an entity with confirmation (deletion removes all associated reminders and history)
- FR4: CPA can import entities in bulk via CSV upload with column mapping interface
- FR5: System validates CSV imports and reports rows with errors before accepting (required fields: entity name, state, formation date)
- FR6: System auto-calculates the next annual report deadline for each entity upon import or creation, using the 50-state deadline database and the entity's state and formation date
- FR7: CPA can manually override the calculated deadline date for any entity
- FR8: System recalculates deadlines for affected entities when state deadline data is updated

### Deadline Dashboard

- FR9: CPA can view all entities in a sortable, filterable dashboard organized by upcoming deadline date
- FR10: Dashboard displays each entity's urgency state: Upcoming (>90 days), Due Soon (90–60 days), Urgent (60–30 days), Critical (<30 days), Overdue (past deadline)
- FR11: CPA can filter dashboard by: urgency state, client name, state of formation, entity type, filing status
- FR12: CPA can search entities by name or client name
- FR13: Dashboard displays each entity's current reminder status (not sent / sent / opened / filed)
- FR14: CPA can view an entity detail page showing: full entity info, deadline, all reminder send history (timestamp, recipient, delivery status), filing status and completion timestamp
- FR15: CPA can mark an entity filing as complete, with the timestamp recorded in the audit log
- FR16: CPA can mark a previously filed entity as needing re-filing (e.g., amended filing)

### Automated Reminder System

- FR17: CPA can configure the reminder schedule for their account: which intervals to use (90/60/30 days) and which recipient to notify (CPA only, client only, or both)
- FR18: CPA can configure reminder settings per entity, overriding the account-level defaults
- FR19: System sends reminder emails automatically at configured intervals before each entity's deadline
- FR20: Reminder emails display: CPA's firm name and branding (not ComplianceDesk), entity name, state, deadline date, filing fee (reference), direct link to the state SOS portal for that entity's state
- FR21: CPA can manually trigger a reminder for any entity at any time, independent of the automated schedule
- FR22: System tracks delivery status per reminder: sent, delivered, opened, bounced, or failed
- FR23: Dashboard displays a visual indicator on entities where the most recent reminder bounced or failed to deliver
- FR24: CPA can update a client's email address directly from the entity detail page and re-trigger a failed reminder

### White-Label Configuration

- FR25: CPA can configure white-label settings: firm name (displayed in all client communications), firm logo (uploaded image), primary brand color, reply-to email address
- FR26: All client-facing communications (reminder emails, client portal) display only the CPA's configured branding — no ComplianceDesk name, logo, or domain visible to clients
- FR27: CPA can preview how reminder emails will appear to clients before sending (live preview with sample data)
- FR28: CPA's client portal is accessible via a hosted subdomain (e.g., smithcpa.compliancedesk.com)
- FR29: CPA can configure a custom domain (CNAME) for their client portal (e.g., compliance.smithcpa.com)

### Client Portal

- FR30: Client can log in to the client portal via magic link sent to their email address (no password required)
- FR31: Client portal displays all entities associated with the client's email address: entity name, state, deadline date, filing status
- FR32: Client portal is read-only — clients cannot edit any entity data
- FR33: Client portal displays only the CPA's brand, logo, and colors — no ComplianceDesk branding visible
- FR34: Client portal is mobile-responsive and usable on screens 375px wide and larger
- FR35: Client can click a direct link to the official state SOS portal for each entity from the client portal

### Subscription & Billing

- FR36: Prospective customers can view the pricing page with all tiers, prices, and feature comparisons without signing up or requesting a demo
- FR37: User can start a 14-day free trial without providing a credit card
- FR38: User can convert from free trial to paid subscription with Stripe checkout within the product
- FR39: System enforces entity limits per subscription tier (Starter: 50, Growth: 200); displays upgrade prompt when user reaches 90% of limit
- FR40: CPA can view their current subscription plan, billing cycle, next renewal date, and payment method in account settings
- FR41: CPA can upgrade or downgrade their subscription plan; downgrade takes effect at end of current billing period
- FR42: CPA can cancel their subscription; account remains active until end of paid period, then transitions to read-only

### Admin / Data Management (Internal)

- FR43: Internal admin can add, edit, and update state deadline data records (state, entity type, due date logic, filing fee, SOS portal URL, last-verified date)
- FR44: Internal admin can view a log of changes to state deadline data with timestamps
- FR45: System sends internal alert when a user reports a potential state data inaccuracy

---

## Non-Functional Requirements

### Performance

- **Page load**: Dashboard with up to 200 entities loads in under 3 seconds on a standard broadband connection (95th percentile), as measured by synthetic monitoring
- **CSV import**: Import of 200-entity CSV file completes in under 30 seconds including deadline calculation
- **Reminder processing**: Automated reminder jobs process and queue all due emails within 60 minutes of their scheduled send time (daily batch job)
- **Email delivery**: 95%+ of reminder emails are delivered (not bounced or spam-filtered) as measured by SendGrid/Postmark delivery analytics

### Security

- **Data isolation**: CPA tenant data is fully isolated — queries are tenant-scoped at the application layer; direct database queries cannot return cross-tenant data
- **Authentication**: CPA dashboard access requires email + password; password hashing with bcrypt or Argon2; magic link tokens for client portal expire after 15 minutes and are single-use
- **Data encryption**: All data encrypted at rest (AES-256 or equivalent cloud provider default); all data in transit encrypted via TLS 1.2+
- **GDPR compliance**: Users can request data deletion; deleted within 30 days; data export available on request
- **Stripe security**: No card data stored in ComplianceDesk systems; all payment processing delegated to Stripe; PCI DSS compliance inherited via Stripe integration

### Scalability

- **Initial target**: Support 500 CPA tenants with up to 200 entities each (100,000 total entities) without architectural changes
- **Growth path**: Horizontal scaling of application tier handles growth to 5,000 tenants; database connection pooling and read replicas for query-heavy operations at scale

### Reliability

- **Uptime**: 99.5% availability during US business hours (9am–9pm Eastern, Monday–Saturday)
- **Reminder delivery guarantee**: If a reminder job fails, it retries up to 3 times with exponential backoff before marking as failed and alerting the CPA
- **Data backup**: Database backups run daily; point-in-time recovery to 24-hour window

### Integration

- **Zapier**: Publish a Zapier app with trigger events: "Filing Due (N days)", "Filing Marked Complete", "Reminder Bounced"; action events: "Add Entity". Webhook-based, documented schema, versioned API
- **Email providers**: Support SendGrid or Postmark as configurable backend; abstract email provider to allow switching without product changes

---

*PRD created: 2026-11-25*
*Based on: Product Brief (2026-11-25) + Market Research + Ideas Shortlist Score 89/105*
*Next steps: Architecture → Epics & Stories → Sprint Planning → Implementation*
