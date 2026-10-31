import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
  href?: string
  /** Render a plain download link (also for internal paths such as /cv/file.pdf). */
  download?: boolean
  className?: string
  children: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

const variants = {
  primary: 'border-accent text-fg hover:bg-accent/20',
  ghost: 'border-line text-muted hover:border-accent hover:text-fg',
}
const sizes = {
  md: 'px-4 py-2',
  sm: 'px-2 py-1 text-sm',
}

/** Square button. Renders a link when `href` is set (internal paths use the router). */
export default function Button({ variant = 'primary', size = 'md', href, download, className = '', children, ...rest }: Props) {
  const cls = `inline-flex min-h-11 items-center justify-center border transition-colors md:min-h-0 ${sizes[size]} ${variants[variant]} ${className}`
  if (href) {
    if (download) {
      return (
        <a href={href} download className={cls}>
          {children}
        </a>
      )
    }
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={cls}>
          {children}
        </Link>
      )
    }
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
