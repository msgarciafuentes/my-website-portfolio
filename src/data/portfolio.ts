export const personal = {
  name: 'Marvin Serge Fuentes',
  role: 'Software Engineer',
  location: 'Budapest, Hungary',
  email: 'fuentes.marvinserge@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/marvin-serge-fuentes/',
  github: null,
  cv: null,
  statement: 'I build software, data systems, and intelligent solutions.',
} as const

export const snapshots = [
  { value: '5+', label: 'Years building software' },
  { value: '04', label: 'Domains: finance, healthcare, government data, data systems' },
  { value: '02', label: 'Engineering chapters: FactSet → Straive' },
] as const

export type JourneyKind = 'work' | 'education'
export type JourneyItem = {
  year: string
  endYear: string
  kind: JourneyKind
  role: string
  place: string
  dates: string
  summary: string
  details: readonly string[]
  tools?: readonly string[]
  emphasis?: boolean
}

export const journey: readonly JourneyItem[] = [
  {
    year: '2015', endYear: '2019', kind: 'education', role: 'BSc Computer Science',
    place: 'Xavier University – Ateneo de Cagayan · Philippines', dates: 'June 2015 — March 2019',
    summary: 'Graduated Cum Laude, forming the technical foundation for a career in production software engineering.',
    details: ['Outstanding Graduate Award', 'BPI-DOST Science Award', 'Kinaadman Support for Student Research Award'],
  },
  {
    year: '2019', endYear: '2022', kind: 'work', role: 'Software Engineer',
    place: 'FactSet Philippines, Inc.', dates: 'August 2019 — August 2022', emphasis: true,
    summary: 'Built large-scale financial data extraction, transformation, validation, and production systems—progressing into lead engineering responsibilities for key product components.',
    details: ['Led data-processing and validation workflows for client-facing financial analytics platforms.', 'Reviewed code for 4+ engineers and promoted performance, readability, and maintainability.', 'Supported databases, data migrations, integrity checks, and on-call production issues.'],
    tools: ['Python', 'Perl', 'MySQL', 'SQL Server', 'Git', 'Perforce', 'JIRA'],
  },
  {
    year: '2021', endYear: '2022', kind: 'work', role: 'Instructor',
    place: 'Xavier University – Ateneo de Cagayan', dates: 'August 2021 — August 2022',
    summary: 'Taught undergraduate computer science while working professionally as a software engineer.',
    details: ['Object-Oriented Programming', 'Data Structures', 'Human-Computer Interaction · 30+ students'],
  },
  {
    year: '2022', endYear: 'NOW', kind: 'work', role: 'Software Engineer',
    place: 'Straive', dates: 'August 2022 — Present', emphasis: true,
    summary: 'Building and supporting production software and data workflows for regulated healthcare, government, and data-intensive products.',
    details: ['Developed automated extraction, parsing, testing, and validation workflows.', 'Built ETL-style workflows using CMS, HHS, and NIH sources.', 'Supported CI/CD, secure delivery, and production ingestion across 5+ cross-functional teams.'],
    tools: ['Python', 'Perl', 'Selenium', 'ETL / ELT', 'AWS', 'CodeCommit', 'CI/CD'],
  },
  {
    year: '2024', endYear: '2026', kind: 'education', role: 'MSc Info-Bionics Engineering',
    place: 'Pázmány Péter Catholic University · Hungary', dates: 'February 2024 — February 2026',
    summary: 'Advanced technical study completed alongside professional engineering work, specializing in Bionics Interfaces.',
    details: ['Graduated', 'Stipendium Hungaricum Scholarship', 'Bionics Interfaces specialization'],
  },
] as const

export const capabilityLines = [
  ['BUILD', 'Python · Perl · SQL'],
  ['MOVE', 'ETL / ELT · Data modeling · Validation'],
  ['SHIP', 'Git · CI/CD · AWS · Docker · Linux'],
  ['WATCH', 'CloudWatch · Grafana · Production support'],
] as const

export type Project = {
  title: string
  category: 'software' | 'data' | 'ai' | 'research' | 'experimental'
  narrative: string
  technologies: readonly string[]
  url?: string
}

export const projects: readonly Project[] = []
