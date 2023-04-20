import { MixedForm } from '../form/mixedForm.utils'
import { IsValid } from '../validator/IsValid.utils'

export function spacedRule(value: string) {
  return IsValid.hasSpaces(value) || MixedForm.hasSpaces()
}
