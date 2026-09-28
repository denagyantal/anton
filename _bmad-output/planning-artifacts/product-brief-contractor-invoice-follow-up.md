---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/contractor-invoice-follow-up-automation.md
  - _bmad-output/planning-artifacts/research/market-contractor-invoice-follow-up-research-2026-09-27.md
workflowType: product-brief
lastStep: 6
project_name: contractor-invoice-follow-up
user_name: Root
date: 2026-09-28
---

# Product Brief: Contractor Invoice Follow-Up Automation

---

## Executive Summary

Independent contractors — HVAC technicians, plumbers, landscapers, electricians, fencers, roofers — run businesses on trust and referrals. They complete a job, send an invoice, and then face an impossible choice: chase the payment and risk the relationship, or let the invoice age and absorb the loss. One-in-four contractors write off $800 or more per month in unpaid invoices simply because "sending the third reminder felt worse than losing the money."

This product solves that with SMS-first, tone-calibrated invoice follow-up sequences that fire automatically when an invoice goes overdue. Contractors connect their Stripe account (or upload a CSV), configure once, and never think about follow-up again. The sequences sound human — friendly on Day 1, polite on Day 4, firm on Day 10, final notice on Day 20 — and pause automatically if the customer replies. When payment clears, a Google review request fires automatically.

The competitive window is open. QuickBooks email reminders are documented as ineffective and embarrassing. CraftBoop has validated the category at $29/month with email-only sequences — but SMS achieves 45% response rates vs email's 6%, and no SMS-first contractor invoice tool exists at an accessible price point. The build is a 2–4 week effort: Stripe webhook + sequence engine + Twilio SMS. The LTD AppSumo slot is unoccupied. The ROI story is the clearest in SaaS: recover one $500 invoice and the product pays for itself for two years.

**The pitch in one sentence:** Automated SMS + email follow-up sequences for contractors after every invoice — friendly → polite → firm → final notice, automatically — so getting paid stops depending on who remembered to text.

---

## Core Vision

### Problem Statement

Contractors invoice after completing work, then have no systematic, human-feeling process for following up when payment doesn't arrive. The problem has three interlocking layers:

1. **Emotional friction.** Chasing a homeowner for payment threatens the referral relationship that built the business. Contractors know that a firm follow-up email to a repeat customer could cost them three future jobs. This fear is rational — and it paralyzes action.

2. **Tool inadequacy.** QuickBooks and FreshBooks offer generic email reminders that contractors describe as corporate dunning notices. Customers filter them as spam. Multiple Ask HN and Reddit threads confirm: QB reminders don't work and some contractors have been told by customers to stop sending them.

3. **Manual alternatives don't scale.** Texting individually from a personal phone is the only thing that works — but it requires remembering, crafting a message that doesn't sound accusatory, and taking emotional ownership of the awkwardness. At 50–200 invoices per month, this breaks down entirely.

The result: contractors leave an average of $17,500 in outstanding invoices at any time, and the average annual cost of late payments reaches $39,406 per company (QuickBooks 2026 Small Business Late Payments Report). A missed $500 invoice on a $2,000 job is a 25% margin evaporation.

### Problem Impact

- **Financial:** 59% of small businesses carry 30+ day overdue invoices (up from 47% year-over-year). Solo contractors writing off $200–800/month are losing 3–10% of gross revenue to avoidable non-payment.
- **Time:** Manual AR follow-up consumes 6–15 hours/week for growing operations — time that operators spend on the job.
- **Emotional:** The compounding stress of unpaid work while materials, insurance, and payroll don't wait is an existential pressure for 1–5 person operations.
- **Relationship damage paradox:** The very avoidance meant to preserve relationships allows resentment to build. Automated, tone-calibrated sequences remove the personal awkwardness and actually preserve relationships better than manual follow-up.

Market validation is multi-source: CraftBoop launched email-only sequences at $29/month and validated paying demand. An adjacent product on r/microsaas confirmed $18K MRR for invoice follow-up tooling. HandyPay reached $1K MRR in under 60 days in the salon/spa adjacent market using in-person direct sales to the same behavioral profile.

### Why Existing Solutions Fall Short

