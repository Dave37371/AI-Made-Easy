import { event } from "@/lib/event";
export default function Footer() {
return <footer className="summit-footer"><div className="summit-wrap"><b>AI Made Easy Summit</b><p>{event.location} · {event.date}</p><p>Presented by Voice to Influence™ · Founding partner Syllaby</p><div><a href="https://voicetoinfluence.com/privacy">Privacy policy</a><a href="https://voicetoinfluence.com/terms">Terms &amp; conditions</a></div></div></footer>;
}
