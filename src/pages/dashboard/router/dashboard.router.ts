import { RouteRecordRaw } from 'vue-router'

export const dashboardRouterName = 'dashboard'

export const dashboardRouter: RouteRecordRaw = {
  path: dashboardRouterName,
  name: dashboardRouterName,
  component: () => import('pages/dashboard/DashboardMain.vue'),
  meta: { requiresAuth: true }
}
