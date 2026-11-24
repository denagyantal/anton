---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/solo-accounting-practice-management.md
  - _bmad-output/planning-artifacts/brief-solo-accounting-practice-management.md
workflowType: prd
date: 2026-11-24
author: Root
product_name: ProPractice
idea_slug: solo-accounting-practice-management
classification:
  projectType: saas_b2b
  domain: accounting_practice_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ProPractice

**Author:** Root
**Date:** 2026-11-24
**Product:** ProPractice — Solo Accounting Practice Management
**Status:** Complete

---

## Executive Summary

ProPractice is an all-in-one practice management layer for solo CPAs and bookkeepers that integrates with QuickBooks Online rather than replacing it. It consolidates four separate tools — workflow management (Karbon), e-signature (DocuSign), client portal, and scheduling (Calendly) — into a single subscription at $49–79/month. The target segment is US solo and micro accounting practices (1–3 practitioners) managing 10–50 active clients who currently pay $176–245/month for a fragmented stack built for multi-person firms.

The product addresses three simultaneous market disruptions: Intuit's QBO price increases (13–70% in August 2026), the discontinuation of QBO Online Accountant on December 31 2026, and TaxDome's November 2026 pricing restructuring to a $1,500/year minimum. These events have created the largest simultaneous stack re-evaluation event in accounting software in a decade, with tens of thousands of solo practitioners actively replacing tools right now.

**TAM and financial targets:**
- 183,850 US solo/micro accounting firms — $174M ARR at $79/mo penetration
- $10K MRR achievable at ~250 customers (1.4% of solo CPA market)
- AppSumo LTD launch potential: $140K–$200K in a 2-week campaign
- Target window: December 2026–June 2027 (peak stack re-evaluation period)

### What Makes This Special

ProPractice occupies an uncontested intersection: **solo-first UX + built-in e-signature + QBO data integration + self-serve onboarding + pricing under $100/month**. No current player holds all five. Financial Cents is closest but lacks e-signature and QBO integration. Karbon has workflow depth but is priced for teams, demo-required, and QBO-blind. TaxDome just priced itself out of the solo segment.

The core insight is structural: QBO lock-in is a feature, not a problem. Solo practitioners cannot leave QBO because their clients depend on it — but they are entirely free to replace the $95–120/month of auxiliary tools (Karbon + DocuSign + Calendly) that wrap around QBO. ProPractice is the first product designed to own that replacement position at the moment practitioners are most motivated to switch.

The differentiating moat is the QBO read-only data layer. No sub-$100/month practice management tool pulls live QBO client data. Practitioners who connect QBO see reconciliation status and anomaly flags without logging into QBO separately — this creates a genuine workflow upgrade that justifies the tool on its own.

## Project Classification

- **Project Type:** SaaS B2B — web application, subscription + LTD pricing
- **Domain:** Accounting practice management (financial services software)
- **Complexity:** Medium — handles client financial data and document signing; no direct payment processing; not a licensed financial product; QBO API integration adds technical complexity
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Primary success signal — stack replacement:** ≥70% of active users cancel at least one of DocuSign, Calendly, or Karbon within 60 days of ProPractice signup. This is the core value proposition test.

**Activation sequence (the "triple activation" milestone):**
1. User sends first e-signed engagement letter (replaces DocuSign)
2. User connects QBO via OAuth
3. User has ≥5 active client workflows running

Users who complete all three within week 1 churn at <5%. This is the primary onboarding success marker.

**Engagement and onboarding:**
- ≥80% of signups complete first client setup within 24 hours without contacting support
- ≥60% of users send first e-signed engagement letter within first week
- ≥50% of users have ≥3 clients using the client portal within 30 days
- ≥85% of paying subscribers log in at least 2x per week

**Client experience success:** ≥40% of practitioner clients interact with their portal (upload a document, check status, or sign a document) within the first month. This validates that the portal is professional enough for practitioners to use with real clients.

### Business Success

**6-month milestones (by June 2027):**
- $10K MRR from subscription revenue (~250 customers at $49/mo blended)
- AppSumo LTD launch: $100K+ in LTD revenue (target Q1 2027)
- Net Promoter Score ≥50
- G2/Capterra listing with ≥15 reviews at ≥4.5/5 stars

