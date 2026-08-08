import type { Translations } from "./en";

export const id: Translations = {
  meta: {
    title: "Githubster — Lacak Pengikut dan Unfollower GitHub",
    description: "Alat gratis dan open-source untuk melihat siapa yang tidak follow back di GitHub. Tanpa login.",
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    description: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    button: "Kembali ke beranda",
  },
  hero: {
    title: "Jelajahi jaringan GitHub Anda",
    description: "Cari tahu siapa yang tidak follow back, siapa yang belum kamu follow, dan kelola koneksi GitHub-mu.",
  },
  search: {
    placeholder: "Masukkan username GitHub",
    button: "Jelajahi",
    loading: "Memuat...",
    tokenToggle: "Tambah token (opsional, meningkatkan limit)",
    tokenHide: "Sembunyikan token (opsional, meningkatkan limit)",
    tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "Tampilkan token",
    tokenMask: "Sembunyikan token",
    tokenClear: "Hapus token",
    tokenPrivacy: "Hanya digunakan untuk permintaan langsung ke API GitHub. Tidak disimpan atau dikirim ke Githubster.",
  },
  tabs: {
    unfollowers: "Tidak Follow Back",
    notFollowingBack: "Kamu Tidak Follow",
    mutuals: "Saling Follow",
    following: "Mengikuti",
    followers: "Pengikut",
  },
  stats: {
    followers: "Pengikut",
    following: "Mengikuti",
    mutuals: "Saling Follow",
    unfollowers: "Tidak follow back",
    notFollowingBack: "Kamu tidak follow",
  },
  empty: {
    unfollowers: "Semua yang kamu follow sudah follow back! 🎉",
    notFollowingBack: "Kamu sudah follow semua pengikutmu! 🤝",
    mutuals: "Belum ada koneksi timbal balik.",
    following: "Belum mengikuti siapa pun.",
    followers: "Belum ada pengikut.",
    initial: "Masukkan username di atas",
  },
  grid: {
    searchPlaceholder: "Cari {count} pengguna...",
  },
  rateLimit: {
    resets: "reset dalam {time}",
    now: "sekarang",
  },
  error: {
    retry: "",
    userNotFound: "Pengguna tidak ditemukan",
    userNotFoundDesc: "Periksa nama pengguna GitHub dan coba lagi.",
    rateLimit: "Batas permintaan GitHub tercapai",
    rateLimitDesc: "Tambahkan token atau coba lagi dalam beberapa menit.",
    noPublicFollowers: "Tidak ada pengikut publik ditemukan",
    noPublicFollowersDesc: "Profil ini mungkin memiliki aktivitas publik yang terbatas.",
  },
  seo: {
    title: "Apa itu Githubster?",
    description:
      "Githubster adalah alat gratis dan open-source untuk memahami koneksi GitHub-mu. Tanpa login, tanpa pengumpulan data.",
    feature1Title: "Unfollowers",
    feature1Desc: "Lihat siapa yang kamu follow tapi tidak follow back.",
    feature2Title: "Pengikut",
    feature2Desc: "Temukan orang yang follow kamu tapi belum kamu follow.",
    feature3Title: "Privat & Aman",
    feature3Desc: "Analisis profil berjalan di browser. Token akses opsional tidak disimpan.",
  },
  profileOverview: {
    title: "Ikhtisar Profil",
    ownProjects: "Proyek Sendiri",
    repositories: "repositori",
    totalStars: "Total Bintang",
    topLanguages: "Bahasa berdasarkan bintang",
    repositoriesUnavailable: "Data repositori tidak tersedia",
  },
  banner: {
    text: "Githubster gratis dan open source. Dukung proyek dengan bintang di GitHub.",
    cta: "Bintang di GitHub",
  },
  footer: {
    openSource: "Open source di",
    madeWith: "Dibuat dengan ♥ di",
  },
};
