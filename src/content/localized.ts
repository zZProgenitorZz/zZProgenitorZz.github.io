export type Localized = { en: string; nl: string }

export const l10n = (en: string, nl: string): Localized => ({ en, nl })
