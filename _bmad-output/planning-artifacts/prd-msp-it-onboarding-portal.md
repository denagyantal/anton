---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/msp-it-onboarding-portal.md
  - _bmad-output/planning-artifacts/market-research-msp-it-onboarding-portal.md
  - _bmad-output/planning-artifacts/brief-msp-it-onboarding-portal.md
workflowType: prd
project_name: msp-it-onboarding-portal
user_name: Root
date: 2026-06-13
classification:
  projectType: saas_b2b
  domain: msp_it_services
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — MSP IT Client Onboarding Portal

**Author:** Root
**Date:** 2026-06-13
**Version:** 1.0

---

## Executive Summary

Managed Service Providers lose 40–80 hours of unbillable engineer time per new client to a broken onboarding intake process: credentials shared by email, asset inventories cobbled together in spreadsheets, network diagrams never collected, and no consistent intake workflow across technicians. At $150/hr loaded engineer cost, that is $6,000–$12,000 absorbed per client — before a single managed service is delivered.

The **MSP IT Client Onboarding Portal** replaces this email chaos with a purpose-built, branded client-facing intake portal. The client receives a magic link, walks through MSP-specific sections (Active Directory credentials, firewall configuration, network diagram upload, UPS inventory, vendor contracts, security policy acknowledgments), and submits securely. The MSP receives real-time completion tracking, auto-reminders to drive client action, and an auto-generated PDF network summary on completion. PSA and IT documentation integrations eliminate re-keying into ConnectWise, Autotask, IT Glue, and Hudu.

**Target:** 40,000–45,000 US MSPs; initial focus on 15,000–20,000 solo and micro MSPs (1–5 employees).
**Model:** Lifetime Deal launch at $79–$99 on AppSumo, transitioning to $49–$99/month SaaS with integration upsells.
**12-month SOM:** 500–1,500 customers → $474K–$1.4M ARR.

### What Makes This Special

No purpose-built MSP client onboarding intake tool existed prior to March 2026. IT Glue and Hudu solve documentation after data is collected — they do not own the intake layer. Content Snare validates the guided document collection model at $1M+ ARR but carries no MSP-specific templates, no credential security UX, and no PSA integration. OnboardMap (launched March 2026) targets a broad multi-vertical audience with shallow MSP template depth and no IT Glue/Hudu sync.

The differentiation is specific and defensible: **MSP-native template library + credential security UX designed for the context + PDF network summary output + community-first positioning in r/msp (242,000 members)**. This combination is not replicated by any current entrant. The 3–6 month window to establish category ownership before larger tools add dedicated MSP onboarding modules is the strategic constraint driving the MVP timeline.

## Project Classification

- **Project Type:** SaaS B2B — web application with client-facing magic link portal
- **Domain:** MSP IT Services (Managed Service Providers) — medium complexity
- **Project Context:** Greenfield — no existing codebase; new category creation
- **Complexity Rationale:** Medium — credential security requirements, multi-tenant MSP accounts, PDF generation, and PSA integration surface area elevate complexity beyond simple form-collection tools, but the domain is not regulated (no HIPAA, PCI-DSS, SOC 2 required at MVP)

---

## Success Criteria

### User Success

An MSP user succeeds when onboarding intake that previously consumed 5–12 hours of engineer follow-up time is replaced by a single link send. Specific user success conditions:

- MSP can create a complete, branded onboarding project and send the client magic link in under 15 minutes from account creation
- Client completes all required intake sections without a single follow-up call or email from the MSP
- MSP receives a complete, formatted PDF network summary they can hand off directly to IT Glue/Hudu without manual reformatting
- Credentials are collected without ever appearing in an email thread, and the MSP can access them securely from the dashboard with an explicit reveal action
- Repeat usage: the portal becomes the standardized intake process for every new client — not a one-off tool

The "aha! moment" occurs when the MSP downloads the auto-generated PDF after their first completed onboarding and realizes it replaces 2 hours of manual documentation assembly. This moment drives word-of-mouth in r/msp and MSPGeek.

