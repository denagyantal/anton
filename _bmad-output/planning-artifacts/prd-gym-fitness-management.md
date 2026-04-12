---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/gym-fitness-management.md
  - _bmad-output/planning-artifacts/research-gym-fitness-management.md
  - _bmad-output/planning-artifacts/brief-gym-fitness-management.md
workflowType: prd
project_name: gym-fitness-management
product_name: StudioSimple
date: 2026-04-12
author: Root
classification:
  projectType: saas_b2b
  domain: business_operations_fitness
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — StudioSimple

**Author:** Root
**Date:** 2026-04-12
**Product:** StudioSimple — Gym & Fitness Studio Management Platform

---

## Executive Summary

StudioSimple is a flat-rate SaaS gym management platform targeting independent gym and boutique fitness studio operators with under 300 members. It replaces Mindbody, Glofox, PushPress, and Wodify — software that has become bloated, commission-extracting, and adversarial toward small operators — with a single $79/month subscription covering member management, class scheduling, mobile member booking app, Stripe pass-through billing, and free Mindbody data migration.

The core problem: independent gym operators (57,000 in the US alone) are trapped between overpriced incumbents ($500–700+/month actual Mindbody cost) and manual operations (spreadsheets + Venmo). No existing platform combines flat transparent pricing under $100/month + native mobile member booking app + zero marketplace commissions + month-to-month terms + sub-2-hour setup. Gymdesk comes closest on price but has no mobile app. PushPress charges $97/month extra for the app. Mindbody takes 20% of new client revenue through its marketplace.

The market disruption window is acute: Mindbody's EGYM merger (announced early 2026) is driving mass migration anxiety. Glofox documented billing fraud post-cancellation has left thousands of studio owners actively angry and vocal. The go-to-market leverages CrossFit affiliate Facebook groups and r/gymowners as primary channels, followed by a first-mover AppSumo Lifetime Deal launch targeting the Mindbody exodus.

**Business model:** $79/month flat (all features, up to 300 members). LTD tiers at $69/$149/$249. Stripe pass-through at standard rates with zero markup.

**12-month target:** 200–500 MRR customers ($190K–$475K ARR) + AppSumo LTD launch ($75K–$298K one-time).

### What Makes This Special

Three compounding differentiators that no competitor currently combines:

1. **Flat all-in pricing with zero commissions** — $79/month includes the mobile app, all features, and no marketplace. Competitors either charge more for the app (PushPress +$97/month) or take a percentage of client revenue (Mindbody 20% marketplace commission). StudioSimple never takes a cut of gym revenue.

2. **Free Mindbody data migration** — The single biggest switching barrier is data hostage. Mindbody charges $499/location to export member data. StudioSimple provides guided member list import, class schedule import, and Stripe re-authorization workflow at no charge. This attacks the fear response directly before the trial.

3. **1-hour setup vs. 8-week Mindbody onboarding** — A step-by-step wizard designed for a gym owner coaching a 6 AM class. No sales calls, no implementation consultants, no 3-month lock-in while the system is "configured." First automated billing test can run the same day.

The insight driving this product: independent gym owners are not enterprise buyers. They are operator-coaches who need software that works like their gym — fast, reliable, and doesn't take a cut of every transaction.

## Project Classification

- **Project Type:** SaaS B2B — web application with iOS/Android companion apps
- **Domain:** Business operations / fitness management; medium complexity due to Stripe payment processing, mobile app delivery, and data migration tooling
- **Complexity:** Medium — payment processing compliance (PCI-DSS via Stripe), mobile app release cadence, multi-user access controls (owner vs. instructor vs. member), and structured data migration from competitor platforms
- **Project Context:** Greenfield — no existing codebase; building from scratch targeting launch within 4–6 weeks of development start

---

## Success Criteria

### User Success

**Primary success signal — gym owner:** The owner completes full setup (add members, create class schedule, connect Stripe) within 90 minutes of account creation and processes a successful test payment before the end of their first session. This validates the "1-hour setup" promise.

**Secondary success signal — gym owner:** The owner logs in at least 3× per week without prompting to check attendance, view revenue, or manage members. High-frequency passive use signals that StudioSimple has replaced existing manual workflows, not added to them.

**Member-facing success signal:** 70% of gym members at an active account book classes via the mobile app within 60 days of the studio going live on StudioSimple. App adoption is the single strongest predictor of gym owner retention — once members are in the app, switching becomes painful for both parties.

**Migration success signal:** A gym migrating from Mindbody completes the migration checklist (member import, class schedule, Stripe re-authorization) within 3 hours without contacting support. The emotional close on this segment is "I got my data out without paying $499 and nothing broke."

