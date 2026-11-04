export type DetailedSeoLocale = "ru" | "id";

/** Small titles and descriptions shared with client-side navigation. */
export const detailedSeoCopy: Record<DetailedSeoLocale, Record<string, readonly [string, string]>> = {
  "ru": {
    "github-followers-checker": [
      "Проверка подписчиков GitHub",
      "Проверьте публичных подписчиков и подписки GitHub. Найдите взаимные связи и невзаимные подписки бесплатно и без регистрации в Githubster."
    ],
    "github-not-following-back": [
      "Кто не подписан на вас в ответ на GitHub?",
      "Найдите аккаунты GitHub, на которые вы подписаны без ответной подписки. Сравните текущие публичные списки с помощью Githubster."
    ],
    "github-mutual-followers": [
      "Взаимные подписки на GitHub",
      "Найдите взаимные подписки GitHub — аккаунты, которые подписаны на вас и на которые подписаны вы. Бесплатная проверка публичных связей."
    ],
    "github-profile-overview": [
      "Обзор публичного профиля GitHub",
      "Посмотрите публичные репозитории, звёзды и языки программирования профиля GitHub вместе с подписчиками, подписками и взаимными связями."
    ],
    "what-is-github": [
      "Что такое GitHub?",
      "Узнайте, что такое GitHub, чем он отличается от Git и как работают репозитории, pull request, issues, звёзды и подписчики."
    ],
    "github-followers-vs-following": [
      "Подписчики и подписки GitHub: в чём разница?",
      "Разберитесь в подписчиках, подписках и взаимных связях GitHub. Узнайте, как сравнить два публичных списка и найти невзаимные подписки."
    ],
    "github-api-rate-limits-for-followers": [
      "Лимиты API GitHub при проверке подписчиков",
      "Узнайте, почему проверка подписчиков GitHub требует нескольких запросов, как работают лимиты API и когда помогает необязательный токен."
    ]
  },
  "id": {
    "github-followers-checker": [
      "Cek Pengikut GitHub",
      "Periksa pengikut dan akun yang diikuti di GitHub. Temukan koneksi mutual dan akun yang tidak mengikuti balik, gratis tanpa akun Githubster."
    ],
    "github-not-following-back": [
      "Siapa yang Tidak Mengikuti Balik di GitHub?",
      "Temukan akun GitHub yang Anda ikuti tetapi tidak mengikuti Anda balik. Bandingkan daftar publik saat ini dengan Githubster."
    ],
    "github-mutual-followers": [
      "Cek Koneksi Mutual GitHub",
      "Temukan pengikut mutual GitHub: akun yang mengikuti Anda dan juga Anda ikuti. Periksa hubungan publik secara gratis dengan Githubster."
    ],
    "github-profile-overview": [
      "Ringkasan Profil Publik GitHub",
      "Lihat repositori publik, bintang, dan bahasa pemrograman profil GitHub bersama jumlah pengikut, akun yang diikuti, dan koneksi mutual."
    ],
    "what-is-github": [
      "Apa Itu GitHub?",
      "Pelajari apa itu GitHub, perbedaannya dengan Git, serta cara kerja repositori, pull request, issues, bintang, dan pengikut."
    ],
    "github-followers-vs-following": [
      "Pengikut dan Diikuti di GitHub: Apa Bedanya?",
      "Pahami perbedaan pengikut, akun yang diikuti, dan koneksi mutual di GitHub. Bandingkan daftar publik untuk menemukan hubungan satu arah."
    ],
    "github-api-rate-limits-for-followers": [
      "Batas API GitHub untuk Memeriksa Pengikut",
      "Pahami mengapa pemeriksaan pengikut GitHub memerlukan beberapa permintaan, cara kerja batas API, dan kapan token opsional membantu."
    ]
  }
};