**12-month milestones (by November 2027):**
- $25K MRR (~500 customers)
- Monthly churn ≤3%
- 2 organic community-driven acquisition spikes (Reddit posts generating 50+ signups each)
- QBO API costs ≤8% of gross revenue

**Key acquisition metrics:**
- Trial-to-paid conversion: ≥25%
- Reddit-sourced signups: ≥40% of trials in first 6 months
- Cost per trial: <$30 (community-led; near-zero paid acquisition initially)

**Go/No-Go decision point at month 3:** If fewer than 100 paying subscribers and onboarding completion <60%, the product requires significant UX rework before scaling marketing spend.

### Technical Success

- Self-serve onboarding completes without support intervention: ≥80% of users
- QBO OAuth connection rate: ≥60% of paying users connect QBO within first week
- Support ticket rate: <2 per 100 active users per month
- E-signature delivery success rate (not bounced): ≥98%
- QBO API sync reliability: ≥99.5% successful data pulls for connected clients
- Zero downtime during tax season peak (January–April): system supports 3x normal concurrent sessions

### Measurable Outcomes

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Stack replacement rate | ≥70% cancel Karbon/DocuSign/Calendly by day 60 | Post-onboarding survey at 60 days |
| Onboarding completion | ≥80% complete first client setup in 24h | In-product event tracking |
| E-sign send rate | ≥60% send first engagement letter in week 1 | In-product event tracking |
| Portal activation | ≥50% have 3+ portal-active clients in 30 days | In-product event tracking |
| Monthly active usage | ≥85% log in 2x/week | Session tracking |
| Trial conversion | ≥25% trial → paid | Billing system |
| Monthly churn | ≤3% after month 3 | Billing system |
| NPS | ≥50 | In-app survey at 90 days |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must enable a solo practitioner to fully replace Karbon + DocuSign + Calendly in a single afternoon. The scope is designed around the five operational tasks practitioners perform weekly:

1. Check which clients need attention (workflow dashboard)
2. Send and track engagement letters (e-signature)
3. Collect documents from clients (client portal)
4. Schedule calls with clients (scheduling)
5. Check client QBO status without logging into QBO (read-only integration)

**MVP feature set:**
- Client list with per-client workflows and status
- Pre-built accounting workflow templates (individual tax, business tax, monthly bookkeeping, new client onboarding)
- E-signature (engagement letter send, track, file)
- Client portal (document upload/download, status display, messaging)
- Scheduling with calendar sync
- QBO read-only integration (reconciliation status, anomaly flagging)
- Stripe-based subscription billing + LTD code redemption
- CSV import for initial client setup

**MVP deliberately excludes:** invoicing/billing to clients, QBO write operations, tax preparation, multi-user collaboration, time tracking, CRM/lead management, AI-drafted letters, IRS portal integration, native mobile apps, integrations beyond QBO, white-labeling.

### Growth Features (Post-MVP)

**v1.1 (months 4–6 post-launch):**
- AI-drafted engagement letters (Claude API — draft based on client type/services, practitioner reviews)
- QBO anomaly AI analysis — plain-English explanations of flagged client accounts
- Multi-user support (Team plan at $79/mo for 2 users, $129/mo for unlimited)
- Annual billing option (20% discount)
- Google Calendar / Apple Calendar bi-directional sync

**v2.0 (months 7–12):**
- White-label client portal (custom domain per firm)
- Xero integration (opens non-QBO users; Canadian and UK practitioners)
- Time tracking + invoice generation (billable hours per client)
- Zapier/Make integration
- Native mobile app (iOS and Android)

### Vision (Future)

- Advisory intelligence layer: AI-driven client health scores, proactive outreach triggers ("Client A's revenue is down 30% YoY — good moment to reach out about tax planning")
- Multi-firm network effects: overflow client referral graph between solo practitioners
- API marketplace: integrations with Thomson Reuters, CCH, Gusto, SmartVault
- Expansion to small firm plan (up to 5 users, 500 clients) targeting the adjacent 2–5 person firm segment currently served by Karbon

---

## User Journeys

### Journey 1: Sarah — Solo CPA replacing her tool stack (Primary User, Success Path)

