import type { Translations } from "./en";

export const no: Translations = {
  meta: {
    title: "Githubster — hold oversikt over GitHub-følgerne dine",
    description: "Et gratis verktøy med åpen kildekode som viser hvem som ikke følger deg tilbake på GitHub. Ingen innlogging kreves.",
  },
  notFound: { title: "Siden ble ikke funnet", description: "Siden du leter etter, finnes ikke eller har blitt flyttet.", button: "Tilbake til forsiden" },
  hero: {
    title: "Utforsk GitHub-nettverket ditt",
    description: "Utforsk følgere, gjensidige forbindelser, personer som ikke følger tilbake, og offentlig profilinformasjon. Det valgfrie tokenet ditt blir i denne fanen.",
  },
  search: {
    placeholder: "Skriv inn GitHub-brukernavn", button: "Utforsk", loading: "Laster inn...",
    tokenToggle: "Legg til token (valgfritt, øker grensen)", tokenHide: "Skjul token (valgfritt, øker grensen)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Vis token", tokenMask: "Skjul token", tokenClear: "Fjern token",
    tokenPrivacy: "Brukes bare til direkte kall til GitHub API. Det lagres ikke og sendes ikke til Githubster.",
  },
  tabs: { unfollowers: "Følger ikke tilbake", notFollowingBack: "Du følger ikke", mutuals: "Gjensidige", following: "Følger", followers: "Følgere" },
  stats: { followers: "Følgere", following: "Følger", mutuals: "Gjensidige", unfollowers: "Følger ikke tilbake", notFollowingBack: "Du følger ikke" },
  empty: {
    unfollowers: "Alle du følger, følger deg tilbake! 🎉", notFollowingBack: "Du følger alle som følger deg! 🤝",
    mutuals: "Ingen gjensidige forbindelser ennå.", following: "Følger ingen ennå.", followers: "Ingen følgere ennå.", initial: "Skriv inn et brukernavn ovenfor for å se hele bildet",
  },
  grid: { searchPlaceholder: "Søk blant {count} brukere..." },
  rateLimit: { resets: "tilbakestilles om {time}", now: "nå" },
  error: {
    retry: "Prøv igjen", userNotFound: "Brukeren ble ikke funnet", userNotFoundDesc: "Kontroller GitHub-brukernavnet og prøv igjen.",
    rateLimit: "GitHubs grense for forespørsler er nådd", rateLimitDesc: "Legg til et token eller prøv igjen om noen minutter.",
    noPublicFollowers: "Fant ingen offentlige følgere", noPublicFollowersDesc: "Denne profilen kan ha begrenset offentlig aktivitet.",
  },
  seo: {
    title: "Hva er Githubster?",
    description: "Githubster er en gratis GitHub-følgerkontroll med åpen kildekode. Sammenlign offentlige lister over følgere og fulgte kontoer for å finne dem som ikke følger tilbake, gjensidige forbindelser og profilinformasjon — uten en Githubster-konto.",
    feature1Title: "Følger ikke tilbake", feature1Desc: "Se hvem du følger som ikke følger deg tilbake. Rydd opp i listen over kontoer du følger.",
    feature2Title: "Følgere", feature2Desc: "Oppdag personer som følger deg, men som du ikke følger tilbake ennå.",
    feature3Title: "Nettleserbasert", feature3Desc: "Profilanalysen kjører i nettleseren din. Valgfrie tilgangstokener lagres aldri.",
  },
  support: { nav: "Støtt", title: "Støtt Githubster", description: "Githubster er gratis og har åpen kildekode. Hvis du har nytte av det, kan du støtte utviklingen.", kofi: "Støtt på Ko-fi", paypal: "PayPal", star: "Gi en stjerne på GitHub" },
  theme: { light: "Lys", dark: "Mørk" },
  profileOverview: { title: "Profiloversikt", ownProjects: "Egne prosjekter", repositories: "repositories", totalStars: "Totalt antall stjerner", topLanguages: "Mest brukte språk etter stjerner", repositoriesUnavailable: "Repositorydata er ikke tilgjengelige" },
  banner: { text: "Githubster er helt gratis og har åpen kildekode. Hvis det hjalp deg, holder en GitHub-stjerne prosjektet i live.", cta: "Gi en stjerne på GitHub" },
  footer: { openSource: "Åpen kildekode på", madeWith: "Laget med ♥ i" },
  share: { button: "Del", copied: "Kopiert!", tooltip: "Del profillenke" },
  sort: { label: "Sorter brukere", default: "Standard", nameAsc: "Navn A→Å", nameDesc: "Navn Å→A" },
  loading: { title: "Laster inn profildata...", followers: "Følgere", following: "Følger" },
};
