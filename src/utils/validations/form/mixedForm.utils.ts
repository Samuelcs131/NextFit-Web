export class MixedForm {
  static default(): string {
    return 'O campo é inválido.'
  }

  static hasSpaces(): string {
    return 'Não deve ter espaços.'
  }

  static required(): string {
    return 'O campo é obrigatório.'
  }

  static oneOf(values: unknown): string {
    return `O campo deve ter um dos seguintes valores: ${values}.`
  }

  static notOneOf(values: unknown): string {
    return `O campo não deve ter nenhum dos seguintes valores: ${values}.`
  }

  static defined(): string {
    return 'O campo não deve ser indefinido.'
  }

  static empty(): string {
    return 'O campo não deve ser vazio.'
  }

  static strongPassword(): string {
    return 'O campo deve ter uma senha forte.'
  }
}
