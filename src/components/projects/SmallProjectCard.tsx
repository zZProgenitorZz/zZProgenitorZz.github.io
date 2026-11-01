import CornerBrackets from '../decor/CornerBrackets'
import FileTab from './FileTab'
import ProjectLinks from './ProjectLinks'
import StackLine from './StackLine'
import StatusLabels from './StatusLabels'
import { useLang } from '../../i18n/LanguageContext'
import type { Project } from '../../content/projects'

/** Flat "spell file" card for small projects (no image, no flip): editor tab, status, import line. */
export default function SmallProjectCard({ project }: { project: Project }) {
  const { lang } = useLang()
  return (
    <article className="group relative flex flex-col border border-line bg-surface transition-[border-color,transform] focus-within:border-accent hover:-translate-y-0.5 hover:border-accent">
      <FileTab name={`${project.id}.ts`}>
        <span className="shrink-0 px-3 py-2">
          <StatusLabels status={project.status} />
        </span>
      </FileTab>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-fg">{project.title}</h3>
        <StackLine tech={project.tech} />
        <p className="mt-3 flex-1">{project.description[lang]}</p>
        <ProjectLinks project={project} className="mt-4" />
      </div>
      <CornerBrackets />
    </article>
  )
}
