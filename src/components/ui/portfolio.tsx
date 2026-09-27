import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  PhoneCall,
  CalendarCheck,
  ClipboardList,
  Camera,
  Quote,
  Sparkles
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  location: string;
  isReal: boolean;
  image: string;
  problem: string;
  solution: string;
  review?: {
    quote: string;
    author: string;
  };
  actionLabel: string;
  actionIcon: typeof Navigation;
}

// 실제 고객 사례를 앞에, 업종별 제작 예시를 뒤에 배치
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "orangead",
    category: "간판",
    clientName: "오렌지애드컴퍼니",
    location: "경기도 양주시 고암동",
    isReal: true,
    image: "/images/portfolio/orangead.webp",
    problem: "매번 조건이 다른 견적 문의가 들어와서, 하나하나 답변하는 데만 시간이 오래 걸렸어요.",
    solution: "필요한 내용을 미리 정리해서 보내는 견적 문의 흐름을 만들어, 문의가 한눈에 정리된 상태로 도착하도록 설계했습니다.",
    review: {
      quote: "문의에 답변하기가 훨씬 간편해졌고, 실제로 문의 건수도 눈에 띄게 늘었습니다.",
      author: "양주 오렌지애드컴퍼니 대표",
    },
    actionLabel: "견적 받기",
    actionIcon: ClipboardList,
  },
  {
    id: "okhome",
    category: "집수리",
    clientName: "오케이집수리",
    location: "경기도 포천시 소흘읍",
    isReal: true,
    image: "/images/portfolio/okhome.webp",
    problem: "'이것도 수리되나요?' 묻는 문의가 많은데, 작업 중에는 전화를 받기도 답변하기도 힘들었어요.",
    solution: "수리 가능한 서비스를 한눈에 정리하고 상담 신청으로 이어지게 설계했습니다. 급한 손님은 바로 전화할 수 있도록 전화 연결 버튼도 더했습니다.",
    review: {
      quote: "작업이 끝난 뒤 부재중 전화를 확인하고 연락드리면 되니 편하고, 수리 가능한지 묻는 문의도 확 줄어서 좋아요.",
      author: "포천 오케이집수리 대표",
    },
    actionLabel: "빠른 상담 연결",
    actionIcon: PhoneCall,
  },
  {
    id: "dalbit",
    category: "캠핑장",
    clientName: "달빛계곡",
    location: "경기도 가평군 북면",
    isReal: false,
    image: "/images/portfolio/dalbit.webp",
    problem: "하루 종일 길을 묻는 전화와 자리별 가격 문의에 답하다 보면 금방 지쳐 버려요.",
    solution: "자리별 가격을 한눈에 비교하는 기능을 넣고, 찾아오는 길을 자세히 안내하는 페이지를 따로 만들어 같은 질문이 반복되지 않게 했습니다.",
    actionLabel: "길찾기",
    actionIcon: Navigation,
  },
  {
    id: "lowhigh",
    category: "바버샵",
    clientName: "로우앤하이",
    location: "경기도 동두천시 지행동",
    isReal: false,
    image: "/images/portfolio/lowhigh.webp",
    problem: "커트나 서비스별 가격만 물어보고, 예약까지 이어지지 않는 경우가 많았어요.",
    solution: "서비스별 가격 비교표와 헤어스타일을 둘러보는 섹션을 구성해, 가격과 스타일을 확인한 손님이 바로 예약하도록 이었습니다.",
    actionLabel: "예약하기",
    actionIcon: CalendarCheck,
  },
  {
    id: "bareungil",
    category: "행정사",
    clientName: "바른길 행정사사무소",
    location: "경기도 양주시 옥정동",
    isReal: false,
    image: "/images/portfolio/bareungil.webp",
    problem: "처분서를 받고 당황한 손님들이 무엇부터 해야 할지 몰라, 첫 상담이 설명만으로 길어지곤 했어요.",
    solution: "처분서 사진 한 장만 보내면 상담이 시작되도록 흐름을 단순하게 만들고, 행정심판 기한과 진행 단계를 미리 안내해 첫 통화부터 바로 본론으로 들어가게 설계했습니다.",
    actionLabel: "처분서 사진 보내기",
    actionIcon: Camera,
  },
  {
    id: "bomgyeol",
    category: "플라워샵",
    clientName: "봄결 플라워",
    location: "경기도 양주시 옥정동",
    isReal: false,
    image: "/images/portfolio/bomgyeol.webp",
    problem: "꽃을 손질하느라 전화를 못 받는 동안에도 '얼마예요? 얼마나 커요? 오늘 되나요?' 묻는 DM이 끊이지 않았어요.",
    solution: "가격, 실제로 들었을 때의 크기, 당일 주문 마감 시간을 한 페이지에서 확인하도록 구성하고, 확인한 손님이 바로 네이버 예약으로 넘어가게 했습니다.",
    actionLabel: "네이버로 바로 예약",
    actionIcon: CalendarCheck,
  },
  {
    id: "forme",
    category: "미술학원",
    clientName: "포름미술학원",
    location: "경기도 의정부시 민락동",
    isReal: false,
    image: "/images/portfolio/forme.webp",
    problem: "'우리 아이가 뭘 배우는지 모르겠다'는 학부모님 걱정이 많아, 상담을 해도 등록까지 이어지기가 쉽지 않았어요.",
    solution: "매주 실기 기록 공유, 원장 직강, 반 정원 10명 같은 강점을 한눈에 보여 주고, 부담 없는 무료 실기 진단 예약으로 첫 방문을 이끌도록 설계했습니다.",
    actionLabel: "무료 실기 진단 예약",
    actionIcon: CalendarCheck,
  },
];

