import type { CSSProperties } from "react"

type Props = { size: number; color?: "line" | "accent"; className?: string; style?: CSSProperties }

/** Empty bordered square. Absolutely positioned: pass position classes via className. */
export default function OutlineSquare({ size, color = "line", className = "", style }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size, ...style }}
      className={`pointer-events-none absolute border ${color === 'accent' ? 'border-accent' : 'border-line'} ${className}`}
    />
  )
}
