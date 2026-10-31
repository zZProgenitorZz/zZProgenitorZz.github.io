type Props = { size?: number; className?: string }

/** Wax-seal mark: scalloped disc in the current text color, inner ring and cross in fg. Set the color via className (e.g. text-accent). */
export default function WaxSeal({ size = 20, className = 'text-accent' }: Props) {
  const bumps = 12
  let d = ''
  for (let i = 0; i < bumps; i++) {
    const a = (i / bumps) * Math.PI * 2
    d += `${i === 0 ? 'M' : 'L'}${(20 + 17 * Math.cos(a)).toFixed(2)} ${(20 + 17 * Math.sin(a)).toFixed(2)} `
  }
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 40 40" className={`shrink-0 ${className}`}>
      <path d={d + 'Z'} fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="10" fill="none" className="stroke-fg/[0.55]" />
      <path d="M15 20H25M20 15V25" className="stroke-fg/[0.55]" />
    </svg>
  )
}
