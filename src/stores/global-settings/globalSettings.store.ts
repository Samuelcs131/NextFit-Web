import { defineStore } from 'pinia'
import { setCssVar, Dark } from 'quasar'
import { useLocalStorage } from 'src/composables/useLocalStorage'
import { storageKeys } from 'src/enums/storage/storage.enum'
import { Languages } from 'src/i18n/enums/languages.enum'
import { themeColors } from 'src/theme/colors.theme'
import { themeMode } from 'src/theme/mode.theme'
import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'
import { setThemeModeVariables } from './presets-variables/setThemeModeVariables'
import { setThemeColorsVariables } from './presets-variables/setThemeColorsVariables'
import { setPresetsColorsVariables } from './presets-variables/setPresetsColorsVariables'
import { setGreyScaleVariables } from './presets-variables/setGreyScaleVariables'

export const useGlobalSettings = defineStore('settingsGlobal', () => {
  const { storage, setLocalStorage, initialStorage } = useLocalStorage()

  function setStretch(stretch?: boolean) {
    if (stretch !== undefined) {
      setLocalStorage(storageKeys.stretch, stretch)
      storage.value.stretch = stretch
    }
    setCssVar('stretch-max-width', storage.value.stretch ? 'none' : '1200px')
  }

  function setThemeMode(mode?: `${ThemeTemplates}`) {
    if (mode) {
      setLocalStorage(storageKeys.themeMode, mode)
      storage.value.themeMode = mode as ThemeTemplates
    }

    Dark.set(storage.value.themeMode === ThemeTemplates.dark)
    setThemeModeVariables(themeMode[storage.value.themeMode])
  }

  function setThemeColors(color?: string) {
    if (color) {
      setLocalStorage(storageKeys.themeColors, color)
      storage.value.themeColors = color
    }

    setThemeColorsVariables(themeColors[storage.value.themeColors])
  }

  function setLanguage(language: `${Languages}`) {
    setLocalStorage(storageKeys.language, language)
    storage.value.language = language
  }

  function loadGlobalSettings() {
    setGreyScaleVariables()
    setPresetsColorsVariables()
    initialStorage()
    setStretch()
    setThemeMode()
    setThemeColors()
  }

  return {
    storage,
    loadGlobalSettings,
    setLanguage,
    setThemeMode,
    setStretch,
    setThemeColors,
  }
})
