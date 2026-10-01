---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/multi-crew-service-dispatcher.md
  - _bmad-output/planning-artifacts/market-research-multi-crew-service-dispatcher.md
  - _bmad-output/planning-artifacts/brief-multi-crew-service-dispatcher.md
workflowType: 'prd'
lastStep: 12
research_type: 'prd'
research_topic: 'multi-crew-service-dispatcher'
user_name: Root
date: '2026-10-01'
classification:
  projectType: mobile_app
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CrewTrack

**Author:** Root
**Date:** 2026-10-01
**Version:** 1.0

---

## Executive Summary

CrewTrack is a mobile-first crew dispatch application for service business owners managing 3–10 field crews without a dedicated dispatcher. The product eliminates the three highest-intensity daily operational pains in this segment: crew call-out chaos with no backup system, "crew didn't show" customer disputes with no photo proof, and zero real-time visibility across multiple crews without making phone calls.

The target customer is the owner-operator who runs their own crew while simultaneously dispatching 2–9 other crews — a persona that no existing tool is designed for. Enterprise platforms (ServiceTitan: $2,000+/month) require dedicated dispatch staff. Mid-market tools (Jobber: $169+/month; Housecall Pro: $299+/month) are architected for office workflows and have weak crew-to-owner communication. WhatsApp is the current default — free, but with zero job tracking, completion verification, or backup sub management.

The US target market is 170,000–250,000 service businesses (cleaning, landscaping, pressure washing, painting) in the 3–10 crew range. IdeaFast scores crew management at 90/100 in r/sweatystartup — the #2 most-discussed pain across 300,000+ members. No purpose-built solution exists.

**Pricing:** $39/month (5 crews) / $69/month (10 crews). LTD: $79 / $129.
**Build timeline:** 8 weeks to MVP.
**Revenue target:** $13.6K MRR (350 customers) by month 12.

### What Makes This Special

Three differentiators have no direct competitive equivalent in the 3–10 crew segment:

1. **Owner-as-dispatcher UX** — The entire product is designed for the person who is simultaneously managing crews AND running a job themselves. The dashboard is glanceable in 10 seconds. Job creation takes under 2 minutes on a phone. No desktop required. This is an architectural constraint, not a feature.

2. **Built-in backup subcontractor management** — No competitor (Jobber, Housecall Pro, Connecteam, Workiz, FieldPulse) has a backup sub list integrated into the dispatch flow. This addresses the highest-emotional-intensity pain in the segment: a crew lead cancellation the morning of jobs, resolved in under 2 minutes instead of 30–45 minutes of phone calls.

3. **Four-tap crew lead app with photo proof** — Crew leads (often field workers with no business software experience) have exactly four interactions per job: see jobs → start job → take photos → mark done. Timestamped, geotagged arrival and completion photos eliminate the "crew didn't show" dispute category and replace a separate CompanyCam subscription ($63–$249/month).

**Core insight:** Service business owners in the 3–10 crew range don't need a stripped-down enterprise tool — they need a tool built from the ground up for someone who is dispatching from a job site with one free hand.

## Project Classification

- **Project Type:** Mobile application (React Native, iOS + Android)
- **Domain:** Field service management / service business operations
- **Complexity:** Medium — no regulated compliance requirements; complexity comes from real-time mobile sync, offline mode requirement, and two-sided app architecture (owner dashboard + crew lead app)
- **Project Context:** Greenfield — no existing system to replace or integrate with

---

## Success Criteria

### User Success

**Owner success (primary):**
- Owner creates and assigns all day's jobs in under 10 minutes total
- Owner checks crew status via dashboard instead of calling crew leads (measurable: zero outbound "status check" calls on days with active CrewTrack use)
- When a crew lead calls out, owner confirms a backup within 15 minutes (vs. 30–45 minutes current state)
- When a customer dispute occurs, owner sends photo proof and resolves without a refund

**Crew lead success (secondary, adoption-critical):**
- Crew lead completes first full job cycle (receive assignment → start → photo → complete) within 5 minutes of first app open, without assistance
- Crew lead prefers CrewTrack over WhatsApp within first week — because they get clearer job details and fewer "where are you?" calls from the owner

