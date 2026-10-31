/** Large blurred purple "qi" glow with a faint gold core, drifting slowly. Position via className. */
export default function QiGlow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div
        className="absolute inset-0 blur-2xl motion-safe:animate-qi-drift"
        style={{
          background:
            'radial-gradient(circle at 35% 40%, rgba(157,107,255,0.45), transparent 58%), radial-gradient(circle at 68% 66%, rgba(217,180,90,0.16), transparent 52%)',
        }}
      />
    </div>
  )
}
