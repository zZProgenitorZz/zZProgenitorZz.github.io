import CornerBrackets from '../decor/CornerBrackets'
import RuneCircle from '../decor/RuneCircle'
import SafeImage from '../ui/SafeImage'

export const PORTRAIT_SRC = '/images/portrait.webp'

type Props = { alt: string; lazy?: boolean }

/** Framed portrait (5:6) with corner brackets; shows a rune circle in the frame if the photo is missing. */
export default function Portrait({ alt, lazy = false }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] border border-line bg-surface p-3">
      <SafeImage
        src={PORTRAIT_SRC}
        alt={alt}
        width={400}
        height={480}
        loading={lazy ? 'lazy' : undefined}
        className="block h-auto w-full"
        fallback={
          <div className="flex aspect-[5/6] items-center justify-center bg-bg">
            <RuneCircle inline spin={false} className="h-3/4 w-3/4" />
          </div>
        }
      />
      <CornerBrackets always size={14} />
    </div>
  )
}
