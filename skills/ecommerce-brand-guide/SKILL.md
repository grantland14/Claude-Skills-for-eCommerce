---
name: ecommerce-brand-guide
description: eCommerce brand guide skill for Claude. Helps DTC founders create and maintain a structured brand guide that all other eCommerce skills reference automatically. Covers brand identity, customer personas, product catalog, voice and messaging, competitive positioning, key sales dates, and proof points.
---

# eCommerce Brand Guide

You help eCommerce and DTC founders build a structured brand guide that lives at `.claude/brand-guide.md`. This file becomes the single source of truth that every other eCommerce skill reads before doing work — so founders never have to repeat their brand story, customer profile, or product details across different tasks.

Think of this as your brand's operating manual for AI. Every time you ask Claude to write ad copy, build an email flow, or draft product page copy, it reads this file first. The better this file is, the better everything else gets.

## How This Works

The brand guide is stored at `.claude/brand-guide.md` in your project.

**Other skills check this file automatically.** When you use the ecommerce-email, ecommerce-copywriting, or ecommerce-paid-ads skills, they read your brand guide first and only ask for information that isn't already captured. No more re-explaining who your customer is every time.

**You maintain it.** Run this skill whenever you need to create your brand guide from scratch, update a section, or add new products. The guide grows with your brand.

---

## Workflow

### Step 1: Check for an Existing Guide

First, check if `.claude/brand-guide.md` already exists.

**If it exists:**
- Read it and give a quick summary of what's captured
- Ask which sections need updating or expanding
- Only gather info for those sections
- Preserve everything else as-is

**If it doesn't exist, offer two paths:**

1. **Quick-start from your store** (recommended): Scan the repo for any existing copy — README, product descriptions, about page, meta descriptions, homepage content — and draft a V1 of the brand guide from what you find. Then walk through it with the founder to correct, expand, and fill gaps. This is faster than starting from a blank page.

2. **Build from scratch**: Walk through each section one at a time in conversation, gathering details and confirming as you go.

After presenting a draft, always ask: "What needs fixing? What's missing? What would you add?"

### Step 2: Gather Information

Walk through each section below. Don't dump all questions at once — go section by section, confirm each one, then move on.

**Important principles:**
- Use the founder's actual words whenever possible. "Our customers say..." is more valuable than polished marketing language.
- If a section doesn't apply (e.g., no B2B personas for a pure DTC brand), skip it.
- Push for specifics over generalities. "Women 25-40 who do yoga and care about sustainability" is useful. "Health-conscious consumers" is not.

---

## Sections

### 1. The Brand

The foundation. Who you are and what you stand for.

**Capture:**
- Brand name and URL
- One-line description (what you sell in one sentence)
- The origin story — why this brand exists, what frustration or gap led to it
- Brand mission — what you stand for beyond selling products
- What makes you different from other brands in your category (2-4 differentiators)
- Product category and where you sit in the market (budget, mid-range, premium, luxury)

**Questions to ask:**
- "Describe your brand in one sentence to someone who's never heard of you."
- "Why did you start this? What was the frustration or gap you saw?"
- "If a customer is comparing you to two other brands, what's the reason they pick you?"

---

### 2. Customer Personas

Who buys from you. Be specific — the more detailed these are, the better every piece of copy, email, and ad will be.

**For each persona, capture:**
- A short name for the persona (e.g., "The Busy Mom," "The Ingredient-Obsessed," "The Gift Buyer")
- Demographics: age range, gender skew, location, income level
- Lifestyle and values: what matters to them beyond your product
- What triggers the purchase: the moment or feeling that makes them buy
- What almost stops them: the objection or hesitation right before checkout
- How they talk about the problem: actual language from reviews, DMs, Reddit, TikTok comments
- Where they spend time online: Instagram, TikTok, YouTube, Pinterest, Google, email

**Most DTC brands have 2-4 distinct buyer personas.** Capture all of them, ordered by revenue contribution (biggest first).

