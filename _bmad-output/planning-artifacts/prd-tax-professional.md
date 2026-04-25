---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/tax-professional-client-portal.md
  - _bmad-output/planning-artifacts/market-research-tax-professional.md
  - _bmad-output/planning-artifacts/brief-tax-professional.md
workflowType: prd
project_name: tax-professional
date: '2026-04-25'
author: Root
classification:
  projectType: saas_b2b
  domain: fintech_professional_services
  complexity: medium_high
  projectContext: greenfield
---

# Product Requirements Document — Tax Professional Client Portal

**Author:** Root
**Date:** 2026-04-25

---

## Executive Summary

Solo and small-firm tax preparers (1–5 staff) have no affordable, purpose-built tool for their core annual client workflow. They manually chase documents via email and text, send DocuSign links separately, and share Dropbox folders — a duct-tape stack that wastes 15–25 hours per preparer per season and violates FTC Safeguards Rule requirements for encrypted, auditable document exchange.

The enterprise tools that solve this problem completely — TaxDome ($800–$1,200/user/year), Canopy ($150–$260+/month) — are priced for mid-to-large firms and require 6–8 weeks of onboarding. Solo preparers paying $800+/year for tools with 80% unused features is the loudest, most consistent pain signal in the professional tax software market.

**The product** is a branded client portal for solo and small-firm tax preparers covering the complete annual workflow in a single tool: document request checklists → automated SMS/email reminders → secure client upload → multi-signer e-signature (Form 8879, engagement letters) → preparation status tracking → secure return delivery. Setup takes 20 minutes. Price is $79 LTD or $29/month — a 10–20x advantage over TaxDome.

**Market signal:** Scored 89/105 across 14 independent evaluation periods (2026-03-17 through 2026-04-25). 650K+ CPAs in the US, 124,698 tax prep businesses. Multi-signer e-signature is an explicitly confirmed feature gap with no affordable competitor filling it.

**Timeline:** MVP beta August 2026, AppSumo LTD launch October 2026 (intercepts annual renewal window before January 2027 filing season).

### What Makes This Special

**Price disruption as first differentiator:** $79 LTD vs. $800+/user/year for TaxDome. Solo preparers justify this purchase without approval from anyone.

**Multi-signer e-signature as first-mover moat:** No affordable competitor solves joint-filer Form 8879 and engagement letter multi-signature. Direct user validation: *"We wish software allowed for multiple signatures on engagement letters."* This is the feature that converts TaxDome users looking for an exit.

**20-minute setup as positioning:** Not 6 weeks. Works from a phone. First client portal live before the trial expires. This is a testable, marketable claim that TaxDome cannot credibly match.

**Tax-native document checklists:** Pre-built W-2/1099/K-1/Schedule C templates versus generic file request forms from horizontal portals (SuiteDash, Client Hub). Feels built for tax preparers, not adapted from a CRM.

**Compliance as marketing:** FTC Safeguards Rule compliance is prominently positioned on every screen. Security is not a footnote — it's a selling point that converts the "Linda" persona who just discovered she's out of compliance.

**Not a Drake/Lacerte replacement:** Integration-first positioning (file watching Phase 2) lets preparers keep their existing tax software. This removes the "I'd have to switch everything" objection entirely.

## Project Classification

- **Project Type:** SaaS B2B web application (multi-tenant)
- **Domain:** FinTech / Professional Services — Tax Compliance
- **Complexity:** Medium-High (regulatory compliance, multi-signer e-signature, FTC Safeguards Rule, KBA authentication, seasonal traffic spikes)
- **Project Context:** Greenfield — new product, no existing codebase
- **Launch Model:** AppSumo LTD first, then SaaS subscription
- **Pricing:** $79 LTD (Solo), $129 LTD (Team up to 5); $29/month (Solo), $49/month (Team)

---

## Success Criteria

### User Success

**Primary ICP (Sarah — Solo Preparer):**
- Zero document-chase calls in the first two weeks of January 2027. Success = opening the dashboard and seeing 80% of clients have uploaded documents without a single outbound follow-up.
- Form 8879 signed within 24 hours of sending, without printing, mailing, or PDF email attachments.
- Portal configured and first client invite sent within 20 minutes of account creation — measured from first login timestamp to first portal invite sent.
- Clients comment positively on the portal experience; Sarah receives fewer "where is my return?" calls.

**Secondary ICP (Marcus — Small Firm Switching from TaxDome):**
- Equivalent document request, e-sign, reminder, and status tracking functionality as TaxDome's portal module.
- Multi-preparer access working correctly: each of 3 preparers sees only their own clients by default, with admin override.
- Annual cost under $150 (LTD) or $49/month — a clear step-down from $2,400/year for 3 TaxDome licenses.

**Tertiary ICP (Linda — Compliance-Motivated Adopter):**
- All client document exchange flowing through the encrypted portal within first 30 days of use.
- Downloadable DPA and FTC Safeguards Rule compliance statement available from account settings — allows Linda to file documentation with her state CPA society.
- Single dashboard showing all clients' document status — no more searching across Gmail, Dropbox, and QuickBooks messages.

