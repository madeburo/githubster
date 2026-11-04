import type { SeoPage } from "./seo-content";
import { detailedSeoCopy, type DetailedSeoLocale } from "./detailed-seo-copy";

function pages(locale: DetailedSeoLocale, entries: Omit<SeoPage, "title" | "h1" | "description">[]): SeoPage[] {
  return entries.map((page) => {
    const copy = detailedSeoCopy[locale][page.slug];
    if (!copy) throw new Error(`Missing ${locale} SEO metadata: ${page.slug}`);
    const [h1, description] = copy;
    return { ...page, h1, description, title: `${h1} | Githubster` };
  });
}

/** Complete articles for new locales: unique explanations, instructions and questions per topic. */
export const detailedSeoPages: Record<"ru" | "id", SeoPage[]> = {
  ru: pages("ru", [
    {
      slug: "github-followers-checker",
      intro: "Githubster сравнивает два публичных списка профиля GitHub: подписчиков и подписки. Вы увидите взаимные связи, аккаунты без ответной подписки и подписчиков, на которых ещё не подписались.",
      highlights: ["Подписчики и подписки в одном месте", "Отдельный список взаимных связей", "Поиск и сортировка профилей"],
      sections: [
        { heading: "Что показывает проверка", paragraphs: ["Подписчики — люди, подписанные на выбранный профиль. Подписки — аккаунты, на которые подписан его владелец. Пересечение списков образует взаимные подписки, а разность показывает односторонние связи.", "Githubster получает списки напрямую через API GitHub. Результат описывает состояние на момент запроса: сервис не ведёт историю изменений и не определяет дату отписки."] },
        { heading: "Как проверить профиль", paragraphs: ["Откройте главную страницу, введите имя пользователя GitHub и нажмите Enter или «Проверить». После загрузки выберите нужную вкладку. В списках доступны поиск по имени и сортировка.", "Вход в GitHub не нужен для публичных данных. Если оставшегося лимита API недостаточно, можно добавить необязательный токен в текущей вкладке."] },
      ],
      faqs: [
        { question: "Можно ли проверить чужой профиль GitHub?", answer: "Да. Можно указать любое корректное имя пользователя, для которого GitHub предоставляет публичные данные. Доступа к закрытым данным Githubster не получает." },
        { question: "Нужно ли создавать аккаунт в Githubster?", answer: "Нет. Проверка публичных списков бесплатна и работает без аккаунта Githubster. Необязательный токен нужен только для увеличения доступного лимита API." },
      ],
    },
    {
      slug: "github-not-following-back",
      intro: "Невзаимная подписка — аккаунт, который есть в ваших подписках, но отсутствует среди подписчиков. Githubster вычисляет эту разность и показывает её во вкладке «Не подписаны в ответ».",
      highlights: ["Сравнение текущих списков", "Без входа в Githubster", "Поиск по полученному списку"],
      sections: [
        { heading: "Невзаимная подписка не означает отписку", paragraphs: ["Человек мог никогда не быть подписан на вас. Чтобы установить сам факт и время отписки, нужна история предыдущих состояний. Githubster такой истории не хранит и не делает выводов о прошлых действиях.", "Обратная категория находится во вкладке «Вы не подписаны»: это ваши подписчики, на которых не подписаны вы. Эти два списка отражают разные направления связи."] },
        { heading: "Как найти невзаимные подписки", paragraphs: ["Введите имя пользователя на главной странице и дождитесь загрузки. Откройте «Не подписаны в ответ», отфильтруйте список по имени или измените сортировку. Из результата можно перейти на публичный профиль GitHub.", "Githubster только показывает данные. Он не подписывается на аккаунты и не отписывается от них за вас."] },
      ],
      faqs: [
        { question: "Показывает ли список, кто отписался вчера?", answer: "Нет. Это сравнение текущих подписчиков и подписок, а не журнал отписок. Даты прошлых действий в результате нет." },
        { question: "Почему большой профиль не загружается?", answer: "Для длинных списков нужны дополнительные страницы API. Если запросов недостаточно, Githubster сообщает об ограничении; можно дождаться сброса лимита или добавить токен." },
      ],
    },
    {
      slug: "github-mutual-followers",
      intro: "Взаимные подписки — аккаунты, одновременно присутствующие в списках подписчиков и подписок выбранного профиля. Githubster находит это пересечение и показывает его отдельно.",
      highlights: ["Двусторонние связи", "Публичные данные GitHub", "Прямые ссылки на профили"],
      sections: [
        { heading: "Как определяются взаимные связи", paragraphs: ["Если вы подписаны на разработчика и он подписан на вас, связь взаимная. Наличие общей организации, общих репозиториев или звезды на проекте само по себе не считается взаимной подпиской.", "На карте Githubster отображается выборка прямых связей с проверяемым профилем. Карта не утверждает, что показанные пользователи подписаны друг на друга."] },
        { heading: "Где посмотреть список", paragraphs: ["Найдите публичный профиль на главной странице Githubster и откройте вкладку «Взаимные». Поиск и сортировка помогают просмотреть большой список или найти конкретного разработчика.", "Результат отражает публичные данные, возвращённые GitHub во время проверки. Чтобы получить более свежий результат, запустите проверку снова."] },
      ],
      faqs: [
        { question: "Звезда на репозитории считается взаимной подпиской?", answer: "Нет. Звезда относится к репозиторию, а подписка — к аккаунту. Взаимная подписка означает наличие аккаунта в обоих списках профиля." },
        { question: "Нужен ли токен для поиска взаимных подписок?", answer: "Для публичных данных токен необязателен. Он помогает, когда размера списков или оставшегося лимита API недостаточно для проверки без авторизации." },
      ],
    },
    {
      slug: "github-profile-overview",
      intro: "Githubster дополняет сравнение подписок кратким обзором публичных репозиториев: количеством собственных проектов, суммой звёзд и языками, сгруппированными по звёздам репозиториев.",
      highlights: ["Собственные публичные репозитории", "Общее число звёзд", "Языки по звёздам репозиториев"],
      sections: [
        { heading: "Какие данные входят в обзор", paragraphs: ["Форки исключаются из сводки собственных проектов. Для оставшихся публичных репозиториев Githubster суммирует звёзды и группирует их по основному языку, указанному GitHub.", "Такой показатель языков не измеряет количество строк кода, опыт разработчика или весь его вклад. Это краткая сводка по доступным репозиториям и их звёздам."] },
        { heading: "Как читать недоступные показатели", paragraphs: ["Если полные данные репозиториев получить не удалось, Githubster помечает показатели как недоступные. Неполный ответ API не подменяется нулём.", "Введите имя пользователя на главной странице. Обзор появится рядом со списками связей, если GitHub вернёт необходимые публичные данные."] },
      ],
      faqs: [
        { question: "Учитываются ли форки?", answer: "В сводке собственных репозиториев форки исключаются, чтобы отдельно показать публичные проекты самого профиля." },
        { question: "Почему языки показаны по звёздам?", answer: "Githubster использует основной язык репозитория из GitHub и взвешивает группы по числу звёзд. Это не анализ объёма исходного кода." },
      ],
    },
    {
      slug: "what-is-github",
      intro: "GitHub — платформа для хранения Git-репозиториев и совместной разработки. Она объединяет управление версиями с проверкой изменений, обсуждением задач, публикацией проектов и публичными профилями разработчиков.",
      highlights: ["Хранение Git-репозиториев", "Совместная работа над изменениями", "Открытые проекты и сообщества"],
      sections: [
        { heading: "Чем Git отличается от GitHub", paragraphs: ["Git — распределённая система контроля версий. Она хранит историю изменений файлов и может работать без GitHub. GitHub — онлайн-сервис, который размещает Git-репозитории и добавляет средства совместной работы."] },
        { heading: "Репозитории, issues и pull request", paragraphs: ["Репозиторий может содержать код, документацию и историю выпусков. В issues обсуждают ошибки и задачи, а pull request предлагает изменения для просмотра и объединения с основной веткой.", "Звезда помогает отметить интересный репозиторий. Подписка на пользователя относится к его профилю; это отдельная связь, которую не следует путать со звездой проекта."] },
        { heading: "Как Githubster связан с GitHub", paragraphs: ["Githubster — отдельный проект с открытым кодом. Он использует публичный API GitHub, чтобы сравнивать подписчиков и подписки. Для такой проверки не нужно переносить репозитории или создавать аккаунт Githubster."] },
      ],
      faqs: [
        { question: "GitHub и Git — одно и то же?", answer: "Нет. Git отвечает за контроль версий, а GitHub размещает репозитории Git в интернете и добавляет инструменты совместной разработки." },
        { question: "Githubster — официальный сервис GitHub?", answer: "Нет. Githubster — отдельный проект с открытым исходным кодом, использующий публичные данные GitHub через API." },
      ],
    },
    {
      slug: "github-followers-vs-following",
      intro: "Подписчики — аккаунты, которые подписаны на профиль. Подписки — аккаунты, на которые подписан владелец профиля. Эти списки независимы: подписка не обязана быть взаимной.",
      highlights: ["Подписчики подписаны на вас", "Подписки — те, кого читаете вы", "Взаимные есть в обоих списках"],
      sections: [
        { heading: "Односторонняя и взаимная связь", paragraphs: ["Аккаунт может подписаться на вас, даже если вы не подписаны на него. Если оба аккаунта подписаны друг на друга, связь взаимная. Сама по себе односторонняя связь ничего не говорит о прошлой отписке."] },
        { heading: "Какие списки получаются при сравнении", paragraphs: ["Пересечение подписчиков и подписок даёт взаимные связи. Аккаунты только в подписках попадают в «Не подписаны в ответ». Аккаунты только в подписчиках попадают в «Вы не подписаны».", "Указание направления важно: эти две разности отвечают на разные вопросы и могут иметь разный размер."] },
        { heading: "Как сравнить списки в Githubster", paragraphs: ["Введите публичное имя пользователя, запустите проверку и переключайтесь между вкладками. Githubster группирует текущие списки и позволяет перейти к профилю любого показанного пользователя."] },
      ],
      faqs: [
        { question: "Может ли кто-то быть моим подписчиком без взаимной подписки?", answer: "Да. Подписки GitHub могут быть односторонними. Подписчик не обязан одновременно присутствовать в ваших подписках." },
        { question: "Списки показывают прошлые отписки?", answer: "Нет. Сравнение текущих списков показывает направление существующих связей, но без истории нельзя установить, кто и когда отписался." },
      ],
    },
    {
      slug: "github-api-rate-limits-for-followers",
      intro: "API GitHub возвращает подписчиков и подписки постранично. Чем длиннее списки, тем больше запросов требуется. Доступный лимит зависит от авторизации и уже использованных запросов.",
      highlights: ["Постраничная загрузка списков", "Проверка оставшегося лимита", "Необязательный токен GitHub"],
      sections: [
        { heading: "Почему запросов больше одного", paragraphs: ["Для списков GitHub поддерживает до 100 аккаунтов на страницу. Например, 250 подписчиков требуют трёх страниц списка подписчиков. Дополнительно нужны запросы для профиля, подписок и доступных сведений о репозиториях.", "Без авторизации основной лимит обычно составляет 60 запросов в час на IP-адрес. Личный токен обычно даёт 5000 запросов в час для пользователя. У GitHub также есть дополнительные ограничения частоты."] },
        { heading: "Когда добавить токен", paragraphs: ["Githubster проверяет размер списков и оставшийся лимит до полной загрузки. Если лимита недостаточно, можно дождаться сброса или добавить токен. Для публичной проверки не нужны разрешения на запись в репозитории."] },
        { heading: "Как используется токен", paragraphs: ["Токен остаётся в текущей вкладке и отправляется напрямую в GitHub при запросах API. Он не сохраняется в localStorage и не передаётся на серверы Githubster. Закрытие или перезагрузка страницы очищает поле."] },
      ],
      faqs: [
        { question: "Токен обязателен для проверки подписчиков?", answer: "Нет. Публичные данные доступны и без токена, пока хватает неавторизованного лимита GitHub." },
        { question: "Почему с токеном тоже может возникнуть ограничение?", answer: "Лимит пользователя может быть уже израсходован другими запросами. Кроме того, GitHub применяет дополнительные ограничения частоты, поэтому токен не означает неограниченный доступ." },
      ],
    },
  ]),
  id: pages("id", [
    {
      slug: "github-followers-checker",
      intro: "Githubster membandingkan dua daftar publik profil GitHub: pengikut dan akun yang diikuti. Hasilnya memisahkan koneksi mutual, akun yang tidak mengikuti balik, dan pengikut yang belum Anda ikuti.",
      highlights: ["Pengikut dan akun yang diikuti", "Daftar khusus koneksi mutual", "Pencarian dan pengurutan profil"],
      sections: [
        { heading: "Apa yang ditampilkan", paragraphs: ["Pengikut adalah akun yang mengikuti profil tersebut. Daftar diikuti berisi akun yang dipilih untuk diikuti oleh pemilik profil. Irisan kedua daftar merupakan koneksi mutual, sedangkan selisihnya menunjukkan hubungan satu arah.", "Githubster mengambil daftar langsung dari API GitHub. Hasilnya adalah gambaran saat permintaan dijalankan, bukan riwayat perubahan pengikut."] },
        { heading: "Cara memeriksa profil", paragraphs: ["Buka beranda, masukkan nama pengguna GitHub, lalu tekan Enter atau Jelajahi. Setelah data dimuat, pilih tab yang Anda perlukan. Gunakan pencarian nama dan pengurutan untuk meninjau daftar.", "Data publik tidak memerlukan login GitHub. Jika sisa batas API tidak cukup, Anda dapat menambahkan token opsional di tab yang sama."] },
      ],
      faqs: [
        { question: "Bisakah saya memeriksa profil orang lain?", answer: "Ya. Masukkan nama pengguna yang valid dan memiliki data publik yang tersedia melalui GitHub. Githubster tidak memperoleh akses ke data privat." },
        { question: "Apakah saya perlu akun Githubster?", answer: "Tidak. Perbandingan daftar publik gratis dan tidak memerlukan akun Githubster. Token bersifat opsional untuk menambah batas API yang tersedia." },
      ],
    },
    {
      slug: "github-not-following-back",
      intro: "Akun yang tidak mengikuti balik ada dalam daftar akun yang Anda ikuti, tetapi tidak ada dalam daftar pengikut Anda. Githubster menghitung selisih ini dan menampilkannya di tab Tidak mengikuti balik.",
      highlights: ["Perbandingan daftar saat ini", "Tanpa login Githubster", "Cari akun dalam hasil"],
      sections: [
        { heading: "Tidak mengikuti balik bukan berarti berhenti mengikuti", paragraphs: ["Seseorang mungkin memang belum pernah mengikuti Anda. Untuk memastikan bahwa seseorang berhenti mengikuti dan mengetahui waktunya, diperlukan riwayat sebelumnya. Githubster tidak menyimpan riwayat tersebut.", "Tab Belum Anda ikuti menampilkan arah sebaliknya: orang yang mengikuti Anda tetapi belum Anda ikuti. Kedua daftar menjawab pertanyaan yang berbeda."] },
        { heading: "Cara menemukan akun tersebut", paragraphs: ["Masukkan nama pengguna di beranda, tunggu data dimuat, lalu buka Tidak mengikuti balik. Cari berdasarkan nama atau ubah urutan daftar. Setiap hasil memiliki tautan ke profil publik GitHub.", "Githubster hanya menampilkan data. Alat ini tidak mengikuti atau berhenti mengikuti akun atas nama Anda."] },
      ],
      faqs: [
        { question: "Apakah hasil menunjukkan siapa yang berhenti mengikuti kemarin?", answer: "Tidak. Ini adalah perbandingan daftar saat ini, bukan catatan perubahan pengikut. Waktu tindakan sebelumnya tidak tersedia dalam hasil." },
        { question: "Mengapa profil besar gagal dimuat?", answer: "Daftar besar membutuhkan lebih banyak halaman API. Jika permintaan yang tersedia tidak cukup, Githubster memberi tahu Anda. Tunggu batas direset atau tambahkan token opsional." },
      ],
    },
    {
      slug: "github-mutual-followers",
      intro: "Koneksi mutual adalah akun yang muncul di daftar pengikut sekaligus daftar akun yang diikuti oleh suatu profil. Githubster menemukan irisan kedua daftar ini dan menampilkannya secara terpisah.",
      highlights: ["Hubungan dua arah", "Data publik GitHub", "Tautan langsung ke profil"],
      sections: [
        { heading: "Cara menentukan koneksi mutual", paragraphs: ["Jika Anda mengikuti seorang pengembang dan ia mengikuti Anda, hubungan itu mutual. Berada dalam organisasi yang sama, berkontribusi pada repositori yang sama, atau memberi bintang tidak otomatis berarti saling mengikuti.", "Peta Githubster menampilkan sampel hubungan langsung dengan profil yang diperiksa. Peta tersebut tidak menyatakan bahwa akun-akun yang ditampilkan juga saling mengikuti satu sama lain."] },
        { heading: "Melihat daftar mutual", paragraphs: ["Cari profil publik di beranda Githubster, lalu buka tab Mutual. Pencarian dan pengurutan membantu Anda menemukan pengembang tertentu dalam daftar yang besar.", "Hasil mencerminkan data publik yang dikembalikan GitHub ketika pemeriksaan dijalankan. Jalankan pemeriksaan kembali untuk meminta data yang lebih baru."] },
      ],
      faqs: [
        { question: "Apakah memberi bintang termasuk koneksi mutual?", answer: "Tidak. Bintang berkaitan dengan repositori, sedangkan mengikuti berkaitan dengan akun. Koneksi mutual berarti akun tersebut ada di kedua daftar profil." },
        { question: "Apakah token diperlukan untuk menemukan mutual?", answer: "Token opsional untuk data publik. Token membantu jika ukuran daftar atau sisa batas API tidak cukup untuk pemeriksaan tanpa autentikasi." },
      ],
    },
    {
      slug: "github-profile-overview",
      intro: "Selain membandingkan hubungan pengikut, Githubster merangkum repositori publik: jumlah proyek sendiri, total bintang, serta bahasa yang dikelompokkan berdasarkan bintang repositori.",
      highlights: ["Repositori publik milik profil", "Jumlah bintang", "Bahasa berdasarkan bintang"],
      sections: [
        { heading: "Data yang masuk dalam ringkasan", paragraphs: ["Repositori fork dikecualikan dari ringkasan proyek sendiri. Untuk repositori publik lainnya, Githubster menjumlahkan bintang dan mengelompokkan repositori berdasarkan bahasa utama yang diberikan GitHub.", "Ukuran bahasa ini bukan jumlah baris kode, tingkat kemampuan pengembang, atau seluruh kontribusinya. Ini adalah ringkasan repositori yang tersedia beserta bintangnya."] },
        { heading: "Jika metrik tidak tersedia", paragraphs: ["Ketika data repositori tidak dapat diambil secara lengkap, Githubster menandai metrik sebagai tidak tersedia. Jawaban API yang tidak lengkap tidak diganti dengan angka nol yang menyesatkan.", "Masukkan nama pengguna di beranda. Ringkasan muncul bersama hasil hubungan pengikut jika GitHub mengembalikan data publik yang diperlukan."] },
      ],
      faqs: [
        { question: "Apakah repositori fork dihitung?", answer: "Fork dikecualikan dari ringkasan repositori sendiri agar hasil lebih mewakili proyek publik milik profil tersebut." },
        { question: "Bagaimana bahasa dikelompokkan?", answer: "Githubster menggunakan bahasa utama repositori dari GitHub dan membobot kelompok berdasarkan jumlah bintang. Ini bukan analisis volume kode sumber." },
      ],
    },
    {
      slug: "what-is-github",
      intro: "GitHub adalah platform untuk menyimpan repositori Git dan berkolaborasi dalam pengembangan perangkat lunak. Platform ini menggabungkan kontrol versi dengan peninjauan perubahan, pembahasan tugas, proyek publik, dan profil pengembang.",
      highlights: ["Menyimpan repositori Git", "Meninjau perubahan bersama", "Proyek dan komunitas sumber terbuka"],
      sections: [
        { heading: "Perbedaan Git dan GitHub", paragraphs: ["Git adalah sistem kontrol versi terdistribusi yang menyimpan riwayat perubahan berkas dan dapat digunakan tanpa GitHub. GitHub adalah layanan daring yang menghosting repositori Git serta menambahkan alat kolaborasi."] },
        { heading: "Repositori, issues, dan pull request", paragraphs: ["Repositori dapat berisi kode, dokumentasi, dan riwayat rilis. Issues digunakan untuk membahas masalah atau tugas. Pull request mengusulkan perubahan agar dapat ditinjau sebelum digabungkan ke cabang utama.", "Bintang membantu menandai repositori yang menarik. Mengikuti pengguna berkaitan dengan profilnya; hubungan ini berbeda dari memberi bintang pada sebuah proyek."] },
        { heading: "Hubungan Githubster dengan GitHub", paragraphs: ["Githubster adalah proyek sumber terbuka yang terpisah. Alat ini memakai API publik GitHub untuk membandingkan pengikut dan akun yang diikuti. Anda tidak perlu memindahkan repositori atau membuat akun Githubster."] },
      ],
      faqs: [
        { question: "Apakah Git dan GitHub sama?", answer: "Tidak. Git menangani kontrol versi, sedangkan GitHub menghosting repositori Git secara daring dan menyediakan alat pengembangan bersama." },
        { question: "Apakah Githubster layanan resmi GitHub?", answer: "Tidak. Githubster adalah proyek sumber terbuka terpisah yang menggunakan data publik GitHub melalui API." },
      ],
    },
    {
      slug: "github-followers-vs-following",
      intro: "Pengikut adalah akun yang mengikuti sebuah profil. Daftar diikuti berisi akun yang dipilih oleh pemilik profil untuk diikuti. Kedua daftar ini berdiri sendiri: mengikuti seseorang tidak harus saling mengikuti.",
      highlights: ["Pengikut mengikuti Anda", "Diikuti adalah pilihan Anda", "Mutual muncul di kedua daftar"],
      sections: [
        { heading: "Hubungan satu arah dan dua arah", paragraphs: ["Seseorang dapat mengikuti Anda walaupun Anda tidak mengikutinya. Jika kedua akun saling mengikuti, hubungannya mutual. Hubungan satu arah saja bukan bukti bahwa seseorang pernah berhenti mengikuti."] },
        { heading: "Hasil perbandingan daftar", paragraphs: ["Irisan daftar pengikut dan diikuti menghasilkan koneksi mutual. Akun yang hanya ada dalam daftar diikuti masuk ke Tidak mengikuti balik. Akun yang hanya ada dalam daftar pengikut masuk ke Belum Anda ikuti.", "Arah perbandingan penting karena kedua selisih ini menjawab pertanyaan berbeda dan dapat memiliki jumlah yang berbeda."] },
        { heading: "Membandingkan daftar dengan Githubster", paragraphs: ["Masukkan nama pengguna publik, jalankan pemeriksaan, lalu pilih tab hasil yang diperlukan. Githubster mengelompokkan daftar saat ini dan menyediakan tautan ke setiap profil yang ditampilkan."] },
      ],
      faqs: [
        { question: "Bisakah seseorang menjadi pengikut tanpa saya ikuti balik?", answer: "Ya. Hubungan mengikuti di GitHub bisa satu arah. Seorang pengikut tidak harus ada dalam daftar akun yang Anda ikuti." },
        { question: "Apakah daftar ini menunjukkan riwayat berhenti mengikuti?", answer: "Tidak. Perbandingan daftar saat ini menunjukkan arah hubungan yang ada. Tanpa riwayat sebelumnya, waktu dan tindakan berhenti mengikuti tidak dapat dipastikan." },
      ],
    },
    {
      slug: "github-api-rate-limits-for-followers",
      intro: "API GitHub mengembalikan pengikut dan akun yang diikuti dalam beberapa halaman. Daftar yang lebih panjang membutuhkan lebih banyak permintaan. Batas yang tersedia bergantung pada autentikasi dan permintaan yang sudah digunakan.",
      highlights: ["Daftar dimuat per halaman", "Pemeriksaan sisa batas API", "Token GitHub opsional"],
      sections: [
        { heading: "Mengapa dibutuhkan beberapa permintaan", paragraphs: ["Daftar GitHub mendukung hingga 100 akun per halaman. Sebagai contoh, 250 pengikut membutuhkan tiga halaman daftar pengikut. Permintaan tambahan diperlukan untuk profil, daftar diikuti, dan informasi repositori yang tersedia.", "Tanpa autentikasi, batas utama biasanya 60 permintaan per jam per alamat IP. Token pribadi biasanya memberikan 5.000 permintaan per jam untuk pengguna. GitHub juga menerapkan batas frekuensi tambahan."] },
        { heading: "Kapan menambahkan token", paragraphs: ["Githubster memeriksa ukuran daftar dan sisa batas sebelum mengambil seluruh data. Jika batas tidak cukup, tunggu hingga direset atau tambahkan token. Pemeriksaan data publik tidak memerlukan izin menulis repositori."] },
        { heading: "Cara token digunakan", paragraphs: ["Token tetap berada di tab saat ini dan dikirim langsung ke GitHub untuk permintaan API. Token tidak disimpan di localStorage atau dikirim ke server Githubster. Menutup atau memuat ulang halaman akan mengosongkannya."] },
      ],
      faqs: [
        { question: "Apakah token wajib untuk memeriksa pengikut?", answer: "Tidak. Data publik dapat diminta tanpa token selama batas API tanpa autentikasi masih mencukupi." },
        { question: "Mengapa batas masih bisa tercapai dengan token?", answer: "Batas pengguna mungkin sudah dipakai oleh permintaan lain. GitHub juga menerapkan batas frekuensi tambahan, sehingga token tidak memberikan akses tanpa batas." },
      ],
    },
  ]),
};
