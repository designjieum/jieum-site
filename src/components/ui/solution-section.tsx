import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";

interface ComparisonItem {
  category: string;
  traditional: string;
  jieumPrefix: string;
  jieumHighlight: string;
  jieumSuffix: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    category: "진행 방식",
    traditional: "영업사원 ➔ 기획 ➔ 디자이너 ➔ 개발자 다단계 소통",
    jieumPrefix: "경기북부 1인 풀스택 디렉터 현장 직접 방문 & ",
    jieumHighlight: "1:1 완결",
    jieumSuffix: "",
  },
  {
    category: "제작 단가",
    traditional: "페이지 추가와 불투명한 옵션으로 150~300만 원 견적 상승",
    jieumPrefix: "기획·반응형·문의 연동을 모두 담은 실전 원페이지 ",
    jieumHighlight: "33만 원 정찰제",
    jieumSuffix: "",
  },
  {
    category: "제작 속도",
    traditional: "외주 검수와 피드백 지연으로 1~2개월 소요",
    jieumPrefix: "AI 파이프라인과 컴포넌트 엔진으로 ",
    jieumHighlight: "2주 내 오픈",
    jieumSuffix: "",
  },
  {
    category: "유지 관리",
    traditional: "매달 의무 납부하는 고정 관리비 5~10만 원",
    jieumPrefix: "강제 ",
    jieumHighlight: "월 유지비 0원",
    jieumSuffix: " (수정 요청 건별 투명 정산)",
  },
];

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 트랙 전체 구간 트래킹 (520vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── 1) 텍스트 순차 등장 & 위에서부터 순차 퇴장 (완벽한 구간 분리) ───
  // 뱃지: [0.00 -> 0.05 등장] [0.38 -> 0.42 1등 퇴장]
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.05, 0.38, 0.42], [0, 1, 1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 0.05, 0.38, 0.42], [25, 0, 0, -25]);

  // 1번 문장: [0.05 -> 0.12 등장] [0.38 -> 0.42 1등 퇴장]
  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.12, 0.38, 0.42], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.12, 0.38, 0.42], [25, 0, 0, -25]);

  // 2번 문장: [0.12 -> 0.20 등장] [0.41 -> 0.45 2등 퇴장]
  const text2Opacity = useTransform(scrollYProgress, [0.12, 0.20, 0.41, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.12, 0.20, 0.41, 0.45], [25, 0, 0, -25]);

  // 3번 문장: [0.20 -> 0.28 등장] [0.44 -> 0.48 3등 퇴장] ➔ 0.48 이후 텍스트 100% 소멸
  const text3Opacity = useTransform(scrollYProgress, [0.20, 0.28, 0.44, 0.48], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.20, 0.28, 0.44, 0.48], [25, 0, 0, -25]);

  // ─── 2) 비교 표 진입 (0.48~0.53 클린 갭 확보 후 0.54부터 서서히 안착) ───
  const tableOpacity = useTransform(scrollYProgress, [0.54, 0.66, 0.95, 1], [0, 1, 1, 1]);
  const tableY = useTransform(scrollYProgress, [0.54, 0.66, 0.95, 1], [50, 0, 0, 0]);

  return (
    <section 
      ref={containerRef} 
      id="solution" 
      className="relative bg-[#05070D] text-white h-[520vh]"
    >
      {/* 화면 전체 고정 뷰포트 (쉐이더 완전 삭제) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 메인 콘텐츠 래퍼 */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

          {/* ─── Phase 1: 텍스트 순차 등장 & 위에서부터 1줄씩 순차 퇴장 ─── */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-3xl mx-auto text-center pointer-events-none px-6">
            
            {/* 1) 뱃지 (가장 먼저 퇴장) */}
            <motion.div 
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/40 bg-sky-500/15 text-sky-200 text-xs sm:text-sm font-medium mb-5 backdrop-blur-md shadow-lg shadow-sky-950/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>지음이 일하는 방식</span>
            </motion.div>

            {/* 2) 1번 문장 (뱃지와 함께 가장 먼저 퇴장) */}
            <motion.h2 
              style={{ opacity: text1Opacity, y: text1Y }}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] leading-[1.3] text-slate-100 mb-2 break-keep drop-shadow-md"
            >
              33만 원 정찰제가 가능한 이유,
            </motion.h2>

            {/* 3) 2번 문장 (중간에 퇴장) */}
            <motion.h3 
              style={{ opacity: text2Opacity, y: text2Y }}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] leading-[1.3] text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 mb-6 break-keep drop-shadow"
            >
              외주 없는 1인 디렉팅과 AI 파이프라인
            </motion.h3>

            {/* 4) 3번 문장 (마지막까지 남았다가 0.48에서 완전 퇴장) */}
            <motion.p 
              style={{ opacity: text3Opacity, y: text3Y }}
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed break-keep max-w-2xl mx-auto drop-shadow"
            >
              불필요한 인건비 거품과 에이전시 마진을 모두 걷어냈습니다. 최신 엔지니어링 기술로 제작 공수를 줄이고, 그 혜택을 사장님께 온전히 돌려드립니다.
            </motion.p>
          </div>

          {/* ─── Phase 2: 스크롤을 더 내리면 떠오르는 비교 표 (텍스트 퇴장 완료 후 단독 등장) ─── */}
          <motion.div 
            style={{ 
              opacity: tableOpacity, 
              y: tableY, 
            }}
            className="w-full"
          >
            {/* 비교 표 상단 브릿지 안내 문구 */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 mb-2 break-keep">
                비용은 1/5로 낮추고, 퀄리티와 소통은 1인 디렉터가 책임집니다
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 break-keep">
                에이전시 다단계 마진을 뺀 33만 원 정찰제와 실전 원페이지의 명확한 차이
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              
              {/* 좌측: 기존 웹 외주 시장 */}
              <div className="rounded-2xl bg-[#080c14]/95 backdrop-blur-xl border border-slate-900/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl opacity-70 hover:opacity-85 transition-opacity">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-300">기존 웹 외주 시장</h3>
                      <p className="text-xs text-slate-500">높은 비용 대비 번거로운 소통 구조</p>
                    </div>
                  </div>

                  <ul className="space-y-5 sm:space-y-6">
                    {COMPARISONS.map((item, idx) => (
                      <li key={idx} className="flex flex-col gap-1">
                        <span className="text-xs font-mono text-slate-500 font-medium">{item.category}</span>
                        <span className="text-sm text-slate-400 break-keep">{item.traditional}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs text-slate-600">
                  * 기획서 요구 및 의무 유지보수 계약 체결 관행
                </div>
              </div>

              {/* 우측: 디자인 지음 (내부 빔 없이 외곽 1px 테두리 림 라이트만 적용) */}
              <div className="relative rounded-2xl p-px bg-linear-to-b from-sky-400/50 via-sky-500/20 to-indigo-500/40 shadow-[0_0_30px_rgba(56,189,248,0.2)] flex flex-col">
                
                {/* 카드 내부 본체 */}
                <div className="relative flex-1 rounded-[15px] bg-[#090e1a] p-6 sm:p-8 flex flex-col justify-between z-10">
                  
                  <div>
                    {/* 카드 헤더 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 shadow-sm shadow-sky-500/20">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-sky-100">디자인 지음</h3>
                          <p className="text-xs text-sky-300/70">1인 풀스택 디렉팅 & 실전 고전환 원페이지</p>
                        </div>
                      </div>

                      <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">
                        지음 솔루션
                      </span>
                    </div>

                    {/* 항목 리스트 */}
                    <ul className="space-y-5 sm:space-y-6">
                      {COMPARISONS.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex flex-col gap-1 relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-sky-400"
                        >
                          <span className="text-xs font-mono text-sky-400 font-semibold">{item.category}</span>
                          <span className="text-sm font-medium text-slate-100 break-keep leading-relaxed">
                            {item.jieumPrefix}
                            <span className="relative inline-block text-sky-200 font-bold px-1.5 py-0.5 mx-0.5">
                              <span className="relative z-10">{item.jieumHighlight}</span>
                              <span className="absolute inset-0 z-0 bg-sky-500/25 border border-sky-500/40 rounded" />
                            </span>
                            {item.jieumSuffix}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-sky-300/80 break-keep">
                    <span>이탈 없는 실전 원페이지 구조 · 네이버 플레이스 링크로 즉시 착수</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}