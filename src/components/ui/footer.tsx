import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";

const KAKAO_URL = "http://pf.kakao.com/_IuxfaX/chat";

const NAV_LINKS = [
  { label: "고민하는 이유", href: "#problem" },
  { label: "제작 사례", href: "#portfolio" },
  { label: "진행 과정", href: "#process" },
  { label: "33만원 정찰제", href: "#pricing" },
  { label: "자주 묻는 질문", href: "#faq" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const iconButton =
    "w-10 h-10 rounded-full bg-white/5 hover:bg-sky-500/15 border border-white/10 hover:border-sky-400/40 text-slate-300 hover:text-sky-300 flex items-center justify-center transition-colors cursor-pointer";

  return (
    <footer className="relative bg-[#030508] text-slate-400 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20">

        {/* ─── 상단 정보 컬럼 ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 text-[13px] sm:text-sm">
          <div className="col-span-2 lg:col-span-4">
            <p className="text-lg font-extrabold text-white tracking-tight">디자인 지음</p>
            <p className="mt-2 text-slate-500 leading-relaxed break-keep max-w-xs">
              경기북부 소상공인·자영업자를 위한
              <br />
              손님이 연락하게 만드는 홈페이지 전문
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-white font-semibold mb-4">바로가기</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-white font-semibold mb-4">사업자 정보</p>
            <ul className="space-y-2.5 break-keep">
              <li>대표자 김재협</li>
              <li>사업자등록번호 <span className="whitespace-nowrap">000-00-00000</span></li>
              <li className="text-slate-300">세금계산서 100% 발행</li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <p className="text-white font-semibold mb-4">연락처</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:050700000000" className="hover:text-white transition-colors">
                  0507-0000-0000
                </a>
              </li>
              <li>
                <a href="mailto:designjieum@gmail.com" className="hover:text-white transition-colors break-all">
                  designjieum@gmail.com
                </a>
              </li>
              <li>
                <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  카카오톡 채널 상담
                </a>
              </li>
              <li className="text-sky-400">연중무휴 09:00 ~ 22:00</li>
            </ul>
          </div>
        </div>

        {/* ─── 주소 · 카피라이트 & 아이콘 버튼 ─── */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2 break-keep">
            <p className="text-[15px] sm:text-base font-medium text-slate-200">
              경기도 양주시 부흥로 1936 OO프라자 000호
            </p>
            <p className="text-[13px] sm:text-sm text-slate-400">
              © {new Date().getFullYear()} 디자인 지음. All rights reserved.
            </p>
            <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed">
              ※ 현장 방문 인터뷰: 양주 · 의정부 · 포천 · 동두천 등 경기북부 상권 (그 외 지역 온라인 비대면 완결 가능)
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" aria-label="카카오톡 상담" className={iconButton}>
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="tel:050700000000" aria-label="전화 상담" className={iconButton}>
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:designjieum@gmail.com" aria-label="이메일 문의" className={iconButton}>
              <Mail className="w-4 h-4" />
            </a>
            <button type="button" onClick={scrollToTop} aria-label="맨 위로 이동" className={iconButton}>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ─── 대형 워드마크 (아래쪽이 잘리며 사라짐) ─── */}
        <div aria-hidden="true" className="mt-10 sm:mt-14 -mb-[0.14em] select-none text-[length:calc((100vw_-_2rem)/6.75)] lg:text-[164px]">
          <p className="font-black leading-none tracking-[-0.04em] whitespace-nowrap text-transparent bg-clip-text bg-linear-to-b from-white/20 via-white/8 to-transparent">
            DESIGN JIEUM
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
