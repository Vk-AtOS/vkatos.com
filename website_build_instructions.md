# VKatOS Website — Complete Build Instructions for Gemini
# Run this entire file as your instruction set.
# Build every page sequentially. Push to git after each page.

## YOUR ROLE
You are building a complete enterprise software company website for VKatOS.
You will build every page listed below, one by one, pushing to git after each.
Do not stop until every page is built and pushed.
Do not ask for confirmation between pages — just build and push continuously.

## BRAND REFERENCE
You have already read index.html. You understand:
- Dark navy background (#080F1E)
- Cyan accent (#00C2D4)
- Fonts: Syne (headings), DM Sans (body), DM Mono (code/data)
- Tone: Direct, technical, enterprise-grade, no fluff
- Custom cursor, grid backgrounds, terminal motifs
- Products: DCSP, Aether2, Velaris, VKatOS platform
- Tagline: Autonomous Enterprise Systems

## SHARED COMPONENTS
Every page must include:

HEADER (identical across all pages):
- VKatOS logo (⚡ VKatOS in Syne font, cyan)
- Nav links: Products | Solutions | Pricing | About | Blog | Contact
- Right side: "Client Login" button (links to /login) + "Request Demo" CTA button
- Sticky on scroll, slight blur backdrop

FOOTER (identical across all pages):
- 4 columns: Products, Solutions, Company, Connect
- Products: DCSP, Aether2, Velaris, VKatOS Platform
- Solutions: Enterprise HR, Recruitment, Study Abroad, Custom
- Company: About, Blog, Pricing, Careers, Contact
- Connect: GitHub (github.com/Vk-AtOS), Email (velan@vkatos.com), 
           Phone (+91-8056238628), Location (Chennai, Tamil Nadu)
- Bottom bar: © 2026 VKatOS. All rights reserved. | Privacy | Terms
- Same dark style as index.html

## PAGES TO BUILD — IN THIS EXACT ORDER

---

### PAGE 1: pricing/index.html
ALREADY DONE ON HOMEPAGE. This is a dedicated full pricing page.

Content:
- Hero: "Transparent pricing. No lock-ins. No surprises."
  Subtext: "Deploy in 2 weeks. Cancel anytime. Full source access on Enterprise."
- Monthly/Annual toggle (JS, annual = 20% discount shown)
- Three pricing cards:
  STARTER — ₹49,999/month
    - 1 product module
    - Up to 500 pipeline entities
    - DCSP stall detection included
    - Email support
    - 2-week deployment
    - Hosted on your infrastructure
  PROFESSIONAL — ₹1,49,999/month (MOST POPULAR badge)
    - All 3 product modules
    - Unlimited pipeline entities
    - DCSP + Aether2 full suite
    - Velaris dashboard included
    - Priority support (4hr response)
    - Custom integrations (2/quarter)
    - Quarterly reviews
  ENTERPRISE — Custom pricing
    - Everything in Professional
    - Dedicated instance
    - Custom DCSP configuration
    - SLA guarantee (99.9% uptime)
    - 24/7 support
    - On-premise deployment option
    - Source code escrow
    - Annual contract, custom terms
- Feature comparison table (all features vs all tiers, checkmarks)
- FAQ section (6 items):
  Q: Is there a free trial?
  A: We offer a 2-week pilot deployment on your actual data. Not a sandbox.
  Q: What does "2-week deployment" mean?
  A: We deploy, configure, and train your team in 14 days or less.
  Q: Do you store our data?
  A: No. Zero PII exposure. Runs entirely on your infrastructure.
  Q: Can we switch plans?
  A: Yes. Upgrade anytime, downgrade at renewal.
  Q: What's the contract length?
  A: Monthly for Starter/Professional. Annual for Enterprise (negotiable).
  Q: Do you offer discounts for NGOs or educational institutions?
  A: Yes. Contact us for special pricing.
- Bottom CTA: "Not sure which plan fits? Let's talk." + calendar link placeholder

Save as: pricing/index.html
Git commit: "Add pricing page — full tier breakdown with comparison table"

---

### PAGE 2: about/index.html

Content:
- Hero: "Built by engineers. For enterprises that can't afford downtime."
- Mission statement section:
  "VKatOS exists because enterprise pipelines fail silently.
   A candidate stuck in review for 6 days. A student visa application
   missed because no one noticed the deadline. A recruitment fee lost
   because the follow-up never happened.
   We build systems that notice. Systems that act. Systems that never sleep."
- Founder section:
  Name: Thulasi Velan Rajamanickam
  Title: Founder & CEO
  Location: Chennai, Tamil Nadu
  Bio: "Thulasi has spent years building enterprise automation systems,
  studying where pipelines break, and engineering the fixes. VKatOS is
  the crystallisation of that work — a suite of autonomous tools that
  eliminates the manual overhead enterprises have accepted as normal.
  DCSP emerged from watching monitoring systems fail to catch failures
  before they cascaded. Aether2 emerged from building pipelines that
  needed to survive instability. Velaris emerged from clients asking
  for visibility into systems they couldn't see."
  Avatar: Stylised initials "TV" in a dark card with cyan glow
- Technology philosophy section (3 principles):
  1. "Offline first. Your data never leaves your infrastructure."
  2. "Predictive over reactive. Catch failures before they happen."
  3. "Deploy fast. Iterate faster. 2 weeks to production."
- Timeline / milestones (make these real and grounded):
  2024 Q3: DCSP v1 — first stall detection engine, 100 tests
  2024 Q4: Aether2 v1 — autonomous pipeline orchestration
  2025 Q1: First enterprise deployment (HR domain)
  2025 Q3: DCSP reaches 469 tests, production hardened
  2025 Q4: Aether2 33-test suite, MoE agent integration
  2026 Q1: VKatOS platform launch — 4 enterprise domains
- Values section: Speed. Reliability. Transparency. Zero vendor lock-in.
- CTA: "We're building the infrastructure layer for enterprise autonomy.
        If that resonates — let's work together."

Save as: about/index.html
Git commit: "Add about page — founder story, mission, timeline"

---

### PAGE 3: blog/index.html

Content:
- Hero: "The VKatOS Engineering Blog"
  Subtext: "Deep dives into pipeline automation, stall detection, and enterprise AI."
- Featured article card (large, top):
  Title: "Why stall detection is the hidden cost of enterprise HR"
  Date: March 10, 2026
  Read time: 8 min
  Excerpt: First 2-3 sentences of the article
  Tag: Pipeline Automation
- Grid of article cards (the other 2 articles):
  Article 2: "Offline AI vs Cloud AI: what enterprise IT actually wants"
  Date: March 5, 2026 | 6 min read | Tag: Enterprise AI
  Article 3: "How pipeline automation cut recruitment cycle time by 60%"
  Date: February 28, 2026 | 7 min read | Tag: Case Study
- Newsletter signup: "Get notified when we publish. No spam."
  Email input + Subscribe button (static, no backend needed)

Save as: blog/index.html
Git commit: "Add blog index page"

---

### PAGE 4: blog/stall-detection.html

Full article. ~1200 words. Technical but readable.

Title: "Why Stall Detection is the Hidden Cost of Enterprise HR"
Subtitle: "Every day a candidate sits at the same pipeline stage, 
           your hiring velocity drops. Most ATS systems don't notice."
Author: Thulasi Velan | March 10, 2026 | 8 min read

Article structure:
1. The problem (300 words)
   - Hiring pipelines stall silently
   - No one gets alerted when a candidate is stuck for 4 days
   - Manual tracking is inconsistent
   - Real cost: candidate drops out, re-sourcing costs 3x more
   
2. What a stall actually looks like (200 words)
   - Technical definition: entity idle beyond threshold for its stage
   - Different stages have different thresholds
   - Interview scheduled → 48 hours max. Offer sent → 24 hours max.
   
3. How DCSP approaches this (300 words)
   - Baseline learning per stage per pipeline type
   - Statistical anomaly scoring (Z-score based)
   - Three severity levels: WARNING, CRITICAL, EMERGENCY
   - Self-healing: escalate → pause → require human review
   
4. The predictive layer (200 words)
   - Reactive detection is too late
   - Pattern recognition across historical pipeline data
   - "This candidate has 73% probability of stalling in 4 hours"
   - Time to act before the stall, not after
   
5. Results (200 words)
   - Fictional but realistic enterprise numbers
   - "Pipeline stall rate reduced by 84% in first month"
   - "Average time-to-offer reduced from 19 days to 11 days"
   - "Zero missed SLA breaches after deployment"

Include code snippet (DM Mono styled):
  # DCSP stall check example
  detector.check_pipeline(
    entity_id="candidate_4821",
    stage="interview_scheduled",
    threshold_hours=48
  )
  # Output: {"status": "WARNING", "idle_hours": 31.4, 
  #          "predicted_stall_in": "16.6h", "action": "notify_hr"}

End with CTA: "See DCSP in action → Request a live demo"

Save as: blog/stall-detection.html
Git commit: "Add blog article — stall detection"

---

### PAGE 5: blog/offline-ai.html

Full article. ~1000 words.

Title: "Offline AI vs Cloud AI: What Enterprise IT Actually Wants"
Subtitle: "We asked 20 enterprise IT managers what they feared most 
           about AI deployments. The answer was unanimous."
Author: Thulasi Velan | March 5, 2026 | 6 min read

Structure:
1. The fear (200 words) — data leaving the building
2. What cloud AI actually means for enterprise (200 words) — PII, compliance, cost
3. The offline alternative (200 words) — Ollama, local LLMs, no API calls
4. Performance comparison (200 words) — latency, reliability, cost per query
5. What VKatOS chose and why (200 words) — zero PII, offline first, Aether2

Save as: blog/offline-ai.html
Git commit: "Add blog article — offline AI"

---

### PAGE 6: blog/recruitment-automation.html

Full article. ~1000 words.

Title: "How Pipeline Automation Cut Recruitment Cycle Time by 60%"
Subtitle: "A recruitment agency was losing placements to slow follow-up.
           Here's what changed when the pipeline started managing itself."
Author: Thulasi Velan | February 28, 2026 | 7 min read

Structure:
1. The client situation (200 words) — mid-size recruitment agency, manual tracking
2. The specific failure modes (200 words) — stalls, missed follow-ups, lost fees
3. The VKatOS deployment (200 words) — what was installed, how long it took
4. The results at 30 days (200 words) — metrics, before/after
5. What the team said (200 words) — quote from fictional ops manager

Save as: blog/recruitment-automation.html
Git commit: "Add blog article — recruitment automation case study"

---

### PAGE 7: products/dcsp/index.html

Full product page for DCSP.

Content:
- Hero: "DCSP — Distributed Control & Stall Prevention"
  Subtext: "The only pipeline monitor that predicts failures before they happen."
  Badges: "469 Tests Passing" | "Offline" | "Self-Healing" | "Real-time"
- What DCSP does (3 columns):
  1. Detects stalls before they happen (predictive Z-score engine)
  2. Self-heals automatically (configurable actions per severity)
  3. Audit trail with cryptographic hash chain (tamper-proof)
- How it works (step diagram, CSS-based):
  Step 1: Connect DCSP to your pipeline
  Step 2: DCSP learns your baseline (stage durations, patterns)
  Step 3: Anomaly scoring runs every 15 minutes
  Step 4: WARNING → notify. CRITICAL → escalate. EMERGENCY → pause.
  Step 5: Every action logged to immutable audit chain
- Technical specs section:
  Language: Python 3.10+
  Tests: 469 passing
  Detection method: Z-score statistical anomaly
  Latency: <50ms per check
  Storage: SQLite (single-tenant) / PostgreSQL (multi-tenant)
  Deployment: On-premise, air-gapped supported
  Integration: REST API, Python SDK, webhook notifications
- Code snippet showing DCSP integration
- Compatibility: Works with Aether2, standalone, or any Python pipeline
- CTA: "See DCSP detect a stall live → Request Demo"

Save as: products/dcsp/index.html
Git commit: "Add DCSP product page"

---

### PAGE 8: products/aether2/index.html

Full product page for Aether2.

Content:
- Hero: "Aether2 — Autonomous Pipeline Orchestration"
  Subtext: "Multi-step AI pipelines that survive failure, adapt to load, 
            and never need babysitting."
  Badges: "33 Tests Passing" | "MoE Architecture" | "Ollama Native" | "Self-Recovering"
- What Aether2 does (3 columns):
  1. Orchestrates multi-step AI pipelines with retry and recovery
  2. MoE (Mixture of Experts) routing — right model for right task
  3. Integrates with DCSP for end-to-end pipeline health
- Architecture diagram (CSS/HTML visual):
  Input → Stage Router → [Expert 1 | Expert 2 | Expert 3] → 
  Aggregator → DCSP Monitor → Output → Audit Log
- Technical specs:
  Language: Python 3.10+
  Tests: 33 passing
  AI Backend: Ollama (offline), OpenAI compatible
  Models supported: deepseek-coder, llama3.2, qwen2.5, mistral
  Routing: Mixture of Experts (MoE)
  Recovery: Automatic retry with exponential backoff
  Integration: REST API, DCSP native, webhook support
- Use cases: HR pipeline scoring, document generation, 
             multi-step analysis, classification at scale
- CTA: "See Aether2 orchestrate a live pipeline → Request Demo"

Save as: products/aether2/index.html
Git commit: "Add Aether2 product page"

---

### PAGE 9: products/velaris/index.html

Full product page for Velaris.

Content:
- Hero: "Velaris — Enterprise Pipeline Dashboard"
  Subtext: "See every pipeline. Every stage. Every risk. In real time."
  Badges: "Real-time" | "Multi-domain" | "Zero Cloud" | "Audit Ready"
- What Velaris does:
  1. Unified dashboard for all pipeline domains
  2. Real-time stall detection visualisation (powered by DCSP)
  3. AI-generated documents and checklists (powered by Aether2)
- Key features:
  - Kanban-style pipeline board
  - Predictive risk scoring per entity
  - One-click document generation
  - Immutable audit trail viewer
  - Multi-tenant (separate data per client)
  - File upload (PDF, Word, text)
- CTA: "See Velaris in your browser → Request Demo"

Save as: products/velaris/index.html
Git commit: "Add Velaris product page"

---

### PAGE 10: solutions/hr/index.html

Content:
- Hero: "Enterprise HR Automation"
  Subtext: "From resume received to onboarded — zero manual pipeline management."
- Problem section: 3 pain points large HR teams face
- Solution section: How VKatOS solves each one
- Pipeline visualisation (CSS, shows 8 stages of HR pipeline)
- Results section: Fictional but realistic metrics
- Integration logos: SAP, Workday, Darwinbox (text-based)
- CTA: "See how VKatOS fits your HR stack → Talk to us"

Save as: solutions/hr/index.html
Git commit: "Add HR solutions page"

---

### PAGE 11: solutions/recruitment/index.html

Same structure as HR but for recruitment agencies.
Focus on: placement velocity, fee protection, client reporting.

Save as: solutions/recruitment/index.html
Git commit: "Add recruitment solutions page"

---

### PAGE 12: solutions/education/index.html

Same structure but for study abroad consultancies.
Focus on: deadline management, document tracking, visa pipeline.

Save as: solutions/education/index.html
Git commit: "Add education solutions page"

---

### PAGE 13: login/index.html

Content:
- Centered card, dark background
- VKatOS logo at top
- "Client Portal" heading
- Email input
- Password input
- "Sign In" button (no backend — shows "Access request pending" on submit)
- "Request Access" link → mailto:velan@vkatos.com
- "Forgot password? Contact support" link
- Note at bottom: "Portal access is provisioned per contract.
                   Contact velan@vkatos.com to request access."
- Clean, minimal, professional

Save as: login/index.html
Git commit: "Add client login page"

---

### PAGE 14: contact/index.html

Content:
- Hero: "Let's build something that works."
- Two columns:
  Left: Contact form
    - Name, Company, Email, Phone (optional)
    - "What are you trying to automate?" textarea
    - "How did you hear about us?" dropdown
    - Submit button (mailto: fallback)
  Right: Direct contact info
    - Email: velan@vkatos.com
    - Phone: +91-8056238628
    - Location: Chennai, Tamil Nadu, India
    - Response time: "We respond within 4 business hours"
    - "Book a 30-min demo" → placeholder calendar link
- Map placeholder (static, shows Chennai with a pin emoji)

Save as: contact/index.html
Git commit: "Add contact page"

---

### PAGE 15: 404.html

Content:
- Same dark theme
- Large "404" in Syne font, cyan glow
- "This page doesn't exist. Yet."
- Subtext: "The pipeline you're looking for hasn't been deployed."
- Links: Back to Home | View Products | Contact Us

Save as: 404.html
Git commit: "Add 404 page"

---

### FINAL STEPS (do these last, in order):

1. Create sitemap.xml listing all pages with their URLs (vkatos.com/...)
   Git commit: "Add sitemap.xml"

2. Create robots.txt:
   User-agent: *
   Allow: /
   Sitemap: https://vkatos.com/sitemap.xml
   Git commit: "Add robots.txt"

3. Create a shared nav.js file that all pages can reference for
   consistent navigation highlighting (marks current page as active)
   Git commit: "Add shared navigation JS"

4. Final git push of everything:
   git add . && git commit -m "Complete VKatOS website — all pages live" && git push

---

## EXECUTION RULES

1. Build pages IN ORDER. Do not skip.
2. Every page uses the SAME header and footer defined above.
3. Every page is self-contained — all CSS inline in <style> tags.
4. No external CSS files. Google Fonts CDN is allowed.
5. After each page: git add [file] && git commit -m "[message]" && git push
6. If git push fails, fix it and retry before moving to next page.
7. Do not ask for confirmation. Build continuously.
8. When all pages are done, say: "WEBSITE COMPLETE — all 15 pages live at vkatos.com"

BEGIN NOW. Start with PAGE 1: pricing/index.html
