---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/msp-it-onboarding-portal.md
  - _bmad-output/planning-artifacts/market-research-msp-it-onboarding-portal.md
workflowType: product-brief
lastStep: 6
project_name: msp-it-onboarding-portal
user_name: Root
date: 2026-06-13
---

# Product Brief: MSP IT Client Onboarding Portal

---

## Executive Summary

Managed Service Providers lose 40–80 unbillable hours per new client to a broken onboarding process: credentials shared by email, asset inventories cobbled together in spreadsheets, network diagrams never collected, and no consistent intake process across technicians. At $150/hr, that's $6,000–$12,000 in absorbed cost per client — before a single managed service is delivered.

The **MSP IT Client Onboarding Portal** is a purpose-built, branded intake portal for MSPs that replaces the email chaos with a guided, secure, client-facing checklist experience. The client receives a magic link, walks through MSP-specific intake sections (AD credentials, firewall info, network diagram upload, UPS inventory, vendor contracts, security policy acknowledgments), and submits securely. The MSP gets an auto-generated PDF network summary and, optionally, a direct push to their PSA or IT documentation platform.

No purpose-built solution for this specific workflow existed before March 2026, when OnboardMap launched as a broad-audience entrant. The MSP-specific niche — with deep template libraries, credential security credibility, and PSA/IT Glue integration — remains unoccupied. The window to establish category ownership in this community-driven market is 3–6 months.

**Target:** 40,000–45,000 US MSPs; initial focus on 15,000–20,000 solo/micro MSPs (1–5 employees).
**Model:** LTD launch at $79–$99 on AppSumo, transitioning to $49–$99/month SaaS with integration upsells.
**12-month SOM:** 500–1,500 customers → $474K–$1.4M ARR.

---

## Core Vision

### Problem Statement

MSPs onboard new clients through a fundamentally broken process. Every new client relationship begins with the same operational chaos:

- Firewall credentials emailed in plaintext
- AD domain admin passwords shared via unencrypted thread
- Asset inventories assembled from scattered Post-its, follow-up calls, and spreadsheet drafts
- Network diagrams never uploaded — or uploaded once to a chat thread and lost
- Technicians follow different intake steps, so each onboarding is a unique scramble

The result: **40–80 hours of unbillable engineer time per new client**, 3–7 follow-up contacts to get clients to complete intake, and an ongoing security liability (35.5% of breaches attributed to third-party access — often tracing back to poorly-managed credential intake).

This is not a documentation problem. IT Glue and Hudu solve documentation — what data to store once it's collected. This is an **intake problem**: getting structured, secure, complete data from the client in the first place. No tool owns this layer.

### Problem Impact

**Operational impact:**
- 40–80 hrs/client × 2–5 new clients/month = 80–400 hrs/month of absorbed onboarding overhead for a typical small MSP
- At $150/hr engineer cost = $12,000–$60,000/month in unrealized billable time
- Average client intake completion: 12.3 days (middle 60% of MSPs) vs. 4.8 days for top performers with structured portals
- First-90-day client churn correlates strongly with onboarding quality: 14.8% churn for middle-60% MSPs vs. 5.2% for top performers

**Security impact:**
- Emailing credentials creates an unencrypted audit trail in the client's and MSP's email
- No credential intake structure means items are routinely missed — discovered weeks into the engagement
- Cyber insurance questionnaires increasingly ask "how do you collect and store client credentials?" — email is not a defensible answer

**Competitive impact for MSPs:**
- MSPs with structured onboarding close deals faster and retain clients longer
- Branded client portal creates professional first impression vs. "email us your passwords"
- Documented intake process is required for PE-acquired MSPs to pass compliance audits

### Why Existing Solutions Fall Short

| Solution | Why It Doesn't Solve Onboarding Intake |
|----------|---------------------------------------|
| **IT Glue** ($145/mo min, 5-user) | Internal technician documentation tool — no client-facing intake; stores data after collection, doesn't collect it |
| **Hudu** ($27/user/mo) | Same as IT Glue — internal documentation; no client-facing workflow |
| **Content Snare** ($35–$119/mo) | Generic document collection for accountants/agencies; no MSP templates, no credential security UX, no network asset forms, no PSA integration |
| **OnboardMap** (launched March 2026) | Broad-audience portal (MSPs + accountants + agencies + law firms); shallow MSP template depth; no IT Glue/Hudu sync; no network asset PDF output; low community trust in r/msp |
| **N-able Passportal** ($27/license) | Credential storage and PAM — not a guided client intake portal |
| **Email + Google Sheets** | Current baseline: insecure, inconsistent, no reminders, no completion tracking |

