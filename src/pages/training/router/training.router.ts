import { RouteRecordRaw } from 'vue-router'

export const trainingRouter: RouteRecordRaw = {
  path: 'training',
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      name: 'training',
      component: () => import('pages/training/TrainingPage.vue'),
    },
    {
      path: 'edit/:id?',
      name: 'editTraining',
      component: () =>
        import('pages/training/components/EditTraining.vue'),
    },
  ],
}
