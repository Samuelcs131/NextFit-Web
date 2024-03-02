import { merge as mergeLodash } from 'lodash'

export function merge<T>(object: any, source: any){
  return mergeLodash(object, source) as T
}
