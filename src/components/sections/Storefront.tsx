import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { STREET, type CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";
import { caseLabel } from "@/lib/case-label";

interface StorefrontProps {
  caseStudy: CaseStudy;
  reduce: boolean;
  onOpen: () => void;
  className?: string; // 폭·배치 (메인 거리: 고정 폭 가로 줄, 사례 페이지: 격자 칸)
}

// 가게 카드: 간판 → 홈페이지 화면 → 한 줄 → 자세히 보기 (메인 거리와 사례 페이지에서 같은 규격)
export function Storefront({ caseStudy: c, reduce, onOpen, className }: StorefrontProps) {
  const cardRef = useRef<HTMLElement>(null);
  const lit = useInView(cardRef, { once: true, amount: 0.9 });

  return (
    <article ref={cardRef} id={`case-${c.id}`} aria-label={c.name} className={cn("group/card flex flex-col", className)}>
      {/* 간판: 카드 전체가 거의 다 보인 뒤 불이 켜지고, 마우스를 올리면 한 번 더 깜빡임 */}
      <div className="relative border-2 border-ink bg-unlit px-4 py-3">
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-sign group-hover/card:animate-sign-light"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? { opacity: 1 } : lit ? { opacity: [0, 1, 0.25, 1] } : { opacity: 0 }}
          transition={lit ? { duration: 0.6, delay: 0.35, times: [0, 0.3, 0.55, 1], ease: "linear" } : { duration: 0 }}
        />
        <p className="relative truncate text-[13px] font-semibold">
          {caseLabel(c)}
          {c.isReal && <span className="sr-only"> · {STREET.realLabel}</span>}
        </p>
        <h3 className="relative truncate text-xl font-black tracking-[-0.04em]">{c.name}</h3>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`${c.name} ${STREET.detailLabel}`}
        className="group relative aspect-[3/4] cursor-pointer overflow-hidden border-x-2 border-b-2 border-ink bg-unlit"
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

      <p className="mt-4 text-[13px] font-semibold text-muted">{c.isReal && c.review ? STREET.reviewLabel : STREET.solutionLabel}</p>
      <p className="mt-1 min-h-[3em] text-[17px] leading-[1.5] font-bold break-keep text-pretty">{c.headline}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-2 inline-flex h-11 cursor-pointer items-center gap-1 self-start text-[15px] font-semibold underline decoration-unlit decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out-expo hover:decoration-ink"
      >
        {STREET.detailLabel}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </article>
  );
}
