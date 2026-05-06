---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/hoa-community-self-management-platform.md
  - _bmad-output/planning-artifacts/product-brief-hoa-community-management.md
  - _bmad-output/planning-artifacts/research/market-hoa-community-management-research-2026-05-06.md
workflowType: prd
lastStep: step-12-complete
research_topic: hoa-community-management
user_name: Root
date: 2026-05-06
classification:
  projectType: saas_b2b
  domain: proptech_fintech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — HOA Community Self-Management Platform

**Author:** Root
**Date:** 2026-05-06
**Status:** Final

---

## Executive Summary

Self-managed HOA communities — 224,000+ volunteer-run organizations in the US — currently operate with tools designed for personal use: Google Drive, Venmo, spreadsheets, and email chains. Every purpose-built HOA platform on the market was designed for professional property management companies, with pricing floors that start at $39–49/month. Volunteer boards cannot justify this cost without a formal committee vote, creating an adoption barrier that leaves the most-desperate small boards without any software.

The HOA Community Self-Management Platform provides dues collection, document management, financial dashboards, maintenance request tracking, and owner communication in a single purpose-built tool — **permanently free for communities under 50 units**. Revenue comes from 2.5% payment processing fees on dues collected, aligning platform success directly with community health rather than extracting subscription fees from volunteers.

The market moment is acute: TOPS Pro (a dominant legacy platform) ended support in July 2025, creating an active migration cohort. Two YC-backed companies (Assembly HOA, Aldara) entered adjacent segments, confirming investor conviction. Vantaca's $1.25B valuation validates the category. Yet the self-managed volunteer board segment — the largest underserved cluster — remains structurally open to a free-first product that incumbents cannot match without abandoning their subscription revenue model.

### What Makes This Special

Three structural differentiators create durable competitive advantage:

1. **Permanently free for small communities.** Not a trial, not a limited feature set — full platform access for HOAs under 50 units, funded entirely by transaction fees. This eliminates the "needs a board vote" adoption barrier entirely. Any board member can sign up today without spending community money. Competitors cannot replicate this without abandoning their subscription revenue models.

2. **Board-turnover-proof by architecture.** Community documents, financial records, and owner data belong to the community entity, not any individual member. Role transfer is a single-click operation. Departing board members are removed without taking anything with them. This directly addresses the most emotionally resonant pain: the new board president who logs into a shared Google Drive and finds it empty because the previous treasurer deleted their personal folder on the way out.

3. **Auto-generated treasurer reports.** The single most-dreaded board task — compiling the financial summary for the annual meeting — becomes a one-click PDF download. Always current, always formatted, always professional. This is the product's "aha moment" that drives word-of-mouth referrals.

The deeper insight: HOA volunteer boards don't need a scaled-down version of professional property management software. They need a tool that makes the administrative overhead invisible — dues that collect themselves, documents that never disappear, and reports that generate themselves.

## Project Classification

- **Project Type:** SaaS B2B (multi-tenant web application with homeowner-facing portal)
- **Domain:** PropTech / FinTech (property management + payment processing)
- **Complexity:** Medium — payment processing introduces compliance requirements (PCI-DSS, ACH/NACHA rules); financial data handling requires audit-quality records; multi-tenant data isolation is critical
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The platform delivers genuine value when board members experience these outcomes:

- **Dues collection relief:** A board member sets up recurring monthly dues collection once and stops thinking about it. Payments arrive in the community bank account automatically. Manual matching of Venmo payments to owner names is eliminated.
- **Board turnover survival:** When the treasurer or president changes, 100% of community records (documents, financial history, owner data) remain accessible to the new board member without any action by the departing member. Zero access-loss incidents.
- **Treasurer report moment:** A board member generates a complete, professionally formatted treasurer report in under 60 seconds from the financial dashboard. They bring it to the annual meeting instead of a stack of printed bank statements.
- **Time savings:** Active board members spend less than 2 hours per month on administrative tasks that previously took 10–20 hours (dues tracking, report compilation, document chasing).
- **Maintenance visibility:** Open maintenance requests are never lost in email. Every request has a status, a responsible person, and a history.

**User Success Signal:** A community that collects its first dues payment via the platform in Week 1 retains at 95%+ at 90 days. A community that generates its first financial report retains at 98%+ at 12 months.

### Business Success

| Metric | Month 3 | Month 6 | Month 12 | Month 24 |
|---|---|---|---|---|
| Active communities | 150 | 500 | 2,000 | 8,000 |
| Monthly dues volume | $150K | $750K | $4M | $16M |
| Transaction fee MRR | $3,750 | $18,750 | $100K | $400K |
| Subscription MRR | $500 | $2,000 | $10K | $40K |
| 90-day community retention | 90% | 92% | 95% | 96% |
| Board NPS | — | 50+ | 55+ | 60+ |
| Organic signup rate | 50% | 70% | 80% | 85% |

