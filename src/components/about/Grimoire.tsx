import TerminalWindow from '../ui/TerminalWindow'
import { skills, type SkillCategory } from '../../content/skills'
import { useT } from '../../i18n/LanguageContext'

type Kind = 'kw' | 'key' | 'str' | 'punc' | 'plain' | 'comment'
type Tok = { text: string; kind: Kind }

const order: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools', 'other', 'learning']

const color: Record<Kind, string> = {
  kw: 'text-accent-2',
  key: 'text-accent',
  str: 'text-ok',
  punc: 'text-muted',
  plain: 'text-fg',
  comment: 'italic text-muted',
}

/** Skills rendered as a syntax-highlighted TypeScript file with line numbers (generated from content/skills.ts). */
export default function Grimoire() {
  const t = useT()
  const lines: Tok[][] = [[
    { text: 'export const', kind: 'kw' },
    { text: ' grimoire ', kind: 'plain' },
    { text: '= {', kind: 'punc' },
  ]]
  for (const key of order) {
    lines.push([{ text: `  // ${t.skills[key]}`, kind: 'comment' }])
    const row: Tok[] = [
      { text: '  ', kind: 'plain' },
      { text: key, kind: 'key' },
      { text: ': [', kind: 'punc' },
    ]
    skills[key].forEach((s, i) => {
      row.push({ text: `"${s}"`, kind: 'str' })
      if (i < skills[key].length - 1) row.push({ text: ', ', kind: 'punc' })
    })
    row.push({ text: '],', kind: 'punc' })
    lines.push(row)
  }
  lines.push([
    { text: '} ', kind: 'punc' },
    { text: 'as const', kind: 'kw' },
  ])

  return (
    <TerminalWindow title={t.skills.file} bodyClassName="py-4">
      <pre className="overflow-hidden font-mono text-sm leading-relaxed" aria-label={t.skills.file}>
        {lines.map((toks, i) => (
          <div key={i} className="grid grid-cols-[2.75rem_minmax(0,1fr)]">
            <span aria-hidden="true" className="select-none pr-3 text-right text-line-strong">
              {i + 1}
            </span>
            <code className="whitespace-pre-wrap break-words pr-4">
              {toks.map((tok, j) => (
                <span key={j} className={color[tok.kind]}>
                  {tok.text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </TerminalWindow>
  )
}
