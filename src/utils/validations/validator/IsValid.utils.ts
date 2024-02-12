import {
  InvalidEmailFormat,
  LessThan,
  MustBeDate,
  MustBeGreaterThanEqualTo,
  MustBeLessThanEqualTo,
  MustBeMinMaxCharacteres,
  MustBeStrongPassword,
  MustBeTypeInteger,
  MustBeTypeNumeric,
  MustBeTypeText,
  MustMatchEnumOptions,
  MustNotBeEmpty,
  MustNotContainSpaces,
  Positive,
  Required,
} from 'src/utils/validations/errors/validationErrors.util'
import { emailPattern } from '../../regex-patterns/emailPattern.utils'
import { numberPattern } from '../../regex-patterns/numberPattern.regex'
import { spacePattern } from '../../regex-patterns/spacePattern.utils'
import { specialCharacterPattern } from '../../regex-patterns/specialCharacterPattern.utils'
import { unicodePattern } from '../../regex-patterns/unicodePattern.utils'
import { ISOptions } from './types/ISOptions.type'

/**
 * Classe de utilitário para validações diversas.
 */

export class IsValid {
  /**
   * Verifica se um endereço de email possui um formato válido.
   *
   * @param value - O endereço de email a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de formato inválido (opcional).
   * @throws Se o formato do email for inválido e `error` for verdadeiro.
   * @returns `true` se o formato do email for válido, `false` caso contrário.
   */
  static email(value: string, error?: boolean): boolean {
    const isValid = emailPattern.test(value)
    if (!isValid && error) throw new InvalidEmailFormat()
    return isValid
  }

  /**
   * Verifica se um valor não está vazio ou indefinido.
   *
   * @param value - O valor a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de valor vazio (opcional).
   * @throws Se o valor for vazio e `error` for verdadeiro.
   * @returns `true` se o valor não estiver vazio, `false` caso contrário.
   */
  static notEmpty(value: unknown, error?: boolean): boolean {
    const isValid = value !== '' && value !== null && value !== undefined
    if (!isValid && error) throw new MustNotBeEmpty()
    return isValid
  }

  /**
   * Verifica se um valor é um string não vazio.
   *
   * @param value - O valor a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de valor inválido (opcional).
   * @throws Se o valor não for uma string válida e `error` for verdadeiro.
   * @returns `true` se o valor for uma string não vazia, `false` caso contrário.
   */
  static string(value: unknown, error?: boolean): value is string {
    const isValid = typeof value === 'string' && value.trim().length > 0
    if (!isValid && error) throw new MustBeTypeText()
    return isValid
  }

  /**
   * Verifica se o comprimento de uma string está dentro do intervalo especificado.
   *
   * @param value - A string a ser verificada.
   * @param min - O comprimento mínimo permitido.
   * @param max - O comprimento máximo permitido.
   * @param - Objeto de erro a ser lançado se a validação falhar (opcional).
   * @param - O valor mínimo esperado para o erro (opcional).
   * @param - O valor máximo esperado para o erro (opcional).
   * @throws Se o comprimento da string estiver fora do intervalo esperado e `error` for fornecido.
   * @returns `true` se o comprimento estiver dentro do intervalo, `false` caso contrário.
   */
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

  /**
   * Verifica se um valor é um número inteiro.
   *
   * @param value - O valor a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de valor inválido (opcional).
   * @throws Se o valor não for um número inteiro válido e `error` for verdadeiro.
   * @returns `true` se o valor for um número inteiro, `false` caso contrário.
   */
  static int(value: unknown, error?: boolean): boolean {
    const isValid = numberPattern.integer.test(value as string)
    if (!isValid && error) throw new MustBeTypeInteger()
    return isValid
  }

  /**
   * Verifica se um valor numérico é maior ou igual a um valor mínimo.
   *
   * @param num - O valor numérico a ser verificado.
   * @param minVal - O valor mínimo permitido.
   * @param - Objeto de erro a ser lançado se a validação falhar (opcional).
   * @param  - O valor mínimo esperado para o erro (opcional).
   * @throws Se o valor numérico for menor que o valor mínimo esperado e `error` for fornecido.
   * @returns `true` se o valor for maior ou igual ao valor mínimo, `false` caso contrário.
   */
  static min(num: number, minVal: number, error?: { min: number }): boolean {
    const isValid = num >= minVal
    if (!isValid && error) throw new MustBeLessThanEqualTo(error.min)
    return isValid
  }

  /**
   * Verifica se um número é menor ou igual a um valor máximo.
   *
   * @param num - O número a ser verificado.
   * @param maxVal - O valor máximo permitido.
   * @param - Objeto de erro a ser lançado se a validação falhar (opcional).
   * @param - O valor máximo esperado para o erro (opcional).
   * @throws Se o número for maior que o valor máximo esperado e `error` for fornecido.
   * @returns `true` se o número for menor ou igual ao valor máximo, `false` caso contrário.
   */
  static max(num: number, maxVal: number, error?: { max: number }): boolean {
    const isValid = num <= maxVal
    if (!isValid && error) throw new MustBeGreaterThanEqualTo(error.max)
    return isValid
  }

