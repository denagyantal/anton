---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-11-complete]
inputDocuments: ['ideas/shortlisted/private-music-teacher-studio-management.md', '_bmad-output/planning-artifacts/brief-private-music-teacher-studio.md']
workflowType: 'prd'
lastStep: 'step-11-complete'
date: '2026-05-09'
author: 'Root'
---

# Product Requirements Document: TuneStudio

**Author:** Root
**Date:** 2026-05-09
**Status:** Complete

---

## Executive Summary

TuneStudio is a mobile-native studio management platform for independent music teachers and small music schools — the 100,000–200,000+ active private instructors in the US who currently run their businesses on a fragmented cobble of Google Calendar, Venmo, and text messages. The product replaces this four-tool administrative mess with a single, purpose-built system that handles scheduling, automated payment collection, parent communication, makeup lesson tracking, practice logs, and semester-based billing — every music-specific workflow that generic tools have failed to address.

The market entry strategy leads with an AppSumo Lifetime Deal ($79 solo / $149 studio), a channel with zero competing products today. AppSumo → community seeding in teacher Facebook groups → MTNA network → blogger reviews (Colourful Keys, TeachPianoToday, TopMusic.co) produces a word-of-mouth growth engine suited to the tight-knit, referral-driven nature of the independent music teacher community. Target: 500+ LTD buyers at launch; $10K MRR by Month 12 from subscription cohorts.

### What Makes This Special

The single most-documented complaint in the category (755 Capterra reviews of My Music Staff — the market leader at 4.8/5 — flagging the absence of a native mobile app) is TuneStudio's opening move: a full-featured React Native app for teachers, with a mobile-first parent portal PWA. Every competitor's mobile experience is an afterthought. TuneStudio's is the core.

Three additional differentiators close the remaining gaps:

1. **No per-transaction markup** — Stripe Connect at the teacher's own rate, zero platform fee on top. Directly attacks Fons' #1 complaint (their 2.9% markup on top of $29.95/month is called out explicitly in reviews as deceptive).
2. **Semester-based billing** — Music education runs on fall/spring semesters, not calendar months. No existing tool handles semester enrollment, pro-rated mid-semester join, or automatic semester invoice generation natively.
3. **Makeup lesson tracking** — When a student cancels, a credit is created automatically. Teachers set their own policy window. No tool does this without manual tracking.

The AppSumo channel is the strategic moat: no competitor has ever launched on AppSumo in this category. Being first captures the community discussion that shapes peer recommendations for years.

## Project Classification

- **Project type:** SaaS B2B (teacher-facing subscription), with a B2B2C parent portal component
- **Domain:** EdTech / Professional Services Management
- **Domain complexity:** Low-Medium — no HIPAA, no PCI-DSS beyond standard Stripe PCI compliance, no unusual regulatory layer; the complexity is UX and billing logic, not compliance
- **Project context:** Greenfield — no existing codebase; fresh build from scratch
- **Deployment model:** Web + Mobile (React Native iOS/Android + Next.js web app)

---

## Success Criteria

### User Success

A teacher is successful when:

- She no longer sends a single manual payment reminder — the system handles it
- Parents know the lesson schedule, lesson notes, and payment status without texting her
- Makeup lesson credits track themselves and never get lost
- She can log a lesson note from her phone before her next student arrives
- She can answer "yes" when a parent asks if there's an app

Specific user success moments (the "aha" moments that drive retention and word-of-mouth):

| Moment | What Triggers It |
|--------|-----------------|
| First automated payment received | Parent pays after an automated reminder — teacher didn't ask |
| First parent portal login | Parent views the lesson schedule without contacting the teacher |
| First lesson note logged on mobile | Teacher logs notes on her phone immediately after a lesson |
| First makeup credit auto-created | A student cancels; the credit appears without any manual action |

### Business Success