**Emotional success markers:**
- Owner: "I stopped calling my crew leads every morning to check in"
- Owner: "A customer complained and I just sent them the photo — dispute done"
- Owner: "My crew lead cancelled and I had a replacement confirmed before I even finished my coffee"
- Crew lead: "I know exactly where to go and what to do — no more texts from the boss asking if I'm there"

### Business Success

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Paying customers | 50 | Month 3 (beta) |
| Paying customers | 200 | Month 6 (post-AppSumo) |
| Paying customers | 350 | Month 12 |
| MRR | $2K | Month 3 |
| MRR | $7.8K | Month 6 |
| MRR | $13.6K | Month 12 |
| Monthly churn | <5% | Month 6+ |
| AppSumo LTD revenue | $50K–$150K | Months 3–5 |
| G2/Capterra reviews | >50 | Month 6 |
| NPS | >50 | Month 6 |

### Technical Success

- Crew lead app works reliably in poor cellular conditions (field workers frequently in areas with degraded signal): all core actions queue offline and sync on reconnect with no data loss
- iOS and Android parity from day one — no platform-exclusive features
- Photo upload completes within 5 seconds on 4G connection (3MB photo)
- Push notification delivery latency: <10 seconds for job assignment and completion events
- App store rating: 4.5+ stars on both platforms by month 3

### Measurable Outcomes

**Leading indicators (predict retention before month 3):**
- Crew leads using the app within first 7 days of account activation → predicts 90-day retention
- Owner creates jobs 5+ days in first 2 weeks → predicts daily-habit formation
- Backup sub list populated with 3+ subs within first month → predicts call-out resilience and deeper engagement

**Lagging indicators (confirm retention and value delivery):**
- Photo completion rate >80% of completed jobs by day 30
- Crew lead daily active rate >70% of job days by week 4
- Zero accounts churning due to crew lead non-adoption (the primary failure mode)

## Product Scope

### MVP — Minimum Viable Product

The MVP is defined by the minimum that makes all three core value propositions real in the owner's first week: real-time crew visibility, photo proof of completion, and backup sub management.

**Must-have capabilities:**
- Owner job creation and assignment (address, service type, time window, customer notes)
- Push notification to crew lead on job assignment
- Crew lead app: four-tap job completion flow (see jobs → start → arrival photo → completion photo → done)
- Owner live dashboard: all crews, job statuses, overdue alerts
- Photo proof record: timestamped + geotagged, stored per job, shareable link
- Backup subcontractor list: pre-load subs, one-tap job offer on call-out event
- Crew roster management: add/remove crew leads, SMS verification login
- Push notifications for all core events (new job, started, completed, overdue, call-out, backup confirmed)
- Spanish language support for crew lead app (launch requirement, not post-MVP)
- Offline mode for crew lead app: queue actions, sync on reconnect

**MVP success gate (go/no-go for AppSumo launch at month 3):**
- 50+ active accounts with crew leads actively using the app
- Crew lead daily active rate >70%
- 20+ documented photo-proof dispute resolutions
- 10+ documented backup sub call-out saves
- 20+ G2/Capterra reviews at 4.5+ stars average

### Growth Features (Post-MVP, Months 4–9)

- Customer SMS notifications ("your crew is on the way" / "job complete")
- Invoice generation from completed job record with photo evidence
- Recurring job scheduling (weekly/biweekly cleaning, lawn care routes)
- Route optimization for crew leads with sequential jobs
- Enhanced photo reporting: PDF job summary with before/after photos
- In-app messaging between owner and crew lead (replace WhatsApp for job-specific comms)
- QuickBooks / Xero sync for completed job invoices

### Vision — Future Platform (Months 9–18+)

- Crew performance analytics: completion times, photo compliance rates, customer ratings per crew
- AI-assisted backup sub recommendation (surfaces best available sub by location, skills, reliability)
- Customer portal: customers view job status, photos, and history
- Web dashboard for desktop-based reporting and bulk job creation
- 15-crew tier for accounts outgrowing the 10-crew plan
- Payroll integration: time in/time out per job for payroll processing
- International expansion: UK, Australia, Canada
- Vertical expansion: HVAC residential service, pest control, tree service, window cleaning, event staffing
- Platform API: CrewTrack as a crew management layer that integrates with any FSM platform