### Business Success

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Free users | 100 | Month 3 |
| AppSumo LTD buyers | 500+ at $79–$99 | Month 5–6 |
| G2/Capterra reviews | 20+ at 4.5+ average | Month 6 |
| MRR (SaaS subscribers) | $10,000 | Month 12 |
| r/msp community credibility | Launch post 100+ upvotes | Month 3–4 |
| ConnectWise Marketplace listing | Listed | Month 9–12 |
| Referral rate | >40% of new signups from peer referral | Ongoing |

### Technical Success

- Zero credential vault security incidents during beta and post-launch
- System uptime ≥ 99.5% monthly (downtime directly blocks client intake and damages MSP trust)
- PDF generation completes within 30 seconds of client submission
- All credential fields are AES-256 encrypted at rest; credentials never appear in application logs
- Magic links expire after 30 days or on submission, whichever comes first, preventing stale access

### Measurable Outcomes

| Outcome | Baseline (Industry Median) | Target |
|---------|---------------------------|--------|
| Intake completion rate | 41% without follow-up | >70% via auto-reminders |
| Time-to-complete (days) | 12.3 days median | <3 days |
| MSP setup time | N/A (no current tool) | <15 minutes |
| PDF utilization | N/A | >80% of completions |
| Free-to-paid conversion | — | >20% within 30 days |
| Repeat portal usage | — | >60% of paying users create 3+ portals in 60 days |
| NPS | — | >50 at 30-day mark for paid users |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must complete the full onboarding loop — from MSP project creation to client submission to MSP review and PDF download — in a form that demonstrates all three core value claims: time saved, security improved, and professional client experience delivered.

**Core MVP Capabilities:**

1. **MSP Account & Project Setup** — Email/password account creation; create named onboarding projects with client name and logo; select applicable template sections; generate unique magic link per project
2. **MSP-Specific Template Library** — Pre-built intake sections: Network Overview, Active Directory / Identity, Firewall Configuration, Key Vendors & Contracts, UPS / Power Infrastructure, Security Policies, Network Diagram Upload, Device Inventory
3. **Client-Facing Intake Portal** — Magic link access (no client account required); step-by-step section navigation with progress indicator; responsive (mobile-friendly); file upload (PDF, PNG, JPEG, DOCX, XLSX, Visio); section-level save; submit confirmation screen
4. **Secure Credential Collection** — AES-256 encryption at rest; TLS 1.3 in transit; masked credential fields with reveal-on-click; credentials excluded from application logs; client-facing security messaging
5. **Auto-Reminders** — Configurable email reminders (default: 24h, 72h, 7-day) for incomplete portals; MSP-branded reminder emails; MSP can disable or customize per project
6. **MSP Completion Dashboard** — Project list with status (Sent / In Progress / Complete); real-time section completion percentage; email notification to MSP on full submission; read-only structured data view
7. **PDF Network Summary Generation** — Auto-generated "IT Environment Overview" PDF on client submission; includes all completed sections with formatted field/value layout; MSP logo in header; downloadable from dashboard; emailed to MSP on completion
8. **Free Tier** — 3 active onboarding projects/month; standard templates; MSP logo on portal; full credential vault and PDF access (core value demonstration not paywalled)
9. **Paid Tier (LTD at $79)** — Unlimited active onboarding projects; custom branding; all templates; priority support

### Growth Features (Post-MVP)

Targeted for Months 2–6 post-launch:

- **PSA Integrations** (ConnectWise, Autotask) — Push completed intake data directly to PSA tickets; eliminate re-keying; ConnectWise Marketplace listing
- **IT Documentation Sync** (IT Glue, Hudu) — Map intake fields to documentation page templates; auto-populate knowledge base on intake completion
- **White-label Custom Domain** — MSPs serve the portal from their own subdomain (e.g., onboarding.techco.com)
- **Multi-user MSP Accounts** — Role-based permissions (technician vs. admin); team-wide shared dashboard
- **Custom Template Builder** — Drag-and-drop form creator for MSP-specific sections beyond pre-built library
- **Password Manager Export** — Export credential vault contents to 1Password, Bitwarden, or N-able Passportal

