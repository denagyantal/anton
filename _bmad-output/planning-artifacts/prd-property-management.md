---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: ["ideas/shortlisted/property-management-small-landlords.md", "_bmad-output/planning-artifacts/research/market-property-management-research-2026-03-22.md", "_bmad-output/planning-artifacts/product-brief-property-management.md"]
workflowType: 'prd'
date: '2026-03-24'
author: Root
project_name: 'DoorKeep — Property Management for Small Landlords'
classification:
  projectType: saas_b2b
  domain: general
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — DoorKeep

**Author:** Root
**Date:** 2026-03-24

## Executive Summary

DoorKeep is a mobile-first, all-in-one SaaS property management platform for self-managing landlords with 1–50 rental units. It consolidates rent collection, maintenance tracking, lease management, expense tracking with IRS Schedule E automation, and portfolio dashboards into a single application — priced at a flat-rate lifetime deal ($79–$179) with no per-unit fees, no feature gating, and no hidden transaction costs.

The US property management software market reached $2.69B in 2025. Within it, 10.6 million individual landlords own 70% of all rental properties, 80% self-manage, and 40%+ still operate on spreadsheets. Dominant players systematically ignore this segment: AppFolio enforces a $298/month minimum with AI-only support; Buildium has imposed 6 price increases in 2.5 years; free tools like TurboTenant pass costs to tenants via 2.9% + $0.30 ACH fees. No existing product combines all-in-one PM features, flat-rate pricing, $1 ACH, Schedule E automation, and mobile-first UX at a one-time or low monthly price.

DoorKeep launches via AppSumo at $79 (up to 10 units) / $149 (up to 25 units) / $179 (up to 50 units), targeting the deal-savvy real estate investor community through BiggerPockets (2M+ members), Reddit (r/realestateinvesting 500K+, r/landlord 65K+), and AppSumo's built-in audience. Transition to $19–$39/month SaaS pricing for new customers begins at month 6.

### What Makes This Special

1. **$1 flat ACH rent collection** — A 10-unit landlord collecting $1,500/unit saves $5,000+/year vs. industry-standard 2.9% + $0.30 fees. This alone pays for the lifetime deal in month one.
2. **Automatic IRS Schedule E categorization** — Expenses auto-categorize to Schedule E line items as logged. Tax-time export replaces 20 hours of manual spreadsheet reconciliation.
3. **Flat-rate lifetime deal pricing** — $79/$149/$179 one-time. No monthly subscriptions, no per-unit scaling, no surprise price increases. Real estate investors think in deals — this framing resonates with the target buyer.
4. **Transparent zero-hidden-fee model** — Every feature included at every tier. Directly contrasts with Buildium's pricing games and AppFolio's opacity.
5. **Human customer support** — Chat + email staffed by humans, contrasting AppFolio's AI-only support that has generated industry-wide backlash.
6. **Mobile-first architecture** — Native mobile experience for landlords who manage properties between meetings, from job sites, or after work. Not a desktop app with a mobile wrapper.

## Project Classification

- **Project Type:** SaaS B2B (multi-tenant web application)
- **Domain:** Property Management / Real Estate Technology
- **Complexity:** Medium — handles financial transactions (PCI compliance for payment processing via Stripe), tenant PII, legal documents (leases), and multi-state regulatory considerations
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

| Metric | Target | How Measured |
|--------|--------|--------------|
| Time-to-first-property | Under 20 minutes | Signup to first property fully configured |
| Admin time reduction | 50%+ self-reported reduction | Periodic in-app survey; proxy: time-in-app per unit trending down |
| On-time rent collection | 95%+ of rent collected by 5th of month | Payment processing data |
| Expense capture rate | 90%+ of actual expenses logged | User activity tracking; validated at tax time |
| Tenant portal adoption | 80%+ of tenants using portal for payments | Tenant payment method distribution |
| Monthly active usage | 70%+ of registered users | Users who log in and take at least one action per month |

### Business Success