### Business Success

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Paying customers (MRR) | 200 | Month 12 |
| Paying customers (MRR) | 2,000 | Month 36 |
| Trial-to-paid conversion | ≥30% | Ongoing |
| Monthly churn | <3% | Ongoing |
| NPS | ≥55 | Day 60 survey |
| AppSumo LTD revenue | $100K–$250K | Month 4–6 launch |
| CAC (community channel) | <$150 | Ongoing |
| LTV:CAC ratio | >6:1 | Ongoing |

**12-month revenue target:** $190K–$475K ARR (MRR base) + $75K–$298K one-time LTD launch.

**36-month revenue target:** $1.9M–$4.7M ARR from 2,000–5,000 customers.

### Technical Success

- **Setup completion funnel:** ≥80% of trial accounts complete the 3-step setup wizard (members → schedule → Stripe) within 2 hours
- **Payment reliability:** <0.1% failed charges due to platform error (vs. member card declines, which are expected)
- **Mobile app stability:** <0.5% crash rate per session on iOS and Android
- **Migration tool success rate:** ≥90% of migration attempts complete without manual support intervention
- **Support ticket volume:** <0.3 tickets per customer per month (low support burden = sticky, self-explanatory product)

### Measurable Outcomes

**Setup success rate** — measured via onboarding wizard funnel events (step completion timestamps). Target: 80% complete all 3 steps within 120 minutes.

**Trial-to-paid conversion** — measured via Stripe subscription events correlated with trial start date. Target: 30% convert within 30 days.

**Member app adoption** — measured via app session analytics (bookings initiated via app vs. web). Target: 70% of members at active accounts within 60 days.

**Monthly active usage** — 90% of paying accounts log in and perform a management action at least 3× per week.

**NPS** — in-app survey at day 60. Target: ≥55.

**Churn** — Stripe churned subscriptions / total active subscriptions. Target: <3% monthly.

**3 unprompted organic community posts** — mentioned in CrossFit affiliate FB groups or r/gymowners without founder instigation (tracked via social listening). Target: within 6 months of launch.

---

## Product Scope

### MVP — Minimum Viable Product

Launch features required to onboard the first 25 paying customers and validate the core value proposition. All 8 feature areas must be live on day 1.

