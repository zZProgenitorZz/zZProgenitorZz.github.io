/** A shell prompt followed by a command, e.g. "$ git log --graph --oneline". */
export default function PromptLine({ command, className = '' }: { command: string; className?: string }) {
  return (
    <p className={`text-sm ${className}`}>
      <span aria-hidden="true" className="mr-2 text-ok">
        $
      </span>
      <span className="text-fg">{command}</span>
    </p>
  )
}
