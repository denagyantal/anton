---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/daycare-daily-report-app.md
  - _bmad-output/planning-artifacts/market-research-daycare-daily-reports.md
workflowType: prd
project_name: daycare-daily-reports
lastStep: step-12-complete
user_name: Root
date: 2026-04-29
classification:
  projectType: mobile_app_saas
  domain: childcare_edtech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Daycare Daily Report App

**Author:** Root
**Date:** 2026-04-29
**Status:** Complete

---

## Executive Summary

In-home daycare providers and small childcare centers (1–30 children) are systematically underserved by the childcare management software market. Dominant players charge $2–10 per child per month — pricing that is economically hostile to the 350,000+ home-based providers who represent over half of all US licensed childcare facilities. These providers run operations on paper daily sheets, WhatsApp groups, handwritten nap logs, and PayPal — a fragmentation that costs time, professional credibility, and enrollment.

**Daycare Daily Report App** is a mobile-first, quick-tap daily logging and parent communication platform for the 1–30 child segment. A provider logs a meal in one tap, attaches a photo, and delivers a beautiful auto-generated daily summary to every parent's phone — in under 60 seconds total. Flat-rate pricing at $49/month (or $99 LTD) undercuts Brightwheel's equivalent spend by 60–80% with no per-child fee surprises.

**Market opportunity:** 634,528 licensed US childcare facilities, 6–9% annual software market growth, zero competitors in the $49–75/month flat-rate full-featured daily report zone, and no childcare management tool on AppSumo or major LTD platforms.

### What Makes This Special

**Core differentiator:** Flat-rate pricing Brightwheel structurally cannot replicate without cannibalizing enterprise revenue, combined with an auto-generated beautiful parent "day card" that makes solo providers look more professional than centers using enterprise tools.

**The three-part moat:**
1. **Flat-rate pricing moat** — "$49/month for up to 30 children" directly attacks Brightwheel's structural weakness and is impossible for them to match without a fundamental business model change.
2. **Speed moat** — daily log entry optimized for one-hand caregiving; full daily report (meals + naps + diapers + 2 activities + 1 photo) in under 60 seconds. No competitor is designed around this constraint.
3. **Output moat** — the auto-generated visual day card is the emotional product parents see. When parents share it with their partners and post it to social, providers keep their subscriptions. Data archive and photo history create switching cost.

**Why now:** Millennial and Gen Z parents (now the dominant parent demographic) expect real-time digital updates. Providers who cannot deliver these updates lose enrollments to those who can. The gap between what parents expect and what home providers can deliver with existing tools has never been wider.

## Project Classification

- **Project Type:** Mobile-first SaaS — native iOS + Android apps (provider + parent) with cloud backend
- **Domain:** Childcare operations / EdTech — moderate compliance considerations (CACFP meal tracking, state licensing documentation); not as regulated as healthcare or fintech
- **Complexity:** Medium — real-time parent notifications, photo storage, multi-child management, freemium subscription gating, offline-tolerant logging
- **Project Context:** Greenfield — no existing system; net-new product

---

## Success Criteria

### User Success

**Provider core experience (time-to-value):**
- Provider completes full daily log (meals + naps + activities + 1 photo) for one child in ≤60 seconds
- Provider sends first daily summary within 30 minutes of account creation
- Provider completes logging for ≥3 consecutive days within first week (habit formation signal)
- Daily log completion rate: ≥85% of enrolled children receive a daily log per active provider per day

**Provider retention signals:**
- ≥70% of providers who complete first week continue daily use in week 2
- Providers with 7+ consecutive logging days exhibit <2% monthly churn
- ≥40% of surveyed beta providers respond "very disappointed" if product disappeared (Sean Ellis PMF test)

**Parent engagement:**
- ≥75% of invited parents install parent app within 72 hours of invitation
- Daily summary open rate ≥60% (push notification + email combined)
- Parent app 30-day retention ≥70%
- Provider health ratio: ≥4 active parent installs per provider correlates with provider retention

### Business Success

