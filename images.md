# images.md — 디자인 지음 홈페이지 필요 이미지

## 공통 스타일 문구
실제 사례 사이트의 모바일 화면(폭 425px, 모션 줄이기 상태) 그대로의 전체 캡처. 색보정·편집 없이 원본 화면을 쓰고, 카드 썸네일은 모니터·휴대폰 목업 이미지(800×800)를 씀.
(사진 생성용 이미지가 아니라 화면 캡처라 생성 프롬프트는 없습니다.)

## 새 사례 이미지 만드는 법
```
node scripts/capture-case.cjs public/images/portfolio 아이디=https://사이트주소/
```
- `public/images/portfolio/아이디.webp`(전체 화면)가 생깁니다. 함께 생기는 `thumbs/아이디.webp`(3:4)는 사이트에서 쓰지 않으니 지워도 됩니다.
- 카드 썸네일은 목업 이미지(정사각)를 800×800 WebP로 줄여 `thumbs-mockup/아이디.webp`에 둡니다.
- 아이디는 `src/lib/content.ts`의 사례 `id`, `image`, `thumb` 경로와 똑같이 맞춥니다.

## 이미지 목록 요약
| 이미지명 | 사용 섹션 | 사이즈 (px) | 비율 | 용도 |
|---|---|---|---|---|
| og-image.png | 메인 공유 미리보기 | 1200×630 | 1.91:1 | 카카오톡·SNS 공유 (기존) |
| og-portfolio.png | 업종별 사례 페이지 공유 미리보기 | 1200×630 | 1.91:1 | 카카오톡·SNS 공유 |
| pilatesjyoung.jpg / thumbs-mockup/pilatesjyoung.webp | 필라테스 · 필라테스 제이영 (실제 고객) | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| weolcheon.webp / thumbs-mockup/weolcheon.webp | 특수청소 · 월천환경 (실제 고객) | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| ggotggot.webp / thumbs-mockup/ggotggot.webp | 필라테스 · 꼿꼿필라테스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| ongyeol.webp / thumbs-mockup/ongyeol.webp | 한의원 · 온결한의원 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| bareunteo.jpg / thumbs-mockup/bareunteo.webp | 철거 · 바른터철거 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| barodam.jpg / thumbs-mockup/barodam.webp | 포장이사 · 바로담이사 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| dodum.webp / thumbs-mockup/dodum.webp | 세무사 · 세무회계 돋움 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| kkujun.jpg / thumbs-mockup/kkujun.webp | 헬스장 · 꾸준피트니스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| cheongeum.webp / thumbs-mockup/cheongeum.webp | 누수탐지 · 청음누수탐지 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| toomyeong.webp / thumbs-mockup/toomyeong.webp | 누수탐지 · 투명누수 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| sonbom.webp / thumbs-mockup/sonbom.webp | 집수리 · 손봄집수리 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| soridam.webp / thumbs-mockup/soridam.webp | 음향설비 · 소리담음향 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| hangyeol.webp / thumbs-mockup/hangyeol.webp | 체결부품 제조 · 한결체결산업 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| neulsoop.webp / thumbs-mockup/neulsoop.webp | 플라워·플랜트 · 늘숲 플라워 & 플랜트 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| jeongyeon.webp / thumbs-mockup/jeongyeon.webp | 노무법인 · 노무법인 정연 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| stocklog.webp / thumbs-mockup/stocklog.webp | 재고관리 서비스 · 스톡로그 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| bbodeuk.webp / thumbs-mockup/bbodeuk.webp | 입주청소 · 뽀득하우스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| deundeun.webp / thumbs-mockup/deundeun.webp | 자동차 정비 · 든든오토케어 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| haruzip.webp / thumbs-mockup/haruzip.webp | 인테리어 · 하루집 인테리어 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| raun.webp / thumbs-mockup/raun.webp | 뷰티 브랜드 · 라운 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| hwadam.webp / thumbs-mockup/hwadam.webp | 고깃집 · 화담숯불 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| malgeun.webp / thumbs-mockup/malgeun.webp | 피부과 · 맑은결피부과의원 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| gyeolon.webp / thumbs-mockup/gyeolon.webp | 가구점 · 결온가구 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| neulgyeot.webp / thumbs-mockup/neulgyeot.webp | 방문요양센터 · 늘곁 방문요양센터 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| saebom.webp / thumbs-mockup/saebom.webp | 부동산 · 새봄집 공인중개사사무소 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| orangead.webp / thumbs-mockup/orangead.webp | 간판 · 오렌지애드컴퍼니 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| okhome.webp / thumbs-mockup/okhome.webp | 집수리 · 오케이집수리 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| ulsanems.webp / thumbs-mockup/ulsanems.webp | 사설구급차 · 중앙응급환자이송단 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| dalbit.webp / thumbs-mockup/dalbit.webp | 캠핑장 · 달빛계곡 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| lowhigh.webp / thumbs-mockup/lowhigh.webp | 바버샵 · 로우앤하이 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| bareungil.webp / thumbs-mockup/bareungil.webp | 행정사 · 바른길 행정사사무소 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| bomgyeol.webp / thumbs-mockup/bomgyeol.webp | 플라워샵 · 봄결 플라워 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| forme.webp / thumbs-mockup/forme.webp | 학원 · 포름미술학원 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| miso.webp / thumbs-mockup/miso.webp | 필라테스 · 미소필라테스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| freshfruit.webp / thumbs-mockup/freshfruit.webp | 카페 · 프레쉬프루잇 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| minerae.webp / thumbs-mockup/minerae.webp | 향수 브랜드 · 미네레 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| baro.webp / thumbs-mockup/baro.webp | 행정사 · 바로 행정사사무소 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| hanul.webp / thumbs-mockup/hanul.webp | 행정사 · 한울 글로벌 행정사사무소 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| cleancut.webp / thumbs-mockup/cleancut.webp | 철거·원상복구 · 클린컷 환경 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| awningspace.webp / thumbs-mockup/awningspace.webp | 어닝 시공 · 어닝스페이스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| jianlaw.webp / thumbs-mockup/jianlaw.webp | 변호사 · 법률사무소 지안 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| saessak.webp / thumbs-mockup/saessak.webp | 아동발달센터 · 새싹나무 아동발달센터 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| cheongramjae.jpg / thumbs-mockup/cheongramjae.webp | 한옥 스테이 · 청람재 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| hansarang.jpg / thumbs-mockup/hansarang.webp | 요양원 · 한사랑요양원 (실제 고객) | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| aether.webp / thumbs-mockup/aether.webp | 필라테스 · 에테르 필라테스 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| lumiclean.webp / thumbs-mockup/lumiclean.webp | 입주청소 · 루미클린 | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| nusulee.jpg / thumbs-mockup/nusulee.webp | 누수탐지 · 누수리 (실제 고객) | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |
| baekkot.webp / thumbs-mockup/baekkot.webp | 요양원 · 배꽃너싱홈 (실제 고객) | 425×전체 높이 / 800×800 | — / 1:1 | 팝업 전체 화면 / 카드 목업 썸네일 |

