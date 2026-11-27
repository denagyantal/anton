---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/google-lsa-home-services-crm.md
  - _bmad-output/planning-artifacts/market-research-google-lsa-home-services-crm.md
workflowType: 'prd'
research_topic: 'google-lsa-home-services-crm'
classification:
  projectType: saas_b2b
  domain: home_services_field_service_management
  complexity: medium
  projectContext: greenfield
author: Root
date: '2026-11-27'
---

# Product Requirements Document — TrackBid (Google LSA CRM for Home Services)

**Author:** Root
**Date:** 2026-11-27
**Status:** Complete

---

## Executive Summary

TrackBid is an attribution-first CRM for home service businesses (HVAC, plumbing, carpet cleaning, roofing) that connects Google Local Service Ad spend directly to closed revenue. Pricing: $39/month (1 user) / $69/month (up to 5 users); AppSumo LTD at $69–89 as launch vehicle.

**Core problem:** Google LSA is the dominant acquisition channel for home services (~70% adoption by late 2025, displacing organic as the top source), yet no product under $200/month closes the attribution loop from LSA spend to collected revenue. ServiceTitan does it at $500–$6,500/month. Jobber and Housecall Pro stop at lead import — there is no computed ROAS. Business owners "soul crush[ingly] swap between 12 different trackers per hour" (direct HN validation, Nov 2026) to piece together a number they still can't get.

**Solution:** OAuth-based Google LSA integration → job lifecycle tracking → ROAS dashboard. The hero metric: "Your LSA spend this week = $340, closed revenue = $1,020 — 3.0x ROAS." Time to that number: target ≤ 15 minutes from signup.

**Target users:** Solo owner-operators and small teams (1–15 technicians) in HVAC, plumbing, and carpet cleaning. Annual revenue $200K–$3.5M. Currently spending $600–$6,000/month on LSA. Using Jobber, Housecall Pro, or spreadsheets for job tracking.

**Market window:** 12–18 months before Jobber or Housecall Pro close the gap with a point-release LSA attribution feature. Crewbird (early-stage competitor, single niche) is the only direct threat.

### What Makes This Special

No product at any sub-$200/month price point delivers the full attribution chain: LSA spend → booked lead → completed job → collected revenue → ROAS. This chain is the product. All competitors either stop at lead volume (call tracking), lack revenue attribution (Jobber/HCP), or cost 10x more (ServiceTitan).

TrackBid is built attribution-out, not CRM-first. The ROAS dashboard is the entry point; job management is the supporting infrastructure that makes the ROAS number trustworthy. This architecture choice — plus the $39/month price point accessible to every LSA-spending home service business — is the differentiation.

Google is migrating LSA into Google Ads (rollout Aug 2026). TrackBid builds on the Google Ads API foundation, so the migration requires a label change, not a rebuild.

## Project Classification

- **Project Type:** SaaS B2B — vertical CRM, web application
- **Domain:** Home services / field service management / marketing attribution
- **Complexity:** Medium — Google Ads OAuth2 integration, multi-tenant data isolation, background sync workers, billing integration
- **Context:** Greenfield

---

## Success Criteria

### User Success

- Users see a populated ROAS dashboard within 15 minutes of signup (target: 90% of onboarding users)
- 70% of users complete at least one full attribution chain (LSA lead → completed job → collected revenue) within 7 days of connecting LSA
- 65% of users view the ROAS dashboard at least once per week after month 1
- MCC setup completion rate > 60%; below this threshold, call tracking fallback becomes the primary onboarding path
- NPS ≥ 50 among users who have been active for 60+ days
- 50% of imported LSA leads updated to "completed" status within 30 days (proxy for CRM adoption depth)

### Business Success

| Milestone | Target | Timing |
|-----------|--------|--------|
| Paid users | 50 | Month 1 |
| Paid users | 200 | Month 3 |
| Paid users | 500 | Month 6 |
| Paid users | 1,500 | Month 12 |
| MRR | $58,500 | Month 12 |
| Monthly churn | < 3% | From month 3 |
| AppSumo LTD sales | 500 at $79 avg = $39,500 | Month 3 launch |
| LTD-to-SaaS conversion | 30% convert to $29/month after 12 months | Month 15+ |
| CAC (community channels) | < $50 | Ongoing |
| CAC (cold outreach) | < $80 | Ongoing |
| Payback period | < 3 months | Ongoing |

