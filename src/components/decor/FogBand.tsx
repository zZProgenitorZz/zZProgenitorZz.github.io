/** Faint purple-grey fog band to place between sections. Overlaps only the section padding, never text. */
export default function FogBand({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none relative -my-6 h-12 overflow-hidden ${className}`}>
      <div
        className="absolute inset-x-[-10%] inset-y-0 blur-md motion-safe:animate-fog-drift"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 30% 50%, rgba(162,119,255,0.06), transparent), radial-gradient(ellipse 35% 45% at 72% 50%, rgba(107,111,142,0.10), transparent)',
        }}
      />
    </div>
  )
}