The gap is specific: **a client-facing intake portal designed from the ground up for MSP workflows**, with the credential security UX, template depth, and PSA integration that MSPs actually need.

### Proposed Solution

A branded, MSP-specific client onboarding portal delivered as a SaaS product:

1. **MSP creates an onboarding project** — selects which template sections apply (network, credentials, vendors, security, assets), customizes with their logo and colors
2. **Client receives a magic link** — no account creation required; opens on any device; guided step-by-step through intake sections
3. **Auto-reminders** drive completion without MSP follow-up chasing — configurable email reminders at 24h, 48h, and 7-day intervals
4. **Secure credential collection** — AES-256 encryption at rest, TLS in transit; credentials never appear in logs; clear security messaging to the client
5. **Completion dashboard** — MSP sees real-time progress; notified when all sections complete
6. **PDF network summary** — auto-generated on completion; formatted as a professional "IT Environment Overview" document for internal documentation handoff
7. **PSA/documentation sync** — ConnectWise, Autotask, IT Glue, Hudu integrations push completed intake data into existing platforms, eliminating re-keying

### Key Differentiators

**1. MSP-native template library**
Pre-built, community-validated intake sections that speak the MSP's language: AD credentials, firewall configurations, UPS inventory, ISP account info, vendor contracts, security policy acknowledgments, network diagram upload, device inventory. Generic tools require MSPs to build these from scratch; this ships them ready-to-use.

**2. Credential security UX built for the context**
Not just "file upload with encryption" — a purpose-designed credential collection experience with clear client-facing security messaging, zero-knowledge credential vault consideration, and MSP-appropriate audit trails. This is the differentiator that justifies adoption in a security-conscious community.

**3. PDF network summary output**
Completing the intake automatically generates a formatted "IT Environment Overview" PDF — the document MSPs need for internal handoff to their documentation platform. No other intake tool produces this artifact.

**4. PSA/IT documentation integration**
IT Glue and Hudu integrations turn the portal into a feeder for existing platforms — removing the adoption barrier for MSPs already invested in documentation tools. ConnectWise/Autotask integrations push completed onboarding directly to PSA tickets.

**5. Community-first, MSP-authentic positioning**
r/msp (242,000 members) is where MSPs discover and validate tools. This product is designed to earn authentic peer endorsement — not via ads, but via genuinely solving a pain that's discussed weekly in the community.

---

## Target Users

### Primary Users

**Persona 1: The Overwhelmed Solo MSP Owner — "Marcus"**

Marcus runs a 3-person MSP in the midwest, managing 35 SMB clients. He's the technician, the salesperson, and the business owner. He closes a new client every 3–4 weeks, and every single time, onboarding is a nightmare.

- **Role:** Owner-operator, does all new client onboarding personally
- **Environment:** Works from a home office + client sites; no dedicated service coordinator
- **Current state:** Uses a shared Google Doc as a "checklist" — half the fields never get filled. Emails credentials to himself with "[CLIENT NAME] PASSWORDS" in the subject line. Follows up with clients 4–5 times before getting complete info. Discovers missing items weeks into the engagement when a technician needs access to something.
- **Motivations:** Save time, look more professional to clients, stop worrying about the security of emailed credentials
- **Emotional state:** Frustrated but resigned — "this is just how MSP onboarding works"
- **Success vision:** Sends one link, client fills everything in within 2 days, Marcus gets a PDF summary that goes straight into IT Glue. No chasing.
- **Decision trigger:** Peer on r/msp mentions saving 5 hours per client with a purpose-built tool. Marcus tries it with one client onboarding. Works exactly as described.
- **Price sensitivity:** High — $79 LTD is ideal; would subscribe at $49/month if it clearly saves time

**Persona 2: The Growth-Mode Small MSP — "Sarah"**

Sarah is the Service Manager at a 15-person MSP. They onboard 4–6 new clients per month. She manages a team of 4 technicians, each of whom "does onboarding their own way."

- **Role:** Service Manager / Operations Lead
- **Environment:** Office-based; ConnectWise PSA user; has IT Glue but underutilizes it
- **Current state:** Has tried to standardize with a Word doc template emailed to clients. Success rate: ~40%. Spends 3–4 hours per client following up on missing items. New technicians get inconsistent onboarding training.
- **Motivations:** Standardize technician processes; deliver professional, consistent client experience; feed data into ConnectWise without re-keying
- **Success vision:** Every technician uses the same portal; clients complete intake without involvement from the MSP team; ConnectWise ticket auto-populated with onboarding data
- **Decision trigger:** Owner asks her to fix the onboarding process after a new client complained about "disorganized" intake. Sarah evaluates tools and finds the MSP-specific templates immediately compelling.
- **Price sensitivity:** Medium — $79–$149/month SaaS with ConnectWise integration justifiable if it demonstrably saves technician hours

