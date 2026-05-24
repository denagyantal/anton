---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/self-storage-facility-management.md
  - _bmad-output/planning-artifacts/market-research-self-storage-management.md
  - _bmad-output/planning-artifacts/product-brief-self-storage-management.md
workflowType: 'prd'
project_name: 'self-storage-management'
product_name: 'VaultDesk'
author: Root
date: '2026-05-24'
classification:
  projectType: saas_b2b
  domain: property_management_storage
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — VaultDesk

**Product:** VaultDesk — Self-Storage Facility Management Platform  
**Author:** Root  
**Date:** 2026-05-24  
**Version:** 1.0

---

## Executive Summary

VaultDesk is a flat-rate ($49–79/month) cloud SaaS for US independent self-storage operators who are captive to Storable (SiteLink/storEDGE) after its PE-backed roll-up eliminated effective competition. Storable mandates its own payment processor, has degraded support to ~7 agents for 4,000+ sites, and raises prices every 1.5–2 years. No US-focused alternative exists at this price point with comparable compliance coverage.

VaultDesk delivers the full operational stack: unit/tenant management, Stripe-native autopay (operators use their own Stripe account — no processor lock-in), automated 50-state lien processing, online rental with embeddable website widget, and free SiteLink/storEDGE data migration. Setup completes in under 30 minutes. The product is designed for independent operators running 1–5 locations with up to 300 units per site.

**Revenue model:** $49/month (≤150 units) / $79/month (151–300 units). Flat, published, no custom quotes. LTD at $99/$149 sold through community channels to generate initial cash and trust.

**12-month target:** 200 paying customers, $12K MRR. 24-month target: 1,000+ customers, ~$70K MRR.

**Core positioning:** "Modern self-storage software that works for you, not for Storable's payment processor."

### What Makes This Special

The defining differentiator is payment processor freedom. Storable Payments is the #2 controllable expense at any storage facility; operators report processing rates 1–2% above market with no ability to negotiate or switch. VaultDesk uses Stripe Connect (platform model): operators connect their own Stripe account, VaultDesk never touches processing margins, and the pricing commitment is permanent — VaultDesk does not offer a bundled payment product and never will.

The second differentiator is integrated 50-state lien automation at no additional cost. Lien processing is a legal compliance requirement with real liability exposure. No competitor includes this as a base feature at the $49 price point; Storable treats it as basic workflow while offering limited support, and alternatives like Cubby route operators to third-party add-ons.

The third differentiator is transparent pricing with a credibility backstory. The 6Storage lifetime deal disaster (300% price increase) is actively discussed in operator forums. VaultDesk's pricing commitment — 90-day notice minimum, 12-month grandfather period on any price change, in the TOS — directly addresses the community's dominant trust objection.

Together these create a position that Storable cannot match without cannibalizing Storable Payments revenue and that no credible US alternative occupies.

## Project Classification

- **Project Type:** SaaS B2B (cloud-hosted, subscription, SMB operator-focused)
- **Domain:** Property Management / Self-Storage Operations (US)
- **Complexity:** Medium — US state-specific lien law compliance (50-state statutory variation), payment processing integration (Stripe Connect platform model), SCRA (Servicemembers Civil Relief Act) military status verification
- **Project Context:** Greenfield — no existing codebase; building from scratch

---

## Success Criteria

### User Success

- Operators complete facility setup (unit catalog + tenant import) within 30 minutes of account creation
- Operators process their first autopay run within 2 hours of connecting Stripe
- Operators complete online move-in widget setup within 1 hour of account creation
- Migration completion rate > 90% for operators who initiate a SiteLink or storEDGE import
- Monthly active operator rate > 85% (operators who log in at least once per calendar month)
- Support tickets resolved within 4 business hours as measured by helpdesk SLA metrics
- Operator NPS > 60 at 90-day cohort mark

### Business Success

