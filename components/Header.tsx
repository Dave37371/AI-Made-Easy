import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
return <><Link className="skip-link" href="#main">Skip to content</Link><header className="summit-nav"><Link href="/" aria-label="AI Made Easy Summit home"><img src="/assets/vti-logo-header.png" alt="Voice to Influence" /></Link><nav aria-label="Main navigation"><Link href="/#experience">The experience</Link><Link href="/#speakers">Speakers</Link><Link href="/#register" className="nav-ticket">Tickets · US$497 ↗</Link></nav></header></>;
}
