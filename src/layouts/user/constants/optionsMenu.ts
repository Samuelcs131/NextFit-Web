import { useI18n } from 'src/boot/i18n'

const { t } = useI18n()

export const optionsMenu = [
  {
    title: t('ui.dashboard'),
    icon: 'bar_chart',
    link: '/app/dashboard'
  },
  {
    title: t('ui.activities'),
    icon: 'bolt',
    link: '/app/ativities'
  },
  {
    title: t('ui.profile'),
    icon: 'person',
    link: '/app/profile'
  },
  {
    title: t('ui.settings'),
    icon: 'settings',
    link: '/app/settings'
  }
]
