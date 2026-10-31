type Props = { variant?: 'a' | 'b' | 'c'; size?: number; className?: string; style?: React.CSSProperties; absolute?: boolean }

/** Small original sigil: circles, arcs and dots. No traditional symbols. */
export default function Sigil({ variant = 'a', size = 80, className = '', style, absolute = true }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="#B08D57"
      strokeOpacity="0.55"
      strokeWidth="1"
      style={style}
      className={`pointer-events-none ${absolute ? 'absolute' : ''} ${className}`}
    >
      {variant === 'a' && (
        <>
          <circle cx="50" cy="50" r="44" />
          <circle cx="50" cy="50" r="26" />
          <path d="M6 50A44 44 0 0 1 50 6M94 50A44 44 0 0 1 50 94" stroke="#8E6BD8" />
          <circle cx="50" cy="50" r="3" fill="#B3243B" stroke="none" />
        </>
      )}
      {variant === 'b' && (
        <>
          <path d="M50 8L88 50L50 92L12 50Z" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 8V32M50 68V92" stroke="#8E6BD8" />
          <circle cx="50" cy="50" r="2.5" fill="#B08D57" stroke="none" />
        </>
      )}
      {variant === 'c' && (
        <>
          <circle cx="50" cy="50" r="40" />
          <path d="M20 70A40 40 0 0 1 80 70" stroke="#8E6BD8" />
          <path d="M30 30L70 30M50 30V70" />
          <circle cx="50" cy="76" r="3" fill="#B3243B" stroke="none" />
        </>
      )}
    </svg>
  )
}
