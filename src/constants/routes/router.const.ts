import { acitivitiesRouterName } from 'src/pages/activities/router/activities.router'
import { dashboardRouterName } from 'src/pages/dashboard/router/dashboard.router'
import { documentationRouterName } from 'src/pages/documentation/router/documentation.router'
import { errorNotFoundRouterName } from 'src/pages/error-not-found/router/errorNotFound.router'
import { profileRouterName } from 'src/pages/profile/router/profile.router'
import { settingsRouterName } from 'src/pages/settings/router/settings.router'
import { loginRouterName } from 'src/pages/login/router/login.router'
import { registerRouterName } from 'src/pages/register/router/register.router'
import { forgotPasswordName } from 'src/pages/forgot-password/router/forgotPassword.router'

interface IRouterTitle {
  [key: string]: string
}

export const routerTitle: IRouterTitle = {
  [settingsRouterName]: 'navigation.settings',
  [dashboardRouterName]: 'navigation.dashboard',
  [profileRouterName]: 'navigation.profile',
  [acitivitiesRouterName]: 'placeholders.activities',
  [errorNotFoundRouterName]: 'interface.pageNotFound',
  [documentationRouterName.overview]: 'interface.overview',
  [documentationRouterName.treeSelect]: 'interface.treeSelect',
  [documentationRouterName.colors]: 'colors.colors',
  [documentationRouterName.shadows]: 'colors.shadows',
  [documentationRouterName.buttons]: 'buttons.buttons',
  [documentationRouterName.dynamicMenu]: 'interface.buttons',
  [loginRouterName]: 'interface.logIn',
  [registerRouterName]: 'interface.register',
  [forgotPasswordName]: 'interface.recoverPassword'
}