**Business Success Signal:** The model is validated when 50+ communities are actively collecting dues via the platform within 60 days of launch, 80%+ are still active at 90 days, and MRR exceeds $3,000 at the 90-day mark.

### Technical Success

- **Payment reliability:** ACH payment success rate ≥ 97%. Failed payment retries handled automatically. Zero cases of funds misrouted or double-charged.
- **Data isolation:** No community can access another community's data under any circumstances. Multi-tenant isolation verified by design and automated tests.
- **Availability:** 99.5% uptime during business hours (payment collection must not fail mid-month). Planned maintenance windows communicated 48 hours in advance.
- **Audit trail:** Every financial transaction, document change, and role assignment is logged with timestamp, actor, and action. Logs are immutable and cannot be deleted by any user.
- **Security:** All financial data encrypted at rest and in transit. PCI-DSS SAQ-A compliance for card payments via Stripe. No raw card numbers stored.

### Measurable Outcomes

1. **Week 1 retention indicator:** Communities that complete dues setup and receive at least one payment in Week 1 retain at 95%+ at Day 90.
2. **Report generation indicator:** Communities that generate a financial report retain at 98%+ at Month 12.
3. **Referral signal:** 20%+ of new community signups attributable to word-of-mouth from existing board members by Month 3.
4. **NPS leading indicator:** Board member NPS ≥ 40 at 90-day survey; ≥ 55 at 12-month survey.

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers on four use cases that define the retention lock: dues collection, document safety, financial clarity, and homeowner communication.

**Included in MVP:**
- Dues collection: ACH + credit card, recurring setup, automated reminders, delinquency tracking, manual cash/check recording
- Document library: cloud storage, folder structure, role-based access, version history, board-turnover-proof ownership
- Financial dashboard: dues revenue summary, monthly income/expense ledger, year-to-date view, auto-generated PDF treasurer report
- Owner directory + announcements: homeowner roster, email broadcasting, view-only document sharing with homeowners
- Maintenance request portal: homeowner submission, board status tracking, status-update emails to homeowners
- Onboarding flow: 15-minute guided setup, CSV owner import, template library
- Free tier: full platform access for communities under 50 units with no monthly fee
- Paid tier: $49–$99/month for 50–300 unit communities

**Explicitly excluded from MVP:**
- Violation tracking and fine management (Month 3–4)
- Architectural review requests (Month 4–6)
- Native iOS/Android apps — PWA/mobile-responsive web only for MVP
- QuickBooks/accounting software integration (Month 4+)
- Voting and election management (Month 6+)
- Reserve fund analysis and planning (Month 6+)
- TOPS Pro data import tool (Month 2–3 migration sprint)
- AI-powered features (Year 2)
- Multi-association management (Year 2)
- Vendor marketplace (Year 2)

### Growth Features (Post-MVP)

**Month 2–4:**
- TOPS Pro migration import tool (high-intent migration cohort)
- Violation tracking and automated compliance workflow
- Architectural review request portal
- QuickBooks export integration
- Advanced financial reporting (multi-year comparison, budget vs. actual)

**Month 4–8:**
- Native iOS and Android apps for board members
- Homeowner mobile app (dues payment, maintenance requests, document access)
- Reserve fund tracker and planning tool
- Annual meeting voting and elections module
- HOA attorney referral integrations

**Month 8–18:**
- AI budget anomaly detection and expense auto-tagging
- Board handoff package (one-click summary of everything a new board member needs)
- HOA legal document library (state-specific templates)
- HOA insurance marketplace (D&O, fidelity bond referrals)
- Community banking integration (HOA-specific operating/reserve accounts)

### Vision (Future)

- Developer API for HOA-specific integrations
- White-label product for community banking partners and HOA attorneys
- Geographic expansion: Canada (strata) and Australia (owners corporation)
- Real estate integration: HOA documents surfaced during home purchase via MLS/Zillow
- Potential acquisition pathway: Vantaca, AppFolio, or RealPage as strategic acquirer

---

## User Journeys

### Journey 1: Margaret — The Reluctant Treasurer (Small HOA, Crisis Trigger)

Margaret is a 54-year-old accountant who inherited the HOA treasurer role six months ago when nobody else would take it. Her 38-unit HOA in suburban Phoenix collects $220/month per unit. She has a Google Drive folder with three years of disorganized spreadsheets, a Venmo account nobody remembers the password to, and a box of printed bank statements.

**Opening Scene:** It's 10 PM on a Sunday. Margaret is trying to reconcile the bank statement for the third time this month. She has 38 rows in her spreadsheet, 31 Venmo payment notifications, and seven homeowners she can't identify by Venmo name. She also needs to prepare the treasurer report for the annual meeting in two weeks. She searches Google for "HOA dues tracking spreadsheet alternative" and finds a blog post that mentions the platform.

