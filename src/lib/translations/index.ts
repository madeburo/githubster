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
import { kk } from "./kk";
import { tr } from "./tr";
import { ar } from "./ar";
import { pl } from "./pl";
import { nl } from "./nl";
import { da } from "./da";

export const translations: Record<Locale, Translations> = {
  en, zh, ko, ja, pt, es, de, fr, it, uk, kk, tr, ar, pl, nl, da,
};
