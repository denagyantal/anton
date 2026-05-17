# Idea Evaluation - 2026-05-17

**Sources**: reddit-2026-05-17, hn-indiehackers-2026-05-17, competitor-analysis-2026-05-17, trends-2026-05-17
**Evaluator**: Idea Evaluator Agent

---

## Tier 1: Strong Opportunities (Score 75+)

### Field Service Management for Micro Trades — Score: 101/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $9B valuation; 6.5M+ skilled trades workers US; 500K+ owner-operators |
| Competitor Weakness | 5/5 | ServiceTitan excludes ≤3-tech shops (stated policy); HCP $59→$189 cliff at first hire; Jobber one-way QBO sync; FieldLedgr/FieldFlow both launched this quarter (0 comments = distribution gap not product gap) |
| LTD Viability | 5/5 | $79 LTD vs $468-2,268/yr competitors; flat-rate pricing unlocks AppSumo unlike per-seat models |
| No Free Tier | 5/5 | Average HVAC contractor misses 27% of inbound calls — this costs real money |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/Electricians, r/sweatystartup; HVAC-Talk; trade FB groups |
| Content Potential | 4/5 | "ServiceTitan alternative", "HVAC software small business", "affordable field service" |
| AppSumo Fit | 5/5 | Flat pricing enables LTD; no peer competitor has done AppSumo; 500K+ addressable |
| Review Potential | 4/5 | High-emotion pain (BBB "NEVER BEEN ONBOARDED, paid 1 year") → viral reviews |
| MRR Path | 5/5 | FSM → AI dispatch bolt-on → payment processing → insurance referrals |
| Build Feasibility | 4/5 | Schedule + dispatch + mobile job card + invoice + QB sync; 3-4 week MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring, blue-collar, VC-ignored |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Ship MVP: scheduling, quote-to-invoice, GPS dispatch, QBO sync. Flat $49-79/mo for up to 5 techs. No per-seat fees.
**Risks**: (1) Jobber/HCP launch stripped-down tiers; (2) QBO API maintenance ongoing; (3) Trade-specific pricebook data per vertical
**Key Source Links**:
- [ServiceTitan Complaints — FieldCamp](https://fieldcamp.ai/reviews/servicetitan/)
- [Jobber Pricing — FieldCamp](https://fieldcamp.ai/reviews/jobber/)
- [HCP vs Jobber Pricing](https://aplosai.com/blog/housecall-pro-vs-jobber)
- [FieldLedgr Show HN](https://news.ycombinator.com/item?id=47668698)
- [FieldFlow Show HN](https://news.ycombinator.com/item?id=47294092)
**Signal Frequency**: 60+ mentions across 60+ days — strongly increasing

---

### Property Management for Small Landlords — Score: 100/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 17M+ individual landlords US; AppFolio/Buildium/TurboTenant prove market; BiggerPockets 2M+ |
| Competitor Weakness | 5/5 | AppFolio 50-unit minimum hard wall; Buildium $297/mo effective; Innago ACH 7+ day delays; zero competitors verify state compliance for late fees/deposits |
| LTD Viability | 5/5 | $79 LTD vs $99-204/yr; landlord software ABSENT from AppSumo catalog = first-mover |
| No Free Tier | 3/5 | TurboTenant/Innago/Avail all free; key differentiator is compliance + accounting |
| Channel Access | 5/5 | r/Landlord (500K+), r/realestateinvesting (500K+), BiggerPockets (2M+) |
| Content Potential | 5/5 | "landlord software", "AppFolio alternative", "small landlord property management" |
| AppSumo Fit | 5/5 | Landlord software completely absent from AppSumo; real estate investors love LTDs |
| Review Potential | 4/5 | High pain (HVAC inspection forgotten → fine); landlords actively discuss software |
| MRR Path | 5/5 | LTD → $19/mo → per-unit; Plaid income verification upsell $5-10/screening |
| Build Feasibility | 4/5 | Rent collection + maintenance portal + lease storage + expense log; 4-6 week MVP |
| Boring Business Bonus | 4/5 | Unglamorous professional service; accidental landlord demographic |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build MVP with flat-rate, state-specific late fee compliance checker as key differentiator vs all competitors. Free for ≤5 units, $19/mo above.
**Risks**: (1) Free tier competitors "good enough" for some; (2) Payment processing compliance; (3) 50-state legal content upkeep
**Key Source Links**:
- [Small Landlord Software Comparison](https://rentlatefee.com/blog/best-property-management-software-small-landlords)
- [BiggerPockets — Innago Thread](https://www.biggerpockets.com/forums/12/topics/1115538-tired-of-innago)
- [Reddit Landlord Property Management](https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691)
- [State Compliance Gap — RentLateFee](https://rentlatefee.com)
**Signal Frequency**: 60+ mentions across 60+ days — strongly increasing

---

### Auto Repair Shop Management — Score: 100/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 160K-280K independent shops; Shopmonkey $110M raised; AutoLeap $53M Series B |
| Competitor Weakness | 4/5 | Shopmonkey v2.0 "nightmare, features removed"; Mitchell 1 Windows-only + BBB billing fraud; Tekmetric no native QBO; $33-$179/mo dead zone confirmed |
| LTD Viability | 4/5 | $89 LTD vs $2,148+/yr Shopmonkey; DVI photo storage modest cost |
| No Free Tier | 4/5 | ARI $30/mo too basic; shops motivated to pay for DVI + SMS that increase ARO |
| Channel Access | 4/5 | r/MechanicAdvice, garagejournal.com, Facebook "Independent Auto Repair Shop Owners" |
| Content Potential | 4/5 | "auto repair shop software", "Mitchell 1 alternative", "Shopmonkey alternative" |
| AppSumo Fit | 3/5 | No mainstream auto repair tool has run AppSumo = first-mover category |
| Review Potential | 4/5 | Shops leave reviews on G2, Capterra actively |
| MRR Path | 4/5 | DVI upsell, parts ordering integration, AI service advisor |
| Build Feasibility | 3/5 | VIN lookup + DVI + parts catalog + QBO sync; 5-8 week full MVP |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring, blue-collar, non-glamorous |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Key differentiator: dedicated shop phone number (Twilio), offline-capable PWA, native QBO sync (no Back Office bridge), flat $79/mo no contracts.
**Risks**: (1) Shopmonkey well-funded ($110M); (2) DVI/parts API complexity; (3) Shop loyalty to legacy systems
**Key Source Links**:
- [Auto Repair Software Comparison](https://trustedlocalauto.com/blog/shop-management-software-comparison-autoleap-mitchell-shopmonkey)
- [Shopmonkey Reviews](https://www.softwareadvice.com/auto-repair/shopmonkey-profile/reviews/)
- [Garage Journal Forum — Software Discussion](https://www.garagejournal.com/forum/threads/which-auto-repair-shop-software.494142/)
- [CSI Top Shop Management Software](https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown)
**Signal Frequency**: 50+ mentions across 60+ days — stable at high level

---

### Landscaping / Lawn Care Business OS — Score: 99/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 600K+ lawn care businesses US; Yardbook 100K+ free users = massive demand signal; $130B industry |
| Competitor Weakness | 5/5 | Yardbook free but dated/Android-only; Service Autopilot post-Xplor acquisition = "single largest switching moment"; LMN $297-598/mo + buggy crew app 2.7★; Jobber not lawn-specific |
| LTD Viability | 5/5 | $79-99 LTD strong; single-application workflows = low ongoing cost |
| No Free Tier | 4/5 | Yardbook free creates floor but lacks routing, iOS, job costing |
| Channel Access | 5/5 | r/lawncare (300K-918K+), LawnSite.com (1M+), "Lawn Care Business Owners" FB (200K+) |
| Content Potential | 5/5 | "lawn care software", "service autopilot alternative", "yardbook alternative" |
| AppSumo Fit | 5/5 | Price-conscious operators; strong referral network; SA defector wave active NOW |
| Review Potential | 4/5 | Active community reviews; LawnSite.com discussion threads |
| MRR Path | 5/5 | Route optimization premium; chemical compliance tracking; AI quoting |
| Build Feasibility | 4/5 | Drag-and-drop scheduling + quote-to-invoice + route map + QBO/Xero sync; 4-5 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring, seasonal, blue-collar |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: $39/mo flat unlimited crew; beat Yardbook on UX, beat Jobber on price. Route optimization at base tier (not locked). iOS+Android crew app day 1.
**Risks**: (1) Seasonal revenue pattern; (2) Yardbook's free tier creates adoption barrier; (3) Chemical compliance data per state
**Key Source Links**:
- [LawnSite Financial + CRM Thread](https://www.lawnsite.com/threads/looking-for-financial-and-crm-software-for-small-business.519136/)
- [LawnSite Software Recommendations](https://www.lawnsite.com/threads/lawn-care-software-recommendations.500583/)
- [Jobber Lawn Care Software](https://www.getjobber.com/academy/lawn-care/best-lawn-care-software/)
- [Yardbook](https://www.yardbook.com/)
**Signal Frequency**: 60+ mentions across 60+ days — strongly increasing

---

### Cleaning Service Management — Score: 98/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr; $100K+ MRR case studies (IH 2020); Sweepy $40K MRR B2C |
| Competitor Weakness | 4/5 | ZenMaid per-seat; Swept "unusable"; BookingKoala buggy; $15-30/mo tier gap unoccupied |
| LTD Viability | 5/5 | $69-99 LTD; simple recurring workflow = low ongoing infrastructure |
| No Free Tier | 3/5 | Some free scheduling exists; photo verification and client portal paid |
| Channel Access | 4/5 | r/CleaningBusiness, r/EntrepreneurRideAlong, FB cleaning groups (50K+) |
| Content Potential | 4/5 | "cleaning business software", "ZenMaid alternative" |
| AppSumo Fit | 4/5 | Cleaning business owners are AppSumo demographic; price-sensitive |
| Review Potential | 3/5 | Less review-oriented than B2B SaaS |
| MRR Path | 4/5 | SMS, payment processing, route optimization premium; photo audit AI |
| Build Feasibility | 5/5 | Simplest workflows of any vertical; 3-4 week MVP |
| Boring Business Bonus | 5/5 | Cleaning = deeply boring, highest boring business score |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: "ZenMaid at half the price with AI-powered quality photos." 1-10 cleaners target. Photo verification per room as key differentiator.
**Risks**: (1) ZenMaid dominant in community; (2) Per-cleaner pricing creates growth resistance; (3) High staff turnover in cleaning industry
**Key Source Links**:
- [ZenMaid IH Podcast ($200K+ MRR)](https://www.indiehackers.com/podcast/119-mikael-le-meur-of-zenmaid)
- [Cleaning SaaS $0-$100K MRR](https://www.indiehackers.com/post/2020-in-review-0-to-100k-mrr-for-our-cleaning-saas-ecommerce-d53de6dde5)
- [Sweepy $40K MRR](https://www.indiehackers.com/post/this-couple-bootstrapped-their-b2c-app-to-40k-mrr-864f48eaeb)
**Signal Frequency**: 40+ mentions across 60+ days — stable

---

### Salon / Barbershop Management — Score: 93/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $840M-$1.36B market; 1.2M US salons/barbershops; Fresha/Vagaro/GlossGenius prove market |
| Competitor Weakness | 4/5 | Vagaro add-on tax (~$100+/mo real cost); Fresha 20% new-client commission Nov 2025; Softalon validating indie demand; booth-renter model underserved by all platforms |
| LTD Viability | 4/5 | $69 LTD (up to 5 stylists); simple booking infrastructure |
| No Free Tier | 2/5 | Fresha free, Square Appointments free — strong free competition |
| Channel Access | 3/5 | r/Hair, r/BarberShop, Facebook "Salon Owners Support Group" (200K+), "Barbers Only" (120K+) |
| Content Potential | 4/5 | "Fresha alternative", "Vagaro alternative", "booth rental salon software" |
| AppSumo Fit | 4/5 | Beauty/salon community active on social; referral potential |
| Review Potential | 3/5 | Stylists discuss tools actively in FB groups |
| MRR Path | 4/5 | Booking fees, payment processing, booth-renter rent tracking |
| Build Feasibility | 4/5 | Booking, walk-in queue, color formula storage, commission splits; 4-5 weeks |
| Boring Business Bonus | 4/5 | Unglamorous professional service; not tech-savvy operators |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: "All features, one price" positioning against Vagaro add-on model. Color formula notes + booth-renter rent tracking + no marketplace commission. $29/mo flat (1-4 chairs) or $69 LTD.
**Risks**: (1) Fresha and Square free tiers hard to compete against; (2) Highly fragmented market; (3) Stylists move and take clients with them (churn risk)
**Key Source Links**:
- [Vagaro Pricing Breakdown](https://pabau.com/blog/vagaro-pricing/)
- [Softalon Show HN](https://news.ycombinator.com/item?id=46994580)
- [Salon Business Vagaro Review](https://thesalonbusiness.com/vagaro-review/)
- [Salon Software Barbershop 2026](https://thesalonbusiness.com/best-barbershop-software/)
**Signal Frequency**: 40+ mentions across 60+ days — increasing

---

### Gym / Fitness Studio Management — Score: 92/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $2.2B gym management software market; 60K+ boutique fitness studios US; Mindbody proven dominant |
| Competitor Weakness | 5/5 | Mindbody real cost $200-500+/mo + 20% marketplace commission + 30-day cancellation trap; Gymdesk per-member fees; Glofox post-ABC acquisition pricing changed; Zen Planner $1,000-1,500 exit fee |
| LTD Viability | 4/5 | $99 LTD vs $1,668-7,188+/yr Mindbody; low infrastructure costs |
| No Free Tier | 3/5 | PushPress free tier; TeamUp affordable entry |
| Channel Access | 4/5 | r/crossfit, r/yoga, r/personaltraining; "Gym Owners Network" FB; fitness studio owner podcasts |
| Content Potential | 4/5 | "Mindbody alternative 2026", "boutique gym software", "CrossFit box management" |
| AppSumo Fit | 4/5 | Mindbody resentment is a meme; fitness studio software never on AppSumo = first-mover |
| Review Potential | 3/5 | Studio owners review on G2; Mindbody reviews extremely negative |
| MRR Path | 4/5 | Per-member monthly; payment processing; retention analytics |
| Build Feasibility | 4/5 | Class scheduling + member billing + attendance + member app; 4-5 weeks |
| Boring Business Bonus | 3/5 | Independent gyms boring but fitness has trendy overlap |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: "Everything included, no commissions" vs Mindbody's nickel-and-dime model. Flat $59-79/mo for up to 150 members with all SMS included. Free Mindbody data migration.
**Risks**: (1) PushPress free tier; (2) Mindbody marketplace is strong client acquisition channel; (3) Fitness more trend-sensitive than boring trades
**Key Source Links**:
- [Is Mindbody Worth It?](https://gymdesk.com/blog/is-mindbody-worth-it)
- [Mindbody Alternatives 2026](https://gymdesk.com/blog/mindbody-alternatives)
- [Vibefam Top Mindbody Alternatives 2026](https://vibefam.com/top-5-mindbody-alternatives-for-studio-management-in-2026/)
- [Gymdesk Pricing](https://gymdesk.com/pricing)
**Signal Frequency**: 40+ mentions across 60+ days — stable

---

### AI Quoting & Estimating for Trade Contractors — Score: 86/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | ToolsAI Show HN (3pts, 3 comments); two independent founders building same thing in May 2025 = strong demand; Joist/Jobtable have users |
| Competitor Weakness | 5/5 | No trade-specific AI quoting tool at affordable price; Buildxact $300+/mo desktop-first; ToolsAI early-stage with zero traction |
| LTD Viability | 5/5 | $59-79 LTD; very low marginal cost; clear ROI (one saved quote = LTD paid) |
| No Free Tier | 4/5 | 43% vs 22% close rate with professional quotes → contractors pay |
| Channel Access | 5/5 | r/Plumbing, r/Contractors, r/Electricians, r/HVAC; contractor FB groups |
| Content Potential | 4/5 | "contractor estimating app", "trade quoting software", "HVAC quote template" |
| AppSumo Fit | 5/5 | Clear ROI pitch; broad audience; easy value proposition |
| Review Potential | 4/5 | Contractors who double close rates will evangelize |
| MRR Path | 3/5 | Standalone quoting is narrow; needs expansion to full FSM or CRM |
| Build Feasibility | 4/5 | Materials lookup + PDF generation + e-signature + SMS delivery; 3-4 weeks |
| Boring Business Bonus | 5/5 | Trade contractors = deeply boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Enter job description → AI generates line-item quote → branded PDF → SMS to customer with read receipt → follow-up automation. $29-49/mo or $79 LTD.
**Risks**: (1) Narrow product scope without FSM = limited MRR ceiling; (2) Material pricing APIs complex/expensive; (3) ToolsAI and two other HN founders building same thing
**Key Source Links**:
- [ToolsAI Show HN — AI Quotes Blue Collar](https://news.ycombinator.com/item?id=44100570)
- [Reddit — Contractor Quoting Pain](https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691)
- [ServiceTitan Plumbing Pricing App](https://www.servicetitan.com/blog/plumbing-pricing-app)
**Signal Frequency**: 15+ mentions across 30+ days — increasing

---

### Small Carrier TMS (1-20 Trucks) — Score: 78/105 ⭐ NEW
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ trucking companies US, 90%+ have <20 trucks; TruckingOffice + Tailwind exist proving market; r/trucking recurring threads on missing PODs and unbilled loads |
| Competitor Weakness | 4/5 | TruckingOffice/ITS Dispatch "affordable but limited"; Tailwind lean; Truckbase mid-market; no tool with mandatory POD capture before marking load complete |
| LTD Viability | 3/5 | $99 LTD for first 500 loads viable; ongoing POD storage and SMS costs |
| No Free Tier | 4/5 | Missing PODs = real lost revenue; "billing clerk maintaining a spreadsheet because the TMS can't handle rate agreements" = direct pain |
| Channel Access | 3/5 | r/trucking, r/logistics; trucking FB groups; owner-operator forums |
| Content Potential | 3/5 | "small carrier TMS", "trucking dispatch software", "owner operator TMS" |
| AppSumo Fit | 3/5 | Trucking operators less AppSumo-demographic; but price-conscious and value-driven |
| Review Potential | 3/5 | Moderate; trucking community active on YouTube and forums |
| MRR Path | 4/5 | Per-load after LTD; fleet growth = natural upsell; factoring integration |
| Build Feasibility | 4/5 | Load booking + driver assignment + POD photo capture + auto-invoice + QBO sync; 4-5 weeks |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, VC-ignored, blue-collar |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Validate with 5-10 small carrier interviews. Key differentiator: mandatory POD capture before marking load complete = zero missed billing. Target owner-operators on r/trucking and trucking Facebook groups.
**Risks**: (1) Complex rate agreement logic per shipper; (2) FMCSA compliance requirements add scope; (3) Trucking community slower SaaS adopters than trades
**Key Source Links**:
- [TMS vs Dispatch for Small Carriers](https://www.datatruck.io/blog/tms-vs-dispatch-software-what-carriers-actually-need)
- [Best Trucking Software Small Fleets](https://truckpedia.io/resources/best-trucking-software-small-fleets)
- [Torotms Small Carrier Dispatch](https://www.torotms.com/blog/dispatch-software-for-trucking)
**Signal Frequency**: 3 mentions today — new signal, first appearance

---

## Tier 2: Worth Exploring (Score 55-74)

### Unified Client Communication Hub for Accountants — Score: 73/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 1.3M+ US accountants; TaxDome $50+/user/mo; Client Hub well-regarded but incomplete |
| Competitor Weakness | 4/5 | TaxDome expensive/complex; Client Hub lacks invoicing + e-signature; SmartVault document-only |
| LTD Viability | 4/5 | $79-99 LTD viable for solo practitioners |
| No Free Tier | 4/5 | Accountants will pay for client communication hub |
| Channel Access | 3/5 | r/Accounting, r/Bookkeeping; accounting FB groups |
| Content Potential | 3/5 | "client portal accountants", "TaxDome alternative" |
| AppSumo Fit | 3/5 | Moderate; accounting niche |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | Per-user monthly; integrations as upsells |
| Build Feasibility | 4/5 | Messaging + file sharing + e-sig + task management; 4-5 weeks |
| Boring Business Bonus | 4/5 | Accounting services = unglamorous professional |

**Verdict**: EXPLORE FURTHER — already shortlisted, update signal history
**Next Steps**: Map to `accounting-client-communication-hub.md`

---

### Tax Firm Seasonal Scheduler — Score: 72/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 300K+ CPA firms; Calendly + TaxDome exist; seasonal scheduling chaos well-documented on r/taxpros |
| Competitor Weakness | 3/5 | Calendly too generic (no tax-specific buffer logic); TaxDome overengineered for scheduling alone |
| LTD Viability | 4/5 | $79-99 LTD for seasonal-only use case = perfect fit |
| No Free Tier | 4/5 | Tax pros in scheduling chaos will pay |
| Channel Access | 3/5 | r/taxpros, r/Accounting; CPA associations |
| Content Potential | 3/5 | "tax season scheduling software", "CPA scheduling" |
| AppSumo Fit | 3/5 | Niche but vocal accounting community |
| Review Potential | 3/5 | Moderate |
| MRR Path | 2/5 | Seasonal limits MRR unless expanded to year-round bookkeeping scheduling |
| Build Feasibility | 5/5 | Scheduler + buffer times + SMS reminders; 2-3 week MVP |
| Boring Business Bonus | 4/5 | Tax professional services = unglamorous |

**Verdict**: EXPLORE FURTHER — already shortlisted as `tax-professional.md`
**Key Gap**: "prep time" buffer between client booking and actual appointment; tax-specific capacity management. Key risk: very narrow use case without year-round expansion path.

---

### Solo Therapist Practice Management — Score: 70/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 150K+ licensed therapists in private practice US; SimplePractice $39-99/mo confirmed |
| Competitor Weakness | 3/5 | SimplePractice/TherapyNotes expensive for solos; gap is real but several tools exist |
| LTD Viability | 2/5 | HIPAA compliance = ongoing infrastructure; marginal LTD viability |
| No Free Tier | 4/5 | HIPAA = must pay for compliant infrastructure |
| Channel Access | 3/5 | r/therapists, r/psychotherapy; therapy practice FB groups |
| Content Potential | 3/5 | "SimplePractice alternative", "solo therapist software" |
| AppSumo Fit | 2/5 | HIPAA compliance limits LTD structure |
| Review Potential | 3/5 | Therapists discuss tools in professional forums |
| MRR Path | 4/5 | Monthly subscription; insurance billing add-on |
| Build Feasibility | 3/5 | HIPAA compliance adds significant scope |
| Boring Business Bonus | 4/5 | Mental health private practice = unglamorous professional service |

**Verdict**: EXPLORE FURTHER — already shortlisted as `solo-therapist-practice.md`
**Key Risk**: HIPAA compliance adds ongoing infrastructure cost that limits LTD viability.

---

### Veterinary Practice Management (Affordable Cloud-Native) — Score: 68/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 30K+ vet practices US; Vetspire/Cornerstone dominant; Capterra reviews confirm pain |
| Competitor Weakness | 4/5 | Vetport "overpriced, no support"; Cornerstone crashes; Digitail weak inventory |
| LTD Viability | 1/5 | Ongoing infrastructure + e-prescribing + compliance = no LTD viable |
| No Free Tier | 4/5 | Vets will pay; $99-199/mo flat target |
| Channel Access | 3/5 | r/veterinary, r/VetTech; vet association forums |
| Content Potential | 3/5 | "Cornerstone alternative", "cloud vet software" |
| AppSumo Fit | 1/5 | Enterprise infrastructure; not LTD-suitable |
| Review Potential | 4/5 | Vets review software actively |
| MRR Path | 5/5 | Clear MRR path; recurring subscription |
| Build Feasibility | 3/5 | SOAP notes + scheduling + invoicing + inventory + e-prescribing = 8+ weeks |
| Boring Business Bonus | 4/5 | Veterinary = unglamorous professional service |

**Verdict**: EXPLORE FURTHER — already shortlisted as `veterinary-practice.md`
**Key Risk**: LTD not viable; MRR-only model limits AppSumo acquisition. Mobile vet beachhead recommended.

---

### Pressure Washing / Mobile Detailing Job Management — Score: 67/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | r/pressurewashing 400K+ members; r/AutoDetailing 2M+; DetailConnect + RO App exist proving market |
| Competitor Weakness | 3/5 | Jobber overkill; DetailConnect auto-detail only; RO App shop-focused; mobile gap real |
| LTD Viability | 4/5 | $59-79 LTD; low infrastructure |
| No Free Tier | 3/5 | Square handles invoicing for free; differentiation needed |
| Channel Access | 5/5 | r/pressurewashing, r/AutoDetailing; both huge communities with active engagement |
| Content Potential | 3/5 | "pressure washing software", "mobile detailing app" |
| AppSumo Fit | 3/5 | Good community but niche |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | $29-49/mo solo/crew; natural growth path |
| Build Feasibility | 5/5 | SMS booking + before/after photos + route map + Stripe; 2-3 weeks |
| Boring Business Bonus | 5/5 | Pressure washing = deeply boring, exactly the target market |

**Verdict**: EXPLORE FURTHER — already shortlisted as `pressure-washing-detailing.md`
**Key Source**: [r/pressurewashing community](https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691)

---

### Restaurant Crew Turnover Coordination — Score: 65/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 1M+ independent restaurants US; 500K+ STR hosts; Homebase/7Shifts exist |
| Competitor Weakness | 3/5 | Homebase and 7Shifts don't specifically do cleaning crew coordination with photo confirmation |
| LTD Viability | 4/5 | $59 LTD targeting vacation rental hosts first |
| No Free Tier | 3/5 | Google Sheets + group text is the current "free" workaround |
| Channel Access | 3/5 | r/restaurateur, r/AirBnB, r/airbnb_hosts |
| Content Potential | 3/5 | "restaurant cleaning schedule", "Airbnb cleaning coordinator" |
| AppSumo Fit | 3/5 | Airbnb hosts = AppSumo demographic |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | Per-location monthly; natural growth |
| Build Feasibility | 5/5 | Crew coordinator app = simple 2-3 week MVP |
| Boring Business Bonus | 4/5 | Restaurant + STR operations = unglamorous |

**Verdict**: EXPLORE FURTHER — target vacation rental hosts as beachhead before restaurants
**Note**: Maps to `restaurant-operations.md` or merge into `cleaning-service-management.md`

---

### Insurance Agency Management (Small Independent Agencies) — Score: 62/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 38K+ independent insurance agencies US; Applied Epic/EZLynx/HawkSoft prove market |
| Competitor Weakness | 3/5 | Legacy systems (Applied Epic $500+/mo, EZLynx complex) but also cheaper options exist |
| LTD Viability | 2/5 | Insurance regulation + compliance overhead limits LTD viability |
| No Free Tier | 4/5 | 21% commission leakage = direct ROI motivation |
| Channel Access | 3/5 | r/Insurance, r/InsuranceAgent; IIABA forums |
| Content Potential | 3/5 | "insurance agency management software" |
| AppSumo Fit | 2/5 | Compliance overhead limits LTD structure |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Per-agent monthly; commission reconciliation SaaS |
| Build Feasibility | 3/5 | Policy tracking + commission reconciliation + client portal + e-sig = complex |
| Boring Business Bonus | 4/5 | Insurance = unglamorous financial service |

**Verdict**: EXPLORE FURTHER — already shortlisted as `insurance-agency-management.md`
**Key Risk**: Commission reconciliation complexity + insurance compliance adds significant build scope.

---

### AI SMB Compliance Tools — Score: 60/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | New 2026 regulations real (EU AI Act, Colorado AI Act, IL hiring law) but SMB compliance SaaS market early |
| Competitor Weakness | 3/5 | VinciWorks enterprise-focused; PathOpt early-stage; plain-English SMB compliance not done |
| LTD Viability | 4/5 | $199-399 LTD for "current regulations snapshot + alerts" viable |
| No Free Tier | 3/5 | Free government guidance exists; value-add is plain-English + monitoring |
| Channel Access | 3/5 | r/SaaS, r/smallbusiness, founder communities |
| Content Potential | 4/5 | "AI compliance small business 2026", "Colorado AI Act guide" = early SEO opportunity |
| AppSumo Fit | 3/5 | Moderate; SaaS founder demographic |
| Review Potential | 2/5 | Compliance tools don't generate evangelist reviews |
| MRR Path | 3/5 | Regulation changes = ongoing need; but content depreciates fast |
| Build Feasibility | 5/5 | Content/wizard product; regulation data is public; 2-3 week MVP |
| Boring Business Bonus | 2/5 | Tech-adjacent; not blue-collar |

**Verdict**: EXPLORE FURTHER — already shortlisted as `smb-ai-compliance.md`
**Key Risk**: Regulation landscape changes rapidly; content-heavy and becomes outdated quickly.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score est. | Reason for Pass |
|------|-----------|----------------|
| Tenant Income Verification (standalone) | ~45/105 | LTD marginal; AppSumo poor fit; better as feature of property management tool than standalone product |
| Live Event Timer / Stagetimer-adjacent | ~52/105 | Market exists ($20K/mo Stagetimer) but crowded; SEO-driven play requires patience; not boring business |
| Franchise Multi-Location Ops (3-25 sites) | ~50/105 | Low LTD fit; "enterprise expectations without enterprise budget"; complex multi-tenant build; already in `micro-franchise-ops.md` |
| Cloud-Native Dental PMS | ~48/105 | High build complexity; HIPAA; dental software moats are deep; better as add-on layer than full PMS |
| Mobile-First Trade Workforce (AR Guides) | ~45/105 | AR tools complex; addressable market narrow for AR-specific app; better as FSM feature than standalone |

---

## Top 3 Recommendations

1. **Field Service Management for Micro Trades** — Score: 101/105 — The anti-ServiceTitan for 1-5 person trades shops; 60+ days of quad-source signal; ServiceTitan $245-500/tech/mo excludes 85% of the market; FieldLedgr + FieldFlow launched this quarter proving demand but can't crack distribution; $79 LTD at flat pricing unlocks AppSumo category first-mover
   - [ServiceTitan Reviews](https://fieldcamp.ai/reviews/servicetitan/) | [Jobber Alternative Discussion](https://fieldcamp.ai/reviews/jobber/)

2. **Landscaping / Lawn Care Business OS** — Score: 99/105 — Service Autopilot post-Xplor acquisition is "the single largest switching moment in lawn care software history"; 600K+ businesses, SA defector wave happening NOW; $39/mo flat beats Yardbook on UX and Jobber on price; chemical compliance tracking = legally required defensibility
   - [LawnSite CRM Thread](https://www.lawnsite.com/threads/looking-for-financial-and-crm-software-for-small-business.519136/) | [SA Post-Xplor Complaints](https://capterra.com/service-autopilot)

3. **Auto Repair Shop Management** — Score: 100/105 — 160K-280K independent shops; Shopmonkey v2.0 "nightmare, features removed" = live switching moment; $33-$179/mo dead zone confirmed; no mainstream auto repair tool has ever run AppSumo; dedicated shop phone number (Twilio) + offline-capable + native QBO = exact gap documented in competitor reviews
   - [Shopmonkey Reviews](https://www.softwareadvice.com/auto-repair/shopmonkey-profile/reviews/) | [CSI Auto Repair Software](https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown)

---

## New Signal: Small Carrier TMS

Today is the first appearance of the Small Carrier TMS idea (1-20 trucks). Score 78/105 qualifies as Tier 1. Key hook: "mandatory POD capture before marking a load complete = zero missed billing" is a defensible differentiator no existing tool has built as a hard requirement. 500K+ US trucking companies, 90%+ under 20 trucks. New shortlisted file created: `shortlisted/small-carrier-tms.md`

---

*Evaluated: 2026-05-17 | Sources: reddit-2026-05-17, hn-indiehackers-2026-05-17, competitor-analysis-2026-05-17, trends-2026-05-17*
