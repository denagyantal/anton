---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/wedding-photography-crm.md
  - _bmad-output/planning-artifacts/market-research-wedding-photography-crm.md
  - _bmad-output/planning-artifacts/brief-wedding-photography-crm.md
workflowType: 'prd'
research_topic: 'wedding-photography-crm'
---

# Product Requirements Document — Wedding Photography Studio CRM

**Author:** Root
**Date:** 2026-06-07

---

## Executive Summary

Wedding photographers are running 6–18 month, multi-session client engagements on tools designed for single-session freelancers. Every competitor — HoneyBook, Dubsado, Studio Ninja, Sprout Studio — models the wedding client relationship as a flat list of events rather than a linked project spanning inquiry → engagement shoot → wedding day → album design → gallery delivery. The result: photographers spend 2–4 hours per booking on manual admin that should be automated.

Two simultaneous displacement events in 2025 created the most favorable switching window the category has ever seen: HoneyBook raised its Starter plan price 89.5% (from $228 to $432/year) in February 2025, and Táve — the most sophisticated photography CRM — was absorbed by consumer photo app VSCO and relaunched as VSCO Workspace in August 2025, leaving its power-user base uncertain about the product's future. An estimated 10,000–20,000 photographers are in active evaluation mode.

**The Wedding Photography Studio CRM** is a purpose-built studio management platform that models the complete wedding photography client lifecycle as a single linked project, with automated stage transitions, questionnaire-to-shot-list conversion, vendor coordination PDF generation, and gallery delivery tracking. It launches at $99 LTD — the first lifetime deal in a category where every competitor charges $12–$129/month.

**Target users:** Solo wedding photographers (44,305 dedicated US businesses, 89.6% solo operators) displaced by HoneyBook's price hike and Táve's acquisition uncertainty, plus new photographers entering the profession.

**Business model:** AppSumo LTD launch (November 2026) → cap at 1,500 LTD buyers → MRR transition at Month 7 ($19/month for new users) → $20,000–$30,000 MRR by Month 12.

### What Makes This Special

**The only CRM that chains Engagement → Wedding → Album → Gallery as one linked project.** When a photographer marks a stage complete, the next stage automatically triggers: next questionnaire sends, next email sequence begins, next deadline appears on the dashboard. No other tool in the category does this.

**Questionnaire-to-shot-list automation** converts client answers (must-have shots, family group list, venue restrictions, special moments) into a structured, formatted shot list PDF — eliminating the #1 manual time sink in wedding photography workflow, estimated at 1–3 hours per booking.

**$99 LTD** is structurally unoccupied competitive space. Zero competitors have ever offered a lifetime deal. For a photographer on HoneyBook Starter, the product pays back in under 3 months.

**Migration-first launch.** HoneyBook Migration Kit and Táve/VSCO Migration Kit ship on day one, targeting the exact audience with the highest current motivation to switch.

## Project Classification

- **Project Type:** SaaS B2B (creative professional vertical)
- **Domain:** Studio management / creative services workflow software
- **Complexity:** Medium — payments, e-signatures, automated email delivery, PDF generation, mobile offline mode, multi-user tenancy
- **Project Context:** Greenfield new product
- **Primary Market:** US-first; 44,305 dedicated wedding photography businesses
- **Launch Channel:** AppSumo LTD → community seeding → MRR transition

---

## Success Criteria

### User Success

Photographers succeed when they run their entire client workflow — from first inquiry to delivered gallery — without leaving the platform or using a spreadsheet.

**Activation (Days 1–7):**
- Photographer creates first multi-session client project with linked stage timeline within 24 hours of signup
- Photographer triggers first automated email sequence within 48 hours
- Photographer generates first shot list from questionnaire data within 7 days
- Target: 70% of new users complete first end-to-end workflow within 7 days

**Aha Moment:**
- Shot list auto-generates from questionnaire answers without manual reformatting — target 50%+ of users reach this within 30 days
- Vendor coordination PDF produced in under 2 minutes from booking data — target 30%+ within 30 days

**Engagement (Days 8–30):**
- Weekly active usage: 60%+ of users log in at least once per week during booking season (Jan–June)
- Core feature adoption: 50%+ of active users use the shot list generator within 30 days
- Gallery tracker adoption: 30%+ of active users track at least one gallery delivery

**Retention:**
- Monthly churn: <3%
- 90-day retention: 70%+ among LTD buyers
- NPS: 40+ at 90 days, 50+ at 12 months
- "Would recommend" rate: 80%+

