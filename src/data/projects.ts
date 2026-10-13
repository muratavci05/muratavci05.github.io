import type { Principle, Project } from "./types";

/**
 * Every statement here comes from the LinkedIn "About" text or the live LinguBase site.
 * No numbers or technical details are added that are not stated there.
 */
export const projects: Project[] = [
  {
    slug: "lingubase",
    name: "LinguBase",
    url: "https://lingubase.netlify.app/",
    status: "live",
    proves: { en: "Evaluation-gated releases", de: "Releases nur nach Evaluation" },
    summary: {
      en: "Estimates the CEFR level (A1–C2) of German sentences and explains why. Free, no account.",
      de: "Bestimmt das GER-Niveau (A1–C2) deutscher Sätze und begründet es. Kostenlos, ohne Anmeldung.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "Against real exam texts rated by professional examiners, before every deployment.",
        de: "An echten, von professionellen Prüfern bewerteten Prüfungstexten, vor jedem Deployment.",
      },
    },
    problem: {
      en: "Learners and teachers of German want to know which level a sentence is at. A level estimate is only useful if it agrees with how professional examiners rate real texts.",
      de: "Lernende und Lehrkräfte wollen wissen, welches Niveau ein deutscher Satz hat. Eine Einschätzung ist nur dann nützlich, wenn sie mit der Bewertung professioneller Prüfer übereinstimmt.",
    },
    built: {
      en: [
        "A level-detection engine that proposes a level from A1 to C2 and shows why.",
        "Single and bulk analysis, grammar topics and an archive. Free and without an account.",
        "A teacher workflow: invited teachers correct levels they rate differently and confirm the evaluation set.",
      ],
      de: [
        "Eine Engine zur Niveaubestimmung, die ein Niveau von A1 bis C2 vorschlägt und begründet.",
        "Einzel- und Massenanalyse, Grammatikthemen und ein Archiv. Kostenlos und ohne Anmeldung.",
        "Ein Workflow für Lehrkräfte: Eingeladene Lehrkräfte korrigieren Niveaus und bestätigen das Evaluationsset.",
      ],
    },
    decisions: [
      {
        title: { en: "Examiners define “correct”", de: "Prüfer definieren „richtig“" },
        text: {
          en: "The reference is real exam texts rated by professional examiners, not labels I made up myself.",
          de: "Die Referenz sind echte Prüfungstexte, bewertet von professionellen Prüfern, keine selbst erstellten Labels.",
        },
      },
      {
        title: { en: "No release without measurement", de: "Kein Release ohne Messung" },
        text: {
          en: "Every change to the engine is measured against the evaluation set before it is deployed.",
          de: "Jede Änderung an der Engine wird vor dem Deployment am Evaluationsset gemessen.",
        },
      },
      {
        title: { en: "Teachers in the loop", de: "Lehrkräfte im Kreislauf" },
        text: {
          en: "Teacher corrections improve the system over time. Access is by invitation, so the evaluation set stays trustworthy.",
          de: "Korrekturen der Lehrkräfte verbessern das System mit der Zeit. Der Zugang erfolgt per Einladung, damit das Evaluationsset verlässlich bleibt.",
        },
      },
      {
        title: { en: "Explain, don't just label", de: "Begründen statt nur einstufen" },
        text: {
          en: "The result shows why a sentence got its level, so a learner can act on it and a teacher can check it.",
          de: "Das Ergebnis zeigt, warum ein Satz sein Niveau bekommt. So können Lernende damit arbeiten und Lehrkräfte es prüfen.",
        },
      },
    ],
    evaluation: {
      en: [
        "Reference data: real exam texts rated by professional examiners.",
        "Gate: each engine change is compared on the evaluation set before deployment.",
        "Review: invited teachers correct levels and confirm the set.",
      ],
      de: [
        "Referenzdaten: echte Prüfungstexte, bewertet von professionellen Prüfern.",
        "Gate: Jede Änderung an der Engine wird vor dem Deployment am Evaluationsset verglichen.",
        "Prüfung: Eingeladene Lehrkräfte korrigieren Niveaus und bestätigen das Set.",
      ],
    },
    diagram: "eval-gate",
  },
  {
    slug: "berufdeutsch",
    name: "BerufDeutsch",
    status: "development",
    proves: { en: "Multi-tenant platform, human review", de: "Mandantenfähige Plattform, menschliche Prüfung" },
    summary: {
      en: "A platform for professional German, starting with nursing education, with a workspace for every role.",
      de: "Eine Plattform für Berufsdeutsch, zuerst für die Pflegeausbildung, mit einem Arbeitsbereich für jede Rolle.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "AI language feedback is reviewed and corrected by teachers.",
        de: "KI-Sprachfeedback wird von Lehrkräften geprüft und korrigiert.",
      },
    },
    problem: {
      en: "Nurses in training have to write professional German and need feedback on it. Several people share responsibility for their progress: teachers, practical training supervisors and the institution.",
      de: "Pflegekräfte in Ausbildung müssen berufliches Deutsch schreiben und brauchen Feedback dazu. Mehrere Personen tragen Verantwortung für ihren Fortschritt: Lehrkräfte, Praxisanleitende und die Einrichtung.",
    },
    built: {
      en: [
        "Dedicated workspaces for learners, teachers, practical training supervisors, institutions and a platform administrator.",
        "Writing tasks with language feedback for learners.",
        "Teacher tools to review assessments, correct them and guide each learner's progress.",
        "Institutions manage their own users and responsibilities; one administrator oversees multiple institutions.",
      ],
      de: [
        "Eigene Arbeitsbereiche für Lernende, Lehrkräfte, Praxisanleitende, Einrichtungen und eine Plattform-Administration.",
        "Schreibaufgaben mit Sprachfeedback für Lernende.",
        "Werkzeuge für Lehrkräfte, um Bewertungen zu prüfen, zu korrigieren und den Lernfortschritt zu begleiten.",
        "Einrichtungen verwalten ihre eigenen Nutzer und Zuständigkeiten; eine Administration betreut mehrere Einrichtungen.",
      ],
    },
    decisions: [
      {
        title: { en: "One workspace per responsibility", de: "Ein Arbeitsbereich pro Verantwortung" },
        text: {
          en: "Each role sees what it is responsible for, and nothing more.",
          de: "Jede Rolle sieht, wofür sie verantwortlich ist, und nicht mehr.",
        },
      },
      {
        title: { en: "Built for many institutions", de: "Für viele Einrichtungen gebaut" },
        text: {
          en: "Each institution manages its own users. A platform administrator works across institutions without mixing them.",
          de: "Jede Einrichtung verwaltet ihre eigenen Nutzer. Die Plattform-Administration arbeitet über Einrichtungen hinweg, ohne sie zu vermischen.",
        },
      },
      {
        title: { en: "AI feedback stays accountable", de: "KI-Feedback bleibt nachvollziehbar" },
        text: {
          en: "Teachers see each assessment and can correct it. The AI supports teaching; it does not replace the teacher.",
          de: "Lehrkräfte sehen jede Bewertung und können sie korrigieren. Die KI unterstützt den Unterricht, sie ersetzt die Lehrkraft nicht.",
        },
      },
      {
        title: { en: "Start with one profession", de: "Mit einem Beruf beginnen" },
        text: {
          en: "Nursing first: a focused domain makes feedback more precise.",
          de: "Zuerst die Pflege: Ein klarer Fachbereich macht das Feedback genauer.",
        },
      },
    ],
    evaluation: {
      en: [
        "Every AI assessment can be reviewed by a teacher.",
        "Teacher corrections are part of the workflow, not an exception.",
      ],
      de: [
        "Jede KI-Bewertung kann von einer Lehrkraft geprüft werden.",
        "Korrekturen der Lehrkräfte sind Teil des Ablaufs, keine Ausnahme.",
      ],
    },
    diagram: "roles",
  },
  {
    slug: "petsense",
    name: "PetSense",
    status: "development",
    proves: { en: "Privacy by design", de: "Datenschutz by Design" },
    summary: {
      en: "A pet care app for profiles, routines and records. Photo analysis starts on the device.",
      de: "Eine App für Tierprofile, Routinen und Unterlagen. Die Fotoanalyse beginnt auf dem Gerät.",
    },
    check: {
      label: "privacy",
      text: {
        en: "Cloud AI runs only after explicit consent.",
        de: "Cloud-KI läuft nur nach ausdrücklicher Zustimmung.",
      },
    },
    problem: {
      en: "Photos are personal. People should get useful analysis without sending every image to a server.",
      de: "Fotos sind persönlich. Man soll eine nützliche Analyse bekommen, ohne jedes Bild an einen Server zu schicken.",
    },
    built: {
      en: [
        "Pet profiles, care routines and records.",
        "Basic photo analysis that runs directly in the browser.",
        "Optional cloud AI features behind an explicit consent step.",
      ],
      de: [
        "Tierprofile, Pflegeroutinen und Unterlagen.",
        "Eine einfache Fotoanalyse, die direkt im Browser läuft.",
        "Optionale Cloud-KI-Funktionen hinter einer ausdrücklichen Zustimmung.",
      ],
    },
    decisions: [
      {
        title: { en: "On the device first", de: "Zuerst auf dem Gerät" },
        text: {
          en: "Basic analysis runs in the browser, so the image stays on the device for that step.",
          de: "Die einfache Analyse läuft im Browser, das Bild bleibt für diesen Schritt auf dem Gerät.",
        },
      },
      {
        title: { en: "Consent before cloud", de: "Zustimmung vor der Cloud" },
        text: {
          en: "Cloud AI features are optional and start only after the user explicitly agrees.",
          de: "Cloud-KI-Funktionen sind optional und starten erst nach ausdrücklicher Zustimmung.",
        },
      },
    ],
    evaluation: {
      en: [
        "Basic photo analysis keeps images on the device.",
        "No cloud AI call without explicit consent.",
      ],
      de: [
        "Die einfache Fotoanalyse lässt Bilder auf dem Gerät.",
        "Kein Cloud-KI-Aufruf ohne ausdrückliche Zustimmung.",
      ],
    },
    diagram: "consent",
  },
  {
    slug: "industrial-ai",
    name: { en: "Industrial maintenance AI", de: "KI für die Instandhaltung" },
    status: "private",
    proves: { en: "Local, grounded AI for industry", de: "Lokale, belegte KI für die Industrie" },
    summary: {
      en: "A local application that preserves the maintenance knowledge of experienced technicians.",
      de: "Eine lokale Anwendung, die das Instandhaltungswissen erfahrener Techniker bewahrt.",
    },
    check: {
      label: "evaluated",
      text: {
        en: "Answer quality, source grounding and safety.",
        de: "Antwortqualität, Quellenbezug und Sicherheit.",
      },
    },
    problem: {
      en: "Experienced technicians know how to fix faults that are documented nowhere in one place. When they leave, that know-how leaves with them.",
      de: "Erfahrene Techniker wissen, wie man Störungen behebt, die nirgends zusammenhängend dokumentiert sind. Wenn sie gehen, geht dieses Wissen mit.",
    },
    built: {
      en: [
        "One application that brings together recorded faults, documented solutions and technical manuals.",
        "It runs locally and helps teams keep their practical know-how.",
      ],
      de: [
        "Eine Anwendung, die dokumentierte Störungen, bewährte Lösungen und technische Handbücher zusammenführt.",
        "Sie läuft lokal und hilft Teams, ihr praktisches Wissen zu behalten.",
      ],
    },
    decisions: [
      {
        title: { en: "Runs locally", de: "Läuft lokal" },
        text: {
          en: "The application runs on site, so company knowledge stays inside the company.",
          de: "Die Anwendung läuft vor Ort, damit das Wissen im Unternehmen bleibt.",
        },
      },
      {
        title: { en: "Answers come from the company's own sources", de: "Antworten aus den eigenen Quellen" },
        text: {
          en: "Faults, solutions and manuals are the basis of every answer, and grounding is tested.",
          de: "Störungen, Lösungen und Handbücher sind die Grundlage jeder Antwort, und der Quellenbezug wird getestet.",
        },
      },
      {
        title: { en: "Safety is part of the evaluation", de: "Sicherheit gehört zur Evaluation" },
        text: {
          en: "In maintenance, a wrong answer can be dangerous. Safety is tested alongside answer quality.",
          de: "In der Instandhaltung kann eine falsche Antwort gefährlich sein. Sicherheit wird zusammen mit der Antwortqualität getestet.",
        },
      },
    ],
    evaluation: {
      en: ["Answer quality.", "Source grounding.", "Safety.", "Client and technical details are confidential."],
      de: ["Antwortqualität.", "Quellenbezug.", "Sicherheit.", "Kunden- und technische Details sind vertraulich."],
    },
    diagram: "grounding",
  },
];

