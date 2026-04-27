---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/client-document-collection-portal.md
  - _bmad-output/planning-artifacts/market-research-client-document-collection-portal.md
  - _bmad-output/planning-artifacts/brief-client-document-collection-portal.md
workflowType: prd
research_type: prd
research_topic: client-document-collection-portal
user_name: Root
date: 2026-04-27
classification:
  projectType: saas_b2b
  domain: professional_services_productivity
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Client Document Collection Portal

**Author:** Root
**Date:** 2026-04-27

---

## Executive Summary

Professional services practitioners — tax preparers, accountants, mortgage brokers, insurance agents, and attorneys — collectively waste 20–40% of their working week chasing clients for documents via fragmented email chains, shared Dropbox links, and repeated phone calls. For a solo accountant billing at $100/hour, 5 hours/week of chase-related overhead equals $26,000/year in unbilled capacity. The problem is structural: there is no single, affordable place that shows "what I need from this client, what they've sent, and what's still missing."

The **Client Document Collection Portal** is a purpose-built, standalone SaaS tool that replaces the email chase with a structured, branded, automated workflow. Practitioners create reusable document checklists per engagement type, send a single branded upload link per client, and receive automatic reminders on their behalf until the client's submission is complete — all visible on a real-time completion dashboard across all active clients.

Market validation is strong: Content Snare has reached $2.9M ARR solving this problem for agencies; TaxDome bundles document collection inside a $800–$1,000/user/year practice management suite. Neither serves solo and small-team practitioners in the accounting/tax vertical with purpose-built, affordable tooling. The white space: an affordable LTD ($59–$79) or monthly SaaS ($29–$49/month) product with pre-loaded vertical-native templates for tax, mortgage, legal, and insurance workflows, launched on AppSumo in September ahead of tax season to seed the accounting community.

### What Makes This Special

**Vertical-native, affordable, and no-login for clients.** Three things no competitor combines at this price:

1. **Pre-loaded industry templates** — real accounting/tax/mortgage checklists ready in 15 minutes, not blank forms requiring hours to configure.
2. **Document expiration intelligence** — automated re-request when pay stubs or bank statements age past their validity window. No competitor at this price does this.
3. **No-login client experience** — clients click a link and upload from their phone. No account creation. No friction. The #1 barrier practitioners face is "will my non-technical clients actually use this?" The answer is designed to be yes.
4. **Tax-season-aware UX** — batch send, deadline-relative completion sorting, and urgency prioritization built around the Jan–April crunch reality, not a generic client portal.

The core insight: the market skips from "free but manual" (email + Google Forms) to "expensive but bundled" ($300–$1,000/user/year). This product occupies the gap with a single-purpose tool that saves its price in the first hour of recovered practitioner time.

## Project Classification

- **Project Type:** SaaS B2B — standalone web application with practitioner-side dashboard and client-facing upload portal
- **Domain:** Professional services productivity — accounting/tax, mortgage, legal, insurance
- **Complexity:** Medium — sensitive document handling (SSNs, W-2s, financial records) requires secure storage and transmission; no full HIPAA/PCI compliance required at MVP but security hygiene is non-negotiable
- **Project Context:** Greenfield — net-new product with no existing codebase or user base

---

## Success Criteria

### User Success

