/**
 * Filtra objetos de um array com base em um valor de propriedade específico de forma recursiva.
 * @param array - O array de objetos a ser filtrado.
 * @param label - A chave da propriedade a ser comparada.
 * @param recursive - A chave da propriedade que contém os filhos recursivos.
 * @param value - O array de valores a serem comparados com a propriedade especificada.
 * @param result - O array de resultado (opcional, padrão é um array vazio).
 * @returns Um array contendo os objetos filtrados.
 */

export function filterObjectsByPropertyValueRecursive<T extends Record<string, any>>(
  array: T[],
  label: keyof T,
  recursive: keyof T,
  value: T[keyof T][],
  result: T[] = []
): T[] {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (value.includes(element[label])) {
      result.push(element)
    }
    if (element[recursive] && Array.isArray(element[recursive])) {
      filterObjectsByPropertyValueRecursive(
        element[recursive],
        label,
        recursive,
        value,
        result
      )
    }
  }
  return result
}