**Persona 3: The Process-Driven Mid-Market MSP — "Derek"**

Derek is Director of Operations at a 60-person MSP. They have IT Glue as their documentation platform, ConnectWise as their PSA, and are actively working toward SOC 2 compliance.

- **Role:** Director of Operations, responsible for standardizing all operational processes
- **Environment:** Formal organization; compliance-focused; private equity-backed
- **Current state:** Has custom intake forms in SharePoint — complex, often incomplete, never quite right. IT Glue ingestion of onboarding data is manual re-keying. Compliance auditors have flagged credential collection via email as a risk.
- **Motivations:** Eliminate credential collection via email; automate IT Glue population from intake data; satisfy compliance auditors with documented intake process
- **Success vision:** IT Glue auto-populated from every new client onboarding; credential vault integrated with N-able Passportal; audit trail for every intake interaction
- **Price sensitivity:** Low — $149–$299/month SaaS is justifiable with IT Glue and ConnectWise integrations; would evaluate SOC 2 posture before committing

### Secondary Users

**The MSP's Clients (End-users of the Intake Portal)**
The clients filling out the intake portal are typically IT contacts at SMBs — an Office Manager, an IT person (if one exists), or a business owner. They are not technical. They receive a magic link, fill out sections sequentially, upload files when prompted, and submit. Key requirements: no account creation, mobile-friendly, clear progress indicator, simple language that doesn't assume IT knowledge.

**MSP Vendors and Partners**
In future iterations, vendor contacts (ISPs, hardware suppliers) may be invited to contribute specific sections of the intake (e.g., ISP account details, hardware warranty information). Not in MVP scope.

### User Journey

**Marcus's Journey (Primary Solo MSP Persona):**

1. **Discovery:** Sees r/msp post: "Built a secure client onboarding portal for MSPs — magic link, credential vault, PDF summary, no more credential emails." Recognizes his exact pain. Clicks through.
2. **First session:** Signs up for free tier (3 onboardings/month). Creates his first onboarding project using the pre-built "Standard MSP Onboarding" template. Customizes logo. Takes 8 minutes.
3. **Sends first portal:** Emails magic link to a new client he's currently onboarding. Client completes within 24 hours (vs. his usual 5-day chase). Marcus receives completion notification.
4. **Aha! moment:** Downloads the auto-generated PDF network summary. Realizes this is exactly what he used to spend 2 hours creating manually after gathering info from various emails.
5. **Conversion:** Upgrades to LTD ($79) after the second successful onboarding. Posts on r/msp: "Finally solved the credential email chaos — this tool is exactly what the MSP world needed."
6. **Advocacy:** His post generates 200+ upvotes and 40 comments. Drives 50+ new signups organically.

**Sarah's Journey (Small MSP Service Manager):**

1. **Discovery:** Owner forwards her a link to the product after seeing it mentioned in MSPGeek Slack.
2. **Evaluation:** Explores template library. Confirms MSP-specific sections exist (AD credentials, firewall config, UPS inventory). Tests with a sample client — intake completes without a single follow-up call.
3. **Decision:** Presents to the owner with ROI calculation: "4 hrs/client × 4 clients/month × $100/hr tech time = $1,600/month in recoverable time. Tool costs $99/month."
4. **Onboarding:** Sets up the portal as the standardized process for all technicians. Integrates with ConnectWise — tickets auto-populate with intake data.
5. **Long-term:** Becomes the team's standard for all new client onboarding. Mentions it at IT Nation conference. Referred 8 peer MSPs over the following 6 months.

---

## Success Metrics

The portal creates value along two axes: time saved for the MSP (operational efficiency) and security risk reduced (credential collection process). Both must be measurable and communicated.

**North Star Metric:** Average client intake completion time (target: < 3 days, vs. 12.3-day industry median for MSPs without structured intake portals).

### Business Objectives

