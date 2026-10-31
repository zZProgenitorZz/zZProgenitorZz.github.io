import Hero from '../components/sections/Hero'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import SkillsSection from '../components/sections/SkillsSection'
import AboutPreview from '../components/sections/AboutPreview'
import ContactSection from '../components/sections/ContactSection'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'

export default function HomePage() {
  return (
    <div className="relative">
      <PageEdgeDecor
        items={[
          { top: '36%', side: 'left' },
          { top: '55%', side: 'right' },
          { top: '80%', side: 'left' },
        ]}
      />
      <Hero />
      <ProjectsPreview />
      <SkillsSection />
      <AboutPreview />
      <ContactSection />
    </div>
  )
}