| Metric | Target | Timeline |
|--------|--------|----------|
| AppSumo LTD buyers | 500+ | Launch month (Month 7) |
| AppSumo launch revenue | $44,500+ (500 × $89 avg) | Launch month |
| Subscription MRR | $1,500 | Month 3 |
| Subscription MRR | $5,000 | Month 6 |
| Subscription MRR | $10,000 | Month 12 |
| Monthly churn (subscription) | <3% | Ongoing from Month 3 |
| NPS | >60 | Month 6 survey |
| Capterra/G2 reviews | 50+ at 4.8+ | Month 6 |
| Capterra/G2 reviews | 150+ at 4.8+ | Month 12 |
| MTNA partner program | Secured | Month 9 |

**Go/No-Go Gate:** If fewer than 100 teachers are actively using the product weekly at Month 6, or retention falls below 60%, pause growth investment and diagnose before continuing spend.

### Technical Success

- Mobile app session rate ≥65% of total sessions (validates the core differentiator)
- Payment collection activation: ≥70% of active teachers connect Stripe within 30 days
- Parent portal activation: ≥60% of imported students have an active parent portal within 14 days
- Weekly active usage: ≥75% of paying teachers log in at least once per week
- System uptime: ≥99.5% (downtime causes teachers to miss lesson bookings; this has direct revenue impact)
- Lesson note sync latency: parent portal reflects new notes within 60 seconds

### Measurable Outcomes

| Outcome | Metric | Target |
|---------|--------|--------|
| Admin time reduction | Self-reported hours/month on admin tasks | From ~8hrs → <1hr |
| Payment chase elimination | % teachers who no longer manually chase payments | >80% at 90-day survey |
| Mobile adoption | % of total sessions on mobile app | >65% |
| Parent engagement | Parent portal logins per student per month | >2 |
| Lesson documentation | Lesson notes logged per active teacher per month | >8 |
| Student retention signal | 12-month teacher retention (subscription cohort) | >80% |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP solves the core cobbled-stack problem completely for a solo teacher with 15–50 students. Every feature below is directly traceable to a documented user complaint or competitor gap.

**MVP Feature Set (Build Order = Priority):**

1. **Native mobile app (iOS + Android)** — React Native; teacher manages their entire studio from the phone
2. **Student & schedule management** — student profiles, recurring lesson scheduling, calendar view, conflict detection
3. **Payment collection (no markup)** — Stripe Connect, automated reminders, manual payment recording
4. **Makeup lesson tracking** — auto-credit on cancellation, policy configuration, makeup scheduling flow
5. **Parent portal** — invitation-based access, upcoming lessons, lesson notes, payment status, cancellation request
6. **Lesson notes & practice assignments** — mobile-first logging, visible to parents in real time
7. **Semester-based billing** — semester definition, enrollment, pro-rated join, automatic invoice generation
8. **Basic reporting** — monthly revenue summary, outstanding balances, lesson completion rate

### Growth Features (Post-MVP)

Planned for v1.5 (Month 8+), contingent on MVP PMF validation:

- Multi-teacher studio tier with per-teacher scheduling views
- Studio payroll / revenue sharing between owner and teachers
- Google Calendar two-way sync and iCal export
- Student self-scheduling (teacher-controlled opt-in)
- In-app messaging threads (replacing text messages for parent communication)
- Method book / curriculum tracking with standard library

### Vision (Future — v2+)

18–36 month horizon:

- Recital management module: repertoire assignment, program PDF, seat map
- AI-powered practice feedback: optional audio recording; AI provides basic technique notes; teacher reviews before parent sees
- Marketplace: lesson plan templates, practice challenge library
- School district integration: share progress notes with band/orchestra directors
- International expansion: UK, Australia (similar market fragmentation)

---

## User Journeys

### Journey 1: Sarah — The Established Solo Teacher (Core Buyer, Success Path)

Sarah teaches 32 piano students from her home studio. She charges $80/lesson and earns ~$48K/year. Today her stack is Google Calendar + Venmo + text messages. She spends 8 hours/month on admin and hates chasing late payments.

