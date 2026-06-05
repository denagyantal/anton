---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/it-asset-management.md
  - _bmad-output/planning-artifacts/product-brief-it-asset-management.md
workflowType: prd
product_name: AssetPilot
research_topic: it-asset-management
user_name: Root
date: '2026-06-05'
classification:
  projectType: saas_b2b
  domain: it-operations
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — AssetPilot

**Author:** Root
**Date:** 2026-06-05
**Product:** AssetPilot — IT Asset Management for MSPs & Small Businesses

---

## Executive Summary

AssetPilot is a cloud-native, multi-tenant IT Asset Management (ITAM) platform purpose-built for Managed Service Providers (MSPs) and small business IT teams. The product addresses a validated $2–4.5B market gap: no affordable, multi-tenant ITAM tool exists for MSPs managing 5–50 client environments.

**Target users:** MSP owners and technicians (primary), internal IT managers at 50–300 person companies migrating from Snipe-IT (secondary). Paying customer profile: 1–20 technician MSPs billing $500K–$5M ARR, currently managing client assets in Snipe-IT instances (per client) or spreadsheets.

**The core problem:** Snipe-IT — the dominant free ITAM tool — is architecturally single-tenant. MSPs managing 20 clients face a forced choice: run 20 separate Snipe-IT servers (operationally unsustainable) or pay $129–$179/technician/month for full RMM platforms (Atera, NinjaOne) that bundle ITAM as a secondary feature. The $0-to-$129/tech cliff is unserved.

**Distribution strategy:** AppSumo LTD as first-mover in the ITAM category (confirmed category whitespace), followed by r/msp organic community distribution (150,000+ members). Content SEO targeting "Snipe-IT alternative MSP," "IT asset management multi-tenant," and related low-competition, high-intent queries.

**Build timeline:** 8–12 weeks solo or 4–6 weeks with two engineers.

### What Makes This Special

AssetPilot's core differentiator is **MSP-native multi-tenancy as an architectural primitive**, not a retrofit. Every data model, access control decision, and UI pattern is built around the MSP-client relationship from day one. Snipe-IT cannot add multi-tenancy as a feature update — it requires a full rewrite. Atera and NinjaOne cannot match the price point without cannibalizing their bundled RMM revenue model.

Three compounding advantages:

1. **Agent-based auto-discovery eliminates the primary Snipe-IT friction point.** Snipe-IT requires 100% manual asset entry. AssetPilot's discovery agent scans a client's network on install and auto-populates 80%+ of inventory in under 15 minutes. Auto-discovery is the primary justification for paying vs. staying on Snipe-IT.

2. **Per-technician pricing with unlimited assets mirrors Atera's successful model** but at ITAM-only pricing ($49–$99/tech/month). No per-device pricing surprises. Predictable cost for MSPs regardless of how many devices their clients add.

3. **PSA integrations (Phase 2) create switching-cost moat.** ConnectWise, Autotask, and HaloPSA integrations embed AssetPilot into the MSP's existing billing and ticketing workflow. Once client data flows through PSA sync, switching cost becomes prohibitively high.

**AppSumo first-mover:** No credible IT infrastructure ITAM tool exists on AppSumo (digital asset management tools serve an unrelated market). First entrant captures organic listing promotion, category association, and the review flywheel before competitors can respond.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant cloud platform
- **Domain:** IT Operations / MSP Tooling
- **Complexity:** Medium — multi-tenancy architecture and agent-based network discovery add technical depth; no heavy regulatory compliance requirements at launch
- **Project Context:** Greenfield — no existing codebase; all architectural decisions made from scratch with multi-tenancy as the foundational constraint

---

## Success Criteria

### User Success

- **Time to first discovered asset** (agent install → first scan complete): ≤ 15 minutes for a 50-device subnet
- **Asset auto-discovery accuracy**: ≥ 80% of known network devices discovered per scan as measured by agent scan events vs. manually confirmed inventory
- **Snipe-IT migration completion rate**: ≥ 85% of trial users who initiate CSV import complete onboarding within 48 hours
- **Per-client report generation time**: ≤ 5 minutes from request to PDF download as measured by in-app timing events
- **Weekly active usage rate**: ≥ 70% of paying accounts have ≥ 1 session per week at 90 days post-activation
- **Multi-client adoption**: ≥ 70% of MSP accounts configure ≥ 2 client environments within 14 days of activation
- **NPS at 90 days (MSP segment)**: ≥ 40

### Business Success

