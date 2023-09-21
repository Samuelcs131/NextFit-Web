import { RouteRecordRaw } from 'vue-router'

export const forgotPasswordName = 'forgotPassword'

export const forgotPasswordRouter: RouteRecordRaw = {
  path: `/${forgotPasswordName}`,
  name: 'forgotPassword',
  component: () => import('pages/forgot-password/ForgotPassword.vue'),
  meta: { requiresWithoutAuth: true }
}