// 목업 화면 자동 스크롤 속도 (px/초): 이미지 길이가 달라도 같은 속도로 움직임
const SCROLL_SPEED = 90;

function PhoneScreen({ caseStudy }: { caseStudy: CaseStudy }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [distance, setDistance] = useState(0);

  // 이미지 실제 높이에서 화면 높이를 뺀 만큼만 스크롤 (빈 화면 없이 끝까지)
  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const image = imageRef.current;
      if (!viewport || !image || !image.complete) return;
      setDistance(Math.max(0, image.offsetHeight - viewport.clientHeight));
    };
    const image = imageRef.current;
    image?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      image?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [caseStudy.id]);

  return (
    <div ref={viewportRef} className="relative flex-1 overflow-hidden bg-white">
      <motion.img
        key={caseStudy.id}
        ref={imageRef}
        src={caseStudy.image}
        alt={`${caseStudy.clientName} 원페이지 화면`}
        className="w-full h-auto select-none"
        loading="lazy"
        decoding="async"
        draggable={false}
        initial={{ y: 0 }}
        animate={distance > 0 ? { y: -distance } : { y: 0 }}
        transition={
          distance > 0
            ? {
                duration: distance / SCROLL_SPEED,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5,
                delay: 1,
              }
            : { duration: 0 }
        }
      />
    </div>
  );
}

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);
  const currentCase = CASE_STUDIES.find((c) => c.id === activeTab) ?? CASE_STUDIES[0];
  const ActionIcon = currentCase.actionIcon;

  return (
    <section id="portfolio" className="relative bg-[#0A1222] text-white py-20 sm:py-32 overflow-hidden">
      {/* 백그라운드 앰비언트 글로우 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-180 h-180 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2">
            이렇게 만들어 드립니다
          </p>

          <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
            경기북부 사장님들의 매장, <br />
            <span>실제로 이렇게 만들어집니다.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep">
            예쁜 겉치레를 넘어 실제 전화와{" "}
            <span className="inline-block">예약이 꽂히는 구조.</span>
            <br className="max-lg:block hidden" />{" "}
            실제 고객 사례와 업종별 제작 예시로 확인해 보세요.
          </p>
        </div>

        {/* ─── 탭 네비게이션 ─── */}
        <div className="relative mb-6 sm:mb-10">
          <div role="tablist" aria-label="업종별 제작 사례" className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 pr-10 sm:pr-1 max-w-4xl mx-auto">
            {CASE_STUDIES.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={(e) => {
                    setActiveTab(item.id);
                    // 탭 줄 안에서만 가운데로 이동 (scrollIntoView는 바깥 섹션까지 밀어냄)
                    const tab = e.currentTarget;
                    const list = tab.parentElement;
                    list?.scrollTo({
                      left: tab.offsetLeft - (list.clientWidth - tab.clientWidth) / 2,
                      behavior: "smooth",
                    });
                  }}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive ? "text-white font-bold" : "text-slate-400 hover:text-slate-200 bg-slate-900/50 hover:bg-slate-900/90 border border-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-sky-500/25 via-blue-500/25 to-indigo-500/25 border border-sky-400/70 shadow-md shadow-sky-950/50"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.category}</span>
                </button>
              );
            })}
          </div>
          {/* 모바일: 옆으로 더 있다는 힌트 */}
          <div aria-hidden="true" className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#0A1222] to-transparent" />
        </div>

        {/* ─── 사례 카드 ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="bg-[#090E1A]/85 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* 좌측: 고민 → 솔루션 → 후기 */}
              <div className="order-2 lg:order-1 lg:col-span-7 w-full flex flex-col space-y-6">

                {/* 1. 매장 정보 + 사례 구분 */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-[13px] text-slate-400">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold ${
                      currentCase.isReal
                        ? "bg-sky-500/15 text-sky-300 border border-sky-400/30"
                        : "bg-white/5 text-slate-400 border border-white/10"
                    }`}
                  >
                    {currentCase.isReal ? "실제 고객 사례" : "제작 예시"}
                  </span>
                  <span className="font-semibold text-slate-200">
                    {currentCase.clientName}
                  </span>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{currentCase.location}</span>
                  </div>
                </div>

                {/* 2. 사장님의 고민 */}
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-rose-400 select-none">
                    사장님의 고민
                  </span>
                  <p className="text-[15px] sm:text-base text-slate-300 leading-relaxed break-keep pl-0.5">
                    {currentCase.problem}
                  </p>
                </div>

                {/* 3. 지음 솔루션 (가장 크게) */}
                <div className="flex flex-col items-start gap-2">
                  <span className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold tracking-tight text-sky-400 select-none">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    지음 솔루션
                  </span>
                  <h3 className="text-[17px] min-[390px]:text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight text-white leading-snug sm:leading-relaxed break-keep pl-0.5">
                    {currentCase.solution}
                  </h3>
                </div>

                {/* 4. 결과: 사장님 후기 (실제 사례만) */}
                {currentCase.review && (
                  <div className="pt-5 border-t border-white/10">
                    <Quote className="w-5 h-5 text-sky-400/40 mb-2 fill-sky-400/10" />
                    <p className="text-[14.5px] sm:text-[15px] text-slate-300 leading-relaxed break-keep">
                      "{currentCase.review.quote}"
                    </p>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500">
                      — {currentCase.review.author}
                    </p>
                  </div>
                )}
              </div>

              {/* 우측: 스마트폰 목업 (실제 페이지 이미지 자동 스크롤) */}
              <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center items-center py-2">
                <div className="relative w-full max-w-68.75 sm:max-w-74 rounded-[44px] bg-[#0c111d] p-3 border-4 border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.15)] ring-1 ring-white/15">

                  {/* 상단 다이내믹 아일랜드 */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                    <div className="w-2 h-2 rounded-full bg-[#121c33] border border-sky-500/40" />
                  </div>

                  {/* 스마트폰 내부 스크린 */}
                  <div className="relative rounded-[34px] overflow-hidden bg-black border border-white/10 h-120 sm:h-132 flex flex-col">
                    {/* 상태 표시줄 영역 */}
                    <div className="h-7 bg-black shrink-0" />

                    <PhoneScreen caseStudy={currentCase} />

                    {/* 모바일 엄지 영역 고정 CTA 버튼 */}
                    <div className="p-3 bg-slate-950/95 border-t border-white/10 z-20 shrink-0">
                      <div className="w-full py-2.5 px-3 rounded-xl bg-sky-500 text-slate-950 font-extrabold text-[11px] flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/25">
                        <ActionIcon className="w-3.5 h-3.5" />
                        <span>{currentCase.actionLabel}</span>
                      </div>
                    </div>

                    {/* 하단 홈 바 */}
                    <div className="py-1 flex justify-center bg-slate-950 z-20 shrink-0">
                      <div className="w-20 h-1 rounded-full bg-slate-700" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default PortfolioSection;
