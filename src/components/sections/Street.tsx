import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CASES, STREET, type CaseStudy } from "@/lib/content";
import { STREET_GO_EVENT } from "@/lib/street-events";
import { useMediaQuery } from "@/lib/use-media-query";
import { CtaLink } from "@/components/sections/CtaLink";
import { CaseDialog } from "@/components/sections/CaseDialog";

const HEADER_PX = 64;
const TOTAL = CASES.length + 1; // 가게 9곳 + 다음 간판 자리

// 거리 걷기: 데스크톱은 섹션을 고정하고 세로 스크롤로 거리를 옆으로 걸음,
// 모바일·낮은 화면·모션 줄이기 설정은 손가락으로 넘기는 가로 스와이프
export function Street() {
  // 높이 720px 미만이면 카드가 고정 영역 안에 다 들어가지 않아 스와이프 방식으로 전환
  const pinned = useMediaQuery("(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)");
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [distance, setDistance] = useState(0);
  const [hold, setHold] = useState(0);
  const [active, setActive] = useState(0);
  const [openCase, setOpenCase] = useState<CaseStudy | null>(null);

  // 걸어야 할 거리 = 가게 줄 전체 폭 - 보이는 폭
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const measure = () => {
      setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
      setHold(Math.round(window.innerHeight * 0.15));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${HEADER_PX}px`, "end end"],
  });
  // 끝에 hold만큼 멈춰 있다가 다음 섹션으로
  const x = useTransform(scrollYProgress, (p) => -Math.min(distance, p * (distance + hold)));

  const cardOffset = useCallback((i: number) => {
    const cards = trackRef.current?.children;
    if (!cards?.[i] || !cards[0]) return 0;
    return (cards[i] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!pinned || distance === 0) return;
    const walked = Math.min(distance, p * (distance + hold));
    let nearest = 0;
    for (let i = 0; i < TOTAL; i++) {
      if (Math.abs(cardOffset(i) - walked) < Math.abs(cardOffset(nearest) - walked)) nearest = i;
    }
    // 끝까지 걸었으면 마지막 칸
    setActive(walked >= distance - 1 ? TOTAL - 1 : nearest);
  });

  const onNativeScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || pinned) return;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4;
    let nearest = 0;
    for (let i = 0; i < TOTAL; i++) {
      if (Math.abs(cardOffset(i) - viewport.scrollLeft) < Math.abs(cardOffset(nearest) - viewport.scrollLeft)) nearest = i;
    }
    setActive(atEnd ? TOTAL - 1 : nearest);
  };

  const goTo = useCallback(
    (i: number) => {
      const index = Math.max(0, Math.min(TOTAL - 1, i));
      const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
      if (pinned) {
        const section = sectionRef.current;
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - HEADER_PX;
        window.scrollTo({ top: sectionTop + Math.min(distance, cardOffset(index)), behavior });
      } else {
        const card = trackRef.current?.children[index] as HTMLElement | undefined;
        card?.scrollIntoView({ behavior, block: "nearest", inline: "start" });
      }
    },
    [pinned, distance, reduce, cardOffset]
  );

  // 마키에서 가게를 누르면 해당 가게로 이동
  useEffect(() => {
    const onGo = (e: Event) => {
      const index = CASES.findIndex((c) => c.id === (e as CustomEvent<string>).detail);
      if (index < 0) return;
      if (!pinned) sectionRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      goTo(index);
    };
    window.addEventListener(STREET_GO_EVENT, onGo);
    return () => window.removeEventListener(STREET_GO_EVENT, onGo);
  }, [goTo, pinned, reduce]);

  // 고정 모드에서 Tab으로 화면 밖 가게에 포커스가 가면, 브라우저가 숨은 가로 스크롤을 움직이는 대신
  // 세로 스크롤을 그 가게 위치로 옮겨 걷기 위치와 포커스를 맞춤
  const onTrackFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!pinned) return;
    const cards = Array.from(trackRef.current?.children ?? []);
    const index = cards.findIndex((card) => card.contains(e.target));
    if (index < 0) return;
    if (viewportRef.current) viewportRef.current.scrollLeft = 0;
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - HEADER_PX;
    window.scrollTo({ top: sectionTop + Math.min(distance, cardOffset(index)), behavior: "auto" });
  };

  const atEnd = active === TOTAL - 1;
  const goNextSection = () => {
    document.getElementById("price")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const counter = (
    <div className="flex items-center gap-4">
      <p aria-live="polite" className="text-[15px] font-bold tabular-nums">
        {String(active + 1).padStart(2, "0")} <span className="text-muted">/ {String(TOTAL).padStart(2, "0")}</span>
      </p>
      <div className="flex">
        <button
          type="button"
          aria-label="이전 가게"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
          className={ARROW_BUTTON}
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
        </button>
        {/* 마지막 칸에서는 "다음 가게" 대신 다음 섹션으로 내려가는 버튼 */}
        <button
          type="button"
          aria-label={atEnd ? "다음 섹션으로" : "다음 가게"}
          onClick={() => (atEnd ? goNextSection() : goTo(active + 1))}
          className={`-ml-0.5 ${ARROW_BUTTON}`}
        >
          {atEnd ? <ArrowDown aria-hidden="true" className="size-5" /> : <ArrowRight aria-hidden="true" className="size-5" />}
        </button>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="street"
      aria-labelledby="street-title"
      className="relative"
      style={pinned ? { height: `calc(100vh - ${HEADER_PX}px + ${distance + hold}px)` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden"
            : "py-20 sm:py-28"
        }
      >
        <div className={pinned ? "mx-auto grid w-full max-w-7xl grid-cols-[300px_1fr] items-center gap-12 pl-8" : "w-full"}>
          {/* 제목 · 범례 · 넘기기 */}
          <div className={pinned ? "" : "mx-auto max-w-7xl px-4 sm:px-8"}>
            <h2 id="street-title" className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.15] font-black tracking-[-0.045em] break-keep">
              {STREET.titleLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h2>
            <p className="mt-5 max-w-[26em] text-[17px] leading-[1.7] text-muted break-keep text-pretty">{STREET.desc}</p>
            {pinned && <div className="mt-10">{counter}</div>}
          </div>

          {/* 가게 줄 */}
          <div
            ref={viewportRef}
            onScroll={onNativeScroll}
            className={
              pinned
                ? "overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_48px)]"
                : "mt-10 flex snap-x snap-mandatory scroll-px-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] sm:scroll-px-8 [&::-webkit-scrollbar]:hidden"
            }
          >
            <motion.div
              ref={trackRef}
              onFocus={onTrackFocus}
              style={pinned ? { x } : undefined}
              className={`flex w-max gap-6 ${pinned ? "pr-8" : "px-4 sm:px-8"}`}
            >
              {CASES.map((c) => (
                <Storefront key={c.id} caseStudy={c} reduce={!!reduce} onOpen={() => setOpenCase(c)} />
              ))}
              <NextSign />
            </motion.div>
          </div>

          {!pinned && <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-8">{counter}</div>}
        </div>
      </div>

      <CaseDialog caseStudy={openCase} onClose={() => setOpenCase(null)} />
    </section>
  );
}

const CARD_WIDTH = "w-[min(78vw,300px)]";

// 첫 칸의 "이전" 버튼은 흐린 회색 대신 먹색 테두리를 유지하고 아이콘만 옅게 (번져 보이지 않게)
const ARROW_BUTTON =
  "inline-flex size-11 items-center justify-center border-2 border-ink transition-colors duration-200 ease-out-expo hover:bg-ink hover:text-wall disabled:hover:bg-transparent disabled:hover:text-ink [&:disabled_svg]:opacity-25";

function Storefront({ caseStudy: c, reduce, onOpen }: { caseStudy: CaseStudy; reduce: boolean; onOpen: () => void }) {
  const cardRef = useRef<HTMLElement>(null);
  const lit = useInView(cardRef, { once: true, amount: 0.9 });

  return (
    <article ref={cardRef} id={`case-${c.id}`} aria-label={c.name} className={`group/card ${CARD_WIDTH} flex shrink-0 snap-start flex-col`}>
      {/* 간판: 카드 전체가 거의 다 보인 뒤 불이 켜지고, 마우스를 올리면 한 번 더 깜빡임 */}
      <div className="relative border-2 border-ink bg-unlit px-4 py-3">
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-sign group-hover/card:animate-sign-light"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? { opacity: 1 } : lit ? { opacity: [0, 1, 0.25, 1] } : { opacity: 0 }}
          transition={lit ? { duration: 0.6, delay: 0.35, times: [0, 0.3, 0.55, 1], ease: "linear" } : { duration: 0 }}
        />
        <p className="relative text-[13px] font-semibold">
          {c.isReal ? `${c.category} · ${c.location}` : `${c.category} ${STREET.exampleSuffix}`}
          {c.isReal && <span className="sr-only"> · {STREET.realLabel}</span>}
        </p>
        <h3 className="relative truncate text-xl font-black tracking-[-0.04em]">{c.name}</h3>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`${c.name} ${STREET.detailLabel}`}
        className="group relative aspect-[3/4] overflow-hidden border-x-2 border-b-2 border-ink bg-unlit"
      >
        <img
          src={c.thumb}
          alt=""
          width={300}
          height={400}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
        />
      </button>

      <p className="mt-4 text-[13px] font-semibold text-muted">{c.isReal ? STREET.reviewLabel : STREET.solutionLabel}</p>
      <p className="mt-1 min-h-[3em] text-[17px] leading-[1.5] font-bold break-keep text-pretty">{c.headline}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-2 inline-flex h-11 items-center gap-1 self-start text-[15px] font-semibold underline decoration-unlit decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out-expo hover:decoration-ink"
      >
        {STREET.detailLabel}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </article>
  );
}

// 거리 끝: 비어 있는 간판 자리 (CTA)
function NextSign() {
  return (
    <div className={`${CARD_WIDTH} flex shrink-0 snap-start flex-col`}>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 border-2 border-dashed border-muted px-6 py-10 text-center">
        <p className="text-[15px] font-semibold text-muted">{STREET.nextSign.title}</p>
        <p className="text-4xl font-black tracking-[-0.045em]">{STREET.nextSign.sub}</p>
        <CtaLink size="sm" label={STREET.nextSign.cta} className="mt-6" />
      </div>
    </div>
  );
}
