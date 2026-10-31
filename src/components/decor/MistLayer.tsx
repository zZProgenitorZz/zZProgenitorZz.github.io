/** Faint ink-wash mist band. Sits between page content and footer so it never covers text. */
export default function MistLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-20 overflow-hidden md:h-32">
      <div
        className="absolute inset-x-[-10%] bottom-0 h-full blur-xl motion-safe:animate-mist-drift"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 25% 100%, rgba(157,107,255,0.18), transparent), radial-gradient(ellipse 45% 60% at 75% 100%, rgba(167,159,191,0.12), transparent)',
        }}
      />
      <div
        className="absolute inset-x-[-10%] bottom-0 h-2/3 blur-lg motion-safe:animate-mist-drift [animation-direction:alternate-reverse]"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(238,232,245,0.06), transparent)',
        }}
      />
    </div>
  )
}
