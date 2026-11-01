import { socialLinks, type SocialLink } from '../../content/socials'

type Props = {
  /** Classes for the <ul>. */
  className?: string
  /** Classes for each link. */
  linkClass: string
  /** Classes for each icon (size). */
  iconClass: string
  /** Show the text next to the icon instead of an aria-label. */
  showText?: boolean
  ariaLabel?: string
  links?: SocialLink[]
}

export default function SocialLinks({ className, linkClass, iconClass, showText = false, ariaLabel, links = socialLinks }: Props) {
  return (
    <ul className={className} aria-label={ariaLabel}>
      {links.map(({ label, text, href, external, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={showText ? undefined : label}
            className={linkClass}
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <Icon aria-hidden="true" className={iconClass} />
            {showText && text}
          </a>
        </li>
      ))}
    </ul>
  )
}
