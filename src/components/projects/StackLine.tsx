/** `import { A, B } from 'stack'` line, plus the same list as plain text for screen readers. */
export default function StackLine({ tech }: { tech: string[] }) {
  return (
    <>
      <p className="mt-2 break-words text-sm">
        <span className="text-accent-2">import</span> <span className="text-fg">{`{ ${tech.join(', ')} }`}</span>{' '}
        <span className="text-accent-2">from</span> <span className="text-ok">'stack'</span>
      </p>
      <ul className="sr-only">
        {tech.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </>
  )
}
