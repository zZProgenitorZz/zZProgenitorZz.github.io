import type { ComponentType } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import type { Localized } from './localized'

type Socials = {
  email: string
  github: string
  linkedin: string
  /** Per-language CV PDF in public/cv/. Leave out to hide the download button. */
  cv?: Localized
}

export const socials: Socials = {
  email: 'Shantosh-2002@hotmail.nl',
  github: 'https://github.com/zZProgenitorZz',
  linkedin: 'https://www.linkedin.com/in/shantosh-merhai-225ab2315',
  cv: { en: '/cv/CV_Shantosh_Merhai_EN.pdf', nl: '/cv/CV_Shantosh_Merhai_NL.pdf' },
}

export const mailto = `mailto:${socials.email}`

export type SocialLink = {
  label: string
  /** Visible text where links are shown with a label. */
  text: string
  href: string
  external: boolean
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
}

/** GitHub, LinkedIn, email: the order used by the icon rows. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', text: 'GitHub', href: socials.github, external: true, icon: GithubIcon },
  { label: 'LinkedIn', text: 'LinkedIn', href: socials.linkedin, external: true, icon: LinkedinIcon },
  { label: 'Email', text: socials.email, href: mailto, external: false, icon: Mail },
]
