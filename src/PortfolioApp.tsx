import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CASES, GROUPS, PORTFOLIO_NAV, type CaseStudy, type GroupId } from "@/lib/content";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Closing";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { CaseDialog } from "@/components/sections/CaseDialog";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { CategoryList } from "@/components/portfolio/CategoryList";
import { VacantFloor } from "@/components/portfolio/VacantFloor";

// 주소의 ?category=3 · ?case=okhome 을 읽어 처음부터 그 카테고리만, 그 사례 팝업을 열어 보여 줌 (링크 공유용)
const params = () => new URLSearchParams(window.location.search);

function readGroup(): GroupId | null {
  const value = Number(params().get("category"));
  return GROUPS.find((g) => g.id === value)?.id ?? null;
}

function readCase(): CaseStudy | null {
  return CASES.find((c) => c.id === params().get("case")) ?? null;
}

// 주소 뒷부분만 바꾸고 방문 기록은 늘리지 않음
function setParam(key: string, value: string | null) {
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState(null, "", url);
}

// 사례 페이지(/portfolio/): 히어로 → 카테고리 탭 + 사례 2열 → 마지막 상담
export default function PortfolioApp() {
  const reduce = useReducedMotion();
  const [group, setGroup] = useState<GroupId | null>(readGroup);
  const [openCase, setOpenCase] = useState<CaseStudy | null>(readCase);

  const selectGroup = (next: GroupId | null) => {
    setGroup(next);
    setParam("category", next ? String(next) : null);
    // 목록 중간까지 내려와 있을 때만 탭 위치로 올려 줌 (히어로에서 누르면 화면이 튀지 않게)
    const section = document.getElementById("cases");
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  };

  const showCase = (next: CaseStudy | null) => {
    setOpenCase(next);
    setParam("case", next?.id ?? null);
  };

  return (
    <div className="min-h-screen bg-wall text-ink">
      <Header homeHref="/" nav={PORTFOLIO_NAV} />
      <main>
        <PortfolioHero onOpen={showCase} />
        <CategoryList group={group} onSelect={selectGroup} onOpen={showCase} />
        <VacantFloor />
      </main>
      <Footer />
      <MobileCtaBar />
      <CaseDialog caseStudy={openCase} onClose={() => showCase(null)} />
    </div>
  );
}