**Client End-User (taxpayer):**
- Uploads all documents from phone in under 3 minutes following portal invite link.
- No account creation required to upload — magic link access only.
- Receives automatic confirmation that documents were received.
- Can check return status without calling the preparer.

### Business Success

| Timeframe | Metric | Target |
|-----------|--------|--------|
| 30 days post-launch | AppSumo LTD sales | 200+ units (go/no-go threshold) |
| 60 days post-launch | AppSumo LTD sales | 500+ units (product-market fit confirmation) |
| 60 days post-launch | G2 average rating | 3.9+ stars from first 20 reviews |
| 90 days post-launch | SaaS conversions | 50+ monthly subscribers from trial/LTD upgrades |
| 6 months | Review authority | 30+ G2/Capterra verified reviews |
| 12 months | ARR | $150K–$300K ARR |
| 12 months | Active portal users | 10,000+ client portals activated |
| 18 months | LTD + SaaS blend | 2,000+ LTD customers, 500+ SaaS subscribers |

**Go/No-Go Decision Post-October 2026 Launch:**
- ≥ 200 LTDs in 30 days: continue investment, build Phase 2
- 50–200 LTDs: revisit positioning, run qualitative interviews before abandoning
- < 50 LTDs: pause, do direct r/taxpros customer interviews

### Technical Success

- 99.9%+ document delivery success rate — every uploaded document must be reliably stored and retrievable by the preparer.
- Zero data loss incidents involving client tax documents or signed returns.
- < 5% of active monthly users submit a support ticket per month (validates setup simplicity).
- All data at rest encrypted with AES-256; all data in transit encrypted with TLS 1.3.
- FTC Safeguards Rule compliance verifiable via in-app documentation and downloadable DPA.
- E-signature audit trail complete: timestamp, IP address, signer identity per signature, tamper-evident.

### Measurable Outcomes

- **Time-to-first-portal:** Median < 20 minutes from signup to first client portal invite sent.
- **Client activation rate:** > 70% of portal invitations result in ≥ 1 document uploaded within 14 days.
- **First-season completion rate:** > 60% of paying customers process ≥ 10 client returns through the portal in their first tax season.
- **Monthly active preparer rate:** > 80% of paying customers take action ≥ 2x/month during January–April peak season.
- **Annual SaaS renewal rate:** > 75%.
- **E-signature feature adoption:** > 60% of active customers use e-signature within first season.
- **NPS:** ≥ 40 after first full tax season (January–April 2027).
- **Organic acquisition rate:** > 40% of new signups from r/taxpros, TaxProTalk, or peer referral (tracked via UTM).

## Product Scope

### MVP — Minimum Viable Product

The MVP must cover the complete core workflow. A portal that handles 4 of 6 workflow steps is not viable — preparers will not switch from their duct-tape stack for a partial solution.

**Must-Have Capabilities (launch blockers):**

1. **Branded Client Upload Portal** — Custom firm logo, name, brand color (hex), subdomain (firmname.taxportal.app). Mobile-responsive. Magic link access — no account creation required for basic document upload.
2. **Tax Document Request Checklists** — Pre-built templates: Standard 1040, Self-Employed 1040 (Schedule C), Rental (Schedule E), S-Corp/Partnership (K-1). Preparer can customize per client. Client sees checklist with upload progress.
3. **Automated SMS + Email Reminders** — Configurable cadence (immediate, day 3, day 7, day 14). Auto-stops when all documents uploaded. Per-client override.
4. **Multi-Signer E-Signature** — Form 8879 template with primary + spouse/secondary signer. Engagement letter template with same multi-signer support. KBA (Knowledge-Based Authentication) option for IRS compliance. Complete audit trail per signature.
5. **Preparation Status Tracker** — Preparer-controlled pipeline: Documents Received → In Preparation → Client Review Needed → Filed. Client-visible without account creation. Optional SMS/email notification on status advance.
6. **Secure Return Delivery** — Preparer uploads completed return PDF to client record. Client notified → downloads from portal (not email attachment). Delivery acknowledgment collected. Logs maintained for compliance.
7. **Preparer Dashboard** — All clients in one view, sorted by urgency (missing docs + approaching deadline first). Filters: Pending Documents, In Progress, Filed, All. Bulk reminder send. Document download for preparation workflow.
8. **WISP/FTC Compliance Documentation** — In-app compliance statement confirming FTC Safeguards Rule compliance. Downloadable DPA. Configurable data retention and deletion policy per firm. AES-256 at rest, TLS 1.3 in transit.

### Growth Features (Post-MVP, Phase 2 — May 2027)

- AI document auto-classification: upload W-2 PDF → auto-tagged as "W-2, Client Name"
- Unified client messaging inbox: SMS, email, and portal messages in one thread
- Drake Tax file-watching integration: status auto-updates when preparer saves return
- Seasonal appointment scheduler: client books intake appointment + uploads docs in same flow
- Advanced multi-preparer roles: admin, preparer, read-only
- Custom domain support (CNAME/white-label) as premium tier feature

