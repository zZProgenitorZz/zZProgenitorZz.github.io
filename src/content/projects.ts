export type ProjectStatus = 'shipped' | 'wip' | 'school'

export type Project = {
  id: string
  title: string
  description: { en: string; nl: string }
  tech: string[]
  image?: string
  live?: string
  repo?: string
  size: 'large' | 'small'
  featured?: boolean
  status: ProjectStatus
  year: number
  /** Filter tags, e.g. 'web', 'ai', 'backend', 'tool'. */
  tags: string[]
  /** Classic Major Arcana card for the tarot flip card (large projects only). */
  arcana?: { n: number; name: { en: string; nl: string } }
}

const d = (en: string, nl: string) => ({ en, nl })
const card = (n: number, en: string, nl: string) => ({ n, name: { en, nl } })

export const projects: Project[] = [
  // Featured (shown on Home)
  {
    id: 'gatekeeper',
    title: 'GateKeeper',
    description: d(
      'A central sign-in and access service for other systems. Users log in once; admins connect systems, define roles per system and grant or revoke access; connected systems validate a token to see who is logged in. Fully event sourced, so every login, block and grant can be reviewed afterwards.',
      'Een centrale inlog- en toegangsdienst voor andere systemen. Gebruikers loggen één keer in; beheerders sluiten systemen aan, leggen per systeem rollen vast en geven of ontnemen toegang; aangesloten systemen controleren met een token wie er is ingelogd. Volledig event sourced, zodat elke inlog, blokkade en toekenning achteraf terug te kijken is.',
    ),
    tech: ['Java', 'Spring Boot', 'Axon Framework', 'Spring Security', 'JWT', 'PostgreSQL', 'HTMX', 'Docker', 'GitLab CI'],
    image: '/images/project-1.svg',
    size: 'large',
    featured: true,
    status: 'wip',
    year: 2026,
    tags: ['backend', 'web'],
    arcana: card(4, 'The Emperor', 'De Keizer'),
  },
  {
    id: 'personal-tracker',
    title: 'Personal Tracker',
    description: d(
      'A self-hosted app that tracks what I read, watch, listen to and plan, with an AI assistant (Sunny) that looks things up and only makes changes after I confirm. Event sourcing and CQRS on SQLite, Spotify sync and a yearly Wrapped overview.',
      'Een zelfgehoste app die bijhoudt wat ik lees, kijk, luister en plan, met een AI-assistent (Sunny) die dingen opzoekt en pas na mijn bevestiging iets aanpast. Event sourcing en CQRS op SQLite, Spotify-sync en een jaarlijks Wrapped-overzicht.',
    ),
    tech: ['Python', 'FastAPI', 'HTMX', 'Jinja2', 'SQLite', 'pytest', 'Claude API'],
    image: '/images/project-2.svg',
    repo: 'https://github.com/zZProgenitorZz/Personal-tracker',
    size: 'large',
    featured: true,
    status: 'wip',
    year: 2026,
    tags: ['web', 'backend', 'ai'],
    arcana: card(9, 'The Hermit', 'De Kluizenaar'),
  },
  {
    id: 'medical-annotation-tool',
    title: 'Medical annotation tool',
    description: d(
      'Web app for annotating medical images, built during my internship at AiDx Medical. I built the backend and REST APIs with FastAPI and MongoDB, containerised it with Docker and deployed it to AWS.',
      "Webapp voor het annoteren van medische beelden, gebouwd tijdens mijn stage bij AiDx Medical. Ik bouwde de backend en REST API's met FastAPI en MongoDB, zette alles in Docker-containers en rolde het uit op AWS.",
    ),
    tech: ['Python', 'FastAPI', 'MongoDB', 'React', 'Docker', 'AWS'],
    image: '/images/project-3.svg',
    size: 'large',
    featured: true,
    status: 'school',
    year: 2025,
    tags: ['web', 'backend'],
    arcana: card(1, 'The Magician', 'De Magiër'),
  },
  // More large projects
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: d(
      'My own portfolio site: a terminal-themed React app with tarot project cards, a skills grimoire and an EN/NL switch.',
      'Mijn eigen portfoliosite: een React-app in terminalstijl met tarot-projectkaarten, een skills-grimoire en een EN/NL-schakelaar.',
    ),
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/images/project-4.svg',
    repo: 'https://github.com/zZProgenitorZz/Portfolio',
    size: 'large',
    status: 'wip',
    year: 2026,
    tags: ['web'],
    arcana: card(0, 'The Fool', 'De Dwaas'),
  },
  // Small projects: none yet. /works hides the section while this list is empty.
]
