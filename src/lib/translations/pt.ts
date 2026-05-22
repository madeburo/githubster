import type { Translations } from "./en";

export const pt: Translations = {
  meta: {
    title: "Githubster — Rastreie seus seguidores e unfollowers no GitHub",
    description: "Ferramenta gratuita e open-source para ver quem não te segue de volta no GitHub. Sem login necessário.",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe ou foi movida.",
    button: "Voltar ao início",
  },
  hero: {
    description: "Descubra quem não te segue de volta, quem você não segue, e gerencie suas conexões no GitHub.",
  },
  search: {
    placeholder: "Digite o nome de usuário do GitHub",
    button: "Verificar",
    loading: "Carregando...",
    tokenToggle: "Adicionar token (opcional, aumenta o limite)",
    tokenHide: "Ocultar token (opcional, aumenta o limite)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "Não seguem de volta",
    notFollowingBack: "Você não segue",
    mutuals: "Mútuos",
    following: "Seguindo",
    followers: "Seguidores",
  },
  stats: {
    followers: "Seguidores",
    following: "Seguindo",
    mutuals: "Mútuos",
    unfollowers: "Não seguem de volta",
    notFollowingBack: "Você não segue",
  },
  empty: {
    unfollowers: "Todos que você segue te seguem de volta! 🎉",
    notFollowingBack: "Você segue todos os seus seguidores! 🤝",
    mutuals: "Ainda sem conexões mútuas.",
    following: "Ainda não segue ninguém.",
    followers: "Ainda sem seguidores.",
    initial: "Digite um nome de usuário acima",
  },
  grid: {
    searchPlaceholder: "Buscar {count} usuários...",
  },
  rateLimit: {
    resets: "reinicia em {time}",
    now: "agora",
  },
  error: {
    retry: "Tentar novamente",
  },
  seo: {
    title: "O que é o Githubster?",
    description:
      "Githubster é uma ferramenta gratuita e open-source para entender suas conexões no GitHub. Veja quem não te segue de volta — sem login e sem coleta de dados.",
    feature1Title: "Unfollowers",
    feature1Desc: "Veja quem você segue que não te segue de volta.",
    feature2Title: "Seguidores",
    feature2Desc: "Descubra quem te segue mas você ainda não segue.",
    feature3Title: "Privado e Seguro",
    feature3Desc: "Roda inteiramente no navegador. Nenhum dado é armazenado.",
  },
  profileOverview: {
    title: "Visão geral do perfil",
    ownProjects: "Projetos próprios",
    repositories: "repositórios",
    totalStars: "Total de estrelas",
    topLanguages: "Linguagens por estrelas",
  },
  banner: {
    text: "Githubster é gratuito e open source. Apoie o projeto com uma estrela no GitHub.",
    cta: "Dar estrela no GitHub",
  },
  footer: {
    openSource: "Código aberto no",
    madeWith: "Feito com ♥ em",
  },
};
