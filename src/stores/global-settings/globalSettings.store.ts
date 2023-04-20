import { defineStore } from 'pinia'
import { setCssVar, Dark } from 'quasar'
import { useLocalStorage } from 'src/composables/useLocalStorage'
import { storageKeys } from 'src/enums/storage/storage.enum'
import { languages } from 'src/i18n/enums/languages.enum'
import { themeColors } from 'src/theme/colors.theme'
import { themeMode } from 'src/theme/mode.theme'
import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'
import { setThemeModeVariables } from './presets-variables/setThemeModeVariables'
import { setThemeColorsVariables } from './presets-variables/setThemeColorsVariables'
import { useVisualComponents } from 'src/composables/useVisualComponents'

export const useGlobalSettings = defineStore('settingsGloball', () => {
  const { storage, setLocalStorage, initialStorage } = useLocalStorage()
  const { setVisualInput } = useVisualComponents()

  function setStretch(stretch?: boolean) {
    if (stretch !== undefined) setLocalStorage(storageKeys.stretch, stretch)
    setCssVar('stretch-max-width', storage.value.stretch ? 'none' : '1200px')
  }

  function setThemeMode(mode?: `${ThemeTemplates}`) {
    if (mode) setLocalStorage(storageKeys.themeMode, mode)


    Dark.set(storage.value.themeMode === ThemeTemplates.dark)

    setThemeModeVariables(themeMode[storage.value.themeMode])
    setVisualInput(storage.value.themeMode)
  }

  function setThemeColors(color?: string) {
    if (color) setLocalStorage(storageKeys.themeColors, color)

    setThemeColorsVariables(themeColors[storage.value.themeColors])
  }

  function setLanguage(language: `${languages}`) {
    setLocalStorage(storageKeys.language, language)
  }

  function loadGlobalSettings() {
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
