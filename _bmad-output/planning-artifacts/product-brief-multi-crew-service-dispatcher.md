---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/multi-crew-service-dispatcher.md
  - _bmad-output/planning-artifacts/market-research-multi-crew-service-dispatcher.md
workflowType: 'product-brief'
lastStep: 6
research_type: 'product-brief'
research_topic: 'multi-crew-service-dispatcher'
user_name: 'Root'
date: '2026-10-01'
---

# Product Brief: CrewTrack — Multi-Crew Service Dispatcher

---

## Executive Summary

**CrewTrack** is a mobile-first crew dispatch application for service business owners who manage 3–10 field crews without a dedicated dispatcher. It solves the most acute operational bottleneck in the service business growth trajectory: the moment when the owner becomes a full-time dispatcher, managing crew assignments via text threads, fielding call-out crises, and arguing with customers about jobs that "weren't done."

The product sits in a $6.26B global field service management (FSM) software market at its most underserved segment. No existing tool is designed for the "owner-as-dispatcher" persona — the person who runs their own crew while simultaneously assigning, tracking, and troubleshooting 2–9 other crews. Enterprise platforms (ServiceTitan: $2,000+/month) require dedicated dispatch staff. Mid-market tools (Jobber: $169+/month; Housecall Pro: $299+/month) have weak crew-to-owner communication and are architected for office workflows, not field-operator workflows. WhatsApp is the current default — free but with zero job tracking, zero completion verification, and zero backup sub management.

CrewTrack's three unique differentiators — a four-tap crew lead mobile app, timestamped/geotagged photo proof of job completion, and a built-in backup subcontractor list tied to the dispatch flow — address the three highest-intensity daily pain points in the 3–10 crew segment with no direct competitive solution. The revenue path to $10K MRR requires 256 paying customers at $39/month — achievable within 12 months via community-led distribution in r/sweatystartup (300K members) and cleaning/landscaping Facebook groups (1M+ combined members).

**Product positioning:** "The crew dispatch app for the service business owner who is also a crew member."

**Pricing:** $39/month (up to 5 crews) / $69/month (up to 10 crews). LTD: $79 / $129.

**Build timeline:** 8 weeks to MVP (React Native cross-platform, owner dashboard + crew lead app + backup sub list).

---

## Core Vision

### Problem Statement

Service business owners managing 3–10 field crews hit an operational ceiling that traps them in daily dispatch chaos. They built their businesses to grow past doing every job themselves — but each new crew adds more phone calls, more text threads, and more crisis management rather than more revenue. The problem is not the work; it is the coordination infrastructure, which hasn't scaled with them.

Three specific daily pain points define the problem with high frequency and high emotional intensity:

1. **Crew call-outs with no backup system.** A crew lead cancels on the morning of jobs. The owner makes 3–5 calls to find a backup subcontractor from their mental rolodex. Sometimes jobs get cancelled, customers are lost, and revenue disappears. This is the single most stressful operational event in the week.

2. **"Crew didn't show" customer disputes.** A customer claims the crew didn't arrive or didn't complete the work. The owner has no proof either way — no timestamped arrival photo, no completion record. Refunds are given to keep the customer, even when the crew completed the job. This is a direct and recurring revenue drain.

3. **Zero real-time visibility across multiple crews.** The owner cannot see which crew is at which job, which jobs are complete, which are running late — without calling each crew lead individually. With 4+ crews, this phone-call loop consumes 1–2 hours daily and happens while the owner is often on a job site themselves.

These problems are community-validated at exceptional scale. IdeaFast scores crew management at **90/100** in r/sweatystartup — the **#2 most-discussed pain** community-wide (300,000+ members). The specific thread "Managing 4 crews and feeling like I'm gonna lose my mind" demonstrates high-emotion, high-engagement demand from exactly the target persona.

### Problem Impact

The problem impacts both daily operations and long-term business trajectory:

- **Direct revenue loss:** One cancelled job due to crew call-out = $150–$500 lost. One refunded customer dispute = $50–$500 lost. Both happen weekly for owners in the 3–10 crew segment.
- **Owner time drain:** Managing crews via phone calls and text threads costs 1–3 hours daily — time the owner could spend on a job site generating revenue or acquiring new customers.
- **Growth ceiling:** The 3–10 crew range is where most service businesses plateau or collapse operationally. The inability to coordinate multiple crews efficiently is the identified bottleneck that limits scaling past this stage.
- **Psychological toll:** The emotional burden of daily dispatch chaos is documented across community discussions as a primary driver of burnout and owner exit from the business they built.

