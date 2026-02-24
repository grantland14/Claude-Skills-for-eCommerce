# Benchmarks, Checklists & Operational Playbooks

This file contains platform benchmarks, setup checklists, UTM templates, ROAS calculations, the BFCM playbook, seasonal calendar, common mistakes, scaling details, and creative production processes. Referenced from the main SKILL.md.

---

## Platform Benchmarks

These are ranges, not guarantees. Your benchmarks depend on product category, price point, and competitive landscape.

### Meta Ads

| Metric | Healthy Range | Concern If |
|--------|--------------|------------|
| CPM (Prospecting) | $8-25 | > $35 |
| CTR (Link Clicks) | 1.0-2.5% | < 0.8% |
| CPC (Link Click) | $0.50-2.00 | > $3.00 |
| Landing Page View Rate | 70-85% of clicks | < 60% |
| Purchase ROAS (Blended) | 2.0-5.0x | < break-even |
| Frequency (7-day) | 1.0-2.5 (prospecting) | > 3.0 |
| Thumbstop Rate | 25-40% | < 15% |

### Google Shopping / PMax

| Metric | Healthy Range | Concern If |
|--------|--------------|------------|
| Impression Share | 30-60% | < 15% |
| CTR | 1.5-4.0% | < 1.0% |
| CPC | $0.30-1.50 | > $2.50 |
| Conversion Rate | 2.0-5.0% | < 1.5% |
| ROAS | 3.0-8.0x | < break-even |

### TikTok Ads

| Metric | Healthy Range | Concern If |
|--------|--------------|------------|
| CPM | $5-15 | > $20 |
| CTR | 0.8-2.0% | < 0.5% |
| CPC | $0.50-2.00 | > $3.00 |
| CVR (from click) | 1.0-3.0% | < 0.5% |
| ROAS | 1.5-4.0x | < break-even |

### Pinterest Ads

| Metric | Healthy Range | Concern If |
|--------|--------------|------------|
| CPM | $3-10 | > $15 |
| CTR | 0.5-1.5% | < 0.3% |
| CPC | $0.30-1.20 | > $2.00 |
| ROAS | 2.0-6.0x | < break-even |

---

## Platform Setup Checklists

### Meta Ads Setup for eCommerce

- [ ] Meta Pixel installed with standard eCommerce events (ViewContent, AddToCart, InitiateCheckout, Purchase)
- [ ] Conversions API (server-side) connected via Shopify, partner integration, or custom setup
- [ ] Product catalog synced from your store
- [ ] Domain verified in Business Manager
- [ ] Custom audiences built: All purchasers, High-LTV purchasers, Add-to-cart non-purchasers, Site visitors 7/14/30 day
- [ ] Lookalike audiences created from purchaser lists (1%, 2%, 5%)
- [ ] UTM parameters configured on all ad URLs
- [ ] Aggregated Event Measurement priorities set (Purchase at top)
- [ ] Business Manager and ad account properly configured

### Google Ads Setup for eCommerce

- [ ] Google Merchant Center approved with products active
- [ ] Product feed optimized (titles, descriptions, images, custom labels)
- [ ] Google Ads conversion tracking with purchase value
- [ ] Enhanced Conversions enabled (server-side)
- [ ] GA4 linked to Google Ads
- [ ] Audience lists: Customer match upload, remarketing lists from GA4
- [ ] Negative keyword lists built for Shopping and Search
- [ ] Merchant Promotions feed connected (if running offers)
- [ ] Brand campaign running separately from PMax

### TikTok Ads Setup for eCommerce

- [ ] TikTok Pixel installed with eCommerce events
- [ ] Events API (server-side) connected if available
- [ ] Product catalog connected (for Product Shopping Ads)
- [ ] TikTok Shop set up (if eligible in your market)
- [ ] Ad account in Auction Ads mode (not Reach & Frequency for conversions)
- [ ] Creator Marketplace access for UGC sourcing

---

## UTM Tracking Templates

Every ad URL needs UTMs. Standard eCommerce structure:

```
utm_source=meta&utm_medium=paid&utm_campaign={campaign_name}&utm_content={ad_name}&utm_term={adset_name}
utm_source=google&utm_medium=cpc&utm_campaign={campaign_name}&utm_content={ad_name}&utm_term={keyword}
utm_source=tiktok&utm_medium=paid&utm_campaign={campaign_name}&utm_content={ad_name}
utm_source=pinterest&utm_medium=paid&utm_campaign={campaign_name}&utm_content={pin_name}
```

