export type Socials = {
  email: string
  github: string
  linkedin: string
  /** Per-language CV PDF in public/cv/. Leave out to hide the download button. */
  cv?: { en: string; nl: string }
}

export const socials: Socials = {
  email: 'Shantosh-2002@hotmail.nl',
  github: 'https://github.com/zZProgenitorZz',
  linkedin: 'https://www.linkedin.com/in/shantosh-merhai-225ab2315',
  cv: { en: '/cv/CV_Shantosh_Merhai_EN.pdf', nl: '/cv/CV_Shantosh_Merhai_NL.pdf' },
}
