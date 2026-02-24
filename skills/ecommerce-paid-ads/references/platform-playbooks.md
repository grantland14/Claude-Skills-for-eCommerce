# Platform Playbooks — Detailed Reference

This file contains detailed platform-specific campaign architectures, creative strategies, feed optimization guides, and setup instructions. Referenced from the main SKILL.md.

---

## Meta Ads (Facebook + Instagram) — Detailed

### Campaign Architecture for eCommerce

#### Advantage+ Shopping Campaigns (ASC)

The default starting point for most eCommerce brands. ASC consolidates targeting, placements, and optimization into one campaign that Meta's algorithm controls.

**When to use ASC:**
- You have 50+ purchases per week on your pixel
- You're spending $100+/day on Meta
- You want to scale with minimal manual management
- You have a strong catalog and diverse creative

**ASC setup:**
- Set an existing customer budget cap (typically 20-30% of total ASC budget)
- Upload 5-15 creative variations to give the algorithm options
- Use cost-per-result goals tied to your break-even ROAS
- Let it run 7 days minimum before making changes

#### Manual Campaign Structure (for smaller brands or granular control)

Use this when spending under $100/day or when you need creative testing control:

```
Campaign: Prospecting — Conversions (Purchase)
├── Ad Set: Broad (no interests, 18-65, country only)
│   ├── Ad: UGC video — problem/solution
│   ├── Ad: Carousel — product showcase
│   └── Ad: Static — lifestyle + benefit headline
├── Ad Set: Lookalike — Purchasers 1%
│   ├── Ad: UGC video — testimonial
│   └── Ad: Static — social proof + offer
└── Ad Set: Interest Stack — [your niche interests]
    └── Ads: Test winners from above

Campaign: Retargeting — Conversions (Purchase)
├── Ad Set: Viewed Product, 7 days (exclude purchasers)
│   ├── Ad: Dynamic Product Ad (DPA)
│   └── Ad: Testimonial + urgency
├── Ad Set: Added to Cart, 14 days (exclude purchasers)
│   ├── Ad: Cart reminder + free shipping nudge
│   └── Ad: DPA with discount overlay
└── Ad Set: Engaged 30 days (video viewers, page engagers)
    └── Ad: Brand story + bestseller callout

Campaign: Retention — Conversions (Purchase)
└── Ad Set: Past Purchasers, 30-180 days
    ├── Ad: New product announcement
    ├── Ad: Replenishment reminder
    └── Ad: Cross-sell carousel
```

---

### Meta Creative Strategy for eCommerce

**What wins on Meta for product brands:**

1. **UGC testimonial videos** — Real customer (or creator who looks like a real customer) talking about the product. iPhone quality outperforms studio polish. Structure: hook → problem → product reveal → result → CTA.

2. **Founder story ads** — The founder on camera explaining why they built the product. Works exceptionally well for brands with a mission or unique origin story. Feels authentic in the feed.

3. **Product demo / unboxing** — Show the product arriving, being opened, being used. Satisfying visuals + ASMR-adjacent content stops the scroll.

4. **Before/after or side-by-side** — Visual proof that the product works. Extremely effective for skincare, supplements, home organization, cleaning products.

5. **Carousel: multi-angle showcase** — Each card shows a different angle, benefit, or use case. First card is the hook. Last card is the CTA.

6. **Static + strong headline** — Product image with a bold, benefit-driven headline. Works well as a prospecting format when paired with a clear offer.

7. **Mashup / compilation** — Stitch together 3-5 short UGC clips from different creators. Volume of social proof in one ad.

**Creative testing cadence:**
- Launch 3-5 new creatives per week when actively scaling
- Kill underperformers after $50 spend or 3 days with no purchases
- Iterate on winners — take the winning hook and pair it with new visuals
- Refresh winning ads before fatigue sets in (watch frequency metric — above 3.0 means fatigue is starting)

---

### Meta Product Feed & Catalog

Your product catalog powers Dynamic Product Ads (DPA) and Advantage+ Shopping.

**Feed optimization checklist:**
- Product titles: Lead with the most searchable/descriptive terms. "[Brand] [Product Type] — [Key Feature]" format
- Images: First image should be clean product on white/simple background. Additional images show lifestyle use
- Prices: Ensure sale prices display correctly with proper `sale_price` field
- Availability: Remove out-of-stock items or they'll eat impressions with no conversions
- Product descriptions: Include key benefits and materials/ingredients — Meta uses this for targeting
- Custom labels: Tag products by margin tier, bestseller status, price range, or season so you can create targeted campaign subsets

