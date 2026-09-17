import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HelpCircle,
  DollarSign,
  FileEdit,
  MessageSquareOff,
  Users,
  CheckCircle2,
} from "lucide-react";

const hesitateReasons = [
  {
    icon: DollarSign,
    tag: "비용 부담",
    title: "부르는 게 값인 수백만 원 견적서",
    description:
      "간단한 홍보 페이지 하나 만들려 해도 업체마다 부르는 금액이 천차만별이고, 결국 수백만 원에 달하는 비용 때문에 선뜻 시작하지 못합니다.",
    quote: "“페이지 몇 장 안 되는데 왜 200만 원이나 달라는 건지…”",
  },
  {
    icon: FileEdit,
    tag: "준비 막막함",
    title: "기획서부터 사진까지 직접 준비하라니",
    description:
      "가게 운영만으로도 몸이 열 개라도 모자란데, 업체에선 문구 작성부터 메뉴 사진, 기획안까지 일일이 직접 정리해서 넘겨달라고 요구합니다.",
    quote: "“장사하기도 바쁜데 기획서를 언제 다 쓰고 있나요…”",
  },
  {
    icon: MessageSquareOff,
    tag: "소통 단절",
    title: "글자 하나 고치려 해도 한세월 걸리는 소통",
    description:
      "오픈 후 메뉴 가격이나 영업시간 하나 바꾸려 해도 비대면 메일로 접수하라며 며칠씩 걸리고, 매달 추가 관리비를 요구해 결국 방치하게 됩니다.",
    quote: "“수정 요청 한 번 하려면 담당자 통화도 어렵고 답답해요…”",
  },
  {
    icon: Users,
    tag: "효과 의문",
    title: "비싸게 만들어도 손님이 올까 하는 불안감",
    description:
      "큰돈 들여 만들어도 우리 동네 손님들이 실제로 검색해서 찾아올지, 그저 인터넷 한구석에 덩그러니 잊혀진 껍데기가 될까 걱정이 앞섭니다.",
    quote: "“주변 사장님들 보면 비싸게 만들고도 방치한 곳이 태반이던데…”",
  },
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 스크롤 진행률 (0.0 ~ 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="problem"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#090D16] border-t border-slate-800/60"
    >
      {/* 뷰포트 고정 래퍼 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 은은한 배경 무드 블러 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-blue-950/20 blur-[160px] rounded-full"
        />

        <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* [좌측 영역] 메시지 정돈 & 체크포인트 */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-tight">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>사장님들의 현실적인 고민</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-[1.2]">
              왜 많은 사장님들이 <br />
              <span className="text-slate-400">홈페이지 제작을 망설일까요?</span>
            </h2>

            <p className="mt-4 text-base text-slate-400 leading-[1.72] tracking-[-0.015em] break-all">
              사장님의 장사 시간은 부족하고, 기존 외주 시장은 불필요하게 복잡했기 때문입니다. 디자인 지음은 사장님이 겪는 바로 이 4가지 장벽부터 무너뜨립니다.
            </p>

            {/* 정돈된 3대 해결 약속 리스트 */}
            <div className="mt-7 space-y-2.5 w-full">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="break-all">견적 거품 없는 투명한 33만 원 정찰제</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="break-all">서류 준비 없이 대표가 매장으로 직접 방문</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="break-all">월 관리비 0원 & 네이버 플레이스 연동 중심</span>
              </div>
            </div>

            {/* 하단 스크롤 인디케이터 게이지 바 */}
            <div className="mt-9 hidden lg:flex flex-col gap-2 w-48">
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
                <span>스크롤 진행도</span>
                <span className="font-mono text-blue-400">4대 고민 체크 중</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  className="w-full h-full bg-blue-500"
                />
              </div>
            </div>
          </div>

          {/* [우측 영역] 4개 카드 순차 전환 스택 */}
          <div className="lg:col-span-7 relative h-[410px] sm:h-[360px] w-full flex items-center justify-center">
            {hesitateReasons.map((item, index) => {
              const Icon = item.icon;

              // 4개 카드 구간 분할 (0.0 ~ 1.0)
              const start = index * 0.24;
              const peak = start + 0.12;
              const end = start + 0.28;
              const isLast = index === hesitateReasons.length - 1;

              const opacity = useTransform(
                scrollYProgress,
                isLast ? [start, peak, 1.0] : [start, peak, end - 0.04, end],
                isLast ? [0, 1, 1] : [0, 1, 1, 0]
              );

              const y = useTransform(
                scrollYProgress,
                isLast ? [start, peak, 1.0] : [start, peak, end],
                isLast ? [45, 0, 0] : [45, 0, -45]
              );

              const scale = useTransform(
                scrollYProgress,
                isLast ? [start, peak, 1.0] : [start, peak, end],
                isLast ? [0.94, 1, 1] : [0.94, 1, 0.96]
              );

              return (
                <motion.div
                  key={index}
                  style={{
                    opacity,
                    y,
                    scale,
                    pointerEvents: opacity ? "auto" : "none",
                  }}
                  className="absolute inset-0 p-8 sm:p-9 rounded-3xl bg-slate-900/85 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug break-all">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-400 leading-[1.7] tracking-tight break-all text-justify font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-slate-300 font-medium italic break-all">
                      {item.quote}
                    </p>
                    <span className="text-xs font-mono font-bold text-blue-400 shrink-0 ml-2">
                      0{index + 1} / 04
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}