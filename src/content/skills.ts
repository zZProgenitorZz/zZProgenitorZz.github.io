export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools' | 'other' | 'learning'

// TODO: replace with your own skills. "learning" = what you are studying right now.
export const skills: Record<SkillCategory, string[]> = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Spring', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Linux'],
  other: ['REST', 'Agile', 'Testing', 'CI/CD'],
  learning: ['Rust', 'Kubernetes', 'LLM tooling'],
}
