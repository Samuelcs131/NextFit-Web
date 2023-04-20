export class DateForm {
  static min(min: unknown): string {
    return `O campo deve ser posterior a ${min}.`
  }

  static max(max: unknown): string {
    return `O campo deve ser anterior a ${max}.`
  }
}
