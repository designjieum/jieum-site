import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030508] text-slate-400 text-xs sm:text-sm border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 상단 브랜딩 & 탑스크롤 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/5">
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              디자인 지음
            </span>
            <p className="text-xs text-slate-500 mt-1">
              경기북부 소상공인·자영업자를 위한 실전 고전환 원페이지 전문
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>맨 위로 이동</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 하단 사업자 정보 및 카피라이트 */}
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-8 text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">
          
          {/* 사업자 필수 정보 영역 */}
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-slate-300 font-bold">
              디자인 지음 (Design Jieum)
            </p>
            
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
              <span>대표자: 000</span>
              <span className="text-slate-700">|</span>
              <span>사업자등록번호: 000-00-00000</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-300 font-medium">세금계산서 100% 발행</span>
            </div>

            <p className="text-slate-400">
              사업장 소재지: 경기도 양주시 00로 00, 0층 00호
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 pt-0.5">
              <span>문의전화: 0507-0000-0000</span>
              <span className="text-slate-700">|</span>
              <span>이메일: contact@jieum.design</span>
              <span className="text-slate-700">|</span>
              <span className="text-sky-400 font-medium">
                상담시간: 연중무휴 09:00 ~ 22:00
              </span>
            </div>

            <p className="text-slate-500 text-[11.5px] pt-1">
              ※ 현장 방문 인터뷰: 양주 · 의정부 · 포천 · 동두천 등 경기북부 상권 (그 외 지역 온라인 비대면 완결 가능)
            </p>
          </div>

          {/* 카피라이트 & 저작권 문구 */}
          <div className="md:text-right flex flex-col justify-between space-y-2 shrink-0">
            <p className="text-slate-400">
              © {new Date().getFullYear()} 디자인 지음. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 max-w-xs md:ml-auto break-keep">
              본 웹사이트의 모든 디자인, 카피 및 레이아웃 구조는 저작권법의 보호를 받습니다.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;