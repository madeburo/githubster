import type { Translations } from "./en";

export const ja: Translations = {
  meta: {
    title: "Githubster — GitHubのフォロワーとアンフォロワーを追跡",
    description: "無料のオープンソースツール：GitHubでフォローバックしていない人を確認。ログイン不要。",
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動されました。",
    button: "ホームに戻る",
  },
  hero: {
    title: "GitHubネットワークを探索",
    description: "フォローバックしていない人、フォローしていない人を確認し、GitHubのつながりを管理しましょう。",
  },
  search: {
    placeholder: "GitHubユーザー名を入力",
    button: "探索",
    loading: "読み込み中...",
    tokenToggle: "トークンを追加（任意、レート制限を増加）",
    tokenHide: "トークンを非表示（任意、レート制限を増加）",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "トークンを表示",
    tokenMask: "トークンを隠す",
    tokenClear: "トークンを消去",
    tokenPrivacy: "GitHub API への直接リクエストにのみ使用されます。保存も Githubster への送信もされません。",
  },
  tabs: {
    unfollowers: "フォロバなし",
    notFollowingBack: "未フォロー",
    mutuals: "相互フォロー",
    following: "フォロー中",
    followers: "フォロワー",
  },
  stats: {
    followers: "フォロワー",
    following: "フォロー中",
    mutuals: "相互フォロー",
    unfollowers: "フォロバなし",
    notFollowingBack: "未フォロー",
  },
  empty: {
    unfollowers: "フォローしている全員がフォロバしています！🎉",
    notFollowingBack: "全フォロワーをフォローしています！🤝",
    mutuals: "まだ相互フォローがいません。",
    following: "まだ誰もフォローしていません。",
    followers: "まだフォロワーがいません。",
    initial: "上にユーザー名を入力してください",
  },
  grid: {
    searchPlaceholder: "{count}人を検索...",
  },
  rateLimit: {
    resets: "{time}後にリセット",
    now: "今すぐ",
  },
  error: {
    retry: "",
    userNotFound: "ユーザーが見つかりません",
    userNotFoundDesc: "GitHubユーザー名を確認して再試行してください。",
    rateLimit: "GitHubレート制限に達しました",
    rateLimitDesc: "トークンを追加するか、数分後に再試行してください。",
    noPublicFollowers: "公開フォロワーが見つかりません",
    noPublicFollowersDesc: "このプロフィールは公開活動が限られている可能性があります。",
  },
  seo: {
    title: "Githubsterとは？",
    description:
      "Githubsterは、GitHubのソーシャルグラフを理解するための無料オープンソースツールです。ログイン不要、データ収集なし。",
    feature1Title: "アンフォロワー",
    feature1Desc: "フォローしているのにフォロバされていない人を確認。",
    feature2Title: "フォロワー",
    feature2Desc: "フォローされているのにフォローしていない人を発見。",
    feature3Title: "プライベート＆安全",
    feature3Desc: "プロフィール分析はブラウザ内で行われます。任意のアクセストークンは保存されません。",
  },
  profileOverview: {
    title: "プロフィール概要",
    ownProjects: "自分のプロジェクト",
    repositories: "リポジトリ",
    totalStars: "合計スター",
    topLanguages: "スター数別の言語",
    repositoriesUnavailable: "リポジトリデータを取得できません",
  },
  banner: {
    text: "Githubsterは無料のオープンソースです。GitHubでスターを付けて応援してください。",
    cta: "GitHubでスター",
  },
  footer: {
    openSource: "オープンソース",
    madeWith: "♥を込めて制作",
  },
};
