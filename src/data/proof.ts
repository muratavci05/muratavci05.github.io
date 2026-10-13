import type { Lang, Localized } from "./types";

/**
 * A real LinguBase result, captured from lingubase.netlify.app on 13 Oct 2026.
 * Level, confidence, word levels and reason are copied from the live output.
 */
export const proof = {
  sentence: [
    "Obwohl die ",
    { word: "Frist", level: "C1" },
    " sehr knapp war, haben wir das Projekt ",
    { word: "rechtzeitig", level: "B1" },
    " abgeschlossen.",
  ] as (string | { word: string; level: string })[],
  level: "B1",
  confidence: 87,
  reason: {
    en: "Independent internal checks reached the same level.",
    de: "Unabhängige interne Prüfungen kamen zum selben Niveau.",
  } satisfies Localized,
  labels: {
    en: {
      title: "A real LinguBase result",
      real: "Real output",
      level: "Detected level",
      confidence: "Confidence",
      distribution: "CEFR scale",
      why: "Why",
      caption: "Live result from LinguBase, Oct 2026. Released only after measuring on examiner-rated texts.",
      try: "Try a sentence",
    },
    de: {
      title: "Ein echtes LinguBase-Ergebnis",
      real: "Echtes Ergebnis",
      level: "Erkanntes Niveau",
      confidence: "Sicherheit",
      distribution: "GER-Skala",
      why: "Warum",
      caption: "Live-Ergebnis von LinguBase, Okt. 2026. Releases erst nach Messung an von Prüfern bewerteten Texten.",
      try: "Satz ausprobieren",
    },
  } satisfies Record<Lang, Record<string, string>>,
};