**Month 3 (AppSumo launch close):**
- ≥ 300 LTD purchases across all tiers
- ≥ 150 active workspaces (accounts with ≥ 1 client environment and ≥ 10 assets entered)
- ≥ 50 AppSumo reviews averaging ≥ 4.2 stars
- ≥ 3 unprompted r/msp community thread mentions

**Month 6:**
- ≥ 600 total LTD customers
- ≥ 100 monthly active MSP workspaces
- ≥ 20% of active MSP accounts using ConnectWise integration (Phase 2)
- MRR from add-on features: ≥ $2,000/month

**Month 12:**
- ≥ 1,000 total customers (LTD + MRR)
- MRR: $15,000–$25,000 from active scanning and PSA integration subscriptions
- Monthly churn on MRR customers: ≤ 5%
- NPS: ≥ 45
- ≥ 25 G2 reviews in the IT Asset Management category

### Technical Success

- **Agent reliability**: ≥ 99% of scheduled scans complete without manual intervention as measured by agent telemetry
- **Platform uptime**: ≥ 99.9% monthly uptime (≤ 8.7 hours downtime/year) measured by external monitoring
- **Data isolation validation**: Zero incidents of cross-tenant data leakage confirmed by quarterly penetration testing
- **Support ticket quality**: ≤ 30% of support tickets attributable to core feature failures (vs. how-to questions or feature requests)

### Measurable Outcomes

**Go/no-go decision rule at 60 days post-launch:**
- ≥ 150 AppSumo purchases AND ≥ 50 active workspaces AND ≥ 40% agent install rate → proceed to Phase 2 (PSA integrations)
- ≥ 1 unprompted positive r/msp thread → double down on community distribution as primary channel
- Core failure ticket rate > 30% → halt feature development, fix quality before Phase 2
- < 100 LTD purchases at 60 days → reassess pricing and positioning before continuing

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Problem-solving MVP. The product must do one thing exceptionally: let an MSP manage all client assets in one place with auto-discovery. Every MVP feature decision is filtered through: "Without this, does the product fail for an MSP?"

**Core MVP feature groups:**

| Feature Group | Rationale |
|---|---|
| Multi-tenant workspace architecture | Binary requirement — without it, the product is Snipe-IT |
| Hardware asset inventory with CSV import | Enables migration from Snipe-IT/spreadsheets |
| Software license tracking with seat utilization | Top MSP compliance pain point |
| Warranty & expiry management with alerts | Top MSP credibility pain point |
| Agent-based auto-discovery (Windows/macOS/Linux) | Primary justification for paying vs. staying free |
| Per-client PDF report generation | Client business review use case — immediate visible value |
| Role-based user management + Google/Microsoft SSO | Required for MSP team and client portal access |

**MVP team:** 1–2 engineers, 8–12 weeks.

**MVP success threshold:** ≥ 150 AppSumo purchases + ≥ 50 active workspaces + ≥ 40% agent install rate at 60 days.

### Growth Features (Post-MVP — Phase 2, Months 3–6)

- **PSA integrations:** ConnectWise Manage, Autotask, HaloPSA — bi-directional asset sync, warranty expiry ticket creation
- **REST API v1:** Authenticated access for custom integrations and MSP automation scripts
- **Slack/Teams alert integrations:** Warranty and license expiry alerts in MSP communication channels
- **Mobile web optimization:** Responsive design hardening for field technician tablet use
- **Agentless discovery (SNMP/WMI):** For environments where agent installation is restricted
- **White-label client portal:** Custom domain and MSP branding — premium MRR add-on

### Vision (Future — Phase 3+)

- **Compliance exports:** Microsoft 50-seat audit format, ISO 27001 asset register, SOC 2 evidence
- **Hardware depreciation schedules** with QuickBooks/Xero export
- **AI-powered asset categorization** with confidence scoring
- **CVE-based vulnerability alerts** via software version detection
- **End-of-life detection** with manufacturer EOL date database
- **Network topology visualization** from discovery scan data
- **Marketplace** for third-party integrations (SIEM, MDM, EDR)
- **Multi-region data residency** (EU, UK, ANZ) for compliance-requiring MSPs

**Permanently out of scope:** Remote software deployment, patch management, network uptime monitoring, help desk/ticketing (covered by PSA integrations).

---

## User Journeys

### Journey 1: Marcus — MSP Owner Discovering and Adopting AssetPilot

**Persona:** Marcus, 9-year MSP owner, 5 technicians, 22 client businesses. Currently running Snipe-IT for 2 clients, spreadsheets for 15, "just knows" the rest. Has been burned by a client's server going end-of-support without warning.

