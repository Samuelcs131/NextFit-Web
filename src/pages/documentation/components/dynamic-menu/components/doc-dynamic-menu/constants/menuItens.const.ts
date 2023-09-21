import { IMenuItemType } from 'src/components/user-interface/dynamic-menu/types/IMenuItemType.type'

export const menuItens: IMenuItemType[] = [
  {
    title: 'dashboard',
    icon: 'bar_chart',
    routeName: 'dashboard',
    level: 1,
  },
  {
    title: 'activities',
    icon: 'bolt',
    routeName: 'activities',
    level: 1,
  },
  {
    title: 'profile',
    icon: 'person',
    routeName: 'profile',
    level: 1,
  },
  {
    title: 'settings',
    icon: 'settings',
    level: 1,
    routeName: 'settings',
  },
  {
    title: 'documentation',
    level: 1,
    icon: 'description',
    children: [
      {
        title: 'overview',
        icon: '',
        routeName: 'overview',
        level: 2,
      },
      {
        title: 'buttons',
        icon: '',
        routeName: 'buttons',
        level: 2,
      },
      {
        title: 'colors',
        icon: '',
        routeName: 'colors',
        level: 2,
      },
      {
        title: 'treeSelect',
        icon: '',
        routeName: 'treeSelect',
        level: 2,
      },
      {
        title: 'dynamicMenu',
        icon: '',
        routeName: 'dynamicMenu',
        level: 2,
      },
    ],
  },
]
