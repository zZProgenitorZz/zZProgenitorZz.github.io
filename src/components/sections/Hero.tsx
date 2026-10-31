import Button from '../ui/Button'
import QiGlow from '../decor/QiGlow'
import FormationArray from '../decor/FormationArray'
import CurrentlyCard from './CurrentlyCard'
import { useT } from '../../i18n/LanguageContext'

export default function Hero() {
  const t = useT()
  return (
    <section id="home" aria-labelledby="hero-title" className="py-12 md:py-16">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 id="hero-title" className="font-display text-5xl font-semibold leading-none text-fg md:text-6xl">
            {t.name}
          </h1>
          <p className="mt-4 text-base text-accent md:text-lg">{t.hero.subtitle}</p>
          <p className="mt-6 max-w-[48ch]">{t.hero.description}</p>
          <Button href="/#contacts" className="mt-8">
            {t.hero.cta}
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[380px] md:max-w-none">
          <div className="relative mx-auto max-w-[380px]">
            <QiGlow className="-inset-10 hidden md:block" />
            <QiGlow className="inset-0 md:hidden" />
            <FormationArray className="left-1/2 top-[48%] hidden w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 md:block" />
            <img
              src="/images/portrait.png"
              alt={t.hero.portraitAlt}
              width={400}
              height={480}
              className="relative mx-auto block h-auto w-full"
            />
          </div>
          <CurrentlyCard />
        </div>
      </div>
    </section>
  )
}