**Value Realization:**
- Photographer-reported time saved: 1.5+ hours per new wedding booking vs. manual workflow
- Tool consolidation: 40%+ of users cancel a separate gallery delivery subscription within 90 days

### Business Success

| Milestone | Target |
|-----------|--------|
| AppSumo launch Month 1 | 250–500 LTD buyers |
| AppSumo launch Month 2 | 500–750 cumulative LTD buyers |
| AppSumo LTD cap | 1,500 buyers (hard cap to manage support load) |
| Month 7 MRR launch | $5,000–$10,000 MRR from new subscription users |
| Month 12 MRR | $20,000–$30,000 MRR |
| Year 2 exit target | $30,000–$50,000 MRR, 2,000+ active users |

**Community position:**
- AppSumo rating: 4.5+ stars with 100+ reviews within 60 days of launch
- G2/Capterra: 50+ reviews within 6 months
- Organic Google ranking: Top 3 for "best CRM for wedding photographers" within 6 months
- Unprompted community mentions in photography Facebook groups and r/weddingphotography within 30 days of launch

### Technical Success

- Email delivery rate: 98%+ (transactional email provider, not DIY SMTP)
- PDF generation: Shot list and vendor PDFs generate in under 5 seconds
- Mobile offline mode: Day-of wedding view (timeline, shot list, vendor contacts) accessible without internet connectivity
- Payment processing: Zero platform surcharge beyond Stripe's standard 2.9% + $0.25/card
- Uptime: 99.5%+ during business hours; photographer-critical features (day-of view, shot list) degrade gracefully on poor connectivity
- Data security: All client data, contracts, and payment information encrypted at rest and in transit

### Measurable Outcomes

**Go/no-go decision point at 90 days post-launch:**
- Green: 300+ active users AND NPS 35+ → proceed to MRR model
- Yellow: 200–300 active users OR NPS 25–35 → reassess onboarding and activation
- Red: <200 active users OR NPS <25 → reassess core feature assumptions before MRR transition

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must enable a photographer to run their entire wedding client relationship from inquiry to gallery delivery without leaving the platform. Eight capabilities are required at launch:

1. **Multi-Session Project Timeline** — Linked Inquiry → Engagement → Wedding → Album → Gallery stages with auto-advance triggers
2. **Questionnaire Builder with Photography Templates** — Drag-and-drop editor, pre-built Wedding Day and Engagement questionnaire templates, conditional logic, auto-send on stage trigger
3. **Questionnaire-to-Shot-List Converter** — Rule-based field mapping, structured PDF export, family group list auto-formatting, printable/shareable output
4. **Contract and Invoice Builder** — E-signatures, line item invoices, Stripe payment processing, payment status tracking, automated payment reminders
5. **Automated Email Sequences** — Trigger-based automation, pre-built photography templates, custom branding, Postmark/SendGrid delivery
6. **Mobile App (iOS + Android)** — Day-of view (timeline, contacts, shot list), stage updates from field, offline mode for poor-connectivity venues
7. **Gallery Delivery Tracker** — Paste-in gallery URL, Sent → Viewed → Favorites → Downloaded status tracking, auto-reminder if not viewed in 7 days
8. **Vendor Coordination PDF Generator** — Auto-populated from booking data, wedding day timeline included, no-login shareable link/PDF

**On day one alongside launch:**
- HoneyBook Migration Kit (template/workflow import)
- Táve/VSCO Migration Kit
- Batteries-included templates: inquiry response, booking confirmation, engagement prep, wedding day reminder, gallery delivery

### Growth Features — Phase 2 (Months 4–12)

- HoneyBook and Táve/Dubsado automated migration wizards (programmatic template import vs. manual kit)
- AI-assisted wedding day timeline generator (ceremony time + party size + venue type → suggested timeline)
- Built-in gallery proofing (client favorites within platform, eliminating Pixieset dependency for basic galleries)
- Pixellu SmartAlbums integration for album design tracking
- Multi-photographer studio job assignment (lead + associate photographer workflow)

### Vision — Phase 3 (Year 2+)

- Built-in gallery hosting (full Pixieset/ShootProof replacement, saving photographers $120–$180/year more)
- AI shot list enhancement (suggest missed shots by venue type, party size, season)
- International expansion: UK, Australia, Canada — local tax/VAT, currency handling (HoneyBook US/CA only = global TAM expansion)
- Portrait and family session support (expanding from 44K wedding photographers to 266K photography businesses)
- Vendor marketplace (preferred vendor directory, referral revenue)

