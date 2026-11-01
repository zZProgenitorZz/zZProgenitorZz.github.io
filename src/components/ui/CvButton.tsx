import Button from './Button'
import { socials } from '../../content/socials'
import { useLang, useT } from '../../i18n/LanguageContext'

/** Download link for the CV in the active language; renders nothing while `socials.cv` is unset. */
export default function CvButton() {
  const t = useT()
  const { lang } = useLang()
  if (!socials.cv) return null
  return (
    <Button href={socials.cv[lang]} download variant="ghost">
      {t.common.downloadCv}
    </Button>
  )
}