**Opening Scene:** A parent in her studio asks if there's "an app" to check the lesson schedule. Sarah feels a flash of embarrassment — she uses a text thread and a Google Calendar share link that half the parents can't navigate. That evening, a teacher in her Facebook group posts about TuneStudio, specifically mentioning the mobile app.

**Rising Action:** Sarah clicks the link. She reads three Capterra reviews. Every one of them mentions payment automation and the fact that "parents actually use the portal." She signs up for the free trial. She imports her student list from a CSV she exported from her contacts. The onboarding wizard walks her through setting her lesson rate and recurring schedule. Fifteen minutes later, her studio is configured.

**Climax:** She sends parent portal invitations to five test families. The next morning, one parent texts her: "I found the schedule in the app — so much easier!" Sarah has not sent a single text. That afternoon, she connects her Stripe account. Two days later, the first automated payment reminder goes out. One parent pays that evening — without Sarah asking.

**Resolution:** Sarah buys the LTD. She starts logging lesson notes on her phone after every lesson. Parents leave her fewer "what time is practice?" texts. At the end of the month, zero payment chasers. She posts in the Facebook group: "Just switched to TuneStudio and I will never go back." She writes a Capterra review. Three teachers in her local MTNA chapter ask her about it.

**Requirements Revealed:** Student import, schedule setup, parent portal invitations, Stripe Connect onboarding, automated payment reminders, mobile lesson note logging.

---

### Journey 2: Marcus — The Growing Teacher (Edge Case: Payment Chaos Recovery)

Marcus teaches 18 guitar students. He uses Calendly (no payment enforcement) and Venmo (no invoices). Six students haven't paid in six weeks. He doesn't know how to send a professional invoice without it feeling confrontational.

**Opening Scene:** Marcus calculates he's missing ~$1,200 in unpaid lessons. He Googles "how to collect payment from students." He finds a Reddit thread where someone recommends TuneStudio specifically for the "require payment before booking" feature.

**Rising Action:** Marcus signs up. He enables the "payment required to confirm lesson" setting. He imports his 18 students and their outstanding balances. The system generates outstanding balance notices automatically. He sends them through the parent portal.

**Climax:** He realizes he can record the Venmo payments he already received manually, clearing the backlog. Going forward, the system will flag any lesson without associated payment. Within two weeks of switching, all outstanding balances are cleared.

**Resolution:** Marcus now runs a clean studio. No awkward payment conversations — the system handles reminders impersonally and professionally. He grows to 25 students because he has the administrative headroom. He uses lesson notes to track what he covered, which helps him give more consistent lessons.

**Requirements Revealed:** Outstanding balance recording, manual payment entry, configurable payment enforcement, lesson note history search.

---

### Journey 3: Linda — The Small Studio Owner (High-Value Account, Migration Path)

Linda runs a four-teacher violin school with 75 students and $180K/year revenue. She pays $145/month for Jackrabbit Music, which her teachers use reluctantly on desktop. Parents call for basic schedule questions.

**Opening Scene:** Linda reads a Colourful Keys blog post comparing TuneStudio to Jackrabbit. The post specifically notes: "Jackrabbit has no real mobile experience; TuneStudio's teacher app is the whole product." Linda shows it to her lead teacher, who immediately says, "This looks way better on my phone."

**Rising Action:** Linda signs up for the studio tier trial. She creates accounts for two of her teachers. Each teacher can see only their own students' schedules. Linda retains admin access to billing and the studio-wide view. She exports her student list from Jackrabbit and imports it. She runs TuneStudio in parallel for one billing cycle to verify payment accuracy.

**Climax:** Linda realizes that payment reconciliation — previously a 3-hour monthly task comparing Jackrabbit reports against bank statements — is now instant. Every payment is in the system, timestamped, traceable.

**Resolution:** Linda buys the $149 studio LTD. She cancels Jackrabbit. She mentions TuneStudio at the next local music teachers' association meeting. Three solo teachers sign up within a week.