At the macro level: ~170,000–250,000 US service businesses operate in the 3–10 crew range across landscaping, cleaning, pressure washing, and painting. All of them face this problem. None have a purpose-built solution.

### Why Existing Solutions Fall Short

**ServiceTitan / Service Autopilot (Enterprise):** $2,000–$3,000+/month minimum, require dedicated dispatcher staff, built for businesses with $3M+ revenue and separate operations/admin functions. Completely inaccessible to the target segment — and psychologically "for big companies."

**Jobber ($169+/month):** General-purpose FSM platform with visual calendar and tech mobile app. Does not have a crew-lead-specific UX (the four-tap simplicity that non-tech field workers will actually use), no native photo-proof-of-completion workflow, no backup subcontractor management. The community consensus on r/sweatystartup: "Jobber doesn't solve the crew communication problem."

**Housecall Pro ($299+/month):** Similar architecture to Jobber. Added photo job reports in May 2026, but these are owner-to-customer, not crew-to-owner. Still office-workflow-first. At $299/month for 8 users, it is expensive relative to what the 3–10 crew owner specifically needs.

**Connecteam ($29–$99/month for 30 users):** Handles workforce scheduling and GPS tracking but has no job dispatching, no address-based job assignment, and no invoicing. It is a workforce tool, not a dispatch tool.

**WhatsApp (Free):** The actual default. Group chat with zero job tracking, zero completion verification, zero real-time dashboard, and no backup sub management. "Free" but creates the exact chaos the target customer is trying to escape.

**The gap:** No tool exists with the combination of mobile-first owner UX + simple crew-lead app + integrated photo proof + backup sub management — at a price accessible to the 3–10 crew owner.

### Proposed Solution

**CrewTrack** is a two-sided mobile application (owner dashboard + crew lead app) designed for the service business owner who dispatches from a phone while often running their own crew.

**Core workflow:**

1. **Owner creates daily jobs** — address, service type, time window, customer notes (gate codes, special instructions). Takes under 2 minutes per job on mobile.

2. **Owner assigns each job to a crew lead** — one tap. Automatic push notification sent to the crew lead's app.

3. **Crew lead app shows the day in order** — four interactions: tap to start job → take arrival photo → take completion photo → mark done. Nothing else. Simple enough for a field worker who has never used business software.

4. **Owner sees live dashboard** — which crews are on which jobs, which are complete, which are overdue, percentage completion across all crews. Glanceable in 10 seconds.

5. **When a crew lead calls out** — the owner receives an alert, taps "find backup," and sees their pre-loaded list of vetted backup subcontractors. One tap to send a job offer notification. The most stressful 30 minutes of the week becomes a 30-second decision.

**Photo proof:** Every arrival and completion is timestamped and geotagged. "Crew didn't show" disputes are eliminated with one link to the photo record.

**Result:** The owner stops being a human telephone exchange and becomes an actual manager — brief daily setup, glanceable status, swift call-out response. Crew leads have exactly the information they need. Customers have proof. The owner has their time back.

### Key Differentiators

1. **Owner-as-dispatcher UX** — The entire product is designed for the person who is simultaneously managing crews AND running a job themselves. Not for an office dispatcher. Not for an admin. This is an architectural decision, not a feature — the dashboard is glanceable in 10 seconds, job creation is under 2 minutes, and the full mobile experience requires no desktop.

