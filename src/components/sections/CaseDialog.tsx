import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { STREET, type CaseStudy } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

interface CaseDialogProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

// 사례 자세히 보기: 고민 → 바꾼 점 → 사장님 한마디 + 전체 페이지 화면
export function CaseDialog({ caseStudy, onClose }: CaseDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (caseStudy && !dialog.open) dialog.showModal();
    if (!caseStudy && dialog.open) dialog.close();
  }, [caseStudy]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="case-dialog-title"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto border-2 border-ink bg-wall p-0 text-ink backdrop:bg-ink/70 lg:overflow-hidden"
    >
      {caseStudy && (
        <div className="lg:grid lg:h-[min(80dvh,760px)] lg:grid-cols-[1fr_400px]">
          <div className="flex flex-col p-6 sm:p-10 lg:overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold text-muted">
                  {caseStudy.isReal ? `${caseStudy.category} · ${caseStudy.location}` : `${caseStudy.category} ${STREET.exampleSuffix}`}
                </p>
                <h3 id="case-dialog-title" className="mt-1 text-3xl font-black tracking-[-0.04em] break-keep sm:text-4xl">
                  {caseStudy.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="닫기"
                className="-mt-2 -mr-2 inline-flex size-11 shrink-0 items-center justify-center transition-opacity duration-200 ease-out-expo hover:opacity-60"
              >
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>

            <dl className="mt-8 space-y-6 border-t-2 border-ink pt-6">
              <div>
                <dt className="text-[13px] font-semibold text-muted">
                  {caseStudy.isReal ? STREET.realProblemLabel : STREET.exampleProblemLabel}
                </dt>
                <dd className="mt-1 text-[17px] leading-[1.7] break-keep text-pretty">{caseStudy.problem}</dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold text-muted">{STREET.solutionLabel}</dt>
                <dd className="mt-1 text-xl leading-[1.5] font-bold break-keep text-pretty">{caseStudy.solution}</dd>
              </div>
              {caseStudy.review && (
                <div className="border-t border-unlit pt-6">
                  <dt className="text-[13px] font-semibold text-muted">{STREET.reviewLabel}</dt>
                  <dd className="mt-2">
                    <span aria-hidden="true" className="block text-5xl leading-[0.6] font-black">“</span>
                    <p className="mt-2 text-lg leading-[1.6] font-semibold break-keep text-pretty">{caseStudy.review.quote}</p>
                    <span className="mt-2 block text-[15px] text-muted">{caseStudy.review.author}</span>
                  </dd>
                </div>
              )}
            </dl>

            <CtaLink className="mt-10 w-full sm:w-auto sm:self-start" label="우리 매장도 상담하기" />
          </div>

          {/* 전체 페이지 화면: 데스크톱은 이 칸 안에서 스크롤 */}
          <div className="border-t-2 border-ink bg-unlit lg:overflow-y-auto lg:border-t-0 lg:border-l-2">
            <img
              src={caseStudy.image}
              alt={`${caseStudy.name} 홈페이지 전체 화면`}
              width={425}
              className="mx-auto block h-auto w-full max-w-[425px]"
              decoding="async"
            />
          </div>
        </div>
      )}
    </dialog>
  );
}
