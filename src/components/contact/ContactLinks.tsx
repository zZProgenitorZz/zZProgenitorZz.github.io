import SocialLinks from '../ui/SocialLinks'
import { socialLinks } from '../../content/socials'
import { useT } from '../../i18n/LanguageContext'

const [github, linkedin, email] = socialLinks

export default function ContactLinks() {
  const t = useT()
  return (
    <div className="border border-line p-4">
      <h3 className="font-medium text-fg">{t.contact.boxTitle}</h3>
      <SocialLinks
        className="mt-2 space-y-1"
        linkClass="flex min-h-11 items-center gap-2 break-all transition-colors hover:text-fg"
        iconClass="h-5 w-5 shrink-0"
        links={[email, github, linkedin]}
        showText
      />
    </div>
  )
}
