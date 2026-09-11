export default function Header() {
  return (
    <header className="text-center border-b border-brand-gold/20 py-7">
      <div className="inline-flex items-center gap-4">
        <a
          href="https://voicetoinfluence.com/home"
          aria-label="Voice to Influence home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/vti-logo-header.png"
            alt="Voice to Influence"
            className="h-8 sm:h-[52px] w-auto"
          />
        </a>
        <span className="inline-flex items-center gap-2 sm:gap-[9px] pl-3 sm:pl-4 border-l border-brand-gold/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/syllaby-logo.png"
            alt="Syllaby"
            className="h-6 w-6 sm:h-[30px] sm:w-[30px] rounded-[2px]"
          />
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-brand-mist/75">
              Founding Partner
            </span>
            <b className="block text-xs sm:text-[13px] font-semibold text-brand-cream">
              Syllaby
            </b>
          </span>
        </span>
      </div>
    </header>
  );
}
