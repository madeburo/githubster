import type { Locale } from "./i18n";
import type { SeoPage } from "./seo-content";
import { translations } from "./translations";

type Copy = readonly [h1: string, body: string];
type CopyBySlug = Record<string, Copy>;

export const seoLabels: Record<Locale, { tools: string; guides: string; faq: string }> = {
  en: { tools: "Tools", guides: "Guides", faq: "FAQ" },
  de: { tools: "Werkzeuge", guides: "Ratgeber", faq: "Häufige Fragen" },
  fr: { tools: "Outils", guides: "Guides", faq: "Questions fréquentes" },
  es: { tools: "Herramientas", guides: "Guías", faq: "Preguntas frecuentes" },
  it: { tools: "Strumenti", guides: "Guide", faq: "Domande frequenti" },
  pt: { tools: "Ferramentas", guides: "Guias", faq: "Perguntas frequentes" },
  nl: { tools: "Tools", guides: "Handleidingen", faq: "Veelgestelde vragen" },
  pl: { tools: "Narzędzia", guides: "Poradniki", faq: "Częste pytania" },
  da: { tools: "Værktøjer", guides: "Vejledninger", faq: "Ofte stillede spørgsmål" },
  tr: { tools: "Araçlar", guides: "Rehberler", faq: "Sık sorulan sorular" },
  uk: { tools: "Інструменти", guides: "Посібники", faq: "Поширені запитання" },
  zh: { tools: "工具", guides: "指南", faq: "常见问题" },
  ja: { tools: "ツール", guides: "ガイド", faq: "よくある質問" },
  ko: { tools: "도구", guides: "가이드", faq: "자주 묻는 질문" },
  he: { tools: "כלים", guides: "מדריכים", faq: "שאלות נפוצות" },
  ar: { tools: "الأدوات", guides: "الأدلة", faq: "الأسئلة الشائعة" },
};

export function seoLanguageAlternates(path: string): Record<string, string> {
  return {
    "x-default": `https://www.githubster.com${path}`,
    ...Object.fromEntries(
      (["en", ...Object.keys(copy)] as Locale[]).map((locale) => [
        locale,
        `https://www.githubster.com${locale === "en" ? "" : `/${locale}`}${path}`,
      ]),
    ),
  };
}

