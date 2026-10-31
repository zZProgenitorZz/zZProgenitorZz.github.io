type Props = { size?: number; className?: string; style?: React.CSSProperties }

/** Small + crosshair with an open center. Absolutely positioned: pass position classes via className. */
export default function Crosshair({ size = 20, className = '', style }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="#6B6F8E"
      style={style}
      className={`pointer-events-none absolute ${className}`}
    >
      <path d="M10 0V7M10 13V20M0 10H7M13 10H20" />
    </svg>
  )
}