| Milestone | Metric | Target |
|-----------|--------|--------|
| Month 6 | Paying customers | 50 |
| Month 6 | MRR | $3,000 |
| Month 6 | G2/Capterra reviews | 10+ |
| Month 12 | Paying customers | 200 |
| Month 12 | MRR | $12,000 |
| Month 18 | Paying customers | 500 |
| Month 18 | MRR | $30,000 |
| Month 24 | Paying customers | 1,000+ |
| Month 24 | MRR | $65,000–80,000 |
| Month 12 | Demo-to-paid conversion | > 40% |
| Month 12 | Monthly churn rate | < 0.5% |
| Month 6 | LTD units sold | 100 |

### Technical Success

- Zero lien compliance incidents in the first 12 months (no legally deficient notice sequences generated by the system)
- Zero payment processing failures attributable to VaultDesk platform (Stripe-side failures excluded)
- Data migration validation catches 100% of field mapping errors before final import
- Stripe webhook processing achieves at-least-once delivery for all payment events
- System maintains 99.9% uptime during business hours (6am–10pm local operator time)

### Measurable Outcomes

- Operators save a minimum of $1,500/year in payment processing fees by using their own Stripe account vs. Storable Payments (validated via post-onboarding survey at 90 days)
- Operators report zero manual lien compliance errors attributable to incorrect system workflows
- Online rental widget generates at least one automated move-in per month for 70% of operators who install it

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP Philosophy:** Problem-solving MVP. The product must be immediately useful to an operator who is switching from SiteLink or starting fresh — no placeholders, no "coming soon" for core workflows. Every feature listed must work end-to-end on launch day.

**Core User Journeys Supported at Launch:**
- Existing operator switching from SiteLink/storEDGE (migration path required)
- New facility owner setting up operations from scratch
- Daily operator workflow: check occupancy, process payments, handle move-ins/outs
- Monthly workflow: run AR aging, initiate lien process on delinquent tenants
- Online rental: accept a tenant self-service move-in overnight without operator involvement

**Must-Have Capabilities:**

1. **Facility & Unit Management** — Visual floor plan grid; unit status tracking (Available, Occupied, Reserved, Overlocked, Maintenance); unit type catalog with rates; bulk status operations; occupancy dashboard
2. **Tenant Management** — Contact records with ID upload; lease assignment; move-in/move-out workflow with digital checklist; tenant notes/activity log; delinquency flagging
3. **Stripe-Native Autopay** — Stripe Connect integration (operators own their Stripe account); recurring monthly billing; ACH + card support; 3-attempt failed payment retry over 7 days; manual payment recording; automated email receipts
4. **AR Aging & Reporting** — AR aging report (current/30/60/90+ days); occupancy report; revenue report (collected vs. expected by unit type); move-in/move-out log; CSV export
5. **Automated Lien Processing (50-State)** — State-selected lien statute timelines; lien workflow initiation; automated milestone scheduling (overlock → certified mail → second notice → auction listing); SCRA military status check via DoD portal; timestamped audit trail; state-compliant notice template generation
6. **Online Rental & Website Widget** — Embeddable unit availability widget (one-line JS snippet); online move-in flow (unit selection → tenant info → ID upload → e-sign lease → payment → gate code delivery); digital lease template management
7. **Multi-User Access** — Owner role (full access); Manager role (tenant/payment operations, no billing/export); Read-Only role (view occupancy/reports only)
8. **SiteLink/storEDGE Data Migration Tool** — CSV upload accepting standard SiteLink export format; field validation report before import; tenant records, unit assignments, lease dates, and 12-month payment history import

### Growth Features — Phase 2 (Months 7–12)

- Gate/access control integration (PTI, DoorKing, Nokē Smart Entry)
- Multi-site dashboard for 2–5 location operators under one login
- Expanded lien automation (auction marketplace integrations, newspaper ad placement)
- Referral program ("Give $50, Get $50")
- QuickBooks Online sync
- G2/Capterra review request automation (30-day post-onboarding trigger)

### Vision — Phase 3–4 (Months 13–36)

