import { ArrowDown, ArrowRight } from "lucide-react";
import { CASES, FLOORS, PORTFOLIO, VACANT_FLOOR, type FloorId } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";
import { cn } from "@/lib/utils";

interface PortfolioHeroProps {
  floor: FloorId | null;
  onSelect: (floor: FloorId | null) => void;
}

// 상가 입구의 층별 안내판: 줄 하나 = 층(업종군) 하나, 누르면 그 층 가게만 보여 줌
export function PortfolioHero({ floor, onSelect }: PortfolioHeroProps) {
  // 안내판은 실제 건물처럼 위층부터. 맨 위는 비어 있는 공실 층(상담 CTA)
  const floors = [...FLOORS].reverse();
  let rowIndex = 0;
  // 줄마다 차례로 불이 들어옴 (CSS 애니메이션이라 스크립트가 늦어도 바로 시작)
  const light = () => ({ animationDelay: `${0.1 + rowIndex++ * 0.06}s` });

  return (
    <section id="top" aria-labelledby="portfolio-title" className="pt-16">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:grid lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:items-end lg:gap-16">
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

        <nav aria-labelledby="board-title" className="mt-12 border-2 border-ink bg-ink text-wall lg:mt-0">
          <div className="flex items-baseline justify-between border-b border-wall/20 px-4 py-4 sm:px-6">
            <h2 id="board-title" className="text-[15px] font-bold">{PORTFOLIO.boardTitle}</h2>
            <span className="text-[13px] font-semibold text-wall/60 tabular-nums">
              {CASES.length}
              {PORTFOLIO.countSuffix}
            </span>
          </div>

          <ul>
            {/* 맨 위 공실: 불 켜진 칸, 마지막 상담 장면으로 이동 */}
            <li className="border-b border-wall/20">
              <a href="#contact" className={cn(ROW, "bg-sign text-ink hover:bg-sign")}>
                <span className={ROW_INNER} style={light()}>
                  <span className={cn(CODE, "border-ink")}>{VACANT_FLOOR}</span>
                  <span className="font-bold">{PORTFOLIO.vacancy.label}</span>
                  <Leader className="border-ink/30" />
                  <span className="text-[15px] font-semibold">{PORTFOLIO.vacancy.sub}</span>
                  <ArrowRight aria-hidden="true" className={cn(ARROW, "group-hover:translate-x-0.5 group-hover:translate-y-0")} />
                </span>
              </a>
            </li>

            {floors.map((f) => {
              const count = CASES.filter((c) => c.floor === f.id).length;
              const selected = floor === f.id;
              return (
                <li key={f.id} className="border-b border-wall/20">
                  <button type="button" aria-pressed={selected} onClick={() => onSelect(f.id)} className={ROW}>
                    <span className={ROW_INNER} style={light()}>
                      <span className={cn(CODE, selected ? "border-sign bg-sign text-ink" : "border-wall/30")}>{f.id}F</span>
                      <span className="font-bold break-keep">{f.name}</span>
                      <Leader className="border-wall/20" />
                      <span className="text-[15px] text-wall/70 tabular-nums">
                        {count}
                        {PORTFOLIO.countSuffix}
                      </span>
                      <ArrowDown aria-hidden="true" className={ARROW} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button type="button" aria-pressed={floor === null} onClick={() => onSelect(null)} className={ROW}>
            <span className={ROW_INNER} style={light()}>
              <span className={cn(CODE, "text-[13px]", floor === null ? "border-sign bg-sign text-ink" : "border-wall/30")}>
                {PORTFOLIO.allCode}
              </span>
              <span className="font-bold">{PORTFOLIO.allLabel}</span>
              <Leader className="border-wall/20" />
              <span className="text-[15px] text-wall/70 tabular-nums">
                {CASES.length}
                {PORTFOLIO.countSuffix}
              </span>
              <ArrowDown aria-hidden="true" className={ARROW} />
            </span>
          </button>
        </nav>
      </div>
    </section>
  );
}

// 층 이름과 가게 수를 잇는 점선 (실제 안내판의 점선)
function Leader({ className }: { className: string }) {
  return <span aria-hidden="true" className={cn("mx-1 min-w-4 flex-1 translate-y-1 border-b-2 border-dotted", className)} />;
}

const ROW =
  "group flex h-16 w-full cursor-pointer items-center px-4 text-left text-[17px] transition-colors duration-200 ease-out-expo hover:bg-wall/10 focus-visible:outline-wall focus-visible:-outline-offset-4 sm:px-6";
const ROW_INNER = "flex w-full items-center gap-3 animate-sign-light motion-reduce:animate-none sm:gap-4";
const CODE =
  "inline-flex h-9 w-12 shrink-0 items-center justify-center border-2 text-[17px] font-black tabular-nums tracking-[-0.02em] transition-colors duration-200 ease-out-expo";
const ARROW = "size-5 shrink-0 transition-transform duration-200 ease-out-expo group-hover:translate-y-0.5";
