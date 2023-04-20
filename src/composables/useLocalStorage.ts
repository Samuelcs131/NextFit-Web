import { ref } from 'vue'
import { LocalStorage } from 'quasar'
import { languages } from 'src/i18n/enums/languages.enum'
import { themeColors } from 'src/theme/colors.theme'
import { themeMode } from 'src/theme/mode.theme'
import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'

interface IStorage {
  themeMode: ThemeTemplates
  themeColors: string
  stretch: boolean
  language: string
}

const store: IStorage = LocalStorage.getAll()

const initializeStorage: IStorage = {
  themeMode: store.themeMode || Object.keys(themeMode)[0],
  themeColors: store.themeColors || Object.keys(themeColors)[0],
  stretch: store.stretch || false,
  language: store.language || languages.ptBR,
}

const storage = ref(initializeStorage)

export function useLocalStorage() {

  function setLocalStorage<T>(key: string, value: T) {
    LocalStorage.set(key, value)
  }

  function getLocalStorage(key: string) {
    LocalStorage.getItem(key)
  }

  function initialStorage() {
    /* setLocalStorage
    storage.value = {
      themeMode: Object.keys(themeMode)[0],
      themeColors: store.themeColors || Object.keys(themeColors)[0],
      stretch: false,
      language: languages.ptBR,
    } */
  }

  return { storage, initialStorage, setLocalStorage, getLocalStorage }
}
