// 사이트의 모든 문구·연락처·링크를 이 파일 한 곳에서 관리합니다.
// [확인 필요] 표시가 붙은 값은 확정 전 임시 값입니다.

export const SITE = {
  name: "디자인 지음",
  category: "경기북부 가게 홈페이지 제작",
  kakaoUrl: "https://pf.kakao.com/_IuxfaX/chat",
  instagramUrl: "https://www.instagram.com/jieum.homepage/",
  email: "designjieum@gmail.com",
  hours: "연중무휴 09:00~22:00",
};

// [확인 필요] 사업자등록번호·주소·전화번호는 미정이라 임시 값
export const BUSINESS = {
  owner: "김재협",
  bizNumber: "000-00-00000",
  address: "경기도 양주시 부흥로 1936 OO프라자 000호",
  phone: "0507-0000-0000",
  // 실제 번호가 확정되면 true로 바꾸면 tel: 링크와 하단 [전화] 버튼이 켜집니다
  phoneConfirmed: false,
  phoneHref: "tel:050700000000",
};

export const NAV = [
  { label: "사례", href: "#street" },
  { label: "비용", href: "#price" },
  { label: "FAQ", href: "#faq" },
];

export const CTA_LABEL = "카톡으로 1분 상담 받기";

export const HERO = {
  kicker: "양주·의정부·포천·동두천 가게 홈페이지 제작 · 33만원 정찰제",
  // sign: true인 단어는 간판(주황 면)으로 점등, join: true면 다음 조각과 띄우지 않고 붙임
  titleLines: [
    [{ text: "홈페이지", sign: true, join: true }, { text: "로" }],
    [{ text: "손님이" }, { text: "연락해요." }],
  ],
  desc: [
    "매장에 찾아가 이야기를 듣고,",
    "전화·예약이 오는 홈페이지를 1~2주 안에 열어 드려요.",
  ],
  secondary: { label: "만든 홈페이지 먼저 보기", href: "#street" },
  facts: [
    { value: "33만원", label: "VAT 포함" },
    { value: "0원", label: "월 관리비" },
    { value: "1~2주", label: "오픈까지" },
  ],
};

export interface CaseStudy {
  id: string;
  category: string;
  name: string;
  location?: string; // 실제 고객만 표기 (시안은 동네 이름 없이 "캠핑장 시안"처럼)
  isReal: boolean; // true: 실제 고객, false: 업종별로 미리 만들어 본 시안
  image: string; // 전체 페이지 스크린샷 (폭 425px, 자세히 보기에서 사용)
  thumb: string; // 카드용 3:4 썸네일 (윗부분 크롭)
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
  exampleSuffix: "시안",
  realProblemLabel: "사장님의 고민",
  exampleProblemLabel: "이 업종에서 자주 듣는 고민",
  solutionLabel: "이렇게 만들었어요",
  reviewLabel: "사장님 한마디",
  detailLabel: "자세히 보기",
  nextSign: { title: "다음은", sub: "사장님 가게", cta: "상담하기" },
};

