import { motion, type Variants } from "framer-motion";
import { Check, Receipt } from "lucide-react";

const CHECK_LIST = [
  "1:1 현장 방문 인터뷰 & 매장 강점 발굴",
  "방문을 유도하는 전문 카피라이팅",
  "모바일 엄지 최적화 고전환 구조 설계",
  "반응형 구현 (스마트폰 100% + 태블릿 + PC)",
  "네이버 서치어드바이저 & 구글 포털 검색 등록",
  "네이버 지도 길찾기 & 전화/예약 버튼 연동",
  "카카오톡 공유 최적화 (대표 사진 · OG 태그)",
  "매장 사진 비주얼 톤보정 & 웹 최적화 리터칭",
  "디자인 맞춤 시안 1종 제공 + 피드백 수정 2회",
  "단순 시스템 오류 및 오타 무상 케어",
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#05070D] text-white py-24 sm:py-32 border-t border-white/10 overflow-hidden">
      {/* 앰비언트 글로우 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-140 sm:w-180 h-140 sm:h-180 bg-sky-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2"
          >
            투명한 단일 정찰제 요금
          </motion.p>

          <h2 className="text-[24px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-3 break-keep">
            <motion.span
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block"
            >
              내 매장에 꼭 맞춘 원페이지,
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 font-extrabold"
            >
              숨은 추가금 없이 시작하세요.
            </motion.span>
          </h2>

         <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep"
          >
            매달 빠져나가는 강제 관리비도 없습니다.
            <br className="max-lg:block hidden" />{" "}
            오직 매출에 필요한 것만 담았습니다.
          </motion.p>
        </div>

        {/* ─── 하이라이트 플랜 카드 ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-lg mx-auto rounded-4xl bg-[#0a101f]/95 border border-sky-400/30 px-5 py-8 sm:px-10 sm:py-14 shadow-[0_0_50px_rgba(56,189,248,0.12)] backdrop-blur-2xl ring-1 ring-white/10"
        >
          {/* 1. 상단 패키지 타이틀 & 한 줄 정의 */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mb-2">
              고전환 원페이지 올인원
            </h3>
            <p className="text-[13px] sm:text-[14.5px] text-slate-400 leading-relaxed break-keep">
              처음 방문한 고객이 매장의 장점을 한눈에 파악하고 안심하며 예약·전화할 수 있도록 설계합니다.
            </p>
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          {/* 2. 대형 가격 영역 */}
          <div className="mb-6 space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl min-[390px]:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-200">
                33만원
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                (VAT 포함)
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-y-1.5 gap-x-2 text-xs sm:text-[13px] text-slate-400 pt-1">
              <span className="text-slate-300">
                추가 옵션 없는 100% 정찰제 <span className="text-slate-500 font-normal">(도메인 실비 별도)</span>
              </span>
              <span className="flex items-center gap-1 text-sky-300 font-medium shrink-0">
                <Receipt className="w-3.5 h-3.5 text-sky-400" />
                세금계산서 발행
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          {/* 3. 구성 */}
          <div className="mb-6 space-y-1">
            <span className="text-xs sm:text-[13px] font-bold text-sky-400 tracking-wide block">
              구성
            </span>
            <p className="text-[13.5px] sm:text-[15px] text-slate-200 font-medium break-keep">
              고전환 원페이지 (핵심 섹션 5~6개)
            </p>
          </div>

          {/* 4. 체크리스트 상세 내역 (말줄임표 제거, 320px에서도 글자 온전히 표시) */}
          <div className="space-y-3 sm:space-y-3.5 pt-2 mb-8 border-t border-white/5">
            {CHECK_LIST.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[13px] min-[390px]:text-[13.5px] sm:text-[15px] leading-snug">
                <div className="w-4.5 h-4.5 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-3" />
                </div>
                <span className="text-slate-200 break-keep">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* 5. 하단 풀사이즈 상담 버튼 */}
          <div>
            <a
              href="http://pf.kakao.com/_IuxfaX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base flex items-center justify-center shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-[0.99] cursor-pointer"
            >
              무료 상담 신청
            </a>
          </div>
        </motion.div>

        {/* ─── 하단 주의사항 및 안내 ─── */}
        <div className="mt-8 sm:mt-10 max-w-lg mx-auto space-y-2.5 text-left text-xs sm:text-sm text-slate-400 leading-relaxed px-1 sm:px-2">
          <div className="flex items-start gap-1.5">
            <span className="text-slate-400 shrink-0">※</span>
            <p className="break-keep">
              <strong className="text-slate-300">도메인 주소 등록:</strong> 독립 도메인(.com / .co.kr)은 사장님 명의 직접 소유를 위해 공인 등록 기관 실비(연 약 2만 원)만 발생하며, 대행 수수료 없이 무료로 세팅해 드립니다.
            </p>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-slate-400 shrink-0">※</span>
            <p className="break-keep">
              <strong className="text-slate-300">의무 유지보수비 0원:</strong> 매달 나가는 관리비가 전혀 없습니다. 추후 수정이 필요할 때만 건별(1~2만 원 선)로 편하게 요청하세요.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;