### Vision (Future — Year 2+)

- **Horizontal Expansion** — Accounting firms, law firms, creative agencies (same document collection pain profile)
- **AI-Assisted Intake** — Auto-populate fields from RMM scan data; suggest missing items based on client profile
- **Network Discovery Integration** — Auto-populate device inventory from NinjaOne or ConnectWise Automate scans
- **Cyber Insurance Integration** — Completed onboarding data feeds directly into cyber insurance questionnaires
- **Compliance Template Library** — HIPAA, CMMC, SOC 2 baseline intake sections for regulated industry clients
- **Ongoing Change Events** — Re-engagement portal for major infrastructure changes, acquisitions, or security incidents beyond initial onboarding

---

## User Journeys

### Journey 1: Marcus — The Overwhelmed Solo MSP Owner (Primary User, Happy Path)

Marcus runs a 3-person MSP in the midwest managing 35 SMB clients. He closes a new client every 3–4 weeks. Every onboarding is a nightmare of email threads, follow-up calls, and credentials in "[CLIENT NAME] PASSWORDS" email subjects.

**Opening Scene:** Marcus sees an r/msp post: "Finally solved the credential email chaos — built a purpose-built MSP intake portal, magic link, credential vault, auto-reminders, PDF summary." He recognizes his exact pain in the first sentence and clicks through.

**First Session:** Marcus signs up for the free tier. He selects the pre-built "Standard MSP Onboarding" template, uploads his logo, and copies the client's email address into the portal. Total time: 8 minutes. He sends the magic link to a new client he is currently onboarding.

**The Wait:** Instead of composing follow-up emails every 2 days, Marcus receives one automated reminder notification — the system sent the client a 24-hour reminder while Marcus was on a service call. He checks the dashboard and sees the client is 60% complete.

**Completion:** 26 hours after sending the link, Marcus receives a completion notification. He opens the dashboard, sees all sections filled. He clicks "Download PDF" and receives a formatted "IT Environment Overview" document that includes the client's AD domain info, firewall make/model, ISP account details, and UPS configuration — formatted exactly as he would send to IT Glue.

**Aha! Moment:** Marcus realizes this PDF replaces the 2-hour documentation assembly session he usually does after piecing together info from 6 different emails. He has reclaimed that time for a billable call.

**Advocacy:** Marcus upgrades to the LTD ($79) after his second successful onboarding. He posts on r/msp. The post gets 240+ upvotes. 60 new signups come from that post alone.

**Journey Requirements Revealed:** Account creation flow, template selection, magic link generation and delivery, auto-reminder email system, real-time dashboard with section-level completion tracking, email notification on completion, PDF generation and download.

---

### Journey 2: Marcus — Edge Case (Incomplete Client Submission)

Marcus sends a portal to a particularly unresponsive client — an office manager at a 40-person law firm who "doesn't do IT stuff." The client opens the link, fills out 3 of 8 sections, and abandons it for a week.

**Rising Tension:** Marcus checks the dashboard after 3 days and sees the client is stuck at 37% completion. The portal shows exactly which sections are incomplete: Firewall Configuration, UPS Inventory, and Network Diagram Upload.

**Recovery:** Marcus clicks "View Portal as Client" to see exactly what the client sees. He realizes the "Firewall Configuration" section asks for credentials the client genuinely doesn't have — those credentials are held by the previous MSP who hasn't responded to offboarding requests. Marcus edits the project to mark the Firewall Configuration section as optional with a note explaining the client can submit the form without it and the MSP will follow up.

**Resolution:** The client receives the next auto-reminder (72h), sees the section is now marked optional, completes the remaining sections, and submits. Marcus gets a partial PDF with a clear notation that firewall credentials are pending.

**Journey Requirements Revealed:** Section-level status visibility in dashboard, optional vs. required section configuration, MSP ability to edit project after send, "view as client" preview mode, partial PDF generation with pending-item notation, ability to add custom notes per section.

---

### Journey 3: Sarah — Small MSP Service Manager (Admin/Operations User)

