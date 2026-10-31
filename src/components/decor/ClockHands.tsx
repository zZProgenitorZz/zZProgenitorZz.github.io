type Props = { size?: number; className?: string; style?: React.CSSProperties }

/** Clock-hand outline: ring, hour ticks and two hands. Position via className. */
export default function ClockHands({ size = 120, className = '', style }: Props) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30)
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="#B08D57"
      strokeOpacity="0.5"
      strokeWidth="0.8"
      style={style}
      className={`pointer-events-none absolute ${className}`}
    >
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="42" strokeOpacity="0.5" />
      {ticks.map((a) => (
        <path key={a} d="M50 8V14" transform={`rotate(${a} 50 50)`} />
      ))}
      <path d="M50 50L50 20" />
      <path d="M50 50L72 62" />
      <circle cx="50" cy="50" r="2.5" stroke="#B3243B" strokeOpacity="0.9" />
    </svg>
  )
}
