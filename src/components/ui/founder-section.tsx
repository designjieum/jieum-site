import { motion, type Variants } from "framer-motion";

interface BrandStory {
  result: string;
  context: string;
}

// 론칭부터 함께한 브랜드와, 이미 자리잡은 뒤 합류한 브랜드를 구분해 표기
const BRAND_STORIES: BrandStory[] = [
  { result: "월 매출 1억 달성", context: "브랜드 론칭부터 함께한 사장님" },
  { result: "아마존·월마트 진출 준비", context: "브랜드 론칭부터 함께한 사장님" },
  { result: "네이버스토어 리뷰 35만 개 이상", context: "성장 단계에서 홈페이지 제작 참여" },
  { result: "해외 시장 안착", context: "성장 단계에서 홈페이지 제작 참여" },
];

const fadeUp: Variants = {
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

export function FounderSection() {
  return (
    <section id="founder" className="relative bg-[#05070D] text-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-16">

        {/* ─── 좌측: 제목 & 서명 ─── */}
        <div className="lg:col-span-5">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2"
          >
            대표 소개
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-[22px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 break-keep"
          >
            <span className="text-sky-400">사장님의 마음</span>을
            <br />
            누구보다 잘 압니다.
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="hidden lg:block mt-8 text-sm text-slate-400"
          >
            디자인 지음 대표 <span className="text-base font-bold text-white ml-1">김재협</span>
          </motion.p>
        </div>

        {/* ─── 우측: 이야기 & 함께한 브랜드 ─── */}
        <div className="lg:col-span-7">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-4 text-slate-300/90 text-[15px] sm:text-base leading-relaxed break-keep"
          >
            <p>
              안녕하세요, 디자인 지음 대표 김재협입니다. 화장품·가구 OEM부터 반려견 간식·영양제까지, 줄곧 제조업 현장에서 이제 막 시작하는 브랜드들의 홈페이지를 만들어 왔습니다.
            </p>
            <p>
              새로 시작한 브랜드가 자리 잡기까지 넘어야 하는 고비들을 가까이서 함께 겪었기에 압니다. 사장님께 필요한 건 화려한 기술이 아니라 오늘 들어오는 예약 한 건, 문의 한 통이라는 것을요. 그래서 만들기 전에 먼저 사장님과 이야기하고, 손님이 전화를 거는 이유를 한 페이지에 담습니다.
            </p>
          </motion.div>

          {/* 함께한 브랜드 이야기 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-[13px] font-semibold tracking-tight text-sky-400 mb-4">
              홈페이지로 함께한 브랜드 이야기
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BRAND_STORIES.map((story) => (
                <li
                  key={story.result}
                  className="rounded-2xl bg-white/3 border border-white/10 px-4 py-3.5"
                >
                  <p className="text-[15px] sm:text-base font-bold text-white tracking-tight break-keep">
                    {story.result}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-[13px] text-slate-400 break-keep">
                    {story.context}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11.5px] sm:text-xs text-slate-500 leading-relaxed break-keep">
              ※ 각 브랜드의 성과는 제품력과 사장님의 노력으로 이룬 결과이며, 지음은 홈페이지 제작으로 함께했습니다.
            </p>
          </motion.div>

          {/* 서명 (모바일) */}
          <p className="lg:hidden mt-8 text-sm text-slate-400">
            디자인 지음 대표 <span className="text-base font-bold text-white ml-1">김재협</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default FounderSection;