**Discovery → Sign-up:** She clicks through to the platform's landing page. The headline reads: "Replace Google Drive + Venmo with one tool. Free for communities under 50 units." No credit card required. She signs up with her email and her HOA's name.

**First Session (30 minutes):** The onboarding flow walks her through: create community profile → add units (she uploads a CSV of owner emails from her spreadsheet) → set monthly dues amount ($220) → connect payment method. The platform generates a unique dues payment link for each homeowner and sends a welcome email to all 38 of them.

**Week 1:** Seven homeowners pay via the link the same day. By day 5, 29 of 38 have paid. The dashboard shows her exactly who has paid and who hasn't. She sends a one-click reminder to the nine delinquent owners. Three more pay within 24 hours.

**"Aha Moment" (Week 2):** She clicks "Generate Treasurer Report" before the annual meeting. A PDF downloads in under 3 seconds: dues collection status, monthly income summary, expense breakdown, and year-to-date comparison — all formatted and ready to present. She has never made this report in under four hours before.

**Advocacy (Month 2):** She posts on r/HOA answering someone asking "how do you track HOA dues?" — mentions the platform by name as the thing that replaced her Venmo nightmare.

**Journey Requirements Revealed:** Dues setup wizard → CSV import → automated payment links → real-time dashboard → one-click reminders → one-click treasurer report PDF

---

### Journey 2: David — The New Board President in Crisis (Mid-Size HOA, Record Loss)

David is a 41-year-old software engineer who just bought a condo in a 55-unit complex in Austin. Three weeks after moving in, he became board president by default. He has no financial records, no vendor contacts, and three owners who haven't paid dues in four months.

**Opening Scene:** David's "community records" are a shared Google Drive folder with a README.txt that says "contact previous president for access." He cannot reach the previous president. He has a spreadsheet listing unit numbers, no emails, and a bank account with an unknown balance. He searches "self-managed HOA software" and reads two comparison articles before landing on the platform.

**Evaluation:** He starts with the free tier (55 units puts him just above the free threshold, but the free trial lets him evaluate risk-free). He imports his partial owner list, creates three delinquent-owner profiles manually, and sets up a dues collection request. He sends payment requests to his three delinquent owners from inside the platform.

**First Value (48 hours):** All three delinquent owners pay. One calls him to thank him for making it easy to pay online. David sees the transaction timestamps in the audit log — the kind of documentation that protects him if there's ever a dispute.

**Document Recovery:** David uploads the few community documents he found in the Drive folder. He sets them as "community-owned" — meaning no individual board member can delete them. When another board member is added, they get immediate access. He starts building the institutional memory that will survive his own eventual departure.

**Board Meeting (Month 1):** David presents the financial dashboard at the first board meeting. The entire meeting takes 35 minutes instead of the usual two hours because every board member can see the same numbers in real time. The board votes to approve a $49/month paid tier subscription.

**Journey Requirements Revealed:** Free/trial access → manual owner entry → dues payment request (ad-hoc) → audit log → document ownership controls → board member role assignment → shared financial dashboard → paid tier upgrade flow

---

### Journey 3: Karen — The Experienced Migration (TOPS Pro Replacement)

Karen runs the board of a 140-unit planned community in suburban Atlanta. They've used TOPS Pro for seven years. In July 2025, TOPS Pro ended all technical support. Karen needs a modern replacement before a security incident forces her hand.

**Opening Scene:** Karen has been on the TOPS Pro community forum for three months watching other boards scramble. She knows what she has: seven years of financial history, 140 owner records, 12 years of meeting minutes, and a workflow that 4 board members know how to use. She needs a platform that can import this history and replicate her current workflow.

**Research:** She reads "TOPS Pro alternatives" content, which leads her to the platform's TOPS Pro migration guide. The guide lists a step-by-step process with a spreadsheet template for owner/financial data export from TOPS Pro. She downloads it.

**Migration:** She uses the TOPS Pro export + the platform's CSV import to move 140 owner records and three years of financial history (the rest she keeps as PDF archives). The platform's 15-minute onboarding guide takes her about an hour given her data volume, but the process is documented and systematic.

**First Month:** The board notices that documents are now searchable by name and date (they had to browse folders in TOPS Pro). The financial dashboard shows data they previously had to generate manually from TOPS Pro reports. At the 30-day mark, Karen formally recommends the platform to the board. They vote to continue at the paid tier.

**Journey Requirements Revealed:** TOPS Pro migration guide → CSV import for large owner sets → historical financial record import → document search → comparative financial dashboards → team onboarding for multiple board members simultaneously

---

### Journey 4: Tom — The Homeowner (Passive User, Dues Payer)