2. **Four-tap crew lead app** — Crew leads (often field workers who haven't used business software) need: see today's jobs → start job → take photos → mark done. Every additional step is a step toward non-adoption. The crew lead app is built around this constraint. Spanish language support addresses the 78.2% of cleaning workers who are Spanish-speaking non-English.

3. **Built-in backup subcontractor management** — No competitor (Jobber, Housecall Pro, Connecteam, Workiz, FieldPulse) has a backup sub list integrated into the dispatch flow. This is the most emotionally intense operational pain in the segment with zero existing solution. It is also the hardest feature for incumbents to replicate because it requires deep persona understanding of the owner-operator, not just feature addition.

4. **Integrated photo proof of completion** — Eliminates the "crew didn't show" dispute category and removes the need for a separate CompanyCam subscription ($63–$249/month). For pressure washing and cleaning businesses, this delivers immediate, calculable ROI that justifies the subscription in month one.

5. **Price point designed for the segment** — $39/month (5 crews) sits 80% below Jobber's equivalent plan and 87% below Housecall Pro. The LTD ($79 for 5 crews) pays for itself by eliminating a single customer dispute per month. The value equation is immediately computable.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — Cleaning Company Owner, 4 Crews

**Background:** Marcus, 34, runs a residential and commercial cleaning company in a mid-size US city. He started solo 5 years ago, grew to 4 crews, and now earns $480K/year in revenue. He runs one crew himself 3–4 days a week and manages the other 3 via text and WhatsApp. He has a wife and two kids and built the business for time freedom — which he does not yet have.

**Daily reality:** Every morning, Marcus texts each crew lead their jobs for the day. He uses a shared Google Sheet to track what's scheduled. He calls each crew lead mid-morning to confirm they're at their jobs. When a crew lead calls out (happens 1–2 times a week), he spends 30–45 minutes calling backup cleaners from his contacts list. When a customer claims a crew didn't show, he asks the crew lead, gets "I was there" as the only evidence, and usually gives a refund to avoid the argument.

**Tools currently in use:** Jobber for scheduling and invoicing, WhatsApp for crew communication. He uses Jobber for billing but finds its crew communication features too weak and complex for his crew leads to use.

**Pain intensity:** Very high. Marcus posts in r/sweatystartup quarterly about this exact problem and has tried three different apps that "didn't work because my crew leads stopped using them."

**What success looks like for Marcus:** "I want to wake up, create the jobs, assign them, and then be on my own job. If something goes wrong I want to know immediately on my phone. If my crew lead calls out I want to find a backup in 2 minutes, not 30. And if a customer complains I want to be able to send them a photo of the crew at their door at 9:07 AM."

**Decision-making:** Price-sensitive but ROI-driven. Would pay $39/month immediately if the app demonstrably eliminates one customer dispute per month ($100–$200 in recovered revenue). Would buy a $79 LTD in a heartbeat from an AppSumo deal after seeing a friend use it.

---

#### Persona 2: Sofia — Landscaping Business Owner, 6 Crews

**Background:** Sofia, 41, runs a residential landscaping operation with 6 crews across a metro area. Revenue: ~$1.1M/year. She manages from her truck and rarely sits at a desk. Seasonal — peak season (April–October) is when call-out chaos is most intense because her crews are booked back-to-back and there's no slack to absorb a missing crew lead.

**Daily reality:** Sofia uses a physical binder with route sheets printed each morning. She assigns jobs by texting each crew lead individually. She has tried Jobber but found the crew lead mobile experience too complex — her crew leads are 20-something seasonal workers who speak Spanish as a first language and won't use anything with more than a few steps. During peak season, she routinely misses a property or double-books a crew due to the manual coordination.

**Tools currently in use:** Jobber for customer management and invoicing. WhatsApp for crew communication. Paper route sheets.

**Pain intensity:** High, especially seasonal. A missed property during peak season costs a customer relationship worth $1,200/year.

**What success looks like for Sofia:** "If I could look at my phone and see all 6 crews in real time — who's done, who's running late — I would pay whatever it costs. And if my crew leads could use it without me having to train them for a week, even better. Spanish support would be huge."

---

#### Persona 3: Derek — Pressure Washing Multi-Truck Owner, 3 Trucks

**Background:** Derek, 29, runs 3 pressure washing trucks, often operating 2–3 job sites simultaneously. Revenue: ~$320K/year. Newer to business ownership; built everything via social media (YouTube + Instagram for before/after photos). Photos are core to his marketing.

**Daily reality:** Derek currently uses QuoteIQ for estimating and Jobber for scheduling. For before/after photos, he pays $63/month for CompanyCam — a separate subscription exclusively for job documentation. He manages crew communication via WhatsApp. His crews are small (1–2 per truck) and relatively tech-comfortable, but the job documentation workflow is fragmented across three tools.

**Pain intensity:** Medium-high. His primary pain is the fragmented tool stack — he would eliminate CompanyCam immediately for an integrated solution.

**What success looks like for Derek:** "One app that handles where my trucks are, what jobs they're on, and captures before/after photos in the job record. I'd drop CompanyCam tomorrow."

---

### Secondary Users

#### Crew Leads (App Users, Not Buyers)

Crew leads are the field workers who use the CrewTrack crew-lead app. They are not the purchasing decision-maker but their adoption is the critical success factor — if crew leads won't use the app, the entire value proposition collapses for the owner.

**Profile:** Age 20–40, field-based, mixed tech comfort, may speak English as a second language (78.2% of cleaning workers are Spanish-speaking non-English). Use Android or iPhone personally but have limited experience with business software.

**Needs from the app:**
- See today's assigned jobs in order (address, time window, what to do)
- Receive clear push notification when a new job is assigned
- Tap to mark arrival and departure
- Take and upload arrival/completion photos without navigating a complex UI
- Zero learning curve — must be usable within 5 minutes of first open

**Success condition:** Crew leads adopt the app voluntarily because it makes their own day simpler (they don't have to call the owner for job details, no more "I didn't know about that job").

**Design constraint:** The crew lead app must be designed as if the user has never used enterprise software. Four taps maximum for any core action. Spanish language support required at launch.

#### Backup Subcontractors (Passive Users)

Backup subs appear in the owner's backup list and receive a push notification when a call-out occurs with a job offer. Their interaction with the app is minimal (accept/decline job offer via notification). They need to receive a clear notification with job details (address, time, type of work) and a one-tap response mechanism.

### User Journey

**Stage 1: Discovery — The Crisis Trigger**

The owner's journey to CrewTrack almost always starts with a specific crisis: a call-out that cost a customer, a dispute they couldn't prove, or a week where they spent more time on the phone than on jobs. After the crisis, they post in r/sweatystartup or a Facebook group: "What do you guys use for managing multiple crews?" They get scattered answers. They discover CrewTrack either through a community post or an AppSumo deal.

- Discovery channel: r/sweatystartup (primary), cleaning/landscaping Facebook groups, AppSumo, word of mouth
- Trigger: An operational crisis, not a calm software evaluation

**Stage 2: Evaluation — The First 30 Minutes**

The owner tries the app. They create two jobs and assign them to a test crew lead (often themselves on a second device). The crew lead experience must work in under 5 minutes without a tutorial. The owner dashboard must show job status at a glance on a phone screen.

- Critical moment: Does the crew lead UX feel simple enough that "my crew leads will actually use this"?
- Second critical moment: Can I see all my crews in one screen, right now?
- Conversion barrier: "Will my crew leads use it?" — must be answered by the UX, not by a sales call

**Stage 3: First Week — The Value Proof**

The owner runs their real crews through CrewTrack for one week. One of three things happens that converts them to a loyal user: (a) a crew lead calls out and the backup sub list saves them 30 minutes, (b) a customer complains and the photo proves the crew was there, or (c) they realize they haven't called a crew lead in 3 days to check status.

- "Aha!" moment: The first time they send a customer the arrival photo and the complaint evaporates
- Retention trigger: The live dashboard becomes the first thing they check every morning

**Stage 4: Long-Term — Daily Operating Rhythm**

CrewTrack becomes the owner's operational backbone. They create jobs each morning, review dashboard status during the day, and add new backup subs after call-out events. Churn risk is very low — the app is embedded in daily operational workflow. Switching cost is the entire crew roster and job history.

- Retention driver: Daily-use operational habit; removing the app would mean returning to WhatsApp + phone calls
- Expansion trigger: As the business grows past 10 crews, the owner upgrades to the higher tier; as they add new verticals (HVAC, pest control), they become advocates for the product in new communities

---

## Success Metrics

CrewTrack's success metrics map directly to the three core value propositions: eliminate crew call-out chaos, eliminate customer dispute revenue loss, and give the owner real-time visibility. If those three things are measurably true for customers, business success follows.

### User Success Metrics

**Crew Lead Adoption Rate**
- Definition: % of crew leads actively using the app (completing job start/completion flows) on days with assigned jobs
- Target: >70% by week 4 of an account's onboarding
- Why this matters: Crew lead non-adoption is the product's primary failure mode. If crew leads don't use it, the owner gets no visibility and no photo proof.

**Photo Completion Rate**
- Definition: % of completed jobs that have both arrival and completion photos uploaded
- Target: >80% of completed jobs within 30 days of account activation
- Why this matters: Photo proof is the most unique differentiator and the feature that eliminates customer dispute revenue loss. Low photo completion means the value proposition isn't being delivered.

**Call-Out Response Time (Backup Sub Feature)**
- Definition: Time from a crew-lead cancellation event to a replacement confirmed (via backup sub list)
- Target: Median response time <15 minutes for accounts using the backup sub feature
- Why this matters: The backup sub feature addresses the highest-emotional-intensity pain. If it's being used and working, the owner saves 30–60 minutes per call-out event.

**Owner Dashboard Daily Active Usage**
- Definition: % of working days the owner opens the dashboard during business hours
- Target: >60% of working days within first month (growing to >80% by month 3)
- Why this matters: If the owner checks the dashboard instead of calling crew leads, the core value is being delivered.

**Job Assignment Time**
- Definition: Average time for owner to create and assign a job to a crew lead
- Target: <2 minutes per job
- Why this matters: If job creation is slow, owners revert to WhatsApp. Speed of daily admin is the primary adoption barrier.

### Business Objectives

**12-Month MRR Target: $13.6K MRR (350 paying customers)**
- Month 3: 50 paying customers → $2K MRR (beta/community launch)
- Month 6: 200 paying customers → $7.8K MRR (post-AppSumo launch)
- Month 12: 350 paying customers → $13.6K MRR
- This target represents <0.2% penetration of the US target market (~170K–250K businesses) — a highly conservative baseline

**AppSumo LTD Revenue: $50K–$150K (Months 3–5)**
- 500–1,500 LTD purchases at $79/$129 average
- Funds ongoing development and covers first 12 months of infrastructure costs
- Generates 30–80 G2/Capterra reviews that fuel organic SEO and credibility for MRR conversion

**Monthly Churn Rate: <5%**
- Daily-use operational tools with embedded crew rosters have inherently low churn
- Target: <5%/month from month 6 onward
- Churn drivers to watch: crew lead adoption failure, owner growth beyond 10 crews (upgrade, not churn), competitive feature launches from Jobber/HCP

**Revenue per Account (ARPA)**
- Starting ARPA: ~$39/month (majority of early accounts on 5-crew plan)
- Target ARPA at month 12: ~$48/month (mix of 5-crew and 10-crew plans as larger accounts join)
- Expansion revenue: 10-crew plan upgrades, optional SMS notification add-on (V2)

### Key Performance Indicators

| KPI | Measurement Method | Target | Timeframe |
|-----|-------------------|--------|-----------|
| Paying customers | Billing system count | 256 | Month 12 |
| MRR | Billing system total | $13.6K | Month 12 |
| Crew lead daily active rate | App analytics (% sessions on job days) | >70% | Month 3 |
| Photo completion rate | Job completion analytics | >80% | Month 2 |
| Monthly churn rate | Cancellations ÷ active accounts | <5% | Month 6+ |
| AppSumo deal purchases | AppSumo dashboard | 500–1,500 | Months 3–5 |
| G2/Capterra reviews | Review platform count | >50 | Month 6 |
| r/sweatystartup launch post upvotes | Reddit post engagement | >200 | Launch day |
| NPS score | In-app survey (quarterly) | >50 | Month 6 |
| Job assignment time | App analytics event timing | <2 min median | Month 1 |

**Leading Indicators (Predict Retention Before It's Measurable):**
- Crew leads using the app within first 7 days of account activation (predicts 90-day retention)
- Owner creating jobs 5+ days in first 2 weeks (predicts daily-habit formation)
- Backup sub list populated with 3+ subs within first month (predicts call-out resilience and deeper engagement)

---

## MVP Scope

### Core Features

The MVP is defined by the minimum feature set that makes the three core value propositions real for the owner in their first week: real-time crew visibility, photo proof of completion, and backup sub management. Every feature not on this list waits for V2.

**Feature 1: Owner Job Creation and Assignment**
- Create a job record: address, service type, time window, customer notes (gate codes, instructions)
- Assign job to a crew lead from the owner's roster
- Automatic push notification sent to the assigned crew lead on assignment
- Edit/reassign jobs before they are started
- View all day's jobs in a single list by crew or by time

**Feature 2: Owner Live Dashboard**
- Single-screen view of all active crews and their current job status
- Job status states: Unstarted / En Route / Active (started) / Completed / Overdue
- Per-crew view: which crew is on which job, how long they've been on site
- Push notification when a job is marked complete
- Push notification when a job goes overdue (optional threshold configurable)

**Feature 3: Crew Lead Mobile App**
- Show today's assigned jobs in order (time-sorted or route-sorted)
- Tap to start a job (marks "En Route" or "Active" on owner dashboard)
- Arrival photo upload (camera capture or gallery; geotagged + timestamped automatically)
- Completion photo upload (same flow)
- Tap to mark job complete
- Push notifications for new job assignments
- Spanish language support at launch

**Feature 4: Photo Proof Record**
- All photos stored in the job record with timestamp and geolocation metadata
- Owner can view the full photo record for any job from the dashboard
- Photo record accessible via shareable link (for sending to disputing customers)
- Photos retained in account storage for minimum 90 days

**Feature 5: Backup Subcontractor List**
- Owner pre-loads a list of backup subs: name, contact, skills/services, notes
- When a crew lead marks themselves unavailable (or owner manually triggers), crew-lead-specific alert appears
- Owner taps "Find Backup" → sees backup sub list
- One-tap to send a job-offer notification to a backup sub with full job details
- Backup sub receives notification with address, service, time, and one-tap accept/decline
- Job is reassigned on acceptance; owner dashboard updates

**Feature 6: Crew Roster Management**
- Owner adds/removes crew leads from their account
- Each crew lead has a profile: name, contact, skill tags, notes
- Crew leads log in via phone number + SMS verification (no password to forget)
- Owner controls which jobs each crew lead can see

**Feature 7: Push Notifications (Core Events)**
- Crew lead: New job assigned, job reminder 30 minutes before window
- Owner: Job started, job completed, job overdue, crew lead cancelled/called out, backup sub accepted job
- Configurable notification preferences per owner

**Technical Platform:**
- React Native (iOS + Android from single codebase)
- Android-first beta testing (field workers disproportionately use Android)
- iOS launched simultaneously with Android at production launch
- Offline mode for crew lead app (poor cellular coverage in the field): actions queued and synced when connection resumes
- SMS verification login for crew leads (no email required)

### Out of Scope for MVP

The following features have clear user value but are explicitly deferred to V2 to keep the MVP build at 8 weeks and prevent scope creep. Each deferral is a deliberate tradeoff:

| Feature | Why Deferred | V2 Priority |
|---------|-------------|-------------|
| Customer SMS notifications ("crew is on the way") | Valuable but not core to the owner's daily pain; crew-to-owner communication is the MVP focus | High |
| Invoice generation from completed job | Requires payment integration and additional UX; owners have existing invoicing tools | High |
| GPS real-time crew tracking | Adds complexity (battery drain, location permissions UX, privacy policy); photo timestamps + geolocation covers the proof use case for MVP | Medium |
| Route optimization | Nice-to-have for sequential jobs; adds mapping API complexity | Medium |
| Multi-day / recurring job scheduling | Cleaning and landscaping have recurring jobs, but basic scheduling handles the core dispatch problem first | Medium |
| QuickBooks / Xero integration | Valuable but adds auth/API scope; invoice feature comes first | Medium |
| Customer-facing portal | Customer self-service is a V3 feature; keep focus on owner and crew lead in MVP | Low |
| Web dashboard (desktop) | Owners are phone-native; desktop adds development scope without serving the core persona | Low |
| AI dispatcher suggestions | Powerful future feature but not needed to deliver core value in MVP | V3 |
| Payroll / time tracking | Different regulatory domain (labor law, California compliance); outside MVP scope | V3 |

**Key principle:** The MVP is not the product minus features — it is the smallest product that makes the owner say "I would pay for this because it saved me time and money this week." The three core pains (call-outs, disputes, visibility) must be fully solved. Everything else waits.

### MVP Success Criteria

The MVP is successful when the following conditions are met, signaling readiness to invest in V2 development and AppSumo launch preparation:

**Adoption Gate:**
- 50+ active accounts with at least one crew lead using the app
- Crew lead daily active rate >70% in active accounts
- Owner creates at least 5 jobs in first 2 weeks (indicates daily habit forming)

**Value Proof Gate:**
- At least 20 documented cases where photo proof resolved a customer dispute
- At least 10 documented cases where the backup sub feature prevented a job cancellation
- Average NPS from beta users: >40

**Technical Gate:**
- App works reliably with poor cellular (offline queue, sync on reconnect)
- iOS and Android parity — no features exclusive to either platform
- Crew lead onboarding: new user completes first job cycle within 5 minutes without assistance

**Business Gate:**
- 20+ reviews on G2 and/or Capterra with average 4.5+ stars
- 3+ authentic testimonials with specific ROI stories (dispute resolved, call-out handled, time saved)
- At least one viral community post organically generated by a satisfied user

**Go/No-Go Decision Point (Month 3):**
If adoption gate and value proof gate are met by month 3, proceed to AppSumo LTD launch. If crew lead adoption is below 50%, pause and redesign the crew lead app UX before AppSumo launch — crew lead adoption failure would generate negative reviews that poison the AppSumo launch.

### Future Vision

**V2: Extended Operator Platform (Months 4–9)**

Building on the core dispatch and photo proof foundation:

- Customer SMS notifications ("your crew is on the way" / "job complete")
- Invoice generation directly from completed job record (with photo evidence attached)
- Recurring job scheduling (weekly/biweekly cleaning, lawn care routes)
- QuickBooks / Xero sync for completed job invoices
- Route optimization for crew leads with multiple sequential jobs
- Enhanced photo reporting: PDF job summary with before/after photos for customer delivery
- In-app messaging between owner and crew lead (replace WhatsApp for job-specific communication)

**V3: Growth and Analytics Platform (Months 9–18)**

Growing with the customer as their business scales:

- Crew performance analytics: completion times, photo compliance rates, customer ratings per crew
- AI-assisted backup sub recommendation (surfaces the best available sub based on location, skills, past reliability)
- Customer portal: customers can view job status, photos, and history
- Expanded capacity: 15-crew tier for accounts outgrowing the 10-crew plan
- Web dashboard for owners who want desktop access (reporting, bulk job creation)
- Payroll integration (time in/time out per job for payroll processing, with labor law compliance awareness)

**Long-Term Platform Vision (2–4 Years)**

CrewTrack as the crew management backbone for all service businesses in the 3–50 crew range:

- International expansion: UK, Australia, Canada (identical market dynamics, English-language communities)
- Vertical expansion: HVAC residential service, pest control, tree service, window cleaning, event staffing — all have identical "owner-as-dispatcher" operational patterns
- Platform API: CrewTrack as a crew management layer that integrates with any FSM platform (Jobber users who want better crew features, HCP users who want a simpler crew lead app)
- Acquisition target: By year 3, CrewTrack's community position and purpose-built architecture make it a natural acquisition candidate for Jobber, Housecall Pro, or Service Fusion to fill their 3–10 crew gap without rebuilding from scratch

**The core vision:** CrewTrack starts as the dispatch tool that saves the 4-crew cleaning company owner from daily phone-call chaos. It grows into the operational backbone that lets a 30-crew landscaping company run without a dispatcher. Every service business that scales past 3 crews should eventually have their operational health visible in one dashboard, their crew leads in one app, and their call-out crises solved in under 2 minutes.

---

## Go-to-Market Summary

**Phase 1 — Community Launch (Months 1–3)**
- r/sweatystartup: Authentic founder post, owner-as-dispatcher story
- Cleaning and landscaping Facebook groups (1M+ combined members)
- Show HN for press and tech-savvy early adopters
- Target: 50 paying beta customers + 20+ G2/Capterra reviews

**Phase 2 — AppSumo LTD (Months 3–5)**
- LTD: $79 (5 crews) / $129 (10 crews)
- Target: 500–1,500 LTD purchases, $50K–$150K revenue
- Reviews from AppSumo buyers fund SEO and social proof

**Phase 3 — Content + SEO + Influencer (Months 6–12)**
- SEO: "crew dispatch app for cleaning business", "managing multiple crews software"
- YouTube partnerships with cleaning/landscaping business channels
- MRR conversion push from LTD cohort with V2 feature incentives

**Pricing Strategy:**
- $39/month (5 crews) / $69/month (10 crews) — no free tier
- Annual billing discount (20%): $31/month / $55/month billed annually
- LTD: $79 / $129 (AppSumo only, limited time)

---

*Product Brief completed: 2026-10-01*
*Input documents: Shortlisted idea (91/105, Tier 1, BUILD) + comprehensive market research (October 2026)*
*Next step: Create PRD using this brief as foundation*
