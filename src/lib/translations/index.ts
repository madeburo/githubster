import type { Translations } from "./en";
import type { Locale } from "../i18n";
import { en } from "./en";
import { ru } from "./ru";
import { zh } from "./zh";
import { ko } from "./ko";
import { pt } from "./pt";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";
import { kk } from "./kk";
import { tr } from "./tr";
import { id } from "./id";
import { hi } from "./hi";
import { ar } from "./ar";

export const translations: Record<Locale, Translations> = {
  en, ru, zh, ko, pt, es, de, fr, kk, tr, id, hi, ar,
};
