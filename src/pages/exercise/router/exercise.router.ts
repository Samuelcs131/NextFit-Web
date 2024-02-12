import { RouteRecordRaw } from 'vue-router'

export const exerciseRouter: RouteRecordRaw = {
  meta: { requiresAuth: true },
  path: 'exercise',
  children: [
    {
      path: '',
      name: 'exercise',
      component: () => import('pages/exercise/ExercisePage.vue'),
    },
    {
      path: 'edit/:id?',
      name: 'editExercise',
      component: () =>
        import('pages/exercise/components/EditExercise.vue'),
    },
  ],
}
