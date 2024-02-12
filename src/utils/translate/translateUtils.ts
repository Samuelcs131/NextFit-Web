import { Languages } from 'src/i18n/enums/languages.enum'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n/index'
import { useI18n } from 'src/boot/i18n'

export function translateForce(key: string, lang: Languages) {
  return createI18n({
    locale: lang,
    globalInjection: true,
    messages,
  }).global.t(key)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function t(key: string, config?: any) {
  const { t, te } = useI18n()
  return te(key) ? t(key, config) : key
}