**Opening Scene:** Marcus posts on r/msp: "Anyone found a good ITAM tool that actually handles multiple clients?" Receives 15 replies; 2 mention AssetPilot. He Googles "Snipe-IT alternative MSP multi-tenant." Finds AssetPilot's blog post "Why Snipe-IT Doesn't Work for MSPs." He reads the entire post.

**Rising Action:** Marcus clicks "Start Free Trial." The onboarding wizard surfaces immediately: "Create your first client environment." He names it "Dental Office - Smith & Associates." The UI asks: "Import existing assets via CSV, or deploy the discovery agent?" He chooses the agent — downloads a Windows .msi installer, runs it on the client's admin workstation. Eight minutes later: 47 of ~50 known devices appear in the pending discovery queue. He reviews, confirms 45, marks 2 as unknown.

**Climax:** Marcus texts his senior tech Priya: "You need to try this." She reviews the 45 confirmed devices. She checks one: Dell Latitude 5420, purchased 2023-03-14, warranty expires 2026-03-14 — 9 months out. An alert is already configured for 60-day pre-expiry. She says: "This would have saved us that server situation with the law firm."

**Resolution:** Marcus calculates current cost: $30/month VPS hosting + 3 hours/week admin time × $75/hour = $930/month equivalent overhead. AssetPilot at $79/technician/month × 5 = $395/month. Submits credit card. Over 14 days, migrates all 22 clients. First quarterly client report generated in 12 minutes instead of 4 hours. Posts on r/msp at day 90: "It's what Snipe-IT should have been."

**Requirements revealed:** Multi-tenant workspace creation, CSV import with field mapping, agent installer download and deployment, discovery queue review, warranty date alerts, per-client PDF report, pricing that maps to technician headcount.

---

### Journey 2: Priya — Senior Technician Day-to-Day Asset Management

**Persona:** Priya, lead technician at a 12-person MSP, responsible for asset tracking, software compliance, and client onboarding. Built a custom macro-heavy spreadsheet that breaks under concurrent edits. Tracks 40 clients.

**Opening Scene:** It's Monday morning. Priya opens AssetPilot to the unified cross-client dashboard. Three yellow warning badges: two clients have licenses at 85% seat utilization, one client has a device showing warranty expiry in 48 days. She clicks the warranty alert first.

**Rising Action:** Client: "Greenfield Architecture Firm." Device: HP ProDesk 400 G9, purchased 2023-11-01, warranty expires 2026-06-07. She opens a ConnectWise ticket directly from the asset record (Phase 2 feature; in MVP she copies the device details manually). She emails the client contact: "Your workstation [serial] has 2 days of warranty remaining — we're initiating a replacement quote."

**Climax:** She pivots to the software license alert: Microsoft 365 Business Premium, 45 seats purchased, 39 assigned. Client added 4 new employees last week — 3 are already licensed in AssetPilot's auto-assignment; 1 is missing. She manually assigns seat 40 and emails the client billing contact with an upgrade recommendation before they hit the limit.

**Resolution:** New client onboarding scheduled for Thursday. She schedules the agent deployment as part of the onboarding checklist. By Friday end-of-day, the new client's 73-device inventory is 82% auto-populated. Manual entry time for a full onboarding drops from 4 hours to 35 minutes.

**Requirements revealed:** Cross-client unified dashboard with alert badges, software license seat utilization counter with threshold alerts, warranty expiry detail view, asset record with connection to ticketing workflow, agent deployment scheduling, new client onboarding discovery flow.

---

### Journey 3: Jordan — Internal IT Manager Migrating from Snipe-IT

**Persona:** Jordan, IT Manager at a 200-person professional services firm. 3-person IT team. Has run Snipe-IT self-hosted on a $30/month VPS for 3 years. Subject to Microsoft 50-seat compliance audit. Spends ~3 hours/month on Snipe-IT server maintenance.

**Opening Scene:** Jordan gets an email from the CFO: "Microsoft is asking us to verify compliance with our 365 subscription — they need a full software inventory by next Friday." Jordan opens Snipe-IT. The export format doesn't match what Microsoft's audit requires. He opens a Reddit thread: "Snipe-IT Microsoft audit export" — no solution. He Googles alternatives. Finds AssetPilot.

**Rising Action:** Jordan signs up, exports his Snipe-IT data as CSV, and uses AssetPilot's CSV import with field mapping UI to migrate 214 assets in 18 minutes. He runs the Windows agent on 3 workstations in the main office — discovers 19 additional assets not in Snipe-IT. He generates the full asset inventory report as PDF and forwards it to the CFO.

**Climax:** The CFO asks if Jordan can get this automatically going forward. Jordan configures weekly scheduled PDF reports sent to the CFO's email every Friday at 7am. He also sets up license expiry alerts at 90 days for all software licenses.

