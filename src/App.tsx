import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Street } from "@/components/sections/Street";
import { Price } from "@/components/sections/Price";
import { Founder } from "@/components/sections/Founder";
import { ProcessFaq } from "@/components/sections/ProcessFaq";
import { Closing, Footer } from "@/components/sections/Closing";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";

// 리뉴얼(3안 "경기북부 상점가")
export default function App() {
  return (
    <div className="min-h-screen bg-wall text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Street />
        <Price />
        <Founder />
        <ProcessFaq />
        <Closing />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