## 이미지별 상세

### og-portfolio.png
- 경로: `/public/og-portfolio.png`
- 사용: `portfolio/index.html`의 og:image, twitter:image, sitemap 이미지
- 사이즈: 1200×630px, PNG
- 구성: 왼쪽에 "디자인 지음 / 업종별 홈페이지 사례"(홈페이지 단어만 주황 면), 아래 "사장님 업종부터 찾아보세요. 13만원 정찰제 · 전국 비대면 제작". 오른쪽에 사례 썸네일 12개를 4열로 엇갈려 배치하고 위·오른쪽으로 잘리게 둠.
- 다시 만들 때: 썸네일 구성을 바꾸고 싶으면 대표 사례 썸네일로 같은 구도를 유지합니다.

### 사례 화면 (59곳)
- 경로: `/public/images/portfolio/아이디.webp`, `/public/images/portfolio/thumbs-mockup/아이디.webp`
- 사용: 카드(메인 「지음이 만든 홈페이지」, 업종별 사례 페이지)는 썸네일, 자세히 보기 팝업은 전체 화면
- 카드 썸네일은 모니터·휴대폰 목업(800×800 정사각)입니다. 예전 3:4 썸네일(`thumbs/`)은 쓰지 않아서 지웠습니다.
- 사이즈: 전체 화면은 폭 425px × 사이트 전체 높이, 썸네일은 800×800px(1:1), WebP
- 예외: WebP는 높이 16,383px까지만 저장돼서, 그보다 긴 화면(pilatesjyoung, bareunteo, barodam, kkujun, jeongpyo, noteend, cheongramjae, hansarang, nusulee)은 전체 화면만 JPG로 저장합니다. 썸네일은 그대로 WebP입니다.
