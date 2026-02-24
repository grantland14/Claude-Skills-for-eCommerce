# Flow Playbooks — Detailed Per-Email Breakdowns

Reference file for the ecommerce-email skill. Contains detailed per-email breakdowns, subject line formulas, Klaviyo setup notes, and benchmarks for every automated flow.

---

## Welcome Series

The most important brand-building flow. Every new subscriber should enter this.

**Trigger**: New email subscriber (popup, footer form, checkout opt-in, landing page)
**Length**: 5-7 emails over 10-14 days
**Goal**: Convert subscriber to first-time buyer; introduce brand

**Split Logic**: After Email 1, split into two paths:
- **Purchasers**: Move to Post-Purchase flow, exit Welcome
- **Non-purchasers**: Continue Welcome Series

### Email 1: Welcome + Incentive (Immediate)
- Deliver the promised discount or offer
- Brief brand introduction (1-2 sentences)
- Clear CTA to shop with discount code
- Subject formulas: "Welcome to [Brand] -- here's your [X]% off" / "Your [Brand] discount is inside" / "You're in. Here's your welcome gift."

### Email 2: Brand Story (Day 1-2)
- Why you started this brand
- What makes you different
- Your mission or values
- Light CTA to explore bestsellers
- Subject formulas: "The story behind [Brand]" / "Why we make [product]" / "Meet the founder"

### Email 3: Social Proof + Bestsellers (Day 3-4)
- Customer reviews and star ratings
- Bestselling products with images
- UGC photos if available
- CTA to shop bestsellers
- Subject formulas: "Our customers' favorites" / "Why [X,000]+ people love [product]" / "See what everyone's buying"

### Email 4: Discount Reminder + Objection Handling (Day 5-6)
- Remind them their discount is waiting
- Address top objection (shipping, returns, ingredients, sizing)
- Single product recommendation or quiz CTA
- Subject formulas: "Don't forget -- your [X]% off expires soon" / "Still thinking it over?" / "Your discount is waiting, [Name]"

### Email 5: Final Urgency (Day 7-8)
- Discount expiring (give a real deadline)
- Recap the value proposition
- Strong, direct CTA
- Subject formulas: "Last chance: [X]% off ends tonight" / "Your welcome offer expires today" / "Final hours for your discount"

### Email 6 -- Non-Purchasers Only: Education / Value (Day 9-10)
- How-to content, ingredient/material deep dive, or styling guide
- Position your product as the solution
- Soft CTA
- Subject formulas: "How to [achieve result] with [product]" / "The beginner's guide to [category]"

### Email 7 -- Non-Purchasers Only: Last Chance or New Angle (Day 12-14)
- Try a different offer (free shipping instead of % off, GWP, bundle deal)
- Or final "we'd love to have you" message
- Subject formulas: "One more thing before we go..." / "We made this easier for you" / "A different way to try [Brand]"

### Klaviyo Setup Notes
- Use List Trigger (the signup list) not a segment
- Add a Conditional Split after Email 1 checking "Has Placed Order since starting this flow"
- Use unique coupon codes via Shopify integration (not static codes -- prevents code sharing)
- Exclude anyone who already placed an order before subscribing
- Set Smart Sending to 16 hours minimum between emails

### Benchmarks
- Open rate: 40-60%
- Click rate: 5-10%
- Flow conversion rate: 5-15% (subscriber to first purchase)
- Revenue per recipient: $1.50-$5.00+

---

## Abandoned Cart

Your highest-revenue automated flow. Recovers purchases that would otherwise be lost.

**Trigger**: Started Checkout (preferred) or Added to Cart, then didn't purchase
**Length**: 3-4 emails over 72 hours
**Goal**: Recover the sale

**Timing consideration**: The first email delay matters. Test between 1-4 hours. Too fast feels pushy. Too slow loses urgency.

### Email 1: Simple Reminder (1-4 hours after abandonment)
- Show the products they left behind (dynamic cart content)
- No discount yet
- Simple copy: "You left something behind"
- Direct CTA back to cart
- Subject formulas: "You left something in your cart" / "Forget something?" / "Your cart is waiting"

