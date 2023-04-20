import {
  InvalidEmailFormat,
  MustBeDate,
  MustBeGreaterThanEqualTo,
  MustBeLessThanEqualTo,
  MustBeMinMaxCharacteres,
  MustBeStrongPassword,
  MustBeTypeInteger,
  MustBeTypeText,
  MustMatchEnumOptions,
  MustNotBeEmpty,
  MustNotContainSpaces,
  Required,
} from 'src/utils/errors/common/common.utils'
import { emailPattern } from '../regex-patterns/emailPattern.utils'
import { numberPattern } from '../regex-patterns/numberPattern.regex'
import { spacePattern } from '../regex-patterns/spacePattern.utils'
import { specialCharacterPattern } from '../regex-patterns/specialCharacterPattern.utils'
import { unicodePattern } from '../regex-patterns/unicodePattern.utils'
import { ISOptions } from './types/ISOptions.type'

export class IsValid {
  static email(value: string, error?: boolean): boolean {
    const isValid = emailPattern.test(value)
    if (!isValid && error) throw new InvalidEmailFormat()
    return isValid
  }

  static notEmpty(value: unknown, error?: boolean): boolean {
    const isValid = value !== '' && value !== null && value !== undefined
    if (!isValid && error) throw new MustNotBeEmpty()
    return isValid
  }

  static string(value: unknown, error?: boolean): value is string {
    const isValid = typeof value === 'string' && value.trim().length > 0
    if (!isValid && error) throw new MustBeTypeText()
    return isValid
  }

  static range(
    value: string,
    min: number,
    max: number,
    error?: { min: number; max: number }
  ): boolean {
    const actualLength = String(value).replace(unicodePattern, '').length
    const isValid = actualLength >= min && actualLength <= max

    if (!isValid && error)
      throw new MustBeMinMaxCharacteres(error.min, error.max)
    return isValid
  }

  static int(value: unknown, error?: boolean): boolean {
    const isValid = numberPattern.integer.test(value as string)
    if (!isValid && error) throw new MustBeTypeInteger()
    return isValid
  }

  static min(num: number, minVal: number, error?: { min: number }): boolean {
    const isValid = num >= minVal
    if (!isValid && error) throw new MustBeLessThanEqualTo(error.min)
    return isValid
  }

  static max(num: number, maxVal: number, error?: { max: number }): boolean {
    const isValid = num <= maxVal
    if (!isValid && error) throw new MustBeGreaterThanEqualTo(error.max)
    return isValid
  }

  static enum(
    valor: string | number,
    entity: object,
    error?: { nameEnum: string }
  ): boolean {
    const isValid = Object.values(entity).includes(valor)
    if (!isValid && error) throw new MustMatchEnumOptions(error.nameEnum)
    return isValid
  }

  static date(value: string | Date, options: ISOptions = {}, error?: boolean) {
    let isValid = false
    const separator = options.strictSeparator ? '-' : /[-/]/
    const date = new Date(
      typeof value === 'string' ? value.replace(separator, '-') : value
    )

    if (options.strict) {
      isValid = date.toISOString() === value
    } else {
      isValid = date instanceof Date && !isNaN(date.getTime())
    }

    if (!isValid && error) throw new MustBeDate()

    return isValid
  }

  static strongPassword(password: string, error?: boolean): boolean {
    const isValid =
      !specialCharacterPattern.test(password) || password.length < 8
    if (!isValid && error) throw new MustBeStrongPassword()
    return isValid
  }

  static hasSpaces(text: string, error?: boolean) {
    const isValid = spacePattern.test(text)
    if (!isValid && error) throw new MustNotContainSpaces()
    return isValid
  }

  static required(value: unknown, error?: boolean): boolean {
    let isValid = false
    if (typeof value === 'string') isValid = value.trim().length > 0

    if (typeof value === 'number') isValid = value !== 0

    if (Array.isArray(value)) isValid = value.length > 0

    if (!isValid && error) throw new Required()

    return isValid
  }
}
