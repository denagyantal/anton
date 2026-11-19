---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/accounting-document-collection-portal.md
  - _bmad-output/planning-artifacts/market-research-accounting-document-collection-portal.md
  - _bmad-output/planning-artifacts/brief-accounting-document-collection-portal.md
workflowType: prd
project_name: accounting-document-collection-portal
date: 2026-11-19
classification:
  projectType: saas_b2b
  domain: professional_services_accounting
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — TaxPortal (Accounting Document Collection Portal)

**Author:** Root
**Date:** 2026-11-19

---

## Executive Summary

**TaxPortal** is a focused client document collection portal purpose-built for solo CPAs, tax preparers, and small accounting firms (1–10 staff). It replaces the chaotic, time-consuming process of chasing W-2s and 1099s over email: the accountant builds a custom checklist per client, the client receives a branded upload link and drops files without creating an account, and the accountant monitors real-time completion status across all clients from a single dashboard.

**Target users:** Solo CPAs and tax preparers with 10–75 clients; 2–5 person accounting practices; bookkeepers needing monthly document collection. Clients of these firms are secondary users who interact exclusively with the no-login upload portal.

**Core problem:** Every January, solo CPAs spend 40+ hours chasing W-2s and 1099s via email. No dedicated, affordable tool for the accounting/tax document collection workflow exists under $500/year. TaxDome ($1,500+/year after its November 2026 per-client repricing) and Karbon ($708+/year/user) are overbuilt and overpriced. Free alternatives (email/Dropbox) provide zero completion visibility and require manual follow-up for every missing document.

**Market timing:** TaxDome's November 2026 per-client pricing switch has triggered widespread migration intent in accounting communities — with no affordable standalone alternative at the $29–$49/month price point. A validated indie builder independently demonstrated the same model generated $8,500 in revenue in 14 months via accounting subreddit posts alone, with no paid marketing.

**Revenue target:** $5,800 MRR at 3 months, $14,500 MRR at 12 months (500 paying customers at ~$29/month average).

**Launch target:** December 1, 2026 — directly before the January tax season buying window.

### What Makes This Special

1. **Accounting-native workflow** — pre-built checklist templates for every common return type (W-2 employee, self-employed, rental income, S-Corp, trust); not a generic document collection tool retrofitted for accounting
2. **Zero client friction** — clients upload without creating an account; a link, a file drop, done; no login screen, no forgotten password, no support calls from confused clients
3. **TaxDome exodus positioning** — "Same document collection features you used in TaxDome, at $29/month instead of $1,500/year"; directly captures practitioners actively leaving TaxDome
4. **Right price, right focus** — $29/month for a tool that does one thing perfectly vs. $1,500+/year for a suite used at 20% capacity
5. **Tax season lock-in** — practitioners set up workflows before January; adoption embeds the tool before the season creates retention through April

## Project Classification

- **Project Type:** SaaS B2B Web Application
- **Domain:** Professional Services / Accounting / Fintech-adjacent
- **Complexity:** Medium — handles sensitive financial documents (SSNs, EINs, financial records) requiring security-first architecture; seasonal demand spike creates reliability requirements; practitioner trust is non-negotiable
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Primary success indicator:** Time-to-complete-document-collection per tax season per firm.

A solo CPA is successful when:
- Document collection workload drops from 40 hours/season to <6 hours/season
- Zero manual follow-up emails sent after initial checklist distribution
- >85% of clients complete document uploads by February 15 (up from ~60% baseline)
- Confused-client support calls drop from 10–20/season to <3/season
- End-of-season documents downloaded as organized ZIP with zero manual sorting

A client upload user is successful when:
- Receives upload link, navigates to portal, uploads all required documents within 48 hours without requesting assistance
- Completes the entire task without calling their accountant for help

A bookkeeper is successful when:
- Monthly document collection from each client completes without manual follow-up emails
- Reclaims 10+ hours/month of unbillable admin time

### Business Success

| Milestone | Target |
|-----------|--------|
| Month 3 (March 2027 — end of first tax season) | 200 paying customers; $5,800 MRR; NPS ≥ 55; 50+ organic community mentions; zero critical security incidents |
| Month 6 (June 2027) | 350 paying customers; $8,000 MRR; churn rate <15% post-season |
| Month 12 (December 2027) | 500+ paying monthly customers; $14,500 MRR; AppSumo campaign complete (500–1,500 LTD sales); ≥20 G2/Capterra reviews |
| Month 18 (June 2028) | 1,000 paying customers; $29,000 MRR; bookkeeper segment ≥30% of revenue (reduces seasonality) |

