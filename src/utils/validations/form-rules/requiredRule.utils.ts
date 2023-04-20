import { MixedForm } from '../form/mixedForm.utils'
import { IsValid } from '../validator/IsValid.utils'

export function requiredRule (value: unknown) {
  return IsValid.required(value) || MixedForm.required()
}
