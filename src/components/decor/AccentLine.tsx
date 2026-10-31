export default function AccentLine({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none h-px bg-accent ${className}`} />
}