---

## User Journeys

### Journey 1: Marcus — The Morning Dispatch (Primary Owner, Success Path)

Marcus, 34, runs 4 cleaning crews and still runs one himself. It's 6:45 AM. He opens CrewTrack while drinking coffee.

**Opening scene:** Marcus sees 12 jobs scheduled for today across 4 crews. He taps "Create Job" for two new same-day requests he got last night, enters the address, service type, and a gate code, and assigns each to a crew lead. Two push notifications fire. Done in 4 minutes.

**Rising action:** By 8:30 AM, his dashboard shows 3 of 4 crews have started their first jobs (green dot, "Active"). Crew Lead #2 hasn't started. The job shows overdue. Marcus doesn't call — he checks the dashboard and sees the job is 22 minutes past window. He taps the crew lead's name and calls from the app. Crew lead was stuck in traffic. Job rescheduled.

**Climax:** At 11 AM, a customer texts Marcus: "Your crew never showed up this morning." Marcus opens the job record in CrewTrack. He sees an arrival photo timestamped 9:07 AM, geotagged to the customer's address. He texts the customer the shareable link. Customer apologizes — they forgot they'd already let the crew in.

**Resolution:** Marcus finishes his own jobs and checks the dashboard one more time at 4 PM. 11 of 12 jobs completed. One rescheduled. No refunds issued. No "where are you?" calls made. He texts his wife: "Actually had time for lunch today."

**Requirements revealed:** Job creation flow, crew assignment, push notifications, live dashboard with status states, overdue alerts, photo proof record with shareable link.

---

### Journey 2: Sofia — The Call-Out Crisis (Primary Owner, Edge Case)

Sofia, 41, runs 6 landscaping crews during peak season. It's 7:15 AM, April. She's in her truck.

**Opening scene:** Her phone buzzes — Crew Lead Miguel has sent a "not available" notification through CrewTrack. He's sick. Miguel had 4 jobs today. Sofia feels the familiar dread — this used to mean 30 minutes of calling her mental rolodex.

**Rising action:** She taps "Find Backup." Her backup sub list appears: 3 available landscaping subs, each with their notes ("works North Side only", "no commercial, residential only", "available last-minute"). She picks two, taps "Send Job Offer" to both — they each get a push notification with all 4 job addresses, times, and service notes.

**Climax:** Within 8 minutes, Sub #1 accepts 3 jobs, Sub #2 accepts 1. CrewTrack automatically reassigns those jobs on the dashboard. Sofia didn't cancel a single job.

**Resolution:** Sofia arrives at her first property. She checks the dashboard. 6 crews worth of jobs are assigned and running. She doesn't call anyone until noon — just watches green dots appear as crews mark jobs done. Peak season, and she's managing it from one screen.

**Requirements revealed:** Crew lead unavailability notification, backup sub list pre-loading, one-tap job offer dispatch to backup subs, job reassignment on acceptance, dashboard reflecting reassignment in real time.

---

### Journey 3: New Crew Lead Onboarding (Crew Lead, First Day)

Carlos, 24, just started with Marcus's cleaning company. He got a text this morning: "Download CrewTrack." He's never used business software.

**Opening scene:** Carlos opens the app. He sees a phone number verification screen — types his number, gets an SMS code, enters it. No password. He's in.

**Rising action:** His screen shows two jobs for today: "8:30 AM — 14 Oak Street" and "11:00 AM — 22 Pine Ave." Each has an address, service type ("Standard Residential Clean"), and customer notes. He taps the first job. A "Start Job" button. He taps it.

**Climax:** The app prompts him to take an arrival photo. He takes one of the front door. The photo uploads with a timestamp and location tag. He cleans. He takes a completion photo. He taps "Mark Done." He's back at his job list. The second job is highlighted. He doesn't need to text Marcus anything.

**Resolution:** Carlos finishes his second job the same way. He texts his roommate: "New job app is actually easy." He uses it every day without prompting. Marcus's dashboard shows both completions, with photos.

