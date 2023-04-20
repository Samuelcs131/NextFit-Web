import { colors } from 'quasar'

const { hexToRgb } = colors

export function rgb(vem: string){
  const { r, g, b } = hexToRgb(vem)
  return `${r} ,${g} , ${b}`
}
