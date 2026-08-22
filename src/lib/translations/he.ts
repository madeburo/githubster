import type { Translations } from "./en";

export const he: Translations = {
  meta: {
    title: "Githubster — מעקב אחר עוקבים ולא-עוקבים ב-GitHub",
    description: "כלי חינמי בקוד פתוח כדי לראות מי לא עוקב אחריך בחזרה ב-GitHub. אין צורך בחשבון.",
  },
  notFound: { title: "העמוד לא נמצא", description: "העמוד שחיפשת אינו קיים או הועבר.", button: "חזרה לדף הבית" },
  hero: {
    title: "גלו את רשת ה-GitHub שלכם",
    description: "בדקו עוקבים, קשרים הדדיים, מי לא עוקב בחזרה ותובנות על פרופיל ציבורי. אין צורך בחשבון Githubster. האסימון האופציונלי נשאר בלשונית זו.",
  },
  search: {
    placeholder: "הזינו שם משתמש ב-GitHub", button: "חקרו", loading: "טוען...",
    tokenToggle: "הוספת אסימון (אופציונלי, מגדיל את המכסה)", tokenHide: "הסתרת אסימון (אופציונלי, מגדיל את המכסה)", tokenPlaceholder: "github_pat_xxxxxxxxxxxx",
    tokenShow: "הצגת אסימון", tokenMask: "הסתרת אסימון", tokenClear: "ניקוי אסימון",
    tokenPrivacy: "משמש רק לבקשות ישירות ל-API של GitHub. הוא לא נשמר ולא נשלח ל-Githubster.",
  },
  tabs: { unfollowers: "לא עוקבים בחזרה", notFollowingBack: "אינכם עוקבים", mutuals: "הדדיים", following: "במעקב", followers: "עוקבים" },
  stats: { followers: "עוקבים", following: "במעקב", mutuals: "הדדיים", unfollowers: "לא עוקבים בחזרה", notFollowingBack: "אינכם עוקבים" },
  empty: {
    unfollowers: "כל מי שאתם עוקבים אחריו עוקב אחריכם בחזרה! 🎉", notFollowingBack: "אתם עוקבים אחרי כל מי שעוקב אחריכם! 🤝",
    mutuals: "עדיין אין קשרים הדדיים.", following: "אינכם עוקבים אחר אף אחד עדיין.", followers: "עדיין אין עוקבים.", initial: "הזינו שם משתמש למעלה כדי לראות את התמונה המלאה",
  },
  grid: { searchPlaceholder: "חיפוש בין {count} משתמשים..." },
  rateLimit: { resets: "מתאפס בעוד {time}", now: "עכשיו" },
  error: {
    retry: "נסו שוב", userNotFound: "המשתמש לא נמצא", userNotFoundDesc: "בדקו את שם המשתמש ב-GitHub ונסו שוב.",
    rateLimit: "הגעתם למכסת הבקשות של GitHub", rateLimitDesc: "הוסיפו אסימון או נסו שוב בעוד כמה דקות.",
    noPublicFollowers: "לא נמצאו עוקבים ציבוריים", noPublicFollowersDesc: "ייתכן שלפרופיל זה פעילות ציבורית מוגבלת.",
  },
  seo: {
    title: "מהו Githubster?",
    description: "Githubster הוא כלי חינמי בקוד פתוח לבדיקת עוקבים ב-GitHub. השוו רשימות ציבוריות של עוקבים ונעקבים כדי למצוא מי לא עוקב בחזרה, קשרים הדדיים ותובנות פרופיל — ללא חשבון Githubster.",
    feature1Title: "לא עוקבים בחזרה", feature1Desc: "ראו אחרי מי אתם עוקבים ומי לא עוקב אחריכם בחזרה. נקו את רשימת הנעקבים שלכם.",
    feature2Title: "עוקבים", feature2Desc: "גלו אנשים שעוקבים אחריכם ושעדיין אינכם עוקבים אחריהם.",
    feature3Title: "מבוסס דפדפן", feature3Desc: "ניתוח הפרופיל פועל בדפדפן שלכם. אסימוני גישה אופציונליים לעולם אינם נשמרים.",
  },
  support: { nav: "תמכו", title: "תמכו ב-Githubster", description: "Githubster הוא חינמי ובקוד פתוח. אם הוא שימושי עבורכם, תוכלו לתמוך בפיתוחו.", kofi: "תמכו ב-Ko-fi", paypal: "PayPal", star: "תנו כוכב ב-GitHub" },
  profileOverview: { title: "סקירת פרופיל", ownProjects: "פרויקטים אישיים", repositories: "מאגרים", totalStars: "סך הכוכבים", topLanguages: "שפות מובילות לפי כוכבים", repositoriesUnavailable: "נתוני המאגרים אינם זמינים" },
  banner: { text: "Githubster חינמי לחלוטין ובקוד פתוח. אם הוא עזר לכם, כוכב ב-GitHub שומר עליו פעיל.", cta: "תנו כוכב ב-GitHub" },
  footer: { openSource: "קוד פתוח ב-", madeWith: "נוצר עם ♥ ב-" },
  share: { button: "שיתוף", copied: "הועתק!", tooltip: "שיתוף קישור לפרופיל" },
  sort: { label: "מיון משתמשים", default: "ברירת מחדל", nameAsc: "שם א→ת", nameDesc: "שם ת→א" },
  loading: { title: "טוען נתוני פרופיל...", followers: "עוקבים", following: "במעקב" },
};
