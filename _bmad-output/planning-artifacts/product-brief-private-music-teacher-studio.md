---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ['ideas/shortlisted/private-music-teacher-studio-management.md']
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-09'
author: 'Root'
---

# Product Brief: Private Music Teacher Studio Management

<!-- Generated autonomously from shortlisted idea + market research, 2026-05-09 -->

---

## Executive Summary

Private music teachers — over 100,000–200,000 active independent instructors in the US — run thriving small businesses with a persistent, painful flaw: their administrative stack is a cobbled mess of Google Calendar, Venmo, and text messages. The software tools that exist (My Music Staff, Fons, Jackrabbit) each solve part of the problem but leave the most frustrating gaps: no native mobile app, clunky payment automation, no semester-based billing, and no parent portal that teachers can actually be proud of.

**TuneStudio** (working name) is an all-in-one studio management platform purpose-built for independent music teachers and small music studios. It replaces the four-tool cobbled stack with a single, mobile-native product that handles scheduling, payment collection, parent communication, practice logs, and the music-specific workflows (semester billing, makeup lesson tracking, recital management) that generic tools have never properly addressed.

The business model leads with a Lifetime Deal ($79 solo / $149 small studio) on AppSumo — a channel with zero competing products — to acquire 500–1,000 initial users rapidly and generate community word-of-mouth in the tight-knit music teacher Facebook groups and MTNA network. Monthly subscriptions ($19/month solo, $49/month studio) follow for post-launch cohorts, targeting $10K MRR within 12 months.

