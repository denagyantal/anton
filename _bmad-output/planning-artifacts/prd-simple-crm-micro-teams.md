---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/simple-crm-micro-teams.md
  - _bmad-output/planning-artifacts/brief-simple-crm-micro-teams.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: crm_smb
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Simple CRM for Micro-Teams

**Author:** Root (Automated Pipeline)
**Date:** 2026-06-15
**Product:** Simple CRM for Micro-Teams — Zero-Input Relationship Management for 1–10 Person Teams
**Pipeline Score:** 81/95 (Tier 1 — #1 Recommendation)

---

## Executive Summary

Micro-teams — 1 to 10 people managing client relationships — are the largest underserved segment in a $126 billion CRM market. Only 50% of businesses with fewer than 10 employees use a CRM. The rest manage their most important business asset through inboxes, spreadsheets, and memory. The root cause is structural: enterprise CRMs (Salesforce, HubSpot) require weeks of configuration; lightweight alternatives (Pipedrive, Folk) require manual entry of every interaction. The $19–$39/user tier that includes auto-capture and AI does not exist.

**Simple CRM for Micro-Teams** eliminates the setup and data-entry barriers entirely. Connect Gmail or Outlook via OAuth — 60 seconds — and the system automatically imports 90 days of email history, identifies contacts, extracts context, and builds a living relationship map. No data entry. No configuration. A fully populated CRM in minutes, not weeks.

**Target users:** Real estate agents, small B2B sales teams (2–6 reps), independent consultants, and insurance agents — professionals whose income depends on client relationships but who cannot afford the overhead of enterprise CRM tooling.

**Launch path:** $79 solo / $149 team (5-seat) LTD on AppSumo targeting 2,000–5,000 codes, then $19/user/month MRR. Real estate agents (2M US, 30% CRM adoption) are the beachhead niche.

### What Makes This Special

**Zero input from day one — not "less input."** Connecting Gmail or Outlook results in a fully populated CRM within 2 minutes: contacts identified, email threads grouped, calendar events matched, deal context extracted. This is the breakthrough claim and the product's entire identity.

**Both Gmail AND Outlook auto-capture.** Copper CRM owns Gmail auto-capture. No affordable product serves the 40%+ of micro-teams on Microsoft 365. Owning both providers closes the largest competitive gap in the market.

**Full auto-capture at $19/user/month.** Affinity charges $500+/month. Coffee.ai targets enterprise. Copper starts at $29/month but is Gmail-only and lacks mobile depth. The $19/user price point with full auto-capture — across both providers — has no current occupant.

**Mobile-first.** Real estate agents live in their cars. A desktop-first CRM is a non-starter. Mobile is a core requirement, not a stretch goal: full pipeline management, voice note capture with transcription, and push-notification-driven follow-ups.

**Anti-complexity positioning.** "The CRM your team will actually use." This resonates directly with the 50%+ of small teams who tried Salesforce or HubSpot, failed to adopt it, and abandoned it. The positioning is not just marketing — it is enforced by product decisions: no 200-field customization, no enterprise SSO, no consultant required.

## Project Classification

- **Project Type:** SaaS B2B — cloud-based web application with native iOS and Android mobile apps, multi-user team accounts
- **Domain:** CRM / SMB Sales Enablement — handles business contact data and email metadata; no payment processing of third-party funds; no healthcare or financial services PII
- **Complexity:** Medium — email API integration (Gmail, Outlook) introduces reliability and rate-limit complexity; AI extraction requires accuracy investment; mobile adds release pipeline overhead; GDPR/CCPA compliance required for email metadata processing
- **Project Context:** Greenfield — no existing codebase; new product competing in established market with pricing and UX differentiation

---

## Success Criteria

### User Success

**Primary "aha!" moment:** A user connects Gmail or Outlook and sees their contacts and deal context appear — without entering any data — within their first session. The second aha moment: the system surfaces a follow-up suggestion for a contact they had forgotten about, and they act on it within their first 3 days.

**Onboarding success:**
- ≥80% of new users connect their email account within the first session
- Initial contact import completes within 2 minutes of OAuth grant for ≥95% of connected accounts
- ≥70% of users who connect email report seeing a contact they recognize within 60 seconds of import

**Retention success:**
- D7 retention ≥60% (CRM category benchmark: ~40%)
- D30 retention ≥40%
- ≥60% of real estate agent users log in ≥4 times per week at 30 days
- Mobile app accounts for ≥40% of sessions by month 2

**Engagement success:**
- ≥50% of surfaced follow-up suggestions acted on (email sent, note added, or reminder dismissed)
- ≥3 pipeline stage updates per active user per week
- NPS ≥55 at Day 30 (target ≥65)

**First-use completion rate:**
- ≥90% of users who start onboarding see at least one auto-identified contact before exiting
- ≥60% of users who see contacts also view pipeline within first session

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| LTD codes sold (AppSumo) | 2,000–5,000 | 60-day launch window |
| AppSumo refund rate | ≤12% | 60-day refund window |
| AppSumo review rating | ≥4.3/5 | 60 days post-launch |
| Real estate agent users | ≥30 in first 2 weeks | Beta phase |
| G2/Capterra reviews | ≥50, avg ≥4.5/5 | 90 days post-launch |
| LTD revenue | ≥$200K (survival), ≥$500K (strong) | 60-day launch window |
| MRR | $10K | Month 6 post-launch |
| MRR | $35K | Month 12 post-launch |
| Monthly churn | ≤3% | MRR phase |

### Technical Success

- Gmail OAuth connection success rate ≥99% across personal Gmail and Google Workspace accounts
- Outlook OAuth connection success rate ≥99% across Microsoft 365 and personal Outlook.com accounts
- Email import latency: first contacts appear within 2 minutes of OAuth grant for accounts with up to 90 days of history
- Ongoing email sync latency: new emails appear in CRM within 5 minutes of receipt
- Mobile app crash rate <0.1% of sessions on iOS 16+ and Android 12+
- Background sync stability: continuous sync without manual intervention for ≥14 days after initial connection
- API uptime ≥99.5% (excluding scheduled maintenance windows)

### Measurable Outcomes

**Beta gate (required before AppSumo submission):**
- 30+ beta users (primarily real estate agents) active for ≥2 weeks
- D7 retention in beta cohort ≥55%
- NPS from beta users ≥45
- 10+ video testimonials recorded
- 0 critical bugs in follow-up reminder or pipeline view flows

**AppSumo-to-MRR transition gate (Month 3):**
- ≥500 active LTD users
- D30 retention ≥35%
- ≥3 unprompted referrals per week from existing users
- LTD revenue ≥$100K before scaling MRR acquisition spend

---

## Product Scope

### MVP Strategy

**MVP Approach:** Experience MVP. The entire product validates a single claim: "connect your email and your CRM is already set up." Every MVP feature traces back to delivering this experience completely or enabling it through mobile and follow-up intelligence. No feature ships unless it serves the core zero-input promise.

**MVP Resource Requirements:** 2 full-stack engineers + 1 mobile developer, 8–10 weeks to testable beta. No Zillow integrations, no SMS/WhatsApp capture, no built-in calling, no custom field configuration.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Real estate agent: connect Gmail → contacts appear → see deal pipeline pre-populated → act on follow-up reminder from phone between showings
- Small sales team lead: all reps connect Gmail → team pipeline populated → pipeline review without spreadsheet → reps update stages via mobile
- Independent consultant: connect Outlook → prospect conversations surfaced → follow-up gaps flagged → contact from phone after meeting

**Must-have capabilities:**
1. Gmail OAuth 2.0 connection with 90-day email history auto-import
2. Outlook/Microsoft 365 OAuth 2.0 connection with 90-day email history auto-import
3. AI contact extraction from email correspondents (name, email, company, role from signatures/body)
4. Contact deduplication across email threads
5. Google Calendar sync — past and future events matched to contacts
6. Kanban pipeline view with 3 pre-built templates (Real Estate, B2B Sales, General)
7. Drag-and-drop deal stage management
8. AI-generated follow-up reminders with configurable inactivity thresholds (7/14/30/60 days)
9. One-click AI follow-up email draft generation from reminder
10. Email and mobile push notification delivery for reminders
11. iOS and Android mobile apps with full contact lookup, pipeline view, and voice note capture
12. Team accounts: invite up to 4 teammates, shared contact database, deal assignment
13. CSV contact import (name, email, phone, company)
14. Basic activity feed for team accounts

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Zillow and Realtor.com lead capture integration (real estate niche depth)
- WhatsApp and SMS thread capture
- Advanced activity reporting: email volume, deal velocity, rep leaderboard for team plans
- Guided pipeline customization (limited, structured): rename stages, add/remove stages
- Zapier integration
- Referral program with account credits

**Phase 3 (Months 10–18):**
- AI relationship health scoring: color-coded "at risk" contacts based on communication patterns
- Voice memo → CRM: record a note, AI extracts action items and contacts
- Team templates: broker deploys standardized pipeline to multiple agents
- DocuSign and Calendly integrations for consultants
- "Best deal to close this week" AI recommendation
- White-label / brokerage plans (B2B2C channel)

**Explicit non-scope (MVP):**
- Marketing automation / email sequences
- Built-in calling / dialer
- Custom fields or advanced pipeline customization
- Enterprise SSO, audit logs, SCIM provisioning
- Zapier / API integrations
- WhatsApp / SMS capture
- AI-drafted email sending directly from within the CRM
- Zillow / MLS / Realtor.com integrations
- HubSpot or Salesforce data migration tools (CSV import only)

### Risk Mitigation Strategy

**Technical risks:**
- Gmail/Outlook API reliability — use Nylas or Merge.dev as abstraction layer; implement Smart BCC fallback; robust retry logic and error handling for rate limits
- Auto-capture accuracy <95% — extensive pre-launch testing across account types; user correction UI that feeds back to model
- Mobile release lag — begin iOS App Store and Google Play review submissions 4 weeks before planned launch date

**Market risks:**
- Copper adds Outlook support — deepen real estate niche (templates, workflow depth, community presence) before this occurs; price differentiation alone is not the moat
- AppSumo LTD support overload — cap codes at 3,000–5,000; build comprehensive self-serve docs before launch; allocate part-time support resource by week 2

**Resource risks:**
- Hard gate: do not submit to AppSumo until D7 retention in beta ≥55% and NPS ≥45. These metrics predict launch success more reliably than feature count.

---

## User Journeys

### Journey 1: Real Estate Agent — Maria's First Week

**Opening Scene:** Maria, 38-year-old Phoenix real estate agent, closes 22 homes/year. She manages 15–30 active leads at any time and 400+ past clients. She tried Follow Up Boss 2 years ago, spent a weekend setting it up, gave up when she realized she'd have to manually log every call and text. She's currently managing deals in a spreadsheet and her inbox.

It's a Tuesday evening. Maria sees a reply in r/realestate: "Anyone using a CRM that actually syncs with Gmail without manual entry?" — our product appears in 3 responses. She clicks the link.

**Rising Action:** She watches a 90-second demo: Gmail connect → contacts appear in 60 seconds. No forms, no CSV, no consultant. She signs up, no credit card required. She connects her Gmail. While she's still on the computer, 47 contacts appear. Six email threads are tagged as active buyer conversations. She sees "Last Contact: 18 days ago" next to a buyer she showed homes to 3 weeks back.

**Climax:** A suggestion appears: "You haven't reached out to David Chen in 18 days — want to send a quick check-in?" She taps "Draft follow-up." A short email appears. She edits two sentences and hits send. That's the aha moment. She did in 30 seconds what she would have skipped entirely.

**Resolution:** Over the next week, Maria adds the mobile app. She adds a voice note after each showing — transcribed, attached to the contact. She acts on two more follow-up suggestions. A past client she last contacted 65 days ago responds; they're ready to list. Maria connects this directly to the product. She posts in a Facebook realtor group: "Finally a CRM that doesn't make me do homework."

**Journey requirements revealed:** Gmail OAuth + import, AI contact extraction, last-contact surfacing, follow-up suggestion with draft generation, mobile voice note, push notifications, real estate pipeline template.

---

### Journey 2: Small Sales Team Lead — Derek's Team Rollout

**Opening Scene:** Derek runs a 6-person sales team at a 30-person marketing agency. Pipeline visibility requires a Monday standup where he asks each rep what's happening. Reps update a shared Google Sheet inconsistently. He tried Salesforce Essentials 18 months ago — 3 weeks of setup, 1 month of use, ghost town. HubSpot Free hit feature walls.

Derek posts in r/sales: "Looking for CRM for 6-person team that reps will actually use." Multiple replies mention our product.

**Rising Action:** Derek signs up, connects his Gmail. His contact database appears — populated from real email history. He schedules a 15-minute demo call with his two senior reps. They see auto-populated pipelines with their actual deals. No one has to enter anything. One rep says: "Wait, it just figured out who I'm talking to?" That's the entire sales pitch.

**Climax:** Derek buys the team LTD ($149). All 5 reps connect Gmail within 24 hours. By end of the week, every rep's pipeline is populated with real deal data from email history. Monday pipeline review uses the CRM view for the first time. Derek has visibility without a standup. Reps actually update stages because the system already captured the activity — all they do is move the card.

**Resolution:** 60 days later, Derek upgrades 3 seats to monthly (team grew to 8). He mentions the tool in a SaaS Slack community. Two referrals sign up the same week.

**Journey requirements revealed:** Team invitation flow, shared contact database, deal assignment, activity feed, team pipeline view, rep-level visibility for managers, Gmail OAuth for multiple accounts.

---

### Journey 3: Independent Consultant — Priya's Pipeline Recovery

**Opening Scene:** Priya, 44-year-old management consultant, 1-person practice, 8–12 active clients, 20+ prospect conversations at various stages. Her pain: "I lose track of where conversations are. I'll realize I haven't followed up with someone in 3 months and they've hired a competitor." She uses Outlook, not Gmail.

**Rising Action:** Priya's coach recommends our product. She connects Outlook — worried it won't work because "most of these tools are Gmail-only." It works. Her 90 days of Outlook history produces 34 contacts, including 11 active prospect threads she hadn't categorized. She creates a "Consulting Pipeline" and moves cards to reflect the current state of each engagement.

**Climax:** Three days later, the product surfaces: "4 prospects have gone quiet in the last 30 days." She clicks through, sees the threads, and sends 4 brief check-in emails in 8 minutes. Two respond within 48 hours. One schedules a call. She books a $45K engagement she had mentally written off.

**Resolution:** Priya becomes a vocal advocate. She records a testimonial video. She mentions the product in her consultant newsletter (2,400 subscribers). 18 signups in the next week — all consultants. Her use case seeds a second growth niche beyond real estate.

**Journey requirements revealed:** Outlook OAuth + import, general pipeline template, inactivity-based follow-up suggestions, contact filtering by last-contact date, desktop-first experience (consultants work primarily on desktop).

---

### Journey 4: Team Member Edge Case — Onboarding Friction Recovery

**Opening Scene:** Alex, one of Derek's sales reps, connects his Gmail during team rollout. The OAuth flow fails — his company uses Google Workspace with a restrictive domain policy that blocks third-party app access.

**Rising Action:** Alex sees an error message: "Gmail access blocked by your organization's Google Workspace policy. Contact your Google Workspace admin to allow [app name], or connect with a personal Gmail account in the meantime." Clear next steps, not a cryptic failure.

**Climax:** Alex forwards the error message to his IT admin, who allows the app within the hour. Alex reconnects — his history imports successfully. Alternatively, Alex emails the product support address; response arrives within 4 hours with step-by-step Workspace admin instructions.

**Resolution:** No deal data is lost. Alex's pipeline is indistinguishable from his teammates'. The error recovery path prevents a frustrated churned user.

**Journey requirements revealed:** Informative OAuth error states, Workspace-specific troubleshooting messaging, support contact accessible from the error screen, sync retry on reconnect.

---

### Journey Requirements Summary

| Capability | Required By |
|---|---|
| Gmail OAuth 2.0 auto-import | Maria, Derek, Alex |
| Outlook OAuth 2.0 auto-import | Priya |
| AI contact extraction + deduplication | Maria, Derek, Priya |
| Real estate pipeline template | Maria |
| B2B sales pipeline template | Derek |
| General / consulting pipeline template | Priya |
| Follow-up reminder with draft generation | Maria, Priya |
| Mobile app (iOS/Android) | Maria, Derek |
| Voice note capture | Maria |
| Team invitation + shared contact database | Derek |
| Deal assignment to team member | Derek |
| Activity feed (team visibility) | Derek |
| Informative OAuth error states | Alex |
| Desktop-first experience | Priya |
| Inactivity-based contact surfacing | Priya |

---

## Domain-Specific Requirements

### Compliance & Privacy

The product processes email metadata (sender, recipient, timestamp, subject line) and AI-generated summaries. It functions as a **data processor** on behalf of users who are the data controllers for their own business email.

**GDPR (EU users):**
- Lawful basis for processing: legitimate interest (business relationship management) documented in privacy policy
- Right to erasure: users can permanently delete their account and all associated data within 30 days of request
- Data portability: users can export all contact data as CSV at any time
- Data Processing Agreement (DPA) available for EU business customers on request
- Sub-processors (email API abstraction layer, cloud hosting) documented in privacy policy

**CCPA (California users):**
- Right to know: privacy policy lists categories of data collected and purposes
- Right to delete: account deletion flow purges all contact and email metadata
- Right to opt out of sale: no sale of personal data; documented explicitly

**Email content handling:**
- Email body content is NOT stored on product servers. AI extraction (contact name, company, role) is processed transiently and only the extracted structured data is persisted.
- Email subject lines are stored as activity metadata to support timeline display
- Users are informed of this architecture at OAuth connection time ("We read your emails to identify contacts. We don't store email content.")

### Technical Constraints

**Google OAuth requirements:**
- Gmail API and Google Calendar API require Google Cloud project with verified app status for production use
- Google's OAuth verification review takes 2–6 weeks; must begin before planned launch date
- Gmail API has per-user read quota (1 billion units/day per project); batched import must respect this limit
- Google Workspace organizational accounts may have third-party app access restricted by domain admin

**Microsoft OAuth requirements:**
- Microsoft Graph API requires Azure app registration
- Work/school accounts (Microsoft 365) require tenant admin consent for organization-wide access; consumer Outlook.com accounts use standard OAuth
- Delegated permissions required: `Mail.Read`, `Calendars.Read`, `offline_access`

**App Store review:**
- Apple App Store and Google Play review timelines add 1–4 weeks to initial release and major updates; mobile feature completion must precede launch by at least 4 weeks

**Email API abstraction:**
- Use Nylas or Merge.dev as abstraction layer over Gmail and Outlook APIs to reduce per-provider maintenance and improve reliability. Vendor evaluation must consider rate limit handling, webhook support, and per-user pricing.

---

## Innovation Analysis

### Detected Innovation Areas

**Zero-input CRM as a category position:** The phrase "zero data entry" exists as marketing language across many CRM products. The product's innovation is delivering it literally — connect email, CRM is pre-populated — rather than incrementally reducing entry burden. This is a positioning breakthrough enabled by maturing email API infrastructure and LLM-quality contact extraction.

**Dual-provider auto-capture at accessible pricing:** Copper CRM proves the Gmail auto-capture model works and generates strong retention (users who capture once become dependent on capture). The innovation is extending that model to Outlook and pricing it at $19/user/month rather than the $45–$100+ that comparable auto-capture products require. This is not a technical breakthrough but a structural market insight: the feature is feasible at low cost, but incumbents have not moved pricing down.

**Mobile-first follow-up loop:** Most CRMs treat mobile as a reduced-capability companion. This product inverts the priority: the mobile experience (view contacts between meetings, add voice notes, act on push-notification reminders) is the primary engagement loop for real estate agents. Desktop is secondary.

### Market Context

The "zero manual entry" positioning has been attempted before (Coffee.ai, Affinity, Docsend + CRM combos) but only at enterprise pricing or narrow vertical focus. The $19/user/month price point combined with both Gmail and Outlook coverage has no current competitor occupying it. HubSpot and Salesforce price hike backlash in 2025–2026 creates a receptive audience in the exact communities (r/sales, r/realestate, r/smallbusiness) where the product will launch.

### Validation Approach

The innovation hypothesis is binary: either the auto-capture experience is accurate and fast enough to feel magical, or it isn't. Validation gates:
- 95%+ of test accounts successfully import ≥10 recognizable contacts within 2 minutes of OAuth
- Beta users confirm "this felt different from other CRMs I've tried" in exit survey (target: ≥80% agreement)
- D7 retention in beta ≥55% (if auto-capture truly sticks, it creates immediate dependency)

### Risk Mitigation

- If Gmail-only auto-capture is significantly faster to build, launch with Gmail first and add Outlook in Phase 2 — but do not market as "both providers supported" until Outlook is live
- If AI contact extraction accuracy is <90% in testing, add a "review extracted contacts" step in onboarding rather than silently populating the database with errors

---

## SaaS B2B Specific Requirements

### Project-Type Overview

Simple CRM for Micro-Teams is a cloud-based SaaS application with a web frontend and native mobile apps (iOS + Android). It serves small, self-managed teams of 1–10 users who provision and manage their own accounts without IT involvement. There is no on-premise deployment, no enterprise SSO requirement, and no custom implementation work.

### Multi-Tenancy Model

- **Account = Team.** One account holds all users, contacts, deals, and settings for a micro-team
- All contacts and deals are scoped to the account; no cross-account data sharing
- Users belong to exactly one account (no multi-account membership in MVP)
- Team plan: up to 5 users per account (MVP). Growth plan (Phase 2): up to 10 users

### Permission Matrix (RBAC)

| Capability | Owner | Member |
|---|---|---|
| Invite / remove team members | ✅ | ❌ |
| View and edit all contacts | ✅ | ✅ |
| View and edit all deals | ✅ | ✅ |
| Assign deals to other members | ✅ | ✅ |
| Delete contacts or deals | ✅ | ❌ |
| Manage billing and subscription | ✅ | ❌ |
| Connect / disconnect email account | ✅ (own) | ✅ (own) |
| Export contact data | ✅ | ❌ |
| Delete account | ✅ | ❌ |

**Note:** In MVP, each user connects their own email account. Shared inbox / delegated access is Phase 2.

### Subscription & Billing

- **Solo plan:** 1 seat. $19/month or $79 LTD (AppSumo)
- **Team plan:** 5 seats. $49/month or $149 LTD (AppSumo)
- **Growth plan (Phase 2):** 10 seats. $99/month
- Stripe for subscription management and LTD code redemption
- 30-day free trial, no credit card required
- Downgrade: if team exceeds seat limit due to downgrade, additional members become read-only until seats are added or excess members removed
- LTD codes: single-use, redeemable via code entry at registration or from billing settings

### Technical Architecture Considerations

- Web app: React SPA + REST API backend
- Mobile: React Native (shared codebase across iOS and Android) or native Swift/Kotlin (better performance but higher cost; evaluate during architecture phase)
- Email API: Nylas or Merge.dev abstraction layer (evaluate rate limits, webhook support, pricing)
- AI extraction: OpenAI GPT-4o or equivalent for contact extraction from email signatures; batch processing on import
- Background jobs: queue-based sync worker for ongoing email/calendar monitoring (Redis + Sidekiq or equivalent)
- Database: PostgreSQL with tenant isolation via `account_id` foreign key on all tables
- Hosting: AWS or GCP; horizontal scaling for sync worker tier

### Implementation Considerations

- OAuth token refresh must be handled automatically; users must never be prompted to re-authenticate unless token is revoked
- Email import must be resumable: if interrupted mid-import, restart from last processed email rather than beginning
- Mobile app must be submitted to both App Store and Google Play at least 4 weeks before AppSumo launch date to allow review time
- Background sync must run without degrading web app performance (separate worker process/tier)

---

## Functional Requirements

### Email & Calendar Integration

- FR1: Users can connect a personal Gmail or Google Workspace Gmail account via OAuth 2.0 and trigger auto-import of the last 90 days of sent and received emails
- FR2: Users can connect a Microsoft 365 or personal Outlook.com account via OAuth 2.0 and trigger auto-import of the last 90 days of sent and received emails
- FR3: System automatically identifies and creates contact records from email correspondents discovered during initial import
- FR4: System continuously syncs new inbound and outbound emails to contact records in real time (within 5 minutes of email receipt or send)
- FR5: Users can connect Google Calendar via OAuth 2.0 and auto-import past and upcoming calendar events matched to existing contacts by attendee email address
- FR6: System displays a sync status indicator on the account settings page showing last successful sync timestamp and any active errors per connected account
- FR7: Users can disconnect a connected email or calendar account, with explicit confirmation of what data will be retained
- FR8: System displays a clear, actionable error message when OAuth connection fails due to organizational policy restrictions, with instructions for resolution

### Contact Management

- FR9: System extracts and populates contact name, email address, company, and role from email signatures and email body text using AI during import
- FR10: System deduplicates contacts identified from multiple email threads into a single contact record, prioritizing the most complete data available
- FR11: Users can view a chronological communication timeline for each contact showing all matched emails, calendar events, and manually added notes
- FR12: Users can manually edit any auto-extracted field on a contact record (name, company, role, phone, notes)
- FR13: Users can add freeform text notes to a contact record
- FR14: Users can search contacts by name, email address, or company name with results appearing within 1 second
- FR15: System displays last contact date and approximate contact frequency on each contact card in list view
- FR16: System surfaces contacts with no communication in a user-configurable number of days (7, 14, 30, or 60) as requiring follow-up

### Pipeline Management

- FR17: Users can view all active deals in a Kanban board organized by deal stage
- FR18: Users can move deals between pipeline stages via drag-and-drop on web and mobile
- FR19: Users can select from 3 pre-built pipeline templates during onboarding: Real Estate (Lead → Active Buyer → Under Contract → Closed → Referral), B2B Sales (Prospect → Qualified → Proposal → Negotiation → Won/Lost), General (New → Active → Follow-Up → Closed)
- FR20: Users can create a new deal record, associate it with a contact, and set an initial pipeline stage
- FR21: System records stage-change timestamps and maintains a stage history log accessible from each deal record
- FR22: Users can view deal details including associated contact, current stage, stage history, and linked email/calendar activity

### Smart Follow-Ups & AI Reminders

- FR23: System generates follow-up suggestions when a contact's last communication falls outside the configured inactivity threshold
- FR24: Users can configure inactivity thresholds globally for their account (7, 14, 30, or 60 days)
- FR25: System delivers follow-up suggestions via email notification to the user's registered email address
- FR26: System delivers follow-up suggestions via mobile push notification on iOS and Android
- FR27: Users can generate an AI-drafted follow-up email template from a reminder suggestion with a single action; the draft is editable before the user sends it via their own email client
- FR28: Users can dismiss a follow-up reminder to suppress it for a specific contact
- FR29: Users can snooze a follow-up reminder for 7 days

### Mobile Experience

- FR30: Users can view, search, and open contact records on the iOS (16+) and Android (12+) mobile app
- FR31: Users can view the deal pipeline and move deal stages on mobile
- FR32: Users can add voice notes to a contact record on mobile; the voice note is transcribed to text and saved as a note on the contact
- FR33: Users receive follow-up reminders as push notifications on mobile with direct deep-link to the relevant contact
- FR34: Users can browse contact and pipeline data on mobile without active internet connection using locally cached data from the most recent sync
- FR35: Users can add text notes to a contact record on mobile

### Team Collaboration

- FR36: Account owners can invite up to 4 additional users to the team account via email address
- FR37: Invited users receive an email invitation and can register or log in to join the account
- FR38: All team members share access to the account's unified contact database and deal pipeline
- FR39: Users can assign a deal to a specific team member
- FR40: Team members can view an activity feed showing recent actions by any team member (emails logged, deals moved, notes added) within the last 7 days
- FR41: Account owners can remove a team member from the account

### Data Import & Onboarding

- FR42: Users can import contacts from a CSV file containing at minimum name, email, phone number, and company fields; the system maps columns and previews data before import
- FR43: System guides new users through a step-by-step onboarding flow: connect email → select pipeline template → review imported contacts
- FR44: System displays a progress indicator and estimated completion time during initial email import
- FR45: System prompts users to select their pipeline template during onboarding with the Real Estate template as the recommended default

### User Account & Administration

- FR46: Users can register for an account using email address and password
- FR47: Users can reset their password via a time-limited link sent to their registered email address
- FR48: Account owners can view current subscription plan, billing history, and update payment method
- FR49: Users can configure email and push notification preferences (on/off per notification type)
- FR50: Account owners can export all contact data as a CSV file
- FR51: Account owners can permanently delete their account and all associated data with a confirmation step and 30-day grace period before irreversible deletion

---

## Non-Functional Requirements

### Performance

- Email import completes within 2 minutes of OAuth grant for accounts with up to 90 days of email history and up to 5,000 emails, measured at p95
- Ongoing email sync latency: new emails appear in contact timelines within 5 minutes of receipt or send, measured at p95 under normal load
- Web app page loads (contact list, pipeline view, contact detail) complete within 3 seconds at p95 under normal load
- Pipeline Kanban renders within 2 seconds for accounts with up to 500 active deals
- Contact search returns results within 1 second for accounts with up to 10,000 contacts
- Mobile app initial load (cold start to contact list visible) completes within 4 seconds on mid-range devices

### Security

- All OAuth tokens (Gmail, Outlook, Google Calendar) stored encrypted at rest using AES-256
- Email body content is not stored on product servers; AI extraction processes email content transiently and persists only structured outputs (name, company, role, subject line metadata)
- All data transmitted between client and server via HTTPS with TLS 1.2 minimum
- All contact and deal data encrypted at rest in the database
- Tenant data isolation enforced at query level: every database query scoped by `account_id`; no cross-tenant data access possible
- Session tokens expire after 30 days of inactivity; re-authentication required
- Password minimum requirements: 8 characters, at least one number and one special character
- GDPR right to erasure: account deletion purges all user-identifiable data within 30 days of confirmed request
- CCPA: no sale of personal data; documented in privacy policy

### Scalability

- System supports 10,000 active user accounts without infrastructure architecture changes
- Email sync worker tier scales horizontally via queue depth monitoring to handle AppSumo launch traffic spikes
- Background sync jobs implement exponential backoff and retry logic for Gmail and Outlook API rate limit responses (HTTP 429) and transient failures
- Database read replicas added before AppSumo launch to isolate sync worker reads from web app reads

### Reliability & Availability

- Production environment uptime ≥99.5% measured monthly, excluding planned maintenance windows
- Gmail OAuth connection success rate ≥99% for accounts with valid, active Gmail credentials
- Outlook OAuth connection success rate ≥99% for accounts with valid, active Microsoft credentials
- Background sync service recovers automatically from failure within 5 minutes without user intervention
- Email import is resumable: if interrupted, restarts from the last successfully processed email rather than from the beginning

### Accessibility

- Web app meets WCAG 2.1 Level AA for all primary user flows (contact list, pipeline view, onboarding, follow-up action)
- Mobile apps meet platform accessibility guidelines (Apple HIG accessibility, Android accessibility guidelines) for all primary flows
- All interactive elements have accessible labels; color is not the sole means of conveying information

### Integration

- Gmail integration via Google Gmail API v1 and Google Calendar API v3 with delegated access via OAuth 2.0
- Outlook integration via Microsoft Graph API (`Mail.Read`, `Calendars.Read`, `offline_access` delegated permissions)
- OAuth token refresh handled automatically by the application before expiration; users notified via email only if manual re-authentication is required due to revocation
- Email API integration layer (Nylas/Merge.dev) must support webhook delivery for real-time new-email events with <5-minute latency
- Mobile push notifications delivered via APNs (iOS) and FCM (Android); delivery success rate ≥95% for devices with active sessions