**North Star Metric:** Weekly active users who view the ROAS dashboard. A user checking ROAS weekly has internalized the product value and will not churn.

**Go/no-go gate:** If month 3 paid users < 100 and NPS < 30, re-evaluate positioning and onboarding before committing to Phase 2.

### Technical Success

- Attribution dashboard loads in < 2 seconds for P95 users
- LSA data syncs every 10–30 minutes automatically, with zero manual triggers required
- System maintains 99.5% uptime during US business hours (6am–8pm local time)
- Google Ads API rate limit events never surface as user-visible errors
- MCC OAuth guided flow completes without user-abandoned sessions at > 60% rate

### Measurable Outcomes

- **Time to first insight:** ≤ 15 minutes from account creation to populated ROAS dashboard (measured in onboarding analytics)
- **Attribution chain completion:** 70% of users have at least one LSA lead → completed job → revenue chain within 7 days
- **Community word-of-mouth:** ≥ 10 users post organically about TrackBid in r/HVAC, r/carpetcleaning, or Facebook groups within 90 days of launch (unprompted)
- **Referral rate:** ≥ 20% of new signups in month 3+ come from referral link

---

## Product Scope

### MVP — Phase 1 (Weeks 1–6)

**MVP Philosophy:** "Connect LSA, see ROAS in 15 minutes." Nail attribution and the minimum job tracking needed to make attribution trustworthy. Defer everything else.

**Core user journeys supported:** Solo owner connecting LSA and seeing ROAS; office manager updating job statuses to close the attribution loop.

**Must-Have Capabilities:**

| Capability | Rationale |
|------------|-----------|
| Google LSA OAuth2 connection | Core integration — without it, no attribution |
| Guided MCC setup (screenshot walkthrough) | Critical friction point; most users don't have MCC pre-configured |
| Automatic LSA spend/lead import (10–30 min sync) | The data source for attribution |
| Call tracking number fallback | Rescue path for users who can't complete MCC |
| Job lifecycle: Lead → Scheduled → In Progress → Completed → Invoiced → Collected | Closes the attribution chain |
| Attribution dashboard (spend, leads, booked/completed jobs, revenue, ROAS) | The hero feature |
| ROAS trend line (8-week lookback) | Minimum useful historical context |
| Cost-per-booked-job and cost-per-completed-job metrics | Secondary attribution metrics |
| Date range filtering (7d / 30d / custom) | Required for seasonal insight |
| Basic CRM: customer profiles, job notes, follow-up reminders | Supporting infrastructure for attribution completeness |
| CSV import (Jobber/HCP data) | Low-friction onboarding for users with existing job history |
| AppSumo LTD code redemption | Launch vehicle |
| Multi-user: Owner + Staff roles | Enables office manager job status updates |

**Target verticals at MVP:** HVAC and carpet cleaning. Plumbing and roofing added in Phase 2.

**Explicitly out of scope for MVP:**
- Scheduling/dispatch features (calendar, routing, appointment reminders)
- Invoicing and payment collection (Stripe payment links, invoice templates)
- Mobile app (web app with responsive design ships; native app deferred)
- QuickBooks sync
- Automated email/SMS follow-up sequences
- Multi-channel attribution (LSA vs Google Ads vs Yelp comparison)
- AI budget recommendations
- Agency multi-client tier
- Google review request automation

### Phase 2 — Growth (Months 2–4)

CRM parity to enable risk-free migration from Jobber/HCP:

- Full scheduling and dispatch (calendar, technician assignment, route optimization)
- Invoicing and Stripe payment collection
- QuickBooks sync
- Mobile app (iOS + Android, field-first UX)
- Jobber/Housecall Pro full API import (not just CSV)
- Plumbing and roofing verticals

