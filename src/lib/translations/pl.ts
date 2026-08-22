import type { Translations } from "./en";

export const pl: Translations = {
  meta: {
    title: "Githubster — sprawdź obserwujących i nieobserwujących na GitHubie",
    description: "Bezpłatne narzędzie open source do sprawdzania, kto nie obserwuje Cię z powrotem na GitHubie. Bez logowania.",
  },
  notFound: { title: "Nie znaleziono strony", description: "Strona, której szukasz, nie istnieje lub została przeniesiona.", button: "Wróć na stronę główną" },
  hero: {
    title: "Poznaj swoją sieć GitHub",
    description: "Sprawdzaj obserwujących, wspólne połączenia, brak wzajemnego obserwowania i publiczne informacje o profilu. Opcjonalny token pozostaje w tej karcie.",
  },
  search: {
    placeholder: "Wpisz nazwę użytkownika GitHub", button: "Sprawdź", loading: "Ładowanie...",
    tokenToggle: "Dodaj token (opcjonalnie, zwiększa limit)", tokenHide: "Ukryj token (opcjonalnie, zwiększa limit)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Pokaż token", tokenMask: "Ukryj token", tokenClear: "Wyczyść token",
    tokenPrivacy: "Używany tylko do bezpośrednich zapytań do API GitHub. Nie jest zapisywany ani wysyłany do Githubster.",
  },
  tabs: { unfollowers: "Nie obserwują Cię", notFollowingBack: "Nie obserwujesz", mutuals: "Wzajemni", following: "Obserwowani", followers: "Obserwujący" },
  stats: { followers: "Obserwujący", following: "Obserwowani", mutuals: "Wzajemni", unfollowers: "Nie obserwują Cię", notFollowingBack: "Nie obserwujesz" },
  empty: {
    unfollowers: "Wszyscy, których obserwujesz, obserwują Cię z powrotem! 🎉", notFollowingBack: "Obserwujesz wszystkich, którzy obserwują Ciebie! 🤝",
    mutuals: "Brak wzajemnych połączeń.", following: "Jeszcze nikogo nie obserwujesz.", followers: "Brak obserwujących.", initial: "Wpisz wyżej nazwę użytkownika, aby zobaczyć pełny obraz",
  },
  grid: { searchPlaceholder: "Szukaj wśród {count} użytkowników..." },
  rateLimit: { resets: "reset za {time}", now: "teraz" },
  error: {
    retry: "Spróbuj ponownie", userNotFound: "Nie znaleziono użytkownika", userNotFoundDesc: "Sprawdź nazwę użytkownika GitHub i spróbuj ponownie.",
    rateLimit: "Osiągnięto limit zapytań GitHub", rateLimitDesc: "Dodaj token lub spróbuj ponownie za kilka minut.",
    noPublicFollowers: "Nie znaleziono publicznych obserwujących", noPublicFollowersDesc: "Ten profil może mieć ograniczoną aktywność publiczną.",
  },
  seo: {
    title: "Czym jest Githubster?",
    description: "Githubster to bezpłatne narzędzie open source do sprawdzania obserwujących na GitHubie. Porównuj publiczne listy obserwujących i obserwowanych, aby zobaczyć brak wzajemności, wspólne połączenia i informacje o profilu — bez konta Githubster.",
    feature1Title: "Nie obserwują Cię", feature1Desc: "Zobacz, kogo obserwujesz, a kto nie obserwuje Cię z powrotem. Uporządkuj swoją listę obserwowanych.",
    feature2Title: "Obserwujący", feature2Desc: "Odkryj osoby, które obserwują Ciebie, a których jeszcze nie obserwujesz.",
    feature3Title: "W przeglądarce", feature3Desc: "Analiza profilu odbywa się w Twojej przeglądarce. Opcjonalne tokeny dostępu nigdy nie są zapisywane.",
  },
  support: { nav: "Wesprzyj", title: "Wesprzyj Githubster", description: "Githubster jest bezpłatny i otwartoźródłowy. Jeśli jest dla Ciebie przydatny, możesz wesprzeć jego rozwój.", kofi: "Wesprzyj na Ko-fi", paypal: "PayPal", star: "Daj gwiazdkę na GitHubie" },
  theme: { light: "Jasny", dark: "Ciemny" },
  profileOverview: { title: "Przegląd profilu", ownProjects: "Własne projekty", repositories: "repozytoriów", totalStars: "Łącznie gwiazdek", topLanguages: "Najpopularniejsze języki według gwiazdek", repositoriesUnavailable: "Dane repozytoriów niedostępne" },
  banner: { text: "Githubster jest w 100% darmowy i otwartoźródłowy. Jeśli Ci pomógł, gwiazdka na GitHubie utrzymuje go przy życiu.", cta: "Daj gwiazdkę na GitHubie" },
  footer: { openSource: "Open source na", madeWith: "Stworzone z ♥ w" },
  share: { button: "Udostępnij", copied: "Skopiowano!", tooltip: "Udostępnij link do profilu" },
  sort: { label: "Sortuj użytkowników", default: "Domyślnie", nameAsc: "Nazwa A→Z", nameDesc: "Nazwa Z→A" },
  loading: { title: "Ładowanie danych profilu...", followers: "Obserwujący", following: "Obserwowani" },
};
