import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle, FileSpreadsheet, MessageSquareDashed, HelpCircle, CheckCircle2 } from "lucide-react";

interface ProblemCard {
  id: number;
  icon: typeof AlertCircle;
  emoji: string;
  author: string;
  role: string;
  title: string;
  quote: string;
  problemDesc: string;
  jieumSolution: string;
}

const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    icon: AlertCircle,
    emoji: "🧘‍♀️",
    author: "양주 필라테스 원장님",
    role: "뷰티·피트니스",
    title: "수백만 원에 달하는 견적 부담",
    quote: "처음엔 100만 원이라더니, 이것저것 붙여 300만 원이래요.",
    problemDesc: "막상 문의하면 페이지 수, 반응형 기능, 디자인 옵션마다 숨은 추가금이 붙어 감당하기 힘든 비용이 됩니다.",
    jieumSolution: "디자인 지음은 기획·모바일 최적화·문의 연동까지 올인원으로 담아낸 '고전환 원페이지'를 33만 원 투명 정찰제로 약속합니다.",
  },
  {
    id: 2,
    icon: FileSpreadsheet,
    emoji: "👩‍💻",
    author: "의정부 카페 대표님",
    role: "카페·디저트",
    title: "기획서·문서 준비의 막막함",
    quote: "가게 보기도 바쁜데, 기획서랑 원고를 직접 써오라니요...",
    problemDesc: "외주 업체들은 기획 문서를 요구하지만, 하루 종일 현업에 바쁜 사장님들에겐 시작조차 막막한 장벽입니다.",
    jieumSolution: "네이버 플레이스 링크 하나만 보내주세요. 매장 분석부터 카피라이팅까지 지음이 처음부터 끝까지 직접 기획합니다.",
  },
  {
    id: 3,
    icon: MessageSquareDashed,
    emoji: "🪵",
    author: "포천 가구공방 실장님",
    role: "제조·공방",
    title: "말 바뀌는 외주와 소통 단절",
    quote: "영업 사원 따로, 디자이너 따로라 글자 하나에 며칠씩 걸립니다.",
    problemDesc: "다리를 거칠수록 사장님의 진짜 의도는 왜곡되고, 사이트 오픈 이후에는 연락조차 닿지 않는 경우가 허다합니다.",
    jieumSolution: "경기북부 1인 책임 디렉터가 매장으로 직접 방문해 1:1로 소통하며 끝까지 책임지고 제작합니다.",
  },
  {
    id: 4,
    icon: HelpCircle,
    emoji: "👩‍🏫",
    author: "동두천 학원 원장님",
    role: "교육·서비스",
    title: "만들어 두고 방치되는 사이트",
    quote: "만들어놓고 문의는 0건인데 매달 관리비만 10만 원씩 나갑니다.",
    problemDesc: "복잡하기만 하고 실질적인 전화나 예약으로 연결되지 않는 사이트는 매달 고정비만 축내는 짐이 됩니다.",
    jieumSolution: "매달 나가는 강제 유지보수비 0원. 손님이 들어와 3초 만에 바로 문의할 수 있는 실전 고전환 동선으로 설계합니다.",
  },
];

const LEFT_HIGHLIGHTS = [
  { id: 1, text: "숨은 추가 비용 없는 33만 원 정찰제" },
  { id: 2, text: "기획서 없이 네이버 플레이스 링크로 즉시 시작" },
  { id: 3, text: "경기북부 대표 1:1 현장 직접 방문 미팅" },
  { id: 4, text: "월 강제 유지보수비 0원 & 3초 고전환 설계" },
];

