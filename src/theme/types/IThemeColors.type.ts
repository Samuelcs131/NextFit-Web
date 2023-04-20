export interface IThemeColorProps {
  name: string
  main: string
  constrastText: string
  shadow: string
  darker: string
  dark: string
  light: string
  lighter: string
}

export interface IThemeColors {
  [key: string]: IThemeColorProps
}