### Vision (Year 2+, Phase 3)

- SOC 2 Type II certification → unlocks mid-market firm sales (5–20 staff)
- Enterprise tier: full white-label (custom domain, custom email sender, remove product branding)
- Lacerte/ProConnect integration (API partnership)
- AI document completeness check: "Based on last year's return, you may be missing a 1099-DIV"
- Canadian market expansion
- Adjacent market: payroll professionals (W-2/W-4/I-9 collection same workflow)

---

## User Journeys

### Journey 1: Sarah — The Solo Preparer, First Tax Season Setup (Success Path)

Sarah has been using Gmail, Dropbox, and DocuSign Personal for 12 years. In late October 2026, a r/taxpros post — *"I just set up [product] in 20 minutes and my clients love it"* — appears in her feed. She clicks the AppSumo link, reads the pricing ($79 once vs. the $50/month she keeps seeing for TaxDome), and pays immediately.

**Opening scene:** It's the second week of October. Sarah is dreading January. Her mental image: 280 individual emails going out, 280 Dropbox folders to check, 280 DocuSign follow-ups to send. She's spent $79 before even thinking about it.

**Rising action — onboarding:** Sarah opens the dashboard. She uploads her firm logo, picks a green that matches her letterhead, types her firm name. She clicks through to the document checklist templates and sees pre-filled W-2, 1099-INT, 1099-DIV, mortgage statement, charitable donations — exactly what she asks for every year. She customizes one item, removes another, saves it as "Standard 1040." She creates a test client record for herself, assigns the Standard 1040 checklist, and sends a portal invite to her own email.

**Climax — the portal works:** Sarah's phone buzzes with her own test invite. She taps the link, sees her firm's logo and colors, uploads a screenshot as a fake W-2. The dashboard instantly shows "1 of 8 documents uploaded." She sends herself a test 8879 e-signature request, signs it on her phone in under a minute, sees the audit trail populate. From first login to this moment: 18 minutes.

**Resolution — January transforms:** January 2027 arrives. Sarah's portal invites went out in November — 80% of clients uploaded documents before she had to ask twice. She opens the dashboard each morning, sees the status at a glance, sends one bulk reminder to the stragglers. The "where is my return?" calls drop by 70%. She delivers completed returns through the portal. Clients receive a "Your return is ready" notification and download it without emailing Sarah.

**New reality:** Sarah processes the same 280 clients but recovers 20+ hours she previously spent on document chasing. She leaves a 5-star G2 review in March.

**Journey requirements revealed:** Branded portal setup flow, document checklist template system, test self-invite capability, magic link access (no client account creation), mobile-first upload UX, bulk reminder send from dashboard, secure return delivery with client notification, e-signature with audit trail, preparer dashboard with status at-a-glance.

---

### Journey 2: Marcus — The Small Firm Owner, Switching from TaxDome (Edge Case — Migration)

Marcus has 3 preparers and 2,400 returns per year. He has been on TaxDome for 18 months and uses roughly 30% of the features. His October 2026 TaxDome invoice arrives: $2,400 for 3 licenses. That same week, a tax industry blogger posts a comparison review.

**Opening scene:** Marcus is staring at a $2,400 renewal invoice for a tool his team barely uses. His staff barely uses the client portal features — they mostly use it for document requests and e-sign. He's been meaning to evaluate alternatives for months.

**Rising action — evaluation:** Marcus reads the comparison. He opens a trial, imports a batch of client records from a CSV export from TaxDome. He needs to see that his 3 preparers can each work independently with their own client views, that the team admin (himself) can see everyone, and that he can assign clients to each preparer. He tests a multi-signer Form 8879 — this is the feature that always required a workaround in TaxDome's basic tier.

**Climax — team setup works:** Marcus creates 3 preparer accounts, assigns clients across them, confirms he can see all in his admin view. He tests the engagement letter multi-signer flow with a test client. It works. He calculates: $129 LTD for the whole team (one-time) vs. $2,400/year. He purchases the Team LTD.

**Resolution:** Marcus's team uses the portal for their second tax season. His migration from TaxDome involved exporting client emails and re-inviting clients to the new portal — a one-time effort that took 2 hours with the bulk import. The team saves ~$2,200/year.

**Journey requirements revealed:** Multi-seat team accounts with role-based access (admin sees all, preparers see assigned clients), CSV client import, multi-signer e-signature parity with competitor, admin client assignment to preparers, team billing at single Team LTD or monthly rate.

---

### Journey 3: Linda — The Compliance-Motivated Adopter (Regulatory Urgency)

Linda runs a 150-client solo practice. She recently attended a CPE session where the instructor mentioned FTC Safeguards Rule requirements. Linda realizes her current setup — clients emailing to her Gmail, some texting photos of W-2s, some uploading to QuickBooks — is almost certainly non-compliant.

