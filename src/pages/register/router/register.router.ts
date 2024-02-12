import { RouteRecordRaw } from 'vue-router'

export const registerRouter: RouteRecordRaw = {
  path: '/register',
  name: 'register',
  component: () => import('pages/register/RegisterMain.vue'),
}
