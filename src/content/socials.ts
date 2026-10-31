export type Socials = {
  email: string
  github: string
  linkedin: string
  /** Optional CV download. Empty = button hidden. */
  cv?: string
}

export const socials: Socials = {
  email: 'Shantosh-2002@hotmail.nl',
  github: 'https://github.com/zZProgenitorZz',
  linkedin: 'https://www.linkedin.com/in/shantosh-merhai-225ab2315',
  cv: '', // path to a PDF in public/, e.g. '/cv/Shantosh_Merhai_CV.pdf'. Empty = button hidden
}