export const principles: Principle[] = [
  {
    title: { en: "Define “correct” with experts", de: "„Richtig“ mit Fachleuten definieren" },
    text: {
      en: "Examiners, teachers and technicians decide what a good answer is.",
      de: "Prüfer, Lehrkräfte und Techniker legen fest, was eine gute Antwort ist.",
    },
    appliedIn: ["lingubase", "berufdeutsch", "industrial-ai"],
  },
  {
    title: { en: "Measure before you ship", de: "Messen vor dem Release" },
    text: {
      en: "No change goes live without being measured against real cases.",
      de: "Keine Änderung geht live, ohne an echten Fällen gemessen zu werden.",
    },
    appliedIn: ["lingubase", "industrial-ai"],
  },
  {
    title: { en: "Keep people in control", de: "Menschen behalten die Kontrolle" },
    text: {
      en: "AI output can always be reviewed and corrected by the people responsible.",
      de: "KI-Ergebnisse können von den Verantwortlichen immer geprüft und korrigiert werden.",
    },
    appliedIn: ["lingubase", "berufdeutsch"],
  },
  {
    title: { en: "Keep data where it belongs", de: "Daten bleiben, wo sie hingehören" },
    text: {
      en: "On the device or on site first, and the cloud only with consent.",
      de: "Zuerst auf dem Gerät oder vor Ort, die Cloud nur mit Zustimmung.",
    },
    appliedIn: ["petsense", "industrial-ai"],
  },
];
