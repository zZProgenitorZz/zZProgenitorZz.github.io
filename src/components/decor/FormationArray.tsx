/** Concentric "formation array" circles drawn in SVG. Position via className. */
export default function FormationArray({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 24 }, (_, i) => i * 15)
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      <circle cx="200" cy="200" r="196" stroke="#3A3350" />
      <circle cx="200" cy="200" r="172" stroke="#D9B45A" strokeOpacity="0.35" />
      <circle cx="200" cy="200" r="140" stroke="#3A3350" />
      <g className="origin-center motion-safe:animate-spin-slow" style={{ transformOrigin: '200px 200px' }}>
        <circle cx="200" cy="200" r="156" stroke="#9D6BFF" strokeOpacity="0.5" strokeDasharray="2 8" />
        {ticks.map((a) => (
          <path key={a} d="M200 4V14" stroke="#3A3350" transform={`rotate(${a} 200 200)`} />
        ))}
        <path d="M200 28L372 200L200 372L28 200Z" stroke="#9D6BFF" strokeOpacity="0.3" />
      </g>
    </svg>
  )
}
