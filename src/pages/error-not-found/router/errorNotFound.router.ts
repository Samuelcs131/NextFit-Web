import { RouteRecordRaw } from 'vue-router'

export const errorNotFoundRouter: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  name: 'errorNotFound',
  component: () => import('pages/error-not-found/ErrorNotFound.vue'),
}
