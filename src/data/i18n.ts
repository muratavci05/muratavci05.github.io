import type { Lang, Localized, ProjectStatus } from "./types";

/** Interface strings; content lives in the other data files. */
export const ui = {
  en: {
    work: "Selected work",
    how: "How I build AI systems",
    appliedIn: "Applied in",
    experience: "Experience",
    education: "Education",
    certificates: "Certifications · Anthropic, Mar 2026",
    stack: "Stack",
    languages: "Languages",
    status: { live: "Live", development: "In development", private: "Private · runs locally" },
    check: { evaluated: "Evaluated", privacy: "Privacy" },
    caseStudy: "Case study",
    readCase: "Read the case study",
    problem: "The problem",
    built: "What I built",
    decisions: "Design decisions",
    evaluation: "How it is checked",
    architecture: "How it fits together",
    visit: "Open the live product",
    back: "All work",
    next: "Next case study",
    themeToDark: "Dark",
    themeToLight: "Light",
    copy: "Copy email",
    copied: "Copied ✓",
    language: "Language",
  },
  de: {
    work: "Ausgewählte Projekte",
    how: "Wie ich KI-Systeme baue",
    appliedIn: "Umgesetzt in",
    experience: "Erfahrung",
    education: "Ausbildung",
    certificates: "Zertifikate · Anthropic, März 2026",
    stack: "Technologien",
    languages: "Sprachen",
    status: { live: "Live", development: "In Entwicklung", private: "Privat · läuft lokal" },
    check: { evaluated: "Evaluiert", privacy: "Datenschutz" },
    caseStudy: "Fallstudie",
    readCase: "Zur Fallstudie",
    problem: "Das Problem",
    built: "Was ich gebaut habe",
    decisions: "Designentscheidungen",
    evaluation: "Wie es geprüft wird",
    architecture: "Wie es zusammenhängt",
    visit: "Live-Produkt öffnen",
    back: "Alle Projekte",
    next: "Nächste Fallstudie",
    themeToDark: "Dunkel",
    themeToLight: "Hell",
    copy: "E-Mail kopieren",
    copied: "Kopiert ✓",
    language: "Sprache",
  },
} as const satisfies Record<Lang, { status: Record<ProjectStatus, string> } & Record<string, unknown>>;

export const homePath: Record<Lang, string> = { en: "/", de: "/de/" };

export function casePath(slug: string, lang: Lang): string {
  return `${homePath[lang]}work/${slug}/`;
}

/** Resolve a value that is either the same in every language or localized. */
export function t(value: Localized | string, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}