### Technical Success

- Zero critical security incidents involving document exposure or unauthorized account access
- Client upload portal page load ≤ 2 seconds (95th percentile)
- File upload success rate ≥ 99% for valid files
- Automated reminder emails delivered within 15 minutes of scheduled trigger
- System uptime ≥ 99.9% during January–April peak season

### Measurable Outcomes

| Metric | Baseline | Target |
|--------|----------|--------|
| Manual follow-up emails per client per season | 3–4 | 0 (automated) |
| % clients with complete docs by Feb 15 | ~60% | >85% |
| Time spent on doc collection (40-client firm) | ~40 hours/season | <6 hours/season |
| Client upload completion rate within 7 days of link | ~65% | >80% |
| Confused-client support calls per season | 10–20 | <3 |
| Free trial → paid conversion (14-day window) | — | >30% |
| Time to first checklist created | — | <5 minutes from signup |
| Time to first client upload link sent | — | <15 minutes from signup |
| Monthly churn (monthly subscribers) | — | <5%/month |
| Annual renewal rate | — | >70% |

---

## Product Scope

### MVP — Minimum Viable Product

**MVP Philosophy:** Problem-solving MVP. The minimum set of features that makes document chasing irrelevant for one complete tax season.

**MVP Launch Target:** December 1, 2026.

**MVP Build Estimate:** 2–3 weeks for one developer using hosted services (Clerk/Auth0 for auth, Stripe for billing, Cloudflare R2 or AWS S3 for storage, Resend/Postmark for email).

**Core User Journeys Supported:**
- Solo CPA builds client checklist from accounting templates, sends upload links, monitors real-time completion dashboard, relies on automated reminders for follow-up
- Client receives upload link, sees checklist with instructions, uploads files without account creation, receives completion confirmation
- CPA downloads organized documents at end of season as ZIP archive

**Must-Have Capabilities:**

| Capability | Description |
|-----------|-------------|
| Checklist Builder | Create from pre-built templates (6 return types) or custom; add/reorder/annotate items; save as reusable template; duplicate to new clients |
| Client Upload Portal | No-login access via unique URL; accepts PDF, JPG, PNG, HEIC, TIFF; per-item upload slots; completion confirmation email |
| Completion Dashboard | All-clients view with status (Complete/In Progress/Not Started); sortable; click-through to client detail; ZIP download |
| Automated Reminders | Configurable schedule; reminder email includes upload link + missing items list; customizable text; manual trigger option |
| Account & Billing | Email signup; firm branding (logo + name); Starter (25 clients) / Pro (unlimited) plans; Stripe billing |

### Post-MVP Features (Phase 2 — Months 3–9)

- Engagement letter e-signatures (replace DocuSign; eSign Act compliant with audit trail)
- Expanded return type template library (multi-state, estate/trust Form 1041, nonprofit 990, partnership 1065, payroll W-2/W-3)
- Reusable client profiles (pre-filled prior-year context: "Last year you had 2 W-2s — still correct?")
- Team/multi-user accounts (2–5 person firms; Firm Owner, Partner, Staff roles)

### Vision (Phase 3 — Months 9–24)

- QBO ProAdvisors marketplace integration (access to 400K+ potential customers)
- Secure per-engagement client messaging (replace email threads for sensitive document discussion)
- AI document classification (auto-detect document type; flag wrong-year uploads; surface likely-missing items)
- Adjacent vertical expansion: legal (estate planning), insurance (claim processing), mortgage (income verification)

### Risk Mitigation Strategy

**Technical Risks:** Documents contain SSNs and financial records — security must be non-negotiable from day one. Encryption at rest and in transit, signed time-limited URLs, no permanent public file URLs. Mitigated by using established cloud storage with built-in encryption (S3/R2).

**Market Risks:** Tax season concentration (Jan–Apr) creates revenue lumpiness — mitigated by explicit bookkeeper segment targeting for year-round monthly document collection and aggressive Phase 1 bookkeeper marketing.

**Resource Risks:** 2–3 week MVP scope is achievable by one developer using hosted services that eliminate auth, payments, and email infrastructure from scratch; scope is tightly bounded with clear out-of-scope list.

