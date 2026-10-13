import type { Lang, Localized, ProjectStatus } from "./types";

/** Interface strings; content lives in the other data files. */
export const ui = {
  en: {
    work: "Selected work",
    how: "How I work",
    experience: "Experience",
    education: "Education",
    certificates: "Certifications · Anthropic, Mar 2026",
    stack: "Stack",
    languages: "Languages",
    status: { live: "Live", development: "In development", private: "Private · runs locally" },
    check: { evaluated: "Evaluated", privacy: "Privacy" },
    themeToDark: "Dark",
    themeToLight: "Light",
    copy: "Copy email",
    copied: "Copied ✓",
    language: "Language",
  },
  de: {
    work: "Ausgewählte Projekte",
    how: "Arbeitsweise",
    experience: "Erfahrung",
    education: "Ausbildung",
    certificates: "Zertifikate · Anthropic, März 2026",
    stack: "Technologien",
    languages: "Sprachen",
    status: { live: "Live", development: "In Entwicklung", private: "Privat · läuft lokal" },
    check: { evaluated: "Evaluiert", privacy: "Datenschutz" },
    themeToDark: "Dunkel",
    themeToLight: "Hell",
    copy: "E-Mail kopieren",
    copied: "Kopiert ✓",
    language: "Sprache",
  },
} as const satisfies Record<Lang, { status: Record<ProjectStatus, string> } & Record<string, unknown>>;

export const paths: Record<Lang, string> = { en: "/", de: "/de/" };

/** Resolve a value that is either the same in every language or localized. */
export function t(value: Localized | string, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}
