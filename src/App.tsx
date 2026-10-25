import { useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Street } from "@/components/sections/Street";
import { Price } from "@/components/sections/Price";
import { Founder } from "@/components/sections/Founder";
import { ProcessFaq } from "@/components/sections/ProcessFaq";
import { Closing, Footer } from "@/components/sections/Closing";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";

// 사례 페이지에서 /#price 처럼 섹션 주소로 넘어오면, 브라우저는 화면이 그려지기 전에 위치를 찾다 실패해 맨 위에 멈춤
// → 섹션과 거리(고정 스크롤) 높이가 자리 잡은 뒤 그 섹션으로 바로 이동 (html의 부드러운 스크롤 무시)
function useHashLanding() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    let frame = 0;
    document.fonts.ready.then(() => {
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant" }));
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
}

// 리뉴얼(3안 "상점가")
export default function App() {
  useHashLanding();

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
