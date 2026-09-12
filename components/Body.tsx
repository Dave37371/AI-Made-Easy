export default function Body() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-[1.05fr_.95fr] gap-8 md:gap-16 items-start mb-14 sm:mb-20">
          <div>
            <span className="inline-flex items-center gap-3.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-6 before:content-[''] before:w-[34px] before:h-px before:bg-brand-gold/55">
              Why this summit
            </span>
            <p className="text-[clamp(18px,1.5vw,21px)] leading-relaxed text-brand-cream">
              AI Made Easy Summit is built for marketers and business owners who know AI matters
              but don&rsquo;t have a practical way in — two days of hands-on systems, not hype,
              from people who use these tools every day.
            </p>
          </div>
          <div className="border border-brand-gold/20 rounded-[2px] bg-gradient-to-br from-brand-gold/5 to-transparent p-8">
            <h3 className="text-xl mb-4">
              This is for you if you&rsquo;re<em className="not-italic text-brand-gold">&hellip;</em>
            </h3>
            <ul className="space-y-3">
              {[
                "Running a marketing team or business and tired of guessing with AI",
                "Ready to leave with systems you can use Monday, not just inspiration",
                "Building toward the Sunday VIP mastermind level of implementation",
              ].map((li) => (
                <li key={li} className="relative pl-6 text-[15px] text-brand-mist leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-brand-gold">
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-baseline gap-5 mb-8">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold whitespace-nowrap">
            What you&rsquo;ll walk away with
          </span>
          <span className="flex-1 h-px bg-brand-gold/20" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              h: "Practical AI systems",
              p: "Tools and workflows you implement the same week, not theory.",
            },
            {
              h: "Better marketing",
              p: "Content, funnels and outreach that actually convert.",
            },
            {
              h: "Smarter business",
              p: "Operations and decisions sharpened by AI, run by you.",
            },
            {
              h: "A room of doers",
              p: "300 marketers and business owners doing the same work you are.",
            },
          ].map((c) => (
            <article
              key={c.h}
              className="border border-white/10 rounded-[2px] p-7 bg-brand-ink transition-all hover:border-brand-gold/35 hover:-translate-y-1"
            >
              <h4 className="text-xl sm:text-2xl mb-2">{c.h}</h4>
              <p className="text-[14.5px] text-brand-mist leading-relaxed">{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
