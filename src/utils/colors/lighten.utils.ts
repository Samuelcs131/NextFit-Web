import { colors } from 'quasar'

const { lighten } = colors

export function lightenColor(color: string, percent: number){
  return lighten(color, percent)
}