export function ProblemSection() {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="problem" className="relative bg-[#090D16] text-white">
      <div className="w-full border-t border-white/10" />

      <div ref={scrollTrackRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6">
          
          <div className="absolute inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `radial-gradient(circle at center, #ffffff 0.75px, transparent 0.75px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090D16_80%)]" />
            <div className="absolute top-1/4 left-1/4 w-120 h-120 rounded-full bg-rose-950/15 blur-[140px]" />
            <div className="absolute bottom-1/4 right-1/4 w-120 h-128 rounded-full bg-sky-950/20 blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-14 items-center py-2">
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2">
                사장님들의 현실적인 고민
              </p>

              <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
                왜 많은 사장님들이<br className="hidden sm:inline lg:hidden" /> 홈페이지 제작을 망설이셨을까요?
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-7 break-keep">
                처음엔 100만 원이라더니 결국 300~400만 원으로 불어나는 견적서, 그리고 제작 후에도 매달 꼬박꼬박 빠져나가는 의무 관리비 때문입니다.
              </p>

              <div className="flex flex-col gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
                {LEFT_HIGHLIGHTS.map((item, idx) => {
                  const step = 0.25;
                  const itemStart = idx * step;
                  const itemEnd = (idx + 1) * step;

                  const activeProgress = useTransform(
                    scrollYProgress,
                    idx === 0
                      ? [0, 0.20, 0.26]
                      : idx === 3
                      ? [0.70, 0.78, 1]
                      : [itemStart - 0.05, itemStart + 0.03, itemEnd - 0.03, itemEnd + 0.05],
                    idx === 0
                      ? [1, 1, 0]
                      : idx === 3
                      ? [0, 1, 1]
                      : [0, 1, 1, 0]
                  );

                  const textColor = useTransform(
                    activeProgress,
                    [0, 1],
                    ["rgba(148, 163, 184, 0.35)", "rgba(241, 245, 249, 1)"]
                  );

                  const iconColor = useTransform(
                    activeProgress,
                    [0, 1],
                    ["rgba(56, 189, 248, 0.25)", "rgba(56, 189, 248, 1)"]
                  );

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-2.5 py-0.5 transition-colors"
                    >
                      <motion.div style={{ color: iconColor }}>
                        <CheckCircle2 className="w-4 h-4 shrink-0 transition-transform duration-300" />
                      </motion.div>
                      <motion.span
                        style={{ color: textColor }}
                        className="text-sm font-medium tracking-tight break-keep"
                      >
                        {item.text}
                      </motion.span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 relative h-92 min-[390px]:h-96 sm:h-100 lg:h-110 w-full flex items-center">
              {PROBLEMS.map((problem, index) => {
                const total = PROBLEMS.length;
                const step = 1 / total;
                const start = index * step;
                const enterEnd = start + step * 0.25;
                const exitStart = (index + 1) * step - step * 0.25;
                const end = (index + 1) * step;

                const opacity = useTransform(
                  scrollYProgress,
                  index === 0
                    ? [0, exitStart, end]
                    : index === total - 1
                    ? [start, enterEnd, 1]
                    : [start, enterEnd, exitStart, end],
                  index === 0
                    ? [1, 1, 0]
                    : index === total - 1
                    ? [0, 1, 1]
                    : [0, 1, 1, 0]
                );

                const y = useTransform(
                  scrollYProgress,
                  index === 0
                    ? [exitStart, end]
                    : [start, enterEnd],
                  index === 0
                    ? [0, -15]
                    : [20, 0]
                );

                const Icon = problem.icon;

                return (
                  <motion.div
                    key={problem.id}
                    style={{ opacity, y }}
                    className="absolute inset-0 p-5 sm:p-6 lg:p-7.5 rounded-2xl bg-[#0d1322]/80 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-base sm:text-lg shrink-0 shadow-sm">
                            {problem.emoji}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-200">
                              {problem.author}
                            </span>
                            <span className="hidden sm:inline-block text-xs text-slate-300 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 font-medium">
                              {problem.role}
                            </span>
                          </div>
                        </div>

                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight break-keep mb-2 leading-snug">
                        {problem.title}
                      </h3>

                      <p className="text-[17px] min-[390px]:text-lg sm:text-xl font-bold text-rose-400 mb-2.5 sm:mb-3 leading-[1.45] break-keep">
                        "{problem.quote}"
                      </p>

                      <p className="text-sm sm:text-[15px] text-slate-300/85 leading-relaxed break-keep">
                        {problem.problemDesc}
                      </p>
                    </div>

                    <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-3.5 border-t border-white/10 bg-[#050811]/90 -mx-5 sm:-mx-6 lg:-mx-7.5 -mb-5 sm:-mb-6 lg:-mb-7.5 p-4 sm:p-5 flex flex-col items-start gap-1.5 rounded-b-2xl">
                      <div className="text-[15px] sm:text-base font-extrabold text-sky-400 tracking-tight">
                        지음의 해답
                      </div>
                      <p className="text-sm sm:text-[15px] text-sky-100/95 leading-relaxed font-medium break-keep">
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

export default ProblemSection;