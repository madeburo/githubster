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
    title: "Explorez votre réseau GitHub",
    description: "Découvrez qui ne vous suit pas en retour, qui vous ne suivez pas, et gérez vos connexions GitHub.",
  },
  search: {
    placeholder: "Entrez un nom d'utilisateur GitHub",
    button: "Explorer",
    loading: "Chargement...",
    tokenToggle: "Ajouter un token (optionnel, augmente la limite)",
    tokenHide: "Masquer le token (optionnel, augmente la limite)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Afficher le token",
    tokenMask: "Masquer le token",
    tokenClear: "Effacer le token",
    tokenPrivacy: "Utilisé uniquement pour les requêtes directes à l’API GitHub. Il n’est ni enregistré ni envoyé à Githubster.",
  },
  tabs: {
    unfollowers: "Ne suivent pas",
    notFollowingBack: "Vous ne suivez pas",
    mutuals: "Mutuels",
    following: "Abonnements",
    followers: "Abonnés",
  },
  stats: {
    followers: "Abonnés",
    following: "Abonnements",
    mutuals: "Mutuels",
    unfollowers: "Ne suivent pas",
    notFollowingBack: "Vous ne suivez pas",
  },
  empty: {
    unfollowers: "Tous ceux que vous suivez vous suivent en retour ! 🎉",
    notFollowingBack: "Vous suivez tous vos abonnés ! 🤝",
    mutuals: "Pas encore de connexions mutuelles.",
    following: "Aucun abonnement pour le moment.",
    followers: "Aucun abonné pour le moment.",
    initial: "Entrez un nom d'utilisateur ci-dessus",
  },
  grid: {
    searchPlaceholder: "Rechercher {count} utilisateurs...",
  },
  rateLimit: {
    resets: "réinitialisation dans {time}",
    now: "maintenant",
  },
  error: {
    retry: "",
    userNotFound: "Utilisateur introuvable",
    userNotFoundDesc: "Vérifiez le nom d'utilisateur GitHub et réessayez.",
    rateLimit: "Limite de requêtes GitHub atteinte",
    rateLimitDesc: "Ajoutez un token ou réessayez dans quelques minutes.",
    noPublicFollowers: "Aucun abonné public trouvé",
    noPublicFollowersDesc: "Ce profil peut avoir une activité publique limitée.",
  },
  seo: {
    title: "Qu'est-ce que Githubster ?",
    description:
      "Githubster est un outil gratuit et open source pour comparer les abonnés et abonnements publics sur GitHub, voir les non-réciprocités, les relations mutuelles et les informations de profil — sans compte Githubster.",
    feature1Title: "Unfollowers",
    feature1Desc: "Voyez qui vous suivez mais qui ne vous suit pas en retour.",
    feature2Title: "Abonnés",
    feature2Desc: "Découvrez qui vous suit mais que vous ne suivez pas encore.",
    feature3Title: "Privé et Sécurisé",
    feature3Desc: "L’analyse du profil s’effectue dans votre navigateur. Les jetons d’accès facultatifs ne sont pas stockés.",
  },
  support: {
    nav: "Soutenir",
    title: "Soutenir Githubster",
    description: "Githubster est gratuit et open source. S’il vous est utile, vous pouvez soutenir son développement.",
    kofi: "Soutenir sur Ko-fi",
    paypal: "PayPal",
    star: "Mettre une étoile sur GitHub",
  },
  profileOverview: {
    title: "Aperçu du profil",
    ownProjects: "Projets personnels",
    repositories: "dépôts",
    totalStars: "Étoiles totales",
    topLanguages: "Langages par étoiles",
    repositoriesUnavailable: "Données des dépôts indisponibles",
  },
  banner: {
    text: "Githubster est gratuit et open source. Soutenez le projet avec une étoile sur GitHub.",
    cta: "Étoile sur GitHub",
  },
  footer: {
    openSource: "Open source sur",
    madeWith: "Fait avec ♥ chez",
  },
};
