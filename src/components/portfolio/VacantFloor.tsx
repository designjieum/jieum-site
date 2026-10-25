import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO, SITE, VACANT_FLOOR } from "@/lib/content";
import { useMediaQuery } from "@/lib/use-media-query";
import { CtaLink } from "@/components/sections/CtaLink";

// ④ 마지막 장면: 안내판 맨 위의 공실 층. #contact가 보이면 모바일 하단 고정 바가 숨음
export function VacantFloor() {
  const reduce = useReducedMotion();
  // 마우스가 없는 기기는 화면에 들어올 때 불이 켜지고, 마우스가 있으면 올렸을 때 켜짐
  const touch = useMediaQuery("(hover: none)");

  return (
    <section id="contact" aria-labelledby="vacant-title" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="group relative overflow-hidden border-2 border-dashed border-muted px-6 py-12 transition-colors duration-300 ease-out-expo hover:border-solid hover:border-ink sm:px-12 sm:py-16">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo group-hover:opacity-100"
            initial={false}
            whileInView={touch && !reduce ? { opacity: [0, 1, 0.25, 1] } : undefined}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3, times: [0, 0.3, 0.55, 1], ease: "linear" }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <span className="inline-flex h-14 w-20 items-center justify-center self-start border-2 border-ink text-2xl font-black tracking-[-0.02em] tabular-nums lg:self-center">
              {VACANT_FLOOR}
            </span>
            <div>
              <h2 id="vacant-title" className="text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.2] font-black tracking-[-0.04em] break-keep text-balance">
                {PORTFOLIO.closing.title}
              </h2>
              <p className="mt-4 max-w-[32em] text-[17px] leading-[1.7] break-keep text-pretty">{PORTFOLIO.closing.desc}</p>
            </div>
            <div>
              <CtaLink className="w-full sm:w-auto" />
              <p className="mt-3 text-[15px] font-semibold">{SITE.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
