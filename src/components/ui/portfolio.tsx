import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight,
  Navigation, 
  PhoneCall, 
  CalendarCheck,
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  location: string;
  headline: string;
  problem: string;
  solution: string;
  specs: {
    label: string;
    value: string;
  }[];
  review: {
    quote: string;
    author: string;
  };
  mockup: {
    tag: string;
    storeName: string;
    subName: string;
    heroTitle: string;
    heroSub: string;
    badges: string[];
    actionLabel: string;
    actionIcon: typeof Navigation;
    accentGlow: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fnb",
    category: "베이커리 · 카페",
    clientName: "카페 오프루트",
    location: "경기도 양주시 옥정동",
    headline: "인스타 사진만 보던 손님을 주말 매장 방문객으로 직결",
    problem: "인스타 DM으로 주차 공간과 영업시간을 묻는 헛걸음 문의가 반복됨",
    solution: "첫 화면 '주차 40대 완비' 3초 각인 및 하단 네이버 길찾기 고정 배치",
    specs: [
      { label: "페이지 로딩", value: "0.8초" },
      { label: "방문 동선", value: "1-Click 길찾기" },
      { label: "제작 기간", value: "7일 완결" },
    ],
    review: {
      quote: "주차 되냐는 전화가 싹 사라졌습니다. 손님들이 지도 찍고 알아서 찾아오세요.",
      author: "양주 옥정 카페 오프루트 김OO 대표"
    },
    mockup: {
      tag: "BAKERY & CAFE",
      storeName: "CAFE OFF-ROUTE",
      subName: "양주 옥정 대형 브런치 베이커리",
      heroTitle: "숲속에서 즐기는\n당일 구운 천연발효빵",
      heroSub: "자연과 함께하는 프라이빗 힐링 공간",
      badges: ["단독 주차 40대 완비", "유기농 천연발효종", "반려동물 야외 동반"],
      actionLabel: "네이버 지도 길찾기",
      actionIcon: Navigation,
      accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
    }
  },
  {
    id: "interior",
    category: "인테리어 · 시공",
    clientName: "바른디자인",
    location: "경기도 의정부시 민락동",
    headline: "견적 찔러보기가 아닌, 실제 시공 사진으로 신뢰를 굳히는 창구",
    problem: "복잡한 문의 양식으로 손님이 이탈하고, 단순 견적 흥정 통화만 반복됨",
    solution: "모바일 최적화 실측 갤러리 투명 공개 및 1초 원터치 대표 직통 연결",
    specs: [
      { label: "페이지 로딩", value: "0.9초" },
      { label: "상담 동선", value: "대표 직통 전화" },
      { label: "제작 기간", value: "10일 완결" },
    ],
    review: {
      quote: "시공 사례를 미리 다 확인하고 전화 주시니 계약 성사율이 확 올라갔습니다.",
      author: "의정부 바른디자인 박OO 대표"
    },
    mockup: {
      tag: "INTERIOR & REMODELING",
      storeName: "BARUN DESIGN",
      subName: "의정부·양주 아파트 전문 리모델링",
      heroTitle: "숨은 추가금 없는\n투명 실측 정찰 인테리어",
      heroSub: "하자보수 2년 무상 보증 & 공사 전 3D 시안",
      badges: ["경기북부 전지역 무료 실측", "책임 감리 시공", "정찰제 공사 계약"],
      actionLabel: "대표 직접 상담 연결",
      actionIcon: PhoneCall,
      accentGlow: "from-sky-500/20 via-blue-500/10 to-transparent",
    }
  },
  {
    id: "beauty",
    category: "1인 뷰티 · 살롱",
    clientName: "살롱 드 르네",
    location: "경기도 포천시 소흘읍",
    headline: "시술 중 놓치던 예약 전화를 24시간 네이버 예약으로 자동화",
    problem: "1인 원장 혼자 시술하는 동안 예약 전화를 받지 못해 손님이 이탈함",
    solution: "첫 방문 혜택 안내 및 24시간 네이버 실시간 예약 딥링크 전면 배치",
    specs: [
      { label: "페이지 로딩", value: "0.7초" },
      { label: "예약 방식", value: "24H 무인 자동" },
      { label: "제작 기간", value: "6일 완결" },
    ],
    review: {
      quote: "손님 머리 하느라 전화 못 받아도 밤새 예약이 차 있어서 든든합니다.",
      author: "포천 살롱 드 르네 이OO 원장"
    },
    mockup: {
      tag: "1:1 HAIR BOUTIQUE",
      storeName: "SALON DE RENEE",
      subName: "포천 송우 프리미엄 헤어 살롱",
      heroTitle: "나만을 위한 100% 예약제\n손상 없는 퍼스널 디자인",
      heroSub: "1인 프라이빗 룸에서 편안하게 진행되는 시술",
      badges: ["첫 방문 20% 특별 혜택", "프리미엄 정품 약제", "1:1 전담 맞춤 케어"],
      actionLabel: "네이버 실시간 예약",
      actionIcon: CalendarCheck,
      accentGlow: "from-rose-500/20 via-pink-500/10 to-transparent",
    }
  },
  {
    id: "fitness",
    category: "피티 · 필라테스",
    clientName: "포커스 바디랩",
    location: "경기도 남양주시 별내동",
    headline: "가격 흥정 없는 1회 무료 체험권으로 신규 상담 신청 극대화",
    problem: "SNS 광고를 보고 들어온 손님들이 수강료 정보가 없어 그냥 나감",
    solution: "강사진 프로필 투명 공개 + 1회 체험 예약 폼을 화면 중앙에 배치",
    specs: [
      { label: "페이지 로딩", value: "0.8초" },
      { label: "전환 장치", value: "1회 체험권" },
      { label: "제작 기간", value: "8일 완결" },
    ],
    review: {
      quote: "체험권 신청이 카톡으로 바로 들어오니 신규 등록 전환이 2배 쉬워졌습니다.",
      author: "별내 포커스 바디랩 최OO 팀장"
    },
    mockup: {
      tag: "PILATES & PT LAB",
      storeName: "FOCUS BODY LAB",
      subName: "남양주 별내 체형 교정 전문 센터",
      heroTitle: "통증 없는 건강한 몸,\n1:1 정밀 체형 분석",
      heroSub: "물리치료사 출신 강사진의 과학적 트레이닝",
      badges: ["1회 체험권 즉시 예약", "체형 분석 리포트 무료", "개인 샤워룸 완비"],
      actionLabel: "1회 체험 신청하기",
      actionIcon: CalendarCheck,
      accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
    }
  },
  {
    id: "repair",
    category: "출장 수리 · 설비",
    clientName: "신속 누수설비",
    location: "경기도 파주시 야당동",
    headline: "긴급 상황 손님을 3초 만에 출장 요청으로 연결하는 모바일 직결 뷰",
    problem: "물이 새는 긴급 상황 손님이 복잡한 메뉴 사이트에서 헤매다 타사로 이탈",
    solution: "화면 상/하단에 24시간 출동 직통 전화 버튼을 초대형 엄지 UI로 고정",
    specs: [
      { label: "페이지 로딩", value: "0.6초" },
      { label: "연결 동선", value: "3초 긴급 출동" },
      { label: "제작 기간", value: "5일 완결" },
    ],
    review: {
      quote: "누수 터진 고객님들이 고민할 틈 없이 바로 전화 주셔서 출동 건수가 늘었습니다.",
      author: "파주 신속 누수설비 정OO 대표"
    },
    mockup: {
      tag: "24H EMERGENCY PLUMBING",
      storeName: "SHINSOK PLUMBING",
      subName: "파주·고양 전지역 30분 긴급 출동",
      heroTitle: "누수·배관 해결 못하면\n비용 0원 100% 환불 보증",
      heroSub: "최신 첨단 청음 탐지기 보유 & 배상책임보험 가입",
      badges: ["30분 내 현장 출동", "못 찾으면 출장비 0원", "당일 시공 완결"],
      actionLabel: "24시 긴급 출동 요청",
      actionIcon: PhoneCall,
      accentGlow: "from-cyan-500/20 via-sky-500/10 to-transparent",
    }
  }
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);
  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === activeTab);
  const currentCase = CASE_STUDIES[currentIndex] || CASE_STUDIES[0];

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CASE_STUDIES.length;
    setActiveTab(CASE_STUDIES[nextIdx].id);
  };

  const nextCase = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <section id="portfolio" className="relative bg-[#070A12] text-white py-20 sm:py-32 border-t border-slate-900/80 overflow-hidden">
      {/* 백그라운드 앰비언트 글로우 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-180 h-180 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>실전 구축 사례 쇼케이스</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.035em] leading-[1.28] text-slate-100 mb-3 break-keep text-balance">
            경기북부 사장님들의 매장, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300">
              실제로 이렇게 만들어집니다
            </span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed break-keep text-pretty">
            화려한 기교보다 중요한 것은 '손님의 다음 행동'입니다. 각 업종 특성에 맞춰 실제 방문과 예약으로 연결시킨 원페이지 구조를 확인하세요.
          </p>
        </div>

        {/* ─── 탭 네비게이션 ─── */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 max-w-4xl mx-auto">
            {CASE_STUDIES.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-sky-500/25 via-blue-500/25 to-indigo-500/25 border border-sky-400/60 shadow-md shadow-sky-950/50"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── 메인 쇼케이스 프레임 ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="bg-[#090E1A]/80 border border-slate-800/80 rounded-3xl p-4 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* ─── 1) [모바일 우선 노출: order-1 / 데스크톱: order-2 (5열)] 스마트폰 디바이스 목업 ─── */}
              <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center items-center py-2">
                {/* Tailwind v4 정규 클래스 max-w-70 sm:max-w-76 적용 */}
                <div className="relative w-full max-w-70 sm:max-w-76 rounded-[44px] sm:rounded-[48px] bg-slate-950 p-3 sm:p-3.5 border-4 border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.12)] ring-1 ring-white/10">
                  
                  {/* 상단 다이내믹 아일랜드 노치 */}
                  <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 w-20 sm:w-22 h-3.5 sm:h-4 bg-slate-900 rounded-full z-30 flex items-center justify-between px-2.5">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-950" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0d1424] border border-sky-500/30" />
                  </div>

                  {/* 스마트폰 뷰포트 */}
                  <div className="relative rounded-[34px] sm:rounded-[38px] overflow-hidden bg-[#070B14] border border-slate-800/80 text-white min-h-125 sm:min-h-145 flex flex-col justify-between">
                    
                    {/* 브라우저 상단 주소 바 */}
                    <div className="pt-7 sm:pt-8 pb-2 px-3.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 font-mono">
                      <span className="truncate max-w-30 sm:max-w-35 text-slate-500">design-jieum.com</span>
                      <ExternalLink className="w-3 h-3 text-slate-600" />
                    </div>

                    {/* 내부 화면 내용 */}
                    <div className="p-3.5 sm:p-4.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* 헤더 태그 */}
                        <div className="mb-3 sm:mb-4">
                          <span className="text-[9px] font-mono tracking-widest text-sky-400 font-bold uppercase">
                            {currentCase.mockup.tag}
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-100 tracking-tight leading-tight">
                            {currentCase.mockup.storeName}
                          </h4>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {currentCase.mockup.subName}
                          </p>
                        </div>

                        {/* 메인 히어로 비주얼 카드 */}
                        <div className={`w-full rounded-2xl bg-linear-to-b ${currentCase.mockup.accentGlow} border border-slate-800/90 p-3.5 sm:p-4.5 mb-3 sm:mb-4 relative overflow-hidden`}>
                          <div className="text-white text-[11px] sm:text-xs font-bold leading-snug whitespace-pre-line mb-1 sm:mb-1.5 drop-shadow">
                            {currentCase.mockup.heroTitle}
                          </div>
                          <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
                            {currentCase.mockup.heroSub}
                          </p>
                        </div>

                        {/* 핵심 혜택 리스트 */}
                        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                          {currentCase.mockup.badges.map((badge, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-slate-300">
                              <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                              <span className="whitespace-nowrap truncate">{badge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 모바일 엄지 영역 고정 전환 CTA 바 */}
                      <div className="pt-2.5 sm:pt-3 border-t border-slate-800/80">
                        {(() => {
                          const ActionIcon = currentCase.mockup.actionIcon;
                          return (
                            <div className="w-full py-2 sm:py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[10px] sm:text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/25 transition-colors">
                              <ActionIcon className="w-3.5 h-3.5" />
                              <span className="whitespace-nowrap">{currentCase.mockup.actionLabel}</span>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* 하단 홈 바 */}
                    <div className="py-1 sm:py-1.5 flex justify-center bg-slate-950">
                      <div className="w-20 sm:w-24 h-1 rounded-full bg-slate-700" />
                    </div>
                  </div>

                </div>
              </div>

              {/* ─── 2) [모바일 후속 전개: order-2 / 데스크톱: order-1 (7열)] 전략 대시보드 ─── */}
              <div className="order-2 lg:order-1 lg:col-span-7 w-full flex flex-col justify-between space-y-5 sm:space-y-7">
                <div>
                  {/* 상단 뱃지 & 위치: 320px 대응 줄바꿈 방어 */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 whitespace-nowrap shrink-0">
                      {currentCase.clientName}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 whitespace-nowrap">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{currentCase.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-100 mb-4 sm:mb-5 break-keep text-balance leading-snug">
                    {currentCase.headline}
                  </h3>

                  {/* 사장님의 고민 ➔ 지음의 고전환 설계 대조 박스 */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block mb-1">
                        사장님의 고민
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-keep">
                        {currentCase.problem}
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-sky-950/20 border border-sky-500/30">
                      <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider block mb-1">
                        지음의 고전환 설계
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed break-keep">
                        {currentCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 기술 품질 지표: Tailwind v4 정규 min-h-14 sm:min-h-16 적용 */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 py-1">
                  {currentCase.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-2 sm:p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center flex flex-col justify-center min-h-14 sm:min-h-16">
                      <div className="text-[11px] sm:text-sm font-bold text-sky-300 mb-0.5 tracking-tight whitespace-nowrap truncate">
                        {spec.value}
                      </div>
                      <div className="text-[9px] sm:text-[11px] text-slate-400 whitespace-nowrap truncate">
                        {spec.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 사장님 한줄 인터뷰 */}
                <div className="pt-2 border-t border-slate-800/70">
                  <p className="text-xs sm:text-sm text-slate-300 italic break-keep leading-relaxed mb-1">
                    "{currentCase.review.quote}"
                  </p>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    — {currentCase.review.author}
                  </span>
                </div>

                {/* 하단 중앙: 다음 사례 버튼 */}
                <div className="pt-2 sm:pt-3 flex justify-center">
                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-sky-300 hover:text-white border border-slate-700/80 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm group"
                  >
                    <span className="truncate">다음 사례: {nextCase.category} ({nextCase.clientName})</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}