| Milestone | Timeline | Target |
|-----------|----------|--------|
| Beta active providers | Month 3 | 50 |
| Beta parent installs | Month 3 | 250+ |
| Capterra/G2 reviews | Month 3 | 15+ (avg ≥4.5 stars) |
| LTD units sold | Month 6 | 500 |
| Active providers | Month 6 | 300 |
| MRR | Month 6 | $5,000 |
| Monthly churn | Month 6 | ≤5% |
| Active providers | Month 12 | 1,000 |
| MRR | Month 12 | $15,000 |
| Monthly churn | Month 12 | ≤3% |
| NPS | Month 12 | ≥50 |
| Capterra/G2 reviews | Month 12 | 150+ |
| Billing module upsell revenue | Month 12 | $10K+ |

**LTD first-mover goal:** First childcare management app listed on AppSumo — establishes community word-of-mouth, generates review velocity, creates brand awareness before Brightwheel can respond with a downmarket pricing move.

### Technical Success

- App store rating ≥4.5 stars on both iOS and Android within 90 days of launch
- Crash rate <0.1% of sessions
- Push notification delivery rate ≥95%
- Daily summary generation success rate ≥99% (no failed auto-sends)
- Support tickets per active provider per month ≤0.5 (Month 6), ≤0.3 (Month 12)
- Zero data loss incidents for provider log history

### Measurable Outcomes

**Leading indicators predicting long-term retention:**
- Parent installs per provider (target ratio ≥4:1)
- Daily log streak length (7+ day streak = <2% churn)
- Daily summary open rate (parent engagement → provider retention)
- Time from account creation to first daily summary sent (target: median <30 min)

**Go/No-Go for LTD Launch:** Provider week-2 retention ≥70% AND parent app install rate ≥75% AND PMF survey ≥40% "very disappointed" AND ≥10 Capterra reviews at ≥4.5 stars.

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete quick-tap daily log → beautiful parent summary loop. Buildable in 3–4 weeks.

**Core loop:** Provider taps to log → app auto-generates visual day card → parent receives notification → parent opens beautiful summary → parent engagement drives provider retention.

**MVP features:**
1. Quick-tap daily log (meals, naps, diapers, activities, photos)
2. Auto-generated visual daily summary ("day card") with narrative
3. Parent app (iOS + Android) with real-time feed, push notifications, photo access
4. Child and enrollment management (profile, allergies, authorized pickups)
5. Parent onboarding via invite link/code (<3 minute setup)
6. Provider onboarding wizard (first child + first parent in <5 minutes)
7. Freemium tier gate (free: ≤5 children, paid: ≤30 children)
8. Scheduled or on-demand daily summary delivery

### Growth Features (Post-MVP, Phase 2)

**Billing & Tuition Module ($15/month upsell):**
- Attendance sign-in/sign-out (QR or PIN)
- Attendance-linked automatic invoice generation
- Parent payment processing via Stripe
- Late fee automation
- Revenue leakage elimination (uncaptured extra hours, missed charges)

**CACFP Meal Tracking:**
- USDA-compliant per-child meal count logging
- Monthly export for sponsor agency reporting
- Menu planning templates

**Multi-Staff Support:**
- Staff accounts with role-based access (teacher: log only; admin: full access)
- Activity assignment per classroom or age group

**Web Dashboard:**
- Browser-based provider dashboard for report review and billing management

### Vision (Phase 3+)

- State licensing compliance reports (staff:child ratio, incident logs, attendance summaries)
- Incident reporting with parent signature capture and PDF export
- AI narrative generation for daily summaries (LLM-written from logged events)
- Multi-language parent app (Spanish, Chinese, Portuguese)
- Provider discovery marketplace (parents find providers using the platform)
- After-school and camp programs adaptation
- Full Childcare Business OS — the "Shopify for small childcare"

---

## User Journeys

### Journey 1: Maria — The In-Home Provider (Primary Success Path)

**Who she is:** Maria, 42, licensed family childcare home operator in suburban Ohio. Cares for 7 children ages 6 weeks to 4 years, M–F 7am–5:30pm. One part-time assistant 3 days/week. Comfortable with smartphone (Facebook, Instagram, WhatsApp) but not enterprise software. 8 years operating her home daycare.

**Opening scene — the trigger:** A parent at Friday pickup says, "I really wish I could see what Emma is doing during the day. The center down the street sends daily updates with photos." Maria drives home feeling the credibility gap. She spent 25 minutes during nap time filling in paper daily sheets and individually texting 7 parents photos from her personal phone. She knows this isn't sustainable.