---

## User Journeys

### Journey 1: Sarah Chen — The Efficiency-Maximizing Solo CPA (Primary Success Path)

**Persona:** 38-year-old solo CPA, 45 individual tax clients, home office, $175–225/hour billing rate. Current stack: Drake Tax, QBO Accountant, DocuSign, email+Dropbox for document collection. TaxDome looked at and rejected two years ago (too complex, too expensive).

**Opening Scene:** Early November 2026. Sarah's dreading the annual January document-chasing ritual — 160 manual follow-up emails last season, three clients who didn't finish until March 20. She's in r/taxpros when she sees: "I built a simple document collection portal for CPAs because Karbon/TaxDome is overkill." She clicks.

**Rising Action:** Sarah signs up — no credit card required. The app immediately prompts her to build her first checklist with pre-built templates. She selects "W-2 Employee Return" — the checklist auto-populates with W-2 (each employer), 1099-INT, 1099-DIV, 1099-B, mortgage interest statement. She adds a custom item: "K-1 from family trust" with the annotation "Call if you're unsure whether you received this." Two minutes to build. She emails a test client the link.

**Climax:** Her test client clicks the link, sees the checklist, drags a W-2 PDF into the browser. Sarah's dashboard immediately shows "Test Client — 1/7 documents uploaded." Real-time completion visibility. She's never had this before. She's sold.

**Resolution:** Sarah creates checklists for all 45 clients using the duplicate feature. She sends upload links in her standard January kickoff email. By February 1st, 38 clients have completed uploads with zero manual follow-up. Automated reminders handled the remaining 7. She spent 4 hours on document collection vs. 40 hours the prior year. In April she posts in r/taxpros: "Here's how I cut document chasing from 40 hours to 4." She becomes an organic advocate.

**Requirements Revealed:** Checklist builder with templates, per-item instructions, duplicate/reuse, client upload portal, real-time completion dashboard, branded client experience, automated reminders.

---

### Journey 2: Marcus Williams — The TaxDome Exodus (Migration Path)

**Persona:** 44-year-old CPA, co-owner of a 3-person firm, 220 clients. TaxDome user for 3 years. Received November 2026 renewal notice: $4,500/year (up from $1,416/year).

**Opening Scene:** Marcus posts in r/taxpros: "TaxDome just tripled our bill. What are you using for client document collection?" His secondary frustration: TaxDome requires clients to create accounts, generating 15–20 confused-client calls per tax season.

**Rising Action:** Someone mentions TaxPortal. He checks the pricing: $49/month for unlimited clients. He calculates $588/year vs. $4,500/year. He wants to keep TaxDome for internal workflow but replace its client portal.

**Climax:** Marcus creates his first checklist, generates a client upload link, sends it to 10 test clients. All 10 upload within 24 hours. No login confusion. No support calls. He calculates: 15–20 fewer client calls per season × 20 minutes average = 5–7 hours saved in support time alone.

**Resolution:** Marcus migrates all client-facing document collection to TaxPortal ($588/year), retains TaxDome for internal workflow only. Net savings: $3,900/year. Client confusion calls: near zero. He posts a detailed comparison in r/taxpros.

**Requirements Revealed:** No-login client upload (critical differentiator vs. TaxDome), unlimited client plan, clean client UI, works as a focused layer without requiring full practice management migration.

---

### Journey 3: Priya Patel — The Bookkeeper with Monthly Collection Needs (Secondary User)

**Persona:** 31-year-old bookkeeper, 18 small business clients. Monthly document collection need: bank statements, credit card statements, receipts, payroll records. Currently uses email + shared Google Drive.

**Opening Scene:** December, pre-year-end. Priya spots TaxPortal on AppSumo. $79 LTD. She checks: does it support recurring monthly checklists? Yes. She buys immediately.

**Rising Action:** She creates a "Monthly Bookkeeping Documents" checklist template: bank statements (all accounts), credit card statements, receipts folder, payroll records. She assigns it to 5 test clients, generates upload links.

**Climax:** Within 48 hours, 4 of 5 clients have completed uploads. The 5th receives an automated Day 7 reminder. By Day 10, all 5 are complete. For the first time in her career, she sends zero manual follow-up emails for January bookkeeping document collection.

