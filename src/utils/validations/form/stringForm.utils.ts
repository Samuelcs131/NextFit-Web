export class StringForm {
  static lengthExact(length: number): string {
    return `Deve ter exatamente ${length} ${
      length === 1 ? 'caractere' : 'caracteres'
    }.`
  }

  static min(min: number): string {
    return `Deve ter pelo menos ${min} ${
      min === 1 ? 'caractere' : 'caracteres'
    }.`
  }

  static max(max: number): string {
    return `Deve ter no máximo ${max} ${
      max === 1 ? 'caractere' : 'caracteres'
    }.`
  }

  static range(min: unknown, max: unknown): string {
    return `Deve ter no mínimo ${min} e no máximo ${max} caracteres`
  }

  static matches(regex: unknown): string {
    return `Deve corresponder ao padrão: "${regex}".`
  }

  static email(): string {
    return 'Deve ser um e-mail válido.'
  }

  static url(): string {
    return 'Deve ser uma URL válida.'
  }

  static trim(): string {
    return 'Dão deve conter espaços adicionais no início nem no fim.'
  }

  static lowercase(): string {
    return 'Deve estar em letras minúsculas.'
  }

  static uppercase(): string {
    return 'Deve estar em letras maiúsculas.'
  }

  static text(): string {
    return 'Deve ser do tipo texto'
  }
}
