import { presetsColorsOptions } from 'src/theme/enums/presetsColorsOptions.enum'
import { presetsColors } from 'src/theme/presetsColors.theme'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { rgb } from 'src/utils/colors/rgb.utils'

export function setPresetsColorsVariables() {
  for (const property in presetsColors) {
    const color = presetsColors[property as presetsColorsOptions]

    setCssVariables([
      { varName: property, value: color.main },
      { varName: `${property}-constrast-text`, value: color.constrastText },
      { varName: `${property}-rgb`, value: rgb(color.main) },
      { varName: `${property}-brightness`, value: color.brightness },
      { varName: `${property}-light`, value: color.light },
      { varName: `${property}-lighter`, value: color.lighter },
      { varName: `${property}-dark`, value: color.dark },
      { varName: `${property}-darker`, value: color.darker },
    ])
  }
}
