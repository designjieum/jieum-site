// 사이트의 모든 문구·연락처·링크를 이 파일 한 곳에서 관리합니다.
// [확인 필요] 표시가 붙은 값은 확정 전 임시 값입니다.

export const SITE = {
  name: "디자인 지음",
  category: "매장, 브랜드, 기업 맞춤",
  kakaoUrl: "https://pf.kakao.com/_IuxfaX/chat",
  instagramUrl: "https://www.instagram.com/jieum.homepage/",
  blogUrl: "https://blog.naver.com/design-jieum",
  email: "designjieum@gmail.com",
  hours: "연중무휴 09:00~22:00",
};

export const BUSINESS = {
  owner: "김재협",
  bizNumber: "505-33-26070",
  address: "경기도 양주시 부흥로 1936, 4층 406호",
  phone: "0507-1314-1503",
  // true면 tel: 링크와 하단 [전화] 버튼이 켜집니다
  phoneConfirmed: true,
  phoneHref: "tel:050713141503",
};

export const NAV = [
  { label: "업종별 사례", href: "/portfolio/" },
  { label: "비용", href: "#price" },
  { label: "FAQ", href: "#faq" },
];

// 사례 페이지(/portfolio/)에서는 메인 섹션으로 돌아가는 주소 (current: 지금 보고 있는 페이지 표시)
export const PORTFOLIO_NAV = [
  { label: "업종별 사례", href: "/portfolio/", current: true },
  { label: "비용", href: "/#price" },
  { label: "FAQ", href: "/#faq" },
];

export const CTA_LABEL = "카톡으로 1분 상담 받기";

export const HERO = {
  kicker: "템플릿이 아닌 직접 디자인하고 코딩하는 홈페이지 · 13만원 정찰제",
  // sign: true인 단어는 간판(주황 면)으로 점등, join: true면 다음 조각과 띄우지 않고 붙임
  titleLines: [
    [{ text: "홈페이지", sign: true }, { text: "보고" }],
    [{ text: "손님이" }, { text: "연락해요." }],
  ],
  desc: [
    "사장님 이야기를 먼저 듣고,",
    "전화·예약이 오는 홈페이지를 1주 안에 열어 드려요.",
  ],
  secondary: { label: "만든 홈페이지 먼저 보기", href: "#street" },
  facts: [
    { value: "13만원", label: "VAT 포함" },
    { value: "0원", label: "월 관리비" },
    { value: "1주", label: "오픈까지" },
  ],
};

export interface CaseStudy {
  id: string;
  category: string;
  name: string;
  location?: string; // 실제 고객만 표기 (시안은 동네 이름 없이 "캠핑장 시안"처럼)
  isReal: boolean; // true: 실제 고객, false: 업종별로 미리 만들어 본 시안
  floor: FloorId; // 사례 페이지 층별 안내판의 층 (업종군)
  image: string; // 전체 페이지 스크린샷 (폭 425px, 자세히 보기에서 사용)
  thumb: string; // 카드용 3:4 썸네일 (윗부분 크롭)
  siteUrl?: string; // 실제 사이트 주소: 있으면 자세히 보기에 [실제 사이트 보기] 링크가 켜짐
  problem: string;
  solution: string;
  // 카드에 보이는 한 줄: 실제 고객은 사장님 한마디, 시안은 이렇게 만들었어요
  headline: string;
  review?: { quote: string; author: string };
}

export const STREET = {
  titleLines: ["지음이 만든", "홈페이지"],
  desc: "실제 고객 매장과, 업종별 홈페이지예요. 사장님 업종과 가까운 것부터 보세요.",
  realLabel: "실제 고객", // 화면에는 안 보이고 스크린리더에만 읽힘
  realProblemLabel: "사장님의 고민",
  exampleProblemLabel: "이 업종에서 자주 듣는 고민",
  solutionLabel: "이렇게 만들었어요",
  reviewLabel: "사장님 한마디",
  detailLabel: "자세히 보기",
  siteLinkLabel: "사이트 보기",
  exampleSiteLinkLabel: "사이트 둘러보기",
  nextSign: { title: "다음은", sub: "사장님 가게", cta: "상담하기" },
  // 메인 거리 끝: 사례 페이지로 가는 간판, 설명 아래 링크
  allSign: {
    label: "업종별 사례",
    title: (total: number) => `${total}곳 전부 보기`,
    more: (count: number) => `+${count}곳`,
    caption: "이 골목 안쪽에 더 있어요",
    desc: "사장님 업종과 가까운 가게를 층별로 찾아보세요.",
    cta: "업종별 사례 보기",
  },
  allLink: (total: number) => `업종별 사례 ${total}곳 전부 보기`,
  allHref: "/portfolio/",
};

