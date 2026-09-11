# AI MADE EASY SUMMIT — COWORK OS BRAIN
## Brand: Voice to Influence™ presents, founding partner Syllaby | Folder: /VoiceToInfluence/AI-Made-Easy/

---

## STANDING CONVENTION — headshot/photo cropping (fixed 12 Sep 2026, keep for every future event)

Every headshot on this site (mentor/speaker cards, profile portraits — every tier, not just
VIP) was showing heads cut off at the top. First fix attempt (inline `objectPosition` magic
number) treated the symptom, not the cause, and Dave correctly called it out as fragile —
would've needed re-tuning per photo, per event, forever.

**Real root cause:** the image containers used fixed pixel heights (e.g. `h-[300px]` on a
wide card) that don't match a headshot's natural portrait aspect ratio. `object-fit: cover`
then has to crop hard to fill that mismatched box, and where it crops depends on the source
photo's own proportions — unpredictable, and no single `object-position` value fixes it for
every photo.

**Actual fix:** make the container's aspect ratio match a standard headshot ratio instead of
a fixed pixel height — `aspect-[4/5]` on the image wrapper, `object-cover object-top` on the
`<img>` (see `components/SpeakerCard.tsx`, `components/SpeakerProfile.tsx`). With the box
already shaped like the photo, `object-top` crops little to nothing, so no per-photo tuning is
needed. `Speaker.photoPosition` (`lib/speakers.ts`) still exists as a manual escape hatch for
the rare photo that's still framed oddly, but it's the exception, not the standard path.

**This is the reusable pattern** — Dave doesn't want to re-fix this on every new event site.
Carry `aspect-[4/5]` (or whatever ratio matches the actual photos being used) + `object-cover
object-top` into every future VTI/HeroMakers event build, whether copied from this repo or
built fresh. Never give a headshot container a fixed pixel height.

---

## STATUS (11 Sep 2026): Next.js rebuild in progress on branch `nextjs-rebuild`

Same stack move as `LSD Marketing/Main-Site`: off plain static HTML onto Next.js + Tailwind +
shadcn/ui, so future premium components (shadcn, Vengeance UI, or any other registry) drop in
natively via their own CLI instead of being hand-copied. `main` still holds the original
single-file `index.html` (hero page, committed/pushed) and is what Netlify would deploy from
until this branch is reviewed and merged — untouched by this rebuild.

**Stack (`nextjs-rebuild` branch):**
- Next.js 16 (App Router) + Tailwind v4, static export (`output: "export"` in `next.config.ts`).
- Framer Motion for the hero reveal.
- shadcn/ui structure (`components.json`, `lib/utils.ts`, `components/ui/`) wired up. The CLI
  works natively here — `npx shadcn@latest add [component]` verified live (11 Sep 2026, same
  device). No network block. Use the CLI directly for shadcn or any other component registry
  (Vengeance UI included) going forward.
- Brand tokens in `app/globals.css` pulled from the VTI design system documented in
  `VoiceToInfluence/CLAUDE.md` (SITE BUILD RULES): ink/gold/cream/mist palette, Playfair
  Display (headings) + DM Sans (body), 2px radius everywhere, no pills/rounded cards.
- Hero content ported 1:1 from the existing `main`-branch `index.html` (partner lockup, hero,
  featuring/Austin Armstrong, CTA band, footer) into components — `Header`, `Hero`, `Featuring`,
  `CtaBand`, `Footer` — no copy changes, just a technical port to the new stack.
- `assets/*.png` moved to `public/assets/` (Next.js convention for static files).
- `netlify.toml` on this branch only: build command `npm run build`, publish `out`. Doesn't
  affect `main`/production until merged.
- Build verified clean (`npm run build`) before this note was written.

**Not yet done on this branch** — still needs the full build brief applied (see BUILD BRIEF
section below): registration/pricing tiers, coupon-code mechanic, Sat/Sun schedule detail,
speaker grid beyond Austin, native GHL form embed. This pass only covers the stack migration
and the existing hero content — content/funnel work is a separate follow-up.

## UPDATE (11 Sep 2026, session 4): Landing page + thank-you page + speaker pages built

Full registration landing page (`app/page.tsx`) and thank-you page (`app/thank-you/page.tsx`)
built on `nextjs-rebuild`, plus individual speaker pages at `/speakers/[slug]` (dynamic route,
data in `lib/speakers.ts`, statically generated — 7 pages). Pushed to origin.

**Date handling — per Dave's instruction, start date only for now:** every page says
"Gold Coast · June 2027" with no specific day, and both the schedule section and thank-you
page explicitly say exact dates are still being finalised. No calendar-add links (Google/
Outlook/ICS) — can't build those without a real date/time.

**Speaker content sourced this session:**
- **Austin Armstrong** — bio/facts/photo from `voicetoinfluence.com/faculty/austin-armstrong`
  and `/mentors`. Confirmed, photo included.
- **Jeff Ross** — bio/facts/photo ported verbatim from `vti-site/faculty/jeff-ross.html`
  (the "reference file" Dave pointed to). Confirmed, photo included.
- **Kanji Low** — bio/facts from `kanjilow.com/#about`. NOTE: site spells it "Kanji Low" (no
  "e") — CLAUDE.md/MEMORY.md speaker list elsewhere says "Kanji Lowe." Used "Low" (primary
  source), flagging the discrepancy for Dave to confirm. No usable photo URL came back from
  the fetch (page only exposed base64 image data, not a stable URL) — placeholder initials
  used instead; needs a proper headshot added later.
- **Bruno & Stacie Marcinkowski** — bio/facts/photos ported from the Real Estate Summit
  speaker pages (`heromakers-portal/speakers/bruno-marcinkowski.html` and
  `stacie-marcinkowski.html` — the "reference file" Dave pointed to). Photos reused from their
  existing `statics.myclickfunnels.com` URLs (already-hosted assets, not re-uploaded).
- **Melissa Mitchell** — placeholder only, per Dave's instruction (no info supplied). Card
  shows "To be confirmed," profile page says bio is pending.
- **Louise Dutka** — placeholder only. NOTE: this name wasn't in the confirmed speaker list
  anywhere else in this repo's CLAUDE.md/MEMORY.md before this session — added here as a new
  name Dave gave directly. Flagging as new/unconfirmed rather than assuming it was always
  part of the lineup.

**Layout convention followed:** VIP tier (Austin, Jeff — 2-up, large cards) / Speaker tier
(Kanji, Melissa, Bruno, Stacie, Louise — 4-up compact cards), matching the existing VTI summit
build pattern in `VTI-Summit-Builds-v3/peak-vitality-summit-ii/04-vip-speakers.html`. Individual
speaker profile pages follow the `vti-site/faculty/jeff-ross.html` structure (hero grid, about
+ facts sidebar, topics, closing CTA).

**Registration mechanic — honestly incomplete, not faked:** the register panel shows real
pricing framing (~$497 general, early-bird, first-100-free coupon mechanic as copy) but the
actual GHL form isn't embedded — Dave hasn't supplied the form ID/embed code yet (see STILL
OPEN section). The "Save My Seat" button in that panel is visibly disabled with "Coming Soon"
rather than linking anywhere fake. Marked clearly in the source for whoever swaps it in.

**Watch page:** not built. Speaker pages currently note "the watch page will be linked here
once the event goes live" rather than linking to a page that doesn't exist. Building the
actual watch page is future work once live/virtual streaming details are settled.

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
