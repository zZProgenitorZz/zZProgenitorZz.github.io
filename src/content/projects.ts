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
}

// TODO: replace all placeholders with your own projects.
const d = (s: string) => ({ en: s, nl: s }) // TODO: write the NL text

export const projects: Project[] = [
  // Featured (shown on Home)
  { id: 'project-one', title: 'TODO: Project One', description: d('TODO: One or two sentences about what it does.'), tech: ['React', 'TypeScript', 'Tailwind'], image: '/images/project-1.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-one', size: 'large', featured: true },
  { id: 'project-two', title: 'TODO: Project Two', description: d('TODO: One or two sentences about what it does.'), tech: ['Python', 'FastAPI', 'PostgreSQL'], image: '/images/project-2.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-two', size: 'large', featured: true },
  { id: 'project-three', title: 'TODO: Project Three', description: d('TODO: One or two sentences about what it does.'), tech: ['Java', 'Spring'], image: '/images/project-3.svg', repo: 'https://github.com/your-username/project-three', size: 'large', featured: true },
  // More large projects
  { id: 'project-four', title: 'TODO: Project Four', description: d('TODO: One or two sentences about what it does.'), tech: ['C#', '.NET'], image: '/images/project-4.svg', repo: 'https://github.com/your-username/project-four', size: 'large' },
  { id: 'project-five', title: 'TODO: Project Five', description: d('TODO: One or two sentences about what it does.'), tech: ['Node.js', 'Express', 'MongoDB'], image: '/images/project-5.svg', live: 'https://example.com', size: 'large' },
  { id: 'project-six', title: 'TODO: Project Six', description: d('TODO: One or two sentences about what it does.'), tech: ['Vue', 'Firebase'], image: '/images/project-6.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-six', size: 'large' },
  // Small projects
  { id: 'small-one', title: 'TODO: Small One', description: d('TODO: Short description.'), tech: ['HTML', 'CSS', 'JS'], repo: 'https://github.com/your-username/small-one', size: 'small' },
  { id: 'small-two', title: 'TODO: Small Two', description: d('TODO: Short description.'), tech: ['Python'], repo: 'https://github.com/your-username/small-two', size: 'small' },
  { id: 'small-three', title: 'TODO: Small Three', description: d('TODO: Short description.'), tech: ['TypeScript'], live: 'https://example.com', size: 'small' },
  { id: 'small-four', title: 'TODO: Small Four', description: d('TODO: Short description.'), tech: ['Bash', 'Docker'], repo: 'https://github.com/your-username/small-four', size: 'small' },
]
