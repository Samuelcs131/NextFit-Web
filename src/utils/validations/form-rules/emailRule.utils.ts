import { StringForm } from '../form/stringForm.utils'
import { IsValid } from '../validator/IsValid.utils'

export function emailRule (value: string) {
  return IsValid.email(value) || StringForm.email()
}
