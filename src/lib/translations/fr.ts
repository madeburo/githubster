import type { Translations } from "./en";

export const fr: Translations = {
  meta: {
    title: "Githubster — Suivez vos abonnés et unfollowers GitHub",
    description: "Outil gratuit et open-source pour voir qui ne vous suit pas en retour sur GitHub. Sans connexion requise.",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    button: "Retour à l'accueil",
  },
  hero: {
    description: "Découvrez qui ne vous suit pas en retour, qui vous ne suivez pas, et gérez vos connexions GitHub.",
  },
  search: {
    placeholder: "Entrez un nom d'utilisateur GitHub",
    button: "Vérifier",
    loading: "Chargement...",
    tokenToggle: "Ajouter un token (optionnel, augmente la limite)",
    tokenHide: "Masquer le token (optionnel, augmente la limite)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Ne suivent pas",
    notFollowingBack: "Vous ne suivez pas",
    following: "Abonnements",
    followers: "Abonnés",
  },
  stats: {
    followers: "Abonnés",
    following: "Abonnements",
    unfollowers: "Ne suivent pas",
    notFollowingBack: "Vous ne suivez pas",
  },
  empty: {
    unfollowers: "Tous ceux que vous suivez vous suivent en retour ! 🎉",
    notFollowingBack: "Vous suivez tous vos abonnés ! 🤝",
    following: "Aucun abonnement pour le moment.",
    followers: "Aucun abonné pour le moment.",
    initial: "Entrez un nom d'utilisateur ci-dessus",
  },
  grid: {
    searchPlaceholder: "Rechercher {count} utilisateurs...",
  },
  seo: {
    title: "Qu'est-ce que Githubster ?",
    description:
      "Githubster est un outil gratuit et open-source pour comprendre vos connexions GitHub. Sans connexion ni collecte de données.",
    feature1Title: "Unfollowers",
    feature1Desc: "Voyez qui vous suivez mais qui ne vous suit pas en retour.",
    feature2Title: "Fans",
    feature2Desc: "Découvrez qui vous suit mais que vous ne suivez pas encore.",
    feature3Title: "Privé et Sécurisé",
    feature3Desc: "Fonctionne entièrement dans votre navigateur. Aucune donnée stockée.",
  },
  footer: {
    openSource: "Open source sur",
    madeWith: "Fait avec ♥ chez",
  },
};
