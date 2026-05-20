import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Testimonials />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
    </>
  );
}
