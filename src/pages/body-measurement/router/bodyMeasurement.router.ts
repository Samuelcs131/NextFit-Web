import { RouteRecordRaw } from 'vue-router'

export const bodyMeasurementRouter: RouteRecordRaw = {
  meta: { requiresAuth: true },
  path: 'bodyMeasurement',
  children: [
    {
      path: '',
      name: 'bodyMeasurement',
      component: () => import('pages/body-measurement/BodyMeasurement.vue'),
    },
    {
      path: 'edit/:id?',
      name: 'editBodyMeasurement',
      component: () =>
        import('pages/body-measurement/components/EditBodyMeasurement.vue'),
    },
  ],
}
