import type { Locale } from "./i18n";

export type ExplorerLabels = {
  overview: string;
  home: string;
  compare: string;
  insights: string;
  about: string;
  example: string;
  publicProfile: string;
  /** `{user}` is replaced with the GitHub login. */
  peopleFollows: string;
  viewAll: string;
  viewsNav: string;
  moreNav: string;
  /** `{user}` is replaced with the GitHub login. */
  openProfile: string;
};

export const explorerLabels: Record<Locale, ExplorerLabels> = {
  en: { overview: "Overview", home: "Home", compare: "Compare", insights: "Insights", about: "About", example: "Example", publicProfile: "Public profile", peopleFollows: "People {user} follows", viewAll: "View all", viewsNav: "Network views", moreNav: "More", openProfile: "Open {user} on GitHub" },
  de: { overview: "Übersicht", home: "Start", compare: "Vergleichen", insights: "Einblicke", about: "Über", example: "Beispiel", publicProfile: "Öffentliches Profil", peopleFollows: "Personen, denen {user} folgt", viewAll: "Alle anzeigen", viewsNav: "Netzwerkansichten", moreNav: "Mehr", openProfile: "{user} auf GitHub öffnen" },
  fr: { overview: "Aperçu", home: "Accueil", compare: "Comparer", insights: "Statistiques", about: "À propos", example: "Exemple", publicProfile: "Profil public", peopleFollows: "Personnes suivies par {user}", viewAll: "Tout voir", viewsNav: "Vues du réseau", moreNav: "Plus", openProfile: "Ouvrir {user} sur GitHub" },
  es: { overview: "Resumen", home: "Inicio", compare: "Comparar", insights: "Estadísticas", about: "Acerca de", example: "Ejemplo", publicProfile: "Perfil público", peopleFollows: "Personas que sigue {user}", viewAll: "Ver todo", viewsNav: "Vistas de la red", moreNav: "Más", openProfile: "Abrir {user} en GitHub" },
  it: { overview: "Panoramica", home: "Home", compare: "Confronta", insights: "Statistiche", about: "Info", example: "Esempio", publicProfile: "Profilo pubblico", peopleFollows: "Persone seguite da {user}", viewAll: "Vedi tutti", viewsNav: "Viste della rete", moreNav: "Altro", openProfile: "Apri {user} su GitHub" },
  pt: { overview: "Visão geral", home: "Início", compare: "Comparar", insights: "Insights", about: "Sobre", example: "Exemplo", publicProfile: "Perfil público", peopleFollows: "Pessoas que {user} segue", viewAll: "Ver todos", viewsNav: "Visões da rede", moreNav: "Mais", openProfile: "Abrir {user} no GitHub" },
  nl: { overview: "Overzicht", home: "Home", compare: "Vergelijken", insights: "Inzichten", about: "Over", example: "Voorbeeld", publicProfile: "Openbaar profiel", peopleFollows: "Mensen die {user} volgt", viewAll: "Alles bekijken", viewsNav: "Netwerkweergaven", moreNav: "Meer", openProfile: "{user} openen op GitHub" },
  pl: { overview: "Przegląd", home: "Start", compare: "Porównaj", insights: "Statystyki", about: "O projekcie", example: "Przykład", publicProfile: "Profil publiczny", peopleFollows: "Osoby obserwowane przez {user}", viewAll: "Zobacz wszystkie", viewsNav: "Widoki sieci", moreNav: "Więcej", openProfile: "Otwórz {user} na GitHubie" },
  da: { overview: "Oversigt", home: "Hjem", compare: "Sammenlign", insights: "Indsigt", about: "Om", example: "Eksempel", publicProfile: "Offentlig profil", peopleFollows: "Personer, {user} følger", viewAll: "Se alle", viewsNav: "Netværksvisninger", moreNav: "Mere", openProfile: "Åbn {user} på GitHub" },
  sv: { overview: "Översikt", home: "Hem", compare: "Jämför", insights: "Insikter", about: "Om", example: "Exempel", publicProfile: "Offentlig profil", peopleFollows: "Personer som {user} följer", viewAll: "Visa alla", viewsNav: "Nätverksvyer", moreNav: "Mer", openProfile: "Öppna {user} på GitHub" },
  no: { overview: "Oversikt", home: "Hjem", compare: "Sammenlign", insights: "Innsikt", about: "Om", example: "Eksempel", publicProfile: "Offentlig profil", peopleFollows: "Personer {user} følger", viewAll: "Se alle", viewsNav: "Nettverksvisninger", moreNav: "Mer", openProfile: "Åpne {user} på GitHub" },
  cs: { overview: "Přehled", home: "Domů", compare: "Porovnat", insights: "Statistiky", about: "O projektu", example: "Příklad", publicProfile: "Veřejný profil", peopleFollows: "Koho sleduje {user}", viewAll: "Zobrazit vše", viewsNav: "Zobrazení sítě", moreNav: "Další", openProfile: "Otevřít {user} na GitHubu" },
  hu: { overview: "Áttekintés", home: "Kezdőlap", compare: "Összevetés", insights: "Elemzés", about: "Névjegy", example: "Példa", publicProfile: "Nyilvános profil", peopleFollows: "Akiket {user} követ", viewAll: "Összes", viewsNav: "Hálózati nézetek", moreNav: "Továbbiak", openProfile: "{user} megnyitása a GitHubon" },
  tr: { overview: "Genel bakış", home: "Ana sayfa", compare: "Karşılaştır", insights: "İstatistikler", about: "Hakkında", example: "Örnek", publicProfile: "Herkese açık profil", peopleFollows: "{user} kullanıcısının takip ettikleri", viewAll: "Tümünü gör", viewsNav: "Ağ görünümleri", moreNav: "Daha fazla", openProfile: "{user} profilini GitHub'da aç" },
  uk: { overview: "Огляд", home: "Головна", compare: "Порівняти", insights: "Аналітика", about: "Про проєкт", example: "Приклад", publicProfile: "Публічний профіль", peopleFollows: "На кого підписаний {user}", viewAll: "Переглянути всі", viewsNav: "Перегляди мережі", moreNav: "Більше", openProfile: "Відкрити {user} на GitHub" },
  zh: { overview: "概览", home: "首页", compare: "对比", insights: "洞察", about: "关于", example: "示例", publicProfile: "公开资料", peopleFollows: "{user} 关注的人", viewAll: "查看全部", viewsNav: "网络视图", moreNav: "更多", openProfile: "在 GitHub 上打开 {user}" },
  ja: { overview: "概要", home: "ホーム", compare: "比較", insights: "インサイト", about: "紹介", example: "例", publicProfile: "公開プロフィール", peopleFollows: "{user} がフォロー中", viewAll: "すべて表示", viewsNav: "ネットワーク表示", moreNav: "その他", openProfile: "GitHub で {user} を開く" },
  ko: { overview: "개요", home: "홈", compare: "비교", insights: "인사이트", about: "소개", example: "예시", publicProfile: "공개 프로필", peopleFollows: "{user}님이 팔로우하는 사람", viewAll: "모두 보기", viewsNav: "네트워크 보기", moreNav: "더 보기", openProfile: "GitHub에서 {user} 열기" },
  he: { overview: "סקירה", home: "בית", compare: "השוואה", insights: "תובנות", about: "אודות", example: "דוגמה", publicProfile: "פרופיל ציבורי", peopleFollows: "אנשים ש-{user} עוקב אחריהם", viewAll: "הצג הכול", viewsNav: "תצוגות רשת", moreNav: "עוד", openProfile: "פתיחת {user} ב-GitHub" },
  ar: { overview: "نظرة عامة", home: "الرئيسية", compare: "مقارنة", insights: "إحصاءات", about: "حول", example: "مثال", publicProfile: "ملف شخصي عام", peopleFollows: "الأشخاص الذين يتابعهم {user}", viewAll: "عرض الكل", viewsNav: "طرق عرض الشبكة", moreNav: "المزيد", openProfile: "فتح {user} على GitHub" },
};

export function withUser(template: string, user: string) {
  return template.replace("{user}", user);
}
