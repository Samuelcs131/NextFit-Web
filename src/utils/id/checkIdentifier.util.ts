export function checkIdentifier(id: string, type: string) {
  return id.split('-')[0] === type
}