**Resolution:** Jordan cancels the $30/month VPS. He pays $49/month for AssetPilot (single technician tier). Server maintenance overhead disappears. He logs in once a week to review the dashboard instead of SSHing into a Linux server to check disk space. He submits a G2 review: "Finally a cloud-hosted ITAM that doesn't require a sysadmin to run."

**Requirements revealed:** Snipe-IT CSV import with field mapping UI, agent installation on Windows workstations, full asset inventory PDF export, scheduled automated report delivery to email, software license expiry alerts, single-user workspace (non-MSP use case).

---

### Journey 4: Client Contact — Read-Only Portal Access

**Persona:** Dana, Office Manager at a dental practice managed by Marcus's MSP. 22 workstations, 3 servers. Gets quarterly reports from Marcus and occasionally needs to locate asset information for insurance purposes.

**Opening Scene:** Marcus's MSP has shared a read-only portal link with Dana. Her insurance company is asking for a current asset inventory with serial numbers and purchase dates for a business interruption claim.

**Rising Action:** Dana logs into the client portal using her email address. She sees only Dental Office assets — not any other client. She navigates to Hardware Assets, filters by "Server," and exports a CSV with serial numbers, purchase dates, and asset values.

**Resolution:** Dana forwards the CSV to her insurance broker in 4 minutes. She calls Marcus: "That portal is actually really useful — can I get the monthly report sent to me automatically?" Marcus enables the scheduled report delivery for Dana's email address.

**Requirements revealed:** Client read-only portal with single-environment data isolation, CSV export from portal, scheduled report delivery to client-specified email, hardware asset filter by type, no access to billing or other client environments.

---

### Journey Requirements Summary

| Capability | Revealed By |
|---|---|
| Multi-tenant workspace with client environment creation | Marcus journey |
| Agent-based discovery with review queue | Marcus, Priya journeys |
| Cross-client unified dashboard with alert badges | Priya journey |
| Software license seat utilization counter with threshold alerts | Priya journey |
| Warranty expiry tracking with configurable alert windows | Marcus, Priya, Jordan journeys |
| Snipe-IT CSV import with field mapping UI | Jordan journey |
| Per-client PDF report — on-demand and scheduled | Marcus, Jordan, Dana journeys |
| Client read-only portal with data isolation | Dana journey |
| RBAC: MSP Admin / MSP Technician / Client Read-Only | All journeys |
| Asset detail view with full lifecycle fields | All journeys |
| Software license management with assignment tracking | Priya, Jordan journeys |

---

## Domain-Specific Requirements

AssetPilot operates in the IT Operations / MSP tooling domain with medium complexity. No heavy regulated compliance is required at MVP, but several domain-specific constraints shape the architecture and trust model.

### Multi-Tenant Data Isolation

MSPs are contractually and ethically responsible for keeping client data separate. A data leak between client environments is a client-terminating event.

- Each client environment must be isolated at the database query layer — all asset, license, warranty, and user data scoped to a `workspace_id` + `client_id` composite key
- No cross-client data must be readable even if a client portal user obtains a valid JWT — authorization must enforce `client_id` match on every API endpoint
- MSP admin and technician roles see cross-client aggregates only — never raw cross-client data merged without explicit MSP permission

### Agent Security

The discovery agent runs on client workstations and servers with network access. It must not become a liability.

- Agent installer must be code-signed (Windows: Authenticode; macOS: notarized by Apple)
- Agent communicates only outbound to AssetPilot's ingestion endpoint over TLS 1.2+ — no inbound firewall ports required
- Agent does not store or transmit user credentials, passwords, or document file contents — inventory capture limited to: hostname, MAC address, IP address, OS version, installed software name/version/publisher, last seen timestamp
- Agent uses a workspace-scoped API key for authentication — key can be revoked per client environment via MSP admin dashboard

### License Key Storage

Software license tracking includes license key fields that may contain activation credentials.

- License keys stored encrypted at rest using AES-256 — plaintext never written to application logs
- License key field masked in UI by default — explicit "reveal" action logged in audit trail
- License key export requires MSP Admin role

### Audit Logging

MSPs need to demonstrate due diligence to their clients and for internal incident response.

- All asset create/update/delete actions logged with: actor user ID, timestamp, changed fields (before/after values for updates), and client environment ID
- Audit log retention: 12 months minimum
- Audit log accessible to MSP Admin role only — not to client portal users

### Compliance Notes (Phase 3)