**Opening scene:** Linda is worried. She doesn't have IT support. She doesn't know what a Written Information Security Program is. She knows that if a client's documents are compromised, it's her problem.

**Rising action — purchase:** Linda Googles "cheap tax client portal FTC compliant." She finds a TaxProTalk forum thread where someone posted about the product. She sees the pricing and the in-app FTC Safeguards compliance documentation. She signs up for the free trial.

**Climax — compliance relief:** Linda finds the WISP compliance statement in account settings. She downloads the DPA. She reads that all documents are encrypted at rest (AES-256) and in transit (TLS 1.3). She sees the data retention policy she can configure. She takes a screenshot for her records. She feels relief — not because she fully understands every technical detail, but because she now has a documented, vendor-provided compliance posture she can point to.

**Resolution:** Linda migrates all document exchange to the portal over 3 weeks before the January filing season. She invites clients one batch at a time, using the automated reminders to get them to upload. Her document chaos is gone. Everything is in one place. She files her WISP with her state CPA society using the DPA.

**Journey requirements revealed:** Downloadable DPA, in-app FTC Safeguards compliance statement, configurable data retention and deletion policy, encrypted storage documentation, clear security positioning in UI and marketing copy, firm-specific subdomain (not a generic Dropbox link), audit trail for all document access.

---

### Journey 4: Client End-User — James, Taxpayer (Secondary User — Upload Experience)

James is Sarah's client. He is 58, uses his iPhone for most things, and is not tech-savvy. He receives a text from Sarah's portal in early February: *"Hi James, Sarah Smith CPA needs your tax documents. Click here to upload them."*

**Opening scene:** James is mildly confused. He's used to emailing Sarah things. But the text came from Sarah's firm name, and the link goes to a page that clearly shows Sarah's logo.

**Rising action:** James taps the link. He does not see a login screen — he's taken directly to a checklist page showing what Sarah needs: W-2, 1099-INT, mortgage interest statement, charitable donation receipt. James taps "Upload W-2," his phone opens the camera/files picker, he takes a photo of his W-2. He repeats for each document. He sees the checklist tick off as he goes.

**Climax:** The last item checked off. A confirmation screen says "All documents received. Sarah will be in touch when your return is ready." James feels done.

**Resolution:** Three weeks later, James gets a text: "Your return is ready. Click here to review and sign." He taps, reviews the summary, signs Form 8879 on his phone. He downloads his return PDF. He calls Sarah exactly zero times during this process.

**Journey requirements revealed:** Magic link access (no account creation required), mobile-first upload UX with camera capture, checklist with visible progress, clear confirmation after full upload, preparation status visible without login, mobile e-signature that works on iOS/Android, completed return PDF download, SMS notifications (not just email).

---

### Journey 5: Firm Admin / Junior Preparer (Operational User)

Marcus employs an admin, Diane, who manages client communication for all three preparers. Diane is not a licensed preparer — she needs to send reminders, check document status, and download uploaded files for the preparers, but she should not be able to change firm settings or billing.

**Opening scene:** It's January 15. Diane needs to send a bulk reminder to all 47 clients who have not yet uploaded complete document sets. She should not need to ask Marcus to do this.

**Rising action:** Diane logs in with her limited-access role. She sees the dashboard showing all clients (read-only). She filters by "Pending Documents," selects all 47, and clicks "Send Reminder." She confirms the reminder template and sends.

**Climax:** All 47 reminders sent. Diane downloads the uploaded documents for the 3 clients who uploaded overnight and places them in the preparers' intake folders.

**Journey requirements revealed:** Role-based access control (admin vs. preparer vs. read-only), bulk reminder send for admin role, document download access for admin, view-only access to all clients across all preparers, no access to billing or firm settings for non-admin users.

### Journey Requirements Summary

All journeys collectively reveal requirements across 8 capability areas:
- **Portal Branding & Setup** — firm-specific branding, subdomain, onboarding flow
- **Document Request & Checklist Management** — pre-built tax templates, per-client customization, upload progress
- **Automated Notifications & Reminders** — SMS + email, configurable cadence, bulk send, auto-stop on completion
- **E-Signature Workflow** — multi-signer (8879, engagement letters), KBA option, audit trail, mobile-friendly
- **Preparation Status Tracking** — preparer-controlled pipeline, client-visible without login, SMS/email notifications
- **Secure Document Delivery** — return PDF delivery, delivery acknowledgment, download tracking
- **Preparer Dashboard & Workflow Management** — all-clients view, urgency sorting, filters, bulk actions, role-based access
- **Compliance & Security** — FTC Safeguards documentation, DPA download, encrypted storage, audit trails, data retention controls

---

## Domain-Specific Requirements

### Compliance & Regulatory

