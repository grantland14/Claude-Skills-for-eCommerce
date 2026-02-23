# The Complete Guide to eCommerce Skills for Claude Code

## Table of Contents

- [What Are Claude Code Skills?](#what-are-claude-code-skills)
- [Why These Skills Exist](#why-these-skills-exist)
- [How to Install](#how-to-install)
- [Getting Started: The Brand Guide](#getting-started-the-brand-guide)
- [The 14 Skills — In Detail](#the-14-skills--in-detail)
  - [eCommerce Brand Guide](#1-ecommerce-brand-guide)
  - [eCommerce Email Marketing](#2-ecommerce-email-marketing)
  - [eCommerce Copywriting](#3-ecommerce-copywriting)
  - [eCommerce Paid Ads](#4-ecommerce-paid-ads)
  - [eCommerce Social Content](#5-ecommerce-social-content)
  - [eCommerce Product Launch Planner](#6-ecommerce-product-launch-planner)
  - [eCommerce PDP Optimization](#7-ecommerce-pdp-optimization)
  - [eCommerce Popup Optimization](#8-ecommerce-popup-optimization)
  - [eCommerce Buyer Psychology](#9-ecommerce-buyer-psychology)
  - [eCommerce Product Pricing Strategy](#10-ecommerce-product-pricing-strategy)
  - [eCommerce CFO](#11-ecommerce-cfo)
  - [eCommerce VC Evaluation](#12-ecommerce-vc-evaluation)
  - [eCommerce Marketing Analyst](#13-ecommerce-marketing-analyst)
  - [eCommerce Competitor Intelligence](#14-ecommerce-competitor-intelligence)
- [How the Skills Work Together](#how-the-skills-work-together)
- [Workflows for Common Scenarios](#workflows-for-common-scenarios)
- [Tips for Getting the Most Out of Your Skills](#tips-for-getting-the-most-out-of-your-skills)
- [FAQ](#faq)

---

## What Are Claude Code Skills?

Claude Code is an AI coding assistant that runs in your terminal. Out of the box, Claude is a generalist — it knows a little about everything but isn't an expert in anything specific. Skills change that.

A skill is a markdown file that gives Claude specialized knowledge, frameworks, and workflows for a specific task. When you add a skill to your project, Claude reads it at the start of every conversation and uses that knowledge to give you expert-level advice instead of generic answers.

Think of it this way: without skills, asking Claude about your email marketing is like asking a smart friend who's read a few blog posts. With the eCommerce Email skill installed, it's like hiring a Klaviyo consultant who's managed email programs for dozens of DTC brands.

Skills don't change what Claude can do technically. They change what Claude knows and how it thinks about your problems. A skill might include:

- Industry-specific frameworks and mental models
- Step-by-step workflows for complex tasks
- Benchmarks and targets for your specific business type
- Templates and output formats
- Context-gathering questions that a real expert would ask
- Common mistakes to avoid

The skills in this collection are built specifically for eCommerce founders running DTC brands. Every framework, every benchmark, every piece of advice is calibrated for the realities of selling products online directly to consumers.

---

## Why These Skills Exist

Most eCommerce founders wear every hat. You're the CEO, the marketing team, the finance department, the copywriter, the ad buyer, and the customer service rep. You can't afford to hire a specialist for every function, but you also can't afford to make amateur-level decisions in any of them.

These skills exist to close that gap. They give you access to specialist-level thinking in 14 areas of eCommerce operations — from writing product page copy to analyzing your P&L to planning a product launch — without hiring 14 people.

Here's what these skills solve:

**The blank-page problem.** You open Claude and type "help me with my email marketing." Claude asks "what kind of emails?" and you're already stuck. With the Email skill, Claude knows to ask about your flows, your segments, your AOV, and your platform — and then gives you a strategic recommendation, not a generic overview.

**The context problem.** Every time you start a new Claude conversation, you lose all context. You have to re-explain your brand, your products, your customers, your voice. The Brand Guide skill solves this permanently — build your brand context once, and every other skill reads it automatically.

**The depth problem.** Generic AI advice sounds good but doesn't hold up under scrutiny. "You should segment your email list" is true but useless. The Email skill tells you exactly which segments to build, what to send each one, how often, and what benchmarks to target. That's the difference between advice and expertise.

**The integration problem.** Marketing channels don't work in isolation. Your pricing affects your ad strategy. Your ad strategy affects your email program. Your email program affects your customer lifetime value. Your LTV determines how much you can spend on ads. These skills are designed to work together, with the Brand Guide as the shared foundation.

---

## How to Install

### Option 1: Install all skills at once

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
mkdir -p ~/.claude/skills
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-* ~/.claude/skills/
```

This copies all 14 skills into your Claude Code skills directory. Claude will automatically detect and use them in relevant conversations.

### Option 2: Install individual skills

If you only need specific skills:

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
mkdir -p ~/.claude/skills
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-email ~/.claude/skills/
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-brand-guide ~/.claude/skills/
```

Replace the skill folder names with whichever ones you want.

### After installation

Start a new Claude Code conversation. Claude will now recognize when you're asking about eCommerce tasks and apply the relevant skill automatically. You don't need to tell Claude which skill to use — it figures that out from your prompt.

If you want to invoke a specific skill directly, you can use the slash command (e.g., `/ecommerce-email` or `/ecommerce-pricing`).

> **Note:** The `claude install` command is for updating Claude Code itself, not for installing skills. Skills are installed by copying the SKILL.md files into your `~/.claude/skills/` directory.

---

## Getting Started: The Brand Guide

Before using any other skill, start here. The Brand Guide is the foundation that makes everything else more powerful.

### What it does

The Brand Guide skill walks you through creating a `.claude/brand-guide.md` file — a structured document that captures everything about your brand in one place. Once this file exists, every other skill reads it before asking you questions. Instead of re-explaining your brand in every conversation, Claude already knows:

- Who you are and what you sell
- Who your customers are and what motivates them
- Your full product catalog with pricing and margins
- How your brand speaks (and doesn't speak)
- Your key marketing messages and positioning
- Who you compete with and how you're different
- Your important dates (launches, sales, seasons)
- Your proof points (reviews, press, certifications)

### How to build your Brand Guide

Start a new Claude conversation and say something like:

- *"Build a brand guide for my DTC skincare company"*
- *"Help me create a brand guide — I sell premium dog food online"*
- *"Create a brand guide from my website: [URL]"*

Claude will either auto-draft from your existing codebase (if you have a Shopify store or website in the project) or walk you through building it section by section.

The process takes 15-30 minutes the first time. After that, you can update individual sections as your brand evolves.

### Why it matters

Without the Brand Guide, every skill starts from scratch. It asks "What do you sell? Who's your customer? What's your price point?" every single time. With the Brand Guide, the conversation jumps straight to the strategic work.

For example, without the guide:
> **You:** "Write a cart abandonment email"
> **Claude:** "What do you sell? What's your brand voice? What's your AOV? What platform are you on?"

With the guide:
> **You:** "Write a cart abandonment email"
> **Claude:** "Based on your brand guide, here's a 3-email cart abandonment sequence for your $65 AOV skincare brand, written in your conversational-but-expert tone, with a 10% discount in email 3 that aligns with your discount strategy..."

That's the difference. Build the guide once, benefit from it in every future conversation.

---

## The 14 Skills — In Detail

### 1. eCommerce Brand Guide

**Skill folder:** `ecommerce-brand-guide`
**Best for:** Setting up your brand context once so every other skill works better

The Brand Guide is covered in detail above, but here's what each section contains:

**The Brand** — Your founding story, mission, brand personality (3-5 adjectives that describe your brand), and what makes you different. This isn't marketing copy — it's the internal understanding that informs everything else.

**Customer Personas** — 2-3 detailed personas covering demographics, psychographics, purchase motivation, objections, and the actual language your customers use. Claude pulls from this when writing copy, emails, and ads.

**Product Catalog** — Every product or product category with price, margin, positioning, and what makes each one special. This feeds the Pricing, CFO, and PDP skills directly.

**Brand Voice** — How you speak, words you use, words you never use, and examples of your voice at its best. This ensures consistent tone across every piece of copy Claude writes.

**Messaging & Positioning** — Your positioning statement, key messages for different audiences, and your tagline or brand line. This feeds the Copywriting, Email, Ads, and Social skills.

**Competitive Landscape** — 3-5 direct competitors and how you're different from each. This feeds the Competitor Intelligence and Pricing skills.

**Key Dates & Calendar** — Product launch dates, sales events, seasonal moments, and industry events. This feeds the Launch, Email, and Social Content skills.

**Proof Points** — Review highlights, press mentions, certifications, awards, and influencer endorsements. These get woven into copy, emails, ads, and product pages automatically.

---

### 2. eCommerce Email Marketing

**Skill folder:** `ecommerce-email`
**Best for:** Building and optimizing a revenue-driving email program from automated flows to campaign strategy

This is the most comprehensive skill in the collection. It turns Claude into an email strategist who thinks in terms of revenue per recipient, not just open rates.

**The core philosophy:** Flows first, campaigns second. Automated email flows (welcome series, cart abandonment, post-purchase, win-back) should generate 30-50% or more of your email revenue. They run 24/7 without you touching them. Campaign emails (promotional sends, product launches, content) fill in the rest. Most founders do the opposite — they blast campaigns and ignore flows. This skill fixes that.

**What it covers:**

*Automated flows* — Complete strategy and copy guidance for every critical flow: welcome series (the sequence that converts subscribers into first-time buyers), abandoned cart (the recovery sequence that saves lost revenue), browse abandonment (when someone views products but doesn't add to cart), post-purchase (turning one-time buyers into repeat customers), win-back (re-engaging customers who've gone quiet), back-in-stock and price-drop notifications, VIP flows, birthday and anniversary flows, and sunset flows for disengaged subscribers.

For each flow, Claude provides the number of emails, timing between sends, subject line guidance, copy structure, and the strategic purpose of each individual message.

*Campaign strategy* — Seasonal calendars, BFCM planning, product launch campaigns, flash sales, content campaigns, and how to balance promotional sends with value-driven content.

*Segmentation* — How to segment your list using RFM (recency, frequency, monetary value), engagement tiers, purchase behavior, and product affinity. Which segments get which emails, and how to personalize content for each.

*Revenue optimization* — Maximizing revenue per email through send time optimization, A/B testing strategy, dynamic content, and cross-sell/upsell within emails.

*Email program audits* — A complete audit framework that evaluates your flows, campaigns, segmentation, deliverability, list health, and overall email revenue performance. Claude identifies gaps, prioritizes fixes, and provides benchmarks.

*Platform guidance* — Klaviyo-first (because most DTC brands use Klaviyo), with support for Omnisend and Mailchimp. Includes platform-specific advice for flow building, segmentation, and reporting.

**Example prompts:**
- *"Audit my Klaviyo setup — I'm doing $80K/month, AOV $65, no post-purchase flow yet"*
- *"Write a 5-email welcome series for a premium coffee subscription brand"*
- *"My email revenue is 15% of total — help me get it to 30%"*
- *"Plan my BFCM email calendar for November"*
- *"What segments should I set up first? I have 25,000 subscribers"*

---

### 3. eCommerce Copywriting

**Skill folder:** `ecommerce-copywriting`
**Best for:** Writing conversion-focused copy for every page on your store

This skill turns Claude into a copywriter who understands how eCommerce customers read, scan, and decide. The key insight: eCommerce copy isn't like blog copy or ad copy or email copy. It exists in a context where someone is actively deciding whether to spend money. Every word either moves them toward the buy button or pushes them away.

**What it covers:**

*Product page copy* — The most important copy on your site. Claude writes product descriptions that answer the five questions every buyer has: What is this? Is it for me? Does it work? Can I trust it? Is it worth the price? Includes hero copy, benefit bullets, detailed descriptions, and ingredient or materials sections.

*Collection page copy* — Category descriptions that help customers self-select the right product. Most stores leave collection pages as just a grid of products. A good collection page description guides the customer, highlights bestsellers, and reduces choice paralysis.

*Homepage copy* — Hero sections, value proposition blocks, social proof sections, and CTAs. Your homepage has about 3 seconds to communicate what you sell and why it matters. Claude writes homepage copy that passes the 3-second test.

*Landing page copy* — Campaign-specific pages optimized for a single conversion goal. Claude uses frameworks like PAS (Problem-Agitate-Solution), AIDA (Attention-Interest-Desire-Action), and Before/After/Bridge to structure landing pages.

*Brand story and about page* — The narrative that makes customers care about you as a company, not just as a product. Claude writes founder stories, mission statements, and about page copy that builds emotional connection.

*Ad copy* — Headlines, primary text, and descriptions for Meta, Google, and TikTok ads. Covered more deeply in the Paid Ads skill, but the Copywriting skill handles the writing fundamentals.

**What makes this skill different from a generic copywriting AI:**

Claude writes in the language your customers actually use, not polished marketing speak. It pulls from review language, Reddit threads, and the way real people describe their problems. A generic AI might write "Experience the transformative power of our proprietary formula." This skill writes "Your skin at 7 AM shouldn't look like it gave up at 3 PM."

**Example prompts:**
- *"Write a product description for our best-selling vitamin C serum — ingredients and benefits attached"*
- *"Rewrite our homepage hero. Current: 'Welcome to our store.' It's terrible"*
- *"Write collection page copy for our 'Best for Sensitive Skin' collection"*
- *"Create an about page — we're two sisters who started making candles during COVID"*

---

### 4. eCommerce Paid Ads

**Skill folder:** `ecommerce-paid-ads`
**Best for:** Building and optimizing ad campaigns on Meta, Google, and TikTok that profitably acquire customers

This skill turns Claude into a media buyer who speaks eCommerce. It understands that eCommerce advertising is fundamentally different from SaaS or lead gen — you're selling physical products, dealing with ROAS and MER instead of CPL, managing product feeds, and competing in visual-first environments.

**What it covers:**

*Meta Ads (Facebook & Instagram)* — Campaign structure using Advantage+ Shopping campaigns, audience strategy (broad vs. interest vs. lookalike), creative testing frameworks, scaling rules (when to increase budget vs. when to duplicate), and retargeting strategy.

*Google Ads* — Google Shopping campaigns, Performance Max setup, branded and non-branded search, product feed optimization (titles, descriptions, images, attributes), and Shopping vs. Search budget allocation.

*TikTok Ads* — Creative-first strategy (TikTok rewards native-looking content), Spark Ads and creator whitelisting, TikTok Shop integration, and how TikTok audiences differ from Meta.

*Full-funnel campaign architecture* — How to structure campaigns across the funnel: top-of-funnel prospecting (cold audiences seeing your brand for the first time), mid-funnel engagement (warm audiences who've interacted but haven't bought), and bottom-funnel retargeting (cart abandoners, product page viewers, past purchasers). Budget allocation across funnel stages.

*Ad creative strategy* — Hook structures for the first 3 seconds (the most important 3 seconds in advertising), UGC creator briefs, product photography guidelines for ads, and testing frameworks (creative testing is more important than audience testing in 2026).

*Product feed optimization* — Your product feed is the foundation of Shopping and Performance Max campaigns. Claude guides you on title optimization, description optimization, image requirements, custom labels, and feed troubleshooting.

*Measurement and attribution* — ROAS by platform, MER (marketing efficiency ratio) as the truth metric, when to trust platform-reported numbers and when to question them, and incrementality testing.

*Scaling playbook* — When and how to increase spend without killing performance. Rules for scaling budgets, expanding to new audiences, launching on new platforms, and managing diminishing returns.

**Example prompts:**
- *"Build a Meta Ads campaign structure for my $60 AOV skincare brand, $5K/month budget"*
- *"My ROAS dropped from 3.5x to 2.1x this week — diagnose and fix"*
- *"Create 5 ad hooks for a Facebook carousel promoting our bestselling moisturizer"*
- *"Set up a Google Shopping campaign for our 50-SKU apparel brand"*
- *"Write a UGC creator brief for TikTok — we sell premium protein bars"*

---

### 5. eCommerce Social Content

**Skill folder:** `ecommerce-social-content`
**Best for:** Planning and creating social media content that builds brand and drives store traffic

This skill turns Claude into a social media strategist who understands that social content for eCommerce isn't just about engagement — it's about driving product discovery and revenue.

**What it covers:**

*Six content pillars* — Every piece of content you post should fit into one of six categories: Product content (showing what you sell), Educational content (teaching your audience something useful), Social proof (reviews, UGC, customer stories), Brand story (your mission, values, behind-the-scenes), Community (engaging your audience, asking questions, building belonging), and Promotional (sales, launches, offers). Claude helps you balance these pillars so your feed isn't all product pitches or all memes.

*Platform-specific strategies* — Instagram (Reels, carousels, Stories, feed posts), TikTok (trends, sounds, native content, creator partnerships), Pinterest (product pins, lifestyle boards, SEO-driven content), and Facebook (community building, retargeting content, Marketplace). Claude writes for each platform's format and culture — an Instagram caption is completely different from a TikTok hook.

*Content calendars* — Weekly and monthly content planning templates. Claude fills in specific post ideas based on your products, your audience, and what's happening in your industry or season. No more staring at a blank calendar wondering what to post.

*UGC and creator strategy* — How to find creators, write outreach messages, structure deals (flat fee vs. affiliate vs. hybrid), create creative briefs, and manage ongoing creator relationships. Includes a full brief template.

*Social copy formulas* — Proven caption structures for different goals: storytelling captions, educational captions, promotional captions, engagement-driving captions, and launch announcement captions. Each formula is tailored for eCommerce products.

*Content ideas by scenario* — What to post when you're launching a product, during a slow week with nothing to promote, during a sale, after getting a great review, or when a competitor goes viral. Claude generates content ideas for any situation.

**Example prompts:**
- *"Create a 4-week content calendar for my DTC coffee brand on Instagram and TikTok"*
- *"Write 10 Instagram caption options for our new product launch"*
- *"Build a UGC creator brief — we sell $45 candles and want TikTok content"*
- *"What should I post this week? No launches, just need to stay active"*
- *"Plan our social strategy for the holiday season"*

---

### 6. eCommerce Product Launch Planner

**Skill folder:** `ecommerce-launch`
**Best for:** Planning and executing product launches that maximize first-week revenue and build lasting momentum

Most eCommerce founders launch products by posting on Instagram and sending one email. This skill brings the structure of a professional launch team to a solo founder.

**What it covers:**

*Six launch types* — New product launches, collection launches, variant or flavor extensions, limited edition and collaboration drops, seasonal releases, and full brand relaunches. Each type has different timelines, tactics, and emphasis.

*The 4-Phase Launch Framework* — The core of this skill:

Phase 1: **Seed** (4-6 weeks before launch) — Internal preparation, content creation, influencer seeding, community whispers. Plant the seeds of awareness before anyone knows the details. This is where you send product to 10-20 creators, mention "something's coming" in emails, and post behind-the-scenes content.

Phase 2: **Build** (2-3 weeks before launch) — Visible anticipation building. Launch your waitlist, publish teaser content, reveal the product name and details, start a countdown. Drive traffic to a waitlist or early access signup.

Phase 3: **Launch** (launch week) — Full multi-channel execution. VIP early access the day before, general launch day email + social + ads, follow-up social proof emails, UGC amplification. Claude provides a minute-by-minute launch day timeline.

Phase 4: **Sustain** (weeks 1-4 after launch) — Capture reviews, optimize based on launch data, integrate the product into your existing flows and collections, run content marketing, and complete the launch retrospective.

*8-email launch sequence* — A complete email sequence from the first teaser to the final "last chance" email. Each email has timing, subject line guidance, copy structure, audience segment, and strategic purpose.

*Launch paid ads strategy* — How to allocate ad budget across the 4 phases (15-20% awareness, 60-70% launch week, 15-20% sustain), which creative types to produce (product hero, founder story, UGC reaction, before/after), and audience targeting by phase.

*Launch-specific tactics* — Waitlist launches (tiered incentives for early signups), drop model launches (countdown, specific drop time), soft launches (test with small audience before going wide), and pre-order launches (for products not yet in stock).

*Launch calendar timing* — Best months to launch, best days of the week, and months to avoid.

**Example prompts:**
- *"Plan a product launch for our new face oil — we have 4 weeks and a 25K email list"*
- *"Write the 8-email launch sequence for our new flavor"*
- *"Create a launch day timeline — I'm launching next Tuesday"*
- *"Build a waitlist strategy for our limited edition holiday collection"*
- *"We're relaunching with new branding — plan the rollout"*

---

### 7. eCommerce PDP Optimization

**Skill folder:** `ecommerce-pdp`
**Best for:** Analyzing and improving product pages to increase add-to-cart rates

Your product detail page is where all your traffic converges. Every ad click, every email click, every Google search — they all land on a product page. If this page doesn't convert, nothing else matters. You can have the best ads in the world, but if the PDP doesn't close the deal, you're paying for traffic that walks away.

**What it covers:**

*The 5 buyer questions framework* — Every product page must answer five questions in the buyer's mind: What is this product? Is it right for me? Does it actually work? Can I trust this brand? Is it worth the price? Claude audits your PDP against these five questions and identifies which ones your page fails to answer.

*Above-the-fold audit* — Everything the customer sees before scrolling on both desktop and mobile. Product title, star rating and review count, pricing display, variant selection, add-to-cart button, shipping and returns info, trust badges. Claude evaluates each element and provides specific improvements.

*Product image strategy* — The optimal 7-10 image sequence for maximum conversion: hero shot, lifestyle shot, scale/size reference, texture or material close-up, ingredients or materials, before/after (where applicable), packaging, UGC customer photo, and comparison or infographic. Claude advises on the order, quality standards, and what each image should communicate.

*Below-the-fold content structure* — The sections that appear after scrolling: detailed description, ingredient or material breakdown, how-to-use guide, comparison chart, FAQ, review highlights, UGC gallery, cross-sell recommendations, and the brand story block. Claude recommends the optimal order for your category.

*Cross-sell and upsell strategy* — What to show after add-to-cart (complementary products, bundles, subscription upgrade), frequently bought together suggestions, and "complete the routine" bundles. These directly increase AOV.

*Category-specific optimization* — Different product categories have different PDP needs. Beauty PDPs need ingredient close-ups and clinical results. Fashion PDPs need size guides and model measurements. Food PDPs need nutrition facts and serving suggestions. Claude tailors advice to your specific category.

*Full PDP audit checklist* — A comprehensive element-by-element checklist covering mobile experience, page speed, accessibility, trust signals, urgency elements, and SEO fundamentals.

**Example prompts:**
- *"Audit my product page — here's the URL. What's hurting conversion?"*
- *"Rewrite the product description for this moisturizer — it's just a list of ingredients"*
- *"What should my image gallery look like for a $120 face serum?"*
- *"Design the below-the-fold content for our hero product page"*
- *"What cross-sell strategy should I use on PDPs to increase AOV?"*

---

### 8. eCommerce Popup Optimization

**Skill folder:** `ecommerce-popup`
**Best for:** Designing popups that grow your email list and drive revenue without annoying visitors

Popups are the most powerful list-building and conversion tool on your site — when done right. Done wrong, they drive people away. The difference between a popup that converts at 8% and one that converts at 2% is the offer, the timing, and the copy.

**What it covers:**

*Welcome popups* — Email and SMS capture for new visitors. The most important popup on your site. Claude advises on offer type (percentage discount, dollar-off, free shipping, free gift), display timing (delay seconds, scroll percentage, exit intent), and mobile vs. desktop differences.

*Exit-intent popups* — Last-chance offers shown when a visitor moves to leave. Different from welcome popups — these are for people who've already seen your site and are leaving. Claude writes urgency-driven copy that gives them a reason to stay.

*Promotional popups* — Flash sales, limited-time bundles, and seasonal offers. Timed to campaigns and shown to specific audiences (returning visitors, specific traffic sources).

*Announcement bars* — The persistent bar at the top of your site. Free shipping thresholds, active promotions, new product launches. Claude helps you prioritize what goes in the bar and when to change it.

*Cart upsell popups* — Post-add-to-cart offers that increase AOV. "Add [product] for just $12 more" or "Get free shipping — add $15 to your cart." Claude designs upsell offers based on your product catalog and AOV goals.

*Back-in-stock popups* — Capture email addresses for sold-out products. Turn stockouts into a marketing opportunity.

*Multi-popup strategy* — How to coordinate multiple popups without overwhelming visitors. Rules for frequency, priority, and audience targeting so visitors don't see popup after popup.

*Copy formulas* — Proven headline, body copy, and CTA combinations for each popup type. Button text that converts ("Get My 15% Off" outperforms "Submit").

*Platform guidance* — Notes for Klaviyo forms, Privy, Justuno, and OptiMonk.

**Example prompts:**
- *"Design a welcome popup for my skincare brand — I want email + SMS capture"*
- *"Write exit-intent popup copy for a $65 AOV supplement brand"*
- *"My popup converts at 2% — audit it and suggest improvements"*
- *"Create a cart upsell popup that increases AOV without feeling pushy"*
- *"Design a multi-popup strategy — I have welcome, exit-intent, and announcement bar"*

---

### 9. eCommerce Buyer Psychology

**Skill folder:** `ecommerce-buyer-psychology`
**Best for:** Applying behavioral science to every touchpoint to increase conversions ethically

This skill is a library of 30 psychological principles, each with specific eCommerce applications. It's not a psychology textbook — every principle comes with concrete "do this on your product page" or "use this in your email" guidance.

**What it covers:**

*30 psychological principles* — Each one explained in plain language with 3-5 specific eCommerce applications:

- **Anchoring** — Show the higher price first. Compare-at pricing, per-use framing, collection page sort order.
- **Loss aversion** — "Your discount expires" is more powerful than "Get a discount." Cart abandonment emails, limited-time offers, loyalty point expiration.
- **Social proof** — Review count matters more than star rating. Specific reviews beat generic ones. UGC photos, bestseller labels, real-time activity counts.
- **Scarcity** — Genuine low-stock alerts, limited editions, size/variant scarcity. Never fake it.
- **The decoy effect** — Three-tier pricing where the middle option makes the top option look like the obvious choice.
- **Endowment effect** — "Your" language in copy. Customization. Try-before-you-buy. Wishlists.
- **Reciprocity** — Free samples, unexpected upgrades, handwritten notes. Give before you ask.
- **Authority** — Expert endorsements, certifications, press logos, founder credentials.
- **Commitment and consistency** — Quizzes, email signups, reviews, identity-based messaging.
- **Paradox of choice** — Fewer options convert better. Curated collections, "most popular" labels, single-product hero sections.
- Plus 20 more including framing, the peak-end rule, the bandwagon effect, the contrast principle, the Zeigarnik effect, cognitive ease, the IKEA effect, the halo effect, hyperbolic discounting, and others.

*Psychology by touchpoint* — How to layer multiple principles on product pages (above fold, below fold, at the buy button), in emails (subject line, body, CTA), and across ads (creative, copy, targeting). The most effective pages use 5-10 principles simultaneously.

*Ethical guidelines* — Clear rules for ethical persuasion. The test: if a customer discovered how you applied a principle, would they feel helped or tricked? If they'd feel tricked, don't do it. Specific examples of what's always ethical (genuine scarcity, real reviews) and what's never acceptable (fake urgency timers, fabricated stock levels).

*Psychology audits* — Claude can audit any page, email, or ad and identify which principles are applied, which are missing, and which would have the highest impact if added.

**Example prompts:**
- *"Audit my product page using buyer psychology — what principles am I missing?"*
- *"Rewrite my cart abandonment email using loss aversion and the Zeigarnik effect"*
- *"How should I use the decoy effect in my bundle pricing?"*
- *"What psychological triggers should I use in my exit-intent popup?"*
- *"Make my product descriptions more persuasive using framing and cognitive ease"*

---

### 10. eCommerce Product Pricing Strategy

**Skill folder:** `ecommerce-pricing`
**Best for:** Setting prices, designing discount strategies, building bundles, and running price tests

Pricing is the most powerful profit lever in eCommerce. A 1% improvement in pricing has more impact on profit than a 1% improvement in volume, customer acquisition cost, or cost of goods sold. Yet most founders set prices by copying competitors or adding a markup to their costs and hoping for the best. This skill brings real strategy to pricing.

**What it covers:**

*The three pricing inputs* — Every price should be informed by three inputs. Most founders only use one.

1. **Cost-based input** (your floor) — Landed COGS sets the absolute minimum. Includes a full COGS worksheet covering raw materials, manufacturing, packaging, inbound freight, duties, and fulfillment labor.

2. **Market-based input** (your range) — Competitor pricing tells you the acceptable range. Claude helps you map the competitive landscape across budget, mid-range, premium, and luxury tiers.

3. **Value-based input** (your ceiling) — What the product is worth to the customer. Claude scores your product across value drivers (quality, uniqueness, brand strength, social proof, design, sustainability, expert endorsement, convenience) to determine how high you can price.

*Pricing psychology* — When to use charm pricing ($29.99) vs. round numbers ($30) vs. precise pricing ($29). How to use price anchoring (compare-at pricing, per-use framing, bundle anchoring). The Rule of 100 for displaying discounts.

*Discount strategy* — A spectrum from least brand-diluting (gift with purchase) to most brand-diluting (sitewide percentage off). Rules for protecting your brand while still using discounts strategically. Welcome offer strategy, BFCM pricing plans, and maximum sustainable discount calculations.

*Bundle architecture* — Four bundle types (routine/system, starter/trial, stock-up, gift) with pricing strategies for each. The decoy bundle technique for steering customers toward the option you want them to choose.

*Subscription pricing* — Discount level benchmarks (10-20% off one-time), tiered commitment models, build-your-box models, and key subscription metrics to track (adoption rate, churn rate, subscriber LTV).

*Price testing* — How to A/B test prices (measure revenue per visitor, not just conversion rate), sequential testing, channel-based testing, and what metrics to track beyond conversion.

*Price increase strategy* — When to raise prices (signs you're underpriced), how to communicate increases, tactics for minimizing churn (grandfathering subscribers, introducing new SKUs, bundling the increase), and specific approaches for 5-10%, 10-20%, and 20%+ increases.

*Category benchmarks* — Target gross margin ranges for beauty/skincare, supplements, food/beverage, apparel, home/living, pet, baby/kids, and electronics.

**Example prompts:**
- *"Help me price a new product — COGS is $14, competitors charge $45-$65, premium brand"*
- *"Design a bundle pricing strategy for our 3 core products"*
- *"Plan my BFCM discount strategy — don't want to devalue the brand"*
- *"I need to raise prices 20% — plan the rollout and communication"*
- *"What's the right subscribe-and-save discount? Currently offering 15%"*

---

### 11. eCommerce CFO

**Skill folder:** `ecommerce-cfo`
**Best for:** Understanding your financial health, optimizing margins, and making sound financial decisions

This skill turns Claude into a fractional CFO who speaks founder language, not accountant language. Most eCommerce founders know their revenue but couldn't tell you their contribution margin, cash conversion cycle, or break-even ROAS. This skill changes that.

**What it covers:**

*P&L analysis* — How to read an eCommerce-specific profit and loss statement line by line. Revenue (gross, net, by channel), COGS (and what should be included), gross margin, operating expenses, contribution margin, EBITDA. Claude identifies where money is leaking and what to fix first.

*Unit economics* — The numbers that determine whether your business model works: contribution margin per order, customer acquisition cost, customer lifetime value, LTV:CAC ratio, payback period, and break-even analysis. Claude calculates these from your data and tells you whether your unit economics are healthy, concerning, or broken.

*COGS reduction* — Specific strategies to lower your cost of goods: renegotiating with manufacturers, adjusting MOQs (minimum order quantities), material substitution, packaging optimization, consolidating suppliers, improving yield, and reducing returns.

*Pricing analysis* — The financial impact of pricing changes. "What happens to margin if I increase prices 10%?" or "What's the break-even on a 25% BFCM discount?" Claude models these scenarios.

*Cash flow management* — Cash flow is how eCommerce brands die. You can be profitable on paper and still run out of cash because inventory ties up capital. Claude covers the cash conversion cycle, payment terms negotiation, inventory planning, and managing the gap between when you pay suppliers and when customers pay you.

*Marketing spend efficiency* — Setting ad budgets rooted in real unit economics, not arbitrary ROAS targets. If your contribution margin is $25 and your CAC is $35, you're losing money on every new customer regardless of what your Meta ROAS says. Claude connects the financial reality to the marketing decisions.

*Scenario planning* — "What if revenue grows 50% next quarter?" "What if COGS increases 10%?" "What if we hire two people?" Claude builds financial scenarios so you can plan ahead instead of reacting.

*Fundraising preparation* — Getting your financial house in order for investor conversations. Clean P&L, cohort analysis, unit economics dashboard, revenue quality assessment, and the metrics investors will ask about.

**Example prompts:**
- *"Here's my P&L — where am I losing money and what should I fix first?"*
- *"Calculate my unit economics: AOV $65, COGS $18, CAC $35"*
- *"Should I raise prices by 15%? Model the impact"*
- *"I spend $20K/month on ads — is that sustainable for my margin structure?"*
- *"Help me negotiate better terms with my manufacturer"*

---

### 12. eCommerce VC Evaluation

**Skill folder:** `ecommerce-vc`
**Best for:** Understanding whether your brand is fundable, what it might be worth, and how to prepare for investor conversations

Not every eCommerce brand should raise venture capital. This skill doesn't assume fundraising is the goal — it evaluates your brand honestly through the lens an investor would use and helps you decide the right path.

**What it covers:**

*How VCs evaluate eCommerce brands* — The five lenses investors use: growth trajectory and scalability, unit economics and capital efficiency, competitive moats and defensibility, team and execution capability, and market size and category dynamics.

*Fundability assessment* — A structured score across the five evaluation areas. Claude is honest: if your brand isn't venture-backable, it'll tell you why and what would need to change. Many great businesses aren't VC-fundable, and that's perfectly fine.

*Valuation benchmarks* — Revenue multiples for eCommerce brands by stage, growth rate, and category. What a $2M revenue brand might be worth vs. a $10M brand vs. a $50M brand. How growth rate, margin, and customer retention affect multiples.

*Pitch deck guidance* — Slide-by-slide structure for a DTC brand investor pitch: problem, solution, market, product, traction, unit economics, team, ask. What investors expect to see and what makes them pass.

*Investor targeting* — How to find the right VCs and angels for your stage and category. Firms that invest in eCommerce vs. firms that don't. How to approach investors and what to send in the first email.

*Due diligence preparation* — The financial and operational documents investors will request during diligence. Revenue breakdown, cohort data, customer acquisition data, inventory reports, supplier contracts. Getting this organized before you need it.

*Alternative funding paths* — When VC isn't the right fit, Claude covers revenue-based financing (Clearco, Wayflyer), SBA loans, Shopify Capital, bank lines of credit, strategic partnerships, and the math of bootstrapping vs. raising.

**Example prompts:**
- *"Evaluate my brand like a VC — $2M/year, 70% gross margin, 30% growth"*
- *"What's a realistic valuation for a DTC skincare brand doing $5M?"*
- *"Help me build a pitch deck for my Series A"*
- *"Should I raise VC money or use revenue-based financing?"*
- *"What metrics do I need to hit before approaching investors?"*

---

### 13. eCommerce Marketing Analyst

**Skill folder:** `ecommerce-analytics`
**Best for:** Understanding which marketing channels actually drive revenue and making data-informed budget decisions

Most DTC founders are in one of two states: flying blind (no analytics setup) or drowning in data (20 dashboards, no clarity). This skill cuts through both problems by telling you exactly what to measure, how to read it, and what to do about it.

**What it covers:**

*Three-tier metrics framework* — Not all metrics deserve the same attention. Claude organizes eCommerce metrics into three tiers:

**Tier 1 (check daily):** Revenue, orders, AOV, conversion rate, ad spend, and ROAS. These are your vital signs.

**Tier 2 (review weekly):** Traffic by source, new vs. returning visitors, email performance (revenue, open rates, flow vs. campaign), customer acquisition metrics, and product performance.

**Tier 3 (analyze monthly):** Marketing Efficiency Ratio (MER), blended CAC, customer lifetime value, cohort analysis, and channel contribution analysis. These drive strategic decisions.

*Attribution — the honest version* — Every ad platform lies about attribution. Meta claims it drove a sale. Google claims the same sale. Klaviyo claims the same sale. Instead of chasing "perfect attribution" (which doesn't exist), Claude teaches a layered approach:

1. **MER** (total revenue / total marketing spend) — Your truth metric. It can't be gamed.
2. **Platform ROAS** — Directional signals, not absolute truth. Trends are real; absolute numbers are inflated.
3. **Post-purchase surveys** — "How did you hear about us?" captures customer perception.
4. **UTM tracking** — Tags on every link so GA4 shows clean campaign data.
5. **Incrementality testing** — Turn off a channel and measure the impact on total revenue.

*Platform-specific analytics* — How to read reports in the tools DTC founders actually use:
- **Shopify analytics** — Sales by channel, conversion rate by device, product performance, returning customer rate
- **Google Analytics 4 (GA4)** — Traffic acquisition, eCommerce purchase reports, funnel exploration, path analysis
- **Klaviyo** — Email revenue percentage, flow vs. campaign revenue, revenue per recipient, list growth
- **Meta Ads Manager** — ROAS, CPM, CPC, CTR, cost per purchase, performance by placement
- **Google Ads** — Search terms report, product performance in Shopping, auction insights, geographic performance

*Budget allocation framework* — How to split your marketing budget across channels based on performance data. Baseline allocation by channel, monthly rebalancing rules, and guidance on the new vs. returning customer revenue split by business stage.

*Analytics audit checklist* — A comprehensive audit covering tracking setup (pixels, events, UTMs), data quality (revenue matching, bot filtering, deduplication), reporting (weekly dashboards, monthly reviews), and attribution setup.

**Example prompts:**
- *"Audit my analytics setup — I use Shopify, GA4, Klaviyo, and Meta. What am I missing?"*
- *"Help me allocate my $25K/month marketing budget based on channel performance"*
- *"Calculate my blended CAC and LTV:CAC ratio"*
- *"My MER dropped from 4.5x to 3.2x — help me figure out why"*
- *"Set up a UTM tracking system for all my marketing channels"*

---

### 14. eCommerce Competitor Intelligence

**Skill folder:** `ecommerce-competitor-intel`
**Best for:** Understanding what your competitors are doing, why they're doing it, and what you should do about it

This skill doesn't just report competitor activity — it analyzes the strategy behind it and translates observations into actions. Most founders either ignore competitors entirely or obsess over them without learning anything useful. This skill finds the productive middle ground.

**What it covers:**

*Seven areas of competitive analysis:*

1. **Ad creative analysis** — Using Meta Ad Library, Claude analyzes competitor ad volume, formats, messaging themes, creative patterns, hooks, offers, and audience targeting signals. Which ads have been running longest (likely top performers)? What messaging appears most frequently?

2. **Website and PDP analysis** — Homepage messaging, navigation structure, product page elements (pricing display, photography, description approach, review integration), collection page design, and overall UX. Claude identifies both strengths you should learn from and weaknesses you can exploit.

3. **Pricing and offer analysis** — Product-by-product pricing comparison, subscription discounts, bundle structures, welcome offers, free shipping thresholds, and return policies. Claude builds a competitive pricing table.

4. **Email flow teardown** — Share competitor emails you've collected and Claude will analyze their welcome series, browse abandonment, cart abandonment, campaign frequency, and content quality. Claude tells you what to look for and how to evaluate what you find.

5. **Social media presence** — Platform activity, posting frequency, engagement rates, content types, UGC usage, and influencer partnerships. Which content gets the most engagement? What creators are they working with?

6. **Product strategy** — Catalog size, hero products, launch cadence, certifications, naming conventions, and subscription models. Where are there product gaps (they have it, you don't) and unique advantages (you have it, they don't)?

7. **Brand positioning** — Mission, target customer signals, brand personality, differentiation claims, and emotional positioning. Claude plots competitors on a positioning map and identifies white space.

*Multi-competitor comparison* — When analyzing 3-5 competitors simultaneously, Claude builds comparison tables covering price range, SKU count, subscription options, ad activity, email frequency, social following, review counts, and welcome offers.

*The "So What?" framework* — For every competitive insight, Claude answers three questions: What are they doing? (observation), Why are they doing it? (analysis), What should we do about it? (action). Observations without actions are useless.

*Competitive response playbook* — How to respond when a competitor drops prices, launches a similar product, goes viral, gets press coverage, or runs a heavy sale.

*Ongoing monitoring* — Monthly 30-minute check-in template and quarterly 2-3 hour deep-dive framework to keep competitive intelligence fresh.

**Example prompts:**
- *"Analyze my top 3 competitors' Meta ads — here are their brand names"*
- *"Do a full competitive audit of [Brand Name] — website, pricing, positioning"*
- *"Compare my pricing against these 5 competitors"*
- *"My competitor just launched a product like mine — what should I do?"*
- *"Map the competitive positioning in the premium skincare space"*

---

## How the Skills Work Together

These skills aren't isolated tools — they're designed to compound. Each skill references concepts from other skills, and the Brand Guide ties everything together.

### The Brand Guide as Foundation

```
                          Brand Guide
                              |
    ┌──────────┬──────────┬───┴────┬──────────┬──────────┐
    |          |          |        |          |          |
  Email    Copywriting  Ads    Social    Launch      PDP
    |          |          |        |          |          |
    └──────────┴──────────┴───┬────┴──────────┴──────────┘
                              |
                   Buyer Psychology
              (enhances all of the above)
                              |
              ┌───────────────┼───────────────┐
              |               |               |
           Pricing          CFO          Analytics
              |               |               |
              └───────┬───────┘               |
                      |                       |
                VC Evaluation          Competitor Intel
```

The Brand Guide feeds context to every skill. Buyer Psychology enhances every customer-facing skill. The financial skills (CFO, Pricing) inform the marketing skills (Ads, Email). And Analytics measures the impact of everything.

### Cross-Skill Connections

- **Pricing + CFO:** Set prices based on real margin data, not guesswork
- **Pricing + Buyer Psychology:** Use anchoring, the decoy effect, and framing to present prices
- **Pricing + Competitor Intel:** Position your pricing relative to competitor analysis
- **Email + Launch:** The email skill powers the launch skill's 8-email sequence
- **Email + Buyer Psychology:** Apply loss aversion, reciprocity, and the Zeigarnik effect to emails
- **PDP + Buyer Psychology:** Layer 5-10 psychological principles on product pages
- **PDP + Copywriting:** Write product descriptions that answer the 5 buyer questions
- **Paid Ads + Analytics:** Measure ad performance accurately and allocate budget based on data
- **Paid Ads + Competitor Intel:** Analyze competitor ads before building your own campaigns
- **CFO + Analytics:** Connect financial metrics to marketing metrics
- **CFO + VC:** Prepare financial data for investor conversations
- **Launch + Social Content:** Plan social content calendar around product launches
- **Launch + Popup:** Capture waitlist signups with launch-specific popups

---

## Workflows for Common Scenarios

### Scenario 1: "I just launched my DTC brand and need to set everything up"

1. **Brand Guide** — Build your brand context document
2. **Pricing** — Validate your pricing using the three-input framework
3. **PDP** — Optimize your product pages for conversion
4. **Copywriting** — Write homepage, collection, and about page copy
5. **Email** — Set up your core automated flows (welcome, cart abandonment, post-purchase)
6. **Popup** — Create a welcome popup to capture emails
7. **Social Content** — Plan your first month of social content
8. **Paid Ads** — Build your initial ad campaigns

### Scenario 2: "I'm launching a new product next month"

1. **Launch** — Create the 4-phase launch plan
2. **Pricing** — Set the price and design launch bundles
3. **Email** — Write the 8-email launch sequence
4. **Copywriting** — Write the product page copy
5. **PDP** — Optimize the product page for conversion
6. **Social Content** — Plan the social calendar for launch week
7. **Paid Ads** — Build launch ad campaigns
8. **Popup** — Create waitlist capture popup
9. **Analytics** — Set up tracking and define success metrics

### Scenario 3: "My conversion rate is low and I can't figure out why"

1. **Analytics** — Audit your data to find where customers drop off
2. **PDP** — Audit your product pages (the most common conversion bottleneck)
3. **Buyer Psychology** — Identify which psychological principles are missing from your pages
4. **Popup** — Evaluate your popup strategy (are you losing visitors who could be captured?)
5. **Pricing** — Check if pricing is the barrier (test price framing, bundles, payment plans)

### Scenario 4: "I need to prepare for fundraising"

1. **CFO** — Get your P&L and unit economics clean
2. **Analytics** — Build clear channel performance data
3. **VC** — Evaluate your fundability and determine realistic valuation
4. **Competitor Intel** — Map your competitive landscape for the investor deck
5. **Brand Guide** — Ensure your positioning and differentiation story is tight

### Scenario 5: "Black Friday is coming and I need a plan"

1. **Pricing** — Design your BFCM discount strategy
2. **Email** — Plan the BFCM email campaign calendar
3. **Paid Ads** — Build BFCM ad campaigns with seasonal creative
4. **Popup** — Create promotional popups for BFCM offers
5. **Social Content** — Plan BFCM social content calendar
6. **Analytics** — Set up tracking to measure BFCM performance vs. goals

### Scenario 6: "I want to understand my competitive landscape"

1. **Competitor Intel** — Run a full competitive audit across all 7 areas
2. **Pricing** — Build a competitive pricing comparison table
3. **Brand Guide** — Update competitive landscape section with findings
4. **Buyer Psychology** — Identify psychology principles your competitors are using that you're not

---

## Tips for Getting the Most Out of Your Skills

### 1. Build the Brand Guide first
Everything else works 10x better when Claude already knows your brand. Invest 30 minutes upfront and save hours on every future conversation.

### 2. Be specific in your prompts
"Help with email" produces generic output. "Audit my welcome series — I have 3 emails, 15% conversion to first purchase, $65 AOV, Klaviyo" produces expert-level output.

### 3. Give Claude your actual data
These skills are built to work with real numbers. Share your actual AOV, conversion rate, ROAS, P&L, and review data. The more real data you provide, the more specific and useful the output.

### 4. Use skills in combination
The real power isn't any single skill — it's using them together. A psychology-informed product page (PDP + Buyer Psychology), with pricing anchored to financial data (Pricing + CFO), promoted through a structured launch plan (Launch + Email + Ads), and measured accurately (Analytics) — that's when the compound effect kicks in.

### 5. Update your Brand Guide as you grow
Your brand evolves — new products, new customers, new positioning. Keep the brand guide current. Run an update every quarter or after any major change (new product line, rebrand, new customer segment).

### 6. Use the slash commands for specific skills
If Claude doesn't automatically pick up the right skill, use the slash command directly: `/ecommerce-email`, `/ecommerce-pricing`, `/ecommerce-launch`, etc.

### 7. Ask for audits, not just creation
These skills are as valuable for auditing what you already have as they are for creating new things. "Audit my email program" or "Audit my PDP" or "Audit my pricing strategy" often produces the highest-impact insights.

### 8. Follow up with "why" and "what specifically"
If Claude gives a recommendation, ask "why?" and "what specifically should I change?" The skills are deep enough to explain the reasoning behind every recommendation and provide exact implementation steps.

---

## FAQ

### Do I need all 14 skills?
No. Install the Brand Guide plus whichever skills match your current priorities. You can always add more later. That said, the Brand Guide, Email, Copywriting, and PDP are the four highest-impact skills for most DTC founders.

### Will these skills work with Claude on the web (claude.ai)?
The skills are designed for Claude Code (terminal), but the SKILL.md files can be uploaded as context in Claude web conversations too. You just lose the automatic skill detection and the Brand Guide auto-reading.

### Do skills slow down Claude?
Not noticeably. Skills are markdown files — they add context to Claude's knowledge but don't affect response speed.

### Can I customize the skills?
Absolutely. The SKILL.md files are plain markdown. Edit them to add your own frameworks, benchmarks, templates, or industry-specific knowledge. You can also add new sections or remove ones that aren't relevant to your business.

### How often are skills updated?
Check the GitHub repo for updates. New skills and improvements are added periodically. You can pull updates with `git pull` if you cloned the repo.

### Can I use these skills for a non-DTC eCommerce business?
These skills are optimized for DTC (direct-to-consumer) brands selling through their own online store. If you sell on Amazon, wholesale, or through marketplaces, many principles still apply but some advice will be DTC-specific. The Email, Copywriting, Buyer Psychology, and Pricing skills are the most universally applicable.

### What if two skills give conflicting advice?
The skills are designed to be complementary, but if you ever get conflicting recommendations, the financial skills (CFO, Pricing) should take precedence for financial decisions, and the customer-facing skills (PDP, Email, Copywriting) should take precedence for marketing decisions. When in doubt, the data wins — use the Analytics skill to test both approaches.

---