**Resolution:** All 18 clients get TaxPortal links. Monthly document collection drops from 54–72 manual reminder emails to 0–5. She reclaims 10+ hours/month of unbillable admin time. She becomes a vocal AppSumo reviewer: "5 stars — this tool paid for itself in the first month."

**Requirements Revealed:** Reusable monthly checklist templates (not tax-season-specific), automated recurring reminders, AppSumo LTD tier, clean enough UX that non-technical clients use it without help.

---

### Journey 4: Bob — The Non-Technical Client (Client-Side Edge Case)

**Persona:** Bob, 67 years old, retired teacher, Sarah Chen's client for 12 years. Files a simple W-2 return. Not technical — uses email but has never uploaded to a web portal before.

**Opening Scene:** Bob receives Sarah's January email: "Click this link to upload your 2026 tax documents — no login needed." He clicks on his iPad.

**Rising Action:** The portal loads: "Sarah Chen CPA — Tax Document Upload." Bob sees a checklist: "W-2 from Employer (2026) — Upload your W-2 form here. Each employer who paid you in 2026 should have sent you one." He sees a blue upload button. He doesn't know how to get a file from his email to this website. He calls Sarah.

**Climax:** Sarah walks him through it in 5 minutes: "Hit the upload button, then 'Browse files,' then find your W-2 in Downloads." Bob uploads all 7 items. Each gets a checkmark. He sees "All documents uploaded — thank you!" He receives a confirmation email.

**Resolution:** Next year, Bob completes without calling — he remembers the process. Sarah's support load from Bob: 1 call/year → 0 calls/year by Year 2.

**Requirements Revealed:** Extremely clear client UI with no technical jargon; per-item instructions visible to client; upload status indicator per item; mobile-responsive portal (iPad/phone); clear completion confirmation email; plain-language guidance throughout.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Sarah Chen (success path) | Checklist builder + templates, duplicate/bulk create, upload portal, real-time dashboard, branded experience, automated reminders |
| Marcus Williams (migration) | No-login upload (non-negotiable), unlimited client plan, complementary to existing tools |
| Priya Patel (monthly bookkeeping) | Recurring templates, automated reminders, AppSumo LTD tier |
| Bob (non-technical client) | Mobile-responsive portal, per-item instructions, upload status per item, completion confirmation email |

---

## Domain-Specific Requirements

### Data Security

Tax documents contain highly sensitive personal data: Social Security Numbers (SSNs), Employer Identification Numbers (EINs), detailed financial records, and dependent information. A single data breach destroys practitioner trust irreparably and creates liability for the accountant's practice.

**Mandatory requirements:**
- All files encrypted at rest (AES-256 or equivalent cloud-native encryption)
- All data in transit encrypted via TLS 1.2+; HTTP redirects to HTTPS enforced; no mixed content
- File storage URLs never publicly accessible — all file access via pre-signed, time-limited URLs only (expiration ≤ 1 hour)
- No third-party analytics scripts receive document content or file metadata
- All file access events (upload, download, delete) logged with timestamp, actor identity or upload token, and IP address
- Cloud storage: US-based only (AWS S3 us-east-1 or Cloudflare R2 US region)

### Data Retention

- Uploaded documents retained indefinitely until practitioner explicitly deletes them (IRS advises 7-year retention minimum for tax records)
- Practitioners can delete individual files or entire client records
- No automated data expiration in MVP — practitioner controls all document lifecycle

### Compliance Boundaries

TaxPortal is a document delivery channel, not a tax preparation software; it does not fall under IRS e-file provider certification requirements.

Relevant compliance boundaries:
- **CCPA/State Privacy:** Client PII (name, email, SSN in documents) requires data processing agreement capability for California-domiciled firms; default US data storage satisfies residency requirements
- **GDPR:** For EU-facing accounting firms (edge case in MVP); data processing agreement (DPA) template available on request; not built into MVP product
- **No HIPAA requirement** unless a client's tax documents contain health information — rare edge case excluded from MVP scope

### Authentication Requirements

- Practitioner accounts: email + password minimum; password reset via email link; hosted auth provider (Clerk or Auth0) for session management
- Client upload access: no authentication; unique non-guessable token per upload engagement (UUID v4 minimum entropy); token grants access only to that specific client's checklist
- Internal admin: not in MVP scope

---

## SaaS B2B Specific Requirements

### Project Type Overview

