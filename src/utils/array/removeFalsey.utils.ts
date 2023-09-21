/**
 * Remove os valores falsos de um array (null, '', 0, NaN).
 * @param array - O array a ser filtrado.
 * @returns O array resultante após a remoção dos valores falsy.
 * @example
 * const array = [1, null, false, '', 0, undefined, 42, NaN];
 * removeFalsey(array) // "[1, 42]"
 */
export function removeFalsey<T>(
  array: Array<T | undefined | null | false | '' | 0 | typeof NaN>
): Array<T> {
  return array.filter(Boolean) as Array<T>
}
