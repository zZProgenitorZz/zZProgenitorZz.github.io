import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../contact/ContactForm'
import ContactLinks from '../contact/ContactLinks'
import { useT } from '../../i18n/LanguageContext'

export default function ContactSection() {
  const t = useT()
  return (
    <Section id="contacts" labelledBy="contacts-heading">
      <SectionHeading id="contacts-heading" title={t.contact.heading} />
      <div className="grid gap-8 md:grid-cols-2">
        <p>{t.contact.intro}</p>
        <ContactLinks />
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
    </Section>
  )
}