  /**
   * Verifica se um valor está presente em um objeto de enumeração.
   *
   * @param valor - O valor a ser verificado.
   * @param entity - O objeto de enumeração que contém os valores possíveis.
   * @param - Objeto de erro a ser lançado se a validação falhar (opcional).
   * @param - O nome da enumeração para o erro (opcional).
   * @throws Se o valor não estiver presente na enumeração e `error` for fornecido.
   * @returns `true` se o valor estiver presente na enumeração, `false` caso contrário.
   */
  static enum(
    valor: string | number,
    entity: object,
    error?: { nameEnum: string }
  ): boolean {
    const isValid = Object.values(entity).includes(valor)
    if (!isValid && error) throw new MustMatchEnumOptions(error.nameEnum)
    return isValid
  }

  /**
   * Verifica se um valor é uma data válida.
   *
   * @param value - O valor a ser verificado.
   * @param - Opções para a validação da data (opcional).
   * @param - Indica se um erro deve ser lançado em caso de data inválida (opcional).
   * @throws Se o valor não for uma data válida e `error` for verdadeiro.
   * @returns `true` se o valor for uma data válida, `false` caso contrário.
   */
  static date(value: string | Date | null, options: ISOptions = {}, error?: boolean) {
    if(!value) return false
    try {
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
    } catch {
      if (error) throw new MustBeDate()
      return false
    }
  }

  /**
   * Verifica se uma senha é forte o suficiente.
   *
   * @param password - A senha a ser verificada.
   * @param - Indica se um erro deve ser lançado em caso de senha fraca (opcional).
   * @throws Se a senha for fraca e `error` for verdadeiro.
   * @returns `true` se a senha for forte, `false` caso contrário.
   */
  static strongPassword(password: string, error?: boolean): boolean {
    const isValid =
      specialCharacterPattern.test(password) || password.length < 8
    if (!isValid && error) throw new MustBeStrongPassword()
    return isValid
  }

  /**
   * Verifica se um texto contém espaços em branco.
   *
   * @param text - O texto a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de espaços em branco (opcional).
   * @throws Se o texto contiver espaços em branco e `error` for verdadeiro.
   * @returns `true` se o texto não contiver espaços em branco, `false` caso contrário.
   */
  static hasSpaces(text: string, error?: boolean) {
    const isValid = spacePattern.test(text)
    if (!isValid && error) throw new MustNotContainSpaces()
    return isValid
  }

  /**
   * Verifica se um valor está presente e não vazio.
   *
   * @param value - O valor a ser verificado.
   * @param - Indica se um erro deve ser lançado em caso de valor ausente ou vazio (opcional).
   * @throws Se o valor estiver ausente ou vazio e `error` for verdadeiro.
   * @returns `true` se o valor estiver presente e não vazio, `false` caso contrário.
   */
  static required(value: unknown, error?: boolean): boolean {
    let isValid = false
    if (typeof value === 'string') isValid = value.trim().length > 0
    if (typeof value === 'number') isValid = value !== 0
    if (typeof value === 'object')
      isValid = value ? Object.keys(value).length > 0 : false
    if (Array.isArray(value)) isValid = value.length > 0
    if (!isValid && error) throw new Required()

    return isValid
  }

  /**
   * Verifica se um número é positivo.
   *
   * @param value - O número a ser verificado.
   * @param - Se true e o número não for positivo, lança um erro.
   * @returns Retorna true se o número for positivo. Retorna false se não for positivo e não houver erro definido.
   * @throws Lança um erro do tipo Positive se o número não for positivo e o parâmetro 'error' for true.
   */
  static positive(value: number, error?: boolean): boolean {
    let isValid = false
    isValid = value > 0
    if (!isValid && error) throw new Positive()

    return isValid
  }

  static lessThan(value: number, less: number, error?: boolean): boolean {
    let isValid = false
    isValid = value < less
    if (!isValid && error) throw new LessThan(less)

    return isValid
  }

  static isNumeric(value: number, error?: boolean): boolean {
    let isValid = false
    isValid = typeof value == 'number'
    if (!isValid && error) throw new MustBeTypeNumeric()

    return isValid
  }

  /**
   * Verifica se dois objetos têm as mesmas propriedades e valores.
   *
   * @template - O tipo de valor das propriedades nos objetos.
   * @param obj1 - O primeiro objeto a ser comparado.
   * @param obj2 - O segundo objeto a ser comparado.
   * @returns `true` se os objetos tiverem as mesmas propriedades e valores, `false` caso contrário.
   * @throws Lança um erro do tipo Positive se o número não for positivo e o parâmetro 'error' for true.
   */
  static areObjectsEqual<T>(
    obj1: Record<string, T>,
    obj2: Record<string, T>
  ): boolean {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
      return false
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }

    return true
  }
}
