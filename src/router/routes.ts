import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/app',
    component: () => import('src/layouts/user/UserLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/user/dashboard/DashboardMain.vue') },
      { path: 'settings', component: () => import('pages/user/settings/SettingsUser.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login/LoginMain.vue')
  },

  // NOT FOUND
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
