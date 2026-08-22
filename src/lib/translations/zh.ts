import type { Translations } from "./en";

export const zh: Translations = {
  meta: {
    title: "Githubster — 追踪你的 GitHub 关注者和取关者",
    description: "免费开源工具：查看谁没有回关你，发现粉丝，管理你的关注列表。无需登录。",
  },
  notFound: {
    title: "页面未找到",
    description: "您访问的页面不存在或已被移动。",
    button: "返回首页",
  },
  hero: {
    title: "探索你的 GitHub 网络",
    description: "查看谁没有回关你、你没有关注谁，管理你的 GitHub 社交关系。",
  },
  search: {
    placeholder: "输入 GitHub 用户名",
    button: "探索",
    loading: "加载中...",
    tokenToggle: "添加令牌（可选，提高请求限制）",
    tokenHide: "隐藏令牌（可选，提高请求限制）",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "显示令牌",
    tokenMask: "隐藏令牌",
    tokenClear: "清除令牌",
    tokenPrivacy: "仅用于直接请求 GitHub API。不会保存或发送到 Githubster。",
  },
  tabs: {
    unfollowers: "未回关",
    notFollowingBack: "你未关注",
    mutuals: "互关",
    following: "关注中",
    followers: "粉丝",
  },
  stats: {
    followers: "粉丝",
    following: "关注中",
    mutuals: "互关",
    unfollowers: "未回关",
    notFollowingBack: "你未关注",
  },
  empty: {
    unfollowers: "你关注的所有人都回关了你！🎉",
    notFollowingBack: "你已关注所有粉丝！🤝",
    mutuals: "暂无互关。",
    following: "暂无关注。",
    followers: "暂无粉丝。",
    initial: "输入用户名开始查询",
  },
  grid: {
    searchPlaceholder: "搜索 {count} 位用户...",
  },
  rateLimit: {
    resets: "{time} 后重置",
    now: "现在",
  },
  error: {
    retry: "",
    userNotFound: "用户未找到",
    userNotFoundDesc: "请检查 GitHub 用户名后重试。",
    rateLimit: "GitHub 请求限制已达到",
    rateLimitDesc: "添加令牌或几分钟后重试。",
    noPublicFollowers: "未找到公开关注者",
    noPublicFollowersDesc: "该用户的公开活动可能有限。",
  },
  seo: {
    title: "什么是 Githubster？",
    description:
      "Githubster 是免费开源的 GitHub 关注关系工具。比较公开粉丝和关注列表，查看未回关、互相关注和个人资料概览，无需 Githubster 账户。",
    feature1Title: "未回关",
    feature1Desc: "查看你关注的人中谁没有回关你。",
    feature2Title: "粉丝",
    feature2Desc: "发现关注你但你还没关注的人。",
    feature3Title: "隐私安全",
    feature3Desc: "个人资料分析在浏览器中进行。可选访问令牌不会被存储。",
  },
  support: {
    nav: "支持",
    title: "支持 Githubster",
    description: "Githubster 免费且开源。若它对你有帮助，你可以支持项目的发展。",
    kofi: "在 Ko-fi 上支持",
    paypal: "PayPal",
    star: "在 GitHub 上点星",
  },
  theme: { light: "浅色", dark: "深色" },
  profileOverview: {
    title: "个人概览",
    ownProjects: "个人项目",
    repositories: "个仓库",
    totalStars: "总星标数",
    topLanguages: "按星标排列的语言",
    repositoriesUnavailable: "仓库数据不可用",
  },
  banner: {
    text: "Githubster 是免费开源项目。在 GitHub 上给个星标支持一下。",
    cta: "去 GitHub 点星",
  },
  footer: {
    openSource: "开源于",
    madeWith: "用 ♥ 制作于",
  },
};
