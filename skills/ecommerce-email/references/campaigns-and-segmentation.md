# Campaigns & Segmentation

Reference file for the ecommerce-email skill. Contains the campaign calendar, BFCM deep-dive, launch campaigns, flash sales, content campaigns, RFM segmentation, engagement segments, purchase behavior segments, and category affinity.

---

## Seasonal Campaign Calendar

Plan your promotional calendar at the start of each quarter. Each campaign follows the structure: **Teaser > Launch > Reminder > Last Chance**.

| Month | Key Dates | Campaign Angles |
|-------|-----------|----------------|
| January | New Year's, MLK Day | New year fresh start, "new you" angle, winter clearance |
| February | Valentine's Day, Presidents' Day | Gifts for loved ones, self-love/treat yourself, Galentine's |
| March | Int'l Women's Day, St. Patrick's, spring equinox | Spring refresh, new arrivals, women-focused |
| April | Earth Day, Easter | Sustainability story, spring collection, outdoor/renewal |
| May | Mother's Day, Memorial Day | Gift guides, gratitude, summer kickoff sale |
| June | Father's Day, Pride, summer solstice | Gift guides, summer collection, Pride if authentic to brand |
| July | 4th of July, Prime Day adjacent | Summer sale, mid-year event, patriotic if on-brand |
| August | Back to school, end of summer | Last-chance summer, fall preview, back-to-routine |
| September | Labor Day, fall equinox | Fall launch, Labor Day sale, new season |
| October | Halloween, early holiday | Halloween if on-brand, holiday gift guide teasers |
| November | BFCM, Thanksgiving | Biggest revenue month -- see BFCM Deep-Dive below |
| December | Holiday season, end of year | Gift guides, shipping deadlines, year-end sale, gift cards |

### Campaign Email Structure (per event)
1. **Teaser** (3-5 days before): Build anticipation, reveal date
2. **Launch** (event day): Announce the offer, main CTA
3. **Reminder** (midpoint): For multi-day events, re-engage non-openers
4. **Last Chance** (final hours): Urgency, deadline-driven

---

## BFCM Deep-Dive

The biggest eCommerce email event of the year. Plan 4-6 weeks in advance.

### Pre-BFCM (2-4 weeks before)
- **List building push**: Increase popup aggressiveness, run lead gen campaigns, social ads to email list
- **VIP early access teaser**: Let VIPs know they'll get first access
- **Teaser campaign** (1 week before): "Something big is coming" -- build anticipation without revealing the offer
- **Segment your list**: Engaged vs. semi-engaged vs. unengaged. Adjust send frequency accordingly.

### Black Friday (Day of)
- **Email 1: Early morning launch** (6-7am local time): Reveal the sale, main CTA
- **Email 2: Midday reminder** (12-1pm): "Sale is live" for non-openers, different subject line
- **Email 3: Evening urgency** (7-8pm): "Hours left" or "Selling fast" messaging

### Weekend (Sat-Sun)
- **Saturday**: One email -- highlight bestsellers or categories, social proof
- **Sunday**: One email -- "Cyber Monday preview" or "extended deals"

### Cyber Monday
- **Email 1: Fresh angle** (morning): Position as separate event from BF, new deals or extended offers
- **Email 2: Final hours** (evening): Last chance for the entire BFCM event

### Post-BFCM
- **Thank you email** (Tuesday): Thank customers, set expectations for shipping, tease upcoming holiday content
- **Gift guide** (later in week): Transition to holiday gifting messaging
- **Upsell/cross-sell**: Target BFCM buyers with complementary products

### BFCM Segmentation
- VIPs: Early access (Wednesday before BF), exclusive bundles
- Engaged subscribers: Full BFCM sequence
- Semi-engaged: BF launch + CM launch only (2 emails)
- Unengaged: One BF email only (this is your re-engagement opportunity)
- Non-subscribers: Use ads and SMS to drive to email signup for early access

---

## Product & Collection Launches

### Pre-Launch (7-14 days before)
- Teaser email with preview image or detail shots
- Waitlist signup (creates urgency and captures high-intent leads)
- VIP/insider early access registration

### Launch Day
- **Email 1: General launch** (morning): Product details, benefits, CTA to shop
- **Email 2: Reminder** (evening): For non-openers, different subject line angle
- If applicable, share launch on social and reference it in email

### Post-Launch (2-7 days)
- Social proof email: First customer reviews, UGC, influencer content
- "Almost gone" email if inventory is genuinely limited
- Cross-sell to related products

---

## Content & Educational Campaigns

