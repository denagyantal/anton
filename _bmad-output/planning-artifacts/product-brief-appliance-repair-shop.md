---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/appliance-repair-shop-fsm.md
  - _bmad-output/planning-artifacts/market-research-appliance-repair-shop.md
workflowType: product-brief
lastStep: 5
product_name: appliance-repair-shop
research_topic: appliance-repair-shop-fsm
user_name: Root
date: 2026-06-19
---

# Product Brief: Appliance Repair Shop FSM (Parts + Warranty)

<!-- Generated autonomously from shortlisted idea + market research. All steps completed. -->

---

## Executive Summary

Independent appliance repair shops — the 37,000+ businesses in the US run by owner-operators fixing refrigerators, washers, and dishwashers — are stuck in operational chaos that no existing software adequately solves. They manage jobs that pause for days while parts ship, track warranty claims on spreadsheets, and look up part numbers by leaving whatever app they're in. Generic field service tools (Jobber, Housecall Pro, Workiz) were built for HVAC and plumbing; they treat every job as a straight line from scheduled to done. The appliance repair workflow has a mandatory "waiting for part" pause that no affordable tool handles.

**The product** is a purpose-built field service management (FSM) tool for independent appliance repair shops, priced at $49/month flat (no per-tech fees) or $79 as a lifetime deal on AppSumo. It does four things generic tools cannot: tracks jobs through a "waiting for part" status with distributor, part number, ETA, and automatic SMS to the customer when the part arrives; provides inline parts lookup by model number (searching RepairClinic and PartSelect without leaving the job ticket); logs OEM warranty claims with claim number, submission date, expected reimbursement, and follow-up reminders; and maintains per-appliance service history (model number, serial number, purchase date, full repair history) per customer.

The market is niche by design: ~26,000 shops are potential software customers, and Rossware ($150/month) proves they'll pay for appliance-specific tools. The gap is an affordable, modern tool with parts + warranty workflows. A 300-shop launch at $49/month = $14,700 MRR within Year 1; 800 shops = $39,200 MRR. Not a venture-scale unicorn — a profitable niche SaaS built to reach $500K–$2M ARR.

---

## Core Vision

### Problem Statement

Independent appliance repair shops cannot manage their actual workflow with any affordable software. The fundamental difference between appliance repair and other trades is the **parts-blocked job**: a technician diagnoses a broken washing machine, orders a replacement control board from a distributor, and the job then sits open for 3–14 days waiting for delivery. No affordable FSM tool ($49–$200/month) has a first-class "waiting for part" state. Jobs linger in "in progress" with no ETA tracking, no customer notification when the part arrives, and no dispatcher visibility into what's blocked versus what's active.

The second workflow gap is OEM warranty claim tracking. Authorized service centers (shops certified to repair in-warranty Samsung, LG, or Whirlpool appliances) must submit claims to OEM warranty portals, log claim numbers, track expected reimbursements, and follow up when payment is delayed. Every shop doing warranty work does this entirely in spreadsheets because no affordable FSM tool has warranty claim fields.

The third gap is appliance identity. Unlike HVAC (where the system is installed at the property), appliance repair means multiple machines per customer, each with its own model number, serial number, purchase date, and repair history. Generic FSM tools track customers and jobs but not the appliance itself.

### Problem Impact

- **Parts chaos**: 46% of shops cite parts management as a top operational challenge. A technician who loses track of a parts order forces the customer to call repeatedly for updates — damaging the relationship and the shop's reputation.
- **Revenue leakage from missed warranty reimbursements**: An authorized service center doing 30 warranty jobs/month at $150/claim reimbursement = $4,500/month in expected revenue. Missed follow-ups on pending claims mean real money left on the table.
- **Customer dissatisfaction from "parts limbo"**: When a customer's fridge has been broken for 12 days and they call for the fourth time asking "did my part come in?", the shop has already lost the repeat business.
- **Scheduling chaos**: Dispatchers cannot separate "waiting for part" jobs from truly schedulable work. They try to keep this in their head, on sticky notes, or in spreadsheets — all of which break as the shop grows.
- **High switching friction from generic tools**: Shops that adopt Jobber or Housecall Pro find they must maintain a parallel spreadsheet for parts orders anyway — negating the cost of the software.

