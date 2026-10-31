type Props = {
  always?: boolean
  /** When set, brackets fade in/out with this flag instead of parent hover/focus. */
  visible?: boolean
  size?: number
  className?: string
}

/** Four corner brackets. Parent needs `relative` (and `group` when brackets appear on hover/focus). */
export default function CornerBrackets({ always = false, visible, size = 12, className = '' }: Props) {
  const vis = always
    ? ''
    : visible === undefined
      ? 'opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100'
      : `transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`
  const s = { width: size, height: size }
  return (
    <span aria-hidden="true" className={`pointer-events-none ${vis} ${className}`}>
      <span style={s} className="absolute -left-px -top-px border-l border-t border-accent-2" />
      <span style={s} className="absolute -right-px -top-px border-r border-t border-accent-2" />
      <span style={s} className="absolute -bottom-px -left-px border-b border-l border-accent-2" />
      <span style={s} className="absolute -bottom-px -right-px border-b border-r border-accent-2" />
    </span>
  )
}
