import type { Translations } from "./en";

export const uk: Translations = {
  meta: {
    title: "Githubster — Відстежуйте підписників та відписки на GitHub",
    description: "Безкоштовний інструмент з відкритим кодом: дізнайтеся, хто не підписаний на вас у відповідь. Без реєстрації.",
  },
  notFound: {
    title: "Сторінку не знайдено",
    description: "Сторінка, яку ви шукаєте, не існує або була переміщена.",
    button: "На головну",
  },
  hero: {
    title: "Досліджуйте свою мережу на GitHub",
    description: "Дізнайтеся, хто не підписаний на вас у відповідь, на кого ви не підписані, та керуйте зв'язками на GitHub.",
  },
  search: {
    placeholder: "Введіть ім'я користувача GitHub",
    button: "Дослідити",
    loading: "Завантаження...",
    tokenToggle: "Додати токен (необов'язково, збільшує ліміт)",
    tokenHide: "Сховати токен (необов'язково, збільшує ліміт)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Показати токен",
    tokenMask: "Приховати токен",
    tokenClear: "Очистити токен",
    tokenPrivacy: "Використовується лише для прямих запитів до GitHub API. Не зберігається і не надсилається до Githubster.",
  },
  tabs: {
    unfollowers: "Не підписані у відповідь",
    notFollowingBack: "Ви не підписані",
    mutuals: "Взаємні",
    following: "Підписки",
    followers: "Підписники",
  },
  stats: {
    followers: "Підписники",
    following: "Підписки",
    mutuals: "Взаємні",
    unfollowers: "Не підписані у відповідь",
    notFollowingBack: "Ви не підписані",
  },
  empty: {
    unfollowers: "Усі, на кого ви підписані, підписані на вас! 🎉",
    notFollowingBack: "Ви підписані на всіх своїх підписників! 🤝",
    mutuals: "Поки немає взаємних підписок.",
    following: "Поки немає підписок.",
    followers: "Поки немає підписників.",
    initial: "Введіть ім'я користувача вище",
  },
  grid: {
    searchPlaceholder: "Пошук серед {count} користувачів...",
  },
  rateLimit: {
    resets: "скидання через {time}",
    now: "зараз",
  },
  error: {
    retry: "",
    userNotFound: "Користувача не знайдено",
    userNotFoundDesc: "Перевірте ім'я користувача GitHub і спробуйте знову.",
    rateLimit: "Ліміт запитів GitHub вичерпано",
    rateLimitDesc: "Додайте токен або спробуйте через кілька хвилин.",
    noPublicFollowers: "Публічних підписників не знайдено",
    noPublicFollowersDesc: "Цей профіль може мати обмежену публічну активність.",
  },
  seo: {
    title: "Що таке Githubster?",
    description:
      "Githubster — безкоштовний інструмент з відкритим кодом для перевірки підписників GitHub. Порівнюйте публічні списки підписників і підписок, щоб побачити, хто не підписаний у відповідь, взаємні зв’язки та дані профілю — без акаунта Githubster.",
    feature1Title: "Відписники",
    feature1Desc: "Дізнайтеся, хто з ваших підписок не підписаний на вас у відповідь.",
    feature2Title: "Підписники",
    feature2Desc: "Знайдіть людей, які підписані на вас, але ви на них — ні.",
    feature3Title: "Приватність",
    feature3Desc: "Аналіз профілю виконується у браузері. Необов’язковий токен доступу не зберігається.",
  },
  support: {
    nav: "Підтримати",
    title: "Підтримати Githubster",
    description: "Githubster безкоштовний і має відкритий код. Якщо він вам корисний, ви можете підтримати його розвиток.",
    kofi: "Підтримати на Ko-fi",
    paypal: "PayPal",
    star: "Поставити зірку на GitHub",
  },
  profileOverview: {
    title: "Огляд профілю",
    ownProjects: "Власні проєкти",
    repositories: "репозиторіїв",
    totalStars: "Всього зірок",
    topLanguages: "Мови за зірками",
    repositoriesUnavailable: "Дані репозиторіїв недоступні",
  },
  banner: {
    text: "Githubster — безкоштовний проєкт з відкритим кодом. Підтримайте зіркою на GitHub.",
    cta: "Зірка на GitHub",
  },
  footer: {
    openSource: "Відкритий код на",
    madeWith: "Зроблено з ♥ у",
  },
};
