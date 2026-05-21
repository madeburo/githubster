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
    description: "フォローバックしていない人、フォローしていない人を確認し、GitHubのつながりを管理しましょう。",
  },
  search: {
    placeholder: "GitHubユーザー名を入力",
    button: "確認",
    loading: "読み込み中...",
    tokenToggle: "トークンを追加（任意、レート制限を増加）",
    tokenHide: "トークンを非表示（任意、レート制限を増加）",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "フォロバなし",
    notFollowingBack: "未フォロー",
    following: "フォロー中",
    followers: "フォロワー",
  },
  stats: {
    followers: "フォロワー",
    following: "フォロー中",
    unfollowers: "フォロバなし",
    notFollowingBack: "未フォロー",
  },
  empty: {
    unfollowers: "フォローしている全員がフォロバしています！🎉",
    notFollowingBack: "全フォロワーをフォローしています！🤝",
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
    retry: "再試行",
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
    feature3Desc: "完全にブラウザで動作。データは保存・送信されません。",
  },
  footer: {
    openSource: "オープンソース",
    madeWith: "♥を込めて制作",
  },
};
