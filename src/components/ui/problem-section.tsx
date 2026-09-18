import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle, FileSpreadsheet, MessageSquareDashed, HelpCircle, CheckCircle2 } from "lucide-react";

interface ProblemCard {
  id: number;
  icon: typeof AlertCircle;
  title: string;
  subtitle: string;
  problemDesc: string;
  jieumSolution: string;
}

const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    icon: AlertCircle,
    title: "01. 수백만 원에 달하는 견적 부담",
    subtitle: "처음 견적은 100만 원인데, 기능을 조금만 추가하면 300만 원?",
    problemDesc: "막상 문의하면 페이지 수, 반응형 기능, 디자인 옵션마다 추가금이 붙어 감당하기 힘든 비용이 됩니다.",
    jieumSolution: "디자인 지음은 기획·모바일 최적화·문의 연동까지 모두 포함한 33만 원 투명 정찰제를 약속합니다."
  },
  {
    id: 2,
    icon: FileSpreadsheet,
    title: "02. 기획서·문서 준비의 막막함",
    subtitle: "바쁜 매장 운영 중에 스토리보드와 원고를 직접 써오라니요?",
    problemDesc: "웹 제작 업체들은 기획 문서를 요구하지만, 하루 종일 현업에 바쁜 사장님들에겐 가장 큰 장벽입니다.",
    jieumSolution: "네이버 플레이스 링크 하나만 보내주세요. 매장 분석부터 카피라이팅까지 지음이 직접 기획합니다."
  },
  {
    id: 3,
    icon: MessageSquareDashed,
    title: "03. 말 바뀌는 외주와 소통 단절",
    subtitle: "영업 사원 따로, 디자이너 따로... 수정 하나에 며칠씩 지연",
    problemDesc: "다리를 거칠수록 사장님의 진짜 의도는 왜곡되고, 오픈 이후에는 연락조차 닿지 않는 경우가 허다합니다.",
    jieumSolution: "경기북부 1인 디렉터가 매장으로 직접 방문해 1:1로 소통하며 책임지고 제작합니다."
  },
  {
    id: 4,
    icon: HelpCircle,
    title: "04. 만들어 두고 방치되는 사이트",
    subtitle: "매달 나가는 강제 유지보수비, 그런데 손님 유입은 제로?",
    problemDesc: "복잡하기만 하고 실질적인 전화나 예약으로 연결되지 않는 홈페이지는 매달 비용만 축내는 짐이 됩니다.",
    jieumSolution: "매달 나가는 고정 관리비 0원. 손님이 3초 만에 문의할 수 있는 실전 고전환 구조로 설계합니다."
  }
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="problem" ref={containerRef} className="relative bg-[#090D16] text-white">
      {/* 상단 섹션 구분선 */}
<div className="w-full border-t border-slate-800/80" />
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
            
            {/* 좌측 고정 설명 영역 */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold w-fit mb-4">
                사장님들의 현실적인 고민
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.035em] leading-[1.28] text-slate-100 mb-4 break-keep text-balance">
                왜 많은 사장님들이 홈페이지 제작을 망설이셨을까요?
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 break-keep text-pretty">
                실력이나 열정이 부족해서가 아닙니다. 기존 웹 에이전시들의 불투명한 관행과 소통 부재가 사장님들을 지치게 만들었기 때문입니다.
              </p>

              <div className="hidden sm:flex flex-col gap-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>숨은 추가 비용 없는 33만 원 정찰제</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>경기북부 대표 1:1 현장 직접 방문</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>기획서 없이 네이버 플레이스 링크로 즉시 시작</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">진행률</span>
                <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ scaleX: scrollYProgress }} 
                    className="h-full bg-linear-to-r from-sky-400 to-indigo-500 origin-left"
                  />
                </div>
              </div>
            </div>

            {/* 우측 순차 카드 전환 영역 */}
            <div className="lg:col-span-7 relative h-96 sm:h-96 w-full flex items-center">
              {PROBLEMS.map((problem, index) => {
                const step = 1 / PROBLEMS.length;
                const start = index * step;
                const peak = start + step * 0.4;
                const end = (index + 1) * step;

                const opacity = useTransform(
                  scrollYProgress,
                  index === 0 
                    ? [0, peak, end] 
                    : index === PROBLEMS.length - 1
                    ? [start, peak, 1]
                    : [start, peak, end],
                  index === 0
                    ? [1, 1, 0]
                    : index === PROBLEMS.length - 1
                    ? [0, 1, 1]
                    : [0, 1, 0]
                );

                const y = useTransform(
                  scrollYProgress,
                  [start, peak],
                  [30, 0]
                );

                const Icon = problem.icon;

                return (
                  <motion.div
                    key={problem.id}
                    style={{ opacity, y }}
                    className="absolute inset-0 p-6 sm:p-8 rounded-2xl bg-linear-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-[-0.035em] break-keep text-balance">
                          {problem.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-rose-300/90 mb-3 break-keep text-pretty leading-snug">
                        "{problem.subtitle}"
                      </p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed break-keep text-pretty">
                        {problem.problemDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800/80 bg-sky-950/20 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 sm:p-6 rounded-b-2xl flex items-start gap-3">
                      <div className="text-xs font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0 mt-0.5">
                        지음의 해답
                      </div>
                      <p className="text-xs sm:text-sm text-sky-200/90 leading-relaxed font-medium break-keep text-pretty">
                        {problem.jieumSolution}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}