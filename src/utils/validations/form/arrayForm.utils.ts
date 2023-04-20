export class ArrayForm {
  static min(min: number): string {
    return `O campo deve ter pelo menos ${min} ${
      min === 1 ? 'item' : 'itens'
    }.`
  }

  static max(max: number): string {
    return `O campo deve ter no máximo ${max} ${
      max === 1 ? 'item' : 'itens'
    }.`
  }
}
