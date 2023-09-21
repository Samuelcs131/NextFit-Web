import { RouteRecordRaw } from 'vue-router'

export const profileRouterName = 'profile'

export const profileRouter: RouteRecordRaw = {
  path: profileRouterName,
  name: profileRouterName,
  component: () => import('pages/profile/ProfileMain.vue'),
  meta: { requiresAuth: true }
}
