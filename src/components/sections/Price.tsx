import { motion, useReducedMotion } from "framer-motion";

import { PRICE } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

// 비용: "밤의 간판" (먹색 배경 위 불 켜진 가격 간판 + 견적서식 포함 내역)
export function Price() {
  const reduce = useReducedMotion();

  return (
    <section
      id="price"
      aria-labelledby="price-title"
      className="bg-ink py-20 text-wall sm:py-28 [&_:focus-visible]:outline-wall"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 id="price-title" className="text-[clamp(2rem,6vw,4rem)] leading-[1.12] font-black tracking-[-0.045em] break-keep">
          {PRICE.titleLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h2>
        <p className="mt-5 max-w-[30em] text-[17px] leading-[1.7] text-wall/70 break-keep text-pretty sm:text-lg">{PRICE.desc}</p>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          {/* 가격 간판: 기본은 불 켜진 상태, 화면에 들어올 때 어두운 막이 깜빡이며 걷힘 */}
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="relative overflow-hidden bg-sign p-6 text-ink sm:p-8">
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-ink"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [1, 0, 0.7, 0] }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, times: [0, 0.35, 0.55, 1], ease: "linear" }}
                />
              )}
              <p className="text-[15px] font-bold">{PRICE.sign.label}</p>
              {/* 금액 크기는 간판 폭 기준(cqw)이라 어느 화면에서도 한 줄에 들어감 */}
              <div className="@container">
                <p className="mt-2 text-[clamp(2.5rem,17cqw,4.75rem)] leading-none font-black whitespace-nowrap tracking-[-0.05em] tabular-nums">
                  {PRICE.sign.amount}
                </p>
              </div>
              <ul className="mt-6 border-t-2 border-ink">
                {PRICE.sign.rows.map((row) => (
                  <li key={row} className="border-b border-ink/30 py-2.5 text-lg font-bold">
                    {row}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] font-semibold">{PRICE.sign.note}</p>
            </div>
          </div>

          {/* 포함 내역: 견적서 항목처럼 점선으로 "포함"까지 이어짐 */}
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <h3 className="text-[15px] font-bold text-wall/70">{PRICE.includesTitle}</h3>
            <ol className="mt-3 border-t-2 border-wall">
              {PRICE.includes.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-wall/15 py-4 sm:py-5"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="w-6 shrink-0 text-[15px] font-bold text-wall/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] leading-[1.5] font-semibold break-keep sm:text-xl">{item}</span>
                  <span aria-hidden="true" className="min-w-6 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-wall/25" />
                  <span className="shrink-0 text-[15px] font-bold">{PRICE.includedTag}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <Extras />
          </div>
        </div>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <div>
      <h3 className="text-xl font-black tracking-[-0.03em]">{PRICE.extrasTitle}</h3>
      <ul className="mt-4 space-y-2 text-[17px] leading-[1.6] text-wall/80">
        {PRICE.extras.map((extra) => (
          <li key={extra} className="flex gap-2 break-keep">
            <span aria-hidden="true">·</span>
            {extra}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[15px] font-semibold">
        {PRICE.receipt}
      </p>
      <CtaLink label={PRICE.cta} className="mt-8 w-full sm:w-auto" />
    </div>
  );
}
