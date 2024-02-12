import { IMenuItemType } from '../../../components/user-interface/dynamic-menu/types/IMenuItemType.type'


export const menuOptions: IMenuItemType[] = [
  {
    title: 'dashboard',
    icon: 'bar_chart',
    routeName: 'dashboard',
    level: 1,
  },
  {
    title: 'activities',
    icon: 'bolt',
    routeName: 'activity',
    level: 1,
  },
  {
    title: 'trainings',
    icon: 'timer',
    routeName: 'training',
    level: 1,
  },
  {
    title: 'exercises',
    icon: 'fitness_center',
    routeName: 'exercise',
    level: 1,
  },
  {
    title: 'bodyMeasurement',
    icon: 'straighten',
    routeName: 'bodyMeasurement',
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
]