**FTC Safeguards Rule (16 CFR Part 314):**
- All client tax documents and signed returns must be stored encrypted at rest (AES-256 minimum).
- All data transmission must use TLS 1.3; no unencrypted channels for document exchange.
- The firm must be able to generate a Written Information Security Program (WISP) aligned with the product's documented security controls.
- A Data Processing Agreement (DPA) must be available for firm download at any time.
- Access logs must record who accessed what document and when; logs retained for minimum 3 years.
- Account access must require multi-factor authentication for preparers.

**IRS e-Signature Standards (IRS Pub. 4163 / Notice 2021-06):**
- Form 8879 e-signatures must include: date signed, taxpayer identity authentication, signature image or typed signature, audit trail with IP and timestamp.
- Knowledge-Based Authentication (KBA) must be available as an option for IRS-compliant 8879 signing (required for remote signing without in-person verification).
- Signed 8879 documents must be retained for 3 years after the due date or date of filing, whichever is later.
- The system must support two separate signing events (primary taxpayer + spouse) for joint returns, each with independent authentication.

**State-Level Compliance:**
- No state-specific e-signature restrictions are anticipated to conflict with a federal KBA-compliant approach; however, the product must not represent itself as providing legal advice on state-specific requirements.
- The product should note in its compliance documentation that preparers are responsible for confirming state-specific e-signature requirements for their jurisdiction.

### Technical Constraints

**Security Architecture:**
- All uploaded documents stored in encrypted object storage (AWS S3 with SSE-KMS or equivalent).
- No permanent storage of KBA identity verification data beyond what is required for the audit trail.
- Preparer account passwords must meet minimum complexity requirements; MFA (TOTP or email OTP) required at login.
- Client magic links must expire after 72 hours of inactivity; links must be single-session invalidated on use for sensitive actions.
- Signed document packages must be tamper-evident (SHA-256 hash stored at signing time).

**Data Retention:**
- Signed 8879 and engagement letters: minimum 3 years (IRS requirement), configurable up to 7 years per firm.
- Uploaded source documents: configurable per firm, default 12 months post-filing.
- Audit logs: minimum 3 years, non-deletable.
- Firm data deletion on account cancellation: 30-day grace period, then permanent deletion with confirmation.

### Integration Requirements

**Phase 1 (MVP — no integrations required):**
- No integrations with Drake, Lacerte, UltraTax, or ProConnect in MVP.
- Preparers manually update preparation status within the portal.
- Document delivery is decoupled from tax software — preparer exports final return PDF from their tax software and uploads to the portal manually.

**Phase 2 (Post-MVP):**
- Drake Tax file-watching: monitor Drake client folder for output PDFs, auto-trigger "return ready" status update.
- Lacerte/ProConnect API integration (conditional on partnership agreements).
- Integration must be opt-in per firm and must not require Drake credentials to be stored in the portal system.

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Data breach of client tax documents | AES-256 at rest, TLS 1.3 in transit, MFA required, minimal data retention, cyber insurance before launch |
| KBA failure rate creates friction for elderly/low-credit clients | KBA is optional; preparers can choose standard e-sign (typed name + IP) for non-IRS-remittance documents; communicate KBA as an option, not a requirement |
| Magic link phishing risk | Magic links expire in 72 hours, are single-use for sensitive actions, and are delivered via SMS + email simultaneously so clients can verify sender identity via both channels |
| FTC audit or complaint | DPA and WISP documentation built into product; no ambiguity about what is encrypted and how; security is a marketed feature, not an afterthought |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Full data isolation between firms: each firm's clients, documents, and settings are logically separated and inaccessible to other firms.
- Subdomain per firm (`firmname.taxportal.app`) provides both functional isolation and brand differentiation.
- A single firm administrator manages billing, branding, user seats, and data retention settings.
- Multi-preparer accounts share firm branding but have independent client assignments.
- No firm can see another firm's data under any circumstances, including support interactions (support accesses via time-limited admin impersonation with full audit logging).

### Role-Based Access Control (RBAC)

| Role | Capabilities |
|------|-------------|
| Firm Admin | All preparer capabilities + billing management, user seat management, branding configuration, data retention settings, DPA download |
| Preparer | Full client workflow (create clients, send invites, send reminders, send e-sign requests, update status, deliver returns) for assigned clients only |
| Firm Admin (Full View) | Admin can also view and act on all clients across all preparers |
| Read-Only / Admin Support | View document status, download uploaded documents, send reminders; no settings access, no e-signature initiation |
| Client (Portal User) | Upload documents via magic link, check return status, sign documents, download completed return — no account required |

### Subscription & LTD Management

- LTD Solo: 1 preparer seat, unlimited clients, all MVP features. AppSumo price: $79. Regular: one-time $99.
- LTD Team: up to 5 preparer seats, unlimited clients, all MVP features. AppSumo price: $129. Regular: one-time $199.
- SaaS Solo: $29/month, 1 preparer seat, unlimited clients.
- SaaS Team: $49/month, up to 5 preparer seats.
- LTD-to-SaaS upgrade path: LTD holders can upgrade to annual plan for Phase 2 features (AI document classification, unified inbox, Drake integration) at discounted rate.
- Trial: 14-day free trial with full MVP feature access, no credit card required.
- Client portal invites are not capped — there is no "per client" fee. The per-seat model aligns with how tax firms think about staffing costs.

