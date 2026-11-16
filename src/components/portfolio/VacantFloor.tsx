import { PORTFOLIO, SITE } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

// ④ 마지막 장면: 다음 가게 자리. #contact가 보이면 모바일 하단 고정 바가 숨음
export function VacantFloor() {
  return (
    <section id="contact" aria-labelledby="vacant-title" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="group/vacant relative overflow-hidden border-2 border-dashed border-muted px-6 py-12 transition-colors duration-300 ease-out-expo hover:border-solid hover:border-ink sm:px-12 sm:py-16">
          {/* 주황 불은 데스크톱(1024px 이상) + 마우스 호버 때만. 이때 버튼은 흰색으로 바뀌어 묻히지 않음. 태블릿·모바일에서는 켜지 않음 */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo lg:group-hover/vacant:opacity-100"
          />
          <div className="relative grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <span className="inline-flex h-14 items-center justify-center self-start border-2 border-ink px-4 text-xl leading-none font-black tracking-[0.08em] lg:self-center">
              {PORTFOLIO.nextLabel}
            </span>
            <div>
              <h2 id="vacant-title" className="text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.2] font-black tracking-[-0.04em] break-keep text-balance">
                {PORTFOLIO.closing.title}
              </h2>
              <p className="mt-4 max-w-[32em] text-[17px] leading-[1.7] break-keep text-pretty">{PORTFOLIO.closing.desc}</p>
            </div>
            <div>
              <CtaLink className="w-full transition-[translate,background-color] sm:w-auto lg:group-hover/vacant:bg-wall" />
              <p className="mt-3 text-[15px] font-semibold">{SITE.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