Tom is a 38-year-old marketing manager in Karen's 140-unit community. He has never attended a board meeting. He pays his HOA dues reluctantly, typically 2–3 weeks late, because he forgets.

**Opening Scene:** Tom receives an email from his HOA: "Your October dues of $185 are due in 5 days. Pay now." There's a Pay Now button. He clicks it. A Stripe-powered payment page opens. He pays by credit card in 45 seconds. He receives a confirmation email. Done.

**Month 2:** Tom submits a maintenance request for a broken parking lot light from his phone. He describes it and submits. He gets an email when the request is marked "In Progress" and another when it's "Resolved." He doesn't have to call anyone or wonder if anyone saw it.

**Document Access:** Before buying the condo, Tom had asked the board for the CC&Rs. Now he can download them from the homeowner portal anytime without bothering a board member.

**Journey Requirements Revealed:** Email-triggered payment flow → mobile-responsive payment page → auto-pay setup → maintenance request submission (mobile-first) → status notification emails → homeowner document portal (view-only)

---

### Journey 5: The Board Secretary (Admin User, Document Manager)

Sandra is the secretary for a 70-unit HOA. She handles meeting minutes, vendor contracts, and board communications. She is not technical and is the person most likely to accidentally break something.

**Opening Scene:** Sandra needs to upload the minutes from last month's board meeting, share them with all homeowners, and archive a vendor quote that has expired. She is nervous about deleting something important.

**Document Upload:** She logs in, navigates to the Documents section, uploads a PDF of the meeting minutes, and selects "Visible to all homeowners." The minutes appear immediately in the homeowner portal.

**Archive:** She looks for the expired vendor quote. She realizes she can't delete documents — she can only archive them, which moves them to a read-only archive folder. This is intentional and she's relieved.

**Announcements:** She drafts a board announcement about the upcoming annual meeting and sends it to all 70 homeowners via the platform. She sees delivery confirmation.

**Journey Requirements Revealed:** Document upload → visibility controls (board-only vs. all homeowners) → archival (no permanent deletion) → announcement drafting → bulk email delivery with confirmation

---

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---|---|
| Dues collection with ACH + card + autopay | 1, 2, 4 |
| CSV import for owner roster | 1, 3 |
| Auto-generated PDF treasurer report | 1 |
| Real-time payment status dashboard | 1, 2 |
| One-click reminder to delinquent owners | 1 |
| Document library with board-turnover-proof ownership | 2, 5 |
| Community-owned document controls (no individual deletion) | 2, 5 |
| Role-based access (board-member vs. homeowner) | 2, 5 |
| Audit log for all financial and access events | 2 |
| Board member role assignment and transfer | 2 |
| TOPS Pro migration guide + data import | 3 |
| Historical financial record import | 3 |
| Homeowner portal (dues, documents, maintenance) | 4 |
| Mobile-responsive payment flow | 4 |
| Maintenance request submission + status notifications | 4 |
| Announcement broadcasting with delivery confirmation | 5 |
| Document archival (no permanent delete) | 5 |

---

## Domain-Specific Requirements

### Payment Processing & Financial Compliance

The platform collects real money (HOA dues) from homeowners on behalf of communities. This creates compliance obligations that must be addressed in architecture and operations:

**ACH / NACHA Rules:**
- ACH debit origination requires a signed authorization from each homeowner before initiating debits
- Failed ACH returns (R01 insufficient funds, R02 account closed, R10 unauthorized) must be handled with correct re-presentation rules (no more than 2 retries for R01)
- NACHA compliance requires proper SEC code classification (WEB for online-authorized debits)
- Return rate thresholds: Debit return rate must stay below 0.5% (NACHA threshold for probation) — use Stripe's ACH implementation to inherit their NACHA compliance

**PCI-DSS (Card Payments):**
- No raw card numbers or CVVs stored on platform servers at any time
- Use Stripe.js / Stripe Elements to ensure card data never touches application servers
- PCI-DSS SAQ-A compliance: full responsibility outsourced to Stripe
- Cardholder data displayed only in masked form (last 4 digits)

**Financial Record Integrity:**
- Financial transactions must be immutable once recorded — no deletion, only correction entries with full audit trail
- Bank reconciliation data (if Plaid integration is used) must be stored separately from authoritative transaction records
- Financial records must be retained for 7 years per standard accounting requirements (HOA boards carry legal liability for financial records)

**Multi-Tenant Financial Isolation:**
- Community A's funds, records, and payment data must be completely isolated from Community B
- Stripe Connect or separate merchant accounts per community to ensure fund separation
- Payouts to community bank accounts must be atomic — no intermingling of community funds

### Security & Data Privacy

