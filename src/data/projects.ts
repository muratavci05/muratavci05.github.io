import type { Principle, Project } from "./types";

export const projects: Project[] = [
  {
    name: "LinguBase",
    url: "https://lingubase.netlify.app/",
    status: "live",
    summary: {
      en: "Estimates the CEFR level (A1–C2) of any German sentence in about a second and explains why. Free, no account.",
      de: "Bestimmt das GER-Niveau (A1–C2) eines deutschen Satzes in etwa einer Sekunde und begründet es. Kostenlos, ohne Anmeldung.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "On real exam texts rated by professional examiners. Every engine change is measured on the evaluation set before deployment. Teachers correct levels and confirm the set.",
        de: "An echten Prüfungstexten, bewertet von professionellen Prüfern. Jede Änderung an der Engine wird vor dem Deployment am Evaluationsset gemessen. Lehrkräfte korrigieren Niveaus und bestätigen das Set.",
      },
    },
  },
  {
    name: "BerufDeutsch",
    status: "development",
    summary: {
      en: "A platform for professional German, starting with nursing education. Separate workspaces for learners, teachers, training supervisors, institutions and a platform admin.",
      de: "Eine Plattform für Berufsdeutsch, zuerst für die Pflegeausbildung. Eigene Bereiche für Lernende, Lehrkräfte, Praxisanleitende, Einrichtungen und eine Plattform-Administration.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "AI language feedback stays reviewable: teachers see each assessment and correct it.",
        de: "KI-Sprachfeedback bleibt überprüfbar: Lehrkräfte sehen jede Bewertung und korrigieren sie.",
      },
    },
  },
  {
    name: "PetSense",
    status: "development",
    summary: {
      en: "A pet care app for profiles, routines and records. Basic photo analysis runs in the browser, so images stay on the device.",
      de: "Eine App für Tierprofile, Routinen und Unterlagen. Eine einfache Fotoanalyse läuft im Browser, die Bilder bleiben auf dem Gerät.",
    },
    check: {
      label: "privacy",
      text: {
        en: "Cloud AI features are optional and run only after explicit consent.",
        de: "Cloud-KI-Funktionen sind optional und laufen nur nach ausdrücklicher Zustimmung.",
      },
    },
  },
  {
    name: { en: "Industrial maintenance AI", de: "KI für die Instandhaltung" },
    status: "private",
    summary: {
      en: "Keeps the know-how of experienced technicians: recorded faults, documented solutions and technical manuals in one local system.",
      de: "Bewahrt das Wissen erfahrener Techniker: dokumentierte Störungen, bewährte Lösungen und technische Handbücher in einem lokalen System.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "Answer quality, source grounding and safety. Client details are confidential.",
        de: "Antwortqualität, Quellenbezug und Sicherheit. Kundendetails sind vertraulich.",
      },
    },
  },
];

export const principles: Principle[] = [
  {
    title: { en: "Define “correct”", de: "„Richtig“ definieren" },
    text: { en: "With the experts: examiners, teachers, technicians.", de: "Mit den Fachleuten: Prüfer, Lehrkräfte, Techniker." },
  },
  {
    title: { en: "Test on real cases", de: "An echten Fällen testen" },
    text: { en: "Rated exam texts, real faults, real manuals.", de: "Bewertete Prüfungstexte, echte Störungen, echte Handbücher." },
  },
  {
    title: { en: "Ship what beats the baseline", de: "Nur Besseres geht live" },
    text: { en: "No change goes live without being measured.", de: "Keine Änderung ohne Messung gegen die Baseline." },
  },
];
