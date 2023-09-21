import { RouteRecordRaw } from 'vue-router'

export const loginRouterName = 'login'

export const loginRouter: RouteRecordRaw = {
  path: `/${loginRouterName}`,
  name: loginRouterName,
  component: () => import('pages/login/LoginPage.vue'),
  meta: { requiresWithoutAuth: true }
}
