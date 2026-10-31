import Card from '../ui/Card'

type Props = { title: string; items: string[]; className?: string }

export default function SkillCard({ title, items, className = '' }: Props) {
  return (
    <Card as="article" className={className}>
      <h3 className="border-b border-line p-2 font-medium text-fg">{title}</h3>
      <p className="p-4">{items.join(' ')}</p>
    </Card>
  )
}