**Primary metric — Time reclaimed from document follow-up:**
Practitioners report measurable reduction in time spent chasing clients. Target: 70%+ of active users report saving 3+ hours/week during peak season (benchmarked against Content Snare's published 71% time-reduction claim).

**Activation — First client link sent within 7 days of signup:**
The product has no value until the first link is sent. Target: >70% of new signups send their first client portal link within 7 days. This is the critical activation gate.

**Client engagement — Upload within 72 hours of link send:**
Measures whether the no-login portal overcomes client inertia. Target: >60% of portal links receive at least one document upload within 72 hours (vs. ~30% typical email-only response rate).

**Completion rate — 100% submission within 30 days:**
Measures whether the reminder system works end-to-end. Target: >80% of document requests reach 100% completion within 30 days of initial send.

**Retention — Month 3 active usage:**
For LTD users, measured via feature activity (reminder sends, new client requests). Target: 65%+ monthly active in month 3 post-signup.

**NPS:** Target >50 at month-3 survey. "Time saved" must be the primary theme in qualitative feedback.

### Business Success

**AppSumo LTD launch (September 2026):**
- 1,000–3,000 units sold during campaign
- $65,000–$195,000 gross revenue; $19,500–$58,500 net after AppSumo share
- Purpose: seed user base, generate reviews, validate vertical positioning

**Review moat (months 4–6):**
- 25+ verified reviews on G2 and Capterra from LTD users averaging 4.5+/5
- "Time saved" as primary theme in review text

**MRR trajectory (post-AppSumo):**
- $5,000 MRR within 6 months of AppSumo launch
- $15,000 MRR within 12 months

**Community penetration:**
- Organic mentions in 3+ r/taxpros threads as a recommended tool
- Featured in 1+ accounting newsletter (FutureFirm, Karbon) within 6 months

**North Star Metric:** Total documents collected per month across all active practitioners. Grows with both user acquisition and per-practitioner usage depth.

### Technical Success

- Zero data breaches or unauthorized document access incidents
- <2 second response time for all practitioner dashboard interactions
- 99.5%+ uptime during tax season (January–April) when practitioner load peaks
- All file uploads processed and confirmed within 60 seconds of submission
- Automated reminder delivery rate >98% (emails actually delivered, not bounced or spam-filtered)
- Zero CAN-SPAM violations — unsubscribe mechanism functional on all client emails

### Measurable Outcomes

| Outcome | Target | Measurement |
|---------|--------|-------------|
| Activation rate | >70% send first link within 7 days | In-app event tracking |
| Client upload rate | >60% within 72 hours of link | Portal access logs |
| Completion rate | >80% within 30 days | Dashboard analytics |
| Time saved (self-reported) | 3+ hours/week during peak | Month-3 user survey |
| AppSumo units | 1,000–3,000 | AppSumo dashboard |
| Reviews | 25+ G2/Capterra, avg 4.5+ | Review platform |
| Month-3 retention | >65% active | Login/usage tracking |
| MRR at month 6 | $5,000 | Stripe |
| NPS | >50 | Survey |

## Product Scope

### MVP — Minimum Viable Product

The smallest product that creates a complete, satisfying experience for a solo accountant sending their first client document request.

**Included in MVP:**
- Checklist Template Builder (flat list, reusable templates, item-level expiration windows)
- 5 pre-loaded industry templates (tax 1040, mortgage pre-approval, business insurance renewal, estate planning, MSP onboarding)
- Client Portal Link Generator (unique persistent URL per client, no client login required)
- Mobile-friendly drag-and-drop upload experience for clients
- Automated email reminders (configurable schedule, auto-stop on completion, CAN-SPAM compliant)
- Document expiration tracking with automatic re-request
- Practitioner completion dashboard (list view, completion %, days open, per-item status, bulk actions)
- Account branding (firm name, logo, accent color)
- Secure document storage with access-controlled retrieval
- Single-user account (Tier 1 LTD); unlimited users (Tier 2 LTD / Pro plan)

**Explicitly excluded from MVP:**
E-signature integration, QuickBooks/Drake/Clio integrations, AI document matching, client portal comments/messaging, mobile native app, multi-language portals, payment collection, custom domain for client portal, Zapier/API integration, persistent client portal accounts, advanced analytics beyond CSV export.

### Growth Features (Post-MVP, v1.1 — months 4–6 post-launch)

- Custom domain for client portal (docs.yourbrand.com)
- QuickBooks Online integration (client sync, export)
- Clio integration (legal vertical)
- Bulk client import via CSV (for season-start batch send)
- WhatsApp reminder option
- Client portal passphrase / enhanced security
- Mobile-responsive practitioner dashboard improvements

### Vision (v2.0+ — months 7–12+)

- E-signature integration (HelloSign/DocuSign) in the same portal where clients upload
- AI document validation — system identifies uploaded document type, matches to checklist item, flags likely mismatches
- Team workspaces with per-staff assignment and manager-level dashboard
- Persistent client portal accounts for returning clients
- Zapier integration + REST API
- White-label offering for accounting software vendors and franchise networks
- Vertical expansion: medical practices (HIPAA), financial advisors, real estate agents

---

## User Journeys

### Journey 1: Sarah — Solo Tax Preparer, First Tax Season (Primary User — Success Path)

**Opening scene:** It's January 8th. Sarah has 80 clients and tax season officially started. Her inbox already has 12 emails from clients asking "what do you need from me this year?" She's staring at last year's Excel tracker — the one where she accidentally skipped Client #47 in March — and feeling the familiar dread of 10 weeks of email triage ahead.

She finds the portal through an r/taxpros post titled "I stopped chasing clients and here's what I use." She signs up, clicks on the pre-loaded "Federal Tax Return (1040)" template, makes two small adjustments (adds a line for her client's healthcare marketplace form, removes the one for K-1s since most of her clients don't have partnerships), and customizes her firm's logo and teal brand color.

**Rising action:** In 15 minutes, Sarah's workspace is ready. She pastes her client list from Excel — names and emails — into the bulk import. She hits "Send to all." 80 clients receive a branded email from "Sarah's Tax Services" with a single link: "Click here to submit your documents for your 2025 tax return."

The system takes over. Clients who haven't uploaded anything by day 3 get a gentle reminder. By day 7, non-starters get a second nudge. Sarah's dashboard on January 15th shows: 34 clients at 100%, 28 in progress, 18 not started. She clicks "Download list" and exports the not-started names for her personal follow-up call on January 16th — the ones she knows need a human touch.

**Climax:** February 1st. Sarah opens her dashboard. 71 clients are at 100%. She processes them in order of completion, billing 2.5x her usual weekly output because the document-waiting bottleneck is gone. The 9 remaining clients have been nudged 4 times automatically. She sends one final manual email to 3 of them who she knows are on vacation.

**Resolution:** By April 12th, Sarah has filed 78 returns — 3 more than last year with no increase in hours worked. She writes a G2 review: "I saved at least 40 hours this tax season just on document follow-up. I don't know how I survived before this."

**Journey requirements revealed:** bulk send, pre-loaded templates, auto-reminders, dashboard with completion status, CSV export, personal follow-up escalation flow.

---

### Journey 2: Marcus — Small Firm Owner, Team Coordination (Primary User — Multi-User Edge Case)

**Opening scene:** Marcus manages a 3-person accounting firm with 200 clients across two junior staff. The problem isn't that he doesn't have a system — it's that each junior staff member has a *different* system. One uses a color-coded Gmail label. One uses sticky notes. When a staff member is sick, Marcus has no idea which clients have been followed up with and which haven't.

**Rising action:** Marcus sets up the Pro plan, creates three user accounts, and assigns clients to each staff member. He sets up the standard tax template as a firm-wide default. Staff members can see only their own client queue. Marcus can see all 200 from his owner dashboard.

**Climax:** Week 3 of tax season. One junior staff member is out sick for three days. Marcus opens the dashboard, filters to that staff member's clients, sees that 14 are at 30% or below, and triggers a batch reminder to all 14 from within the tool. The sick staff member's clients are covered without a single missed follow-up email.

**Resolution:** Marcus bills the highest February in firm history. The tool's ROI becomes part of his pitch for hiring a fourth staff member: "We freed up 10 hours/week in follow-up time across the team."

**Journey requirements revealed:** multi-user accounts, per-user client queue, manager-level dashboard, cross-user visibility, batch actions.

---

### Journey 3: Priya — Independent Mortgage Broker, Expiration Sensitivity (Secondary Primary User)

**Opening scene:** Priya closes 8–12 loans per month. Every loan requires a standard FNMA document package. Her nightmare: a loan that was 90% complete stalled because the borrower's bank statements expired after 60 days while waiting for an appraisal. Priya had to re-request 3 documents, the borrower was annoyed, and the closing slipped two weeks.

**Rising action:** Priya sets up a "Mortgage Pre-Approval" template with expiration windows defined per item: bank statements (60 days), pay stubs (30 days), W-2s (365 days). She opens a request for a new borrower, sends the link. The borrower uploads everything within 4 days. The file is 100% complete.

**Climax:** 55 days later, the system detects that the bank statements are 5 days from expiration. It automatically sends the borrower an email: "Your bank statements submitted on February 10th will expire on April 11th. Please upload updated statements to keep your file current." The borrower re-submits the same day. Priya doesn't hear about any of this — she just sees the dashboard update.

**Resolution:** Priya's closing rate improves. Her files are never stale. She recommends the tool to two other brokers in her LinkedIn group.

**Journey requirements revealed:** item-level expiration windows, automatic expiration detection, automated re-request emails, expiration status on dashboard.

---

### Journey 4: Client (Document Submitter) — Non-Technical End User (Upload-Side Journey)

**Opening scene:** Robert, age 67, receives a branded email from "Sarah's Tax Services" with the subject "2025 Tax Return — Documents Needed." He's been Sarah's client for 12 years. He normally replies to her emails with attached scans that come out sideways. He's not technically savvy.

**Rising action:** Robert clicks the link. A clean, simple page appears with his name, Sarah's firm logo, and a list of 8 document types. He sees a progress bar: "0 of 8 items received." He uses his iPhone camera to photograph his W-2. He drags the photo into the first upload slot. A green checkmark appears. "1 of 8 items received."

**Climax:** Over the next two days, Robert uploads 6 more items using his phone camera. He receives a confirmation email for each upload. On day 3, he realizes he can't find his 1099-INT. He leaves that slot empty and closes the browser. The system sends him a reminder on day 7: "You still need 1 more item: 1099-INT from your bank. You can find this in your online banking portal."

**Resolution:** Robert calls his bank, gets the 1099-INT PDF emailed to him, and uploads it via the portal. He calls Sarah to say "that website thing was really easy." Sarah has had three other clients say the same thing.

**Journey requirements revealed:** no-login client portal, mobile camera upload, drag-and-drop, per-item status feedback, upload confirmation email to client, reminder emails with specific missing item detail.

---

### Journey 5: Admin/Operations — Account Setup and Branding (Setup Journey)

**Opening scene:** A new user signs up after seeing the AppSumo deal. They've never heard of the product before. They have 15 minutes before their next client call.

**Rising action:** They land on an onboarding checklist: (1) Upload logo, (2) Set firm name and accent color, (3) Preview your branded portal, (4) Review your first template, (5) Send your first request. Each step takes 2–3 minutes. At step 4, they open the pre-loaded "1040 Tax Return" template and find it already matches 80% of what they'd typically ask for.

**Climax:** At step 5, they type in a test client's name and email — their own, to preview the experience. They receive a branded email to their inbox, click the portal link, see the clean upload interface with their logo, and feel genuine excitement. "This is exactly what I was imagining."

**Resolution:** They send their first real client link 12 minutes after signing up. The activation gate is cleared.

**Journey requirements revealed:** guided onboarding checklist, logo/branding configuration, portal preview mode, template review and editing, first-send success confirmation.

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---------------------|---------|
| Bulk send to multiple clients | Journey 1 |
| Pre-loaded vertical templates | Journeys 1, 5 |
| Auto-reminders with item specificity | Journeys 1, 4 |
| Completion dashboard with filtering | Journeys 1, 2 |
| Multi-user accounts with manager view | Journey 2 |
| Item-level expiration + automatic re-request | Journey 3 |
| No-login mobile-friendly upload portal | Journey 4 |
| Upload confirmation emails to clients | Journey 4 |
| Guided onboarding with preview | Journey 5 |
| CSV export of completion status | Journey 1 |

---

## Domain-Specific Requirements

This product handles sensitive professional documents: SSNs, W-2s, bank statements, tax returns, driver's licenses, mortgage applications. The domain is professional services document exchange — not regulated like HIPAA but subject to real privacy and security obligations.

### Compliance & Regulatory

- **CAN-SPAM compliance:** All client-facing reminder and confirmation emails must include a functional unsubscribe mechanism. Unsubscribes must be honored within 10 business days and must suppress future automated emails from that sender-client pair.
- **Data handling transparency:** Privacy policy must clearly state what document data is stored, for how long, and who can access it. Practitioners must agree to terms of service establishing their responsibility for obtaining client consent for data collection.
- **State privacy law exposure:** CCPA (California) applies if practitioners serve California clients. Documents containing personal identifiers fall under personal information definitions. Storage and access controls must be documented.
- **Data retention:** Practitioners must be able to delete client document requests and associated files on demand. No indefinite retention of sensitive documents without explicit practitioner configuration.

### Technical Constraints

- **Encryption in transit:** All file uploads and downloads must occur over TLS 1.2+ (HTTPS). No plaintext transmission of documents.
- **Encryption at rest:** All stored documents must be encrypted at rest using AES-256 or equivalent.
- **Access control:** Client upload links grant write-only access to a specific request. Clients cannot browse other clients' documents. Practitioners can only access their own account's documents. No cross-account data leakage.
- **Link-based security:** Portal URLs must use cryptographically random tokens (min 32 characters, URL-safe) rather than sequential IDs. Optional passphrase layer available as a Tier 2 / Pro feature.
- **File type validation:** Accept PDF, JPEG, PNG, HEIC, TIFF, and common document formats. Validate MIME type server-side, not just extension. Reject executables, scripts, and unexpected file types.
- **File size limits:** Max 25MB per file, 200MB per client request. Configurable by plan tier.
- **Audit log:** All document access events (upload, download, view) logged with timestamp and accessor identity for practitioner-side review.

### Integration Requirements

No integrations required at MVP. Practitioners will manually copy client contact information from their existing tools. Post-MVP integrations (QuickBooks, Clio) should be designed with OAuth-based authorization patterns and read-only scopes at minimum.

### Risk Mitigations

- **Document re-submission after expiration:** When a document expires, the client receives a re-request email. The original document is retained in the practitioner's file history (marked "expired") — never deleted on expiration — so the practitioner can review the original submission if needed.
- **Link forwarding risk:** Practitioners should be made aware in onboarding that portal links are not password-protected by default and should not be shared via public channels. Passphrase option (Tier 2) mitigates this for sensitive verticals.
- **Email deliverability:** Reminder emails must be sent from a verified sending domain (e.g., via Postmark or SendGrid with DKIM/SPF configured). Practitioners should be advised to whitelist the sending domain to avoid spam filtering.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

This product is not a technological breakthrough — it is a **positioning and timing innovation** in an underserved vertical:

1. **Document expiration intelligence at this price point:** No standalone, affordable document collection tool tracks item-level expiration and auto-re-requests. This is a feature that exists only in expensive enterprise platforms (SmartVault, SmartRequestAI). Bringing it to the $59 LTD tier is novel for the target market.

2. **Vertical-native templates as a distribution moat:** Pre-loading the product with real practitioner checklists (specific IRS form names, mortgage FNMA package items, insurance loss run documentation) means the product is immediately useful without configuration time. Competitors ship blank canvases. First-mover in accounting/tax vertical with AppSumo creates a review moat before competitors can respond.

3. **Tax-season-aware workflow design:** Sorting by filing deadline urgency, batch-sending at season start, and bulk-status review are UX patterns that no category competitor has implemented because they built for agencies, not for practitioners who work in annual tax cycles.

### Market Context & Competitive Landscape

Content Snare ($2.9M ARR) proves the category. TaxDome ($800–$1,000/user/year) proves accountants will pay for structured client workflows. The gap is the $59–$499/year tier for solo and 1–5 person practices. No category player has run an AppSumo deal in this vertical. The AppSumo accounting/tax buyer exists — Kartra, TaxDome, and FutureFirm all have AppSumo-adjacent success stories — but the pure document collection category is unoccupied there.

### Validation Approach

- Beta: 10–20 accountants from r/taxpros personal network before AppSumo launch. Target: each beta user sends at least 5 client requests and provides qualitative feedback on template accuracy and client adoption.
- AppSumo signal: 200+ units sold in first 7 days indicates the vertical positioning is resonating.
- G2/Capterra reviews: 10 reviews in first 60 days post-launch; "time saved" as primary theme confirms the value prop is landing.

### Risk Mitigation

- **Easy to clone:** The templates and expiration logic can be copied. The moat is AppSumo distribution + early reviews. Build fast, launch fast. First-mover advantage + review volume makes price competition unattractive for late entrants.
- **Content Snare accounting pivot:** If Content Snare responds by adding accounting templates, the LTD price differential ($59 one-time vs. $29+/month) and community seeding still provide 6–12 months of defensible differentiation.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

This is a B2B SaaS product serving small professional services firms (1–20 staff). The buying unit is a solo practitioner or small firm owner. The primary technical constraints are multi-user access control (within a firm, not across firms), file storage at scale, and email deliverability reliability.

### Technical Architecture Considerations

**Multi-tenancy:** Strict per-account isolation. Each practitioner account is a tenant. Documents, clients, and templates are scoped to a single account and cannot be shared across accounts. No multi-tenant data leakage is acceptable.

**Authentication:** Practitioner-side login via email/password with optional Google OAuth. Client-side access is link-based (no account creation). Session management with secure httpOnly cookies. Password reset via time-limited email token.

**File storage:** Object storage (S3 or equivalent) with server-side encryption. Files stored under account-scoped paths with IAM policies preventing cross-account access. Signed URLs for time-limited client-side upload and practitioner-side download (never exposing permanent bucket URLs).

**Email delivery:** Transactional email via Postmark or SendGrid. Separate sending domains or subdomains for practitioner notifications vs. client-facing reminder emails to protect domain reputation.

**Subscription management:** Stripe for payment processing and subscription state. LTD units managed as lifetime subscription tiers in Stripe (or equivalent flag in user record). Plan features enforced server-side, not client-side.

### Multi-Tenancy Model

| Scope Level | Isolation Method |
|-------------|----------------|
| Account | Database row-level, all queries scoped by account_id |
| Documents | S3 path prefix per account_id; IAM denies cross-account access |
| Users (within account) | Role-based (Owner, Staff); Staff sees own clients only by default |
| Client portal | Cryptographically random token per request; no account ID in URL |

### Permission Matrix (Role-Based Access)

| Action | Owner | Staff | Client (portal) |
|--------|-------|-------|----------------|
| Create/edit templates | ✅ | ✅ | ❌ |
| View all account clients | ✅ | ❌ (own only) | ❌ |
| Send client requests | ✅ | ✅ | ❌ |
| Download documents | ✅ | ✅ (own clients) | ❌ |
| Manage users | ✅ | ❌ | ❌ |
| Configure branding | ✅ | ❌ | ❌ |
| Upload documents | ❌ | ❌ | ✅ (own request only) |
| View request status | ✅ | ✅ | ✅ (own only) |

### Implementation Considerations

**Reminder scheduling:** Cron-based job (or equivalent serverless scheduler) that runs hourly, checks all active requests for scheduled reminder eligibility, and dispatches emails. Idempotent — running the job twice in the same hour should not send duplicate reminders. Reminder state tracked per request per reminder interval.

**Expiration detection:** Daily cron job that checks all submitted items against their expiration window. Items expiring within 7 days trigger a "expiring soon" notification to practitioner. Items past expiration date trigger a re-request email to the client and revert item status to "needed."

**Portal link generation:** UUID v4 or similar cryptographically random token, stored in database associated with the request. Links never expire server-side but can be disabled by the practitioner. Token is the only authentication mechanism for client portal access.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product must demonstrate complete value for a single core use case — a solo accountant sending their first batch of client document requests in January — before any growth features are added.

**Resource Requirements:** 1–2 developers, 2–3 weeks build time. Stack: Next.js (React) frontend, Supabase (PostgreSQL + Auth + Storage) or equivalent managed backend, S3-compatible object storage, Postmark/SendGrid for email.

**MVP Philosophy:** Every feature cut from MVP is a bet that the core value proposition (automated reminders + completion dashboard + no-login upload) is sufficient for initial adoption. The bet is validated when activation >70% and client upload rate >60%. If those gates are not met, investigate onboarding and portal UX before adding features.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo practitioner onboarding and first client request send (Journey 5 → Journey 1)
- Client document upload via no-login portal (Journey 4)
- Practitioner dashboard review of completion status (Journey 1)
- Document expiration detection and re-request (Journey 3)

**Must-Have Capabilities:**
- Checklist template CRUD (create, read, update, delete) with item-level expiration windows
- 5 pre-loaded industry templates at first login
- Client portal link generation (unique per request, cryptographically random token)
- File upload via portal (drag-and-drop + mobile camera; PDF, JPEG, PNG, HEIC support)
- Automated email reminders on configurable schedule (3/7/14 day defaults; auto-stop on completion)
- Document expiration detection + automated re-request email to client
- Practitioner dashboard: list view, per-client completion %, days open, item-by-item status
- Bulk reminder trigger (send reminder to all incomplete requests with one click)
- CSV export of completion status
- Account branding: firm name, logo upload, accent color
- Multi-user support: Owner + Staff roles, staff scoped to own clients
- Secure file storage (encrypted at rest and in transit)
- CAN-SPAM compliant email footers with unsubscribe

### Post-MVP Features

**Phase 2 (v1.1 — Months 4–6 post-launch):**
- Custom domain for client portal
- QuickBooks Online integration (read client contacts, export data)
- Clio integration (legal vertical)
- Bulk CSV client import for season-start batch send
- WhatsApp reminder option
- Portal passphrase / enhanced access control
- Client email reminders via SMS option

**Phase 3 (v2.0 — Months 7–12+):**
- E-signature in-portal (HelloSign/DocuSign integration)
- AI document validation (type identification, checklist item matching)
- Persistent client portal accounts (returning client login)
- Zapier integration and REST API
- White-label offering for vendor partnerships
- Advanced analytics (benchmark comparisons, seasonal reports)

### Risk Mitigation Strategy

**Technical Risks:** Email deliverability is the highest technical risk at MVP. A poorly delivered reminder email means zero value. Mitigation: use battle-tested transactional email provider (Postmark/SendGrid), configure DKIM/SPF from day one, monitor bounce and spam rates from first beta user.

**Market Risks:** Seasonal revenue concentration (Q1 tax season) means low engagement in summer. Mitigation: mortgage and insurance templates provide year-round use cases; launch in September to capture accountants preparing for season.

**Resource Risks:** 2–3 week build estimate assumes experienced developer with Next.js and Supabase/S3. Mitigation: scope is deliberately lean — no integrations, no real-time features, no AI — to stay within estimate even if developer velocity is slower than planned.

---

## Functional Requirements

### Checklist & Template Management

- FR1: Practitioners can create named document checklist templates with a description and list of document request items.
- FR2: Practitioners can add items to a template with a name, optional description, optional example text, and optional expiration window (in days).
- FR3: Practitioners can reorder, edit, and delete items within a template.
- FR4: Practitioners can duplicate an existing template to create a variation.
- FR5: Practitioners can delete templates they no longer need.
- FR6: Practitioners can see a library of pre-loaded industry templates (1040 Tax Return, Mortgage Pre-Approval, Business Insurance Renewal, Estate Planning, MSP Onboarding) at first login.
- FR7: Practitioners can customize pre-loaded templates without modifying the original.

### Client Request Management

- FR8: Practitioners can create a document request by assigning a checklist template to a named client with an email address.
- FR9: Practitioners can view all active client requests on a dashboard sorted by completion status, days open, and due date.
- FR10: Practitioners can filter the dashboard by completion status (complete / in progress / not started), template type, and assigned staff member.
- FR11: Practitioners can view item-by-item completion status for any individual client request.
- FR12: Practitioners can manually trigger a reminder email to any client from the dashboard.
- FR13: Practitioners can bulk-trigger reminder emails to all incomplete requests simultaneously.
- FR14: Practitioners can pause or resume automated reminders for a specific client request.
- FR15: Practitioners can mark a submitted document item as "reviewed" or "rejected with reason" from the dashboard.
- FR16: Practitioners can export the completion status of all active requests as a CSV file.
- FR17: Practitioners can search the client request list by client name.
- FR18: Practitioners can archive or close completed client requests.

### Client Upload Portal

- FR19: Clients can access a document upload portal via a unique link with no account creation or login required.
- FR20: Clients can see a branded portal displaying the practitioner's firm name and logo.
- FR21: Clients can see a checklist of required document items with names, descriptions, and any example files provided.
- FR22: Clients can see the current status of each item (not submitted / submitted / expired / rejected).
- FR23: Clients can upload documents via drag-and-drop on desktop or via mobile camera capture on phones.
- FR24: Clients can re-upload a corrected or updated document to replace a previously submitted item.
- FR25: Clients receive an email confirmation for each successful document upload.
- FR26: Clients can see a visual progress indicator showing how many items have been received vs. total required.

### Automated Reminders

- FR27: The system automatically sends reminder emails to clients on a configurable schedule (default: 3, 7, and 14 days after initial send) when their request is incomplete.
- FR28: The system automatically stops sending reminders when a client's request reaches 100% completion.
- FR29: Practitioners can configure the reminder schedule per request (frequency and number of reminders).
- FR30: All client-facing automated emails include an unsubscribe link that, when clicked, suppresses future automated emails for that client-request pair.

### Document Expiration Tracking

- FR31: The system detects when a submitted document item has passed its defined expiration window.
- FR32: The system automatically sends a re-request email to the client when a document expires, prompting re-submission.
- FR33: Expired items revert to "needed" status on the client portal and are flagged as expired on the practitioner dashboard.
- FR34: The practitioner dashboard highlights requests containing expired items with a distinct visual indicator.
- FR35: Practitioners receive a notification when a document in their account is approaching expiration (configurable threshold, default: 7 days before expiration).
- FR36: Previously submitted (now expired) documents remain accessible in the practitioner's file history, marked as "expired."

### Account & Branding

- FR37: Practitioners can configure firm name, logo, and accent color that appear on all branded client portals and reminder emails.
- FR38: Practitioners can preview what the branded client portal looks like before sending their first request.
- FR39: Practitioners can configure the sender name and reply-to email address for client-facing emails.
- FR40: Account owners can invite staff members by email and assign them the Staff role.
- FR41: Staff members can see and manage client requests assigned to them or created by them, but not other staff members' clients.
- FR42: Account owners can see all client requests across all staff members on the dashboard.
- FR43: Practitioners can download documents uploaded by clients from the dashboard.

### Security & Access Control

- FR44: All document upload and download operations occur over encrypted connections (HTTPS).
- FR45: Client portal access is gated by a cryptographically random URL token — no sequential IDs or predictable patterns.
- FR46: Account owners can revoke a client portal link, immediately preventing further uploads to that request.
- FR47: Practitioners can permanently delete a client document request and all associated files.
- FR48: The system logs all document access events (upload, download) with timestamp for practitioner review.

---

## Non-Functional Requirements

### Performance

- Dashboard list view (up to 200 client requests) renders within 2 seconds on a standard broadband connection.
- File upload confirmation returned to client within 60 seconds of upload completion (including server-side processing and storage).
- Reminder email dispatch lag: emails scheduled at a given time are sent within 15 minutes of the scheduled time.
- Search results on the dashboard return within 1 second for account sizes up to 500 active clients.

### Security

- All data in transit encrypted via TLS 1.2+ (HTTPS enforced; no HTTP fallback).
- All documents stored encrypted at rest using AES-256 or equivalent.
- Client portal tokens are minimum 32-character URL-safe random strings; no sequential or predictable patterns.
- File MIME type validated server-side on upload; executables and scripts rejected regardless of extension.
- Password hashing using bcrypt (min cost factor 12) or Argon2id for practitioner accounts.
- Session tokens rotated on each login; invalidated on explicit logout and on password change.
- Cross-account data isolation enforced at the database query level (all queries scoped by account_id); verified by automated tests.

### Scalability

- System designed to support 10,000 practitioner accounts and 500,000 active client requests without architectural changes.
- File storage architecture (S3-compatible object storage) is effectively unlimited at the design level; only per-account quotas are enforced by plan tier.
- Reminder and expiration cron jobs designed to process up to 100,000 pending checks per run without timeout; batch processing with continuation tokens if needed.
- Peak load scenario: AppSumo launch day — assume 500 concurrent new signups and 2,000 client portal visits within a 4-hour window. System must remain responsive under this load.

### Reliability

- Target 99.5% uptime during January–April (tax season); 99% uptime year-round.
- Reminder email delivery success rate >98% (measured as emails accepted by receiving server, not opened).
- File upload durability: uploaded files must be stored with 99.999999999% (11 nines) durability — achieved via S3 or equivalent.
- Reminder job failure handling: if a reminder batch job fails mid-run, it must be re-runnable without sending duplicate emails to clients who received reminders in the partial run.

### Accessibility

- Client upload portal meets WCAG 2.1 AA compliance for core upload flow (color contrast, keyboard navigation, screen reader labels on form inputs and upload areas).
- Practitioner dashboard meets WCAG 2.1 AA for navigation and primary actions.
- Client-facing reminder emails include plain-text alternatives alongside HTML.
- Mobile-responsive design for client portal across iOS Safari and Android Chrome (primary mobile browser targets).

### Integration (MVP Constraints)

- No external integrations at MVP.
- Email sending abstracted behind a service interface that can be swapped from Postmark to SendGrid without application changes (design for provider portability).
- File storage abstracted behind a service interface that can be swapped from S3 to another provider without application changes.
- Authentication designed to support future OAuth provider addition (Google OAuth at minimum) without requiring user re-registration.

---

*PRD generated autonomously: 2026-04-27. Based on product brief (2026-04-27), market research (2026-04-27), and shortlisted idea scoring 86–88/105 across Feb–Apr 2026 signal windows. All downstream architecture, UX, and epic breakdown work should trace to the functional requirements defined here.*
