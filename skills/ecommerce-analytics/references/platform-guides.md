# eCommerce Analytics — Platform Guides, Benchmarks & Checklists

Reference material for the eCommerce Marketing Analyst skill. Contains detailed calculation examples, platform-specific reading guides, benchmark tables, audit checklists, and UTM tracking guides.

---

## Detailed Metric Calculations & Benchmarks

### Marketing Efficiency Ratio (MER)

```
MER = Total Revenue / Total Marketing Spend

This is your single most important marketing efficiency metric.

Example:
Total revenue: $150,000
Total marketing spend: $30,000 (ads + email platform + influencers + tools)
MER = 5.0x

Interpretation:
For every $1 you spend on marketing, you generate $5 in revenue.

Benchmarks:
MER > 5x: Very efficient — you may be underinvesting
MER 3-5x: Healthy range for most DTC brands
MER 2-3x: Acceptable if you're in growth mode
MER < 2x: Red flag — spending too much or revenue leaking
```

Why MER over ROAS? ROAS is platform-reported and heavily inflated by attribution overlap. Meta says it drove a sale. Google says it drove the same sale. Email says it drove the same sale. MER uses actual total numbers — it can't lie.

### Blended Customer Acquisition Cost (CAC)

```
Blended CAC = Total Marketing Spend / Total New Customers

Example:
Total marketing spend: $30,000
New customers: 600
Blended CAC = $50

Compare to LTV:
LTV:CAC ratio should be 3:1 or better
If your LTV is $150 and CAC is $50, ratio is 3:1 — healthy
```

### Customer Lifetime Value (LTV)

```
Simple LTV Calculation:
LTV = AOV x Purchase Frequency x Customer Lifespan

Example:
AOV: $65
Average purchases per year: 2.5
Average customer lifespan: 2 years
LTV = $65 x 2.5 x 2 = $325

Contribution Margin LTV (more accurate):
CM-LTV = LTV x Gross Margin %

Example:
LTV: $325
Gross margin: 70%
CM-LTV: $227.50

This is what each customer is actually worth after COGS.
```

### Cohort Retention Table

Track customer behavior by the month they made their first purchase:

```
Cohort Retention Table:

Cohort    | Month 0 | Month 1 | Month 2 | Month 3 | Month 6 | Month 12
----------|---------|---------|---------|---------|---------|--------
Jan 2025  | 100%    | 22%     | 15%     | 12%     | 8%      | 5%
Feb 2025  | 100%    | 25%     | 17%     | 13%     | 9%      | --
Mar 2025  | 100%    | 20%     | 14%     | 11%     | --      | --

What to look for:
- Are recent cohorts retaining better than older ones? (Improving experience)
- Is there a specific month where retention drops? (Gap in retention flows)
- Which acquisition source produces the best-retaining cohorts?
```

### Channel Contribution Analysis

```
Monthly Channel Performance:

Channel          | Spend   | Revenue | % of Rev | CAC   | ROAS
-----------------|---------|---------|----------|-------|-----
Meta Ads         | $15,000 | $52,000 | 35%      | $62   | 3.5x
Google Ads       | $8,000  | $35,000 | 23%      | $48   | 4.4x
Email (Klaviyo)  | $500    | $45,000 | 30%      | n/a   | 90x
Organic/Direct   | $0      | $15,000 | 10%      | $0    | n/a
Influencer       | $3,000  | $3,000  | 2%       | $150  | 1.0x
-----------------|---------|---------|----------|-------|-----
Total            | $26,500 | $150,000| 100%     |       | 5.7x

Key insights from this example:
- Email is driving 30% of revenue at almost no cost — protect and grow this
- Google is more efficient than Meta (higher ROAS, lower CAC)
- Influencer spend isn't producing direct revenue — evaluate for brand building value
- Organic/direct at 10% suggests brand is building awareness
```

---

## Reading Your Platforms

### Shopify Analytics

**What to focus on:**
- Sales by channel report: Shows DTC vs. other channels
- Online store conversion rate: Your most important conversion metric
- Top products: Which products drive the most revenue
- Top referrers: Where traffic comes from
- Returning customer rate: % of orders from repeat buyers

**What to ignore:**
- Attribution reports in Shopify are basic — don't rely on them for channel analysis
- "Sessions" can be inflated by bots — focus on conversion rate rather than raw sessions

**Key reports to review weekly:**
1. Overview — compare to last period
2. Sales by product — identify winners and losers
3. Online store conversion rate by device — find mobile gaps
4. Customer reports — new vs. returning split

### Google Analytics 4 (GA4)

