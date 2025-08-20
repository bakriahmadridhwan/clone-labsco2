import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Feature from "@/components/custom/feature";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import Navbar from "@/components/custom/navbar";
import Portfolio from "@/components/custom/portfolio";
import Services from "@/components/custom/services";
import Team from "@/components/custom/team";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className={`${dmSans.variable} font-sans`}>
      <Navbar />
      <Hero />
      <Services />
      <Feature />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
