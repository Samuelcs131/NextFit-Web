import { route } from 'quasar/wrappers'
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import routes from './routes'
import { useUserAuth } from 'src/composables/useUserAuth'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import container from 'src/dependency-injection/inversify.config'
import { IUserRepository } from 'src/domain/application/repositories/user/contract/IUserRepository.contract'
import { repositoriesIdentifier } from 'src/constants/repositories/repositoriesIdentifier.const'
import { fakePromise } from 'src/utils/fakePromise.util'
import { useUserStore } from 'src/stores/UserStore'
import { refreshError } from 'src/domain/application/repositories/user/errors/refresh.error'
import { userLayoutLoader } from 'src/layouts/user/constants/userLayoutLoaders.const'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
import { useCookies } from 'src/composables/useCookies'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'hash'
    ? createWebHistory
    : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  function handleNotAuthorized(next: NavigationGuardNext): void {
    next('/')
    alert('Cê não pode acessar essa página boy!')
  }

  Router.beforeEach((to, from, next) => {
    const { getCookie } = useCookies()
    const tokenAccess = getCookie(tokenAccessKey)

    const fromMatched = (requires: string) =>
      from.matched.some((record) => record.meta[requires])
    const toMatched = (requires: string) =>
      to.matched.some((record) => record.meta[requires])

    const fromRequiresAuth = fromMatched('requiresAuth')
    const toRequiresAuth = toMatched('requiresAuth')
    const fromRequiresWithoutAuth = toMatched('requiresWithoutAuth')

    if (fromRequiresWithoutAuth && tokenAccess)
      return next({ name: 'dashboard' })

    if (toRequiresAuth) {
      if (!tokenAccess) return next('/login')
      if (!fromRequiresAuth) handleIsLogginInRoute(to, next)

      next()
    } else {
      next()
    }
  })

  function notIsLoggedIn(
    to: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const [, app] = to.fullPath?.split('/')
    return app === 'app' && next({ name: 'login' })
  }

  function handleIsLogginInRoute(
    to: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    // debugger
    // const { getCookie } = useCookies()

    ActionDispatcher.dispatch({
      callback: async () => {
        // const tokenAccess = getCookie(tokenAccessKey)

        const userRepository = container.get<IUserRepository>(
          repositoriesIdentifier.user
        )

        // if (!tokenAccess) return notIsLoggedIn(to, next)

        const userStore = useUserStore()
        await fakePromise(1000)
        const user = await userRepository.refresh()
        userStore.setUser(user)
        if (!user) notIsLoggedIn(to, next)
      },
      errorCallback() {
        notIsLoggedIn(to, next)
      },
      errorMessageTitle: 'Erro ao realizar',
      errorMessage: 'Erro ao fazer alguma coisa',
      errorException: [new refreshError()],
      showAPIError: true,
      loaders: [userLayoutLoader.isLoggedIn],
    })
  }

  return Router
})