### Why Existing Solutions Fall Short

| Solution | Price | Core Gap |
|----------|-------|----------|
| **ServiceTitan** | $250–$500/tech/month | Enterprise-grade complexity; explicitly "not optimized for 3 or fewer technicians"; $25,000 implementation cost |
| **Workiz** | $187–$325/month (3 users) | No parts-on-order status; no OEM warranty tracking; no model/serial history; per-user pricing |
| **Housecall Pro** | $79–$329/month | Generic FSM for HVAC/plumbing; no appliance-specific fields; appliance is secondary market |
| **Jobber** | $39–$599/month | No parts lookup; no model/serial tracking; no OEM warranty workflow |
| **Rossware** | $150/month | Closest purpose-built competitor; dated UI; no inline parts lookup; $150/month too high for solo/micro shops; basic warranty section, not OEM-portal integrated |
| **Orderry** | $19–$25/month | Generic repair shop tool; no appliance fields; no parts lookup; no OEM warranty |
| **ServiceWorks** | Low/unknown | Has some parts inventory; unclear depth of parts API; no confirmed OEM warranty tracking; low market visibility |

The competitive gap is precise: there is **no product under $100/month** that is purpose-built for appliance repair and handles parts-blocked job status + OEM warranty claim tracking + per-appliance history. This is the whitespace.

### Proposed Solution

A mobile-first field service management tool designed specifically for how appliance repair shops work — not how HVAC shops work.

**Core experience:** A technician opens a job ticket. The ticket has a model number field and pulls up the full repair history for that appliance (if the customer has been in before). After diagnosing the problem, they can type the model number into a parts search and get results from RepairClinic or PartSelect without leaving the app. When a part needs to be ordered, they set the job to "Waiting for Part" with the distributor name, part number, order date, and ETA. The dispatcher's queue now cleanly separates "blocked on parts" jobs from schedulable ones. When the part arrives, one status change triggers an automatic SMS to the customer: "Your part is in — we'll call to schedule your repair." For OEM warranty jobs, there's a dedicated warranty claim section in every ticket: claim number, submission date, expected reimbursement amount, and a reminder when the follow-up date arrives.

**The shop owner gets:** flat-rate pricing ($49/month for the whole shop, not $30/tech/month), a mobile app that works in the field, and a tool that actually understands that appliance repair has a parts waiting phase.

### Key Differentiators

1. **Inline parts lookup by model number** — The only FSM tool that lets a technician search RepairClinic and PartSelect by model number from within the job ticket. No competitor at any price offers this today.

2. **First-class "Waiting for Part" job status** — Not just a custom label — a discrete status with distributor, part number, order date, ETA, and a trigger for customer SMS on arrival. Generic tools have a text field; this has a workflow.

3. **OEM warranty claim tracker** — Log claim number, OEM portal, submission date, expected reimbursement, and follow-up reminder date. 100% manual in all affordable tools today. For authorized service centers, this is the single feature that most directly protects revenue.

4. **Per-appliance service history** — Model number, serial number, purchase date, and complete repair history per appliance per customer. When a customer calls about their 2019 LG washer, the technician knows every job ever done on it within seconds.

5. **Flat-rate shop pricing** — $49/month for the entire shop. The #1 adoption barrier for small shops is per-technician pricing. Removing this removes the objection.

---

## Target Users

### Primary Users

**Segment 1: The Solo Owner-Operator ("Marcus")**

Marcus is 47, runs a one-man appliance repair business in a mid-sized city, does 8–15 jobs per week, and has been in the trade for 20 years. He's the technician, dispatcher, and bookkeeper rolled into one. His wife handles invoicing from home two evenings a week. He currently tracks jobs on a legal pad and uses Google Calendar for scheduling. Parts orders are tracked in a spiral notebook on the passenger seat of his van.

