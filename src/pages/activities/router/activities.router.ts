import { RouteRecordRaw } from 'vue-router'

export const acitivitiesRouterName = 'activities'

export const acitivitiesRouter: RouteRecordRaw = {
  path: acitivitiesRouterName,
  name: acitivitiesRouterName,
  component: () => import('pages/activities/ActivitiesPage.vue'),
  meta: { requiresAuth: true }
}
