export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools' | 'other'

/** Realm level 1-5: 1 Qi Gathering, 2 Foundation, 3 Core Forming, 4 Nascent Soul, 5 Transcendence. */
export type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 }

// TODO: replace with your own skills and honest levels.
export const skills: Record<SkillCategory, Skill[]> = {
  languages: [
    { name: 'TypeScript', level: 3 },
    { name: 'JavaScript', level: 3 },
    { name: 'Python', level: 3 },
    { name: 'Java', level: 2 },
    { name: 'C#', level: 2 },
    { name: 'SQL', level: 2 },
  ],
  frameworks: [
    { name: 'React', level: 3 },
    { name: 'Node.js', level: 2 },
    { name: 'Express', level: 2 },
    { name: 'Spring', level: 1 },
    { name: 'Tailwind CSS', level: 4 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 2 },
    { name: 'MySQL', level: 2 },
    { name: 'MongoDB', level: 1 },
    { name: 'SQLite', level: 2 },
  ],
  tools: [
    { name: 'Git', level: 3 },
    { name: 'GitHub', level: 3 },
    { name: 'Docker', level: 1 },
    { name: 'VS Code', level: 4 },
    { name: 'Figma', level: 2 },
    { name: 'Linux', level: 2 },
  ],
  other: [
    { name: 'REST', level: 3 },
    { name: 'Agile', level: 2 },
    { name: 'Testing', level: 2 },
    { name: 'CI/CD', level: 1 },
  ],
}
