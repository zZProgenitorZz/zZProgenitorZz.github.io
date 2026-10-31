// **word** = highlighted in white. TODO: write your own six facts.
export type Fact = { en: string; nl: string }

const f = (s: string): Fact => ({ en: s, nl: s }) // TODO: write the NL text

export const facts: Fact[] = [
  f('I started **coding** when I was TODO years old'),
  f('I love **coffee** while debugging'),
  f('My favourite language is **TODO**'),
  f('I play **TODO** in my free time'),
  f('I have built **TODO** projects so far'),
  f('I once fixed a bug that was a missing **semicolon**'),
]
