import type { Translations } from "./en";

export const sv: Translations = {
  meta: {
    title: "Githubster — håll koll på dina GitHub-följare",
    description: "Ett kostnadsfritt open source-verktyg för att se vem som inte följer dig tillbaka på GitHub. Ingen inloggning krävs.",
  },
  notFound: { title: "Sidan hittades inte", description: "Sidan du söker finns inte eller har flyttats.", button: "Tillbaka till startsidan" },
  hero: {
    title: "Utforska ditt GitHub-nätverk",
    description: "Utforska följare, ömsesidiga kontakter, personer som inte följer tillbaka och offentlig profilinformation. Inget Githubster-konto krävs. Din valfria token stannar på den här fliken.",
  },
  search: {
    placeholder: "Ange GitHub-användarnamn", button: "Utforska", loading: "Läser in...",
    tokenToggle: "Lägg till token (valfritt, höjer gränsen)", tokenHide: "Dölj token (valfritt, höjer gränsen)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Visa token", tokenMask: "Dölj token", tokenClear: "Rensa token",
    tokenPrivacy: "Används endast för direkta anrop till GitHub API. Den sparas inte och skickas inte till Githubster.",
  },
  tabs: { unfollowers: "Följer inte tillbaka", notFollowingBack: "Du följer inte", mutuals: "Ömsesidiga", following: "Följer", followers: "Följare" },
  stats: { followers: "Följare", following: "Följer", mutuals: "Ömsesidiga", unfollowers: "Följer inte tillbaka", notFollowingBack: "Du följer inte" },
  empty: {
    unfollowers: "Alla du följer följer dig tillbaka! 🎉", notFollowingBack: "Du följer alla som följer dig! 🤝",
    mutuals: "Inga ömsesidiga kontakter ännu.", following: "Följer ingen ännu.", followers: "Inga följare ännu.", initial: "Ange ett användarnamn ovan för att se hela bilden",
  },
  grid: { searchPlaceholder: "Sök bland {count} användare..." },
  rateLimit: { resets: "återställs om {time}", now: "nu" },
  error: {
    retry: "Försök igen", userNotFound: "Användaren hittades inte", userNotFoundDesc: "Kontrollera GitHub-användarnamnet och försök igen.",
    rateLimit: "GitHubs anropsgräns har nåtts", rateLimitDesc: "Lägg till en token eller försök igen om några minuter.",
    noPublicFollowers: "Inga offentliga följare hittades", noPublicFollowersDesc: "Profilen kan ha begränsad offentlig aktivitet.",
  },
  seo: {
    title: "Vad är Githubster?",
    description: "Githubster är en kostnadsfri GitHub-följarkontroll med öppen källkod. Jämför offentliga listor över följare och följda konton för att hitta dem som inte följer tillbaka, ömsesidiga kontakter och profilinformation — utan ett Githubster-konto.",
    feature1Title: "Följer inte tillbaka", feature1Desc: "Se vem du följer som inte följer dig tillbaka. Rensa din lista över följda konton.",
    feature2Title: "Följare", feature2Desc: "Upptäck personer som följer dig men som du ännu inte följer tillbaka.",
    feature3Title: "Webbläsarbaserat", feature3Desc: "Profilanalysen körs i din webbläsare. Valfria åtkomsttoken sparas aldrig.",
  },
  support: { nav: "Stöd", title: "Stöd Githubster", description: "Githubster är kostnadsfritt och har öppen källkod. Om du har nytta av det kan du stödja utvecklingen.", kofi: "Stöd på Ko-fi", paypal: "PayPal", star: "Stjärnmärk på GitHub" },
  theme: { light: "Ljust", dark: "Mörkt" },
  profileOverview: { title: "Profilöversikt", ownProjects: "Egna projekt", repositories: "repositories", totalStars: "Totalt antal stjärnor", topLanguages: "Populäraste språk efter stjärnor", repositoriesUnavailable: "Repositorydata är inte tillgängliga" },
  banner: { text: "Githubster är helt kostnadsfritt och har öppen källkod. Om det hjälpte dig håller en GitHub-stjärna projektet vid liv.", cta: "Stjärnmärk på GitHub" },
  footer: { openSource: "Öppen källkod på", madeWith: "Skapad med ♥ i" },
  share: { button: "Dela", copied: "Kopierad!", tooltip: "Dela profillänk" },
  sort: { label: "Sortera användare", default: "Standard", nameAsc: "Namn A→Ö", nameDesc: "Namn Ö→A" },
  loading: { title: "Läser in profildata...", followers: "Följare", following: "Följer" },
};
