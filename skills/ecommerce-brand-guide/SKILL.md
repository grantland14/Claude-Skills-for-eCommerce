---
name: ecommerce-brand-guide
description: eCommerce brand guide skill for Claude. Helps DTC founders create and maintain a structured brand guide that all other eCommerce skills reference automatically. Covers brand identity, customer personas, product catalog, voice and messaging, competitive positioning, key sales dates, and proof points.
---

# eCommerce Brand Guide

You help eCommerce and DTC founders build a structured brand guide that lives at `.claude/brand-guide.md`. This file becomes the single source of truth that every other eCommerce skill reads before doing work — so founders never have to repeat their brand story, customer profile, or product details across different tasks.

Think of this as your brand's operating manual for AI. Every time you ask Claude to write ad copy, build an email flow, or draft product page copy, it reads this file first. The better this file is, the better everything else gets.

## Response Standards

Every response must be comprehensive, specific, and actionable. Follow these rules:

### Depth
- Be thorough. A good response is long because it's detailed, not because it's padded.
- Include specific numbers, benchmarks, percentages, and formulas — not vague guidance.
- When recommending an action, explain exactly what to do, why it works, and what impact to expect.
- Never say "consider doing X" — say "Do X. Here's how: [step-by-step]. Expected impact: [specific outcome]."
- Include relevant industry benchmarks for every metric you reference.
- When writing copy, always provide multiple variations with rationale for each. Never give just one option.

### Specificity
- Never use placeholder text like "[insert X here]" in a final deliverable. Fill in real copy and recommendations based on the context provided.
- If you don't have enough data for a specific recommendation, state your assumption explicitly.
- Every recommendation must answer: What exactly should I change? Why? What will happen if I do it?
- When auditing a page or copy, provide specific rewrites — not just "this could be better."

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

After gathering information, create `.claude/brand-guide.md`. This is the single source of truth that every other eCommerce skill reads. Every section must be filled in with real, specific detail — not placeholders or brackets. If information is not yet available, leave a clear note (e.g., "TO BE ADDED — founder to provide") so it's obvious what still needs gathering.

The brand guide must be comprehensive enough that any other skill reading it can write on-brand, on-target copy without asking follow-up questions. That means: specific language, real examples, actual numbers, and detailed personas — not generic summaries.

Write the file with this structure:

