import { IColorPresets } from 'src/theme/types/IThemeColors.type'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { rgb } from 'src/utils/colors/rgb.utils'

export function setThemeColorsVariables(themeColors: IColorPresets) {
  for (const property in themeColors) {
    const color = themeColors[property]

    setCssVariables([
      { varName: property, value: color.main },
      { varName: `${property}-constrast-text`, value: color.constrastText },
      { varName: `${property}-rgb`, value: rgb(color.main) },
      { varName: `${property}-brightness`, value: color.shadow },
      { varName: `${property}-light`, value: color.light },
      { varName: `${property}-lighter`, value: color.lighter },
      { varName: `${property}-dark`, value: color.dark },
      { varName: `${property}-darker`, value: color.darker },
    ])
  }
}