### Phase 3 — Differentiation (Months 4–8)

Deepen the attribution moat and launch:

- Multi-channel ROAS comparison (LSA vs Google Ads vs Yelp vs Thumbtack side-by-side)
- Seasonal analytics: "HVAC ROAS in October is 40% higher than July — increase budget now"
- AppSumo launch at $69–89 LTD
- Google review request automation post-job
- Agency tier: manage 10–20 client LSA accounts from one dashboard

### Phase 4 — Platform (Months 8–18)

Data gravity and defensibility:

- Anonymized benchmark data: "HVAC businesses in Phoenix average 4.2x LSA ROAS in October — you're at 3.1x, here's why"
- Predictive budget recommendations
- Pest control, landscaping, pressure washing verticals
- API for agency partners

---

## User Journeys

### Journey 1: Marcus — Solo HVAC Owner, First ROAS Insight

**Persona:** Marcus, 3-technician HVAC company, annual revenue ~$850K, spending $1,800/month on LSA. Books jobs in Jobber, invoicing in QuickBooks. No LSA attribution — knows LSA works because they're busy, can't quantify it.

**Opening scene:** Monday morning. Marcus opens Google Ads to check spend — $1,800 this month. Opens Jobber to check completed jobs — 11 this month. Opens QuickBooks to see revenue — $7,800 this month. He cannot connect these three numbers. He doesn't know if the $1,800 generated $7,800, some of it, or none of it.

**Discovery:** He sees a post in his HVAC Facebook group: "I hooked up TrackBid in 10 minutes and found my January LSA was running at 1.1x ROAS — moved budget to April, now sitting at 5.8x. Here's the screenshot." He clicks the link.

**Onboarding:** Marcus signs up, selects "HVAC." The OAuth guide shows four screenshots walking him through MCC account setup. He authorizes Google. 23 LSA leads from the last 30 days import automatically as job records. The dashboard shows partial data — ROAS is computing but most jobs show "Lead Received" status.

**Rising action:** Marcus spends 12 minutes clicking through job records, updating 11 of them to "Completed" with actual revenue values from memory. The remaining 12 stay in "Scheduled."

**Climax:** The dashboard now reads: "LSA spend (30 days): $1,800 → 23 leads → 11 completed → $7,200 collected → **4.0x ROAS.**" Marcus sees the seasonal trend breakdown: January ROAS 1.1x, July ROAS 6.2x. He's been spending the same LSA budget in January as July for 4 years.

**Resolution:** Marcus adjusts seasonal budget: January spend cut from $1,800 to $700; peak season (June–August) raised to $2,400. He opens TrackBid every Monday. After 90 days, he has quarterly ROAS data and refers two other HVAC owners from his peer group.

**Journey reveals:** OAuth/MCC guided setup, historical LSA import, one-click job creation from lead, job status update with revenue entry, attribution dashboard with ROAS, seasonal trend view, date range filtering.

---

### Journey 2: Priya — Growing Plumbing+HVAC Owner, Marketing Agency Replacement

**Persona:** Priya, 12-technician plumbing+HVAC company, annual revenue ~$3.2M, spending $6,000/month across LSA ($3,500), Google Ads ($1,500), and Yelp ($1,000). Office manager Sandra uses Housecall Pro. Marketing agency at $500/month sends lead reports, never revenue data.

**Opening scene:** Agency report arrives: "This month: 94 LSA impressions, 31 leads." Priya asks: "How many became paying jobs?" Agency: "We'd need your CRM data for that." Priya thinks: "I'm paying $500/month for a report that doesn't answer the question I actually have."

**Discovery:** Google search: "CRM for HVAC with Google LSA ROI." TrackBid landing page: "See your ROAS by channel — LSA vs Google Ads vs Yelp — in one screen." She books a trial.

**Onboarding:** Priya imports 18 months of Housecall Pro data via CSV. Sandra keeps using Housecall Pro for dispatch (zero disruption). Priya connects Google LSA and Google Ads via OAuth. Dashboard populates with 90 days of attribution data.

