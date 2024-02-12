import { RouteRecordRaw } from 'vue-router'

export const forgotPasswordRouter: RouteRecordRaw = {
  path: '/forgotPassword',
  name: 'forgotPassword',
  component: () => import('pages/forgot-password/ForgotPassword.vue'),
  meta: { requiresWithoutAuth: true },
}
