import { clone, cloneDeepWith } from 'lodash'

export function cloneShallow<T>(value: T) {
  return clone<T>(value)
}

export function cloneDeep<T>(value: T) {
  return cloneDeepWith<T>(value)
}
