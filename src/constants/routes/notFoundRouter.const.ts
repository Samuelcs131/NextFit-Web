import { RouteRecordRaw } from 'vue-router'

export const notFoundRouter: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  name: 'errorNotFound',
  component: () => import('pages/ErrorNotFound.vue'),
}