Microsoft 50-seat compliance exports and ISO 27001 asset register formats are deferred to Phase 3. The MVP asset data model must collect the fields needed for these exports (serial numbers, software versions, seat counts, purchase dates) even if the export format is not yet implemented.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Multi-tenancy as architectural primitive (primary innovation):**
AssetPilot's differentiating innovation is not a feature — it's a foundational architectural decision. The data model, access control, and user interface are designed from row-zero with the premise that one workspace contains N client environments. This means:
- No single-tenant scaffolding to retrofit
- No "client tagging" on a shared asset table — full relational isolation
- UI always surfaces the client context — navigation, breadcrumbs, and scoped search operate within client boundaries

Snipe-IT's community has had 12+ years to add multi-tenancy and has not done so — the reason is architectural, not motivational. AssetPilot's founding architecture makes it impossible for Snipe-IT to compete on this dimension without a complete rewrite.

**Agent-first onboarding as time-to-value mechanism:**
The discovery agent reframes the onboarding experience. Traditional ITAM tools present an empty inventory and ask users to fill it. AssetPilot's onboarding leads with agent deployment — the first meaningful interaction is reviewing auto-discovered devices, not entering them. This reduces time-to-value from hours (manual entry) to minutes (discovery review), which is the conversion-critical moment in a B2B free trial.

### Market Context & Competitive Landscape

No direct competitor offers both MSP multi-tenancy and agent-based auto-discovery at under $100/tech/month:

| Competitor | Multi-Tenant | Auto-Discovery | Price |
|---|---|---|---|
| Snipe-IT | No (architectural) | No (manual only) | Free (self-hosted) |
| Lansweeper | Partial (MSP portal) | Yes (agentless) | $239+/month for 2,000 assets |
| Atera | Yes (RMM bundled) | Yes (bundled) | $129–$179/tech/month |
| NinjaOne | Yes (RMM bundled) | Yes (bundled) | Per-device, unpredictable |
| BlueTally | No (single-tenant) | No | $49–$199/month |
| ManageEngine | No (single-tenant) | Partial | $995/year+ |

AppSumo: zero ITAM products in the IT infrastructure category as of market research date (2026-06-05).

### Validation Approach

- **AppSumo launch performance**: Day-1 sales of ≥ 50 units validates commercial demand
- **Agent install rate**: ≥ 40% of active accounts deploying ≥ 1 agent validates auto-discovery as purchase driver (not just multi-tenancy)
- **r/msp organic mentions**: ≥ 3 unprompted mentions validates community product-market fit
- **Support ticket composition**: < 30% core failure tickets validates product quality

### Risk Mitigation

- **Architecture risk:** Multi-tenancy from day one means no quick MVP shortcut of building single-tenant first. Mitigation: use a well-established multi-tenant framework pattern (e.g., PostgreSQL Row Level Security or schema-per-tenant) with proven implementations.
- **Discovery accuracy risk:** <80% discovery accuracy breaks the primary value claim. Mitigation: use Nmap-based scanning with OS fingerprinting; supplement with ARP table inspection; set user expectation that discovery is a starting point, not a complete inventory.
- **Agent trust risk:** MSPs may be reluctant to deploy an unknown agent on client networks. Mitigation: open-source the agent code on launch; provide code signing from launch day; document what data the agent collects and does not collect prominently in the marketing site.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

AssetPilot implements **workspace-per-MSP** with **client environments** as sub-entities within each workspace. Data isolation strategy: Row Level Security (RLS) on PostgreSQL or equivalent pattern — all queries automatically scoped to `(workspace_id, client_id)` without application-layer filtering as the sole enforcement mechanism.

**Workspace hierarchy:**
```
Workspace (MSP account)
  └── Client Environment (1 per client company)
        ├── Hardware Assets
        ├── Software Licenses
        ├── Discovery Agents
        └── Reports
```

**Onboarding wizard flow:**
1. Create workspace (MSP company name, primary contact)
2. Create first client environment
3. Choose: Import CSV or Deploy Agent
4. Completion: first asset appears in inventory

### Role-Based Access Control (RBAC)

| Role | Scope | Capabilities |
|---|---|---|
| MSP Admin | Full workspace | All assets, all clients, billing, user management, audit log, API keys |
| MSP Technician | Full workspace | All assets, all clients — no billing, no user management, no audit log |
| Client Read-Only | Single assigned client environment | View assets, download reports, export CSV — no create/update/delete |

Role assignment: MSP Admin assigns roles. Each user belongs to exactly one workspace. Client portal users are assigned to exactly one client environment.

### Authentication

