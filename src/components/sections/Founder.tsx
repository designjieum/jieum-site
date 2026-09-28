import { BUSINESS, FOUNDER } from "@/lib/content";

// 간판을 다는 사람: 사진 대신 이름을 간판처럼 크게 (모션 없이 차분하게)
export function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* 이름 간판 */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="founder-title" className="text-[15px] font-bold text-muted sm:text-lg">
            {FOUNDER.title}
          </h2>
          <p className="mt-4 text-[clamp(5rem,24vw,10rem)] leading-[0.9] font-black tracking-[-0.06em]">
            {BUSINESS.owner}
          </p>
          <p className="mt-5 border-t-2 border-ink pt-3 text-lg font-bold">{FOUNDER.role}</p>

          <div className="mt-10">
            <p className="text-[15px] font-bold text-muted">{FOUNDER.visitTitle}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
              {FOUNDER.visitAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className="mt-2 text-[15px] leading-[1.6] text-muted break-keep">{FOUNDER.visitNote}</p>
          </div>
        </div>

        {/* 이야기 */}
        <div className="space-y-5 text-lg leading-[1.75] break-keep text-pretty sm:text-xl sm:leading-[1.7]">
          {FOUNDER.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
