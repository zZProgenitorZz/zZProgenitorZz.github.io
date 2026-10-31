export type Sequence = {
  seq: number // 9 (start) down to 0 (unknown)
  title: { en: string; nl: string }
  year?: string
  text?: { en: string; nl: string }
  current?: boolean
}

const d = (s: string) => ({ en: s, nl: s }) // TODO: write the NL text

// Ordered from Sequence 9 (bottom of the ladder) to Sequence 0 (top).
// TODO: rename the titles to your own path; fill in years and milestones for steps you have reached.
export const sequences: Sequence[] = [
  { seq: 9, title: d('Curious Beginner'), year: 'TODO: 20XX', text: d('TODO: The first programs and the first spark.') },
  { seq: 8, title: d('Student Engineer'), year: 'TODO: Now', text: d('TODO: Software Engineering studies and real projects.'), current: true },
  { seq: 7, title: d('Full-Stack Builder') },
  { seq: 6, title: d('Systems Thinker') },
  { seq: 5, title: d('Team Contributor') },
  { seq: 4, title: d('Software Engineer') },
  { seq: 3, title: d('Technical Lead') },
  { seq: 2, title: d('Architect') },
  { seq: 1, title: d('Mentor') },
  { seq: 0, title: d('?') },
]
