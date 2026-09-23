import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return <>
    <Link className="skip-link" href="#main">Skip to content</Link>
    <header className="summit-nav">
      <div className="header-brands">
        <Link href="/" aria-label="AI Made Easy Summit home">
          <img src="/assets/vti-logo-header.png" alt="Voice to Influence" />
        </Link>
        <div className="header-partner">
          <img src="/assets/syllaby-logo.png" alt="Syllaby" />
          <span><small>Founding partner</small><b>Syllaby</b></span>
        </div>
      </div>
      <nav aria-label="Main navigation">
        <Link href="/#experience">The experience</Link>
        <Link href="/#speakers">Speakers</Link>
        <Link href="/#register" className="nav-ticket">Tickets · US$497 ↗</Link>
      </nav>
    </header>
  </>;
}