- **Current pain:** Marcus has missed two warranty reimbursements this year because he forgot to follow up on claims. He's had three customers call asking about their parts because he couldn't quickly tell them the status. He knows he needs software but ServiceTitan is $300/month and "I'm not paying that for a computer program."
- **Success vision:** Marcus wants to open his phone, see exactly which jobs are waiting for parts and when they're expected, get an alert when something needs follow-up, and have the whole shop on one flat monthly fee that doesn't make him feel punished for adding a second tech someday.
- **Channel:** Facebook groups ("Appliance Repair Business Owners"), r/appliancerepair, word-of-mouth from supply house.
- **Budget:** Strong LTD candidate at $79; would pay $49/month if the product solves parts chaos.

**Segment 2: The Growing Shop Manager ("Rita")**

Rita is 39, owns a 5-technician shop that is authorized by Samsung and LG to perform warranty repairs. She has an admin assistant who dispatches and handles customer calls. She uses Workiz but finds it inadequate: parts orders are tracked in a shared spreadsheet, warranty claims are logged in a Google Sheet, and her dispatcher spends 20 minutes every morning figuring out which jobs are blocked on parts.

- **Current pain:** Rita is losing an estimated $2,000/month in uncollected warranty reimbursements because claims aren't tracked well enough to follow up reliably. She needs a tool that understands the appliance repair workflow, not one designed for a plumber.
- **Success vision:** Rita wants a single tool that tracks parts-blocked jobs separately from active jobs, automatically alerts her when warranty claim follow-up is due, and gives her technicians field access to parts lookup and job history on their phones.
- **Channel:** ASTI trade association network, ApplianceRepairBusiness.com forum, AppSumo.
- **Budget:** $49–$99/month; high willingness-to-pay for warranty claim features specifically.

### Secondary Users

**The Technician in the Field**

For shops with multiple technicians, field techs are secondary users of the mobile app. They need to: look up parts by model number while on-site, update job status (including setting "Waiting for Part" with part details), and view appliance history before arriving at a customer's home. They do not manage billing or warranty claims — that's the office function.

**The Shop Admin / Dispatcher**

In 3–10 tech shops, an admin or dispatcher manages the scheduling queue. Their primary need is a clean view of: which jobs are active, which are blocked on parts (and when the part is expected), and which need to be rescheduled when a part arrives. The current "parts limbo" status in generic tools makes their job harder; a first-class status makes it easier.

### User Journey

**Discovery:**
Both Marcus and Rita reach the product through the same trigger: a painful operational failure (lost parts order, missed warranty reimbursement, angry customer). They Google "appliance repair software" or ask in a Facebook group. They land on a comparison article or a community post where someone recommends a tool that actually handles the parts workflow. The AppSumo listing or the $49/month flat-rate pricing page confirms the price is within reach.

**Onboarding:**
Marcus signs up for the free trial, creates his first job ticket, and immediately notices the model/serial number field and the "Waiting for Part" status option. He enters one real job, sets the status to "Waiting for Part," and types in the part number from the notebook on his van seat. He sees the job appear in a "Parts Pending" queue. The aha moment is within the first 10 minutes.

Rita's onboarding is slightly heavier: she imports her customer list (CSV), sets up her tech accounts, and walks through the warranty claim log on a current open warranty job. Her aha moment is when she realizes the warranty claim follow-up reminder will fire automatically.

**Core Usage:**
- Marcus opens the app in the morning, sees his "Parts Pending" queue, and knows which jobs he's waiting on without touching his spiral notebook.
- Rita's dispatcher starts the day with a filtered view showing only schedulable jobs — the parts-blocked ones are in a separate queue with ETAs.
- Technicians use the in-app parts search on-site when they need a part number for a model they haven't worked on before.

**Success Moment:**
- Marcus: "I got an SMS reminder to follow up on the Samsung warranty claim before it expired. I collected $240 I would have missed."
- Rita: "My dispatcher finally doesn't have to maintain a separate spreadsheet. The whole parts queue is right there."

