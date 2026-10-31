// **word** = highlighted in white.
export type Fact = { en: string; nl: string }

const f = (en: string, nl: string): Fact => ({ en, nl })

export const facts: Fact[] = [
  f(
    "Every time I start programming, I feel like I'm learning everything again. That's how bad my **memory** is.",
    'Elke keer als ik ga programmeren, voelt het alsof ik alles opnieuw leer. Zo slecht is mijn **geheugen**.',
  ),
  f('My first deployment ever went straight to **AWS**, during my internship.', 'Mijn allereerste deployment ging tijdens mijn stage meteen naar **AWS**.'),
  f(
    'I spent a semester in **Derby**, UK, building 3D scenes in Unreal, Houdini and Maya.',
    'Ik zat een semester in **Derby** (Engeland) en bouwde 3D-scènes in Unreal, Houdini en Maya.',
  ),
  f("Away from the keyboard, you'll find me **karting**.", 'Weg van het toetsenbord ga ik graag **karten**.'),
  f("On a free weekend you'll find me in bed reading **fantasy novels**.", 'Op een vrij weekend lig ik in bed met een **fantasyboek**.'),
  f("I'm always halfway through at least one **series**.", 'Ik zit altijd halverwege minstens één **serie**.'),
]
