import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import RegisterPanel from "@/components/RegisterPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Speakers />
      <Schedule />
      <RegisterPanel />
      <Footer />
    </>
  );
}
