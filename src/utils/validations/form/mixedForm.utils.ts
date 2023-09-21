/**
 * Classe de utilitário para gerar mensagens de erro relacionadas a validações diversas.
 */
export class MixedForm {
  static invalid(): string {
    return 'Não deve ser inválido.'
  }

  static hasSpaces(): string {
    return 'Não deve ter espaços.'
  }

  static required(): string {
    return 'O campo é obrigatório.'
  }

  static oneOf(values: unknown): string {
    return `Deve ter um dos seguintes valores: ${values}.`
  }

  static notOneOf(values: unknown): string {
    return `Não deve ter nenhum dos seguintes valores: ${values}.`
  }

  static defined(): string {
    return 'Não deve ser indefinido.'
  }

  static empty(): string {
    return 'Não deve ser vazio.'
  }

  static strongPassword(): string {
    return 'Deve ter uma senha forte.'
  }
}