1. **Member management** — profiles, membership types, attendance history, payment history, bulk CSV import, Mindbody-specific importer
2. **Class scheduling** — class types, recurring schedules, capacity limits, waitlists with auto-promotion
3. **Online booking** — mobile app (iOS + Android) and web, configurable booking windows, automated confirmation and reminder notifications, late cancel / no-show tracking
4. **Billing** — Stripe pass-through (gym's own Stripe account), automated recurring monthly billing, one-time charges, failed payment retry, automated dunning email sequence, revenue dashboard
5. **Check-in** — QR code and PIN check-in via member app, manual check-in by staff, real-time roster with check-in status
6. **Owner admin app** — iOS and Android mobile admin view, class roster access, add member, process charge, push notifications for failed payments and waitlist activity
7. **Mindbody migration tool** — guided member list import, class schedule import, payment method re-authorization workflow, migration checklist with status tracking
8. **Basic analytics** — active member count, new/churned members, average class attendance rate, MRR trend (6 months), at-risk members (not attended 14+ days)

### Growth Features (Post-MVP)

**Phase 2 (Months 2–6):**
- CrossFit WOD delivery: post daily workouts, track member scores, member leaderboard
- Performance tracking: weight PRs, benchmark WOD history (captures SugarWOD segment)
- AppSumo LTD campaign launch and first-mover positioning

**Phase 3 (Months 6–12):**
- AI-powered churn prediction: "Members at risk this week" with automated re-engagement nudges
- Automated win-back campaigns: text/email sequences for cancelled members
- Cohort retention analytics: class type, membership type, and acquisition channel retention comparison
- Two-Brain Business content partnership integration

### Vision (Future)

**Phase 4 (Months 12–24):**
- Multi-location support
- 24/7 access control integration (Kisi, Salto) — opens unstaffed/hybrid gym market
- Retail/inventory management
- Payroll integration (Gusto, QuickBooks Online)
- Referral and gift card programs
- White-label mobile app for gyms willing to pay for full branded experience

**Vertical expansion (Months 24–36):**
- StudioSimple for Martial Arts (BJJ academies, MMA gyms)
- StudioSimple for Dance Studios
- API + Zapier integration for marketing stack connections
- Payment processing-based revenue model at scale

---

## User Journeys

### Journey 1: Marcus — CrossFit Box Owner Switching from PushPress

Marcus, 38, owns a CrossFit affiliate in suburban Atlanta with 165 members. He's paying $408/month for PushPress Core ($79) + PushPress Grow ($329) with no branded app because the $97/month add-on felt like too much. Members book through a browser. He discovered that his old free-tier PushPress was eating ~$300/month in excess processing fees.

**Opening scene:** Marcus is in a CrossFit affiliate owner Facebook group. Someone posts: "Switched to StudioSimple, took 90 minutes to set up, members love the app, saving $280/month." Marcus DMs them. Gets a link to the 30-day free trial.

**Rising action:** Marcus lands on the StudioSimple pricing page. "$79/month. All features. Mobile app included. Free Mindbody migration." He starts the trial — no credit card required. The setup wizard walks him through: import members from CSV, create this week's class schedule (6 AM WOD, 9 AM, 12 PM, 5 PM, 6 PM), connect his Stripe account. 47 minutes. He sends a test charge to himself. It processes in real-time through his own Stripe dashboard.

**Climax:** Monday morning. 23 members check in for the 6 AM WOD by scanning the QR code from the StudioSimple app. Marcus checks the attendance roster on his phone between sets. The first automatic billing run happens overnight — 165 recurring charges processed, 3 failed (handled by automated dunning sequence). He hasn't touched a payment manually.

**Resolution:** By month 2, Marcus posts in the CrossFit affiliate FB group unprompted: "Anyone else leave PushPress? StudioSimple has been solid — setup was fast, members adapted immediately." Six box owners DM him for a referral link within 24 hours.

**Requirements revealed:** Mobile member app with QR check-in, class roster in admin app, real-time payment processing via Stripe, automated dunning, referral/word-of-mouth triggers.

---

### Journey 2: Sarah — Yoga Studio Owner Escaping Mindbody

Sarah, 44, owns a yoga studio in Portland with 85 active students. She's been on Mindbody Starter ($159/month) for 6 years, using maybe 30% of the features. She got an email about the EGYM merger 3 months ago and has been uneasy. Last month her bill was $47 higher than expected due to a new "marketing platform fee."

**Opening scene:** Sarah googles "Mindbody alternative" after seeing the unexpected charge. She finds a blog post: "How a Portland yoga studio saved $1,400/year and kept all their members." She clicks through to StudioSimple's site.

**Rising action:** The pricing page ($79/month, all features, no commissions) is clear. The "Free Mindbody Migration" badge catches her eye — this is her biggest fear. She starts the trial. The migration tool walks her through: export her Mindbody member CSV (guided step-by-step with Mindbody-specific instructions), import into StudioSimple (90 members loaded in 4 minutes), create her weekly class schedule (15 classes across 7 days), and send Stripe re-authorization emails to students. 73% of students re-authorize within 48 hours.

**Climax:** Two weeks in, Sarah's most vocal student texts her: "I actually like this app better. Finding Tuesday's restorative class is way easier." A second student posts in the studio's Facebook group: "Love the new booking app!" Sarah checks the dashboard: 82 of 85 students have active recurring billing. The 3 lapsed cards have automated dunning emails out. She hasn't touched billing manually.

**Resolution:** At the 30-day mark, Sarah converts to a paid plan. Month 2, she tells another yoga studio owner at a regional event: "I was terrified to leave Mindbody. The migration took less than a morning and I didn't lose anyone."

**Requirements revealed:** Mindbody-specific CSV import, guided migration checklist with status tracking, Stripe re-authorization email workflow, class schedule creation, member communication features.

---

### Journey 3: Derek — Independent Gym Owner Moving Off Google Sheets

Derek, 51, owns a 3,200 sq ft independent gym in suburban Ohio with 72 members. He runs on Google Sheets + Venmo + WhatsApp. He spends 5 hours/week chasing late payments. He lost 3 long-term members last year to a competitor with a cleaner digital experience.

**Opening scene:** Derek watches a YouTube video: "I moved my gym off Google Sheets in 90 minutes — here's how." He's skeptical. He's looked at Mindbody before and gave up when he saw $159/month. He clicks through to StudioSimple's "start free" landing page. No credit card required.

**Rising action:** Derek adds his 72 members manually via a spreadsheet import (his Google Sheet becomes the source CSV). He creates his simple access plan (open gym, monthly $59). He connects Stripe. The wizard shows him: "Your first automatic billing run will be on the 1st of next month. 72 members will be charged automatically. You can review the list before it runs." He runs a test charge to himself. It works. He sets it and closes his laptop.

**Climax:** The 1st of the month arrives. 69 of 72 charges process automatically. 3 card failures trigger automated email sequences. Derek gets a push notification: "3 payments need attention." He logs in, sees the list, and can choose to follow up manually or let the automated dunning run. He does nothing — the dunning runs, 2 members update cards within 48 hours. Net: he spent 10 minutes on billing this month vs. 5 hours.

**Resolution:** Month 3, Derek signs up for the annual plan. He tells a friend who owns a martial arts school: "I don't deal with Venmo anymore. Best $79 I've ever spent."

**Requirements revealed:** CSV member import, simple membership type (open gym access), automated recurring billing, failed payment notifications and dunning sequence, mobile push notifications.

---

### Journey 4: Lisa — Part-Time Yoga Instructor Managing Class Rosters

Lisa is a part-time instructor at Sarah's yoga studio. She teaches 4 classes per week. Before StudioSimple, she had no system visibility — Sarah texted her the class roster each morning.

**Opening scene:** Sarah gives Lisa staff access in StudioSimple. Lisa gets an email invite. She logs in on her phone and sees "Today's Classes" — 3 scheduled, next one in 2 hours with 12 students registered.

**Rising action:** 10 minutes before class, Lisa opens the admin app. She sees the roster: 12 registered, 1 on the waitlist. During class, she marks attendance for each student with a tap — or lets students self-check-in via QR code. After class, the attendance is logged automatically.

**Climax:** A student who registered late isn't on the original roster. They show the QR code from their app. Lisa scans it — StudioSimple confirms they have a valid membership, marks them as attended.

**Resolution:** Lisa manages all 4 classes per week from her phone without texting Sarah for rosters. Sarah reduces her own admin burden and can trust class data is accurate.

**Requirements revealed:** Staff account with limited access (view roster, mark attendance, manage class), QR code check-in from member app, real-time roster with check-in status.

---

### Journey 5: Prospective Gym Owner in Trial Mode (Evaluation Journey)

Alex, 34, is considering switching from Wodify. He's heard about StudioSimple from a peer but wants to evaluate it before committing. He has 110 members and a complex CrossFit schedule (15 classes per week + specialty programming).

**Opening scene:** Alex starts the free trial and immediately tests the hardest thing — importing his 110 members and creating his 15-class weekly schedule. He uploads his Wodify export CSV. StudioSimple maps 8 of 9 columns automatically. He manually maps the 9th (a custom field). All 110 members import.

**Rising action:** Alex creates the weekly recurring schedule — 6 class types, 15 slots, varying instructors. He enables waitlists on all classes. He sets his booking window to "opens 7 days before, closes 1 hour before." He configures late cancel penalties (cancellations within 2 hours = 1 class deducted from punch cards).

**Climax:** Alex invites 5 test members to download the app. He watches them book a class in real-time — he can see the booking appear in the admin app roster. One test member tests the waitlist. They get automatically promoted when a spot opens. The push notification goes out instantly.

**Resolution:** Alex converts to paid within 7 days. His evaluation criteria: "Does it handle the complexity of my schedule? Can members actually use the app?" Both confirmed in trial.

**Requirements revealed:** Flexible recurring schedule creation, multiple class types and instructors, configurable booking windows, late cancel rule engine, waitlist auto-promotion with push notification, admin real-time visibility of bookings.

### Journey Requirements Summary

| Capability Area | Revealed By |
|---|---|
| Mobile member booking app (iOS + Android) | Journeys 1, 2, 3, 5 |
| QR code and PIN check-in | Journeys 1, 4 |
| Automated recurring Stripe billing | Journeys 1, 2, 3 |
| Failed payment detection + dunning | Journeys 1, 3 |
| Mindbody-specific data migration | Journey 2 |
| Staff access (limited permissions) | Journey 4 |
| Class roster in admin mobile app | Journeys 1, 4 |
| Waitlist with auto-promotion + notification | Journey 5 |
| Configurable booking window and late cancel rules | Journey 5 |
| Real-time booking visibility in admin | Journey 5 |
| Member self-check-in via app | Journeys 1, 4, 5 |
| Automated onboarding wizard | Journeys 1, 2, 3 |
| At-risk member detection (14-day no-show) | Journey 1 (implicit) |

---

## Domain-Specific Requirements

StudioSimple operates in business operations SaaS with medium domain complexity. The domain is not heavily regulated (not healthcare, not financial services), but payment processing via Stripe introduces PCI-DSS scoping, and mobile app distribution introduces App Store and Play Store compliance requirements.

### Payment Processing (Stripe)

- All payment processing must be conducted via the gym's own connected Stripe account (Stripe Connect). StudioSimple is a platform — it never holds or commingles gym funds.
- StudioSimple must never store raw card numbers. All card data is tokenized by Stripe. The platform is PCI-DSS SAQ A compliant by design.
- Payment retry logic must be configurable but default to Stripe's recommended Smart Retries. Maximum 3 manual retry attempts before member is flagged as lapsed.
- Failed payment notifications must go to both the gym owner (admin notification) and the member (automated dunning email sequence, configurable up to 3 emails).
- Revenue and payout visibility must reflect Stripe's payout schedule. StudioSimple does not accelerate or delay payouts — what Stripe pays out is what the gym receives.

### Mobile App Distribution

- iOS app must comply with Apple App Store guidelines (Section 3.1.3 for external payment links — Stripe Connect is compliant).
- Android app must comply with Google Play policies on payment processing.
- App must request only necessary device permissions: push notifications (for booking confirmations and reminders), camera (for QR code scanning). Location and contacts not required.
- App updates must maintain backward compatibility for at least 2 major versions to prevent disruption to gym members who don't update promptly.

### Data Migration (Mindbody-Specific)

- Mindbody exports member data in a proprietary CSV format. The migration tool must map Mindbody's column names (e.g., "Client ID", "First Visit", "Active") to StudioSimple's data model without requiring the gym owner to understand the mapping.
- Stripe does not allow automatic transfer of stored card data from other processors. The migration flow must include a guided email sequence to members asking them to re-authorize payment in StudioSimple.
- Expected re-authorization rate based on comparable migrations: 70–85% within 7 days. The migration checklist must surface the remaining unconfirmed members for follow-up.

### Multi-User Access Control

- Gym owners have full admin access. They can create staff accounts.
- Staff accounts (instructors) have read access to class rosters, write access to attendance, and no access to billing or member payment data.
- Member accounts have access only to their own data: profile, booking history, attendance history, and class schedule.
- No cross-tenant data access. Each gym's data is fully isolated.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

StudioSimple is not a technology innovation — it is a pricing and packaging innovation in an established market. The genuine novel aspects are:

1. **Migration-as-marketing** — The free Mindbody migration tool is positioned not as a support burden but as the primary acquisition close. No competitor has built an automated, guided migration path from Mindbody. This turns the incumbent's data hostage tactic ($499 data export fee) into a direct acquisition channel: gym owners searching for Mindbody alternatives find StudioSimple because StudioSimple explicitly solves the exit barrier.

2. **Stripe Connect pass-through as trust primitive** — Most gym management software acts as a payment middleman, taking a percentage or markup. Connecting the gym's own Stripe account (not StudioSimple's) and passing through Stripe's published rates with zero markup is a novel trust architecture in this vertical. It makes the payment economics permanently auditable by the gym owner (they can check Stripe's published rates anytime) and eliminates the "hidden processing fee" complaints that dominate PushPress and Mindbody reviews.