Not every email should sell. Content emails build brand affinity, improve engagement metrics, and prime customers for future purchases.

### Types
- **Brand storytelling**: Origin story, founder journey, mission updates
- **How-to / tutorials**: How to use your products, styling guides, recipes
- **Behind the scenes**: Manufacturing process, team spotlight, day-in-the-life
- **Customer spotlights**: Feature real customers with UGC
- **Industry education**: Ingredients deep-dives, material sourcing, sustainability practices
- **Community content**: Events, partnerships, collaborations

### Frequency
Mix 1-2 content emails for every 3-4 promotional emails. A good ratio is 60% promotional / 40% content-driven.

---

## Flash Sales & Limited Drops

Short-window urgency that drives impulse purchases.

### Structure (24-48 hour window)
- **Email 1: Announce** (launch): What's on sale, how long it lasts, shop now
- **Email 2: Reminder** (midpoint): "X hours left" / "Selling fast"
- **Email 3: Final hours** (last 2-4 hours): "Ends tonight" / "Almost over"

### Best Practices
- Don't run flash sales too frequently (monthly max) -- they lose impact
- Use real deadlines, not "ending soon" vagueness
- Segment: Send all 3 to engaged, Email 1 + 3 to semi-engaged

---

## RFM Segmentation

RFM (Recency, Frequency, Monetary) is the foundation of eCommerce email segmentation. Define segments based on actual purchase behavior.

| Segment | Definition | Email Strategy |
|---------|-----------|---------------|
| **Champions** | Purchased recently, buy often, spend the most | VIP treatment, early access, referral asks, minimal discounts |
| **Loyal Customers** | Buy regularly, good spend | Cross-sell, loyalty program, exclusive content |
| **Potential Loyalists** | Recent buyers, bought 2-3 times | Nurture to next purchase, product education, subscription offers |
| **New Customers** | First purchase recently | Welcome + onboard, encourage second purchase, brand education |
| **Promising** | Recent first purchase, low spend | Upsell, product recommendations, engagement content |
| **At Risk** | Used to purchase regularly, slowing down | Win-back emails, special offers, "we miss you" |
| **Can't Lose Them** | High historical spend, going dormant | Aggressive win-back, personal outreach, exclusive offers |
| **Hibernating** | Long time since purchase, low frequency | Deep discount win-back or sunset |
| **Lost** | Very old last purchase, minimal history | Sunset flow, remove if no re-engagement |

### Practical Klaviyo Implementation
- Create segments using "Last Order Date," "Number of Orders," and "Total CLV" properties
- Example: Champions = "Placed order in last 30 days AND placed order at least 4 times AND total CLV > $200"
- Update thresholds quarterly as your customer base grows

---

## Engagement Segments

| Segment | Definition | Strategy |
|---------|-----------|----------|
| **Engaged** | Opened or clicked in last 30 days | Full campaign send list, all flows active |
| **Semi-engaged** | Opened or clicked in 30-90 days | Reduce frequency, stronger subject lines, re-engagement content |
| **Unengaged** | No opens or clicks in 90+ days | Sunset flow, suppress from regular sends |
| **Never engaged** | Subscribed, never opened | One re-engagement attempt, then suppress |

**Practical tip**: Your primary campaign send list should be Engaged + Semi-engaged. Never blast your full list -- it hurts deliverability.

---

## Purchase Behavior Segments

| Segment | Definition | Strategy |
|---------|-----------|----------|
| **Non-purchasers** | Subscribed, never bought | Welcome flow, discount offers, product education |
| **One-time buyers** | Exactly 1 order | Second-purchase push, cross-sell, review request |
| **Repeat buyers** | 2-3 orders | Loyalty program, subscription offers, VIP path |
| **VIPs** | 4+ orders or top 10% spend | Exclusive treatment, early access, founder access |
| **High AOV** | Above-average order value | Premium product recommendations, bundles |
| **Discount buyers** | Only bought during sales | Value messaging, avoid constant discounting, bundle offers |

---

## Product Category Affinity

If you sell across multiple categories, segment by what people have purchased:
- "Bought from [Collection A]" -- recommend related or new items from that collection
- "Bought [Product Type]" -- cross-sell complementary products
- Use Klaviyo's "Has ordered [product]" or catalog category properties

### Implementation Tips
- Create segments per major product category
- Use these segments for targeted campaign sends (e.g., new skincare arrivals only go to skincare buyers + browsers)
- Layer category affinity on top of engagement segments for precise targeting
- Use Klaviyo's catalog data to build dynamic product recommendation blocks per category
