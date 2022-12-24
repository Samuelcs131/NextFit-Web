import { useI18n } from 'src/boot/i18n'
const { t } = useI18n()

export function spacedPwdRule (value: string) {
  const passwordPattern = /\s/

  return !passwordPattern.test(value) || t('formValidation.spacedPassword')
}

export function minPwdRule (value: string) {
  return !(value.length < 8) || t('formValidation.minPassword')
}

export function maxPwdRule (value: string) {
  return !(value.length > 32) || t('formValidation.maxPassword')
}