// 실제 고객 사례를 앞에, 업종별 시안을 뒤에 배치
export const CASES: CaseStudy[] = [
  {
    id: "orangead",
    category: "간판",
    name: "오렌지애드컴퍼니",
    location: "양주 고암동",
    isReal: true,
    image: "/images/portfolio/orangead.webp",
    thumb: "/images/portfolio/thumbs/orangead.webp",
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
    image: "/images/portfolio/okhome.webp",
    thumb: "/images/portfolio/thumbs/okhome.webp",
    problem: "'이것도 수리되나요?' 묻는 문의가 많은데, 작업 중엔 전화를 받기 힘들었어요.",
    solution: "수리 가능한 서비스를 한눈에 정리하고, 상담 신청과 전화 연결 버튼을 더했어요.",
    headline: "“수리 가능한지 묻는 문의가 확 줄어서 좋아요.”",
    review: {
      quote: "작업이 끝난 뒤 부재중 전화를 확인하고 연락드리면 되니 편하고, 수리 가능한지 묻는 문의도 확 줄어서 좋아요.",
      author: "포천 오케이집수리 대표",
    },
  },
  {
    id: "dalbit",
    category: "캠핑장",
    name: "달빛계곡",
    isReal: false,
    image: "/images/portfolio/dalbit.webp",
    thumb: "/images/portfolio/thumbs/dalbit.webp",
    problem: "길을 묻는 전화와 자리별 가격 문의가 하루 종일 이어지기 쉬워요.",
    solution: "자리별 가격을 한눈에 비교하게 하고, 찾아오는 길을 자세히 안내해 같은 질문이 반복되지 않게 했어요.",
    headline: "자리별 가격 비교와 길 안내로 반복 문의를 줄였어요.",
  },
  {
    id: "lowhigh",
    category: "바버샵",
    name: "로우앤하이",
    isReal: false,
    image: "/images/portfolio/lowhigh.webp",
    thumb: "/images/portfolio/thumbs/lowhigh.webp",
    problem: "가격만 물어보고 예약까지 이어지지 않는 경우가 많아요.",
    solution: "서비스별 가격표와 스타일 모음을 보여 주고, 확인한 손님이 바로 예약하도록 이었어요.",
    headline: "가격과 스타일을 보고 바로 예약하게 이었어요.",
  },
  {
    id: "bareungil",
    category: "행정사",
    name: "바른길 행정사사무소",
    isReal: false,
    image: "/images/portfolio/bareungil.webp",
    thumb: "/images/portfolio/thumbs/bareungil.webp",
    problem: "처분서를 받고 당황한 손님은 무엇부터 할지 몰라, 첫 상담이 설명으로 길어지기 쉬워요.",
    solution: "처분서 사진 한 장만 보내면 상담이 시작되게 하고, 기한과 진행 단계를 미리 안내했어요.",
    headline: "처분서 사진 한 장으로 상담이 시작되게 했어요.",
  },
  {
    id: "bomgyeol",
    category: "플라워샵",
    name: "봄결 플라워",
    isReal: false,
    image: "/images/portfolio/bomgyeol.webp",
    thumb: "/images/portfolio/thumbs/bomgyeol.webp",
    problem: "꽃을 손질하는 동안에도 '얼마예요? 오늘 되나요?' 묻는 DM이 끊이지 않아요.",
    solution: "가격, 실제 크기, 당일 주문 마감 시간을 한 페이지에 모으고, 바로 네이버 예약으로 넘어가게 했어요.",
    headline: "가격·크기·당일 마감을 한 페이지에 모았어요.",
  },
  {
    id: "forme",
    category: "학원",
    name: "포름미술학원",
    isReal: false,
    image: "/images/portfolio/forme.webp",
    thumb: "/images/portfolio/thumbs/forme.webp",
    problem: "'아이가 뭘 배우는지 모르겠다'는 걱정 때문에 상담이 등록으로 잘 이어지지 않아요.",
    solution: "매주 실기 기록 공유 같은 강점을 먼저 보여 주고, 무료 실기 진단 예약으로 첫 방문을 이끌었어요.",
    headline: "무료 실기 진단 예약으로 첫 방문을 이끌었어요.",
  },
  {
    id: "miso",
    category: "필라테스",
    name: "미소필라테스",
    isReal: false,
    image: "/images/portfolio/miso.webp",
    thumb: "/images/portfolio/thumbs/miso.webp",
    problem: "'허리가 아픈데 해도 되나요?' 묻는 전화가 많은데, 1:1 수업 중엔 받을 수 없어요.",
    solution: "허리·골반, 목·어깨처럼 고민별로 수업을 먼저 확인하게 하고, 바로 레슨 예약으로 이었어요.",
    headline: "고민별 수업 안내에서 바로 레슨 예약으로 이었어요.",
  },
  {
    id: "freshfruit",
    category: "카페",
    name: "프레쉬프루잇",
    isReal: false,
    image: "/images/portfolio/freshfruit.webp",
    thumb: "/images/portfolio/thumbs/freshfruit.webp",
    problem: "메뉴와 주차 여부를 몰라 그냥 지나치는 손님이 많아요.",
    solution: "오늘의 과일과 대표 메뉴를 가격과 함께 보여 주고, 영업시간·주차 안내를 첫 화면에 담았어요.",
    headline: "메뉴·가격·주차 안내를 첫 화면에 담았어요.",
  },
  {
    id: "minerae",
    category: "향수 브랜드",
    name: "미네레",
    isReal: false,
    image: "/images/portfolio/minerae.webp",
    thumb: "/images/portfolio/thumbs/minerae.webp",
    problem: "향은 화면으로 맡을 수 없어서, 브랜드가 어떤 분위기인지 말로만 전하기 어려워요.",
    solution: "돌 하나에서 시작된 브랜드 철학과 컬렉션을 차분한 톤과 무드 컷으로 풀어, 향의 인상이 먼저 전해지게 했어요.",
    headline: "브랜드 철학과 무드를 한 페이지에 담았어요.",
  },
  {
    id: "raun",
    category: "뷰티 브랜드",
    name: "라운",
    isReal: false,
    image: "/images/portfolio/raun.webp",
    thumb: "/images/portfolio/thumbs/raun.webp",
    problem: "신제품을 알릴 때 성분과 설명만 늘어놓으면, 제품이 가진 이야기와 감성이 잘 전해지지 않아요.",
    solution: "조향 스토리, 탑·미들·베이스 노트, 텍스처와 성분을 흐름에 따라 보여 주고, 사전 예약으로 이어지게 했어요.",
    headline: "제품 이야기와 노트 구성을 따라 사전 예약으로 이었어요.",
  },
];

