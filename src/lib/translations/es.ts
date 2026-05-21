import type { Translations } from "./en";

export const es: Translations = {
  meta: {
    title: "Githubster — Rastrea tus seguidores y unfollowers en GitHub",
    description: "Herramienta gratuita y de código abierto para ver quién no te sigue de vuelta en GitHub. Sin inicio de sesión.",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o ha sido movida.",
    button: "Volver al inicio",
  },
  hero: {
    description: "Descubre quién no te sigue de vuelta, a quién no sigues, y gestiona tus conexiones en GitHub.",
  },
  search: {
    placeholder: "Ingresa el nombre de usuario de GitHub",
    button: "Verificar",
    loading: "Cargando...",
    tokenToggle: "Agregar token (opcional, aumenta el límite)",
    tokenHide: "Ocultar token (opcional, aumenta el límite)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "No te siguen",
    notFollowingBack: "No sigues",
    following: "Siguiendo",
    followers: "Seguidores",
  },
  stats: {
    followers: "Seguidores",
    following: "Siguiendo",
    unfollowers: "No te siguen",
    notFollowingBack: "No sigues",
  },
  empty: {
    unfollowers: "¡Todos los que sigues te siguen de vuelta! 🎉",
    notFollowingBack: "¡Sigues a todos tus seguidores! 🤝",
    following: "Aún no sigues a nadie.",
    followers: "Aún sin seguidores.",
    initial: "Ingresa un nombre de usuario arriba",
  },
  grid: {
    searchPlaceholder: "Buscar {count} usuarios...",
  },
  seo: {
    title: "¿Qué es Githubster?",
    description:
      "Githubster es una herramienta gratuita y de código abierto para entender tus conexiones en GitHub. Sin inicio de sesión ni recopilación de datos.",
    feature1Title: "Unfollowers",
    feature1Desc: "Ve quién sigues que no te sigue de vuelta.",
    feature2Title: "Fans",
    feature2Desc: "Descubre quién te sigue pero tú no sigues.",
    feature3Title: "Privado y Seguro",
    feature3Desc: "Se ejecuta completamente en tu navegador. No se almacenan datos.",
  },
  footer: {
    openSource: "Código abierto en",
    madeWith: "Hecho con ♥ en",
  },
};