| Tool | Why It Fails Contractors |
|------|--------------------------|
| **QuickBooks Reminders** | Email-only; generic corporate tone; goes to spam; sends to customers who have already paid; described by contractors as "embarrassing"; no pause on reply |
| **CraftBoop** | Email-only (45% response rate for SMS vs 6% for email); positioned for post-job nurture (rebooking, referrals), not invoice-specific collections |
| **Jobber / Housecall Pro** | SMS reminders exist but locked to $129+/month tiers; overkill for solo operators; full FSM platform, not a focused collections tool |
| **FreshBooks / Wave** | Email-only; generic SMB; no contractor-specific tone calibration |
| **Manual WhatsApp** | Works, but doesn't scale; requires remembering; personal phone blurs work/personal |
| **ServiceTitan** | $400+/month enterprise; irrelevant to the SAM |

The gap is specific and defensible: no SMS-first, affordable ($29–59/month), contractor-specific invoice follow-up tool with tone-calibrated sequences exists.

### Proposed Solution

A lightweight SaaS tool that:

1. **Connects to Stripe** (or accepts CSV invoice upload) and monitors invoice due dates
2. **Fires an automated 4-step SMS + email sequence** when an invoice passes its due date
3. **Escalates in tone naturally:** Day 1 (friendly check-in) → Day 4 (polite reminder + payment link) → Day 10 (firm notice) → Day 20 (final notice)
4. **Pauses automatically** when the customer replies (relationship preservation mode)
5. **Sends a Google review request** via SMS when payment is received
6. **Provides a dashboard** showing outstanding invoices, sequence status per customer, and recovery metrics

The tool requires one setup (~15 minutes to connect Stripe and configure the first sequence). After that, it runs entirely in the background.

### Key Differentiators

1. **SMS-first architecture.** SMS achieves 98% open rates and 45% response rates vs email's 20-25% open / 6% response. Text-to-pay invoices collect in under 24 hours for 60–80% of sends. This is a different order of magnitude, not a marginal improvement.

2. **Tone calibration built for contractor relationships.** Templates are pre-written to sound like the contractor wrote them personally — not like a dunning notice. Each step escalates naturally. Contractors can trust the default or customize to match their voice.

3. **Relationship preservation mode.** If a customer replies at any point, the sequence pauses and the contractor is notified. No automated message goes out when a live conversation is happening. This is the single feature that removes the primary contractor objection ("what if they're already dealing with it?").

4. **Zero-touch trigger via Stripe webhook.** No manual action needed after setup. When an invoice passes its due date, the sequence fires. This removes the single biggest failure point: remembering to follow up.

5. **Google review bundled into the payment confirmation.** When Stripe reports payment received, a "thank you + could you leave us a Google review?" SMS fires automatically. Contractors already pay $29–99/month separately for automated review request tools. This is a free second value driver.

---

## Target Users

### Primary Users

**Segment 1: The Relationship-Preserving Solo Contractor**

*Persona: Marcus, 38, HVAC technician, 1-person operation, Phoenix, AZ*

Marcus has built his business on referrals over 8 years. He does quality work, his customers like him, and most pay within a week. But 2–3 per month let invoices sit for 30+ days. Marcus knows who they are, knows they'll pay eventually, but dreads the follow-up text. He's written off invoices ranging from $180 to $650 because "calling felt like asking a friend for money." He uses QuickBooks for invoicing, has tried the automated reminders once, turned them off after a customer complained they sounded corporate.

**Pain intensity:** High. Every written-off invoice is cash Marcus earned but didn't collect.
**Current workaround:** Occasional manual WhatsApp, occasional write-off.
**Trigger to buy:** Hears from another contractor that the tool recovered $400 in one week.
**Aha! moment:** Receives payment notification 6 hours after the Day 1 sequence fires without lifting a finger.
**What he needs:** Something that sounds like him, runs invisibly, and stops when the customer picks up the conversation.

---

**Segment 2: The Growing Crew Operator**

*Persona: Diane, 44, landscaping company owner, 4-person crew, suburban Chicago, IL*

Diane runs 40–80 residential jobs per month. At this scale, AR is a part-time job she doesn't have. Her office manager checks QuickBooks once a week but following up feels awkward, especially for long-term customers. In any given month, 8–15 invoices are more than 14 days overdue. She's using Jobber for scheduling but is on the base tier — SMS reminders require the $129/month plan. The 4-step reminder sequence she wants to run manually takes 3 hours a week she doesn't have.

