import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from 'src/stores/UserStore'
import { useCookies } from './useCookies'
import container from 'src/dependency-injection/inversify.config'
import { repositoriesIdentifier } from 'src/constants/repositories/repositoriesIdentifier.const'
import { IUserRepository } from 'src/domain/application/repositories/user/contract/IUserRepository.contract'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { LoginError } from 'src/domain/application/repositories/user/errors/login.error'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
import { refreshError } from 'src/domain/application/repositories/user/errors/refresh.error'
import { fakePromise } from 'src/utils/fakePromise.util' 

export function useUserAuth() {
  const { setCookie, getCookie, removeCookie } = useCookies()
  const userStore = useUserStore()
  const { push } = useRouter()
  const route = useRoute()

  async function login(email: string, password: string, loaders?: string[]) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const userRepository = container.get<IUserRepository>(
          repositoriesIdentifier.user
        )

        const { user, token } = await userRepository.login(email, password)
        userStore.setUser(user)
        setCookie(tokenAccessKey, token, {
          secure: true,
          expires: process.env.ACCESS_TOKEN_DURATION,
        })
      },
      successCallback() {
        push({ path: '/app/dashboard' })
      },
      errorMessageTitle: 'Erro ao realizar',
      errorMessage: 'Erro ao fazer alguma coisa',
      errorException: [new LoginError()],
      showAPIError: true,
      loaders,
    })
  }

  async function isLoggedIn(loaders?: string[]) {
    const tokenAccess = getCookie(tokenAccessKey)

    if (!tokenAccess) return logout()

    ActionDispatcher.dispatch({
      callback: async () => {
        const userRepository = container.get<IUserRepository>(
          repositoriesIdentifier.user
        )

        await fakePromise(1000)
        const user = await userRepository.refresh()
        userStore.setUser(user)
        if (!user) logout()
      },
      errorCallback() {
        logout()
      },
      errorMessageTitle: 'Erro ao realizar',
      errorMessage: 'Erro ao fazer alguma coisa',
      errorException: [new refreshError()],
      showAPIError: true,
      loaders,
    })
  }

  async function logout() {
    removeCookie(tokenAccessKey)
    userStore.resetUser()
    push({ path: '/login' })
  }

  return {
    login,
    isLoggedIn,
    logout,
  }
}
