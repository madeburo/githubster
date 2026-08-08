import type { Translations } from "./en";

export const tr: Translations = {
  meta: {
    title: "Githubster — GitHub Takipçi ve Unfollower Takibi",
    description: "Ücretsiz ve açık kaynaklı araç: Sizi geri takip etmeyenleri görün. Giriş gerektirmez.",
  },
  notFound: {
    title: "Sayfa bulunamadı",
    description: "Aradığınız sayfa mevcut değil veya taşınmış.",
    button: "Ana sayfaya dön",
  },
  hero: {
    title: "GitHub ağınızı keşfedin",
    description: "Sizi geri takip etmeyenleri, takip etmediklerinizi öğrenin ve GitHub bağlantılarınızı yönetin.",
  },
  search: {
    placeholder: "GitHub kullanıcı adı girin",
    button: "Keşfet",
    loading: "Yükleniyor...",
    tokenToggle: "Token ekle (isteğe bağlı, limiti artırır)",
    tokenHide: "Tokeni gizle (isteğe bağlı, limiti artırır)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Tokeni göster",
    tokenMask: "Tokeni gizle",
    tokenClear: "Tokeni temizle",
    tokenPrivacy: "Yalnızca GitHub API’ye doğrudan istekler için kullanılır. Kaydedilmez veya Githubster’a gönderilmez.",
  },
  tabs: {
    unfollowers: "Geri takip etmiyor",
    notFollowingBack: "Takip etmiyorsun",
    mutuals: "Karşılıklı",
    following: "Takip edilen",
    followers: "Takipçiler",
  },
  stats: {
    followers: "Takipçiler",
    following: "Takip edilen",
    mutuals: "Karşılıklı",
    unfollowers: "Geri takip etmiyor",
    notFollowingBack: "Takip etmiyorsun",
  },
  empty: {
    unfollowers: "Takip ettiğin herkes seni geri takip ediyor! 🎉",
    notFollowingBack: "Tüm takipçilerini takip ediyorsun! 🤝",
    mutuals: "Henüz karşılıklı bağlantı yok.",
    following: "Henüz kimseyi takip etmiyorsun.",
    followers: "Henüz takipçi yok.",
    initial: "Yukarıya bir kullanıcı adı girin",
  },
  grid: {
    searchPlaceholder: "{count} kullanıcı ara...",
  },
  rateLimit: {
    resets: "{time} sonra sıfırlanır",
    now: "şimdi",
  },
  error: {
    retry: "",
    userNotFound: "Kullanıcı bulunamadı",
    userNotFoundDesc: "GitHub kullanıcı adını kontrol edip tekrar deneyin.",
    rateLimit: "GitHub istek limiti aşıldı",
    rateLimitDesc: "Bir token ekleyin veya birkaç dakika sonra tekrar deneyin.",
    noPublicFollowers: "Herkese açık takipçi bulunamadı",
    noPublicFollowersDesc: "Bu profilin herkese açık etkinliği sınırlı olabilir.",
  },
  seo: {
    title: "Githubster nedir?",
    description:
      "Githubster, GitHub bağlantılarınızı anlamanıza yardımcı olan ücretsiz ve açık kaynaklı bir araçtır. Giriş gerektirmez, veri toplamaz.",
    feature1Title: "Takip etmeyenler",
    feature1Desc: "Takip ettiğiniz ama sizi geri takip etmeyenleri görün.",
    feature2Title: "Takipçiler",
    feature2Desc: "Sizi takip eden ama takip etmediğiniz kişileri keşfedin.",
    feature3Title: "Gizli ve Güvenli",
    feature3Desc: "Profil analizi tarayıcınızda yapılır. İsteğe bağlı erişim jetonları kaydedilmez.",
  },
  profileOverview: {
    title: "Profil Özeti",
    ownProjects: "Kendi Projeleri",
    repositories: "depo",
    totalStars: "Toplam Yıldız",
    topLanguages: "Yıldıza göre diller",
    repositoriesUnavailable: "Depo verileri kullanılamıyor",
  },
  banner: {
    text: "Githubster ücretsiz ve açık kaynaklıdır. GitHub'da yıldız vererek projeyi destekleyin.",
    cta: "GitHub'da yıldız ver",
  },
  footer: {
    openSource: "Açık kaynak",
    madeWith: "♥ ile yapıldı",
  },
};
