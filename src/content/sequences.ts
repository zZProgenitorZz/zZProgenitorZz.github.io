import { l10n, type Localized } from './localized'

export type Sequence = {
  seq: number // 9 (start) down to 0 (unknown)
  title: Localized
  year?: string
  text?: Localized
  current?: boolean
}

// Ordered from Sequence 9 (bottom of the ladder) to Sequence 0 (top).
export const sequences: Sequence[] = [
  {
    seq: 9,
    title: l10n('Curious Beginner', 'Nieuwsgierige beginner'),
    year: '2023',
    text: l10n(
      'Learned Python line by line from tutorials, starting with Hello World.',
      'Python regel voor regel geleerd met tutorials, beginnend bij Hello World.',
    ),
  },
  {
    seq: 8,
    title: l10n('Student Software Engineer', 'Student Software Engineer'),
    year: '2023–2025',
    text: l10n(
      'Started HBO-ICT Software Engineering at The Hague University of Applied Sciences and built my first small school projects.',
      'Begonnen aan HBO-ICT Software Engineering aan De Haagse Hogeschool en mijn eerste kleine schoolprojecten gebouwd.',
    ),
  },
  {
    seq: 7,
    title: l10n('Intern', 'Stagiair'),
    year: '2025–2026',
    text: l10n(
      'Backend and deployment of a medical annotation tool at AiDx Medical.',
      'Backend en deployment van een medische annotatietool bij AiDx Medical.',
    ),
  },
  {
    seq: 6,
    title: l10n('Full-Stack Builder', 'Full-stack bouwer'),
    year: '2026–',
    text: l10n(
      'Building full applications end to end, like GateKeeper and my Personal Tracker.',
      'Volledige applicaties van begin tot eind bouwen, zoals GateKeeper en mijn Personal Tracker.',
    ),
    current: true,
  },
  { seq: 5, title: l10n('Team Contributor', 'Teamspeler') },
  { seq: 4, title: l10n('Software Engineer', 'Software engineer') },
  { seq: 3, title: l10n('Cloud Engineer', 'Cloud engineer') },
  { seq: 2, title: l10n('Architect', 'Architect') },
  { seq: 1, title: l10n('Mentor', 'Mentor') },
  { seq: 0, title: l10n('?', '?') },
]