**Requirements revealed:** SMS verification login (no email/password), job list sorted by time, per-job details screen, start/arrival photo/completion photo/done four-tap flow, automatic geotag and timestamp, minimal onboarding.

---

### Journey 4: Derek — The Tool Consolidation (Owner, Replacing CompanyCam)

Derek, 29, runs 3 pressure washing trucks. He pays $63/month for CompanyCam just for before/after photos. He hears about CrewTrack from a r/sweatystartup post.

**Opening scene:** Derek signs up, creates his 3 trucks as crew leads. He creates a job and assigns it. His crew lead gets the notification, starts the job, takes a before photo ("arrival"), takes an after photo ("completion"). Derek opens the job record and sees both photos, timestamped.

**Rising action:** Derek checks his invoicing workflow. He currently does: job done → open CompanyCam → find photos → copy them → attach to invoice. With CrewTrack, the photos are already in the job record. One link to share with the customer.

**Climax:** Month end: Derek cancels his CompanyCam subscription. He saves $63/month. CrewTrack costs $39/month. Net save: $24/month — plus he has crew tracking and backup subs now, which he didn't have before.

**Resolution:** Derek posts in r/sweatystartup: "Dropped CompanyCam for CrewTrack. Tracks my trucks, has before/after photos built in, and cheaper. Anyone else using this?"

**Requirements revealed:** Job photo record (arrival + completion), photo accessible from job record for customer sharing, ROI story that makes the subscription immediately cost-neutral for photo-focused businesses.

---

### Journey 5: Account Admin — Managing Crew Roster

Marcus is onboarding a new crew lead and retiring an old one.

**Opening scene:** Marcus opens the Crew Roster section. He taps "Add Crew Lead" and enters the new lead's name and phone number. The app sends an SMS invite with a verification code.

**Rising action:** He sees the outgoing crew lead in his list. He taps "Deactivate." The system removes them from future job assignment options but retains their job history (for photo proof records).

**Climax:** Marcus reviews his backup sub list. He adds two new subs he found after last month's call-out crisis — names, phone numbers, service types, and notes. He sets one as "priority" for call-outs.

**Resolution:** Marcus's roster is current. New crew lead onboards themselves via SMS verification. Old records are retained for customer dispute proof.

**Requirements revealed:** Crew lead add/deactivate (not delete), SMS invite flow, backup sub CRUD management, job history retention after deactivation.

### Journey Requirements Summary

| Journey | Capabilities Required |
|---------|----------------------|
| Morning dispatch (Marcus) | Job creation, crew assignment, push notifications, live dashboard, overdue alerts, photo proof, shareable links |
| Call-out crisis (Sofia) | Crew unavailability alert, backup sub list, job offer dispatch, auto-reassignment, real-time dashboard update |
| New crew lead onboarding (Carlos) | SMS verification, job list, four-tap flow, photo capture, geotag/timestamp, minimal UI |
| Tool consolidation (Derek) | Photo record per job, before/after photo workflow, photo sharing for invoicing |
| Roster management | Crew lead add/deactivate, SMS invite, backup sub CRUD, job history retention |

---

## Mobile App Specific Requirements

### Project-Type Overview

CrewTrack is a two-sided mobile application built with React Native for cross-platform iOS/Android delivery from a single codebase. It has two distinct app experiences sharing a backend:

1. **Owner App** — Job management, crew assignment, live dashboard, backup sub management, photo proof gallery
2. **Crew Lead App** — Simplified four-tap job completion flow designed for field workers with minimal tech experience

The product is field-operation-first: all critical workflows must be completable in one hand on a phone screen, often while physically working.

### Technical Architecture Considerations

**Platform requirements:**
- React Native (iOS + Android from single codebase)
- Android-first beta testing (field workers disproportionately use Android)
- iOS launched simultaneously with Android at general availability
- Minimum OS versions: iOS 15+, Android 10+ (covers >90% of active devices)
- Phone-number-based authentication for crew leads (no email/password friction)
- Push notification infrastructure required for both platforms (APNs + FCM)