- Email + password with bcrypt hashing (minimum 10 rounds)
- Google OAuth 2.0 SSO
- Microsoft OAuth 2.0 SSO (Microsoft 365 / Azure AD)
- All sessions expire after 24 hours of inactivity; explicit logout invalidates session immediately
- Password reset via email link (JWT, single-use, 1-hour expiry)

### Integration Architecture (MVP — CSV only; Phase 2 — PSA)

**MVP integrations:**
- CSV import: field mapping UI supporting Snipe-IT export schema and generic flat CSV
- CSV export: per-client or cross-client full inventory export

**Phase 2 integrations (post-MVP):**
- ConnectWise Manage: asset sync to Configuration Items, ticket creation on warranty/license expiry triggers
- Autotask: bi-directional device record sync
- HaloPSA: asset data population in device records

**API key management:**
- Per-client environment agent API keys (scoped to discovery data ingestion only)
- Per-workspace API keys (Phase 2 — full read/write REST API access for MSP Admin role)

### Tenant Isolation Verification

- Quarterly penetration test by external vendor targeting cross-tenant data access
- Automated integration tests asserting that API endpoints return 404 (not 403) for cross-tenant resource access to avoid information leakage about other tenants' data existence

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP focused on proving multi-tenant ITAM with auto-discovery for MSPs. The MVP succeeds when an MSP can manage all client assets in one place with 80%+ auto-populated via agent discovery. Revenue optimization (PSA integrations, compliance exports) comes after proof-of-concept validation.

**MVP team and timeline:** 1–2 engineers, 8–12 weeks to beta; AppSumo launch at 12 weeks.

**Resource constraints:** MVP defers PSA integrations (2–3 weeks per integration), mobile native apps, and white-label portal. All deferred features are table-stakes for long-term retention but not purchase decision drivers.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- MSP owner workspace setup → client creation → agent deployment → discovery review → report generation
- Senior technician daily dashboard review → alert triage → software compliance monitoring
- Internal IT manager Snipe-IT migration → agent deployment → compliance export

**Must-have capabilities:**

| Capability | Why MVP-critical |
|---|---|
| Multi-tenant workspace + client environment isolation | Core product differentiator — binary requirement |
| Hardware asset inventory (create/update/delete + lifecycle status) | Foundation of ITAM |
| Snipe-IT CSV import with field mapping | Migration path from dominant free tool |
| Software license tracking with seat utilization counter | Top MSP compliance pain point |
| Warranty & expiry alerts (30/60/90-day thresholds) | Top MSP credibility pain point — justifies paying |
| Agent-based discovery (Windows, macOS, Linux) | Primary reason to pay vs. stay free |
| Discovery queue (pending review before confirmed inventory) | Data quality gate — MSPs won't trust 100% auto-add |
| Per-client PDF report (on-demand + scheduled) | Client business review use case — immediate visible value |
| Cross-client unified dashboard with alert badges | Core MSP value — "everything in one place" |
| RBAC (Admin/Technician/Client Read-Only) | Required for MSP team sharing and client portal |
| Google/Microsoft SSO | Reduces onboarding friction for M365/Google Workspace MSPs |
| QR/barcode label generation | Physical tagging workflow — reduces manual lookup friction |
| CSV export (per-client and cross-client) | Compliance export baseline; enables data portability |

### Post-MVP Features

**Phase 2 (Months 3–6) — Integration Layer:**
- ConnectWise Manage integration (bi-directional asset sync, warranty ticket creation)
- Autotask integration
- HaloPSA integration
- REST API v1 (authenticated, workspace-scoped)
- Slack/Teams webhook notifications for expiry alerts
- Agentless SNMP/WMI network scanning
- Mobile web responsive hardening for tablet field use

**Phase 3 (Months 6–12) — Compliance & Advanced Reporting:**
- White-label client portal (custom domain, MSP logo throughout) — MRR add-on
- Microsoft 50-seat compliance audit export format
- ISO 27001 / SOC 2 asset register export
- Hardware depreciation schedule with QuickBooks/Xero CSV export
- Advanced analytics: asset lifecycle trends, cost-per-seat, budget forecasting

### Risk Mitigation Strategy

**Technical risks:**
- Multi-tenant data isolation complexity — mitigate with PostgreSQL RLS implemented from schema design day one; no shortcuts to single-tenant-first
- Agent reliability on diverse network environments (firewalls, VLANs, non-standard subnets) — mitigate with configurable subnet range targeting and graceful degradation when network scanning is blocked
- Discovery accuracy below 80% threshold — mitigate with multi-method discovery (Nmap + ARP + mDNS) and transparent accuracy reporting in agent dashboard