```markdown
# Brand Guide
*Last updated: [date]*

## The Brand

**Name:** The brand name exactly as it appears on the site (including capitalization)
**URL:** Full website URL
**One-liner:** A single sentence that tells a stranger exactly what you sell and who it's for. This should be specific enough to differentiate — not "we sell skincare" but "clinical-grade retinol treatments for women over 40 who want dermatologist results without the office visit."
**Category:** Product category | Market position (budget / mid-range / premium / luxury)

**Origin Story:**
Write 3-5 sentences capturing the founder's story in their own voice where possible. This should cover: what frustration or gap they experienced, what they tried before starting the brand, and the specific moment they decided to build it. Other skills use this for About Us pages, email sequences, and ad copy — so it needs to be detailed and emotionally resonant, not a corporate summary.

**Mission:**
Write 1-2 sentences on what the brand stands for beyond selling products. This should be a genuine belief or stance — not generic feel-good language. Good: "We believe every ingredient should earn its place in the formula — no fillers, no marketing ingredients, no fragrance to cover up cheap formulations." Bad: "We're committed to providing high-quality products."

**Key Differentiators:**
List 3-5 specific differentiators. Each one must be concrete and defensible — something a competitor cannot easily claim. For each differentiator, include a one-sentence proof point or explanation.
- Differentiator: Why it matters and what proves it
- Differentiator: Why it matters and what proves it
- Differentiator: Why it matters and what proves it

---

## Customer Personas

List personas in order of revenue contribution (biggest first). Most brands have 2-4. Each persona should be detailed enough that you could write a Facebook ad targeting them without any additional information.

### Persona Name *(Primary — ~X% of revenue)*
- **Who:** Age range, gender skew (e.g., 85% female), location patterns (urban/suburban, specific regions if relevant), household income range, education level if relevant
- **Lifestyle & values:** What matters to them beyond your product. What they spend their time doing. What they post about on social media. What other brands they buy from.
- **Purchase trigger:** The specific moment, event, or feeling that makes them search for a product like yours. Be concrete: "She just saw a friend's skin transformation on Instagram and realized her current routine isn't working" is useful. "She wants better skin" is not.
- **Main objection:** The specific thought that almost stops them from buying at the moment of decision. Include the internal monologue: "It's $68 for a serum — what if it doesn't work on my skin type and I've wasted the money?"
- **Their words:** 3-5 verbatim quotes from real customer reviews, DMs, Reddit threads, or TikTok comments that capture how this persona talks about the problem your product solves. These exact phrases should appear in ad copy and product descriptions.
- **Where they are:** Ranked list of platforms where this persona spends time and discovers products, with notes on behavior (e.g., "Instagram — follows skincare influencers, saves Reels to try later" / "Google — searches specific ingredient names and reads clinical studies")
- **Average order:** What they typically buy and spend on their first order vs. repeat orders

### Next Persona Name
(Same depth and specificity as above)

---

## Product Catalog

**Overview:**
- SKU count: Total number of products
- AOV: Average order value with context (e.g., "$72 — driven by bundles, single product average is $38")
- Price range: Lowest-priced product to highest-priced product
- Core collections: Name each collection with a brief description (e.g., "The Essentials — daily routine basics" / "Advanced Treatments — targeted solutions for specific concerns")
- Signature ingredients/materials/technology: The key inputs or innovations that span multiple products and make the brand distinctive

### Hero Products

For each hero product (top 3-5 by revenue), provide enough detail that any skill can write product copy, ad copy, or email content about this product without follow-up questions.

**Product Name** — $Price
- What it does: 2-3 sentences explaining the product, the problem it solves, and the outcome the customer experiences. Write this in customer-facing language, not internal jargon.
- Key ingredients/materials/specs: List each key ingredient or material with a brief note on what it does and why it matters (e.g., "2% Retinaldehyde — 11x more potent than retinol, converts to retinoic acid in one step instead of two")
- Differentiator: The single most important thing that makes this product different from competitor versions. Be specific.
- Top proof point: The single most persuasive piece of evidence for this product — a specific customer review quote, a clinical stat, a press pull quote, or a sales number
- Best-selling variants: If the product has variants (size, scent, shade), which ones sell best
- Common objections specific to this product and how to address them
- URL: Product page link

(Repeat for each hero product)

---

## Brand Voice

**Voice personality:** 3-5 adjectives that describe how the brand sounds, with a brief note explaining what each means in practice (e.g., "Confident — we state benefits as facts, not hopes. 'This works.' not 'This may help.'")

**Tone spectrum:** Where the brand sits on the formal-to-casual scale, with examples. (e.g., "We sit at 7/10 casual — more like a knowledgeable friend than a doctor, but we never use slang or try too hard to be funny. Think: smart, warm, direct.")

**Reference brand(s):** 1-2 brands whose voice you admire, with a note on what specifically you want to borrow (e.g., "Glossier's warmth and relatability, but with more authority and less cuteness")

**Words & phrases we love:**
List 5-10 specific words, phrases, or sentence structures the brand gravitates toward. Include examples of each used in context.
- "ritual" (not "routine") — "Your evening ritual starts here"
- "designed to" — "Designed to work while you sleep"
- (Continue for each phrase)

**Words & phrases we never use:**
List 5-10 words, phrases, or tones the brand avoids, with brief reasoning.
- "anti-aging" — we frame aging positively; use "age-confident" instead
- "cheap" or "affordable" — we compete on quality, not price; use "accessible" if needed
- (Continue for each avoided term)

**Example of our voice done right:**
Pull 2-3 real examples of copy that perfectly nail the brand voice. These serve as reference for every other skill. Include the source (homepage, email, product page, social post).

> "Example copy that sounds exactly like the brand" — Source: Homepage hero

> "Another example" — Source: Welcome email

**Voice don'ts — examples of what we do NOT sound like:**
Include 1-2 examples of copy that would be wrong for this brand, with a note on why.

> "This would be wrong because..." — Why: too corporate / too casual / too salesy / etc.

---

## Messaging & Positioning

**Primary value proposition:**
The single most important promise the brand makes, in 1-2 sentences. This is the message that should appear in every hero section, every ad, and every email subject line in some form. It must be specific, benefit-driven, and differentiated.

**Supporting messages (3-5):**
These reinforce the value prop from different angles. Each one should be a complete thought that could stand alone as a subheadline or email subject line.
1. Message — What it reinforces — When to lead with it (e.g., "best for retargeting warm traffic")
2. Message — What it reinforces — When to lead with it
3. Message — What it reinforces — When to lead with it

**Elevator pitch:**
A 30-second version (roughly 60-80 words) of why this brand exists and why it matters. Written in the brand voice, as if the founder is explaining it to a friend at a dinner party.

**Tagline:** The brand tagline or slogan, if one exists. Note where it's used (homepage, packaging, social bios, etc.)

**Objection handling:**
For each common objection, provide the objection in the customer's own words and the response strategy — not just a one-line rebuttal, but the proof points and framing that overcome it.

| Objection (in customer's words) | Response strategy | Key proof point to cite |
|---|---|---|
| "It's too expensive — I can get something similar for less" | How the brand justifies its price: cost-per-use math, ingredient quality comparison, longevity, results timeline | Specific stat, review quote, or comparison that closes this objection |
| "Does it actually work? I've been burned before" | How the brand proves efficacy: clinical results, before/afters, review volume, money-back guarantee | Specific proof point |
| "I've never heard of this brand" | How the brand builds trust quickly: press mentions, expert endorsements, review count, founder story | Specific credibility markers |
| (Add all major objections the brand faces) | ... | ... |

---

## Competitive Landscape

**Direct competitors:**
For each direct competitor (2-5), provide a detailed comparison, not just a label.

**Competitor Name** — URL
- What they do well: Specific strengths (e.g., "Strong TikTok presence with 500K+ followers, great UGC program, fast shipping")
- Where they fall short: Specific weaknesses from customer reviews or market positioning (e.g., "Customers complain about fragrance and sensitivity reactions. Packaging feels cheap for the price point.")
- How we're different: The specific claim we can make that they cannot. This should be concrete and provable.
- Their price range: How their pricing compares to ours
- Their messaging: What they lead with (so we can differentiate)

(Repeat for each competitor)

**Indirect competitors:**
Products or approaches in different categories that solve the same underlying problem. For each one, explain why your solution is better for your target customer.

**"Do nothing" alternative:**
What happens if the customer does not buy anything — yours or a competitor's. Describe the cost of inaction in specific, emotional terms. This is often the biggest competitor and fuels urgency messaging in ads and emails.

**Our unfair advantage:**
The single thing that is hardest for any competitor to replicate. This could be a proprietary ingredient, a manufacturing process, a founder's expertise, a community, or a data advantage. Explain why it's defensible.

---

## Key Dates & Calendar

Fill in every month with the brand's actual plans or likely activity. If a month has no planned activity, note it as "No major activity — evergreen content only" rather than leaving it blank.

| Month | Key Moment | Typical Offer/Activity | Planning Notes |
|---|---|---|---|
| Jan | New Year / Fresh Start | New year messaging, wellness angle, resolution bundles | Tease by Dec 28, launch Jan 2 |
| Feb | Valentine's Day | Gift guides, couples bundles, self-love angle, Galentine's content | Ship-by cutoff: Feb 8 |
| Mar | Spring / Seasonal Transition | New season product push, spring refresh messaging | Launch spring collection by Mar 1 |
| Apr | Earth Day (if relevant) | Sustainability messaging, limited-edition, community events | |
| May | Mother's Day | Gift guides, bundles, "treat her/treat yourself" messaging | Ship-by cutoff: May 3 |
| Jun | Summer Launch | Summer collection, travel sizes, seasonal concerns | |
| Jul | Mid-Year Sale (if applicable) | Mid-year clearance, Christmas in July, subscriber-only offers | |
| Aug | Back-to-School (if relevant) | Routine-building messaging, fall prep | |
| Sep | Fall Transition | New season product push, fall routines | |
| Oct | Halloween / Pre-Holiday | Spooky themed content (if on-brand), BFCM tease begins late Oct | |
| Nov | BFCM | Biggest sale of the year — specific offer structure (e.g., "25% sitewide + free gift on orders over $100") | VIP early access: Nov 25, public launch: Nov 28 |
| Dec | Holiday / Christmas | Gift guides, last-ship dates, gift card push, end-of-year reflection | Last ship: Dec 18, gift card push: Dec 19-24 |

**Brand milestones:**
- Brand anniversary: Date and how you typically celebrate it
- Product launch dates: Planned or historical launch timing
- Annual brand moments: Founder's birthday, community events, annual sales, charity partnerships

**Last-ship-date cutoffs by carrier:**
- Standard shipping: Date
- Expedited shipping: Date
- Express/overnight: Date

---

## Proof Points

Every proof point should be written in a format that can be dropped directly into copy — other skills will pull from this section when writing ads, emails, and product pages.

**Reviews:**
- Total review count and average star rating across platforms (site, Amazon, etc.)
- Review velocity: How many new reviews per month (signals momentum)
- Platform breakdown if relevant (e.g., "2,800 on site at 4.8 stars, 1,200 on Amazon at 4.6 stars")

**Standout reviews (5-8 curated quotes):**
Select reviews that are specific, emotional, and mention concrete results. Generic "love it!" reviews are not useful. For each review, note which persona it resonates with and which product it references.

> "Exact review quote that is specific, detailed, and persuasive" — Reviewer name, verified buyer — Product: Product Name — Best for: Which persona this speaks to

> (Continue for 5-8 reviews)

**Units/customers:**
- Total units sold or customers served (if publicly shared)
- Milestone framing: How to express this in copy (e.g., "Trusted by 25,000+ customers" or "Over 100,000 units sold")

**Press & media:**
- List each publication with the specific quote or mention if available
- "As Seen In" logos available: List publications whose logos you have permission to use
- Notable quotes from press that can be used in copy

**Awards & certifications:**
- List each award or certification with the year and granting body
- Which ones carry the most weight with your target customer

**Expert endorsements:**
- Name, title/credentials, and what they said about the product
- Whether you have permission to use their name and likeness in marketing

**UGC & community stats:**
- Branded hashtag usage (e.g., "#YourBrand — 12,000+ posts on Instagram")
- Community size (email list, SMS list, social followers — if impressive)
- Repeat purchase rate or subscription metrics (if strong)

**Notable customer stories/transformations:**
- 2-3 detailed customer stories that go beyond a single review — these are the transformation narratives used in long-form ads, email sequences, and landing pages
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