**Rising action — discovery and trial:**
That evening Maria posts in the Ohio Home Daycare Providers Facebook group: "What app are you using for daily reports?" Three providers respond with different tools. One mentions a "$99 one-time deal" she found. Maria Googles "Brightwheel alternative affordable" and lands on the Daycare Daily Report App comparison page. She signs up for the free trial in 2 minutes with her Google account.

She sets up 3 child profiles over 10 minutes — name, birthdate, allergies, emergency contacts. She invites one parent (Emma's mom Sarah) via a link she copies and texts. Sarah sets up her parent account in 3 minutes. Maria logs a test meal, takes a photo from her phone, and taps "Send daily summary." A beautiful day card lands on Sarah's phone. Sarah texts back: "This is so cute! Will you be doing this every day?" Maria upgrades to $99 LTD that night.

**Climax — first full week:**
Maria onboards all 7 children on Saturday afternoon. By Monday morning she has parent app installed for 6 of 7 families. During breakfast she opens the app, selects Emma's profile, taps "Meal → Breakfast → Ate all" in 4 seconds, then does the same for 6 other children in under 3 minutes. Paper daily sheets stay in the drawer. At 5pm she taps "Send summaries for all" and puts the phone down. Seven beautiful day cards go out automatically.

**Resolution — the new reality:**
By week 3, Maria's paper sheets are gone. Her total daily admin time is under 5 minutes — a 20-minute reduction. Five parents have left hearts or comments on daily summaries. One parent shared Emma's day card in a local parents Facebook group with: "Love our daycare — they use this app!" Maria's enrollment waitlist grew by 3 inquiries that month. When a friend asks what she's using, Maria posts the referral link in two Facebook groups. She has become a promoter.

**Capabilities revealed:** Quick-tap logging, child roster switching, photo attachment, auto-generated day card, scheduled summary delivery, parent push notifications, parent react/comment, provider-to-group referral.

---

### Journey 2: Maria's Assistant Rosa — The Secondary Staff User (Edge Case: New User, Zero Training)

**Who she is:** Rosa, 28, helps Maria 3 days/week. Not very tech-comfortable. First day using the app.

**Opening scene:** Maria hands Rosa the provider's phone during outdoor play time. "Just tap on each kid's name, then tap 'Activity,' then pick 'Outdoor Play.'" Rosa has never seen the app.

**Rising action:** Rosa opens the app. She sees a child roster. She taps "Liam" — his daily log appears. She taps the large "+" button. Three options: Meal, Nap, Activity, Diaper. She taps Activity. A scrollable grid of activity icons appears: Outdoor Play, Art, Reading, Music, Tummy Time, Free Play. She taps "Outdoor Play." A confirmation appears with Liam's name and the time. She taps "Save." Done in 8 seconds.

**Climax:** Rosa logs outdoor play for 5 children in under 2 minutes without asking Maria a single question.

**Resolution:** Maria never has to double-log on Rosa's days. Rosa texts Maria: "That app is really easy." The business scales beyond what Maria could do alone.

**Capabilities revealed:** Intuitive child roster, zero-training activity logging UI, preset activity list, instant save confirmation, no complex navigation required.

---

### Journey 3: David — The Small Center Director (Multi-Teacher Scenario)

**Who he is:** David, 51, owner-director of a small licensed daycare center in Austin. 2 classrooms, 22 children, 4 full-time teachers. Used paper daily sheets + spreadsheet billing for 12 years. Balked at Brightwheel pricing 2 years ago. A new competitor center 2 miles away opened with Brightwheel. Three families have mentioned they like the competitor's app.

**Opening scene — competitive pressure:** David's best teacher shows him a daily summary the nearby center sent to a parent who shared it on local social media. It's polished, professional, has photos. David's paper sheets look primitive in comparison.

**Rising action — evaluation:**
David Googles "Brightwheel alternative affordable" and finds the Daycare Daily Report App. He sees "$49/month for up to 30 children" and does the math: Brightwheel would cost him $88–220/month for 22 children. He starts a free trial with 5 children. He sets up 2 classroom tablets (existing iPads) with the teacher-facing provider app. He creates staff accounts for his 4 teachers.

Two teachers adopt it within the first morning. One teacher struggles — she finds the child roster confusing with 22 names on one screen. David wishes there were classroom grouping. (This becomes a Phase 2 feature request he logs via in-app feedback.)

**Climax — parents notice:**
After week 1, 18 of 22 families have installed the parent app. Three parents specifically message David to say they love getting the daily update. The parent who had mentioned the competitor's app says: "Yours is actually nicer-looking." David schedules a staff meeting to ensure consistent logging across classrooms.

**Resolution:**
Month 2, David is using the paid tier at $49/month. He calculates he's saving 4+ hours/month on billing (still manual, but he's waiting for the billing module). He's submitted a feature request for classroom grouping. His enrollment waitlist is full for the first time in 3 years.