Sarah is Service Manager at a 15-person MSP. They onboard 4–6 clients per month. Four technicians each "do onboarding their own way." Her owner has asked her to standardize the process after a new client complained about the intake being disorganized.

**Discovery:** Her owner forwards a link after seeing it in MSPGeek Slack. Sarah evaluates the template library and immediately finds the MSP-specific sections compelling — she recognizes the AD credentials, firewall config, and UPS sections as exactly what her technicians collect inconsistently.

**Setup:** Sarah creates a team account, invites her 4 technicians as users, and sets the standard MSP template as the default for all new projects. She configures the reminder schedule to match their SLA commitments (24h, 48h, 72h). She connects the account to ConnectWise — completed intake data will auto-populate the new client ticket.

**Process Change:** All 4 technicians now send portals from the shared dashboard. Sarah can see all active onboardings across the team in a single view. She monitors average completion times across technicians and sees one technician has a 67% completion rate vs. 82% for others — she investigates and finds his portal instructions are confusing clients.

**Long-term:** Sarah presents an ROI calculation at the quarterly review: "4 hrs/client × 5 clients/month × $100/hr tech time = $2,000/month in recoverable time. Tool cost: $99/month." The owner approves upgrading to the annual SaaS plan.

**Journey Requirements Revealed:** Multi-user MSP account with role permissions, team-wide shared project dashboard, per-technician analytics, default template configuration, PSA integration (ConnectWise), technician invitation flow, aggregate reporting/metrics view.

---

### Journey 4: Client-Side Intake Experience (End-User of the Portal)

Rebecca is the Office Manager at a 30-person accounting firm being onboarded by Marcus's MSP. She is not technical. She receives an email with the subject "IT Onboarding — [MSP Name]" containing a link and a brief note from Marcus.

**Opening:** Rebecca opens the link on her phone while commuting. The portal loads with Marcus's MSP logo, a welcome message, and a progress bar showing "Step 1 of 7." The first section is "Network Overview" — it asks for ISP name and account number, which Rebecca knows.

**Mid-Journey:** Rebecca reaches "Active Directory / Identity." She doesn't know what Active Directory is. The section has a tooltip: "This is the system your company uses to manage employee logins. If you have an IT person or the company your IT team used before, they will have this information." Rebecca notes she doesn't know this and saves her progress. She finds the info from a filing cabinet with the previous IT vendor's documentation and returns the next morning.

**Completion:** Rebecca submits after completing 6 of 7 sections. The Firewall Configuration section was marked optional by Marcus because he knows the previous vendor holds those credentials. She sees a confirmation screen summarizing what she submitted, with a thank-you message from the MSP.

**Journey Requirements Revealed:** Mobile-responsive portal, jargon-free field labels with optional tooltips/help text, section-level save and resume (session or link-persistent), optional section handling, submit confirmation screen with summary, clear progress indicator, no client account creation required.

---

### Journey 5: Derek — Process-Driven Mid-Market MSP Director (Compliance-Focused User)

Derek is Director of Operations at a 60-person PE-backed MSP working toward SOC 2 compliance. Their compliance auditors have flagged credential collection via email as a risk item.

**Problem:** Derek's team uses SharePoint forms that are inconsistently completed. IT Glue ingestion is entirely manual re-keying. Auditors want documented evidence of how credentials are collected and who can access them.

**Evaluation:** Derek evaluates the portal against SOC 2 requirements. He confirms AES-256 at rest and TLS in transit. He checks the audit trail feature — every credential access event (reveal-on-click) is logged with timestamp and user identity. He confirms credentials never appear in logs. This satisfies his compliance auditor's specific concern.

**Deployment:** Derek deploys the portal to his 12 service coordinators. He requires IT Glue sync so every completed intake auto-populates IT Glue documentation pages. He generates a quarterly audit report showing 100% of new client onboardings used the portal (vs. email) during the audit period.

