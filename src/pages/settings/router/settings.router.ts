import { RouteRecordRaw } from 'vue-router'

export const settingsRouter: RouteRecordRaw = {
  path: 'settings',
  name: 'settings',
  component: () => import('pages/settings/SettingsPage.vue'),
  meta: { requiresAuth: true },
}