- Revenue management tools (market rate analysis, suggested price increases)
- Tenant insurance integration (revenue-share product)
- Canada launch (adapt lien module for provincial law)
- REST API for custom integrations
- White-label offering for 2–10 site regional operators
- Adjacent verticals: RV/boat storage, parking management

### Explicit Exclusions from MVP

- Access control / gate hardware integration
- Multi-site dashboard
- Revenue management / dynamic pricing
- Tenant insurance
- QuickBooks direct sync
- Full website builder (widget covers the need)
- iOS/Android native app (mobile-responsive web covers MVP)
- Canada / international lien compliance
- AI features, chatbots, revenue optimization

---

## User Journeys

### Journey 1: Linda — Switching from SiteLink (Primary User, Happy Path)

Linda, 54, owns a 180-unit facility in suburban Tennessee. She has been on SiteLink for 9 years and received her fourth Storable price increase notice. She posts in the Self Storage Owners Facebook group asking if anyone has switched. She gets 40 replies; VaultDesk is mentioned by two operators she trusts.

**Discovery:** Linda visits vaultdesk.com from a Facebook group link. The headline — "No Storable Payments lock-in. Use your own Stripe account." — stops her. She reads the pricing page (published, no "request a quote"). She reads a case study from another SiteLink migrant who saved $2,100/year on processing fees.

**Consideration (2–3 weeks):** Linda books a 30-minute demo. She asks: "Can you really migrate my SiteLink data?" and "What happens if you get acquired?" She watches the migration tool in action. She reads 8 G2 reviews, all from real facility operators.

**Decision:** She starts a 30-day trial with migration concierge. Her tenant records, units, and lease history are imported in 3 business days. She goes live on day 7 and processes her first autopay run that night.

**Aha moment:** Month-end she sees her Stripe processing fee statement. It is $180 lower than her last Storable Payments statement. Over a year: $2,160 returned.

**Resolution:** Linda never churns. She posts a recommendation in the Facebook group six months later. She becomes a reference customer for SSA event outreach.

**Journey Requirements Revealed:** SiteLink CSV migration tool; white-glove migration concierge workflow; demo scheduling; case study content; real-name G2 review generation; Stripe Connect onboarding; payment comparison visibility in dashboard.

---

### Journey 2: Mike — New Facility Owner (Primary User, Self-Serve Path)

Mike, 41, closed on a 120-unit facility in rural Georgia three weeks ago. He worked in logistics software and is tech-comfortable. He needs software before his first tenants move in. He is comparing VaultDesk, Storable Easy, and one other option from a forum thread.

**Discovery:** Google search "self storage management software." VaultDesk ranks #3. He sees the pricing page ($49/month, no card required for trial) and the online rental widget mentioned prominently.

**Consideration (1 week):** He reads the docs, watches the 3-minute demo video, signs up for a trial, and imports his 120-unit floor plan from CSV in 20 minutes. He tests the website widget on a staging site. He processes a test payment to his own Stripe account.

**Decision:** Pays $49/month without a phone call. He is technical enough to self-serve.

**Aha moment:** His first online rental arrives at 11pm while he sleeps. The tenant selected a unit, signed the lease, paid the first month, and received their gate code — fully automated.

**Resolution:** Mike refers two other new facility owners from a Facebook group for new storage operators.

**Journey Requirements Revealed:** Self-serve onboarding with no human required; trial with no credit card; CSV floor plan import; interactive widget testing; Stripe test mode; automated move-in flow with gate code delivery; referral tracking.

---

### Journey 3: 6Storage Refugee — Trust-Skeptical Switcher (Primary User, Edge Case)

A storage operator who was on a 6Storage lifetime deal. In 2024, 6Storage raised prices 300% on LTD holders with minimal notice. The operator is actively shopping and is posting in Self-Storage Talk. They are price-sensitive and trust-skeptical — they want explicit written proof that VaultDesk will not pull the same move.

**Discovery:** Google "6Storage alternative self storage software." VaultDesk appears. They see the pricing commitment page before anything else.

**Consideration (days):** They read the TOS pricing section line-by-line. They email support asking what happens if VaultDesk gets acquired. They get a response within 2 hours from a named support rep.