**Offline-first for crew lead app:**
- All core crew lead actions (start job, upload photo, mark complete) must queue locally when offline
- Actions sync to server automatically when connection is restored
- No data loss on connectivity interruption
- Owner dashboard reflects synced state; "last synced" indicator shown if crew lead was recently offline

**Photo handling:**
- Camera capture and gallery upload both supported
- Auto-attach GPS coordinates and device timestamp to every photo
- Photos compressed to max 3MB before upload (quality sufficient for dispute proof)
- Upload progress indicator; retry on failure
- Photos stored in cloud storage with 90-day minimum retention
- Shareable link per photo record (no app account required to view)

**Real-time dashboard:**
- WebSocket or polling architecture for live job status updates to owner dashboard
- Status changes from crew lead app propagate to owner dashboard within 30 seconds
- Push notification to owner on key events: job started, job completed, job overdue, crew lead unavailable, backup sub accepted

### Device Permissions

| Permission | Required For | Request Timing |
|-----------|-------------|----------------|
| Camera | Arrival/completion photos | On first photo action |
| Location | Geotag on photos | On first photo action, with explanation |
| Push notifications | Job assignment, status updates | On first launch, with value explanation |
| Photo library | Gallery upload alternative | On first photo action |

Permissions requested contextually (at the moment of first use), never at app launch. Each request includes a brief inline explanation of why it's needed.

### Implementation Considerations

- Spanish/English language toggle in crew lead app settings (launch requirement)
- Onboarding designed for first-time business software users: no tutorial screen, just the right affordances in context
- Owner dashboard optimized for phone-landscape and phone-portrait (tablet not a target)
- Crew lead app minimum tap target size: 44pt (one-handed use assumption)
- All critical text at minimum 16pt size (outdoor lighting legibility)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Value-proving MVP — the smallest product that makes the owner say "I would pay for this because it saved me time and money this week." All three core pains must be fully solved. Features that don't address crew call-outs, customer disputes, or real-time visibility wait for V2.

**Resource Requirements:** 1–2 React Native developers (full-stack capability), 1 designer (mobile-first), backend infrastructure (Node.js/Firebase or equivalent). 8-week build timeline.

**Core principle:** The MVP is not the product minus features. It is the product where crew lead adoption is the #1 success metric — because if crew leads don't use it, zero value is delivered to owners.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner morning dispatch: create jobs, assign to crew leads, monitor dashboard
- Crew call-out crisis: backup sub list, one-tap job offer dispatch
- Customer dispute resolution: photo proof record with shareable link
- Crew lead first-day onboarding: SMS verification, four-tap job completion

**Must-Have Capabilities:**

| Capability | Rationale |
|-----------|-----------|
| Owner job creation & assignment | Core dispatch workflow |
| Crew lead push notification on assignment | Eliminates "did you get my text?" loop |
| Crew lead four-tap job flow | Adoption depends on simplicity |
| Arrival + completion photo capture with geotag/timestamp | Photo proof differentiation |
| Owner live dashboard (all crews, all statuses) | Real-time visibility |
| Overdue job alerts to owner | Proactive issue detection |
| Shareable photo record link | Customer dispute resolution |
| Backup sub list management | Call-out crisis resolution |
| Backup sub job offer notification (one-tap dispatch) | Call-out crisis resolution |
| Job reassignment on backup sub acceptance | Completes call-out flow |
| Crew roster management (add/deactivate, SMS invite) | Account setup |
| Spanish language support (crew lead app) | Adoption in cleaning segment |
| Offline mode (crew lead app actions queue + sync) | Field reliability |

**Explicitly Out of Scope for MVP:**

| Feature | Reason Deferred |
|---------|----------------|
| Customer SMS notifications | Crew-to-owner communication is MVP focus |
| Invoice generation | Owners have existing tools; adds payment integration scope |
| GPS real-time tracking | Photo geotag covers proof use case; GPS adds battery/privacy complexity |
| Route optimization | Adds mapping API scope; not core pain |
| Recurring job scheduling | Basic scheduling solves core problem first |
| QuickBooks/Xero integration | Invoice feature comes first |
| Web dashboard | Owners are phone-native; desktop adds scope without serving core persona |
| AI dispatcher suggestions | Not needed to deliver MVP value |

