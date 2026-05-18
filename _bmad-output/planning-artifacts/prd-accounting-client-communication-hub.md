---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/accounting-client-communication-hub.md
  - _bmad-output/planning-artifacts/brief-accounting-client-communication-hub.md
workflowType: prd
lastStep: step-12-complete
research_type: prd
research_topic: accounting-client-communication-hub
user_name: Root
date: 2026-05-18
classification:
  projectType: saas_b2b
  domain: professional_services_accounting
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Accounting Client Communication Hub

**Author:** Root
**Date:** 2026-05-18
**Status:** Complete

---

## Executive Summary

Solo bookkeepers and small accounting firms (1–5 staff) lose 40% of billable time chasing client documents via email — yet every solution designed to address this is priced for mid-to-large enterprises. The **Accounting Client Communication Hub** is a flat-rate, lightweight client communication platform that eliminates the document-chasing bottleneck for solo practitioners and small firms. It delivers a unified per-client inbox, magic-link no-login document request checklists, and a frictionless client portal — at $19–$49/month, 5× cheaper than TaxDome and without the complexity of Karbon or Canopy.

The target market is the 100,000+ solo bookkeeping practices and small CPA/tax firms in the US — the fastest-growing but most underserved segment of a $6.4B practice management software market. No current sub-$50/month solution combines email + portal messaging, document request automation, and no-login client access in a single integrated product. This gap is validated by sustained high-engagement discussion in r/Bookkeeping (200K+ members), QBO ProAdvisor forums, and Capterra review patterns showing 38–50% negative sentiment on setup complexity for existing tools.

The product's three killer capabilities directly address the #1 practitioner pain point: (1) a **magic-link no-login client portal** that removes the adoption barrier responsible for low completion rates, (2) a **document request builder** with automated follow-up reminders that ends the "did you get my email?" cycle, and (3) a **unified per-client inbox** that consolidates email and portal messages in one feed.

Go-to-market strategy pairs community-led growth in r/Bookkeeping and the QBO ProAdvisor network with an AppSumo LTD launch as the primary acquisition catalyst. Revenue targets: $5K MRR at Month 3, $15K MRR at Month 12. The AppSumo LTD targets 300–500 buyers at $79 (solo) / $149 (team up to 5 users).

### What Makes This Special

**Magic-link, no-login client portal** — every competitor at sub-$50/month requires client account creation, which is the single biggest drop-off point for portal adoption. Industry data shows passwordless portals achieve 40%+ higher client adoption. This is technically accessible but no competitor at this price tier has implemented it, creating a concrete UX differentiator that practitioners can describe to a prospective client in a single sentence: "You'll get a link — just click it."

**Flat-rate per-firm pricing** — $49/month for up to 5 users means adding a part-time admin or contractor doesn't trigger a per-user cliff. This directly addresses the most cited pricing complaint about TaxDome and Karbon in community discussions.

**Unified inbox at the solo tier** — Financial Cents (the closest direct competitor) offers email integration only on its $49/month annual tier, not its $19/month solo tier. No sub-$50 tool provides a true email + portal message feed organized by client. This is the practitioner's primary operational interface — owning it creates deep daily-use habits and strong retention.

**Extreme setup simplicity** — target of under 30 minutes from signup to first document request sent, designed against the #1 negative signal on accounting software (38–50% negative Capterra sentiment on "setup complexity").

## Project Classification

- **Project Type:** B2B SaaS web application
- **Domain:** Professional services — accounting, bookkeeping, tax
- **Complexity:** Medium (sensitive financial documents, email infrastructure, OAuth integrations, multi-tenancy)
- **Project Context:** Greenfield new product

---

## Success Criteria

### User Success

The core value proposition is time recovery. Every user success metric connects back to practitioner time saved and client adoption achieved.

