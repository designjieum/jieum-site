import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/content";
import { CtaLink } from "@/components/sections/CtaLink";

// 모바일 하단 고정 CTA: 히어로를 지나면 나타나고, 마지막 CTA 섹션·푸터가 보이면 숨김
export function MobileCtaBar() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target.id === "top") setHeroVisible(entry.isIntersecting);
        if (entry.target.id === "contact") setContactVisible(entry.isIntersecting);
        if (entry.target.id === "site-footer") setFooterVisible(entry.isIntersecting);
      }
    });
    for (const id of ["top", "contact", "site-footer"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const show = !heroVisible && !contactVisible && !footerVisible;

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-unlit bg-wall px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out-expo md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* 전화·톡톡 반반. 320px 폭에서도 한 줄에 들어가도록 글자·여백을 줄임 */}
      <div className={BUSINESS.phoneConfirmed ? "grid grid-cols-2 gap-2" : "flex"}>
        {BUSINESS.phoneConfirmed && (
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap border-2 border-ink px-2 text-[15px] font-bold text-ink max-[359px]:text-[14px]"
          >
            <Phone aria-hidden="true" className="size-4 shrink-0" />
            전화 상담
          </a>
        )}
        <CtaLink
          label={BUSINESS.phoneConfirmed ? "톡톡 무료 상담" : undefined}
          className={BUSINESS.phoneConfirmed ? "px-2 text-[15px] sm:px-2 max-[359px]:text-[14px]" : "flex-1"}
        />
      </div>
    </div>
  );
}
