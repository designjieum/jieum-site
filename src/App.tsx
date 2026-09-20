import { Hero } from "@/components/ui/animated-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { SolutionSection } from "@/components/ui/solution-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PortfolioSection } from "@/components/ui/portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      {/* 
        1) fixed top-0 inset-x-0: 히어로 섹션을 아래로 밀지 않고 화면 위에 완벽히 얹힘
        2) bg-[#090D16]/30 + backdrop-blur-md: 뒤편 셰이더의 파도가 뽀얗고 영롱하게 투과됨
        3) border-b border-white/[0.08]: 답답한 테두리 대신 은은한 유리 반사광 테두리 적용
      */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#090D16]/30 border-b border-white/10 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight text-white hover:text-blue-400 transition-colors">
            디자인 지음
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-sm font-medium text-slate-300">
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
        {/* 1단계: 히어로 섹션 (화면 최상단부터 시작되어 셰이더가 헤더 뒤까지 가득 채움) */}
        <Hero />
        {/* 2단계: 문제 제기 및 공감 섹션 */}
        <ProblemSection />
        {/* 3단계: 해결책 & 테크 스택 섹션 */}
        <SolutionSection />
        {/* 4단계: 실체 엔진 가로 슬라이딩 섹션 */}
        <FeaturesSection />
        {/* 5단계: 실전 구축 사례 쇼케이스 섹션 */}
        <PortfolioSection />
      </main>
    </div>
  );
}