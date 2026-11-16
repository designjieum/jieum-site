import { useRef, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GROUPS, PORTFOLIO, casesInGroup, type CaseStudy, type GroupId } from "@/lib/content";
import { Storefront } from "@/components/sections/Storefront";
import { cn } from "@/lib/utils";

interface CategoryListProps {
  group: GroupId | null;
  onSelect: (group: GroupId | null) => void;
  onOpen: (caseStudy: CaseStudy) => void;
}

// ② 카테고리 탭(헤더 아래 고정) + ③ 사례 목록 3열 (태블릿 2열, 모바일 1열). 카테고리 안 순서는 content.ts의 GROUP_ORDER. "전체"면 카테고리 순서대로, 고르면 그 카테고리만
export function CategoryList({ group, onSelect, onOpen }: CategoryListProps) {
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shown = group ? GROUPS.filter((g) => g.id === group) : GROUPS;

  const tabs: { id: GroupId | null; name: string }[] = [
    { id: null, name: PORTFOLIO.allLabel },
    ...GROUPS.map((g) => ({ id: g.id, name: g.name })),
  ];

  // 좌우 화살표 · Home · End로 탭 이동
  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : e.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    onSelect(tabs[next].id);
    const el = tabRefs.current[next];
    el?.focus();
    el?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  return (
    <section id="cases" aria-label={PORTFOLIO.tabsLabel} className="pb-24 sm:pb-32">
      {/* ② 카테고리 탭: 이 구역을 지나는 동안 헤더 아래에 붙어 있음. 좁은 화면에서는 옆으로 밀어서 봄 */}
      <div className="sticky top-16 z-30 border-y-2 border-ink bg-wall">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div
            role="tablist"
            aria-label={PORTFOLIO.tabsLabel}
            className="-mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 py-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 xl:mx-0 xl:grid xl:grid-cols-7 xl:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab, i) => {
              const selected = group === tab.id;
              return (
                <button
                  key={tab.name}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id ?? "all"}`}
                  aria-selected={selected}
                  aria-controls="cases-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => onSelect(tab.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "inline-flex h-12 shrink-0 cursor-pointer items-center justify-center border-2 border-ink px-4 text-[15px] leading-none font-bold whitespace-nowrap transition-colors duration-200 ease-out-expo xl:px-2",
                    selected ? "bg-ink text-wall" : "hover:bg-unlit"
                  )}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ③ 사례 목록: 탭을 바꾸면 목록이 짧게 다시 나타남 */}
      <motion.div
        key={group ?? "all"}
        id="cases-panel"
        role="tabpanel"
        aria-labelledby={`tab-${group ?? "all"}`}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-8"
      >
        {shown.map((g) => {
          const shops = casesInGroup(g.id);
          return (
            <section key={g.id} aria-labelledby={`group-${g.id}`} className="pt-32 first:pt-12 sm:first:pt-16">
              <h2
                id={`group-${g.id}`}
                className="border-b-2 border-ink pb-4 text-[clamp(1.5rem,4vw,2rem)] leading-[1.25] font-black tracking-[-0.03em] break-keep"
              >
                {g.name}
              </h2>
              <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {shops.map((c) => (
                  <Storefront key={c.id} caseStudy={c} reduce={!!reduce} onOpen={() => onOpen(c)} />
                ))}
              </div>
            </section>
          );
        })}
      </motion.div>
    </section>
  );
}

