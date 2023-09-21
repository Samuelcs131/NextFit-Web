/**
 * Seleciona um valor aleatório de um array.
 *
 * @param valores - O array do qual será selecionado um valor aleatório.
 * @returns O valor selecionado aleatoriamente, ou null se o array estiver vazio.
 */

export function randomPickFromArray(values: unknown[]): unknown {
  if (values.length === 0) {
    return null // Retorna null se o array estiver vazio
  } else {
    const indiceSorteado = Math.floor(Math.random() * values.length)
    const valorSorteado = values[indiceSorteado]
    return valorSorteado
  }
}
