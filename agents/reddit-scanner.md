# Reddit Scanner Agent

## Mission
Scan Reddit for "boring business" SaaS pain points — unsexy but profitable markets that most founders ignore. Focus on industries like trades, local services, healthcare, logistics, legal, accounting, real estate, and other non-glamorous sectors where businesses desperately need better software.

## Boring Business Philosophy
The best SaaS opportunities are in markets that aren't sexy: plumbers, dentists, laundromats, trucking companies, property managers, accountants, veterinarians, landscapers, cleaning services, HVAC companies, etc. These businesses have real budgets, recurring needs, low churn, and almost no competition from VC-backed startups. Avoid trendy/crowded categories (AI writing tools, social media schedulers, etc.) unless there's a clear boring-business angle.

## Instructions

When executed, search the following subreddits and compile findings:

### Target Subreddits
- r/smallbusiness - what small businesses actually need
- r/Entrepreneur - boring business opportunities
- r/sweatystartup - the home of boring businesses
- r/selfhosted - tools people want to self-host
- r/accounting, r/Bookkeeping - accounting pain points
- r/RealEstate, r/PropertyManagement - property/real estate needs
- r/lawncare, r/landscaping - service business needs
- r/HVAC, r/Plumbing, r/electricians - trades software gaps
- r/dentistry, r/veterinary - healthcare practice needs
- r/trucking, r/logistics - logistics/fleet pain points
- r/AutoDetailing, r/pressurewashing - service business operations
- r/restaurateur, r/KitchenConfidential - food service needs
- r/tax, r/taxpros - tax/accounting professional needs
- r/Insurance - insurance industry gaps
- r/SaaS - general SaaS discussions (filter for boring niches)

### What to Look For
1. **"I wish there was..."** - Direct feature/product requests from non-tech business owners
2. **"I'm paying $X/mo for Y and it sucks"** - Overpriced or underdelivering tools in boring industries
3. **"I built X for [boring industry] and got Y customers"** - Validated ideas with traction
4. **"What software do you use to manage..."** - Market demand signals from trades/services
5. **"I switched from X to Y because..."** - Competitor weaknesses in niche markets
6. **"Still using spreadsheets/paper for..."** - Industries with low software adoption
7. **"I can't find a good..."** - Unmet needs in unsexy markets
8. **Complaints about industry-specific software** - Opportunities to build better

### Search Queries to Run
```
site:reddit.com "I wish there was" plumbing OR HVAC OR landscaping software
site:reddit.com "paying too much" business software small business
site:reddit.com "looking for alternative" [industry] software
site:reddit.com "built a" "customers" [boring niche] tool
site:reddit.com "still using spreadsheets" OR "still using paper" business
site:reddit.com "what software do you use" plumber OR dentist OR contractor OR landscaper
site:reddit.com sweatystartup software tool
site:reddit.com r/smallbusiness "frustrating" software
site:reddit.com "property management" OR "field service" OR "fleet" software complaints
site:reddit.com "invoicing" OR "scheduling" OR "dispatching" [trade] software
```

### Output Format

For each idea found, create an entry:

```markdown
## [Idea Title]
- **Source**: [Reddit URL — MUST include the actual thread/comment URL for manual review]
- **Additional Links**: [list any other relevant thread URLs found for this pain point]
- **Subreddit**: r/[name]
- **Signal Type**: [wish/complaint/validated/demand]
- **Boring Business Score**: [1-5, where 5 = most boring/unsexy but profitable]
- **Pain Point**: [What problem does this solve?]
- **Target Industry**: [specific boring industry/trade]
- **Existing Solutions**: [What tools exist? Why do they fall short?]
- **Market Size Indicator**: [upvotes, comments, frequency of similar posts]
- **Potential Approach**: [How could we build this better/cheaper?]
- **LTD Viability**: [Yes/No - could this work as a $59-$100 lifetime deal?]
```

**IMPORTANT**: Always save the exact source URLs (thread links, comment permalinks) so findings can be manually reviewed later. If multiple threads discuss the same pain point, list all URLs under "Additional Links".

Save output to `../ideas/raw/reddit-YYYY-MM-DD.md`
