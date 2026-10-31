import FormationFragment from './FormationFragment'

export type EdgeItem = { top: string; side: 'left' | 'right' }

const variants = ['a', 'b', 'c'] as const

/**
 * Desktop-only decor at the page edges: formation fragments near the left edge (xl+),
 * half off-screen at the right edge (lg+).
 * Place inside a `relative` page wrapper; `top` is a percentage so it never extends the page.
 */
export default function PageEdgeDecor({ items }: { items: EdgeItem[] }) {
  return (
    <>
      {items.map((it, i) => (
        <FormationFragment
          key={i}
          variant={variants[i % 3]}
          size={96}
          className={it.side === 'left' ? 'left-12 hidden xl:block' : '-right-12 hidden lg:block'}
          style={{ top: it.top }}
        />
      ))}
    </>
  )
}
