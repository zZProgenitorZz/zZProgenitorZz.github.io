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

// TODO: replace all placeholders with your own projects.
const d = (s: string) => ({ en: s, nl: s }) // TODO: write the NL text
// TODO: reorder the Major Arcana cards below so each one fits its project.
const card = (n: number, en: string, nl: string) => ({ n, name: { en, nl } })

export const projects: Project[] = [
  // Featured (shown on Home)
  { id: 'project-one', title: 'TODO: Project One', description: d('TODO: One or two sentences about what it does.'), tech: ['React', 'TypeScript', 'Tailwind'], image: '/images/project-1.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-one', size: 'large', featured: true, status: 'shipped', year: 2026, tags: ['web'], arcana: card(0, 'The Fool', 'De Dwaas') },
  { id: 'project-two', title: 'TODO: Project Two', description: d('TODO: One or two sentences about what it does.'), tech: ['Python', 'FastAPI', 'PostgreSQL'], image: '/images/project-2.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-two', size: 'large', featured: true, status: 'wip', year: 2026, tags: ['web', 'backend', 'ai'], arcana: card(1, 'The Magician', 'De Magiër') },
  { id: 'project-three', title: 'TODO: Project Three', description: d('TODO: One or two sentences about what it does.'), tech: ['Java', 'Spring'], image: '/images/project-3.svg', repo: 'https://github.com/your-username/project-three', size: 'large', featured: true, status: 'school', year: 2025, tags: ['backend'], arcana: card(2, 'The High Priestess', 'De Hogepriesteres') },
  // More large projects
  { id: 'project-four', title: 'TODO: Project Four', description: d('TODO: One or two sentences about what it does.'), tech: ['C#', '.NET'], image: '/images/project-4.svg', repo: 'https://github.com/your-username/project-four', size: 'large', status: 'school', year: 2025, tags: ['backend'], arcana: card(3, 'The Empress', 'De Keizerin') },
  { id: 'project-five', title: 'TODO: Project Five', description: d('TODO: One or two sentences about what it does.'), tech: ['Node.js', 'Express', 'MongoDB'], image: '/images/project-5.svg', live: 'https://example.com', size: 'large', status: 'shipped', year: 2024, tags: ['web', 'backend'], arcana: card(4, 'The Emperor', 'De Keizer') },
  { id: 'project-six', title: 'TODO: Project Six', description: d('TODO: One or two sentences about what it does.'), tech: ['Vue', 'Firebase'], image: '/images/project-6.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-six', size: 'large', status: 'shipped', year: 2024, tags: ['web'], arcana: card(5, 'The Hierophant', 'De Hogepriester') },
  // Small projects
  { id: 'small-one', title: 'TODO: Small One', description: d('TODO: Short description.'), tech: ['HTML', 'CSS', 'JS'], repo: 'https://github.com/your-username/small-one', size: 'small', status: 'shipped', year: 2024, tags: ['web'] },
  { id: 'small-two', title: 'TODO: Small Two', description: d('TODO: Short description.'), tech: ['Python'], repo: 'https://github.com/your-username/small-two', size: 'small', status: 'wip', year: 2026, tags: ['ai', 'tool'] },
  { id: 'small-three', title: 'TODO: Small Three', description: d('TODO: Short description.'), tech: ['TypeScript'], live: 'https://example.com', size: 'small', status: 'shipped', year: 2025, tags: ['web', 'tool'] },
  { id: 'small-four', title: 'TODO: Small Four', description: d('TODO: Short description.'), tech: ['Bash', 'Docker'], repo: 'https://github.com/your-username/small-four', size: 'small', status: 'school', year: 2025, tags: ['tool'] },
]
