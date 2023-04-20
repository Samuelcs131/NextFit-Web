import { IThemeModeProps } from 'src/theme/types/IThemeMode.type'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { rgb } from 'src/utils/validations/colors/rgb.utils'

export function setThemeModeVariables(themeMode: IThemeModeProps) {
  setCssVariables([
    { varName: 'paper', value: themeMode.background.paper },
    { varName: 'paper-shadow', value: themeMode.background.shadow },

    { varName: 'default', value: themeMode.background.default },
    { varName: 'default-rgb', value: rgb(themeMode.background.default) },

    { varName: 'text-primary', value: themeMode.text.primary },
    { varName: 'text-secondary', value: themeMode.text.secondary },
    { varName: 'text-disabled', value: themeMode.text.disabled },

    { varName: 'divider', value: themeMode.divider },
  ])
}
