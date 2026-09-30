/**
 * ============================================================
 *  📦 테스트 데이터 파일
 * ============================================================
 *  ▸ 새 테스트 추가: TESTS 배열 끝에 객체를 복사·붙여넣기
 *  ▸ 새 카테고리 추가: CATEGORIES 배열에 { id, label, emoji } 추가
 *  ▸ scoringType: "sum"  → 점수 합산 / "type" → 최다 타입 선택
 * ============================================================
 */

/* ── 카테고리 정의 ──────────────────────────────────────── */
const CATEGORIES = [
  { id: "all",         label: "전체보기",  emoji: "✨" },
  { id: "love",        label: "연애",     emoji: "💘" },
  { id: "work",        label: "직장",     emoji: "💼" },
  { id: "personality", label: "성향",     emoji: "🧠" },
  { id: "fun",         label: "유머",     emoji: "😆" },
  { id: "money",       label: "재물",     emoji: "💸" },
  { id: "travel",      label: "여행",     emoji: "✈️" },
  { id: "social",      label: "관계",     emoji: "🤝" },
  { id: "taste",       label: "취향",     emoji: "🎬" },
  { id: "fortune",     label: "운세",     emoji: "🔮" }
];


/* ── 테스트 데이터 ──────────────────────────────────────── */
const TESTS = [

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #1  멘탈 배터리 테스트  [성향 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "mental-battery",
    title: "멘탈 배터리 테스트",
    subtitle: "지금 내 멘탈 잔량은 몇 %?",
    emoji: "🔋",
    color: "#4CAF50",
    category: "personality",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/1",
    questions: [
      {
        q: "아침에 눈을 떴을 때 첫 번째 감정은?",
        options: [
          { text: "오늘도 화이팅! 🔥",       value: 3 },
          { text: "그냥 무난하게 시작",        value: 2 },
          { text: "5분만 더…",              value: 1 },
          { text: "벌써 퇴근하고 싶다",       value: 0 }
        ]
      },
      {
        q: "스트레스를 받으면 가장 먼저 하는 행동은?",
        options: [
          { text: "운동하거나 산책한다 🏃",    value: 3 },
          { text: "맛있는 걸 먹는다 🍕",       value: 2 },
          { text: "누군가에게 전화한다 📞",     value: 1 },
          { text: "이불 속에 숨는다 🛏️",       value: 0 }
        ]
      },
      {
        q: "최근 한 달간 '진짜 행복하다'고 느낀 횟수는?",
        options: [
          { text: "거의 매일! 😊",            value: 3 },
          { text: "일주일에 서너 번",          value: 2 },
          { text: "한두 번 정도?",            value: 1 },
          { text: "기억이 안 난다…",          value: 0 }
        ]
      },
      {
        q: "갑자기 내일 하루가 통째로 비었다면?",
        options: [
          { text: "하고 싶었던 거 다 한다!",    value: 3 },
          { text: "친구 약속을 잡는다",        value: 2 },
          { text: "일단 넷플릭스 켠다",        value: 1 },
          { text: "그냥 종일 눕는다",          value: 0 }
        ]
      },
      {
        q: "요즘 밤에 잠은 잘 자는 편?",
        options: [
          { text: "누우면 바로 꿀잠 💤",       value: 3 },
          { text: "대체로 괜찮다",            value: 2 },
          { text: "뒤척이다 겨우 잠든다",      value: 1 },
          { text: "생각이 많아 잠이 안 온다",   value: 0 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 4,  title: "멘탈 방전 🪫",     description: "충전이 시급합니다! 지금 당장 좋아하는 간식을 사서 소파에 드러누우세요. 세상은 내일도 돌아갑니다." },
      { minScore: 5,  maxScore: 8,  title: "절전 모드 🔋",     description: "아슬아슬하게 버티고 있는 당신! 겉으로는 괜찮아 보이지만 속으로는 꽤 지쳐 있을 수 있어요." },
      { minScore: 9,  maxScore: 12, title: "쾌속 충전 중 ⚡",   description: "긍정 에너지가 차오르고 있어요! 주변 사람들에게도 좋은 기운을 나눠주고 있을 겁니다." },
      { minScore: 13, maxScore: 15, title: "만충 풀파워 🌟",    description: "멘탈 완충 상태! 어떤 일이 와도 거뜬히 해낼 수 있는 최고의 컨디션이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #2  연애 성향 테스트  [연애 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "love-style",
    title: "연애 성향 테스트",
    subtitle: "나는 어떤 연애 유형일까?",
    emoji: "💘",
    color: "#E91E63",
    category: "love",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/2",
    questions: [
      {
        q: "이상적인 첫 데이트 장소는?",
        options: [
          { text: "분위기 좋은 레스토랑 🕯️",   value: "romantic" },
          { text: "놀이공원 or 방탈출 🎢",      value: "adventurer" },
          { text: "각자 집에서 영통 📱",        value: "homebody" },
          { text: "서점이나 전시회 📚",          value: "intellectual" }
        ]
      },
      {
        q: "연인과 갈등이 생겼을 때 나는?",
        options: [
          { text: "편지나 긴 메시지를 쓴다 💌",   value: "romantic" },
          { text: "바로 만나서 얘기한다 🗣️",     value: "adventurer" },
          { text: "시간을 두고 혼자 정리한다 🧘", value: "homebody" },
          { text: "논리적으로 원인을 분석한다 🔍", value: "intellectual" }
        ]
      },
      {
        q: "연인에게 가장 듣고 싶은 말은?",
        options: [
          { text: "\"너 없으면 안 돼\" 💕",       value: "romantic" },
          { text: "\"같이 하면 뭐든 재밌어\" 🤩",  value: "adventurer" },
          { text: "\"네 옆이 제일 편해\" ☺️",     value: "homebody" },
          { text: "\"너한테 배울 게 많아\" 🤓",    value: "intellectual" }
        ]
      },
      {
        q: "기념일에 받고 싶은 선물은?",
        options: [
          { text: "꽃다발과 손편지 💐",          value: "romantic" },
          { text: "깜짝 여행 티켓 ✈️",           value: "adventurer" },
          { text: "내가 좋아하는 간식 세트 🧁",   value: "homebody" },
          { text: "읽고 싶었던 책 📖",            value: "intellectual" }
        ]
      },
      {
        q: "연인과 함께하는 주말 이상형은?",
        options: [
          { text: "감성 카페 투어 ☕",            value: "romantic" },
          { text: "새로운 액티비티 도전 🧗",       value: "adventurer" },
          { text: "집에서 영화 마라톤 🎬",        value: "homebody" },
          { text: "함께 강연이나 세미나 참석 🎓",   value: "intellectual" }
        ]
      }
    ],
    results: [
      { type: "romantic",     title: "감성 로맨티스트 💕",       description: "사랑은 분위기라고 믿는 당신! 작은 이벤트와 따뜻한 말 한마디에 큰 행복을 느끼는 타입이에요." },
      { type: "adventurer",   title: "스릴 모험가 🏄",          description: "짜릿한 순간을 함께 나누고 싶은 당신! 매너리즘을 싫어하고 항상 새로운 경험을 추구해요." },
      { type: "homebody",     title: "포근한 집순이/집돌이 🏠",  description: "편안함이 최고의 사랑이라고 생각하는 당신! 소파에서 나란히 앉아 있는 시간이 더 행복해요." },
      { type: "intellectual", title: "지적 소울메이트 🧠",       description: "마음보다 머리가 먼저 끌리는 당신! 깊은 대화와 지적 자극이 있는 관계에서 진짜 설렘을 느껴요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #3  숨겨진 꼰대력 테스트  [유머 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "kkondae-level",
    title: "나의 숨겨진 꼰대력 테스트",
    subtitle: "혹시 나도 모르게 꼰대가 되어버린 걸까?",
    emoji: "👴",
    color: "#795548",
    category: "fun",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/3",
    questions: [
      {
        q: "후배가 칼퇴를 한다. 나의 첫 반응은?",
        options: [
          { text: "당연한 거지! 워라밸 최고 👍",          value: 0 },
          { text: "오, 할 일 다 했나 보다",              value: 1 },
          { text: "나 때는 눈치 보여서 못 갔는데…",       value: 2 },
          { text: "요즘 애들은 참 편하게 다니네",          value: 3 }
        ]
      },
      {
        q: "회식 자리에서 신입이 먼저 자리를 뜨겠다고 한다면?",
        options: [
          { text: "선약 있으면 당연히 가야지!",           value: 0 },
          { text: "아쉽지만 괜찮아~ 다음에 보자",         value: 1 },
          { text: "한 잔만 더 하고 가지 그래?",           value: 2 },
          { text: "1차도 안 끝났는데 벌써? (불편)",        value: 3 }
        ]
      },
      {
        q: "\"요즘 유행하는 밈인데요~\"라고 후배가 보여줬을 때?",
        options: [
          { text: "ㅋㅋㅋ 이거 웃기다 공유해 줘",         value: 0 },
          { text: "아 그래? 재밌네~ (잘 모르겠지만)",      value: 1 },
          { text: "이런 걸 왜 재밌어하는 건지 모르겠다",    value: 2 },
          { text: "근무시간에 이런 거나 보고 있으면…",     value: 3 }
        ]
      },
      {
        q: "MZ세대의 '조용한 퇴직' 트렌드에 대해?",
        options: [
          { text: "개인의 선택이니 존중한다",             value: 0 },
          { text: "이해는 되지만 좀 아쉽긴 해",           value: 1 },
          { text: "열정이 없으면 성장도 없지 않나?",       value: 2 },
          { text: "그러면서 월급은 꼬박꼬박 받겠다는 거지?", value: 3 }
        ]
      },
      {
        q: "자기 이야기를 할 때 가장 자주 쓰는 표현은?",
        options: [
          { text: "나도 비슷한 적 있어~ 공감!",           value: 0 },
          { text: "참고로 말해주는 건데…",                value: 1 },
          { text: "내가 해보니까 이게 맞더라",             value: 2 },
          { text: "나 때는 말이야…",                      value: 3 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "꼰대 제로 MZ감성 🌱",      description: "축하합니다! 당신은 꼰대와 거리가 먼 사람이에요. 후배들에게 인기 만점!" },
      { minScore: 4,  maxScore: 7,  title: "꼰대 씨앗 발아 중 🌿",     description: "아직은 괜찮지만… 가끔 꼰대 DNA가 슬쩍 고개를 들어요." },
      { minScore: 8,  maxScore: 11, title: "잠재적 꼰대 주의보 ⚠️",    description: "슬슬 위험 수위! 주변에서 '약간 꼰대 같다'고 느끼는 사람이 있을 수 있어요." },
      { minScore: 12, maxScore: 15, title: "전설의 레전드 꼰대 👑",     description: "'나 때는 이런 테스트 같은 거 안 했어…' 라고 말하실 뻔했죠?" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #4  오피스 서바이벌 유형 테스트  [직장 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "office-survival",
    title: "오피스 서바이벌 유형 테스트",
    subtitle: "직장에서 살아남는 나만의 생존 전략은?",
    emoji: "💼",
    color: "#1976D2",
    category: "work",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/4",
    questions: [
      {
        q: "월요일 아침, 팀장이 긴급 회의를 잡았다. 나의 반응은?",
        options: [
          { text: "미리 안건 정리해서 들어간다 📋",        value: "strategist" },
          { text: "옆자리 동료한테 뭔 일인지 물어본다 🤫",  value: "socializer" },
          { text: "일단 커피부터 한 잔… ☕",               value: "survivor" },
          { text: "회의록 양식 준비 완료, 기록은 내가 📝",  value: "supporter" }
        ]
      },
      {
        q: "갑자기 부서 이동 제안이 왔다면?",
        options: [
          { text: "새 부서의 성장 가능성부터 분석한다",      value: "strategist" },
          { text: "아는 사람 있는지부터 확인한다",          value: "socializer" },
          { text: "어디든 칼퇴만 되면 OK",                value: "survivor" },
          { text: "현재 팀에 도움이 된다면 고려해본다",      value: "supporter" }
        ]
      },
      {
        q: "점심시간이다! 보통 어떻게 보내?",
        options: [
          { text: "업계 뉴스나 자기계발 콘텐츠 보기",       value: "strategist" },
          { text: "동료들이랑 맛집 탐방 🍜",              value: "socializer" },
          { text: "혼밥하고 남은 시간에 낮잠 💤",          value: "survivor" },
          { text: "밀린 업무 정리하면서 대충 먹기",         value: "supporter" }
        ]
      },
      {
        q: "팀 프로젝트에서 내가 자연스럽게 맡게 되는 역할은?",
        options: [
          { text: "방향 설정과 전략 기획 🧭",             value: "strategist" },
          { text: "팀원 간 분위기 메이커 & 중재자 🤝",     value: "socializer" },
          { text: "맡은 부분만 조용히 해내는 실무 담당",     value: "survivor" },
          { text: "일정 관리 + 빈틈 메워주는 올라운더",     value: "supporter" }
        ]
      }
    ],
    results: [
      { type: "strategist", title: "전략가 타입 🦊",      description: "회사를 하나의 게임판으로 보는 당신! 언제 어떤 카드를 써야 하는지 본능적으로 알고 있어요." },
      { type: "socializer", title: "인맥왕 소셜라이저 🦋", description: "회사 생활의 핵심은 사람! 모든 부서에 아는 사람이 있고, 사내 정보는 당신에게 물어보는 게 빠릅니다." },
      { type: "survivor",   title: "조용한 생존자 🐢",    description: "무리하지 않고 꾸준히 살아남는 당신! '적당히'의 예술을 아는 진정한 프로입니다." },
      { type: "supporter",  title: "팀의 숨은 MVP 🐝",   description: "당신이 없으면 팀이 안 돌아가요! 묵묵히 빈자리를 채우고 남들이 안 하는 일까지 챙기는 타입." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #5  찰떡궁합 강아지 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "dog-match",
    title: "나와 찰떡궁합 강아지 테스트",
    subtitle: "내 성격에 딱 맞는 반려견은? 🐶",
    emoji: "🐕",
    color: "#FF8F00",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/5",
    questions: [
      {
        q: "주말에 가장 하고 싶은 활동은?",
        options: [
          { text: "공원에서 조깅이나 등산 🏃",    value: "retriever" },
          { text: "소파에서 뒹굴뒹굴 📺",        value: "bulldog" },
          { text: "카페에서 사람 구경 ☕",        value: "poodle" },
          { text: "새로운 동네 탐험 산책 🗺️",    value: "beagle" }
        ]
      },
      {
        q: "친구들 사이에서 나의 포지션은?",
        options: [
          { text: "모임의 중심, 에너자이저 ⚡",   value: "retriever" },
          { text: "듬직한 리액션 장인 😌",       value: "bulldog" },
          { text: "센스 있는 분위기 메이커 ✨",    value: "poodle" },
          { text: "호기심 많은 이야기꾼 📖",      value: "beagle" }
        ]
      },
      {
        q: "스트레스 해소법으로 가장 끌리는 건?",
        options: [
          { text: "땀 흘리며 운동하기 💪",       value: "retriever" },
          { text: "아무것도 안 하고 쉬기 😴",     value: "bulldog" },
          { text: "쇼핑하거나 맛있는 거 먹기 🛍️", value: "poodle" },
          { text: "혼자 드라이브 🚗",            value: "beagle" }
        ]
      },
      {
        q: "나에게 '집'이란?",
        options: [
          { text: "에너지 충전 베이스캠프",       value: "retriever" },
          { text: "세상에서 가장 편한 낙원 🏡",    value: "bulldog" },
          { text: "나를 표현하는 예쁜 공간",      value: "poodle" },
          { text: "잠만 자는 곳, 밖이 더 재밌어!", value: "beagle" }
        ]
      }
    ],
    results: [
      { type: "retriever", title: "골든 리트리버 🦮",  description: "활발하고 사교적인 당신에겐 에너지 넘치는 골든 리트리버가 딱!" },
      { type: "bulldog",   title: "프렌치 불독 🐷",    description: "집이 최고인 당신에겐 같이 소파에서 뒹굴어줄 프렌치 불독이 찰떡!" },
      { type: "poodle",    title: "토이 푸들 🐩",      description: "센스 있고 세련된 당신에겐 영리한 토이 푸들이 최고의 파트너!" },
      { type: "beagle",    title: "비글 🐕‍🦺",         description: "호기심 대장 당신에겐 탐험왕 비글이 환상의 궁합!" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #6  연애 시그널 감지력 테스트  [연애 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "love-signal",
    title: "연애 시그널 감지력 테스트",
    subtitle: "상대의 호감 신호, 얼마나 잘 잡아낼까?",
    emoji: "📡",
    color: "#FF5252",
    category: "love",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/6",
    questions: [
      {
        q: "친구가 자꾸 나한테만 간식을 사다 준다면?",
        options: [
          { text: "그냥 착한 거 아닌가?",        value: 0 },
          { text: "나를 좀 좋아하나? 🤔",       value: 1 },
          { text: "음… 호감 시그널 감지!",       value: 2 },
          { text: "이건 확실한 관심 표현이지 💘", value: 3 }
        ]
      },
      {
        q: "단톡방에서 내 말에만 유독 리액션이 빠른 사람이 있다면?",
        options: [
          { text: "원래 답장이 빠른 사람이겠지",   value: 0 },
          { text: "신경 쓰이긴 하네",            value: 1 },
          { text: "나한테 관심 있는 듯!",         value: 2 },
          { text: "이건 확정 플러팅이야 🚨",      value: 3 }
        ]
      },
      {
        q: "\"요즘 뭐 해?\"라는 별 의미 없어 보이는 연락이 왔다면?",
        options: [
          { text: "심심한가 보다~ 대충 답한다",    value: 0 },
          { text: "일단 답하고 흐름을 본다",      value: 1 },
          { text: "만날 핑계를 만들어본다",       value: 2 },
          { text: "이건 '보고싶다'의 번역이야! 💓", value: 3 }
        ]
      },
      {
        q: "상대가 내 SNS 게시물에 항상 좋아요 + 댓글을 남긴다면?",
        options: [
          { text: "SNS 활동을 많이 하는 편인가봐",  value: 0 },
          { text: "꽤 신경 쓰는 것 같긴 해",       value: 1 },
          { text: "의미 있는 행동이라고 본다 👀",   value: 2 },
          { text: "이건 디지털 고백이나 다름없어!",  value: 3 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "시그널 면역 체질 😶",    description: "상대가 대놓고 좋아해도 눈치 못 챌 확률 99%. 주변의 관심 신호를 좀 더 유심히 관찰해보세요!" },
      { minScore: 4,  maxScore: 6,  title: "눈치 반, 둔치 반 🤷",    description: "가끔은 시그널을 잡아내지만, 확신이 없어서 행동으로 옮기지 못하는 타입이에요." },
      { minScore: 7,  maxScore: 9,  title: "감지력 상위 20% 📡",     description: "연애 레이더가 꽤 정확해요! 상대의 미묘한 신호도 놓치지 않는 타입입니다." },
      { minScore: 10, maxScore: 12, title: "인간 호감 탐지기 🛸",     description: "당신은 걸어 다니는 연애 레이더! 시그널을 너무 잘 잡아서 과잉 해석이 문제일 수도…?" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #7  이별 회복 속도 테스트  [연애 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "breakup-recovery",
    title: "이별 회복 속도 테스트",
    subtitle: "나는 이별 후 얼마나 빨리 회복할까?",
    emoji: "💔",
    color: "#AD1457",
    category: "love",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/7",
    questions: [
      {
        q: "이별 직후 가장 먼저 하고 싶은 건?",
        options: [
          { text: "친구 만나서 수다 떨기 🗣️",    value: 3 },
          { text: "혼자만의 시간 갖기 🧘",       value: 2 },
          { text: "전 연인 SNS 스토킹 👀",       value: 1 },
          { text: "울면서 추억 사진 보기 😢",     value: 0 }
        ]
      },
      {
        q: "전 연인이 등장하는 꿈을 꿨다. 일어나서 나는?",
        options: [
          { text: "\"꿈이네~\" 하고 잊는다",      value: 3 },
          { text: "잠깐 생각하다 일상으로 복귀",   value: 2 },
          { text: "하루 종일 신경 쓰인다",        value: 1 },
          { text: "연락할까 말까 고민한다 📱",    value: 0 }
        ]
      },
      {
        q: "이별 후 나만의 회복 루틴이 있다면?",
        options: [
          { text: "자기 계발에 올인한다 📚",      value: 3 },
          { text: "새로운 취미를 시작한다 🎨",     value: 2 },
          { text: "맛있는 걸 잔뜩 먹는다 🍰",     value: 1 },
          { text: "딱히 없다… 시간이 약이겠지",    value: 0 }
        ]
      },
      {
        q: "친구가 \"새로운 사람 만나봐!\"라고 한다면?",
        options: [
          { text: "좋아! 소개팅 부탁해 🙋",       value: 3 },
          { text: "조금만 더 있다가…",            value: 2 },
          { text: "아직 준비가 안 됐어",          value: 1 },
          { text: "다시는 연애 안 해… (지금은)",   value: 0 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "감성 슬로우 힐러 🐌",    description: "이별의 여운이 오래 남는 타입이에요. 깊이 사랑한 만큼 회복도 천천히. 서두르지 마세요." },
      { minScore: 4,  maxScore: 6,  title: "꾸준한 회복 중 🌤️",      description: "처음엔 힘들지만 시간이 지나면서 조금씩 나아져요. 건강한 회복 과정을 밟고 있어요!" },
      { minScore: 7,  maxScore: 9,  title: "빠른 리바운드 ⚡",        description: "이별에 연연하기보다 앞으로 나아가는 타입! 새로운 시작에 거침이 없어요." },
      { minScore: 10, maxScore: 12, title: "이별 면역 체질 🛡️",      description: "슬퍼할 시간에 자기 계발! 감정 정리가 빠르고 다음 챕터로 즉시 전환하는 강철 멘탈이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #8  번아웃 위험도 테스트  [직장 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "burnout-risk",
    title: "번아웃 위험도 테스트",
    subtitle: "나는 지금 번아웃 직전? 🔥",
    emoji: "🧯",
    color: "#F44336",
    category: "work",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/8",
    questions: [
      {
        q: "일요일 밤, 내일 출근 생각에 기분이?",
        options: [
          { text: "월요일이 기대된다!",           value: 0 },
          { text: "그냥 평범하다",               value: 1 },
          { text: "벌써부터 한숨이 나온다",       value: 2 },
          { text: "퇴사 영상이나 보면서 현타 중",  value: 3 }
        ]
      },
      {
        q: "요즘 퇴근 후 가장 많이 하는 건?",
        options: [
          { text: "취미 활동이나 운동 🏃",        value: 0 },
          { text: "넷플릭스나 유튜브 📺",         value: 1 },
          { text: "소파에서 멍하니 천장 보기",     value: 2 },
          { text: "바로 기절하듯 잠든다 💀",       value: 3 }
        ]
      },
      {
        q: "일할 때 집중력은 어떤 편?",
        options: [
          { text: "몰입하면 시간 가는 줄 모른다",  value: 0 },
          { text: "보통이다, 가끔 딴짓",          value: 1 },
          { text: "자꾸 딴생각이 난다",           value: 2 },
          { text: "앉아만 있지 아무것도 안 된다",  value: 3 }
        ]
      },
      {
        q: "최근 '의미 없다'는 생각이 드는 빈도는?",
        options: [
          { text: "거의 안 든다",                value: 0 },
          { text: "가끔 스치는 정도",             value: 1 },
          { text: "일주일에 서너 번",             value: 2 },
          { text: "매일… 😮‍💨",                  value: 3 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "번아웃 프리 🌿",         description: "건강한 직장 생활 중! 지금의 밸런스를 잘 유지하세요." },
      { minScore: 4,  maxScore: 6,  title: "약간의 피로 축적 😴",    description: "아직 괜찮지만 피로가 쌓이고 있어요. 주말에 제대로 쉬어보세요." },
      { minScore: 7,  maxScore: 9,  title: "번아웃 경고등 🚨",       description: "위험 신호입니다! 지금 쉬지 않으면 몸과 마음 모두 탈이 날 수 있어요." },
      { minScore: 10, maxScore: 12, title: "긴급 충전 필요 🆘",      description: "번아웃 상태에 매우 가까워요. 장기 휴가나 전문가 상담을 진지하게 고려해보세요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #9  회의 생존 유형 테스트  [직장 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "meeting-survival",
    title: "회의 생존 유형 테스트",
    subtitle: "끝없는 회의에서 나의 포지션은? 📋",
    emoji: "🗣️",
    color: "#0288D1",
    category: "work",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/9",
    questions: [
      {
        q: "회의 시작 5분 전, 나는 보통?",
        options: [
          { text: "발언할 내용 정리 중 📝",       value: "leader" },
          { text: "옆 사람이랑 잡담하는 중 😄",    value: "entertainer" },
          { text: "노트북 펴고 다른 일 하는 중 💻", value: "multitasker" },
          { text: "\"이거 몇 시에 끝나요?\" 🕐",   value: "escapist" }
        ]
      },
      {
        q: "의견 충돌이 발생했다. 나의 행동은?",
        options: [
          { text: "내 의견을 논리적으로 주장한다",  value: "leader" },
          { text: "분위기 전환용 드립을 친다 😂",  value: "entertainer" },
          { text: "일단 두 의견 다 메모해둔다",    value: "multitasker" },
          { text: "빨리 결론만 내주세요…",        value: "escapist" }
        ]
      },
      {
        q: "회의가 1시간째 이어질 때 나는?",
        options: [
          { text: "핵심 정리하며 마무리를 주도한다", value: "leader" },
          { text: "간식 타임 제안으로 쉬어간다 🍪", value: "entertainer" },
          { text: "회의 중에 업무 3개 처리했다",   value: "multitasker" },
          { text: "영혼이 이미 퇴근한 상태 👻",    value: "escapist" }
        ]
      },
      {
        q: "회의 끝나고 가장 먼저 하는 말은?",
        options: [
          { text: "\"오늘 결정된 건 이거랑 이거…\"", value: "leader" },
          { text: "\"이번 회의는 무사 생존! ㅋㅋ\"", value: "entertainer" },
          { text: "\"아까 그 데이터 보내드릴게요\"",  value: "multitasker" },
          { text: "\"다음 회의는 언제요?\" (공포) 😱", value: "escapist" }
        ]
      }
    ],
    results: [
      { type: "leader",      title: "회의실의 지배자 👑",     description: "당신이 없으면 회의가 산으로 갑니다! 정리력과 추진력이 뛰어난 회의 핵심 인재예요." },
      { type: "entertainer",  title: "분위기 메이커 🎪",     description: "딱딱한 회의에 산소를 불어넣는 당신! 덕분에 팀 분위기가 살아납니다." },
      { type: "multitasker",  title: "멀티태스킹의 신 🐙",   description: "회의하면서 업무 처리하는 생산성 끝판왕! 효율 면에서 당신을 이길 사람은 없어요." },
      { type: "escapist",     title: "회의 탈출 본능 🏃",    description: "회의는 짧을수록 좋다는 확고한 신념! 솔직히, 이메일 한 통이면 될 걸 왜 모여서…" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #10  감정 온도 테스트  [성향 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "emotion-temp",
    title: "감정 온도 테스트",
    subtitle: "지금 내 마음의 온도는 몇 도? 🌡️",
    emoji: "🌡️",
    color: "#FF7043",
    category: "personality",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/10",
    questions: [
      {
        q: "요즘 하루 중 가장 많이 느끼는 감정은?",
        options: [
          { text: "설렘과 기대 🤩",              value: 3 },
          { text: "평온함과 안정감 😊",           value: 2 },
          { text: "약간의 불안과 걱정 😟",         value: 1 },
          { text: "무기력함과 공허함 😶",          value: 0 }
        ]
      },
      {
        q: "좋아하는 사람에게 먼저 연락하는 편?",
        options: [
          { text: "먼저 연락하는 게 자연스러워!",   value: 3 },
          { text: "상대가 먼저 하면 반갑게 받는다",  value: 2 },
          { text: "연락하고 싶지만 눈치를 본다",    value: 1 },
          { text: "먼저 연락하는 건 어렵다",        value: 0 }
        ]
      },
      {
        q: "감동적인 영화를 볼 때 나는?",
        options: [
          { text: "엉엉 울면서 본다 😭",          value: 3 },
          { text: "눈시울이 붉어진다",             value: 2 },
          { text: "감동은 받지만 표현은 안 한다",    value: 1 },
          { text: "별 감흥 없이 본다",             value: 0 }
        ]
      },
      {
        q: "\"요즘 어때?\"라고 물어보면 솔직하게 대답하는 편?",
        options: [
          { text: "솔직하게 다 이야기한다",         value: 3 },
          { text: "좋은 것 위주로 말한다",          value: 2 },
          { text: "\"그냥 그래~\"로 넘긴다",        value: 1 },
          { text: "괜찮다고 하고 화제를 돌린다",     value: 0 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "냉동 모드 🧊 (0~10°C)",    description: "감정이 얼어붙어 있어요. 마음의 온도를 올려줄 따뜻한 사람이나 경험이 필요한 시기입니다." },
      { minScore: 4,  maxScore: 6,  title: "쿨한 상온 🌬️ (11~20°C)",    description: "차분하고 이성적인 상태. 감정에 휘둘리지 않지만, 가끔은 마음을 열어보는 것도 좋아요." },
      { minScore: 7,  maxScore: 9,  title: "따뜻한 봄날 🌸 (21~30°C)",   description: "마음이 따뜻하고 안정적인 최적의 감정 온도! 주변 사람들도 당신 곁에서 편안함을 느껴요." },
      { minScore: 10, maxScore: 12, title: "뜨거운 열정 🔥 (31°C+)",     description: "감정이 풍부하고 열정적! 사랑도, 우정도, 일도 뜨겁게 불태우는 타입이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #11  숨겨진 재능 발견 테스트  [성향 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "hidden-talent",
    title: "숨겨진 재능 발견 테스트",
    subtitle: "나도 모르는 내 안의 재능은?",
    emoji: "💎",
    color: "#7C4DFF",
    category: "personality",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/11",
    questions: [
      {
        q: "친구들 사이에서 자주 듣는 칭찬은?",
        options: [
          { text: "\"너 진짜 창의적이다!\" 🎨",    value: "creative" },
          { text: "\"넌 말을 참 잘해\" 🎤",        value: "communicator" },
          { text: "\"넌 손재주가 좋아\" 🛠️",       value: "craftsman" },
          { text: "\"넌 분석력이 대단해\" 📊",      value: "analyst" }
        ]
      },
      {
        q: "주어진 과제를 처리하는 나만의 방식은?",
        options: [
          { text: "새로운 접근법을 시도한다",       value: "creative" },
          { text: "팀원들과 토론하며 방향을 잡는다", value: "communicator" },
          { text: "직접 손으로 만들어가며 해결한다", value: "craftsman" },
          { text: "데이터를 모아 체계적으로 분석한다", value: "analyst" }
        ]
      },
      {
        q: "자유 시간이 생기면 자연스럽게 하게 되는 건?",
        options: [
          { text: "그림 그리기나 글쓰기 ✍️",        value: "creative" },
          { text: "사람 만나서 이야기 나누기 ☕",    value: "communicator" },
          { text: "DIY나 요리 같은 만들기 🍳",     value: "craftsman" },
          { text: "퍼즐이나 전략 게임 🧩",          value: "analyst" }
        ]
      },
      {
        q: "만약 유튜브 채널을 연다면 어떤 콘텐츠?",
        options: [
          { text: "감성 브이로그나 예술 콘텐츠 🎬",  value: "creative" },
          { text: "토크쇼나 인터뷰 채널 🎙️",       value: "communicator" },
          { text: "제품 리뷰나 핸드메이드 채널 📦",  value: "craftsman" },
          { text: "지식·정보 해설 채널 📖",         value: "analyst" }
        ]
      }
    ],
    results: [
      { type: "creative",      title: "창의력 천재 🎨",      description: "남들이 생각하지 못하는 아이디어를 뚝딱 만들어내는 당신! 예술, 기획, 디자인 분야에서 빛날 재능이에요." },
      { type: "communicator",   title: "소통의 달인 🎤",     description: "말과 글로 사람을 움직이는 능력! 강연, 마케팅, 상담 분야에서 두각을 나타낼 수 있어요." },
      { type: "craftsman",      title: "장인 손재주 🛠️",    description: "머릿속 구상을 현실로 만드는 능력! 요리, 공예, 엔지니어링 분야에 숨겨진 재능이 있어요." },
      { type: "analyst",        title: "분석의 귀재 📊",     description: "복잡한 문제를 체계적으로 풀어내는 당신! 데이터, 연구, 전략 분야에서 빛날 재능입니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #12  결정장애 레벨 테스트  [성향 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "decision-paralysis",
    title: "결정장애 레벨 테스트",
    subtitle: "짜장면? 짬뽕? 그것이 문제로다 🤯",
    emoji: "🤷",
    color: "#5C6BC0",
    category: "personality",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/12",
    questions: [
      {
        q: "식당 메뉴판을 받았을 때 나는?",
        options: [
          { text: "3초 만에 결정 완료 ✅",         value: 0 },
          { text: "2~3개 후보 중 빠르게 고른다",    value: 1 },
          { text: "다른 사람 시키는 거 보고 따라간다", value: 2 },
          { text: "\"여기 뭐가 맛있어요?\" (결국 남이 골라줌)", value: 3 }
        ]
      },
      {
        q: "온라인 쇼핑할 때 장바구니에 담고 결제까지 걸리는 시간은?",
        options: [
          { text: "담자마자 바로 결제! 🛒",        value: 0 },
          { text: "리뷰 좀 보고 당일 결제",        value: 1 },
          { text: "며칠 고민하다가 겨우 결제",      value: 2 },
          { text: "장바구니만 가득… 결제는 아직 😅", value: 3 }
        ]
      },
      {
        q: "친구와 약속 장소를 정할 때?",
        options: [
          { text: "\"여기 가자!\" 내가 바로 제안",  value: 0 },
          { text: "몇 군데 후보 보내고 고르게 한다", value: 1 },
          { text: "\"아무 데나~\" (사실 아무 데나 아닌)", value: 2 },
          { text: "서로 \"아무 데나\" 핑퐁 반복 🏓", value: 3 }
        ]
      },
      {
        q: "넷플릭스 켰을 때 뭘 볼지 고르는 시간은?",
        options: [
          { text: "보고 싶은 게 이미 정해져 있다",  value: 0 },
          { text: "5분 이내에 결정",               value: 1 },
          { text: "20분 넘게 스크롤 중 🎞️",       value: 2 },
          { text: "고르다가 지쳐서 유튜브로 전환",   value: 3 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "즉결 판사 ⚡",           description: "결정장애와는 거리가 먼 사람! 직감이 뛰어나고 결단력이 있어 주변의 신뢰를 받아요." },
      { minScore: 4,  maxScore: 6,  title: "합리적 고민러 🤔",        description: "적당히 고민하고 적당히 결정하는 건강한 수준! 신중하면서도 결단력이 있어요." },
      { minScore: 7,  maxScore: 9,  title: "만성 결정장애 환자 😵‍💫",   description: "선택의 순간마다 뇌가 과부하! 큰 결정이든 작은 결정이든 일단 고민부터 시작하는 타입." },
      { minScore: 10, maxScore: 12, title: "결정 불가능 레전드 🌀",    description: "짜장면도 짬뽕도 못 고르는 극한의 결정장애! 메뉴 사진 보내주는 친구가 인생 은인이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #13  전생 직업 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "past-life-job",
    title: "전생 직업 테스트",
    subtitle: "전생에 나는 어떤 일을 했을까? 🏛️",
    emoji: "⏳",
    color: "#8D6E63",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/13",
    questions: [
      {
        q: "처음 가는 곳에서 나는 보통?",
        options: [
          { text: "지도 없이도 길을 잘 찾는다 🧭",  value: "explorer" },
          { text: "주변 사람들에게 말을 건다 🤝",   value: "merchant" },
          { text: "조용히 관찰하며 기록한다 📜",    value: "scholar" },
          { text: "본능적으로 위험 요소를 체크한다 ⚔️", value: "warrior" }
        ]
      },
      {
        q: "갈등 상황에서 나의 본능적 반응은?",
        options: [
          { text: "새로운 해결책을 탐색한다",       value: "explorer" },
          { text: "협상과 타협을 시도한다",         value: "merchant" },
          { text: "원인을 분석하고 조언한다",       value: "scholar" },
          { text: "정면돌파! 직접 해결한다",        value: "warrior" }
        ]
      },
      {
        q: "가장 끌리는 시대는?",
        options: [
          { text: "대항해시대 🚢",               value: "explorer" },
          { text: "실크로드 전성기 🐪",           value: "merchant" },
          { text: "르네상스 시대 🎨",             value: "scholar" },
          { text: "삼국지/전국시대 ⚔️",           value: "warrior" }
        ]
      },
      {
        q: "보물을 발견했다! 첫 번째 행동은?",
        options: [
          { text: "더 큰 보물을 찾아 모험 계속! 🗺️", value: "explorer" },
          { text: "시세를 파악하고 거래처를 찾는다 💰", value: "merchant" },
          { text: "보물의 역사와 가치를 연구한다 📚", value: "scholar" },
          { text: "보물을 지키기 위해 방어한다 🛡️",  value: "warrior" }
        ]
      }
    ],
    results: [
      { type: "explorer", title: "대항해시대 탐험가 🧭",    description: "전생에 콜럼버스급 탐험가였던 당신! 미지의 세계를 향한 호기심이 DNA에 새겨져 있어요." },
      { type: "merchant", title: "실크로드 대상인 💰",      description: "전생에 동서양을 오가며 장사하던 대상인! 사람을 읽는 눈과 협상력은 전생부터 타고났군요." },
      { type: "scholar",  title: "궁중 학자 📜",           description: "전생에 왕의 곁에서 역사를 기록하던 학자! 지식에 대한 갈증은 전생부터의 습관이에요." },
      { type: "warrior",  title: "전설의 장군 ⚔️",         description: "전생에 전장을 누비던 용맹한 장군! 위기 상황에서 빛나는 리더십은 전생의 유산입니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #14  나와 닮은 음식 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "food-match",
    title: "나와 닮은 음식 테스트",
    subtitle: "내 성격을 음식으로 표현한다면? 🍽️",
    emoji: "🍕",
    color: "#FFA726",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/14",
    questions: [
      {
        q: "모임에서 나는 어떤 분위기?",
        options: [
          { text: "따뜻하고 편안한 분위기 메이커 ☺️",  value: "soup" },
          { text: "화려하고 주목받는 센터 ✨",         value: "pizza" },
          { text: "조용하지만 깊은 존재감 🌊",         value: "sushi" },
          { text: "달콤하게 모두를 기분 좋게 🍰",      value: "dessert" }
        ]
      },
      {
        q: "스트레스를 받으면 나는?",
        options: [
          { text: "따뜻한 걸 먹으며 마음을 녹인다",    value: "soup" },
          { text: "신나는 음악 틀고 기분 전환!",       value: "pizza" },
          { text: "혼자 조용히 정리하는 시간을 갖는다",  value: "sushi" },
          { text: "단 거 폭식… 일단 먹고 본다 🍫",    value: "dessert" }
        ]
      },
      {
        q: "나를 한 단어로 표현하면?",
        options: [
          { text: "포근함",                         value: "soup" },
          { text: "에너지",                         value: "pizza" },
          { text: "깔끔함",                         value: "sushi" },
          { text: "달콤함",                         value: "dessert" }
        ]
      },
      {
        q: "이상적인 주말 저녁은?",
        options: [
          { text: "집에서 직접 끓인 따뜻한 한 그릇 🍲",  value: "soup" },
          { text: "친구들이랑 왁자지껄 파티 🎉",        value: "pizza" },
          { text: "분위기 좋은 곳에서 조용한 디너 🕯️",  value: "sushi" },
          { text: "카페에서 달달한 디저트 타임 ☕",      value: "dessert" }
        ]
      }
    ],
    results: [
      { type: "soup",    title: "따뜻한 된장찌개 🍲",    description: "어디에나 어울리고, 먹으면 마음이 편안해지는 존재! 당신은 주변 사람들의 힐링 아이템이에요." },
      { type: "pizza",   title: "화려한 피자 🍕",        description: "어디서든 주인공! 다양한 매력이 가득하고, 모두에게 사랑받는 인기 만점 타입이에요." },
      { type: "sushi",   title: "정갈한 초밥 🍣",        description: "겉은 심플하지만 깊은 맛이 있는 당신! 알면 알수록 매력이 넘치는 고급 인재입니다." },
      { type: "dessert", title: "달콤한 케이크 🎂",      description: "만나면 기분 좋아지는 사람! 주변을 달콤하게 만드는 에너지가 있어요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #15  좀비 아포칼립스 생존율 테스트  [유머 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "zombie-survival",
    title: "좀비 아포칼립스 생존율 테스트",
    subtitle: "좀비가 나타났다! 나는 살아남을 수 있을까? 🧟",
    emoji: "🧟",
    color: "#2E7D32",
    category: "fun",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/15",
    questions: [
      {
        q: "좀비 발생 뉴스 속보! 첫 행동은?",
        options: [
          { text: "생존 배낭 싸고 탈출 루트 확보 🎒", value: 3 },
          { text: "마트 가서 식량 사재기 🛒",         value: 2 },
          { text: "일단 집 문 잠그고 뉴스 본다 📺",    value: 1 },
          { text: "\"에이 설마~\" 하면서 무시 😅",     value: 0 }
        ]
      },
      {
        q: "폐건물에서 밤을 보내야 한다. 나의 역할은?",
        options: [
          { text: "망 보면서 경계 근무 서기 👁️",     value: 3 },
          { text: "바리케이드 쌓기 & 방어 강화 🔨",   value: 2 },
          { text: "식량 배분과 컨디션 관리 🍞",       value: 1 },
          { text: "\"다들 잘 해주세요…\" 구석에서 대기", value: 0 }
        ]
      },
      {
        q: "좀비 3마리가 다가온다! 나의 무기 선택은?",
        options: [
          { text: "야구 방망이 (근접전 자신 있다!) ⚾",  value: 3 },
          { text: "후라이팬 (요리 겸용!) 🍳",          value: 2 },
          { text: "스프레이 + 라이터 (임시 화염방사기) 🔥", value: 1 },
          { text: "일단 뛴다… 도망이 최선! 🏃",         value: 0 }
        ]
      },
      {
        q: "생존자 그룹을 만났다. 나의 포지션은?",
        options: [
          { text: "리더십을 발휘해 그룹을 이끈다 👑",  value: 3 },
          { text: "실용적 기술로 공헌한다 (수리/요리)", value: 2 },
          { text: "정보 수집 & 정찰 담당 🔍",         value: 1 },
          { text: "그냥 따라다니면서 생존한다 🐥",     value: 0 }
        ]
      }
    ],
    results: [
      { minScore: 0,  maxScore: 3,  title: "첫날 탈락 예정 💀",       description: "솔직히 좀비 세상에서 오래 버티긴 어려울 것 같아요… 하지만! 운 좋게 강한 생존자 옆에 붙으면 가능성이!" },
      { minScore: 4,  maxScore: 6,  title: "운 좋으면 생존 🍀",       description: "기본적인 판단력은 있지만, 위기 상황에서 멘탈이 흔들릴 수 있어요. 팀플레이가 생존의 열쇠!" },
      { minScore: 7,  maxScore: 9,  title: "생존 유망주 🛡️",         description: "꽤 높은 생존율! 냉정한 판단력과 적응력을 갖추고 있어 어떤 상황에서도 살아남을 가능성이 높아요." },
      { minScore: 10, maxScore: 12, title: "최후의 생존자 🏆",        description: "좀비 세상의 주인공은 바로 당신! 리더십, 전투력, 판단력 모두 갖춘 최종 보스급 생존자입니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #16  숨겨진 소비 요정 테스트  [재물 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "spending-fairy",
    title: "숨겨진 소비 요정 테스트",
    subtitle: "내 안의 소비 요정은 어떤 타입? 💳",
    emoji: "🧚",
    color: "#FFD600",
    category: "money",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/16",
    questions: [
      { q: "월급날! 통장에 돈이 들어오면?", options: [
        { text: "이미 지출 계획표가 있다 📊", value: 0 },
        { text: "필요한 것만 사고 나머진 저축", value: 1 },
        { text: "기분 좋으니까 한 건 질러볼까?", value: 2 },
        { text: "통장을 스쳐 가는 월급… 💸", value: 3 }
      ]},
      { q: "온라인에서 '오늘만 이 가격!' 문구를 보면?", options: [
        { text: "한정 마케팅에 안 속는다 ✋", value: 0 },
        { text: "정말 필요한 건지 24시간 생각", value: 1 },
        { text: "장바구니에 일단 담는다", value: 2 },
        { text: "결제 완료 🛒 (이미 늦었다)", value: 3 }
      ]},
      { q: "카페에서 음료를 고를 때 나는?", options: [
        { text: "제일 저렴한 아메리카노 ☕", value: 0 },
        { text: "적당한 가성비 메뉴 선택", value: 1 },
        { text: "시즌 한정 신메뉴 도전!", value: 2 },
        { text: "비싸도 내가 좋으면 OK 🥤", value: 3 }
      ]},
      { q: "해외여행 쇼핑에서 나는?", options: [
        { text: "계획한 예산 안에서만!", value: 0 },
        { text: "가성비 좋은 것 위주로", value: 1 },
        { text: "면세점에서 흥분 상태 🛍️", value: 2 },
        { text: "\"여행이니까\" 무한 해금", value: 3 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "철벽 절약 요정 🧊", description: "당신의 지갑은 철통 보안! 계획적이고 이성적인 소비가 습관이에요." },
      { minScore: 4, maxScore: 6, title: "균형 잡힌 소비러 ⚖️", description: "쓸 때 쓰고 아낄 때 아끼는 건강한 소비 습관! 이 밸런스를 유지하세요." },
      { minScore: 7, maxScore: 9, title: "플렉스 유혹에 약한 편 💫", description: "\"이 정도는 괜찮지~\"가 쌓이면 위험! 소비 요정이 슬슬 깨어나고 있어요." },
      { minScore: 10, maxScore: 12, title: "전설의 소비 대마왕 👑", description: "통장 잔고는 미스터리! 쓸 때 화끈하고 후회는 나중에. 가계부 앱 설치가 시급합니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #17  재테크 유형 테스트  [재물 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "invest-type",
    title: "나의 재테크 유형 테스트",
    subtitle: "돈을 불리는 나만의 스타일은? 📈",
    emoji: "💹",
    color: "#00C853",
    category: "money",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/17",
    questions: [
      { q: "100만 원이 생겼다! 가장 먼저 하고 싶은 건?", options: [
        { text: "정기예금에 넣는다 🏦", value: "saver" },
        { text: "주식이나 ETF에 투자 📊", value: "investor" },
        { text: "코인이나 고위험 상품! 🚀", value: "gambler" },
        { text: "자기계발에 투자 📚", value: "grower" }
      ]},
      { q: "투자에서 가장 중요하다고 생각하는 건?", options: [
        { text: "원금 보장이 최우선", value: "saver" },
        { text: "장기적 수익률", value: "investor" },
        { text: "한방에 크게! 하이 리턴", value: "gambler" },
        { text: "돈보다 경험과 능력", value: "grower" }
      ]},
      { q: "주식이 -20% 폭락했다. 나의 반응은?", options: [
        { text: "그래서 주식 안 한다고 했잖아", value: "saver" },
        { text: "물타기 기회! 추가 매수 📉", value: "investor" },
        { text: "레버리지로 올인! 🎰", value: "gambler" },
        { text: "주식 앱 삭제하고 책 읽는다", value: "grower" }
      ]}
    ],
    results: [
      { type: "saver", title: "안전 제일 저축왕 🏦", description: "원금 손실은 절대 NO! 예적금, 국채 같은 안정형 자산을 선호하는 알뜰 재테크러예요." },
      { type: "investor", title: "전략적 투자자 📊", description: "분산 투자와 장기 성장을 추구하는 정석파! 시장을 냉정하게 분석하는 능력이 있어요." },
      { type: "gambler", title: "하이리스크 도전가 🎰", description: "큰 수익엔 큰 리스크! 대담한 투자로 한 방을 노리는 타입. 리스크 관리만 잘하면 대박 가능!" },
      { type: "grower", title: "자기계발형 투자자 🌱", description: "가장 확실한 투자는 나 자신! 지식과 경험에 돈을 쓰는 것이 최고의 재테크라 믿어요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #18  부자 체질 테스트  [재물 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "rich-dna",
    title: "타고난 부자 체질 테스트",
    subtitle: "나에게 부자 DNA가 있을까? 🤑",
    emoji: "💰",
    color: "#F9A825",
    category: "money",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/18",
    questions: [
      { q: "친구가 빌려간 5천 원을 안 갚는다. 나는?", options: [
        { text: "\"언제 줄 거야?\" 바로 말한다 💬", value: 3 },
        { text: "자연스럽게 넌지시 언급한다", value: 2 },
        { text: "그냥 잊어버린다", value: 1 },
        { text: "내가 밥 한 번 더 사준다 😇", value: 0 }
      ]},
      { q: "세일 기간에 50% 할인 상품을 발견! 하지만 지금 당장 필요 없다면?", options: [
        { text: "필요 없으면 안 산다 ✋", value: 3 },
        { text: "나중에 쓸지 잠깐 고민", value: 2 },
        { text: "이 가격에 안 사면 손해!", value: 1 },
        { text: "친구한테 알려주고 같이 산다", value: 0 }
      ]},
      { q: "용돈 기입장이나 가계부를 쓰는 편?", options: [
        { text: "앱으로 매일 기록한다 📱", value: 3 },
        { text: "가끔 큰 지출만 기록", value: 2 },
        { text: "써봤는데 작심삼일…", value: 1 },
        { text: "가계부가 뭐예요? 🤷", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "순수한 마음 부자 😇", description: "돈보다 사람! 넉넉한 마음씨의 소유자. 재물보다 마음이 먼저 부자인 당신이에요." },
      { minScore: 3, maxScore: 5, title: "재물운 상승 중 📈", description: "아직 부자 체질이 완성되진 않았지만, 기본기는 있어요! 조금만 더 관리하면 자산이 쑥쑥!" },
      { minScore: 6, maxScore: 7, title: "예비 부자 후보 🏅", description: "돈에 대한 감각이 뛰어나요! 체계적인 재테크까지 더하면 부자의 길이 열립니다." },
      { minScore: 8, maxScore: 9, title: "타고난 재벌 DNA 👑", description: "돈을 다루는 본능이 DNA에 새겨져 있어요! 합리적이고 계획적인 당신은 미래의 부자입니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #19  나에게 맞는 여행지 테스트  [여행 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "travel-dest",
    title: "나에게 딱 맞는 여행지 테스트",
    subtitle: "지금 내 마음이 원하는 여행지는? ✈️",
    emoji: "🌍",
    color: "#00BCD4",
    category: "travel",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/19",
    questions: [
      { q: "이번 여행에서 가장 하고 싶은 건?", options: [
        { text: "아무것도 안 하고 쉬기 🏖️", value: "beach" },
        { text: "역사적 명소 탐방 🏛️", value: "culture" },
        { text: "대자연 속 트레킹 🏔️", value: "nature" },
        { text: "맛집 투어 & 쇼핑 🍜", value: "city" }
      ]},
      { q: "여행 숙소를 고를 때 가장 중요한 건?", options: [
        { text: "오션뷰 리조트! 🌊", value: "beach" },
        { text: "구시가지 근처 부티크 호텔 🏨", value: "culture" },
        { text: "산 속 통나무 캐빈 🏕️", value: "nature" },
        { text: "도심 핵심 위치 호텔 🏙️", value: "city" }
      ]},
      { q: "여행지에서 꼭 찍고 싶은 사진은?", options: [
        { text: "석양이 지는 바다 🌅", value: "beach" },
        { text: "고풍스러운 건축물 앞에서 📸", value: "culture" },
        { text: "장엄한 산봉우리 배경 ⛰️", value: "nature" },
        { text: "화려한 네온사인 거리 🌃", value: "city" }
      ]}
    ],
    results: [
      { type: "beach", title: "힐링 비치 — 발리/몰디브 🏝️", description: "지금 당신에겐 파도 소리와 따뜻한 햇살이 필요해요. 에메랄드빛 바다에서 모든 걸 내려놓으세요!" },
      { type: "culture", title: "문화 탐방 — 로마/교토 🏛️", description: "역사와 문화가 숨 쉬는 도시에서 영감을 채우세요. 골목골목 숨겨진 이야기가 당신을 기다려요." },
      { type: "nature", title: "대자연 — 스위스/뉴질랜드 🏔️", description: "도시의 소음에서 벗어나 자연의 품에 안기세요. 장엄한 풍경이 마음을 리셋해줄 거예요." },
      { type: "city", title: "도시 탐험 — 도쿄/뉴욕 🌃", description: "먹고, 보고, 쇼핑하고! 에너지 넘치는 대도시에서 트렌디한 경험을 가득 채워오세요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #20  여행 스타일 유형 테스트  [여행 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "travel-style",
    title: "여행 스타일 유형 테스트",
    subtitle: "계획파? 즉흥파? 나의 여행 DNA는?",
    emoji: "🧳",
    color: "#26A69A",
    category: "travel",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/20",
    questions: [
      { q: "여행 전날 밤 나는?", options: [
        { text: "분 단위 일정표 최종 점검 📋", value: "planner" },
        { text: "맛집 리스트만 대충 저장", value: "foodie" },
        { text: "비행기 시간만 확인 ✈️", value: "free" },
        { text: "SNS 감성샷 장소 리서치 📸", value: "influencer" }
      ]},
      { q: "여행 중 길을 잃었다! 나의 반응은?", options: [
        { text: "구글맵 켜고 최적 루트 탐색", value: "planner" },
        { text: "근처 맛집 있으면 오히려 좋아", value: "foodie" },
        { text: "길 잃은 것도 여행의 일부! 🎒", value: "free" },
        { text: "일단 이 골목 분위기 사진부터…", value: "influencer" }
      ]},
      { q: "여행 후 가장 먼저 하는 건?", options: [
        { text: "비용 정산 + 경비 정리 💰", value: "planner" },
        { text: "맛있었던 식당 별점 기록 ⭐", value: "foodie" },
        { text: "다음 여행 어디 갈지 검색 🌏", value: "free" },
        { text: "사진 보정하고 SNS 업로드 📱", value: "influencer" }
      ]}
    ],
    results: [
      { type: "planner", title: "완벽주의 플래너 📋", description: "분 단위 일정표는 기본! 예산, 동선, 대안까지 준비하는 여행의 장인이에요." },
      { type: "foodie", title: "미식가 여행러 🍽️", description: "여행 = 맛집 투어! 그 나라의 진짜 맛을 아는 당신은 혀로 세상을 탐험해요." },
      { type: "free", title: "자유로운 바람둥이 🎒", description: "계획은 최소한, 자유는 최대한! 발길 닿는 대로, 바람 부는 대로 떠나는 진정한 여행자." },
      { type: "influencer", title: "감성 크리에이터 📸", description: "여행의 모든 순간이 콘텐츠! 아름다운 장면을 포착하고 공유하는 것이 최고의 즐거움." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #21  혼행 적성 테스트  [여행 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "solo-travel",
    title: "혼행 적성 테스트",
    subtitle: "나는 혼자 여행 체질일까? 🎒",
    emoji: "🚶",
    color: "#546E7A",
    category: "travel",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/21",
    questions: [
      { q: "혼자 식당에서 밥 먹는 건?", options: [
        { text: "완전 편하다! 혼밥 최고 🍜", value: 3 },
        { text: "가끔은 괜찮다", value: 2 },
        { text: "좀 눈치 보이지만 가능", value: 1 },
        { text: "절대 못 한다… 😰", value: 0 }
      ]},
      { q: "모르는 도시에서 길을 물어야 한다면?", options: [
        { text: "현지인에게 자연스럽게 말 건다", value: 3 },
        { text: "번역 앱 켜고 시도한다", value: 2 },
        { text: "일단 구글맵으로 해결 시도", value: 1 },
        { text: "누군가 같이 있으면 좋겠다…", value: 0 }
      ]},
      { q: "여행 사진을 찍어줄 사람이 없다면?", options: [
        { text: "셀카봉 + 삼각대 마스터 📸", value: 3 },
        { text: "풍경 위주로 찍는다", value: 2 },
        { text: "지나가는 사람에게 부탁한다", value: 1 },
        { text: "사진 포기… 눈에 담는다 👀", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "함께가 좋은 동행파 🤝", description: "여행의 행복은 나누는 것! 소중한 사람과 함께할 때 진짜 여행의 즐거움을 느껴요." },
      { minScore: 3, maxScore: 5, title: "가끔 혼행 가능 🌤️", description: "조건이 맞으면 혼행도 OK! 점점 혼행에 적응하면 새로운 세계가 열릴 거예요." },
      { minScore: 6, maxScore: 7, title: "혼행 적성 90% ✨", description: "혼자여도 거뜬! 자유롭게 돌아다니는 즐거움을 아는 당신은 진정한 여행 고수." },
      { minScore: 8, maxScore: 9, title: "타고난 혼행 전문가 🏆", description: "혼자가 가장 편한 여행 체질! 나만의 속도로 세상을 탐험하는 진정한 자유인이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #22  친구가 보는 나의 이미지 테스트  [관계 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "friend-image",
    title: "친구가 보는 나의 진짜 이미지",
    subtitle: "내 친구들은 나를 어떻게 볼까? 👀",
    emoji: "🪞",
    color: "#AB47BC",
    category: "social",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/22",
    questions: [
      { q: "단체 카톡방에서 나의 역할은?", options: [
        { text: "웃긴 짤/드립 담당 😂", value: "funny" },
        { text: "고민 상담 & 조언 담당 🫂", value: "reliable" },
        { text: "일정 정리 & 총무 역할 📋", value: "organizer" },
        { text: "읽씹 전문 (가끔 리액션) 👻", value: "mystery" }
      ]},
      { q: "친구가 새벽 2시에 전화하면?", options: [
        { text: "\"야 뭔데 ㅋㅋ\" 웃으며 받는다", value: "funny" },
        { text: "\"무슨 일이야?\" 걱정하며 받는다", value: "reliable" },
        { text: "\"내일 얘기하자\" 합리적으로", value: "organizer" },
        { text: "모르는 척 다음 날 연락한다", value: "mystery" }
      ]},
      { q: "친구 생일에 나의 스타일은?", options: [
        { text: "깜짝 몰카나 장난 선물 🎉", value: "funny" },
        { text: "진심 담긴 손편지 + 선물 💌", value: "reliable" },
        { text: "파티 기획부터 예약까지 총괄 📅", value: "organizer" },
        { text: "\"생일 축하해\" 한 줄 (하지만 진심)", value: "mystery" }
      ]}
    ],
    results: [
      { type: "funny", title: "분위기 폭격기 🤣", description: "당신이 있는 곳에 웃음꽃이 핀다! 친구들이 힘들 때 가장 먼저 떠올리는 활력소예요." },
      { type: "reliable", title: "인생 상담소 🫂", description: "친구들의 든든한 버팀목! 누구나 당신에게 마음을 열고 고민을 나누고 싶어 해요." },
      { type: "organizer", title: "모임의 총대장 📋", description: "당신이 없으면 약속이 안 잡혀요! 계획과 실행력으로 친구 관계를 유지하는 핵심 인물." },
      { type: "mystery", title: "신비로운 고양이 🐱", description: "많이 말하지 않지만 존재감이 강한 당신. 알 듯 모를 듯한 매력에 친구들이 끌려요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #23  인간관계 에너지 테스트  [관계 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "social-energy",
    title: "인간관계 에너지 테스트",
    subtitle: "사람을 만나면 충전? 방전? 🔋",
    emoji: "⚡",
    color: "#EC407A",
    category: "social",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/23",
    questions: [
      { q: "주말에 약속이 3개나 있다. 기분이?", options: [
        { text: "신난다! 바쁜 주말 최고 🎉", value: 3 },
        { text: "적당히 괜찮다", value: 2 },
        { text: "하나만 가고 싶다…", value: 1 },
        { text: "전부 취소하고 싶다 🏠", value: 0 }
      ]},
      { q: "오랜만에 만난 지인이 \"다음에 또 보자!\"라고 한다면?", options: [
        { text: "\"당장 다음 주 어때?\" 바로 잡는다", value: 3 },
        { text: "\"그래 연락해~\" 진심으로 말한다", value: 2 },
        { text: "\"그래~\" (근데 연락 안 할 듯)", value: 1 },
        { text: "사교적 멘트일 뿐… 😅", value: 0 }
      ]},
      { q: "대화할 때 나의 에너지 레벨은?", options: [
        { text: "말할수록 신나고 에너지 UP!", value: 3 },
        { text: "적당히 즐기다 자연스럽게 마무리", value: 2 },
        { text: "30분 넘으면 지친다", value: 1 },
        { text: "5분이면 에너지 바닥 💀", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "프리미엄 혼자 시간 ☁️", description: "혼자만의 시간이 최고의 충전! 소수의 깊은 관계를 선호하는 당신은 질 높은 인연을 만들어요." },
      { minScore: 3, maxScore: 5, title: "밸런스형 사교가 ⚖️", description: "만남과 혼자의 시간을 적절히 조절하는 건강한 사회생활러! 이 균형이 당신의 무기예요." },
      { minScore: 6, maxScore: 7, title: "에너지 발전소 ⚡", description: "사람이 곧 에너지! 만남이 많을수록 활력이 넘치는 당신은 태양 같은 존재예요." },
      { minScore: 8, maxScore: 9, title: "인간 충전기 🔌", description: "당신 옆에 있으면 모두가 기분 좋아져요! 사교성 만렙, 사람을 끌어당기는 매력 보유자." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #24  갈등 해결 유형 테스트  [관계 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "conflict-style",
    title: "나의 갈등 해결 유형 테스트",
    subtitle: "충돌이 생겼을 때 나만의 방식은? 💥",
    emoji: "🕊️",
    color: "#7E57C2",
    category: "social",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/24",
    questions: [
      { q: "친구와 의견이 충돌했다! 나의 첫 반응은?", options: [
        { text: "\"내 생각은 이래\" 명확히 말한다", value: "direct" },
        { text: "서로 양보할 점을 찾는다 🤝", value: "mediator" },
        { text: "일단 물러나고 시간을 둔다", value: "avoider" },
        { text: "유머로 분위기를 전환한다 😄", value: "deflector" }
      ]},
      { q: "직장에서 부당한 지시를 받았다면?", options: [
        { text: "바로 의견을 표현한다 🗣️", value: "direct" },
        { text: "타협안을 제시한다", value: "mediator" },
        { text: "일단 따르고 나중에 고민", value: "avoider" },
        { text: "동료에게 넌지시 불만을 표현", value: "deflector" }
      ]},
      { q: "가족과 말다툼이 커질 때 나는?", options: [
        { text: "끝장을 보고 화해한다", value: "direct" },
        { text: "서로 입장을 정리하자고 제안", value: "mediator" },
        { text: "방으로 들어가 혼자 있는다", value: "avoider" },
        { text: "화제를 돌려 분위기 전환", value: "deflector" }
      ]}
    ],
    results: [
      { type: "direct", title: "정면돌파 파이터 🥊", description: "문제를 회피하지 않는 당신! 갈등을 빠르게 해결하지만, 때로는 부드러운 접근도 필요해요." },
      { type: "mediator", title: "평화의 중재자 🕊️", description: "양쪽 입장을 모두 이해하는 당신은 갈등 해결의 달인! 공정한 해결책을 찾아내요." },
      { type: "avoider", title: "전략적 회피자 🐢", description: "시간이 해결해 줄 거라 믿는 당신. 때로는 효과적이지만, 쌓아두면 폭발할 수 있어요!" },
      { type: "deflector", title: "분위기 전환 마법사 ✨", description: "유머와 센스로 갈등을 녹이는 당신! 분위기 장악력이 뛰어나지만 핵심은 짚고 넘어가세요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #25  닮은 영화 장르 테스트  [취향 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "movie-genre",
    title: "나와 닮은 영화 장르 테스트",
    subtitle: "내 인생이 영화라면 어떤 장르? 🎬",
    emoji: "🎬",
    color: "#D32F2F",
    category: "taste",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/25",
    questions: [
      { q: "인생에서 가장 중요한 가치는?", options: [
        { text: "사랑과 감동 💕", value: "romance" },
        { text: "도전과 성취 🏆", value: "action" },
        { text: "웃음과 즐거움 😂", value: "comedy" },
        { text: "진실과 깨달음 💡", value: "drama" }
      ]},
      { q: "금요일 밤, 가장 보고 싶은 영화는?", options: [
        { text: "가슴 찡한 로맨스 🌹", value: "romance" },
        { text: "손에 땀 쥐는 액션/스릴러 💥", value: "action" },
        { text: "배꼽 빠지는 코미디 🤣", value: "comedy" },
        { text: "생각이 깊어지는 휴먼 드라마 🎭", value: "drama" }
      ]},
      { q: "여행 중 예상치 못한 사건이 발생! 나의 반응은?", options: [
        { text: "운명적인 만남의 시작일지도! ✨", value: "romance" },
        { text: "오히려 흥미진진! 모험 시작 🗡️", value: "action" },
        { text: "나중에 웃긴 에피소드가 될 거야 ㅋㅋ", value: "comedy" },
        { text: "이것도 인생의 한 페이지… 📖", value: "drama" }
      ]}
    ],
    results: [
      { type: "romance", title: "로맨스 영화 주인공 💕", description: "감성이 풍부하고 사랑을 믿는 당신! 인생의 매 순간이 영화 같은 드라마틱한 장면이에요." },
      { type: "action", title: "액션 블록버스터 히어로 💥", description: "도전을 두려워하지 않는 당신! 어떤 위기도 정면 돌파하는 주인공 체질이에요." },
      { type: "comedy", title: "코미디 영화 주인공 🤣", description: "어디서든 웃음을 만드는 당신! 힘든 상황도 유머로 극복하는 인생의 코미디언." },
      { type: "drama", title: "깊은 휴먼 드라마 주인공 🎭", description: "삶의 의미를 고민하는 사색가! 깊이 있는 경험이 쌓여 당신만의 명작을 만들어가요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #26  나의 음악 DNA 테스트  [취향 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "music-dna",
    title: "나의 음악 DNA 테스트",
    subtitle: "내 영혼의 장르는 뭘까? 🎵",
    emoji: "🎧",
    color: "#1DE9B6",
    category: "taste",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/26",
    questions: [
      { q: "기분이 좋을 때 틀고 싶은 음악은?", options: [
        { text: "신나는 댄스/팝 💃", value: "pop" },
        { text: "감성 인디/어쿠스틱 🎸", value: "indie" },
        { text: "강렬한 힙합/R&B 🎤", value: "hiphop" },
        { text: "웅장한 클래식/OST 🎻", value: "classic" }
      ]},
      { q: "노래방에서 나의 스타일은?", options: [
        { text: "최신 K-POP 댄스곡! 🕺", value: "pop" },
        { text: "감성 발라드로 분위기 UP 🎶", value: "indie" },
        { text: "래핑으로 분위기 장악 🔥", value: "hiphop" },
        { text: "뮤지컬/OST 넘버 열창 🎭", value: "classic" }
      ]},
      { q: "음악을 듣는 주된 이유는?", options: [
        { text: "기분 전환 & 에너지 충전", value: "pop" },
        { text: "감정을 느끼고 공감하려고", value: "indie" },
        { text: "자신감과 동기부여!", value: "hiphop" },
        { text: "마음의 평화와 영감", value: "classic" }
      ]}
    ],
    results: [
      { type: "pop", title: "팝/댄스 DNA 💃", description: "트렌드에 민감하고 에너지 넘치는 당신! 음악과 함께라면 어디서든 무대가 돼요." },
      { type: "indie", title: "인디/감성 DNA 🎸", description: "음악으로 감정을 표현하는 당신. 남들이 모르는 숨은 명곡을 발굴하는 감성 큐레이터!" },
      { type: "hiphop", title: "힙합/R&B DNA 🎤", description: "자신감과 스웩이 넘치는 당신! 음악에서 에너지와 영감을 얻는 타입이에요." },
      { type: "classic", title: "클래식/OST DNA 🎻", description: "깊이 있는 음악을 사랑하는 당신. 한 곡에서 우주를 느끼는 감수성의 소유자!" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #27  취향 감별사 레벨 테스트  [취향 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "taste-connoisseur",
    title: "취향 감별사 레벨 테스트",
    subtitle: "나는 얼마나 '있어 보이는' 취향일까?",
    emoji: "🍷",
    color: "#880E4F",
    category: "taste",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/27",
    questions: [
      { q: "카페에서 커피를 고를 때?", options: [
        { text: "원두 산지와 로스팅 물어본다 ☕", value: 3 },
        { text: "핸드드립이나 스페셜티 선호", value: 2 },
        { text: "아메리카노면 충분!", value: 1 },
        { text: "커피보다 달달한 음료 🧋", value: 0 }
      ]},
      { q: "미술관에 가면 나는?", options: [
        { text: "작품 해설까지 꼼꼼히 읽는다 🎨", value: 3 },
        { text: "마음에 드는 작품 앞에서 오래 서 있는다", value: 2 },
        { text: "사진 찍고 인스타에 올린다 📸", value: 1 },
        { text: "미술관보다 카페가 좋다 ☕", value: 0 }
      ]},
      { q: "맛집을 고를 때 기준은?", options: [
        { text: "셰프의 철학과 식재료 원산지", value: 3 },
        { text: "분위기와 플레이팅", value: 2 },
        { text: "맛있으면 OK! 리뷰 참고", value: 1 },
        { text: "양 많고 가성비 최고! 🍖", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "소박한 행복 추구파 😊", description: "화려한 취향보다 실속! 단순하지만 확실한 행복을 아는 당신은 인생을 가장 잘 즐기는 타입." },
      { minScore: 3, maxScore: 5, title: "성장하는 취향인 📈", description: "기본기가 탄탄한 취향의 소유자! 관심 분야에서 점점 안목이 높아지고 있어요." },
      { minScore: 6, maxScore: 7, title: "감별사 수준 취향러 🏅", description: "남다른 안목과 기준을 가진 당신! 추천을 부탁하면 실패 없는 전문가급이에요." },
      { minScore: 8, maxScore: 9, title: "전설의 소믈리에 🍷", description: "모든 분야에서 최고만 알아보는 눈! 당신의 취향은 곧 브랜드입니다." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #28  오늘의 행운 아이템 테스트  [운세 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "lucky-item",
    title: "오늘의 행운 아이템 테스트",
    subtitle: "오늘 나에게 행운을 가져다줄 건? 🍀",
    emoji: "🔮",
    color: "#9C27B0",
    category: "fortune",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/28",
    questions: [
      { q: "오늘 아침 기분은 어떤가요?", options: [
        { text: "상쾌하고 활기차다! ☀️", value: "color" },
        { text: "차분하고 평온하다 🌸", value: "scent" },
        { text: "약간 불안하고 긴장된다 😬", value: "stone" },
        { text: "나른하고 졸리다 😴", value: "drink" }
      ]},
      { q: "요즘 가장 갖고 싶은 것은?", options: [
        { text: "자신감과 존재감 ✨", value: "color" },
        { text: "마음의 안정과 힐링 🧘", value: "scent" },
        { text: "보호받는 느낌 🛡️", value: "stone" },
        { text: "활력과 에너지 ⚡", value: "drink" }
      ]},
      { q: "직감적으로 끌리는 숫자는?", options: [
        { text: "7 (행운의 상징)", value: "color" },
        { text: "3 (조화로운 수)", value: "scent" },
        { text: "8 (무한 순환)", value: "stone" },
        { text: "1 (새로운 시작)", value: "drink" }
      ]}
    ],
    results: [
      { type: "color", title: "행운의 컬러: 로열 퍼플 💜", description: "오늘은 보라색 계열 아이템을 가까이 두세요! 보라색이 당신에게 자신감과 창의적 에너지를 불어넣어 줄 거예요." },
      { type: "scent", title: "행운의 아이템: 라벤더 향 💐", description: "오늘의 행운 아이템은 라벤더 향! 향초, 디퓨저, 핸드크림 무엇이든 좋아요. 마음이 안정되고 좋은 기운이 찾아올 거예요." },
      { type: "stone", title: "행운의 아이템: 터키석 💎", description: "오늘은 푸른빛 액세서리를 착용해보세요! 부정적 에너지를 막고 당신을 보호하는 기운이 있어요." },
      { type: "drink", title: "행운의 아이템: 생강차 🍵", description: "오늘은 따뜻한 생강차 한 잔! 몸에 활력을 불어넣고 행운의 기운을 끌어당기는 마법의 한 잔이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #29  전생 인연 유형 테스트  [운세 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "past-connection",
    title: "전생 인연 유형 테스트",
    subtitle: "지금 내 곁에 있는 사람은 전생에 누구였을까?",
    emoji: "🌙",
    color: "#6A1B9A",
    category: "fortune",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/29",
    questions: [
      { q: "처음 만난 사람에게 강한 끌림을 느낀 적 있나요?", options: [
        { text: "자주! 운명 같은 느낌이 든다 ✨", value: "soulmate" },
        { text: "가끔 강한 데자뷰를 느낀다", value: "family" },
        { text: "이상하게 편한 사람이 있다", value: "friend" },
        { text: "딱히 그런 적 없다", value: "rival" }
      ]},
      { q: "반복되는 꿈 속에 자주 나오는 장면은?", options: [
        { text: "누군가와 손을 잡고 걷는 장면 💑", value: "soulmate" },
        { text: "낯선 집에서 가족처럼 함께 있는 장면", value: "family" },
        { text: "함께 모험을 떠나는 장면 🗺️", value: "friend" },
        { text: "누군가와 경쟁하는 장면 ⚔️", value: "rival" }
      ]},
      { q: "소중한 사람과 있을 때 드는 감정은?", options: [
        { text: "\"이 사람을 전에도 알았던 것 같아\"", value: "soulmate" },
        { text: "\"내가 이 사람을 지켜줘야 해\"", value: "family" },
        { text: "\"같이 있으면 시간이 안 간다\"", value: "friend" },
        { text: "\"이 사람 덕분에 성장한다\"", value: "rival" }
      ]}
    ],
    results: [
      { type: "soulmate", title: "전생의 연인 💫", description: "지금 끌리는 그 사람, 전생에서도 사랑했던 인연일 수 있어요! 운명적 만남을 소중히 간직하세요." },
      { type: "family", title: "전생의 가족 👨‍👩‍👧", description: "이유 없이 편안한 그 사람은 전생의 가족이었을 수 있어요. 혈연을 넘어선 깊은 유대감이 느껴져요." },
      { type: "friend", title: "전생의 전우 🤝", description: "함께 모험을 떠났던 전생의 동료! 세월이 바뀌어도 변하지 않는 우정의 인연이에요." },
      { type: "rival", title: "전생의 라이벌 ⚔️", description: "자극을 주고받는 그 사람은 전생의 라이벌! 서로를 성장시키는 특별한 인연이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #30  운명의 흐름 감지력 테스트  [운세 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "fortune-sense",
    title: "운명의 흐름 감지력 테스트",
    subtitle: "나는 행운의 타이밍을 잡을 수 있을까? 🍀",
    emoji: "🎯",
    color: "#4A148C",
    category: "fortune",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/30",
    questions: [
      { q: "\"오늘 뭔가 좋은 일이 생길 것 같아!\" 이런 직감이 맞은 적 있나요?", options: [
        { text: "자주 맞는다! 신기할 정도 🔮", value: 3 },
        { text: "가끔 맞을 때가 있다", value: 2 },
        { text: "글쎄, 잘 모르겠다", value: 1 },
        { text: "직감 같은 건 안 믿는다", value: 0 }
      ]},
      { q: "우연의 일치가 연달아 일어나면?", options: [
        { text: "\"우주가 보내는 신호다!\" ✨", value: 3 },
        { text: "신기하네~ 하고 긍정적으로 본다", value: 2 },
        { text: "그냥 우연이겠지", value: 1 },
        { text: "별로 신경 안 쓴다", value: 0 }
      ]},
      { q: "중요한 결정 앞에서 나는?", options: [
        { text: "직감을 믿고 따른다 💡", value: 3 },
        { text: "분석 + 직감 반반", value: 2 },
        { text: "데이터와 논리로 판단한다", value: 1 },
        { text: "남의 조언을 따른다", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "현실주의 이성파 🧠", description: "직감보다 논리! 운명의 흐름보다 확실한 데이터를 믿는 당신. 그것도 하나의 능력이에요." },
      { minScore: 3, maxScore: 5, title: "반반 밸런스 감지자 ⚖️", description: "이성과 직감 사이 균형을 잡는 당신! 중요한 순간에는 직감이 힘을 발휘할 거예요." },
      { minScore: 6, maxScore: 7, title: "예민한 운명 감지자 🌟", description: "운명의 작은 신호도 놓치지 않는 당신! 직감을 따라가면 좋은 결과가 올 확률이 높아요." },
      { minScore: 8, maxScore: 9, title: "타고난 예언자 체질 🔮", description: "우주와 교감하는 당신! 신기할 정도로 정확한 직감의 소유자. 그 감각을 믿으세요!" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #31  연애 집착도 테스트  [연애 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "love-obsession",
    title: "연애 집착도 레벨 테스트",
    subtitle: "나는 연인에게 얼마나 집착할까? 🔒",
    emoji: "🫣",
    color: "#C62828",
    category: "love",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/31",
    questions: [
      { q: "연인의 답장이 2시간째 없다. 나는?", options: [
        { text: "바쁜가 보다~ 내 할 일 한다", value: 0 },
        { text: "카톡 프로필 한번 확인", value: 1 },
        { text: "\"뭐해?\" 추가 메시지 발사 📩", value: 2 },
        { text: "접속 시간 확인하며 불안 😰", value: 3 }
      ]},
      { q: "연인이 이성 친구와 약속이 있다고 한다면?", options: [
        { text: "재밌게 놀다 와~ 👋", value: 0 },
        { text: "누구랑 어디 가는지 한번 물어본다", value: 1 },
        { text: "몇 시에 끝나는지 계속 궁금하다", value: 2 },
        { text: "같이 가도 되냐고 넌지시 말한다", value: 3 }
      ]},
      { q: "연인의 SNS에 모르는 사람이 댓글을 달았다면?", options: [
        { text: "관심 없다, 내 게시물이나 본다", value: 0 },
        { text: "살짝 눈에 들어오지만 넘어간다", value: 1 },
        { text: "그 사람 프로필을 살짝 확인 👀", value: 2 },
        { text: "누군지 조사 시작… 🕵️", value: 3 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "쿨한 연애 고수 😎", description: "신뢰 기반의 건강한 연애! 상대를 존중하면서 자기 시간도 잘 챙기는 이상적인 연인이에요." },
      { minScore: 3, maxScore: 5, title: "적당한 관심러 💕", description: "사랑하니까 당연히 궁금하죠! 건강한 수준의 관심. 이 정도면 귀여운 질투예요." },
      { minScore: 6, maxScore: 7, title: "집착 싹 발견 ⚠️", description: "사랑이 깊은 만큼 불안도 큰 편! 신뢰를 쌓는 대화로 불안감을 줄여보세요." },
      { minScore: 8, maxScore: 9, title: "프로 집착러 레전드 🔒", description: "사랑의 또 다른 이름은 '집착'…? 상대에게 부담이 될 수 있으니 자기 시간 갖기를 연습해보세요!" }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #32  이상형 자기분석 테스트  [연애 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "ideal-type",
    title: "이상형 자기분석 테스트",
    subtitle: "내가 진짜 끌리는 이상형은 누구? 💘",
    emoji: "💝",
    color: "#F06292",
    category: "love",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/32",
    questions: [
      { q: "첫눈에 반하는 포인트는?", options: [
        { text: "따뜻한 미소와 다정한 눈빛 😊", value: "warm" },
        { text: "유머 감각과 재치 🤣", value: "witty" },
        { text: "똑똑하고 지적인 대화 능력 🧠", value: "smart" },
        { text: "자기만의 세계가 있는 독특함 🎭", value: "unique" }
      ]},
      { q: "연인에게 가장 바라는 건?", options: [
        { text: "무조건적인 응원과 지지 🤗", value: "warm" },
        { text: "매일 웃게 해주는 유쾌함 😄", value: "witty" },
        { text: "함께 성장하는 동반자 관계 📈", value: "smart" },
        { text: "서로의 개성을 존중하는 자유 🦅", value: "unique" }
      ]},
      { q: "가장 매력적으로 느끼는 순간은?", options: [
        { text: "힘들 때 말없이 안아줄 때 🫂", value: "warm" },
        { text: "예상치 못한 깜짝 장난칠 때 😜", value: "witty" },
        { text: "어려운 문제를 척척 해결할 때 💡", value: "smart" },
        { text: "남들과 다른 독보적 취향을 보일 때 🎨", value: "unique" }
      ]}
    ],
    results: [
      { type: "warm", title: "따뜻한 감성형 이상형 🫂", description: "다정하고 포근한 사람에게 끌리는 당신! 말보다 행동으로 사랑을 표현하는 사람이 인생 반려자." },
      { type: "witty", title: "유쾌한 유머형 이상형 🤣", description: "웃음이 있는 곳에 사랑이! 유머 감각 좋고 재치 넘치는 사람과 함께하면 매일이 행복해요." },
      { type: "smart", title: "지적 매력형 이상형 🧠", description: "깊은 대화가 설렘의 시작! 지성과 능력을 겸비한 사람에게 강하게 끌리는 타입이에요." },
      { type: "unique", title: "독보적 개성파 이상형 🎭", description: "평범함은 NO! 자기만의 세계관이 뚜렷한 독특한 매력의 소유자에게 반하는 당신." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #33  직장인 탈출 본능 테스트  [직장 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "resign-instinct",
    title: "직장인 탈출 본능 테스트",
    subtitle: "나의 퇴사 충동 레벨은 몇 %? 🚪",
    emoji: "🏃",
    color: "#37474F",
    category: "work",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/33",
    questions: [
      { q: "월요일 아침 알람이 울렸을 때 첫 생각은?", options: [
        { text: "오늘도 화이팅! 💪", value: 0 },
        { text: "그래, 가야지…", value: 1 },
        { text: "로또 당첨되면 바로 퇴사", value: 2 },
        { text: "사직서 어디 뒀더라? 📄", value: 3 }
      ]},
      { q: "업무 중 유튜브 추천에 '퇴사 브이로그'가 뜨면?", options: [
        { text: "관심 없음, 바로 닫는다", value: 0 },
        { text: "제목만 보고 넘어간다", value: 1 },
        { text: "몰래 끝까지 시청 👀", value: 2 },
        { text: "구독 + 알림 설정 🔔", value: 3 }
      ]},
      { q: "\"요즘 일 어때?\"라는 질문에 나는?", options: [
        { text: "\"재밌어! 보람 있어\"", value: 0 },
        { text: "\"그냥 그래~ 먹고 살려고\"", value: 1 },
        { text: "\"하… (한숨) 말하면 입 아파\"", value: 2 },
        { text: "\"퇴사 준비 중 (진지)\" 🧳", value: 3 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "직장 만족 모범사원 🏅", description: "일에 보람을 느끼는 당신! 이런 마인드라면 어디서든 빛날 수 있어요." },
      { minScore: 3, maxScore: 5, title: "퇴사 판타지 초보 🌤️", description: "가끔 퇴사 상상을 하지만 실행은 안 하는 레벨. 대부분의 직장인이 여기 있어요!" },
      { minScore: 6, maxScore: 7, title: "탈출 카운트다운 🚨", description: "퇴사 충동이 꽤 높아요! 이직 시장을 슬슬 살펴보는 것도 나쁘지 않을 때." },
      { minScore: 8, maxScore: 9, title: "퇴사 임박 전설 🚀", description: "이미 마음은 퇴사 완료! 다음 스텝만 정해지면 바로 날아갈 준비가 된 상태." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #34  사내 정치력 테스트  [직장 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "office-politics",
    title: "사내 정치력 테스트",
    subtitle: "회사라는 정글에서 나의 생존 전략은? 🦁",
    emoji: "🏢",
    color: "#455A64",
    category: "work",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/34",
    questions: [
      { q: "팀장과 의견이 다를 때 나는?", options: [
        { text: "논리적으로 설득을 시도한다 🗣️", value: "diplomat" },
        { text: "일단 따르되 기회를 노린다", value: "fox" },
        { text: "동료들과 의견을 모아 제안한다", value: "alliance" },
        { text: "내 일만 잘하면 된다", value: "lone" }
      ]},
      { q: "승진 발표가 났는데 동기가 나보다 먼저 승진했다면?", options: [
        { text: "축하해주고, 나도 더 노력한다", value: "diplomat" },
        { text: "왜 그런지 원인 분석부터 🔍", value: "fox" },
        { text: "핵심 인맥을 더 관리해야겠다", value: "alliance" },
        { text: "신경 안 쓴다, 내 페이스 유지", value: "lone" }
      ]},
      { q: "사내 소문이 돌 때 나의 포지션은?", options: [
        { text: "중립 유지, 어느 편도 안 든다 ⚖️", value: "diplomat" },
        { text: "정보 수집하고 판단한다", value: "fox" },
        { text: "신뢰할 수 있는 사람들과 공유", value: "alliance" },
        { text: "소문 따위 관심 없다 🎧", value: "lone" }
      ]}
    ],
    results: [
      { type: "diplomat", title: "노련한 외교관 🕊️", description: "누구와도 적을 만들지 않는 능력자! 갈등 사이에서 균형을 잡는 조율의 달인이에요." },
      { type: "fox", title: "전략적 여우 🦊", description: "정보력과 판단력이 뛰어난 당신! 상황을 읽고 최적의 타이밍에 움직이는 전략가." },
      { type: "alliance", title: "동맹의 리더 🤝", description: "혼자보다 함께! 핵심 인맥을 형성하고 팀워크로 성과를 만들어내는 사회적 리더." },
      { type: "lone", title: "고독한 실력파 🐺", description: "정치보다 실력! 묵묵히 성과로 말하는 당신은 진정한 프로페셔널이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #35  내향외향 스펙트럼 테스트  [성향 · sum]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "introvert-extrovert",
    title: "내향·외향 스펙트럼 테스트",
    subtitle: "나는 진짜 I? 진짜 E? 아니면 그 사이? 🔄",
    emoji: "🔄",
    color: "#00897B",
    category: "personality",
    scoringType: "sum",
    blogUrl: "https://example.tistory.com/35",
    questions: [
      { q: "파티에 초대받았다! 나의 솔직한 반응은?", options: [
        { text: "신난다! 뭐 입지? 👗", value: 3 },
        { text: "아는 사람 있으면 갈게", value: 2 },
        { text: "가야 하나… 핑계 찾는 중", value: 1 },
        { text: "불참 확정 (집이 최고) 🏠", value: 0 }
      ]},
      { q: "에너지가 충전되는 방식은?", options: [
        { text: "사람 많은 곳에서 수다 떨기 🗣️", value: 3 },
        { text: "소수 친구와 가볍게 만남", value: 2 },
        { text: "혼자 취미 활동하기 🎧", value: 1 },
        { text: "완전한 혼자만의 시간 🧘", value: 0 }
      ]},
      { q: "새로운 사람을 만나는 건?", options: [
        { text: "설레고 기대된다! 🤩", value: 3 },
        { text: "적당히 괜찮다", value: 2 },
        { text: "살짝 부담스럽다", value: 1 },
        { text: "가능하면 피하고 싶다 😅", value: 0 }
      ]}
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "깊은 내향인 🌙", description: "혼자만의 시간이 최고의 선물! 깊이 있는 사고와 풍부한 내면을 가진 당신은 조용한 강자." },
      { minScore: 3, maxScore: 5, title: "양향인 (Ambivert) 🌗", description: "상황에 따라 I도 E도 될 수 있는 만능 타입! 유연한 사교력이 최대 강점이에요." },
      { minScore: 6, maxScore: 7, title: "활발한 외향인 ☀️", description: "사람에게서 에너지를 얻는 당신! 어디서든 분위기를 밝히는 태양 같은 존재예요." },
      { minScore: 8, maxScore: 9, title: "극강 외향인 🌟", description: "사람 없인 못 사는 슈퍼 E! 에너지가 넘치고 어디서든 새 친구를 만드는 인맥왕." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #36  시간 관리 유형 테스트  [성향 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "time-management",
    title: "나의 시간 관리 유형 테스트",
    subtitle: "나는 시간을 어떻게 쓰는 유형일까? ⏰",
    emoji: "⏰",
    color: "#FF6F00",
    category: "personality",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/36",
    questions: [
      { q: "마감이 일주일 남았다. 나는?", options: [
        { text: "이미 절반은 해놨다 📋", value: "early" },
        { text: "계획표 짜고 매일 조금씩", value: "steady" },
        { text: "후반부에 몰아서 한다 🏃", value: "sprinter" },
        { text: "마감 전날 밤에 시작… 🌙", value: "lastmin" }
      ]},
      { q: "약속 시간에 나는 보통?", options: [
        { text: "15분 일찍 도착 ⏰", value: "early" },
        { text: "딱 정각에 도착", value: "steady" },
        { text: "5~10분 늦는 편", value: "sprinter" },
        { text: "\"5분이면 도착!\" (30분 후 도착)", value: "lastmin" }
      ]},
      { q: "투두리스트를 사용하는 방식은?", options: [
        { text: "매일 아침 체크리스트 작성 ✅", value: "early" },
        { text: "주간 계획으로 관리", value: "steady" },
        { text: "머릿속에 대충 있다", value: "sprinter" },
        { text: "투두리스트? 그게 뭐예요? 🤷", value: "lastmin" }
      ]}
    ],
    results: [
      { type: "early", title: "선제적 완료파 🏆", description: "마감 전에 끝내는 모범생! 여유로운 시간 관리로 스트레스 없는 삶을 살아요." },
      { type: "steady", title: "꾸준한 실행가 🐝", description: "매일 조금씩, 꾸준히! 안정적인 루틴으로 확실한 성과를 만들어내는 타입." },
      { type: "sprinter", title: "단기 집중 스프린터 🏃", description: "마감이 다가와야 엔진이 걸리는 타입! 짧은 시간에 폭발적 집중력을 발휘해요." },
      { type: "lastmin", title: "마감 전야 천재 🌙", description: "데드라인이 곧 영감! 극한의 압박 속에서 기적적 퀄리티를 뽑아내는 야행성 천재." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #37  잠재의식 속 진짜 성격  [성향 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "subconscious",
    title: "잠재의식 속 진짜 성격 테스트",
    subtitle: "겉으로 안 보이는 나의 진짜 모습은? 🎭",
    emoji: "🧊",
    color: "#283593",
    category: "personality",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/37",
    questions: [
      { q: "어두운 숲길을 걷고 있다. 갈림길에서 나는?", options: [
        { text: "밝은 빛이 보이는 쪽으로 🌟", value: "optimist" },
        { text: "사람들의 발자국이 많은 쪽으로", value: "follower" },
        { text: "아무도 안 간 길로 👣", value: "rebel" },
        { text: "되돌아간다", value: "cautious" }
      ]},
      { q: "갑자기 슈퍼파워가 생긴다면?", options: [
        { text: "모든 사람을 치유하는 능력 💚", value: "optimist" },
        { text: "마음을 읽는 텔레파시 🧠", value: "follower" },
        { text: "시간을 멈추는 능력 ⏸️", value: "rebel" },
        { text: "투명인간이 되는 능력 👻", value: "cautious" }
      ]},
      { q: "창문 밖에 비가 내린다. 드는 감정은?", options: [
        { text: "비 온 뒤 무지개가 뜰 거야 🌈", value: "optimist" },
        { text: "다른 사람들도 우산 챙겼을까?", value: "follower" },
        { text: "비 맞으며 걸어보고 싶다 🌧️", value: "rebel" },
        { text: "밖에 안 나가면 되지", value: "cautious" }
      ]}
    ],
    results: [
      { type: "optimist", title: "빛을 찾는 낙관주의자 🌟", description: "내면 깊은 곳에 강한 희망과 긍정이 있어요! 어둠 속에서도 빛을 발견하는 힘을 가졌어요." },
      { type: "follower", title: "공감형 관찰자 👁️", description: "타인의 감정에 민감하고 공감 능력이 뛰어나요. 주변을 세심하게 살피는 따뜻한 마음의 소유자." },
      { type: "rebel", title: "자유로운 반항아 🦅", description: "규칙보다 자유를 사랑하는 내면! 남들과 다른 길을 가는 용기가 잠재의식에 새겨져 있어요." },
      { type: "cautious", title: "신중한 수호자 🛡️", description: "안전을 최우선으로 생각하는 내면. 큰 실수를 피하는 능력이 당신의 숨겨진 강점이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #38  나와 닮은 동물 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "spirit-animal",
    title: "나와 닮은 동물 테스트",
    subtitle: "내 영혼의 동물은 뭘까? 🐾",
    emoji: "🦊",
    color: "#E65100",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/38",
    questions: [
      { q: "아침에 일어나는 스타일은?", options: [
        { text: "새벽부터 활기차게! 🌅", value: "squirrel" },
        { text: "알람 한 번에 기상", value: "cat" },
        { text: "스누즈 5번 누르고 겨우…", value: "bear" },
        { text: "밤에 활동, 낮에 잠 🦉", value: "owl" }
      ]},
      { q: "위험한 상황에서 나의 본능은?", options: [
        { text: "재빠르게 도망간다! 🐿️", value: "squirrel" },
        { text: "상황 파악 후 우아하게 대처", value: "cat" },
        { text: "일단 버틴다. 체력으로 승부 💪", value: "bear" },
        { text: "조용히 관찰하다 지혜롭게 해결", value: "owl" }
      ]},
      { q: "혼자 있을 때 가장 편안한 자세는?", options: [
        { text: "이리저리 움직이며 뭔가 하는 중", value: "squirrel" },
        { text: "햇빛 드는 곳에서 기지개 ☀️", value: "cat" },
        { text: "소파에 크게 드러눕기 🛋️", value: "bear" },
        { text: "어둑한 곳에서 조용히 명상 🧘", value: "owl" }
      ]}
    ],
    results: [
      { type: "squirrel", title: "부지런한 다람쥐 🐿️", description: "에너지 넘치고 항상 바쁜 당신! 작지만 끊임없이 움직이며 미래를 준비하는 알뜰한 타입이에요." },
      { type: "cat", title: "도도한 고양이 🐱", description: "자기만의 페이스를 지키는 독립적인 당신! 쿨하고 우아하지만 마음을 주면 한없이 따뜻해요." },
      { type: "bear", title: "느긋한 곰 🐻", description: "여유롭고 듬직한 당신! 평소엔 온순하지만 필요할 때 엄청난 힘을 발휘하는 반전 매력의 소유자." },
      { type: "owl", title: "지혜로운 올빼미 🦉", description: "깊은 사고력과 날카로운 관찰력의 소유자! 밤에 더 활동적이고, 조용히 모든 것을 꿰뚫어 봐요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #39  전생 국적 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "past-nation",
    title: "전생 국적 테스트",
    subtitle: "전생에 나는 어느 나라 사람이었을까? 🌏",
    emoji: "🌏",
    color: "#0097A7",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/39",
    questions: [
      { q: "가장 끌리는 음식 스타일은?", options: [
        { text: "정갈한 일식 코스 🍱", value: "japan" },
        { text: "화려한 프렌치 요리 🥐", value: "france" },
        { text: "매콤한 멕시칸 타코 🌮", value: "mexico" },
        { text: "향신료 가득 인도 커리 🍛", value: "india" }
      ]},
      { q: "가장 매력적으로 느끼는 건축물은?", options: [
        { text: "고즈넉한 목조 신사 ⛩️", value: "japan" },
        { text: "화려한 궁전과 미술관 🏰", value: "france" },
        { text: "알록달록한 컬러풀 마을 🏘️", value: "mexico" },
        { text: "신비로운 사원과 만다라 🕌", value: "india" }
      ]},
      { q: "나의 라이프 스타일 모토는?", options: [
        { text: "조화와 절제, 완벽을 추구 🎋", value: "japan" },
        { text: "예술과 낭만, 삶을 즐기자 🎨", value: "france" },
        { text: "열정과 축제, 오늘을 살자 🎊", value: "mexico" },
        { text: "영성과 깨달음, 내면의 평화 🧘", value: "india" }
      ]}
    ],
    results: [
      { type: "japan", title: "전생 일본인 — 교토의 장인 🎋", description: "섬세함과 완벽주의의 DNA! 전생에 교토에서 장인 정신을 불태우던 당신, 디테일에 대한 집착은 전생부터!" },
      { type: "france", title: "전생 프랑스인 — 파리의 예술가 🎨", description: "낭만과 예술을 사랑하는 DNA! 전생에 세느강 옆에서 그림을 그리던 당신, 미적 감각이 남달라요." },
      { type: "mexico", title: "전생 멕시코인 — 축제의 달인 🎊", description: "열정과 에너지의 DNA! 전생에 마리아치 밴드와 함께 축제를 즐기던 당신, 어디서든 분위기를 살려요." },
      { type: "india", title: "전생 인도인 — 명상의 구루 🧘", description: "깊은 영성과 지혜의 DNA! 전생에 갠지스강 옆에서 명상하던 당신, 내면의 평화를 아는 영혼이에요." }
    ]
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     #40  무인도 생존 역할 테스트  [유머 · type]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: "island-role",
    title: "무인도 생존 역할 테스트",
    subtitle: "무인도에 떨어지면 나는 어떤 역할? 🏝️",
    emoji: "🏝️",
    color: "#33691E",
    category: "fun",
    scoringType: "type",
    blogUrl: "https://example.tistory.com/40",
    questions: [
      { q: "무인도에 도착했다! 가장 먼저 하는 건?", options: [
        { text: "높은 곳에 올라 지형을 파악한다 🗺️", value: "leader" },
        { text: "식용 가능한 식물/물을 찾는다 🌿", value: "survivor" },
        { text: "나뭇가지로 SOS 신호를 만든다 🆘", value: "engineer" },
        { text: "동행자들 컨디션을 체크한다 🩺", value: "healer" }
      ]},
      { q: "밤이 됐다. 나의 담당은?", options: [
        { text: "내일 계획을 세우고 역할을 분배", value: "leader" },
        { text: "불을 피우고 식량을 구한다 🔥", value: "survivor" },
        { text: "비바람을 막을 쉘터 만들기 🏗️", value: "engineer" },
        { text: "지친 사람들을 격려하고 돌본다 💚", value: "healer" }
      ]},
      { q: "구조선이 보인다! 나의 행동은?", options: [
        { text: "모두를 모아 탈출 순서를 정한다", value: "leader" },
        { text: "남은 식량을 챙겨 배에 오른다", value: "survivor" },
        { text: "신호 장치를 만들어 구조선에 알린다", value: "engineer" },
        { text: "다친 사람이 먼저 타게 도와준다", value: "healer" }
      ]}
    ],
    results: [
      { type: "leader", title: "생존 리더 👑", description: "혼란 속에서도 냉정하게 판단하고 팀을 이끄는 리더! 무인도의 촌장은 바로 당신이에요." },
      { type: "survivor", title: "야생 서바이버 🏕️", description: "먹을 것과 불 피우기는 내게 맡겨! 원시적 생존 본능이 강한 진정한 서바이벌리스트." },
      { type: "engineer", title: "만능 엔지니어 🔧", description: "있는 재료로 뭐든 만드는 능력자! 쉘터, 도구, 신호 장치까지 — 당신 없이는 탈출 불가!" },
      { type: "healer", title: "마음의 힐러 💚", description: "극한 상황에서도 사람을 먼저 생각하는 당신. 팀의 정신적 지주이자 따뜻한 심장이에요." }
    ]
  }

];