// 사례 페이지(/portfolio/): 상가 층별 안내판. 층 하나 = 업종군 하나
export type FloorId = 1 | 2 | 3 | 4 | 5 | 6;

export const FLOORS: { id: FloorId; name: string }[] = [
  { id: 1, name: "외식·여가" },
  { id: 2, name: "미용·헬스" },
  { id: 3, name: "꽃·가구·브랜드" },
  { id: 4, name: "수리·설비·시공" },
  { id: 5, name: "학원·요양·의료" },
  { id: 6, name: "서비스·기업·전문직" },
];

// 맨 위 공실 층 번호 (층이 늘면 자동으로 올라감)
export const VACANT_FLOOR = `${FLOORS.length + 1}F`;

export const PORTFOLIO = {
  kicker: "홈페이지 제작 사례 · 전국 어디서나 비대면 제작",
  titleLines: ["업종별로", "찾아보세요."],
  desc: (total: number) => `업종별로 만든 홈페이지 ${total}곳이에요. 사장님 업종이 있는 층부터 둘러보세요.`,
  boardTitle: "층별 안내",
  countSuffix: "곳",
  allLabel: "전체 보기",
  allCode: "전체",
  floorsTitle: "층별 가게",
  barLabel: "지금 보는 층",
  // 층마다 마지막 칸: 비어 있는 점포
  vacantSlot: { sign: "빈 점포", title: "사장님 가게 자리", desc: "이 층에 들어올 다음 가게를 기다려요.", cta: "이 자리 상담하기" },
  // 마지막 장면: 맨 위층 공실 (층 번호는 층 수 + 1로 자동)
  closing: {
    title: "다음 간판은 사장님 가게예요.",
    desc: "업종이 없어도 괜찮아요. 처음 만드는 업종도 1주 안에 열어 드려요.",
  },
  vacancy: { label: "공실", sub: "사장님 가게 자리" },
};

// 메인 「지음이 만든 홈페이지」에 보여 줄 10곳 (이 순서대로). 나머지는 사례 페이지(/portfolio/)에서만
export const MAIN_CASE_IDS = ["haruzip", "deundeun", "bbodeuk", "hangyeol", "hwadam", "saebom", "lowhigh", "toomyeong", "jeongyeon", "bareungil"];

