import type { Translations } from "./en";

export const cs: Translations = {
  meta: {
    title: "Githubster — sledujte své sledující na GitHubu",
    description: "Bezplatný open source nástroj, který ukáže, kdo vás na GitHubu nesleduje zpět. Bez přihlášení.",
  },
  notFound: { title: "Stránka nebyla nalezena", description: "Hledaná stránka neexistuje nebo byla přesunuta.", button: "Zpět na hlavní stránku" },
  hero: {
    title: "Prozkoumejte svou síť na GitHubu",
    description: "Prozkoumejte sledující, vzájemná spojení, účty, které vás nesledují zpět, a veřejné informace o profilu. Účet Githubster není potřeba. Volitelný token zůstává na této kartě.",
  },
  search: {
    placeholder: "Zadejte uživatelské jméno GitHub", button: "Prozkoumat", loading: "Načítání...",
    tokenToggle: "Přidat token (volitelné, zvýší limit)", tokenHide: "Skrýt token (volitelné, zvýší limit)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Zobrazit token", tokenMask: "Skrýt token", tokenClear: "Vymazat token",
    tokenPrivacy: "Používá se pouze pro přímé požadavky na GitHub API. Neukládá se ani se neposílá službě Githubster.",
  },
  tabs: { unfollowers: "Nesledují vás zpět", notFollowingBack: "Vy je nesledujete", mutuals: "Vzájemná", following: "Sledujete", followers: "Sledující" },
  stats: { followers: "Sledující", following: "Sledujete", mutuals: "Vzájemná", unfollowers: "Nesledují vás zpět", notFollowingBack: "Vy je nesledujete" },
  empty: {
    unfollowers: "Všichni, které sledujete, vás sledují zpět! 🎉", notFollowingBack: "Sledujete všechny, kteří sledují vás! 🤝",
    mutuals: "Zatím žádná vzájemná spojení.", following: "Zatím nikoho nesledujete.", followers: "Zatím žádní sledující.", initial: "Zadejte výše uživatelské jméno a zobrazte celý přehled",
  },
  grid: { searchPlaceholder: "Hledat mezi {count} uživateli..." },
  rateLimit: { resets: "obnoví se za {time}", now: "nyní" },
  error: {
    retry: "Zkusit znovu", userNotFound: "Uživatel nebyl nalezen", userNotFoundDesc: "Zkontrolujte uživatelské jméno GitHub a zkuste to znovu.",
    rateLimit: "Byl dosažen limit GitHubu", rateLimitDesc: "Přidejte token nebo to zkuste znovu za několik minut.",
    noPublicFollowers: "Nebyli nalezeni žádní veřejní sledující", noPublicFollowersDesc: "Tento profil může mít omezenou veřejnou aktivitu.",
  },
  seo: {
    title: "Co je Githubster?",
    description: "Githubster je bezplatný open source nástroj pro kontrolu sledujících na GitHubu. Porovnejte veřejné seznamy sledujících a sledovaných, najděte účty bez zpětného sledování, vzájemná spojení a informace o profilu — bez účtu Githubster.",
    feature1Title: "Nesledují vás zpět", feature1Desc: "Podívejte se, koho sledujete, ale kdo vás nesleduje zpět. Udělejte si pořádek v seznamu sledovaných.",
    feature2Title: "Sledující", feature2Desc: "Objevte lidi, kteří vás sledují, ale které vy zatím nesledujete.",
    feature3Title: "V prohlížeči", feature3Desc: "Analýza profilu probíhá ve vašem prohlížeči. Volitelné přístupové tokeny se nikdy neukládají.",
  },
  support: { nav: "Podpořit", title: "Podpořte Githubster", description: "Githubster je bezplatný a open source. Pokud je pro vás užitečný, můžete podpořit jeho vývoj.", kofi: "Podpořit na Ko-fi", paypal: "PayPal", star: "Přidat hvězdu na GitHubu" },
  theme: { light: "Světlý", dark: "Tmavý" },
  profileOverview: { title: "Přehled profilu", ownProjects: "Vlastní projekty", repositories: "repozitáře", totalStars: "Celkem hvězd", topLanguages: "Nejlepší jazyky podle hvězd", repositoriesUnavailable: "Data repozitářů nejsou dostupná" },
  banner: { text: "Githubster je zcela bezplatný a open source. Pokud vám pomohl, hvězda na GitHubu pomůže projektu pokračovat.", cta: "Přidat hvězdu na GitHubu" },
  footer: { openSource: "Open source na", madeWith: "Vytvořeno s ♥ v" },
  share: { button: "Sdílet", copied: "Zkopírováno!", tooltip: "Sdílet odkaz na profil" },
  sort: { label: "Seřadit uživatele", default: "Výchozí", nameAsc: "Jméno A→Z", nameDesc: "Jméno Z→A" },
  loading: { title: "Načítání dat profilu...", followers: "Sledující", following: "Sledujete" },
};
