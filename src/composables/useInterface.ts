import { storageKeys } from 'src/enums/storage/storage.enum'
import { useLocalStorage } from './useLocalStorage'
import { Dark, setCssVar } from 'quasar'
import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'
import { themeMode } from 'src/theme/mode.theme'
import { themeColors } from 'src/theme/colors.theme'
import { ThemeColors } from 'src/theme/enums/colors.enum'
import { Languages } from 'src/i18n/enums/languages.enum'
import { defaultTheme } from 'src/constants/theme/defaultTheme.const'
import { setCssVariables } from 'src/utils/presets-variables/setCssVariables.utils'
import { greyScale } from 'src/theme/greyScale.theme'
import { greyScaleOptions } from 'src/theme/enums/greyScaleOptions.enum'
import { rgb } from 'src/utils/colors/rgb.utils'
import { presetsColors } from 'src/theme/presetsColors.theme'
import { presetsColorsOptions } from 'src/theme/enums/presetsColorsOptions.enum'
import { IColorPresets } from 'src/theme/types/IThemeColors.type'
import { IThemeModeProps } from 'src/theme/types/IThemeMode.type'
import { lightenColor } from 'src/utils/colors/lighten.utils'
import useQuasarLangComponents from './useQuasarLangComponents'

interface IThemeStorage {
  themeMode?: ThemeTemplates
  themeColors?: ThemeColors
  stretch?: boolean
  language?: Languages
}

export function useInterface() {
  const { setLocalStorage, getAll } = useLocalStorage()

  function setStretch(stretch: boolean) {
    const currentStretch = stretch ? '1200px' : 'none'
    setLocalStorage(storageKeys.stretch, stretch)
    setCssVar('stretch-max-width', currentStretch)
  }

  function setThemeMode(mode: ThemeTemplates) {
    setLocalStorage(storageKeys.themeMode, mode)
    Dark.set(mode === ThemeTemplates.dark)
    setThemeModeVariables(themeMode[mode])
  }

  function setThemeColors(color: ThemeColors) {
    setLocalStorage(storageKeys.themeColors, color)
    setThemeColorsVariables(themeColors[color])
  }

  function setLanguage(language: Languages) {
    setLocalStorage(storageKeys.language, language)
  }

  function setThemeColorsVariables(themeColors: IColorPresets) {
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

  function setThemeModeVariables(themeMode: IThemeModeProps) {
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

  function setGreyScaleVariables() {
    for (const property in greyScale) {
      const color = greyScale[property as greyScaleOptions]

      setCssVariables([
        { varName: property, value: color.main },
        { varName: `${property}-rgb`, value: rgb(color.main) },
        { varName: `${property}-constrast-text`, value: color.constrastText },
      ])
    }
  }

  function setPresetsColorsVariables() {
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

  function loadInterface() {
    const { setupLangComponents } = useQuasarLangComponents()

    const theme = getAll<IThemeStorage>()
    if (theme.stretch) setStretch(theme.stretch)
    else setStretch(defaultTheme.stretch)
    if (theme.language) setLanguage(theme.language)
    else setLanguage(defaultTheme.language)
    if (theme.themeColors) setThemeColors(theme.themeColors)
    else setThemeColors(defaultTheme.themeColors)
    if (theme.themeMode) setThemeMode(theme.themeMode)
    else setThemeMode(defaultTheme.themeMode)

    setPresetsColorsVariables()
    setGreyScaleVariables()
    setupLangComponents()
  }

  return {
    setStretch,
    setThemeMode,
    setThemeColors,
    setLanguage,
    loadInterface,
  }
}
