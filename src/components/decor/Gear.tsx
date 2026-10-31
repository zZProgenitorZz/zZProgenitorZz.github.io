type Props = { size?: number; teeth?: number; spin?: boolean; className?: string; style?: React.CSSProperties }

/** Brass gear outline drawn in SVG. Absolutely positioned: pass position classes via className. */
export default function Gear({ size = 120, teeth = 12, spin = true, className = '', style }: Props) {
  const R = 48 // tooth tip
  const r = 40 // root
  const step = (Math.PI * 2) / teeth
  const pt = (rad: number, a: number) => `${(50 + rad * Math.cos(a)).toFixed(2)} ${(50 + rad * Math.sin(a)).toFixed(2)}`
  let d = ''
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    d += `${i === 0 ? 'M' : 'L'}${pt(r, a)} L${pt(R, a + step * 0.12)} L${pt(R, a + step * 0.38)} L${pt(r, a + step * 0.5)} `
  }
  d += 'Z'
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
      <g style={{ transformOrigin: '50px 50px' }} className={spin ? 'motion-safe:animate-gear-turn' : ''}>
        <path d={d} />
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="8" />
        <path d="M50 22V42M50 58V78M22 50H42M58 50H78" />
      </g>
    </svg>
  )
}
