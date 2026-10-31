import { useId } from 'react'

const GLYPHS = '{ } < / > ; = ( ) [ ] => && || ! ? # $ % '

function ring(radius: number) {
  const circumference = 2 * Math.PI * radius
  const reps = Math.ceil(circumference / (GLYPHS.length * 9)) + 1
  return { text: GLYPHS.repeat(reps).slice(0, Math.floor(circumference / 14)), circumference }
}

type Props = {
  className?: string
  /** Slow rotation (default). Set false for a static ring. */
  spin?: boolean
  /** Render in normal flow instead of absolutely positioned. */
  inline?: boolean
}

/** Rings of tiny code glyphs, rotating very slowly. Original SVG. Position via className. */
export default function RuneCircle({ className = '', spin = true, inline = false }: Props) {
  const uid = useId().replace(/:/g, '')
  const outer = ring(226)
  const inner = ring(186)
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 500 500"
      fill="none"
      className={`pointer-events-none ${inline ? '' : 'absolute'} ${className}`}
    >
      <defs>
        <path id={`${uid}-a`} d="M250,250 m-226,0 a226,226 0 1,1 452,0 a226,226 0 1,1 -452,0" />
        <path id={`${uid}-b`} d="M250,250 m-186,0 a186,186 0 1,1 372,0 a186,186 0 1,1 -372,0" />
      </defs>
      <circle cx="250" cy="250" r="244" stroke="#3B3D52" />
      <circle cx="250" cy="250" r="206" stroke="#3B3D52" />
      <circle cx="250" cy="250" r="166" stroke="#A277FF" strokeOpacity="0.4" strokeDasharray="3 6" />
      <g
        className={spin ? 'motion-safe:animate-rune-spin' : ''}
        style={{ transformOrigin: '250px 250px' }}
        fill="#6B6F8E"
        fontFamily="JetBrains Mono, monospace"
        fontSize="14"
      >
        <text>
          <textPath href={`#${uid}-a`} textLength={outer.circumference - 2} lengthAdjust="spacing">
            {outer.text}
          </textPath>
        </text>
        <text>
          <textPath href={`#${uid}-b`} textLength={inner.circumference - 2} lengthAdjust="spacing">
            {inner.text}
          </textPath>
        </text>
      </g>
    </svg>
  )
}
