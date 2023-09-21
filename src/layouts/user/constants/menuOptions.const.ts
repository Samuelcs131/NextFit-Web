import { IMenuItemType } from '../../../components/user-interface/dynamic-menu/types/IMenuItemType.type'

export const menuOptions: IMenuItemType[] = [
  {
    title: 'navigation.dashboard',
    icon: 'bar_chart',
    routeName: 'dashboard',
    level: 1,
  },
  {
    title: 'placeholders.activities',
    icon: 'bolt',
    routeName: 'activities',
    level: 1,
  },
  {
    title: 'navigation.profile',
    icon: 'person',
    routeName: 'profile',
    level: 1,
  },
  {
    title: 'navigation.settings',
    icon: 'settings',
    level: 1,
    routeName: 'settings',
  },
  {
    title: 'placeholders.documentation',
    level: 1,
    icon: 'description',
    children: [
      {
        title: 'interface.overview',
        icon: '',
        routeName: 'overview',
        level: 2,
      },
      {
        title: 'buttons.buttons',
        icon: '',
        routeName: 'buttons',
        level: 2,
      },
      {
        title: 'colors.colors',
        icon: '',
        routeName: 'colors',
        level: 2,
      },
      {
        title: 'placeholders.treeSelect',
        icon: '',
        routeName: 'treeSelect',
        level: 2,
      },
      {
        title: 'interface.dynamicMenu',
        icon: '',
        routeName: 'dynamicMenu',
        level: 2,
      },
    ],
  },
]
