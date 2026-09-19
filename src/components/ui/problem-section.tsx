import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, AlertCircle, FileSpreadsheet, MessageSquareDashed, HelpCircle } from "lucide-react";

interface ProblemChat {
  id: number;
  emoji: string;
  owner: string;
  role: string;
  message: string;
  sub: string;
  align: "left" | "right";
  scatter: { x: number; y: number; rotate: number };
}

const CHAT_PROBLEMS: ProblemChat[] = [
  {
    id: 1,
    emoji: "🧘‍♀️",
    owner: "양주 필라테스 원장님",
    role: "뷰티·피트니스",
    message: "처음엔 100만 원이라더니, 이것저것 붙여 300만 원이래요.",
    sub: "기준 없는 추가금 요구로 시작조차 막막함",
    align: "left",
    scatter: { x: -900, y: -450, rotate: -25 },
  },
  {
    id: 2,
    emoji: "👩‍💻",
    owner: "의정부 카페 대표님",
    role: "카페·디저트",
    message: "가게 보기도 바쁜데, 기획서랑 원고를 직접 써오라니요...",
    sub: "복잡한 문서 준비 부담과 소통의 장벽",
    align: "right",
    scatter: { x: 900, y: -400, rotate: 22 },
  },
  {
    id: 3,
    emoji: "🪵",
    owner: "포천 가구공방 실장님",
    role: "제조·공방",
    message: "영업 사원 따로, 디자이너 따로라 글자 하나에 며칠씩 걸립니다.",
    sub: "외주 다단계 소통과 오픈 후 연락 두절",
    align: "left",
    scatter: { x: -880, y: 450, rotate: -22 },
  },
  {
    id: 4,
    emoji: "👩‍🏫",
    owner: "동두천 학원 원장님",
    role: "교육·서비스",
    message: "만들어놓고 문의는 0건인데 매달 관리비만 10만 원씩 나갑니다.",
    sub: "효과 없는 방치와 의무적인 월 유지비 부담",
    align: "right",
    scatter: { x: 880, y: 500, rotate: 25 },
  },
];