### Post-MVP Features

**Phase 2 (Months 4–9 — Growth):**
- Customer SMS notifications: "crew is on the way" / "job complete"
- Invoice generation from completed job record (with photo evidence attached)
- Recurring job scheduling (weekly/biweekly for cleaning and lawn care)
- Route optimization for crew leads with sequential jobs
- QuickBooks / Xero sync for completed invoices
- Enhanced photo reporting: PDF job summary for customer delivery
- In-app messaging between owner and crew lead

**Phase 3 (Months 9–18 — Expansion):**
- Crew performance analytics (completion times, photo compliance, customer ratings per crew)
- AI-assisted backup sub recommendation
- Customer portal (job status, photos, history)
- Web dashboard for desktop reporting and bulk job creation
- 15-crew tier for larger accounts
- Payroll/time tracking integration
- International and vertical expansion

### Risk Mitigation Strategy

**Technical Risks:**
- *Offline sync reliability* — Field workers lose connectivity constantly. Mitigation: battle-tested offline queue pattern (SQLite local store + sync on reconnect); manual "sync now" button as fallback; unit tests for all offline → online state transitions.
- *Push notification delivery* — Silent failures will break the entire value prop. Mitigation: delivery receipts; fallback SMS for critical events (crew lead call-out, job overdue); in-app notification center as backup.
- *Photo upload in poor connectivity* — Mitigation: local photo queuing with retry logic; show upload status in crew lead app; don't mark job complete until photos are confirmed uploaded.

**Market Risks:**
- *Jobber/Housecall Pro add crew communication features* — Mitigation: speed to market; community ownership (r/sweatystartup presence) creates switching cost that a feature release can't replicate; backup sub management is architecturally difficult for office-workflow tools to replicate authentically.
- *Crew lead adoption failure* — The product's primary churn trigger. Mitigation: four-tap UX constraint is hard, not soft; Spanish support at launch; SMS verification removes password friction; beta test with 5 real cleaning companies before AppSumo launch.

**Resource Risks:**
- *If development runs over 8 weeks* — Defer route optimization and recurring scheduling entirely; ship with manual address entry and single-use jobs. Core dispatch + photo + backup sub remains intact.
- *If crew lead UX testing reveals adoption issues before AppSumo launch* — Do NOT launch on AppSumo with low crew adoption scores. Negative reviews from 500+ AppSumo buyers would be unrecoverable. Delay launch, fix UX, retest.

---

## Functional Requirements

### Job Management

- FR1: Owner can create a job record including address, service type, scheduled time window, and customer notes (gate codes, instructions)
- FR2: Owner can assign a job to a crew lead from their roster
- FR3: Owner can reassign a job to a different crew lead before the job is started
- FR4: Owner can edit job details (time window, notes) before the job is started
- FR5: Owner can view all jobs for the current day sorted by crew or by scheduled time
- FR6: Owner can view a job's complete detail: address, crew lead assigned, status, scheduled time, customer notes, and photo record
- FR7: System can automatically alert owner when a job is past its scheduled time window without being started

### Crew Dispatch & Communication

- FR8: Owner can send a push notification to a crew lead when assigning a job
- FR9: Crew lead can view their assigned jobs for the current day in time-sorted order
- FR10: Crew lead can view all details of each assigned job (address, service type, time window, customer notes)
- FR11: Crew lead can mark a job as started (changes status to active on owner dashboard)
- FR12: Crew lead can mark a job as complete
- FR13: Crew lead can receive a push notification when a new job is assigned to them

### Photo Proof

- FR14: Crew lead can capture an arrival photo for a job using the device camera
- FR15: Crew lead can capture a completion photo for a job using the device camera
- FR16: System automatically attaches a timestamp and GPS location tag to every photo captured
- FR17: Owner can view all photos for any completed job (arrival photo, completion photo)
- FR18: Owner can generate a shareable link to a job's photo record that is viewable without a CrewTrack account
- FR19: System retains all job photos for a minimum of 90 days from job completion date

### Live Dashboard

