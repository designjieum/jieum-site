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
              경기북부 로컬 비즈니스를 위한 고전환 원페이지 전문
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
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-6 text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">
          <div className="space-y-1">
            <p className="text-slate-400 font-semibold">디자인 지음 (Design Jieum)</p>
            <p>서비스 지역: 양주 · 의정부 · 포천 · 동두천 및 경기북부 전역 (전국 비대면 가능)</p>
            <p className="text-slate-400">
              상담 문의: 카카오톡 채널 또는 유선 상담 <span className="text-sky-400 font-medium">(연중무휴 09:00 ~ 22:00)</span>
            </p>
          </div>

          <div className="md:text-right space-y-1">
            <p>© {new Date().getFullYear()} 디자인 지음. All rights reserved.</p>
            <p className="text-[11px] text-slate-600">
              본 사이트의 모든 디자인 및 콘텐츠는 무단 복제 및 도용을 금합니다.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;