### Onboarding Flow (Target: < 20 Minutes)

The product's "20-minute setup" claim must be verifiable in analytics. Every step in onboarding must be measured:

1. Account creation (email/password or Google SSO) — target < 2 min
2. Firm branding setup: logo upload, firm name, brand color — target < 5 min
3. First document checklist template selection/customization — target < 5 min (pre-filled templates make this nearly zero-effort)
4. First client record creation — target < 2 min
5. First portal invite sent — target < 1 min
6. **Total: < 15 minutes to first invite. < 20 minutes to first client upload confirmed.**

Progress indicators, in-app tooltips, and a "getting started" checklist must guide new preparers through all 5 steps without external documentation. The product must be operable on a mobile phone.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product must solve the complete core workflow end-to-end (document request → upload → reminder → e-sign → status → delivery) for solo preparers. A partial solution is not viable because preparers will not maintain two systems simultaneously. The MVP is feature-complete for the core workflow even if not feature-complete for integrations, AI, or enterprise capabilities.

**Resource Requirements:** 1–2 full-stack engineers, 1 part-time designer, 1 product owner. 6–8 weeks of focused development for MVP feature set.

**Critical launch dependency:** The AppSumo partnership application process takes 90–120 days. Application must be submitted by July 2026 to hit an October 2026 launch date.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo preparer setup and first season workflow (Sarah journey)
- Client document upload via magic link (James journey)
- Compliance-motivated solo preparer onboarding (Linda journey)
- Partial support for small team workflow (Marcus journey — basic multi-seat, full RBAC in Phase 2)

**Must-Have Capabilities:**
- Branded subdomain portal with logo, name, and brand color
- 4 pre-built document checklist templates (Standard 1040, Self-Employed 1040, Rental, S-Corp/Partnership)
- Per-client checklist customization
- Magic link client access (no account creation required for upload)
- Automated SMS + email reminders with configurable cadence and auto-stop
- Multi-signer Form 8879 e-signature with audit trail and KBA option
- Multi-signer engagement letter e-signature
- Preparation status pipeline (4 stages, client-visible)
- Secure return delivery with delivery acknowledgment
- Preparer dashboard with urgency sorting and bulk reminder send
- Team accounts: up to 5 preparer seats, admin role, read-only role
- FTC Safeguards compliance documentation and downloadable DPA
- Configurable data retention policy
- 14-day free trial, LTD and SaaS billing flows

### Post-MVP Features (Phase 2 — May 2027)

- AI document auto-classification (W-2, 1099-INT/DIV/B/R, K-1 identification from PDF upload)
- Unified client messaging inbox (SMS, email, portal messages in one thread)
- Drake Tax file-watching integration
- Seasonal appointment scheduler with buffer times and tax workflow sequence
- Advanced RBAC with granular permission controls
- Custom domain (CNAME/white-label) as premium tier feature
- CSV bulk client import (basic version may be in MVP if bandwidth allows)

### Post-MVP Features (Phase 3 — Year 2)

- SOC 2 Type II certification
- Enterprise white-label tier (custom domain, custom email sender, remove product branding)
- Lacerte/ProConnect API integration
- AI document completeness check ("Based on last year's return, you may be missing a 1099-DIV")
- Canadian market expansion
- Payroll professional adjacent market

### Risk Mitigation Strategy

**Technical Risks:**
- KBA implementation complexity: Use a third-party KBA provider (Persona, Vouched, or similar) via API rather than building KBA in-house. Reduces time-to-market and compliance risk.
- Multi-signer e-sign flow: Build as the core signing flow from day one, not retrofitted. Retrofitting single-signer to multi-signer post-launch is significantly harder than building multi-signer first.
- Seasonal traffic spikes: Design for 10x concurrent upload traffic in January–April versus off-season baseline. Use cloud-native auto-scaling from day one.

**Market Risks:**
- TaxDome launches solo lite tier: Multi-signer e-signature and community moat (r/taxpros advocacy) must be established before TaxDome reacts. Move fast on AppSumo launch timing.
- AppSumo partnership not approved in time: Parallel path — build email waitlist from "TaxDome alternative" SEO traffic for direct launch if AppSumo delays.
- LTD unsustainable unit economics: LTD tier caps at 100 active clients per year; upsell to annual SaaS for unlimited usage. Clearly documented in LTD terms.

**Resource Risks:**
- If < 2 engineers available: Reduce Phase 1 to single-preparer only (no team seats) and ship to solo ICP first. Team features are Phase 1.5.
- If launch delayed past October: January 2027 filing season still benefits from a November/December launch for preparers setting up in advance. Do not rush quality for the timing.

---

## Functional Requirements

### Portal Branding & Setup

