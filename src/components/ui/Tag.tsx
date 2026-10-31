import type { ReactNode } from 'react'

/** A single technology tag; render inside a <ul>. */
export default function Tag({ children }: { children: ReactNode }) {
  return <li>{children}</li>
}
