import Button from '../ui/Button'
import { useT } from '../../i18n/LanguageContext'

export default function ErrorFallback() {
  const t = useT()
  return (
    <div role="alert" className="container-page py-24">
      <p>{t.errorPage.text}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="ghost" onClick={() => window.location.reload()}>
          {t.errorPage.reload}
        </Button>
        <Button href="/" variant="ghost">
          {t.notFound.back}
        </Button>
      </div>
    </div>
  )
}
