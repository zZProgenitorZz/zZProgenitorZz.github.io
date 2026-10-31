import Crosshair from './Crosshair'
import CornerBrackets from './CornerBrackets'

export type EdgeItem = { top: string; side: 'left' | 'right' }

/**
 * Desktop-only decor at the page edges: crosshairs near the left edge (xl+),
 * corner-bracket frames half off-screen at the right edge (lg+).
 * Place inside a `relative` page wrapper; `top` is a percentage so it never extends the page.
 */
export default function PageEdgeDecor({ items }: { items: EdgeItem[] }) {
  return (
    <>
      {items.map((it, i) =>
        it.side === 'left' ? (
          <Crosshair key={i} size={20} className="left-14 hidden xl:block" style={{ top: it.top }} />
        ) : (
          <div
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 hidden h-16 w-16 lg:block"
            style={{ top: it.top }}
          >
            <CornerBrackets always size={14} />
          </div>
        ),
      )}
    </>
  )
}