| Metric | 3-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| Total users | 3,000 | 10,000+ |
| Units managed | 15,000 | 50,000+ |
| Monthly Active Users | 70% | 75% |
| Rent collected via platform | $2M/month | $15M/month |
| Cumulative revenue (all sources) | $300K | $800K+ |
| MRR (SaaS only) | $2K | $10K+ |
| AppSumo launch conversion | 2%+ of page views | — |
| NPS | 40+ within 90 days | 50+ |
| G2/Capterra rating | 4.5+ stars | 4.5+ stars |
| Monthly churn (SaaS) | — | <5% |
| CAC | — | <$30 |

### Technical Success

| Metric | Target |
|--------|--------|
| API response time (95th percentile) | <500ms under normal load |
| Application uptime | 99.9% during business hours |
| Payment processing success rate | 99.5%+ |
| Mobile Lighthouse performance score | 90+ |
| Time to deploy new release | <30 minutes |
| Zero critical security vulnerabilities | Continuous |

### Measurable Outcomes

- **Financial impact**: A 10-unit landlord collecting $1,500/unit saves $5,292/year in payment processing fees vs. 2.9% + $0.30 standard.
- **Tax-time impact**: Schedule E export eliminates 10–20 hours of manual expense categorization per tax season. Average landlord recovers $2,000–$5,000 in previously missed deductions.
- **Operational impact**: Maintenance request tracking with status workflow eliminates dropped requests (the #1 cause of small-repair-becomes-big-repair incidents).
- **Growth impact**: Landlords scaling from 3 to 15 units can do so without hitting an operational ceiling or needing to upgrade to enterprise software.

## Product Scope

### MVP — Minimum Viable Product

Six core modules, all included at every tier:

1. **Rent Collection** — $1 flat ACH, credit/debit card option, automatic payment reminders (text + email), late fee calculation, tenant payment portal, payment history dashboard, partial payment handling
2. **Property & Tenant Management** — Add/edit properties with unit-level detail, tenant profiles (contact, lease dates, rent amounts), vacancy tracking, portfolio dashboard, multi-property consolidated view
3. **Maintenance Tracking** — Tenant-facing request submission with photo/video upload, landlord triage dashboard (New → In Progress → Completed), communication thread per request, priority categorization, maintenance history per unit
4. **Expense Tracking & Schedule E** — Income/expense logging per property, receipt photo capture, auto-categorization to IRS Schedule E line items, per-property and portfolio P&L, tax-ready export (PDF + CSV), basic cash flow reporting
5. **Lease Management** — Digital lease creation from templates, e-signature workflow, lease document storage per unit, expiration tracking with renewal reminders, move-in/move-out checklist templates
6. **Mobile-First Responsive Web App** — Responsive design optimized for mobile, core workflows in 3 taps or fewer, push notifications (payments, maintenance, lease expirations), iOS and Android browser support

### Growth Features (Post-MVP)

**Phase 2 — Months 3–6:**
- Tenant screening/background checks (TransUnion/Equifax API integration)
- State-specific lease templates (start with top 10 states by landlord count)
- QuickBooks/Xero accounting sync
- Team/multi-user access with property manager roles
- Advanced financial reporting (cap rate, ROI analysis)

**Phase 3 — Months 6–12:**
- AI maintenance triage (urgency and cost estimation)
- Native iOS and Android apps
- Contractor directory/marketplace
- Insurance integration (embedded coverage recommendations)
- DSCR lender referral partnerships

### Vision (Future)

**Year 2–3:**
- AI Landlord Copilot — conversational AI for tenant communications, rent pricing suggestions, routine decision automation
- Community features — forums, deal analysis, landlord networking (BiggerPockets-lite inside the tool)
- Predictive maintenance using historical cross-user data patterns
- Open API for third-party integrations
- Expansion: short-term rentals, co-living, student housing
- Target: $3M+ ARR, 25,000+ active landlords

**Long-term vision:** The default operating system for the self-managing landlord — from finding tenants to filing taxes — with AI that makes a 10-unit landlord as efficient as a 200-unit property management company.

---

## User Journeys

### Journey 1: Mike the Mid-Portfolio Landlord — Onboarding & First Rent Cycle

**Who:** Mike, 42, IT manager. Owns 7 units across 3 properties (duplex, triplex, 2 SFRs). Manages everything on Excel, Venmo, and text messages. Spends 8–10 hours/week on admin. Missed a $3,200 insurance deduction last year.

**Opening Scene:** It's January. Mike just spent 18 hours reconciling receipts for his CPA. He missed the insurance deduction again. He searches "Buildium alternative for small landlords" and finds a BiggerPockets post about DoorKeep's AppSumo deal. $79 for a lifetime license — less than one month of Buildium.

**Rising Action:** Mike signs up and adds his first property in 8 minutes. The system walks him through: add units, set rent amounts, upload existing lease PDFs. He invites his first tenant via text link. The tenant opens the portal, sets up ACH in 3 minutes. Mike adds his second and third properties. Within 45 minutes, all 7 units are configured.

**Climax:** February 1st. Mike opens his phone at 7 AM. Dashboard shows 5 of 7 tenants have already paid — ACH auto-deducted at midnight. The other 2 received automatic text reminders. By February 3rd, all 7 have paid. Total payment processing cost: $7. His old Venmo/Zelle approach had zero tracking; TurboTenant would have cost $308 in fees. He logs a plumbing repair — $275 — snaps a photo of the receipt, and the system auto-categorizes it as "Repairs" (Schedule E, Line 14).

**Resolution:** Tax time rolls around. Mike exports his Schedule E report in 2 clicks. His CPA says, "This is the cleanest rental documentation I've seen." Admin time has dropped from 10 hours/week to 3. He's looking at buying his next property.

### Journey 2: Sarah the Scaling Investor — Migrating from Multiple Tools

**Who:** Sarah, 37, full-time real estate investor. 18 units across 6 properties. Currently uses Stessa (financial tracking), TurboTenant (rent collection), and individual lease templates from her attorney. Left Buildium after the 4th price increase.

**Opening Scene:** Sarah's tenant calls to complain about the $44 fee TurboTenant charged on their $1,500 rent payment. It's the third complaint this month. Sarah's patchwork of 3 tools creates daily friction — she toggles between apps to get a complete picture of any property.

**Rising Action:** Sarah sees the DoorKeep AppSumo deal: $149 for up to 25 units, $1 flat ACH. She calculates: at 18 units × $1,500 average rent × 2.9% + $0.30, she's losing $9,525/year in tenant-paid fees that create resentment. She imports her properties, uploads leases, and begins migrating tenants to the payment portal. Within a week, 15 of 18 tenants have switched. Remaining 3 switch by month-end after receiving the "pay rent online" text invite.

**Climax:** Sarah opens her portfolio dashboard for the first time at month-end. One screen: all 18 units, rent status, maintenance requests, cash flow by property, vacancy status. She spots that Unit 4B's lease expires in 45 days — the system flagged it. She triggers the renewal reminder workflow. For the first time, she has a single source of truth.

**Resolution:** Sarah adds units 19–23 over the next quarter. The system handles them with zero additional cost or complexity. Her tenants actually prefer the payment portal over Venmo — no more fee complaints. She's tracking toward 30 units and the system will scale with her.

### Journey 3: Tom the First-Timer — Simple Setup, Peace of Mind

**Who:** Tom, 55, high school teacher. Inherited his mother's duplex, bought a small SFR last year. 3 total units. No real estate experience. Terrified of legal mistakes. Collects rent via check, tracks expenses in a notebook.

**Opening Scene:** Tom tried Buildium and gave up after 20 minutes — too many menus, too many options he didn't understand. He's collecting paper checks, which means driving to his duplex once a month. He has no system for tracking what's deductible.

**Rising Action:** Tom finds DoorKeep through an AppSumo email. $79 for up to 10 units. He signs up and the onboarding wizard asks: "How many properties?" → 2. "How many units total?" → 3. The system creates his portfolio structure. He enters tenant names, rent amounts, and lease end dates. Total setup time: 14 minutes.

**Climax:** Tom's tenant submits a maintenance request through the portal — a leaky faucet with a photo attached. Tom sees the notification on his phone during lunch break. He responds: "I'll have a plumber there Thursday." The exchange is documented with timestamps. No more text messages lost in his phone. When he pays the plumber $180, he photographs the receipt and the system files it under "Repairs."

**Resolution:** Tom realizes he can see who's paid and who hasn't from one screen on his phone. He no longer drives to collect checks — tenants pay online. At tax time, he hands his CPA the Schedule E export. He didn't even know what Schedule E was six months ago.

### Journey 4: Tenant — Paying Rent and Submitting Maintenance

**Who:** Jessica, 29, renter in one of Mike's units. Works as a graphic designer. Previously paid rent via Venmo.

**Opening Scene:** Jessica gets a text from her landlord: "I've set up online rent payments through DoorKeep. Click here to create your account." She's wary — the last system (TurboTenant) charged her $44/month in fees.

**Rising Action:** Jessica opens the link, creates an account in 2 minutes. Sets up ACH autopay — the portal clearly states the fee is $1 flat, not a percentage. She's relieved. Her bathroom faucet starts dripping. Instead of texting her landlord (who sometimes forgets), she opens the tenant portal, taps "New Request," photographs the drip, selects "Plumbing" from the category list, and submits. She gets a push notification 2 hours later: "Your landlord has scheduled a repair for Thursday."

**Climax:** The repair happens. The request status updates to "Completed." Jessica has a documented record. Her rent autopays on the 1st — she doesn't think about it.

**Resolution:** Jessica tells her friend who's apartment-hunting: "My landlord uses this app — it's actually nice. Maintenance gets handled quickly and rent is basically free to pay."

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike (Onboarding) | Property setup wizard, tenant invitation flow, ACH payment processing, automatic reminders, receipt capture, Schedule E auto-categorization, dashboard metrics |
| Sarah (Migration) | Bulk property import, lease upload, tenant migration workflow, portfolio-wide dashboard, lease renewal tracking, vacancy monitoring, multi-property P&L |
| Tom (First-Timer) | Simplified onboarding, mobile-first maintenance workflow, basic expense tracking, payment status at-a-glance, guided setup |
| Jessica (Tenant) | Tenant portal, ACH autopay setup, maintenance request submission with photo, request status tracking, push notifications |

---

## Domain-Specific Requirements

### Payment Processing Compliance

- All payment processing handled via Stripe Connect (or equivalent PCI-compliant processor) — DoorKeep never stores, processes, or transmits raw card numbers
- PCI DSS compliance achieved through delegated payment processing (SAQ-A level)
- ACH payments comply with NACHA operating rules
- Stripe's fraud detection and dispute resolution mechanisms integrated

### Tenant Data Privacy

- Tenant PII (name, contact, SSN if collected for screening) encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Data retention policy: tenant data retained for duration of lease + 7 years (IRS record-keeping requirement for Schedule E) or until landlord requests deletion
- No selling or sharing of tenant data with third parties
- Privacy policy clearly states data handling practices
- Comply with state-level tenant privacy regulations (California CCPA, etc.)

### Legal and Lease Compliance

- Lease templates include disclaimers that they are general-purpose and do not constitute legal advice
- E-signature workflow complies with ESIGN Act and UETA
- Document storage retains audit trail (who signed, when, IP address)
- Late fee calculations comply with state-specific maximum late fee regulations (configurable per property)

### Financial Reporting Compliance

- Schedule E categorization follows current IRS guidelines for rental property income and expenses
- Expense reports include disclaimer that they are for informational purposes and should be reviewed by a tax professional
- Mileage tracking follows IRS standard mileage rate (updated annually)

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Payment processing failure | Stripe reliability + fallback notification to landlord/tenant; retry logic for failed ACH |
| Tenant data breach | Encryption at rest/transit, minimal PII collection, regular security audits |
| Incorrect Schedule E categorization | Manual override always available; disclaimer on exports; annual review of IRS category mappings |
| Lease template legal issues | Templates labeled "general purpose"; users advised to consult local attorney; no warranties on legal compliance |
| State regulation variations | Late fee and lease defaults configurable per property/state; knowledge base of state-specific rules |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

1. **$1 Flat ACH Pricing Model** — The entire property management industry charges percentage-based payment processing (2.9% + $0.30 standard). DoorKeep's $1 flat ACH fee is a structural pricing innovation that creates a compounding advantage: the more rent a landlord collects, the more they save. At 10 units × $1,500/month, savings exceed $5,000/year. This is not a feature — it's a business model innovation that functions as the primary acquisition differentiator.

2. **Automatic Schedule E Tax Categorization** — While Stessa and Baselane offer financial tracking, DoorKeep combines receipt photo capture + auto-categorization + per-property allocation + one-click tax export into a seamless workflow. The innovation is removing the cognitive burden — landlords log expenses as they occur and the system handles IRS compliance categorization in real-time.

3. **Lifetime Deal as Market Entry Strategy** — Using AppSumo LTD pricing ($79–$179) to build an installed base of 3,000–5,000 landlords who become evangelists on BiggerPockets, Reddit, and G2/Capterra. The LTD buyers create a review moat that compounds over time.

### Validation Approach

- **$1 ACH viability**: Validate unit economics by modeling Stripe ACH processing costs ($0.80 per transaction) against $1 flat fee — margin exists at $0.20/transaction. Volume-based Stripe negotiation improves margin at scale.
- **Schedule E accuracy**: Partner with 3–5 CPAs during beta to validate auto-categorization accuracy against manual categorization.
- **LTD sustainability**: Cap LTD sales at 5,000 units. Model long-term support costs vs. LTD revenue. Design premium upsells (tenant screening, state-specific templates) from day 1.

### Risk Mitigation

| Innovation | Risk | Fallback |
|-----------|------|----------|
| $1 flat ACH | Stripe ACH costs increase, eliminating margin | Adjust to $1.50 or $2 flat — still dramatically cheaper than 2.9% + $0.30 |
| Schedule E auto-categorization | IRS changes Schedule E categories | Annual category review; manual override always available |
| LTD model | Support costs exceed LTD revenue long-term | SaaS transition at month 6 for new users; premium add-on revenue from LTD users |

---

## SaaS Platform Requirements

### Multi-Tenancy Architecture

- **Tenant isolation model**: Logical isolation with shared infrastructure. Each landlord's data isolated via tenant ID at the application and database level. No landlord can access another's data.
- **Data segregation**: All queries scoped to authenticated landlord's tenant context. Database-level row security policies enforced.
- **Tenant provisioning**: Automated on signup — property structure, user account, and initial configuration created within seconds.

### Permission Model

| Role | Scope | Capabilities |
|------|-------|-------------|
| Landlord (Owner) | Full account | All features: properties, tenants, payments, reports, settings, billing |
| Tenant | Assigned unit(s) | Pay rent, submit maintenance requests, view lease documents, update contact info |
| Property Manager (Post-MVP) | Assigned properties | Manage units, tenants, maintenance for delegated properties; no billing access |
| CPA/Accountant (Post-MVP) | Read-only financials | View and export financial reports; no tenant or property management access |

### Subscription Tiers

**Launch (AppSumo LTD):**

| Tier | Price | Unit Limit |
|------|-------|-----------|
| Tier 1 | $79 one-time | Up to 10 units |
| Tier 2 | $149 one-time | Up to 25 units |
| Tier 3 | $179 one-time | Up to 50 units |

All tiers include all features. No feature gating. LTD capped at 5,000 total buyers.

**SaaS (Month 6+ for new customers):**

| Plan | Price | Unit Limit |
|------|-------|-----------|
| Starter | $19/month | Up to 10 units |
| Growth | $39/month | Up to 50 units |
| Pro (Future) | $59/month | Unlimited units + team features |

**Revenue Add-Ons (available to all users):**
- Tenant screening: $35–$45 per application (TransUnion/Equifax pass-through + margin)
- State-specific lease templates: included in SaaS, $29 add-on for LTD users
- Premium support: included in SaaS, $49/year for LTD users

### Integration Requirements

**MVP Integrations:**

| System | Purpose | Priority |
|--------|---------|----------|
| Stripe Connect | Payment processing (ACH, credit/debit) | Critical — Day 1 |
| Twilio / SMS provider | Payment reminders, maintenance notifications | Critical — Day 1 |
| Email service (SendGrid/SES) | Transactional emails, reminders, reports | Critical — Day 1 |
| E-signature provider (HelloSign/DocuSign API or similar) | Lease signing workflow | Critical — Day 1 |
| Cloud storage (S3/equivalent) | Receipt photos, lease documents, maintenance photos | Critical — Day 1 |

**Post-MVP Integrations:**

| System | Purpose | Timeline |
|--------|---------|----------|
| TransUnion/Equifax | Tenant screening | Month 3–4 |
| QuickBooks Online | Accounting sync | Month 3–4 |
| Xero | Accounting sync | Month 4–5 |
| Plaid | Bank account verification for ACH | Month 2–3 |

### Implementation Considerations

- **Technology stack**: Full-stack web application. Backend API (REST), relational database (PostgreSQL), responsive frontend framework, mobile-optimized PWA.
- **Deployment**: Cloud-hosted (AWS/GCP/similar). Containerized for scalability.
- **CI/CD**: Automated testing and deployment pipeline. Deploy new releases in <30 minutes.
- **Monitoring**: APM for performance tracking, error monitoring, uptime monitoring, payment processing health dashboard.
- **Data backup**: Automated daily backups with point-in-time recovery. RPO < 1 hour, RTO < 4 hours.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approach:** Problem-solving MVP. Deliver the 6 core modules that address the most painful daily problems: scattered rent collection, untracked maintenance, disorganized expenses, and tax-time chaos. Every feature in MVP must directly reduce a landlord's weekly admin burden.

**Resource Requirements:** Small team (2–3 full-stack engineers, 1 designer). Estimated 6–8 weeks to MVP. Leverage third-party services (Stripe, Twilio, e-signature API) to minimize custom infrastructure.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Landlord onboarding and property setup (Mike, Tom journeys)
- Rent collection with $1 ACH (all landlord journeys)
- Maintenance request lifecycle (Tom, Jessica journeys)
- Expense logging with Schedule E categorization (Mike journey)
- Lease document management (Sarah journey)
- Tenant portal for payments and maintenance (Jessica journey)

**Must-Have Capabilities:**
- Property and unit CRUD with portfolio dashboard
- Tenant profiles with lease tracking
- Online rent payment (ACH at $1 flat, credit/debit at standard rates)
- Automatic payment reminders (SMS + email)
- Late fee tracking and calculation
- Maintenance request workflow with photo upload
- Expense logging with receipt capture and Schedule E auto-categorization
- Digital lease creation and e-signature
- Tax-ready Schedule E export (PDF + CSV)
- Mobile-responsive web interface
- Push notifications
- Tenant-facing portal (pay, submit requests, view documents)

### Post-MVP Features

**Phase 2 (Months 3–6):**
- Tenant screening integration
- State-specific lease templates (top 10 states)
- QuickBooks/Xero sync
- Advanced financial reporting (cap rate, ROI)
- Multi-user access / property manager role

**Phase 3 (Months 6–12):**
- AI maintenance triage
- Native iOS/Android apps
- Contractor marketplace
- Insurance integration
- Open API

### Risk Mitigation Strategy

**Technical Risks:**
- Payment processing integration is the riskiest technical component. Mitigate with Stripe Connect, which abstracts ACH complexity and handles compliance.
- Mobile-first responsive web must perform well across devices. Mitigate with progressive web app patterns and Lighthouse performance testing.

**Market Risks:**
- Free competitors (TurboTenant, Baselane) could improve to match. Mitigate with speed to market and community-driven review moat on G2/Capterra.
- AppFolio or Buildium could launch a small-landlord tier. Mitigate with LTD buyer loyalty and pricing advantage that enterprise companies can't match profitably.

**Resource Risks:**
- If resources are constrained, launch with 4 modules (rent collection, property management, expense tracking, maintenance) and add lease management and mobile optimization in a fast-follow. Rent collection + expenses are the highest-value modules.

---

## Functional Requirements

### Property & Portfolio Management

- FR1: Landlords can add, edit, and archive properties with address, type, and descriptive details
- FR2: Landlords can define units within a property with unit identifiers, bedroom/bathroom counts, and rent amounts
- FR3: Landlords can view a portfolio dashboard showing all properties, units, occupancy status, and key financial metrics at a glance
- FR4: Landlords can track vacancy status per unit with move-out dates and availability indicators
- FR5: Landlords can view consolidated metrics across all properties (total rent expected, collected, outstanding, expenses, net income)

### Tenant Management

- FR6: Landlords can create tenant profiles with name, contact information, lease dates, and assigned unit
- FR7: Landlords can invite tenants to the platform via text message or email link
- FR8: Tenants can create accounts and associate themselves with their assigned unit
- FR9: Landlords can view tenant directory with lease status, payment history, and contact information per tenant
- FR10: Tenants can update their own contact information

### Rent Collection & Payments

- FR11: Tenants can pay rent via ACH bank transfer at a $1 flat fee per transaction
- FR12: Tenants can pay rent via credit or debit card at standard processing rates
- FR13: Tenants can set up recurring autopay for monthly rent
- FR14: Tenants can make partial rent payments
- FR15: Landlords can configure automatic payment reminders via SMS and email with customizable schedule (e.g., 3 days before due, day of, 1 day late)
- FR16: The system can calculate and track late fees based on landlord-configured rules (flat fee or percentage, grace period, maximum amount)
- FR17: Landlords can view a payment dashboard showing real-time status of all rent payments across all units for the current period
- FR18: Landlords can view payment history per tenant and per property with date, amount, method, and status
- FR19: Tenants can view their own payment history and upcoming payment schedule
- FR20: The system can send payment confirmation notifications to both landlord and tenant upon successful payment

### Maintenance Tracking

- FR21: Tenants can submit maintenance requests with text description, category selection, and photo/video attachments
- FR22: Landlords can view a maintenance triage dashboard showing all requests across properties with status (New, In Progress, Completed)
- FR23: Landlords can assign priority levels (Emergency, Urgent, Routine) to maintenance requests
- FR24: Landlords and tenants can exchange messages within a maintenance request thread
- FR25: Landlords can update maintenance request status through the workflow (New → In Progress → Completed)
- FR26: Landlords can view maintenance history per unit, filterable by date range, status, and category
- FR27: The system can send notifications to landlords when new maintenance requests are submitted and to tenants when status changes

### Expense Tracking & Tax Automation

- FR28: Landlords can log income and expenses per property with date, amount, category, and description
- FR29: Landlords can attach receipt photos to expense entries via camera capture or file upload
- FR30: The system can auto-categorize expenses to IRS Schedule E line items (advertising, auto/travel, cleaning/maintenance, commissions, insurance, legal/professional, management fees, mortgage interest, repairs, supplies, taxes, utilities, depreciation, other)
- FR31: Landlords can override auto-categorized expense categories
- FR32: Landlords can view per-property profit and loss reports for any date range
- FR33: Landlords can view portfolio-wide financial summary across all properties
- FR34: Landlords can export a tax-ready IRS Schedule E report in PDF and CSV formats
- FR35: Landlords can track mileage for property visits with date, distance, and purpose
- FR36: Rent payments received through the platform can automatically log as income entries for the corresponding property

### Lease Management

- FR37: Landlords can create digital leases from general-purpose templates with customizable fields (parties, property, terms, rent, deposit, rules)
- FR38: Landlords can send leases for e-signature to tenants
- FR39: Tenants can review and electronically sign leases from the tenant portal
- FR40: The system can store executed lease documents and make them accessible to both landlord and tenant
- FR41: Landlords can track lease expiration dates across all properties with configurable renewal reminder notifications (30, 60, 90 days before expiration)
- FR42: Landlords can create and use move-in/move-out checklists associated with units
- FR43: Landlords can upload existing lease documents (PDF) to associate with a unit and tenant

### Notifications & Communication

- FR44: The system can send push notifications, SMS, and email for configurable events: payment received, payment overdue, maintenance request submitted, maintenance status changed, lease expiring
- FR45: Landlords can configure which notification channels (push, SMS, email) are active for each event type
- FR46: Tenants can configure their notification preferences for relevant events

### Account & Billing

- FR47: Users can sign up with email and password or social login
- FR48: Users can reset their password via email link
- FR49: Landlords can view and manage their subscription or LTD status
- FR50: Landlords can upgrade their tier (e.g., from 10-unit to 25-unit LTD, or from Starter to Growth SaaS)

---

## Non-Functional Requirements

### Performance

- NFR1: Page load time for dashboard and list views under 2 seconds on 4G mobile connection, as measured by Lighthouse and real user monitoring
- NFR2: API response time under 500ms for 95th percentile requests under normal load (up to 1,000 concurrent users), as measured by APM
- NFR3: Payment processing initiation completes within 3 seconds of user confirmation
- NFR4: Receipt photo upload and categorization completes within 5 seconds for images up to 10MB
- NFR5: Schedule E report generation completes within 10 seconds for portfolios up to 50 units and 12 months of data

### Security

- NFR6: All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- NFR7: Authentication via secure token-based system with session expiry and refresh token rotation
- NFR8: Payment processing delegated to PCI DSS Level 1 compliant processor (Stripe) — DoorKeep never handles raw payment credentials
- NFR9: Tenant PII access restricted to the landlord who manages that tenant's unit — enforced at application and database query level
- NFR10: All authentication events, payment transactions, and data access logged in immutable audit trail
- NFR11: Password requirements: minimum 8 characters, complexity enforcement, breach-check integration
- NFR12: Rate limiting on authentication endpoints (max 10 failed attempts per 15 minutes per IP)

### Scalability

- NFR13: System supports 10,000 landlord accounts and 50,000 units with no degradation in response time targets
- NFR14: System supports 10x growth (100,000 landlords, 500,000 units) through horizontal scaling without architectural changes
- NFR15: Payment processing handles month-start burst (60%+ of monthly payments within first 5 days) without queuing delays

### Reliability

- NFR16: 99.9% uptime during business hours (6 AM–10 PM local time), as measured by cloud provider monitoring
- NFR17: Automated daily database backups with point-in-time recovery; RPO < 1 hour, RTO < 4 hours
- NFR18: Payment processing failures trigger automatic retry (up to 3 attempts) and landlord notification
- NFR19: Graceful degradation: if payment processor is unavailable, users see clear status message and payments queue for retry

### Accessibility

- NFR20: WCAG 2.1 AA compliance for all user-facing screens (landlord and tenant portals)
- NFR21: All form inputs include proper labels; all images include alt text; all interactive elements are keyboard-navigable
- NFR22: Color contrast ratios meet WCAG AA minimums (4.5:1 for normal text, 3:1 for large text)

### Mobile Responsiveness

- NFR23: All core workflows (view dashboard, log expense, respond to maintenance, check payment status) fully functional on screens 375px wide and above
- NFR24: Touch targets minimum 44×44px for all interactive elements on mobile
- NFR25: Lighthouse mobile performance score of 90+ for primary user flows

---

*This PRD serves as the capability contract for DoorKeep. UX design, technical architecture, epic breakdown, and development implementation should trace back to the requirements and vision documented here. Any capability not listed in the Functional Requirements will not exist in the final product unless explicitly added via PRD amendment.*