**Dynamic Product Ads setup:**
- Prospecting DPA: Shows catalog products to people who haven't visited your site (Meta picks products algorithmically)
- Retargeting DPA: Shows specific products people viewed on your site
- Use product-set filters to exclude low-margin items from prospecting DPA

---

### Meta Budget & Scaling

**Starting budget framework:**
- Minimum viable test: $30-50/day per campaign
- Scale threshold: Once a campaign delivers 50+ purchases in 7 days at target ROAS, begin scaling
- Scaling method: Increase budget 20-30% every 3-4 days. Larger jumps reset the learning phase.
- Horizontal scaling: Duplicate winning ad sets with new creative rather than only increasing budget on one ad set

**Budget allocation by funnel stage:**
- Prospecting: 60-70% of total Meta spend
- Retargeting: 20-30%
- Retention/cross-sell: 5-10%

---

## Google Ads for eCommerce — Detailed

### Google Shopping & Performance Max

#### Performance Max (PMax)

Google's flagship campaign type for eCommerce. It runs across Search, Shopping, Display, YouTube, Gmail, and Discover from a single campaign.

**PMax setup for eCommerce:**
- Connect your Google Merchant Center with a healthy product feed
- Set a target ROAS (start with your break-even ROAS, then tighten as it learns)
- Upload asset groups: product images, lifestyle images, logos, headlines, descriptions, videos
- Create audience signals: upload your customer list, add purchase-intent audiences, and add your remarketing lists. These are SIGNALS, not targeting — PMax still goes broad, but signals help it learn faster
- Use asset group structure to separate product categories (each asset group should map to a logical product grouping)

#### Standard Shopping Campaigns

Still valuable for granular control. Use when:
- You want to control bids at the product or product-group level
- PMax is cannibalizing your brand search without adding incremental value
- You have a large catalog with vastly different margins across products

**Shopping feed optimization:**
- Product titles are the single biggest lever. Front-load with the search terms buyers use: "[Product Type] [Key Feature] [Brand] — [Size/Color/Variant]"
- GTINs and brand fields must be accurate — they affect impression eligibility
- Use `product_type` and `google_product_category` fields precisely
- Add `custom_label` fields to segment by margin, bestseller status, price tier, or season
- High-quality images with clean backgrounds get higher CTR
- Include promotion feed for merchant promotions (shows "Special offer" badge in Shopping results)

#### Brand vs. Non-Brand Search

**Always run a brand search campaign separately:**
- Protects your branded terms from competitors bidding on your name
- Typically 10x+ ROAS because the buyer already knows you
- Low cost, high conversion — don't let PMax take credit for branded purchases without a separate brand campaign to benchmark against

**Non-brand search for eCommerce:**
- Target product-category keywords: "organic dog treats," "silk pillowcase," "wireless earbuds for running"
- Use Shopping ads (not just text ads) for product-level queries
- Add negative keywords aggressively — eCommerce search gets polluted with informational queries fast

---

### Google Campaign Structure

**Recommended campaign structure:**
```
Brand Search — dedicated campaign, manual CPC or maximize conversions
PMax — main prospecting/shopping engine, target ROAS bidding
Standard Shopping — high-margin products or products you want granular control over
Non-Brand Search — category/product keywords, maximize conversion value
YouTube — top-of-funnel video (optional, for brands with video content)
Display Retargeting — site visitors who didn't purchase (7-30 day window)
```

**Budget split for Google:**
- PMax / Shopping: 50-60% of Google budget
- Brand Search: 10-15% (low spend, high ROAS — protect it)
- Non-Brand Search: 15-25%
- Retargeting Display: 5-10%
- YouTube: 5-10% (if running)

---

## TikTok Ads for eCommerce — Detailed

### TikTok Campaign Strategy

#### TikTok Shop Ads

If you're eligible for TikTok Shop, this is the highest-leverage TikTok ad format for eCommerce:
- **Product Shopping Ads:** Promote products from your TikTok Shop directly in the feed
- **LIVE Shopping Ads:** Drive viewers to your live shopping streams
- **Video Shopping Ads:** Shoppable video ads that let users buy without leaving TikTok

#### Standard TikTok Conversion Campaigns

