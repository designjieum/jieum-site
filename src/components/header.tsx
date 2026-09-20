export function Header() {
  return (
    // 1) fixed top-0 inset-x-0 z-50: 히어로 섹션 위에 완벽하게 띄움 (구분선 없이 얹힘)
    // 2) bg-[#090D16]/30 + backdrop-blur-md: 뒤편 셰이더가 은은하게 비치는 리얼 글래스모피즘
    // 3) border-b border-white/[0.08]: 답답한 테두리 대신 유리잔 가장자리 같은 극도로 은은한 반사광 라인
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-[#090D16]/30 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* 로고 영역 */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
            디자인 지음
          </span>
        </a>

        {/* 내비게이션 메뉴 (기존 프로젝트 메뉴 구성 유지) */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            왜 33만 원일까?
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            서비스 특징
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            포트폴리오
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            가격 안내
          </a>
        </nav>

        {/* 우측 상단 문의 버튼 */}
        <div className="flex items-center gap-3">
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-sm shadow-sm transition-all active:scale-95"
          >
            상담 문의
          </a>
        </div>

      </div>
    </header>
  );
}