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
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
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
      "Githubster — безкоштовний інструмент з відкритим кодом для аналізу ваших зв'язків на GitHub. Без авторизації, без збору даних.",
    feature1Title: "Відписники",
    feature1Desc: "Дізнайтеся, хто з ваших підписок не підписаний на вас у відповідь.",
    feature2Title: "Підписники",
    feature2Desc: "Знайдіть людей, які підписані на вас, але ви на них — ні.",
    feature3Title: "Приватність",
    feature3Desc: "Аналіз профілю виконується у браузері. Необов’язковий токен доступу не зберігається.",
  },
  profileOverview: {
    title: "Огляд профілю",
    ownProjects: "Власні проєкти",
    repositories: "репозиторіїв",
    totalStars: "Всього зірок",
    topLanguages: "Мови за зірками",
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
