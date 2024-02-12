import { RouteRecordRaw } from 'vue-router'

export const loginRouter: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('pages/login/LoginPage.vue'),
  meta: { requiresWithoutAuth: true }
}
