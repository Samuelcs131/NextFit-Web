import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'

export interface IThemeModeProps {
  background: {
    constrastText: string
    caption: string
    default: string
    paper: string
    neutral: string
    shadow: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  divider: string
  common: string
}

export interface IThemeMode {
  [ThemeTemplates.dark]: IThemeModeProps
  [ThemeTemplates.light]: IThemeModeProps
}