**Decision:** They purchase a $99 LTD. The guarantee language in the TOS is the deciding factor.

**Aha moment:** Twelve months later, they receive an email from VaultDesk: "Your price has not changed. Here's why we still stand behind this commitment." They share it in the Self-Storage Talk thread.

**Resolution:** They become VaultDesk's most vocal advocates in operator communities, generating organic referrals in forums.

**Journey Requirements Revealed:** Public pricing page with TOS commitment language; named support rep model; < 4-hour business-hour email SLA; LTD purchase flow; proactive price-stability communication to LTD holders.

---

### Journey 4: Facility Manager / Staff — Daily Operations (Secondary User)

Maria, 34, is Linda's part-time facility manager. She handles move-ins, takes payments at the office, and checks occupancy every morning. She is not technical. She uses the software on a tablet at the front desk.

**Opening:** Maria logs in at 8am and checks the occupancy dashboard. Two units went Available overnight (move-outs). One online rental came in at midnight — already processed, lease signed, gate code sent. She just needs to confirm the physical unit is ready.

**Daily workflow:** She searches a tenant name, views their balance, records a cash payment, prints a receipt, and marks a unit as Overlocked for a tenant who is 32 days past due. She never accesses billing settings or exports data — she does not need to.

**Resolution:** Maria completes her daily tasks in under 10 minutes with no training beyond a 15-minute walkthrough from Linda.

**Journey Requirements Revealed:** Role-based access (Manager role); mobile-responsive UI; fast tenant search; cash payment recording; receipt printing/email; overlock status update; no billing exposure for manager role.

---

### Journey 5: Delinquent Tenant Lien Process — Compliance-Critical Path (Edge Case)

James has not paid rent for 47 days. Linda needs to initiate the lien process according to Tennessee statute. She cannot afford a legal error — a deficient notice voids the lien and she could face liability.

**Opening:** VaultDesk flags James as 45+ days past due. Linda clicks "Start Lien Process." The system displays Tennessee's statutory timeline and asks for confirmation.

**Rising action:** The system generates the Day 1 overlock action, schedules the Day 14 certified mail notice, checks James's military status via SCRA lookup (clear), and creates a pre-filled notice document in the correct Tennessee format with facility details, tenant name, unit number, and outstanding balance.

**Compliance moment:** Linda downloads the PDF notice, verifies it, and mails it certified. She marks it as sent in VaultDesk. The system logs the timestamp. It schedules the Day 30 second notice and Day 45 auction listing reminder automatically.

**Resolution:** James pays in full on Day 28, prompted by the certified mail notice. Linda clicks "Close Lien Process." The audit trail remains on James's record permanently.

**Journey Requirements Revealed:** State-specific lien workflow engine; SCRA DoD portal lookup; PDF notice generation with correct statutory language; certified mail tracking entry; timestamped audit trail; lien close/cancel workflow; military status check before auction scheduling.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|------------|
| SiteLink CSV migration + concierge | Journey 1 |
| Stripe Connect onboarding + test mode | Journeys 1, 2 |
| Self-serve trial (no card required) | Journey 2 |
| Online move-in flow with e-sign | Journey 2 |
| Gate code delivery (email/SMS) | Journey 2 |
| TOS pricing commitment page | Journey 3 |
| Named support rep + < 4hr SLA | Journey 3 |
| LTD purchase flow | Journey 3 |
| Role-based access (Manager vs Owner) | Journey 4 |
| Mobile-responsive UI | Journey 4 |
| Cash payment recording + receipt | Journey 4 |
| 50-state lien workflow engine | Journey 5 |
| SCRA military status check | Journey 5 |
| PDF notice generation | Journey 5 |
| Timestamped lien audit trail | Journey 5 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**US Lien Law (50-State):**
- Self-storage lien law is state-specific. Each state has distinct statutory timelines (days to overlock, notice intervals, required notice language, auction waiting periods), notice format requirements, and auction procedures.
- VaultDesk must maintain a state lien law data model that stores: statute reference, overlock day, first notice day, second notice day, auction eligibility day, required notice language elements, and applicable military status check requirement.
- Tennessee example: Tennessee Code § 66-31-105 — lien attaches at 30 days past due; certified mail notice required; 30-day post-notice waiting period before auction.
- The system must not allow auction scheduling before SCRA military status check is completed and logged.
- Notice documents must include all elements required by state statute; template system must prevent generating incomplete notices.

