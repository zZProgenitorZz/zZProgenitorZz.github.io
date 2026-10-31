type Props = { id?: string; title: string; subtitle: string }

/** Page title written as a shell command, e.g. "cd ~/projects". */
export default function PageTitle({ id, title, subtitle }: Props) {
  return (
    <div className="container-page pt-8 md:pt-12">
      <h1 id={id} className="text-2xl font-bold text-fg md:text-3xl">
        <span aria-hidden="true" className="mr-3 text-ok">
          $
        </span>
        {title}
        <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-accent-2 motion-safe:animate-blink" />
      </h1>
      <p className="mt-2">
        <span aria-hidden="true">{'# '}</span>
        {subtitle}
      </p>
    </div>
  )
}
