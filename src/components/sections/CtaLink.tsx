import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA_LABEL, SITE } from "@/lib/content";

interface CtaLinkProps {
  label?: string;
  size?: "sm" | "lg";
  className?: string;
}

// 카카오톡 상담 버튼: 사이트 전체에서 같은 모양·같은 링크로 사용
export function CtaLink({ label = CTA_LABEL, size = "lg", className }: CtaLinkProps) {
  return (
    <a
      href={SITE.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 bg-sign font-bold text-ink",
        "transition-transform duration-300 ease-pop hover:-translate-y-0.5 active:translate-y-0",
        size === "lg" ? "h-14 px-8 text-[17px]" : "h-11 px-4 text-[15px]",
        className
      )}
    >
      <MessageCircle aria-hidden="true" className={cn("shrink-0 fill-current", size === "lg" ? "size-5" : "size-4")} />
      <span>{label}</span>
    </a>
  );
}