Use dynamic parameters (platform macros) to auto-populate campaign/ad names. Don't manually type them.

---

## ROAS Calculation Examples

### Break-Even ROAS

Work backwards from your unit economics:

```
Product Price:                    $60
Cost of Goods Sold (COGS):       $18
Shipping Cost:                    $7
Payment Processing (3%):          $1.80
--------------------------------------
Gross Profit Per Order:           $33.20

Break-Even ROAS = Price / Gross Profit = $60 / $33.20 = 1.8x

Target ROAS (with 30% profit margin on ad spend):
  $60 / ($33.20 x 0.70) = 2.58x -> round to 2.5x target
```

### Adjusting for LTV

If your average customer buys 2.3 times over 12 months, your real break-even drops significantly. A 1.2x ROAS on first purchase can be highly profitable if repeat purchases are strong.

```
First Purchase ROAS:      1.2x
Average Order Value:      $60
LTV (2.3 purchases):     $138
CAC at 1.2x ROAS:        $50
LTV:CAC Ratio:           2.76x  (healthy — target > 3x)
```

---

## BFCM Paid Ads Playbook

Black Friday / Cyber Monday is the single biggest revenue event for most eCommerce brands. Your ad strategy should start 6-8 weeks before.

### 6-8 Weeks Before (October)

- Increase prospecting spend 20-30% to build retargeting audiences
- Test new creative angles that will become your BFCM ads
- Build email list aggressively (pair with popup-cro skill)
- Upload customer lists for lookalike building
- Ensure pixel health — fix any tracking gaps now

### 2-4 Weeks Before (Early November)

