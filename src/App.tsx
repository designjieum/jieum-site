import { Hero } from "@/components/ui/animated-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { SolutionSection } from "@/components/ui/solution-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PortfolioSection } from "@/components/ui/portfolio";
import { ProcessSection } from "@/components/ui/process-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CtaSection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      {/* 헤더 네비게이션 */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#090D16]/40 border-b border-white/10 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight text-white hover:text-sky-400 transition-colors">
            디자인 지음
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#problem" className="hover:text-white transition-colors">고민하는 이유</a>
            <a href="#portfolio" className="hover:text-white transition-colors">제작 사례</a>
            <a href="#process" className="hover:text-white transition-colors">진행 과정</a>
            <a href="#pricing" className="hover:text-white transition-colors">33만원 정찰제</a>
          </nav>
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95 cursor-pointer"
          >
            무료 상담
          </a>
        </div>
      </header>

      {/* 메인 랜딩 콘텐츠 전체 파이프라인 */}
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <CtaSection />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}