**Market risks:**
- Snipe-IT community launches a cloud-hosted offering — mitigate by building PSA integrations (moat) and AppSumo review flywheel before any such launch could gain traction
- AppSumo category saturation — mitigate by launching before any competitor enters the ITAM category (confirmed whitespace at research date)

**Resource risks:**
- Solo build requires 12 weeks — mitigate with a modular build order: workspace + auth → hardware inventory + CSV import → agent discovery → license tracking → reporting; each step is shippable
- If team size reduces to 1 engineer: defer agentless discovery (SNMP) and focus agent on Windows only for MVP; macOS and Linux agent in week 2 sprint

---

## Functional Requirements

### Workspace & Multi-Tenant Management

- FR1: MSP Admin can create a workspace with company name, logo, and primary contact email
- FR2: MSP Admin can create, rename, archive, and delete client environments within their workspace
- FR3: MSP Admin can view a cross-client unified dashboard showing total asset count, active alert count, and expiry summary across all client environments
- FR4: MSP Admin can complete an onboarding wizard that creates a workspace, adds a first client environment, and initiates either CSV import or agent deployment
- FR5: MSP Admin can invite MSP Technicians and Client Read-Only users via email link with role pre-assigned
- FR6: MSP Admin can revoke user access immediately, invalidating all active sessions for that user
- FR7: Client Read-Only users access only the single client environment they are assigned to — no other client data is accessible regardless of URL manipulation

### Hardware Asset Inventory

- FR8: MSP Admin and Technician can create hardware asset records with fields: device name, device type (workstation/laptop/server/network/peripheral/other), serial number, manufacturer, model, purchase date, purchase price, assigned user, location, current status
- FR9: MSP Admin and Technician can transition asset status through the lifecycle: Procurement → Active → Maintenance → Retired → Disposed
- FR10: MSP Admin and Technician can bulk-import hardware assets via CSV with a field mapping UI that maps source column names to AssetPilot schema fields
- FR11: MSP Admin and Technician can export hardware asset inventory to CSV — per client environment or cross-client — with all asset fields included
- FR12: MSP Admin and Technician can generate QR code and barcode labels for individual assets or in batch for physical tagging
- FR13: MSP Admin, Technician, and Client Read-Only can search and filter assets by device type, status, assigned user, location, and warranty expiry date range within their authorized scope
- FR14: MSP Admin and Technician can attach asset records to a client environment and reassign them between client environments within the same workspace

### Software License Tracking

- FR15: MSP Admin and Technician can create software license records with fields: product name, vendor, license key (encrypted), license type (perpetual/subscription/volume/OEM), total seats, assigned assets or users, purchase date, expiry date, annual cost
- FR16: MSP Admin and Technician can view real-time seat utilization: seats assigned vs. total purchased, with percentage displayed
- FR17: MSP Admin and Technician can configure per-license utilization alert threshold (default 80% seat utilization); alert triggers email and in-app notification to MSP Admin and Technician roles
- FR18: MSP Admin can reveal license key in plaintext via an explicit "reveal" action; all reveal events are logged in the audit trail
- FR19: MSP Admin and Technician can export license records to CSV excluding plaintext license keys unless the requester holds MSP Admin role

### Warranty & Expiry Management

- FR20: MSP Admin and Technician can view a per-client expiry dashboard listing all hardware and software items expiring within a configurable window (default 90 days), sorted by urgency
- FR21: MSP Admin and Technician can view a cross-client expiry view showing everything expiring within 90 days across all client environments, sortable by client, type, and expiry date
- FR22: AssetPilot sends email notifications to MSP Admin and Technician at configurable pre-expiry thresholds (default: 90, 60, 30 days) for hardware warranty and software license expiry events
- FR23: MSP Admin and Technician can configure alert thresholds per asset or license (override the workspace default)
- FR24: AssetPilot sends in-app alert badge updates to dashboard within 60 seconds of a threshold being crossed

### Agent-Based Auto-Discovery

- FR25: MSP Admin can download a discovery agent installer for Windows (.msi), macOS (.pkg), and Linux (bash script) scoped to a specific client environment's API key
- FR26: Discovery agent performs an initial network scan of the local subnet within 15 minutes of installation on a standard 50-device /24 subnet
- FR27: Discovery agent captures per-device: hostname, MAC address, IP address(es), OS name and version, installed software list (name/version/publisher), last seen timestamp
- FR28: Discovered devices not matching existing inventory records appear in a pending review queue — MSP Admin and Technician must confirm before assets are added to confirmed inventory
- FR29: MSP Admin and Technician can configure scheduled scan frequency per agent (daily or weekly) and set the scan time window
- FR30: MSP Admin can view agent status dashboard: which client environments have agents installed, last successful scan time, scan health status (healthy/warning/offline)
- FR31: MSP Admin can revoke a discovery agent's API key, immediately preventing further data ingestion from that agent
- FR32: MSP Admin and Technician can dismiss or permanently ignore specific discovered devices from the pending queue (e.g., IoT devices, printers not tracked in inventory)