**Climax:** Dashboard shows: "LSA ROAS = 5.1x. Google Ads ROAS = 2.3x. Yelp ROAS = 1.1x." She fires the agency, redirects the $500/month agency fee plus $800/month of Yelp budget toward LSA. Net result: $1,300/month reallocation toward 5x channels.

**Resolution:** Priya upgrades to Team plan ($69/month, 5 users). Sandra gets a login to update job statuses daily. Priya checks attribution weekly. She presents the channel ROAS comparison at PHCC regional conference; two attendees sign up during her talk.

**Journey reveals:** Housecall Pro CSV import, multi-channel ROAS (Phase 2 scope; MVP shows LSA only), multi-user plan, Owner vs Staff roles, date-range filtering for channel comparison.

---

### Journey 3: Derek — Carpet Cleaning Owner, First CRM

**Persona:** Derek, 4-van carpet cleaning company, annual revenue ~$320K, spending $600/month on LSA. No CRM — Google Contacts and a whiteboard. Phone rings more since LSA started. First paid SaaS tool beyond QuickBooks.

**Discovery:** AppSumo deal: "TrackBid — Lifetime Deal $69. The only CRM built for Google Local Service Ads." Derek reads it on his phone between jobs and buys.

**Onboarding:** Redeems LTD code, signs up, selects "Carpet Cleaning." Guided MCC setup takes 8 minutes. 42 LSA leads from last 30 days import. He creates 15 job records from imported leads, enters job values and customer names.

**Climax:** Dashboard: "$600 LSA spend → 42 leads → 15 completed jobs → $4,680 collected → 7.8x ROAS." Average completed job value: $312. Derek had no idea about either number. He calls his wife: "We need to double LSA budget next month."

**Resolution:** TrackBid is Derek's entire CRM and attribution stack. After 90 days, his job history, customer list, follow-up reminders, and ROAS trends all live in TrackBid. Data gravity prevents any switching.

**Journey reveals:** AppSumo LTD code redemption, guided OAuth with screenshot walkthrough, one-click job creation from leads, job value entry, attribution dashboard, customer profile creation, follow-up reminders.

---

### Journey 4: Sandra — Office Manager, Daily Job Status Management

**Persona:** Sandra, office manager at Priya's company. Daily user of Housecall Pro for scheduling and dispatch. Added to TrackBid by Priya to update job statuses for attribution accuracy.

**Opening scene:** Sandra logs into TrackBid for the first time. She sees the job list — same jobs she manages in Housecall Pro, pulled from CSV import. She's asked to mark jobs "Completed" with the actual collected amount when she closes them in Housecall Pro.

**Daily usage:** Sandra opens TrackBid when a job closes. Finds the job by customer name search. Updates status to "Collected," enters the amount. 30-second task per job.

**Friction:** When a job is disputed or partially collected, Sandra notes the partial amount in job notes and flags for Priya's review.

**Resolution:** Sandra's status updates make Priya's attribution dashboard trustworthy. Priya's weekly ROAS review reflects real closed revenue, not estimates.

**Journey reveals:** Staff role login, job list with search and filters, job status updates (Completed → Invoiced → Collected), job notes, partial payment notation, Owner visibility into Staff updates.

---

### Journey Requirements Summary