Sarah is a CPA who left a mid-size firm three years ago and runs a home-based practice with 25 individual tax clients and 3 monthly bookkeeping clients. She earns $140K/year. Her current stack costs $245/month (Intuit Accountant Suite $149 + Karbon $59 + DocuSign $25 + Calendly $12).

**Discovery — the itch that becomes action:**
In November 2026, Sarah is scrolling r/Bookkeeping and sees a thread: "Anyone found a good alternative to Karbon for solo practices? The price increase is killing me." She's been seething about the QBOA discontinuation notice since September. Someone replies: "Tried ProPractice — $49/mo, includes e-sign, connects to QBO. Signed up without talking to anyone." She clicks.

**Evaluation — 8 minutes:**
The ProPractice landing page headline: "Replace Karbon + DocuSign + Calendly for $49/mo — built for solo CPAs." She calculates: Karbon $59 + DocuSign $25 + Calendly $12 = $96/mo vs. ProPractice $49/mo. She signs up for a free trial without filling a demo request form. She notes that there is no "book a call" wall.

**Onboarding — 22 minutes:**
She imports 25 client names from a CSV. She sets up one workflow template: "Individual Tax Return 2026" with 3 steps (gather docs → prepare → review/file). She connects QBO via OAuth. She sends herself a test engagement letter with e-sign. Total time: 22 minutes. She didn't contact support.

**First "aha!" moment — day 3:**
She opens ProPractice from her phone between client calls. She sees that 7 of her 25 clients still haven't submitted documents. She sends a nudge email to all 7 from one screen. Previously this required logging into Karbon, filtering, exporting a list, and sending individual emails. 3 minutes vs. 20 minutes.

**Core weekly rhythm:**
- Monday: Check engagement status dashboard — who's pending, who needs attention
- As needed: Send engagement letters, schedule consultation calls
- Monthly: Review QBO reconciliation status for bookkeeping clients, flag anomalies

**Success moment:**
During tax season, Sarah handles 25 clients simultaneously without missing any deadlines. Zero "where's my return?" client calls — clients check their portal status themselves. She posts about ProPractice in r/Bookkeeping.

**Journey requirements revealed:** Dashboard with multi-client status overview; bulk communication triggers; e-signature workflow with zero-login client signing; QBO dashboard for quick client checks; mobile-responsive views.

---

### Journey 2: Marcus — Solo Bookkeeper upgrading from Financial Cents (Primary User, Tool Upgrade)

Marcus runs a solo bookkeeping practice with 18 small business clients at $350/month average ($75K/year ARR). His current stack: QBO Wholesale Partner Program ~$80/mo + Financial Cents $19/mo + DocuSign $25/mo. He uses Google Calendar for scheduling.

**The gap Marcus has accepted but shouldn't:**
Marcus has been with Financial Cents for 8 months. He uses it for task tracking. But every time he needs to send a service agreement or engagement letter, he has to open DocuSign separately — different login, different context, manually file the signed document. His larger clients have started asking if he has a "real client portal" — the "just email me the documents" instruction feels unprofessional.

**Discovery:**
Marcus sees a comparison post in r/smallbusiness: "Financial Cents vs ProPractice." The key line catches his eye: "ProPractice includes e-sign at no extra cost and you can see QBO reconciliation status without logging into client accounts." He's been frustrated that he has to log into each client's QBO to generate a reconciliation report. He tries ProPractice.

**Migration:**
He exports his client list from Financial Cents as CSV, imports into ProPractice. He sets up a "Monthly Bookkeeping" workflow template. He sends one client a test engagement letter — it takes 4 minutes from template to signed PDF filed in the client record. The client portal URL he sends looks professional: `propractice.app/portal/[client-name]`.

**QBO integration discovery — the unexpected win:**
Marcus connects QBO and sees his 18 clients' reconciliation status on one screen. Three clients are showing >30 unreconciled transactions. He's been manually running reports on each client's QBO to find this — now it's surfaced automatically. He flags two clients immediately for follow-up.

**Journey requirements revealed:** Professional client portal with branded URL; e-signature natively integrated into workflow; QBO multi-client reconciliation dashboard; client document upload from portal with mobile support; bulk client import from CSV.

---

### Journey 3: Jennifer — 2-Person CPA Firm, edge of target (Secondary User, Multi-Seat)