| Metric | Target | How Measured |
|--------|--------|--------------|
| Client portal adoption rate | 70%+ of clients upload via portal within 30 days of practitioner onboarding | In-product: portal sessions vs. total active clients |
| Document request completion rate | 80%+ of requested documents received within 7 days of request sent | In-product: checklist completion rate per request cycle |
| Time-to-first-value | First document request sent within 30 minutes of account creation | In-product funnel: signup → first request sent event |
| Month-end cycle time reduction | 50% reduction in document collection time reported by users | NPS survey + in-product time-to-resolution analytics |
| Automated reminder effectiveness | 60%+ of document completions happen before manual follow-up needed | In-product: completions before vs. after manual follow-up event |
| Client support calls to practitioner | Clients complete portal upload without calling practitioner for help | Support ticket analysis; practitioner NPS open-response |

**User "Aha" Moment:** Practitioner sends a document request checklist at month-end, then receives an automatic in-app notification 3 days later that 8/10 documents have been received — without sending a single follow-up email.

### Business Success

**3-Month Targets:**
- $5,000 MRR from paying subscribers (excluding LTD revenue)
- 300+ AppSumo LTD buyers at launch
- 20+ G2/Capterra reviews averaging 4.5/5 or higher
- 3 published case studies with specific time-savings metrics

**12-Month Targets:**
- $15,000 MRR from recurring subscribers
- Established presence in r/Bookkeeping and QBO ProAdvisor network as a trusted tool recommendation (5+ organic positive mentions/month)
- 100+ reviews across G2 and Capterra
- QBO App Marketplace listing live
- Net MRR churn below 3% monthly

**Strategic Targets:**
- Own "TaxDome alternative for solo bookkeeper" search position (SEO + community mentions)
- Be the first brand a solo bookkeeper thinks of at $20–$50/month for client portal tools

### Technical Success

- Zero data loss incidents in any production period (financial documents are trust-critical)
- Portal magic links work reliably across iOS Safari and Android Chrome (highest client traffic browsers)
- QBO OAuth import successfully completed by 90%+ of practitioners who attempt it
- Email delivery rate for automated reminders above 95% (SPF/DKIM/DMARC configured)
- Page load time for practitioner dashboard under 3 seconds at P95
- File upload success rate for common formats (PDF, JPG, PNG, XLSX) above 99%

### Measurable Outcomes

**Beta Success Criteria (Gate for AppSumo Launch):**
1. 10+ beta users with 3+ active clients each have used the magic-link portal — 70%+ of their clients uploaded without phone support
2. 3+ beta users report a specific quantified time savings (e.g., "3 hours instead of 9 hours this month-end")
3. Beta NPS > 40
4. 5+ beta users completed QBO client import end-to-end
5. Zero data loss incidents; magic links work across iOS Safari and Android Chrome
6. 65%+ of clients sent magic-link requests complete at least one upload during beta

**Go/No-Go for AppSumo Launch:** If criteria 1–3 are met, proceed. If NPS below 40 or client adoption below 50%, delay to diagnose portal UX issues before launch.

---

## Product Scope

### MVP — Minimum Viable Product

The MVP scope is limited to three must-have features that directly address the document-chasing bottleneck and the client adoption barrier. Every MVP feature must work exceptionally — no half-built capabilities.

**Core Capabilities (Must Ship):**

1. **Document Request Builder** — Create named checklist templates, add line items with descriptions and optional due dates, assign to a client and send via magic link, real-time completion tracking (pending/uploaded/approved per item), automated email reminders at configurable intervals, support PDF/JPG/PNG/XLSX/CSV

2. **Magic-Link Client Portal** — No account creation, no password, no app install; firm-branded with name and logo; outstanding document requests displayed with clear item descriptions; file upload optimized for mobile (clients uploading phone photos); in-portal messaging thread per request; automatic link expiry/refresh (default 90 days)

3. **Unified Per-Client Inbox** — Gmail/Outlook BCC/forwarding integration; portal messages and email in the same feed, organized by client; unread/pending indicators; reply from inbox; message status tags (waiting on client, in progress, resolved)

**Core Supporting Capabilities:**

4. **Client & File Vault** — Client list with contact info, QBO client linkage; file vault organized by client and tax year/period; shareable read-only vault links; PDF/image preview

5. **QBO OAuth Integration** — Connect QBO account via OAuth, import client list, map QBO clients to portal clients automatically