**Authentication:**
- Email + password with mandatory email verification for new accounts
- Multi-factor authentication (TOTP) available for board members (strongly recommended, not required)
- Session tokens expire after 30 days of inactivity
- Password reset via time-limited email tokens (15-minute expiry)

**Authorization:**
- Role-based access: Community Admin (board), Board Member, Homeowner, Read-Only Guest
- Community Admin can add/remove board members and homeowners
- Board Member can access all community data and initiate communications
- Homeowner can access only their unit data, community documents marked "homeowner-visible," and submit maintenance requests
- No cross-community access under any circumstances

**Data Handling:**
- HOA documents may contain sensitive homeowner information (addresses, contact info, violation history)
- No selling or sharing of community data with third parties
- Data export: community admin can export full data dump at any time (portability)
- Data deletion: community admin can request full account deletion with 30-day grace period

### State Regulatory Variation

HOA governance law varies significantly by state. The platform does not give legal advice but must accommodate common state-specific operational differences:

- States with mandatory financial disclosure requirements (California, Florida, Texas) — financial reports generated by the platform serve as compliance documentation
- States with mandatory meeting notice periods — announcement feature must support scheduling and timestamped delivery records
- HOA assessment collection laws vary — late fee calculation must be configurable per community (flat fee, percentage, or none)
- The platform must make clear it is a tool, not a legal advisor, and recommend HOA attorney consultation for compliance questions

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Transaction-Fee-Funded Free Tier (Business Model Innovation)**

The core innovation is structural, not technical: funding a free tier entirely through payment processing fees rather than subscriptions. This has been done in payments (Square, Stripe) but not applied to HOA management software. The result is a free tier that is genuinely sustainable — the platform earns money when communities are active (collecting dues), not when volunteers remember to pay a SaaS bill.

This model is strategically defensible: incumbents (PayHOA, HOA Start) cannot replicate a permanent free tier without abandoning their subscription revenue base. The free tier becomes a moat that makes it structurally impossible for subscription-first competitors to undercut on price.

**2. Board-Turnover-Proof Architecture (UX Innovation)**

Every existing HOA tool stores data in personal accounts tied to individual users. When a board member leaves, they take access with them. The platform's architecture inverts this: data belongs to the community entity, not any individual. Board member roles are assignments to a community, not personal account ownership. This is technically simple (community-centric data model rather than user-centric) but represents a genuine UX paradigm shift for HOA management tools.

**3. Auto-Generated Treasurer Reports as Activation Driver**

Using a financial report PDF as the product's "aha moment" and activation event is novel in this category. Most HOA software treats reports as a back-office feature. The platform makes the treasurer report the product's flagship experience — the moment that converts an uncertain user into a permanent one and triggers word-of-mouth.

### Market Context

The two YC-backed competitors (Assembly HOA, Aldara) are building for the professional management segment (management companies) not the volunteer self-management segment. Vantaca ($1.25B valuation) also serves professional management companies. The self-managed volunteer board segment is the innovation gap — these are communities that will never hire a professional manager, and they need a fundamentally different product philosophy (invisible administration, not comprehensive property management).

### Validation Approach

- Transaction-fee model validated by: ACH payment activation rate in Week 1 (target: 30%+ of signups initiate at least one payment within 14 days)
- Board-turnover-proof design validated by: Zero support tickets about "lost access after board member left" within 60 days of launch
- Treasurer report as activation event validated by: Time-to-first-report metric (target: 50%+ of active communities generate a report within 30 days)

---

## SaaS Platform Specific Requirements

### Multi-Tenancy Architecture

- **Tenant isolation model:** Each HOA community is a separate tenant. All queries must be scoped to the authenticated user's community context.
- **Tenant provisioning:** New community created on signup. Tenant record includes: community name, unit count, subscription tier, payment processor merchant ID, created date.
- **Cross-tenant operations:** System admin access only (internal operations, customer support). Zero cross-tenant data access in any user-facing API endpoint.
- **Data residency:** All data stored in US-region cloud infrastructure. No data transfer to regions outside the US in MVP.

### Role-Based Access Control (RBAC)

| Role | Description | Access Level |
|---|---|---|
| Community Admin | Primary board contact, first board member to sign up | Full community access, can manage all board members and settings |
| Board Member | Additional board members invited by Admin | Full community access, cannot delete community or manage billing |
| Homeowner | Individual unit owners invited by board | Own unit data + community-visible documents + maintenance requests |
| Read-Only | Invited advisors (attorney, CPA) | View-only access to specified document categories |

- Role assignment is per-community (a person can be Board Member in Community A and Homeowner in Community B)
- Board Member role transfer is atomic: existing member's access downgraded to Homeowner or removed simultaneously with new member role assignment
- All role changes logged with timestamp, actor, and previous/new role

### Subscription & Billing