3. **CrossFit community as a distribution channel** — CrossFit box owners are organized into regional affiliate groups with strong peer trust networks. The product is designed to spread through this network, not to acquire via Google ads. The "switching story" (peer posts in FB group → peer DM → trial → conversion → peer posts again) is the core distribution mechanism, not a funnel.

### Market Context & Competitive Landscape

The Mindbody EGYM merger (Q1 2026) has created a once-in-a-decade disruption window. Studio owners who were considering switching but not urgently so are now actively evaluating alternatives. The AppSumo LTD launch in Month 4–6 is timed to capture the peak of this anxiety window.

No gym management software has a current or recent AppSumo deal (confirmed via exhaustive research). This is a first-mover opportunity in the LTD segment.

### Validation Approach

- 25 paying customers from community channels before AppSumo submission (validates product-market fit before scaling)
- 3 unprompted organic community posts within 6 months (validates word-of-mouth distribution channel)
- NPS ≥ 55 at day 60 (validates satisfaction at the level required for referral behavior)

### Risk Mitigation

- **Risk: Stripe Connect approval delay** — Apply for Stripe Connect platform status early (during development). Have fallback: Stripe manually onboards partner businesses if needed.
- **Risk: App Store rejection** — Use progressive web app (PWA) as day-1 backup. iOS and Android native apps in review in parallel.
- **Risk: Mindbody changes export format** — Build importer to handle ±3 column name variations. Provide manual mapping fallback UI for column names the importer doesn't recognize.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Each gym is an isolated tenant. All data (members, classes, billing records, analytics) is scoped to the gym's account ID.
- No shared data between gyms. A gym owner cannot see data from another gym, even within the same Stripe Connect platform.
- Trial accounts are full-featured tenants with a 30-day expiry. No feature gating during trial.

