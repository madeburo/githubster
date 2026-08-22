import type { Translations } from "./en";
import type { Locale } from "../i18n";
import { en } from "./en";
import { zh } from "./zh";
import { ko } from "./ko";
import { ja } from "./ja";
import { pt } from "./pt";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";
import { uk } from "./uk";
import { he } from "./he";
import { tr } from "./tr";
import { ar } from "./ar";
import { pl } from "./pl";
import { nl } from "./nl";
import { da } from "./da";
import { sv } from "./sv";
import { no } from "./no";

export const translations: Record<Locale, Translations> = {
  en, zh, ko, ja, pt, es, de, fr, it, uk, he, tr, ar, pl, nl, da, sv, no,
};