- **Free tier:** Communities ≤ 50 units. No monthly fee. 2.5% transaction fee on all dues collected (credit card: 2.9% + $0.30 standard Stripe rate minus platform markup; ACH: $1.50 flat or 0.8% whichever is lower)
- **Paid tier:** Communities 51–300 units. $49–$99/month (sliding scale by unit count). Reduced transaction fee: 1.5–2% on credit card, $1.00 flat on ACH.
- **Trial:** All new communities get 30 days of paid-tier features regardless of unit count (allows evaluation before committing to free tier)
- **Billing:** Monthly subscription billed to community admin's card via Stripe. Invoice emailed after each charge.
- **Cancellation:** Self-serve cancellation. Data retained for 90 days post-cancellation for re-activation. Hard delete available on request.

### Payment Processing Architecture

- **Stripe Connect** (Express or Standard account per community) ensures funds flow directly to each community's bank account
- Platform collects transaction fee via Stripe Connect's application fee mechanism
- ACH debit authorization collected and stored per homeowner with timestamp
- Webhook processing for payment events: charge.succeeded, charge.failed, payment_intent.payment_failed, payout.paid
- Idempotency keys on all payment creation requests to prevent double-charges on retry
- Retry logic: ACH failed payments retried once after 3 days (per NACHA rules for R01); card failures retried with Stripe's Smart Retries

### Integrations (MVP)

- **Stripe:** Payment processing (card + ACH), payouts to community bank accounts, subscription billing
- **Plaid (optional):** Read-only bank account connection for transaction import into financial ledger
- **SendGrid / Postmark:** Transactional email (payment confirmations, reminders, announcements, maintenance status updates)
- **AWS S3 or equivalent:** Document storage (encrypted at rest, presigned URLs for access)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-validated problem-solver. The MVP proves one thesis: volunteer board members will switch from Venmo + spreadsheets to a purpose-built tool if the switching cost is zero (free tier, no credit card) and the immediate value is obvious (dues collected automatically, delinquencies visible, report generated).

**Resource Requirements:** 1 full-stack developer + 1 part-time designer. Target MVP build time: 8–12 weeks. Launch to first paying communities at week 12.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Margaret's journey: dues setup → CSV import → automated collection → treasurer report
- David's journey: free sign-up → partial owner entry → ad-hoc payment request → document upload
- Tom's journey: email-triggered payment → mobile payment page → maintenance submission

**Must-Have Capabilities:**
1. Community onboarding: create community, add units, import homeowners via CSV
2. Dues collection: recurring setup, ACH + card, automated reminders, delinquency dashboard
3. Document library: upload, folder structure, board-vs-homeowner visibility, archive (no delete)
4. Financial dashboard: dues collection summary, expense ledger, YTD view, PDF treasurer report
5. Owner directory: homeowner roster with unit numbers and contact info
6. Announcement broadcasts: email to all homeowners with delivery confirmation
7. Maintenance request portal: submit, track status, notify homeowner on status change
8. Role management: board member add/remove, role transfer, homeowner invitation
9. Free + paid tiers: unit-count-based gating, Stripe subscription billing
10. Payment processing: Stripe Connect, ACH + card, payout to community bank account

### Post-MVP Features

**Phase 2 (Month 2–4):**
- TOPS Pro data import (CSV migration guide + import tool)
- Violation tracking and notice management
- Architectural review request portal
- QuickBooks export
- Advanced financial reporting (multi-year, budget vs. actual)

**Phase 3 (Month 4–12):**
- Native iOS + Android apps
- Homeowner mobile app
- Reserve fund tracker
- Annual meeting voting module
- HOA attorney referral network

**Phase 4 (Year 2+):**
- AI features: budget anomaly detection, expense auto-tagging
- Board handoff package generator
- Community banking integration
- Geographic expansion (Canada, Australia)
- API for third-party integrations

### Risk Mitigation Strategy

**Technical Risks:**
- _Stripe Connect complexity:_ Use Stripe's documentation-heavy but well-tested Express Accounts flow. Build payment integration first before any other feature.
- _ACH return rate:_ Require homeowner email authorization confirmation before first ACH debit. Stripe's ACH product handles NACHA compliance.
- _Multi-tenant data leakage:_ Write automated integration tests that verify cross-tenant isolation on every API endpoint before launch.

**Market Risks:**
- _Slow adoption from volunteer boards:_ Free tier + zero credit card required removes the primary adoption barrier. Measure Week 1 payment activation rate as leading indicator.
- _PayHOA launches free tier:_ Move fast to establish community moat (network effects within each community), SEO authority, and word-of-mouth base before they can respond.
- _"Good enough" inertia:_ Target boards at crisis moments (board turnover, annual meeting prep, TOPS Pro migration) rather than cold outreach. Pain is the activator.

