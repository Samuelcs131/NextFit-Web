/**
 * Gera um número inteiro aleatório dentro de um intervalo especificado.
 *
 * @param min O valor mínimo do intervalo (incluído).
 * @param max O valor máximo do intervalo (excluído).
 * @returns O número aleatório gerado.
 */
export function numberRandom(min: number, max: number): number {
  return Math.round(min + Math.random() * (max - min))
}