**Long-term:**
The tool becomes the system of record for every job, every appliance, every part, and every warranty claim in the shop. Shops that onboard successfully become evangelists in trade forums and supply house networks — the same channels where they first heard about the product.

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| Parts workflow adoption | % of jobs that use "Waiting for Part" status (vs. custom text) | >60% of eligible jobs within 30 days of onboarding |
| Parts lookup usage | # of in-app parts searches per active shop per week | ≥3 searches/week for shops with parts-heavy work |
| Warranty claim logging | # of warranty claims logged per authorized service center per month | ≥5 claims/month (baseline estimate for typical authorized shop) |
| Customer SMS delivery | % of "part arrived" status changes that trigger successful customer SMS | >95% delivery rate |
| Appliance history depth | Average number of appliances tracked per customer per active shop | >2 after 60 days (validates per-appliance feature use) |

**Core activation metric:** A shop is "activated" when they have set a job to "Waiting for Part" status with at least a distributor name and part number filled in. This is the first moment they're using something no competitor offers.

### Business Objectives

**3-Month Objectives:**
- 50–150 paying shops (monthly or LTD)
- AppSumo launch completed with 200–400 LTD sales
- Net Promoter Score (NPS) ≥ 30 from beta cohort
- Churn rate < 15%/month for monthly subscribers

**12-Month Objectives:**
- $10,000–$25,000 MRR from monthly subscribers
- Total customer base: 400–700 active shops (including LTD holders)
- Presence established in target communities (r/appliancerepair, Facebook group, ASTI network)
- 20+ G2 / Capterra reviews with ≥4.0 average rating
- Customer acquisition cost (CAC) < $150 via community/content channels

**24-Month Objectives:**
- $35,000–$60,000 MRR
- Parts referral/affiliate revenue contributing an additional $2,000–$8,000/month
- QuickBooks integration reducing churn for accounting-focused shops
- Top 3 organic ranking for "appliance repair software" keyword

### Key Performance Indicators

| KPI | Measurement Method | Target |
|-----|-------------------|--------|
| Monthly Recurring Revenue (MRR) | Stripe/billing system | $10K by Month 6; $25K by Month 12 |
| Monthly churn rate | (Cancellations / Start-of-month subscribers) × 100 | <5% by Month 6 (early churn will be higher) |
| AppSumo LTD sales | AppSumo dashboard | 200–500 units during launch window |
| Trial-to-paid conversion | (Paid signups / Trial starts) × 100 | >15% |
| Community-sourced signups | UTM tracking on community links | >40% of new signups from community channels |
| Activation rate | % of trials that reach "first Waiting for Part job created" | >50% within 7 days of signup |
| Parts lookup searches | In-app event tracking | ≥500 total searches/month by Month 3 |
| Warranty claims logged | In-app event tracking | ≥200 claims/month by Month 6 (growing with authorized shop base) |
| G2/Capterra review count | Manual tracking | 20+ by Month 12 |
| Support ticket volume | Help desk system | <2 tickets/shop/month (indicates ease of use) |

---

## MVP Scope

### Core Features

These are the features that must work at launch. Every feature below directly addresses one of the three primary pain points (parts-blocked job status, OEM warranty claim tracking, per-appliance history) or removes the primary adoption barrier (per-tech pricing).

**1. Job Tickets with Appliance Identity**
- Model number and serial number fields on every job ticket
- Appliance "profile" that persists across jobs for the same appliance (identified by model + serial or customer + appliance description)
- Full repair history per appliance, visible when creating a new job for the same appliance
- Purchase date field for appliance (for warranty eligibility reference)

**2. Parts-on-Order Job Status**
- Discrete "Waiting for Part" job status (separate from In Progress, Scheduled, Completed)
- Required fields when setting this status: distributor name, part number, order date, ETA
- Optional: tracking number, notes
- Dispatcher queue view: filterable by status, with "Waiting for Part" shown as a separate group
- ETA overdue alert: flag jobs where ETA has passed and status is still "Waiting for Part"

