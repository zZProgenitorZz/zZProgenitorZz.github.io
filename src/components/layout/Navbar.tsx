import { Link } from 'react-router-dom'
import Logo from '../decor/Logo'
import { useT } from '../../i18n/LanguageContext'
import LanguageSelect from './LanguageSelect'
import MobileMenu from './MobileMenu'
import { useNavItems } from './navItems'

export default function Navbar() {
  const t = useT()
  const items = useNavItems()

  return (
    <header>
      <div className="container-page flex items-center justify-between py-3 md:py-6">
        <Logo />
        <nav aria-label={t.nav.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  aria-current={item.active ? 'page' : undefined}
                  className={`transition-colors hover:text-fg ${item.active ? 'font-medium text-fg' : 'text-muted'}`}
                >
                  <span className="text-accent">#</span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSelect />
            </li>
          </ul>
        </nav>
        <MobileMenu items={items} />
      </div>
    </header>
  )
}
