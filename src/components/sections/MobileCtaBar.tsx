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
      <div className="flex gap-2">
        {BUSINESS.phoneConfirmed && (
          <a
            href={BUSINESS.phoneHref}
            aria-label="전화 상담"
            className="inline-flex h-14 w-14 shrink-0 items-center justify-center border-2 border-ink text-ink"
          >
            <Phone aria-hidden="true" className="size-5" />
          </a>
        )}
        <CtaLink className="flex-1" />
      </div>
    </div>
  );
}
