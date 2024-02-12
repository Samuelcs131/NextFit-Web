import { loginRouter } from 'src/pages/login/router/login.router'
import { registerRouter } from 'src/pages/register/router/register.router'
import { errorNotFoundRouter } from 'src/pages/error-not-found/router/errorNotFound.router'
import { dashboardRouter } from 'pages/dashboard/router/dashboard.router'
import { activitiesRouter } from 'src/pages/activities/router/activities.router'
import { profileRouter } from 'src/pages/profile/router/profile.router'
import { settingsRouter } from 'src/pages/settings/router/settings.router'
import { forgotPasswordRouter } from 'src/pages/forgot-password/router/forgotPassword.router'
import { exerciseRouter } from 'src/pages/exercise/router/exercise.router'
import { trainingRouter } from 'src/pages/training/router/training.router'
import { bodyMeasurementRouter } from 'src/pages/body-measurement/router/bodyMeasurement.router'

export const routers = {
  app: {
    path: '/app',
    redirect: `app/${dashboardRouter.path}`,
    component: () => import('src/layouts/user/LayoutMain.vue'),
    children: [
      dashboardRouter,
      activitiesRouter,
      profileRouter,
      settingsRouter,
      exerciseRouter,
      trainingRouter,
      bodyMeasurementRouter,
    ],
  },
  index: {
    path: '',
    redirect: '/app',
  },
  login: loginRouter,
  notFound: errorNotFoundRouter,
  register: registerRouter,
  forgotPassword: forgotPasswordRouter,
}