**3. Customer SMS Notification on Part Arrival**
- When job status changes from "Waiting for Part" to any active status (or to a dedicated "Part Arrived" sub-status), trigger automatic SMS to customer
- Default message template: "Good news — your part has arrived at [Shop Name]. We'll call soon to schedule your repair."
- Customizable message per shop
- SMS delivery confirmation logged in job timeline

**4. OEM Warranty Claim Log**
- Warranty claim section on job tickets (toggle on/off per job)
- Fields: OEM/brand (Samsung, LG, Whirlpool, GE, Bosch, etc.), claim number, submission date, expected reimbursement amount, claim status (submitted / pending / paid / disputed)
- Follow-up reminder date: set a date for follow-up; system sends in-app notification and optional email alert
- Warranty claim summary view: all open claims across all jobs, sortable by status and follow-up date
- Reimbursement received date (to close out the claim)

**5. Parts Lookup (In-App Web View)**
- Model number entered on job ticket → "Search Parts" button
- Opens RepairClinic and/or PartSelect in an embedded web view pre-filled with the model number
- Phase 1: web view with pre-filled URL (no full API integration required)
- Single tap to copy a part number from the web view back into the job ticket's parts field

**6. Flat-Rate Invoicing with Parts Markup**
- Create invoice from job ticket with labor line items and parts line items
- Parts markup calculation: enter wholesale cost, apply markup % → calculates retail price
- Default markup % configurable per shop
- PDF invoice generation
- Basic payment tracking (paid/unpaid/partial)

**7. Flat-Rate Pricing and Multi-Tech Access**
- $49/month for the entire shop (no per-technician seats)
- Owner + unlimited technicians on the same plan
- Technician mobile access: view assigned jobs, update status, access appliance history, use parts lookup
- Owner/admin full access: all jobs, all invoices, warranty claim summary, settings

**8. Mobile-First UI**
- Progressive web app (PWA) or native mobile — technicians must be able to use all core features from an iPhone or Android phone in the field
- Offline tolerance: job details and status updates should queue when connectivity is poor (common in basements/garages)

### Out of Scope for MVP

These features are explicitly deferred. They are valuable but not necessary to solve the core problem and launch with paying customers.

| Deferred Feature | Reason for Deferral |
|-----------------|---------------------|
| Direct parts ordering API (place order from within app) | Requires formal partnership/API with RepairClinic/PartSelect; Phase 1 web view achieves 80% of the value |
| OEM warranty claim auto-submission | Requires OEM-specific portal integrations (Samsung, LG, Whirlpool each have different APIs/portals); Phase 1 is logging, not submission |
| QuickBooks integration | Important for accounting but not the core workflow gap; defer to avoid 6-week scope expansion |
| GPS dispatch / route optimization | Relevant for multi-tech shops but not the primary pain; generic tools do this adequately |
| Customer portal / self-scheduling | Nice to have; not a pain point for the target segment |
| Inventory management (stock on hand) | Relevant for shops that stock parts; most order per-job; defer to Phase 2 |
| Full parts API integration | Blocked by lack of public API from RepairClinic/PartSelect; negotiate partnership post-launch |
| Email marketing / review generation | Valuable but not MVP; focus on core workflow first |
| Multi-location / franchise management | Out of scope for 1–10 tech independent shop target |
| Reporting and analytics dashboard | Basic payment tracking is MVP; full analytics is Phase 2 |

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Activation**: ≥50% of trial shops set at least one job to "Waiting for Part" status with part details within 7 days of signup
2. **Revenue**: $5,000 MRR from monthly subscribers OR 150+ AppSumo LTD sales within the first 60 days of launch
3. **Retention**: Monthly churn rate < 15% at Month 2 (early cohort; most shops that onboard will know within 30 days if the tool fits)
4. **Satisfaction**: NPS ≥ 25 from the first 30 paying shops surveyed
5. **Core workflow coverage**: All 3 primary pain points (parts-blocked status, warranty claim log, appliance history) are used by ≥70% of active shops within the first 60 days