### Role-Based Access Control (RBAC)

| Role | Members | Classes | Billing | Admin |
|------|---------|---------|---------|-------|
| Owner | Full CRUD | Full CRUD | Full | Full |
| Instructor | Read (roster only) | Read + attendance | None | None |
| Member (app) | Own profile only | Book/cancel | Own payment methods | None |

### Subscription and Billing Management

- Gym subscription billing is managed by StudioSimple (separate from member billing managed by the gym via Stripe Connect).
- Gym owner can view, upgrade, downgrade, or cancel their StudioSimple subscription at any time. Cancellation takes effect at end of billing period.
- LTD accounts are flagged in the database. They are never billed again after initial LTD purchase.
- LTD upgrade paths (50 → 150 → 300 member tiers) allow LTD holders to pay the difference to unlock higher member limits.

### Onboarding Wizard

- The onboarding wizard is the first experience for all new accounts. It must be completable in a single session without external help.
- Steps: (1) Gym profile setup (name, address, timezone), (2) Membership type creation, (3) Member import or manual add, (4) Class schedule creation, (5) Stripe Connect, (6) Preview and launch.
- Each step is independently saveable (in-progress wizard state persists across sessions).
- Progress indicator shows "X of 6 steps complete" at all times.

### API Architecture Considerations

