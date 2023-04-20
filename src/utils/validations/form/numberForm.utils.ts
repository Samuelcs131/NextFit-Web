export class NumberForm {
  static min(min: number): string {
    return `Deve ser maior ou igual a ${min}.`
  }

  static max(max: number): string {
    return `Deve ser menor ou igual a ${max}.`
  }

  static lessThan(less: number): string {
    return `Deve ser menor que ${less}.`
  }

  static moreThan(more: number): string {
    return `Deve ser maior que ${more}.`
  }

  static notEqual(notEqual: unknown): string {
    return `Dão deve ser igual a ${notEqual}.`
  }

  static positive(): string {
    return 'Deve ser um número positivo.'
  }

  static negative(): string {
    return 'Deve ser um número negativo.'
  }

  static integer(): string {
    return 'Deve ser um número inteiro.'
  }
}