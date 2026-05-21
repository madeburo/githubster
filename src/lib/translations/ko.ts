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
    description: "누가 맞팔하지 않는지, 누구를 팔로우하지 않는지 확인하고 GitHub 관계를 관리하세요.",
  },
  search: {
    placeholder: "GitHub 사용자명 입력",
    button: "확인",
    loading: "로딩 중...",
    tokenToggle: "토큰 추가 (선택사항, 요청 제한 증가)",
    tokenHide: "토큰 숨기기 (선택사항, 요청 제한 증가)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "맞팔 안 함",
    notFollowingBack: "내가 안 팔로우",
    following: "팔로잉",
    followers: "팔로워",
  },
  stats: {
    followers: "팔로워",
    following: "팔로잉",
    unfollowers: "맞팔 안 함",
    notFollowingBack: "내가 안 팔로우",
  },
  empty: {
    unfollowers: "팔로우하는 모든 사람이 맞팔하고 있어요! 🎉",
    notFollowingBack: "모든 팔로워를 팔로우하고 있어요! 🤝",
    following: "아직 팔로잉이 없습니다.",
    followers: "아직 팔로워가 없습니다.",
    initial: "위에 사용자명을 입력하세요",
  },
  grid: {
    searchPlaceholder: "{count}명 검색...",
  },
  seo: {
    title: "Githubster란?",
    description:
      "Githubster는 GitHub 소셜 관계를 파악하는 무료 오픈소스 도구입니다. 로그인 없이 맞팔 여부를 확인하세요.",
    feature1Title: "언팔로워",
    feature1Desc: "내가 팔로우하지만 맞팔하지 않는 사람을 확인하세요.",
    feature2Title: "팔로워",
    feature2Desc: "나를 팔로우하지만 내가 팔로우하지 않는 사람을 발견하세요.",
    feature3Title: "프라이버시",
    feature3Desc: "브라우저에서만 실행됩니다. 데이터가 저장되거나 전송되지 않습니다.",
  },
  footer: {
    openSource: "오픈소스",
    madeWith: "♥를 담아 제작",
  },
};