Jennifer leads a 2-person CPA firm — herself as lead and one part-time staff accountant at 20 hours/week. 45 clients. Current stack: Karbon Team plan $118/month (2 users × $59) + DocuSign $25 + Calendly $12 = $155/month.

**The frustration:**
Jennifer's part-time staffer complains that Karbon is "confusing to use." She's attended two onboarding sessions with no improvement. The core problem: Karbon was designed for a 10-person team and forces a part-time staffer through the same complex interface. Jennifer also has to open Karbon and navigate several screens just to answer a client asking "where's my return?"

**Discovery and migration:**
Jennifer finds ProPractice through a CPA subreddit. The pitch resonates: "Built for solo practices — if you have 1-2 people, Karbon is overkill." She moves from $155/month to $79/month (unlimited plan). Her staffer is onboarded in 15 minutes — the workflow interface is checklist-simple. Jennifer can now check any client's status from her phone in under 30 seconds.

**Journey requirements revealed:** Clean, non-complex workflow UI that requires no onboarding for a part-time staff member; mobile-first status checks; simple per-client engagement view; role distinction not required (MVP is effectively multi-user at the same subscription tier — no complex permissions needed).

---

### Journey 4: Client of a Practitioner (Passive Portal User)

David is a small business owner who is Marcus's bookkeeping client. He receives a portal invitation link from Marcus: `propractice.app/portal/[slug]`. He has never logged into any accounting tool.

**First interaction — sign engagement letter:**
Marcus sends David a service agreement renewal. David receives an email with a link: "Review and sign your engagement letter." He clicks, sees the document in a browser — no account required, no app download. He reads the letter, clicks "Sign," draws his signature. Done in 3 minutes. He receives an email confirmation with the signed PDF.

**Monthly interaction — document upload:**
Marcus has set David's workflow step to "Awaiting: bank statements." David receives a notification: "Marcus needs your December bank statements." He clicks the portal link, sees a simple upload screen. He uploads three PDFs from his phone. The portal confirms receipt. He never needs a username or password.

**Status check:**
David occasionally checks the portal to see where his books stand. He sees: "Monthly reconciliation: Complete through November. December in progress." This saves him a "just checking in" email to Marcus.

**Journey requirements revealed:** Zero-login or token-based portal access (clients should not need to create accounts); mobile-optimized document upload (photos of documents on phone); plain-language status display ("In Progress" not internal status codes); email notification triggers for required client actions; signed document email confirmation with PDF attachment.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|------------|
| Multi-client dashboard with status overview | Sarah (Journey 1) |
| Bulk client communication triggers | Sarah (Journey 1) |
| E-signature with zero-login client signing | Sarah, Marcus (Journeys 1, 2) |
| QBO reconciliation status per client | Marcus (Journey 2) |
| Professional branded portal URL | Marcus (Journey 2) |
| CSV client import | Sarah, Marcus (Journeys 1, 2) |
| Mobile-responsive practitioner views | Sarah (Journey 1) |
| Token-based portal access (no client account required) | David (Journey 4) |
| Mobile document upload from portal | David (Journey 4) |
| Email notifications for client actions | David (Journey 4) |
| Checklist-simple workflow UI | Jennifer (Journey 3) |
| Plain-language client-facing status | David (Journey 4) |
| Scheduling self-booking link | Sarah (Journey 1) |

---

## Domain-Specific Requirements

ProPractice operates in accounting practice management — a medium-complexity domain with the following constraints:

### Data Sensitivity and Privacy

Practitioners manage client financial data: tax documents, bank statements, payroll records, and engagement letters. Requirements:
- All documents stored with encryption at rest (AES-256)
- All data in transit encrypted (TLS 1.2+)
- Per-client data isolation — practitioner can only see their own clients' data
- Document access auditing — log every document view, download, and upload
- Document retention: practitioners must be able to export all client data (GDPR-compatible data portability)
- Automatic session timeout: practitioner session expires after 30 minutes of inactivity

### Client Confidentiality Model

Client portal access must be isolated: a client can only see their own documents and engagement status, never another client's. Portal tokens (for zero-login access) expire after 48 hours and invalidate on use for signing operations.

### E-Signature Legal Validity