**What to focus on:**
- Acquisition — Traffic acquisition report (sessions by source/medium)
- Monetization — eCommerce purchases report
- Engagement — Pages and screens (which pages get the most engagement)
- User — Demographics and tech (who's visiting and on what devices)

**Key GA4 reports for eCommerce:**
1. **Traffic acquisition**: Where your visitors come from
2. **Landing page report**: Which pages are entry points and their conversion rates
3. **Path exploration**: How customers navigate your site before purchasing
4. **Funnel exploration**: Build a custom funnel (view product -> add to cart -> begin checkout -> purchase) and see where customers drop off

**Setting up GA4 eCommerce events:**
Ensure these events are tracked:
- view_item (product page view)
- add_to_cart
- begin_checkout
- purchase (with revenue value)
- view_item_list (collection page view)

Without these events, GA4 eCommerce reports will be empty.

### Klaviyo Analytics

**What to focus on:**
- Revenue attributed to email: This should be 25-40% of total revenue
- Flow revenue vs. campaign revenue: Flows should be 40-60% of email revenue
- Revenue per recipient (RPR): By flow and by campaign
- List growth rate: Net new subscribers per month

**Key reports:**
1. **Dashboard**: Total email revenue, open rates, click rates
2. **Flows performance**: Revenue per flow — which automated flows generate the most
3. **Campaign performance**: Revenue per campaign — which sends convert
4. **Segment sizes**: How many contacts are in each engagement segment

**Red flags in Klaviyo:**
- Email revenue < 20% of total: Your email program is underperforming
- Flow revenue < campaign revenue: You need more automated flows
- Open rate < 20%: Deliverability or content issues
- Unsubscribe rate > 0.5% per campaign: Sending too often or wrong content

### Meta Ads Manager

**What to focus on:**
- ROAS (return on ad spend) — directional, not absolute
- CPM (cost per 1,000 impressions) — are you reaching people efficiently?
- CPC (cost per click) — is your creative engaging enough?
- CTR (click-through rate) — is your ad stopping the scroll?
- Cost per purchase — what does each Meta-attributed sale cost?

**Key views to build:**
1. Campaign-level view: Spend, ROAS, purchases by campaign
2. Ad set-level view: Performance by audience (which targeting works)
3. Ad-level view: Performance by creative (which creative converts)
4. Breakdown by placement: Feed vs. Stories vs. Reels performance

**Benchmarks by category:**

| Metric | Budget Brands | Premium Brands | Luxury Brands |
|--------|-------------|---------------|--------------|
| CTR | 1.0-2.0% | 0.8-1.5% | 0.5-1.0% |
| CPC | $0.50-1.50 | $1.00-3.00 | $2.00-5.00 |
| CVR (click to purchase) | 2-5% | 1-3% | 0.5-2% |
| ROAS | 2-4x | 3-6x | 4-8x |
| CPM | $5-15 | $10-25 | $15-40 |

### Google Ads

**What to focus on:**
- Search campaign: ROAS, cost per conversion, search terms report
- Shopping campaign: ROAS by product, click share, impression share
- Performance Max: Overall ROAS, asset performance ratings

**Key reports:**
1. **Search terms report**: What people actually searched to find you
2. **Product performance** (Shopping): Which products get clicks and conversions
3. **Auction insights**: How you compare to competitors in ad auctions
4. **Geographic performance**: Which locations convert best

---

## Budget Allocation Details

### Baseline Allocation for DTC Brands

```
Meta Ads: 35-45%
Google Ads (Search + Shopping): 20-30%
Email/SMS platform: 2-5%
Influencer/Creator: 10-15%
Content/SEO: 5-10%
TikTok Ads: 5-15% (if your audience is there)
Retention/Loyalty: 3-5%
Testing/Experimentation: 5-10%
```

### Monthly Rebalancing Rules

```
If a channel's ROAS is 2x above your blended ROAS:
-> Increase budget by 20% (but watch for diminishing returns)

If a channel's ROAS is below 1.5x:
-> Reduce budget by 20% or pause and test new creative/audiences

If MER is declining while spend is increasing:
-> You're hitting diminishing returns — slow overall spend growth

If MER is improving while spend is increasing:
-> You have room to scale — increase spend on best channels
```

---

## UTM Tracking Guide

### UTM Parameter Structure

```
utm_source = [platform] (meta, google, klaviyo, tiktok)
utm_medium = [channel type] (paid-social, paid-search, email, organic-social)
utm_campaign = [campaign name]
utm_content = [ad or email name]
```

### UTM Examples

```
Meta paid social ad:
?utm_source=meta&utm_medium=paid-social&utm_campaign=spring-launch&utm_content=ugc-video-01

Klaviyo email:
?utm_source=klaviyo&utm_medium=email&utm_campaign=welcome-series&utm_content=email-3-social-proof

TikTok paid social ad:
?utm_source=tiktok&utm_medium=paid-social&utm_campaign=creator-whitelisting&utm_content=sarah-review
```

UTM tracking gives you clean data in GA4 about which specific campaigns and creatives drive traffic and conversions.

---

## Marketing Analytics Audit Checklist

Use this to audit any eCommerce marketing analytics setup:

### Tracking Setup
- [ ] Google Analytics 4 installed and receiving data
- [ ] GA4 eCommerce events configured (view_item, add_to_cart, begin_checkout, purchase)
- [ ] Meta Pixel installed and firing correctly
- [ ] Google Ads conversion tracking active
- [ ] TikTok Pixel installed (if running TikTok ads)
- [ ] Klaviyo tracking snippet on site
- [ ] UTM parameters on all external links (ads, emails, social)
- [ ] Post-purchase survey asking "How did you hear about us?"

### Data Quality
- [ ] Revenue in GA4 matches Shopify revenue (within 10%)
- [ ] No duplicate transactions being recorded
- [ ] UTMs are consistent and well-structured
- [ ] Bot traffic is filtered out in GA4
- [ ] Currency and timezone settings are correct across all platforms

### Reporting
- [ ] Weekly dashboard or report that tracks Tier 1 and Tier 2 metrics
- [ ] Monthly review of channel performance and budget allocation
- [ ] Quarterly cohort analysis
- [ ] Annual marketing budget planning based on LTV and CAC data

### Attribution
- [ ] Post-purchase survey active
- [ ] UTM tracking on all campaigns
- [ ] MER tracked as primary efficiency metric
- [ ] Platform ROAS tracked as directional signals
- [ ] Incrementality test run at least once per year per major channel

---
