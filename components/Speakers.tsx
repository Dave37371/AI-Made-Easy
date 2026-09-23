import { speakers } from "@/lib/speakers";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  const vip = speakers.filter((s) => s.tier === "vip");
  const rest = speakers.filter((s) => s.tier === "speaker");

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-brand-ink-mid border-t border-white/5">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
        <div className="max-w-[720px] mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-3.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold mb-6 before:content-[''] before:w-[34px] before:h-px before:bg-brand-gold/55">
            Speakers
          </span>
          <h2 className="metal text-[clamp(30px,4.4vw,46px)] mb-4">
            The people in the <em className="text-brand-gold">room.</em>
          </h2>
          <p className="text-[clamp(17px,1.35vw,19px)] text-brand-mist leading-relaxed">
            Meet the people bringing AI, content, marketing and business experience to the summit.
          </p>
        </div>

        <div className="flex items-baseline gap-5 mb-7">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold whitespace-nowrap">
            Featured speakers
          </span>
          <span className="flex-1 h-px bg-brand-gold/20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 sm:mb-20">
          {vip.map((s) => (
            <SpeakerCard key={s.slug} speaker={s} />
          ))}
        </div>

        <div className="flex items-baseline gap-5 mb-7">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-gold whitespace-nowrap">
            Speakers
          </span>
          <span className="flex-1 h-px bg-brand-gold/20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {rest.map((s) => (
            <SpeakerCard key={s.slug} speaker={s} />
          ))}
        </div>

        <p className="text-[13.5px] text-brand-mist/70 mt-7">
          Speakers are announced progressively in the lead-up. Registered attendees are notified
          first.
        </p>
      </div>
    </section>
  );
}
