import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "준비해야 할 사진이나 원고가 거의 없는데 제작이 가능한가요?",
    answer: "네, 걱정하지 않으셔도 됩니다. 현재 운영 중이신 네이버 플레이스나 인스타그램 링크만 전달해 주시면, 매장으로 직접 찾아가 1:1 인터뷰를 통해 매장의 강점과 스토리를 수집합니다. 손님을 끄는 전문 카피라이팅과 레이아웃 구성은 지음이 전담합니다.",
  },
  {
    question: "제작 기간은 얼마나 걸리나요?",
    answer: "1:1 매장 인터뷰 완료 후 평균 1~2주 내외로 최종 오픈까지 완료됩니다. 디자인 시안 확인 후 사장님의 피드백을 반영하는 수정 2회가 포함되어 있으며, 오픈 즉시 네이버와 구글 검색 등록까지 마무리해 드립니다.",
  },
  {
    question: "정말로 매달 나가는 관리비나 호스팅 비용이 없나요?",
    answer: "네, 매달 의무적으로 청구되는 고정 유지보수비는 0원입니다. 사이트 주소 유지를 위한 도메인(.com/.kr) 등록 기관 실비(연 약 2만 원 내외) 외에는 추가 고정 지출이 없으며, 추후 문구나 사진 수정이 필요하실 때만 건별(1~2만 원 선)로 편하게 요청하시면 됩니다.",
  },
  {
    question: "인스타그램이나 네이버 플레이스가 있는데 꼭 랜딩페이지가 필요한가요?",
    answer: "SNS나 플레이스는 고객을 유입시키는 채널이지만, 방문 직전 '여기가 정말 믿을 만한 곳인가?'를 고민할 때 손님이 이탈하기 쉽습니다. 고전환 원페이지는 흩어진 정보와 후기를 한곳에 집중 정리하여 방문과 전화·예약 버튼으로 곧장 연결하는 종결 장치 역할을 합니다.",
  },
  {
    question: "양주, 의정부, 포천, 동두천 외 다른 지역은 제작이 불가한가요?",
    answer: "아닙니다. 전국 어디서든 제작 가능합니다. 다만 1:1 대면 현장 방문 인터뷰는 경기북부(양주·의정부·포천·동두천) 중심 무료로 운영되며, 그 외 지역은 거리에 따라 대면 방문이 어려울 수 있어 유선 전화와 카카오톡으로 똑같이 꼼꼼하게 소통하며 완성도 높게 제작해 드립니다.",
  },
  {
    question: "제작 완료 후 메뉴 가격이나 사진을 바꾸고 싶을 땐 어떻게 하나요?",
    answer: "매달 관리비를 내지 않으셔도 카카오톡으로 편하게 말씀해 주시면 됩니다. 단순 텍스트나 이미지 교체는 건당 1~2만 원 선의 부담 없는 비용으로 당일~익일 내에 빠르게 반영해 드립니다.",
  },
  {
    question: "세금계산서나 현금영수증 발행이 가능한가요?",
    answer: "네, 100% 정상 발행 가능합니다. 안내해 드린 33만 원은 부가세(VAT)가 포함된 최종 정찰 금액이며, 결제 시 사업자등록증이나 발급용 번호를 알려주시면 즉시 발행해 드립니다.",
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#05070D] text-white py-24 sm:py-32 border-t border-white/10 overflow-hidden">
      {/* 백그라운드 앰비언트 글로우 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 sm:w-200 h-160 sm:h-200 bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── 섹션 헤더 ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-1.5 sm:mb-2"
          >
            자주 묻는 질문
          </motion.p>

          <h2 className="text-[24px] min-[390px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.35] sm:leading-[1.3] text-slate-100 mb-3 break-keep">
            <motion.span
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block"
            >
              궁금하신 점을
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerVariants}
              className="block text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300 font-extrabold"
            >
              미리 투명하게 정리했습니다.
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
            제작 전 사장님들이 가장 많이 여쭤보신 핵심 질문에 솔직하게 답해 드립니다.
          </motion.p>
        </div>

        {/* ─── 아코디언 리스트 ─── */}
        <div className="space-y-3.5 max-w-2xl mx-auto">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                className={`rounded-2xl border transition-all duration-200 backdrop-blur-xl ${
                  isOpen
                    ? "bg-[#0a101f] border-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.08)]"
                    : "bg-[#080c18]/80 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs sm:text-sm font-mono font-bold shrink-0 mt-0.5 ${
                      isOpen ? "text-sky-400" : "text-slate-500"
                    }`}>
                      Q.
                    </span>
                    <span className={`text-[14.5px] sm:text-base font-bold leading-snug break-keep ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    isOpen 
                      ? "bg-sky-500/15 border-sky-400/40 text-sky-300 rotate-180" 
                      : "bg-white/5 border-white/10 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                        <div className="pt-3 border-t border-white/5 flex items-start gap-3">
                          <span className="text-xs sm:text-sm font-mono font-bold text-sky-400 shrink-0 mt-0.5">
                            A.
                          </span>
                          <p className="text-[13.5px] sm:text-[14.5px] text-slate-300 leading-relaxed break-keep">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;