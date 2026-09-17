import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveLinesBackground } from "@/components/ui/wave-lines-background";

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
    <section className="relative w-full overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#090D16]">
      {/* 유려한 파도 결 라인 애니메이션 */}
      <WaveLinesBackground />

      {/* 하단 섹션으로 이어지는 그라데이션 페이드 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#090D16]"
      />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* 상단 타깃 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-[0_0_20px_rgba(37,99,235,0.08)] backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-semibold tracking-tight text-slate-300">
            경기북부 밀착 1:1 방문 맞춤 제작 · 33만 원 정찰제
          </span>
        </motion.div>

        {/* 롤링 타이틀 */}
        <h1 className="text-[2.6rem] leading-[1.18] sm:text-6xl sm:leading-[1.15] md:text-7xl font-extrabold tracking-[-0.04em] text-white">
          <div className="h-[1.28em] relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleNumber}
                initial={{ y: 35, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -35, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="bg-linear-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent inline-block font-extrabold"
              >
                {titles[titleNumber]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="block mt-1 sm:mt-2 text-slate-100">
            홈페이지의 모든 것
          </span>
        </h1>

        {/* 서브 카피 */}
        <p className="mt-7 text-base sm:text-lg md:text-xl text-slate-400 leading-[1.72] tracking-[-0.015em] max-w-xl break-all font-normal">
          수백만 원 견적서도, 복잡한 기획서 작성도 필요 없습니다. <br className="hidden sm:inline" />
          예약 연결부터 손님 문의 유도까지, <strong className="font-semibold text-slate-200">2주 만에 실전 영업용 페이지</strong>를 완성해 드립니다.
        </p>

        {/* 확정된 CTA 버튼 세트 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto h-13 px-8 text-[15px] font-bold tracking-tight gap-2.5 bg-blue-600 hover:bg-blue-500 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.35)] transition-all active:scale-95"
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
            className="w-full sm:w-auto h-13 px-7 text-[15px] font-medium tracking-tight gap-2 border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all"
            asChild
          >
            <a href="#problem">
              <span>왜 33만 원일까?</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero };