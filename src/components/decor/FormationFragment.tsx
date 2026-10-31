type Props = { variant?: 'a' | 'b' | 'c'; size?: number; className?: string; style?: React.CSSProperties }

/** Small circle-and-line formation fragments. Absolutely positioned: pass position classes via className. */
export default function FormationFragment({ variant = 'a', size = 120, className = '', style }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="#3A3350"
      style={style}
      className={`pointer-events-none absolute ${className}`}
    >
      {variant === 'a' && (
        <>
          <circle cx="60" cy="60" r="54" />
          <circle cx="60" cy="60" r="34" stroke="#D9B45A" strokeOpacity="0.45" />
          <path d="M60 6V114M6 60H114" />
          <circle cx="60" cy="60" r="3" fill="#9D6BFF" stroke="none" />
        </>
      )}
      {variant === 'b' && (
        <>
          <path d="M6 60A54 54 0 0 1 114 60" />
          <path d="M20 60A40 40 0 0 1 100 60" stroke="#9D6BFF" strokeOpacity="0.5" />
          <path d="M60 60V114M30 90L60 60L90 90" />
          <circle cx="60" cy="114" r="3" stroke="#D9B45A" strokeOpacity="0.6" />
        </>
      )}
      {variant === 'c' && (
        <>
          <path d="M60 6L114 60L60 114L6 60Z" />
          <circle cx="60" cy="60" r="24" stroke="#9D6BFF" strokeOpacity="0.5" />
          <path d="M36 60H84" stroke="#D9B45A" strokeOpacity="0.45" />
        </>
      )}
    </svg>
  )
}