TaxPortal is a B2B SaaS web application with two distinct interfaces:
1. **Practitioner dashboard** — authenticated; manages clients, checklists, monitoring, billing
2. **Client upload portal** — unauthenticated; link-accessed; file upload only

### Technical Architecture Considerations

**Multi-tenancy:** Each practitioner account is completely isolated. Client data, checklists, and documents from one practitioner account must never be accessible to another. Row-level isolation using `practitioner_id` as a foreign key across all tables.

**Client portal access model:** Each upload engagement generates a unique, non-guessable token (UUID v4). Token grants read access to checklist items and write access to upload slots for that specific engagement only. Tokens do not expire during tax season but can be revoked by the practitioner.

**File upload architecture:** Client-side direct upload via pre-signed PUT URLs to cloud storage. Document bytes never pass through the application server. Reduces bandwidth costs, eliminates application-layer bottleneck during peak season, and ensures files are written directly to encrypted storage.

**Email delivery:** Transactional email must achieve ≥98% inbox delivery. Use Resend or Postmark (not bulk email providers). Practitioner-branded "From" name on all emails (e.g., "Sarah Chen CPA via TaxPortal").

### Authentication Model

- **Practitioners:** Email + password via hosted auth provider (Clerk or Auth0); JWT session tokens with refresh token rotation; email verification on signup
- **Clients:** No authentication; unique upload token per engagement URL; token embedded in URL path or query parameter
- **Admin (internal ops):** Out of scope for MVP

### Permissions Model

**MVP (single-user per account):** Account owner has full access to all features.

**Phase 2 additions:**
- **Staff:** View dashboard, create checklists, send links; cannot access billing or firm settings
- **Partner:** Full access except billing (Firm Owner only sees billing)
- **Firm Owner:** Full access including billing, team management, firm settings

---

## Functional Requirements

### Checklist Management

- FR1: Practitioners can create a new document checklist from pre-built accounting templates: W-2 Employee Return, Self-Employed/Schedule C, Rental Income/Schedule E, Investment/Schedule D, S-Corp/1120S, C-Corp/1120
- FR2: Practitioners can create a checklist from scratch without a template
- FR3: Practitioners can add checklist items specifying item name and optional client-visible instructions
- FR4: Practitioners can remove items from a checklist before distribution
- FR5: Practitioners can reorder checklist items
- FR6: Practitioners can save a completed checklist as a named reusable template for future clients
- FR7: Practitioners can duplicate an existing client checklist to create a new engagement (e.g., same client next year, or new client with same return type)
- FR8: Practitioners can assign a checklist to a named client record

### Client Upload Portal

- FR9: Practitioners can generate a unique upload URL for each client checklist engagement
- FR10: Clients can access the upload portal via URL without creating an account or logging in
- FR11: Clients can view the full checklist with per-item upload status and practitioner-provided instructions
- FR12: Clients can upload files in PDF, JPG, PNG, HEIC, and TIFF formats up to 25MB per file
- FR13: Clients can upload multiple files to a single checklist item (e.g., W-2 from two employers both filed under "W-2" item)
- FR14: Clients receive an email confirmation when each file is successfully uploaded
- FR15: Clients can see a clear indicator of which checklist items are still needed after partial completion
- FR16: The client portal displays the practitioner's firm name and logo
- FR17: Clients can view a summary confirmation screen when all checklist items are uploaded

### Completion Dashboard

- FR18: Practitioners can view all active client engagements in a single dashboard view showing: client name, documents requested, documents uploaded, missing count, last activity date, overall status
- FR19: Practitioners can sort the dashboard by: completion percentage, last activity date, client name, or due date
- FR20: Practitioners can filter the dashboard by status: Complete, In Progress, Not Started
- FR21: Practitioners can drill into a client detail view showing per-item upload status, file names, and upload timestamps
- FR22: Practitioners can download all uploaded documents for a single client as a ZIP archive organized by document-type folder structure
- FR23: Practitioners can see a color-coded status indicator per client: Complete (all items uploaded), In Progress (some items uploaded), Not Started (no items uploaded)

### Automated Reminders

