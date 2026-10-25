// 사례 사이트 전체 화면(폭 425) + 3:4 썸네일을 WebP로 저장
// 사용: node scripts/capture-case.cjs public/images/portfolio 아이디=https://사이트주소/ [아이디=주소 ...]
// → public/images/portfolio/아이디.webp(전체 화면) + thumbs/아이디.webp(3:4 썸네일) 생성
// 이 프로젝트에 playwright가 없으면 같은 PC의 다른 프로젝트에 설치된 것을 빌려 씀
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("C:/Users/user/Desktop/neulsoop/node_modules/playwright"));
}
const fs = require("fs");
const path = require("path");

const [outDir, ...pairs] = process.argv.slice(2);
const W = 425;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: W, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const conv = await ctx.newPage();
  for (const pair of pairs) {
    const [id, url] = pair.split("=");
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    // 지연 로딩 이미지를 모두 불러오도록 끝까지 천천히 스크롤
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const png = await page.screenshot({ fullPage: true });
    const b64 = png.toString("base64");
    const out = await conv.evaluate(async ({ b64, W }) => {
      const img = new Image();
      img.src = "data:image/png;base64," + b64;
      await img.decode();
      const enc = (w, h) => {
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        c.getContext("2d").drawImage(img, 0, 0);
        return c.toDataURL("image/webp", 0.82).split(",")[1];
      };
      return { full: enc(img.width, img.height), thumb: enc(W, Math.round((W * 4) / 3)), h: img.height };
    }, { b64, W });
    fs.writeFileSync(path.join(outDir, `${id}.webp`), Buffer.from(out.full, "base64"));
    fs.writeFileSync(path.join(outDir, "thumbs", `${id}.webp`), Buffer.from(out.thumb, "base64"));
    console.log(id, W + "x" + out.h);
  }
  await browser.close();
})();
