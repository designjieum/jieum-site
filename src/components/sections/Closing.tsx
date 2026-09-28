import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { BUSINESS, CLOSING, FOOTER, SITE } from "@/lib/content";
import { useMediaQuery } from "@/lib/use-media-query";
import { CtaLink } from "@/components/sections/CtaLink";

// 마지막 장면: 비어 있는 간판 자리(최종 CTA). 이어서 공급자 정보 푸터
// #contact 또는 #site-footer가 보이면 모바일 하단 고정 바가 숨음
export function Closing() {
  const reduce = useReducedMotion();
  // 마우스가 없는 기기는 화면에 들어올 때 불이 켜지고, 마우스가 있으면 올렸을 때 켜짐
  const touch = useMediaQuery("(hover: none)");

  return (
    <section id="contact" aria-labelledby="closing-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* 빈 간판 틀 */}
        <div
          aria-hidden="true"
          className="group relative flex min-h-40 items-center justify-center overflow-hidden border-2 border-dashed border-muted px-6 py-10 transition-colors duration-300 ease-out-expo hover:border-solid hover:border-ink sm:min-h-56"
        >
          <motion.span
            className="absolute inset-0 bg-sign opacity-0 transition-opacity duration-300 ease-out-expo group-hover:opacity-100"
            initial={false}
            whileInView={touch && !reduce ? { opacity: [0, 1, 0.25, 1] } : undefined}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3, times: [0, 0.3, 0.55, 1], ease: "linear" }}
          />
          <p className="relative text-center text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.1] font-black tracking-[-0.05em] text-muted break-keep transition-colors duration-300 ease-out-expo group-hover:text-ink [@media(hover:none)]:text-ink">
            {CLOSING.emptySign}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
          <h2 id="closing-title" className="text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.08] font-black tracking-[-0.05em] break-keep">
            {CLOSING.titleLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h2>
          <div>
            <p className="text-[17px] leading-[1.7] text-muted break-keep text-pretty sm:text-lg">{CLOSING.desc}</p>
            <CtaLink className="mt-6 w-full sm:w-auto" />
            <p className="mt-3 text-[15px] font-semibold">{SITE.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: FOOTER.labels.owner, value: BUSINESS.owner },
    { label: FOOTER.labels.bizNumber, value: BUSINESS.bizNumber },
    { label: FOOTER.labels.address, value: BUSINESS.address },
    {
      label: FOOTER.labels.phone,
      value: BUSINESS.phoneConfirmed ? <FooterLink href={BUSINESS.phoneHref}>{BUSINESS.phone}</FooterLink> : BUSINESS.phone,
    },
    { label: FOOTER.labels.email, value: <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink> },
    { label: FOOTER.labels.kakao, value: <FooterLink href={SITE.kakaoUrl} external>{FOOTER.kakaoLabel}</FooterLink> },
    { label: FOOTER.labels.hours, value: SITE.hours },
  ];

  return (
    <footer id="site-footer" className="bg-ink py-14 text-wall sm:py-20 [&_:focus-visible]:outline-wall">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <p className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-2xl font-black tracking-[-0.04em]">{SITE.name}</span>
            <span className="text-[15px] text-wall/70">{SITE.category}</span>
          </p>
          <a
            href="#top"
            className="inline-flex h-11 shrink-0 items-center gap-1.5 border-2 border-wall/40 px-4 text-[15px] font-bold transition-colors duration-200 ease-out-expo hover:border-wall"
          >
            <ArrowUp aria-hidden="true" className="size-4" />
            {FOOTER.toTop}
          </a>
        </div>

        <h2 className="sr-only">{FOOTER.supplierTitle}</h2>
        <dl className="mt-10 grid border-t border-wall/20 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((row) => (
            <div key={row.label} className="border-b border-wall/20 py-4 sm:pr-6">
              <dt className="text-[13px] font-semibold text-wall/60">{row.label}</dt>
              <dd className="mt-1 text-[15px] leading-[1.6] break-keep">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-2 text-[13px] leading-[1.6] text-wall/60 sm:flex-row sm:justify-between">
          <p className="break-keep">{FOOTER.visitNote}</p>
          <p>© {new Date().getFullYear()} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-11 items-center break-all underline decoration-wall/30 underline-offset-4 transition-colors duration-200 ease-out-expo hover:decoration-wall"
    >
      {children}
    </a>
  );
}