// 새로 만든 사례를 앞에
export const CASES: CaseStudy[] = [
  {
    id: "cheongeum",
    category: "누수탐지",
    name: "청음누수탐지",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/cheongeum.webp",
    thumb: "/images/portfolio/thumbs/cheongeum.webp",
    siteUrl: "https://cheongeum.pages.dev/",
    problem: "누수는 바닥을 어디까지 깨야 할지 몰라서, 손님들이 공사비부터 걱정하며 전화를 망설여요.",
    solution: "계량기·보일러 압력 같은 증상별 안내와 탐지 장비를 먼저 보여 주고, 시작 가격과 못 찾으면 탐지비 0원 견적표를 정리해 긴급출동 전화로 이었어요.",
    headline: "못 찾으면 탐지비 0원, 견적표를 먼저 보여 줬어요.",
  },
  {
    id: "toomyeong",
    category: "누수탐지",
    name: "투명누수",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/toomyeong.webp",
    thumb: "/images/portfolio/thumbs/toomyeong.webp",
    siteUrl: "https://toomyeong.pages.dev/",
    problem: "빌라 누수는 윗집과 아랫집 중 어디서 새는지부터 다툼이 생겨서, 손님들이 원인을 눈으로 확인하고 싶어 해요.",
    solution: "내시경·열화상 화면을 손님 휴대폰으로 같이 보는 탐지 방식과 정찰 견적표, 누수 보고서, 재누수 무상 보증을 정리해 사진 톡톡 상담으로 이었어요.",
    headline: "탐지 화면을 손님 휴대폰으로 같이 보는 과정을 앞세웠어요.",
  },
  {
    id: "sonbom",
    category: "집수리",
    name: "손봄집수리",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/sonbom.webp",
    thumb: "/images/portfolio/thumbs/sonbom.webp",
    siteUrl: "https://sonbom.pages.dev/",
    problem: "도어락이나 수전처럼 작은 고장은 이 정도로 불러도 되나 싶어서, 손님들이 연락을 미뤄요.",
    solution: "현관부터 벽까지 집 안을 따라 내려가며 고장별 시작 가격을 보여 주고, 사진 견적과 출장비 무료 지역을 앞세워 톡톡 상담으로 이었어요.",
    headline: "집 안을 따라 내려가며 고장별 시작 가격을 찾게 했어요.",
  },
  {
    id: "soridam",
    category: "음향설비",
    name: "소리담음향",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/soridam.webp",
    thumb: "/images/portfolio/thumbs/soridam.webp",
    siteUrl: "https://soridam.pages.dev/",
    problem: "교회·학교 음향설비는 금액이 커서, 담당자가 업체 실적과 설계 근거부터 꼼꼼히 비교해요.",
    solution: "보고서 형식으로 실적과 음향·방송·영상·회의 사업 범위, 현장별 시공 기록을 정리하고, 현장 측정 견적 신청으로 이었어요.",
    headline: "업체 비교용 보고서처럼 실적과 시공 기록을 정리했어요.",
  },
  {
    id: "hangyeol",
    category: "체결부품 제조",
    name: "한결체결산업",
    isReal: false,
    floor: 6,
    image: "/images/portfolio/hangyeol.webp",
    thumb: "/images/portfolio/thumbs/hangyeol.webp",
    siteUrl: "https://hangyeol-ej2.pages.dev/",
    problem: "건설·태양광 현장은 규격과 납기가 가장 중요해서, 구매 담당자가 공장 역량부터 확인해요.",
    solution: "선재 입고부터 출고까지 일곱 단계 공정을 스크롤로 보여 주고, 규격표와 당일 출고 기준, 도면 견적 요청을 한 흐름으로 묶었어요.",
    headline: "볼트 하나가 만들어지는 일곱 공정을 그대로 보여 줬어요.",
  },
  {
    id: "neulsoop",
    category: "플라워·플랜트",
    name: "늘숲 플라워 & 플랜트",
    isReal: false,
    floor: 3,
    image: "/images/portfolio/neulsoop.webp",
    thumb: "/images/portfolio/thumbs/neulsoop.webp",
    siteUrl: "https://neulsoop.pages.dev/",
    problem: "꽃 선물부터 실내조경, 클래스까지 하는 일이 많아서, 손님이 원하는 걸 어디서 물어야 할지 헷갈려요.",
    solution: "꽃·식물·클래스를 땅 위에서 뿌리까지 깊이에 따라 나눠 보여 주고, 서비스별 시작 가격과 실내조경 진행 순서를 정리해 카톡 상담으로 이었어요.",
    headline: "꽃·식물·클래스를 흙 깊이에 따라 나눠 보여 줬어요.",
  },
  {
    id: "jeongyeon",
    category: "노무법인",
    name: "노무법인 정연",
    isReal: false,
    floor: 6,
    image: "/images/portfolio/jeongyeon.webp",
    thumb: "/images/portfolio/thumbs/jeongyeon.webp",
    siteUrl: "https://jeongyeon.pages.dev/",
    problem: "노무 상담은 비용과 비밀 유지가 걱정돼서, 사장님도 근로자도 첫 연락을 망설여요.",
    solution: "담당 노무사 직접 상담과 첫 상담 무료·비밀 보장을 앞세우고, 업무분야와 구성원, 업무사례를 정리해 상담 신청으로 이었어요.",
    headline: "첫 상담 무료와 비밀 보장을 첫 화면에 앞세웠어요.",
  },
  {
    id: "stocklog",
    category: "재고관리 서비스",
    name: "스톡로그",
    isReal: false,
    floor: 6,
    image: "/images/portfolio/stocklog.webp",
    thumb: "/images/portfolio/thumbs/stocklog.webp",
    siteUrl: "https://stocklog.pages.dev/",
    problem: "엑셀로 재고를 관리하는 회사는 새 프로그램이 복잡할까 봐 도입을 미뤄요.",
    solution: "엑셀 재고가 안 맞는 네 가지 상황을 먼저 짚고, 실제 대시보드 화면과 요금제, 무료 체험을 보여 줘 가입으로 이었어요.",
    headline: "엑셀이 안 맞는 순간들을 먼저 짚고 실제 화면을 보여 줬어요.",
  },
  {
    id: "bbodeuk",
    category: "입주청소",
    name: "뽀득하우스",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/bbodeuk.webp",
    thumb: "/images/portfolio/thumbs/bbodeuk.webp",
    siteUrl: "https://bbodeuk.pages.dev/",
    problem: "입주청소는 '가서 보니 오염이 심해서 추가 요금이 붙는다'는 이야기가 많아서, 손님들이 견적 전화부터 망설여요.",
    solution: "평당 단가 정찰제와 평수 계산기로 가격을 먼저 보여 주고, 창틀·욕실·배수구 전후 사진과 48시간 무상 A/S, 작업 순서를 정리해 전화·카톡 견적으로 이었어요.",
    headline: "평수만 알면 끝나는 정찰제 가격을 먼저 보여 줬어요.",
  },
  {
    id: "deundeun",
    category: "자동차 정비",
    name: "든든오토케어",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/deundeun.webp",
    thumb: "/images/portfolio/thumbs/deundeun.webp",
    siteUrl: "https://deundeun-b6s.pages.dev/",
    problem: "정비소는 '안 해도 될 작업까지 권하지 않을까' 하는 걱정 때문에, 손님들이 차를 맡기기 전부터 망설여요.",
    solution: "손대기 전에 점검 사진과 견적을 먼저 보내는 원칙, 부품비·공임을 나눈 견적서와 정비 항목별 시작 가격, 무상 재점검을 정리해 전화 입고 예약과 톡톡 견적으로 이었어요.",
    headline: "작업 전에 사진과 견적부터 보내는 정비소라는 걸 앞세웠어요.",
  },
  {
    id: "haruzip",
    category: "인테리어",
    name: "하루집 인테리어",
    isReal: false,
    floor: 4,
    image: "/images/portfolio/haruzip.webp",
    thumb: "/images/portfolio/thumbs/haruzip.webp",
    siteUrl: "https://haruzip.pages.dev/",
    problem: "인테리어는 '계약하고 나면 비용이 늘어난다', '완성 모습을 미리 알 수 없다'는 불안 때문에 상담 신청부터 미루게 돼요.",
    solution: "공사별 시작 가격과 자재비·인건비·철거비를 나눈 항목별 견적서, 실측 치수로 만든 3D 시안, 2년 무상 A/S를 정리해 무료 방문 실측 예약으로 이었어요.",
    headline: "계약 전에 3D 시안과 항목별 견적서로 완성 모습과 비용을 보여 줬어요.",
  },
  {
    id: "raun",
    category: "뷰티 브랜드",
    name: "라운",
    isReal: false,
    floor: 2,
    image: "/images/portfolio/raun.webp",
    thumb: "/images/portfolio/thumbs/raun.webp",
    siteUrl: "https://raun-site.pages.dev/",
    problem: "신제품을 알릴 때 성분과 설명만 늘어놓으면, 제품이 가진 이야기와 감성이 잘 전해지지 않아요.",
    solution: "조향 스토리, 탑·미들·베이스 노트, 텍스처와 성분을 흐름에 따라 보여 주고, 사전 예약으로 이어지게 했어요.",
    headline: "제품 이야기와 노트 구성을 따라 사전 예약으로 이었어요.",
  },
  {
    id: "hwadam",
    category: "고깃집",
    name: "화담숯불",
    isReal: false,
    floor: 1,
    image: "/images/portfolio/hwadam.webp",
    thumb: "/images/portfolio/thumbs/hwadam.webp",
    siteUrl: "https://hwadam.pages.dev/",
    problem: "저녁마다 '지금 자리 있어요?', '단체 몇 명까지 돼요?' 묻는 전화가 몰리는데, 고기 굽느라 제대로 받기 어려웠어요.",
    solution: "지금 영업 중인지와 라스트오더까지 남은 시간을 바로 보여 주고, 인원별 룸 배치와 가격이 적힌 전체 메뉴, 주차·오시는 길을 한 페이지에 정리해 전화·네이버 예약으로 이었어요.",
    headline: "지금 갈 수 있는지와 단체 룸 정보를 먼저 보여 줬어요.",
  },
  {
    id: "malgeun",
    category: "피부과",
    name: "맑은결피부과의원",
    isReal: false,
    floor: 2,
    image: "/images/portfolio/malgeun.webp",
    thumb: "/images/portfolio/thumbs/malgeun.webp",
    siteUrl: "https://malgeun-site.pages.dev/",
    problem: "'리쥬란 얼마예요?' 묻는 문의에 상담실장이 하루 종일 묶이는데, 의료법상 후기나 전후 사진으로 실력을 보여 주기도 어려워요.",
    solution: "1분 문진으로 일반 진료와 미용 시술을 나눠 비급여 가격까지 바로 보여 주고, 후기 대신 전문의가 상담부터 시술까지 직접 보는 진료 방식을 앞세웠어요.",
    headline: "1분 문진으로 진료 갈래와 비급여 가격을 먼저 보여 줬어요.",
  },
  {
    id: "gyeolon",
    category: "가구점",
    name: "결온가구",
    isReal: false,
    floor: 3,
    image: "/images/portfolio/gyeolon.webp",
    thumb: "/images/portfolio/thumbs/gyeolon.webp",
    siteUrl: "https://furniture-site-btb.pages.dev/",
    problem: "원목 가구는 사진만으로 결과 크기를 가늠하기 어려워, 가격만 묻고 매장까지는 오지 않는 손님이 많아요.",
    solution: "아침 식탁·오후 소파·밤 침실처럼 하루의 장면으로 가구를 보여 주고, 가격과 맞춤 제작 사례를 함께 담아 쇼룸 방문 예약으로 이었어요.",
    headline: "하루의 장면으로 가구를 보여 주고 쇼룸 방문 예약으로 이었어요.",
  },
  {
    id: "neulgyeot",
    category: "방문요양센터",
    name: "늘곁 방문요양센터",
    isReal: false,
    floor: 5,
    image: "/images/portfolio/neulgyeot.webp",
    thumb: "/images/portfolio/thumbs/neulgyeot.webp",
    siteUrl: "https://family-site-12c.pages.dev/",
    problem: "부모님 돌봄을 처음 알아보는 가족은 등급 신청부터 비용까지 몰라서, 어디에 무엇을 물어야 할지 막막해해요.",
    solution: "요양보호사의 하루를 시간대별로 보여 주고, 등급 신청 4단계와 본인부담 15% 비용을 미리 안내해 무료 방문상담 신청으로 이었어요.",
    headline: "등급 신청 절차와 비용을 먼저 안내해 무료 방문상담으로 이었어요.",
  },
  {
    id: "saebom",
    category: "부동산",
    name: "새봄집 공인중개사사무소",
    isReal: false,
    floor: 6,
    image: "/images/portfolio/saebom.webp",
    thumb: "/images/portfolio/thumbs/saebom.webp",
    siteUrl: "https://property-site-53g.pages.dev/",
    problem: "전세사기 소식이 잦아지면서, 처음 집을 구하는 손님일수록 계약 자체를 불안해하고 문의를 망설여요.",
    solution: "직접 가 본 매물만 보여 준다는 원칙과 계약 전 등기부 무료 권리분석을 앞세우고, 아파트·첫 집·상가·토지처럼 찾는 매물별로 안내해 전화 상담 예약으로 이었어요.",
    headline: "계약 전 무료 권리분석을 앞세워 전화 상담 예약으로 이었어요.",
  },
  {
    id: "orangead",
    category: "간판",
    name: "오렌지애드컴퍼니",
    location: "양주 고암동",
    isReal: true,
    floor: 4,
    image: "/images/portfolio/orangead.webp",
    thumb: "/images/portfolio/thumbs/orangead.webp",
    siteUrl: "https://orangead.co.kr/",
    problem: "조건이 매번 다른 견적 문의에 하나하나 답하느라 시간이 오래 걸렸어요.",
    solution: "필요한 내용을 미리 적어 보내는 견적 문의 흐름을 만들어, 문의가 정리된 상태로 도착하게 했어요.",
    headline: "“답변이 훨씬 간편해졌고, 문의 건수도 눈에 띄게 늘었어요.”",
    review: {
      quote: "문의에 답변하기가 훨씬 간편해졌고, 실제로 문의 건수도 눈에 띄게 늘었습니다.",
      author: "양주 오렌지애드컴퍼니 대표",
    },
  },
  {
    id: "okhome",
    category: "집수리",
    name: "오케이집수리",
    location: "포천 소흘읍",
    isReal: true,
    floor: 4,
    image: "/images/portfolio/okhome.webp",
    thumb: "/images/portfolio/thumbs/okhome.webp",
    siteUrl: "https://okhome.co.kr/",
    problem: "'이것도 수리되나요?' 묻는 문의가 많은데, 작업 중엔 전화를 받기 힘들었어요.",
    solution: "수리 가능한 서비스를 한눈에 정리하고, 상담 신청과 전화 연결 버튼을 더했어요.",
    headline: "“수리 가능한지 묻는 문의가 확 줄어서 좋아요.”",
    review: {
      quote: "작업이 끝난 뒤 부재중 전화를 확인하고 연락드리면 되니 편하고, 수리 가능한지 묻는 문의도 확 줄어서 좋아요.",
      author: "포천 오케이집수리 대표",
    },
  },
  {
    id: "ulsanems",
    category: "사설구급차",
    name: "중앙응급환자이송단",
    location: "울산 삼산동",
    isReal: true,
    floor: 5,
    image: "/images/portfolio/ulsanems.webp",
    thumb: "/images/portfolio/thumbs/ulsanems.webp",
    siteUrl: "https://ulsanems.com/",
    problem: "급하게 구급차를 찾는 분들이 많아서, 사이트에 들어오자마자 전화 연결 버튼이 잘 보였으면 했어요.",
    solution: "어느 화면에서든 눈에 띄는 전화 버튼을 상단과 본문 곳곳에 두고, 24시간 출동 전화와 문자·카톡 상담 번호를 나눠 안내했어요. 이송 서비스 종류와 출동 지역, 이용 절차도 한 페이지에 정리했어요.",
    headline: "어느 화면에서든 바로 전화가 걸리도록 전화 버튼을 앞세웠어요.",
  },
  {
    id: "dalbit",
    category: "캠핑장",
    name: "달빛계곡",
    isReal: false,
    floor: 1,
    image: "/images/portfolio/dalbit.webp",
    thumb: "/images/portfolio/thumbs/dalbit.webp",
    siteUrl: "https://camping-site-6tl.pages.dev/",
    problem: "길을 묻는 전화와 자리별 가격 문의가 하루 종일 이어지기 쉬워요.",
    solution: "자리별 가격을 한눈에 비교하게 하고, 찾아오는 길을 자세히 안내해 같은 질문이 반복되지 않게 했어요.",
    headline: "자리별 가격 비교와 길 안내로 반복 문의를 줄였어요.",
  },
  {
    id: "lowhigh",
    category: "바버샵",
    name: "로우앤하이",
    isReal: false,
    floor: 2,
    image: "/images/portfolio/lowhigh.webp",
    thumb: "/images/portfolio/thumbs/lowhigh.webp",
    siteUrl: "https://lowhigh-site.pages.dev/",
    problem: "가격만 물어보고 예약까지 이어지지 않는 경우가 많아요.",
    solution: "서비스별 가격표와 스타일 모음을 보여 주고, 확인한 손님이 바로 예약하도록 이었어요.",
    headline: "가격과 스타일을 보고 바로 예약하게 이었어요.",
  },
  {
    id: "bareungil",
    category: "행정사",
    name: "바른길 행정사사무소",
    isReal: false,
    floor: 6,
    image: "/images/portfolio/bareungil.webp",
    thumb: "/images/portfolio/thumbs/bareungil.webp",
    siteUrl: "https://admin-site-a2m.pages.dev/",
    problem: "처분서를 받고 당황한 손님은 무엇부터 할지 몰라, 첫 상담이 설명으로 길어지기 쉬워요.",
    solution: "처분서 사진 한 장만 보내면 상담이 시작되게 하고, 기한과 진행 단계를 미리 안내했어요.",
    headline: "처분서 사진 한 장으로 상담이 시작되게 했어요.",
  },
  {
    id: "bomgyeol",
    category: "플라워샵",
    name: "봄결 플라워",
    isReal: false,
    floor: 3,
    image: "/images/portfolio/bomgyeol.webp",
    thumb: "/images/portfolio/thumbs/bomgyeol.webp",
    siteUrl: "https://flower-site.pages.dev/",
    problem: "꽃을 손질하는 동안에도 '얼마예요? 오늘 되나요?' 묻는 DM이 끊이지 않아요.",
    solution: "가격, 실제 크기, 당일 주문 마감 시간을 한 페이지에 모으고, 바로 네이버 예약으로 넘어가게 했어요.",
    headline: "가격·크기·당일 마감을 한 페이지에 모았어요.",
  },
  {
    id: "forme",
    category: "학원",
    name: "포름미술학원",
    isReal: false,
    floor: 5,
    image: "/images/portfolio/forme.webp",
    thumb: "/images/portfolio/thumbs/forme.webp",
    siteUrl: "https://academy-site-ay5.pages.dev/",
    problem: "'아이가 뭘 배우는지 모르겠다'는 걱정 때문에 상담이 등록으로 잘 이어지지 않아요.",
    solution: "매주 실기 기록 공유 같은 강점을 먼저 보여 주고, 무료 실기 진단 예약으로 첫 방문을 이끌었어요.",
    headline: "무료 실기 진단 예약으로 첫 방문을 이끌었어요.",
  },
  {
    id: "miso",
    category: "필라테스",
    name: "미소필라테스",
    isReal: false,
    floor: 2,
    image: "/images/portfolio/miso.webp",
    thumb: "/images/portfolio/thumbs/miso.webp",
    siteUrl: "https://soma-site-dzs.pages.dev/",
    problem: "'허리가 아픈데 해도 되나요?' 묻는 전화가 많은데, 1:1 수업 중엔 받을 수 없어요.",
    solution: "허리·골반, 목·어깨처럼 고민별로 수업을 먼저 확인하게 하고, 바로 레슨 예약으로 이었어요.",
    headline: "고민별 수업 안내에서 바로 레슨 예약으로 이었어요.",
  },
  {
    id: "freshfruit",
    category: "카페",
    name: "프레쉬프루잇",
    isReal: false,
    floor: 1,
    image: "/images/portfolio/freshfruit.webp",
    thumb: "/images/portfolio/thumbs/freshfruit.webp",
    siteUrl: "https://fruit-site.pages.dev/",
    problem: "메뉴와 주차 여부를 몰라 그냥 지나치는 손님이 많아요.",
    solution: "오늘의 과일과 대표 메뉴를 가격과 함께 보여 주고, 영업시간·주차 안내를 첫 화면에 담았어요.",
    headline: "메뉴·가격·주차 안내를 첫 화면에 담았어요.",
  },
  {
    id: "minerae",
    category: "향수 브랜드",
    name: "미네레",
    isReal: false,
    floor: 2,
    image: "/images/portfolio/minerae.webp",
    thumb: "/images/portfolio/thumbs/minerae.webp",
    siteUrl: "https://minerae-site.pages.dev/",
    problem: "향은 화면으로 맡을 수 없어서, 브랜드가 어떤 분위기인지 말로만 전하기 어려워요.",
    solution: "돌 하나에서 시작된 브랜드 철학과 컬렉션을 차분한 톤과 무드 컷으로 풀어, 향의 인상이 먼저 전해지게 했어요.",
    headline: "브랜드 철학과 무드를 한 페이지에 담았어요.",
  },
];

