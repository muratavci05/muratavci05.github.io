export const LANGS = ["en", "de"] as const;
export type Lang = (typeof LANGS)[number];

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;

export type ProjectStatus = "live" | "development" | "private";

export interface Project {
  name: Localized | string;
  url?: string;
  status: ProjectStatus;
  summary: Localized;
  /** How the project is checked: the line that matters most. */
  check: { label: "evaluated" | "privacy"; text: Localized };
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
}