**Journey Requirements Revealed:** Credential access audit log (who viewed which credential, when), exportable audit trail for compliance reporting, IT Glue sync (post-MVP), admin-level analytics across all team portals, compliance-oriented dashboard view showing intake method tracking.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|-----------------|-------------|
| Account & project creation | Marcus, Sarah |
| Template library & section configuration | Marcus, Sarah, Derek |
| Magic link generation & delivery | Marcus, Rebecca |
| Client-facing intake UX (mobile, save-resume, tooltips) | Rebecca |
| Auto-reminder email system | Marcus (edge case), Rebecca |
| Real-time dashboard with section-level tracking | Marcus, Sarah |
| Multi-user team accounts with permissions | Sarah |
| PSA integration (ConnectWise) | Sarah |
| IT documentation sync (IT Glue) | Derek |
| Credential vault with reveal-on-click | Marcus, Derek |
| Credential access audit log | Derek |
| PDF generation and download | Marcus |
| Optional/required section configuration | Marcus (edge case) |
| View-as-client preview | Marcus (edge case) |
| Partial submission handling | Marcus (edge case) |
| Aggregate analytics & reporting | Sarah, Derek |
| Compliance export / audit trail | Derek |

---

## Domain-Specific Requirements

### MSP Security Context

MSP onboarding portals handle the most sensitive class of business credentials: domain admin credentials, firewall admin credentials, and cloud account root access. These credentials represent complete administrative control over the client's IT infrastructure. A breach of the credential vault would expose MSPs to catastrophic liability and reputational damage in a community (r/msp) that spreads information rapidly.

**Compliance & Regulatory Context:**
- No specific US regulation mandates a particular onboarding method for MSPs at MVP stage
- Cyber insurance underwriters increasingly ask "how do you collect and store client credentials?" — email is not a defensible answer; AES-256 vault is
- MSPs pursuing SOC 2 certification (growing PE-backed segment) need documented, auditable credential intake process
- CMMC compliance for MSPs serving government contractors requires structured access credential management — an increasingly relevant buyer segment

**Security Requirements for Credential Handling:**
- Credentials must be AES-256 encrypted at rest using a per-credential or per-project encryption key derivation scheme
- Encryption keys must not be stored adjacent to encrypted data
- TLS 1.3 required for all data in transit
- Credential fields must never be written to application logs, error logs, or analytics events at any level of the stack
- Reveal-on-click must be logged: user ID, timestamp, credential field identifier — for audit trail
- Magic links must expire; suggested: 30 days or on first full submission, configurable per project
- No credential data should be included in webhook payloads, notification emails, or PDF output — PDFs contain structural/configuration data only, not live credentials

**Technical Constraints:**
- File uploads must be virus/malware scanned before storage (network diagrams, vendor contract PDFs may come from client environments)
- File uploads stored in encrypted cloud object storage; direct URL access requires signed temporary URLs
- Session tokens for client portal (magic link sessions) must be invalidated on submission
- Multi-tenant data isolation: MSP A must not be able to access MSP B's project data under any query path

**Integration Requirements (Post-MVP):**
- ConnectWise Manage API — create/update tickets with structured intake data mapped to custom fields
- IT Glue API — create/update flexible asset records from intake data
- Autotask PSA API — mirror of ConnectWise integration pattern
- Hudu API — mirror of IT Glue integration pattern

**Risk Mitigations:**
- Credential breach: key derivation, no adjacency of key and data, no credentials in logs, audit trail
- Data leakage via integrations: integration payloads must exclude raw credential values; only metadata (field names, completion status) flows to PSA
- Reputational risk in r/msp: proactive security documentation page explaining encryption approach; community-appropriate technical transparency

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each MSP account is a fully isolated tenant. Client onboarding data belongs to the MSP tenant, not to clients (clients have no account). Project data, credential vault contents, and PDF artifacts are all scoped to the MSP tenant.

**Data isolation requirements:**
- Row-level tenant isolation enforced at the data access layer (not just application layer)
- Tenant ID validated on every authenticated API request
- Cross-tenant queries forbidden at the ORM/query layer

### Permission Model

**MVP (single-user MSP accounts):**
- Account owner has full access to all projects, credentials, and billing
- Free tier limits: 3 active projects/month, standard templates