- The web application and mobile admin app share a single REST API backend.
- The member-facing booking app also consumes this API.
- API authentication: JWT tokens with 24-hour expiry; refresh token pattern for persistent mobile sessions.
- Webhook consumption: Stripe webhooks for payment events (charge.succeeded, charge.failed, invoice.payment_failed, customer.subscription.deleted).
- API rate limiting: 100 requests/minute per authenticated user; 10 requests/minute for unauthenticated (public class schedule endpoints).

### Integration Requirements

**Stripe Connect (Required at Launch)**
- Platform Connect account (not Standard) to allow the gym's own Stripe account to process payments
- Supported: charge, refund, recurring subscription, one-time invoice
- Required Stripe features: Stripe Billing (subscriptions), Stripe Connect Express (simplified onboarding for gym owners)

**Email (Required at Launch)**
- Transactional email (booking confirmations, reminders, dunning, migration re-authorization): SendGrid or Postmark
- Configurable sender name: gym name (e.g., "CrossFit Atlanta") not "StudioSimple"

**Push Notifications (Required at Launch)**
- FCM (Android) and APNs (iOS) for booking confirmations, class reminders (configurable: 24h and 1h before), waitlist promotions, and failed payment alerts to owner

**Future Integrations (Post-MVP)**
- Zapier (API + webhook trigger/action)
- QuickBooks Online (export revenue data)
- Kisi / Salto (access control hardware for 24/7 gyms)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP. The product must process real money (recurring Stripe billing) on day 1. "Working billing" is not a Phase 2 feature — it is the single most important trust signal for gym owners. Every other feature exists to help them use the billing system confidently.

**Resource Requirements:** 1–2 full-stack developers (React/Node or similar), 1 mobile developer (React Native or Flutter for cross-platform), 1 founder/PM doing customer development and support in parallel. No dedicated designer needed at MVP — use a UI kit (Tailwind/shadcn or similar) with clean defaults.

**Target time to MVP:** 4–6 weeks of focused development to a working beta with 5 internal test gyms.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- CrossFit box owner switching from PushPress (Journey 1)
- Yoga studio owner migrating from Mindbody (Journey 2)
- Independent gym owner moving off Google Sheets (Journey 3)
- Instructor managing class roster (Journey 4)

**Must-Have Capabilities:**
1. Member management (CRUD, CSV import, Mindbody importer)
2. Membership types (monthly recurring, punch card, trial)
3. Class scheduling (recurring weekly, multiple class types, capacity, waitlist)
4. Online booking — mobile app (iOS + Android, React Native) and web
5. Automated Stripe Connect billing (recurring + one-time charges)
6. Failed payment retry and automated dunning
7. QR code and PIN check-in
8. Admin mobile app (iOS + Android)
9. Staff accounts (instructor role)
10. Mindbody migration tool (guided import + Stripe re-auth workflow)
11. Basic analytics dashboard (member count, MRR, at-risk members)
12. Onboarding wizard (6-step, progress-tracked)

### Post-MVP Features

**Phase 2 (Post-MVP, Months 2–6):**
- CrossFit WOD delivery and member leaderboard (captures SugarWOD users)
- Performance tracking (benchmark WODs, weight PRs)
- AppSumo LTD launch (first-mover in gym management category)
- Glofox/Wodify data importers (extend migration advantage beyond Mindbody)

**Phase 3 (Expansion, Months 6–12):**
- AI-powered churn prediction with automated re-engagement
- Cohort retention analytics (class type, membership type, acquisition channel)
- Two-Brain Business content partnership and referral integration
- SMS messaging for booking reminders and dunning (Twilio)

### Risk Mitigation Strategy

**Technical Risks:**
- Stripe Connect onboarding for small business owners can have friction (identity verification). Mitigation: Build a dedicated "Stripe setup help" in-app flow with screenshots of each verification step. Have support ready to assist.
- React Native cross-platform for both member and admin apps — shared codebase reduces maintenance burden but requires careful iOS/Android testing. Mitigation: Device testing matrix defined before launch.

**Market Risks:**
- PushPress could match StudioSimple's pricing (they have the product, just not the pricing). Mitigation: Speed to first 200 customers and word-of-mouth lock-in before competitors react. Community presence is harder to replicate than a pricing change.
- AppSumo LTD buyers may have low retention or abuse LTD limits. Mitigation: LTD member limits (50/150/300) are enforced in the database. LTD buyers are onboarded with the same migration support as MRR customers.

**Resource Risks:**
- If development slips, the minimum shippable product is: member management + recurring Stripe billing + basic class schedule (web only, no mobile app). This is the Derek persona (Journey 3) but not Marcus or Sarah. Mobile app is required for CrossFit and yoga segments — delay it and the ICPs shift to the lower-WTP independent gym segment. Mitigation: Mobile app development runs in parallel; do not allow it to become the critical path bottleneck.

---

## Functional Requirements

### Member Management

