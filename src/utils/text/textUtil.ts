export function limitText(texto: string, limite: number) {
  if (texto.length <= limite) return texto
  else return texto.slice(0, limite) + '...'
}
