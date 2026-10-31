import Button from '../ui/Button'
import BrassFrame from '../decor/BrassFrame'
import CurrentlyCard from './CurrentlyCard'
import { useT } from '../../i18n/LanguageContext'

export default function Hero() {
  const t = useT()
  return (
    <section id="home" aria-labelledby="hero-title" className="relative py-12 md:py-16">
      {/* Fog across the top (faint, decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
        <div
          className="absolute inset-x-[-10%] inset-y-0 blur-xl motion-safe:animate-fog-drift"
          style={{
            background:
              'radial-gradient(ellipse 45% 70% at 20% 0%, rgba(138,135,148,0.14), transparent), radial-gradient(ellipse 40% 60% at 80% 10%, rgba(138,135,148,0.12), transparent)',
          }}
        />
      </div>

      <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 id="hero-title" className="font-display text-5xl leading-none text-fg md:text-6xl">
            {t.name}
          </h1>
          <p className="mt-4 text-base text-accent md:text-lg">{t.hero.subtitle}</p>
          <p className="mt-6 max-w-[48ch]">{t.hero.description}</p>
          <Button href="/#contacts" className="mt-8">
            {t.hero.cta}
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[380px] md:max-w-none">
          <div className="relative mx-auto max-w-[340px]">
            {/* Crimson moon, partly hidden by fog and the frame */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 h-36 w-36 md:-right-12 md:-top-12 md:h-52 md:w-52">
              <div className="h-full w-full bg-crimson/90" style={{ borderRadius: '50%' }} />
              <div
                className="absolute inset-0 blur-md motion-safe:animate-fog-drift"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 30%, rgba(15,14,18,0.55) 55%, rgba(138,135,148,0.35) 80%, transparent)',
                }}
              />
            </div>
            <BrassFrame className="relative">
              <img src="/images/portrait.png" alt={t.hero.portraitAlt} width={400} height={480} className="block h-auto w-full" />
            </BrassFrame>
          </div>
          <CurrentlyCard />
        </div>
      </div>
    </section>
  )
}
