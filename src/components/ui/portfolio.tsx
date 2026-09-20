import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  PhoneCall, 
  CalendarCheck,
  MessageCircle,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  location: string;
  headline: string;
  dialogue: {
    clientAsk: string;
    jieumAnswer: string;
  };
  review: {
    quote: string;
    author: string;
  };
  mockup: {
    heroImage: string;
    subImage: string;
    detailImage: string;
    storeName: string;
    heroTitle: string;
    actionLabel: string;
    actionIcon: typeof Navigation;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fnb",
    category: "베이커리 · 카페",
    clientName: "카페 오프루트",
    location: "경기도 양주시 옥정동",
    headline: "인스타 사진만 보던 손님을 주말 매장 방문객으로 직결",
    dialogue: {
      clientAsk: "인스타 보고 주차 되냐, 빵 언제 나오냐는 DM만 하루 종일 와서 일하기가 너무 힘들어요.",
      jieumAnswer: "첫 화면에 '주차 40대 완비 & 당일 10시 갓 구운 빵'을 3초 만에 각인시키고, 엄지 닿는 자리에 '네이버 지도 길찾기'를 박아 손님이 알아서 찾아오게 설계했습니다.",
    },
    review: {
      quote: "주차 되냐는 헛걸음 문의 전화가 싹 사라졌습니다. 손님들이 지도 찍고 알아서 찾아오세요.",
      author: "양주 옥정 카페 오프루트 김OO 대표"
    },
    mockup: {
      heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      subImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      storeName: "카페 오프루트",
      heroTitle: "숲속에서 즐기는\n당일 구운 천연발효빵",
      actionLabel: "네이버 지도 길찾기",
      actionIcon: Navigation,
    }
  },
  {
    id: "interior",
    category: "인테리어 · 시공",
    clientName: "바른디자인",
    location: "경기도 의정부시 민락동",
    headline: "단순 찔러보기가 아닌, 실제 시공 사진으로 신뢰를 굳히는 창구",
    dialogue: {
      clientAsk: "복잡한 견적 양식을 넣어두니 손님은 다 나가고, 전화로는 '대충 얼마냐' 흥정만 하네요.",
      jieumAnswer: "양식 다 걷어내고 실제 의정부·양주 아파트 시공 전후 갤러리만 투명하게 보여준 뒤, '대표 직통 전화' 버튼 하나로 1초 만에 연결되게 바꿨습니다.",
    },
    review: {
      quote: "시공 사례를 미리 다 확인하고 믿음이 생긴 상태로 전화 주시니 계약 성사율이 확 올랐습니다.",
      author: "의정부 바른디자인 박OO 대표"
    },
    mockup: {
      heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      subImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      storeName: "바른디자인",
      heroTitle: "숨은 추가금 없는\n투명 실측 정찰 인테리어",
      actionLabel: "대표 직접 상담 연결",
      actionIcon: PhoneCall,
    }
  },
  {
    id: "beauty",
    category: "1인 뷰티 · 살롱",
    clientName: "살롱 드 르네",
    location: "경기도 포천시 소흘읍",
    headline: "시술 중 놓치던 예약 전화를 24시간 네이버 예약으로 자동화",
    dialogue: {
      clientAsk: "1인 샵이라 머리 하느라 바쁠 때 전화가 오면 못 받아서 손님을 자꾸 놓칩니다.",
      jieumAnswer: "통화 필요 없이 첫 화면에서 첫 방문 20% 혜택을 확인하고, 1초 만에 네이버 실시간 예약창으로 연결되도록 자동화했습니다.",
    },
    review: {
      quote: "손님 머리 하느라 전화 못 받아도 밤새 예약이 차곡차곡 차 있어서 마음이 너무 든든합니다.",
      author: "포천 살롱 드 르네 이OO 원장"
    },
    mockup: {
      heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      subImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
      storeName: "살롱 드 르네",
      heroTitle: "100% 프라이빗 예약제\n손상 없는 1:1 퍼스널 케어",
      actionLabel: "네이버 실시간 예약",
      actionIcon: CalendarCheck,
    }
  },
  {
    id: "fitness",
    category: "피티 · 필라테스",
    clientName: "포커스 바디랩",
    location: "경기도 남양주시 별내동",
    headline: "가격 흥정 없는 1회 무료 체험권으로 신규 상담 신청 극대화",
    dialogue: {
      clientAsk: "인스타 광고는 많이 들어오는데, 수강료 물어보고는 그냥 다 이탈해 버려요.",
      jieumAnswer: "망설이는 손님의 장벽을 깨기 위해 '강사진 전문 이력'과 '1회 무료 정밀 체형 분석권'을 메인에 바로 배치해 결제를 부르는 계기를 만들었습니다.",
    },
    review: {
      quote: "체험권 신청 알림이 카톡으로 바로바로 꽂히니까 신규 회원 등록 전환이 2배 쉬워졌습니다.",
      author: "별내 포커스 바디랩 최OO 팀장"
    },
    mockup: {
      heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      subImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      storeName: "포커스 바디랩",
      heroTitle: "통증 없는 건강한 몸\n1:1 정밀 체형 교정 분석",
      actionLabel: "1회 무료 체험 신청",
      actionIcon: CalendarCheck,
    }
  },
  {
    id: "repair",
    category: "출장 수리 · 설비",
    clientName: "신속 누수설비",
    location: "경기도 파주시 야당동",
    headline: "긴급 상황 손님을 3초 만에 출장 요청으로 연결하는 모바일 직결 뷰",
    dialogue: {
      clientAsk: "누수 터져서 당황한 손님들이 복잡한 사이트에서 메뉴 찾다가 타 업체로 가버립니다.",
      jieumAnswer: "불필요한 인사말 다 치우고 '30분 긴급 출동 + 해결 못하면 0원'을 상단에 띄우고 화면 맨 아래 엄지 위치에 통화 버튼을 대문짝만하게 고정했습니다.",
    },
    review: {
      quote: "물이 새서 급한 분들이 고민할 틈도 없이 버튼 누르고 전화 주셔서 출동 건수가 크게 늘었습니다.",
      author: "파주 신속 누수설비 정OO 대표"
    },
    mockup: {
      heroImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
      subImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      storeName: "신속 누수설비",
      heroTitle: "누수 못 잡으면 0원\n100% 환불 책임 보증",
      actionLabel: "24시 긴급 출동 요청",
      actionIcon: PhoneCall,
    }
  }
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);
  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === activeTab);
  const currentCase = CASE_STUDIES[currentIndex] || CASE_STUDIES[0];

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
    setActiveTab(CASE_STUDIES[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CASE_STUDIES.length;
    setActiveTab(CASE_STUDIES[nextIdx].id);
  };

  return (
    <section id="portfolio" className="relative bg-[#070A12] text-white py-20 sm:py-32 border-t border-white/10 overflow-hidden">
      {/* 백그라운드 앰비언트 글로우 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-180 h-180 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2">
            실전 구축 사례 쇼케이스
          </p>

          <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
            경기북부 사장님들의 매장, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 font-extrabold">
              실제로 이렇게 만들어집니다.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep">
            예쁜 겉치레를 넘어 실제 전화와 예약이 꽂히는 구조. 지음이 완성한 업종별 실전 원페이지입니다.
          </p>
        </div>

        {/* ─── 탭 네비게이션 ─── */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 max-w-4xl mx-auto">
            {CASE_STUDIES.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
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
        </div>

        {/* ─── 메인 캐러셀 프레임 ─── */}
        <div className="relative">
          
          {/* 좌측 이전 버튼 (<) */}
          <button
            onClick={handlePrev}
            aria-label="이전 사례 보기"
            className="hidden sm:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0d1424]/90 hover:bg-sky-500/20 text-slate-400 hover:text-white border border-white/15 hover:border-sky-400/50 backdrop-blur-md items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-xl group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* 우측 다음 버튼 (>) */}
          <button
            onClick={handleNext}
            aria-label="다음 사례 보기"
            className="hidden sm:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0d1424]/90 hover:bg-sky-500/20 text-slate-400 hover:text-white border border-white/15 hover:border-sky-400/50 backdrop-blur-md items-center justify-center transition-all duration-200 z-30 cursor-pointer shadow-xl group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 메인 쇼케이스 프레임 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="bg-[#090E1A]/80 border border-white/10 rounded-3xl p-5 sm:p-9 lg:p-12 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* ─────────────────────────────────────────────────────────── */}
                {/* 좌측: 1:1 대화형 스토리 (아이콘 인박스 일체형) (lg:col-span-7) */}
                {/* ─────────────────────────────────────────────────────────── */}
                <div className="order-2 lg:order-1 lg:col-span-7 w-full flex flex-col justify-between space-y-6 sm:space-y-7">
                  <div>
                    {/* 상단 메타 (업체명 + 위치) - [1번 요구: 01/05 삭제 완료] */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-300">
                        {currentCase.clientName}
                      </span>
                      <span className="text-slate-600 text-xs">•</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{currentCase.location}</span>
                      </div>
                    </div>

                    {/* 대표 헤드라인 */}
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-slate-100 mb-6 break-keep leading-snug">
                      {currentCase.headline}
                    </h3>

                    {/* 💬 대화형 스토리 컨테이너 (아이콘을 박스 내부 헤더로 통합) */}
                    <div className="space-y-4">
                      
                      {/* 사장님의 사전 문의 카드 */}
                      <div className="bg-[#121826]/90 border border-white/10 rounded-2xl p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                            <MessageCircle className="w-3.5 h-3.5 text-rose-400" />
                          </div>
                          <span className="text-sm sm:text-[15px] font-bold text-rose-400">
                            사장님의 사전 문의
                          </span>
                        </div>
                        <p className="text-[13.5px] sm:text-[14.5px] text-slate-300 leading-relaxed break-keep pl-0.5">
                          "{currentCase.dialogue.clientAsk}"
                        </p>
                      </div>

                      {/* 지음의 솔루션 카드 */}
                      <div className="bg-[#0b172a]/95 border border-sky-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_0_25px_rgba(56,189,248,0.08)]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
                            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          </div>
                          <span className="text-sm sm:text-[15px] font-bold text-sky-300">
                            지음의 솔루션
                          </span>
                        </div>
                        <p className="text-[13.5px] sm:text-[14.5px] text-slate-100 font-medium leading-relaxed break-keep pl-0.5">
                          {currentCase.dialogue.jieumAnswer}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* 사장님 한줄 인터뷰 */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm sm:text-[15px] text-slate-300 italic break-keep leading-relaxed mb-1.5">
                      "{currentCase.review.quote}"
                    </p>
                    <span className="text-xs text-slate-400 block">
                      — {currentCase.review.author}
                    </span>
                  </div>

                  {/* 모바일 화면 전용: 하단 좌우 컨트롤러 바 (< >) */}
                  <div className="flex sm:hidden items-center justify-end gap-2 pt-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-full bg-slate-900 border border-white/15 text-slate-300 active:bg-slate-800"
                      aria-label="이전 사례"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-full bg-slate-900 border border-white/15 text-slate-300 active:bg-slate-800"
                      aria-label="다음 사례"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* ─────────────────────────────────────────────────────────── */}
                {/* 우측: 스마트폰 디바이스 목업 (오토 스크롤 웹뷰) (lg:col-span-5) */}
                {/* ─────────────────────────────────────────────────────────── */}
                <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center items-center py-2">
                  <div className="relative w-full max-w-68.75 sm:max-w-76.25 rounded-[46px] bg-[#0c111d] p-3 border-4 border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.15)] ring-1 ring-white/15">
                    
                    {/* 상단 다이내믹 아일랜드 */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                      <div className="w-2 h-2 rounded-full bg-slate-900" />
                      <div className="w-2 h-2 rounded-full bg-[#121c33] border border-sky-500/40" />
                    </div>

                    {/* 스마트폰 내부 스크린 */}
                    <div className="relative rounded-[36px] overflow-hidden bg-[#070b14] border border-white/10 h-125 sm:h-137.5 flex flex-col justify-between">
                      
                      {/* 브라우저 상단 주소 바 */}
                      <div className="pt-7 pb-2 px-3.5 bg-slate-950/90 border-b border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono z-20">
                        <span className="truncate max-w-32.5 text-slate-400">design-jieum.com</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </div>

                      {/* 오토 스크롤 뷰포트 */}
                      <div className="relative flex-1 overflow-hidden group">
                        <motion.div
                          key={currentCase.id}
                          initial={{ y: "0%" }}
                          animate={{ y: ["0%", "-52%", "0%"] }}
                          transition={{
                            duration: 10,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1.2,
                          }}
                          className="w-full flex flex-col space-y-3 p-3 select-none"
                        >
                          {/* 1. 상단 히어로 섹션 */}
                          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img 
                              src={currentCase.mockup.heroImage} 
                              alt={currentCase.mockup.storeName}
                              className="w-full h-44 sm:h-48 object-cover brightness-90" 
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                              <span className="text-[9px] font-bold text-sky-400 tracking-wider uppercase mb-0.5">
                                {currentCase.clientName}
                              </span>
                              <div className="text-white text-xs font-bold leading-snug whitespace-pre-line drop-shadow">
                                {currentCase.mockup.heroTitle}
                              </div>
                            </div>
                          </div>

                          {/* 2. 매장 특장점 갤러리 */}
                          <div className="rounded-xl bg-slate-900/80 border border-white/5 p-3 space-y-2">
                            <span className="text-[10px] font-bold text-slate-300 block">
                              실제 매장 전경 및 혜택
                            </span>
                            <div className="grid grid-cols-2 gap-1.5">
                              <img 
                                src={currentCase.mockup.subImage} 
                                alt="sub visual" 
                                className="w-full h-20 object-cover rounded-lg border border-white/5" 
                              />
                              <img 
                                src={currentCase.mockup.detailImage} 
                                alt="detail visual" 
                                className="w-full h-20 object-cover rounded-lg border border-white/5" 
                              />
                            </div>
                          </div>

                          {/* 3. 투명 정찰제 안내 카드 */}
                          <div className="rounded-xl bg-slate-900/80 border border-white/5 p-3 space-y-1.5">
                            <div className="flex justify-between items-center text-[10px]">
                              <span className="text-slate-400">정찰제 안내</span>
                              <span className="text-sky-400 font-bold">100% 투명 공개</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full" />
                            <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                          </div>
                        </motion.div>

                        {/* 하단 페이드 그라디언트 */}
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#070b14] to-transparent pointer-events-none z-10" />
                      </div>

                      {/* 모바일 엄지 영역 고정 CTA 버튼 */}
                      <div className="p-3 bg-slate-950/95 border-t border-white/10 z-20">
                        {(() => {
                          const ActionIcon = currentCase.mockup.actionIcon;
                          return (
                            <div className="w-full py-2.5 px-3 rounded-xl bg-sky-500 text-slate-950 font-extrabold text-[11px] flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/25">
                              <ActionIcon className="w-3.5 h-3.5" />
                              <span>{currentCase.mockup.actionLabel}</span>
                            </div>
                          );
                        })()}
                      </div>

                      {/* 하단 홈 바 */}
                      <div className="py-1 flex justify-center bg-slate-950 z-20">
                        <div className="w-20 h-1 rounded-full bg-slate-700" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default PortfolioSection;