---

## User Journeys

### Journey 1: Sarah — The HoneyBook Refugee (Primary User, Success Path)

Sarah is a 31-year-old solo wedding photographer in Portland, OR. She shoots 25–30 weddings a year and has been on HoneyBook since 2021. In February 2025 she received the price hike email: $19/month to $36/month, effective immediately. She'd already been quietly frustrated — HoneyBook treats her engagement shoot and wedding booking as separate client records, and she still manually copies questionnaire answers into a Google Doc shot list for every wedding.

She posts in her photographer Facebook group: "Has anyone switched from HoneyBook? What are you using?" She gets 47 replies. One mentions the Wedding Photography Studio CRM — someone says "it actually chains the engagement shoot and wedding together, and generates the shot list automatically." That's the phrase that stops her scrolling.

She clicks the AppSumo deal page. The $99 one-time vs. $432/year math takes 3 seconds. She buys.

**Activation:** Sarah creates her first client project — a November 2026 wedding she just booked. She adds the engagement shoot as Stage 1 and the wedding as Stage 2. She links her engagement questionnaire to auto-send when the engagement stage begins. She tests it — the questionnaire sends. Then she fills out a sample questionnaire with fake answers and clicks "Generate Shot List." A formatted PDF appears with family groups arranged, must-have shots listed by section, venue details included. She stares at it for a moment. She's been doing this by hand for 6 years.

She spends the rest of the afternoon importing her contract templates and rebuilding her email sequences. She's operational in 2.5 hours. Not 20 minutes, but close enough — and she was migrating 4 years of HoneyBook setup.

**Outcome:** At the end of her first month, Sarah has 8 active clients in the system. She hasn't touched a Google Doc for shot list prep once. She posts back in the Facebook group: "Switched to [product]. The shot list automation alone is worth it. Happy to share more if anyone wants."

**Requirements revealed:** Multi-session project timeline with linked stage triggers, questionnaire-to-shot-list converter, email sequence automation, contract templates, dashboard showing all clients by current stage, HoneyBook migration kit.

---

### Journey 2: Marcus — The Power User Migration (Primary User, Complex Path)

Marcus is a 38-year-old wedding photographer in Chicago who also manages one associate shooter. He ran his business on Táve for 5 years — deep, complex automation: multi-phase workflows, custom questionnaire logic, conditional branching, automated studio policies. Táve was overkill for most photographers, but Marcus used every feature.

When VSCO acquired Táve and relaunched it as VSCO Workspace in August 2025, Marcus stayed. But six months in, several things still bother him: the mobile app still doesn't exist, support response times have lengthened, and the roadmap is opaque. He's not panicking, but he's doing due diligence.

He finds the Wedding Photography CRM through the Táve refugee Facebook group, where someone posts: "Has anyone tried migrating to [product]? Curious how deep the automation goes." Marcus is specifically evaluating whether the platform can replicate his Táve workflow depth.

He downloads the Táve Migration Kit. It maps Táve's concept of "Packages" to session stages and "Lead Pipelines" to project timelines. It's not 1:1, but the mapping guide is clear. He spends 90 minutes reconstructing his most complex workflow — the one that chains engagement prep questionnaire → custom shot list → vendor sheet → post-wedding gallery delivery email sequence — and it works. Not identical to Táve, but functionally equivalent.

His first real test is a December wedding. He generates the vendor PDF from the booking data on the morning of the wedding. He shows it to the florist on-site. "Oh wow, you have all our contact info and the timeline in here." He marks the wedding stage complete from his phone. The album design stage triggers automatically — the next questionnaire sends to the couple.

He buys the 3-user $149 LTD for himself and his associate.

**Requirements revealed:** Táve migration kit, deep questionnaire conditional logic, multi-stage project automation, vendor PDF generator, mobile stage updates, 3-user multi-seat support.

---

### Journey 3: Priya — The New Photographer (Secondary User, Onboarding Path)

Priya is 26 and in her second year shooting weddings in Austin. She booked 8 weddings in 2025 and is targeting 20 in 2026. Her current "system" is a Google Sheet, Gmail, and a Canva invoice template. She's been meaning to get organized for a year.

