import type { Translations } from "./en";

export const zh: Translations = {
  meta: {
    title: "Githubster — 追踪你的 GitHub 关注者和取关者",
    description: "免费开源工具：查看谁没有回关你，发现粉丝，管理你的关注列表。无需登录。",
  },
  hero: {
    description: "查看谁没有回关你、你没有关注谁，管理你的 GitHub 社交关系。",
  },
  search: {
    placeholder: "输入 GitHub 用户名",
    button: "查询",
    loading: "加载中...",
    tokenToggle: "添加令牌（可选，提高请求限制）",
    tokenHide: "隐藏令牌（可选，提高请求限制）",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "未回关",
    notFollowingBack: "你未关注",
    following: "关注中",
    followers: "粉丝",
  },
  stats: {
    followers: "粉丝",
    following: "关注中",
    unfollowers: "未回关",
    notFollowingBack: "你未关注",
  },
  empty: {
    unfollowers: "你关注的所有人都回关了你！🎉",
    notFollowingBack: "你已关注所有粉丝！🤝",
    following: "暂无关注。",
    followers: "暂无粉丝。",
    initial: "输入用户名开始查询",
  },
  grid: {
    searchPlaceholder: "搜索 {count} 位用户...",
  },
  seo: {
    title: "什么是 Githubster？",
    description:
      "Githubster 是一个免费开源工具，帮助你了解 GitHub 社交关系。即时查看谁没有回关你、发现你还没关注的粉丝——无需登录，不收集任何数据。",
    feature1Title: "未回关",
    feature1Desc: "查看你关注的人中谁没有回关你。",
    feature2Title: "粉丝",
    feature2Desc: "发现关注你但你还没关注的人。",
    feature3Title: "隐私安全",
    feature3Desc: "完全在浏览器中运行，不存储或发送任何数据。",
  },
  footer: {
    openSource: "开源于",
    madeWith: "用 ♥ 制作于",
  },
};
