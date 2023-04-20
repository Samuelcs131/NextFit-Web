import { IThemeColorProps } from 'src/theme/types/IThemeColors.type'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { rgb } from 'src/utils/validations/colors/rgb.utils'

export function setThemeColorsVariables(themeColors: IThemeColorProps) {
  setCssVariables([
    { varName: 'primary', value: themeColors.main },
    { varName: 'primary-constrast-text', value: themeColors.constrastText },
    { varName: 'primary-rgb', value: rgb(themeColors.main) },
    { varName: 'primary-brightness', value: themeColors.shadow },
    { varName: 'primary-light', value: themeColors.light },
    { varName: 'primary-lighter', value: themeColors.lighter },
    { varName: 'primary-dark', value: themeColors.dark },
    { varName: 'primary-darker', value: themeColors.darker },
  ])
}
