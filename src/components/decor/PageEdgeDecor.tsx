import DotGrid from './DotGrid'
import OutlineSquare from './OutlineSquare'

export type EdgeItem = { top: string; side: 'left' | 'right' }

/**
 * Desktop-only decor at the page edges: a 2x4 dot grid near the left edge,
 * an outline square half off-screen at the right edge.
 * Place inside a `relative` page wrapper; `top` is a percentage so it never extends the page.
 */
export default function PageEdgeDecor({ items }: { items: EdgeItem[] }) {
  return (
    <>
      {items.map((it, i) =>
        it.side === 'left' ? (
          <DotGrid key={i} rows={4} cols={2} className="left-14 hidden xl:block" style={{ top: it.top }} />
        ) : (
          <OutlineSquare
            key={i}
            size={64}
            color={i % 2 ? 'accent' : 'line'}
            className="-right-8 hidden lg:block"
            style={{ top: it.top }}
          />
        ),
      )}
    </>
  )
}