**Capabilities revealed:** Staff accounts, multi-child center deployment, tablet-optimized UI, in-app feedback mechanism, enrollment management for 22 children.

---

### Journey 4: Sarah — The Engaged Parent (Parent App Onboarding + Daily Use)

**Who she is:** Sarah, 34, marketing manager, mother of 18-month-old Emma. Highly tech-literate. Expects real-time updates. Uses 15+ apps daily.

**Opening scene:** Maria texts Sarah a link on Sunday evening: "Hey! I'm using a new app to share Emma's daily updates with parents. Takes 3 min to set up — here's your invite link."

**Rising action — setup:**
Sarah taps the link. App Store. Download (47MB). Opens. "Enter your invite code." She pastes it from Maria's message. Emma's profile appears — her photo, age, Maria's daycare name. Sarah sets notification preferences: "Real-time updates" and "Daily summary at 5pm." Setup complete in 2 min 40 seconds.

**First day:**
At 9:15am, a push notification: "Emma had breakfast — ate most of her oatmeal 🥣" Sarah opens it and sees a small entry in Emma's live feed. At 11am: "Emma is napping — started at 10:45am." At 12:30pm: a photo of Emma doing fingerpainting, grinning. Sarah screenshots it and sends it to her partner.

At 5:02pm, a push notification: "Emma's day summary is ready!" Sarah opens a beautifully formatted day card: Emma's name and today's date at the top, a warm narrative ("Emma had a wonderful Tuesday!"), meal summary, nap duration (1h 45min), activities with the fingerpainting photo. Sarah taps the heart. She shows it to her partner that evening: "Look at this — isn't this adorable?" Her partner says: "Can I get notified too?" (Two-parent notification: Phase 2 feature.)

**Resolution:**
Sarah looks forward to the 5pm summary. When Emma transitions to a new daycare 18 months later, Sarah specifically asks: "Do you use the Daycare Daily Report App?" She has become a demand-side driver for provider adoption.

**Capabilities revealed:** Invite link onboarding, notification preference settings, real-time log feed, push notifications per event, photo in feed, 5pm summary push, day card visual format, parent heart reaction, 2-parent access desire (Phase 2 demand signal).

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|------------|
| Quick-tap logging (meal/nap/diaper/activity) | Maria journey, Rosa journey |
| One-hand UI, zero-training preset list | Rosa journey (new user test) |
| Photo capture + attachment | Maria, Sarah journeys |
| Auto-generated visual day card with narrative | Maria, Sarah journeys |
| Scheduled + on-demand summary delivery | Maria journey |
| Child roster with quick switching | Maria, Rosa journeys |
| Parent invite link + <3min onboarding | Sarah journey |
| Real-time parent feed + event push notifications | Sarah journey |
| Parent reaction (heart) + comment | Sarah journey |
| Staff accounts (non-admin) | David journey |
| Tablet-optimized UI | David journey |
| Multi-child center management (22 children) | David journey |
| In-app feedback mechanism | David journey |
| Freemium gate (5 child free limit) | Maria journey |

---

## Domain-Specific Requirements

### Compliance & Regulatory Context

**CACFP (Child and Adult Care Food Program):**
- 170,000+ daycare providers participate in CACFP and must document precise per-child meal counts daily for federal food reimbursement
- MVP meal logging must capture sufficient data (meal type + portion consumed per child) to support CACFP export in Phase 2 — no schema changes should be required
- MVP does NOT need to produce CACFP reports but must not prevent Phase 2 from doing so cleanly

