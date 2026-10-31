export type Sequence = {
  seq: number // 9 (start) down to 0 (unknown)
  title: { en: string; nl: string }
  year?: string
  text?: { en: string; nl: string }
  current?: boolean
}

const d = (en: string, nl: string) => ({ en, nl })

// Ordered from Sequence 9 (bottom of the ladder) to Sequence 0 (top).
export const sequences: Sequence[] = [
  {
    seq: 9,
    title: d('Curious Beginner', 'Nieuwsgierige beginner'),
    year: '2023',
    text: d(
      'Learned Python line by line from tutorials, starting with Hello World.',
      'Python regel voor regel geleerd met tutorials, beginnend bij Hello World.',
    ),
  },
  {
    seq: 8,
    title: d('Student Software Engineer', 'Student Software Engineer'),
    year: '2023–2025',
    text: d(
      'Started HBO-ICT Software Engineering at The Hague University of Applied Sciences and built my first small school projects.',
      'Begonnen aan HBO-ICT Software Engineering aan De Haagse Hogeschool en mijn eerste kleine schoolprojecten gebouwd.',
    ),
  },
  {
    seq: 7,
    title: d('Intern', 'Stagiair'),
    year: '2025–2026',
    text: d(
      'Backend and deployment of a medical annotation tool at AiDx Medical.',
      'Backend en deployment van een medische annotatietool bij AiDx Medical.',
    ),
  },
  {
    seq: 6,
    title: d('Full-Stack Builder', 'Full-stack bouwer'),
    year: '2026–',
    text: d(
      'Building full applications end to end, like GateKeeper and my Personal Tracker.',
      'Volledige applicaties van begin tot eind bouwen, zoals GateKeeper en mijn Personal Tracker.',
    ),
    current: true,
  },
  { seq: 5, title: d('Team Contributor', 'Teamspeler') },
  { seq: 4, title: d('Software Engineer', 'Software engineer') },
  { seq: 3, title: d('Cloud Engineer', 'Cloud engineer') },
  { seq: 2, title: d('Architect', 'Architect') },
  { seq: 1, title: d('Mentor', 'Mentor') },
  { seq: 0, title: d('?', '?') },
]
