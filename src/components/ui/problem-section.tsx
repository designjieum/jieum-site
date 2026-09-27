import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ProblemCard {
  id: number;
  title: string;
  quote: string;
  problemDesc: string;
  jieumSolution: string;
  imageSrc: string;
  imageAlt: string;
}

const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    title: "견적 부담",
    quote: "100만원이라던 견적이 이것저것 붙어 300만원이 된 적, 있으신가요?",
    problemDesc: "막상 문의하면 페이지 수, 모바일 대응, 디자인 옵션마다 숨은 추가금이 붙어 감당하기 힘든 비용이 됩니다.",
    jieumSolution: "기획·모바일 최적화·문의 연동까지 올인원으로 담아낸 '손님이 연락하게 만드는 홈페이지'를 추가금 없는 하나의 정찰 가격으로 제공합니다.",
    imageSrc: "/images/3d/price.webp",
    imageAlt: "견적 부담 3D 아이콘",
  },
  {
    id: 2,
    title: "기획서 부담",
    quote: "가게 보기도 바쁜데 기획서와 원고부터 써 오라는 말, 들어 보셨나요?",
    problemDesc: "외주 업체들은 기획 문서를 요구하지만, 하루 종일 현업에 바쁜 사장님들에겐 시작조차 막막한 장벽입니다.",
    jieumSolution: "네이버 플레이스 링크 하나만 보내주세요. 매장 분석부터 카피라이팅까지 지음이 처음부터 끝까지 직접 기획합니다.",
    imageSrc: "/images/3d/text.webp",
    imageAlt: "기획서 준비 3D 아이콘",
  },
  {
    id: 3,
    title: "소통 단절",
    quote: "글자 하나 고치는 데 며칠씩 기다려 본 적 있으신가요?",
    problemDesc: "다리를 거칠수록 사장님의 진짜 의도는 왜곡되고, 사이트 오픈 이후에는 연락조차 닿지 않는 경우가 허다합니다.",
    jieumSolution: "경기북부 1인 책임 디렉터가 매장으로 직접 방문해 1:1로 소통하며 끝까지 책임지고 제작합니다.",
    imageSrc: "/images/3d/talk.webp",
    imageAlt: "소통 단절 3D 아이콘",
  },
  {
    id: 4,
    title: "관리비 부담",
    quote: "수정 하나 어려운 사이트에 매달 관리비만 내고 계시진 않나요?",
    // 전화/예약 수량 약속 리스크를 배제하고 '수정 권한 통제권 & 불필요한 고정비' 중심으로 안전하게 수정
    problemDesc: "작은 글자 하나 바꾸는 것도 번거로운 데다, 활용도와 상관없이 매달 꼬박꼬박 빠져나가는 관리비는 큰 부담이 됩니다.",
    jieumSolution: "매달 나가는 강제 유지보수비 0원. 군더더기 없이 꼭 필요한 핵심 정보만 명확히 전달해 사장님이 직접 소유하고 관리합니다.",
    imageSrc: "/images/3d/setting.webp",
    imageAlt: "사이트 방치 및 관리비 3D 아이콘",
  },
];

const LEFT_HIGHLIGHTS = [
  { id: 1, text: "숨은 추가 비용 없는 정찰제" },
  { id: 2, text: "기획서 없이 네이버 플레이스 링크로 즉시 시작" },
  { id: 3, text: "경기북부 대표 1:1 현장 직접 방문 미팅" },
  { id: 4, text: "월 강제 유지보수비 0원 & 손쉬운 실전 문의 설계" },
];

interface ScrollProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

// 좌측 요약 목록 한 줄: 현재 카드에 해당하는 줄만 밝게 표시
function HighlightItem({ text, index, total, scrollYProgress }: ScrollProps & { text: string }) {
  const step = 1 / total;
  const itemStart = index * step;
  const itemEnd = (index + 1) * step;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const activeProgress = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.20, 0.26, 1]
      : isLast
      ? [0.70, 0.78, 1]
      : [itemStart - 0.05, itemStart + 0.03, itemEnd - 0.03, itemEnd + 0.05],
    isFirst
      ? [1, 1, 0, 0]
      : isLast
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
    <div className="flex items-center gap-2.5 py-0.5 transition-colors">
      <motion.div style={{ color: iconColor }}>
        <CheckCircle2 className="w-4 h-4 shrink-0 transition-transform duration-300" />
      </motion.div>
      <motion.span
        style={{ color: textColor }}
        className="text-sm font-medium tracking-tight break-keep"
      >
        {text}
      </motion.span>
    </div>
  );
}

