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
  /** Classic Major Arcana card shown as a subtitle: number 0-21 and name. */
  arcana: { n: number; name: { en: string; nl: string } }
}

// TODO: replace all placeholders with your own projects.
const d = (s: string) => ({ en: s, nl: s }) // TODO: write the NL text
const card = (n: number, en: string, nl = en) => ({ n, name: { en, nl } }) // TODO: NL card names

export const projects: Project[] = [
  // Featured (shown on Home)
  { id: 'project-one', title: 'TODO: Project One', description: d('TODO: One or two sentences about what it does.'), tech: ['React', 'TypeScript', 'Tailwind'], image: '/images/project-1.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-one', size: 'large', featured: true, arcana: card(0, 'The Fool') },
  { id: 'project-two', title: 'TODO: Project Two', description: d('TODO: One or two sentences about what it does.'), tech: ['Python', 'FastAPI', 'PostgreSQL'], image: '/images/project-2.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-two', size: 'large', featured: true, arcana: card(1, 'The Magician') },
  { id: 'project-three', title: 'TODO: Project Three', description: d('TODO: One or two sentences about what it does.'), tech: ['Java', 'Spring'], image: '/images/project-3.svg', repo: 'https://github.com/your-username/project-three', size: 'large', featured: true, arcana: card(2, 'The High Priestess') },
  // More large projects
  { id: 'project-four', title: 'TODO: Project Four', description: d('TODO: One or two sentences about what it does.'), tech: ['C#', '.NET'], image: '/images/project-4.svg', repo: 'https://github.com/your-username/project-four', size: 'large', arcana: card(3, 'The Empress') },
  { id: 'project-five', title: 'TODO: Project Five', description: d('TODO: One or two sentences about what it does.'), tech: ['Node.js', 'Express', 'MongoDB'], image: '/images/project-5.svg', live: 'https://example.com', size: 'large', arcana: card(4, 'The Emperor') },
  { id: 'project-six', title: 'TODO: Project Six', description: d('TODO: One or two sentences about what it does.'), tech: ['Vue', 'Firebase'], image: '/images/project-6.svg', live: 'https://example.com', repo: 'https://github.com/your-username/project-six', size: 'large', arcana: card(7, 'The Chariot') },
  // Small projects
  { id: 'small-one', title: 'TODO: Small One', description: d('TODO: Short description.'), tech: ['HTML', 'CSS', 'JS'], repo: 'https://github.com/your-username/small-one', size: 'small', arcana: card(9, 'The Hermit') },
  { id: 'small-two', title: 'TODO: Small Two', description: d('TODO: Short description.'), tech: ['Python'], repo: 'https://github.com/your-username/small-two', size: 'small', arcana: card(10, 'Wheel of Fortune') },
  { id: 'small-three', title: 'TODO: Small Three', description: d('TODO: Short description.'), tech: ['TypeScript'], live: 'https://example.com', size: 'small', arcana: card(17, 'The Star') },
  { id: 'small-four', title: 'TODO: Small Four', description: d('TODO: Short description.'), tech: ['Bash', 'Docker'], repo: 'https://github.com/your-username/small-four', size: 'small', arcana: card(18, 'The Moon') },
]