For engagement letters to be legally enforceable (US), e-signature implementation must comply with ESIGN Act and UETA:
- Capture and store: signer IP address, timestamp, email address used for delivery
- Provide audit trail PDF with signature metadata
- Signed documents stored with tamper-evident hash

### QBO API Compliance

As a QBO App Partner:
- Read-only API access — no write operations in MVP
- OAuth 2.0 authorization flow — practitioners authorize ProPractice access to their QBO company data
- Rate limit compliance: Intuit enforces per-company and per-app rate limits; implement exponential backoff and sync scheduling
- QBO API costs metered — sync frequency throttled to control costs (max once per 4 hours per client account)
- Data freshness disclosure: show last sync timestamp to practitioners so they understand data may not be real-time

### Financial Data Handling

ProPractice is NOT a financial platform — it does not hold funds, process payments for clients, or store payment card data. Stripe handles all subscription billing. The QBO data ProPractice accesses is read-only reconciliation metadata, not raw transaction data or account balances. This scope limits regulatory exposure significantly.

### Compliance Path

MVP does not require SOC 2 Type II certification, but architecture decisions should not preclude it. Logging, access controls, and encryption requirements above create the foundation for SOC 2 pursuit in year 2 (target: when enterprise clients begin asking for it).

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. QBO data layer at the practice management layer:**
No sub-$100/month practice management tool currently reads QBO client data. The standard assumption is that practice management and accounting platform are separate contexts requiring separate logins. ProPractice challenges this by treating QBO reconciliation status as first-class practice management data — surfacing it in the practitioner's daily dashboard. This is a "last mile" integration that is technically straightforward (read-only API) but no competitor has executed.

**2. Zero-login client portal:**
Most practice management tools require clients to create accounts to access their portal. This is a significant friction barrier for small business owner and individual tax clients who have no desire to manage yet another login. ProPractice's token-based portal access (email link → direct portal view) removes this friction entirely. No account creation, no password, no app download.

**3. Market timing as a product feature:**
The product's December 2026 launch window is not incidental — it is structural to the go-to-market. QBOA discontinuation creates a forced migration event. TaxDome's pricing cliff creates simultaneous churn from TaxDome. QBO price increases create stack cost sensitivity. The product's "replace your stack today" framing is only credible during a disruption window; entering at the right moment is itself a moat against later imitators who miss the window.

### Validation Approach

- **QBO data layer:** Validate by tracking QBO OAuth connection rate and dashboard engagement. If <60% of paying users connect QBO, reconsider placement (may need more in-onboarding prompting). If >80%, QBO layer is a retention moat and should be deepened.
- **Zero-login portal:** Validate by tracking portal link clicks and document upload completion rates from clients. If clients are completing portal actions at >40%, the friction reduction is working.

### Risk Mitigation

- **Intuit API access:** ProPractice must join Intuit's App Partner Program. Risk: Intuit restricts or reprices API access. Mitigation: QBO integration is a moat, not a dependency — if Intuit restricts access, practitioners are annoyed at Intuit, not ProPractice. The core product (e-sig, portal, scheduling) works without QBO.
- **Token-based portal security:** Short-lived tokens (48h) + tamper-evident audit trail mitigates abuse risk. For sensitive document delivery, practitioners can require email re-verification before download.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

ProPractice is a multi-tenant SaaS platform where each **practitioner account** is a fully isolated tenant:
- Tenant isolation at the data layer (all queries scoped by `practitioner_id`)
- Client data strictly scoped to the practitioner who created the client record
- No cross-tenant data access under any circumstances
- Each practitioner's client portal URLs are namespaced (no URL guessing)

### Authentication & Authorization

**Practitioner authentication:**
- Email/password with bcrypt hashing
- Magic link login (passwordless) as alternative
- Google OAuth (most CPAs use Google Workspace)
- MFA optional at MVP, required path for future compliance

**Client portal authentication:**
- Zero-login for document upload and status check: time-limited signed URL tokens (48h expiry)
- E-signature events: token-based, single-use for the signing action
- Tokens delivered via email to client's email address on file

**Authorization model:**
- MVP: single practitioner per account (no per-user roles)
- v1.1: add Team role (practitioner + staff with restricted access — no billing, no settings)

### Subscription and Billing

