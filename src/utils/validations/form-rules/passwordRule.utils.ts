import { useI18n } from 'src/boot/i18n'
import { MixedForm } from '../form/mixedForm.utils'
import { IsValid } from '../validator/IsValid.utils'
const { t } = useI18n()

export function spacedPwdRule(value: string) {
  return IsValid.strongPassword(value) || MixedForm.strongPassword()
}
