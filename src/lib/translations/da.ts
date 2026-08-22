import type { Translations } from "./en";

export const da: Translations = {
  meta: {
    title: "Githubster — følg dine GitHub-følgere og ikke-følgere",
    description: "Gratis open source-værktøj til at se, hvem der ikke følger dig tilbage på GitHub. Intet login kræves.",
  },
  notFound: { title: "Siden blev ikke fundet", description: "Siden, du leder efter, findes ikke eller er blevet flyttet.", button: "Tilbage til forsiden" },
  hero: {
    title: "Udforsk dit GitHub-netværk",
    description: "Udforsk følgere, gensidige forbindelser, dem der ikke følger tilbage og offentlige profilindsigter. Ingen Githubster-konto kræves. Dit valgfrie token bliver i denne fane.",
  },
  search: {
    placeholder: "Indtast GitHub-brugernavn", button: "Udforsk", loading: "Indlæser...",
    tokenToggle: "Tilføj token (valgfrit, øger grænsen)", tokenHide: "Skjul token (valgfrit, øger grænsen)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Vis token", tokenMask: "Skjul token", tokenClear: "Ryd token",
    tokenPrivacy: "Bruges kun til direkte forespørgsler til GitHub API. Det gemmes ikke og sendes ikke til Githubster.",
  },
  tabs: { unfollowers: "Følger ikke tilbage", notFollowingBack: "Du følger ikke", mutuals: "Gensidige", following: "Følger", followers: "Følgere" },
  stats: { followers: "Følgere", following: "Følger", mutuals: "Gensidige", unfollowers: "Følger ikke tilbage", notFollowingBack: "Du følger ikke" },
  empty: {
    unfollowers: "Alle, du følger, følger dig tilbage! 🎉", notFollowingBack: "Du følger alle, der følger dig! 🤝",
    mutuals: "Ingen gensidige forbindelser endnu.", following: "Følger ikke nogen endnu.", followers: "Ingen følgere endnu.", initial: "Indtast et brugernavn ovenfor for at se hele billedet",
  },
  grid: { searchPlaceholder: "Søg blandt {count} brugere..." },
  rateLimit: { resets: "nulstilles om {time}", now: "nu" },
  error: {
    retry: "Prøv igen", userNotFound: "Bruger ikke fundet", userNotFoundDesc: "Kontrollér GitHub-brugernavnet, og prøv igen.",
    rateLimit: "GitHub-grænsen for forespørgsler er nået", rateLimitDesc: "Tilføj et token, eller prøv igen om nogle minutter.",
    noPublicFollowers: "Ingen offentlige følgere fundet", noPublicFollowersDesc: "Denne profil kan have begrænset offentlig aktivitet.",
  },
  seo: {
    title: "Hvad er Githubster?",
    description: "Githubster er en gratis open source GitHub-følgerkontrol. Sammenlign offentlige lister over følgere og fulgte for at finde dem, der ikke følger tilbage, gensidige forbindelser og profilindsigter — uden en Githubster-konto.",
    feature1Title: "Følger ikke tilbage", feature1Desc: "Se, hvem du følger, som ikke følger dig tilbage. Ryd op i din liste over fulgte.",
    feature2Title: "Følgere", feature2Desc: "Opdag personer, der følger dig, men som du ikke følger endnu.",
    feature3Title: "Browserbaseret", feature3Desc: "Profilanalysen kører i din browser. Valgfrie adgangstokens gemmes aldrig.",
  },
  support: { nav: "Støt", title: "Støt Githubster", description: "Githubster er gratis og open source. Hvis du finder det nyttigt, kan du støtte udviklingen.", kofi: "Støt på Ko-fi", paypal: "PayPal", star: "Giv en stjerne på GitHub" },
  profileOverview: { title: "Profiloversigt", ownProjects: "Egne projekter", repositories: "repos", totalStars: "Samlede stjerner", topLanguages: "Topprogrammeringssprog efter stjerner", repositoriesUnavailable: "Repositorydata er ikke tilgængelige" },
  banner: { text: "Githubster er 100 % gratis og open source. Hvis det hjalp dig, holder en GitHub-stjerne det i live.", cta: "Giv en stjerne på GitHub" },
  footer: { openSource: "Open source på", madeWith: "Lavet med ♥ i" },
  share: { button: "Del", copied: "Kopieret!", tooltip: "Del profillink" },
  sort: { label: "Sortér brugere", default: "Standard", nameAsc: "Navn A→Z", nameDesc: "Navn Z→A" },
  loading: { title: "Indlæser profildata...", followers: "Følgere", following: "Følger" },
};
