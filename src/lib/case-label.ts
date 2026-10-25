import type { CaseStudy } from "@/lib/content";

// 간판 윗줄: 실제 고객은 업종 · 동네, 그 외에는 업종만
export function caseLabel(c: CaseStudy) {
  return c.isReal ? `${c.category} · ${c.location}` : c.category;
}
