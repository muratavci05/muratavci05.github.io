import type { ImageMetadata } from "astro";

export const LANGS = ["en", "de"] as const;
export type Lang = (typeof LANGS)[number];

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;
/** A list of strings available in every supported language. */
export type LocalizedList = Record<Lang, string[]>;

export type ProjectStatus = "live" | "development" | "private";
export type DiagramKind = "eval-gate" | "roles" | "consent" | "grounding";

export interface Decision {
  title: Localized;
  text: Localized;
}

export interface Project {
  slug: string;
  name: Localized | string;
  url?: string;
  status: ProjectStatus;
  /** One line for the home page. */
  summary: Localized;
  /** How the project is checked: the line that matters most. */
  check: { label: "evaluated" | "privacy"; text: Localized };
  /** The capability this project proves, shown as a tag. */
  proves: Localized;
  problem: Localized;
  built: LocalizedList;
  decisions: Decision[];
  evaluation: LocalizedList;
  diagram: DiagramKind;
  /** A real screenshot of the product, shown at the top of the case study. */
  screenshot?: { src: ImageMetadata; alt: Localized };
}

export interface Role {
  period: Localized;
  title: Localized | string;
  where: Localized;
}

export interface Education {
  period?: Localized | string;
  school: string;
  program: Localized;
}

export interface Certificate {
  name: string;
  issuer: string;
  issued: Localized;
  credentialId?: string;
  featured?: boolean;
}

export interface Principle {
  title: Localized;
  text: Localized;
  /** Slugs of the projects where this principle is applied. */
  appliedIn: string[];
}