- **Starter plan:** $49/month, up to 25 active clients, all features
- **Pro plan:** $79/month, unlimited active clients, all features
- **Annual discount:** 20% off (Starter $470/yr, Pro $759/yr)
- **LTD codes (AppSumo launch):** $149 (25 clients), $249 (unlimited clients)
- Stripe handles all payment processing — ProPractice stores no card data
- Client count enforcement: Starter plan blocks adding a 26th client with upgrade prompt
- LTD codes are perpetual for the tier purchased with no ongoing subscription charge

### Onboarding Architecture

Self-serve onboarding must complete in under 30 minutes without support:
1. Email signup → account created
2. Onboarding wizard: set practice name, timezone, and calendar availability
3. Import or manually add first 3 clients
4. Create first workflow from template
5. Send test engagement letter (self-signed)
6. Connect QBO (optional, prompted)

Each wizard step is independently completable — user can skip QBO and add it later. No demo, no sales call, no "book a meeting to get pricing."

### Integration Architecture

**QBO integration:**
- Intuit OAuth 2.0 App Partner integration
- Scopes: `com.intuit.quickbooks.accounting` (read-only)
- Background sync job: per-company data refresh every 4 hours
- Stored data: client reconciliation metadata, last reconciled date, unreconciled transaction count
- No raw transaction data stored — only computed status fields

**Calendar integration:**
- Google Calendar OAuth for availability sync and event creation
- Apple Calendar iCal export (read-only sync)
- Event creation: practitioner-confirmed bookings create calendar events for both parties

**E-signature infrastructure:**
- Options at build time: build on top of DocuSign API (simpler), use SignWell/HelloSign API (cheaper), or build from scratch (most control)
- For MVP: recommend SignWell or HelloSign API — lower cost than DocuSign, full ESIGN/UETA compliance, audit trail PDF generation built-in
- Signed documents stored in cloud object storage (S3-compatible) with practitioner-scoped access

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — proves the core value proposition (stack consolidation saves money and reduces friction) with real solo practitioners. Not a revenue MVP (doesn't need to be profitable from day one) and not a platform MVP (doesn't need to support third-party integrations yet).

**Resource Requirements:** 1–2 full-stack developers + 1 designer. 10–14 weeks to functional MVP with QBO integration. E-signature integration adds 2–3 weeks depending on vendor choice.

**Core success test for MVP:** A solo CPA can sign up, import clients, send an engagement letter, and check QBO client status — all without help — within 30 minutes of creating an account.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. Solo practitioner managing 10–50 clients through a tax or bookkeeping engagement
2. Practitioner sending an engagement letter and tracking signature
3. Client uploading documents via portal link (no account required)
4. Practitioner checking QBO reconciliation status across all clients

**Must-Have Capabilities:**
- Client management (list, profiles, notes, status)
- Workflow engine with accounting-specific templates
- E-signature (send, track, file, audit trail)
- Client portal (branded URL, document upload/download, status display, messaging)
- Scheduling (availability windows, booking link, calendar sync, confirmations)
- QBO read-only integration (OAuth, reconciliation status, anomaly flags)
- Subscription billing (Stripe, $49/$79 plans, LTD code redemption)
- Self-serve onboarding wizard (under 30 minutes)
- CSV client import

### Post-MVP Features

**Phase 2 (Post-MVP, months 4–6):**
- AI-drafted engagement letters (Claude API)
- QBO anomaly AI analysis (plain-English client flags)
- Multi-user support (Team plan)
- Annual billing + upgrade/downgrade flows
- Zapier/Make webhooks (simple trigger/action for power users)

**Phase 3 (Expansion, months 7–12):**
- White-label client portal (custom domain per firm)
- Xero integration
- Time tracking and invoice generation
- Native mobile app (iOS/Android)
- Advanced client health scoring

### Risk Mitigation Strategy

**Technical Risks:**
- *QBO API partnership approval timeline* — Mitigation: apply to Intuit App Partner Program on day 1 of development; MVP should be buildable and testable with mock QBO data while approval is pending
- *E-signature legal compliance* — Mitigation: use SignWell/HelloSign API (they own ESIGN/UETA compliance); do not build e-sig from scratch for MVP
- *Scaling QBO sync cost* — Mitigation: 4-hour sync interval per company; API cost projected at ≤8% of gross revenue at target scale; monitor and throttle aggressively

