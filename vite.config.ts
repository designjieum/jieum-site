import path from "path"
import { defineConfig, type Connect, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { seoPlugin } from "./vite-seo.ts"

// 개발·미리보기 서버에서 /portfolio 로 들어와도 사례 페이지로 이동
// (끝에 / 가 없으면 Vite가 메인 페이지를 대신 보여 줌. Cloudflare Pages는 원래 자동 이동)
const redirectPortfolio: Connect.NextHandleFunction = (req, res, next) => {
  const [pathname, query] = (req.url ?? "").split("?")
  if (pathname !== "/portfolio") return next()
  res.statusCode = 301
  res.setHeader("Location", `/portfolio/${query ? `?${query}` : ""}`)
  res.end()
}

const portfolioSlash: Plugin = {
  name: "portfolio-trailing-slash",
  configureServer: (server) => void server.middlewares.use(redirectPortfolio),
  configurePreviewServer: (server) => void server.middlewares.use(redirectPortfolio),
}

export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioSlash, seoPlugin],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  // 페이지 2개: 메인(/) + 사례 페이지(/portfolio/)
  build: {
    rolldownOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "index.html"),
        portfolio: path.resolve(import.meta.dirname, "portfolio/index.html"),
      },
    },
  },
})