- FR1: Firm admin can upload a firm logo (PNG/JPG/SVG) to be displayed on the client-facing portal.
- FR2: Firm admin can configure a firm name that appears on the client-facing portal and outbound communications.
- FR3: Firm admin can set a brand color (hex input) applied to the portal header and primary action buttons.
- FR4: The system assigns each firm a unique subdomain (`firmname.taxportal.app`) during account setup.
- FR5: Firm admin can preview the client-facing portal with current branding before sending any invites.
- FR6: The system provides a guided onboarding checklist (logo → firm name → first template → first client → first invite) trackable to < 20 minutes median completion.

### Document Request & Checklist Management

- FR7: Firm admin can create document checklist templates from pre-built tax categories (Standard 1040, Self-Employed 1040, Rental/Schedule E, S-Corp/Partnership/K-1).
- FR8: Preparer can customize a document checklist for an individual client by adding or removing line items from a template.
- FR9: Clients can view their assigned document checklist with per-item upload status (Not Uploaded, Uploaded, Accepted).
- FR10: Clients can upload documents (PDF, JPG, PNG; up to 25MB per file) against individual checklist items via magic link without creating an account.
- FR11: Clients can upload multiple files for a single checklist item (e.g., multiple 1099 pages).
- FR12: Preparers can download any uploaded client document from within the dashboard.
- FR13: Preparers can mark individual checklist items as "Accepted" or request a re-upload with a comment.
- FR14: The system shows preparers a "Document Completeness" percentage per client (0–100% based on checklist items uploaded).

### Automated Notifications & Reminders

- FR15: Preparers can configure a firm-wide default reminder schedule (e.g., immediate invite, +3 days, +7 days, +14 days) for clients with incomplete document uploads.
- FR16: The system automatically sends reminder emails and SMS messages on the configured schedule until all checklist items are uploaded.
- FR17: Reminder sending automatically stops when a client completes all checklist items.
- FR18: Preparers can suppress or manually override reminders for individual clients.
- FR19: Preparers can send an ad hoc reminder to individual clients or bulk-send to all "Pending Documents" clients from the dashboard.
- FR20: Clients can opt out of SMS reminders without opting out of email reminders.

### E-Signature Workflow

- FR21: Preparers can initiate an e-signature request for Form 8879 from a client record, pre-populated with client name and tax year.
- FR22: Form 8879 e-signature supports two independent signers: primary taxpayer and spouse/secondary (each receives separate signing invitation).
- FR23: Preparers can initiate an e-signature request for an engagement letter, supporting the same two-signer flow as Form 8879.
- FR24: Preparers can upload a custom PDF (e.g., firm-specific engagement letter) as the document to be signed, with signature and date fields placed via drag-and-drop.
- FR25: The system collects a KBA identity challenge (optional, toggled per signing event) before allowing a signer to sign, for IRS-compliant remote 8879 signing.
- FR26: Each signed document is accompanied by a complete audit trail: signer name, date/time (UTC), IP address, device type, KBA result (if used), and document hash.
- FR27: Signers can sign documents on mobile browsers (iOS Safari, Android Chrome) without installing an app.
- FR28: Completed signed documents are automatically stored in the client record with audit trail PDF appended.
- FR29: Preparers receive a notification when all required signers have completed signing.

### Preparation Status Tracking

- FR30: Preparers can set a client's preparation status to one of: Documents Received, In Preparation, Client Review Needed, Filed.
- FR31: Clients can view their return's current preparation status on the portal without creating an account (via magic link or dedicated status URL).
- FR32: The system optionally sends clients an SMS and/or email notification when their status advances to a new stage (configurable per firm).
- FR33: The preparer dashboard displays all clients sorted by urgency: clients in "Documents Received" or "Client Review Needed" with approaching filing deadlines appear first.

### Secure Return Delivery

- FR34: Preparers can upload a completed return PDF to a client record and mark it as "Ready for Delivery."
- FR35: Clients receive an SMS and email notification when their return is ready, with a secure link to download it from the portal (not as an email attachment).
- FR36: Clients must acknowledge receipt of their return by clicking a confirmation button on the portal; this acknowledgment is recorded with timestamp.
- FR37: The system logs all return download events (client name, timestamp, IP address) for compliance records.
- FR38: Preparers can see which clients have downloaded and acknowledged their completed returns.

### Preparer Dashboard & Workflow Management

- FR39: Preparers see a unified dashboard listing all their assigned clients with document completeness %, preparation status, and last activity date.
- FR40: Preparers can filter the dashboard by status (Pending Documents, In Progress, Client Review Needed, Filed, All).
- FR41: Firm admins can see a dashboard covering all clients across all preparers with a preparer filter.
- FR42: Preparers can create a new client record with: name, email, phone, tax year, assigned checklist template.
- FR43: Preparers can assign a client record to a specific preparer (admin-only action).
- FR44: The system supports CSV import of client records (name, email, phone) to allow bulk client setup at onboarding.
- FR45: Firm admins can manage preparer accounts: invite, remove, and assign roles (admin, preparer, read-only).

