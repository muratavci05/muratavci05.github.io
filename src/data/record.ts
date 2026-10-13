import type { Certificate, Education, Localized, Role } from "./types";

/** Dates match the LinkedIn profile exactly. */
export const experience: Role[] = [
  {
    period: { en: "Nov 2025 – today", de: "Nov. 2025 – heute" },
    title: "AI Engineer",
    where: { en: "Freelance, Frankfurt", de: "Freiberuflich, Frankfurt" },
  },
  {
    period: { en: "May 2023 – Oct 2025", de: "Mai 2023 – Okt. 2025" },
    title: "Frontend Developer",
    where: { en: "Freelance", de: "Freiberuflich" },
  },
  {
    period: { en: "Sep 2022 – May 2023", de: "Sept. 2022 – Mai 2023" },
    title: "Frontend Developer",
    where: { en: "Mimcode, remote", de: "Mimcode, remote" },
  },
  {
    period: { en: "Jan 2021 – Sep 2022", de: "Jan. 2021 – Sept. 2022" },
    title: "Frontend Developer",
    where: { en: "Arabuleu, remote", de: "Arabuleu, remote" },
  },
  {
    period: { en: "May 2016 – Dec 2020", de: "Mai 2016 – Dez. 2020" },
    title: { en: "Digital Marketing & Online Sales", de: "Digitales Marketing & Online-Vertrieb" },
    where: { en: "Freelance, Ankara", de: "Freiberuflich, Ankara" },
  },
];

export const education: Education[] = [
  {
    period: { en: "Jun 2022 – Mar 2023", de: "Juni 2022 – März 2023" },
    school: "Fatih Sultan Mehmet Vakıf University",
    program: { en: "Software Expert program", de: "Programm Softwareexperte" },
  },
  {
    period: "M.Sc.",
    school: "Türk Hava Kurumu University",
    program: { en: "Business Administration", de: "Betriebswirtschaftslehre" },
  },
  {
    school: "Anadolu University",
    program: { en: "Business Administration", de: "Betriebswirtschaftslehre" },
  },
  {
    school: "Gaziosmanpaşa University",
    program: { en: "Computer Science", de: "Informatik" },
  },
];

const march2026: Localized = { en: "Mar 2026", de: "März 2026" };

export const certificates: Certificate[] = [
  { name: "Model Context Protocol", issuer: "Anthropic", issued: march2026, credentialId: "79hw4iowmy5u", featured: true },
  { name: "MCP: Advanced Topics", issuer: "Anthropic", issued: march2026, credentialId: "5bqfv4wvnxrc", featured: true },
  { name: "Agent Skills", issuer: "Anthropic", issued: march2026, credentialId: "om3dwewwyi8n", featured: true },
  { name: "Claude Code in Action", issuer: "Anthropic", issued: march2026, credentialId: "mwiahfbdehkm" },
  { name: "Building with the Claude API", issuer: "Anthropic", issued: march2026, credentialId: "drqhyjthca2h" },
  { name: "AI Fluency", issuer: "Anthropic", issued: march2026, credentialId: "8y3p3gfcqwcr" },
  { name: "Claude 101", issuer: "Anthropic", issued: march2026, credentialId: "q4rytzbr9grj" },
];

export const stack: { name: Localized | string; key?: boolean }[] = [
  { name: "Python", key: true },
  { name: "TypeScript", key: true },
  { name: { en: "Model evaluation", de: "Modell-Evaluation" } },
  { name: "NLP" },
  { name: "RAG" },
  { name: "React" },
  { name: "Astro" },
  { name: "Node.js" },
  { name: "PostgreSQL / Supabase" },
  { name: "Firebase" },
  { name: "Google Cloud" },
  { name: "Docker" },
];

export const languages: Localized[] = [
  { en: "Turkish · native", de: "Türkisch · Muttersprache" },
  { en: "German", de: "Deutsch" },
  { en: "English · technical reading", de: "Englisch · Fachtexte lesen" },
];