**Market Risks:**
- *Karbon releases cheaper solo tier* — Mitigation: our moat is QBO integration + e-sig bundled; Karbon cannot price-compete without breaking their team-first model
- *Intuit builds this themselves* — Mitigation: they just discontinued QBOA and built Intuit Accountant Suite; they are not going down-market to solo practice management; this is documented and public
- *Window closes before launch* — Mitigation: 10-week build timeline with hard December 2026 launch target; prioritize functional over polished

**Resource Risks:**
- *Smaller team than planned* — Mitigation: drop QBO integration from MVP if partnership approval delayed; ship with client management + e-sig + portal + scheduling first; add QBO in v1.1
- *LTD AppSumo timing* — Mitigation: AppSumo submissions require 60-90 day lead time; submit application at week 6 of development

---

## Functional Requirements

### Client Management

- FR1: Practitioner can create a client record with name, contact info, engagement type, and notes
- FR2: Practitioner can import clients from a CSV file with field mapping
- FR3: Practitioner can view all clients in a list with current engagement status visible at a glance
- FR4: Practitioner can search and filter clients by name, engagement type, and status
- FR5: Practitioner can generate a shareable portal access link for a specific client
- FR6: Practitioner can archive clients who are no longer active without deleting their history
- FR7: Practitioner can add private notes to a client record visible only to the practitioner

### Workflow Engine

- FR8: Practitioner can create a workflow from a pre-built accounting template (Individual Tax Return, Business Tax Return, Monthly Bookkeeping, New Client Onboarding)
- FR9: Practitioner can create a custom workflow template with named steps and status values
- FR10: Practitioner can instantiate a workflow for a specific client ("John Smith — 2026 1040")
- FR11: Practitioner can update the status of any workflow step (Not Started / In Progress / Awaiting Client / Complete)
- FR12: Practitioner can view a dashboard showing all active client workflows with current status across all clients
- FR13: Practitioner can set due dates on workflow instances and see overdue items highlighted
- FR14: Practitioner can send a nudge notification to a client whose workflow step is "Awaiting Client"

### E-Signature

- FR15: Practitioner can create an engagement letter from a template with merge fields (client name, services, fees, dates)
- FR16: Practitioner can send an engagement letter to a client for e-signature via email link
- FR17: Client can review and sign an engagement letter in a browser without creating an account
- FR18: Practitioner can track engagement letter status (Sent / Viewed / Signed / Declined)
- FR19: Signed documents are automatically filed to the client's record in ProPractice
- FR20: Practitioner can download a signed engagement letter as a PDF with audit trail metadata
- FR21: Practitioner can create and save custom engagement letter templates for reuse

### Client Portal

- FR22: Each client has a unique branded portal URL (propractice.app/portal/[slug]) accessible via token link
- FR23: Clients can upload documents to their portal from a browser or mobile device without creating an account
- FR24: Clients can view documents that the practitioner has shared with them
- FR25: Clients can see plain-language status of their active engagement (e.g., "Your 2026 tax return: In Progress — awaiting your W-2")
- FR26: Clients can send and receive messages with their practitioner through the portal
- FR27: Practitioners receive email notification when a client uploads a document or sends a message
- FR28: Clients receive email notification when a practitioner shares a document or requires action

### Scheduling

- FR29: Practitioner can set recurring availability windows (e.g., Monday–Friday 9am–5pm, excluding weekdays)
- FR30: Practitioner can create meeting types (Initial Consultation, Review Call, etc.) with configurable durations (15/30/60 min)
- FR31: Practitioner can share a booking link for a specific meeting type
- FR32: Clients can self-book an appointment from the booking link based on practitioner's available slots
- FR33: Both practitioner and client receive email confirmations with calendar invite attachments when a booking is made
- FR34: Practitioner can connect Google Calendar to sync availability and create events for booked appointments
- FR35: Practitioner can manually block time slots to prevent bookings

### QBO Integration

- FR36: Practitioner can connect one or more QBO companies via Intuit OAuth 2.0
- FR37: ProPractice pulls and displays reconciliation status per connected QBO company (last reconciled date, number of unreconciled transactions)
- FR38: ProPractice flags QBO accounts with >30 unreconciled transactions or >90-day reconciliation gap as "Needs Attention"
- FR39: Practitioner can view QBO reconciliation status for all connected clients on a single screen
- FR40: ProPractice displays the timestamp of the last QBO data sync for each connected client
- FR41: Practitioner can manually trigger a QBO data refresh for a specific client
- FR42: Practitioner can disconnect QBO access for a client at any time

