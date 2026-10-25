import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CASES, FLOORS, PORTFOLIO_NAV, type CaseStudy, type FloorId } from "@/lib/content";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Closing";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { CaseDialog } from "@/components/sections/CaseDialog";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { FloorList } from "@/components/portfolio/FloorList";
import { VacantFloor } from "@/components/portfolio/VacantFloor";

// 주소의 ?floor=3 · ?case=okhome 을 읽어 처음부터 그 층만, 그 사례 팝업을 열어 보여 줌 (링크 공유용)
const params = () => new URLSearchParams(window.location.search);

function readFloor(): FloorId | null {
  const value = Number(params().get("floor"));
  return FLOORS.find((f) => f.id === value)?.id ?? null;
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

// 사례 페이지(/portfolio/): 층별 안내판 → 층별 가게 → 맨 위층 공실(상담)
export default function PortfolioApp() {
  const reduce = useReducedMotion();
  const [floor, setFloor] = useState<FloorId | null>(readFloor);
  const [openCase, setOpenCase] = useState<CaseStudy | null>(readCase);

  const selectFloor = (next: FloorId | null) => {
    setFloor(next);
    setParam("floor", next ? String(next) : null);
    document.getElementById("floors")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const showCase = (next: CaseStudy | null) => {
    setOpenCase(next);
    setParam("case", next?.id ?? null);
  };

  return (
    <div className="min-h-screen bg-wall text-ink">
      <Header homeHref="/" nav={PORTFOLIO_NAV} />
      <main>
        <PortfolioHero floor={floor} onSelect={selectFloor} />
        <FloorList floor={floor} onSelect={selectFloor} onOpen={showCase} />
        <VacantFloor />
      </main>
      <Footer />
      <MobileCtaBar />
      <CaseDialog caseStudy={openCase} onClose={() => showCase(null)} />
    </div>
  );
}
