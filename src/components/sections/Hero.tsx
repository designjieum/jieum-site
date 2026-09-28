import { ArrowDown } from "lucide-react";
import { HERO } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

export function Hero() {
  let wordIndex = 0;

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-12 sm:px-8 sm:pt-10 sm:pb-12">
        <h1>
          <span className="block text-[15px] font-semibold text-muted sm:text-lg text-balance break-keep">
            {HERO.kicker}
          </span>

          {/* 간판 제목: 단어마다 마스크 안에서 튀어 올라옴 */}
          <span className="mt-6 block text-[clamp(2.5rem,12vw,8rem)] leading-[1.04] font-black tracking-[-0.05em] sm:mt-8">
            {HERO.titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => {
                  const delay = 0.1 + wordIndex++ * 0.08;
                  return (
                    <span key={word.text} className={`${"join" in word && word.join ? "" : "mr-[0.22em]"} inline-block overflow-hidden pb-[0.06em] align-bottom last:mr-0`}>
                      <span className="relative inline-block animate-word-rise" style={{ animationDelay: `${delay}s` }}>
                        {"sign" in word && word.sign ? <SignWord text={word.text} delay={delay + 0.45} /> : word.text}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-8 max-w-[34em] text-[17px] leading-[1.7] text-muted sm:text-xl break-keep text-pretty">
          {HERO.desc.map((line) => (
            <span key={line} className="sm:block">
              {line}{" "}
            </span>
          ))}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <CtaLink className="w-full sm:w-auto" />
          <a
            href={HERO.secondary.href}
            className="inline-flex h-11 items-center justify-center gap-1.5 text-[15px] font-semibold text-ink underline decoration-unlit decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out-expo hover:decoration-ink sm:justify-start"
          >
            {HERO.secondary.label}
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* 합계 줄: 견적서 맨 아래 줄처럼 괘선으로 구분 */}
        <dl className="mt-12 grid grid-cols-3 border-t-2 border-ink">
          {HERO.facts.map((fact, i) => (
            <div key={fact.label} className={`flex flex-col-reverse justify-end pt-4 sm:pt-5 ${i > 0 ? "border-l border-unlit pl-3 sm:pl-8" : ""}`}>
              <dt className="mt-1 text-[13px] leading-snug text-muted sm:text-[15px] break-keep">{fact.label}</dt>
              <dd className="text-2xl font-black tracking-[-0.04em] tabular-nums sm:text-4xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// "간판이" 단어: 회색 판 위에 주황 불이 깜빡이며 켜짐 (opacity만 사용)
function SignWord({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="relative inline-block bg-unlit px-[0.1em]">
      <span aria-hidden="true" className="absolute inset-0 bg-sign animate-sign-light" style={{ animationDelay: `${delay}s` }} />
      <span className="relative">{text}</span>
    </span>
  );
}
