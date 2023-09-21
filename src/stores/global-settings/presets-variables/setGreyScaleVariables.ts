import { greyScaleOptions } from 'src/theme/enums/greyScaleOptions.enum'
import { greyScale } from 'src/theme/greyScale.theme'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { rgb } from 'src/utils/colors/rgb.utils'

export function setGreyScaleVariables() {
  for (const property in greyScale) {
    const color = greyScale[property as greyScaleOptions]

    setCssVariables([
      { varName: property, value: color.main },
      { varName: `${property}-rgb`, value: rgb(color.main) },
      { varName: `${property}-constrast-text`, value: color.constrastText },
    ])
  }
}
