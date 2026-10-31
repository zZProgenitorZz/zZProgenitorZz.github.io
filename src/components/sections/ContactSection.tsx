import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ScrollPanel from '../ui/ScrollPanel'
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
      <ScrollPanel className="mt-12">
        <ContactForm />
      </ScrollPanel>
    </Section>
  )
}
