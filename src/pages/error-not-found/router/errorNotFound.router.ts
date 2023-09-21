import { RouteRecordRaw } from 'vue-router'

export const errorNotFoundRouterName = 'errorNotFound'

export const errorNotFoundRouter: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  name: errorNotFoundRouterName,
  component: () => import('pages/error-not-found/ErrorNotFound.vue'),
}
