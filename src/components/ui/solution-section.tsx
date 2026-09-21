import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonItem {
  category: string;
  traditional: string;
  renderJieum: () => React.ReactNode;
}

const COMPARISONS: ComparisonItem[] = [
  {
    category: "견적 기준",
    traditional: "옵션·반응형마다 숨은 추가금",
    renderJieum: () => (
      <span className="whitespace-nowrap">
        기획·모바일 포함 <span className="text-sky-300 font-bold">33만 원 정찰제</span>
      </span>
    ),
  },
  {
    category: "사전 준비",
    traditional: "기획서·원고 사장님 직접 작성",
    renderJieum: () => (
      <span className="whitespace-nowrap">
        링크 하나로 <span className="text-sky-300 font-bold">기획·카피 대행</span>
      </span>
    ),
  },
  {
    category: "소통 방식",
    traditional: "얼굴도 모르는 외주 직원 소통",
    renderJieum: () => (
      <span className="whitespace-nowrap">
        사장님 매장으로 <span className="text-sky-300 font-bold">직접 방문 · 1:1 상담</span>
      </span>
    ),
  },
  {
    category: "사후 관리",
    traditional: "매월 의무 고정 관리비 청구",
    renderJieum: () => (
      <span className="whitespace-nowrap">
        <span className="text-sky-300 font-bold">월 고정비 0원</span>
        <span className="text-slate-400 font-normal ml-1.5 text-xs sm:text-[13px]">
          (필요할 때만 건별 요청)
        </span>
      </span>
    ),
  },
];

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 트랙 전체 구간 트래킹 (450vh sticky)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── Phase 1: 텍스트 순차 등장 & 스무스 퇴장 (0.00 ~ 0.40) ───
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.05, 0.32, 0.38], [0, 1, 1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 0.05, 0.32, 0.38], [25, 0, 0, -25]);

  const text1Opacity = useTransform(scrollYProgress, [0.04, 0.12, 0.32, 0.38], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.04, 0.12, 0.32, 0.38], [35, 0, 0, -30]);

  const text2Opacity = useTransform(scrollYProgress, [0.11, 0.20, 0.34, 0.39], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.11, 0.20, 0.34, 0.39], [35, 0, 0, -30]);

  const text3Opacity = useTransform(scrollYProgress, [0.19, 0.28, 0.35, 0.40], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.19, 0.28, 0.35, 0.40], [30, 0, 0, -25]);

  // ─── Phase 2: 비교 영역 통째로 등장 (0.43부터 1.00 고정) ───
  const contentOpacity = useTransform(scrollYProgress, [0.43, 0.52, 0.95, 1], [0, 1, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.43, 0.52, 0.95, 1], [40, 0, 0, 0]);

  return (
    <section 
      ref={containerRef} 
      id="solution" 
      className="relative bg-[#05070D] text-white h-[450vh]"
    >
      {/* 상단 경계선 */}
      <div className="w-full border-t border-white/10" />

      {/* 화면 전체 고정 뷰포트 (데스크톱 & 모바일 일체형 sticky) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 메인 콘텐츠 래퍼 */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── Phase 1: 텍스트 순차 등장 & 순차 퇴장 ─── */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-4xl mx-auto text-center pointer-events-none px-4 sm:px-6">
            <motion.p 
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="text-[13px] sm:text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-2 sm:mb-3"
            >
              지음이 일하는 방식
            </motion.p>

            <motion.h2 
              style={{ opacity: text1Opacity, y: text1Y }}
              className="text-[29px] min-[390px]:text-[33px] sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.22] sm:leading-[1.18] text-slate-100 mb-2 sm:mb-2.5 break-keep drop-shadow-md"
            >
              33만 원 정찰제가
              <br className="max-[430px]:block hidden" />
              {" "}가능한 이유,
            </motion.h2>

            <motion.h3 
              style={{ opacity: text2Opacity, y: text2Y }}
              className="text-[29px] min-[390px]:text-[33px] sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.22] sm:leading-[1.18] text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 mb-4 sm:mb-6 break-keep drop-shadow"
            >
              외주 없는 1인 디렉팅과
              <br />
              AI 파이프라인
            </motion.h3>

            <motion.p 
              style={{ opacity: text3Opacity, y: text3Y }}
              className="text-slate-300/90 text-sm sm:text-base md:text-lg leading-relaxed break-keep max-w-2xl mx-auto drop-shadow tracking-tight px-1"
            >
              불필요한 인건비 거품과 에이전시 마진을 모두 걷어냈습니다. 최신 엔지니어링 기술로 제작 공수를 줄이고, 그 혜택을 사장님께 온전히 돌려드립니다.
            </motion.p>
          </div>

          {/* ─── Phase 2: 비교 영역 (데스크톱/모바일 동시 페이드인 전환) ─── */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="w-full flex flex-col items-center"
          >
            {/* 상단 헤더 */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
              <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 break-keep">
                비용은 낮추고, 퀄리티와 소통은
                <br />
                <span className="bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 bg-clip-text text-transparent font-extrabold">
                  1인 디렉터
                </span>
                가 책임집니다.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep">
                매달 나가는 고정비 부담 없이, 사장님의 진짜 가치를 담아냅니다.
              </p>
            </div>

            {/* 1) 데스크톱 & 태블릿: 가로 Bento 비교 테이블 (md 이상) */}
            <div className="hidden md:block w-full max-w-230 mx-auto">
              <div className="rounded-3xl border border-white/10 bg-[#0a0f1d]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                
                {/* 테이블 헤더 */}
                <div className="grid grid-cols-[70px_1fr_1fr] lg:grid-cols-[80px_1fr_1fr] items-center px-6 lg:px-8 py-4.5 border-b border-white/10 bg-white/2">
                  <div className="text-center text-xs sm:text-[13px] font-semibold tracking-wider text-slate-400 uppercase whitespace-nowrap">
                    비교 항목
                  </div>
                  <div className="text-center text-[13.5px] sm:text-sm font-semibold text-slate-400 px-2 whitespace-nowrap">
                    일반 외주 업체
                  </div>
                  <div className="text-center text-[13.5px] sm:text-sm font-bold text-sky-300 flex items-center justify-center gap-1.5 px-2 whitespace-nowrap">
                    <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    디자인 지음 (1인 책임제)
                  </div>
                </div>

                {/* 테이블 본문 행 */}
                <div className="divide-y divide-white/5">
                  {COMPARISONS.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="grid grid-cols-[70px_1fr_1fr] lg:grid-cols-[80px_1fr_1fr] items-center px-6 lg:px-8 py-7 lg:py-8 transition-colors hover:bg-white/1.5 text-center"
                    >
                      {/* 1) 비교 항목: 슬림 고정폭 */}
                      <div className="flex justify-center items-center">
                        <span className="text-[12.5px] sm:text-[13px] lg:text-sm font-semibold text-slate-400/90 tracking-tight whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>

                      {/* 2) 일반 외주 업체 */}
                      <div className="flex items-center justify-center gap-2 px-2 text-[13.5px] lg:text-[14.5px] text-slate-400 whitespace-nowrap tracking-tight">
                        <XCircle className="w-4 h-4 text-rose-400/70 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>

                      {/* 3) 디자인 지음 */}
                      <div className="flex items-center justify-center gap-2 px-2 text-[14px] lg:text-[15px] font-medium text-slate-100 whitespace-nowrap tracking-tight">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <div>{item.renderJieum()}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

           {/* 2) 모바일 전용: 고효율 콤팩트 비교 리스트 (md 미만) */}
            <div className="block md:hidden w-full max-w-sm mx-auto space-y-2.5">
              {COMPARISONS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-white/10 bg-[#0a0f1d]/90 backdrop-blur-xl px-4 py-3.5 shadow-md flex flex-col gap-2"
                >
                  {/* 카테고리 라벨 */}
                  <div className="flex items-center">
                    <span className="text-[12.5px] font-bold text-slate-400 tracking-tight">
                      {item.category}
                    </span>
                  </div>

                  {/* 1:1 비교 본문 (폰트 스케일업 & 줄바꿈 여유 확보) */}
                  <div className="flex flex-col gap-1.5 leading-snug">
                    {/* 기존 외주 */}
                    <div className="flex items-center gap-2 text-slate-400/80">
                      <XCircle className="w-4 h-4 text-rose-400/70 shrink-0" />
                      <span className="line-through decoration-rose-400/40 text-[13px] tracking-tight">
                        {item.traditional}
                      </span>
                    </div>

                    {/* 지음 */}
                    <div className="flex items-center gap-2 text-[14.5px] font-medium text-slate-100 tracking-tight">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <div className="truncate font-semibold">{item.renderJieum()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default SolutionSection;