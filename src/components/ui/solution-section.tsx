import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ComparisonItem {
  category: string;
  traditional: string;
  renderJieum: () => React.ReactNode;
}

const COMPARISONS: ComparisonItem[] = [
  {
    category: "진행 방식",
    traditional: "다단계 영업 및 외주 소통",
    renderJieum: () => (
      <span>
        현장 직접 방문 · <span className="text-sky-300 font-bold">1:1 완결</span>
      </span>
    ),
  },
  {
    category: "제작 단가",
    traditional: "불투명한 옵션으로 견적 상승",
    renderJieum: () => (
      <span>
        올인원 원페이지 <span className="text-sky-300 font-bold">33만 원 정찰제</span>
      </span>
    ),
  },
  {
    category: "제작 속도",
    traditional: "피드백 지연으로 1~2개월 소요",
    renderJieum: () => (
      <span>
        자체 엔진 기반 <span className="text-sky-300 font-bold">2주 내 오픈</span>
      </span>
    ),
  },
  {
    category: "유지 관리",
    traditional: "매달 의무 고정 관리비 발생",
    renderJieum: () => (
      <span>
        <span className="text-sky-300 font-bold">월 유지비 0원</span>
        <span className="text-slate-400 text-xs sm:text-[13px] font-normal ml-1">
          (수정 건별 정산)
        </span>
      </span>
    ),
  },
];

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 트랙 전체 구간 트래킹 (450vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── Phase 1: 텍스트 순차 등장 & 순차 퇴장 (0.00 ~ 0.38) ───
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.05, 0.30, 0.34], [0, 1, 1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 0.05, 0.30, 0.34], [25, 0, 0, -25]);

  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.12, 0.30, 0.34], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.12, 0.30, 0.34], [25, 0, 0, -25]);

  const text2Opacity = useTransform(scrollYProgress, [0.12, 0.20, 0.33, 0.37], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.12, 0.20, 0.33, 0.37], [25, 0, 0, -25]);

  const text3Opacity = useTransform(scrollYProgress, [0.20, 0.28, 0.35, 0.39], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.20, 0.28, 0.35, 0.39], [25, 0, 0, -25]);

  // ─── Phase 2: 비교 영역 통째로 등장 (0.42부터 끝까지 고정) ───
  const contentOpacity = useTransform(scrollYProgress, [0.42, 0.50, 0.95, 1], [0, 1, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.42, 0.50, 0.95, 1], [30, 0, 0, 0]);

  return (
    <section 
      ref={containerRef} 
      id="solution" 
      className="relative bg-[#05070D] text-white h-[450vh]"
    >
      {/* 상단 경계선 */}
      <div className="w-full border-t border-white/10" />

      {/* 화면 전체 고정 뷰포트 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 메인 콘텐츠 래퍼 */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── Phase 1: 텍스트 순차 등장 & 순차 퇴장 ─── */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-3xl mx-auto text-center pointer-events-none px-4 sm:px-6">
            <motion.p 
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="text-[13px] sm:text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-2 sm:mb-3"
            >
              지음이 일하는 방식
            </motion.p>

            {/* 420px 이하에서 '33만 원 정찰제가' / '가능한 이유,'로 분리 */}
            <motion.h2 
              style={{ opacity: text1Opacity, y: text1Y }}
              className="text-3xl min-[390px]:text-[32px] sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.3] sm:leading-tight text-slate-100 mb-2 sm:mb-2.5 break-keep drop-shadow-md"
            >
              33만 원 정찰제가
              <br className="max-[420px]:block hidden" />
              {" "}가능한 이유,
            </motion.h2>

            <motion.h3 
              style={{ opacity: text2Opacity, y: text2Y }}
              className="text-3xl min-[390px]:text-[32px] sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.3] sm:leading-tight text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 mb-4 sm:mb-6 break-keep drop-shadow"
            >
              외주 없는 1인 디렉팅과
              <br />
              AI 파이프라인
            </motion.h3>

            <motion.p 
              style={{ opacity: text3Opacity, y: text3Y }}
              className="text-slate-300/90 text-[15px] sm:text-base md:text-lg leading-relaxed break-keep max-w-2xl mx-auto drop-shadow tracking-tight px-1"
            >
              불필요한 인건비 거품과 에이전시 마진을 모두 걷어냈습니다. 최신 엔지니어링 기술로 제작 공수를 줄이고, 그 혜택을 사장님께 온전히 돌려드립니다.
            </motion.p>
          </div>

          {/* ─── Phase 2: 비교 영역 ─── */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="w-full flex flex-col items-center"
          >
            {/* 상단 헤더 */}
            <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 lg:mb-8">
              <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
                비용은 낮추고, 퀄리티와 소통은
                <br />
                <span className="bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 bg-clip-text text-transparent font-extrabold">
                  1인 디렉터
                </span>
                가 책임집니다.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep">
                월 유지비 0원, 오직 손님의 전화와 예약에 집중합니다.
              </p>
            </div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* 1) 768px 초과 (데스크톱/태블릿): 2단 비교 카드 */}
            {/* ─────────────────────────────────────────────────────────── */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto">
              {/* 중앙 VS 뱃지 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-sky-500 to-blue-600 text-white font-black text-xs tracking-wider flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.45)] border-2 border-[#090e1a]">
                  VS
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 items-center">
                {/* 좌측: 일반 홈페이지 외주 */}
                <div className="rounded-3xl bg-[#090e18]/85 backdrop-blur-xl border border-white/10 p-7 lg:p-9 shadow-xl flex flex-col justify-between text-center scale-[0.98]">
                  <div className="pb-5 mb-2 border-b border-white/10">
                    <h3 className="text-lg lg:text-xl font-bold text-slate-300 tracking-tight">
                      일반 홈페이지 외주
                    </h3>
                  </div>

                  <div className="space-y-5 lg:space-y-6 pt-1">
                    {COMPARISONS.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="text-xs text-slate-400 font-medium mb-1">
                          {item.category}
                        </span>
                        <p className="text-[15px] lg:text-base font-medium text-slate-300 break-keep leading-snug px-1">
                          {item.traditional}
                        </p>
                        {idx !== COMPARISONS.length - 1 && (
                          <div className="w-full border-b border-dashed border-white/10 mt-5 lg:mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 우측: 디자인 지음 */}
                <div className="relative rounded-3xl p-px bg-linear-to-b from-sky-400/60 via-sky-500/30 to-indigo-500/50 shadow-[0_0_45px_rgba(56,189,248,0.22)] z-20 scale-102">
                  <div className="rounded-[23px] bg-[#0c1324] backdrop-blur-2xl p-7 lg:p-9 text-center flex flex-col justify-between">
                    <div className="pb-5 mb-2 border-b border-sky-500/25">
                      <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
                        디자인 지음
                      </h3>
                    </div>

                    <div className="space-y-5 lg:space-y-6 pt-1">
                      {COMPARISONS.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <span className="text-xs text-sky-400 font-semibold mb-1">
                            {item.category}
                          </span>
                          <p className="text-[15px] lg:text-base font-semibold text-slate-100 break-keep leading-snug px-1">
                            {item.renderJieum()}
                          </p>
                          {idx !== COMPARISONS.length - 1 && (
                            <div className="w-full border-b border-dashed border-sky-500/20 mt-5 lg:mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* 2) 768px 이하 (모바일): 미니멀 뷰 */}
            {/* ─────────────────────────────────────────────────────────── */}
            <div className="block md:hidden w-full max-w-sm mx-auto">
              <div className="rounded-2xl bg-[#090e18]/90 backdrop-blur-2xl border border-white/10 px-5 py-6 shadow-2xl">
                
                <div className="space-y-5">
                  {COMPARISONS.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      
                      {/* 1) 카테고리 */}
                      <span className="text-xs font-semibold text-slate-400 tracking-tight mb-2">
                        {item.category}
                      </span>

                      {/* 2) 기존 외주 */}
                      <p className="text-sm font-medium text-slate-400 break-keep leading-snug px-1">
                        {item.traditional}
                      </p>

                      {/* 3) 다운 애로우 */}
                      <span className="text-sky-400/80 text-sm font-light my-1.5 select-none">
                        ↓
                      </span>

                      {/* 4) 디자인 지음 */}
                      <p className="text-[15px] font-bold text-slate-100 break-keep leading-snug px-1">
                        {item.renderJieum()}
                      </p>

                      {/* 5) 항목 간 1px 구분선 */}
                      {idx !== COMPARISONS.length - 1 && (
                        <div className="w-full border-b border-white/5 mt-5" />
                      )}

                    </div>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}