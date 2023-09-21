import { v4 } from 'uuid'

/**
 * Gera e retorna um UUID (Universally Unique Identifier) aleatório.
 *
 * @returns Um UUID aleatório.
 */
export function randomUUID() {
  return v4()
}