If these criteria are met, proceed to Phase 2 (QuickBooks integration, parts API partnership, warranty claim submission helpers).

### Future Vision

**Phase 2 (Month 4–12): Integration and Depth**
- **QuickBooks sync**: Auto-send paid invoices to QuickBooks; import customer list from QuickBooks. Reduces admin burden for the ~65% of small shops using QuickBooks.
- **Parts API partnership**: Negotiate affiliate/referral relationships with RepairClinic, PartSelect, and Parts Town. Enable one-click part ordering from within the job ticket (with referral revenue to the product). This converts the parts lookup feature into an economic moat.
- **OEM warranty claim submission helpers**: Step-by-step guides within the claim log for Samsung, LG, Whirlpool, and GE warranty portal submission. Not full auto-submission, but structured guidance that reduces the time to file from 15 minutes to 3 minutes.
- **Parts inventory tracking**: Allow shops to log parts kept in stock (e.g., commonly-used motors, belts, switches). Reduce "order first" friction for shops with a small inventory.

**Phase 3 (Year 2): Platform and Community**
- **Technician performance reporting**: Jobs completed per tech, average job value, parts margin per tech.
- **OEM warranty claim auto-submission**: Build authenticated integrations with Samsung SmartCare, LG ServiceNet, and Whirlpool's warranty portal — auto-submit claims, pull payment status. Premium tier at $99/month for authorized service centers.
- **Parts referral revenue**: If affiliate volume justifies it, negotiate direct wholesale pricing with parts distributors; offer shops a "buy through us, save 5%" option (revenue sharing model).
- **Right-to-repair market expansion**: As right-to-repair legislation expands the volume of independent repair work, expand marketing to electronics repair and small appliance repair shops using the same tool.
- **Expansion to Canada and UK**: Both have comparable independent appliance repair markets and similar absence of purpose-built affordable tools.

**Long-Term Vision (Year 3+):**
The tool becomes the operating system for the independent appliance repair trade — the platform that shops rely on for job management, parts sourcing, warranty management, and customer communication. Network effects emerge as parts ordering volume creates leverage with distributors, and the aggregated parts data (which parts fail most often on which models) becomes a unique asset. The platform could eventually offer predictive parts stocking recommendations based on model failure rates seen across the customer base.

---

## Appendix: Competitive Positioning Summary

```
                    APPLIANCE-SPECIFIC
                           |
           Rossware ($150) |
                           |
EXPENSIVE ─────────────────┼───────────────── AFFORDABLE
    Workiz ($187+)         |  ★ THIS PRODUCT ★
    HCP ($79–$329)         |   $49/mo flat-rate
    ServiceTitan ($250+)   |   Parts + Warranty
                           |
                       GENERIC
```

**The single-sentence positioning:** The only FSM tool under $100/month that understands appliance repair jobs don't end until the part shows up.

---

## Appendix: Go-to-Market Summary

| Phase | Timeline | Action |
|-------|---------|--------|
| Beta | Month 1–2 | 20–50 shops from Facebook group + Reddit; validate core workflow |
| AppSumo Launch | Month 3–4 | $79 LTD; coordinate with community for reviews and Q&A |
| MRR Growth | Month 4–12 | Community flywheel + content SEO ("appliance repair software") |
| Parts Partnerships | Month 6+ | Negotiate with RepairClinic, PartSelect, Parts Town |

**Primary channels:** r/appliancerepair, "Appliance Repair Business Owners" Facebook group, ApplianceRepairBusiness.com forum, ASTI network, AppSumo

**Pricing:**

| Plan | Price | Notes |
|------|-------|-------|
| Monthly (whole shop) | $49/month | Primary revenue |
| Annual (whole shop) | $470/year (~$39/month) | Reduces churn |
| LTD (AppSumo) | $79 one-time | Acquisition + validation |
| LTD Tier 2 (power users) | $149 one-time | OEM service centers |
