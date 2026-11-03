import { ArrowUpRight } from "lucide-react";
import { STREET, type CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";
import { caseLabel } from "@/lib/case-label";

interface StorefrontProps {
  caseStudy: CaseStudy;
  reduce?: boolean; // 지금은 쓰지 않음 (간판은 CSS motion-reduce로 처리)
  onOpen: () => void;
  className?: string; // 폭·배치 (메인 거리: 고정 폭 가로 줄, 사례 페이지: 격자 칸)
}

// 가게 카드: 간판 → 홈페이지 화면 → 한 줄 → 자세히 보기 (메인 거리와 사례 페이지에서 같은 규격)
export function Storefront({ caseStudy: c, onOpen, className }: StorefrontProps) {
  return (
    <article id={`case-${c.id}`} aria-label={c.name} className={cn("group/card flex flex-col", className)}>
      {/* 간판: 평소에는 불 꺼진 회색, 마우스를 올리거나 키보드로 들어오면 깜빡이며 불이 켜짐 */}
      <div className="relative border-2 border-ink bg-unlit px-4 py-3">
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo group-hover/card:opacity-100 group-hover/card:animate-sign-light group-focus-within/card:opacity-100 motion-reduce:animate-none"
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
