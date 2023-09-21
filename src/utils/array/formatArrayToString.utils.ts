/**
 * Converte um array em uma string formatada.
 * @param arr - O array a ser convertido em uma string.
 * @returns A string resultante da formatação do array.
 */
export function formatArrayToString<T>(arr: Array<T>): string {
  return arr.join(', ')
}
