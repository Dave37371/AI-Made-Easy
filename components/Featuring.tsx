export default function Featuring() {
  return (
    <section className="py-16 bg-brand-ink-mid border-y border-brand-gold/20">
      <div className="max-w-[960px] mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-[0.24em] uppercase text-brand-gold mb-9">
          Featuring
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-[680px] mx-auto text-center sm:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6a87f3dde6501a9518307d6d.png"
            alt="Austin Armstrong"
            className="w-[180px] h-[180px] object-cover rounded-[2px] border border-brand-gold/40 shrink-0"
          />
          <div>
            <div className="text-2xl font-display">Austin Armstrong</div>
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-brand-gold my-2">
              Founder &amp; CEO, Syllaby
            </div>
            <p className="text-[15.5px] text-brand-mist">
              Author of VIRALITY!, 2x seven-figure entrepreneur, and Managing
              Partner at Bullhouse Ventures. Austin has built content systems
              generating billions of views — now bringing that playbook to
              marketers and business owners ready to put AI to work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
