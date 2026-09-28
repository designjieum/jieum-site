import { useSyncExternalStore } from "react";

// CSS 미디어 쿼리 일치 여부를 구독 (화면 크기·모션 설정 변경 시 자동 갱신)
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
