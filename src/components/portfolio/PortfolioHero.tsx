import { CASES, PORTFOLIO, STREET, type CaseStudy } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";
import { caseLabel } from "@/lib/case-label";
import { cn } from "@/lib/utils";

interface PortfolioHeroProps {
  onOpen: (caseStudy: CaseStudy) => void;
}

const heroCases = PORTFOLIO.heroCaseIds
  .map((id) => CASES.find((c) => c.id === id))
  .filter((c): c is CaseStudy => !!c);

// 사례 페이지 첫 화면: 왼쪽 제목·설명·상담 버튼, 오른쪽 실제 고객 가게 4곳 (데스크톱만, 엇갈린 2열)
export function PortfolioHero({ onOpen }: PortfolioHeroProps) {
  return (
    <section id="top" aria-labelledby="portfolio-title" className="pt-16">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-8 sm:pt-20 sm:pb-16 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-16 lg:pb-24">
        <div>
          <h1 id="portfolio-title">
            <span className="block text-[15px] font-semibold text-muted break-keep text-balance sm:text-lg">{PORTFOLIO.kicker}</span>
            <span className="mt-6 block text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] font-black tracking-[-0.045em] break-keep">
              {PORTFOLIO.titleLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </span>
          </h1>
          <p className="mt-6 max-w-[26em] text-[17px] leading-[1.7] text-muted break-keep text-pretty sm:text-lg">
            {PORTFOLIO.desc(CASES.length)}
          </p>
          <CtaLink className="mt-8 w-full sm:w-auto" />
        </div>

        {/* 실제 고객 가게: 간판(업종·이름) + 홈페이지 화면. 누르면 자세히 보기 */}
        <ul aria-label={PORTFOLIO.heroCasesLabel} className="hidden lg:grid lg:w-full lg:max-w-[560px] lg:grid-cols-2 lg:gap-6 lg:justify-self-end">
          {heroCases.map((c, i) => (
            <li key={c.id} className={cn(i % 2 === 1 && "translate-y-12")}>
              <button
                type="button"
                onClick={() => onOpen(c)}
                aria-label={`${c.name} ${STREET.detailLabel}`}
                className="group/hero flex w-full cursor-pointer flex-col text-left"
              >
                <span className="relative block border-2 border-ink bg-unlit px-4 py-2">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo group-hover/hero:opacity-100 group-focus-visible/hero:opacity-100"
                  />
                  <span className="relative block truncate text-[13px] font-semibold">{caseLabel(c)}</span>
                  <span className="relative block truncate text-[17px] font-black tracking-[-0.03em]">{c.name}</span>
                </span>
                <span className="relative block aspect-square overflow-hidden border-x-2 border-b-2 border-ink bg-unlit">
                  <img
                    src={c.thumb}
                    alt=""
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out-expo group-hover/hero:scale-[1.03]"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
