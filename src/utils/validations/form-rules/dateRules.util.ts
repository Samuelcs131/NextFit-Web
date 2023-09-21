import { DateForm } from '../form/dateForm.utils'
import { IsValid } from '../validator/IsValid.utils'

export function requiredRule(value: string | Date) {
  return IsValid.date(value) || DateForm.date()
}
