import type { CSSProperties } from "react"

const STEP = 16
const R = 2

type Props = { rows?: number; cols?: number; className?: string; style?: CSSProperties }

/** Decorative dot grid. Absolutely positioned: pass position classes via className. */
export default function DotGrid({ rows = 5, cols = 5, className = "", style }: Props) {
  const w = (cols - 1) * STEP + R * 2
  const h = (rows - 1) * STEP + R * 2
  const dots = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) dots.push(<circle key={`${r}-${c}`} cx={R + c * STEP} cy={R + r * STEP} r={R} />)
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="#ABB2BF"
      style={style}
      className={`pointer-events-none absolute ${className}`}
    >
      {dots}
    </svg>
  )
}
