import { motion, type Variants } from "framer-motion";
import { Link2, LayoutTemplate, Rocket, CheckCircle2 } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: typeof Link2;
  highlights: string[];
  ownerBurden: string;
}

const PROCESS_STEPS: Step[] = [
  {
    step: "STEP 01",
    icon: Link2,
    title: "링크 1개 전달 & 1:1 인터뷰",
    desc: "기획서나 원고를 쓰실 필요 없습니다. 운영 중인 네이버 플레이스나 인스타 링크만 보내주시면 매장으로 직접 찾아가 1:1 인터뷰를 통해 매장의 핵심 강점을 발굴합니다.",
    highlights: ["복잡한 문서 준비 0건", "사장님 매장 1:1 대면 인터뷰", "사진 및 핵심 강점 수집"],
    ownerBurden: "사장님 준비: 링크 전달 10초",
  },
  {
    step: "STEP 02",
    icon: LayoutTemplate,
    title: "고전환 원페이지 맞춤 기획 & 제작",
    desc: "손님이 매장의 장점을 한눈에 파악하고, 엄지 위치에서 예약·전화 버튼으로 자연스럽게 이어지도록 설계합니다. 전문 카피라이팅과 모바일 반응형 디자인을 지음이 전담합니다.",
    highlights: ["모바일 최적화 전환 동선", "매장 사진 비주얼 리터칭", "전문 카피라이팅 전담 작성"],
    ownerBurden: "지음 전담: 기획부터 코딩까지 완결",
  },
  {
    step: "STEP 03",
    icon: Rocket,
    title: "오픈 & 로컬 포털 검색 연동",
    desc: "제작 완료 후 지역 상권 키워드로 네이버와 구글 포털에 검색 등록을 마칩니다. 운영 중 문구 및 사진 수정은 카톡으로 편하게 요청하시면 신속하게 처리합니다.",
    highlights: ["네이버·구글 포털 검색 등록", "의무 관리비 0원 (수정 건별 정산)", "도메인 및 네이버 지도 연동"],
    ownerBurden: "오픈 소요: 1~2주 완결",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.18,
      ease: "easeOut",
    },
  }),
};

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#05070D] text-white py-24 sm:py-32 border-t border-white/10 overflow-hidden">
      {/* 앰비언트 글로우 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-180 bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.p 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2"
          >
            간결한 3단계 제작 과정
          </motion.p>

          <h2 className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-2 sm:mb-3 lg:mb-4 break-keep">
            <motion.span 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block"
            >
              복잡한 준비 없이,
            </motion.span>
            <motion.span 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 font-extrabold"
            >
              링크 하나로 완성됩니다.
            </motion.span>
          </h2>

          <motion.p 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep"
          >
            원고 작성도 기획서도 필요 없습니다. 매장 링크만 전달해 주시면 첫 기획부터 완성합니다.
          </motion.p>
        </div>

        {/* ─── 3단계 타임라인 레이아웃 (1024px 이하 1열 세로 스택, 1024px 이상 3열 가로 배치) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-2xl lg:max-w-none mx-auto">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-[#090E1A]/80 border border-white/10 hover:border-sky-500/40 transition-colors duration-300 backdrop-blur-xl group"
              >
                <div className="flex flex-col">
                  {/* 상단 STEP 넘버링 & 아이콘 */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:scale-105 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* 단계 타이틀 (1024px 이상에서만 높이 일치) */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 break-keep leading-snug min-h-0 lg:min-h-14 flex items-start">
                    {item.title}
                  </h3>

                  {/* 상세 설명 (1024px 이상에서만 높이 일치) */}
                  <p className="text-[13.5px] sm:text-sm text-slate-400 leading-relaxed break-keep mb-6 min-h-0 lg:min-h-24">
                    {item.desc}
                  </p>

                  {/* 핵심 포함 항목 리스트 */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="break-keep">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단 사장님 안심 라벨 태그 */}
                <div className="pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span className="text-sky-300/90 font-semibold">{item.ownerBurden}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;