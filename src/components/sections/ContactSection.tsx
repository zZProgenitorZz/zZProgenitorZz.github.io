import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../contact/ContactForm'
import ContactLinks from '../contact/ContactLinks'
import { useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'

export default function ContactSection() {
  const t = useT()
  return (
    <Section id="contacts" labelledBy="contacts-heading">
      <SectionHeading id="contacts-heading" title={t.contact.heading} />
      <div className="grid gap-8 md:grid-cols-2">
        <p>{t.contact.intro}</p>
        <ContactLinks />
      </div>
      {/* The form is written as a letter */}
      <div className="relative mt-12 border border-brass/60 bg-surface p-4 md:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-1 border border-brass/30" />
        <p className="relative mb-6 font-display text-2xl italic text-fg">{fill(t.contact.letterGreeting, { name: t.name })}</p>
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
