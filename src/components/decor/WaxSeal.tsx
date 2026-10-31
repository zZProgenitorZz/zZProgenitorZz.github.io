/** Crimson wax-seal mark (scalloped edge with an inner ring). Inline, decorative. */
export default function WaxSeal({ size = 28 }: { size?: number }) {
  const bumps = 12
  let d = ''
  for (let i = 0; i < bumps; i++) {
    const a = (i / bumps) * Math.PI * 2
    const x = 20 + 17 * Math.cos(a)
    const y = 20 + 17 * Math.sin(a)
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)} `
  }
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 40 40" className="shrink-0">
      <path d={d + 'Z'} fill="#B3243B" stroke="#B3243B" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="#ECE6DA" strokeOpacity="0.55" />
      <path d="M15 20H25M20 15V25" stroke="#ECE6DA" strokeOpacity="0.55" />
    </svg>
  )
}