const CARDS_DATA = [
  {
    id: "01",
    icon: AlertCircle,
    title: "수백만 원에 달하는 견적 부담",
    quote: "처음 견적은 100만 원인데, 기능을 조금만 추가하면 300만 원?",
    desc: "막상 문의하면 페이지 수, 반응형 기능, 디자인 옵션마다 추가금이 붙어 감당하기 힘든 비용이 됩니다.",
    solution: "디자인 지음은 기획·모바일 최적화·문의 연동까지 올인원으로 담아낸 '고전환 원페이지'를 33만 원 투명 정찰제로 약속합니다.",
  },
  {
    id: "02",
    icon: FileSpreadsheet,
    title: "기획서·문서 준비의 막막함",
    quote: "바쁜 매장 운영 중에 스토리보드와 원고를 직접 써오라니요?",
    desc: "웹 제작 업체들은 기획 문서를 요구하지만, 하루 종일 현업에 바쁜 사장님들에겐 가장 큰 장벽입니다.",
    solution: "네이버 플레이스 링크 하나만 보내주세요. 매장 분석부터 카피라이팅까지 지음이 직접 기획합니다.",
  },
  {
    id: "03",
    icon: MessageSquareDashed,
    title: "말 바뀌는 외주와 소통 단절",
    quote: "영업 사원 따로, 디자이너 따로... 수정 하나에 며칠씩 지연",
    desc: "다리를 거칠수록 사장님의 진짜 의도는 왜곡되고, 오픈 이후에는 연락조차 닿지 않는 경우가 허다합니다.",
    solution: "경기북부 1인 디렉터가 매장으로 직접 방문해 1:1로 소통하며 책임지고 제작합니다.",
  },
  {
    id: "04",
    icon: HelpCircle,
    title: "만들어 두고 방치되는 사이트",
    quote: "매달 나가는 강제 유지보수비, 그런데 손님 유입은 제로?",
    desc: "복잡하기만 하고 실질적인 전화나 예약으로 연결되지 않는 홈페이지는 매달 비용만 축내는 짐이 됩니다.",
    solution: "매달 나가는 고정 관리비 0원. 손님이 3초 만에 문의할 수 있는 실전 고전환 구조로 설계합니다.",
  },
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 트랙을 500vh로 확장하여 천천히 정독할 수 있는 묵직한 호흡 확보
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. 헤더 등장 (초반)
  const introBadgeOpacity = useTransform(scrollYProgress, [0.01, 0.04], [0, 1]);
  const introBadgeY = useTransform(scrollYProgress, [0.01, 0.04], [15, 0]);

  const introTitleOpacity = useTransform(scrollYProgress, [0.02, 0.06], [0, 1]);
  const introTitleY = useTransform(scrollYProgress, [0.02, 0.06], [15, 0]);

  const introSubOpacity = useTransform(scrollYProgress, [0.04, 0.08], [0, 1]);
  const introSubY = useTransform(scrollYProgress, [0.04, 0.08], [15, 0]);

  // 2. 말풍선 4개 순차 등장 (간격을 넓혀 한 개씩 천천히 읽고 넘어가도록 유도: 0.10 ~ 0.68)
  const c1Opacity = useTransform(scrollYProgress, [0.10, 0.20, 0.76], [0, 1, 1]);
  const c1Y = useTransform(scrollYProgress, [0.10, 0.20], [30, 0]);

  const c2Opacity = useTransform(scrollYProgress, [0.26, 0.36, 0.76], [0, 1, 1]);
  const c2Y = useTransform(scrollYProgress, [0.26, 0.36], [30, 0]);

  const c3Opacity = useTransform(scrollYProgress, [0.42, 0.52, 0.76], [0, 1, 1]);
  const c3Y = useTransform(scrollYProgress, [0.42, 0.52], [30, 0]);

  const c4Opacity = useTransform(scrollYProgress, [0.58, 0.68, 0.76], [0, 1, 1]);
  const c4Y = useTransform(scrollYProgress, [0.58, 0.68], [30, 0]);

  // 3. 말풍선 사방 산란 & 솔루션 카드 동시 교차 전환 (0.76 ~ 0.88)
  const scatterProgress = useTransform(scrollYProgress, [0.76, 0.88], [0, 1]);
  const chatGroupOpacity = useTransform(scrollYProgress, [0.76, 0.86], [1, 0]);
  const chatVisibility = useTransform(scrollYProgress, (v) => (v >= 0.88 ? "hidden" : "visible"));

  // 상단 인트로 헤더 페이드아웃
  const introHeaderOpacity = useTransform(scrollYProgress, [0.76, 0.86], [1, 0]);
  const introHeaderDisplay = useTransform(scrollYProgress, (v) => (v >= 0.88 ? "none" : "block"));

  // 솔루션 영역 동시 교차 등장
  const solutionOpacity = useTransform(scrollYProgress, [0.76, 0.87, 1], [0, 1, 1]);
  const solutionY = useTransform(scrollYProgress, [0.76, 0.87], [40, 0]);
  const solutionVisibility = useTransform(scrollYProgress, (v) => (v < 0.74 ? "hidden" : "visible"));
  const solutionPointerEvents = useTransform(scrollYProgress, (v) => (v >= 0.84 ? "auto" : "none"));

  const chatMotions = [
    { opacity: c1Opacity, y: c1Y },
    { opacity: c2Opacity, y: c2Y },
    { opacity: c3Opacity, y: c3Y },
    { opacity: c4Opacity, y: c4Y },
  ];

  return (
    <section id="problem" ref={containerRef} className="relative bg-[#07090E] text-white h-[500vh]">
      <div className="w-full border-t border-slate-800/80" />

      {/* 뷰포트 고정 래퍼 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 은은한 앰비언트 글로우 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-120 h-120 rounded-full bg-rose-950/15 blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-120 h-128 rounded-full bg-sky-950/20 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center py-4">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* PHASE 1: 말풍선 등장 시 표시되는 인트로 헤더 */}
          {/* ─────────────────────────────────────────────────────────── */}
          <motion.div 
            style={{ 
              opacity: introHeaderOpacity, 
              display: introHeaderDisplay,
            }}
            className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 shrink-0"
          >
            <motion.div 
              style={{ opacity: introBadgeOpacity, y: introBadgeY }}
              className="inline-flex items-center gap-1.5 min-[376px]:gap-2 px-3 py-1 min-[376px]:px-4 min-[376px]:py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] min-[376px]:text-sm font-semibold mb-2 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>사장님들의 현실적인 목소리</span>
            </motion.div>

            <motion.h2 
              style={{ opacity: introTitleOpacity, y: introTitleY }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.035em] text-slate-100 break-keep leading-tight"
            >
              혹시 사장님도 이런 고민으로 망설이셨나요?
            </motion.h2>

            <motion.p 
              style={{ opacity: introSubOpacity, y: introSubY }}
              className="mt-2 text-xs sm:text-base text-slate-400 leading-normal break-keep max-w-2xl mx-auto"
            >
              알 수 없는 추가 비용과 막막한 준비 과정, 시작도 전에 지치셨던 사장님들의 속마음입니다.
            </motion.p>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* 메인 뷰어 래퍼 (말풍선과 카드가 동일한 위치에서 교차 전환) */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="relative w-full max-w-6xl flex items-center justify-center min-h-95 sm:min-h-105">

            {/* PHASE 1 & 2: 스티키 핑퐁 말풍선 */}
            <motion.div 
              style={{ 
                opacity: chatGroupOpacity,
                visibility: chatVisibility as unknown as "visible" | "hidden",
                pointerEvents: (chatVisibility as unknown as string === "hidden" ? "none" : "auto") as "auto" | "none"
              }}
              className="w-full max-w-3xl flex flex-col justify-center gap-3.5 sm:gap-4.5"
            >
              {CHAT_PROBLEMS.map((chat, idx) => {
                const { opacity: itemOpacity, y: itemY } = chatMotions[idx];

                const scatterX = useTransform(scatterProgress, [0, 1], [0, chat.scatter.x]);
                const scatterY = useTransform(scatterProgress, [0, 1], [0, chat.scatter.y]);
                const scatterRotate = useTransform(scatterProgress, [0, 1], [0, chat.scatter.rotate]);
                const scatterScale = useTransform(scatterProgress, [0, 1], [1, 1.15]);

                const isLeft = chat.align === "left";

                return (
                  <motion.div
                    key={chat.id}
                    style={{
                      opacity: itemOpacity,
                      x: scatterX,
                      y: useTransform([itemY, scatterY], ([y1, y2]) => (y1 as number) + (y2 as number)),
                      rotate: scatterRotate,
                      scale: scatterScale,
                      transformOrigin: isLeft ? "bottom left" : "bottom right",
                    }}
                    className={`w-full flex items-end gap-2.5 sm:gap-3.5 ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    {isLeft && (
                      <div className="relative shrink-0 mb-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-b from-slate-700 to-slate-800 p-0.5 border border-slate-600/60 shadow-lg shadow-black/50 flex items-center justify-center">
                          <span className="text-xl sm:text-2xl select-none filter drop-shadow">{chat.emoji}</span>
                        </div>
                      </div>
                    )}

                    <div className={`max-w-[85%] sm:max-w-xl rounded-2xl p-3.5 sm:p-4.5 border backdrop-blur-xl shadow-2xl transition-all ${
                      isLeft ? "bg-slate-900/95 border-slate-800 rounded-bl-xs" : "bg-[#0f1422]/95 border-sky-950/70 rounded-br-xs"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-200">{chat.owner}</span>
                        <span className="text-[10px] sm:text-xs text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 font-medium">
                          {chat.role}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-rose-400 leading-relaxed break-keep mb-1">
                        "{chat.message}"
                      </p>

                      <span className="text-xs sm:text-[13px] text-slate-400 font-medium block">⚠️ {chat.sub}</span>
                    </div>

                    {!isLeft && (
                      <div className="relative shrink-0 mb-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-b from-slate-700 to-slate-800 p-0.5 border border-slate-600/60 shadow-lg shadow-black/50 flex items-center justify-center">
                          <span className="text-xl sm:text-2xl select-none filter drop-shadow">{chat.emoji}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* PHASE 3: 말풍선이 흩어지면서 동시에 올라오는 2x2 솔루션 카드 영역 */}
            {/* ─────────────────────────────────────────────────────────── */}
            <motion.div 
              style={{ 
                opacity: solutionOpacity, 
                y: solutionY,
                visibility: solutionVisibility as unknown as "visible" | "hidden",
                pointerEvents: solutionPointerEvents as unknown as "auto" | "none",
              }}
              className="absolute inset-0 w-full flex flex-col justify-center"
            >
              {/* 솔루션 헤더 */}
              <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-2 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>지음의 4가지 명쾌한 해답</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight break-keep leading-tight sm:leading-[1.3]">
                  사장님의 4가지 불안,<br />
                  지음이 투명하게 끝냅니다.
                </h2>
              </div>

              {/* 2x2 솔루션 카드 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5 w-full">
                {CARDS_DATA.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={card.id} 
                      className="rounded-2xl bg-[#090d16]/95 border border-slate-800/90 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden hover:border-sky-500/30 transition-colors"
                    >
                      {/* 카드 상단 본문 */}
                      <div className="p-4 sm:p-5.5 flex flex-col justify-start">
                        <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                            <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight break-keep">
                            {card.id}. {card.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm font-bold text-rose-400 mb-1.5 leading-snug break-keep">
                          "{card.quote}"
                        </p>

                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed break-keep">
                          {card.desc}
                        </p>
                      </div>

                      {/* 카드 하단 지음의 해답 바 */}
                      <div className="border-t border-slate-800/80 bg-[#050811] px-4 sm:px-5.5 py-3 flex flex-col items-start gap-1.5 mt-auto">
                        <div className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded bg-[#0284c7]/20 text-[#38bdf8] border border-[#0284c7]/40 shrink-0 tracking-tight">
                          지음의 해답
                        </div>
                        <p className="text-xs sm:text-sm text-sky-100/95 leading-relaxed font-semibold break-keep">
                          {card.solution}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}