**Requirements Revealed:** Multi-teacher scheduling (teacher-scoped views), studio admin dashboard, student data import, billing reconciliation reports, parallel-run support.

---

### Journey 4: Parent Portal User — Jordan, Parent of a Student (End Recipient)

Jordan's daughter takes piano lessons with Sarah. Jordan is busy, often forgets what day the lesson is, and texts Sarah at least twice a month with basic schedule questions.

**Opening Scene:** Jordan receives an email invitation: "Sarah has invited you to view Emma's lesson studio profile." Jordan clicks the link on her phone during lunch.

**Rising Action:** The parent portal opens in her mobile browser (PWA, no app install required). She sees Emma's next lesson: Thursday, 4:30 PM. She sees the last lesson note: "Working on Für Elise, measure 8 onward — practice slowly with metronome at 60bpm for 10 minutes each day." She sees the payment status: paid through May.

**Climax:** Jordan bookmarks the portal. She stops texting Sarah. When Emma needs to cancel a lesson, Jordan submits a cancellation request through the portal. Sarah gets a notification and confirms. A makeup credit appears automatically.

**Resolution:** Jordan feels informed and professional about Emma's music education. Sarah gets zero schedule-related texts from Jordan. The teacher-parent relationship improves because administrative friction has been removed.

**Requirements Revealed:** Mobile-first parent portal (PWA), lesson note visibility, payment status, cancellation request flow, makeup credit visibility.

---

### Journey Requirements Summary

Capabilities required across all journeys:

| Journey | Capabilities Required |
|---------|----------------------|
| Sarah (solo teacher setup) | Student import, schedule management, Stripe Connect, parent portal invitations, payment reminders, mobile note logging |
| Marcus (payment recovery) | Manual payment entry, outstanding balance tracking, payment enforcement configuration, note history |
| Linda (studio migration) | Multi-teacher management, admin vs. teacher role scoping, bulk import, reconciliation reporting |
| Jordan (parent) | PWA parent portal, lesson note display, payment status, cancellation/makeup request |

---

## Domain-Specific Requirements

The music teacher studio management domain is low-to-medium complexity with no unusual regulatory burden. Relevant domain-specific constraints:

### Payment & Financial Compliance

- **PCI-DSS**: All payment card data handled exclusively by Stripe; TuneStudio stores no raw card data. Compliance is inherited through Stripe Connect's PCI-compliant infrastructure.
- **Stripe Connect platform requirements**: TuneStudio operates as a platform (not a marketplace); teachers connect their own Stripe accounts and receive funds directly. Platform fee is a subscription fee only — no per-transaction split required from the platform perspective.
- **1099-K reporting**: TuneStudio does not process money on behalf of teachers; each teacher's own Stripe account handles their 1099-K reporting independently. No platform tax reporting obligation.

### Privacy & Data

- **FERPA**: Not directly applicable (FERPA governs educational institutions, not private teachers). However, lesson notes and student progress data are sensitive; teacher data governance practices should be documented and disclosed.
- **COPPA**: Students may be minors; TuneStudio collects data about minors through the parent portal. Parent/guardian must be the account holder for any student under 13. Collection must follow COPPA-compliant consent practices.
- **GDPR**: Applicable for any EU users in future international expansion. MVP scope is US-only; GDPR compliance deferred to international expansion phase.
- **Data residency**: US-only for MVP; no cross-border data residency constraints at launch.

### Music Education Domain Patterns

- **Semester billing cycle**: US private music education operates on fall (Sept–Dec), spring (Jan–May), and summer (June–Aug) semesters. Monthly billing is used by some teachers but semester billing is the dominant pattern for established studios. Both must be supported.
- **Makeup lesson policy variability**: Policies vary significantly by teacher: some allow unlimited makeups, others allow none, others allow one makeup per semester. The system must be policy-configurable, not prescriptive.
- **Rate variability**: Teachers charge by lesson (flat per-lesson fee), by semester (lump sum), or by month (fixed monthly regardless of lesson count). All three billing models must be supported in MVP.
- **Studio vs. home teacher distinction**: Home-based teachers (majority) have no physical check-in workflow. Small studios may need room/space scheduling in future versions, but this is out of scope for MVP.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

