import Link from "next/link";
import type { Speaker } from "@/lib/speakers";

export default function SpeakerProfile({ speaker }: { speaker: Speaker }) {
  return (
    <>
      <div className="max-w-[960px] mx-auto px-6 pt-6 text-[12.5px] text-brand-mist/60">
        <Link href="/#speakers" className="text-brand-gold hover:border-b hover:border-brand-gold">
          &larr; Back to speakers
        </Link>
      </div>

      <header className="relative overflow-hidden py-10 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[35%] left-1/2 -translate-x-1/2 w-[min(1100px,140vw)] h-[640px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,.14) 0%, rgba(201,168,76,.04) 40%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-[960px] mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-8 md:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-3.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-5 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55">
              {speaker.tier === "vip" ? "Featured speaker" : "Speaker"}
            </span>
            <h1 className="text-[clamp(36px,5.4vw,66px)] mb-3.5">{speaker.name}</h1>
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-brand-gold mb-5 leading-relaxed">
              {speaker.role}
              {speaker.company ? <> &middot; {speaker.company}</> : null}
            </p>
            {speaker.confirmed && (
              <p className="text-[clamp(16px,1.3vw,19px)] leading-relaxed text-brand-mist max-w-[560px]">
                {speaker.cardBio}
              </p>
            )}
          </div>
          <div className="aspect-[4/5] border border-brand-gold/30 rounded-[2px] overflow-hidden bg-brand-ink-lite flex items-center justify-center order-first md:order-last max-w-[280px] mx-auto md:max-w-none">
            {speaker.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-full h-full object-cover object-top"
                style={speaker.photoPosition ? { objectPosition: speaker.photoPosition } : undefined}
              />
            ) : (
              <span className="font-display font-bold text-6xl text-brand-gold/40">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
        </div>
      </header>

      {speaker.confirmed ? (
        <section className="py-14 sm:py-20 bg-brand-ink-mid border-t border-white/5">
          <div className="max-w-[960px] mx-auto px-6 grid md:grid-cols-[1fr_300px] gap-8 md:gap-16 items-start">
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-5">
                About {speaker.name.split(" ")[0]}
              </span>
              {speaker.bio.map((p, i) => (
                <p key={i} className="text-[16px] leading-relaxed text-brand-mist mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {speaker.topics.length > 0 && (
                <>
                  <span className="block text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mt-9 mb-5">
                    Topics &amp; Expertise
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {speaker.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-brand-mist border border-white/10 rounded-[2px] px-3.5 py-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            {speaker.facts.length > 0 && (
              <aside className="border border-brand-gold/25 rounded-[2px] bg-gradient-to-br from-brand-gold/7 to-brand-ink p-7">
                <span className="block text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-4.5">
                  At a glance
                </span>
                {speaker.facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`flex gap-3 py-3.5 ${i === 0 ? "" : "border-t border-white/[0.07]"}`}
                  >
                    <span className="w-0.5 bg-brand-gold flex-shrink-0" />
                    <div className="text-[13.5px] text-brand-mist leading-snug">
                      <strong className="block text-brand-cream font-semibold text-[14.5px] mb-0.5">
                        {f.label}
                      </strong>
                      {f.detail}
                    </div>
                  </div>
                ))}
              </aside>
            )}
          </div>
        </section>
      ) : (
        <section className="py-14 sm:py-20 bg-brand-ink-mid border-t border-white/5">
          <div className="max-w-[640px] mx-auto px-6 text-center">
            <p className="text-brand-mist text-[15px] leading-relaxed">
              We&rsquo;re still locking in {speaker.name}&rsquo;s full bio and topics — check
              back as the lineup is confirmed, or watch for updates in the announcement emails.
            </p>
          </div>
        </section>
      )}

      <section className="text-center py-16 sm:py-24 bg-gradient-to-b from-brand-gold/[0.09] to-brand-ink-mid border-t border-brand-gold/20">
        <div className="max-w-[960px] mx-auto px-6">
          <span className="inline-flex items-center gap-3.5 justify-center text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-5 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
            AI Made Easy Summit
          </span>
          <h2 className="text-[clamp(28px,4vw,38px)] mb-4">
            Join us on the Gold Coast.
          </h2>
          <p className="text-[15px] text-brand-mist max-w-[500px] mx-auto mb-7">
            Surfers Paradise, Gold Coast. Friday 18 June 2027.
          </p>
          <Link
            href="/#register"
            className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase px-11 py-[19px] rounded-[2px] bg-brand-gold text-brand-ink transition-all hover:bg-brand-gold-lite hover:-translate-y-0.5"
          >
            Save My Seat
          </Link>
        </div>
      </section>
    </>
  );
}
