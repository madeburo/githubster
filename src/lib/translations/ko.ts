import type { Translations } from "./en";

export const ko: Translations = {
  meta: {
    title: "Githubster — GitHub 팔로워 및 언팔로워 추적",
    description: "무료 오픈소스 도구: 맞팔하지 않는 사람을 확인하고 팬을 발견하세요. 로그인 불필요.",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    description: "찾고 있는 페이지가 존재하지 않거나 이동되었습니다.",
    button: "홈으로 돌아가기",
  },
  hero: {
    title: "GitHub 네트워크 탐색",
    description: "누가 맞팔하지 않는지, 누구를 팔로우하지 않는지 확인하고 GitHub 관계를 관리하세요.",
  },
  search: {
    placeholder: "GitHub 사용자명 입력",
    button: "탐색",
    loading: "로딩 중...",
    tokenToggle: "토큰 추가 (선택사항, 요청 제한 증가)",
    tokenHide: "토큰 숨기기 (선택사항, 요청 제한 증가)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "토큰 표시",
    tokenMask: "토큰 숨기기",
    tokenClear: "토큰 지우기",
    tokenPrivacy: "GitHub API에 직접 요청할 때만 사용됩니다. 저장되거나 Githubster로 전송되지 않습니다.",
  },
  tabs: {
    unfollowers: "맞팔 안 함",
    notFollowingBack: "내가 안 팔로우",
    mutuals: "맞팔",
    following: "팔로잉",
    followers: "팔로워",
  },
  stats: {
    followers: "팔로워",
    following: "팔로잉",
    mutuals: "맞팔",
    unfollowers: "맞팔 안 함",
    notFollowingBack: "내가 안 팔로우",
  },
  empty: {
    unfollowers: "팔로우하는 모든 사람이 맞팔하고 있어요! 🎉",
    notFollowingBack: "모든 팔로워를 팔로우하고 있어요! 🤝",
    mutuals: "아직 맞팔이 없습니다.",
    following: "아직 팔로잉이 없습니다.",
    followers: "아직 팔로워가 없습니다.",
    initial: "위에 사용자명을 입력하세요",
  },
  grid: {
    searchPlaceholder: "{count}명 검색...",
  },
  rateLimit: {
    resets: "{time} 후 초기화",
    now: "지금",
  },
  error: {
    retry: "",
    userNotFound: "사용자를 찾을 수 없습니다",
    userNotFoundDesc: "GitHub 사용자 이름을 확인하고 다시 시도하세요.",
    rateLimit: "GitHub 요청 한도 도달",
    rateLimitDesc: "토큰을 추가하거나 몇 분 후에 다시 시도하세요.",
    noPublicFollowers: "공개 팔로워를 찾을 수 없습니다",
    noPublicFollowersDesc: "이 프로필은 공개 활동이 제한적일 수 있습니다.",
  },
  seo: {
    title: "Githubster란?",
    description:
      "Githubster는 무료 오픈소스 GitHub 팔로워 확인 도구입니다. 공개 팔로워와 팔로잉 목록을 비교해 맞팔하지 않는 계정, 맞팔, 프로필 정보를 확인하세요. Githubster 계정은 필요 없습니다.",
    feature1Title: "언팔로워",
    feature1Desc: "내가 팔로우하지만 맞팔하지 않는 사람을 확인하세요.",
    feature2Title: "팔로워",
    feature2Desc: "나를 팔로우하지만 내가 팔로우하지 않는 사람을 발견하세요.",
    feature3Title: "프라이버시",
    feature3Desc: "프로필 분석은 브라우저에서 실행됩니다. 선택적 액세스 토큰은 저장되지 않습니다.",
  },
  support: {
    nav: "후원",
    title: "Githubster 후원",
    description: "Githubster는 무료 오픈 소스입니다. 도움이 되었다면 개발을 후원해 주세요.",
    kofi: "Ko-fi에서 후원",
    paypal: "PayPal",
    star: "GitHub에서 스타 주기",
  },
  theme: { light: "라이트", dark: "다크" },
  profileOverview: {
    title: "프로필 개요",
    ownProjects: "내 프로젝트",
    repositories: "개 저장소",
    totalStars: "총 스타",
    topLanguages: "스타 기준 상위 언어",
    repositoriesUnavailable: "저장소 데이터를 사용할 수 없습니다",
  },
  banner: {
    text: "Githubster는 무료 오픈소스입니다. GitHub 스타로 프로젝트를 응원해주세요.",
    cta: "GitHub에서 스타",
  },
  footer: {
    openSource: "오픈소스",
    madeWith: "♥를 담아 제작",
  },
};
