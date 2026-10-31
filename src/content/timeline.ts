export type Milestone = {
  year: string
  title: { en: string; nl: string }
  text: { en: string; nl: string }
}

const d = (s: string) => ({ en: s, nl: s }) // TODO: write the NL text

// TODO: replace with your own milestones (oldest first).
export const timeline: Milestone[] = [
  { year: 'TODO: 20XX', title: d('TODO: Start of study'), text: d('TODO: Began Software Engineering and wrote my first real programs.') },
  { year: 'TODO: 20XX', title: d('TODO: First app'), text: d('TODO: Built and shipped my first complete application.') },
  { year: 'TODO: 20XX', title: d('TODO: Internship / job'), text: d('TODO: Worked on a real team and a real codebase.') },
  { year: 'TODO: Now', title: d('TODO: Current focus'), text: d('TODO: What I am learning and building right now.') },
]
