import chroma from 'chroma-js'

export function convertToHsl(color: string | number | chroma.Color) {
  return chroma(color).hsl()
}

export function changeHueToHex(color: string | chroma.Color, deg: number) {
  return chroma(color).set('hsl.h', deg).hex()
}

export function changeSaturateToHex(color: string | chroma.Color, deg: number) {
  return chroma(color).set('hsl.s', deg).hex()
}
