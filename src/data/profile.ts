import type { Localized } from "./types";

export const profile = {
  name: "Murat Avci",
  initials: "MA",
  role: {
    en: "AI Engineer · Evaluation-first · Frankfurt am Main",
    de: "AI Engineer · Evaluation-first · Frankfurt am Main",
  } satisfies Localized,
  /** The highlighted part is rendered in the accent colour. */
  thesis: {
    en: { lead: "I build AI products and the evaluations that prove", highlight: "they give the right answer." },
    de: { lead: "Ich baue KI-Produkte und die Evaluationen, die zeigen,", highlight: "dass sie richtig antworten." },
  },
  bio: {
    en: "Every change I make is measured against real, expert-rated data before it ships. My work focuses on language analysis, grounded answers and AI that keeps data where it belongs.",
    de: "Jede Änderung wird an echten, von Fachleuten bewerteten Daten gemessen, bevor sie live geht. Mein Fokus: Sprachanalyse, belegte Antworten und KI, die Daten dort lässt, wo sie hingehören.",
  } satisfies Localized,
  description: {
    en: "Murat Avci, AI Engineer in Frankfurt. I build AI products and the evaluations that prove they give the right answer.",
    de: "Murat Avci, AI Engineer in Frankfurt. Ich baue KI-Produkte und die Evaluationen, die zeigen, dass sie richtig antworten.",
  } satisfies Localized,
  location: "Frankfurt am Main",
  email: "js.muratavci@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/muratavci05" },
    { label: "GitHub", url: "https://github.com/muratavci05" },
  ],
} as const;
