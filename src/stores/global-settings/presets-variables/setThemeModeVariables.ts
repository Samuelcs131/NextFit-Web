import { IThemeModeProps } from 'src/theme/types/IThemeMode.type'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { lightenColor } from 'src/utils/colors/lighten.utils'
import { rgb } from 'src/utils/colors/rgb.utils'

export function setThemeModeVariables(themeMode: IThemeModeProps) {
  const { background, text, divider } = themeMode

  setCssVariables([
    { varName: 'paper', value: background.paper },
    { varName: 'paper-lighten-15', value: lightenColor(background.paper, 5) },
    { varName: 'paper-shadow', value: background.shadow },

    { varName: 'default', value: background.default },
    { varName: 'default-rgb', value: rgb(background.default) },

    { varName: 'neutral', value: background.neutral },
    { varName: 'neutral-rgb', value: rgb(background.neutral) },

    { varName: 'text-primary', value: text.primary },
    { varName: 'text-primary-rgb', value: rgb(text.primary) },
    { varName: 'text-secondary', value: text.secondary },
    { varName: 'text-disabled', value: text.disabled },

    { varName: 'divider', value: divider },
  ])
}
