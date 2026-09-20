import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundShader } from "@/components/ui/background-shader";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "양주 요식업·카페",
      "포천 제조·도소매",
      "의정부 병의원·학원",
      "동두천 공방·서비스",
      "경기북부 모든 사장님",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative w-full overflow-hidden min-h-dvh flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[#090D16]">
      {/* 1. Paper Design 공식 WebGL 셰이더 배경 레이어 */}
      <div className="absolute inset-0 z-0">
        <BackgroundShader className="w-full h-full opacity-60" />
      </div>

      {/* 2. 텍스트 가독성을 위한 다크 오버레이 및 하단 연결 그라데이션 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-[#090D16]/50 via-transparent to-[#090D16]"
      />

      {/* 3. 콘텐츠 레이어 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10 w-full my-auto">
        
        {/* 상단 라벨 */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 sm:mb-8 text-xs min-[376px]:text-sm sm:text-[15px] font-semibold tracking-tight text-slate-300/90"
        >
          경기북부 1:1 방문 맞춤 제작 · 33만 원 정찰제
        </motion.p>

        {/* 메인 타이틀 */}
        <h1 className="text-[2rem] leading-[1.2] min-[400px]:text-[2.35rem] min-[400px]:leading-[1.2] sm:text-5xl sm:leading-[1.18] md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white w-full">
          <div className="h-[1.28em] relative flex items-center justify-center overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleNumber}
                initial={{ y: 35, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -35, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="bg-linear-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent inline-block font-extrabold whitespace-nowrap"
              >
                {titles[titleNumber]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="block mt-1 sm:mt-2 text-slate-100 whitespace-nowrap">
            홈페이지의 모든 것
          </span>
        </h1>

        {/* 서브 카피: 일반 문구 가독성 복구 + 핵심 강조 문구 시각적 분리 */}
        <p className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg text-slate-200/85 leading-relaxed sm:leading-[1.75] tracking-[-0.015em] max-w-xl font-normal break-keep">
          <span className="sm:block">수백만 원 견적서도, 복잡한 기획서 작성도 필요 없습니다. </span>
          <span className="sm:block">예약 연결부터 손님 문의 유도까지, </span>
          <span className="sm:block">
            <strong className="font-extrabold text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.28)]">
              2주 만에 실전 영업용 원페이지
            </strong>
            <span className="text-slate-200/85">를 완성해 드립니다.</span>
          </span>
        </p>

        {/* CTA 버튼 세트 */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto h-13 px-8 text-[15px] font-bold tracking-tight gap-2.5 bg-blue-600 hover:bg-blue-500 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.35)] transition-all active:scale-95 cursor-pointer"
            asChild
          >
            <a
              href="https://pf.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>카톡으로 1분 문의하기</span>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-13 px-7 text-[15px] font-medium tracking-tight gap-2 border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            asChild
          >
            <a href="#problem">
              <span>고민하는 이유</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero };
export default Hero;