# AI MADE EASY SUMMIT — MEMORY FILE
## Last updated: 2026-09-11

---

## STANDING RULES

(none yet — first session)

---

## SETUP LOG

- 2026-09-11: Repo created by Dave on GitHub (`Dave37371/AI-Made-Easy`), empty. Cloned into `VoiceToInfluence/AI-Made-Easy/` with its own `.git`, following the same pattern as `vti-site` and `heromakers-portal`.
- 2026-09-11: Confirmed with Dave — this is a **VTI** summit, run in partnership with **Syllaby**. Uses existing VTI brand/offer stack.
- 2026-09-11: Confirmed — Netlify standalone site (like vti-site). Event branding locked: "VOICE TO INFLUENCE™ × SYLLABY PRESENT" / "AI MADE EASY SUMMIT" / "FOR MARKETING & BUSINESS" / "Practical AI. Better Marketing. Smarter Business." / "Gold Coast · June 2027". Austin Armstrong kept out of main title, featured in speaker/host creative instead. Full detail in CLAUDE.md CONFIRMED section.
- 2026-09-11 (session 2): Built hero/index.html + netlify.toml. Added Syllaby logo (assets/syllaby-logo.png) to header partner lockup next to VTI mark. Confirmed this repo holds the full funnel (landing + thank-you pages), registration via embedded native GHL form (not a separate CF2/GHL project build). Pushed to GitHub (commit 1179763) — Dave to connect Netlify + custom domain, then return to build the landing/thank-you pages.
- 2026-09-11 (session 3): Dave supplied full build brief from a call — format (Sat main event/Sun VIP mastermind, 300 cap), pricing (~$497 general, early-bird tiers, coupon system), launch mechanic (first 100 free via coupon at Austin's AI Marketing World event, used as social proof), budget (~$100K production, break-even ~200 attendees, $20K-$50K sponsorship target), speakers (Austin Armstrong, Kanji Lowe, Melissa Mitchell, Bruno & Stacie, Jeff Ross), and positioning (signature annual event, Syllaby is THIS year's founding partner, not a permanent co-brand — the slot may rotate to a different partner next year). Full detail in CLAUDE.md BUILD BRIEF section — treat as source of truth over anything in session 1.
- 2026-09-11 (session 3): **Branding correction** — header/hero copy changed from "Voice to Influence™ × Syllaby" (co-equal) to "Voice to Influence™ presents" with a "Founding Partner: Syllaby" badge, per Dave's explicit choice to fix this now rather than wait for the full build. Also corrected hero CTA copy from "one day" to the Saturday/Sunday two-day format. Not yet pushed — see WHAT'S BEEN BUILT.
- Subfolders skill referenced in root CLAUDE.md does not exist in `Skills/` — folder set up manually. Dave chose not to build the skill first (2026-09-11).

---

## WHAT'S BEEN BUILT

- [x] Repo cloned, CLAUDE.md + MEMORY.md created
- [x] Deployment target confirmed (Netlify)
- [x] Hero page (index.html) built, branding-corrected — committed/pushed to `main`
- [x] Next.js 16 + Tailwind v4 + shadcn/ui scaffold built on branch `nextjs-rebuild`
      (11 Sep 2026), mirroring `LSD Marketing/Main-Site`. Hero content ported 1:1 from
      `main`'s index.html into components. Build verified clean. `main` untouched. Full
      detail in CLAUDE.md STATUS section.
- [x] Full registration landing page built (11 Sep 2026, session 4) — hero, why/who-for,
      speaker grid (VIP + speaker tiers), Sat/Sun schedule, pricing/register panel. Start
      date only ("June 2027"), no exact day per Dave's instruction.
- [x] Thank-you page built — same date-light approach, no calendar-add links (no real date yet)
- [x] Speaker profile pages built for all 7 named speakers (`/speakers/[slug]`, statically
      generated). See CLAUDE.md UPDATE (session 4) for sourcing detail per speaker and two
      flags for Dave: "Kanji Lowe" vs. site's actual spelling "Kanji Low"; "Louise Dutka" is
      a new name not previously recorded here.
- [ ] Native GHL registration form embedded — placeholder shown, clearly marked "coming soon,"
      not a fake/dead link. Needs the form ID/embed code + coupon mechanism from Dave.
- [ ] Speaker photos still needed: Kanji Low (fetch returned no stable image URL), Melissa
      Mitchell, Louise Dutka (both placeholder per Dave's explicit instruction)
- [ ] Speaker photo crop — Dave flagged (12 Sep 2026) that Austin Armstrong's and Jeff Ross's
      photos show heads cut off at the top in the VIP card (`components/SpeakerCard.tsx` /
      `SpeakerProfile.tsx`, `object-cover object-top`). Explicitly deprioritised for now
      ("we don't need to do it now") — fix later by adjusting object-position or cropping the
      source images before reuse. Likely same issue will show on Bruno/Stacie's photos too.
- [ ] Watch page — not built yet, speaker pages just note it'll be linked once live
- [ ] Custom domain connected (Dave, via Netlify)
- [x] `nextjs-rebuild` branch pushed to origin (11 Sep 2026)
