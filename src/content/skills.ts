export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools' | 'other'

// TODO: replace with your own skills.
export const skills: Record<SkillCategory, string[]> = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Spring', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Linux'],
  other: ['REST', 'Agile', 'Testing', 'CI/CD'],
}
