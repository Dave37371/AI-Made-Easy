export default function CtaBand() {
  return (
    <section id="register" className="py-18 text-center max-w-[960px] mx-auto px-6">
      <h2 className="text-[clamp(28px,4vw,38px)] mb-4">
        Reserve your seat at the Gold Coast.
      </h2>
      <p className="text-[17px] text-brand-mist max-w-[520px] mx-auto mb-8">
        Saturday: workshop-style main event. Sunday: VIP mastermind with
        Austin Armstrong, limited to 50 people. Practical AI systems for
        marketing and business, built by people who use them every day.
      </p>
      {/* CTA target TBD — registration funnel not yet built. Update href once GHL form is embedded. */}
      <a
        href="#register"
        className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase px-11 py-[19px] rounded-[2px] bg-brand-gold text-brand-ink transition-all hover:bg-brand-gold-lite hover:-translate-y-0.5"
      >
        Save My Seat
      </a>
    </section>
  );
}
