import { Languages } from 'src/i18n/enums/languages.enum'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n/index'

export function translateForce(key: string, lang: Languages) {
  return createI18n({
    locale: lang,
    globalInjection: true,
    messages,
  }).global.t(key)
}
