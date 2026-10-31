const map: [number, string][] = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]

/** Roman numeral for 0-39 (0 is shown as "0", as on the Fool card). */
export function roman(n: number): string {
  if (n === 0) return '0'
  let out = ''
  let rest = n
  for (const [v, s] of map) while (rest >= v) { out += s; rest -= v }
  while (rest >= 10) { out += 'X'; rest -= 10 }
  return out
}
