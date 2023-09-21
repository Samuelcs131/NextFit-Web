import { useGlobalSettings } from 'src/stores/global-settings/globalSettings.store'
import { themeColors } from 'src/theme/colors.theme'
import { themeMode } from 'src/theme/mode.theme'

interface IGreyScale {
  name: string
  color: string
}

export function useDesignSystem() {
  const { purple, green, blue, success, orange, red } = themeColors
  const { storage } = useGlobalSettings()
  const { background, divider, common, text } = themeMode[storage.themeMode]

  const principal = [purple, green]
  const colorsAlert = [blue, success, orange, red]
  const scaleGrey: IGreyScale[] = []
  const colorsText = [
    { name: 'primary', color: text.primary },
    { name: 'secondary', color: text.secondary },
    { name: 'disabled', color: text.disabled },
  ]

  const backgroundTheme = [
    {
      name: 'default',
      color: background.default,
    },
    {
      name: 'paper',
      color: background.paper,
    },
    {
      name: 'neutral',
      color: background.neutral,
    },
    {
      name: 'divider',
      color: divider,
    },
    {
      name: 'common',
      color: common,
    },
  ]

  const textStyle = [
    { name: 'subtitle1', type: 'subtitle1' },
    { name: 'subtitle2', type: 'subtitle2' },
    { name: 'body1', type: 'body1' },
    { name: 'body2', type: 'body2' },
    { name: 'caption', type: 'caption' },
    { name: 'overline', type: 'overline' },
  ]
  
  return {
    principal,
    colorsAlert,
    scaleGrey,
    backgroundTheme,
    textStyle,
    colorsText,
  }
}
