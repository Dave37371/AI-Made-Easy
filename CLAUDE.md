# AI MADE EASY SUMMIT — COWORK OS BRAIN
## Brand: Voice to Influence™ presents, founding partner Syllaby | Folder: /VoiceToInfluence/AI-Made-Easy/

---

## WHAT THIS IS

A new VTI-family summit — **AI Made Easy Summit** — run in partnership with **Syllaby** (Austin Armstrong, CEO Syllaby, existing VTI Guest Faculty — see `VoiceToInfluence/MEMORY.md`, added 2026-08-21).

This is a **standalone GitHub repo** (`Dave37371/AI-Made-Easy`, cloned here with its own `.git`), separate from `vti-site` and `heromakers-portal`. Repo was empty on creation — no commits, no history to inherit.

Full VTI brand truth (offer stack, ecosystem, voice, team, routing rules) lives one level up at `VoiceToInfluence/CLAUDE.md` — read it first. This file only holds what's specific to this summit.

---

## CONFIRMED (2026-09-11)

- **Deployment target:** Netlify standalone site, same pattern as `vti-site` — plain HTML/CSS/JS at repo root, `netlify.toml` with `publish = "."`, own `.git`.
- **Partnership (superseded — see session 3 below):** was framed as "Voice to Influence™ × Syllaby," co-equal. Corrected 2026-09-11 session 3 to "presented by VTI, Syllaby as founding partner" — do not use the "×" framing.
- **Event branding (Dave's exact direction, use as-is):**
  - Event name (largest, most visible element): `AI MADE EASY SUMMIT`
  - Subhead/category line: `FOR MARKETING & BUSINESS`
  - Promise line: `Practical AI. Better Marketing. Smarter Business.`
  - Location/date: `Gold Coast · June 2027`
- **Austin Armstrong placement rule:** keep his name OUT of the main event title/hero headline. He goes in speaker/host creative instead — e.g. "Featuring Syllaby Founder & CEO Austin Armstrong." Rationale (Dave's): keeps the core brand uncluttered, more leverage using him as a speaker reveal than baking his name into the title.

## CONFIRMED (2026-09-11, session 2)

- **This repo IS the funnel** — not just a marketing teaser. It will hold the registration landing page and the thank-you page. Exception to the standard VTI routing rule ("funnel builds happen in CF2/GHL Claude Project, not here") — Dave's call for this summit specifically.
- **Checkout/registration mechanic:** native GHL form, embedded directly into this repo's pages (same pattern as a paid GHL checkout form, or a free-signup GHL form if the summit ends up free — either way it's a GHL form embed, not a custom-built form). No CF2/GHL Claude Project funnel build needed for this one.
- **Syllaby logo:** `assets/syllaby-logo.png`, sourced from Dave, 2000×2000, solid background (no transparency — colorType RGB, not RGBA). Used in the header partner lockup at 52px (2px radius square) next to the VTI horizontal mark, separated by a "×". Not wrapped in a link — Syllaby's own site URL hasn't been confirmed, don't guess it.
- **Sequence:** current build (hero/index.html) gets finalised and pushed now. Dave connects Netlify + a custom domain himself. Landing page (registration) and thank-you page get built in a later session once the domain is live.

## BUILD BRIEF — CONFIRMED 2026-09-11, session 3 (source of truth, supersedes earlier partial detail)

**Positioning:** AI Made Easy is intended as Dave/VTI's **signature annual event** — repeats yearly. This year: presented by Voice to Influence™, **Syllaby as founding partner**. The founding-partner slot is not permanently Syllaby — next year's edition may swap in a different (bigger) co-presenter (GoHighLevel floated as a hypothetical example only, not confirmed). Do not bake "× Syllaby" or any permanent co-branding into reusable page/section names — keep the founding-partner treatment swappable.

**Format:**
- Saturday = main event. Workshop-style, intimate, explicitly **not** keynote-heavy.
- Sunday = VIP mastermind. Capped at **~50 people**, higher ticket price, with Austin Armstrong.
- Total cap: **~300 people**.
- Virtual attendance option exists but is **paid, and not advertised upfront** — don't surface it in primary hero/CTA copy; it's a secondary/backend offer.

**Pricing:**
- General admission: **~$497/ticket minimum**.
- Early-bird tiers, price rises as the event nears.
- Needs a **coupon code system** (ties into the launch mechanic below).

**Launch mechanic:**
- First **100 tickets free** via coupon code, distributed at **Austin's AI Marketing World event** (recipients still cover their own travel/event costs — the ticket itself is free, nothing else is comped).
- This is used as **social proof** ("100 people already committed") to then sell the remaining tickets at ~$500 each. Sequencing matters: the free-100 push comes first, general sale copy should be able to lean on "already X people confirmed" once that phase completes.

**Budget:**
- Production cost: **~$100,000**.
- Break-even: **≈200 attendees**.
- Sponsorship target: **$20K–$50K**.

**Speakers confirmed so far:**
- Austin Armstrong (Syllaby, VIP mastermind host)
- Kanji Lowe
- Melissa Mitchell
- Bruno & Stacie — flying in if possible, virtual fallback if not (not yet settled)
- Jeff Ross — main speaker

No bios/roles beyond names confirmed yet for Kanji Lowe, Melissa Mitchell, or Bruno & Stacie — don't invent them.

---

## STILL OPEN — ASK DAVE BEFORE FINALISING

- Exact summit day(s)/dates within June 2027 (which Saturday/Sunday), and venue within Gold Coast
- Bruno & Stacie: flying in or virtual — not yet settled
- Speaker bios/roles for Kanji Lowe, Melissa Mitchell, Bruno & Stacie
- The actual GHL form (embed code / form ID) for registration, including the coupon-code mechanism for the free-100 launch phase — not yet supplied, needed before the landing page can go live
- Exact early-bird pricing tiers and price-rise schedule
- Sponsor prospects/deals against the $20K–$50K target
- Custom domain (Dave connecting via Netlify — get the final domain once live)

---

## DESIGN REFERENCE

Two references, both under `VoiceToInfluence/`:

- **Site conventions (repo structure, Netlify, fonts-as-link-tags, nav/footer):** `vti-site/index.html`, `vti-site/watch.html`, `vti-site/netlify.toml`
- **Event/summit hero pattern (badge, datebar, countdown, host/faculty grid, CTA band):** `watch-page/watch.html` and `VTI-Summit-Builds-v3/<summit-slug>/` (numbered GHL paste blocks — reference for structure/copy blocks even though this repo isn't GHL-paste itself)

Shared design system (ink/gold, Playfair Display + DM Sans) documented in full in `VoiceToInfluence/CLAUDE.md` under SITE BUILD RULES. Do not invent a new layout without checking these references first — see the "never invent a layout" rule in the parent CLAUDE.md.

---

## ROUTING RULES (inherited from VTI)

- Funnel builds (CF2/GHL) → CF2/GHL Claude Project, not here
- Transcript extraction → Transcript Claude Project, not here
- Image creation → Canva MCP
- Social publishing → Blotato MCP, never without Dave's confirmation
- This summit is part of the HeroMakers → VTI pipeline — every asset should carry a path back to VTI's offer stack (Weekly Lab → Launchpad $5,000 → Momentum $15,000), per `VoiceToInfluence/CLAUDE.md`

---

## MEMORY SYSTEM

This folder has its own MEMORY.md. Read it at the start of every session, don't announce it. Memory is user-triggered only — write when Dave says "remember this" / "log this" / etc. All entries persist until Dave asks to remove them. Flag contradictions rather than silently overwriting.
