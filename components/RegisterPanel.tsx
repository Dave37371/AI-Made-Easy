export default function RegisterPanel() {
  return (
    <section id="register" className="py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-[880px] mx-auto px-6 sm:px-10">
        <div className="border border-brand-gold/25 rounded-[2px] bg-gradient-to-br from-brand-gold/8 to-brand-ink p-8 sm:p-14 text-center">
          <span className="inline-flex items-center gap-3.5 justify-center text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-6 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
            Reserve your seat
          </span>
          <h2 className="text-[clamp(28px,4vw,40px)] mb-5">Gold Coast &middot; June 2027</h2>
          <p className="text-[15.5px] text-brand-mist leading-relaxed max-w-[540px] mx-auto mb-8">
            General admission from ~$497, early-bird pricing available now — price rises as the
            event nears. The first 100 seats are free for early supporters via coupon code.
          </p>

          {/*
            GHL REGISTRATION FORM — NOT YET SUPPLIED.
            Replace this placeholder block with the embedded native GHL form
            (see CLAUDE.md STILL OPEN section: form ID / embed code / coupon
            mechanism for the free-100 launch phase). Until then this button
            has no live destination.
          */}
          <div className="border border-dashed border-brand-gold/40 rounded-[2px] p-6 sm:p-8 bg-brand-ink/60 mb-6">
            <p className="text-[13px] text-brand-mist/80 mb-5">
              Registration form is being connected — check back shortly, or contact Voice to
              Influence directly to lock in an early-bird seat.
            </p>
            <span className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase px-11 py-[19px] rounded-[2px] bg-brand-gold/40 text-brand-ink/70 cursor-not-allowed select-none">
              Save My Seat — Coming Soon
            </span>
          </div>

          <p className="text-xs text-brand-mist/55">
            Presented by Voice to Influence&trade; &middot; Founding Partner Syllaby
          </p>
        </div>
      </div>
    </section>
  );
}