export const PRICE = {
  titleLines: ["매달 나가는 돈,", "왜 없을까요?"],
  desc: "서버비 없이 만들고, 수정은 필요할 때만 받아요.",
  sign: {
    label: "원페이지 홈페이지 1건",
    amount: "130,000원",
    rows: ["VAT 포함", "추가금 0원", "월 관리비 0원"],
    note: "핵심 섹션 5~8개 구성",
  },
  includesTitle: "포함 내역",
  includedTag: "포함",
  includes: [
    "1:1 맞춤 상담",
    "손님 눈높이에 맞춘 문구 작성",
    "휴대폰에서 전화·예약 버튼 찾기 쉬운 배치",
    "휴대폰·태블릿·PC 어디서나 깔끔한 화면",
    "네이버·구글 검색 등록",
    "네이버 지도 길찾기·전화/예약 연결",
    "카톡으로 보낼 때 뜨는 미리보기 세팅",
    "매장 사진 보정",
    "디자인 시안 1종 + 수정 2회",
    "오픈 후 1개월 오류·오타 무상 수정",
  ],
  extrasTitle: "따로 드는 돈은 이것뿐이에요.",
  extras: [
    "도메인 실비 연 약 2만원 (사장님 명의로 등록)",
    "오픈 뒤 수정은 필요할 때만 건당 1~2만원",
  ],
  receipt: "세금계산서·현금영수증 발행 가능",
  cta: "이 가격 그대로 상담하기",
};

