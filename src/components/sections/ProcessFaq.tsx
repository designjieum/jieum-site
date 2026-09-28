import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ, PROCESS, SITE } from "@/lib/content";

// 간판 다는 3단계 + 자주 묻는 질문 (연회색 배경 한 덩어리)
export function ProcessFaq() {
  return (
    <div className="bg-unlit">
      <Process />
      <Faq />
    </div>
  );
}

// 3단계: 카드 대신 하나의 줄자(타임라인). 화면에 들어오면 선이 그어짐
function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" aria-labelledby="process-title" className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 id="process-title" className="text-[clamp(2rem,6vw,4rem)] leading-[1.12] font-black tracking-[-0.045em]">
          {PROCESS.title}
        </h2>

        <ol className="relative mt-12 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* 줄자 선: 모바일은 세로, 데스크톱은 가로 */}
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top bg-ink lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto lg:origin-left"
            initial={reduce ? false : { scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          {PROCESS.steps.map((step, i) => (
            <li key={step.title} className="relative pl-10 lg:pt-12 lg:pl-0">
              <span aria-hidden="true" className="absolute top-0 left-0 size-4 border-2 border-ink bg-sign" />
              <p className="text-[15px] font-bold text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] sm:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-[22em] text-[17px] leading-[1.7] break-keep text-pretty">{step.desc}</p>
              <p className="mt-4 inline-block border-2 border-ink px-3 py-1 text-[15px] font-bold">{step.tag}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="faq-title" className="text-[clamp(2rem,6vw,4rem)] leading-[1.12] font-black tracking-[-0.045em]">
            {FAQ.title}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-muted break-keep">{FAQ.desc}</p>
          <a
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center text-[15px] font-bold underline decoration-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out-expo hover:decoration-ink"
          >
            {FAQ.more} →
          </a>
        </div>

        <ul className="border-t-2 border-ink">
          {FAQ.items.map((item, i) => {
            const open = openIndex === i;
            const buttonId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <li key={item.q} className="border-b border-ink/20">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-11 w-full items-start justify-between gap-4 py-5 text-left text-lg leading-[1.5] font-bold break-keep sm:text-xl"
                  >
                    <span>{item.q}</span>
                    <Plus
                      aria-hidden="true"
                      className={`mt-1 size-5 shrink-0 transition-transform duration-300 ease-out-expo ${open ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                  <p className="animate-answer-in pr-9 pb-6 text-[17px] leading-[1.75] break-keep text-pretty">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