- FR20: Owner can view a real-time dashboard showing all active crews and their current job status
- FR21: Dashboard displays each crew lead's name, current job address, job status, and time on site
- FR22: Job statuses visible to owner: Unassigned, Assigned, En Route / Active, Completed, Overdue
- FR23: Owner can view overall daily progress: number of jobs completed vs. total jobs
- FR24: Owner receives a push notification when a crew lead marks a job complete
- FR25: Owner receives a push notification when a job becomes overdue

### Backup Subcontractor Management

- FR26: Owner can maintain a list of backup subcontractors with name, contact information, service types, and notes per sub
- FR27: Owner can flag a crew lead as unavailable for the day
- FR28: When a crew lead is flagged unavailable, owner can view their backup subcontractor list filtered by relevant service type
- FR29: Owner can send a job-offer push notification to one or more backup subs, including job address, time, and service details
- FR30: Backup sub can receive a job offer notification with all relevant job details
- FR31: Backup sub can accept or decline a job offer via a one-tap response in the notification
- FR32: When a backup sub accepts, system reassigns the job to that sub and updates the owner's dashboard

### Crew Roster Management

- FR33: Owner can add a crew lead to their roster by entering name and phone number
- FR34: System sends an SMS verification invite to a new crew lead with a one-time code
- FR35: Crew lead can create their account using phone number + SMS verification code (no password)
- FR36: Owner can deactivate a crew lead (removes them from job assignment options; retains job history)
- FR37: Owner can view each crew lead's profile: name, contact, skill tags, notes, active/inactive status
- FR38: Owner can add, edit, or remove skill tags and notes for any crew lead

### Notifications

- FR39: Owner can configure which notification events trigger push alerts (per-event toggle)
- FR40: Crew lead can configure notification preferences (receive/mute per-event)
- FR41: Crew lead receives a push notification 30 minutes before their next scheduled job window

### Account & Settings

- FR42: Owner can set account details (business name, contact information)
- FR43: Owner can manage subscription tier (5-crew or 10-crew plan)
- FR44: Crew lead can toggle app language between English and Spanish
- FR45: Owner can view a log of all completed jobs with crew lead, date, and photo record for the past 90 days

---

## Non-Functional Requirements

### Performance

- Job status changes from crew lead action must propagate to owner dashboard within 30 seconds
- Photo upload from a 3MB file must complete within 5 seconds on a 4G connection
- All in-app navigation actions complete within 2 seconds (no loading spinners for core flows)
- Owner dashboard loads with current crew statuses within 3 seconds of opening app
- Job creation and assignment flow: owner can create and assign a single job in under 2 minutes

### Reliability

- Core crew lead actions (start job, capture photo, mark complete) queue locally when offline and sync automatically when connectivity is restored — no data loss on connectivity interruption
- Push notification delivery within 10 seconds for job assignment and completion events under normal conditions
- Critical event push notifications (crew lead unavailable, job overdue) fall back to SMS if push delivery fails within 60 seconds
- System uptime target: 99.5% monthly (field crews depend on app during business hours; downtime means calls to owner)

### Security

- All data encrypted in transit (TLS 1.2+) and at rest
- Phone number + SMS verification as sole authentication for crew leads — no password storage
- Photo records are accessible via shareable link but links must be non-guessable (UUID-based, not sequential)
- Owner account data (crew roster, job history, backup sub list) is isolated per account — no cross-tenant data access
- Photos are stored with access controls; direct storage URLs are not publicly listable

### Scalability

- System handles up to 500 concurrent active accounts without performance degradation at MVP launch
- Photo storage scales independently from application logic (cloud object storage)
- Architecture supports growth to 10,000 accounts without re-architecture (stateless API, horizontally scalable)

### Accessibility

- Crew lead app minimum tap target size: 44pt (one-handed use, outdoor conditions)
- All critical text minimum 16pt size (readability in outdoor lighting)
- Color is never the sole indicator of status (status labels accompany any color coding)
- Push notification copy is concise and actionable without needing to open app
- Spanish language support covers all crew lead app screens and notifications at launch

---

*PRD completed: 2026-10-01*
*Input documents: Shortlisted idea (91/105, Tier 1, BUILD) + comprehensive market research + product brief (October 2026)*
*Next step: Architecture design using this PRD as foundation*