**Resource Risks:**
- _Scope creep delays launch:_ Enforce strict MVP feature list. Defer all "nice to have" features to Month 2+ sprint. Ship a working dues + documents + report platform on time over a perfect platform late.
- _Payment integration delays:_ Start Stripe Connect integration on Day 1 of development. It has the longest tail (Stripe account verification, bank account verification) and cannot be parallelized.

---

## Functional Requirements

### Community Management

- FR1: Community Admin can create a new HOA community profile with name, address, and unit count
- FR2: Community Admin can add units to the community roster with unit identifier and homeowner information
- FR3: Community Admin can import homeowner list from CSV with unit numbers, names, and email addresses
- FR4: Community Admin can invite board members by email, assigning them the Board Member role
- FR5: Community Admin can invite homeowners by email, giving them Homeowner portal access
- FR6: Community Admin can transfer any board member role to another user with a single action
- FR7: Community Admin can remove a board member, immediately revoking their access without deleting any community data
- FR8: Board Member can view the full homeowner roster with contact information and unit assignments
- FR9: Board Member can update homeowner contact information and unit assignments
- FR10: System logs all role changes, access events, and administrative actions with timestamp and actor identity

### Dues Collection & Payments

- FR11: Board Member can configure recurring monthly dues amount per unit (uniform or unit-specific)
- FR12: Board Member can send dues payment requests to individual homeowners or all homeowners simultaneously
- FR13: Homeowner can pay dues via credit card or ACH bank transfer from the payment link in their email
- FR14: Homeowner can set up autopay to authorize recurring ACH debits on a set day each month
- FR15: Board Member can view real-time dues collection dashboard showing paid, pending, and overdue status per unit
- FR16: Board Member can send one-click payment reminders to all homeowners with overdue balances
- FR17: Board Member can record manual payments (cash or check) against a homeowner's account with date and reference note
- FR18: System automatically calculates and displays late fees based on board-configured fee rules
- FR19: Board Member can view the full payment history for any unit, including all successful payments, failures, and manual entries
- FR20: Community Admin can connect a community bank account to receive dues payouts via Stripe Connect

### Financial Management

- FR21: Board Member can add expense entries to the community financial ledger with amount, date, category, and description
- FR22: Board Member can view a monthly income and expense summary showing dues collected and expenses recorded
- FR23: Board Member can view a year-to-date financial summary comparing current year to prior year
- FR24: Board Member can generate a formatted treasurer report PDF covering: dues collection status, monthly summary, expense breakdown, and YTD comparison
- FR25: Board Member can connect a bank account via Plaid for read-only transaction import into the expense ledger
- FR26: Board Member can categorize imported transactions and mark them as reconciled
- FR27: Board Member can export financial data as CSV for external accounting use

### Document Management

- FR28: Board Member can upload documents to the community document library in any common format (PDF, Word, Excel, images)
- FR29: Board Member can organize documents into named folders with custom naming
- FR30: Board Member can set document visibility: Board Only or All Homeowners
- FR31: Homeowner can view and download all documents marked "All Homeowners" from the homeowner portal
- FR32: Board Member can archive a document (moves to read-only archive; not deleted)
- FR33: System retains all document versions — uploading a new version preserves the previous version with timestamp
- FR34: Community Admin can view a complete audit log of all document actions (upload, archive, version change, access by role)
- FR35: No individual board member can permanently delete a community document — only archive is permitted

### Maintenance Requests

- FR36: Homeowner can submit a maintenance request with description, location/unit, priority, and optional photo attachment
- FR37: Board Member can view all open maintenance requests in a single dashboard with status and age
- FR38: Board Member can update maintenance request status (New → In Progress → Resolved → Closed)
- FR39: System sends email notification to the submitting homeowner when their request status changes
- FR40: Board Member can add internal notes to a maintenance request (visible to board only)
- FR41: Board Member can view the complete maintenance request history for any unit
- FR42: Board Member can assign a maintenance request to a specific board member or vendor contact

### Homeowner Portal & Communication

- FR43: Homeowner can view their dues payment history, current balance, and upcoming payment dates
- FR44: Homeowner can update their own contact information (email, phone, mailing address)
- FR45: Board Member can draft and send email announcements to all homeowners in the community
- FR46: System records delivery confirmation for all sent announcements (sent count, timestamp)
- FR47: Homeowner can view community announcements in their homeowner portal
- FR48: Board Member can schedule announcements for future delivery

### Onboarding & Account Management

- FR49: New user can create a community account with email + password (no credit card required)
- FR50: System guides new community admin through 15-minute setup: community profile → add units → invite homeowners → configure dues → go live
- FR51: Community admin can access a template library including: CC&R template, budget template, meeting minutes template
- FR52: Community admin can select and configure pricing tier (free for ≤50 units; paid for 51–300 units)
- FR53: Community admin can view current billing status, upcoming charge, and payment method
- FR54: Community admin can export a complete community data archive (all documents, financial records, owner data) at any time
- FR55: Community admin can request full account deletion with a 30-day confirmation window

