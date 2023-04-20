import { MetaOptions } from 'quasar/dist/types/meta'

export const metaData: MetaOptions = {
  title: 'NextFit',
  titleTemplate: (title: string) =>
    `${title !== 'NextFit' ? `${title} | NextFit` : 'NextFit'}`,
  meta: {
    description: { name: 'description', content: 'nextfit, salve seus treinos' },
    keywords: { name: 'keywords', content: 'nextfit' },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
  },

  // <noscript> tags
  noscript: {
    default: 'Este é o conteúdo para navegadores sem JS (ou JS desabilitado)',
  },
}