**SCRA (Servicemembers Civil Relief Act):**
- Federal law prohibits self-storage lien auction against active-duty military members without court order.
- The system must perform SCRA lookup via DoD official SCRA portal (scra.dmdc.osd.mil) before allowing auction date scheduling.
- SCRA lookup result (clear / protected) must be timestamped and stored in lien audit trail.
- If SCRA lookup returns protected status, the lien auction step must be blocked with a visible warning and instructions for legal alternatives.

**Payment Compliance (PCI-DSS):**
- VaultDesk uses Stripe Connect platform model. Raw card data never passes through VaultDesk servers. Stripe Elements or Stripe-hosted payment pages handle all card input.
- PCI-DSS compliance is achieved via Stripe's SAQ A compliance path. VaultDesk does not store, process, or transmit card numbers.
- ACH payments via Stripe require tenant authorization. VaultDesk must present and record ACH authorization at payment setup.

**E-Signature:**
- Digital lease signatures must meet the Electronic Signatures in Global and National Commerce Act (ESIGN) standards: intent to sign, signature attribution, record retention.
- VaultDesk must retain signed lease PDFs in immutable storage linked to the tenant record.

### Technical Constraints

**Tenant Data Privacy:**
- Tenant PII (name, address, SSN fragments if collected for ID verification, payment method tokens) must be encrypted at rest.
- ID document images must be stored in object storage with access-controlled URLs; images must not be publicly accessible.
- Operators must be able to permanently delete a tenant record (right to erasure). Deletion must cascade to all PII fields while preserving anonymized audit trail entries for lien records.

**Audit Trail Immutability:**
- Lien workflow event log entries must be append-only; no deletion or backdating is permitted.
- Payment event records must be append-only.
- Audit records must survive account deletion or lien process cancellation.

**Data Portability:**
- Operators must be able to export all facility data (tenants, units, leases, payments, lien history) to CSV at any time without support intervention.
- Export must complete within 30 seconds for facilities up to 300 units.

### Integration Requirements

| Integration | Requirement |
|------------|-------------|
| Stripe Connect | OAuth onboarding flow; platform fee collection (if applicable in future); webhook handling for payment events (succeeded, failed, refunded) |
| DoD SCRA Portal | REST API lookup by SSN or DoD ID or date of birth/last name; response must indicate active duty status |
| Transactional Email | SendGrid or Postmark; required for payment receipts, lien notices, move-in confirmations, gate codes |
| SMS | Twilio; required for gate code delivery and optional payment reminders |
| Website Widget | Vanilla JS embed; must load independently of any CMS or framework; must not require operator's site to include external CSS |

### Risk Mitigations

**Lien Compliance Liability:**
- VaultDesk generates notice documents and tracks workflow milestones. Operators retain legal responsibility for mailing certified notices and executing auction procedures. TOS must state this explicitly.
- Legal counsel (storage law specialist) must review lien workflow and notice templates before production launch.
- System must display a compliance disclaimer on every lien process screen.

**Migration Data Loss:**
- Migration validation report must flag all records with missing required fields before import.
- All migration jobs must be reversible (rollback) before operator confirms final import.
- Imported payment history is marked as historical (non-billable) to prevent duplicate charge attempts.

---

## SaaS B2B — Project-Type Requirements

### Multi-Tenancy Model

- Each operator account is a fully isolated tenant. All data (units, tenants, leases, payments, lien records) is scoped to the account.
- Row-level tenancy in the database: all queries include `account_id` predicate enforced at the data access layer.
- No cross-account data sharing or aggregation queries in the MVP.
- Each Stripe Connect integration is scoped to one account; a Stripe account cannot be connected to multiple VaultDesk accounts.

