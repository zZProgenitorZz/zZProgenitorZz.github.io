import Hero from '../components/sections/Hero'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import SkillsSection from '../components/sections/SkillsSection'
import JourneyLog from '../components/sections/JourneyLog'
import AboutPreview from '../components/sections/AboutPreview'
import ContactSection from '../components/sections/ContactSection'
import PageEdgeDecor from '../components/decor/PageEdgeDecor'
import FogBand from '../components/decor/FogBand'

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
      <FogBand />
      <ProjectsPreview />
      <SkillsSection />
      <FogBand />
      <JourneyLog />
      <AboutPreview />
      <FogBand />
      <ContactSection />
    </div>
  )
}
