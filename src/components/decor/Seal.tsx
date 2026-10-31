type Props = { char?: string; size?: number; className?: string }

/** Small seal-stamp: double gold square with a letter, or a drawn circle mark when no letter is given. */
export default function Seal({ char, size = 40, className = '' }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`shrink-0 text-gold ${className}`}
    >
      <rect x="0.5" y="0.5" width="39" height="39" stroke="currentColor" />
      <rect x="4.5" y="4.5" width="31" height="31" stroke="currentColor" strokeOpacity="0.5" />
      {char ? (
        <text
          x="20"
          y="27"
          textAnchor="middle"
          fill="currentColor"
          fontFamily='"Cormorant Garamond", Georgia, serif'
          fontSize="22"
          fontWeight="700"
        >
          {char}
        </text>
      ) : (
        <>
          <circle cx="20" cy="20" r="8" stroke="currentColor" />
          <path d="M20 8V12M20 28V32M8 20H12M28 20H32" stroke="currentColor" />
        </>
      )}
    </svg>
  )
}
