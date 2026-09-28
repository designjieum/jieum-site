import { CASES } from "@/lib/content";
import { goToCase } from "@/lib/street-events";

export function Marquee() {
  return (
    <section aria-label="지음이 만든 가게 목록" className="group overflow-hidden bg-ink py-5 text-wall motion-reduce:overflow-x-auto [&_:focus-visible]:outline-wall">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {CASES.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  tabIndex={copy === 1 ? -1 : 0}
                  onClick={() => goToCase(c.id)}
                  className="group/item flex h-11 items-center gap-3 px-6 text-[17px] font-bold whitespace-nowrap sm:px-8 sm:text-xl"
                >
                  {/* 불: 평소엔 회색, 마우스를 올리거나 키보드로 고르면 주황으로 깜빡이며 켜짐 */}
                  <span aria-hidden="true" className="relative size-2.5 shrink-0 rounded-full bg-muted">
                    <span className="absolute inset-0 rounded-full bg-sign opacity-0 group-hover/item:animate-sign-light group-focus-visible/item:animate-sign-light" />
                  </span>
                  <span className="text-wall/60 transition-colors duration-200 ease-out-expo group-hover/item:text-wall">{c.category}</span>
                  <span>{c.name}</span>
                  {c.isReal && <span className="sr-only">(실제 고객)</span>}
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