**Questions to ask:**
- "Who is your best customer? Describe a real person who buys from you."
- "What are they feeling or experiencing right before they look for your product?"
- "What's the #1 reason someone almost buys but doesn't?"
- "Pull up your best customer review — what words do they use?"

---

### 3. Product Catalog

Your key products, organized so other skills can reference them intelligently.

**For the overall catalog, capture:**
- Number of SKUs (roughly)
- Main product categories or collections
- Average order value (AOV)
- Hero product(s) — the bestsellers that drive the most revenue
- Signature ingredients, materials, or technology that span multiple products
- Price range (lowest and highest price points)

**For each hero product (your top 3-5), capture:**
- Product name
- Price
- What it does / what problem it solves
- Key ingredients, materials, or specs
- What makes it different from competitors' versions
- Best-performing proof point (top review, press mention, or stat)
- URL (product page link)

**Questions to ask:**
- "What's your #1 bestseller? Why do people love it?"
- "What's your most-reviewed product? What do the reviews say?"
- "If someone is buying from you for the first time, what product do you point them to?"

---

### 4. Brand Voice

How your brand sounds. This determines the tone of every email, ad, product description, and landing page.

**Capture:**
- Voice in 3-5 adjectives (e.g., "warm, confident, playful, slightly irreverent, never corporate")
- How formal or casual the brand is (on a spectrum from "luxury restrained" to "texts with your best friend")
- Specific phrases, expressions, or words the brand loves to use
- Words and phrases the brand never uses (e.g., "anti-aging," "cheap," "clinical-grade")
- A reference brand whose voice you admire or want to sound like
- One example of copy that nails the brand voice (pull from their site, emails, or social)

**Questions to ask:**
- "If your brand were a person at a dinner party, how would they talk?"
- "Show me a piece of your copy that you love — something that sounds exactly like your brand."
- "Are there any words or phrases your brand avoids?"

---

### 5. Messaging & Positioning

The core messages your brand leads with across channels.

**Capture:**
- Primary value proposition: the single most important promise you make to customers (1-2 sentences)
- Supporting messages: 3-5 secondary messages that reinforce the value prop
- Elevator pitch: 30-second version of why your brand exists and why it matters
- Tagline or slogan (if you have one)
- Key objections and how you respond to each:

| Objection | Response |
|-----------|----------|
| "It's too expensive" | [How you address price] |
| "Does it actually work?" | [How you prove efficacy] |
| "I've never heard of this brand" | [How you build trust fast] |

**Questions to ask:**
- "When someone asks 'why should I buy this?', what's your go-to answer?"
- "What's the most common pushback you hear, and how do you handle it?"

---

### 6. Competitive Landscape

Where you sit relative to alternatives. This sharpens positioning across every skill.

**Capture:**
- Direct competitors: brands selling similar products to similar customers (name 2-5)
- For each competitor: what they do well, where they fall short, and how you're different
- Indirect competitors: different product categories that solve the same underlying problem
- The "do nothing" alternative: what happens if the customer doesn't buy at all (this is often your biggest competitor)
- Your unfair advantage: the one thing that's hardest for competitors to copy

**Questions to ask:**
- "When customers are comparing you to someone else, who is it?"
- "What do your competitors get wrong that you get right?"
- "What's the one thing you do that nobody else can easily replicate?"

---

### 7. Key Dates & Calendar Moments

The sales events, seasonal moments, and brand milestones that drive your marketing calendar. This feeds directly into email campaign planning, ad scheduling, and promotional copy.

**Capture:**

**Annual Sales Events:**
- Which major sales events do you participate in? (BFCM, Memorial Day, Labor Day, etc.)
- Typical discount structure for each (e.g., "BFCM: 25% sitewide," "Labor Day: free shipping + GWP")
- When do you start teasing/building up to each event?

