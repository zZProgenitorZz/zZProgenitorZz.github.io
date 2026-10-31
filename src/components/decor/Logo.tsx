import { Link } from 'react-router-dom'
import { useT } from '../../i18n/LanguageContext'

export default function Logo({ onClick }: { onClick?: () => void }) {
  const t = useT()
  return (
    <Link to="/" onClick={onClick} className="inline-flex min-h-11 items-center gap-2 font-display text-xl font-bold text-fg">
      <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="0.5" y="0.5" width="19" height="19" stroke="#D9B45A" />
        <rect x="5.5" y="5.5" width="9" height="9" stroke="#9D6BFF" />
      </svg>
      {t.name}
    </Link>
  )
}
