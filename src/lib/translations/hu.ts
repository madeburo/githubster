import type { Translations } from "./en";

export const hu: Translations = {
  meta: {
    title: "Githubster — kövesd nyomon GitHub-követőidet",
    description: "Ingyenes, nyílt forráskódú eszköz, amely megmutatja, ki nem követ vissza a GitHubon. Bejelentkezés nélkül.",
  },
  notFound: { title: "Az oldal nem található", description: "A keresett oldal nem létezik vagy áthelyezték.", button: "Vissza a főoldalra" },
  hero: {
    title: "Fedezd fel GitHub-hálózatodat",
    description: "Fedezd fel követőidet, kölcsönös kapcsolataidat, a vissza nem követőket és a nyilvános profiladatokat. Githubster-fiók nem szükséges. Az opcionális token ezen a lapon marad.",
  },
  search: {
    placeholder: "Add meg a GitHub-felhasználónevet", button: "Felfedezés", loading: "Betöltés...",
    tokenToggle: "Token hozzáadása (opcionális, növeli a korlátot)", tokenHide: "Token elrejtése (opcionális, növeli a korlátot)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Token megjelenítése", tokenMask: "Token elrejtése", tokenClear: "Token törlése",
    tokenPrivacy: "Csak közvetlen GitHub API-kérésekhez használjuk. Nem mentjük és nem küldjük el a Githubsternek.",
  },
  tabs: { unfollowers: "Nem követnek vissza", notFollowingBack: "Nem követed", mutuals: "Kölcsönös", following: "Követések", followers: "Követők" },
  stats: { followers: "Követők", following: "Követések", mutuals: "Kölcsönös", unfollowers: "Nem követnek vissza", notFollowingBack: "Nem követed" },
  empty: {
    unfollowers: "Mindenki visszakövet, akit követsz! 🎉", notFollowingBack: "Mindenkit követsz, aki követ téged! 🤝",
    mutuals: "Még nincsenek kölcsönös kapcsolatok.", following: "Még senkit sem követsz.", followers: "Még nincsenek követők.", initial: "Add meg fent a felhasználónevet a teljes kép megtekintéséhez",
  },
  grid: { searchPlaceholder: "Keresés {count} felhasználó között..." },
  rateLimit: { resets: "visszaáll: {time}", now: "most" },
  error: {
    retry: "Újra", userNotFound: "A felhasználó nem található", userNotFoundDesc: "Ellenőrizd a GitHub-felhasználónevet, majd próbáld újra.",
    rateLimit: "Elérted a GitHub lekérdezési korlátját", rateLimitDesc: "Adj hozzá tokent, vagy próbáld újra néhány perc múlva.",
    noPublicFollowers: "Nem találhatók nyilvános követők", noPublicFollowersDesc: "A profil nyilvános aktivitása korlátozott lehet.",
  },
  seo: {
    title: "Mi az a Githubster?",
    description: "A Githubster egy ingyenes, nyílt forráskódú GitHub-követőellenőrző. Hasonlítsd össze a nyilvános követő- és követési listákat, keresd meg a vissza nem követőket, a kölcsönös kapcsolatokat és a profiladatokat — Githubster-fiók nélkül.",
    feature1Title: "Nem követnek vissza", feature1Desc: "Nézd meg, kit követsz, aki nem követ vissza. Tedd rendbe a követési listádat.",
    feature2Title: "Követők", feature2Desc: "Fedezd fel azokat, akik követnek téged, de te még nem követed őket.",
    feature3Title: "Böngészőalapú", feature3Desc: "A profilelemzés a böngésződben fut. Az opcionális hozzáférési tokeneket soha nem tároljuk.",
  },
  support: { nav: "Támogatás", title: "Támogasd a Githubstert", description: "A Githubster ingyenes és nyílt forráskódú. Ha hasznosnak találod, támogathatod a fejlesztését.", kofi: "Támogatás a Ko-fi-n", paypal: "PayPal", star: "Csillag a GitHubon" },
  theme: { light: "Világos", dark: "Sötét" },
  profileOverview: { title: "Profiláttekintés", ownProjects: "Saját projektek", repositories: "adattárak", totalStars: "Összes csillag", topLanguages: "Legnépszerűbb nyelvek csillagok szerint", repositoriesUnavailable: "Az adattáradatok nem érhetők el" },
  banner: { text: "A Githubster teljesen ingyenes és nyílt forráskódú. Ha segített, egy GitHub-csillag életben tartja a projektet.", cta: "Csillag a GitHubon" },
  footer: { openSource: "Nyílt forráskód a", madeWith: "♥-tel készült itt:" },
  share: { button: "Megosztás", copied: "Másolva!", tooltip: "Profilhivatkozás megosztása" },
  sort: { label: "Felhasználók rendezése", default: "Alapértelmezett", nameAsc: "Név A→Z", nameDesc: "Név Z→A" },
  loading: { title: "Profiladatok betöltése...", followers: "Követők", following: "Követések" },
};