### Compliance & Security Management

- FR46: Firm admins can view and download the platform's Data Processing Agreement (DPA) from account settings.
- FR47: The system displays an in-app FTC Safeguards Rule compliance statement, citing AES-256 at-rest encryption and TLS 1.3 in-transit encryption.
- FR48: Firm admins can configure a data retention policy (document retention period in months) that governs when uploaded documents are automatically flagged for deletion.
- FR49: Firm admins can initiate a full account deletion request, with a 30-day grace period before permanent data deletion.
- FR50: All preparer logins require multi-factor authentication (TOTP app or email OTP).
- FR51: The system generates and stores a tamper-evident hash for each signed document at the moment of signing.

---

## Non-Functional Requirements

### Performance

- Client portal page load time (initial load, cold cache): < 3 seconds on a 4G mobile connection. Client-facing pages are on the critical path — upload friction causes abandonment.
- Document upload completion (25MB file): < 30 seconds on a 10 Mbps connection.
- Preparer dashboard load (up to 500 client records): < 2 seconds.
- E-signature completion end-to-end (from link tap to signed confirmation): < 60 seconds on mobile, excluding KBA identity challenge time.
- API response time for all CRUD operations: P95 < 500ms under normal load.

### Security

- All client documents encrypted at rest using AES-256; encryption keys managed via cloud KMS (not application-layer).
- All data in transit encrypted using TLS 1.3; HTTP connections redirect to HTTPS; HSTS enforced.
- Preparer authentication requires MFA (TOTP or email OTP); cannot be disabled by firm admin.
- Magic links for client access expire after 72 hours from issuance; links for sensitive actions (e-signature, return download) expire after 24 hours.
- Signed document audit trails stored as append-only records; deletion not possible even by firm admins.
- Access logs (who accessed which document, when) retained for minimum 3 years; immutable.
- Regular third-party penetration test (annual minimum) before SOC 2 Type II pursuit; results remediated before launch if conducted pre-launch.
- No client PII stored beyond what is necessary for workflow (name, email, phone, uploaded documents). No SSN storage in the portal.
- KBA identity data (if used) processed via third-party KBA provider API; no KBA challenge responses stored in the portal's own database.

### Scalability

- Tax season (January–April) generates 5–10x the traffic of off-season months. Architecture must support this without configuration changes.
- Target: 10,000 active preparers × average 100 clients each = 1,000,000 client portal sessions in January at peak. Stateless application layer + auto-scaling handles this natively.
- File storage: object storage (S3 or equivalent) scales horizontally without capacity planning. No on-premise storage.
- Database: connection pooling and read replicas for dashboard queries under load. Write operations (document uploads, status updates) remain on primary.
- No hard cap on number of clients per firm. LTD fair-use policy (100 active clients per year) is a billing control, not a technical limit.

### Reliability

- Document storage availability: 99.9%+ (single 9 is not acceptable for tax documents with regulatory retention requirements). Use multi-region redundant object storage.
- Application availability: 99.5%+ monthly uptime SLA (acceptable for SaaS at this price point; upgrade to 99.9% when revenue supports it).
- Document delivery success rate: > 99.9% of uploaded documents must be retrievable by the preparer at any point during the retention period. No silent data loss.
- Scheduled reminders: delivery within 15-minute window of configured schedule time; failures retried up to 3 times with exponential backoff.
- All scheduled background jobs (reminders, status notifications) monitored with alerting on failure rate > 1%.

### Accessibility

- Client-facing portal must be operable on iOS (Safari) and Android (Chrome) without app installation.
- Client upload flow must support both camera capture (photo of physical document) and file picker (PDF/image from files app) on mobile.
- Core preparer dashboard must function on a laptop/desktop browser (Chrome, Firefox, Safari, Edge — latest 2 versions).
- WCAG 2.1 AA compliance for the client-facing portal (clients include elderly taxpayers who may use screen readers or assistive technology). Minimum: sufficient color contrast, keyboard navigability for e-signature flow, descriptive alt text on non-decorative images.
- All outbound emails must have a plain-text fallback version for email clients that do not render HTML.

### Integration

- Phase 1 (MVP): No external integrations required. The portal is standalone.
- Phase 2: Drake Tax file-watching integration must be opt-in and must not require Drake credentials stored in the portal. Architecture must reserve an integration webhook/event system without building it in Phase 1.
- Outbound email delivery must use a transactional email provider (SendGrid, Postmark, or equivalent) — not the platform's own SMTP. Deliverability is product-critical (clients must receive portal invites reliably).
- Outbound SMS must use a programmable SMS provider (Twilio or equivalent). 10DLC registration required for US A2P SMS compliance before launch.
- Authentication: support email/password + Google OAuth 2.0 for preparer accounts. Magic link for client access.

---

*Product Requirements Document for: Tax Professional Client Portal & Document Collection*
*Completion Date: 2026-04-25*
*Author: Root*
*Status: Complete — ready for architecture phase*
*Next Step: create-architecture workflow*
