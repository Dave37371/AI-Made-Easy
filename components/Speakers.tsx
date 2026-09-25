import { speakers } from "@/lib/speakers";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  const austin = speakers.find((s) => s.slug === "austin-armstrong")!;
  const featured = ["scott-simson", "melissa-mitchell", "kanji-low"].map((slug) => speakers.find((s) => s.slug === slug)!);
  const rest = speakers.filter((s) => s.tier === "speaker");
  const host = speakers.find((s) => s.tier === "host")!;
  return <section id="speakers" className="summit-section speaker-lineup">
    <div className="summit-wrap">
      <p className="eyebrow">Featured speakers</p>
      <h2 className="metal">Meet your <em>speakers.</em></h2>
      <p className="lineup-intro">From AI video and content creation to marketing and business automation, meet the people sharing their experience.</p>
      <div className="lineup-headliner"><SpeakerCard speaker={austin} landscape /></div>
      <div className="lineup-featured">{featured.map((s) => <SpeakerCard key={s.slug} speaker={s} />)}</div>
      <p className="eyebrow lineup-divider">More speakers</p>
      <div className="lineup-rest">{rest.map((s) => <SpeakerCard key={s.slug} speaker={s} />)}</div>
      <p className="eyebrow lineup-divider">Your MC &amp; Executive Producer</p>
      <div className="lineup-host"><SpeakerCard speaker={host} landscape /></div>
    </div>
  </section>;
}
