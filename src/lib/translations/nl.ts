import type { Translations } from "./en";

export const nl: Translations = {
  meta: {
    title: "Githubster — volg je GitHub-volgers en niet-volgers",
    description: "Gratis open-source hulpmiddel om te zien wie je niet terugvolgt op GitHub. Geen account nodig.",
  },
  notFound: { title: "Pagina niet gevonden", description: "De pagina die je zoekt bestaat niet of is verplaatst.", button: "Terug naar de startpagina" },
  hero: {
    title: "Verken je GitHub-netwerk",
    description: "Bekijk volgers, wederzijdse connecties, accounts die je niet terugvolgen en openbare profielinzichten. Geen Githubster-account nodig. Je optionele token blijft in dit tabblad.",
  },
  search: {
    placeholder: "Voer GitHub-gebruikersnaam in", button: "Verkennen", loading: "Laden...",
    tokenToggle: "Token toevoegen (optioneel, verhoogt de limiet)", tokenHide: "Token verbergen (optioneel, verhoogt de limiet)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Token tonen", tokenMask: "Token verbergen", tokenClear: "Token wissen",
    tokenPrivacy: "Alleen gebruikt voor rechtstreekse GitHub API-verzoeken. Het wordt niet opgeslagen of naar Githubster verzonden.",
  },
  tabs: { unfollowers: "Volgen niet terug", notFollowingBack: "Jij volgt niet", mutuals: "Wederzijds", following: "Volgend", followers: "Volgers" },
  stats: { followers: "Volgers", following: "Volgend", mutuals: "Wederzijds", unfollowers: "Volgen niet terug", notFollowingBack: "Jij volgt niet" },
  empty: {
    unfollowers: "Iedereen die je volgt, volgt je terug! 🎉", notFollowingBack: "Je volgt iedereen die jou volgt! 🤝",
    mutuals: "Nog geen wederzijdse connecties.", following: "Je volgt nog niemand.", followers: "Nog geen volgers.", initial: "Voer hierboven een gebruikersnaam in voor het volledige beeld",
  },
  grid: { searchPlaceholder: "Zoek in {count} gebruikers..." },
  rateLimit: { resets: "reset over {time}", now: "nu" },
  error: {
    retry: "Opnieuw proberen", userNotFound: "Gebruiker niet gevonden", userNotFoundDesc: "Controleer de GitHub-gebruikersnaam en probeer opnieuw.",
    rateLimit: "GitHub-verzoeklimiet bereikt", rateLimitDesc: "Voeg een token toe of probeer het over een paar minuten opnieuw.",
    noPublicFollowers: "Geen openbare volgers gevonden", noPublicFollowersDesc: "Dit profiel heeft mogelijk beperkte openbare activiteit.",
  },
  seo: {
    title: "Wat is Githubster?",
    description: "Githubster is een gratis open-source GitHub-volgerchecker. Vergelijk openbare lijsten met volgers en gevolgden om te zien wie je niet terugvolgt, je wederzijdse connecties en profielinzichten — zonder Githubster-account.",
    feature1Title: "Volgen niet terug", feature1Desc: "Zie wie je volgt maar jou niet terugvolgt. Ruim je lijst met gevolgden op.",
    feature2Title: "Volgers", feature2Desc: "Ontdek mensen die jou volgen maar die je nog niet terugvolgt.",
    feature3Title: "In de browser", feature3Desc: "Profielanalyse gebeurt in je browser. Optionele toegangstokens worden nooit opgeslagen.",
  },
  support: { nav: "Steunen", title: "Steun Githubster", description: "Githubster is gratis en open source. Als je het nuttig vindt, kun je de ontwikkeling steunen.", kofi: "Steun op Ko-fi", paypal: "PayPal", star: "Geef een ster op GitHub" },
  theme: { light: "Licht", dark: "Donker" },
  profileOverview: { title: "Profieloverzicht", ownProjects: "Eigen projecten", repositories: "repositories", totalStars: "Totaal aantal sterren", topLanguages: "Toptalen op basis van sterren", repositoriesUnavailable: "Repositorygegevens niet beschikbaar" },
  banner: { text: "Githubster is 100% gratis en open source. Als het je heeft geholpen, houdt een GitHub-ster het in leven.", cta: "Geef een ster op GitHub" },
  footer: { openSource: "Open source op", madeWith: "Gemaakt met ♥ in" },
  share: { button: "Delen", copied: "Gekopieerd!", tooltip: "Profiellink delen" },
  sort: { label: "Gebruikers sorteren", default: "Standaard", nameAsc: "Naam A→Z", nameDesc: "Naam Z→A" },
  loading: { title: "Profielgegevens laden...", followers: "Volgers", following: "Volgend" },
};