- FR1: Gym owner can create a member profile with name, email, phone, photo, membership type, start date, and status (active/paused/cancelled)
- FR2: Gym owner can edit any field on a member profile at any time
- FR3: Gym owner can import members in bulk from a CSV file with auto-mapping of common column names
- FR4: Gym owner can import members from a Mindbody-specific export CSV using the guided Mindbody importer tool
- FR5: Gym owner can view a member's full attendance history (class name, date, check-in method)
- FR6: Gym owner can view a member's full payment history (charge date, amount, status, membership type)
- FR7: Gym owner can add internal notes and tags to a member profile (visible to staff, not to the member)
- FR8: Gym owner can pause and resume a member's membership (billing pauses during the pause period)
- FR9: Members can update their own contact information via the member-facing app
- FR10: Gym owner can see a list of members who have not attended any class in the past 14 days (at-risk list)

### Class Scheduling & Management

- FR11: Gym owner can create a class type with name, duration (minutes), default capacity, and description
- FR12: Gym owner can create a recurring weekly class schedule with day, time, class type, capacity, and assigned instructor
- FR13: Gym owner can override a single occurrence of a recurring class (change capacity, cancel, substitute instructor)
- FR14: Gym owner can enable a waitlist for any class type; capacity and waitlist limits are configurable independently
- FR15: System automatically promotes the first waitlisted member when a registered member cancels, sending a push notification to the promoted member
- FR16: Instructor can view the class roster (registered members and check-in status) for any class they are assigned to

### Online Booking & Member Experience

- FR17: Member can view the full class schedule for the next 14 days via the mobile app and web
- FR18: Member can book any available class with a single tap if they have an active membership
- FR19: Member can cancel a class booking via the mobile app or web up to the configured cancellation window
- FR20: System sends a booking confirmation push notification and email immediately after booking
- FR21: System sends a class reminder push notification and email at configurable intervals before the class (default: 24 hours and 1 hour)
- FR22: Gym owner can configure the booking window (how many days in advance booking opens) and cancellation window (minimum hours before class)
- FR23: Gym owner can configure late cancellation penalties (e.g., deduct 1 class credit from punch card if cancelled within 2 hours of class)
- FR24: Member can view their booking history and upcoming scheduled classes in the app
- FR25: System tracks late cancellations and no-shows per member; gym owner can view this history

### Billing & Payments

- FR26: Gym owner can connect their own Stripe account to StudioSimple via Stripe Connect Express onboarding
- FR27: Gym owner can configure one or more membership types with monthly recurring pricing and a billing date
- FR28: System automatically charges all active members on their configured billing date using the stored Stripe payment method
- FR29: System retries failed payments up to 3 times using Stripe Smart Retries before marking the member as lapsed
- FR30: System sends automated dunning emails to members with failed payments at configurable intervals (default: immediately, 3 days, 7 days)
- FR31: Gym owner receives a push notification and email for each failed payment
- FR32: Gym owner can issue a one-time charge to any member (drop-in fee, retail item, penalty) via the admin interface
- FR33: Gym owner can issue a full or partial refund on any charge within the Stripe refund window
- FR34: Gym owner can view a revenue dashboard showing MRR trend (6 months), upcoming charges (next 30 days), and outstanding balances
- FR35: Stripe processing fees are displayed transparently to the gym owner; StudioSimple applies zero markup

### Check-In System

- FR36: Member can check in to a class by scanning a QR code displayed in the member app using any camera device (tablet, phone)
- FR37: Member can check in to a class by entering a 4-digit PIN displayed in the member app at the gym's check-in screen
- FR38: Gym owner or instructor can manually check in any member to a class via the admin app
- FR39: Check-in status is visible in real-time on the class roster in the admin app as members arrive
- FR40: System records the check-in method (QR, PIN, manual) and timestamp for every check-in event

### Admin & Staff Access

- FR41: Gym owner can create staff accounts with an instructor role for part-time instructors or front-desk staff
- FR42: Staff accounts with instructor role can view class rosters, mark attendance, and manually check in members
- FR43: Staff accounts cannot access billing data, payment history, or member financial information
- FR44: Gym owner can revoke a staff account at any time; revocation takes effect immediately
- FR45: Gym owner can access a mobile admin app on iOS and Android with the same capabilities as the web admin panel
- FR46: System sends push notifications to the gym owner's admin app for critical events: failed payments, waitlist activity, and low attendance alerts

### Mindbody Migration

- FR47: Gym owner can initiate the Mindbody migration wizard from the onboarding checklist or settings menu
- FR48: Migration wizard accepts a Mindbody member export CSV and automatically maps Mindbody column names to StudioSimple fields
- FR49: Migration wizard accepts a Mindbody class schedule export and creates matching class types and recurring schedule entries
- FR50: Migration wizard generates and sends a branded Stripe payment re-authorization email sequence to all imported members
- FR51: Migration checklist tracks per-member re-authorization status (pending / authorized / unresponsive) and shows overall completion percentage
- FR52: Gym owner can manually mark a member as migrated (for members who pay via cash or check and do not need Stripe re-authorization)