- Shift to "teaser" creative: "Something big is coming" / "VIP early access launching soon"
- Launch lead-gen campaigns to build BFCM waitlist
- Prepare all BFCM creative (you don't want to be making ads during BFCM week)
- Set up all campaigns in draft mode, ready to launch
- Build retargeting audiences of teaser engagers

### BFCM Week

- Launch hard. Increase budgets 50-100% above normal (the algorithm needs room to spend during the peak)
- Rotate creative daily — fatigue hits fast when everyone is advertising
- Run separate campaigns for your BFCM offer (don't just change copy in existing campaigns — the learning phase will hurt you)
- Retargeting budgets should be 40-50% of total during BFCM (your warmest audiences are most valuable this week)
- Monitor hourly during peak days. Increase budget on winners, pause losers fast.

### Post-BFCM (December)

- Shift messaging to gift-focused: "The perfect gift for [person]"
- Lean into last-ship-date urgency: "Order by Dec 18 for Christmas delivery"
- Gift card push in final days (digital delivery, no shipping needed)
- Reduce budgets gradually through late December as CPMs stay elevated but intent drops

---

## Seasonal Ad Calendar

**January-February:** Post-holiday reset. Lower CPMs, good for testing new creative and audiences. "New year, new you" positioning for health, fitness, beauty, organization.

**March-April:** Spring refresh. New collections, seasonal products. Ramp up spend as CPMs are still moderate.

**May-June:** Mother's Day, Father's Day, graduations, weddings. Gift-focused campaigns. Start building summer audiences.

**July-August:** Summer sales, back to school. Prime Day halo effect (shoppers are in buying mode across all platforms during Prime Day week — even if you're not on Amazon).

**September-October:** Fall launches. CRITICAL: This is your Black Friday prep window. Build audiences, test creative, build email lists. Every dollar spent on prospecting in September-October lowers your Q4 CAC.

**November:** The main event. See BFCM Playbook above.

**December:** Holiday gifting, last-ship-date urgency, gift cards for late shoppers. CPMs are highest but so is purchase intent and AOV.

---

## Common Mistakes in eCommerce Advertising

### Strategy Mistakes

- **Scaling before creative is ready.** More budget without more creative = higher CPMs and fatigue. Scale your creative pipeline first.
- **Ignoring post-click experience.** Your ads drive traffic — your product page closes the sale. A 1% improvement in product page conversion rate beats any ad optimization.
- **Running the same creative across platforms.** Meta, TikTok, Pinterest, and Google all have different user behaviors and content expectations. Platform-native creative wins.
- **Chasing ROAS on every campaign.** Top-of-funnel prospecting often runs at 1-2x ROAS. That's fine if your retargeting and email flows close the sale profitably. Judge the full funnel, not individual campaigns in isolation.

### Budget Mistakes

- **Spreading $1,000/month across four platforms.** Concentrate spend. Be great on one platform before adding a second. $1,000/month is enough for Meta OR Google, not both.
- **Flat budgets year-round.** eCommerce is seasonal. Spend more when buyers are buying (Q4, gifting holidays) and less when CPMs spike without intent.
- **Panicking during learning phase.** New campaigns need 50 optimization events to exit learning. Pausing or changing campaigns during this window wastes the data you already paid for.

### Creative Mistakes

- **Only running product-on-white images.** This works for Google Shopping. It rarely works for Meta or TikTok prospecting where you're interrupting a social feed.
- **Ignoring the hook.** On video platforms, the first 0.5-2 seconds determine everything. Spend 80% of your creative energy on opening hooks.
- **No creative variety.** Running 2 ads when you should be testing 10. The algorithm needs options to optimize toward different audience segments.

### Tracking Mistakes

- **No server-side tracking.** Browser-side pixels miss 20-40% of conversions due to ad blockers, iOS privacy, and browser restrictions. Set up Meta Conversions API and Google Enhanced Conversions.
- **No post-purchase survey.** You're flying blind on true acquisition channels without asking customers "How did you first hear about us?" on the order confirmation page.
- **Trusting platform-reported numbers.** Use blended ROAS and blended CAC as your source of truth. Individual platform reporting is directionally useful but not accurate.

---

## Scaling Playbook — Detailed

### How to Scale on Meta

1. **Increase ASC budget 20-30% every 3-4 days.** Bigger jumps reset learning.
2. **Add new creative constantly.** Scaling is really a creative scaling problem. The algorithm finds the buyers — you need to give it fresh creative to show them.
3. **Expand to new creative formats.** If UGC video is winning, add founder videos, carousels, mashups. Give the algorithm variety.
4. **Test new offers.** Bundle deals, free shipping thresholds, gift-with-purchase. New offers unlock new audience segments.
5. **Launch in new countries.** Once domestic is profitable, test UK, Canada, Australia (English-speaking markets with good DTC infrastructure).

### How to Scale on Google

1. **Optimize your product feed titles.** Better titles = more impressions on relevant queries. This is the highest-leverage optimization.
2. **Add new products to PMax.** More products = more opportunities for Google to find converting search queries.
3. **Increase PMax target ROAS gradually.** Drop your target ROAS by 10-20% to let the algorithm bid more aggressively and win more auctions. Monitor blended ROAS to ensure profitability.
4. **Launch Standard Shopping for top products.** Give your bestsellers a dedicated campaign with higher bids and manual control.
5. **Add YouTube Shorts ads.** Short-form video in PMax asset groups or standalone YouTube campaigns taps into a massive, underpriced inventory.

### How to Scale on TikTok

1. **Volume of creative is everything.** Plan for 10+ new creatives per week. Most will fail. The winners pay for all the losers.
2. **Use Spark Ads at scale.** Partner with 10-20 creators who make organic-style content. Boost the best-performing organic posts as Spark Ads.
3. **Test TikTok Shop if eligible.** In-platform checkout reduces friction dramatically. Conversion rates are often 2-3x higher than sending traffic off-platform.
4. **Don't duplicate Meta creative.** What works on Meta rarely works on TikTok. The platform culture is different. Produce native content for each.

---

## Creative Production System

### The Creator Brief

When working with UGC creators, provide:
- The product (ship it to them)
- 3-5 key talking points (benefits, not features)
- The hook (tell them exactly how to start the video)
- The CTA (what to say at the end)
- Dos: Be natural, show the product in use, mention a specific result
- Don'ts: Don't start with "Hey guys," don't read from a script, don't show competitor logos

### Creative Batch Process

Efficient eCommerce brands batch creative production:
1. Film 10-20 raw video clips per product in one session
2. Edit into 5-8 final ad variations (different hooks, different lengths, different formats)
3. Create 3-5 static image variations from the same shoot
4. Build 2-3 carousels from the image set
5. Total output per batch: 10-16 unique ad creatives from one production session

### Creative Iteration Framework

When a creative is winning, don't just let it run until it dies. Extend its life:
- **New hook, same body:** Take the top-performing ad body and pair it with 3 new opening hooks
- **Same hook, new visual:** Take the winning hook and reshoot with a different creator or setting
- **Format swap:** Turn a winning video into a static image ad, or a winning static into a carousel
- **Offer layer:** Add a promotional offer to an already-proven creative

---
