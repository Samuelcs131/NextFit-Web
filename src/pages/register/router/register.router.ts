import { RouteRecordRaw } from 'vue-router'

export const registerRouterName = 'register'

export const registerRouter: RouteRecordRaw = {
  path: `/${registerRouterName}`,
  name: registerRouterName,
  component: () => import('pages/register/RegisterMain.vue'),
}
