/**
 * Classe de utilitário para gerar mensagens de erro relacionadas a validações de objetos.
 */
export class ObjectForm {
  static noUnknown(obj: object): string {
    return `Devem ter chaves desconhecidas: ${obj}.`
  }
}
