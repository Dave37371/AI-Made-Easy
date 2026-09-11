# AI MADE EASY SUMMIT — COWORK OS BRAIN
## Brand: Voice to Influence™ × Syllaby | Folder: /VoiceToInfluence/AI-Made-Easy/

---

## WHAT THIS IS

A new VTI-family summit — **AI Made Easy Summit** — run in partnership with **Syllaby** (Austin Armstrong, CEO Syllaby, existing VTI Guest Faculty — see `VoiceToInfluence/MEMORY.md`, added 2026-08-21).

This is a **standalone GitHub repo** (`Dave37371/AI-Made-Easy`, cloned here with its own `.git`), separate from `vti-site` and `heromakers-portal`. Repo was empty on creation — no commits, no history to inherit.

Full VTI brand truth (offer stack, ecosystem, voice, team, routing rules) lives one level up at `VoiceToInfluence/CLAUDE.md` — read it first. This file only holds what's specific to this summit.

---

## CONFIRMED (2026-09-11)

- **Deployment target:** Netlify standalone site, same pattern as `vti-site` — plain HTML/CSS/JS at repo root, `netlify.toml` with `publish = "."`, own `.git`.
- **Partnership:** Voice to Influence™ × Syllaby. Presented-by framing, not a co-host/sponsor-only relationship.
- **Event branding (Dave's exact direction, use as-is):**
  - Eyebrow/kicker: `VOICE TO INFLUENCE™ × SYLLABY PRESENT`
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

## STILL OPEN — ASK DAVE BEFORE FINALISING

- Exact summit day(s)/dates within June 2027, and venue within Gold Coast (in-person? hybrid?)
- Full speaker list beyond Austin Armstrong
- The actual GHL form (embed code / form ID) for registration — not yet supplied, needed before the landing page can go live
- Whether other VTI faculty appear on this summit or it's a standalone Syllaby-fronted event
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