| Objective | Target | Timeframe |
|-----------|--------|-----------|
| Establish early user base | 100 free users | Month 3 |
| Validate AppSumo LTD viability | 500+ LTD buyers at $79–$99 | Month 5–6 |
| Build review foundation | 20+ G2/Capterra reviews averaging 4.5+ | Month 6 |
| Achieve initial MRR | $10,000 MRR from SaaS + integration upsells | Month 12 |
| Community credibility | r/msp post with 100+ upvotes/comments; unprompted mentions in MSPGeek | Month 3–4 |
| Establish marketplace presence | Listed in ConnectWise Marketplace | Month 9–12 |

### Key Performance Indicators

**User Success KPIs (measure product value delivery):**
- **Intake completion rate:** % of portals sent where client completes all required sections without MSP manual follow-up. Target: > 70% (vs. 41% industry median).
- **Time-to-complete:** Median days from portal send to client completion. Target: < 3 days (vs. 12.3 industry median).
- **MSP setup time:** Time from account creation to first portal sent. Target: < 15 minutes.
- **PDF utilization:** % of completions where MSP downloads the PDF summary. Target: > 80% (indicates the artifact creates value).
- **Repeat usage rate:** % of paying users who create 3+ portals in their first 60 days. Target: > 60%.

**Business KPIs (measure commercial health):**
- **Free-to-paid conversion rate:** Target: > 20% within 30 days of first successful portal completion.
- **LTD buyer count:** Month 5–6 AppSumo launch. Target: 500+ buyers.
- **Monthly churn:** Target: < 3% monthly for SaaS subscribers.
- **NPS:** Target: > 50 by Month 4 (MSP tools with strong community fit typically achieve 60+).
- **G2 reviews:** Target: 4.5+ average; 20+ reviews by Month 6.
- **ARR growth:** $0 → $474K–$1.4M ARR by Month 12 (500–1,500 customers at $79/month blended average).

**Leading indicators (signal success before revenue):**
- r/msp post engagement (upvotes, comments, DMs) within 48 hours of launch post
- Free tier to first portal sent within 24 hours of signup: Target > 50% of signups
- Referral rate: % of new signups who cite a peer recommendation as discovery source. Target: > 40% (indicates community-led flywheel is working).

---

## MVP Scope

### Core Features

The MVP must demonstrate the full onboarding intake loop — from MSP setup to client completion to MSP review — to validate the core value proposition. Every feature below is essential to achieving the "aha! moment" for the target user.

**1. MSP Account & Project Setup**
- Account creation (email + password; no SSO required at MVP)
- Create a new onboarding project: name, client name, custom logo upload
- Select which template sections to include/exclude per project
- Generate a unique magic link per project

**2. MSP-Specific Template Library (pre-built sections)**
The differentiating feature — must ship before marketing. Required sections at MVP:
- Network Overview (ISP info, public IPs, DNS settings, network topology)
- Active Directory / Identity (domain name, admin credentials, MFA status)
- Firewall Configuration (make/model, admin credentials, firmware version)
- Key Vendors & Contracts (vendor name, contact, account numbers, contract end dates)
- UPS / Power Infrastructure (make/model, runtime, last battery test)
- Security Policies (password policy acknowledgment, MFA acknowledgment, backup frequency)
- Network Diagram Upload (file upload: PNG, PDF, Visio)
- Device Inventory (number of workstations, servers, mobile devices; OS versions)

**3. Client-Facing Intake Portal**
- Magic link access — no client account creation required
- Step-by-step section navigation with progress indicator
- Responsive design (mobile-friendly — clients often complete from phones)
- File upload support (PDF, PNG, JPEG, DOCX, XLSX, Visio) with drag-and-drop
- Section-level save (client can leave and return; progress preserved per session cookie)
- Submit confirmation screen with summary of what was submitted

**4. Secure Credential Collection**
- AES-256 encryption at rest for all credential fields
- TLS 1.3 in transit
- Credential fields masked in the MSP's dashboard (reveal-on-click only)
- Credentials never written to application logs
- Clear client-facing security messaging ("Your credentials are encrypted and never stored in plain text")

**5. Auto-Reminders**
- Configurable email reminders sent to the client contact for incomplete portals
- Default schedule: 24h, 72h, and 7-day reminders if not completed
- MSP can disable or customize reminder schedule per project
- Reminder emails are branded with MSP logo

**6. MSP Completion Dashboard**
- List of all onboarding projects with status (Sent / In Progress / Complete)
- Real-time completion percentage per project (sections completed / total sections)
- Email notification to MSP when client submits completed intake
- Ability to view all submitted data in a structured read-only view

