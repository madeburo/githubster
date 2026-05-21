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
    description: "Finde heraus, wer dir nicht zurückfolgt, wem du nicht folgst, und verwalte deine GitHub-Verbindungen.",
  },
  search: {
    placeholder: "GitHub-Benutzername eingeben",
    button: "Prüfen",
    loading: "Laden...",
    tokenToggle: "Token hinzufügen (optional, erhöht das Limit)",
    tokenHide: "Token ausblenden (optional, erhöht das Limit)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Folgen nicht zurück",
    notFollowingBack: "Du folgst nicht",
    following: "Folge ich",
    followers: "Follower",
  },
  stats: {
    followers: "Follower",
    following: "Folge ich",
    unfollowers: "Folgen nicht zurück",
    notFollowingBack: "Du folgst nicht",
  },
  empty: {
    unfollowers: "Alle, denen du folgst, folgen dir zurück! 🎉",
    notFollowingBack: "Du folgst allen deinen Followern! 🤝",
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
    retry: "Erneut versuchen",
  },
  seo: {
    title: "Was ist Githubster?",
    description:
      "Githubster ist ein kostenloses Open-Source-Tool, um deine GitHub-Verbindungen zu verstehen. Ohne Anmeldung, ohne Datensammlung.",
    feature1Title: "Unfollower",
    feature1Desc: "Sieh, wem du folgst, der dir nicht zurückfolgt.",
    feature2Title: "Follower",
    feature2Desc: "Entdecke Leute, die dir folgen, denen du aber nicht folgst.",
    feature3Title: "Privat & Sicher",
    feature3Desc: "Läuft vollständig im Browser. Keine Daten werden gespeichert.",
  },
  footer: {
    openSource: "Open Source auf",
    madeWith: "Mit ♥ gemacht in",
  },
};