She sees the product mentioned in a YouTube video by a photography educator she follows — a "tools for wedding photographers" video. The $99 LTD is prominently featured. She thinks: HoneyBook and Dubsado look overwhelming and expensive ($35–$59/month is a lot when she's not yet at 20 weddings). $99 one-time feels like something she can justify right now.

She buys it without much research. This means the onboarding experience is her only guide.

The onboarding wizard asks three questions: "How many weddings do you shoot per year?" (She says 8–15.) "Do you use any other tools right now?" (She selects "spreadsheet only.") "What's your biggest challenge?" (She picks "staying organized between engagement shoots and weddings.") The wizard creates a pre-built workflow appropriate for her level and launches a checklist: Set up your inquiry form → Create your first contract template → Add your first client.

She adds a real client — a June 2026 wedding she just booked. She sends the inquiry response email from the template. She sends the contract through the platform. The couple signs within an hour. She marks the booking as confirmed. The engagement questionnaire auto-schedules to send 4 weeks before the engagement shoot date.

Two weeks later, she gets an automated reminder that the questionnaire was sent and not yet filled out. She nudges the couple. They complete it. She opens the shot list. It's ready to print.

"I didn't know it would do this," she thinks. She didn't — that's the point.

**Requirements revealed:** Guided onboarding wizard with profile-based workflow setup, batteries-included templates for new users, automated follow-up reminders, clear dashboard for clients at each stage, minimal setup friction.

---

### Journey 4: The Day-Of Scenario (Primary User, Edge Case — Offline/Field Use)

It's 7:15 AM on a Saturday. Sarah is in the parking lot of a vineyard venue 45 minutes outside Portland. Her phone shows one bar of LTE. She opens the app to check the shot list and the venue WiFi password before walking in.

The app loads. The shot list is available — she saved it the night before and the app cached it. The family group list, ceremony must-haves, reception timeline. All there.

She pulls up the venue address and parking instructions she entered in the booking. She forwards the vendor coordination PDF to the florist via the app's share button. She glances at the day-of timeline — ceremony starts at 4 PM, she needs to be in getting-ready room by 10 AM.

During the reception, she loses connectivity entirely. She tries to mark the "Wedding Day" stage as complete from the app. It queues the action and shows a "will sync when connected" indicator. She continues shooting.

On the drive home, the app syncs. The stage advances. The album design questionnaire has already been scheduled to send in 2 weeks.

**Requirements revealed:** Mobile offline mode with local data cache, day-of timeline view, shot list accessible offline, action queue for offline stage updates, vendor contact access from mobile without internet.

---

### Journey 5: Multi-Photographer Studio Coordination (Secondary User, Admin Path)

Marcus assigns a December wedding to his associate photographer, Jordan. Jordan needs access to the client's shot list, vendor contacts, and day-of timeline — but not the contract, payment data, or business-sensitive client history.

Marcus opens the booking, selects "Assign to Jordan," and sets Jordan's permission level to "Shooter Access" (shot list, timeline, vendor PDF, messaging — no financials). Jordan gets an email notification with a link to the booking.

Jordan opens the booking on her phone. She sees the shot list, vendor contacts, timeline. She marks "Second Shooter" as present at 9 AM from the mobile check-in. She adds a note to the shot list: "Spoke to florist — setup running 20 min behind." Marcus sees the note on his phone.

**Requirements revealed:** Multi-user assignment with role-based permissions (Shooter vs. Owner access), shared booking view, mobile field notes, real-time notes visibility between assigned team members.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Sarah (HoneyBook refugee) | Multi-session timeline, shot list automation, email sequences, contract templates, migration kit |
| Marcus (Táve power user) | Deep questionnaire logic, multi-stage automation, vendor PDF, mobile stage updates, multi-seat |
| Priya (new photographer) | Guided onboarding, batteries-included templates, automated reminders, frictionless setup |
| Day-of field use | Mobile offline mode, cached shot list, action queue, vendor contact access |
| Studio coordination | Role-based multi-user assignment, shared booking view, mobile field notes |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Multi-Session Wedding Lifecycle as a First-Class Data Model**

Every competitor models a wedding client as a single job or a flat list of events. The Wedding Photography Studio CRM models it as a directed graph of linked stages — each stage has its own status, date, questionnaire, email sequence, and completion trigger. Completing Stage N auto-advances to Stage N+1. This is a fundamental data model innovation, not a UI layer — it changes what automations are possible.

*Competitive context:* Studio Ninja and Sprout Studio have "job types" but no stage chaining. Dubsado has "workflows" but they are linear sequences attached to a single project, not multi-session graphs. HoneyBook has automations but treats engagement shoots and weddings as separate client records. No competitor has implemented linked multi-session project timelines.

**2. Questionnaire-to-Shot-List Semantic Mapping**

The conversion of structured questionnaire answers into a formatted, section-organized shot list PDF is a rule-based semantic transformation that doesn't exist in any CRM. The family group answer "Parents of Bride + Parents of Groom + Bride's Grandparents (2)" becomes formatted shot list items: "Family: Bride + Parents of Bride (3 people); Family: Bride + Parents of Groom (4 people); Family: Bride + Grandparents (3 people)." This mapping is configurable per photographer but ships with a validated wedding-specific default ruleset.

*Validation approach:* Beta users from photographer Facebook groups test the default ruleset on real upcoming weddings and report accuracy vs. their manually-created shot lists. Target: default ruleset generates 85%+ of shot list items correctly for 80%+ of beta users without customization.

**3. LTD Pricing in a Subscription-Only Category**

The $99 lifetime deal is not just pricing strategy — it's a structural market innovation. The category has never had an LTD option. The LTD model changes the acquisition mechanic: AppSumo launches create concentrated community buzz, followed by organic word-of-mouth in photographer communities. Every competitor's customer acquisition model relies on free trials and monthly churn cycles. The LTD model front-loads revenue and creates a different retention dynamic (loss aversion: "I already paid for this forever").

*Risk:* LTD buyers may expect infinite free development. Mitigated by clear LTD terms (features at launch + updates for 24 months; after Month 7, new users on subscription).

### Validation Approach

- **Multi-session timeline:** Validated in beta with 50 photographers running real active clients before AppSumo launch
- **Shot list automation:** Tested on 20 real weddings by beta users; default ruleset accuracy measured and documented as social proof
- **LTD pricing:** AppSumo audience has demonstrated willingness to pay LTD for similar verticals (photography business tools have 30+ successful AppSumo launches historically)

### Risk Mitigation

| Innovation Risk | Mitigation |
|----------------|-----------|
| Shot list mapping accuracy varies by photographer style | User-customizable mapping rules ship alongside defaults; education content for customization |
| Multi-session data model adds complexity for new users | Guided onboarding defaults to simple single-session mode; multi-session enabled after first workflow completed |
| LTD support burden is unsustainable | Hard cap at 1,500 LTD buyers; comprehensive self-service documentation; community-sourced FAQ from beta users |

---

## SaaS Platform Requirements

### Multi-Tenancy Model

- Each photographer account (solo or studio) is a separate tenant with complete data isolation
- Studio tier: up to 3 users (Starter: $149 LTD) or 5 users (Pro: $199 LTD) sharing one tenant
- User roles within a tenant: Owner (full access), Shooter (booking view, shot list, field notes only — no financials)
- LTD tier determines max user seats; additional seats post-cap available via subscription add-on

### Authentication & Access Control

- Email + password authentication with email verification on signup
- Password reset via email link
- Session token with 30-day expiration (mobile) and 7-day expiration (web)
- Role-based access: Owner sees all data; Shooter sees only assigned bookings without financial data
- No OAuth or SSO required for MVP; add in Phase 2 for studio tier

### Onboarding & Activation

- 4-question onboarding wizard (shooting volume, current tool, biggest challenge, studio size) → pre-built workflow profile
- Pre-configured templates loaded based on profile: inquiry form, booking contract, engagement prep sequence, wedding day reminder sequence, gallery delivery sequence
- First-run checklist guiding user to: add first client → send first email → generate first shot list
- Target: 70% of users complete first full workflow within 7 days

### Integration Requirements

| Integration | Purpose | Priority |
|-------------|---------|---------|
| Stripe | Payment processing for invoices (no platform surcharge) | MVP |
| Postmark or SendGrid | Transactional email delivery (98%+ delivery rate) | MVP |
| Pixieset, ShootProof, Pic-Time, Cloudspot | Gallery URL tracking (paste-in, no API) | MVP |
| Apple App Store / Google Play | Mobile app distribution | MVP |
| DocuSign-style e-signature | Native contract signing (no third-party dependency) | MVP |

### Payment Processing

- All payments processed through Stripe; photographer receives funds minus Stripe's 2.9% + $0.25/card
- No platform surcharge or transaction fee beyond Stripe standard
- Invoice supports: single payment, deposit + balance schedule, custom payment plans
- Payment status: Deposit pending → Deposit received → Balance due → Paid in full
- Automated payment reminders sent at: 7 days before due, 1 day before due, 1 day after missed

### SaaS-Specific Technical Considerations

- Tenant data isolation enforced at database row level (no cross-tenant data leakage)
- PDF generation: serverless function or dedicated service (not synchronous web request)
- Email sequences: background job queue; failures retry 3x with exponential backoff
- Mobile app: React Native or Flutter for shared iOS/Android codebase; offline data stored in local SQLite
- File storage: contracts, PDFs, questionnaire attachments stored in object storage (S3-compatible)

---

## Project Scoping & Phased Development

### MVP Strategy

**MVP Approach:** Problem-solving MVP — the product must solve the core workflow problem (multi-session management + shot list automation) well enough for a photographer to run their entire business on it. It does not need to be visually polished or feature-rich; it needs to be correct for the wedding workflow.

**Resource Requirements:** 1 full-stack developer + 1 mobile developer (or 2 full-stack with React Native), 1 part-time designer for UI/UX; no dedicated DevOps needed (managed hosting on Railway, Render, or Supabase). Budget: $30,000–$60,000 to MVP launch (4–6 month build).

**AppSumo launch window:** November 2026 — off-peak booking season (October–December are low-activity months for photographers); optimal for new tool adoption before the January–June booking surge.

### MVP Feature Set — Phase 1

**Core user journeys supported:** HoneyBook refugee (Sarah), new photographer (Priya), day-of field use

**Must-have capabilities:**
1. Multi-session project timeline with 5 stage types (Inquiry, Engagement, Wedding, Album, Gallery)
2. Stage auto-advance triggers (questionnaire send, email sequence start, deadline creation)
3. Questionnaire builder with photography templates and conditional logic
4. Questionnaire-to-shot-list converter with default wedding ruleset
5. Shot list PDF export (printable, shareable link)
6. Contract builder with native e-signatures
7. Invoice builder with Stripe payment processing
8. Automated email sequences with trigger-based logic and pre-built templates
9. Gallery delivery tracker (URL paste-in, status tracking, auto-reminders)
10. Vendor coordination PDF generator
11. Mobile app (iOS + Android) with offline day-of view
12. HoneyBook Migration Kit and Táve/VSCO Migration Kit (documentation + template import)
13. Dashboard: all active clients by stage, upcoming sessions this week/month

### Post-MVP Features — Phase 2 (Months 4–12)

- Automated migration wizards (programmatic HoneyBook/Táve import)
- AI wedding day timeline generator
- Built-in gallery proofing (eliminating Pixieset dependency for basic galleries)
- Pixellu SmartAlbums integration
- Multi-photographer job assignment workflow (full Shooter role + assignment UI)

### Expansion — Phase 3 (Year 2)

- Built-in gallery hosting (full platform replacement for Pixieset/ShootProof)
- AI shot list enhancement (venue-aware suggestions)
- International markets (UK, Australia, Canada — tax/VAT, currency)
- Portrait and family photography session support (broader TAM)
- Vendor marketplace and referral revenue

### Risk Mitigation

| Risk | Probability | Mitigation |
|------|-------------|-----------|
| AppSumo support overload | High | Cap at 1,500 LTD buyers; hire 1 part-time support from photographer community at launch; self-service docs written by beta users |
| Shot list automation accuracy below expectation | Medium | Beta validation with 20 real weddings before launch; customizable mapping rules ship on day one |
| VSCO improves Workspace rapidly, reducing refugee motivation | Medium | Ship before VSCO stabilizes (target Nov 2026); build community loyalty through beta relationships |
| Photographer onboarding takes >20 min, kills conversion | Medium | User test onboarding with 10 photographers before launch; 20-minute target is explicit success criterion |
| HoneyBook price hike anger fades | Low | Compete on feature fit, not just price; multi-session workflow is a permanent differentiator even after emotional switching motivation cools |

---

## Functional Requirements

### Client & Project Management

- FR1: Photographers can create client projects with linked multi-session timelines containing up to 10 stage slots
- FR2: Photographers can select from 5 default stage types: Inquiry, Engagement Session, Wedding Day, Album Design, Gallery Delivery
- FR3: Photographers can add custom stage names to a project timeline
- FR4: Photographers can assign a date, status (Upcoming / Active / Complete), and notes to each project stage
- FR5: Photographers can mark a stage complete and trigger the next stage's automatic workflows (questionnaire send, email sequence start, deadline creation)
- FR6: Photographers can view all active client projects on a dashboard sorted by upcoming wedding date or current stage
- FR7: Photographers can filter the dashboard by stage type, booking date range, or photographer (studio tier)
- FR8: Photographers can archive completed client projects and access them in a searchable archive
- FR9: Photographers can search clients by name, email, wedding date, or venue

### Questionnaire & Shot List Management

- FR10: Photographers can build custom questionnaires using a drag-and-drop editor with text, multiple choice, checkbox, date, and file upload field types
- FR11: Photographers can apply conditional logic to questionnaire fields (show field X if answer to field Y equals Z)
- FR12: Photographers can configure a questionnaire to auto-send when a linked project stage begins
- FR13: Photographers can use pre-built templates: Engagement Session Questionnaire, Wedding Day Questionnaire, Gallery Delivery Preferences
- FR14: Clients can complete questionnaires via a mobile-optimized web form (no account required)
- FR15: Photographers can convert Wedding Day Questionnaire answers into a structured shot list PDF using the rule-based mapping engine
- FR16: Photographers can customize the shot list mapping rules (which questionnaire field maps to which shot list section)
- FR17: Photographers can export shot lists as PDF, print-ready format, or shareable public link
- FR18: Shot list sections auto-format family groups from structured answers (e.g., "Parents of Bride: [Name] + [Name]" format)

### Contract & Payment Processing

- FR19: Photographers can create contract templates with variable placeholders (client name, wedding date, venue, package price)
- FR20: Photographers can send contracts to clients for e-signature via a secure, no-login link
- FR21: Clients can review and sign contracts electronically from any device
- FR22: Photographers can track contract status: Draft → Sent → Viewed → Signed → Archived
- FR23: Photographers can create invoices with line items, quantities, and pricing
- FR24: Photographers can configure payment schedules: single payment, deposit + balance, or custom multi-payment plans
- FR25: Photographers can accept card payments via Stripe with no platform surcharge beyond Stripe's processing fee
- FR26: Photographers can track payment status: Pending → Deposit Received → Balance Due → Paid in Full → Refunded
- FR27: Photographers can view a revenue dashboard showing paid, pending, and overdue amounts by date range

### Email & Communication Automation

- FR28: Photographers can build automated email sequences triggered by project stage start, payment events, or date-relative triggers (e.g., "7 days before wedding date")
- FR29: Photographers can use pre-built email sequence templates: Inquiry Response, Booking Confirmation, Engagement Session Prep, Wedding Day Reminder (1 week), Gallery Delivery Announcement
- FR30: Photographers can customize email templates with brand logo, colors, and signature
- FR31: Photographers can preview emails before sending or activating a sequence
- FR32: Photographers can view email delivery status per client message: Sent → Delivered → Opened → Clicked
- FR33: Photographers can send one-off emails to clients from within the booking record
- FR34: Automated payment reminder emails send at configured intervals before and after payment due dates

### Gallery & Delivery Tracking

- FR35: Photographers can add a gallery delivery URL (any URL: Pixieset, ShootProof, Pic-Time, Cloudspot, or other) to a client booking
- FR36: Gallery delivery status progresses through: Sent → Viewed → Favorites Selected → Download Complete
- FR37: Photographers can manually update gallery status or trigger client notification from within the booking
- FR38: Platform sends automated reminder email to client if gallery not viewed within 7 days of delivery
- FR39: Photographers can record the date each gallery milestone was reached (delivered, viewed, downloaded)

### Vendor Coordination

- FR40: Photographers can enter vendor contacts in a booking: venue, florist, caterer, DJ, planner, hair, makeup (name, phone, email)
- FR41: Photographers can generate a vendor coordination PDF that includes: all vendor contacts, wedding day timeline (ceremony + cocktail + reception times), venue address, and photographer branding header
- FR42: Photographers can share the vendor PDF as a downloadable link (no CRM login required for vendors) or email attachment
- FR43: Photographers can set the wedding day timeline (arrival, ceremony start, cocktail hour, reception start, last dance) for inclusion in the vendor PDF

### Mobile & Day-Of Experience

- FR44: Photographers can access the day-of view on iOS and Android showing: wedding day timeline, client name and contact, venue address, vendor contacts, and shot list
- FR45: Day-of view data (shot list, timeline, vendor contacts) is cached locally for offline access after the booking is loaded while connected
- FR46: Photographers can mark project stages complete from the mobile app; offline actions queue and sync when connectivity is restored
- FR47: Photographers can add field notes to a booking from the mobile app
- FR48: Photographers can view upcoming sessions this week and next week from the mobile home screen

### User & Account Management

- FR49: Photographers can create an account with email and password and verify via email confirmation link
- FR50: Photographers can reset their password via email link
- FR51: Studio tier (3-user and 5-user plans) can invite additional users by email with role selection (Owner or Shooter)
- FR52: Studio Owners can assign bookings to specific photographers within the studio
- FR53: Shooter-role users can view assigned bookings, shot lists, vendor contacts, and timeline but cannot view financial data (contracts, invoices, payments)
- FR54: Photographers can manage brand settings: studio name, logo, brand colors used in email templates and exported PDFs

### Onboarding & Migration

- FR55: New photographers complete a 4-question onboarding wizard that pre-loads an appropriate workflow profile and starter templates
- FR56: Photographers can import client data from HoneyBook using the provided migration kit (CSV import + template mapping guide)
- FR57: Photographers can import workflow templates from Táve/VSCO Workspace using the provided migration kit
- FR58: Photographers can duplicate any template (questionnaire, email sequence, contract) as a starting point for a new variant

---

## Non-Functional Requirements

### Performance

- Page load time: Dashboard and client list views load in under 2 seconds for 95th percentile under normal load (up to 500 concurrent users)
- PDF generation: Shot list and vendor coordination PDFs generate and are available for download within 5 seconds of request
- Email delivery: Automated emails deliver within 60 seconds of trigger event under normal load; within 5 minutes under peak load
- Mobile offline: Day-of view cached data loads in under 1 second on device without network connectivity
- API response time: All authenticated API endpoints respond in under 500ms for 95th percentile

### Security

- All client data (personal information, contracts, payment records) encrypted at rest using AES-256
- All data in transit encrypted via TLS 1.2+
- Payment card data never stored on platform servers; processed exclusively through Stripe's PCI-DSS Level 1 compliant infrastructure
- E-signature documents stored with tamper-evident audit trail (signer IP, timestamp, document hash)
- Contract shareable links expire after 90 days of signing or can be explicitly revoked by photographer
- Vendor PDF public links can be revoked by photographer at any time
- Session tokens invalidated on password change or explicit logout
- API keys for email delivery provider rotatable without service interruption

### Scalability

- Platform supports up to 2,000 concurrent active users (post-AppSumo LTD cap + MRR subscriptions) without performance degradation
- PDF generation and email delivery handled by horizontally-scalable background worker queues; photographers are not blocked waiting for these operations
- Database designed to support 10,000+ client records per tenant without query degradation
- File storage (contracts, PDFs, attachments) uses scalable object storage; no local disk dependency

### Reliability

- Uptime: 99.5%+ during US business hours (8 AM–10 PM Eastern, Monday–Sunday); planned maintenance windows during 2–4 AM Eastern
- Email delivery: 98%+ delivery rate via transactional email provider; failed deliveries retry 3x with exponential backoff and alert photographer on permanent failure
- Offline mobile data: Day-of view data cached on device after last successful sync; app functions in read-only mode without connectivity
- Background job failures (PDF generation, email sequences): logged, retried up to 3 times, and surfaced to photographer dashboard if all retries fail

### Integration

- Stripe integration: Webhooks handle payment status updates (payment succeeded, payment failed, refund issued) with idempotent processing
- Transactional email provider (Postmark or SendGrid): dedicated sending domain per tenant to protect deliverability; DKIM/SPF/DMARC configured
- Gallery URL tracking: platform-agnostic (any URL accepted); no dependency on gallery provider APIs
- Mobile app: released on Apple App Store and Google Play; minimum supported OS: iOS 15+, Android 10+
- PDF export: generated PDFs viewable in any standard PDF reader; no proprietary format dependency

### Accessibility

- Web application meets WCAG 2.1 Level AA for core photographer-facing workflows (client creation, questionnaire builder, invoice builder, dashboard)
- Mobile app meets Apple Human Interface Guidelines and Android Material Design accessibility standards
- Email templates generated by platform include alt text for images and semantic HTML for screen reader compatibility

---

*PRD completed: 2026-06-07*
*Input sources: Wedding Photography CRM shortlisted idea (Score 89/105, Tier 1 BUILD) + Market Research Report + Product Brief (2026-06-07)*
*Next recommended step: Architecture (`create-architecture` workflow)*
