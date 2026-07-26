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
    title: "Explora tu red en GitHub",
    description: "Descubre quién no te sigue de vuelta, a quién no sigues, y gestiona tus conexiones en GitHub.",
  },
  search: {
    placeholder: "Ingresa el nombre de usuario de GitHub",
    button: "Explorar",
    loading: "Cargando...",
    tokenToggle: "Agregar token (opcional, aumenta el límite)",
    tokenHide: "Ocultar token (opcional, aumenta el límite)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "No te siguen",
    notFollowingBack: "No sigues",
    mutuals: "Mutuos",
    following: "Siguiendo",
    followers: "Seguidores",
  },
  stats: {
    followers: "Seguidores",
    following: "Siguiendo",
    mutuals: "Mutuos",
    unfollowers: "No te siguen",
    notFollowingBack: "No sigues",
  },
  empty: {
    unfollowers: "¡Todos los que sigues te siguen de vuelta! 🎉",
    notFollowingBack: "¡Sigues a todos tus seguidores! 🤝",
    mutuals: "Aún no hay conexiones mutuas.",
    following: "Aún no sigues a nadie.",
    followers: "Aún sin seguidores.",
    initial: "Ingresa un nombre de usuario arriba",
  },
  grid: {
    searchPlaceholder: "Buscar {count} usuarios...",
  },
  rateLimit: {
    resets: "se restablece en {time}",
    now: "ahora",
  },
  error: {
    retry: "",
    userNotFound: "Usuario no encontrado",
    userNotFoundDesc: "Verifica el nombre de usuario de GitHub e intenta de nuevo.",
    rateLimit: "Límite de solicitudes de GitHub alcanzado",
    rateLimitDesc: "Añade un token o inténtalo de nuevo en unos minutos.",
    noPublicFollowers: "No se encontraron seguidores públicos",
    noPublicFollowersDesc: "Este perfil puede tener actividad pública limitada.",
  },
  seo: {
    title: "¿Qué es Githubster?",
    description:
      "Githubster es una herramienta gratuita y de código abierto para entender tus conexiones en GitHub. Sin inicio de sesión ni recopilación de datos.",
    feature1Title: "Unfollowers",
    feature1Desc: "Ve quién sigues que no te sigue de vuelta.",
    feature2Title: "Seguidores",
    feature2Desc: "Descubre quién te sigue pero tú no sigues.",
    feature3Title: "Privado y Seguro",
    feature3Desc: "El análisis del perfil se realiza en tu navegador. Los tokens de acceso opcionales no se almacenan.",
  },
  profileOverview: {
    title: "Resumen del perfil",
    ownProjects: "Proyectos propios",
    repositories: "repositorios",
    totalStars: "Estrellas totales",
    topLanguages: "Lenguajes por estrellas",
  },
  banner: {
    text: "Githubster es gratuito y de código abierto. Apoya el proyecto con una estrella en GitHub.",
    cta: "Dar estrella en GitHub",
  },
  footer: {
    openSource: "Código abierto en",
    madeWith: "Hecho con ♥ en",
  },
};
