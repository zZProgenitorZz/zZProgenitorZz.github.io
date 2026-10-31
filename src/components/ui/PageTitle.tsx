type Props = { id?: string; title: string; subtitle: string }

export default function PageTitle({ id, title, subtitle }: Props) {
  return (
    <div className="container-page pt-8 md:pt-12">
      <h1 id={id} className="text-2xl font-medium text-fg md:text-[32px]">
        <span className="text-accent">/</span>
        {title}
      </h1>
      <p className="mt-2">{subtitle}</p>
    </div>
  )
}