**State licensing documentation:**
- Providers must retain attendance, incident, and meal records for state licensing audits (retention periods vary by state: typically 1–3 years)
- Daily logs must be retained for the provider's account lifetime (paid) or 90 days (free) — providers should be warned before data deletion
- MVP does not need to produce licensing-compliant exports, but data schema must support future report generation

**Children's data privacy (COPPA):**
- The platform holds data about children under 13 — COPPA compliance is legally required
- Child data (name, birthdate, photos, daily activity) must be stored securely and accessible only to verified parents/guardians
- Provider privacy policy and terms of service must include appropriate COPPA language before launch
- No advertising tracking or third-party analytics on parent/child data without explicit consent

**FERPA note:** FERPA applies to educational institutions receiving federal funding — not applicable to in-home daycares; no FERPA compliance needed for MVP

### Technical Constraints

**Photo storage:**
- Provider photo capture is the most storage-intensive operation — average 2–5 photos/child/day across 30 children = 60–150 photos/day per provider
- Photos must be compressed client-side before upload (target: ≤500KB per photo after compression) to minimize storage costs and upload latency on mobile networks
- Photos must be retained for the duration of provider's subscription history access period

**Offline tolerance:**
- Providers operate in homes with variable WiFi — logging must not require a live internet connection
- Log entries created offline must queue locally and sync when connectivity resumes
- Offline queue should persist across app restarts
- Parent feed updates are online-only (acceptable: parent app is not a caregiving tool)

**Push notification reliability:**
- Parent daily summary delivery is the highest-value feature for retention — push notification delivery failure is a churn risk
- Must use both APNs (iOS) and FCM (Android) with retry logic and email fallback
- Provider can see delivery status of sent summaries (delivered vs. pending)

### Risk Mitigations

**Child photo privacy:** Photos must be served via signed, time-limited URLs — never publicly accessible by URL guessing. Photos are scoped to parent's enrolled child only.

**Data portability on cancellation:** Provider must be able to export their complete log history (CSV or PDF) before account deletion — prevents hostage data situation and supports state licensing audit retention requirements.

**Brightwheel expanding downmarket:** Flat-rate pricing moat buys 12–18 months before Brightwheel can respond (requires restructuring their per-child revenue model). Speed of LTD community adoption and review volume are the counter-strategy — build brand before they respond.

---

## Mobile App Specific Requirements

### Platform Requirements

- **Provider app:** iOS (iPhone + iPad) and Android (phone + tablet) — native apps required; web is Phase 2 only
- **Parent app:** iOS (iPhone) and Android (phone) — mobile-first; tablet optimization is secondary
- **Minimum iOS:** iOS 16+ (covers 95%+ of active iPhones as of 2026)
- **Minimum Android:** Android 12+ (API level 31; covers 80%+ of active Android devices as of 2026)
- **Offline-first architecture:** Core logging must function without internet; sync on reconnection

### Device Features & Permissions

| Permission | Required For | Fallback |
|-----------|-------------|---------|
| Camera | Photo capture for activity logs | Gallery upload from existing photos |
| Push notifications | Parent real-time updates + summary delivery | Email-only fallback |
| Photo library read | Attaching existing photos to log entries | Camera-only |
| Local storage | Offline log queue persistence | None — required |
| Background app refresh (iOS) | Sync offline queue on reconnection | Sync on foreground |

### One-Hand UI Design Constraints

The provider app is used during active caregiving — one hand often holds a child. Design constraints:
- All primary logging actions reachable with thumb of one hand on a standard 6" phone
- No log entry should require more than 3 taps from home screen to saved
- Large touch targets (minimum 48×48dp) for all interactive elements
- No mandatory text input for any core logging action (everything preset-first)
- Child switching available from within the logging flow without navigating back

### Tablet Optimization (Provider App)

