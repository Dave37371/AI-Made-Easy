import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { speakers, getSpeaker } from "@/lib/speakers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeakerProfile from "@/components/SpeakerProfile";

export function generateStaticParams() {
  return speakers.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const speaker = getSpeaker(slug);
  if (!speaker) return {};
  return {
    title: `${speaker.name} — AI Made Easy Summit`,
    description: speaker.cardBio,
  };
}

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = getSpeaker(slug);
  if (!speaker) notFound();

  return (
    <>
      <Header />
      <main id="main"><SpeakerProfile speaker={speaker} /></main>
      <Footer />
    </>
  );
}
