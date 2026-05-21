import type { Translations } from "./en";

export const it: Translations = {
  meta: {
    title: "Githubster — Monitora i tuoi follower e unfollower su GitHub",
    description: "Strumento gratuito e open-source per vedere chi non ti segue su GitHub. Nessun login richiesto.",
  },
  notFound: {
    title: "Pagina non trovata",
    description: "La pagina che stai cercando non esiste o è stata spostata.",
    button: "Torna alla home",
  },
  hero: {
    description: "Scopri chi non ti segue, chi non segui tu, e gestisci le tue connessioni su GitHub.",
  },
  search: {
    placeholder: "Inserisci il nome utente GitHub",
    button: "Verifica",
    loading: "Caricamento...",
    tokenToggle: "Aggiungi token (opzionale, aumenta il limite)",
    tokenHide: "Nascondi token (opzionale, aumenta il limite)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Non ricambiano",
    notFollowingBack: "Non segui",
    following: "Seguiti",
    followers: "Follower",
  },
  stats: {
    followers: "Follower",
    following: "Seguiti",
    unfollowers: "Non ricambiano",
    notFollowingBack: "Non segui",
  },
  empty: {
    unfollowers: "Tutti quelli che segui ti seguono! 🎉",
    notFollowingBack: "Segui tutti i tuoi follower! 🤝",
    following: "Non segui ancora nessuno.",
    followers: "Ancora nessun follower.",
    initial: "Inserisci un nome utente sopra",
  },
  grid: {
    searchPlaceholder: "Cerca {count} utenti...",
  },
  seo: {
    title: "Cos'è Githubster?",
    description:
      "Githubster è uno strumento gratuito e open-source per capire le tue connessioni su GitHub. Senza login, senza raccolta dati.",
    feature1Title: "Unfollower",
    feature1Desc: "Vedi chi segui che non ti segue.",
    feature2Title: "Fan",
    feature2Desc: "Scopri chi ti segue ma tu non segui.",
    feature3Title: "Privato e Sicuro",
    feature3Desc: "Funziona interamente nel browser. Nessun dato viene salvato.",
  },
  footer: {
    openSource: "Open source su",
    madeWith: "Fatto con ♥ da",
  },
};
