import { RouteRecordRaw } from 'vue-router'

export const appRouter: RouteRecordRaw = {
  path: '/app',
  component: () => import('src/layouts/user/LayoutMain.vue'),
  children: [
    { path: '', redirect: 'app/dashboard' },
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('pages/user/dashboard/DashboardMain.vue'),
    },
    {
      path: 'settings',
      name: 'settings',
      component: () => import('pages/user/settings/SettingsUser.vue'),
    },
    {
      path: 'settings/designSystem',
      name: 'designSystem',
      component: () => import('pages/design-system/DesignSystem.vue'),
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('pages/user/profile/ProfileMain.vue'),
    },
    {
      path: 'activities',
      name: 'activities',
      component: () => import('pages/user/activities/ActivitiesMain.vue'),
    },
  ],
}