// 우측 고민 카드 한 장: 스크롤 구간에 맞춰 등장·퇴장
function ProblemStackCard({ problem, index, total, scrollYProgress }: ScrollProps & { problem: ProblemCard }) {
  const step = 1 / total;
  const start = index * step;
  const enterEnd = start + step * 0.25;
  const exitStart = (index + 1) * step - step * 0.25;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, exitStart, end, 1]
      : index === total - 1
      ? [start, enterEnd, 1]
      : [start, enterEnd, exitStart, end],
    index === 0
      ? [1, 1, 0, 0]
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

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 rounded-2xl bg-[#0d1322]/95 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden"
    >
      {/* 상단 콘텐츠 영역 */}
      <div className="relative p-5 sm:p-6 lg:p-7.5 flex flex-col justify-start flex-1 overflow-hidden">
        
        {/* 배경 3D 아이콘 */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -right-6 -bottom-10 sm:-right-8 sm:-bottom-12 select-none z-0 opacity-18 blur-[0.5px] transition-transform duration-700"
        >
          <img
            src={problem.imageSrc}
            alt={problem.imageAlt}
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-[-20px_25px_35px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </div>

        {/* 본문 텍스트 */}
        <div className="relative z-10 flex flex-col gap-2 sm:gap-2.5 w-full">
          {/* 머리표: 번호 · 고민 이름 */}
          <p className="text-xs sm:text-[13px] font-semibold tracking-tight text-slate-400">
            {String(index + 1).padStart(2, "0")} · {problem.title}
          </p>

          {/* 주인공 1: 공감 질문 */}
          <h3 className="text-[19px] sm:text-[22px] font-bold tracking-[-0.03em] leading-snug text-rose-300 break-keep text-balance">
            {problem.quote}
          </h3>
        </div>

        {/* 현상 설명 */}
        <div className="relative z-10 mt-3 sm:mt-4 w-full">
          <p className="text-sm sm:text-[15px] text-slate-300/90 leading-relaxed break-keep">
            {problem.problemDesc}
          </p>
        </div>
      </div>

      {/* 하단 영역: 지음의 솔루션 블록 */}
      <div className="bg-linear-to-b from-[#0b1b36] to-[#081224] border-t border-sky-500/20 p-5 sm:p-6 lg:p-7 flex flex-col justify-center relative z-20">
        {/* 솔루션 라벨: 작게 */}
        <div className="flex items-center gap-1.5 text-sky-400 text-xs sm:text-[13px] font-semibold tracking-tight mb-1.5 sm:mb-2">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>지음의 솔루션</span>
        </div>
        {/* 주인공 2: 솔루션 본문 */}
        <p className="text-[15px] sm:text-base font-semibold tracking-tight text-sky-50 leading-relaxed break-keep">
          {problem.jieumSolution}
        </p>
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="problem" className="relative bg-[#05070D] text-white">

      {/* 스크롤 트랙 (400vh) */}
      <div ref={scrollTrackRef} className="relative h-[400vh]">
        {/* 화면 고정 sticky 컨테이너 */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6">
          
          <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-14 items-center py-2">
            
            {/* 좌측 카피 및 하이라이트 */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2">
                사장님들의 현실적인 고민
              </p>

              <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
                왜 많은 사장님들이<br className="hidden sm:inline lg:hidden" />{" "}
                <span className="inline-block">
                  홈페이지 제작을 망설이셨을까요?
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-7 break-keep">
                기준 없는 과도한 견적과 매달 꼬박꼬박 빠져나가는<br className="hidden sm:inline" />
                강제 의무 관리비 때문입니다.
              </p>

              {/* 모바일/태블릿 세로 뷰(lg 미만)에서는 숨김 */}
              <div className="hidden lg:flex flex-col gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
                {LEFT_HIGHLIGHTS.map((item, idx) => (
                  <HighlightItem
                    key={item.id}
                    text={item.text}
                    index={idx}
                    total={LEFT_HIGHLIGHTS.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>

            {/* 우측 스크롤 카드 스택 */}
            <div className="lg:col-span-7 relative h-100 min-[390px]:h-104 sm:h-108 lg:h-112 w-full flex items-center">
              {PROBLEMS.map((problem, index) => (
                <ProblemStackCard
                  key={problem.id}
                  problem={problem}
                  index={index}
                  total={PROBLEMS.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;