**Post-MVP (multi-user):**
- **Admin:** Full account access, team management, billing, all projects
- **Technician:** Create and manage own projects, view own dashboard; no access to other technicians' credential vaults without explicit project sharing
- **Read-only (future):** View dashboard and completed data; no credential reveal access

### Subscription & Billing Model

- **Free:** 3 active onboarding projects/month; MSP logo on portal; full credential vault and PDF access
- **LTD ($79 one-time):** Unlimited projects; custom branding; all templates; priority support
- **SaaS Monthly ($49–$99/month, post-AppSumo):** Tiered by active projects and integration access
- **Integration Upsells (post-MVP):** PSA and IT documentation integrations as add-on tier

### Email Infrastructure

Transactional emails (magic link delivery, client reminders, MSP completion notifications) must be delivered reliably. Domain-based sending (branded with MSP identity where possible) is a differentiator.

- Client-facing emails: from a configurable "reply-to" that routes to the MSP's email
- MSP logo displayed in client-facing reminder emails (MVP)
- Custom from-domain (MSP's own email domain) deferred to post-MVP white-label tier

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-Solving MVP — ship the minimum that proves the core value claim ("one link replaces 5 hours of follow-up") for the solo/micro MSP persona. Every feature in MVP must be essential to completing the onboarding loop with a real client.

**Build Timeline Target:** 4–6 weeks (validated against brief's assessment; credential vault and PDF generation are the complexity drivers).

**Resource Requirements:** 1 full-stack developer, 1 designer (part-time for portal UX), 1 devops/security reviewer for credential vault implementation.

**MVP Validation Gate:** Before AppSumo launch, run 10 real onboardings with beta MSPs recruited from r/msp. Measure: completion rate, setup time, PDF utility rating, NPS. Gate: completion rate >70%, setup time <15 min.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo MSP creates project → sends magic link → client completes → MSP downloads PDF
- Auto-reminders drive completion without MSP intervention
- MSP views all projects and statuses in dashboard

**Must-Have Capabilities:**
- Account creation (email + password)
- Onboarding project CRUD with template section selection
- Magic link generation per project
- 8 pre-built MSP-specific intake template sections
- Client portal with mobile-responsive step-by-step navigation
- Section-level save (client can return without losing progress)
- AES-256 credential vault with reveal-on-click and no-log enforcement
- Configurable auto-reminder email schedule (24h, 72h, 7d defaults)
- Real-time dashboard with per-project completion tracking
- MSP email notification on client completion
- PDF network summary generation on submission
- Free tier (3 projects/month) and paid LTD tier

**Explicitly Out of Scope for MVP:**
- PSA integrations (ConnectWise, Autotask)
- IT Glue / Hudu sync
- White-label custom domain
- Multi-user MSP team accounts
- Custom template builder
- API access
- SOC 2 / HIPAA certifications
- Zero-knowledge architecture (AES-256 at rest is industry-standard and sufficient)

### Post-MVP Features (Phase 2 — Months 2–6)

- ConnectWise and Autotask PSA integrations
- IT Glue and Hudu documentation sync
- Multi-user MSP accounts with role-based permissions
- Custom template builder
- White-label custom domain
- ConnectWise Marketplace listing
- 1Password / Bitwarden credential export

### Expansion (Phase 3 — Year 2+)

- Horizontal vertical expansion (accounting, legal, creative agencies)
- AI-assisted intake and auto-population from RMM scans
- Compliance template library (HIPAA, CMMC, SOC 2 intake sections)
- Cyber insurance questionnaire integration
- API access for custom integrations
- Reseller/white-label program for large MSPs

### Risk Mitigation Strategy

**Technical Risks:**
- Credential vault security implementation — risk: incorrect key management. Mitigation: use well-audited encryption library (e.g., libsodium or AWS KMS); security review before launch; no custom cryptography.
- PDF generation at scale — risk: slow generation blocks completion flow. Mitigation: async PDF generation with webhook notification; download link available within 30 seconds.

**Market Risks:**
- IT Glue or Hudu adds dedicated onboarding module — risk: incumbents move into niche. Mitigation: community-first launch establishes brand before incumbents can respond; integrations with IT Glue/Hudu turn potential threat into partnership.
- Simple clone risk — risk: competitors replicate once concept proven. Mitigation: MSP-native template depth, community trust, and integration ecosystem are hard to clone quickly.

**Resource Risks:**
- Build delay past 6 weeks — contingency: launch with 5 of 8 template sections; PDF generation as the non-negotiable; credential vault as the non-negotiable.
- Marketing before product validated — gate AppSumo launch on beta completion rate >70%.

---

## Functional Requirements

### Account & Identity Management

- FR1: MSP users can create an account using email and password
- FR2: MSP users can log in and maintain authenticated sessions
- FR3: MSP users can update their account profile (name, company name, logo)
- FR4: MSP users can reset their password via email-based verification
- FR5: MSP users can view and manage their subscription tier (free vs. paid)

### Onboarding Project Management

- FR6: MSP users can create a new onboarding project with client name and project name
- FR7: MSP users can select which template sections to include in a project (from the pre-built library)
- FR8: MSP users can mark individual sections as optional or required within a project
- FR9: MSP users can add custom instructions or notes to individual template sections
- FR10: MSP users can generate a unique magic link for each onboarding project
- FR11: MSP users can resend the magic link to the client contact via email from the dashboard
- FR12: MSP users can archive or delete onboarding projects
- FR13: MSP users can view all projects with status indicators (Not Sent / Sent / In Progress / Complete)
- FR14: MSP users can preview the client portal experience before sending (view-as-client mode)
- FR15: MSP users on the free tier can have a maximum of 3 active projects per month; paid users have unlimited projects

### MSP-Specific Template Library

- FR16: The system provides pre-built intake sections specific to MSP onboarding: Network Overview, Active Directory / Identity, Firewall Configuration, Key Vendors & Contracts, UPS / Power Infrastructure, Security Policies, Network Diagram Upload, Device Inventory
- FR17: MSP users can include or exclude any combination of pre-built sections per project
- FR18: Template sections contain MSP-appropriate field types: text, credential (masked), file upload, dropdown, checkbox acknowledgment
- FR19: Template sections include contextual help text for each field explaining what information is needed and why

### Client-Facing Intake Portal

- FR20: Clients can access the intake portal via magic link without creating an account
- FR21: Clients can navigate sections step-by-step with a visible progress indicator showing completion percentage
- FR22: Clients can save partial progress within a section and resume later using the same magic link
- FR23: Clients can upload files (PDF, PNG, JPEG, DOCX, XLSX, Visio) via drag-and-drop or file browser
- FR24: Clients can view a summary of all submitted data before final submission
- FR25: Clients receive a confirmation screen and confirmation email after successful submission
- FR26: Clients can access the portal on mobile devices with a responsive layout that does not require zooming or horizontal scrolling

### Credential Collection & Security

- FR27: MSP users can designate specific form fields as "credential fields" with encrypted storage and masked display
- FR28: Credential field values are never displayed in plain text in the client portal or MSP dashboard without an explicit reveal action
- FR29: MSP users can reveal individual credential field values via a click-to-reveal action
- FR30: Every credential reveal action is logged with user ID, project ID, field identifier, and timestamp
- FR31: Clients see security messaging explaining that their credentials are encrypted and not stored in plain text
- FR32: Credential values are excluded from all PDF outputs, notification emails, and integration payloads

### Auto-Reminders & Notifications

- FR33: The system sends automated email reminders to the client when the intake is incomplete, on a configurable schedule
- FR34: The default reminder schedule is 24 hours, 72 hours, and 7 days after the magic link is sent; MSP users can modify this schedule per project
- FR35: MSP users can disable auto-reminders for a specific project
- FR36: Reminder emails are branded with the MSP's logo and company name
- FR37: MSP users receive an email notification when a client completes the full intake submission
- FR38: MSP users receive an in-dashboard notification when section completion crosses 50% and 100% thresholds

### Completion Dashboard & Reporting

- FR39: MSP users can view all onboarding projects with real-time completion percentage per project
- FR40: MSP users can see a section-by-section breakdown of what a client has and has not completed within each project
- FR41: MSP users can view all submitted data in a structured read-only format from the dashboard
- FR42: MSP users can access the credential reveal action from within the submitted data view

### PDF Network Summary

- FR43: The system auto-generates a PDF "IT Environment Overview" document when a client submits a completed intake
- FR44: The PDF includes all completed sections with section headers, field labels, and submitted values (excluding credential fields)
- FR45: The PDF header includes the MSP's logo and the client name
- FR46: MSP users can download the PDF from the project dashboard
- FR47: The system emails the completed PDF to the MSP user on client submission
- FR48: The system generates a partial PDF (with pending-item notation) when a client submits with optional sections incomplete

### Magic Link & Access Control

- FR49: Magic links expire after 30 days or on first full submission, whichever occurs first
- FR50: MSP users can manually expire (revoke) a magic link from the dashboard
- FR51: MSP users can generate a replacement magic link after the original expires or is revoked

---

## Non-Functional Requirements

### Security

- All credential fields must be encrypted at rest using AES-256; encryption keys must not be stored in the same database row or table as encrypted data
- All data in transit must use TLS 1.3
- Credential field values must be excluded from all application logs, error logs, server access logs, and analytics event streams at every layer of the stack
- File uploads must be scanned for malware before being stored or made accessible
- Uploaded files must be stored in encrypted cloud object storage; access must require short-lived signed URLs; no public object URLs
- Multi-tenant data isolation must be enforced at the data access layer: every query scoped to authenticated tenant ID; cross-tenant data access is a critical failure condition
- Magic link tokens must be cryptographically random (≥128 bits entropy) and validated server-side on every request
- Credential reveal events must be logged and the audit log must be immutable (append-only; no delete capability)
- Session tokens for client portal sessions must be invalidated on submission and on link expiry

### Performance

- Client portal page load time: <2 seconds on a 4G mobile connection (portal is frequently accessed from client's phone)
- PDF generation: complete within 30 seconds of client submission; generation occurs asynchronously so the client submission flow is not blocked
- Dashboard project list: <1 second load time for up to 100 active projects
- File upload: support files up to 25 MB; progress indicator required for uploads >5 MB
- Reminder email delivery: within 15 minutes of scheduled send time

### Reliability

- System uptime target: ≥99.5% monthly (downtime blocks client intake and damages MSP-client relationship)
- Partial client data must be preserved on session interruption; a client who closes the browser mid-section should not lose completed field values when they return via the same magic link
- PDF generation failures must not block the MSP completion notification; if PDF generation fails, MSP is notified and generation is retried automatically

### Scalability

- System must support 1,000 concurrent client portal sessions without performance degradation (target for Month 6 post-AppSumo launch)
- System architecture must allow horizontal scaling of the application tier without architectural changes
- File storage and PDF generation must scale independently of the application tier

### Accessibility

- Client-facing portal must meet WCAG 2.1 AA standards; clients may be office managers or business owners who use assistive technology
- All form fields must have associated labels and ARIA attributes
- File upload drag-and-drop must have a keyboard-accessible alternative
- Error messages must be descriptive and reference the specific field causing the error

### Integration (Post-MVP NFRs — to inform architecture)

- PSA and IT documentation integrations must use OAuth 2.0 or API key authentication with tokens stored encrypted at rest
- Integration payloads must never include raw credential field values — only field names and completion metadata
- Integration failures must be surfaced in the MSP dashboard with actionable error messages; integration failures must not block core portal functionality
- Integration webhook delivery must be retried with exponential backoff on failure (up to 5 retries over 24 hours)

---

*PRD completed: 2026-06-13*
*Author: Root (automated BMAD PRD workflow)*
*Based on: MSP IT Client Onboarding Portal product brief + market research + shortlisted idea (Score: 81/105)*
*Next step: create-architecture — technical architecture decisions for MVP implementation*
