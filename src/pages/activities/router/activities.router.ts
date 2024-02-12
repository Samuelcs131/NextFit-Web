import { RouteRecordRaw } from 'vue-router'

export const activitiesRouter: RouteRecordRaw = {
  path: 'activities',
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      name: 'activity',
      component: () => import('pages/activities/ActivitiesPage.vue'),
    },
    {
      path: 'edit/:id?',
      name: 'editActivity',
      component: () =>
        import('pages/activities/components/EditActivity.vue'),
    },
  ],
}
