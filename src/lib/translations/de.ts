import type { Translations } from "./en";

export const de: Translations = {
  meta: {
    title: "Githubster — Verfolge deine GitHub-Follower und Unfollower",
    description: "Kostenloses Open-Source-Tool: Sieh, wer dir nicht zurückfolgt, entdecke Fans und verwalte deine Verbindungen. Ohne Anmeldung.",
  },
  notFound: {
    title: "Seite nicht gefunden",
    description: "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
    button: "Zurück zur Startseite",
  },
  hero: {
    title: "Erkunde dein GitHub-Netzwerk",
    description: "Finde heraus, wer dir nicht zurückfolgt, wem du nicht folgst, und verwalte deine GitHub-Verbindungen.",
  },
  search: {
    placeholder: "GitHub-Benutzername eingeben",
    button: "Erkunden",
    loading: "Laden...",
    tokenToggle: "Token hinzufügen (optional, erhöht das Limit)",
    tokenHide: "Token ausblenden (optional, erhöht das Limit)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Token anzeigen",
    tokenMask: "Token verbergen",
    tokenClear: "Token löschen",
    tokenPrivacy: "Wird nur für direkte Anfragen an die GitHub API verwendet. Es wird weder gespeichert noch an Githubster gesendet.",
  },
  tabs: {
    unfollowers: "Folgen nicht zurück",
    notFollowingBack: "Du folgst nicht",
    mutuals: "Gegenseitig",
    following: "Folge ich",
    followers: "Follower",
  },
  stats: {
    followers: "Follower",
    following: "Folge ich",
    mutuals: "Gegenseitig",
    unfollowers: "Folgen nicht zurück",
    notFollowingBack: "Du folgst nicht",
  },
  empty: {
    unfollowers: "Alle, denen du folgst, folgen dir zurück! 🎉",
    notFollowingBack: "Du folgst allen deinen Followern! 🤝",
    mutuals: "Noch keine gegenseitigen Verbindungen.",
    following: "Noch niemandem gefolgt.",
    followers: "Noch keine Follower.",
    initial: "Gib oben einen Benutzernamen ein",
  },
  grid: {
    searchPlaceholder: "{count} Benutzer durchsuchen...",
  },
  rateLimit: {
    resets: "Reset in {time}",
    now: "jetzt",
  },
  error: {
    retry: "",
    userNotFound: "Benutzer nicht gefunden",
    userNotFoundDesc: "Überprüfe den GitHub-Benutzernamen und versuche es erneut.",
    rateLimit: "GitHub-Ratenlimit erreicht",
    rateLimitDesc: "Füge einen Token hinzu oder versuche es in ein paar Minuten erneut.",
    noPublicFollowers: "Keine öffentlichen Follower gefunden",
    noPublicFollowersDesc: "Dieses Profil hat möglicherweise eingeschränkte öffentliche Aktivität.",
  },
  seo: {
    title: "Was ist Githubster?",
    description:
      "Githubster ist ein kostenloser Open-Source-Checker für GitHub-Follower. Vergleiche öffentliche Follower- und Following-Listen, um fehlende Rückfollows, gegenseitige Verbindungen und Profilinfos zu sehen — ohne Githubster-Konto.",
    feature1Title: "Unfollower",
    feature1Desc: "Sieh, wem du folgst, der dir nicht zurückfolgt.",
    feature2Title: "Follower",
    feature2Desc: "Entdecke Leute, die dir folgen, denen du aber nicht folgst.",
    feature3Title: "Privat & Sicher",
    feature3Desc: "Die Profilanalyse läuft im Browser. Optionale Zugriffstokens werden nicht gespeichert.",
  },
  support: {
    nav: "Unterstützen",
    title: "Githubster unterstützen",
    description: "Githubster ist kostenlos und Open Source. Wenn es dir nützt, kannst du seine Entwicklung unterstützen.",
    kofi: "Auf Ko-fi unterstützen",
    paypal: "PayPal",
    star: "Auf GitHub mit Stern markieren",
  },
  theme: { light: "Hell", dark: "Dunkel" },
  profileOverview: {
    title: "Profilübersicht",
    ownProjects: "Eigene Projekte",
    repositories: "Repositories",
    totalStars: "Sterne gesamt",
    topLanguages: "Sprachen nach Sternen",
    repositoriesUnavailable: "Repository-Daten nicht verfügbar",
  },
  banner: {
    text: "Githubster ist kostenlos und Open Source. Unterstütze das Projekt mit einem Stern auf GitHub.",
    cta: "Stern auf GitHub",
  },
  footer: {
    openSource: "Open Source auf",
    madeWith: "Mit ♥ gemacht in",
  },
};
