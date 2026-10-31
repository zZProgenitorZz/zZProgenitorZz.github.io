export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools' | 'other' | 'learning'

// "learning" = what I am studying right now.
export const skills: Record<SkillCategory, string[]> = {
  languages: ['Java', 'Python', 'C#', 'JavaScript', 'SQL'],
  frameworks: ['Spring Boot', 'Spring Security', 'Axon Framework', 'FastAPI', 'React', 'HTMX', 'Thymeleaf', 'Tailwind CSS', 'HTML/CSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  tools: ['Git', 'GitLab', 'GitLab CI', 'Docker', 'Maven', 'AWS'],
  other: ['REST APIs', 'Event Sourcing', 'CQRS', 'Event Modeling', 'Agile / Scrum', 'Testing (JUnit, pytest)', 'Claude & ChatGPT', 'Unreal Engine', 'Houdini', 'Maya'],
  learning: ['TypeScript', 'Docker', 'CI/CD'],
}
