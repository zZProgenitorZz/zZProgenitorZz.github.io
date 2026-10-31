import Gear from './Gear'
import ClockHands from './ClockHands'
import Sigil from './Sigil'

export type EdgeItem = { top: string; side: 'left' | 'right' }

/**
 * Desktop-only decor at the page edges: sigils near the left edge (xl+),
 * gears and clock hands half off-screen at the right edge (lg+).
 * Place inside a `relative` page wrapper; `top` is a percentage so it never extends the page.
 */
export default function PageEdgeDecor({ items }: { items: EdgeItem[] }) {
  return (
    <>
      {items.map((it, i) =>
        it.side === 'left' ? (
          <Sigil key={i} variant={(['a', 'b', 'c'] as const)[i % 3]} size={72} className="left-12 hidden xl:block" style={{ top: it.top }} />
        ) : i % 2 ? (
          <ClockHands key={i} size={120} className="-right-14 hidden lg:block" style={{ top: it.top }} />
        ) : (
          <Gear key={i} size={120} className="-right-14 hidden lg:block" style={{ top: it.top }} />
        ),
      )}
    </>
  )
}