const copy: Record<Exclude<Locale, "en">, CopyBySlug> = {
  de: {
    "github-followers-checker": ["GitHub-Follower-Checker", "Vergleiche öffentliche Follower- und Following-Listen. Githubster gruppiert die aktuellen Daten in gegenseitige Verbindungen, fehlende Rückfollows und Personen, denen du noch nicht folgst."],
    "github-not-following-back": ["Wer folgt dir auf GitHub nicht zurück?", "Sieh, welchen öffentlichen Konten du folgst, die dir derzeit nicht zurückfolgen. Das Ergebnis ist eine aktuelle Momentaufnahme und kein historisches Unfollow-Tracking."],
    "github-mutual-followers": ["Checker für gegenseitige GitHub-Follower", "Finde Konten, die sowohl in der öffentlichen Follower- als auch in der Following-Liste erscheinen, und erkenne aktive Beziehungen zu Maintainerinnen und Mitwirkenden."],
    "github-profile-overview": ["GitHub-Profilübersicht", "Sieh öffentliche Repositories, Sterne, wichtige Sprachen und Follower-Beziehungen. Unvollständige Repository-Daten werden als nicht verfügbar statt als Null angezeigt."],
    "github-followers-vs-following": ["GitHub-Follower und Following: Was ist der Unterschied?", "Follower folgen einem Profil; Following sind die Konten, denen das Profil folgt. Konten in beiden Listen sind gegenseitige Verbindungen."],
    "github-api-rate-limits-for-followers": ["GitHub-API-Limits für Follower-Listen", "Große Listen benötigen mehrere paginierte API-Anfragen. Ein optionaler Token kann das Limit erhöhen und bleibt nur in der aktuellen Sitzung."],
  },
  fr: {
    "github-followers-checker": ["Outil de vérification des abonnés GitHub", "Comparez les listes publiques d’abonnés et d’abonnements. Githubster classe les données actuelles en relations réciproques, comptes sans retour et abonnés que vous ne suivez pas encore."],
    "github-not-following-back": ["Qui ne vous suit pas en retour sur GitHub ?", "Découvrez les comptes publics que vous suivez et qui ne vous suivent pas actuellement. Le résultat est un instantané actuel, pas un historique des désabonnements."],
    "github-mutual-followers": ["Vérificateur d’abonnements réciproques GitHub", "Trouvez les comptes présents dans les deux listes publiques et repérez rapidement les mainteneurs, contributeurs et collègues avec une relation réciproque."],
    "github-profile-overview": ["Aperçu d’un profil GitHub", "Consultez les dépôts publics, les étoiles, les principaux langages et les relations entre abonnés. Les données incomplètes sont indiquées comme indisponibles, jamais comme de faux zéros."],
    "github-followers-vs-following": ["Abonnés et abonnements GitHub : quelle différence ?", "Les abonnés suivent un profil ; les abonnements sont les comptes suivis par ce profil. Un compte présent dans les deux listes est réciproque."],
    "github-api-rate-limits-for-followers": ["Limites de l’API GitHub pour les listes d’abonnés", "Les longues listes nécessitent plusieurs requêtes paginées. Un jeton facultatif peut augmenter la limite et reste uniquement dans la session courante."],
  },
  es: {
    "github-followers-checker": ["Comprobador de seguidores de GitHub", "Compara las listas públicas de seguidores y seguidos. Githubster agrupa los datos actuales en conexiones mutuas, cuentas sin seguimiento recíproco y seguidores que aún no sigues."],
    "github-not-following-back": ["¿Quién no te sigue de vuelta en GitHub?", "Descubre qué cuentas públicas sigues y no te siguen actualmente. El resultado es una instantánea actual, no un historial de quién dejó de seguirte."],
    "github-mutual-followers": ["Comprobador de seguidores mutuos de GitHub", "Encuentra cuentas presentes en ambas listas públicas e identifica mantenedores, colaboradores y colegas con una relación recíproca."],
    "github-profile-overview": ["Resumen del perfil de GitHub", "Consulta repositorios públicos, estrellas, lenguajes principales y relaciones de seguidores. Los datos incompletos aparecen como no disponibles, nunca como ceros falsos."],
    "github-followers-vs-following": ["Seguidores y seguidos en GitHub: ¿cuál es la diferencia?", "Los seguidores siguen un perfil; los seguidos son las cuentas que ese perfil sigue. Las cuentas presentes en ambas listas son mutuas."],
    "github-api-rate-limits-for-followers": ["Límites de la API de GitHub para listas de seguidores", "Las listas grandes requieren varias solicitudes paginadas. Un token opcional puede aumentar el límite y permanece solo en la sesión actual."],
  },
  it: {
    "github-followers-checker": ["Controllo follower GitHub", "Confronta gli elenchi pubblici di follower e profili seguiti. Githubster separa rapporti reciproci, account che non ti seguono e follower che non segui ancora."],
    "github-not-following-back": ["Chi non ti segue su GitHub?", "Scopri quali account pubblici segui ma non ti seguono al momento. Il risultato è un’istantanea attuale, non uno storico degli unfollow."],
    "github-mutual-followers": ["Controllo follower reciproci su GitHub", "Trova gli account presenti in entrambi gli elenchi pubblici e individua maintainer, collaboratori e colleghi con un rapporto reciproco."],
    "github-profile-overview": ["Panoramica del profilo GitHub", "Visualizza repository pubblici, stelle, linguaggi principali e relazioni tra follower. I dati incompleti risultano non disponibili, mai come falsi zeri."],
    "github-followers-vs-following": ["Follower e profili seguiti su GitHub: qual è la differenza?", "I follower seguono un profilo; i profili seguiti sono gli account scelti dal profilo. Gli account presenti in entrambi gli elenchi sono reciproci."],
    "github-api-rate-limits-for-followers": ["Limiti API GitHub per gli elenchi di follower", "Gli elenchi grandi richiedono più richieste paginate. Un token facoltativo può aumentare il limite e resta solo nella sessione corrente."],
  },
  pt: {
    "github-followers-checker": ["Verificador de seguidores do GitHub", "Compare listas públicas de seguidores e contas seguidas. O Githubster separa conexões mútuas, contas que não seguem de volta e seguidores que você ainda não segue."],
    "github-not-following-back": ["Quem não segue você de volta no GitHub?", "Veja quais contas públicas você segue e não seguem você atualmente. O resultado é um retrato atual, não um histórico de unfollows."],
    "github-mutual-followers": ["Verificador de seguidores mútuos do GitHub", "Encontre contas presentes nas duas listas públicas e identifique mantenedores, colaboradores e colegas com uma relação recíproca."],
    "github-profile-overview": ["Visão geral do perfil do GitHub", "Veja repositórios públicos, estrelas, principais linguagens e relações de seguidores. Dados incompletos aparecem como indisponíveis, nunca como zeros falsos."],
    "github-followers-vs-following": ["Seguidores e contas seguidas no GitHub: qual é a diferença?", "Seguidores acompanham um perfil; contas seguidas são aquelas que o perfil acompanha. Contas nas duas listas são mútuas."],
    "github-api-rate-limits-for-followers": ["Limites da API do GitHub para listas de seguidores", "Listas grandes exigem várias solicitações paginadas. Um token opcional pode aumentar o limite e fica apenas na sessão atual."],
  },
  nl: {
    "github-followers-checker": ["GitHub-volgerschecker", "Vergelijk openbare lijsten met volgers en gevolgde accounts. Githubster verdeelt de huidige gegevens in wederzijdse connecties, accounts die niet terugvolgen en volgers die je nog niet volgt."],
    "github-not-following-back": ["Wie volgt je niet terug op GitHub?", "Bekijk welke openbare accounts jij volgt maar jou momenteel niet terugvolgen. Het resultaat is een actuele momentopname, geen geschiedenis van ontvolgingen."],
    "github-mutual-followers": ["Checker voor wederzijdse GitHub-volgers", "Vind accounts in beide openbare lijsten en ontdek maintainers, bijdragers en collega’s met een wederzijdse relatie."],
    "github-profile-overview": ["Overzicht van een GitHub-profiel", "Bekijk openbare repositories, sterren, belangrijkste talen en volgersrelaties. Onvolledige gegevens worden als niet beschikbaar getoond, nooit als valse nullen."],
    "github-followers-vs-following": ["Volgers en gevolgde accounts op GitHub: wat is het verschil?", "Volgers volgen een profiel; gevolgde accounts worden door het profiel gevolgd. Accounts in beide lijsten zijn wederzijds."],
    "github-api-rate-limits-for-followers": ["GitHub API-limieten voor volgerslijsten", "Grote lijsten vereisen meerdere gepagineerde aanvragen. Een optioneel token kan de limiet verhogen en blijft alleen in de huidige sessie."],
  },
  pl: {
    "github-followers-checker": ["Sprawdzanie obserwujących na GitHubie", "Porównaj publiczne listy obserwujących i obserwowanych. Githubster rozdziela wzajemne kontakty, konta bez obserwacji zwrotnej i osoby, których jeszcze nie obserwujesz."],
    "github-not-following-back": ["Kto nie obserwuje Cię z powrotem na GitHubie?", "Sprawdź publiczne konta, które obserwujesz, a które obecnie nie obserwują Cię z powrotem. To bieżąca migawka, nie historia zmian."],
    "github-mutual-followers": ["Wzajemni obserwujący na GitHubie", "Znajdź konta obecne na obu publicznych listach oraz maintainerów, współtwórców i znajomych, z którymi relacja działa w obie strony."],
    "github-profile-overview": ["Przegląd profilu GitHub", "Zobacz publiczne repozytoria, gwiazdki, języki i relacje obserwujących. Niepełne dane są oznaczane jako niedostępne, nigdy jako fałszywe zera."],
    "github-followers-vs-following": ["Obserwujący a obserwowani na GitHubie: jaka jest różnica?", "Obserwujący śledzą profil, a obserwowani to konta śledzone przez profil. Konta na obu listach są wzajemne."],
    "github-api-rate-limits-for-followers": ["Limity API GitHuba dla list obserwujących", "Duże listy wymagają wielu stronicowanych zapytań. Opcjonalny token może zwiększyć limit i pozostaje tylko w bieżącej sesji."],
  },
  da: {
    "github-followers-checker": ["Kontrol af GitHub-følgere", "Sammenlign offentlige lister over følgere og fulgte. Githubster opdeler aktuelle data i gensidige forbindelser, konti der ikke følger tilbage, og følgere du ikke følger endnu."],
    "github-not-following-back": ["Hvem følger dig ikke tilbage på GitHub?", "Se hvilke offentlige konti du følger, som ikke følger dig tilbage lige nu. Resultatet er et aktuelt øjebliksbillede, ikke historik."],
    "github-mutual-followers": ["Kontrol af gensidige GitHub-følgere", "Find konti på begge offentlige lister, og se maintainere, bidragydere og kolleger med en gensidig forbindelse."],
    "github-profile-overview": ["Oversigt over GitHub-profil", "Se offentlige repositories, stjerner, sprog og følgerrelationer. Ufuldstændige data vises som utilgængelige, aldrig som falske nuller."],
    "github-followers-vs-following": ["Følgere og fulgte på GitHub: Hvad er forskellen?", "Følgere følger en profil; fulgte er konti, som profilen følger. Konti på begge lister er gensidige."],
    "github-api-rate-limits-for-followers": ["GitHub API-grænser for følgerlister", "Store lister kræver flere sideopdelte forespørgsler. Et valgfrit token kan hæve grænsen og bliver kun i den aktuelle session."],
  },
  tr: {
    "github-followers-checker": ["GitHub takipçi kontrolü", "Herkese açık takipçi ve takip edilen listelerini karşılaştırın. Githubster güncel verileri karşılıklı bağlantılar, geri takip etmeyenler ve henüz takip etmedikleriniz olarak ayırır."],
    "github-not-following-back": ["GitHub’da sizi kim geri takip etmiyor?", "Takip ettiğiniz ancak şu anda sizi takip etmeyen herkese açık hesapları görün. Sonuç güncel bir anlık görüntüdür, geçmiş kaydı değildir."],
    "github-mutual-followers": ["Karşılıklı GitHub takipçileri kontrolü", "Her iki açık listede bulunan hesapları ve iki yönlü bağlantınız olan bakımcıları, katkıcıları ve meslektaşları bulun."],
    "github-profile-overview": ["GitHub profil özeti", "Herkese açık depoları, yıldızları, dilleri ve takipçi ilişkilerini görün. Eksik veriler sahte sıfırlar yerine kullanılamıyor olarak gösterilir."],
    "github-followers-vs-following": ["GitHub’da takipçiler ve takip edilenler: Fark nedir?", "Takipçiler bir profili izler; takip edilenler profilin izlediği hesaplardır. İki listede bulunan hesaplar karşılıklıdır."],
    "github-api-rate-limits-for-followers": ["Takipçi listeleri için GitHub API sınırları", "Büyük listeler birden fazla sayfalı istek gerektirir. İsteğe bağlı token sınırı artırabilir ve yalnızca geçerli oturumda kalır."],
  },
  uk: {
    "github-followers-checker": ["Перевірка підписників GitHub", "Порівнюйте публічні списки підписників і підписок. Githubster розділяє взаємні зв’язки, акаунти без підписки у відповідь і людей, на яких ви ще не підписані."],
    "github-not-following-back": ["Хто не підписаний на вас у GitHub у відповідь?", "Перегляньте публічні акаунти, на які ви підписані, але які зараз не підписані на вас. Це поточний знімок, а не історія відписок."],
    "github-mutual-followers": ["Перевірка взаємних підписників GitHub", "Знайдіть акаунти в обох публічних списках, а також мейнтейнерів, учасників і колег із двостороннім зв’язком."],
    "github-profile-overview": ["Огляд профілю GitHub", "Переглядайте публічні репозиторії, зірки, мови та зв’язки. Неповні дані позначаються як недоступні, а не як хибні нулі."],
    "github-followers-vs-following": ["Підписники й підписки в GitHub: у чому різниця?", "Підписники стежать за профілем, а підписки — це акаунти, за якими стежить профіль. Акаунти в обох списках є взаємними."],
    "github-api-rate-limits-for-followers": ["Ліміти GitHub API для списків підписників", "Великі списки потребують кількох сторінкових запитів. Необов’язковий токен може збільшити ліміт і залишається лише в поточному сеансі."],
  },
  zh: {
    "github-followers-checker": ["GitHub 关注者检查器", "比较公开的关注者与正在关注列表。Githubster 会将当前数据分为互相关注、未回关你的账号，以及你尚未关注的关注者。"],
    "github-not-following-back": ["谁没有在 GitHub 上回关你？", "查看你已关注、但目前没有回关你的公开账号。结果只是当前快照，并不是取消关注的历史记录。"],
    "github-mutual-followers": ["GitHub 互相关注检查器", "查找同时出现在两个公开列表中的账号，并快速发现与你保持双向联系的维护者、贡献者和同行。"],
    "github-profile-overview": ["GitHub 个人资料概览", "查看公开仓库、Star、主要语言和关注关系。数据不完整时会显示为不可用，而不是误导性的零。"],
    "github-followers-vs-following": ["GitHub 关注者与正在关注：有什么区别？", "关注者是关注该资料的账号；正在关注是该资料关注的账号。同时出现在两个列表中的账号属于互相关注。"],
    "github-api-rate-limits-for-followers": ["关注者列表的 GitHub API 速率限制", "较大的列表需要多次分页请求。可选令牌可以提高限额，并且只保留在当前会话中。"],
  },
  ja: {
    "github-followers-checker": ["GitHub フォロワーチェッカー", "公開フォロワーとフォロー中の一覧を比較します。Githubster は現在のデータを、相互フォロー、未フォローバック、まだフォローしていない相手に分類します。"],
    "github-not-following-back": ["GitHub でフォローバックされていない相手は？", "フォロー中で、現在あなたをフォローしていない公開アカウントを確認できます。結果は現在のスナップショットであり、解除履歴ではありません。"],
    "github-mutual-followers": ["GitHub 相互フォロワーチェッカー", "両方の公開一覧にあるアカウントと、双方向につながるメンテナー、コントリビューター、仲間を見つけます。"],
    "github-profile-overview": ["GitHub プロフィール概要", "公開リポジトリ、Star、主な言語、フォロー関係を確認できます。不完全なデータは誤ったゼロではなく利用不可と表示されます。"],
    "github-followers-vs-following": ["GitHub のフォロワーとフォロー中の違い", "フォロワーはプロフィールをフォローするアカウント、フォロー中はプロフィールがフォローするアカウントです。両方にあれば相互フォローです。"],
    "github-api-rate-limits-for-followers": ["フォロワー一覧に関する GitHub API のレート制限", "大きな一覧では複数のページ取得が必要です。任意トークンで上限を増やせ、現在のセッション内だけに保持されます。"],
  },
  ko: {
    "github-followers-checker": ["GitHub 팔로워 확인 도구", "공개 팔로워와 팔로잉 목록을 비교하세요. Githubster는 현재 데이터를 맞팔, 나를 팔로우하지 않는 계정, 내가 아직 팔로우하지 않은 사람으로 나눕니다."],
    "github-not-following-back": ["GitHub에서 나를 맞팔로우하지 않는 사람은?", "내가 팔로우하지만 현재 나를 팔로우하지 않는 공개 계정을 확인하세요. 결과는 현재 스냅샷이며 팔로우 취소 기록이 아닙니다."],
    "github-mutual-followers": ["GitHub 맞팔로워 확인 도구", "두 공개 목록에 모두 있는 계정과 서로 연결된 메인테이너, 기여자, 동료를 찾습니다."],
    "github-profile-overview": ["GitHub 프로필 개요", "공개 저장소, 스타, 주요 언어와 팔로워 관계를 확인하세요. 불완전한 데이터는 잘못된 0이 아니라 사용할 수 없음으로 표시됩니다."],
    "github-followers-vs-following": ["GitHub 팔로워와 팔로잉의 차이", "팔로워는 프로필을 구독하는 계정이고 팔로잉은 프로필이 구독하는 계정입니다. 두 목록에 모두 있으면 맞팔입니다."],
    "github-api-rate-limits-for-followers": ["팔로워 목록의 GitHub API 사용량 제한", "큰 목록은 여러 페이지 요청이 필요합니다. 선택적 토큰으로 한도를 높일 수 있으며 현재 세션에만 보관됩니다."],
  },
  he: {
    "github-followers-checker": ["בודק עוקבים ב-GitHub", "השוו רשימות ציבוריות של עוקבים ונעקבים. Githubster מחלק את הנתונים לקשרים הדדיים, חשבונות שלא עוקבים בחזרה ועוקבים שעדיין אינכם עוקבים אחריהם."],
    "github-not-following-back": ["מי לא עוקב אחריכם בחזרה ב-GitHub?", "ראו אילו חשבונות ציבוריים אתם עוקבים אחריהם אך אינם עוקבים אחריכם כעת. התוצאה היא תמונת מצב ולא היסטוריית ביטולי מעקב."],
    "github-mutual-followers": ["בודק עוקבים הדדיים ב-GitHub", "מצאו חשבונות שמופיעים בשתי הרשימות הציבוריות ומתחזקים, תורמים ועמיתים שהקשר איתם פועל בשני הכיוונים."],
    "github-profile-overview": ["סקירת פרופיל GitHub", "ראו מאגרים ציבוריים, כוכבים, שפות וקשרי עוקבים. נתונים חלקיים מוצגים כלא זמינים ולא כאפסים מטעים."],
    "github-followers-vs-following": ["עוקבים ונעקבים ב-GitHub: מה ההבדל?", "עוקבים הם חשבונות שעוקבים אחר פרופיל; נעקבים הם החשבונות שהפרופיל עוקב אחריהם. חשבון בשתי הרשימות הוא קשר הדדי."],
    "github-api-rate-limits-for-followers": ["מגבלות GitHub API לרשימות עוקבים", "רשימות גדולות דורשות כמה בקשות מדופדפות. אסימון אופציונלי יכול להגדיל את המכסה ונשאר רק בהפעלה הנוכחית."],
  },
  ar: {
    "github-followers-checker": ["أداة التحقق من متابعي GitHub", "قارن القوائم العامة للمتابعين والحسابات المتابَعة. تقسّم Githubster البيانات إلى علاقات متبادلة وحسابات لا تتابعك وأشخاص لا تتابعهم بعد."],
    "github-not-following-back": ["من لا يتابعك بالمقابل على GitHub؟", "اعرف الحسابات العامة التي تتابعها ولا تتابعك حاليًا. النتيجة لقطة حالية وليست سجلًا لإلغاء المتابعة."],
    "github-mutual-followers": ["أداة التحقق من المتابعة المتبادلة على GitHub", "اعثر على الحسابات الموجودة في القائمتين العامتين وعلى المشرفين والمساهمين والزملاء الذين تربطك بهم علاقة ثنائية."],
    "github-profile-overview": ["نظرة عامة على ملف GitHub", "شاهد المستودعات العامة والنجوم واللغات وعلاقات المتابعين. تظهر البيانات الناقصة كغير متاحة بدلًا من أصفار مضللة."],
    "github-followers-vs-following": ["المتابعون والحسابات المتابَعة على GitHub: ما الفرق؟", "المتابعون يتابعون الملف؛ أما المتابَعة فهي الحسابات التي يتابعها الملف. الحساب الموجود في القائمتين علاقة متبادلة."],
    "github-api-rate-limits-for-followers": ["حدود GitHub API لقوائم المتابعين", "تتطلب القوائم الكبيرة عدة طلبات مرقّمة الصفحات. يمكن للرمز الاختياري زيادة الحد ويبقى في الجلسة الحالية فقط."],
  },
};

