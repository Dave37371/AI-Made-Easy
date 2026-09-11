"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative overflow-hidden text-center py-[clamp(72px,10vh,120px)] pb-[clamp(56px,7vh,88px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] left-1/2 -translate-x-1/2 w-[min(1100px,140vw)] h-[740px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,.16) 0%, rgba(201,168,76,.05) 38%, transparent 68%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-[960px] mx-auto px-6"
      >
        <span className="inline-flex items-center gap-3.5 text-xs font-semibold tracking-[0.24em] uppercase text-brand-gold mb-7 before:content-[''] before:w-[30px] before:h-px before:bg-brand-gold/55 after:content-[''] after:w-[30px] after:h-px after:bg-brand-gold/55">
          Voice to Influence&trade; presents
        </span>
        <h1 className="text-[clamp(48px,9vw,108px)] mb-4">
          AI Made Easy
          <br />
          Summit
        </h1>
        <p className="text-[clamp(15px,1.8vw,19px)] font-semibold tracking-[0.2em] uppercase mb-5">
          For Marketing &amp; Business
        </p>
        <p className="text-[clamp(18px,2vw,23px)] text-brand-mist max-w-[640px] mx-auto mb-9">
          Practical AI. Better Marketing. Smarter Business.
        </p>
        <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-[2px] border border-brand-gold/30 bg-brand-gold/5 px-8 py-4 text-[15px] tracking-wide mb-9">
          <b className="font-semibold text-brand-gold">Gold Coast &middot; June 2027</b>
        </div>
        <div>
          {/* CTA target TBD — registration funnel not yet built. Update href once GHL form is embedded. */}
          <a
            href="#register"
            className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase px-11 py-[19px] rounded-[2px] bg-brand-gold text-brand-ink transition-all hover:bg-brand-gold-lite hover:-translate-y-0.5"
          >
            Save My Seat
          </a>
        </div>
        <p className="mt-5 text-xs tracking-wide text-brand-mist/55">
          Presented by Voice to Influence&trade; &middot; Founding Partner Syllaby
        </p>
      </motion.div>
    </header>
  );
}
