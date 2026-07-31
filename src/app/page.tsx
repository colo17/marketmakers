import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SectionTracker from "@/components/SectionTracker";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import HowItWorks from "@/components/sections/HowItWorks";
import Scrollytelling from "@/components/sections/Scrollytelling";
import Education from "@/components/sections/Education";
import Vip from "@/components/sections/Vip";
import BotIa from "@/components/sections/BotIa";
import Streams from "@/components/sections/Streams";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Disclaimer from "@/components/sections/Disclaimer";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SmoothScroll />
      <SectionTracker />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <HowItWorks />
        <Scrollytelling />
        <Education />
        <Vip />
        <BotIa />
        <Streams />
        <Testimonials />
        <Faq />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