### Role-Based Access Control (RBAC)

| Role | Capabilities |
|------|-------------|
| Owner | Full access: unit management, tenant management, payments, lien processing, reports, billing settings, data export, user management |
| Manager | Unit management, tenant management, payments, lien process initiation and milestone marking, reports; cannot access billing settings or data export |
| Read-Only | View occupancy dashboard, unit status, tenant list (no PII details), and basic reports; no write access |

- RBAC enforced server-side on all API endpoints. Frontend role checks are supplementary only.
- Owner role is assigned to account creator and cannot be removed from the last Owner of an account.
- Invitation flow: Owner sends email invite with role assignment; invitee creates VaultDesk credentials via invite link.

### Subscription & Billing Architecture

- VaultDesk charges operators via Stripe (VaultDesk's own Stripe merchant account, separate from the Stripe Connect accounts operators use for tenant payments).
- Pricing tiers: $49/month (≤150 units), $79/month (151–300 units). Tier checked monthly based on active unit count.
- LTD purchases: one-time payment, lifetime access at tier ceiling purchased; stored as a separate plan type in the subscription model.
- Trial: 30-day free trial, no credit card required. After trial expiry, read-only access until payment method added.
- Plan upgrade: if operator's active unit count exceeds 150, they are prompted to upgrade to the $79 tier with 7-day grace period before enforcement.

### Onboarding Sequence

1. Account creation (email + password)
2. Facility details (name, address, state selection for lien law)
3. Unit catalog setup (wizard: unit types, row/column grid layout)
4. Stripe Connect onboarding (OAuth redirect; test mode available)
5. Optional: SiteLink/storEDGE migration import
6. Optional: Website widget setup (copy one-line embed code)
7. First tenants added (manual or via migration)

Target: operator completes steps 1–4 within 30 minutes and steps 1–7 within 2 hours.

### Customer Communication Model

- All operator-facing communication via email + in-app notifications
- Tenant-facing communication via email (receipts, lease, gate codes, payment reminders) + SMS (gate codes, optional payment reminders)
- Support channels: email (<4hr SLA during business hours) + Intercom or similar in-app chat
- LTD customers receive the same support SLA as monthly subscribers

### Technical Architecture Considerations

- Web-only (no native mobile app); fully responsive for tablet and mobile browser use
- Backend API (REST or GraphQL) with separate frontend (React/Next.js or similar)
- Lien workflow engine: state machine with persistent milestone storage; milestones are durable jobs (not in-memory timers)
- Lien timeline data stored as operator-editable config keyed by US state code; supports future updates to state statutes without code deployment
- Website widget served as static JS from CDN; widget polls VaultDesk API for unit availability (no server-side rendering required on operator's site)
- PDF generation for lien notices: server-side rendered (Puppeteer, WeasyPrint, or equivalent) with archival storage

---

## Functional Requirements

### Facility & Unit Management

- FR1: Operators can create a facility profile with name, address, state, and time zone
- FR2: Operators can define a unit type catalog with unit size, climate control flag, and monthly rate
- FR3: Operators can create a visual floor plan grid by assigning units to row/column positions with unit type
- FR4: Operators can view all units in a grid layout with color-coded status indicators (Available, Occupied, Reserved, Overlocked, Maintenance)
- FR5: Operators can update the status of a single unit directly from the floor plan grid
- FR6: Operators can select multiple units and apply a status change in bulk
- FR7: Operators can view an occupancy dashboard showing total units, occupied units, occupancy percentage, and current monthly revenue by unit type

### Tenant Management

- FR8: Operators can create tenant contact records with name, email, phone, mailing address, and ID document image upload
- FR9: Operators can assign a tenant to a unit with lease start date, monthly rate, payment anniversary day, and auto-renew flag
- FR10: Operators can execute a move-in workflow that creates a lease, charges the first month's rent, generates a digital lease for e-signature, and marks the unit as Occupied
- FR11: Operators can execute a move-out workflow that ends the lease, calculates any prorated refund, marks the unit as Available, and archives the tenant record
- FR12: Operators can view and add notes to a tenant's activity log with timestamp and author attribution
- FR13: Operators can view a delinquency list showing all tenants with outstanding balances including days past due and balance amount

### Payment Processing

- FR14: Operators can connect their own Stripe account via Stripe Connect OAuth flow
- FR15: Operators can disconnect and reconnect a Stripe account without data loss
- FR16: The system automatically charges each tenant's payment method on their monthly billing anniversary date
- FR17: Tenants can pay by ACH bank transfer or credit/debit card; operators can restrict available payment methods per account
- FR18: The system automatically retries failed payments up to 3 times at 2-day intervals before marking the tenant as delinquent
- FR19: Operators can record a manual payment (cash, check, money order) with amount, date, method, and optional note
- FR20: Tenants automatically receive an email receipt within 5 minutes of any successful payment
- FR21: Operators can issue a full or partial refund on any recorded payment
- FR22: Operators can view a complete payment history for any tenant with date, amount, method, and status

### Reporting & Data Export

- FR23: Operators can view an AR aging report grouped by current, 30-day, 60-day, and 90+ day buckets with tenant-level detail
- FR24: Operators can view a daily occupancy snapshot and 12-month occupancy trend chart
- FR25: Operators can view a revenue report showing expected monthly revenue vs. collected revenue, broken down by unit type
- FR26: Operators can view a move-in/move-out activity log filterable by date range
- FR27: Operators can export the complete facility dataset (units, tenants, leases, payments) to CSV with no support intervention required

### Lien Processing

- FR28: Operators select their state at account setup; the system loads the applicable lien statute timeline (overlock day, notice intervals, auction eligibility day, required notice elements)
- FR29: Operators can initiate a lien workflow on any delinquent tenant from the tenant record or delinquency list
- FR30: The system displays the full lien process timeline for the selected state before the operator confirms initiation
- FR31: The system creates a durable lien milestone schedule covering: overlock action, certified mail first notice, certified mail second notice, auction listing eligibility
- FR32: The system performs an SCRA military status lookup via the DoD SCRA portal before the auction listing milestone becomes actionable; lookup result is timestamped and stored
- FR33: If SCRA lookup returns active-duty status, the auction listing milestone is blocked and the operator receives instructions for legal alternatives
- FR34: Operators can generate a state-compliant lien notice document (PDF) populated with facility name, address, tenant name, unit number, balance, and statutory language for their state
- FR35: Operators can mark each lien milestone as completed with timestamp; marked milestones appear in the permanent lien audit trail
- FR36: Operators can close or cancel an active lien process; the audit trail entry is preserved with the closure reason and timestamp
- FR37: Operators can view a complete lien history for any tenant showing all milestones, timestamps, and actions taken

### Online Rental & Website Widget

- FR38: Operators can generate a one-line JavaScript embed code that renders a unit availability widget on any external website
- FR39: The widget displays available units by type with dimensions, features, and monthly rate
- FR40: Prospective tenants can initiate an online move-in from the widget: enter contact information, upload a government ID, review and e-sign the digital lease, and complete payment
- FR41: On successful online move-in, the system automatically: marks the unit as Occupied, creates the tenant record, creates the lease, records the payment, and sends a confirmation email and SMS with the gate code
- FR42: Operators can create and manage the digital lease template with their facility-specific terms, replacing the placeholder fields the system populates automatically
- FR43: Operators can view all online move-in transactions and their completion status

### User & Access Management

- FR44: Account owners can invite team members by email with an assigned role (Owner, Manager, Read-Only)
- FR45: Invited users receive an email with a secure one-time link to create their VaultDesk credentials
- FR46: Account owners can change a team member's role or revoke their access at any time
- FR47: All role permission boundaries are enforced server-side; Manager and Read-Only users cannot access billing settings, subscription management, or data export regardless of frontend navigation

### Data Migration

- FR48: Operators can upload a SiteLink or storEDGE standard CSV export to initiate a data migration
- FR49: The system generates a validation report before final import showing: total records detected, records with missing required fields, records with field mapping conflicts, and a preview of the first 10 records
- FR50: Operators can confirm or cancel the migration after reviewing the validation report
- FR51: Confirmed migrations import tenant contact records, unit assignments, lease dates, lease rates, and up to 12 months of payment history; imported payments are marked as historical and do not trigger billing actions
- FR52: Operators can view migration job status (pending, in progress, complete, failed) and download a post-migration summary report

### Account & Billing Management

- FR53: Operators can manage their VaultDesk subscription (view current plan, add/update payment method, view invoices)
- FR54: Operators on monthly plans can cancel at any time; access continues until the end of the current billing period
- FR55: Operators whose active unit count exceeds their plan tier limit receive an in-app notification and 7-day grace period before being prompted to upgrade

---

## Non-Functional Requirements

### Performance

- Page load time for the occupancy dashboard and floor plan grid < 2 seconds at 95th percentile under normal operating load (defined as up to 50 concurrent operator sessions)
- Stripe payment confirmation displayed to tenant < 3 seconds after payment submission
- CSV data export for a 300-unit facility completes in < 30 seconds
- AR aging report loads in < 5 seconds for facilities with up to 3 years of payment history
- SCRA lookup response (success or failure) handled within 10 seconds; operator is notified if the DoD portal is unreachable rather than silently blocking the workflow

### Security

- All data encrypted at rest using AES-256; all data in transit protected by TLS 1.3 minimum
- VaultDesk never receives, stores, or logs raw payment card numbers or full bank account numbers; Stripe Elements or Stripe-hosted pages handle all payment input (SAQ A PCI-DSS compliance path)
- SCRA portal credentials stored in secrets manager (not in application environment variables or codebase)
- RBAC permissions enforced at the API layer; every endpoint validates the requesting user's role before processing; frontend role checks are supplementary only
- Operator sessions expire after 8 hours of inactivity; re-authentication required
- Tenant ID document images stored in private object storage with time-limited signed URLs; images are never served from publicly accessible paths
- All lien audit trail writes are append-only at the database level; no delete or update operations permitted on lien event records

### Reliability

- System maintains 99.9% uptime during business hours (6am–10pm local time, Monday–Sunday) as measured by uptime monitoring service
- Stripe payment webhook processing achieves at-least-once delivery: all webhook events are persisted to a durable queue before processing; failed processing attempts are retried with exponential backoff for up to 24 hours
- Lien milestone schedules persist through server restarts and deployments; milestones are stored as database records, not in-memory timers
- Migration jobs are idempotent: re-running a failed migration does not create duplicate records

### Scalability

- Initial architecture supports up to 1,000 concurrent operator accounts without horizontal scaling changes
- All database queries include account-scoped indexes; query performance does not degrade as the total account count grows (row-level tenancy enforced at query construction layer)
- Website widget is served from CDN as static assets; widget-to-API calls use standard REST with cache headers for unit availability; widget load performance is independent of operator site traffic

### Integration Reliability

- Stripe webhook failures trigger operator-visible alerts in the dashboard (e.g., "Autopay run had 2 failures — review delinquency list")
- SCRA lookup failures are surfaced as actionable operator warnings with fallback instructions; they do not silently unblock auction scheduling
- Transactional email delivery failures (bounced receipts, failed lien notices) are logged and surfaced to the operator with retry options
- SMS delivery failures fall back to email delivery with an in-app notification to the operator

### Accessibility

- Web UI meets WCAG 2.1 Level AA for all operator-facing screens (not the public widget, which meets AA as a best-effort target)
- Floor plan grid is keyboard-navigable; unit status updates accessible without mouse
- All form inputs have visible labels and error messages; no color-only error indicators

---

*VaultDesk PRD v1.0 — 2026-05-24*  
*This document is the capability contract for all downstream design, architecture, epic breakdown, and development work. Any capability not listed in the Functional Requirements section is explicitly out of scope unless this PRD is updated.*
