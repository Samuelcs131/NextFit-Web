export function formatArrayToStringByField(
  arr: Array<any>,
  field: string
): string {
  const arrString = arr.map((item) => {
    return item[field]
  })
  return arrString.join(', ')
}
