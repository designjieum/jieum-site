// 검색엔진·AI 답변 엔진용 정적 텍스트를 content.ts의 사례 목록에서 자동 생성
// 사례를 추가·수정하면 다음 빌드에서 아래 세 곳이 함께 바뀜 (손으로 고칠 필요 없음)
//  - portfolio/index.html: 사례 수, 사례 목록 구조화 데이터(ItemList), JS 없이 읽히는 요약
//  - index.html: 정적 요약의 "그 밖의 업종별 사례" 줄
//  - llms.txt: seo/llms.txt 템플릿의 {{CASES}} 자리
import fs from "node:fs"
import path from "node:path"
import type { Plugin } from "vite"
import { CASES, FLOORS, MAIN_CASE_IDS, SITE, type CaseStudy } from "./src/lib/content.ts"

const ORIGIN = "https://designjieum.com"
const PORTFOLIO_URL = `${ORIGIN}/portfolio/`

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const label = (c: CaseStudy) => (c.isReal ? `${c.category} · ${c.name}(${c.location}, 실제 고객)` : `${c.category} · ${c.name}`)
const byFloor = (id: number) => CASES.filter((c) => c.floor === id)

// 사례 페이지 <head>: 사례 목록 구조화 데이터
function itemListJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PORTFOLIO_URL}#cases`,
    name: `${SITE.name} 홈페이지 제작 사례`,
    numberOfItems: CASES.length,
    itemListElement: CASES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: `${c.name} 홈페이지`,
        genre: c.category,
        ...(c.siteUrl ? { url: c.siteUrl } : {}),
        image: `${ORIGIN}${c.thumb}`,
        description: c.solution,
        creator: { "@id": `${ORIGIN}/#business` },
      },
    })),
  }
  // </script> 조기 종료 방지
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2).replace(/</g, "\\u003c")}\n  </script>`
}

// 사례 페이지 #root: JS를 실행하지 않는 크롤러용 요약 (화면에는 숨김, React 마운트 시 교체)
function portfolioSummary() {
  const floors = FLOORS.map((f) => {
    const items = byFloor(f.id)
      .map((c) => {
        const link = c.siteUrl ? ` <a href="${esc(c.siteUrl)}">사이트 보기</a>` : ""
        return `<li><strong>${esc(label(c))}</strong>: ${esc(c.problem)} ${esc(c.solution)}${link}</li>`
      })
      .join("\n        ")
    return `<h2>${f.id}층 ${esc(f.name)}</h2>\n      <ul>\n        ${items}\n      </ul>`
  }).join("\n      ")

  return `<main style="position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">
      <h1>${esc(SITE.name)} 홈페이지 제작 사례 ${CASES.length}곳</h1>
      <p>템플릿 없이 직접 디자인하고 코딩한 업종별 홈페이지 사례입니다. 업종별로 손님이 망설이는 이유를 먼저 찾고, 전화·예약·카카오톡 상담으로 이어지게 구성했습니다. 전국 비대면 제작, 13만원 정찰제(VAT 포함), 월 관리비 0원, 1주 완성.</p>
      ${floors}
      <p><a href="${esc(SITE.kakaoUrl)}">카카오톡으로 상담하기</a> · <a href="${ORIGIN}/">디자인 지음 홈페이지 제작 안내</a></p>
    </main>`
}

// 메인 정적 요약: 메인에 직접 쓴 실제 고객 외의 사례를 한 줄로
function mainCasesLine() {
  const rest = CASES.filter((c) => !c.isReal)
  return `<li>업종별 사례 ${rest.length}곳: ${esc(rest.map((c) => `${c.category} ${c.name}`).join(", "))}. 전체 목록은 <a href="${PORTFOLIO_URL}">업종별 사례 페이지</a>에서 볼 수 있습니다.</li>`
}

// llms.txt 제작 사례 부분
function llmsCases() {
  const real = CASES.filter((c) => c.isReal).map((c) => {
    const review = c.review ? ` 사장님 후기: "${c.review.quote}"` : ""
    return `- ${label(c)}: ${c.solution}${review}${c.siteUrl ? ` (${c.siteUrl})` : ""}`
  })
  const floors = FLOORS.map((f) => {
    const items = byFloor(f.id).filter((c) => !c.isReal).map((c) => `- ${c.category} · ${c.name}: ${c.headline}${c.siteUrl ? ` (${c.siteUrl})` : ""}`)
    return items.length ? `### ${f.name}\n\n${items.join("\n")}` : ""
  }).filter(Boolean)
  const main = MAIN_CASE_IDS.map((id) => CASES.find((c) => c.id === id)?.name).filter(Boolean).join(", ")
  return [
    `전체 ${CASES.length}곳. 업종별 전체 목록: ${PORTFOLIO_URL}`,
    `메인 페이지에 소개하는 대표 사례: ${main}`,
    `### 실제 고객\n\n${real.join("\n")}`,
    `업종별 사례(실제 매장이 아닌, 업종에 맞춰 직접 만든 제작 예시)는 아래와 같습니다.`,
    ...floors,
  ].join("\n\n")
}

const llmsTemplate = path.resolve(import.meta.dirname, "seo/llms.txt")
const renderLlms = () => fs.readFileSync(llmsTemplate, "utf8").replace("{{CASES}}", llmsCases())

export const seoPlugin: Plugin = {
  name: "jieum-seo",
  transformIndexHtml: {
    order: "pre",
    handler(html, ctx) {
      if (ctx.path.startsWith("/portfolio/")) {
        return html
          .replaceAll("__CASE_COUNT__", String(CASES.length))
          .replace("<!--seo:itemlist-->", itemListJsonLd())
          .replace("<!--seo:summary-->", portfolioSummary())
      }
      return html.replace("<!--seo:main-cases-->", mainCasesLine())
    },
  },
  // 개발 서버: /llms.txt 를 템플릿에서 바로 만들어 응답
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url !== "/llms.txt") return next()
      res.setHeader("Content-Type", "text/plain; charset=utf-8")
      res.end(renderLlms())
    })
  },
  // 빌드: dist/llms.txt 로 내보냄
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "llms.txt", source: renderLlms() })
  },
}