### Reporting

- FR33: MSP Admin and Technician can generate an on-demand per-client PDF report containing: hardware inventory summary, warranty expiry table (next 90 days), software license compliance summary, and MSP logo in the header
- FR34: MSP Admin can configure scheduled automated report delivery: frequency (weekly/monthly), recipient email addresses (MSP internal and/or client contacts), client environment scope
- FR35: MSP Admin and Technician can access a report history showing the last 12 months of generated reports per client environment, with download links
- FR36: Client Read-Only users can download the most recent generated report for their assigned client environment

### Authentication & User Management

- FR37: All users can authenticate via email + password, Google OAuth 2.0, or Microsoft OAuth 2.0
- FR38: MSP Admin can view the audit log for their workspace: actor, timestamp, action type, affected record, changed fields (before/after) — filterable by date range, actor, and action type
- FR39: All sessions expire after 24 hours of inactivity; users are redirected to login with session expiry message
- FR40: MSP Admin and Technician can update their own profile: name, email, notification preferences (email alert frequency and digest mode)

---

## Non-Functional Requirements

### Performance

- Page load time for dashboard (cross-client unified view with up to 50 client environments): ≤ 3 seconds at 95th percentile under normal load (≤ 500 concurrent sessions) as measured by APM monitoring
- Asset search results return within 1 second for up to 10,000 assets per client environment at 95th percentile
- PDF report generation completes within 120 seconds for a client environment with up to 1,000 assets as measured by server-side timing
- Discovery agent scan completes within 15 minutes for a /24 subnet (up to 254 hosts) as measured by agent telemetry

### Security

- All data transmitted between client (browser), agent, and server encrypted over TLS 1.2 minimum; TLS 1.3 preferred
- Passwords hashed using bcrypt with ≥ 10 cost factor; plaintext passwords never written to logs or stored
- License keys encrypted at rest using AES-256; plaintext keys never written to application logs
- Agent API keys are workspace + client environment scoped; key rotation supported without agent reinstallation
- Cross-tenant data access prevented at database query layer (RLS or equivalent) in addition to application-layer authorization — defense in depth
- All audit log entries immutable once written — no update or delete operations on audit log records
- Password reset tokens are single-use JWTs with 1-hour expiry; used tokens invalidated immediately
- Quarterly penetration testing by external vendor; critical findings remediated within 30 days; high findings within 60 days

### Scalability

- Platform architecture supports horizontal scaling to 10,000 concurrent users across all workspaces without architectural changes, as validated by load testing before AppSumo launch
- Agent ingestion pipeline processes discovery scan data from up to 1,000 simultaneous agent scans without data loss or scan-result delay exceeding 10 minutes
- Database schema designed to support 1M+ total asset records across all workspaces without query performance degradation below stated performance targets

### Reliability

- Platform uptime: ≥ 99.9% monthly availability (≤ 8.7 hours unplanned downtime per year) as measured by external uptime monitoring
- Scheduled report delivery: ≥ 98% of scheduled reports delivered within 30 minutes of configured delivery time, as measured by delivery logs
- Agent-reported data: ≥ 99% of submitted scan results successfully ingested within 10 minutes of agent submission, as measured by agent telemetry vs. server ingestion logs
- Backup: all workspace and client data backed up with ≤ 24-hour RPO and ≤ 4-hour RTO in the event of database failure

### Integration

- CSV import supports files up to 50,000 rows and 50MB file size; imports complete within 5 minutes for maximum-size files
- CSV export generates files within 60 seconds for exports up to 10,000 asset records
- Discovery agent communicates exclusively via outbound HTTPS to AssetPilot ingestion endpoint on port 443 — no inbound firewall rules required on client networks
- Phase 2 PSA integrations (ConnectWise, Autotask, HaloPSA) use vendor-provided REST APIs with OAuth 2.0 or API key authentication; integration configuration stored encrypted at rest

---

*PRD completed: 2026-06-05 | Product: AssetPilot — IT Asset Management for MSPs & Small Businesses*
*Input documents: ideas/shortlisted/it-asset-management.md, product-brief-it-asset-management.md, market-research-it-asset-management.md*
*Idea score: 81/105 | Verdict: EXPLORE FURTHER | Next step: Architecture*