| Capability | Required By Journey |
|------------|---------------------|
| Google OAuth2 + MCC guided setup (screenshot walkthrough) | Marcus, Derek |
| LSA spend/lead historical import (30-day auto on first connect) | Marcus, Derek |
| Automatic 10–30 min LSA sync with status indicator | Marcus, Derek |
| Call tracking fallback for failed MCC setup | Any user unable to complete MCC |
| One-click job creation from imported LSA lead | Marcus, Derek |
| Job status lifecycle (Lead → Scheduled → In Progress → Completed → Invoiced → Collected) | Marcus, Derek, Sandra |
| Job revenue entry (quoted value + actual collected value) | Marcus, Derek, Sandra |
| Attribution dashboard: spend, leads, booked/completed jobs, collected revenue, ROAS | Marcus, Priya, Derek |
| ROAS trend line (8-week lookback) | Marcus, Priya |
| Cost-per-booked-job and cost-per-completed-job | Priya |
| Date range filtering (7d / 30d / custom) | Marcus, Priya |
| Customer profiles with job history | All |
| Customer search by name, phone, address | Sandra, All |
| Follow-up reminders with due dates | Marcus, Derek |
| Job notes and photo attachments | Sandra, All |
| CSV import (Jobber/Housecall Pro data) | Priya |
| Multi-user: Owner + Staff roles with separate permissions | Priya, Sandra |
| AppSumo LTD code redemption at signup | Derek |
| Subscription management and billing (Stripe) | Marcus, Priya |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Attribution-first architecture at an accessible price point.** No CRM at or below $200/month builds out from attribution. Every competitor — Jobber, Housecall Pro, ServiceTitan — is a scheduling/invoicing product that bolts on marketing. TrackBid inverts this: the ROAS dashboard is the product; job management is the supporting infrastructure that makes the ROAS number trustworthy.

**Revenue-level attribution chain vs. lead-level stopping points.** Existing tools stop at "you got 15 leads from LSA." TrackBid shows the complete chain: "15 leads → 11 booked → 9 completed → $4,320 collected → 12.7x ROAS." The delta between leads and collected revenue is where the actionable insight lives.

**Google API durability through platform migration.** Google is migrating LSA into Google Ads (Aug 2026). TrackBid builds on the Google Ads API foundation, so the migration is a label change. Competitors building on the legacy LSA-only API surface face a rebuild; TrackBid does not.

### Market Context

The closest analog is Crewbird — an early-stage competitor doing this for carpet cleaning specifically. Crewbird validated the concept (3x ROAS improvement in founder's dad's business) but is single-niche and early-stage. First-mover advantage in HVAC and plumbing (larger TAMs than carpet cleaning) is available today.

The broader category analog: what CallRail did for call tracking (make the invisible visible, affordable), TrackBid does for revenue attribution.

### Validation Approach

