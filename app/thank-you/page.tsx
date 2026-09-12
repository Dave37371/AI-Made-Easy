import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "You're registered — AI Made Easy Summit",
  description: "Your seat for the AI Made Easy Summit is confirmed. Gold Coast, June 2027.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />

      <header className="relative overflow-hidden text-center py-[clamp(72px,10vh,120px)] pb-[clamp(56px,7vh,88px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[30%] left-1/2 -translate-x-1/2 w-[min(1100px,140vw)] h-[740px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,.18) 0%, rgba(201,168,76,.05) 38%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-[660px] mx-auto px-6">
          <div className="w-[74px] h-[74px] mx-auto mb-7 border border-brand-gold/45 rounded-[2px] bg-brand-gold/[0.07] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-brand-gold stroke-[1.6] fill-none" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="inline-flex items-center gap-3.5 justify-center text-xs font-semibold tracking-[0.24em] uppercase text-brand-gold mb-6 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
            Registration confirmed
          </span>
          <h1 className="text-[clamp(40px,6.2vw,70px)] mb-5">
            You&rsquo;re <em className="not-italic text-brand-gold">in.</em>
          </h1>
          <p className="text-[clamp(17px,1.35vw,20px)] text-brand-mist leading-relaxed">
            Your seat for the AI Made Easy Summit is confirmed. Check your inbox — a confirmation
            email is on its way, with full scheduling and join details to follow as the event
            gets closer.
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-[2px] border border-brand-gold/30 bg-brand-gold/5 px-7 py-3.5 mt-8 text-[14px] tracking-wide">
            <b className="font-semibold text-brand-gold">Gold Coast &middot; June 2027</b>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-24 bg-brand-ink-mid border-t border-white/5">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-3.5 justify-center text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-5 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
              What happens now
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)]">
              Two things, then <em className="not-italic text-brand-gold">forget about it.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <article className="border border-white/10 rounded-[2px] p-8 bg-brand-ink transition-all hover:border-brand-gold/35 hover:-translate-y-1">
              <div className="font-display font-bold text-[34px] text-brand-gold/55 mb-4 leading-none">
                01
              </div>
              <h3 className="text-xl sm:text-[22px] text-brand-cream mb-2.5">Check your inbox</h3>
              <p className="text-[14.5px] text-brand-mist leading-relaxed">
                Your confirmation is on its way. If it isn&rsquo;t there in a few minutes, check
                promotions or spam and <b className="text-brand-cream font-semibold">mark it as
                not spam</b> — that&rsquo;s the same address your event details will come from.
              </p>
            </article>
            <article className="border border-white/10 rounded-[2px] p-8 bg-brand-ink transition-all hover:border-brand-gold/35 hover:-translate-y-1">
              <div className="font-display font-bold text-[34px] text-brand-gold/55 mb-4 leading-none">
                02
              </div>
              <h3 className="text-xl sm:text-[22px] text-brand-cream mb-2.5">Watch for the date</h3>
              <p className="text-[14.5px] text-brand-mist leading-relaxed">
                Exact dates within June 2027 are being finalised. We&rsquo;ll email the full
                schedule, venue and calendar invite the moment it&rsquo;s locked in — <b className="text-brand-cream font-semibold">no action needed from you yet.</b>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 text-center border-t border-white/5">
        <div className="max-w-[600px] mx-auto px-6">
          <span className="inline-flex items-center gap-3.5 justify-center text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-5 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
            One more thing
          </span>
          <h2 className="text-[clamp(26px,3.6vw,34px)] mb-3.5">
            Bring someone <em className="not-italic text-brand-gold">with you.</em>
          </h2>
          <p className="text-[15px] text-brand-mist leading-relaxed">
            These rooms are better when you&rsquo;ve got someone to compare notes with
            afterwards. Forward the registration page to one person who&rsquo;d get something
            out of it.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