### Account & Billing Management

- FR43: Practitioner can sign up and create an account with email and password or Google OAuth
- FR44: Practitioner can complete a self-serve onboarding wizard that sets up their practice profile and first client
- FR45: System enforces the 25-client limit for Starter plan subscribers and displays an upgrade prompt when the limit is reached
- FR46: Practitioner can upgrade from Starter to Pro plan in-app via Stripe Checkout
- FR47: Practitioner can redeem a Lifetime Deal code (AppSumo) to activate their account tier
- FR48: Practitioner can export all client data and documents as a ZIP archive (data portability)
- FR49: Practitioner can view their current subscription status, billing history, and upcoming charges
- FR50: Practitioner receives email notification 7 days before card expiry or failed payment

---

## Non-Functional Requirements

### Performance

- Page load time (time to interactive): ≤2 seconds for dashboard views on a standard broadband connection
- Document upload: ≤30 seconds for files up to 25MB; files larger than 25MB are rejected with an informative error
- E-signature email delivery: ≤60 seconds from practitioner sending to client receiving the email
- QBO sync latency: data refresh completes within 5 minutes of trigger (manual or scheduled)
- Concurrent session support: system must support 3x normal daily peak usage during January–April tax season without performance degradation
- Mobile portal performance: client portal must achieve ≤3 second time-to-interactive on a 4G mobile connection (key for client document upload)

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Passwords hashed with bcrypt (cost factor ≥12) or Argon2id
- Session tokens: JWT with 24-hour expiry; refresh token rotation on use
- Portal access tokens: signed, time-limited (48h), single-use for signing operations
- E-signature audit trail: immutable log per document capturing signer IP, email, timestamp, and document hash
- Document storage: practitioner-scoped access only; no cross-tenant document access
- QBO OAuth tokens: encrypted at rest, refreshed per Intuit token lifecycle, revocable by practitioner
- Security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options on all responses
- Rate limiting: login endpoint (5 attempts per 15 minutes per IP), API endpoints (100 requests per minute per authenticated user)
- Vulnerability disclosure: respond to CVE reports within 48 hours; patch critical vulnerabilities within 72 hours

### Scalability

- Initial scale target: 1,000 practitioners × 50 clients each = 50,000 client records; system must handle this without architectural changes
- Storage: each practitioner uploads an estimated average of 500MB of documents per year; architecture must scale to petabyte-class object storage without code changes
- Database: use connection pooling (PgBouncer or equivalent); queries must not degrade beyond 2x baseline at 10x user growth
- Background jobs: QBO sync, email delivery, and document processing run asynchronously; queue-based architecture with retry logic
- No single-tenant resource exhaustion: a practitioner with 500 clients should not degrade experience for practitioners with 25 clients

### Accessibility

- Client portal must meet WCAG 2.1 Level AA: document upload, e-signature, and status check flows are accessible to users of screen readers
- Color contrast ratios ≥4.5:1 for all text elements in client portal
- Mobile-first responsive design: client portal fully usable on 375px wide viewports
- Practitioner dashboard: responsive layout for tablet and desktop (mobile-first not required for practitioner views in MVP; defer full mobile parity to native app phase)

### Integration

- QBO OAuth integration must comply with Intuit Developer Program terms of service; API calls respect published rate limits (500 requests/minute per company, 10 requests/second)
- E-signature vendor API (SignWell/HelloSign): implement webhook-based status updates (Signed, Declined) rather than polling
- Google Calendar OAuth: request minimal scopes (calendar read + event write); practitioners can revoke at any time
- Stripe webhooks: idempotent handling for payment events; failed payments trigger retry logic per Stripe Radar recommendations
- All third-party credentials (QBO, Google, Stripe, e-sig vendor) stored as encrypted secrets, never in source code or logs

---

*PRD created: 2026-11-24*
*Based on: Product Brief (2026-11-24) + Shortlisted Idea (84/105, Tier 1)*
*Next step: create-architecture*