export const FOUNDER = {
  title: "만드는 사람",
  role: "디자인 지음 대표",
  story: [
    "화장품 OEM, 가구 OEM, 강아지 간식·영양제 회사에서 새로 런칭하는 브랜드들의 홈페이지를 만들어 왔어요. 그 과정에서 새 브랜드를 시작하는 고객사들을 가까이서 많이 봐 왔고, 그분들이 어떤 고민을 하는지 잘 알아요.",
    "그래서 기술만 보고 홈페이지를 만들지 않아요. 사장님과 이야기하며 예약 한 건, 문의 한 통이라도 더 오도록 함께 고민해요.",
    "상담부터 제작까지 제가 직접 해서 중간 마진이 없어요.",
  ],
  visitTitle: "전국 비대면 진행",
  visitNote: "경기북부는 방문 상담 가능",
};

export const PROCESS = {
  title: "홈페이지 여는 3단계",
  steps: [
    {
      title: "링크 보내기",
      desc: "네이버 플레이스나 인스타 링크만 보내 주세요. 기획서나 원고는 필요 없어요.",
      tag: "사장님은 10초",
    },
    {
      title: "인터뷰·제작",
      desc: "사장님 이야기를 먼저 듣고, 문구·디자인·제작까지 지음이 맡아요.",
      tag: "1주",
    },
    {
      title: "오픈·검색 등록",
      desc: "네이버·구글 검색 등록까지 마치고 열어 드려요. 수정은 필요할 때만 카톡으로.",
      tag: "월 관리비 0원",
    },
  ],
};

