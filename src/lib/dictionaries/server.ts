import 'server-only'

export type Locales = 'pt-BR' | 'en-US' | 'es'

const dictionaries = {
  'pt-BR': () => import('./pt-BR.json').then((module) => module.default),
  'en-US': () => import('./pt-BR.json').then((module) => module.default),
  'es': () => import('./pt-BR.json').then((module) => module.default),
}

export const translation = async (locale: Locales = 'pt-BR') => dictionaries[locale]()