import { motion, type Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-[#05070D] text-white py-24 sm:py-32 border-t border-white/10 overflow-hidden">
      {/* 앰비언트 글로우 백라이트 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 sm:w-220 h-160 sm:h-220 bg-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* 상단 라벨 */}
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="text-sm lg:text-[15px] font-semibold tracking-tight text-slate-400 mb-2"
        >
          마지막 망설임이 내일의 매출을 바꿉니다
        </motion.p>

        {/* 메인 헤드라인 (454px 이하 4줄 분리 + 폰트 확대) */}
        <h2 className="text-[24px] min-[390px]:text-[26px] min-[455px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.38] sm:leading-[1.3] text-white mb-5">
          <motion.span
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="block text-slate-200"
          >
            <span className="inline-block">검색하고 들어온 손님이</span>
            <br className="min-[455px]:hidden" />{" "}
            <span className="inline-block">그냥 나가지 않도록,</span>
          </motion.span>
          <motion.span
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="block text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-indigo-300"
          >
            <span className="inline-block">망설이던 발길을</span>
            <br className="min-[455px]:hidden" />{" "}
            <span className="inline-block">우리 매장으로 이끕니다.</span>
          </motion.span>
        </h2>

        {/* 전환 유도 서브 카피 */}
        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-10 break-keep"
        >
          인스타·블로그 광고나 플레이스로 기껏 유입된 손님, 그냥 나가면 광고비만 날아갑니다. 매장의 장점을 확실하게 각인시키는 원페이지 하나로 흩어지던 손님을 실제 매장 방문과 전화 예약으로 묶어두세요.
        </motion.p>

        {/* 단일 고전환 카카오톡 CTA 버튼 */}
        <div className="flex justify-center max-w-sm mx-auto">
          <a
            href="http://pf.kakao.com/_IuxfaX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4.5 px-8 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-xl shadow-sky-500/25 transition-all duration-200 active:scale-[0.99] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" />
            <span>카톡으로 1분 견적·상담 받기</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default CtaSection;