**Pain intensity:** Very high. At 15 overdue invoices averaging $350, that's $5,250 in receivables she's chasing informally each month.
**Current workaround:** Manual office calls/texts; some invoices aged to 60+ days before being paid or written off.
**Trigger to buy:** Calculates that even recovering 2 invoices per month at $350 covers a year of the product.
**Aha! moment:** Dashboard shows $1,800 in sequences currently running — money she'd otherwise have been manually chasing.
**What she needs:** Jobber integration or CSV import; team inbox view; bulk sequence launch.

---

**Segment 3: The Tech-Forward Solo**

*Persona: Jamie, 29, electrician/low-voltage contractor, Miami, FL*

Jamie already uses Stripe for invoicing, listens to r/sweatystartup on YouTube, and is comfortable with SaaS tools. He's Googled "SMS invoice reminder small business" three times in the past year. He'd sign up for a free trial based on a single Reddit post if the product looked credible. His pain is more latent — he's efficient but losing $300–500/month to invoices he just doesn't get around to following up on.

**Pain intensity:** Moderate but growing as his business scales.
**Current workaround:** Manual texts from his iPhone, with varying consistency.
**Trigger to buy:** A Reddit recommendation with a screenshot of actual payment recovery.
**Aha! moment:** Stripe webhook fires the first sequence automatically; he sees the payment come in without having done anything.
**What he needs:** Quick Stripe OAuth setup; clean mobile-first UI; no fluff.

### Secondary Users

**Accountants and bookkeepers serving contractors.** A bookkeeper managing 10–20 contractor clients would use this as a white-label or multi-client dashboard to run AR follow-up across their entire book of business. This is a V2 persona but worth acknowledging in architecture decisions (multi-tenant from day one).

**Spouses / office managers at contractor businesses.** Often the person who actually runs the invoicing side. They need the same features but may interact primarily via a simple dashboard and notification emails, not SMS setup.

### User Journey

**Discovery:**
→ Contractor posts in r/sweatystartup: "Anyone found a good way to follow up on late invoices without being weird about it?"
→ Comment links to a case study: "I recovered $1,200 in my first month with [product name]"
→ Contractor visits the site, reads the ROI calculator: "If you recover one $400 invoice per month, you make back your annual subscription in 1 month"
→ Free trial CTA — no credit card required

**Onboarding (target: under 15 minutes):**
→ Connect Stripe via OAuth (or upload CSV)
→ See first invoice that's already overdue — system asks "want to start a sequence?"
→ Review the pre-written Day 1 template — edit optional
→ Confirm phone number source (from Stripe customer record)
→ Approve the first send — watch it fire

**First success moment:**
→ Payment notification arrives (via email or in-app) after the Day 1 sequence fires
→ Dashboard shows: "Recovered $450 — sequence completed in 6 hours"
→ This moment is the retention anchor. It must happen within 48 hours of signup.

**Core usage pattern (ongoing):**
→ Stripe invoice goes overdue → sequence fires automatically
→ Contractor checks dashboard once a week to review outstanding sequences
→ Occasionally pauses or customizes a sequence for a specific customer
→ Receives Slack/email notification when a customer replies

**Long-term habit:**
→ Contractor stops thinking about AR follow-up as a task
→ When asked by a peer "how do you handle late payments?" they respond: "[product name] just handles it"
→ Word-of-mouth referral loop activated

---

## Success Metrics

The core value proposition is measurable and direct: contractors recover invoices faster and with less effort. Every metric in the product should trace back to that outcome.

**North Star Metric:** Average days to payment for invoices that enter a sequence (target: reduce from industry average of 28 days to under 12 days within 90 days of signup).

### User Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| Payment recovery rate | % of sequenced invoices paid within 21 days | >60% at Month 3; >70% at Month 12 |
| Time to first payment | Days from sequence start to payment received | <10 days median |
| Days to payment reduction | Before/after comparison per user | >40% reduction |
| Sequence completion rate | % of users who run at least 1 full sequence in first 7 days | >80% |
| Aha! moment conversion | % of users who see a payment recovered within 48 hours | >50% |
| Review request conversion | % of payment-triggered review requests that generate a Google review | >25% |

### Business Objectives

**Month 3:** Validate product-market fit and AppSumo LTD channel
- 100 paying customers (LTD + subscription)
- $3,500 MRR equivalent
- 150 LTD sales at $79 = $11,850 upfront
- 20+ case studies with real dollar recovery numbers
- NPS > 50

**Month 6:** Establish brand in contractor invoice follow-up category
- 250 paying customers
- $8,500 MRR
- Listed in top 3 results for "invoice reminder app for contractors"
- Jobber basic integration live

