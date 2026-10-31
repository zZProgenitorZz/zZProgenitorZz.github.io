import type { ElementType, ReactNode } from 'react'

type Props = { as?: ElementType; lift?: boolean; className?: string; children: ReactNode }

export default function Card({ as: Tag = 'div', lift = false, className = '', children }: Props) {
  return (
    <Tag
      className={`border border-line bg-surface transition-colors hover:border-accent ${
        lift ? 'transition-[color,border-color,transform] hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
