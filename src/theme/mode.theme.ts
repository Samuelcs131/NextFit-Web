import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'
import { IThemeMode } from './types/IThemeMode.type'
import { greyScale } from './greyScale.theme'

export const themeMode: IThemeMode = {
  [ThemeTemplates.dark]: {
    background: {
      constrastText: '#fff',
      caption: '#637381',
      default: '#161c24',
      paper: '#212B36',
      neutral: 'rgba(145, 158, 171, 0.16)',
      shadow:
        'rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#919EAB',
      disabled: '#637381',
    },
    common: '#FFFFFF',
    divider: 'rgba(145, 158, 171, 0.24)',
  },
  [ThemeTemplates.light]: {
    background: {
      constrastText: '#212b36',
      caption: '#919eab',
      // default: '#FFFFFF',
      default: '#F9FAFB',
      neutral: greyScale.G200.main,
      paper: '#FFFFFF',
      shadow:
        'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    },
    text: {
      primary: '#212B36',
      secondary: '#637381',
      disabled: '#919EAB',
    },
    common: '#000000',
    divider: 'rgba(145, 158, 171, 0.24)',
  },
}