- Multi-column layout on iPad and Android tablets (≥7" screen)
- Child roster visible alongside log entry on tablet — eliminates switching friction
- Optimized for daycare center classroom tablet deployment (shared device, per-staff authentication)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the MVP must deliver the full emotional journey (provider logs → parent receives beautiful summary → parent engages) because the product only creates value when both sides (provider and parent) are active. A partial MVP that delivers logging without parent summaries has no retention. A partial MVP that delivers summaries without beautiful design has no word-of-mouth.

**Resource Requirements:** 1–2 mobile engineers (React Native or Flutter), 1 backend engineer (Node.js or Python + cloud storage), 1 designer (UI/UX for day card template and logging flow). 3–4 week build sprint.

**Technology recommendations (for architecture step):** React Native (single codebase for iOS + Android), Firebase or Supabase for backend (real-time sync, push notifications, auth), Cloudinary or S3 for photo storage, Stripe for subscriptions.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Maria's success path (primary provider daily logging + summary)
- Rosa's zero-training logging (secondary staff quick use)
- Sarah's parent onboarding + daily engagement

**Must-Have Capabilities:**
- Account creation + Google OAuth
- Daycare profile setup
- Child profile management (name, birthdate, allergies, emergency contacts, photo)
- Quick-tap meal logging (type + portion, ≤3 taps)
- Quick-tap nap logging (start/end time)
- Quick-tap diaper logging
- Activity logging with preset list + photo attach + optional note
- Child roster with quick switching
- Daily log timeline view per child
- Auto-generated visual day card from logged events
- Scheduled + on-demand summary delivery
- Parent invite link/code generation
- Parent app (iOS + Android): install, child feed, push notifications, photo view, day card, heart reaction, comment
- Freemium gate (5-child free, 30-child paid at $49/month, $99 LTD)
- Offline log queue with sync
- Photo compression + signed URL delivery
- In-app onboarding wizard (first child + first parent in <5 minutes)

### Post-MVP Features

**Phase 2 (Months 3–6): Provider Operations Suite**
- Billing & tuition module with attendance-linked invoicing ($15/month upsell)
- Attendance sign-in/sign-out (QR + PIN)
- CACFP meal tracking export
- Multi-staff accounts with RBAC
- Web dashboard for providers
- Classroom grouping for center deployments
- Two-parent notifications per child

**Phase 3 (Months 6–12): Compliance & Growth Layer**
- State licensing compliance reports (ratio tracking, incident log, attendance summary)
- Incident reporting with photo + parent signature + PDF export
- AI daily narrative generation (LLM from logged events)
- Multi-language parent app (Spanish, Chinese, Portuguese)
- Data export tool (CSV/PDF) for provider portability and audit compliance

### Risk Mitigation Strategy

**Technical Risks:**
- *Offline sync conflicts* — mitigated by append-only log model (no edits to submitted entries); server timestamp resolution for ordering
- *Push notification reliability* — mitigated by dual-channel (push + email) with delivery status tracking
- *Photo storage costs at scale* — mitigated by client-side compression (<500KB per photo) and tiered storage (recent photos on CDN, archived to cold storage after 90 days)

**Market Risks:**
- *Brightwheel downmarket expansion* — mitigated by LTD first-mover positioning and community reviews before Brightwheel can respond; flat-rate pricing moat
- *Provider tech resistance* — mitigated by zero-training UI design (Rosa test), in-app video walkthroughs, Facebook group community support
- *Parent non-adoption* — mitigated by <3-minute parent setup; if parents don't install, providers abandon; parent UX is a P0 priority

**Resource Risks:**
- *3-4 week MVP timeline* — descope to provider app + basic parent web page (no parent native app) for initial beta only; native parent app ships by week 6
- *Photo storage budget* — free tier limited to 90-day retention reduces ongoing storage cost for non-converting users

---

## Functional Requirements

### Provider Account & Profile Management

- FR1: Provider can create an account using email/password or Google OAuth
- FR2: Provider can configure a daycare profile with name, type (home/center), and maximum enrollment
- FR3: Provider can update their account credentials and notification preferences
- FR4: Provider can cancel or pause their subscription with confirmation

### Child & Enrollment Management

- FR5: Provider can create a child profile containing name, birthdate, allergies/dietary restrictions, emergency contacts, authorized pickup list, and profile photo
- FR6: Provider can view the complete roster of all enrolled children with enrollment status
- FR7: Provider can activate and deactivate child enrollments (deactivated children are hidden from daily logging but history is retained)
- FR8: Provider can link up to 2 parent accounts per child
- FR9: Paid-tier providers can enroll up to 30 children; free-tier providers are limited to 5 children

### Daily Logging — Provider

- FR10: Provider can log a meal for a child by selecting meal type (breakfast/lunch/snack/bottle) and portion consumed (all/most/some/none) in ≤3 taps
- FR11: Provider can log a nap for a child by recording start time and end time, with automatic duration calculation
- FR12: Provider can log a diaper change for a child by selecting type (wet/BM/dry) with optional note
- FR13: Provider can log an activity for a child by selecting from a preset list (outdoor play, art, reading, music, tummy time, sensory play, free play, circle time) with optional attached photo and optional note
- FR14: Provider can capture a photo directly from the camera or attach from the photo library to any log entry or as a standalone daily photo
- FR15: Provider can add a freeform text note to any log entry
- FR16: Provider can switch between enrolled children during the logging flow without returning to the home screen
- FR17: Provider can view a chronological timeline of all logged events for any enrolled child for the current day
- FR18: Staff users with logging access can create log entries for assigned children using the same provider app

### Daily Summary Generation & Delivery

- FR19: System auto-generates a formatted visual day card for each child from all logged events for the day, including a warm narrative summary, meal summary, nap duration, activity list with photos, and diaper count
- FR20: Provider can send individual or batch daily summaries to all enrolled parents on demand via a single tap
- FR21: Provider can configure an automatic daily summary delivery time (e.g., 5:00 PM) per daycare
- FR22: Provider can see the delivery status of each sent daily summary (delivered, pending, failed)

### Parent App — Onboarding & Access

- FR23: Provider can generate a shareable invite link or alphanumeric code for each parent
- FR24: Parent can create an account and access their child's profile using the invite link/code in under 3 minutes
- FR25: Parent can configure their notification preferences (real-time events vs. summary only; push vs. email)

### Parent App — Daily Experience

- FR26: Parent can view a real-time chronological feed of all logged events for their enrolled child as events are logged during the day
- FR27: Parent receives a push notification when a new log entry is added for their child (if real-time notifications enabled)
- FR28: Parent receives a push notification when a daily summary is available for their child
- FR29: Parent can open and view the complete visual day card for their child for any day
- FR30: Parent can view, zoom, and download full-resolution photos from their child's daily logs
- FR31: Parent can react to a daily summary with a heart reaction visible to the provider
- FR32: Parent can leave a text comment on a daily summary that is visible to the provider
- FR33: Parent can access historical daily summaries for their child (90-day rolling on free provider plan, unlimited on paid)

### Notifications & Reminders

- FR34: Provider can receive an in-app reminder if a daily summary has not been sent by the configured delivery time
- FR35: System delivers push notifications and email fallback for parent daily summary delivery
- FR36: Provider can view a notification history log of all sent summaries and their delivery status

### Subscription & Access Control

- FR37: Provider can start a free trial with full feature access for up to 5 children without entering payment details
- FR38: Provider can upgrade to the paid tier ($49/month or $99 LTD) through an in-app payment flow (Stripe)
- FR39: Free-tier providers who exceed 5 enrolled children receive an upgrade prompt; they cannot activate the 6th child without upgrading
- FR40: LTD (lifetime deal) buyers receive Professional tier access permanently without recurring billing

### Provider Onboarding

- FR41: Provider can complete a first-time setup wizard that guides them through daycare profile creation, adding the first child, and inviting the first parent in a single flow targeting <5 minutes total
- FR42: Provider can access 60-second in-app video walkthroughs for each core action (log a meal, send a summary, invite a parent)

### Data & History

- FR43: Provider can view historical daily log entries for any enrolled child, filterable by date
- FR44: Provider can export a child's log history as a PDF or CSV (Phase 2; data schema must support this from MVP)
- FR45: Provider receives a 30-day warning before historical data is deleted upon account deactivation or free-tier history expiry

---

## Non-Functional Requirements

### Performance

**Logging speed** (most critical — providers log during active caregiving):
- Any single log entry (meal, nap, diaper, activity) must be saved within 2 seconds of the provider tapping "Save," even on 3G connectivity
- Offline log entries must be saved locally within 500ms (no network dependency)
- Offline queue sync must complete within 30 seconds of reconnecting to the internet for queues ≤50 entries

**App responsiveness:**
- App cold start to usable home screen: <3 seconds on a mid-range Android device (2022 vintage)
- Child roster load (up to 30 children): <1 second
- Daily summary generation (all events for one child): <5 seconds from tap to preview
- Photo upload to CDN: <10 seconds for a ≤500KB compressed photo on LTE

**Parent app:**
- Day card load (text + up to 10 photos): <3 seconds on LTE
- Real-time feed update latency: <5 seconds from provider save to parent notification

### Security

**Data protection:**
- All data encrypted in transit (TLS 1.3 minimum) and at rest (AES-256)
- Child photos served exclusively via signed time-limited URLs (URL expiry: 1 hour); no publicly guessable photo URLs
- Parent accounts can only access data for their explicitly enrolled child — server-side enforcement, not client-side
- Provider accounts can only access data for their own daycare — multi-tenant isolation at the data layer

**Authentication:**
- JWT-based session tokens with 30-day expiry and refresh
- Google OAuth supported for provider accounts
- Password reset via time-limited email link (no security questions)
- No plain-text passwords stored at any layer

**COPPA compliance:**
- No advertising tracking or behavioral profiling on child data
- No third-party analytics that receive personally identifiable child data
- Privacy policy and terms of service must be accepted at account creation
- Provider is the data controller for child records in their care

### Reliability

- API uptime: ≥99.5% (measured monthly; allows ~3.6 hours/month downtime)
- Daily summary delivery success rate: ≥99% (combined push + email fallback)
- Offline logging must function with zero data loss; local queue must persist across app crashes and restarts
- No single provider's data loss events (database backups: daily automated, 30-day retention)

### Scalability

**MVP targets:**
- Support 500 concurrent active providers (sufficient for Month 6 growth)
- Support 10,000 parent app installs (5:1 parent-to-provider ratio at 1,000 providers)

**Month 12 targets:**
- Support 5,000 concurrent active providers without architectural changes
- Photo storage scaled to support 1M+ photos without cold storage migration disruption
- Database read/write throughput to support 50,000 log entries/day (50 entries × 1,000 providers)

**Architecture guidance:** Stateless API design enables horizontal scaling; photo storage on object storage (S3/GCS) with CDN; read replicas for parent feed queries; queue-based summary generation to handle peak 5pm batch delivery.

### Accessibility

**Provider app:** Core logging flows must be usable by providers with basic smartphone literacy (Maria persona level). No accessibility regulation applies to in-home business tools, but:
- Minimum 4.5:1 color contrast ratio for all text elements
- All interactive elements meet 48×48dp minimum touch target
- No time-limited interactions (no auto-dismiss modals during logging)

**Parent app:** Broader public audience including parents with varying abilities:
- WCAG 2.1 Level AA compliance for core parent screens (day card, feed, onboarding)
- VoiceOver (iOS) and TalkBack (Android) support for day card and notification content
- Dynamic type support (iOS) for system font size preferences

---

## Appendix: Key Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| React Native over native per-platform | Single codebase for 2 platforms reduces 3-4 week MVP timeline risk; provider app is not graphically intensive |
| Offline-first logging | Providers operate in homes with variable WiFi; logging failure during caregiving is a churn event |
| Append-only log model | Eliminates sync conflicts for offline queue; simplifies CACFP audit trail (no edits to submitted records) |
| Free tier: 5 children | Covers solo babysitters and nano-providers; creates upgrade pressure at 6+ children (sweet spot for in-home daycares) |
| $99 LTD (not $79) | Market research shows in-home providers will pay $99 for a tool that saves them 20 min/day; $79 leaves revenue on table |
| Parent app native (not web) | Push notification reliability requires native; parent engagement is the primary retention lever for providers; web parent experience is not equivalent |
| No billing in MVP | Billing adds 2-3 weeks of scope; daily report value loop is complete without it; billing is a confirmed Phase 2 upsell |
| No web dashboard in MVP | Mobile-first is sufficient for 1-30 child operators; web adds scope without MVP-critical value |
| Scheduled summary at provider-configured time | Providers have different end-of-day times; forcing a system default time creates missed-delivery complaints |
| Data export as Phase 2 | Schema designed to support it from MVP; implementation deferred to avoid scope creep |
