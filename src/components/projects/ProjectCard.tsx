import { useEffect, useRef, useState, type RefObject } from 'react'
import { RotateCw } from 'lucide-react'
import SafeImage from '../ui/SafeImage'
import CornerBrackets from '../decor/CornerBrackets'
import RuneCircle from '../decor/RuneCircle'
import FileTab from './FileTab'
import ProjectLinks from './ProjectLinks'
import StackLine from './StackLine'
import StatusLabels from './StatusLabels'
import { useLang, useT } from '../../i18n/LanguageContext'
import { fill } from '../../lib/rich'
import { roman } from '../../lib/roman'
import type { Project } from '../../content/projects'

type BarProps = {
  project: Project
  label: string
  pressed: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement>
}

/** Editor-tab bar: file tab on the left, card numeral and flip toggle on the right. */
function TopBar({ project, label, pressed, onToggle, toggleRef }: BarProps) {
  return (
    <FileTab name={`${project.id}.tsx`}>
      <span className="flex shrink-0 items-center gap-1 pl-2">
        {project.arcana && (
          <span aria-hidden="true" className="text-accent">
            {roman(project.arcana.n)}
          </span>
        )}
        <button
          ref={toggleRef}
          type="button"
          aria-label={label}
          aria-pressed={pressed}
          onClick={onToggle}
          className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-fg md:h-8 md:w-8"
        >
          <RotateCw aria-hidden="true" className="h-4 w-4" />
        </button>
      </span>
    </FileTab>
  )
}

const face = 'absolute inset-0 flex flex-col border border-line bg-surface [backface-visibility:hidden]'
const body = 'relative m-2 flex min-h-0 flex-1 flex-col border border-accent/40 p-3'
const rune = <RuneCircle inline spin={false} className="h-28 w-28" />

/**
 * Tarot-ratio (7:12) spell file. The front shows the image in an arched window, the back the details.
 * Flips on mouse hover (fine pointers only) or via the toggle button (keyboard and touch).
 * The hidden face is inert, so its links cannot be clicked or tabbed to.
 * With prefers-reduced-motion the flip becomes a crossfade.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const t = useT()
  const { lang } = useLang()
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const flipped = hovered || pinned

  const front = useRef<HTMLDivElement>(null)
  const back = useRef<HTMLDivElement>(null)
  const frontToggle = useRef<HTMLButtonElement>(null)
  const backToggle = useRef<HTMLButtonElement>(null)
  const focusTarget = useRef<'front' | 'back' | null>(null)

  // `inert` is not in React 18 types: toggle the attribute directly, then move focus if a toggle was used.
  useEffect(() => {
    front.current?.toggleAttribute('inert', flipped)
    back.current?.toggleAttribute('inert', !flipped)
    if (focusTarget.current) {
      ;(focusTarget.current === 'back' ? backToggle : frontToggle).current?.focus()
      focusTarget.current = null
    }
  }, [flipped, pinned])

  const showBack = () => {
    focusTarget.current = 'back'
    setPinned(true)
  }
  const showFront = () => {
    focusTarget.current = 'front'
    setPinned(false)
    setHovered(false)
  }

  const arcana = project.arcana ? `${project.arcana.n} · ${project.arcana.name[lang]}` : ''

  return (
    <article
      onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[7/12] w-full transition-transform [perspective:1200px] hover:-translate-y-0.5"
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:!transform-none ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div
          ref={front}
          aria-hidden={flipped}
          className={`${face} motion-reduce:transition-opacity ${flipped ? 'motion-reduce:opacity-0' : ''}`}
        >
          <TopBar project={project} label={t.projects.showDetails} pressed={pinned} onToggle={showBack} toggleRef={frontToggle} />
          <div className={body}>
            <div
              className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-accent/40 bg-bg"
              style={{ borderRadius: '999px 999px 0 0' }}
            >
              {project.image ? (
                <SafeImage
                  src={project.image}
                  alt={fill(t.projects.thumbnailAlt, { title: project.title })}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: project.imagePosition }}
                  fallback={rune}
                />
              ) : (
                rune
              )}
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-bold leading-tight text-fg">{project.title}</h3>
              {arcana && <p className="mt-1 text-xs text-accent">{arcana}</p>}
              <p className="mt-1 text-xs">
                <StatusLabels status={project.status} />
              </p>
            </div>
          </div>
        </div>

        <div
          ref={back}
          aria-hidden={!flipped}
          className={`${face} [transform:rotateY(180deg)] motion-reduce:[transform:none] motion-reduce:transition-opacity ${
            flipped ? '' : 'motion-reduce:opacity-0'
          }`}
        >
          <TopBar project={project} label={t.projects.showFront} pressed={pinned} onToggle={showFront} toggleRef={backToggle} />
          <div className={body}>
            <h3 className="text-lg font-bold text-fg">{project.title}</h3>
            <StackLine tech={project.tech} />
            <p className="mt-3 min-h-0 flex-1 overflow-y-auto text-sm">{project.description[lang]}</p>
            <ProjectLinks project={project} className="mt-3" />
            <CornerBrackets visible={flipped} size={10} />
          </div>
        </div>
      </div>
    </article>
  )
}
