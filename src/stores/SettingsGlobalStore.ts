import { defineStore } from 'pinia'
import { LocalStorage, setCssVar } from 'quasar'
import { presets, themeMode } from 'src/theme/theme'
import { useI18n } from 'vue-i18n'

interface IState {
  themeMode: string
  preset: string
  stretch: boolean
  language: string
}

interface IThemeMode {
  light: boolean;
  dark: boolean;
}

export const useSettingsGlobalStore = defineStore('settingsGlobal', {
  state: () => ({
    themeMode: LocalStorage.getItem('themeMode') || Object.keys(themeMode)[0],
    preset: LocalStorage.getItem('preset') || Object.keys(presets)[0],
    stretch: LocalStorage.getItem('stretch') || false,
    language: LocalStorage.getItem('language') || 'pt-BR'
  } as IState),
  getters: {
    currentThemeMode () {
      const themesModes: IThemeMode = {
        light: this.themeMode === 'light',
        dark: this.themeMode === 'dark'
      }
      return themesModes
    },
    currentePreset () {
      return { }
    }
  },
  actions: {
    defineStretch () {
      setCssVar('stretch-max-width', this.stretch ? 'none' : '1400px')
    },
    changeStretch (stretch: boolean) {
      LocalStorage.set('stretch', stretch)
      this.stretch = stretch
      this.defineStretch()
    },

    defineThemeMode () {
      setCssVar('background', themeMode[this.themeMode].background.color)
      setCssVar('background-text', themeMode[this.themeMode].background.constrastText)
      setCssVar('background-caption', themeMode[this.themeMode].background.caption)

      setCssVar('background-page', themeMode[this.themeMode].backgroundPage.color)
    },
    changeThemeMode (mode: 'light' | 'dark') {
      LocalStorage.set('themeMode', mode)
      this.themeMode = mode
      this.defineThemeMode()
    },

    definePreset () {
      setCssVar('primary', presets[this.preset].main)
      setCssVar('primary-text', presets[this.preset].constrastText)
    },
    changePreset (preset: string) {
      LocalStorage.set('preset', preset)
      this.preset = preset
      this.definePreset()
    },

    changeLanguage (language: string) {
      LocalStorage.set('language', language)
    },

    initializationSettingsGlobal () {
      this.defineThemeMode()
      this.defineStretch()
      this.definePreset()
    }
  }
})