export const PRICE = {
  titleLines: ["매달 나가는 돈,", "왜 없을까요?"],
  desc: "서버비 없이 만들고, 수정은 필요할 때만 받아요.",
  sign: {
    label: "원페이지 홈페이지 1건",
    amount: "330,000원",
    rows: ["VAT 포함", "추가금 0원", "월 관리비 0원"],
    note: "핵심 섹션 5~8개 구성",
  },
  includesTitle: "포함 내역",
  includedTag: "포함",
  includes: [
    "1:1 매장 방문 인터뷰",
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
  extrasTitle: "따로 드는 돈은 이것뿐이에요",
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
    "화장품·가구 OEM부터 강아지 간식·영양제까지, 줄곧 제조업 회사에서 처음 시작하는 브랜드의 홈페이지를 만들어 왔어요. 그래서 사장님이 어떤 고민을 하는지 가까이서 봐 왔어요.",
    "기술만 보고 홈페이지를 만들지 않아요. 사장님과 이야기하며 예약 한 건, 문의 한 통이 오도록 함께 고민해요.",
    "상담부터 제작까지 제가 직접 해서 중간 마진이 없어요.",
  ],
  visitTitle: "직접 찾아가는 동네",
  visitAreas: ["양주", "의정부", "포천", "동두천"],
  visitNote: "그 외 지역은 전화·카톡으로 똑같이 진행해요.",
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
      title: "매장 방문·제작",
      desc: "매장에 찾아가 이야기를 듣고, 문구·디자인·제작까지 지음이 맡아요.",
      tag: "1~2주",
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
      a: "네, 걱정하지 않으셔도 됩니다. 현재 운영 중이신 네이버 플레이스나 인스타그램 링크만 전달해 주시면, 매장으로 직접 찾아가 1:1 인터뷰를 통해 매장의 강점과 스토리를 수집합니다. 손님을 끄는 전문 카피라이팅과 레이아웃 구성은 지음이 전담합니다.",
    },
    {
      q: "제작 기간은 얼마나 걸리나요?",
      a: "1:1 매장 인터뷰 완료 후 평균 1~2주 내외로 최종 오픈까지 완료됩니다. 디자인 시안 확인 후 사장님의 피드백을 반영하는 수정 2회가 포함되어 있으며, 오픈 즉시 네이버와 구글 검색 등록까지 마무리해 드립니다.",
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
      q: "양주, 의정부, 포천, 동두천 외 다른 지역은 제작이 불가한가요?",
      a: "아닙니다. 전국 어디서든 제작 가능합니다. 다만 1:1 대면 현장 방문 인터뷰는 경기북부(양주·의정부·포천·동두천) 중심 무료로 운영되며, 그 외 지역은 거리에 따라 대면 방문이 어려울 수 있어 유선 전화와 카카오톡으로 똑같이 꼼꼼하게 소통하며 완성도 높게 제작해 드립니다.",
    },
    {
      q: "제작 완료 후 메뉴 가격이나 사진을 바꾸고 싶을 땐 어떻게 하나요?",
      a: "매달 관리비를 내지 않으셔도 카카오톡으로 편하게 말씀해 주시면 됩니다. 단순 텍스트나 이미지 교체는 건당 1~2만원 선의 부담 없는 비용으로 당일~익일 내에 빠르게 반영해 드립니다.",
    },
    {
      q: "세금계산서나 현금영수증 발행이 가능한가요?",
      a: "네, 100% 정상 발행 가능합니다. 안내해 드린 33만원은 부가세(VAT)가 포함된 최종 정찰 금액이며, 결제 시 사업자등록증이나 발급용 번호를 알려주시면 즉시 발행해 드립니다.",
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
    kakao: "카카오톡",
    instagram: "인스타그램",
    hours: "상담 시간",
  },
  kakaoLabel: "채널에서 상담하기",
  instagramLabel: "@jieum.homepage",
  visitNote: "방문 인터뷰: 양주·의정부·포천·동두천 등 경기북부 (그 외 지역은 비대면으로 진행)",
  toTop: "맨 위로",
};