For brands driving traffic to their own store:
- Objective: Website Conversions (optimize for Complete Payment event)
- Targeting: Start broad (age + country only), let the algorithm find buyers
- Creative: Native-feeling video content is mandatory. Polished ads get skipped.
- Minimum budget: $50/day per ad group, $50/day per campaign

---

### TikTok Creative Rules

TikTok has the shortest attention window of any platform. Your creative has to feel like content, not advertising.

**What works:**
- Real people talking to camera (not actors, not voiceover on B-roll)
- "POV" and "get ready with me" formats featuring your product
- Green screen format: creator in front of product page, reviewing it
- "Things TikTok made me buy" style content featuring your own product
- Stitching or duetting trending content with your product as the punchline

**What doesn't:**
- Polished brand videos that look like TV commercials
- Product-only shots with text overlays and music (the "Amazon ad" look)
- Any content that starts with "Hey guys" — instant scroll
- Slow intros — you have 0.5 seconds before they swipe

**Creative production cadence:**
- TikTok burns through creative faster than any other platform
- Plan for 5-10 new variations per week when actively spending
- Pay creators $50-200 per video through TikTok Creator Marketplace or direct outreach
- Use Spark Ads to boost organic creator content that mentions your product

---

## Pinterest Ads for eCommerce — Detailed

### Why Pinterest Works for eCommerce

- Users are in shopping/planning mode (not socializing)
- Pins have a long shelf life — an ad from 6 months ago can still drive traffic
- CPCs are typically 30-50% lower than Meta for visual product categories
- Shopping Ads pull directly from your product catalog

### Pinterest Campaign Setup

- **Catalog Shopping campaigns:** Upload your product feed, Pinterest creates shoppable pins automatically
- **Standard Consideration campaigns:** Promote high-performing organic pins
- **Conversion campaigns:** Optimize for checkout/purchase events (requires Pinterest tag with purchase data)

### Pinterest Creative

- Vertical images (2:3 ratio) dominate the feed
- Text overlay on image works well — include a clear benefit or offer
- Lifestyle-in-context imagery outperforms product-on-white
- Video pins get preferential distribution but aren't required

---

## Product Feed — Complete Quality Checklist

### Titles (most important field)

- Lead with what the customer would search for, not your internal product name
- Include: product type, key attribute, brand, size/color/variant
- Bad: "The Glow Getter"
- Good: "Vitamin C Brightening Serum — 30ml | The Glow Getter by [Brand]"
- Google Shopping: front-load the most important keywords (only ~70 chars show in Shopping results)
- Meta: Can be more descriptive since it's used for algorithmic targeting, not displayed in most placements

### Images

- Primary image: Product on white/clean background, no text overlay, no watermarks
- Additional images: Lifestyle use, product scale reference, ingredients/materials close-up
- Google Shopping requires the primary image to be clean — text overlay = disapproval
- Meta DPA: lifestyle images often outperform white-background shots

### Descriptions

- Include key benefits, materials/ingredients, and use cases
- Natural language — write for a human, not an algorithm
- Include relevant search terms naturally (not keyword stuffing)

### Pricing & Availability

- Keep prices accurate and update in real-time (price mismatches = disapprovals on Google)
- Use `sale_price` and `sale_price_effective_date` for promotions
- Remove or set out-of-stock products to "out of stock" (don't just leave stale data)

### Custom Labels (the secret weapon)

- Label 0: Margin tier (high-margin, mid-margin, low-margin)
- Label 1: Performance tier (bestseller, steady, underperformer)
- Label 2: Price range (under-25, 25-50, 50-100, 100-plus)
- Label 3: Season (spring, summer, fall, winter, evergreen)
- Label 4: Newness (new-arrival, established, clearance)

Use these labels to create smart campaign segments — bid aggressively on high-margin bestsellers, reduce spend on low-margin clearance items.

### Feed Management Tools

- **Shopify native feed**: Works for basic setups. Limited customization.
- **Google Shopping feed apps** (DataFeedWatch, Feedonomics, GoDataFeed): Essential for stores with 100+ SKUs. Allow title/description rules, custom label mapping, and feed optimization at scale.
- **Meta Commerce Manager**: Handles your Meta product catalog. Can sync from Shopify or accept a feed URL.
- **Pinterest Catalog Manager**: Sync from Shopify or upload feed for Pinterest Shopping.

---