6. **Internal Task Board** — Per-client task list with To Do / In Progress / Done status; task name, assignee (team plan), due date; not a full Kanban

**Pricing:**
- Solo plan: $19/month, 1 user, up to 30 active clients
- Team plan: $49/month, up to 5 users, unlimited clients
- 14-day free trial, no credit card required
- AppSumo LTD: $79 solo / $149 team

### Growth Features (Post-MVP, Phase 2 — Months 4–9)

- Xero OAuth integration (expands to UK, ANZ, Canada markets)
- E-signature for engagement letters and proposals (removes TaxDome's stickiest advantage)
- SMS reminders for clients (Liscio's key differentiator; dramatically improves completion for mobile-first clients)
- Bulk document request: send the same checklist to all clients in one click for month-end
- Client portal analytics: completion rate by client, predictive reminders

### Vision — Future (Phase 3+, Months 9–18+)

- AI-assisted document checklist generation based on client business type
- AI document classification on upload (auto-tag by type: bank statement, receipt, payroll)
- QBO App Marketplace listing for distribution
- Xero App Marketplace listing
- Proposal & engagement letter builder as full client lifecycle tool
- Referral/white-label partner program for bookkeeping coaches and ProAdvisor influencers
- Vertical expansion to adjacent professional services (payroll, HR consulting, financial advisory)

---

## User Journeys

### Journey 1: Sarah — Solo Bookkeeper, First Month-End Cycle

**Opening Scene:** Sarah runs a 35-client solo bookkeeping practice. It's the 27th of the month. She's staring at her "chasing" folder in Gmail — 200+ threads, 14 clients still haven't sent their bank statements. She just saw a thread in r/Bookkeeping: "Tired of chasing clients for bank statements every month — what are you using?" The top answer mentions the product: "Magic link means even my least tech-savvy client can upload docs without calling me." She clicks the website.

**Rising Action — Discovery to Onboarding:** Sarah spends 5 minutes on the pricing page ($19/month solo, 14-day free trial, no credit card). She checks two things: QBO integration and no-credit-card trial. She signs up, connects her QBO account, and sees her 35 clients auto-imported. She creates her first "Month-End Package" checklist (Q1 bank statement, expense receipts, credit card statement, payroll summary — 4 items) and sends the magic link to one client. She texts the client a quick heads-up. Total time from signup to first request sent: 22 minutes.

**Climax — First Value:** Within 24 hours, the client has uploaded 3/4 documents. Sarah gets a notification in the unified inbox. No follow-up email needed. Day 3: the automated reminder fires for the missing 4th document. Day 4: it's uploaded. This is the "aha" moment — an entire client request cycle without a single manual follow-up.

**Resolution:** Sarah sends month-end checklists to all 35 clients. Automated reminders handle follow-up on day 3 and day 7. By day 10, 28/35 clients have submitted. She only manually contacts the remaining 7. Her document chasing time drops from 12+ hours per month-end cycle to under 3 hours. She upgrades to the team plan when she hires a part-time admin.

**Advocacy:** 6 weeks later, the next "what portal tool are you using?" thread appears in r/Bookkeeping. Sarah posts a detailed recommendation with the time savings metric. It generates 18 new trial signups.

**Journey Requirements Revealed:** QBO import, checklist templates, magic-link portal (mobile-optimized), automated reminders, unified inbox, notification system, community-shareable outcomes.

---

### Journey 2: Marcus — Small CPA Firm Owner, Team Coordination

**Opening Scene:** Marcus runs a 3-person CPA firm with 80+ clients. It's 9 AM on a Monday. He opens Gmail and immediately has to switch between three tabs — his own email, a shared alias his team BCCs, and a client portal system he's been trying to phase out. He has no idea which clients are still waiting on documents across his two bookkeepers. This chaos happens every month-end.

**Rising Action:** Marcus's bookkeeper Priya mentions she heard about the product in the Bookkeeping Business Network Facebook group. He signs up for a team trial. He invites both bookkeepers as team members. They connect the shared Gmail account via BCC integration. Each bookkeeper migrates their client list and starts using the unified inbox and document request workflow within their first afternoon. No training session needed.

**Climax — First Team View:** Marcus opens the dashboard Monday morning and sees a single view of all pending document requests across all clients and both team members — color-coded by urgency (red: overdue, yellow: due this week, green: on track). He assigns two high-priority clients from Priya's queue to himself because she's out sick. The internal task board shows him that the Q1 reconciliation for three clients is still in "In Progress."

**Resolution:** Month-end closes with 71/80 clients submitting documents within 7 days — up from their previous average of 52. Marcus upgrades from trial to the $49/month team plan within 10 days.

**Journey Requirements Revealed:** Multi-user accounts, team inbox visibility across all clients, client assignment, task board with team member context, team plan upgrade path.

---

### Journey 3: David — Client of a Bookkeeper (End-User Portal Experience)

**Opening Scene:** David is a small restaurant owner and client of Sarah (from Journey 1). He's not particularly tech-savvy. He gets an email from Sarah saying his Q1 documents are due. There's a big orange button in the email: "Upload Your Documents." He clicks it. No login screen appears.

**Rising Action:** David's browser opens directly to a simple page branded with Sarah's firm name. He sees a list: "Q1 Bank Statement," "April Expense Receipts," "Credit Card Statement (April)." Each item has a clear description Sarah wrote. He takes a photo of his bank statement with his phone, uploads it to the first item. He types a quick message: "I don't have the credit card statement yet — can I send it Friday?"

**Climax — Frictionless Completion:** Three uploads in 6 minutes. David never creates an account, never remembers a password, never downloads an app. The message he sent appears in Sarah's unified inbox 30 seconds later. She replies: "Friday is fine." David sees the reply when he re-opens the portal link from his email.

**Resolution:** David completes his final upload on Friday. The checklist shows all items as "Received." He hasn't called Sarah once this month. He tells his accountant friend how easy it was — that friend is also a bookkeeper.

**Journey Requirements Revealed:** Zero-friction portal entry, mobile file upload, in-portal messaging, clear visual checklist status, no account creation, branded experience, magic-link reliability across mobile browsers.

---

### Journey 4: Sarah — Onboarding Failure Recovery (Edge Case)

**Opening Scene:** Sarah sends a magic link to her oldest client, Carl — a 73-year-old business owner who barely uses email. Carl clicks the link on his iPad but gets confused. The upload button isn't obvious to him. He calls Sarah.

**Rising Action:** Sarah walks Carl through the upload over the phone ("tap the green button next to 'Bank Statement'"). It works. She notes in the internal task board for Carl's account: "Carl needs phone walkthrough — call before sending portal link." She also writes a short note in the unified inbox.

**Resolution:** Next month, Sarah adds the phone reminder as a task for Carl's account. The product doesn't need to solve Carl's tech gap — it just needs not to be the obstacle. The magic-link portal removes one barrier (account creation); the rest of the practitioner's support workflow is human.

**Journey Requirements Revealed:** Task board with practitioner notes, inbox message history per client, mobile-responsive portal (works on iPad), graceful edge case handling — portal should be simple enough that a phone walkthrough closes the gap.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|-------------|
| QBO OAuth import and client mapping | Journey 1 |
| Checklist templates and magic-link sending | Journeys 1, 3 |
| Automated reminder engine | Journey 1 |
| Unified per-client inbox (email + portal) | Journeys 1, 2 |
| Mobile-first portal (iOS Safari, Android Chrome, iPad) | Journeys 3, 4 |
| No-login portal with firm branding | Journeys 3, 4 |
| In-portal messaging (client → practitioner, practitioner → client) | Journeys 3, 4 |
| Multi-user team accounts with cross-client visibility | Journey 2 |
| Client assignment to team member | Journey 2 |
| Internal task board per client with notes | Journeys 2, 4 |
| Dashboard: pending requests overview across all clients | Journey 2 |
| File vault (organized by client and period) | Journey 1 |
| Notification system (in-app + email for practitioners) | Journey 1 |

---

## Domain-Specific Requirements

### Data Security & Privacy

Practitioners upload and store client financial documents — bank statements, tax returns, payroll records, expense receipts. These are sensitive PII and financial data.

**Requirements:**
- All documents stored with AES-256 encryption at rest
- All data transmission encrypted via TLS 1.2+
- Per-client access isolation: no cross-tenant data access possible at the application or database level
- Magic links must be cryptographically random (minimum 128-bit entropy), not sequential or guessable
- Magic links expire automatically; expired links must return a non-informative error (no document content exposed)
- Document URLs must not be publicly guessable — all file access requires authenticated session or valid magic link
- Practitioner accounts secured with email verification + optional 2FA (TOTP-based)

### Email Infrastructure

The product sends emails on behalf of accounting firms (automated reminders, magic-link delivery, notification emails). Poor deliverability directly harms the core value proposition.

**Requirements:**
- Outbound email sent from dedicated sending domain with SPF, DKIM, and DMARC configured
- Transactional email delivery rate target: 95%+ (bounces and spam folder deliveries tracked)
- Inbound email relay for Gmail/Outlook BCC integration (unique per-client relay address assigned per practitioner account)
- Practitioner firm name and logo appear in "From" display name for client-facing emails
- Unsubscribe mechanism available for client-facing reminder emails (CAN-SPAM compliance)

### Data Retention & Client Data Handling

**Requirements:**
- Practitioner can set document retention policy per client or at account level
- When a practitioner account is closed, client data is retained for 30 days then deleted, with a data export option provided
- Clients receive no data deletion notice (practitioners are the data controllers for client documents)
- No client PII sold or used for product analytics without explicit consent

### Compliance Considerations

- Product handles financial documents but does NOT process payments, investments, or banking directly — not subject to PCI-DSS for MVP
- GDPR applicability: product may serve EU practitioners if marketed internationally; data processing agreement (DPA) template should be available on request
- SOC 2 Type II certification is a growth-phase goal (not MVP) but architecture should not foreclose it

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Magic-Link No-Login Portal (Primary Differentiator)**
The claim that "passwordless portals achieve 40%+ higher client adoption" is grounded in the known friction of account creation: users abandon onboarding flows at 60–70% rates when a password is required. At sub-$50/month, every direct competitor requires client account creation. The magic-link approach is technically well-understood (UUID-based tokens, email delivery) but has not been applied at this price tier in the accounting practice management category. This is a meaningful differentiation claim that is both technically achievable and competitively absent.

**Innovation in the Solo Tier Pricing Model**
The flat-rate per-firm model ($49/month for up to 5 users, not per-user) is itself an innovation relative to TaxDome ($800/user/year) and Karbon ($59/user/month). The pricing model is a product decision that removes a key adoption barrier for solo practices that occasionally add part-time help. Communicating this clearly is as important as the technical feature set.

### Market Context

The accounting practice management market (TaxDome, Karbon, Canopy, Financial Cents) has historically priced and designed for firms with 5–50+ staff. The solo and 1–5-person segment is served by spreadsheets, Gmail, and Google Drive — confirming that no current product has successfully captured this segment at scale. The AppSumo channel is well-suited to this market: solo operators buy LTD deals because they maximize value from affordable, lifetime-priced tools.

### Validation Approach

- **Magic-link adoption rate** validated in beta: if client portal adoption exceeds 65% without phone-based support, the passwordless hypothesis is confirmed
- **Pricing model** validated by AppSumo conversion rate and plan retention after LTD feature limits; if solo-to-team upgrade rate exceeds 15% within 6 months, flat-rate pricing drives expansion revenue
- **Fallback:** If magic-link delivery has high spam/junk folder rates, add SMS link delivery as an alternative (Phase 2 scope)

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

Each accounting firm is a single tenant. Tenant isolation is critical — practitioners must never see another firm's clients, documents, or messages.

- Account-level tenant isolation enforced at the database query layer (row-level security or equivalent)
- All queries scoped to `account_id` — no cross-account queries permitted in application logic
- Shared infrastructure (storage, email relay) with per-account namespace isolation

### Role-Based Access

**Roles within a practitioner account:**
- **Account Owner:** Full access; billing management; can add/remove team members; all client data
- **Team Member:** Access to assigned clients (default) or all clients (configurable); no billing access; can create/send document requests; unified inbox access

**Client Portal (non-authenticated):**
- Clients are not users in the system; they interact only via magic link
- Magic link scope: access limited to the specific document request or the client's portal view
- No cross-client data accessible via any magic link

### Key Technical Considerations

**Email Relay Architecture:**
- Each practitioner account receives a unique relay domain or subdomain (e.g., `firm-slug.inbox.product.com`)
- Client emails BCC'd or forwarded to this address are ingested and attributed to the correct client record via email parsing
- Email threading maintained per-client using message-ID and subject line matching

**File Storage:**
- Files stored in object storage (S3-compatible) with per-account prefix isolation
- File metadata stored in relational database linked to client, checklist item, and upload timestamp
- Maximum file size per upload: 25MB; total storage per account: 5GB (solo), 20GB (team) — expandable

**Magic-Link Token Management:**
- Tokens are cryptographically random UUID v4 (not sequential)
- Token-to-resource mapping: each token maps to a specific client portal view or document request
- Token expiry enforced server-side; client-side cannot extend token validity
- Token refresh generates a new token and invalidates the previous one

**QBO OAuth Integration:**
- Standard OAuth 2.0 flow via Intuit Developer API
- Client list imported on first connection; incremental sync available
- QBO client ↔ portal client mapping stored as editable relationship (practitioner can override)

### Implementation Considerations

- Single-page web application frontend (React or equivalent) for practitioner dashboard
- Mobile-responsive design for client portal (not a separate native app for MVP)
- Server-side rendering or static generation for client portal pages to ensure fast load on mobile (critical for client adoption)
- Background job queue for automated reminder processing (not synchronous request-path)
- Transactional email via established provider (SendGrid, Postmark, or equivalent) — not self-hosted SMTP

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product must demonstrably solve the document-chasing bottleneck for at least 10 beta users before launch. The AppSumo LTD launch is the go-to-market forcing function; the product must be ready to handle 300+ new accounts within 4 weeks of launch.

**Resource Requirements:** 1–2 full-stack developers, 1 product/design lead. 4–6 week build timeline for MVP. Beta testing with 10–15 practitioners (recruited from r/Bookkeeping or personal network) before AppSumo submission.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo bookkeeper sends document request checklist → client receives magic link → client uploads without creating account → practitioner sees real-time completion → automated reminders fire for incomplete items
- Team account owner sees cross-client pending request status → assigns client to team member → unified inbox shared across team

**Must-Have Capabilities:**
- Document request builder with checklist templates
- Magic-link client portal (no login, mobile-optimized, firm-branded)
- Automated email reminders (configurable schedule)
- Unified per-client inbox (email BCC + portal messages)
- Client & file vault (organized by client + period)
- QBO OAuth import
- Internal task board (basic)
- Solo plan ($19/month, up to 30 clients) and Team plan ($49/month, up to 5 users, unlimited clients)
- 14-day free trial, no credit card required

### Post-MVP Features (Phase 2)

- Xero OAuth integration
- E-signature for engagement letters
- SMS reminders for clients
- Bulk document request (send same checklist to all clients in one action)
- Client portal analytics (completion rates, time-to-complete)
- Outlook/Gmail direct OAuth inbox integration (not just BCC relay)

### Expansion Features (Phase 3)

- AI-assisted checklist generation based on client business type
- AI document classification on upload
- QBO and Xero App Marketplace listings
- Referral/white-label partner program
- Vertical expansion: payroll services, HR consulting, financial advisory

### Risk Mitigation Strategy

**Technical Risks:**
- Email deliverability is the highest technical risk — spam folder delivery for reminder emails directly undermines the core value proposition. Mitigation: use established transactional email provider, configure SPF/DKIM/DMARC from day one, send test batches with seed accounts before launch.
- Magic-link delivery on mobile browsers: iOS Safari and Android Chrome have different behaviors for file download/upload. Mitigation: beta test specifically on these browsers before launch; use `<input type="file" accept="image/*,application/pdf">` with tested fallback.

**Market Risks:**
- TaxDome price reduction or free tier targeting solo segment. Mitigation: establish community presence and review moat on G2/Capterra before competitor response; AppSumo LTD creates retention moat.
- Low AppSumo conversion if product not ready. Mitigation: strict beta NPS gate (>40) before AppSumo submission.

**Resource Risks:**
- If build takes longer than 6 weeks, delay AppSumo launch rather than ship with incomplete magic-link portal. The portal UX is the primary differentiator — shipping a broken or clunky client experience is worse than a delayed launch.

---

## Functional Requirements

### Client & Account Management

- FR1: Practitioner can create client profiles with name, email, phone, and notes
- FR2: Practitioner can import clients from QuickBooks Online via OAuth connection
- FR3: Practitioner can manually map QBO clients to portal client records
- FR4: Practitioner can view a dashboard overview of all clients with pending request counts and outstanding item indicators
- FR5: Team account owner can assign client accounts to specific team members
- FR6: Practitioner can archive inactive clients (archived clients do not count against plan client limits)

### Document Request Management

- FR7: Practitioner can create named document request checklists with individual line items and item descriptions
- FR8: Practitioner can save checklists as reusable templates (e.g., "Month-End Package", "Q1 Tax Documents")
- FR9: Practitioner can assign optional due dates to individual checklist items
- FR10: Practitioner can send a document request checklist to a client via a generated magic link
- FR11: Practitioner can view real-time per-item completion status for each sent request (pending / uploaded / approved)
- FR12: Practitioner can approve or flag individual uploaded documents per checklist item
- FR13: System sends automated email reminder notifications to clients for incomplete requests at practitioner-configured intervals
- FR14: Practitioner can configure the automated reminder schedule (number of reminders, interval in days)
- FR15: Practitioner can cancel an active document request checklist
- FR16: Practitioner can view the complete history of all document requests per client, including completion dates and uploaded files

### Magic-Link Client Portal

- FR17: Clients can access their portal via a unique URL with no account creation, password, or app installation required
- FR18: Clients can view all outstanding document request items with descriptions
- FR19: Clients can upload documents (PDF, JPG, PNG, XLSX, CSV, up to 25MB each) to specific checklist items
- FR20: Clients can send messages to the practitioner via the portal tied to a specific request
- FR21: Portal displays the practitioner's firm name and logo
- FR22: Magic links expire after a configurable period (default 90 days) and practitioners can refresh expired links
- FR23: Portal works on iOS Safari and Android Chrome without requiring app installation

### Unified Per-Client Inbox

- FR24: Practitioner can configure a Gmail or Outlook BCC/forwarding integration that routes client emails to the unified inbox
- FR25: Each practitioner account receives a unique relay email address for each client for BCC routing
- FR26: Practitioner can view a unified per-client feed combining email messages and portal messages in chronological order
- FR27: Inbox shows unread and pending indicators per client in the client list navigation
- FR28: Practitioner can reply to client messages from the unified inbox (reply routes via portal message or email depending on message type)
- FR29: Practitioner can tag messages with status labels (waiting on client, in progress, resolved)
- FR30: Practitioner receives in-app and email notifications when clients upload documents or send portal messages

### File Vault

- FR31: All uploaded client documents are accessible in a file vault organized by client and tax year/period
- FR32: Practitioner can generate a shareable read-only vault link for external parties (e.g., external CPA review)
- FR33: Practitioner can preview PDF and image files directly in the browser without downloading
- FR34: Practitioner can download individual files or bulk-download all files for a client period as a ZIP archive
- FR35: Practitioner can delete uploaded files from the vault (with confirmation prompt)

### Team & Multi-User

- FR36: Team plan account owner can invite up to 4 additional team members by email
- FR37: Team account owner can set a team member's access to all clients or assigned clients only
- FR38: Team plan practitioner can view pending document requests and client activity across all team members in a unified dashboard view
- FR39: Team account owner can remove team members from the account
- FR40: Team member tasks can be assigned to specific team members with the task board

### Internal Task Board

- FR41: Practitioner can create per-client tasks with name, status (To Do / In Progress / Done), and optional due date
- FR42: Practitioner can view all tasks for a client in a simple ordered list
- FR43: Team plan practitioners can assign tasks to specific team members
- FR44: Practitioner can add free-text notes to a client record for internal reference

### Account Settings & Branding

- FR45: Practitioner can upload firm logo and set firm name used in client-facing portal and reminder emails
- FR46: Practitioner can configure reminder email schedule at the account level (default 3 days and 7 days after request sent)
- FR47: Practitioner can connect and disconnect the QBO OAuth integration from account settings
- FR48: Practitioner can manage billing subscription (upgrade, downgrade, cancel) from account settings
- FR49: Account owner can view and export a log of all document requests sent and completed (audit trail)

---

## Non-Functional Requirements

### Performance

- Practitioner dashboard (client list + pending requests view) loads within 3 seconds at P95 on a standard broadband connection
- Client portal magic-link page loads within 3 seconds at P95 on a 4G mobile connection (critical: this is the client's first impression)
- File uploads of up to 10MB complete within 10 seconds on a standard broadband connection; progress indicator shown for uploads exceeding 3 seconds
- Automated reminder job processing: all scheduled reminders for a given day sent within a 1-hour processing window (e.g., all 9 AM reminders sent by 10 AM)
- In-app notifications for document uploads delivered to practitioner within 60 seconds of client upload

### Security

- All data (documents, messages, user records) encrypted at rest using AES-256
- All client-server communication encrypted via TLS 1.2+
- Magic-link tokens are cryptographically random (minimum 128-bit entropy) and expire server-side; expired tokens return no content
- Per-tenant data isolation enforced at the database query layer — no cross-account data access possible
- Practitioner accounts require email verification; optional TOTP-based 2FA available
- File access URLs are not publicly guessable (signed URLs with short expiry for download/preview)
- File uploads scanned for known malware signatures before storage (anti-malware scan on ingest)
- Password storage using bcrypt with minimum cost factor 12 (if password auth used alongside magic-link or OAuth options)

### Scalability

- Application architecture supports horizontal scaling of web tier to handle concurrent month-end load spikes (expected: high traffic on days 28–10 of following month)
- File storage uses object storage (S3-compatible) with no hard capacity ceiling; practitioner plan limits enforced at application layer
- Background job queue designed to scale worker processes independently from web tier
- Database schema designed for 100,000+ clients across all practitioner accounts without index degradation

### Reliability

- Target availability: 99.5% uptime (excludes scheduled maintenance windows)
- Zero tolerance for data loss: document uploads must be durably stored before upload confirmation is shown to client
- Database backups: automated daily backups with 30-day retention; point-in-time recovery capability
- Scheduled maintenance windows communicated 48 hours in advance; ideally scheduled outside 8 PM–8 AM local time

### Integration

- QBO OAuth integration uses Intuit's production OAuth 2.0 flow; token refresh handled automatically
- Email relay (BCC/forwarding ingestion) must parse and correctly attribute emails across Gmail, Outlook, and Apple Mail forwarding formats
- Transactional email delivery rate: 95%+ delivery to primary inbox (not spam); SPF, DKIM, and DMARC configured
- All integrations degrade gracefully: if QBO is unavailable, existing client data remains accessible; if email relay is down, portal messaging remains functional

### Accessibility

- Client portal must be usable on assistive technologies (screen readers) — WCAG 2.1 AA compliance for the client-facing portal
- File upload interface must work without mouse (keyboard-accessible drag-and-drop fallback)
- Color contrast ratios meet WCAG 2.1 AA standards throughout (critical for the practitioner's daily-use dashboard)
- Portal accessible in iOS VoiceOver and Android TalkBack (relevant for older clients with accessibility needs)

---

*PRD created autonomously from product brief and shortlisted idea data.*
*Date: 2026-05-18 | Author: Root | Workflow: create-prd | Steps completed: 1–12*
