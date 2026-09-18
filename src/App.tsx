import { Hero } from "@/components/ui/animated-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { SolutionSection } from "@/components/ui/solution-section";
import { FeaturesSection } from "@/components/ui/features-section";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 상단 글로벌 헤더 유지 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090D16]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight text-white">
            디자인 지음
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#problem" className="hover:text-white transition-colors">소개 & 비용</a>
            <a href="#solution" className="hover:text-white transition-colors">솔루션</a>
            <a href="#portfolio" className="hover:text-white transition-colors">제작 사례</a>
            <a href="#process" className="hover:text-white transition-colors">진행 과정</a>
            <a href="#faq" className="hover:text-white transition-colors">자주 묻는 질문</a>
          </nav>
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm shadow-blue-500/20 active:scale-95"
          >
            무료 상담
          </a>
        </div>
      </header>

      {/* 메인 랜딩 콘텐츠 */}
      <main>
        {/* 1단계: 히어로 섹션 */}
        <Hero />
        {/* 2단계: 문제 제기 및 공감 섹션 */}
        <ProblemSection />
        {/* 3단계: 해결책 & 테크 스택 섹션 */}
        <SolutionSection />
        {/* 4단계: 실체 엔진 가로 슬라이딩 섹션 */}
        <FeaturesSection />
      </main>
    </div>
  );
}