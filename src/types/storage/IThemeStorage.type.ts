import { Languages } from 'src/i18n/enums/languages.enum'
import { ThemeColors } from 'src/theme/enums/colors.enum'
import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'

export interface IThemeStorage {
  themeMode?: ThemeTemplates
  themeColors?: ThemeColors
  stretch?: boolean
  language?: Languages
}