function highlights(locale: Locale, slug: string): string[] {
  const t = translations[locale];
  if (slug === "github-followers-checker" || slug === "github-followers-vs-following") return [t.stats.followers, t.stats.following, t.stats.mutuals];
  if (slug === "github-not-following-back") return [t.seo.feature1Title, t.tabs.following, t.seo.feature3Title];
  if (slug === "github-mutual-followers") return [t.tabs.mutuals, t.stats.followers, t.stats.following];
  if (slug === "github-profile-overview") return [t.profileOverview.repositories, t.profileOverview.totalStars, t.profileOverview.topLanguages];
  return [t.error.rateLimit, t.search.tokenToggle, t.seo.feature3Title];
}

export function getLocalizedSeoPage(locale: Locale, page: SeoPage): SeoPage {
  if (locale === "en") return page;
  const localized = copy[locale][page.slug];
  if (!localized) return page;
  const [h1, body] = localized;
  const t = translations[locale];
  return {
    ...page,
    title: `${h1} | Githubster`,
    description: body,
    h1,
    intro: body,
    highlights: highlights(locale, page.slug),
    sections: [{ heading: h1, paragraphs: [body] }],
    faqs: [
      { question: t.search.tokenToggle, answer: t.search.tokenPrivacy },
      { question: t.error.rateLimit, answer: t.error.rateLimitDesc },
    ],
  };
}