TuneStudio is not a breakthrough technology product — it is a superior execution of existing B2B SaaS patterns applied to an underserved vertical. The genuine innovations are channel and pricing:

**Channel Innovation — First AppSumo Launch in Category:**
No studio management tool has ever listed on AppSumo. The category is completely unoccupied on the highest-traffic LTD platform. Being first creates:
- A permanent share-of-mind advantage in LTD-focused communities
- A defensible referral flywheel in teacher Facebook groups (LTD buyers are vocal advocates)
- Social proof that compounds: "I paid $79 once and My Music Staff charges $17/month forever" is a spreadable message

**Product Innovation — Mobile-Native as the Core Differentiator:**
Every existing competitor built a desktop web app and later added a mobile-responsive version or (in most cases) nothing. TuneStudio inverts this: the mobile app is the primary product, and the desktop web app is the secondary surface. This is not unprecedented in SaaS broadly, but it is genuinely novel in this vertical.

**Workflow Innovation — Semester Billing + Makeup Tracking as First-Class Citizens:**
The two workflows most specific to music education — semester enrollment billing and makeup lesson credit tracking — are afterthoughts in every existing tool. Making them first-class citizens (not workarounds or add-ons) represents a genuine UX innovation for this domain.

### Market Context

- My Music Staff: dominant player, no mobile app, 755 Capterra reviews at 4.8/5 — the documentation of unmet need is public and extensive
- Fons: highest-rated (4.9/5), explicitly criticized for per-transaction markup
- Jackrabbit: enterprise-priced, adapted from dance studio software, poor private lesson UX
- AppSumo category "music teacher": zero results as of May 2026

### Validation Approach