- FR24: Practitioners can configure a reminder schedule per engagement specifying: initial delay before first reminder and subsequent reminder intervals (e.g., Day 7, Day 14)
- FR25: The system automatically sends reminder emails to clients with incomplete uploads at the configured intervals
- FR26: Reminder emails include the client's upload URL and a list of remaining missing checklist items
- FR27: Practitioners can customize the reminder email subject line and message body
- FR28: Practitioners can manually trigger an immediate reminder email for any client engagement at any time
- FR29: The system stops sending automated reminders once all checklist items for an engagement are uploaded
- FR30: Practitioners can view a per-client reminder send history (timestamps of sent reminders)

### Client & Account Management

- FR31: Practitioners can create named client records and assign engagements to them
- FR32: Practitioners can archive client records (removes from active dashboard; history preserved)
- FR33: Practitioners can view all historical document collection engagements per client
- FR34: Practitioners can upload a firm logo (JPG/PNG) and set a firm display name that appears on the client portal
- FR35: Practitioners can sign up with email and password
- FR36: Practitioners can reset their password via email link
- FR37: Practitioners can view their current subscription plan and usage (number of active clients)
- FR38: Practitioners can upgrade or downgrade their subscription plan
- FR39: Practitioners can view and download past Stripe invoices

### File & Document Management

- FR40: Practitioners can download individual files uploaded by clients
- FR41: Practitioners can delete individual uploaded files from a client engagement
- FR42: Practitioners can manually mark a checklist item as complete (for documents received outside the portal, e.g., hand-delivered or emailed directly)
- FR43: Uploaded documents are retained until explicitly deleted by the practitioner; no automated expiration

### Security & Access Control

- FR44: Each client upload URL contains a unique non-guessable token that grants access only to that specific engagement's checklist and upload slots
- FR45: All uploaded files are accessible only via authenticated practitioner session or time-limited pre-signed download URLs; no permanent public file URLs exist
- FR46: Data from one practitioner account is inaccessible to any other practitioner account (tenant isolation)
- FR47: Practitioners can revoke a client upload token (renders the client's upload link invalid)

---

## Non-Functional Requirements

### Security

- NFR1: All files stored encrypted at rest using AES-256 or cloud-native equivalent (AWS S3 SSE-S3 or Cloudflare R2 default encryption)
- NFR2: All data in transit encrypted via TLS 1.2 minimum; TLS 1.3 preferred; all HTTP requests redirected to HTTPS; HSTS header enforced
- NFR3: Pre-signed file download URLs expire within 1 hour of generation; no permanent public file access URLs exist
- NFR4: Every file upload, download, and delete event logged with timestamp, actor identity or upload token, and source IP address; logs retained for minimum 1 year
- NFR5: Passwords hashed using bcrypt (cost factor ≥ 12) or Argon2id; plaintext passwords never stored, logged, or transmitted after receipt

### Performance

- NFR6: Client upload portal (the client-facing page) renders fully in ≤ 2 seconds at 95th percentile under normal load, measured by synthetic monitoring
- NFR7: Practitioner dashboard loads within 3 seconds for accounts with up to 500 active client engagements at 95th percentile under normal load
- NFR8: Pre-signed upload URL generation returns within 1 second so client-side upload can begin without perceptible delay
- NFR9: Automated reminder emails are sent within 15 minutes of the scheduled trigger time

### Reliability

- NFR10: System uptime ≥ 99.5% measured monthly during off-peak months; ≥ 99.9% during January–April peak filing season; measured by synthetic uptime monitoring with 1-minute check intervals
- NFR11: File upload success rate ≥ 99% for files meeting format and size requirements (PDF, JPG, PNG, HEIC, TIFF; ≤ 25MB)
- NFR12: Uploaded files stored with ≥ 99.999999999% (11 nines) durability as provided by the chosen cloud storage tier (AWS S3 Standard or Cloudflare R2 equivalent)

### Scalability

- NFR13: System supports ≥ 1,000 concurrent client upload sessions (across all practitioners) without measurable performance degradation; achieved via direct client-to-storage upload bypassing application server
- NFR14: Per-practitioner storage architecture supports up to 10GB per account without application-level changes

### Accessibility

- NFR15: Client upload portal meets WCAG 2.1 Level AA for color contrast, keyboard navigation, and screen reader compatibility — the client audience includes adults ages 50–70 with varying technical ability; non-compliance directly causes the support calls the product is designed to eliminate

---

_PRD created: 2026-11-19_
_Input sources: shortlisted idea (score 90/105), market research report, and product brief (all 2026-11-18)_
_Next step: Architecture — create technical architecture for accounting-document-collection-portal_