**Seasonal Moments:**
- Which seasons or cultural moments matter most for your products? (e.g., "Summer is our biggest season — sunscreen + body care")
- Any product launches tied to seasons? (Spring collection, holiday gift sets, etc.)

**Gifting Calendar:**
- Which gifting occasions drive revenue? (Mother's Day, Valentine's Day, Christmas, etc.)
- Do you have gift-specific products or bundles?
- Last-ship-date cutoffs you typically use

**Brand Milestones:**
- Brand anniversary date
- Product launch dates for new releases
- Any annual brand moments (e.g., founder's birthday, community events, annual sale)

**Capture as a simple calendar:**

| Month | Key Moment | Typical Activity |
|-------|-----------|-----------------|
| January | New Year | New year / fresh start messaging, health & wellness angle |
| February | Valentine's Day | Gift guides, couples bundles, self-love angle |
| ... | ... | ... |
| November | BFCM | Biggest sale — [typical offer] |
| December | Holiday / Christmas | Gift guides, last-ship dates, gift cards |

**Questions to ask:**
- "What are your biggest revenue months and what drives them?"
- "Which holidays or events do you actually run promotions for?"
- "Do you have any brand-specific dates that matter? Anniversary, founder milestones, annual events?"

---

### 8. Proof Points

The evidence that builds trust. Other skills use these in ad copy, emails, product pages, and landing pages.

**Capture:**
- Total reviews and average star rating
- Specific standout reviews (3-5 customer quotes that are detailed and persuasive — not just "love it!")
- Units sold or customers served (if you share this publicly)
- Press mentions and "As Seen In" logos
- Awards or certifications
- Influencer or expert endorsements
- UGC stats (e.g., "10,000+ posts with #yourbrand on Instagram")
- Any clinical studies, lab testing, or third-party verification
- Repeat purchase rate or subscription metrics (if impressive)
- Notable customer stories or transformations

**Questions to ask:**
- "What's the most convincing customer review you've ever received?"
- "Do you have any numbers you're proud of — reviews, units sold, repeat purchase rate?"
- "Has your brand been featured in press or endorsed by anyone notable?"

---

## Step 3: Build the Document

After gathering information, create `.claude/brand-guide.md` with this structure:

```markdown
# Brand Guide
*Last updated: [date]*

## The Brand

**Name:** [Brand name]
**URL:** [website]
**One-liner:** [What you sell in one sentence]
**Category:** [Product category] | [Market position: budget/mid/premium/luxury]

**Origin Story:**
[Why the brand exists — the frustration, gap, or mission that started it]

**Mission:**
[What the brand stands for beyond selling products]

**Key Differentiators:**
- [Differentiator 1]
- [Differentiator 2]
- [Differentiator 3]

---

## Customer Personas

### [Persona Name 1] *(Primary)*
- **Who:** [Demographics — age, gender, location, income]
- **Lifestyle & values:** [What matters to them]
- **Purchase trigger:** [The moment or feeling that makes them buy]
- **Main objection:** [What almost stops them]
- **Their words:** "[Verbatim language from reviews/comments]"
- **Where they are:** [Platforms — Instagram, TikTok, Google, etc.]

### [Persona Name 2]
[Same structure]

---

## Product Catalog

**Overview:**
- SKU count: [X]
- AOV: $[X]
- Price range: $[low] – $[high]
- Core collections: [Collection 1], [Collection 2], [Collection 3]

### Hero Products

**[Product Name 1]** — $[price]
- What it does: [1-2 sentences]
- Key ingredients/materials: [specifics]
- Differentiator: [What makes it different]
- Top proof point: [Best review, stat, or press mention]
- URL: [link]

**[Product Name 2]** — $[price]
[Same structure]

---

## Brand Voice

**Voice:** [3-5 adjectives]
**Tone spectrum:** [Where you sit from formal to casual]
**Reference brand:** [Brand whose voice you admire]

**Words & phrases we love:**
- [phrase 1]
- [phrase 2]

**Words & phrases we never use:**
- [word 1]
- [word 2]

**Example of our voice done right:**
> "[A piece of copy that nails the brand voice]"

---

## Messaging & Positioning

**Value proposition:**
[The single most important promise — 1-2 sentences]

**Supporting messages:**
1. [Message 1]
2. [Message 2]
3. [Message 3]

**Elevator pitch:**
[30-second version]

**Tagline:** [If applicable]

**Objection handling:**

| Objection | Our response |
|-----------|-------------|
| [Objection 1] | [Response] |
| [Objection 2] | [Response] |
| [Objection 3] | [Response] |

---

## Competitive Landscape

**Direct competitors:**
- **[Competitor 1]:** [What they do well] / [Where they fall short] / [How we're different]
- **[Competitor 2]:** [Same structure]

**Indirect competitors:**
- [Alternative approach and why ours is better]

**"Do nothing" alternative:**
[What happens if they don't buy — the cost of inaction]

**Our unfair advantage:**
[The one thing hardest to replicate]

---

## Key Dates & Calendar

| Month | Key Moment | Typical Activity |
|-------|-----------|-----------------|
| Jan | [Event] | [What you do] |
| Feb | [Event] | [What you do] |
| Mar | [Event] | [What you do] |
| Apr | [Event] | [What you do] |
| May | [Event] | [What you do] |
| Jun | [Event] | [What you do] |
| Jul | [Event] | [What you do] |
| Aug | [Event] | [What you do] |
| Sep | [Event] | [What you do] |
| Oct | [Event] | [What you do] |
| Nov | [Event — likely BFCM] | [Offer details] |
| Dec | [Event] | [What you do] |

**Brand milestones:**
- [Anniversary, launch dates, annual events]

**Last-ship-date cutoffs:**
- [Holiday: date] (e.g., Christmas: Dec 18)

---

## Proof Points

**Reviews:** [Total count] reviews, [X.X] average stars
**Units/customers:** [Number sold or served]

**Standout reviews:**
> "[Detailed, persuasive customer quote]" — [Name]
> "[Another great review]" — [Name]
> "[Another]" — [Name]

**Press & media:**
- [Publication 1]
- [Publication 2]

**Awards & certifications:**
- [Award/cert 1]

**Expert endorsements:**
- [Endorsement]

**Notable stats:**
- [Repeat purchase rate, subscription metrics, UGC stats, etc.]
```

---

## Step 4: Confirm and Save

- Show the completed guide to the founder
- Ask if anything needs correcting, expanding, or removing
- Save to `.claude/brand-guide.md`
- Tell them: "Your brand guide is set. Every time you use the email, copywriting, or paid ads skills, they'll read this first so you won't have to repeat yourself. Run `/ecommerce-brand-guide` anytime to update it."

---

## Updating the Guide

When the founder comes back to update:
- Read the existing `.claude/brand-guide.md`
- Ask what changed (new product launch, updated positioning, new persona, new sales event)
- Update only the relevant sections
- Keep the `Last updated` date current
- Confirm the changes before saving

Common update triggers:
- "We just launched a new product" → Update Product Catalog
- "We're rebranding / changing our voice" → Update Brand Voice
- "We have a new competitor" → Update Competitive Landscape
- "Planning our Q4 calendar" → Update Key Dates
- "We hit 10,000 reviews" → Update Proof Points
- "Our customer profile has shifted" → Update Customer Personas

---

## Questions to Ask

If you need to gather info quickly, these are the highest-value questions in priority order:

1. What do you sell, in one sentence?
2. Who is your best customer — describe a real person?
3. What's your #1 bestseller and why do people love it?
4. How does your brand sound? Give me 3-5 adjectives.
5. What's the main reason someone almost buys but doesn't?
6. Who are your biggest competitors and what do you do better?
7. What are your biggest sales months and what drives them?
8. What's your most convincing proof point — a review, stat, or press mention?

---
