import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles,
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
    desc: "양주, 의정부, 포천 등 사장님의 실제 오프라인 영업 반경에 맞춰 네이버 서치어드바이저와 구글 검색 엔진 메타 태그를 누락 없이 꼼꼼하게 등록합니다.",
    highlight: "지역 키워드 검색 시 포털 노출 기반 무상 구축",
  },
  {
    icon: Smartphone,
    tag: "첫인상 3초",
    title: "이탈을 막는 상단 혜택 훅",
    desc: "손님은 3초 안에 나갈지 말지 결정합니다. 뻔한 인사말 대신 사장님 매장만의 독보적인 혜택과 전문성을 첫 화면에 즉시 각인시켜 끝까지 읽게 만듭니다.",
    highlight: "첫 화면 이탈률 최소화 · 체류 시간 확보",
  },
  {
    icon: Layers,
    tag: "본질 집중",
    title: "전환 중심 설계, 예쁜 페이지만이 아닙니다",
    desc: "아무리 겉모습이 화려해도 문의가 오지 않으면 쓸모가 없습니다. 손님이 어떤 순서로 정보를 봐야 지갑을 여는지 철저하게 행동 심리를 계산하여 배치합니다.",
    highlight: "겉치레 디자인 탈피 · 실제 매출을 부르는 정보 구조화",
  },
  {
    icon: MousePointerClick,
    tag: "행동 유도",
    title: "엄지손가락 3초 행동 유도",
    desc: "마음이 움직였을 때 버튼을 찾으러 위아래로 헤매면 손님은 나갑니다. 모바일 화면 최하단 엄지손가락 반경에 전화와 상담 버튼을 항시 띄워 즉각 누르게 합니다.",
    highlight: "실제 매장 방문 및 예약 전환율 극대화",
  },
  {
    icon: Navigation,
    tag: "오프라인 유입",
    title: "원클릭 네이버 지도 길찾기 연동",
    desc: "주소를 복사해서 내비에 붙여넣는 귀찮음을 없앱니다. 터치 한 번으로 네이버 지도 앱 또는 카카오내비로 바로 연결되어 실제 매장 발걸음으로 이어집니다.",
    highlight: "지도 검색 ➔ 길안내 즉시 실행으로 방문율 극대화",
  },
  {
    icon: MessageCircle,
    tag: "24시간 접수",
    title: "영업시간 외 문의를 잡는 톡 연동",
    desc: "전화를 걸기 부담스럽거나 퇴근 후 늦은 밤에 검색한 손님도 놓치지 않습니다. 네이버 톡톡이나 카카오톡 실시간 상담창으로 부담 없이 문의를 남기게 만듭니다.",
    highlight: "야간 및 주말에도 잠재 고객 문의 자동 수집",
  },
  {
    icon: MessageSquareCheck,
    tag: "운영 안심",
    title: "카톡 1줄로 끝나는 신속 대응 케어",
    desc: "다루기도 힘든 관리자 페이지를 억지로 공부하실 필요 없습니다. 가격표나 공지 수정이 필요할 때 카톡으로 사진과 문구만 남겨주시면 디렉터가 확인 후 빠르게 대처합니다.",
    highlight: "의무 고정 관리비 0원 · 실제 작업 건별 투명 청구",
  },
];

export function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const xTranslate = useTransform(scrollYProgress, [0.04, 0.96], ["0%", "-76%"]);

  return (
    <section 
      ref={targetRef} 
      id="features" 
      className="relative bg-[#05070D] text-white h-[460vh] border-t border-slate-900"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 좌측 고정 텍스트 */}
          <div className="lg:col-span-4 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs sm:text-sm font-medium mb-5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>실전 원페이지의 엔진</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.035em] leading-[1.3] text-slate-100 mb-5 break-keep text-balance">
              화려함보다 중요한 건, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300">
                손님이 움직이는 구조
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep text-pretty">
              보기만 좋은 갤러리형 웹사이트는 매출을 만들지 못합니다. 방문자가 읽고, 신뢰하고, 결국 전화나 예약 버튼을 누를 수밖에 없도록 심리적 전환 장치를 설계했습니다.
            </p>
          </div>

          {/* 우측 가로 슬라이딩 카드 (7대 전환 엔진) */}
          <div className="lg:col-span-8 overflow-hidden py-4">
            <motion.div 
              style={{ x: xTranslate }}
              className="flex gap-6 w-max"
            >
              {ENGINE_FEATURES.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="w-77.5 sm:w-95 rounded-2xl bg-[#090E1A]/95 border border-slate-800/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/60 shrink-0 hover:border-sky-500/40 transition-colors group"
                  >
                    <div>
                      {/* 상단 태그 & 아이콘 */}
                      <div className="flex items-center justify-between mb-7">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300">
                          {feat.tag}
                        </span>
                      </div>

                      {/* 타이틀 & 본문 */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 break-keep text-balance">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed break-keep text-pretty mb-6">
                        {feat.desc}
                      </p>
                    </div>

                    {/* 하단 강조 혜택 */}
                    <div className="pt-4 border-t border-slate-800/80 text-xs font-medium text-sky-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
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