### Email 2: Social Proof + Objection Handling (24 hours)
- Show the cart items again
- Add customer reviews for those products
- Address top purchase objection (shipping time, return policy, product quality)
- CTA back to cart
- Subject formulas: "People love this -- see why" / "Still thinking about [Product]?" / "Here's what others say about [Product]"

### Email 3: Urgency or Incentive (48 hours)
- Create urgency: "Items sell out" / "Cart doesn't last forever"
- Optional: Offer a small incentive (free shipping, 10% off, GWP)
- If offering discount, use a unique code with a 48-hour expiration
- Subject formulas: "Your cart is about to expire" / "Don't miss out on [Product]" / "We saved your cart (but not for long)"

### Email 4 -- Optional: Final Attempt (72 hours)
- Last chance message
- Try a completely different angle (benefit-focused, testimonial-driven, founder message)
- Include incentive if you didn't in Email 3
- Subject formulas: "Last chance to grab [Product]" / "Going, going..." / "Final reminder -- your [Product] is waiting"

### The Discount Debate
- **For premium/luxury brands**: Avoid discounts in abandoned cart. It trains customers to abandon for discounts. Instead use urgency, social proof, and free shipping.
- **For mid-range DTC**: Test discount in Email 3 only. Start with free shipping before percentage off.
- **For lower-AOV / impulse products**: A small discount (10-15%) in Email 3 can meaningfully lift recovery rates.
- **Rule of thumb**: If your margins are above 60%, a 10% discount in Email 3 is worth testing. If margins are tight, use free shipping or gift with purchase instead.

### Klaviyo Setup Notes
- Use "Started Checkout" trigger (not "Added to Cart") for higher intent -- unless you have very few checkouts
- Add a flow filter: "Has not Placed Order since starting this flow" on every email
- Enable dynamic cart content blocks (pulls products, images, prices automatically)
- Exclude anyone who places an order (they auto-exit)
- If offering discounts, use Conditional Split to exclude repeat customers or VIPs from discount emails
- Smart Sending: 16 hours

### Benchmarks
- Overall recovery rate: 5-15% of abandoned carts
- Email 1 open rate: 40-55%
- Click rate: 8-15%
- Revenue per recipient: $3-$8+

---

## Browse Abandonment

Captures visitors who looked but didn't add to cart. Lower intent than cart abandonment, so use a softer approach.

**Trigger**: Viewed product page, didn't add to cart or purchase
**Length**: 2-3 emails over 48 hours
**Goal**: Bring them back to consider the product

### Email 1: "Still Looking?" (2-6 hours after browsing)
- Show the product(s) they viewed
- Brief benefit-driven copy
- No discount
- Subject formulas: "Still thinking about [Product]?" / "Take another look" / "You were checking out [Product]"

### Email 2: Social Proof for Viewed Products (24 hours)
- Reviews and ratings for the products they browsed
- "Customers who bought this also loved..." recommendations
- Subject formulas: "Why customers love [Product]" / "[X] people bought this today" / "See what others think about [Product]"

### Email 3 -- Optional: Recommendations (48 hours)
- If they didn't engage with the viewed products, show related alternatives
- "Maybe you'd prefer these instead"
- Subject formulas: "More options you might love" / "Similar to what you were browsing" / "Picked these for you"

