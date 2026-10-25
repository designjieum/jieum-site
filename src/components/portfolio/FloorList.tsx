import { motion, useReducedMotion } from "framer-motion";
import { CASES, FLOORS, PORTFOLIO, type CaseStudy, type FloorId } from "@/lib/content";
import { Storefront } from "@/components/sections/Storefront";
import { CtaLink } from "@/components/sections/CtaLink";
import { cn } from "@/lib/utils";

interface FloorListProps {
  floor: FloorId | null;
  onSelect: (floor: FloorId | null) => void;
  onOpen: (caseStudy: CaseStudy) => void;
}

// 층마다 실제 고객을 앞에, 나머지는 content.ts 순서대로
const byFloor = (id: FloorId) => {
  const shops = CASES.filter((c) => c.floor === id);
  return [...shops.filter((c) => c.isReal), ...shops.filter((c) => !c.isReal)];
};

// ② 층 바(헤더 아래 고정) + ③ 층별 가게. "전체"면 1층부터 차례로, 층을 고르면 그 층만
export function FloorList({ floor, onSelect, onOpen }: FloorListProps) {
  const reduce = useReducedMotion();
  const shown = floor ? FLOORS.filter((f) => f.id === floor) : FLOORS;
  const current = FLOORS.find((f) => f.id === floor);

  const chips: { id: FloorId | null; code: string; name: string; count: number }[] = [
    { id: null, code: PORTFOLIO.allCode, name: PORTFOLIO.allLabel, count: CASES.length },
    ...FLOORS.map((f) => ({ id: f.id, code: `${f.id}F`, name: f.name, count: byFloor(f.id).length })),
  ];

  return (
    <section id="floors" aria-labelledby="floors-title" className="pb-24 sm:pb-32">
      <h2 id="floors-title" className="sr-only">{PORTFOLIO.floorsTitle}</h2>

      {/* ② 층 바: 이 구역을 지나는 동안 헤더 아래에 붙어 있음 */}
      <div className="sticky top-16 z-30 border-y-2 border-ink bg-wall">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
          <div
            role="group"
            aria-label={PORTFOLIO.barLabel}
            className="-mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {chips.map((chip) => {
              const selected = floor === chip.id;
              return (
                <button
                  key={chip.code}
                  type="button"
                  aria-pressed={selected}
                  aria-label={`${chip.name} ${chip.count}${PORTFOLIO.countSuffix}`}
                  onClick={() => onSelect(chip.id)}
                  className={cn(
                    "inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 border-2 border-ink px-4 text-[15px] font-bold whitespace-nowrap transition-colors duration-200 ease-out-expo",
                    selected ? "bg-ink text-wall" : "hover:bg-unlit"
                  )}
                >
                  <span>{chip.code}</span>
                  <span className={cn("font-semibold tabular-nums", selected ? "text-wall/70" : "text-muted")}>{chip.count}</span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="hidden shrink-0 text-[15px] font-semibold text-muted lg:block">
            {PORTFOLIO.barLabel}{" "}
            <span className="text-ink">
              {current ? `${current.id}F ${current.name}` : PORTFOLIO.allCode}
            </span>
          </p>
        </div>
      </div>

      {/* ③ 층별 가게: 층을 바꾸면 목록이 짧게 다시 나타남 */}
      <motion.div
        key={floor ?? "all"}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-8"
      >
        {shown.map((f) => {
          const shops = byFloor(f.id);
          return (
            <section key={f.id} aria-labelledby={`floor-${f.id}`} className="pt-36 first:pt-12 sm:first:pt-16">
              <h3 id={`floor-${f.id}`} className="flex items-center gap-4 border-b-2 border-ink pb-4">
                <span className="inline-flex h-11 w-14 shrink-0 items-center justify-center bg-ink text-xl font-black tracking-[-0.02em] text-wall tabular-nums">
                  {f.id}F
                </span>
                <span className="text-[clamp(1.5rem,4vw,2rem)] leading-[1.25] font-black tracking-[-0.03em] break-keep">{f.name}</span>
                <span className="ml-auto text-[15px] font-semibold text-muted tabular-nums">
                  {shops.length}
                  {PORTFOLIO.countSuffix}
                </span>
              </h3>
              <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shops.map((c) => (
                  <Storefront key={c.id} caseStudy={c} reduce={!!reduce} onOpen={() => onOpen(c)} />
                ))}
                <VacantSlot floorName={f.name} />
              </div>
            </section>
          );
        })}
      </motion.div>
    </section>
  );
}

// 층마다 마지막 칸: 불 꺼진 빈 점포. 마우스를 올리면 간판에 불이 들어옴
function VacantSlot({ floorName }: { floorName: string }) {
  return (
    <div className="group/slot flex flex-col">
      <div className="relative border-2 border-dashed border-muted px-4 py-3 transition-colors duration-300 ease-out-expo group-hover/slot:border-solid group-hover/slot:border-ink">
        <span aria-hidden="true" className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo group-hover/slot:opacity-100" />
        <p className="relative text-[13px] font-semibold text-muted transition-colors duration-300 ease-out-expo group-hover/slot:text-ink">
          {floorName} · {PORTFOLIO.vacantSlot.sign}
        </p>
        <p className="relative text-xl font-black tracking-[-0.04em]">{PORTFOLIO.vacantSlot.title}</p>
      </div>
      <div className="flex flex-col justify-center gap-6 border-x-2 border-b-2 border-dashed border-muted px-4 py-10 sm:aspect-[3/4]">
        <p className="text-[17px] leading-[1.6] font-bold break-keep text-pretty">{PORTFOLIO.vacantSlot.desc}</p>
        <CtaLink size="sm" label={PORTFOLIO.vacantSlot.cta} className="w-full" />
      </div>
    </div>
  );
}