**Month 12:** Category leadership in SMS-first contractor invoice follow-up
- 600 paying customers
- $22,000 MRR
- <5% monthly churn
- 100+ G2/Capterra reviews (avg 4.5+ stars)
- Adjacent market expansion begun (freelancers, photographers)

### Key Performance Indicators

**Acquisition:**
- New signups per week from Reddit organic (target: 15+ by Month 2)
- AppSumo LTD conversion rate from listing page (target: >2%)
- Cost per acquired customer from Reddit seeding (target: <$10)

**Activation:**
- % of signups who connect Stripe within 24 hours (target: >70%)
- % of connected users who launch first sequence within 48 hours (target: >60%)
- Time to first sequence send (target: <20 minutes from signup)

**Retention:**
- Monthly churn rate (target: <6% at Month 6)
- Weekly active ratio: users who check dashboard or receive automated payment notification (target: >40%)
- 6-month retention rate (target: >65%)

**Revenue:**
- MRR growth rate (target: >20% month-over-month through Month 6)
- Average revenue per user (target: $38/month at Month 6)
- LTD to subscription conversion rate (target: >15% of LTD buyers upgrade to paid monthly within 6 months)

**Product efficacy:**
- Invoices recovered per user per month (target: avg 4 at Month 6)
- Average dollar value recovered per user per month (target: >$1,200)
- Sequence open rate for SMS (target: >90%; email: >40%)
- Sequence response rate for SMS (target: >35%)

---

## MVP Scope

### Core Features

The MVP must prove one thing: that an automated SMS + email sequence recovers invoices that would otherwise go unpaid. Everything else is noise until that's working.

**1. Stripe Invoice Integration**
- OAuth connection to Stripe account
- Auto-detection of overdue invoices (past due date with no payment)
- Pull customer name + phone number from Stripe customer record
- Receive `payment_intent.succeeded` webhook to trigger review request and close sequence

**2. 4-Step Sequence Engine**
- Default sequence: Day 1 (friendly), Day 4 (polite), Day 10 (firm), Day 20 (final notice)
- Configurable delays (contractor can adjust per-sequence or globally)
- SMS channel via Twilio (A2P 10DLC registered)
- Email channel as secondary touch on Days 4 and 10
- Stripe Payment Link embedded in every message
- Pre-written default templates per step (editable but not required)

**3. Relationship Preservation Mode**
- Monitor for inbound SMS reply from customer
- Auto-pause sequence when reply detected
- Notify contractor via email: "[Customer Name] replied to your invoice reminder"
- Contractor can resume, cancel, or modify sequence from dashboard

**4. Google Review Request on Payment**
- When Stripe reports payment received, fire SMS: "Thanks [Name]! Could you take 30 seconds to leave us a Google review? [Google Review Link]"
- Contractor configures their Google review link once in settings
- Can be disabled per-customer if contractor knows relationship won't convert

**5. Dashboard**
- Outstanding invoices with status (not yet due / overdue / in sequence / paid / sequence paused)
- Sequence progress per invoice (which step fired, when, what happened)
- Monthly summary: invoices sequenced, recovered, total $ recovered
- Simple mobile-responsive design (contractors check on phone)

**6. CSV Fallback (for non-Stripe users)**
- Upload CSV with: customer name, phone, email, invoice number, amount, due date
- System creates sequences from CSV data
- This unblocks users on Jobber, QuickBooks, FreshBooks during the Stripe-only phase

**7. A2P 10DLC Registration (infrastructure)**
- Brand and campaign registration with Twilio from Day 1
- Compliant messaging footer on all SMS
- Reply handling infrastructure (STOP keyword → immediate opt-out)

### Out of Scope for MVP

| Feature | Reason Deferred |
|---------|----------------|
| Jobber / Housecall Pro API integration | Adds 3–4 weeks; CSV fallback covers these users at MVP |
| QuickBooks integration | High complexity; Stripe covers the tech-forward segment |
| Multi-user / team accounts | Adds auth complexity; solo operator is the MVP buyer |
| Custom sequence builder (drag-and-drop) | Pre-written templates cover 90% of use cases; customization is V2 |
| AI-generated personalized messages | Not needed to prove core value; adds complexity and cost |
| Dispute detection (AI flags customer questions) | High-value V2 feature; pause-on-reply covers the MVP case |
| Embedded payment advances | Long-term monetization; not the MVP value proposition |
| White-label / accountant dashboard | V2 persona; adds multi-tenancy complexity |
| Mobile app (native) | Mobile-responsive web covers MVP; native app is V2 |
| Analytics beyond basic recovery dashboard | Not needed to prove value |
| Slack / Zapier integrations | Nice-to-have; not core |

