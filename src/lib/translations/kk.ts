import type { Translations } from "./en";

export const kk: Translations = {
  meta: {
    title: "Githubster — GitHub жазылушылары мен жазылмағандарды бақылау",
    description: "Тегін ашық бастапқы құрал: кім сізге жауап бермейтінін біліңіз. Кіруді қажет етпейді.",
  },
  notFound: {
    title: "Бет табылмады",
    description: "Сіз іздеген бет жоқ немесе жылжытылған.",
    button: "Басты бетке оралу",
  },
  hero: {
    title: "GitHub желіңізді зерттеңіз",
    description: "Кім сізге жауап бермейтінін, кімге жазылмағаныңызды біліңіз және GitHub байланыстарыңызды басқарыңыз.",
  },
  search: {
    placeholder: "GitHub пайдаланушы атын енгізіңіз",
    button: "Зерттеу",
    loading: "Жүктелуде...",
    tokenToggle: "Токен қосу (міндетті емес, лимитті арттырады)",
    tokenHide: "Токенді жасыру (міндетті емес, лимитті арттырады)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Токенді көрсету",
    tokenMask: "Токенді жасыру",
    tokenClear: "Токенді тазалау",
    tokenPrivacy: "Тек GitHub API-ге тікелей сұраулар үшін қолданылады. Сақталмайды және Githubster-ге жіберілмейді.",
  },
  tabs: {
    unfollowers: "Жауап бермейді",
    notFollowingBack: "Сіз жазылмағансыз",
    mutuals: "Өзара",
    following: "Жазылымдар",
    followers: "Жазылушылар",
  },
  stats: {
    followers: "Жазылушылар",
    following: "Жазылымдар",
    mutuals: "Өзара",
    unfollowers: "Жауап бермейді",
    notFollowingBack: "Сіз жазылмағансыз",
  },
  empty: {
    unfollowers: "Барлық жазылымдарыңыз сізге жауап берген! 🎉",
    notFollowingBack: "Сіз барлық жазылушыларыңызға жазылғансыз! 🤝",
    mutuals: "Әзірге өзара байланыстар жоқ.",
    following: "Әзірге жазылымдар жоқ.",
    followers: "Әзірге жазылушылар жоқ.",
    initial: "Жоғарыда пайдаланушы атын енгізіңіз",
  },
  grid: {
    searchPlaceholder: "{count} пайдаланушыны іздеу...",
  },
  rateLimit: {
    resets: "{time} кейін қалпына келеді",
    now: "қазір",
  },
  error: {
    retry: "",
    userNotFound: "Пайдаланушы табылмады",
    userNotFoundDesc: "GitHub пайдаланушы атын тексеріп, қайта көріңіз.",
    rateLimit: "GitHub сұраныс лимитіне жетті",
    rateLimitDesc: "Токен қосыңыз немесе бірнеше минуттан кейін қайта көріңіз.",
    noPublicFollowers: "Жария жазылушылар табылмады",
    noPublicFollowersDesc: "Бұл профильдің жария белсенділігі шектеулі болуы мүмкін.",
  },
  seo: {
    title: "Githubster дегеніміз не?",
    description:
      "Githubster — GitHub жазылушыларын тексеруге арналған тегін ашық бастапқы құрал. Жауап жазылмайтындарды, өзара байланыстарды және профиль деректерін көру үшін жария жазылушылар мен жазылымдарды салыстырыңыз — Githubster аккаунты қажет емес.",
    feature1Title: "Жазылмағандар",
    feature1Desc: "Сіз жазылған, бірақ сізге жауап бермейтін адамдарды көріңіз.",
    feature2Title: "Жазылушылар",
    feature2Desc: "Сізге жазылған, бірақ сіз жазылмаған адамдарды табыңыз.",
    feature3Title: "Құпия және Қауіпсіз",
    feature3Desc: "Профиль талдауы браузерде орындалады. Қосымша кіру токені сақталмайды.",
  },
  support: {
    nav: "Қолдау",
    title: "Githubster-ді қолдау",
    description: "Githubster тегін әрі ашық бастапқы кодты. Егер ол пайдалы болса, оның дамуын қолдай аласыз.",
    kofi: "Ko-fi арқылы қолдау",
    paypal: "PayPal",
    star: "GitHub-та жұлдыз қою",
  },
  profileOverview: {
    title: "Профиль шолуы",
    ownProjects: "Жеке жобалар",
    repositories: "репозиторий",
    totalStars: "Барлық жұлдыздар",
    topLanguages: "Жұлдыздар бойынша тілдер",
    repositoriesUnavailable: "Репозиторий деректері қолжетімсіз",
  },
  banner: {
    text: "Githubster — тегін және ашық бастапқы код. GitHub-та жұлдыз қойып қолдаңыз.",
    cta: "GitHub-та жұлдыз",
  },
  footer: {
    openSource: "Ашық код",
    madeWith: "♥ арқылы жасалған",
  },
};
