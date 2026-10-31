import type { ReactNode } from 'react'

/** Replace {key} placeholders in a string. */
export function fill(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`)
}

/** Wrap **marked** parts of a string in a span with the given class. */
export function rich(text: string, className: string): ReactNode[] {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}
