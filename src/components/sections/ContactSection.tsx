import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import TerminalWindow from '../ui/TerminalWindow'
import ContactForm from '../contact/ContactForm'
import ContactLinks from '../contact/ContactLinks'
import { useT } from '../../i18n/LanguageContext'

export default function ContactSection() {
  const t = useT()
  return (
    <Section id="contacts" labelledBy="contacts-heading">
      <SectionHeading id="contacts-heading" num="05" title={t.contact.heading} />
      <div className="grid gap-8 md:grid-cols-2">
        <p>{t.contact.intro}</p>
        <ContactLinks />
      </div>
      <TerminalWindow title={t.contact.scriptTitle} className="mt-12">
        <p className="mb-4 text-sm" aria-hidden="true">
          {t.contact.scriptComment}
        </p>
        <ContactForm />
      </TerminalWindow>
    </Section>
  )
}