**7. PDF Network Summary Generation**
- Auto-generated on client submission completion
- Formatted as "IT Environment Overview: [Client Name]" — professional, printable
- Includes all completed sections formatted with section headers and field/value layout
- MSP can download; PDF is also emailed to MSP on completion
- MSP logo included in PDF header

**8. Free Tier**
- 3 active onboarding projects per month
- Standard templates
- No custom branding (MSP logo on portal; no white-label domain)
- Full credential vault and PDF summary (not paywalled — these are the value demonstrations)

**9. Paid Tier (LTD at $79)**
- Unlimited active onboarding projects
- Custom branding (white-label domain in Phase 2; branded portal + emails in MVP)
- All templates
- Priority support

### Out of Scope for MVP

The following are explicitly deferred to post-MVP to keep the build timeline at 4–6 weeks and avoid scope creep:

- **PSA Integrations** (ConnectWise, Autotask) — High value but complex; deferred to Month 2–3 post-launch
- **IT Glue / Hudu sync** — Same rationale; deferred to Month 3–4
- **White-label custom domain** — Nice to have; deferred to post-AppSumo launch
- **Client-side account creation** — Magic link is the right UX; persistent client accounts add complexity without MVP-stage value
- **Custom template builder** (drag-and-drop form creator) — Pre-built MSP templates are the differentiator; full customization can wait
- **Team/multi-user MSP accounts** — MVP targets solo/micro MSPs; multi-user with roles deferred to Month 4–6
- **SSO / SAML** — Enterprise feature; deferred
- **API access** — Deferred; manual PSA integration first, API later
- **Network discovery integration** (auto-populate from RMM scan) — Future innovation feature; deferred
- **AI template suggestion** — Deferred
- **Zero-knowledge credential vault architecture** — Ideal long-term; AES-256 at rest is sufficient for MVP and industry-standard for this market
- **HIPAA BAA / compliance certifications** — SOC 2 roadmap for Year 2; MVP compliance posture is AES-256 + TLS + no-log credentials

### MVP Success Criteria

The MVP is successful — and justifies investment in PSA integrations and AppSumo launch — when:

1. **Portal completion rate > 70%** — Clients complete intake without requiring manual follow-up from the MSP (vs. 41% industry median). This is the core value claim.
2. **Setup time < 15 minutes** — An MSP can go from account creation to sending their first portal in under 15 minutes. This ensures the free trial converts.
3. **Free-to-paid conversion > 20%** — Within 30 days of completing their first successful onboarding via the portal.
4. **NPS > 50** — Measured at 30 days for paid users. Above 50 is the threshold for organic community recommendation.
5. **r/msp launch post: 100+ upvotes** — Community validation of the problem/solution fit in the target channel.
6. **Zero security incidents** — Credential vault breach or data exposure during the beta period is a disqualifying failure.

### Future Vision

If the MVP succeeds, the 12–24 month roadmap expands the product across three dimensions:

**Integration layer (Months 3–12):**
- ConnectWise Marketplace listing — pushes completed intake directly to tickets
- IT Glue / Hudu sync — maps intake fields to documentation page templates
- Autotask integration
- 1Password / Bitwarden credential export (move vault contents to MSP's password manager)
- N-able Passportal integration

**Platform depth (Months 6–18):**
- Custom template builder — MSPs create their own intake sections
- Multi-user MSP accounts with role-based permissions (technician vs. admin)
- Client portal history — access previous onboardings; track changes over time
- Audit trail export — compliance-ready log of all credential access events
- White-label reseller program — large MSPs brand the portal as their own for sub-clients

**Expansion (Year 2+):**
- Horizontal vertical expansion: accounting firms, law firms, creative agencies (same document collection pain profile)
- AI-assisted intake: auto-populate fields from RMM scan data, suggest missing items based on client profile
- Network discovery integration: auto-populate device inventory from NinjaOne or ConnectWise Automate scan
- Cyber insurance integration: completed onboarding data feeds directly into insurance questionnaires
- Compliance template library: HIPAA, CMMC, SOC 2 baseline intake sections for regulated industry clients

**The long-term vision:** Become the standard for how MSPs and their clients exchange structured data at the start of every relationship — and at every significant change event thereafter (acquisitions, major infrastructure changes, security incidents). The onboarding portal is the first touchpoint in an ongoing client-MSP data relationship.

---

*Product Brief completed: 2026-06-13*
*Author: Root (automated BMAD product brief workflow)*
*Based on: MSP IT Client Onboarding Portal shortlisted idea (Score: 81/105) + comprehensive market research*
*Next step: create-prd — build detailed Product Requirements Document from this brief*
