import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA_LABEL, SITE } from "@/lib/content";

interface CtaLinkProps {
  label?: string;
  size?: "sm" | "lg";
  className?: string;
}

// 네이버 톡톡 상담 버튼: 사이트 전체에서 같은 모양·같은 링크로 사용
export function CtaLink({ label = CTA_LABEL, size = "lg", className }: CtaLinkProps) {
  return (
    <a
      href={SITE.talkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap bg-sign font-bold text-ink",
        "transition-transform duration-300 ease-pop hover:-translate-y-0.5 active:translate-y-0",
        // 좁은 화면(320px대)에서도 문구가 한 줄에 들어가도록 좌우 여백만 줄임
        size === "lg" ? "h-14 px-5 text-[17px] sm:px-8" : "h-11 px-4 text-[15px]",
        className
      )}
    >
      <MessageCircle aria-hidden="true" className={cn("shrink-0 fill-current", size === "lg" ? "size-5" : "size-4")} />
      <span>{label}</span>
    </a>
  );
}
