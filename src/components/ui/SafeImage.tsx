import { useState, type ImgHTMLAttributes, type ReactNode } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string; fallback: ReactNode }

/** An <img> that shows `fallback` instead of a broken-image icon when the file fails to load. */
export default function SafeImage({ fallback, ...img }: Props) {
  const [failedSrc, setFailedSrc] = useState<string>()
  if (failedSrc === img.src) return <>{fallback}</>
  return <img {...img} onError={() => setFailedSrc(img.src)} />
}
