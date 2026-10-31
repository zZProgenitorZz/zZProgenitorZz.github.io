import Hero from '../components/sections/Hero'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import SkillsSection from '../components/sections/SkillsSection'
import Journey from '../components/sections/Journey'
import AboutPreview from '../components/sections/AboutPreview'
import ContactSection from '../components/sections/ContactSection'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'

export default function HomePage() {
  return (
    <div className="relative">
      <PageEdgeDecor
        items={[
          { top: '36%', side: 'left' },
          { top: '58%', side: 'right' },
          { top: '82%', side: 'left' },
        ]}
      />
      <Hero />
      <ProjectsPreview />
      <SkillsSection />
      <Journey num="03" decor="clock" />
      <AboutPreview />
      <ContactSection />
    </div>
  )
}
