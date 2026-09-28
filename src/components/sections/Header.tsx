import { NAV, SITE } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-unlit bg-wall">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2 font-extrabold tracking-tight text-ink">
          <span className="text-lg">{SITE.name}</span>
          <span aria-hidden="true" className="hidden text-unlit sm:inline">|</span>
          <span className="hidden text-sm font-medium text-muted sm:inline">{SITE.category}</span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="주요 메뉴" className="hidden items-center gap-6 text-[15px] font-medium text-muted md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-200 ease-out-expo hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <CtaLink size="sm" label="카톡 상담" />
        </div>
      </div>
    </header>
  );
}
