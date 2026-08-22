import type { Locale } from "./i18n";

export type PrivacyContent = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; text: string }[];
  precedence: string;
  questions: string;
  linkLabel: string;
};

export const privacyContent: Record<Locale, PrivacyContent> = {
  en: {
    title: "Privacy Policy",
    description: "How Githubster handles public GitHub data, optional tokens, preferences, analytics, and support widgets.",
    updated: "Last updated: August 22, 2026",
    sections: [
      { heading: "Browser-based processing", text: "Githubster processes public GitHub profile data and any optional access token in your browser. That information is not sent to Githubster application servers." },
      { heading: "GitHub requests and tokens", text: "Your browser makes requested API calls directly to GitHub. An optional token is not saved to localStorage and is cleared when the page is closed or reloaded." },
      { heading: "Preferences and analytics", text: "Theme and language preferences are stored locally in your browser. Umami is an open-source web analytics platform that respects user privacy. It uses no cookies, does not track people across websites, and does not collect personal data. It is GDPR compliant out of the box." },
      { heading: "Ko-fi and email", text: "Ko-fi handles interactions with its support widget under its own privacy practices. If you email us, we use your message and contact details only to reply and retain correspondence when reasonably needed." },
    ],
    precedence: "Translations are provided for convenience. If a translated version differs from the English version, the English version takes precedence.",
    questions: "Questions?",
    linkLabel: "Privacy",
  },
  de: {
    title: "Datenschutzerklärung", description: "So verarbeitet Githubster öffentliche GitHub-Daten, optionale Tokens, Einstellungen, Analysen und Support-Widgets.", updated: "Zuletzt aktualisiert: 22. August 2026",
    sections: [
      { heading: "Verarbeitung im Browser", text: "Githubster verarbeitet öffentliche GitHub-Profildaten und einen optionalen Zugriffstoken in deinem Browser. Diese Informationen werden nicht an Githubster-Anwendungsserver gesendet." },
      { heading: "GitHub-Anfragen und Tokens", text: "Dein Browser sendet die angeforderten API-Anfragen direkt an GitHub. Ein optionaler Token wird nicht in localStorage gespeichert und beim Schließen oder Neuladen der Seite gelöscht." },
      { heading: "Einstellungen und Analysen", text: "Design- und Spracheinstellungen werden lokal im Browser gespeichert. Umami ist eine quelloffene Webanalyse-Plattform, die die Privatsphäre respektiert. Sie verwendet keine Cookies, verfolgt Personen nicht über Websites hinweg und erhebt keine personenbezogenen Daten. Sie ist standardmäßig DSGVO-konform." },
      { heading: "Ko-fi und E-Mail", text: "Ko-fi verarbeitet Interaktionen mit dem Support-Widget nach den eigenen Datenschutzregeln. Bei einer E-Mail verwenden wir Nachricht und Kontaktdaten nur zur Antwort und bewahren die Korrespondenz auf, soweit dies angemessen erforderlich ist." },
    ], precedence: "Die Übersetzung dient der besseren Verständlichkeit. Bei Abweichungen von der englischen Fassung hat die englische Fassung Vorrang.", questions: "Fragen?", linkLabel: "Datenschutz",
  },
  fr: {
    title: "Politique de confidentialité", description: "Comment Githubster traite les données publiques GitHub, les jetons facultatifs, les préférences, les statistiques et les widgets de soutien.", updated: "Dernière mise à jour : 22 août 2026",
    sections: [
      { heading: "Traitement dans le navigateur", text: "Githubster traite les données publiques du profil GitHub et tout jeton d’accès facultatif dans votre navigateur. Ces informations ne sont pas envoyées aux serveurs applicatifs de Githubster." },
      { heading: "Requêtes GitHub et jetons", text: "Votre navigateur envoie directement à GitHub les requêtes API demandées. Le jeton facultatif n’est pas enregistré dans localStorage et est effacé à la fermeture ou au rechargement de la page." },
      { heading: "Préférences et statistiques", text: "Les préférences de thème et de langue sont stockées localement dans votre navigateur. Umami est une plateforme d’analyse web open source respectueuse de la vie privée. Elle n’utilise aucun cookie, ne suit pas les personnes d’un site à l’autre et ne collecte aucune donnée personnelle. Elle est conforme au RGPD par défaut." },
      { heading: "Ko-fi et e-mail", text: "Ko-fi traite les interactions avec son widget selon ses propres règles de confidentialité. Si vous nous écrivez, nous utilisons votre message et vos coordonnées uniquement pour répondre et conservons l’échange aussi longtemps que raisonnablement nécessaire." },
    ], precedence: "Les traductions sont fournies pour faciliter la lecture. En cas de différence avec la version anglaise, la version anglaise prévaut.", questions: "Des questions ?", linkLabel: "Confidentialité",
  },
  es: {
    title: "Política de privacidad", description: "Cómo gestiona Githubster los datos públicos de GitHub, tokens opcionales, preferencias, analítica y widgets de apoyo.", updated: "Última actualización: 22 de agosto de 2026",
    sections: [
      { heading: "Procesamiento en el navegador", text: "Githubster procesa los datos públicos del perfil de GitHub y cualquier token opcional en tu navegador. Esa información no se envía a los servidores de la aplicación Githubster." },
      { heading: "Solicitudes a GitHub y tokens", text: "Tu navegador realiza directamente en GitHub las solicitudes de API indicadas. El token opcional no se guarda en localStorage y se elimina al cerrar o recargar la página." },
      { heading: "Preferencias y analítica", text: "Las preferencias de tema e idioma se guardan localmente en tu navegador. Umami es una plataforma de analítica web de código abierto que respeta la privacidad. No utiliza cookies, no rastrea a las personas entre sitios y no recopila datos personales. Cumple el RGPD de forma predeterminada." },
      { heading: "Ko-fi y correo electrónico", text: "Ko-fi gestiona las interacciones con su widget según sus propias prácticas de privacidad. Si nos escribes, usamos tu mensaje y datos de contacto solo para responder y conservamos la correspondencia cuando sea razonablemente necesario." },
    ], precedence: "Las traducciones se ofrecen para facilitar la lectura. Si una traducción difiere de la versión inglesa, prevalece la versión inglesa.", questions: "¿Preguntas?", linkLabel: "Privacidad",
  },
  it: {
    title: "Informativa sulla privacy", description: "Come Githubster gestisce dati GitHub pubblici, token facoltativi, preferenze, analisi e widget di supporto.", updated: "Ultimo aggiornamento: 22 agosto 2026",
    sections: [
      { heading: "Elaborazione nel browser", text: "Githubster elabora nel browser i dati pubblici del profilo GitHub e l’eventuale token di accesso. Queste informazioni non vengono inviate ai server dell’applicazione Githubster." },
      { heading: "Richieste GitHub e token", text: "Il browser effettua le richieste API direttamente a GitHub. Il token facoltativo non viene salvato in localStorage e viene eliminato quando chiudi o ricarichi la pagina." },
      { heading: "Preferenze e analisi", text: "Le preferenze di tema e lingua sono memorizzate localmente nel browser. Umami è una piattaforma open source di analisi web rispettosa della privacy. Non usa cookie, non traccia le persone tra siti diversi e non raccoglie dati personali. È conforme al GDPR per impostazione predefinita." },
      { heading: "Ko-fi ed e-mail", text: "Ko-fi gestisce le interazioni con il proprio widget secondo le sue pratiche sulla privacy. Se ci scrivi, usiamo il messaggio e i recapiti solo per rispondere e conserviamo la corrispondenza quando ragionevolmente necessario." },
    ], precedence: "Le traduzioni sono fornite per comodità. In caso di differenze, prevale la versione inglese.", questions: "Domande?", linkLabel: "Privacy",
  },
  pt: {
    title: "Política de Privacidade", description: "Como o Githubster trata dados públicos do GitHub, tokens opcionais, preferências, análises e widgets de apoio.", updated: "Última atualização: 22 de agosto de 2026",
    sections: [
      { heading: "Processamento no navegador", text: "O Githubster processa no seu navegador os dados públicos do perfil do GitHub e qualquer token de acesso opcional. Essas informações não são enviadas aos servidores do aplicativo Githubster." },
      { heading: "Solicitações ao GitHub e tokens", text: "Seu navegador faz as solicitações de API diretamente ao GitHub. O token opcional não é salvo no localStorage e é apagado ao fechar ou recarregar a página." },
      { heading: "Preferências e análises", text: "As preferências de tema e idioma são armazenadas localmente no navegador. O Umami é uma plataforma open source de análise web que respeita a privacidade. Não usa cookies, não rastreia pessoas entre sites e não coleta dados pessoais. É compatível com o RGPD por padrão." },
      { heading: "Ko-fi e e-mail", text: "O Ko-fi trata as interações com o widget conforme suas próprias práticas de privacidade. Se você nos enviar um e-mail, usamos a mensagem e os dados de contato apenas para responder e mantemos a conversa quando razoavelmente necessário." },
    ], precedence: "As traduções são fornecidas por conveniência. Se houver diferenças, a versão em inglês terá prioridade.", questions: "Dúvidas?", linkLabel: "Privacidade",
  },
  nl: {
    title: "Privacybeleid", description: "Hoe Githubster omgaat met openbare GitHub-gegevens, optionele tokens, voorkeuren, analyses en supportwidgets.", updated: "Laatst bijgewerkt: 22 augustus 2026",
    sections: [
      { heading: "Verwerking in de browser", text: "Githubster verwerkt openbare GitHub-profielgegevens en een optioneel toegangstoken in je browser. Deze informatie wordt niet naar de applicatieservers van Githubster gestuurd." },
      { heading: "GitHub-aanvragen en tokens", text: "Je browser doet de gevraagde API-aanvragen rechtstreeks bij GitHub. Een optioneel token wordt niet in localStorage opgeslagen en verdwijnt wanneer de pagina wordt gesloten of opnieuw geladen." },
      { heading: "Voorkeuren en analyses", text: "Thema- en taalvoorkeuren worden lokaal in je browser opgeslagen. Umami is een open-sourceplatform voor webanalyse dat de privacy respecteert. Het gebruikt geen cookies, volgt mensen niet tussen websites en verzamelt geen persoonsgegevens. Het voldoet standaard aan de AVG." },
      { heading: "Ko-fi en e-mail", text: "Ko-fi verwerkt interacties met de supportwidget volgens het eigen privacybeleid. Als je ons mailt, gebruiken we je bericht en contactgegevens alleen om te antwoorden en bewaren we de correspondentie zolang dat redelijkerwijs nodig is." },
    ], precedence: "Vertalingen worden voor het gemak aangeboden. Bij verschillen heeft de Engelse versie voorrang.", questions: "Vragen?", linkLabel: "Privacy",
  },
  pl: {
    title: "Polityka prywatności", description: "Jak Githubster przetwarza publiczne dane GitHub, opcjonalne tokeny, ustawienia, analitykę i widżety wsparcia.", updated: "Ostatnia aktualizacja: 22 sierpnia 2026 r.",
    sections: [
      { heading: "Przetwarzanie w przeglądarce", text: "Githubster przetwarza publiczne dane profilu GitHub oraz opcjonalny token dostępu w Twojej przeglądarce. Informacje te nie są wysyłane na serwery aplikacji Githubster." },
      { heading: "Zapytania do GitHuba i tokeny", text: "Przeglądarka wykonuje żądane zapytania API bezpośrednio do GitHuba. Opcjonalny token nie jest zapisywany w localStorage i jest usuwany po zamknięciu lub przeładowaniu strony." },
      { heading: "Ustawienia i analityka", text: "Preferencje motywu i języka są przechowywane lokalnie w przeglądarce. Umami to otwartoźródłowa platforma analityki internetowej szanująca prywatność. Nie używa plików cookie, nie śledzi osób między witrynami i nie gromadzi danych osobowych. Domyślnie jest zgodna z RODO." },
      { heading: "Ko-fi i e-mail", text: "Ko-fi obsługuje interakcje z widżetem zgodnie z własnymi zasadami prywatności. Jeśli napiszesz do nas, użyjemy wiadomości i danych kontaktowych tylko do udzielenia odpowiedzi i zachowamy korespondencję, gdy będzie to rozsądnie potrzebne." },
    ], precedence: "Tłumaczenia udostępniamy dla wygody. W przypadku różnic pierwszeństwo ma wersja angielska.", questions: "Pytania?", linkLabel: "Prywatność",
  },
  da: {
    title: "Privatlivspolitik", description: "Sådan håndterer Githubster offentlige GitHub-data, valgfrie tokens, indstillinger, analyse og supportwidgets.", updated: "Senest opdateret: 22. august 2026",
    sections: [
      { heading: "Behandling i browseren", text: "Githubster behandler offentlige GitHub-profildata og et eventuelt adgangstoken i din browser. Oplysningerne sendes ikke til Githubsters applikationsservere." },
      { heading: "GitHub-forespørgsler og tokens", text: "Din browser sender de ønskede API-forespørgsler direkte til GitHub. Et valgfrit token gemmes ikke i localStorage og slettes, når siden lukkes eller genindlæses." },
      { heading: "Indstillinger og analyse", text: "Tema- og sprogvalg gemmes lokalt i browseren. Umami er en open source-platform til webanalyse, der respekterer privatlivet. Den bruger ingen cookies, følger ikke personer på tværs af websites og indsamler ingen personoplysninger. Den overholder GDPR som standard." },
      { heading: "Ko-fi og e-mail", text: "Ko-fi håndterer interaktioner med supportwidgetten efter sine egne privatlivsregler. Hvis du skriver til os, bruger vi kun beskeden og kontaktoplysningerne til at svare og gemmer korrespondancen, når det med rimelighed er nødvendigt." },
    ], precedence: "Oversættelser leveres som en hjælp. Hvis en oversættelse afviger, har den engelske version forrang.", questions: "Spørgsmål?", linkLabel: "Privatliv",
  },
  tr: {
    title: "Gizlilik Politikası", description: "Githubster'ın herkese açık GitHub verilerini, isteğe bağlı tokenları, tercihleri, analizleri ve destek bileşenlerini nasıl işlediği.", updated: "Son güncelleme: 22 Ağustos 2026",
    sections: [
      { heading: "Tarayıcıda işleme", text: "Githubster, herkese açık GitHub profil verilerini ve isteğe bağlı erişim tokenını tarayıcınızda işler. Bu bilgiler Githubster uygulama sunucularına gönderilmez." },
      { heading: "GitHub istekleri ve tokenlar", text: "Tarayıcınız istenen API çağrılarını doğrudan GitHub'a yapar. İsteğe bağlı token localStorage'a kaydedilmez ve sayfa kapatıldığında veya yenilendiğinde temizlenir." },
      { heading: "Tercihler ve analiz", text: "Tema ve dil tercihleri tarayıcınızda yerel olarak saklanır. Umami, kullanıcı gizliliğine saygı duyan açık kaynaklı bir web analitiği platformudur. Çerez kullanmaz, kişileri siteler arasında izlemez ve kişisel veri toplamaz. Varsayılan olarak GDPR uyumludur." },
      { heading: "Ko-fi ve e-posta", text: "Ko-fi, destek bileşeniyle etkileşimleri kendi gizlilik uygulamalarına göre işler. Bize e-posta gönderirseniz mesajınızı ve iletişim bilgilerinizi yalnızca yanıtlamak için kullanır, makul ölçüde gerekli olduğunda yazışmayı saklarız." },
    ], precedence: "Çeviriler kolaylık sağlamak amacıyla sunulur. Bir farklılık varsa İngilizce sürüm geçerlidir.", questions: "Sorularınız mı var?", linkLabel: "Gizlilik",
  },
  uk: {
    title: "Політика конфіденційності", description: "Як Githubster обробляє публічні дані GitHub, необов’язкові токени, налаштування, аналітику та віджети підтримки.", updated: "Останнє оновлення: 22 серпня 2026 року",
    sections: [
      { heading: "Обробка в браузері", text: "Githubster обробляє публічні дані профілю GitHub і необов’язковий токен доступу у вашому браузері. Ця інформація не надсилається на сервери застосунку Githubster." },
      { heading: "Запити GitHub і токени", text: "Ваш браузер виконує потрібні API-запити безпосередньо до GitHub. Необов’язковий токен не зберігається в localStorage й видаляється після закриття або перезавантаження сторінки." },
      { heading: "Налаштування й аналітика", text: "Налаштування теми та мови зберігаються локально в браузері. Umami — це платформа вебаналітики з відкритим кодом, яка поважає приватність. Вона не використовує cookies, не відстежує людей між сайтами й не збирає персональних даних. За замовчуванням вона відповідає GDPR." },
      { heading: "Ko-fi та електронна пошта", text: "Ko-fi обробляє взаємодію з віджетом відповідно до власних правил конфіденційності. Якщо ви напишете нам, ми використаємо повідомлення й контактні дані лише для відповіді та зберігатимемо листування, доки це обґрунтовано потрібно." },
    ], precedence: "Переклади надані для зручності. У разі розбіжностей перевагу має англійська версія.", questions: "Є запитання?", linkLabel: "Конфіденційність",
  },
  zh: {
    title: "隐私政策", description: "Githubster 如何处理公开 GitHub 数据、可选令牌、偏好设置、分析数据和支持组件。", updated: "最后更新：2026 年 8 月 22 日",
    sections: [
      { heading: "浏览器内处理", text: "Githubster 会在你的浏览器中处理公开的 GitHub 个人资料数据和可选访问令牌。这些信息不会发送到 Githubster 的应用服务器。" },
      { heading: "GitHub 请求与令牌", text: "浏览器会直接向 GitHub 发出你请求的 API 调用。可选令牌不会保存到 localStorage，并会在页面关闭或重新加载时清除。" },
      { heading: "偏好设置与分析", text: "主题和语言偏好会保存在浏览器本地。Umami 是尊重用户隐私的开源网站分析平台。它不使用 Cookie，不跨网站跟踪用户，也不收集个人数据，并且默认符合 GDPR。" },
      { heading: "Ko-fi 与电子邮件", text: "Ko-fi 按照其自身的隐私规则处理支持组件中的互动。如果你给我们发送邮件，我们只会使用你的消息和联系方式来回复，并在合理需要时保留通信记录。" },
    ], precedence: "翻译仅为方便阅读。如翻译版本与英文版本存在差异，以英文版本为准。", questions: "有疑问？", linkLabel: "隐私",
  },
  ja: {
    title: "プライバシーポリシー", description: "Githubster における公開 GitHub データ、任意トークン、設定、アクセス解析、支援ウィジェットの取り扱い。", updated: "最終更新日：2026年8月22日",
    sections: [
      { heading: "ブラウザ内での処理", text: "Githubster は公開 GitHub プロフィールデータと任意のアクセストークンをブラウザ内で処理します。これらの情報が Githubster のアプリケーションサーバーへ送信されることはありません。" },
      { heading: "GitHub へのリクエストとトークン", text: "ブラウザは指定された API リクエストを GitHub へ直接送信します。任意トークンは localStorage に保存されず、ページを閉じるか再読み込みすると消去されます。" },
      { heading: "設定とアクセス解析", text: "テーマと言語の設定はブラウザにローカル保存されます。Umami はプライバシーを尊重するオープンソースのウェブ解析プラットフォームです。Cookie を使わず、サイトをまたいだ追跡や個人データの収集を行いません。標準で GDPR に準拠しています。" },
      { heading: "Ko-fi とメール", text: "Ko-fi は独自のプライバシー方針に従って支援ウィジェットでの操作を扱います。メールを受け取った場合、メッセージと連絡先は返信のためだけに使用し、合理的に必要な期間、通信記録を保持します。" },
    ], precedence: "翻訳は便宜のために提供されています。英語版と相違がある場合は、英語版が優先されます。", questions: "ご質問はありますか？", linkLabel: "プライバシー",
  },
  ko: {
    title: "개인정보 처리방침", description: "Githubster가 공개 GitHub 데이터, 선택적 토큰, 환경설정, 분석 및 후원 위젯을 처리하는 방식입니다.", updated: "최종 업데이트: 2026년 8월 22일",
    sections: [
      { heading: "브라우저 내 처리", text: "Githubster는 공개 GitHub 프로필 데이터와 선택적 액세스 토큰을 브라우저에서 처리합니다. 이 정보는 Githubster 애플리케이션 서버로 전송되지 않습니다." },
      { heading: "GitHub 요청과 토큰", text: "브라우저는 요청한 API 호출을 GitHub로 직접 보냅니다. 선택적 토큰은 localStorage에 저장되지 않으며 페이지를 닫거나 새로 고치면 삭제됩니다." },
      { heading: "환경설정과 분석", text: "테마와 언어 설정은 브라우저에 로컬로 저장됩니다. Umami는 사용자 개인정보를 존중하는 오픈 소스 웹 분석 플랫폼입니다. 쿠키를 사용하지 않고 사이트 간 사용자를 추적하지 않으며 개인 데이터를 수집하지 않습니다. 기본적으로 GDPR을 준수합니다." },
      { heading: "Ko-fi와 이메일", text: "Ko-fi는 자체 개인정보 보호 관행에 따라 후원 위젯의 상호작용을 처리합니다. 이메일을 보내면 메시지와 연락처를 답변에만 사용하고 합리적으로 필요한 기간 동안 서신을 보관합니다." },
    ], precedence: "번역은 편의를 위해 제공됩니다. 번역본과 영어본이 다른 경우 영어본이 우선합니다.", questions: "문의 사항이 있나요?", linkLabel: "개인정보",
  },
  he: {
    title: "מדיניות פרטיות", description: "כיצד Githubster מטפל בנתוני GitHub ציבוריים, אסימונים אופציונליים, העדפות, נתוני שימוש ורכיבי תמיכה.", updated: "עודכן לאחרונה: 22 באוגוסט 2026",
    sections: [
      { heading: "עיבוד בדפדפן", text: "Githubster מעבד בדפדפן שלכם נתונים ציבוריים מפרופיל GitHub וכל אסימון גישה אופציונלי. מידע זה אינו נשלח לשרתי היישום של Githubster." },
      { heading: "בקשות GitHub ואסימונים", text: "הדפדפן שולח את בקשות ה-API המבוקשות ישירות אל GitHub. אסימון אופציונלי אינו נשמר ב-localStorage ונמחק כאשר הדף נסגר או נטען מחדש." },
      { heading: "העדפות ונתוני שימוש", text: "העדפות ערכת הנושא והשפה נשמרות מקומית בדפדפן. Umami היא פלטפורמת קוד פתוח לניתוח אתרים שמכבדת את פרטיות המשתמשים. היא אינה משתמשת בעוגיות, אינה עוקבת אחר אנשים בין אתרים ואינה אוספת נתונים אישיים. היא תואמת ל-GDPR כברירת מחדל." },
      { heading: "Ko-fi ודוא״ל", text: "Ko-fi מטפל באינטראקציות עם רכיב התמיכה לפי נוהלי הפרטיות שלו. אם תשלחו לנו דוא״ל, נשתמש בהודעה ובפרטי הקשר רק כדי להשיב ונשמור את ההתכתבות כאשר הדבר נחוץ באופן סביר." },
    ], precedence: "התרגומים ניתנים לנוחותכם. במקרה של הבדל בין התרגום לגרסה באנגלית, הגרסה באנגלית גוברת.", questions: "יש שאלות?", linkLabel: "פרטיות",
  },
  ar: {
    title: "سياسة الخصوصية", description: "كيفية تعامل Githubster مع بيانات GitHub العامة والرموز الاختيارية والتفضيلات والتحليلات وأدوات الدعم.", updated: "آخر تحديث: 22 أغسطس 2026",
    sections: [
      { heading: "المعالجة داخل المتصفح", text: "تعالج Githubster بيانات ملف GitHub العامة وأي رمز وصول اختياري داخل متصفحك. لا تُرسل هذه المعلومات إلى خوادم تطبيق Githubster." },
      { heading: "طلبات GitHub والرموز", text: "يرسل متصفحك طلبات API المطلوبة مباشرة إلى GitHub. لا يُحفظ الرمز الاختياري في localStorage ويُمسح عند إغلاق الصفحة أو إعادة تحميلها." },
      { heading: "التفضيلات والتحليلات", text: "تُحفظ تفضيلات المظهر واللغة محليًا في متصفحك. Umami منصة مفتوحة المصدر لتحليلات الويب تحترم خصوصية المستخدم. لا تستخدم ملفات تعريف الارتباط، ولا تتعقب الأشخاص عبر المواقع، ولا تجمع بيانات شخصية. وهي متوافقة مع GDPR افتراضيًا." },
      { heading: "Ko-fi والبريد الإلكتروني", text: "تتعامل Ko-fi مع التفاعلات في أداة الدعم وفق ممارسات الخصوصية الخاصة بها. إذا راسلتنا، نستخدم رسالتك وبيانات الاتصال للرد فقط ونحتفظ بالمراسلات عندما تكون هناك حاجة معقولة لذلك." },
    ], precedence: "تُقدَّم الترجمات للتسهيل. إذا اختلفت أي ترجمة عن النسخة الإنجليزية، تكون الأولوية للنسخة الإنجليزية.", questions: "هل لديك أسئلة؟", linkLabel: "الخصوصية",
  },
};

export function privacyLanguageAlternates(): Record<string, string> {
  return {
    "x-default": "https://www.githubster.com/privacy",
    ...Object.fromEntries(Object.keys(privacyContent).map((locale) => [
      locale,
      `https://www.githubster.com${locale === "en" ? "" : `/${locale}`}/privacy`,
    ])),
  };
}
