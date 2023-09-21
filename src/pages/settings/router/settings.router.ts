import { RouteRecordRaw } from 'vue-router'

export const settingsRouterName = 'settings'

export const settingsRouter: RouteRecordRaw = {
  path: settingsRouterName,
  name: settingsRouterName,
  component: () => import('pages/settings/SettingsUser.vue'),
  meta: { requiresAuth: true },
}