The concept is already validated by third-party evidence (Crewbird's carpet cleaning ROAS improvement, HN pain point comments). TrackBid's first-party validation milestone: 50 paid users who connect LSA and report ROAS visibility within 15 minutes. If this group NPS ≥ 40, the concept is confirmed at sufficient signal strength to commit to Phase 2.

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Google API restrictions tighten | Call tracking fallback; Google Partner certification path |
| Jobber/HCP release LSA attribution in a point update | Build attribution depth + data history moat they can't replicate in a point release |
| Crewbird expands beyond carpet cleaning into HVAC | Move fast on HVAC/plumbing as primary verticals; first mover advantage in larger verticals |
| Google LSA migration to Google Ads (Aug 2026) | Build on Google Ads API; no rebuild required |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

- Tenant isolation via `business_id` foreign keys on all data tables (row-level, shared schema)
- All data queries require authenticated `business_id` scope; cross-tenant data access prevented at ORM/query layer
- Google OAuth tokens stored per tenant with no cross-tenant sharing
- Tenant provisioning creates isolated Google sync worker configuration

### Authentication & Authorization Model

**User auth:** Email/password with optional Google SSO. JWT sessions with 7-day rolling expiry.

**Role model (MVP):**

| Role | Permissions |
|------|-------------|
| Owner | Full access: attribution dashboard, job management, CRM, billing, user management, integrations |
| Staff | Job management and CRM only: create/update jobs, customer profiles, notes; no billing, no attribution export, no integrations |

**Google LSA OAuth:** Separate OAuth2 flow from user authentication. Tokens stored encrypted (AES-256). Background server-side token refresh — no user interruption on expiry.

### Subscription & Billing

- **Solo:** $39/month, 1 user (Owner only)
- **Team:** $69/month, up to 5 users (1 Owner + 4 Staff)
- **LTD codes (AppSumo):** Redeemable at signup; maps to Solo or Team equivalent based on code tier
- Stripe Billing for all subscription management; PCI-DSS SAQ A compliant (TrackBid never handles raw card data)
- Failed payment: 7-day grace period with in-app banner → read-only mode → cancellation if unresolved after 30 days
- Billing page accessible to Owner role only

### Integration Architecture

- **Google Ads API (LSA data):** OAuth2 authorization code flow; MCC account required for sub-account access; background sync worker polls every 10–30 minutes; exponential backoff on errors; rate limit events queued silently
- **Call tracking fallback:** Virtual number provisioned via Twilio or similar; assigned when user cannot complete MCC setup; calls tracked at lead level with no spend data (ROAS approximated from call volume and manual spend entry)
- **CSV import (MVP):** Jobber and Housecall Pro CSV column mapping UI; validates required fields before processing; row-level error report on failure
- **API integrations (Phase 2):** Jobber API, Housecall Pro API, Stripe payment collection, QuickBooks sync

### Onboarding Sequence

1. Email + password signup → business name and trade type selection (HVAC / Plumbing / Carpet Cleaning / Roofing / Other)
2. Google OAuth authorization → system detects if MCC exists; if not, displays guided MCC setup (4 annotated screenshots)
3. Historical LSA data import triggers automatically (last 30 days); progress indicator shown
4. Optional: CSV import of existing customer/job data
5. Attribution dashboard displays with onboarding prompt: "Update job statuses to see your real ROAS"
6. Target: populated ROAS dashboard within 15 minutes of step 1

### Technical Architecture Considerations

- **Backend:** REST API; Node.js or Python (team preference); PostgreSQL for relational data with JSONB for flexible job metadata
- **Background workers:** Dedicated sync worker process for Google Ads API polling; job queue (BullMQ or similar) for reliability
- **Frontend:** React SPA with server-side rendering for initial load performance; mobile-responsive but not mobile-native at MVP
- **Hosting:** Cloud-managed Postgres, containerized API and worker; autoscale on API layer

---

## Functional Requirements

### Account & Authentication

- **FR1:** Business owners can create an account with email, password, business name, and trade type selection
- **FR2:** Business owners can log in with email/password
- **FR3:** Business owners can connect their Google account via OAuth2 to authorize LSA data access
- **FR4:** The system guides business owners through MCC (Manager Account) setup with a 4-step screenshot walkthrough when no MCC is detected
- **FR5:** Business owners can skip MCC setup and provision a call tracking fallback number instead
- **FR6:** Business owners can invite team members via email and assign them the Staff role
- **FR7:** Staff members can log in and access job management and CRM features
- **FR8:** Business owners can redeem an AppSumo LTD code at signup or on the billing page
- **FR9:** Business owners can view, upgrade, and cancel their subscription on a billing page

### LSA Data Integration

- **FR10:** The system automatically imports LSA spend, lead counts, and lead details every 10–30 minutes after OAuth connection
- **FR11:** The system imports the last 30 days of historical LSA data on first successful OAuth connection
- **FR12:** Business owners can manually trigger a one-time LSA data refresh
- **FR13:** The system displays the last successful sync time and sync status (syncing / synced / error) in the dashboard header
- **FR14:** The system retries failed LSA sync attempts up to 3 times before surfacing a "sync delayed" status to the user (never a raw API error message)
- **FR15:** Business owners with call tracking fallback can view call logs and manually enter LSA spend amount for ROAS approximation

### Job Management

- **FR16:** Business owners and Staff can create a job record from an imported LSA lead in one click
- **FR17:** Business owners and Staff can create a job record manually (non-LSA source)
- **FR18:** Business owners and Staff can update job status through the full lifecycle: Lead Received → Scheduled → In Progress → Completed → Invoiced → Collected
- **FR19:** Business owners and Staff can record job details: trade type, service description, quoted value, actual collected value, customer name, address, phone
- **FR20:** Business owners and Staff can assign a technician to a job
- **FR21:** Business owners and Staff can add text notes and photo attachments to a job record
- **FR22:** Business owners and Staff can view all jobs in a list filterable by status, date range, assigned technician, and trade type
- **FR23:** Business owners and Staff can search jobs by customer name, phone, or address

### Attribution Dashboard

- **FR24:** Business owners can view the attribution dashboard showing: total LSA spend, total LSA leads received, total leads converted to booked jobs, total completed jobs, total collected revenue, and computed ROAS (collected revenue / LSA spend)
- **FR25:** Business owners can filter the attribution dashboard by preset date ranges (last 7 days, last 30 days) and a custom date range picker
- **FR26:** Business owners can view a weekly ROAS trend line covering the last 8 weeks
- **FR27:** Business owners can view cost-per-booked-job and cost-per-completed-job computed metrics
- **FR28:** The attribution dashboard reflects job status updates and LSA sync data in near-real-time (< 5 minutes after update)

### Customer Management

- **FR29:** Business owners and Staff can create a customer profile with name, address, phone, and email
- **FR30:** Business owners and Staff can view a customer's complete job history
- **FR31:** Business owners and Staff can search customers by name, phone number, or address
- **FR32:** Business owners and Staff can add notes to a customer profile
- **FR33:** Business owners and Staff can set a manual follow-up reminder on a customer or job with a due date and optional note
- **FR34:** Business owners and Staff can view a list of all upcoming and overdue follow-up reminders sorted by due date

### Onboarding & Import

- **FR35:** Business owners see a guided onboarding checklist showing completion status for: trade type selection, Google LSA connection, first job status update
- **FR36:** Business owners can upload a CSV file to import existing customer and job data
- **FR37:** The system presents a field mapping interface to map CSV columns to TrackBid job and customer fields before import
- **FR38:** The system validates CSV data format and returns a row-level error report for any rows that fail to import, allowing the import to proceed for valid rows

---

## Non-Functional Requirements

### Performance

- The attribution dashboard shall load within 2 seconds for P95 users under normal operating load, as measured by application performance monitoring
- The job list (up to 1,000 records) shall render within 1.5 seconds, as measured by browser performance profiling
- CSV import of up to 5,000 rows shall complete within 30 seconds, with a progress indicator shown for imports exceeding 5 seconds
- Google Ads API sync cycle shall complete within 60 seconds of trigger for accounts with up to 500 LSA leads per month

### Security

- All Google OAuth tokens shall be stored encrypted at rest using AES-256 encryption
- All data in transit shall use TLS 1.2 or higher
- Business data shall be isolated per `business_id` at the query layer; cross-tenant data access shall return 403 regardless of authentication state
- User passwords shall be hashed using bcrypt with cost factor ≥ 12
- All authenticated API endpoints shall return 401 for missing or expired tokens; all authorization failures shall return 403
- TrackBid shall never store or transmit raw payment card data; all card handling delegated to Stripe (SAQ A PCI-DSS compliance)

### Scalability

- The API layer shall support 5,000 concurrent authenticated sessions with P95 dashboard load time degrading by no more than 10% from baseline
- The LSA sync worker queue shall process 500 simultaneous sync jobs without queue depth exceeding 5 minutes of lag
- The database schema shall support read scaling via read replicas for dashboard and reporting queries without schema changes

### Reliability

- The system shall maintain 99.5% uptime during US business hours (6am–8pm local time, all US time zones), as measured by external uptime monitoring
- LSA sync failures shall be retried up to 3 times with exponential backoff before surfacing a "sync delayed" status
- Job data writes shall be transactional; no job record shall be lost or partially written due to sync failure
- Database backups shall run daily with point-in-time recovery capability for up to 7 days

### Integration Reliability

- Google Ads API token refresh shall execute server-side before expiry with no user session interruption
- If Google API rate limits are reached, requests shall be queued and completed on the next available window; the user shall see "data refresh delayed" status — never a raw API error code
- CSV imports shall validate required fields before processing; a partial import shall succeed for valid rows and return a row-count error summary for failed rows

### Accessibility

- The web application shall meet WCAG 2.1 Level AA for dashboard and job management interfaces
- Color alone shall not be used to convey attribution status or ROAS thresholds; icons or text labels accompany all color indicators

---

*PRD created: 2026-11-27*
*Next steps: Architecture design → Epics & Stories → Sprint Planning → Implementation*