### Klaviyo Setup Notes
- Use "Viewed Product" metric as trigger
- Add flow filter: exclude anyone who "Added to Cart" or "Placed Order" (they're in other flows)
- Set minimum page views threshold (e.g., viewed 2+ products or spent 30+ seconds)
- Use dynamic product blocks pulling from viewed items
- Limit frequency: once per 7 days per person

### Benchmarks
- Open rate: 30-45%
- Click rate: 3-7%
- Conversion rate: 1-3%
- Revenue per recipient: $0.50-$2.00

---

## Post-Purchase Series

Turns one-time buyers into repeat customers. This flow directly impacts customer lifetime value.

**Trigger**: Placed Order (or Fulfilled Order for delivery-timed emails)
**Length**: 4-6 emails, timing varies by product type
**Goal**: Build loyalty, drive repeat purchase, collect reviews

**Conditional Split**: First-time buyer vs. repeat buyer -- different messaging

### Email 1: Thank You + What's Next (Immediate after purchase)
- Genuine thank you (not just a receipt)
- What to expect: shipping timeline, what's in the box
- Brand reinforcement (you made a great choice)
- Note: This supplements the transactional order confirmation, not replaces it
- Subject formulas: "Thank you for your order!" / "You made a great choice" / "Welcome to the [Brand] family"

### Email 2: Product Tips / How to Use (2-3 days after delivery)
- How to get the most from their product
- Usage tips, care instructions, recipes, styling ideas
- Video or visual content works well
- Subject formulas: "How to get the most from your [Product]" / "Your [Product] guide" / "Pro tips for your new [Product]"

### Email 3: Review Request (7-10 days after delivery)
- Ask for a product review
- Make it easy (one-click stars, direct link to review form)
- Include the product image as a reminder
- Optional: Small incentive for leaving a review (loyalty points, entry in giveaway)
- Subject formulas: "How are you liking [Product]?" / "Leave a review -- we'd love your feedback" / "Quick favor? Rate your [Product]"

### Email 4: Cross-Sell (14-21 days after purchase)
- Recommend complementary products
- "Customers who bought [Product] also love..."
- Personalized recommendations based on purchase
- Subject formulas: "Complete your routine" / "Goes great with your [Product]" / "Picked these for you, [Name]"

### Email 5: Replenishment Reminder (Product-Dependent Timing)
- For consumable products: remind when they're likely running low
- Timing examples: Skincare (30-45 days), supplements (25-30 days), coffee (14-21 days), pet food (21-30 days)
- Show the product, easy reorder CTA
- Optional: Offer subscription/auto-ship
- Subject formulas: "Running low on [Product]?" / "Time for a refill?" / "Your [Product] supply -- need more?"

### Email 6: Referral Ask (30+ days, for engaged/satisfied customers)
- Only send to customers who opened/clicked previous emails or left positive reviews
- Explain referral program
- Make sharing easy
- Subject formulas: "Share the love -- give [X]%, get [X]%" / "Know someone who'd love [Brand]?" / "Your friends will thank you"

### First-Time Buyer Variations
- Email 1: Emphasize "welcome to the family" messaging
- Add an extra email between 1 and 2: educational content about your brand, community, or cause
- Cross-sell email focuses on "complete your first experience" vs. "expand your collection"

### Repeat Buyer Variations
- Email 1: Thank them for coming back, acknowledge loyalty
- Skip brand education emails -- they know you
- Cross-sell email can be more adventurous (new categories, limited editions)
- Earlier referral ask (they're already proven fans)

### Klaviyo Setup Notes
- Use "Placed Order" trigger for immediate emails
- Use "Fulfilled Order" trigger (or "Ordered Product" + delivery date offset) for post-delivery emails
- Add Conditional Split for "Has Placed Order at least 2 times" to separate first-time vs. repeat
- Integrate with review platform (Judge.me, Stamped, Yotpo, Okendo) for Email 3
- Use product-specific conditional splits for replenishment timing
- Dynamic product recommendations using Klaviyo's product feed

### Benchmarks
- Open rate: 50-65% (people love post-purchase emails)
- Click rate: 5-12%
- Review collection rate: 5-15%
- Repeat purchase rate from flow: 8-20%

---

## Win-Back / Lapsed Customer

Re-engages customers who haven't purchased in a while. Different treatment for different value levels.

**Trigger**: No purchase in X days (based on your typical repurchase cycle)
- Fast-repurchase products (supplements, coffee): 45-60 days
- Medium-cycle products (skincare, fashion): 90-120 days
- Slow-cycle products (furniture, electronics): 180-365 days

**Length**: 3-5 emails over 30 days
**Goal**: Drive a repeat purchase or gracefully sunset

**Segment by Value**: Use a Conditional Split for high-value (3+ orders or top 20% spend) vs. standard customers. High-value customers deserve more aggressive offers and more emails.

### Email 1: "We Miss You" + What's New (Day 0)
- Friendly re-introduction
- Highlight new products, bestsellers, or brand updates since their last purchase
- No discount yet
- Subject formulas: "It's been a while, [Name]" / "A lot has changed since your last visit" / "We've missed you"

### Email 2: Bestsellers + Social Proof (Day 7)
- Show current bestsellers with reviews
- Recent customer testimonials or UGC
- "See what you've been missing"
- Subject formulas: "Our customers' favorites right now" / "Trending this week" / "Everyone's loving these"

### Email 3: Incentive Offer (Day 14)
- Offer a discount or free shipping
- Standard customers: 10-15% off
- High-value lapsed: 15-20% off or exclusive bundle
- Set an expiration (7 days)
- Subject formulas: "A little something to bring you back" / "[X]% off -- just for you, [Name]" / "Come back and save"

### Email 4: Final Offer + Urgency (Day 21)
- Discount expiring reminder
- Recap what they're missing
- Last strong push
- Subject formulas: "Last chance for [X]% off" / "Your offer expires tomorrow" / "Don't miss this, [Name]"

### Email 5: Sunset Warning (Day 30)
- "We'll stop emailing you if we don't hear back"
- One-click to stay subscribed
- If no response, move to suppressed/sunset segment
- Subject formulas: "Should we stop emailing you?" / "Is this goodbye?" / "We need to hear from you"

### Klaviyo Setup Notes
- Use a Segment trigger, not a metric trigger: "Has placed order at least once AND has not placed order in X days AND has not been in this flow in the last 90 days"
- Add Conditional Split for customer value (total CLV or order count)
- Use unique coupon codes with real expiration dates
- After Email 5 with no engagement, add to a "Sunset" list and suppress from regular campaigns
- Klaviyo Predictive Analytics: Use "Predicted Next Order Date" if available for smarter trigger timing

### Benchmarks
- Open rate: 20-35% (lower than other flows -- these are cold contacts)
- Win-back rate: 3-8% of lapsed customers
- Revenue per recipient: $1-$4

---

## Back in Stock

High-urgency, high-conversion flow for products that were out of stock.

**Trigger**: Product returns to inventory AND profile signed up for back-in-stock notification
**Length**: 1-2 emails
**Goal**: Immediate purchase

### Email 1: It's Back (Immediate)
- The product they wanted is back
- Show product image, price, reviews
- Strong urgency: "These sell out fast"
- Direct CTA to product page
- Subject formulas: "[Product] is back in stock" / "It's back -- and it won't last long" / "Good news: [Product] is available again"

### Email 2: Selling Fast Reminder (24 hours, if still in stock)
- Only send if still in stock
- "Going fast" urgency
- Subject formulas: "[Product] is selling fast" / "Still available -- not for long" / "Last chance to grab [Product]"

### Klaviyo Setup Notes
- Use Klaviyo's Back in Stock feature (built-in for Shopify stores)
- Requires a "Notify Me" button on out-of-stock product pages
- Flow triggers automatically when inventory is replenished
- Add a catalog check before Email 2 to confirm still in stock

### Benchmarks
- Open rate: 50-70% (very high intent)
- Click rate: 15-25%
- Conversion rate: 10-25%

---

## Price Drop

Notifies subscribers when a product they've shown interest in drops in price.

**Trigger**: Product price decreases AND profile has viewed or wishlisted the product
**Length**: 1-2 emails
**Goal**: Convert price-sensitive shoppers

### Email 1: Price Drop Alert (Immediate)
- Show the product with old price crossed out and new price
- "The [Product] you were eyeing just dropped in price"
- Direct CTA to buy
- Subject formulas: "Price drop on [Product]" / "Good news -- [Product] is now [X]% off" / "The [Product] you wanted just got cheaper"

### Email 2: Reminder (48 hours)
- "Price won't last forever"
- Subject formulas: "Still on sale: [Product]" / "Price drop reminder -- [Product]"

### Klaviyo Setup Notes
- Use Price Drop flow trigger (Klaviyo built-in for Shopify)
- Triggers based on "Viewed Product" history
- Add catalog-level price comparison logic

---

## VIP / Loyalty Recognition

Rewards your best customers and deepens their connection to the brand.

**Trigger**: Customer reaches a spending threshold (top 10% by total spend), purchase count milestone (5th order, 10th order), or loyalty tier upgrade
**Length**: 2-3 emails
**Goal**: Retain high-value customers, make them feel special

### Email 1: VIP Recognition + Exclusive Perk
- Acknowledge their VIP status by name
- Offer something exclusive: early access to new products, VIP-only discount, free product, or free express shipping
- Personal tone -- from the founder if possible
- Subject formulas: "You're a VIP, [Name]" / "Something special for our best customers" / "Thank you -- you've earned this"

### Email 2: Early Access (Timed with Next Launch)
- Give VIPs first access to new products or sales (24-48 hours before general public)
- "You get first pick"
- Subject formulas: "VIP early access: [Product/Sale]" / "First look -- just for you" / "Before anyone else sees this"

### Email 3: Personal Founder Thank You (Annual)
- Genuine thank you message
- Share what their support has meant
- No hard sell -- relationship building
- Subject formulas: "A personal thank you from [Founder Name]" / "You've been with us for [X] -- thank you"

### Klaviyo Setup Notes
- Use Segment trigger: "Total CLV is at least [X]" or "Has placed order at least [X] times"
- Tag VIP profiles with a custom property for easy exclusion from discount flows
- Create a VIP segment for campaign targeting

---

## Birthday / Anniversary

Personal touch that drives purchases during a celebratory moment.

**Trigger**: Customer birthday (collected via signup, quiz, or profile) or first purchase anniversary
**Length**: 1-2 emails

### Email 1: Birthday Gift (7 days before or on birthday)
- Personalized birthday message
- Special discount or free gift with purchase
- Use a unique coupon code with 14-day expiration
- Subject formulas: "Happy birthday, [Name]! A gift for you" / "Your birthday treat is here" / "It's your day -- celebrate with [X]% off"

### Email 2: Reminder (7 days after birthday email, if unused)
- "Don't forget your birthday gift"
- Coupon expiring soon
- Subject formulas: "Your birthday gift expires soon" / "Don't let your gift go to waste"

### Klaviyo Setup Notes
- Requires a "Birthday" date property on profiles
- Use Date Property trigger in Klaviyo
- For anniversary: use "First Placed Order" date as trigger

---

## Sunset / List Cleaning

Protects your deliverability by removing unengaged subscribers. Essential for maintaining inbox placement.

**Trigger**: 90-180 days of no email engagement (no opens, no clicks)
**Length**: 3 emails over 14 days
**Goal**: Re-engage or remove to protect sender reputation

### Email 1: "Are You Still Interested?" (Day 0)
- Honest and direct: "We noticed you haven't been opening our emails"
- Ask them to click to confirm they want to stay
- Single CTA: "Yes, keep me subscribed"
- Subject formulas: "Do you still want to hear from us?" / "Can we keep in touch?" / "Quick question, [Name]"

### Email 2: Last Chance + Incentive (Day 7)
- Offer a discount or exclusive content as motivation to re-engage
- "We don't want to lose you"
- Subject formulas: "We don't want to say goodbye" / "Last chance to stay on the list" / "A special offer before you go"

### Email 3: Final Warning (Day 14)
- "This is our last email unless you click"
- Make it very clear they'll be removed
- One-click CTA to stay
- Subject formulas: "This is goodbye (unless you click)" / "We're removing you from our list" / "Final email -- stay or go?"

**After Flow**: Anyone who doesn't engage is automatically suppressed from all email sends. They stay in your system but don't receive marketing emails.

### Klaviyo Setup Notes
- Use Segment trigger: "Has received email at least 10 times in last 90 days AND has not opened or clicked email in last 90 days"
- After flow completion with no engagement, add to a "Suppressed -- Sunset" list
- Run this flow continuously, not as a one-time campaign
- Re-evaluate quarterly: adjust the engagement window based on your sending frequency

### Benchmarks
- Re-engagement rate: 2-5% (most won't come back -- that's the point)
- Expect to suppress 20-40% of unengaged profiles
- Post-sunset: improved open rates, better deliverability
