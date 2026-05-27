import type { Translations } from "./en";

export const ar: Translations = {
  meta: {
    title: "Githubster — تتبع متابعيك وغير المتابعين على GitHub",
    description: "أداة مجانية ومفتوحة المصدر لمعرفة من لا يتابعك على GitHub. بدون تسجيل دخول.",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    button: "العودة للرئيسية",
  },
  hero: {
    title: "استكشف شبكتك على GitHub",
    description: "اكتشف من لا يتابعك، من لا تتابعه، وأدر علاقاتك على GitHub.",
  },
  search: {
    placeholder: "أدخل اسم مستخدم GitHub",
    button: "استكشاف",
    loading: "جاري التحميل...",
    tokenToggle: "إضافة رمز (اختياري، يزيد الحد)",
    tokenHide: "إخفاء الرمز (اختياري، يزيد الحد)",
    tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
  },
  tabs: {
    unfollowers: "لا يتابعونك",
    notFollowingBack: "لا تتابعهم",
    mutuals: "متبادلون",
    following: "المتابَعون",
    followers: "المتابِعون",
  },
  stats: {
    followers: "المتابِعون",
    following: "المتابَعون",
    mutuals: "متبادلون",
    unfollowers: "لا يتابعونك",
    notFollowingBack: "لا تتابعهم",
  },
  empty: {
    unfollowers: "كل من تتابعهم يتابعونك! 🎉",
    notFollowingBack: "أنت تتابع جميع متابعيك! 🤝",
    mutuals: "لا توجد اتصالات متبادلة بعد.",
    following: "لا تتابع أحداً بعد.",
    followers: "لا يوجد متابعون بعد.",
    initial: "أدخل اسم مستخدم أعلاه",
  },
  grid: {
    searchPlaceholder: "البحث في {count} مستخدم...",
  },
  rateLimit: {
    resets: "إعادة التعيين خلال {time}",
    now: "الآن",
  },
  error: {
    retry: "",
    userNotFound: "المستخدم غير موجود",
    userNotFoundDesc: "تحقق من اسم المستخدم على GitHub وحاول مرة أخرى.",
    rateLimit: "تم الوصول إلى حد طلبات GitHub",
    rateLimitDesc: "أضف رمزًا أو حاول مرة أخرى بعد بضع دقائق.",
    noPublicFollowers: "لم يتم العثور على متابعين عامين",
    noPublicFollowersDesc: "قد يكون لهذا الملف الشخصي نشاط عام محدود.",
  },
  seo: {
    title: "ما هو Githubster؟",
    description:
      "Githubster أداة مجانية ومفتوحة المصدر لفهم علاقاتك على GitHub. بدون تسجيل دخول، بدون جمع بيانات.",
    feature1Title: "غير المتابعين",
    feature1Desc: "اعرف من تتابعه ولا يتابعك.",
    feature2Title: "المتابِعون",
    feature2Desc: "اكتشف من يتابعك ولكنك لا تتابعه.",
    feature3Title: "خاص وآمن",
    feature3Desc: "يعمل بالكامل في المتصفح. لا يتم تخزين أي بيانات.",
  },
  profileOverview: {
    title: "نظرة عامة على الملف الشخصي",
    ownProjects: "المشاريع الخاصة",
    repositories: "مستودعات",
    totalStars: "إجمالي النجوم",
    topLanguages: "اللغات حسب النجوم",
  },
  banner: {
    text: "Githubster مجاني ومفتوح المصدر. ادعم المشروع بنجمة على GitHub.",
    cta: "نجمة على GitHub",
  },
  footer: {
    openSource: "مفتوح المصدر على",
    madeWith: "صنع بـ ♥ في",
  },
};
