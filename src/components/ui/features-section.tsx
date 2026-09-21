import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MapPin,
  Smartphone,
  Layers,
  MousePointerClick,
  Navigation,
  MessageCircle,
  MessageSquareCheck
} from "lucide-react";

interface FeatureCard {
  icon: typeof MousePointerClick;
  tag: string;
  title: string;
  desc: string;
  highlight: string;
}

const ENGINE_FEATURES: FeatureCard[] = [
  {
    icon: MapPin,
    tag: "상권 노출",
    title: "경기북부 로컬 검색 밀착 세팅",
    desc: "양주·의정부·포천 등 매장 상권에 맞춰 네이버와 구글 포털 메타 태그를 누락 없이 꼼꼼하게 등록합니다.",
    highlight: "네이버·구글 로컬 검색 최적화(SEO) 기본 세팅",
  },
  {
    icon: Smartphone,
    tag: "첫인상 3초",
    title: "이탈을 막는 상단 혜택 훅",
    desc: "손님은 3초 안에 결정합니다. 뻔한 인사말 대신 매장만의 차별화된 혜택과 전문성을 첫 화면에 각인시킵니다.",
    highlight: "첫 화면 이탈 방지 · 방문자 체류 시간 확보",
  },
  {
    icon: Layers,
    tag: "본질 집중",
    title: "문의를 부르는 전환 동선 설계",
    desc: "화려하기만 한 페이지는 소용없습니다. 손님이 어떤 정보를 봐야 예약과 구매로 이어지는지 철저히 계산해 배치합니다.",
    highlight: "보여주기식을 넘어 실제 매출 중심 설계",
  },
  {
    icon: MousePointerClick,
    tag: "행동 유도",
    title: "엄지손가락 원터치 행동 유도",
    desc: "마음이 움직였을 때 찾기 힘들면 나갑니다. 모바일 최하단 엄지 반경에 전화와 상담 버튼을 고정합니다.",
    highlight: "전화 상담 및 예약 전환율 극대화",
  },
  {
    icon: Navigation,
    tag: "오프라인 유입",
    title: "원클릭 네이버 지도 길찾기",
    desc: "주소를 복사해 내비에 붙여넣는 번거로움을 없앱니다. 터치 한 번으로 네이버 지도 앱 길안내로 직결됩니다.",
    highlight: "지도 검색에서 매장 방문 직결", // ➔ 한 줄 압축
  },
  {
    icon: MessageCircle,
    tag: "24시간 접수",
    title: "야간 문의를 잡는 실시간 톡 연동",
    desc: "전화가 부담스럽거나 늦은 밤 검색한 손님도 놓치지 않도록 네이버 톡톡과 카카오톡 상담창을 상시 연결합니다.",
    highlight: "영업시간 외에도 잠재 고객 문의 자동 수집",
  },
  {
    icon: MessageSquareCheck,
    tag: "운영 안심",
    title: "카톡 1줄로 끝나는 신속 케어",
    desc: "복잡한 관리자 화면을 배울 필요 없습니다. 가격표나 공지 수정은 카톡으로 사진만 보내주시면 빠르고 꼼꼼하게 처리해 드립니다.",
    highlight: "의무 관리비 0원 · 실제 작업 건별 투명 정산",
  },
];

export function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);

  // 화면 크기에 맞게 실제 밀어내야 할 정확한 픽셀(px) 계산
  useEffect(() => {
    const calculateDistance = () => {
      if (carouselTrackRef.current) {
        const track = carouselTrackRef.current;
        // 캐러셀 전체 길이에서 보이는 뷰포트 너비를 뺀 "정확한 잉여 이동 거리"
        const distance = track.scrollWidth - track.clientWidth;
        setMaxScrollDistance(Math.max(0, distance));
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 0.05에서 출발하여 0.82에 마지막 카드가 우측 끝선에 1픽셀 오차 없이 딱 멈춤
  // 0.82 ~ 0.95 구간 동안 편안하게 멈춰있다가 다음 섹션으로 이동
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.82, 0.95, 1],
    [0, -maxScrollDistance, -maxScrollDistance, -maxScrollDistance]
  );

  const progressScaleX = useTransform(scrollYProgress, [0.05, 0.82, 0.95, 1], [0, 1, 1, 1]);

  return (
    <section 
      ref={targetRef} 
      id="features" 
      className="relative bg-[#05070D] text-white h-[460vh] border-t border-white/10"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-[1122px]:grid min-[1122px]:grid-cols-12 gap-6 min-[1122px]:gap-14 justify-center">
          
          {/* 상단/좌측 설명 텍스트 영역 */}
          <div className="min-[1122px]:col-span-5 z-10 flex flex-col justify-center shrink-0">
            
            <p className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2">
              실전 원페이지의 엔진
            </p>

            <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
              화려함보다 중요한 건,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 font-extrabold">
                손님이 움직이는 구조
              </span>
            </h2>

            {/* 서브 카피 */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep mb-4 min-[1122px]:mb-7 max-w-2xl">
              보기만 좋은 사이트는 매출을 만들지 못합니다. 어렵게 검색해 찾아온 손님이 그냥 뒤로 가지 않도록, 망설이던 발길을 우리 매장으로 이끕니다.
            </p>

            {/* 인디케이터 구성 */}
            <div className="pt-1 min-[1122px]:pt-2 flex flex-col gap-2 w-full min-[1122px]:max-w-xs">
              <span className="text-xs font-medium text-slate-400">
                넘겨서 손님 붙잡는 비결 보기
              </span>
              
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  style={{ scaleX: progressScaleX, transformOrigin: "left" }}
                  className="h-full bg-linear-to-r from-sky-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
              </div>
            </div>

          </div>

          {/* 하단/우측 가로 슬라이딩 카드 캐러셀 컨테이너 */}
          <div 
            ref={carouselTrackRef} 
            className="min-[1122px]:col-span-7 overflow-hidden py-2 min-[1122px]:py-4 w-full"
          >
            <motion.div 
              style={{ x }}
              className="flex gap-4 sm:gap-6 w-max"
            >
              {ENGINE_FEATURES.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="w-72 min-[390px]:w-78 sm:w-90 rounded-2xl bg-[#090E1A]/95 border border-white/10 p-5 min-[390px]:p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-black/60 shrink-0 hover:border-sky-500/40 transition-colors group"
                  >
                    <div>
                      {/* 상단 태그 & 아이콘 */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                          {feat.tag}
                        </span>
                      </div>

                      {/* 타이틀 & 본문 */}
                      <h3 className="text-[17px] sm:text-lg font-bold text-slate-100 mb-2 break-keep">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed break-keep mb-5">
                        {feat.desc}
                      </p>
                    </div>

                   {/* 하단 강조 혜택 (앞쪽 점 삭제) */}
                    <div className="pt-3.5 border-t border-white/10 text-[13.5px] sm:text-[14px] font-semibold text-sky-300 flex items-center">
                      <span className="break-keep">{feat.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;