type Props = { size?: number; className?: string; style?: React.CSSProperties }

/** Clock-hand outline (static): ring, hour ticks and two hands. Stroke follows the text color. Position via className. */
export default function ClockHands({ size = 110, className = '', style }: Props) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30)
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={style}
      className={`pointer-events-none absolute text-line-strong/50 ${className}`}
    >
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="42" strokeOpacity="0.5" />
      {ticks.map((a) => (
        <path key={a} d="M50 8V14" transform={`rotate(${a} 50 50)`} />
      ))}
      <path d="M50 50L50 20" />
      <path d="M50 50L72 62" />
      <circle cx="50" cy="50" r="2.5" className="stroke-accent-2" />
    </svg>
  )
}
