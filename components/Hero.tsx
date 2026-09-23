/* eslint-disable @next/next/no-img-element */
import { event } from "@/lib/event";
export default function Hero() {
  return <section className="speaker-led-hero">
    <div className="summit-wrap">
      <p className="hero-presenters">Voice to Influence &amp; Syllaby present <strong>AI Made Easy Summit</strong></p>
      <div className="speaker-hero-grid">
        <div className="speaker-hero-copy">
          <p className="eyebrow">AI for marketing &amp; business · Live on the Gold Coast</p>
          <h1>Learn AI with <em>Austin Armstrong, Melissa Mitchell &amp; Kanji Low.</em></h1>
          <p className="hero-lede">Stop guessing which AI tools will help your business.</p>
          <p className="hero-support">Join them and Jeff Ross, Bruno and Stacie Marcinkowski, and Louise Dutka for a workshop-style event on creating content, improving your marketing and cutting repetitive work.</p>
          <div className="hero-facts"><span>Friday · {event.date}</span><span>{event.location}</span></div>
          <a className="summit-btn" href="#register">Get my ticket · {event.price} <span aria-hidden="true">↗</span></a>
          <p className="hero-small">General admission to the main event.</p>
        </div>
        <img className="speaker-hero-art" src="https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab37d6fd0a4fa87bb834540.jpeg" width="1600" height="900" fetchPriority="high" alt="AI Made Easy Summit speaker lineup: Kanji Low, Austin Armstrong, Melissa Mitchell, Jeff Ross, Bruno and Stacie Marcinkowski, and Louise Dutka. Surfers Paradise, Gold Coast, 18 June 2027." />
      </div>
    </div>
    <div className="hero-bottom"><span>For business owners, marketers and creators</span><a href="#speakers">Meet the speakers ↓</a></div>
  </section>;
}