### Analytics & Reporting

- FR53: Gym owner can view a dashboard showing: active member count, new members this month, churned members this month, and average class attendance rate
- FR54: Gym owner can view an MRR trend chart for the past 6 months
- FR55: Gym owner can export the current member list (name, email, membership type, status, last attendance date) as a CSV at any time
- FR56: Gym owner can view a "members at risk" list: all members who have not attended any class in the past 14 days, sorted by days since last attendance

---

## Non-Functional Requirements

### Performance

- Admin web dashboard and member booking app must render the class schedule and primary data views in under 2 seconds on a standard broadband connection (>10 Mbps).
- QR code check-in confirmation must complete within 1 second of scan (network latency to API + response).
- Recurring billing job (charging all members on billing day) must complete within 4 hours for a gym with 300 members. (At 300 members × ~100ms per Stripe API call = 30 seconds minimum; the 4-hour window accounts for Stripe rate limits and retry scheduling.)
- Mobile app must feel native: screen transitions under 300ms on iPhone SE or equivalent mid-tier Android (Pixel 6a or similar).

### Security

- All data in transit must be encrypted using TLS 1.2 or higher. All data at rest must be encrypted (AES-256 via database-level encryption).
- Payment card data must never be stored by StudioSimple. All card handling is delegated to Stripe. StudioSimple stores only Stripe customer IDs and payment method IDs (tokens).
- Authentication tokens (JWT) must expire after 24 hours. Mobile apps must implement refresh token rotation.
- Staff account permissions must be enforced server-side. Role checks must not rely solely on client-side UI hiding.
- Gym tenant data isolation must be enforced at the database query level (all queries scoped by gym_id). Cross-tenant data leakage is a critical failure mode.
- Password reset must use time-limited, single-use tokens delivered via email. No security questions.

### Scalability

- The platform must support 200 active gym tenants at launch growing to 2,000+ within 36 months without architecture changes.
- Each gym tenant may have up to 300 members (enforced by subscription tier). The database schema and query patterns must support this without per-tenant performance degradation.
- The billing job engine must be horizontally scalable — it must be possible to distribute monthly billing jobs across multiple workers without duplicate charges.
- API must sustain 100 concurrent authenticated requests without response time degradation.

### Reliability

- Uptime target: 99.5% monthly (acceptable: ~3.6 hours downtime/month). The gym management context does not require 99.99% uptime, but planned maintenance must be scheduled outside peak gym hours (5–9 AM and 5–8 PM in the gym's local timezone).
- Billing job failures must be idempotent. If a billing job crashes mid-run, restart must not re-charge already-charged members (deduplication by charge idempotency key).
- All Stripe webhook events must be processed with at-least-once delivery guarantee and idempotent handlers.

### Accessibility

- Member-facing booking app and web must meet WCAG 2.1 AA standards (minimum). The member booking experience is a public-facing surface used by gym members of all ages and abilities.
- Admin interface does not need to meet WCAG AA but must meet AA contrast ratios for text (4.5:1 minimum).
- Mobile app must support iOS Dynamic Type (font size accessibility settings).

### Integration Reliability

- Stripe webhook processing: all webhook events must be acknowledged within 5 seconds (to prevent Stripe retry storms). Events may be queued for async processing after acknowledgment.
- Transactional email delivery (booking confirmations, dunning emails): delivery rate target ≥98% within 60 seconds of trigger event.
- Push notification delivery: ≥95% delivery rate for critical notifications (booking confirmation, waitlist promotion, failed payment alert). Delivery is best-effort for reminder notifications.

---

## Appendix: MVP Go/No-Go Validation Criteria

The MVP is validated and ready for Phase 2 (AppSumo launch + CrossFit WOD feature) when all of the following are true:

1. **25 paying customers** — at least 15 on MRR ($79/month) and 10 on LTD, from at least 3 different gym types
2. **NPS ≥ 50** — surveyed at day 60 from first 25 customers
3. **<3% monthly churn** — sustained over 90 days with ≥20 active accounts
4. **3 organic community posts** — unprompted mentions in CrossFit affiliate FB groups or r/gymowners recommending StudioSimple
5. **Mindbody migration NPS ≥ 60** — specifically from customers who migrated from Mindbody
6. **Average setup time ≤ 90 minutes** — from account creation to first automated billing test run

All 6 criteria must be satisfied before committing development resources to Phase 2 features or AppSumo deal negotiation.

---

*PRD completed: 2026-04-12*
*Input documents: ideas/shortlisted/gym-fitness-management.md, _bmad-output/planning-artifacts/research-gym-fitness-management.md, _bmad-output/planning-artifacts/brief-gym-fitness-management.md*
*Next recommended workflow: `/bmad-bmm-create-architecture` — Create Technical Architecture*
