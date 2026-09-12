export default function Schedule() {
  return (
    <section className="py-16 sm:py-24 bg-brand-ink-mid border-t border-white/5">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
        <div className="max-w-[720px] mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-3.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-6 before:content-[''] before:w-[34px] before:h-px before:bg-brand-gold/55">
            Format
          </span>
          <h2 className="text-[clamp(30px,4.4vw,46px)] mb-4">
            Two days, <em className="not-italic text-brand-gold">two rooms.</em>
          </h2>
          <p className="text-[clamp(17px,1.35vw,19px)] text-brand-mist leading-relaxed">
            Gold Coast &middot; June 2027. Exact dates confirmed closer to the event — save your
            seat now and we&rsquo;ll send full scheduling details as they lock in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <article className="border border-brand-gold/25 rounded-[2px] bg-brand-ink p-8 sm:p-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gold">
              Saturday
            </span>
            <h3 className="text-2xl sm:text-[28px] mt-3 mb-4">Main event</h3>
            <p className="text-[15px] text-brand-mist leading-relaxed mb-5">
              Workshop-style and intimate — deliberately not keynote-heavy. Practical AI systems
              for marketing and business, taught by people who use them every day.
            </p>
            <p className="text-[13px] text-brand-gold uppercase tracking-[0.1em] font-semibold">
              General admission
            </p>
          </article>
          <article className="border border-brand-gold/25 rounded-[2px] bg-gradient-to-br from-brand-gold/8 to-brand-ink p-8 sm:p-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gold">
              Sunday
            </span>
            <h3 className="text-2xl sm:text-[28px] mt-3 mb-4">VIP mastermind</h3>
            <p className="text-[15px] text-brand-mist leading-relaxed mb-5">
              Capped at 50 people, with Austin Armstrong. Higher ticket, deeper access, smaller
              room.
            </p>
            <p className="text-[13px] text-brand-gold uppercase tracking-[0.1em] font-semibold">
              Limited to 50 seats
            </p>
          </article>
        </div>

        <p className="text-[13.5px] text-brand-mist/70 mt-8 max-w-[640px]">
          A paid virtual attendance option exists for both those who can&rsquo;t travel — details
          shared directly with registered attendees closer to the date.
        </p>
      </div>
    </section>
  );
}