---

## Non-Functional Requirements

### Performance

- Board member dashboard (dues status, recent activity) loads within 2 seconds on a standard broadband connection for communities up to 300 units
- PDF treasurer report generates and downloads within 5 seconds for communities with up to 3 years of financial history
- Document upload (up to 50MB) completes within 10 seconds on a standard broadband connection
- Payment processing response (card authorization confirmation) displayed to homeowner within 3 seconds of form submission
- Email announcements to all homeowners in a 300-unit community delivered within 5 minutes of dispatch

### Security

- All data encrypted in transit via TLS 1.2+ on all endpoints
- All data encrypted at rest (AES-256 or equivalent) in cloud storage
- No raw card numbers, CVVs, or bank account numbers stored on platform servers
- PCI-DSS SAQ-A compliance for card payment processing (fully delegated to Stripe)
- ACH debit authorizations stored with IP address, timestamp, and homeowner email confirmation as evidence of authorization
- Session tokens expire after 30 days of inactivity; users re-authenticate on next visit
- All API endpoints require authenticated session; no public data endpoints that expose community data
- Automated security scanning of dependencies (Dependabot or equivalent) with blocking alerts on critical CVEs
- Penetration testing before launch and annually thereafter
- SOC 2 Type I assessment within 12 months of launch (required for credibility with larger communities and HOA attorneys)

### Scalability

- Architecture supports 10,000+ active communities without re-architecture
- Database design uses community_id partitioning to support horizontal scaling if needed
- Stripe Connect handles payment volume scaling automatically (no platform-level throughput ceiling)
- Document storage (S3 or equivalent) scales without capacity planning
- Email delivery (SendGrid/Postmark) scales without changes to the platform
- System must handle end-of-month dues collection spike: up to 50% of monthly payment volume occurring in a 48-hour window without degradation

### Reliability

- 99.5% uptime during business hours (8 AM – 10 PM local time, US timezones)
- Payment processing endpoints must have 99.9% availability (failed payment = real money impact)
- Automated daily backups of all community data with 30-day retention
- Recovery point objective (RPO): 24 hours (at most one day of data loss in disaster scenario)
- Recovery time objective (RTO): 4 hours (platform back online within 4 hours of any outage)
- All payment webhook processing must be idempotent — duplicate webhook deliveries must not create duplicate transactions
- Failure alerts for: payment webhook processing failures, email delivery failures, document upload failures

### Accessibility

- All homeowner-facing pages (payment page, portal, maintenance request form) meet WCAG 2.1 AA standards
- All board-facing application pages meet WCAG 2.1 AA standards
- Mobile-responsive design for all pages (homeowners frequently pay dues on mobile)
- PDF treasurer reports must be accessible (tagged PDF) for board members who use assistive technology
- Email announcements use plain-text alternatives alongside HTML for email client compatibility

### Integration

- Stripe: payment processing (card + ACH), Connect payouts, subscription billing — must be version-pinned and monitored for API changes
- Plaid (optional bank connection): read-only transaction sync; failure to connect must not block other financial features
- Cloud storage (S3 or equivalent): document storage with server-side encryption; presigned URLs expire after 60 minutes
- Transactional email (SendGrid/Postmark): delivery tracking, bounce handling, unsubscribe management compliant with CAN-SPAM
- All third-party integrations must degrade gracefully — if Plaid is unavailable, the platform still works; if email delivery is delayed, transactions still process

---

## Appendix: Competitive Positioning Reference

| Competitor | Monthly Floor | Built For | Key Gap |
|---|---|---|---|
| Vantaca | ~$300+ (enterprise) | Professional management companies | Enterprise price, enterprise complexity |
| AppFolio | $280 minimum | Professional managers (200+ units) | Not self-managed; requires dedicated admin |
| Buildium | $58–$600+ | Property managers | Designed for rental + HOA mix; complex onboarding |
| PayHOA | $49 (≤50 units) | Self-managed HOAs | Best current option; $49/month still requires board vote |
| HOA Start | $39/month | Self-managed HOAs | Flat monthly cost creates adoption friction |
| TownSq | Free (very limited) | Community engagement | No accounting, no ACH, no financial reporting |
| **This Platform** | **Free (<50 units)** | **Volunteer boards** | **Permanent free tier + transaction fees + auto-reports** |

---

*PRD completed: 2026-05-06*
*Source documents: product-brief-hoa-community-management.md, market-hoa-community-management-research-2026-05-06.md, hoa-community-self-management-platform.md*
*Next step: Architecture design → epics & stories → AutoMVP implementation*