### MVP Success Criteria

The MVP is validated when:

1. **Payment recovery works:** At least 60% of sequenced invoices in the first cohort are paid within 21 days
2. **Aha! moment fires reliably:** >50% of users who connect Stripe and launch a sequence receive a payment within 48 hours
3. **Word of mouth activates:** At least 3 unprompted Reddit/review mentions of dollar recovery in Month 1
4. **AppSumo signal:** 100+ LTD sales in the first 30 days of AppSumo listing confirms market demand
5. **Sequence deliverability:** SMS delivery rate >95%; no Twilio compliance blocks; A2P 10DLC approved before launch

The go/no-go signal for scaling beyond MVP: 100 paying customers with >60% invoice recovery rate and at least one customer publicly attributing $500+ in recovered invoices to the product.

### Future Vision

**V2 (Month 4–9): Integration depth and intelligence**
- **Jobber API integration:** Read invoices automatically; no CSV required
- **Housecall Pro integration:** Same
- **QuickBooks basic sync:** Poll for overdue invoices; no webhook required
- **Dispute detection:** AI identifies when customer reply signals a dispute vs. a payment timing question; flags for contractor review with suggested response
- **Tone selector:** Choose between "Friendly," "Professional," or "Firm" sequence style at account level
- **Multi-currency:** Canadian and Australian contractor markets use the same behavioral profile

**V3 (Month 10–18): Platform and monetization expansion**
- **Team accounts:** Multi-user dashboard for 2–10 person operations
- **Accountant/bookkeeper dashboard:** Manage AR follow-up across 10–20 client contractor accounts
- **Real-time cash flow forecast:** "Based on your 12 open sequences, you'll receive ~$4,200 in the next 14 days"
- **Referral program:** Contractor earns $10/month credit for each referred paying user
- **Adjacent markets:** Freelancers (copywriters, designers), photographers, event planners — same problem, same solution, different tone templates

**Long-term (18+ months): Embedded financial services**
- **Invoice factoring / advance:** "Your customer hasn't paid in 30 days — want an advance on this invoice at 3%?" This shifts the revenue model from SaaS to a transaction take rate and increases revenue per customer 5–10x
- **White-label for accounting platforms:** License the SMS sequence engine to mid-market accounting tools that lack SMS capability
- **Industry-specific vertical products:** An HVAC-branded version, a landscaping-branded version — same engine, different positioning, different distribution partnerships

---

## Strategic Notes

**Go-to-market sequence:**
1. Begin A2P 10DLC registration immediately (3–7 business days; blocks SMS launch if delayed)
2. Build MVP (Stripe webhook + sequence engine + dashboard): 2–3 weeks
3. Recruit 5 beta users from r/sweatystartup and r/GeneralContractor via genuine participation
4. Collect 3+ case studies with real dollar recovery numbers
5. Prepare AppSumo listing with screenshots and demo video
6. Launch AppSumo LTD at $79 (target: 200 sales = $15,800 upfront)
7. Post authentic founder story posts in contractor subreddits (no pitch; show results)
8. Begin SEO content: "invoice reminder app for contractors," "SMS payment reminder HVAC"

**Pricing:**
- LTD Tier 1: $59 — up to 50 active invoice sequences/month
- LTD Tier 2: $99 — unlimited sequences + Jobber/HCP integration (V2)
- Monthly: $39/mo (up to 100 invoices) / $59/mo (unlimited)
- Annual: $29/mo equivalent ($348/yr)
- SMS costs at Twilio pass-through + 20% margin (~$0.72/customer/month at 15 invoices/4-step sequence)

**Positioning statement:**
"The only SMS-first invoice follow-up tool built for contractors who care about keeping the relationship — and getting paid."

**Competitive moat:**
The moat is not technical — it's community trust, tone calibration templates refined from real contractor feedback, and first-mover brand recognition in the "contractor invoice follow-up via SMS" category. Technical moat comes later via Jobber/HCP integrations and AI-powered dispute detection.

---

*Product Brief for: Contractor Invoice Follow-Up Automation*
*Prepared: 2026-09-28*
*Based on: Shortlisted idea (Score: 91/105, Tier 1) + Comprehensive market research (2026-09-27)*
*Status: Ready for PRD*
