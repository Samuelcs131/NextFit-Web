import { RouteRecordRaw } from 'vue-router'

export const profileRouter: RouteRecordRaw = {
  path: 'profile',
  name: 'profile',
  component: () => import('pages/profile/ProfileMain.vue'),
  meta: { requiresAuth: true }
}
