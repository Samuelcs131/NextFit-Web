export class ObjectForm {
  static noUnknown(obj: object): string {
    return `Devem ter chaves desconhecidas: ${obj}.`
  }
}
