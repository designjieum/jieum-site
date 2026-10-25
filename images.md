# images.md — 디자인 지음 홈페이지 필요 이미지

## 공통 스타일 문구
실제 사례 사이트의 모바일 화면(폭 425px, 모션 줄이기 상태) 그대로의 전체 캡처. 색보정·편집 없이 원본 화면을 쓰고, 썸네일은 첫 화면 윗부분을 3:4로 자름.
(사진 생성용 이미지가 아니라 화면 캡처라 생성 프롬프트는 없습니다.)

## 새 사례 이미지 만드는 법
```
node scripts/capture-case.cjs public/images/portfolio 아이디=https://사이트주소/
```
- `public/images/portfolio/아이디.webp`(전체 화면)와 `thumbs/아이디.webp`(3:4 썸네일)가 함께 생깁니다.
- 아이디는 `src/lib/content.ts`의 사례 `id`, `image`, `thumb` 경로와 똑같이 맞춥니다.

## 이미지 목록 요약
| 이미지명 | 사용 섹션 | 사이즈 (px) | 비율 | 용도 |
|---|---|---|---|---|
| og-image.png | 메인 공유 미리보기 | 1200×630 | 1.91:1 | 카카오톡·SNS 공유 (기존) |
| og-portfolio.png | 업종별 사례 페이지 공유 미리보기 | 1200×630 | 1.91:1 | 카카오톡·SNS 공유 |
| cheongeum.webp / thumbs/cheongeum.webp | 누수탐지 · 청음누수탐지 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| toomyeong.webp / thumbs/toomyeong.webp | 누수탐지 · 투명누수 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| sonbom.webp / thumbs/sonbom.webp | 집수리 · 손봄집수리 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| soridam.webp / thumbs/soridam.webp | 음향설비 · 소리담음향 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| hangyeol.webp / thumbs/hangyeol.webp | 체결부품 제조 · 한결체결산업 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| neulsoop.webp / thumbs/neulsoop.webp | 플라워·플랜트 · 늘숲 플라워 & 플랜트 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| jeongyeon.webp / thumbs/jeongyeon.webp | 노무법인 · 노무법인 정연 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| stocklog.webp / thumbs/stocklog.webp | 재고관리 서비스 · 스톡로그 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| bbodeuk.webp / thumbs/bbodeuk.webp | 입주청소 · 뽀득하우스 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| deundeun.webp / thumbs/deundeun.webp | 자동차 정비 · 든든오토케어 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| haruzip.webp / thumbs/haruzip.webp | 인테리어 · 하루집 인테리어 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| raun.webp / thumbs/raun.webp | 뷰티 브랜드 · 라운 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| hwadam.webp / thumbs/hwadam.webp | 고깃집 · 화담숯불 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| malgeun.webp / thumbs/malgeun.webp | 피부과 · 맑은결피부과의원 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| gyeolon.webp / thumbs/gyeolon.webp | 가구점 · 결온가구 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| neulgyeot.webp / thumbs/neulgyeot.webp | 방문요양센터 · 늘곁 방문요양센터 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| saebom.webp / thumbs/saebom.webp | 부동산 · 새봄집 공인중개사사무소 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| orangead.webp / thumbs/orangead.webp | 간판 · 오렌지애드컴퍼니 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| okhome.webp / thumbs/okhome.webp | 집수리 · 오케이집수리 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| ulsanems.webp / thumbs/ulsanems.webp | 사설구급차 · 중앙응급환자이송단 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| dalbit.webp / thumbs/dalbit.webp | 캠핑장 · 달빛계곡 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| lowhigh.webp / thumbs/lowhigh.webp | 바버샵 · 로우앤하이 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| bareungil.webp / thumbs/bareungil.webp | 행정사 · 바른길 행정사사무소 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| bomgyeol.webp / thumbs/bomgyeol.webp | 플라워샵 · 봄결 플라워 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| forme.webp / thumbs/forme.webp | 학원 · 포름미술학원 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| miso.webp / thumbs/miso.webp | 필라테스 · 미소필라테스 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| freshfruit.webp / thumbs/freshfruit.webp | 카페 · 프레쉬프루잇 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |
| minerae.webp / thumbs/minerae.webp | 향수 브랜드 · 미네레 | 425×전체 높이 / 425×567 | — / 3:4 | 팝업 전체 화면 / 카드 썸네일 |

## 이미지별 상세

### og-portfolio.png
- 경로: `/public/og-portfolio.png`
- 사용: `portfolio/index.html`의 og:image, twitter:image, sitemap 이미지
- 사이즈: 1200×630px, PNG
- 구성: 왼쪽에 "디자인 지음 / 업종별 홈페이지 사례"(홈페이지 단어만 주황 면), 아래 "사장님 업종부터 찾아보세요. 13만원 정찰제 · 전국 비대면 제작". 오른쪽에 사례 썸네일 12개를 4열로 엇갈려 배치하고 위·오른쪽으로 잘리게 둠.
- 다시 만들 때: 썸네일 구성을 바꾸고 싶으면 대표 사례 썸네일로 같은 구도를 유지합니다.

### 사례 화면 (28곳)
- 경로: `/public/images/portfolio/아이디.webp`, `/public/images/portfolio/thumbs/아이디.webp`
- 사용: 카드(메인 「지음이 만든 홈페이지」, 업종별 사례 페이지)는 썸네일, 자세히 보기 팝업은 전체 화면
- 사이즈: 전체 화면은 폭 425px × 사이트 전체 높이, 썸네일은 425×567px(3:4), WebP
