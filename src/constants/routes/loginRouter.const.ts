import { RouteRecordRaw } from 'vue-router'

export const loginRouter: RouteRecordRaw = {
  path: '/login',
  name: 'loginMain',
  component: () => import('pages/login/LoginMain.vue'),
}
