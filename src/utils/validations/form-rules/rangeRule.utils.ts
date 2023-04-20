import { StringForm } from '../form/stringForm.utils'
import { IsValid } from '../validator/IsValid.utils'

export function rangeRule(value: string, min: number, max: number) {
  return IsValid.range(value, min, max) || StringForm.range(min, max)
}