// FAQ 문구는 index.html의 JSON-LD(FAQPage)와 반드시 같게 유지
export const FAQ = {
  title: "자주 묻는 질문",
  desc: "제작 전에 사장님들이 가장 많이 물어보신 질문이에요.",
  more: "다른 게 궁금하면 카톡으로 물어보세요",
  items: [
    {
      q: "준비해야 할 사진이나 원고가 거의 없는데 제작이 가능한가요?",
      a: "네, 걱정하지 않으셔도 됩니다. 운영 중이신 네이버 플레이스, 인스타그램, 기존 홈페이지 링크만 전달해 주시면, 1:1 인터뷰를 통해 브랜드와 가게의 강점, 스토리를 정리합니다. 고객을 끄는 카피라이팅과 레이아웃 구성은 지음이 전담하니, 따로 준비하실 원고는 없습니다.",
    },
    {
      q: "제작 기간은 얼마나 걸리나요?",
      a: "1:1 인터뷰 완료 후 평균 1주 내외로 최종 오픈까지 완료됩니다. 디자인 시안 확인 후 사장님의 피드백을 반영하는 수정 2회가 포함되어 있으며, 오픈 즉시 네이버와 구글 검색 등록까지 마무리해 드립니다.",
    },
    {
      q: "정말로 매달 나가는 관리비나 호스팅 비용이 없나요?",
      a: "네, 매달 의무적으로 청구되는 고정 유지보수비는 0원입니다. 사이트 주소 유지를 위한 도메인(.com/.kr) 등록 기관 실비(연 약 2만원 내외) 외에는 추가 고정 지출이 없으며, 추후 문구나 사진 수정이 필요하실 때만 건별(1~2만원 선)로 편하게 요청하시면 됩니다.",
    },
    {
      q: "인스타그램이나 네이버 플레이스가 있는데 꼭 랜딩페이지가 필요한가요?",
      a: "SNS나 플레이스는 고객을 유입시키는 채널이지만, 방문 직전 '여기가 정말 믿을 만한 곳인가?'를 고민할 때 손님이 이탈하기 쉽습니다. 손님이 연락하게 만드는 홈페이지는 흩어진 정보와 후기를 한곳에 집중 정리하여 방문과 전화·예약 버튼으로 곧장 연결하는 종결 장치 역할을 합니다.",
    },
    {
      q: "다른 지역도 제작이 가능한가요?",
      a: "네, 전국 어디서든 제작 가능합니다. 인터뷰부터 시안 확인, 수정, 오픈까지 전화와 카카오톡으로 진행하기 때문에, 직접 만나지 않아도 완성도는 똑같습니다. 경기북부(양주, 의정부, 포천, 동두천)는 원하시면 방문 상담도 무료로 가능합니다.",
    },
    {
      q: "제작 완료 후 메뉴 가격이나 사진을 바꾸고 싶을 땐 어떻게 하나요?",
      a: "매달 관리비를 내지 않으셔도 카카오톡으로 편하게 말씀해 주시면 됩니다. 단순 텍스트나 이미지 교체는 건당 1~2만원 선의 부담 없는 비용으로 당일~익일 내에 빠르게 반영해 드립니다.",
    },
    {
      q: "세금계산서나 현금영수증 발행이 가능한가요?",
      a: "네, 100% 정상 발행 가능합니다. 안내해 드린 13만원은 부가세(VAT)가 포함된 최종 정찰 금액이며, 결제 시 사업자등록증이나 발급용 번호를 알려주시면 즉시 발행해 드립니다.",
    },
  ],
};

export const CLOSING = {
  emptySign: "사장님 상호가 들어갈 자리",
  titleLines: ["다음은", "사장님 가게 차례예요."],
  desc: "카톡으로 가게 이름과 네이버 플레이스 링크만 보내 주세요. 언제 시작할 수 있는지 알려 드릴게요.",
};

export const FOOTER = {
  supplierTitle: "공급자 정보",
  labels: {
    owner: "대표",
    bizNumber: "사업자등록번호",
    address: "주소",
    phone: "전화",
    email: "이메일",
    blog: "블로그",
    hours: "상담 시간",
  },
  blogLabel: "blog.naver.com/design-jieum",
  visitNote: "전국 비대면 진행 · 경기북부(양주·의정부·포천·동두천)는 방문 상담 가능",
  toTop: "맨 위로",
};
