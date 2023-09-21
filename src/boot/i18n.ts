import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useGlobalSettings } from 'src/stores/global-settings/globalSettings.store'

const { storage } = useGlobalSettings()

export type MessageLanguages = keyof typeof messages
export type MessageSchema = typeof messages['pt-BR']

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: storage.language,
    legacy: false,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})

export const i18n = createI18n({
  locale: storage.language,
  globalInjection: true,
  messages,
})

export const useI18n = () => i18n.global
