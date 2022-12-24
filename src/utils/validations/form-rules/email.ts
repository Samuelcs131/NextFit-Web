import { useI18n } from 'src/boot/i18n'
const { t } = useI18n()

export function emailRule (value: string) {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

  return emailPattern.test(value) || t('formValidation.email')
}