- Channel innovation validated by: AppSumo category search (zero results), community observation (Facebook group posts about tool alternatives show no LTD mentions)
- Mobile differentiation validated by: Capterra review analysis (missing mobile app is #1 complaint in My Music Staff reviews by frequency)
- Pricing model validated by: comparable AppSumo launches in adjacent EdTech niches (Teachable alternatives, tutoring tools) averaging 400–800 LTD buyers at $49–$99

### Risk Mitigation

- My Music Staff launches a mobile app: Mitigate by winning community mindshare and review velocity before they can ship (timeline for a company their size is 12–18 months minimum given their track record)
- AppSumo underperforms (<200 buyers): Mitigate with pre-launch beta of 50+ active teachers, 25+ Capterra reviews, and two blogger endorsements in place before submission

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that the cobbled-stack can be replaced and that teachers will pay to replace it.

**Success-gating question:** Can a teacher with 20 students fully replace Google Calendar + Venmo + text messages with TuneStudio within one billing cycle?

**Resource Requirements:** 2 engineers (full-stack + mobile focus), 1 designer (mobile-first), 1 PM/founder. 3–4 month build to beta quality.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo teacher onboards and configures studio in <15 minutes
- Teacher collects first payment through automated Stripe flow
- Parent activates portal and views lesson schedule and notes without contacting teacher
- Makeup lesson credit is created automatically when student cancels

**Must-Have Capabilities:**

| # | Capability | Rationale |
|---|-----------|-----------|
| 1 | Native iOS + Android app (React Native) | Core differentiator; without this, TuneStudio is just another web app |
| 2 | Student profile management | Foundation for all other features |
| 3 | Recurring lesson scheduling | Replaces Google Calendar |
| 4 | Stripe Connect payment collection | Replaces Venmo; no platform markup |
| 5 | Automated payment reminders (pre/on/overdue) | Eliminates manual payment chasing |
| 6 | Manual payment recording | Cash/check payment support |
| 7 | Parent portal (PWA, invitation-based) | Replaces text messages; "the app" parents want |
| 8 | Lesson notes + practice assignments (mobile) | Replaces paper notebooks; syncs to parent portal |
| 9 | Makeup lesson credit tracking | Auto-creation on cancellation; policy-configurable |
| 10 | Semester-based billing | Auto-invoicing for fall/spring semesters |
| 11 | Basic financial reporting | Monthly revenue, outstanding balances |

### Post-MVP Features

**Phase 2 (Month 8–12, post-PMF validation):**
- Multi-teacher studio support (teacher-scoped scheduling views, studio admin dashboard)
- Studio payroll and revenue splitting
- Google Calendar two-way sync and iCal export
- In-app messaging threads (teacher ↔ parent)
- Method book and curriculum tracking with standard library import

**Phase 3 (Month 12–24, expansion):**
- Recital management module
- Student self-scheduling (teacher-controlled opt-in)
- AI practice feedback (audio recording + analysis)
- Lesson plan template marketplace
- UK/Australia localization and launch

### Risk Mitigation Strategy

**Technical Risks:**
- React Native bridge performance for calendar rendering: Mitigate with lightweight third-party calendar library (react-native-calendars); benchmark during Sprint 1
- Stripe Connect onboarding drop-off: Mitigate with step-by-step in-app guide; offer chat support during beta

**Market Risks:**
- Teachers unwilling to pay after using Google Calendar for free: Mitigate by leading with payment automation ROI ("TuneStudio collects $500+/month in fees you're currently chasing manually") — time-saves and revenue-saves are both concrete
- AppSumo underperforms: Mitigate with pre-launch review velocity (target 25+ Capterra reviews before AppSumo submission) and 2 blogger endorsements confirmed

**Resource Risks:**
- 3-person team is tight for React Native + web: Mitigate by using shared component library between web and mobile (React Native Web for shared UI components); avoid maintaining two separate design systems

---

## Functional Requirements

### Student Management

- FR1: Teachers can create and edit student profiles with name, contact info, instrument, lesson rate, and lesson duration
- FR2: Teachers can import students in bulk from a CSV file
- FR3: Teachers can archive students who are no longer active without deleting their history
- FR4: Teachers can search and filter their student list by name, instrument, or payment status
- FR5: Teachers can view a complete history of lessons, notes, and payments for any student

### Scheduling

- FR6: Teachers can define recurring lesson slots (day of week, time, duration, recurrence pattern)
- FR7: The system detects and prevents scheduling conflicts before saving a lesson
- FR8: Teachers can view their schedule in day, week, and month calendar views
- FR9: Teachers can mark a lesson as completed, cancelled (by student), or cancelled (by teacher)
- FR10: Teachers can reschedule individual lesson instances without affecting the recurring series

### Payment Collection

- FR11: Teachers can connect their own Stripe account via Stripe Connect onboarding
- FR12: Teachers can configure per-student billing (per-lesson, monthly, semester)
- FR13: The system generates and sends automated payment reminders at configurable intervals (X days before due, on due date, X days overdue)
- FR14: Teachers can record manual payments (cash, check, external transfer) against any student balance
- FR15: Parents can view and pay outstanding balances through the parent portal using a Stripe-hosted payment link
- FR16: Teachers can view payment history per student and per month/semester with expected vs. collected breakdown

### Makeup Lesson Tracking

- FR17: When a student-cancelled lesson is recorded, a makeup credit is automatically created for that student
- FR18: Teachers can configure their makeup policy: credit expiry window (days), maximum credits per student
- FR19: Teachers can schedule a makeup lesson for a student with an active credit through the standard scheduling flow
- FR20: Makeup credit balance is visible to teachers and parents in the portal
- FR21: Expired makeup credits are flagged to teachers

### Parent Portal

- FR22: Teachers can invite parents via email; parents access the portal through a secure link without creating a separate account
- FR23: Parents can view upcoming lessons, lesson notes from the last 5 lessons, payment status, and makeup credit balance
- FR24: Parents can submit cancellation requests through the portal; teachers receive a notification and confirm or decline
- FR25: Parents can view practice assignments associated with each lesson
- FR26: The parent portal is accessible on mobile without installing a native app (PWA)

### Lesson Notes & Practice Assignments

- FR27: Teachers can create a lesson note from their mobile app immediately after a lesson
- FR28: Lesson notes can include: repertoire worked on, technique focus, practice assignment, teacher observation
- FR29: Notes are visible to parents in the portal within 60 seconds of being saved
- FR30: Teachers can search their own lesson notes by keyword, student name, or date range

### Semester-Based Billing

- FR31: Teachers can define semester periods (name, start date, end date)
- FR32: Teachers can enroll students in a semester with an automatically generated invoice
- FR33: The system calculates pro-rated invoice amounts for mid-semester enrollment start dates
- FR34: Teachers can generate a semester summary report showing expected vs. collected revenue per semester

### Reporting & Dashboard

- FR35: Teachers see a home dashboard with: today's lessons, outstanding payments, and any makeup credits expiring soon
- FR36: Teachers can generate a monthly revenue report (expected, collected, outstanding) exportable as CSV
- FR37: Teachers can see lesson completion rate by student for the current and previous month
- FR38: Teachers can see which students have not had a parent portal login in the last 30 days

### Multi-Teacher Studio (Phase 2 — Not MVP)

- FR39: Studio owners can create accounts for additional teachers on their plan
- FR40: Non-owner teachers can view and manage only their own students' schedules and notes
- FR41: Studio owners can see a consolidated view of all teachers' schedules and revenue

### Notifications & Communications

- FR42: Teachers receive push notifications for parent cancellation requests, lesson reminders, and overdue payments
- FR43: Parents receive email notifications for upcoming lessons (configurable reminder timing), new lesson notes, and payment due reminders
- FR44: Teachers can configure which notification types they receive and at what frequency

---

## Non-Functional Requirements

### Performance

- Teacher-facing mobile app: primary screen loads (dashboard, schedule, student list) complete within 2 seconds on a standard 4G connection
- Lesson note saved on teacher's phone appears in parent portal within 60 seconds
- Payment reminder emails are delivered within 5 minutes of the scheduled trigger time
- Calendar view renders up to 52 weeks of recurring lessons without perceptible lag on mid-range Android devices (target: Pixel 5a equivalent)

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- No raw payment card data stored; all card handling delegated to Stripe Connect
- Parent portal access uses invitation tokens with configurable expiry (default: 14-day first-access token; persistent session after first login)
- Teacher accounts protected by email/password authentication with email verification; optional 2FA (TOTP) available
- Student and parent data access is scoped to the owning teacher's account; no cross-teacher data access possible
- COPPA compliance: parent/guardian must be the portal account holder for any student under 13; age gate on student profile creation prompts teacher to confirm

### Scalability

- MVP target: support up to 2,000 concurrent teacher accounts without architecture changes
- Stripe webhooks processed with at-least-once delivery and idempotency keys to prevent double-payment recording
- Calendar sync and reminder scheduling must support a teacher roster of up to 100 students without degraded performance

### Accessibility

- Parent portal (PWA) meets WCAG 2.1 AA for core flows: viewing upcoming lessons, viewing lesson notes, and viewing payment status
- Teacher mobile app follows platform accessibility guidelines (iOS VoiceOver, Android TalkBack) for primary navigation and lesson logging flows
- Email notifications are plain-text compatible for assistive technology

### Integration

- Stripe Connect: primary payment infrastructure; teacher-side onboarding, payment intents, webhooks for payment status
- Email delivery: transactional email via a reliable provider (SendGrid or Postmark); deliverability is critical for payment reminders and parent portal invitations
- Push notifications: Firebase Cloud Messaging for Android; APNs for iOS
- CSV import/export: student list import accepts standard CSV format compatible with Google Contacts and Excel; reports export to CSV
- Calendar export: iCal (.ics) export for teacher schedule (read-only, Phase 1.5)