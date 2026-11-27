import { NAV, SITE } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

// 사례 페이지에서는 로고가 메인으로, 메뉴가 메인 섹션 주소로 연결됨
export function Header({ homeHref = "#top", nav = NAV }: { homeHref?: string; nav?: { label: string; href: string; current?: boolean }[] }) {
  const mobileLink = nav[0]; // 업종별 사례 (사례 페이지에서도 같은 버튼 유지)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-unlit bg-wall">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href={homeHref} className="flex items-baseline gap-2 py-2 font-extrabold tracking-tight text-ink">
          <span className="text-lg">{SITE.name}</span>
          <span aria-hidden="true" className="hidden text-unlit sm:inline">|</span>
          <span className="hidden text-sm font-medium text-muted sm:inline">{SITE.category}</span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="주요 메뉴" className="hidden items-center gap-6 text-[15px] font-medium text-muted md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="inline-flex h-11 min-w-11 items-center justify-center transition-colors duration-200 ease-out-expo hover:text-ink aria-[current=page]:font-bold aria-[current=page]:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* PC·태블릿: 무료 상담 버튼 */}
          <CtaLink size="sm" label="무료 상담" className="hidden md:inline-flex" />
          {/* 모바일: 상담은 하단 고정 바에 있으니, 메뉴 대신 업종별 사례 버튼 */}
          {mobileLink && (
            <a
              href={mobileLink.href}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap border-2 border-ink px-4 text-[15px] font-bold text-ink md:hidden"
            >
              {mobileLink.label}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