The market is validated (87/105 idea score), the competitor weakness is concrete and documented (#1 complaint about the market leader is the missing mobile app, in 755 Capterra reviews), and the distribution channel is both accessible and completely unoccupied by any competitor.

---

## Core Vision

### Problem Statement

Private music teachers run businesses that are simultaneously personal and professional — they teach from home studios, bill families monthly or by semester, track which students still owe for the recital, and text parents at 9pm to confirm tomorrow's makeup lesson. Yet no single tool handles this workflow end-to-end.

The universal cobbled stack:
- **Google Calendar** — scheduling (no payment integration, no parent reminders)
- **Venmo or PayPal** — payment collection (no invoicing, no auto-pay enforcement, no overdue tracking)
- **Text messages / email** — parent communication (manual, inconsistent, non-searchable)
- **Paper or Excel** — practice notes, progress tracking, makeup lesson credits
- **Nothing** — semester billing, recital management, method book tracking

The result: teachers spend 5–10 hours per month on administrative tasks that should take 30 minutes. Chasing late payments is described by teachers as "humiliating" and "the part of teaching I dread most." Scheduling errors and missed makeup lesson credits cause real financial loss and parent friction.

### Problem Impact

- **Time cost:** 5–10 hours/month of administrative overhead per teacher × 100,000+ active teachers = 500M–1B hours/year lost to administrative cobbling
- **Revenue leakage:** Missed makeup lesson credits, forgotten invoices, and inconsistent payment enforcement cost teachers an estimated $500–2,000/year in forgone revenue
- **Relationship cost:** Awkward payment conversations damage the teacher-parent relationship that is the foundation of student retention
- **Scaling cliff:** Teachers with 20+ students hit an administration wall; this is the point at which many choose to cap their roster rather than grow, directly limiting income
- **Software switching barrier:** Once teachers adopt any tool, high switching costs (student data, billing history) create lock-in; the goal is to win the switchers *before* they commit to My Music Staff

### Why Existing Solutions Fall Short

| Tool | Price | Critical Weakness |
|------|-------|------------------|
| **My Music Staff** (market leader, ~35–40% share) | $16.95/mo | No native mobile app — #1 complaint in 755 Capterra reviews at 4.8/5 |
| **Fons** (highest-rated, 4.9/5) | $29.95/mo + 2.9% transaction fee | Per-transaction markup on top of subscription explicitly called out as deceptive |
| **Jackrabbit Music** | $49–245/mo | Adapted from dance studio software; private lesson UX is poor; too expensive for solo teachers |
| **Teachworks** | $15/mo + add-ons | Generic tutoring tool; not music-specific; acquired by PE firm Jonas Software in 2024 (teachers fear price hikes) |
| **Duet (formerly MTH)** | $15–25/mo | SMS-first approach without full native app; limited features; stagnating product |
| **Google Calendar + Venmo** | Free | No payment integration, no parent portal, no lesson-specific workflows |

The fundamental gap: the market leader has no mobile app, the highest-rated tool charges hidden transaction fees, and every tool requires workarounds for the most music-specific workflows (semester billing, makeup tracking, recital management). No tool has attempted a Lifetime Deal model in this space — AppSumo is completely unoccupied.

### Proposed Solution

TuneStudio is a mobile-native, music-teacher-first studio management platform. It handles the complete administrative workflow — scheduling, payment, parent communication, practice logs, and music-specific billing — in a single product with a native iOS and Android app.

**Core workflow:**

1. Teacher sets up their studio (students, rates, lesson schedule) — 15-minute onboarding
2. Students/parents get a parent portal login to view schedule, upcoming lessons, lesson notes, and payment status
3. Payments are collected automatically (Stripe Connect, teacher keeps their own rate — no platform markup)
4. Scheduling changes, makeups, and cancellations flow through the app with automated notifications
5. Teachers log lesson notes and practice assignments directly from their phone; parents see updates in real time
6. Semester billing generates invoices automatically based on the teacher's semester calendar
7. Makeup lesson credits are tracked automatically when lessons are cancelled per policy

**Go-to-market:** AppSumo Lifetime Deal launch ($79 solo / $149 small studio) → community seeding in Facebook groups and MTNA → blogger outreach (Colourful Keys, TeachPianoToday, TopMusic.co) → organic word-of-mouth flywheel in tight-knit community.

### Key Differentiators

1. **Native mobile app (iOS + Android)** — The single most-requested missing feature from the market leader; enables teachers to manage their studio from anywhere and parents to check schedules/notes without logging into a desktop browser.

2. **No per-transaction markup** — Stripe Connect at the teacher's own rate; no platform fee on top of the subscription. Directly attacks Fons' most-complained-about pricing practice.

3. **Semester-based billing** — Music education operates on fall/spring semesters, not calendar months. TuneStudio handles semester enrollment, pro-rated mid-semester joins, and automatic invoice generation — a workflow no existing tool handles natively.

4. **Makeup lesson tracking** — When a student cancels, a makeup credit is created automatically. Teachers set their own makeup window policy. Makeup scheduling flows through the same calendar as regular lessons.

5. **First Lifetime Deal in the category** — AppSumo niche is completely unoccupied; $79 LTD vs. $16.95/month (5-month payback vs. My Music Staff) is a compelling value proposition for the highly price-sensitive, LTD-receptive music teacher market.

6. **Music-first UX** — Lesson notes designed for music teaching (not generic tutoring): repertoire in progress, technique focus, practice assignments with specific exercises, method book page. Parents see a practice log, not a generic notes field.

---

## Target Users

### Primary Users

**Persona 1 — Sarah, The Established Solo Teacher (Core Buyer)**

- **Profile:** Piano teacher, age 38. Teaches 32 students from her home studio on Tuesdays, Thursdays, and Saturdays. Has been teaching for 12 years. Charges $80/lesson. Annual teaching income ~$48,000. Married with two kids.
- **Current Stack:** Google Calendar for scheduling, Venmo requests for payment, text messages to parents. Spreadsheet tracking who owes makeup lessons. Paper lesson notebooks.
- **Pain:** Spends ~8 hours/month on administrative tasks. Chasing overdue payments is her least favorite part of the job. Last month, three families didn't pay the semester fee on time; she had to send awkward reminders. She lost track of two makeup lesson credits and a parent complained.
- **Trigger for Software Adoption:** A parent in her studio asked if there was "an app" to see the lesson schedule. Another teacher in her Facebook group posted about My Music Staff but the reviews mentioned no mobile app and she uses her iPhone for everything.
- **What TuneStudio Gives Sarah:** One place for everything. Parents log into the portal and see the schedule, the lesson notes, the practice assignment, and whether payment is current — without Sarah having to send a single text. Semester invoices go out automatically. Makeup credits track themselves.
- **Willingness to Pay:** $79 LTD (immediate) or $19/month (if LTD unavailable). Highly LTD-receptive.
- **Discovery Path:** Facebook group recommendation → Capterra review scan → free trial → purchase.

---

**Persona 2 — Marcus, The Growing Teacher (Upgrade Buyer)**

- **Profile:** Guitar and bass teacher, age 29. Teaches 18 students at a rented studio space. Part-time teaching income (~$25,000); also does session work. Plans to grow to 30+ students.
- **Current Stack:** Calendly for booking (students self-schedule, but no payment enforcement), Venmo for payment, WhatsApp group for studio updates.
- **Pain:** Payment collection is chaotic — Calendly doesn't connect to payment. Some students haven't paid in six weeks. He doesn't know how to send a professional invoice without it feeling weird. He also doesn't have a way to track what he taught last lesson without scrolling through old WhatsApp messages.
- **What TuneStudio Gives Marcus:** Professional payment collection from day one (require payment to book), lesson notes in a searchable log, automated reminders to parents when payment is due.
- **Willingness to Pay:** $59 early-adopter LTD or $15/month. Price-sensitive but motivated by professionalism.
- **Discovery Path:** Reddit (r/guitar, r/musicteachers) → Google search → free trial.

---

**Persona 3 — Linda, The Small Studio Owner (High-Value Account)**

- **Profile:** Violin teacher, age 51. Runs a small music school with herself and three other teachers. 75 students total. Studio revenue ~$180,000/year. Uses Jackrabbit Music, which she selected five years ago when she had 20 students. Now it feels too expensive for what she gets, the UX is dated, and her teachers complain about the mobile experience.
- **Current Stack:** Jackrabbit Music ($145/month). Three teachers have to use desktop browser to access schedules. Parent portal is functional but clunky; parents often call to ask basic questions that should be answered in the app.
- **Pain:** $145/month for software that four people use reluctantly. Wants something with a better teacher experience and a parent portal parents will actually use.
- **What TuneStudio Gives Linda:** Modern multi-teacher scheduling (each teacher sees their own students only), parent portal with lesson notes and practice logs, automated payment collection, and a mobile app her teachers can actually use between lessons.
- **Willingness to Pay:** $149 LTD (studio tier) or $49/month subscription. Evaluates on features, not primarily price. Wants a migration path from Jackrabbit.
- **Discovery Path:** Blog review (Colourful Keys or TopMusic.co) → Capterra comparison → demo request or free trial.

### Secondary Users

**Parents of Students (End Recipients of Teacher-Facing Features)**

Parents are not direct buyers but are the recipients of the parent portal experience. Teacher adoption depends significantly on whether the parent portal is polished enough that teachers feel comfortable pointing parents to it.

- **What parents want:** Clear view of their child's lesson schedule, ability to request cancellations/makeups without texting the teacher, visibility into what their child is working on (practice assignments, progress notes), and a clean payment history.
- **Success signal:** Teachers report fewer "what time is the lesson?" texts from parents. Parents self-serve through the portal.
- **Design implication:** The parent portal must work excellently on mobile; parents will check it on their phones between carpool and dinner.

**Studio Teachers (Non-Owner Teachers at Multi-Teacher Studios)**

For the small studio tier, non-owner teachers are secondary users of the scheduling and lesson notes system. They do not manage billing or studio settings.

- **What they want:** Simple mobile access to their schedule, ability to add lesson notes from phone, visibility into student contact info.
- **Design implication:** Teacher mobile app must have a simplified view for non-owner teachers — schedule + notes only.

### User Journey

**Solo Teacher (Sarah) — Core Journey:**

1. **Discovery:** Sees TuneStudio mentioned in a Facebook group ("just switched and never looking back") → checks AppSumo listing or website
2. **Evaluation:** Reads Capterra/G2 reviews; sees 4.9 average; checks that it has a mobile app (confirms before trial)
3. **Trial (Day 1–3):** Imports student list (CSV or manual entry); sets lesson schedule for existing students; sends parent portal invites to 5 trial students
4. **Aha! Moment (Day 3–7):** First parent logs into portal and can see the next lesson time without texting Sarah. Sarah logs a lesson note on her phone before her next student arrives.
5. **Commitment (Week 2):** Sets up Stripe payment collection; first automated payment reminder goes out; two parents pay without being asked directly.
6. **LTD Purchase:** Buys LTD because she's now using it daily and the one-time payment feels like a no-brainer vs. recurring monthly fee.
7. **Advocacy (Month 2–3):** Posts in Facebook group recommending TuneStudio; tags the friend who originally mentioned it. Writes a Capterra review.

**Small Studio Owner (Linda) — Core Journey:**

1. **Discovery:** Reads a blog review on Colourful Keys comparing TuneStudio to Jackrabbit; specifically mentions the mobile app gap being solved.
2. **Evaluation:** Shows blog post to one of her teachers; teacher immediately says "this looks way better than Jackrabbit on my phone."
3. **Trial:** Signs up for studio tier trial; invites two of her three teachers to test the scheduling and notes workflow.
4. **Aha! Moment:** Realizes that payment collection is now automated and she doesn't need to manually reconcile Jackrabbit's payment reports against her bank account.
5. **Migration Decision:** Exports student data from Jackrabbit; imports to TuneStudio; runs parallel for one billing cycle.
6. **Subscription or LTD:** Chooses $149 LTD to eliminate the $145/month Jackrabbit cost immediately.
7. **Advocacy:** Mentions TuneStudio at the local music teachers' association meeting; three solo teacher peers sign up within a week.

---

## Success Metrics

### User Success Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **Time to first lesson logged** | How quickly a new user logs their first lesson note | <10 minutes from sign-up |
| **Parent portal activation rate** | % of imported students whose parents activate the parent portal within 14 days | >60% at 30 days post-signup |
| **Payment collection activation** | % of active teachers who connect Stripe and collect at least one payment | >70% within 30 days |
| **Weekly active usage** | % of active teachers who log in at least once per week | >75% of paying users |
| **Payment chase reduction** | Self-reported: teachers who say they no longer manually chase payments | >80% at 90-day survey |
| **Mobile app adoption** | % of active users who use the mobile app at least weekly | >65% (this is the core differentiator) |

**User Success Definition:** A teacher who logs lesson notes after every lesson, collects payments without a single manual chase message, and can answer "yes" when a parent asks if there's an app — that is a successful TuneStudio user.

### Business Objectives

**Year 1 Objectives:**

1. **AppSumo Launch Success** — 500+ LTD buyers at average $89 = $44,500+ in launch revenue to fund infrastructure and initial support operations
2. **Community Presence** — TuneStudio mentioned organically in at least 10 major teacher Facebook group threads without solicitation by Month 6
3. **Review Velocity** — 50+ Capterra/G2 reviews by Month 6; 150+ by Month 12; maintain ≥4.8/5 average
4. **MRR Growth** — $5K MRR by Month 6; $10K MRR by Month 12 from subscription cohort (post-LTD)
5. **Churn** — Monthly revenue churn <3% for subscription cohort (high stickiness expected once data is in the system)
6. **MTNA Partnership** — Secured MTNA partner program status by Month 9 with discount offer for members

**3-Year Vision (Strategic):**
- 5,000+ paying users (5% penetration of software-ready market)
- $50K+ MRR from subscription cohort
- Recognized as the category leader in community discussions
- Strategic optionality: acquisition target for music education companies (Fender Digital, MakeMusic, Hal Leonard) or PE education roll-ups

### Key Performance Indicators

**Acquisition KPIs:**

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|----------|
| Total paying users | 300 | 600 | 1,200 |
| Monthly new sign-ups | 80 | 120 | 150 |
| AppSumo LTD buyers | 500 (launch) | — | — |
| Subscription MRR | $1,500 | $5,000 | $10,000 |

**Engagement KPIs:**

| KPI | Target |
|-----|--------|
| DAU/MAU ratio | >35% (high for B2B SaaS; music teaching is daily activity) |
| Lesson notes logged per active teacher/month | >8 (proxy for teaching activity) |
| Parent portal logins per student/month | >2 (indicates parents are actually using it) |
| Mobile app session rate | >65% of total sessions |

**Retention KPIs:**

| KPI | Target |
|-----|--------|
| 30-day retention | >85% |
| 90-day retention | >75% |
| 12-month retention (subscription) | >80% |
| Net Promoter Score | >60 (community-driven product needs strong referral engine) |

**Financial KPIs:**

| KPI | Target |
|-----|--------|
| AppSumo launch revenue | $44,500+ (500 buyers × $89 avg) |
| Average Revenue Per User (subscription) | $22/month blended (solo + studio mix) |
| Customer Acquisition Cost | <$30 (community-driven; organic CAC target) |
| Payback period (subscription) | <2 months (CAC/ARPU) |
| LTV/CAC ratio | >10x (high retention + low CAC = strong unit economics) |

---

## MVP Scope

### Core Features

The MVP must solve the core cobbled-stack problem completely for a solo teacher with 15–50 students. Features are ordered by build priority based on documented evidence of unmet need.

**Priority 1 — Mobile App (iOS + Android)**
- Full-featured mobile app for teachers (not a mobile-responsive web app — a native or React Native app)
- Parent portal as a mobile-first web app (no separate app required for parents; responsive PWA is sufficient for MVP)
- Core teacher actions available on mobile: view schedule, log lesson note, mark payment received, send message to parent

**Priority 2 — Student & Schedule Management**
- Student profiles: name, contact info, instrument, lesson duration, rate, schedule
- Recurring lesson scheduling with conflict detection
- Lesson status tracking (scheduled, completed, cancelled, makeup scheduled)
- Calendar view (day, week, month) synced with lessons

**Priority 3 — Payment Collection (No Platform Markup)**
- Stripe Connect integration — teacher connects their own Stripe account; TuneStudio charges zero transaction fee on top of Stripe's standard rates
- Automated payment reminders (configurable: X days before lesson, on due date, X days overdue)
- Payment history per student and per teacher (monthly/semester summary)
- Manual payment recording (for cash, check, or Venmo paid outside the system)

**Priority 4 — Makeup Lesson Tracking**
- When a lesson is cancelled by student, a makeup credit is created automatically
- Teacher configures makeup policy (credits expire after X days, max credits per student)
- Makeup lessons are scheduled through the same calendar flow as regular lessons
- Makeup credit balance visible to teacher and in parent portal

**Priority 5 — Parent Portal**
- Parent receives email invitation with secure link (no account creation friction)
- Parent portal shows: upcoming lessons, lesson notes/practice assignments from last 3 lessons, payment status, makeup credit balance
- Parent can request a cancellation or makeup through the portal (teacher receives notification and confirms)
- Parent portal is mobile-first (PWA); usable without installing an app

**Priority 6 — Lesson Notes & Practice Assignments**
- Teacher logs lesson notes from mobile after each lesson
- Notes include: repertoire worked on, technique focus, practice assignment, teacher's observation
- Notes are visible to parents in the parent portal within minutes of being saved
- Notes are searchable by teacher (find "what we worked on in October")

**Priority 7 — Semester-Based Billing**
- Teacher defines semesters (fall: Sept–Dec, spring: Jan–May, summer: June–Aug)
- Students can be enrolled by semester with automatic invoice generation
- Pro-rated enrollment for mid-semester start
- Semester summary report: total expected revenue vs. collected

**Priority 8 — Basic Reporting**
- Monthly revenue summary (expected vs. collected)
- Outstanding balances report
- Lesson completion rate by student (for tracking student engagement)

### Out of Scope for MVP

The following features have been explicitly deferred to keep the MVP focused. All are validated future opportunities, not abandoned ideas.

| Feature | Why Deferred | When to Build |
|---------|-------------|---------------|
| **Recital management** (repertoire assignment, program order, seating) | High effort; affects <50% of teachers regularly; can be manual for now | v2, post-PMF |
| **Method book / curriculum tracking** | Nice UX win; not blocking any core workflow | v2 |
| **AI-powered practice notes / audio analysis** | Requires audio infrastructure; Tonara proves market appetite; build after mobile app moat established | v3+ |
| **Multi-teacher payroll / revenue sharing** | Needed for studio tier; complex; studio tier is <10% of initial market | v1.5, Month 8+ |
| **Group class management** | Different scheduling model; adds significant complexity | v2 |
| **In-app messaging thread** | Text messages work; not blocking adoption; adds complexity | v2 |
| **Integration with Google Calendar / iCal** | Read-only sync is useful but not essential; two-way sync is complex | v1.5 |
| **Student self-scheduling** | Adds workflow complexity; many teachers prefer to control scheduling | Post-PMF based on user feedback |

### MVP Success Criteria

The MVP is considered validated when:

1. **Usage:** 100+ teachers actively using the product weekly (not just signed up)
2. **Retention:** 75%+ of Month 1 users still active in Month 3
3. **Payment adoption:** 65%+ of active teachers have connected Stripe and collected at least one payment through TuneStudio
4. **Mobile usage:** 60%+ of sessions occur on mobile (validates the core differentiator)
5. **Parent portal:** 50%+ of students have at least one parent who has viewed the portal
6. **NPS:** Net Promoter Score >50 in first user survey (Month 6)
7. **Revenue:** $5K MRR or $44K AppSumo launch revenue achieved

**Go/No-Go Decision Gate:** If at Month 6 fewer than 100 teachers are actively using the product weekly, or retention falls below 60%, pause growth investment and diagnose the retention problem before continuing marketing spend.

### Future Vision

**18-Month Horizon — Category Leadership**

- Native iOS and Android apps with full offline support (log lessons on a plane)
- Multi-teacher studio tier with payroll and revenue splitting
- Recital management module: repertoire assignment, program PDF generation, seat map
- Method book and curriculum library: teachers browse a library of standard piano/guitar/violin curricula and assign specific pages/exercises to students
- Google Calendar two-way sync and iCal export
- MTNA partnership with member pricing ($59/year discount)
- AppSumo launch → Capterra category leader page → inbound SEO ("best music teacher scheduling software")

**3-Year Horizon — Platform & Ecosystem**

- Practice AI: optional audio recording in parent portal; AI provides basic feedback ("good bow technique, watch intonation at measure 8"); human teacher reviews and approves before parent sees
- Marketplace: music teachers can purchase lesson plan templates, student practice challenges, and recital repertoire recommendations
- School district integrations: private teachers who teach students enrolled in public school music programs can share progress notes with band/orchestra directors
- International expansion: UK and Australia have similar independent music teacher markets with similar tool fragmentation
- Potential acquisition targets or partners: Fender Digital (Fender Play), MakeMusic (Finale, SmartMusic), Hal Leonard, or PE education roll-ups seeking SaaS assets

**Revenue Vision at 3 Years:**
- 5,000+ paying users (mixed LTD and subscription)
- $45K–60K MRR from subscription cohort
- Strategic optionality: profitable as standalone bootstrapped business or attractive acquisition target at 3–5x ARR

---

## Go-to-Market Summary

| Phase | Timeline | Focus | Key Actions |
|-------|----------|-------|-------------|
| **Validation** | Month 1–2 | Confirm problem depth and competitor gaps | Interview 15 teachers; hands-on test My Music Staff and Fons; post in Facebook groups |
| **Build** | Month 2–5 | MVP: mobile app + scheduling + Stripe + parent portal + makeup tracking | React Native app; Stripe Connect; parent portal PWA |
| **Beta** | Month 5–6 | 50–100 beta users from community; collect reviews | $49 early-adopter LTD; 25+ Capterra reviews before AppSumo submission |
| **AppSumo Launch** | Month 7 | Public launch; community seeding; blogger reviews | Target 500+ LTD buyers; line up Colourful Keys and TeachPianoToday reviews |
| **MRR Transition** | Month 8–12 | New signups on subscription; LTD as referral engine | $19/month solo; $49/month studio; MTNA partnership; conference presence |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| My Music Staff launches native mobile app | Medium | High | Move fast; win community mindshare first; by the time they ship, TuneStudio should have 500+ users and strong reviews |
| Teachers don't convert from free tools (Google Calendar) | Low-Medium | Medium | Lead with payment automation ROI: "TuneStudio collects $500/month in fees you're currently chasing manually" |
| Jackrabbit or Fons better than research suggests | Medium | Medium | Hands-on testing during validation phase; adjust positioning if needed |
| AppSumo launch underperforms (<200 buyers) | Low | High | Pre-launch beta with 50+ users and 25+ reviews; blogger endorsements in place; launch during MTNA conference cycle |
| Acquisition/PE pressure on competitors (Jonas roll-up) | Low | Medium | Speed; community moat; switching costs from student data; emphasize independence |
| Teacher income sensitivity causes churn on subscription | Medium | Medium | Strong LTD-first strategy converts most value-buyers upfront; subscription tier for new signups only |
