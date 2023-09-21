import { presetsColorsOptions } from './enums/presetsColorsOptions.enum'
import { greyScale } from './greyScale.theme'

export const presetsColors = {
  [presetsColorsOptions.positive]: {
    main: '#36B37E',
    constrastText: greyScale.G900.main,
    brightness: '31, 221, 63',
    lighter: '#D8FBDE',
    light: '#86E8AB',
    dark: '#1B806A',
    darker: '#0A5554',
  },
  [presetsColorsOptions.negative]: {
    main: '#FF5630',
    constrastText: greyScale.G100.main,
    brightness: '255, 86, 48',
    lighter: '#FFE9D5',
    light: '#FFAC82',
    dark: '#B71D18',
    darker: '#7A0916',
  },
  [presetsColorsOptions.info]: {
    main: '#00B8D9',
    constrastText: greyScale.G900.main,
    brightness: '0, 184, 217',
    lighter: '#CAFDF5',
    light: '#61F3F3',
    dark: '#006C9C',
    darker: '#003768',
  },
  [presetsColorsOptions.warning]: {
    main: '#FFAB00',
    constrastText: greyScale.G900.main,
    brightness: '255, 171, 0',
    lighter: '#FFF5CC',
    light: '#FFD666',
    dark: '#B76E00',
    darker: '#7A4100',
  },
}
