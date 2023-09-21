import { colors } from 'quasar'

const { hexToRgb } = colors

export function rgb(color: string){
  const { r, g, b } = hexToRgb(color)
  return `${r} ,${g} , ${b}`
}
