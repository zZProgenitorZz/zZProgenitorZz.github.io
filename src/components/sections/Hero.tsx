import Button from '../ui/Button'
import DotGrid from '../decor/DotGrid'
import OutlineSquare from '../decor/OutlineSquare'
import CurrentlyCard from './CurrentlyCard'
import { useT } from '../../i18n/LanguageContext'
import { fill, rich } from '../../lib/rich'

export default function Hero() {
  const t = useT()
  return (
    <section id="home" aria-labelledby="hero-title" className="py-12 md:py-16">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 id="hero-title" className="text-[32px] font-semibold leading-tight text-fg">
            {rich(fill(t.hero.title, { name: t.name }), 'text-accent')}
          </h1>
          <p className="mt-6 max-w-[48ch]">{t.hero.description}</p>
          <Button href="/#contacts" className="mt-8">
            {t.hero.cta}
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[380px] md:max-w-none">
          <div className="relative mx-auto max-w-[380px]">
            <OutlineSquare size={80} color="accent" className="-left-4 top-[45%] hidden md:block" />
            <OutlineSquare size={80} color="accent" className="-left-8 top-[45%] mt-4 hidden md:block" />
            <img
              src="/images/portrait.png"
              alt={t.hero.portraitAlt}
              width={400}
              height={480}
              className="relative mx-auto block h-auto w-full"
            />
            <DotGrid rows={5} cols={5} className="-right-4 bottom-4 hidden md:block" />
          </div>
          <CurrentlyCard />
        </div>
      </div>
    </section>
  )
}
