import Link from "next/link";
import { DEFAULT_PHOTO_POSITION, type Speaker } from "@/lib/speakers";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const isVip = speaker.tier === "vip";

  return (
    <Link
      href={`/speakers/${speaker.slug}`}
      className={`group block border rounded-[2px] bg-brand-ink overflow-hidden transition-all hover:-translate-y-1 ${
        isVip ? "border-brand-gold/30" : "border-white/10 hover:border-brand-gold/35"
      }`}
    >
      <div
        className={`w-full bg-brand-ink-lite border-b flex items-center justify-center overflow-hidden ${
          isVip ? "h-[220px] sm:h-[300px] border-brand-gold/25" : "h-[150px] sm:h-[190px] border-brand-gold/10"
        }`}
      >
        {speaker.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: speaker.photoPosition ?? DEFAULT_PHOTO_POSITION }}
          />
        ) : (
          <span
            className={`font-display font-bold text-brand-gold/40 ${
              isVip ? "text-5xl" : "text-3xl"
            }`}
          >
            {speaker.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>
      <div className={isVip ? "p-6 sm:p-7" : "p-5"}>
        {isVip && (
          <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-ink bg-brand-gold px-2.5 py-1 rounded-[2px] mb-3">
            VIP speaker
          </span>
        )}
        <h3
          className={`font-display font-bold ${
            !speaker.confirmed ? "text-brand-cream/50" : "text-brand-cream"
          } ${isVip ? "text-2xl sm:text-[27px] mb-1.5" : "text-lg mb-1"}`}
        >
          {speaker.name}
        </h3>
        <p
          className={`font-semibold uppercase text-brand-gold tracking-[0.1em] ${
            isVip ? "text-[11.5px] mb-3.5" : "text-[10.5px] mb-2.5"
          }`}
        >
          {speaker.role}
        </p>
        <p className={`text-brand-mist ${isVip ? "text-[14.5px]" : "text-[13px]"}`}>
          {speaker.cardBio}
        </p>
      </div>
    </Link>
  );
}
