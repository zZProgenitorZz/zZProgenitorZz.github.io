import Button from '../ui/Button'
import Tag from '../ui/Tag'
import Sigil from '../decor/Sigil'
import { useLang, useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'
import { roman } from '../../lib/roman'
import type { Project } from '../../content/projects'

/**
 * Tarot-style card (7:12). Hover or keyboard focus flips it to show description, stack and links.
 * With prefers-reduced-motion the flip becomes a crossfade.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const t = useT()
  const { lang } = useLang()
  const arcana = `${project.arcana.n} · ${project.arcana.name[lang]}`

  return (
    <article className="group relative aspect-[7/12] w-full transition-transform [perspective:1200px] hover:-translate-y-0.5">
      <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-focus-within:[transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)] motion-reduce:!transform-none">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col border border-brass bg-surface p-3 [backface-visibility:hidden] motion-reduce:transition-opacity motion-reduce:group-focus-within:opacity-0 motion-reduce:group-hover:opacity-0">
          <div aria-hidden="true" className="pointer-events-none absolute inset-1 border border-brass/50" />
          <p aria-hidden="true" className="relative text-center font-display text-xl text-brass">
            {roman(project.arcana.n)}
          </p>
          <div
            className="relative my-2 flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-brass/60 bg-bg"
            style={{ borderRadius: '999px 999px 0 0' }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={fill(t.projects.thumbnailAlt, { title: project.title })}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <Sigil absolute={false} variant={(['a', 'b', 'c'] as const)[project.arcana.n % 3]} size={96} />
            )}
          </div>
          <div className="relative px-1 pb-1 text-center">
            <h3 className="font-display text-xl leading-tight text-fg">{project.title}</h3>
            <p className="mt-1 text-xs text-brass">{arcana}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col overflow-hidden border border-brass bg-surface p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:[transform:none] motion-reduce:group-focus-within:opacity-100 motion-reduce:group-hover:opacity-100">
          <div aria-hidden="true" className="pointer-events-none absolute inset-1 border border-brass/50" />
          <p aria-hidden="true" className="relative font-display text-lg text-fg">
            {project.title}
          </p>
          <p className="relative mt-3 min-h-0 flex-1 overflow-y-auto text-sm">{project.description[lang]}</p>
          <ul className="relative mt-3 flex flex-wrap gap-x-2 text-xs text-brass">
            {project.tech.map((x) => (
              <Tag key={x}>{x}</Tag>
            ))}
          </ul>
          {(project.live || project.repo) && (
            <div className="relative mt-3 flex flex-wrap gap-2">
              {project.live && (
                <Button size="sm" variant="primary" href={project.live}>
                  {t.projects.live}
                </Button>
              )}
              {project.repo && (
                <Button size="sm" variant="ghost" href={project.repo}>
                  {t.projects.repo}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
