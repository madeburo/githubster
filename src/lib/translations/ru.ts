import type { Translations } from "./en";

export const ru: Translations = {
  meta: {
    title: "Githubster — Отслеживайте подписчиков и отписки на GitHub",
    description: "Бесплатный инструмент с открытым кодом: узнайте, кто не подписан на вас в ответ, найдите фанатов и управляйте подписками. Без регистрации.",
  },
  notFound: {
    title: "Страница не найдена",
    description: "Страница, которую вы ищете, не существует или была перемещена.",
    button: "На главную",
  },
  hero: {
    description:
      "Узнайте, кто не подписан на вас в ответ, на кого вы не подписаны.",
  },
  search: {
    placeholder: "Введите имя пользователя GitHub",
    button: "Проверить",
    loading: "Загрузка...",
    tokenToggle: "Добавить токен (увеличивает лимит)",
    tokenHide: "Скрыть токен (увеличивает лимит)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Не подписаны в ответ",
    notFollowingBack: "Вы не подписаны",
    following: "Подписки",
    followers: "Подписчики",
  },
  stats: {
    followers: "Подписчики",
    following: "Подписки",
    unfollowers: "Не подписаны в ответ",
    notFollowingBack: "Вы не подписаны",
  },
  empty: {
    unfollowers: "Все, на кого вы подписаны, подписаны на вас!",
    notFollowingBack: "Вы подписаны на всех, кто подписан на вас!",
    following: "Пока нет подписок.",
    followers: "Пока нет подписчиков.",
    initial: "Введите имя пользователя выше",
  },
  grid: {
    searchPlaceholder: "Поиск среди {count} пользователей...",
  },
  rateLimit: {
    resets: "сброс через {time}",
    now: "сейчас",
  },
  error: {
    retry: "Повторить",
  },
  seo: {
    title: "Что такое Githubster",
    description:
      "Githubster — бесплатный инструмент с открытым исходным кодом для анализа ваших связей на GitHub. Узнайте, кто не подписан на вас в ответ, найдите подписчиков, на которых вы ещё не подписались",
    feature1Title: "Отписавшиеся",
    feature1Desc: "Узнайте, кто из ваших подписок не подписан на вас в ответ.",
    feature2Title: "Подписчики",
    feature2Desc: "Найдите людей, которые подписаны на вас, но вы на них — нет.",
    feature3Title: "Приватность",
    feature3Desc: "Работает полностью в браузере. Данные никуда не отправляются.",
  },
  footer: {
    openSource: "Open Source проект",
    madeWith: "Сделано в",
  },
};
